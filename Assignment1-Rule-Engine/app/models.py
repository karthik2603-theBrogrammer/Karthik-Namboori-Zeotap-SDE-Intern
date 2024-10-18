from . import db
from datetime import datetime
from sqlalchemy.dialects.postgresql import JSON

class Rule(db.Model):
    __tablename__ = 'rules'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    rule_text = db.Column(db.Text, nullable=False)
    ast_json = db.Column(JSON, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
