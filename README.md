# lodum

A Python serialization library inspired by Rust's `serde`.

`lodum` is an experimental Python library designed to provide a flexible and ergonomic way to serialize and deserialize Python objects to and from various data formats. The core design is heavily inspired by the robustness and efficiency of Rust's `serde` framework.

## Core Concepts

The architecture of `lodum` is built on a clear separation of concerns, just like `serde`:

1. **lodum-enabled Data Structures**: You define the data you want to encode by decorating your classes with `@lodum`. This decorator introspects your class to understand its structure.
2. **Data Formats (Dumpers/Loaders)**: The logic for converting data into a specific format (like JSON) is handled by `Dumper` and `Loader` implementations. This makes the core library format-agnostic.

This means you can define how your data is structured once, and then easily encode it to multiple formats (JSON, YAML, etc.) by simply using a different module.

## Getting Started

Here is a quick example of how to encode a simple Python object to JSON and decode it back.

### 1. Define your data structure

Use the `@lodum` decorator on your class. Make sure to include type hints, as `lodum` uses them to understand your data.

```python
from lodum import lodum

@lodum
class User:
    def __init__(self, name: str, age: int, is_active: bool):
        self.name = name
        self.age = age
        self.is_active = is_active
```

### 2. Encode to JSON

Use the `json.dumps` function to convert an instance of your class into a JSON string.

```python
from lodum import json

user = User(name="Alex", age=30, is_active=True)

# Encode the object to a JSON string
json_string = json.dumps(user)

print(json_string)
# Output: {"name": "Alex", "age": 30, "is_active": true}
```

### 3. Decode from JSON

Use the `json.loads` function to parse a JSON string and reconstruct your Python object.

```python
from lodum import json, yaml

# You can also encode to YAML
yaml_string = yaml.dumps(user)
print(yaml_string)
# -> name: Alex
# -> age: 30
# -> is_active: true

json_data = '{"name": "Barbara", "age": 25, "is_active": false}'

# Decode the JSON string back to a User object
barbara = json.loads(User, json_data)

print(f"Name: {barbara.name}, Age: {barbara.age}, Active: {barbara.is_active}")
# Output: Name: Barbara, Age: 25, Active: false
```

This simple example demonstrates the core functionality.

## Field Customization

You can customize the behavior of individual fields by using the `field()` function as a default value in your `__init__` method.

```python
from lodum import lodum, field, json

@lodum
class User:
    def __init__(
        self,
        # Rename 'user_id' to 'id' in the output
        user_id: int = field(rename="id", default=0),

        # This field is required
        email: str,

        # This field will not be included in the output
        password_hash: str = field(skip_serializing=True, default=""),

        # If 'prefs' is missing on decoding, it will default to an empty dict
        prefs: dict = field(default_factory=dict)
    ):
        self.user_id = user_id
        self.email = email
        self.password_hash = password_hash
        self.prefs = prefs

# Encode a user
user = User(email="name@example.com", user_id=123, password_hash="secret")
print(json.dumps(user))
# -> {"id": 123, "email": "name@example.com", "prefs": {}}

# Decode a user
user_data = '{"id": 456, "email": "test@example.com"}'
user = json.loads(User, user_data)
# user.user_id -> 456
# user.prefs -> {}
```

### Supported `field()` options

* `rename="new_name"`: Use a different name for the field in the serialized format.
* `skip_serializing=True`: Exclude the field from the serialized output.
* `default=value`: Provide a default value if the field is missing during deserialization.
* `default_factory=callable`: Provide a zero-argument function to call for a default value.
* `serializer=callable`: A function to call to serialize the field's value.
* `deserializer=callable`: A function to call to deserialize the field's value.

## Supported Types

`lodum` currently supports the following types for JSON serialization:

* **Primitives:** `int`, `str`, `float`, `bool`, `None`
* **Collections:** `list`, `dict`, `tuple`, `set`
* **Typing:** `Optional`, `Union`, `Any`, `TypeVar`
* **Standard Library:** `datetime.datetime` (serialized as ISO 8601 strings), `enum.Enum` (serialized by value)
* **Third-Party Libraries:** `numpy.ndarray`, `pandas.DataFrame`, `pandas.Series`, `polars.DataFrame`, `polars.Series`
* **Custom Objects:** Any class decorated with `@serializable`.

The library is designed to be extended with support for more formats and more complex data types in the future.
