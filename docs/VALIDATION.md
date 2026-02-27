# Validation in Lodum

Lodum allows you to validate your data during deserialization using the `validate` parameter in `field()`.

## Using Built-in Validators

Lodum includes several common validators in the `lodum.validators` module.

```python
from lodum import lodum, field, json
from lodum.validators import Range, Length, Match, OneOf

@lodum
class Product:
    def __init__(
        self,
        name: str = field(validate=Length(min=3, max=50)),
        price: float = field(validate=Range(min=0)),
        category: str = field(validate=OneOf(["electronics", "books", "clothing"])),
        code: str = field(validate=Match(r"^[A-Z]{2}-\d{4}$"))
    ):
        self.name = name
        self.price = price
        self.category = category
        self.code = code
```

## Custom Validators

A validator is any callable that takes a value and raises a `ValueError` (or similar) if the value is invalid.

```python
def is_even(v: int):
    if v % 2 != 0:
        raise ValueError("Value must be even")

@lodum
class Settings:
    def __init__(
        self,
        step: int = field(validate=is_even)
    ):
        self.step = step
```

## Multiple Validators

You can pass a list of validators. All of them must pass.

```python
@lodum
class User:
    def __init__(
        self,
        age: int = field(validate=[Range(min=0), Range(max=150)])
    ):
        self.age = age
```

## Error Handling

When validation fails, `lodum` raises a `DeserializationError` that includes the path to the invalid field and the specific error message from the validator.

```python
try:
    json.loads(Product, '{"name": "A", ...}')
except DeserializationError as e:
    print(f"Error at {e.path}: {e}")
```
