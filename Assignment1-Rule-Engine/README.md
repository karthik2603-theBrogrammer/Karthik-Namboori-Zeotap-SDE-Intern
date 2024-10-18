## Engo - A custom rule-engine for Zeotap ✨!
1. Testing
- I have developed 12 testcases in the form of a python script, first provide the test-script executible permission by executing the bellow command.
```chmod +x test.py
```
```
./test.py
```
### Bonus

| **Sl.No** | _Feature Requested_                                           | _Details of feature_                                                                                                                                                                                                                                                                                               | Completed |
|-------|---------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|
| 1     | Error handling for invalid rule strings.                      | The Rule Engine accurately throws a custom `ParseError` in case of errors such as missing an operator after operand, <br>imperfect closing of parenthesis, unexpected occurance of a token, etc                                                                                                                    | ✅         |
| 2     | Implement validations for attributes to be part of a catalog. | While parsing the rule to an AST and modifying the AST, the engine checks if the attributes are part of<br>the `ATTRIBUTE_CATALOG`, in the absence of which, a custom exception is raised.                                                                                                                         | ✅         |
| 3     | Modification of existing rules.                               | Rules can be modified by change of operator using the `node.change_operator()` API, change of operand (left and right operand values) using the `node.change_operand()` API and adding and removal of sub-expressions within the AST using `node.add_sub_expression()` and `node.remove_sub_expression()` APIs..   | ✅         |
| 4     | User-defined functions within the rule language.              | Custom functions have been tested and implemented. For example: `calculate_bonus(experience)`: A function to calculate bonus using the experience, `get_minimum_age()`: Returns some fixed value. I have also added support for the functions: `min()`, `max()` and `abs()`.                                       | ✅         |


