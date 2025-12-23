# lodum

A Python serialization library inspired by Rust's `serde`.

`lodum` is an experimental Python library designed to provide a flexible and ergonomic way to serialize and deserialize Python objects to and from various data formats. The core design is heavily inspired by the robustness and efficiency of Rust's `serde` framework.

## Core Concepts

The architecture of `lodum` is built on a clear separation of concerns, just like `serde`:

1. **Serializable Data Structures**: You define the data you want to serialize by decorating your classes with `@serializable`. This decorator introspects your class to understand its structure.
2. **Data Formats (Serializers/Deserializers)**: The logic for converting data into a specific format (like JSON) is handled by `Serializer` and `Deserializer` implementations. This makes the core library format-agnostic.

This means you can define how your data is structured once, and then easily serialize it to multiple formats (JSON, YAML, etc.) by simply using a different serializer.

## Getting Started

Here is a quick example of how to serialize a simple Python object to JSON and deserialize it back.

### 1. Define your data structure

Use the `@serializable` decorator on your class. Make sure to include type hints, as `lodum` uses them to understand your data.

```python
from lodum import serializable

@serializable
class User:
    def __init__(self, name: str, age: int, is_active: bool):
        self.name = name
        self.age = age
        self.is_active = is_active
```

### 2. Serialize to JSON

Use the `to_json` function to convert an instance of your class into a JSON string.

```python
from lodum.json import to_json

user = User(name="Alex", age=30, is_active=True)

# Serialize the object to a JSON string
json_string = to_json(user)

print(json_string)
# Output: {"name": "Alex", "age": 30, "is_active": true}
```

### 3. Deserialize from JSON

Use the `from_json` function to parse a JSON string and reconstruct your Python object.

```python
from lodum.json import from_json
from lodum.yaml import to_yaml, from_yaml

# You can also serialize to YAML
yaml_string = to_yaml(user)
print(yaml_string)
# -> name: Alex
# -> age: 30
# -> is_active: true

json_data = '{"name": "Barbara", "age": 25, "is_active": false}'

# Deserialize the JSON string back to a User object
barbara = from_json(User, json_data)

print(f"Name: {barbara.name}, Age: {barbara.age}, Active: {barbara.is_active}")
# Output: Name: Barbara, Age: 25, Active: false
```

This simple example demonstrates the core functionality for the initial JSON implementation.

## Round-Trip Example

`lodum` ensures that your data can be reliably converted between formats. Here's an example of a full round-trip conversion, starting with JSON, converting to YAML, and then back to JSON, verifying that the data remains consistent.

```python
import json
from lodum import serializable
from lodum.json import from_json, to_json
from lodum.yaml import from_yaml, to_yaml

@serializable
class ServerConfig:
    def __init__(self, host: str, port: int, services: list[str]):
        self.host = host
        self.port = port
        self.services = services

# 1. Start with a JSON string
original_json = '{"host": "127.0.0.1", "port": 8080, "services": ["users", "products", "inventory"]}'

# 2. Deserialize the JSON to a Python object
config_from_json = from_json(ServerConfig, original_json)

# 3. Serialize the object to YAML
yaml_output = to_yaml(config_from_json)

# 4. Deserialize the YAML back to a Python object
config_from_yaml = from_yaml(ServerConfig, yaml_output)

# 5. Serialize the final object back to JSON
final_json = to_json(config_from_yaml)

# 6. Verify that the final JSON matches the original
# We load them into dictionaries to ignore any formatting differences
assert json.loads(original_json) == json.loads(final_json)

print("Round-trip conversion successful!")
```

## Field Customization

You can customize the behavior of individual fields by using the `field()` function as a default value in your `__init__` method.

```python
from lodum import serializable, field

@serializable
class User:
    def __init__(
        self,
        # Rename 'user_id' to 'id' in the serialized output
        user_id: int = field(rename="id", default=0),

        # This field is required
        email: str,

        # This field will not be included in the serialized output
        password_hash: str = field(skip_serializing=True, default=""),

        # If 'prefs' is missing on deserialization, it will default to an empty dict
        prefs: dict = field(default_factory=dict)
    ):
        self.user_id = user_id
        self.email = email
        self.password_hash = password_hash
        self.prefs = prefs

# Serialize a user
user = User(email="name@example.com", user_id=123, password_hash="secret")
print(to_json(user))
# -> {"id": 123, "email": "name@example.com", "prefs": {}}

# Deserialize a user
user_data = '{"id": 456, "email": "test@example.com"}'
user = from_json(User, user_data)
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

## Supported Formats

`lodum` is designed to be format-agnostic, and new formats can be added by implementing the `Serializer` and `Deserializer` protocols. The following formats are currently supported:

* **JSON**: `lodum.json`
* **YAML**: `lodum.yaml`
* **Pickle**: `lodum.pickle`

## Supported Types

`lodum` currently supports the following types for JSON serialization:

* **Primitives:** `int`, `str`, `float`, `bool`, `None`
* **Collections:** `list`, `dict`, `tuple`, `set`
* **Typing:** `Optional`, `Union`, `Any`, `TypeVar`
* **Standard Library:** `datetime.datetime` (serialized as ISO 8601 strings), `enum.Enum` (serialized by value)
* **Third-Party Libraries:** `numpy.ndarray`, `pandas.DataFrame`, `pandas.Series`, `polars.DataFrame`, `polars.Series`
* **Custom Objects:** Any class decorated with `@serializable`.

The library is designed to be extended with support for more formats and more complex data types in the future.
