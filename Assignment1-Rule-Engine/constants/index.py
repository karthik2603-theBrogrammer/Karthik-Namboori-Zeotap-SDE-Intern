VALID_OPERATORS = {'<', '>', '<=', '>=', '=', '==', '!=', '<>'}
ATTRIBUTE_CATALOG = {'age', 'department', 'salary', 'experience'}


FUNCTIONS = {
    'get_minimum_age': lambda: 18,
    'calculate_bonus': lambda experience: experience * 1000,
    'max':             lambda x, y: max(x, y),
    'min':             lambda x, y: min(x, y),
    'abs':             lambda x: abs(x)
}