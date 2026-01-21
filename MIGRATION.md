# Migration Guide

This guide helps you migrate from other popular Python serialization libraries to `lodum`.

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
user_json = json.dumps(user)
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

user = json.loads(User, data_json)
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

user = json.loads(User, '{"user_id": 1, "name": "Alice"}')
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
json_str = json.dumps(Point(1, 2))
p = json.loads(Point, json_str)
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

user = json.loads(User, '{"id": 1, "name": "Alice"}')
```
While `cattrs` is very flexible, `lodum` provides a more integrated experience with direct support for various wire formats.
