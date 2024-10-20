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

| 🌲 **AST (Abstract Syntax Tree)**         | 🔄 **DAG (Directed Acyclic Graph)**      |
| ----------------------------------------- | ---------------------------------------- |
| ![AST Image](link_to_ast_image.png)       | ![DAG Image](link_to_dag_image.png)      |
| Represents the syntax of a rule. Used in compilers for code analysis. | Optimized version of AST, eliminates redundancy, improves efficiency. |

---

## ✨ Engo's Tokenizer

Here is the code for Engo's tokenizer:

```python
import re

def tokenize(rule_string):
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
    token_regex = '|'.join('(?P<%s>%s)' % pair for pair in token_specification)
    token_re = re.compile(token_regex, re.IGNORECASE)

    tokens = []
    pos = 0
    while pos < len(rule_string):
        mo = token_re.match(rule_string, pos)
        if not mo:
            raise ValueError(f"Unexpected character: '{rule_string[pos]}' at position {pos}")
        kind = mo.lastgroup
        value = mo.group(kind)
        if kind == 'SKIP':
            pass
        elif kind == 'MISMATCH':
            raise ValueError(f"Unexpected token: '{value}' at position {pos}")
        else:
            if kind in ('AND', 'OR', 'NOT'):
                value = value.upper()
            if kind == 'FUNCTION':
                value = value.strip().rstrip('(')
                tokens.append(('FUNCTION', value))
                tokens.append(('LPAREN', '('))
            else:
                tokens.append((kind, value))
        pos = mo.end()
    return tokens
