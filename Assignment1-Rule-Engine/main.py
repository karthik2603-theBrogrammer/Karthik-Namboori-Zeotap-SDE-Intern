from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from sqlalchemy.dialects.postgresql import JSON
from datetime import datetime
import json


from engine_utils.rule_engine_utils import (
    create_rule,
    combine_rules,
    evaluate_rule,
    get_json_from_ast,
    convert_double_to_single_quotes
)

# Initialize Flask app and SQLAlchemy
app = Flask(__name__)
CORS(app)
CORS(app, resources={r"/*": {"origins": ["*"]}})


# Connect to the PostgreSQL container running in Docker
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgres@localhost:5432/postgres'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Rule model for storing rules in the database
class Rule(db.Model):
    __tablename__ = 'rules'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    rule_text = db.Column(db.Text, nullable=False)
    ast_json = db.Column(JSON, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

# RuleEngine class to manage rule operations
class RuleEngine:
    def __init__(self):
        self.session = db.session

    def add_rule(self, rule_text):
        # Create the AST from the rule string
        ast = create_rule(rule_text)
        rule_name = ast.id
        ast_json = get_json_from_ast(ast)

        # Add the rule to the database
        new_rule = Rule(name=rule_name, rule_text=rule_text, ast_json=ast_json)
        self.session.add(new_rule)
        self.session.commit()
        return new_rule.id

    def combine_rules(self, rule_ids, use_most_freq_operator_heuristic = None, custom_operator = None, store_combined_rule = False):
        """
            Returns the AST of the combined rules in the form of JSON.
        """
        # Fetch the rules from the database
        rules = []
        for rule_id in rule_ids:
            rule = Rule.query.get(rule_id)
            if not rule:
                raise ValueError(f"Rule with ID {rule_id} not found")
            rules.append(rule.rule_text)

        # Combine the rules into a single AST
        if use_most_freq_operator_heuristic is not None:
            use_most_freq_operator_heuristic = True if use_most_freq_operator_heuristic == 1 else False
            print("use_most_freq_operator_heuristic: ", use_most_freq_operator_heuristic)
        else:
            print("Not using heur")
        if custom_operator is not None:
            print("Custom operator: ", custom_operator)
        combined_ast = combine_rules(rules, use_most_freq_operator_heuristic = use_most_freq_operator_heuristic, custom_operator=custom_operator)
        return get_json_from_ast(combined_ast)

    def evaluate_rule(self, rule_id, data_for_evaluation):
        # Evaluate the provided AST against the data_for_evaluation
        ast = Rule.query.get(rule_id)
        return evaluate_rule(ast, data_for_evaluation)

    def get_rule(self, rule_id):
        # Fetch a rule from the database
        rule = Rule.query.get(rule_id)
        if rule:
            return {
                "id": rule.id,
                "name": rule.name,
                "rule_text": rule.rule_text,
                "ast_json": rule.ast_json,
                "updated_at": rule.updated_at
            }
        return None
    
    def get_all_rules(self):
        rules = Rule.query.all()
        return [
            {
                "id": rule.id,
                "name": rule.name,
                "rule_text": rule.rule_text,
                "ast_json": rule.ast_json,
                "created_at": rule.created_at,
                "updated_at": rule.updated_at,
            }
            for rule in rules
        ]

    def delete_rule(self, rule_id):
        # Delete a rule from the database
        rule = Rule.query.get(rule_id)
        if rule:
            self.session.delete(rule)
            self.session.commit()
            return True
        return False

# Initialize the database tables
with app.app_context():
    db.create_all()

# Initialize the RuleEngine instance
rule_engine = RuleEngine()

# API Routes
@app.route('/rule', methods=['POST'])
def create_rule_endpoint():
    data = request.get_json()
    try:
        rule_text = data.get("rule_text", None)
        if not rule_text:
            raise ValueError(f"Enter a rule.")
        rule_text = convert_double_to_single_quotes(rule_text)
        rule_id = rule_engine.add_rule(rule_text)
        return jsonify({"message": "Rule added", "rule_id": rule_id}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@app.route('/rule/<int:rule_id>', methods=['GET'])
def get_rule(rule_id):
    try:
        rule = Rule.query.get(rule_id)
        if not rule:
            raise ValueError(f"Rule with ID {rule_id} not found")
        rule_data = rule_engine.get_rule(rule_id= rule_id)
        return jsonify({"result": rule_data}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400


@app.route('/rules/combine', methods=['POST'])
def combine_rules_endpoint():
    data = request.get_json()
    try:
        combined_ast = rule_engine.combine_rules(
            data['rule_ids'],
            use_most_freq_operator_heuristic= data.get('use_most_freq_operator_heuristic', None), 
            custom_operator=data.get('custom_operator', None),
            store_combined_rule = data.get('store_combined_rule', False)
            
        )
        return jsonify({"combined_ast": combined_ast}), 200
    except ValueError as e:
        return jsonify({"error": str(e)}), 404

@app.route('/rule/evaluate', methods=['POST'])
def evaluate_rule_endpoint():
    data = request.get_json()
    try:
        rule_id = data['rule_id']
        rule = Rule.query.get(rule_id)
        if not rule:
            raise ValueError(f"Rule with ID {rule_id} not found")
        data_for_evaluation = data['data_for_evaluation']
        result = rule_engine.evaluate_rule(rule_id= rule_id, data_for_evaluation= data_for_evaluation)
        return jsonify({"result": result}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@app.route('/rule/<int:rule_id>', methods=['DELETE'])
def delete_rule(rule_id):
    if rule_engine.delete_rule(rule_id):
        return jsonify({"result": "Rule deleted"}), 200
    return jsonify({"error": "Rule not found"}), 404

@app.route('/all-rules', methods = ['GET'])
def all_rules():
    try:
        data = rule_engine.get_all_rules()
        return jsonify({"result": data}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


"""
- Requirement is completed: create_rule(), combine_rules(), evaluate_rules()
Have to make more APIs for modification of the node.
1. change_operand
2. change_operator for operator node and condition node.

"""
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5555, debug=True)