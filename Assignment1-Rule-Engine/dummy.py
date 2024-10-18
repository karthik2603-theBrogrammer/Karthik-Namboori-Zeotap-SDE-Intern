from utils import create_rule, print_ast, evaluate_rule, print_ast_json, get_ast_from_json, combine_rules


# rule_string1 = "((age > 30 AND department = 'Sales') OR (age < 25 AND department = 'Marketing')) AND (salary > 50000 OR experience > 5)"
# ast1 = create_rule(rule_string1)
# # print("AST for Rule 1:")
# # print_ast(ast1)


# rule_string2 = "((age > 30 AND department = 'Sales')) OR (salary > 20000 OR experience > 5)"
# ast2 = create_rule(rule_string2)
# print("\nAST for Rule 2:")
# print_ast(ast2)


# rule_string3 = "(age > 30 AND department = 'Sales') OR (salary > 20000 OR experience > 5) AND (age < 25 AND department = 'Marketing')"
# ast3 = create_rule(rule_string3)
# print("\nAST for Rule 3:")
# print_ast(ast3)

# rule_string4 = "(age > 30 AND department = 'Sales')"


# # Sample user data
# user_data = {
#     "age": 3,
#     "department": "Sales",
#     "salary": 60000,
#     "experience": 3
# }

# # # Evaluate Rule 1
# # # result1 = evaluate_rule(ast1, user_data)
# # # print(f"\nUser eligibility for Rule 1: {result1}")

# # # Evaluate Rule 2
# # result2 = evaluate_rule(ast2, user_data)
# # print(f"User eligibility for Rule 2: {result2}")


# # # Sample rule string
# # rule_string = "((age > 30 AND department = 'Sales') OR (age < 25 AND department = 'Marketing')) AND (salary > 50000 OR experience > 5)"

# # # Create the AST
# # ast = create_rule(rule_string)

# # # Print the AST in JSON format
# # print("AST in JSON format:")
# # print_ast_json(ast)


# combined_ast = combine_rules([ rule_string2, rule_string4], use_most_freq_operator_heuristic=True)
# print("Combined AST:")
# print_ast(combined_ast)
# print_ast_json(combined_ast)

rule_string1 = "(age > 30 AND department = 'Sales')"
rule_string2 = "(age > 30 AND department = 'Sales') OR (experience > 5)"
rule_string3 = "(age < 25 AND department = 'Marketing') OR (experience > 5)"

rules = [rule_string1, rule_string2, rule_string3]
combined_ast = combine_rules(rules, use_most_freq_operator_heuristic=True)

# Print the combined AST
print("Combined AST:")
print_ast(combined_ast)

print("Combined AST in JSON:")
print_ast_json(combined_ast)
