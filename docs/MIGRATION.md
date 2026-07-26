# Migration Guide

This guide helps you migrate from other popular Python serialization libraries to `lodum`, and documents changes between `lodum` versions.

## Migrating from previous Lodum versions

### Stateful Dumper Orchestration (v0.3.0)

In v0.3.0, the `Dumper` protocol was significantly expanded to support O(1) memory streaming. If you have implemented a custom `Dumper`, you must update its methods:

1.  **Updated Signatures**: All `dump_*` methods now receive `depth: int` and `seen: Optional[set]` as positional or keyword arguments.
2.  **New Methods**: You should implement the new orchestration methods (`begin_struct`, `field`, `end_struct`, `begin_list`, `list_item`, `end_list`) to take advantage of the AST compiler's new data-shaping logic.

**Before (v0.2.0):**
```python
class MyDumper(BaseDumper):
    def dump_bytes(self, value: bytes) -> str:
        return value.hex()
```

**After (v0.3.0):**
```python
class MyDumper(BaseDumper):
    def dump_bytes(self, value: bytes, depth: int = 0, seen: Optional[set] = None) -> str:
        return value.hex()
```

### Exception Standardization (v0.2.0)

In versions prior to v0.2.0, the YAML and Pickle loaders raised `TypeError` when a field's type did not match the expected type during deserialization. This has been standardized to `lodum.exception.DeserializationError` to match the behavior of other formats like JSON and MsgPack.

**Before:**
```python
try:
    lodum.yaml.load(MyClass, bad_data)
except TypeError:
    # handle error
```

**After:**
```python
from lodum.exception import DeserializationError

try:
    lodum.yaml.load(MyClass, bad_data)
except DeserializationError:
    # handle error
```

### Centralized Schema API (v0.2.0)

Starting with v0.2.0, the primary way to generate a JSON Schema from a `@lodum` class is through the top-level `lodum.schema()` function. Format-specific schema functions (like `lodum.msgpack.schema()`) have been removed from binary formats to reduce API surface area and architectural redundancy.

**Before:**
```python
from lodum import msgpack
s = msgpack.schema(MyClass)
```

**After:**
```python
import lodum
s = lodum.schema(MyClass)
```
*Note: `json.schema()` and `yaml.schema()` remain available as secondary entry points for convenience.*

---

## Key Differences

`lodum` is inspired by Rust's `serde` framework. Its primary differences from other Python libraries are:

1.  **Format Agnostic**: `lodum` separates the definition of your data structure (using `@lodum`) from the data format (JSON, YAML, TOML, MsgPack, etc.).
2.  **Bytecode Compilation**: `lodum` generates specialized Python bytecode for your classes at runtime. This provides performance comparable to hand-written code while remaining pure Python.
3.  **`__init__`-Centric**: `lodum` uses your class's `__init__` method and its type hints as the source of truth for the data structure. This ensures that your objects are always instantiated through their standard constructor.

---

## Migrating from Pydantic

Pydantic is a popular library that uses `BaseModel` and class attributes to define data structures.

### Class Definition

**Pydantic:**
```python
from pydantic import BaseModel

class User(BaseModel):
    id: int
    username: str
    email: str | None = None
```

**lodum:**
```python
from lodum import lodum
from typing import Optional

@lodum
class User:
    def __init__(self, id: int, username: str, email: Optional[str] = None):
        self.id = id
        self.username = username
        self.email = email
```
*Note: You can also use `@dataclass` with `@lodum`.*

### Serialization

**Pydantic:**
```python
user_dict = user.model_dump()
user_json = user.model_dump_json()
```

**lodum:**
```python
from lodum import json

# lodum doesn't have a generic 'model_dump', but you can dump to any format
user_json = json.dump(user)
# If you just want a dict:
from lodum.internal import dump
from lodum.core import BaseDumper
user_dict = dump(user, BaseDumper())
```

### Deserialization

**Pydantic:**
```python
user = User.model_validate(data_dict)
user = User.model_validate_json(data_json)
```

**lodum:**
```python
from lodum import json

user = json.load(User, data_json)
# From a dict:
from lodum.internal import load
from lodum.json import JSONLoader # or any other loader
user = load(User, JSONLoader(data_dict))
```

### Field Customization

**Pydantic:**
```python
from pydantic import BaseModel, Field

class User(BaseModel):
    user_id: int = Field(alias="id")
    password: str = Field(exclude=True)
```

**lodum:**
```python
from lodum import lodum, field

@lodum
class User:
    def __init__(
        self,
        user_id: int = field(rename="id"),
        password: str = field(skip_serializing=True)
    ):
        self.user_id = user_id
        self.password = password
```

---

## Migrating from Marshmallow

Marshmallow uses separate `Schema` classes to define how data is serialized and deserialized.

### Definition and Usage

**Marshmallow:**
```python
from marshmallow import Schema, fields, post_load

class User:
    def __init__(self, id, name):
        self.id = id
        self.name = name

class UserSchema(Schema):
    id = fields.Int(data_key="user_id")
    name = fields.Str()

    @post_load
    def make_user(self, data, **kwargs):
        return User(**data)

schema = UserSchema()
result = schema.load({"user_id": 1, "name": "Alice"})
```

**lodum:**
```python
from lodum import lodum, field, json

@lodum
class User:
    def __init__(self, id: int = field(rename="user_id"), name: str = ""):
        self.id = id
        self.name = name

user = json.load(User, '{"user_id": 1, "name": "Alice"}')
```
`lodum` eliminates the need for a separate Schema class and the `@post_load` boilerplate.

---

## Migrating from Dataclasses (with mashumaro/dacite)

If you are already using `dataclasses` with a library like `mashumaro`, the transition to `lodum` is very smooth.

**mashumaro:**
```python
from dataclasses import dataclass
from mashumaro import DataClassJSONMixin

@dataclass
class Point(DataClassJSONMixin):
    x: int
    y: int
```

**lodum:**
```python
from dataclasses import dataclass
from lodum import lodum, json

@lodum
@dataclass
class Point:
    x: int
    y: int

# Usage
json_str = json.dump(Point(1, 2))
p = json.load(Point, json_str)
```

`lodum` offers a similar performance profile to `mashumaro` through bytecode generation, but provides a more unified interface for multiple binary and text formats out of the box.

---

## Migrating from Attrs and Cattrs

`attrs` is an alternative to `dataclasses`, and `cattrs` handles the conversion to/from structured data.

**Attrs/Cattrs:**
```python
import attr
import cattr

@attr.s
class User:
    id = attr.ib(type=int)
    name = attr.ib(type=str)

user = cattr.structure({"id": 1, "name": "Alice"}, User)
```

**lodum:**
```python
from lodum import lodum, json

@lodum
class User:
    def __init__(self, id: int, name: str):
        self.id = id
        self.name = name

user = json.load(User, '{"id": 1, "name": "Alice"}')
```
While `cattrs` is very flexible, `lodum` provides a more integrated experience with direct support for various wire formats.
