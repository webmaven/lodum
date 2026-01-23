# lodum

<p align="center">
  <a href="https://pypi.org/project/lodum/"><img src="https://img.shields.io/pypi/v/lodum.svg" alt="PyPI"></a>
  <a href="https://pypi.org/project/lodum/"><img src="https://img.shields.io/pypi/pyversions/lodum.svg" alt="Python versions"></a>
  <a href="https://github.com/webmaven/lodum/blob/main/LICENSE"><img src="https://img.shields.io/pypi/l/lodum.svg" alt="License"></a>
</p>

`Lodum` is a framework for **lo**ading and **dum**ping Python data structures efficiently and ergonomically.

The core design is heavily inspired by the robustness and efficiency of Rust's `serde` framework.

## Installation

You can install `lodum` from PyPI using `pip`:

```bash
pip install lodum
```

## Core Concepts

The architecture of `lodum` is built on a clear separation of concerns, just like `serde`:

1. **lodum-enabled Data Structures**: You define the data you want to encode by decorating your classes with `@lodum`. This decorator introspects your class to understand its structure.
2. **Data Formats (Loaders/Dumpers)**: The logic for converting data into a specific format (like JSON) is handled by `Loader` and `Dumper` implementations. This makes the core library format-agnostic.

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

### 3. Decode and Encode with Multiple Formats

You can easily switch between formats. For example, you can decode from JSON and then encode to YAML using the `json.loads` and `yaml.dumps` functions.

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
# Output: Name: Barbara, Age: 25, Active: False
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

## Error Reporting

`lodum` provides detailed path information when deserialization fails, making it easy to identify the exact field that caused the error.

```python
from lodum import lodum, json
from lodum.exception import DeserializationError

@lodum
class User:
    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age

json_data = '{"name": "Alex", "age": "not_an_int"}'

try:
    json.loads(User, json_data)
except DeserializationError as e:
    print(e)
    # Output: Error at age: Expected int, got str
```

The path tracking works through nested objects, lists, and dictionaries (e.g., `root.users[2].id`).

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
        prefs: dict = field(default_factory=dict),

        # Add validation to a field
        age: int = field(validate=lambda x: x >= 0, default=0)
    ):
        self.user_id = user_id
        self.email = email
        self.password_hash = password_hash
        self.prefs = prefs
        self.age = age

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
* `validate=callable`: A function or list of functions to validate the field's value during decoding.

## Validation

`lodum` includes a set of built-in validators in the `lodum.validators` module. You can use them to ensure your data meets specific criteria.

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

# This will raise a DeserializationError
try:
    json.loads(Product, '{"name": "A", "price": -10, "category": "food", "code": "abc"}')
except Exception as e:
    print(e)
```

## Performance

`lodum` is designed for high performance. When you first use a `@lodum`-enabled class, the library analyzes its structure and generates specialized Python bytecode for serialization and deserialization. This generated code is then compiled and cached, avoiding the overhead of generic introspection and `getattr` calls during runtime. This approach allows `lodum` to achieve speeds comparable to hand-written code while maintaining the flexibility of a declarative API.

## Binary Data

`lodum` handles binary data (`bytes` and `bytearray`) differently depending on the format:

* **Text-based formats** (JSON, TOML) encode binary data as Base64-encoded strings.
* **Binary formats** (MsgPack, CBOR, BSON, Pickle) and **YAML** use their native binary representation where possible, ensuring efficient storage and transmission.

## Supported Formats

`lodum` is designed to be format-agnostic, and new formats can be added by implementing the `Dumper` and `Loader` protocols. The following formats are currently supported:

* **JSON**: `lodum.json`
* **YAML**: `lodum.yaml`
* **Pickle**: `lodum.pickle` (**Warning**: `pickle` is insecure. Only deserialize data from trusted sources.)
  `lodum` implements a `SafeUnpickler` that restricts deserialization to a small set of safe types:
  *   Standard Python `builtins` (like `int`, `str`, `list`, etc.)
  *   Custom classes decorated with `@lodum`
  *   Explicitly forbids modules known to be dangerous (like `os`, `sys`, `subprocess`)
  Additionally, `lodum.pickle.dumps` performs structural validation to ensure only `lodum`-enabled data is serialized.
* **TOML**: `lodum.toml`
* **MessagePack**: `lodum.msgpack`
* **CBOR**: `lodum.cbor` (e.g., `cbor.dumps(obj)`)
* **BSON**: `lodum.bson` (e.g., `bson.dumps(obj)`)

## Supported Types

`lodum` currently supports the following types for serialization:

* **Primitives:** `int`, `str`, `float`, `bool`, `None`
* **Collections:** `list`, `dict`, `tuple`, `set`, `bytes`, `bytearray`, `array.array`, `collections.defaultdict`, `collections.OrderedDict`, `collections.Counter`
* **Typing:** `Optional`, `Union`, `Any`, `TypeVar` (The `@lodum` decorator preserves the type identity of the decorated class using `TypeVar`, ensuring excellent IDE support and static type checking.)
* **Standard Library:** `datetime.datetime` (encoded as ISO 8601 strings), `enum.Enum` (encoded by value), `uuid.UUID`, `decimal.Decimal`, `pathlib.Path`
* **Third-Party Libraries:** `numpy.ndarray`, `pandas.DataFrame`, `pandas.Series`, `polars.DataFrame`, `polars.Series`
* **Custom Objects:** Any class decorated with `@lodum`.

The library is designed to be extended with support for more formats and more complex data types in the future.

## Contributing

Contributions are welcome! Please see the [Contributing Guidelines](CONTRIBUTING.md) for more information.

## Internals & Roadmap

* Interested in how `lodum` works under the hood? Check out [ARCHITECTURE.md](ARCHITECTURE.md).
* Want to see where we are going? Read our [ROADMAP.md](ROADMAP.md).

## License

This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.
