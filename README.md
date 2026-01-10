# lodum

<p align="center">
  <a href="https://pypi.org/project/lodum/"><img src="https://img.shields.io/pypi/v/lodum.svg" alt="PyPI"></a>
  <a href="https://pypi.org/project/lodum/"><img src="https://img.shields.io/pypi/pyversions/lodum.svg" alt="Python versions"></a>
  <a href="https://github.com/webmaven/lodum/blob/main/LICENSE"><img src="https://img.shields.io/pypi/l/lodum.svg" alt="License"></a>
</p>

A Python serialization library inspired by Rust's `serde`.

`lodum` is an experimental Python library designed to provide a flexible and ergonomic way to serialize and deserialize Python objects to and from various data formats. The core design is heavily inspired by the robustness and efficiency of Rust's `serde` framework.

## Installation

You can install `lodum` from PyPI using `pip`:

```bash
pip install lodum
```

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

## Round-Trip Example

`lodum` ensures that your data can be reliably converted between formats. Here's an example of a full round-trip conversion, starting with JSON, converting to YAML, and then back to JSON, verifying that the data remains consistent.

```python
import json as std_json
from lodum import lodum, json, yaml

@lodum
class ServerConfig:
    def __init__(self, host: str, port: int, services: list[str]):
        self.host = host
        self.port = port
        self.services = services

# 1. Start with a JSON string
original_json = '{"host": "127.0.0.1", "port": 8080, "services": ["users", "products", "inventory"]}'

# 2. Decode the JSON to a Python object
config_from_json = json.loads(ServerConfig, original_json)

# 3. Encode the object to YAML
yaml_output = yaml.dumps(config_from_json)

# 4. Decode the YAML back to a Python object
config_from_yaml = yaml.loads(ServerConfig, yaml_output)

# 5. Encode the final object back to JSON
final_json = json.dumps(config_from_yaml)

# 6. Verify that the final JSON matches the original
# We load them into dictionaries to ignore any formatting differences
assert std_json.loads(original_json) == std_json.loads(final_json)

print("Round-trip conversion successful!")
```

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

* `rename="new_name"`: Use a different name for the field in the output.
* `skip_serializing=True`: Exclude the field from the output.
* `default=value`: Provide a default value if the field is missing during decoding.
* `default_factory=callable`: Provide a zero-argument function to call for a default value.
* `serializer=callable`: A function to call to encode the field's value.
* `deserializer=callable`: A function to call to decode the field's value.

## Supported Formats

`lodum` is designed to be format-agnostic, and new formats can be added by implementing the `Dumper` and `Loader` protocols. The following formats are currently supported:

* **JSON**: `lodum.json`
* **YAML**: `lodum.yaml`
* **Pickle**: `lodum.pickle`
* **TOML**: `lodum.toml`
* **MessagePack**: `lodum.msgpack`
* **CBOR**: `lodum.cbor`
* **BSON**: `lodum.bson`

## Supported Types

`lodum` currently supports the following types for serialization:

* **Primitives:** `int`, `str`, `float`, `bool`, `None`
* **Collections:** `list`, `dict`, `tuple`, `set`
* **Typing:** `Optional`, `Union`, `Any`, `TypeVar`
* **Standard Library:** `datetime.datetime` (encoded as ISO 8601 strings), `enum.Enum` (encoded by value)
* **Third-Party Libraries:** `numpy.ndarray`, `pandas.DataFrame`, `pandas.Series`, `polars.DataFrame`, `polars.Series`
* **Custom Objects:** Any class decorated with `@lodum`.

The library is designed to be extended with support for more formats and more complex data types in the future.

## Contributing

Contributions are welcome! Please see the [Contributing Guidelines](CONTRIBUTING.md) for more information.

## License

This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.
