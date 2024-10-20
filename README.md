> [!TIP]  
> 🌳 Continue reading for Rule Engine assignment and click [here]() for Real-Time Data Processing System for Weather Monitoring System assignment.

# Engo: A Custom Rule Engine.


<div align="center">
  <img src="https://github.com/user-attachments/assets/20927947-aefe-4ea7-9aa8-0f94bd40ac56" alt="Screenshot 2024-10-20 at 11 44 27 PM" width="900" height="370">
</div>


## What is Engo?

- Engo is a custom rule engine that parses rules defined in its specific language I call, `Engolang`. It helps define rules and validate users against these rules. 
- Engo supports representations like `ASTs (Abstract Syntax Trees)` and `DAGs (Directed Acyclic Graphs)` to optimize rule processing.
- The UI, built using **React Flow**, allows interactive visualizations of these rule structures. 🌟

## ⚖️ AST vs DAG Comparison

|  **AST (Abstract Syntax Tree)**         | **DAG (Directed Acyclic Graph)**       |
| ----------------------------------------- | ---------------------------------------- |
| <p align="center"><img width="468" alt="Screenshot 2024-10-21 at 12 34 57 AM" src="https://github.com/user-attachments/assets/3a4a4786-48a5-477a-85f8-82638ddb67ec"></p> | <p align="center"><img width="450" alt="Screenshot 2024-10-21 at 12 35 04 AM" src="https://github.com/user-attachments/assets/759bb37f-5bb6-4f99-8a3c-6e8066a8354c"></p> |
| Represents the syntax of a rule. It is commonly used in compilers for code analysis. Compiler first creates a parse tree (Concrete Syntax Tree) which is converted to an Syntax tree (Abstract Syntax). | Represents a compressed form of an AST. In large-scale applications with complex expressions, DAGs significantly reduce memory usage and eliminate redundant computations. |


## Engo's Tokenizer

A code-snippet from Engo's Tokenizer. Can parse numbers, attributes, functions (custom user-defined), left and right parantheses, comma andlogical operator in order of precedence (AND, OR, NOT).

```python
token_specification = [
    ('NUMBER', r'-?\d+(\.\d+)?'),   # Integer or decimal number, including negatives
    ('STRING',   r"'[^']*'"),       # String enclosed in single quotes
    ('AND',      r'\bAND\b'),       # Logical AND
    ('OR',       r'\bOR\b'),        # Logical OR
    ('NOT',      r'\bNOT\b'),       # Logical NOT
    ('FUNCTION', r'\b\w+\s*\('),    # Function names followed by '('
    ('COMMA',    r','),             # Comma
    ('OP',       r'(<=|>=|<>|!=|=|<|>)'), # Comparison operators
    ('LPAREN',   r'\('),            # Left parenthesis
    ('RPAREN',   r'\)'),            # Right parenthesis
    ('IDENT',    r'\b\w+\b'),       # Identifiers
    ('SKIP',     r'[ \t]+'),        # Skip spaces and tabs
    ('MISMATCH', r'.'),             # Any other character
]
```

