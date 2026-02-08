# Getting Started with Lodum

This guide will walk you through the basics of using `lodum` to serialize and deserialize Python data structures.

## Installation

Install `lodum` using `pip`:

```bash
pip install lodum
```

If you need support for specific formats like YAML or MessagePack, or third-party libraries like NumPy or Pandas, you can install them as extras:

```bash
pip install "lodum[all]"
```

## Basic Usage

### 1. Define Your Model

To make a class "lodum-enabled," use the `@lodum` decorator. We recommend using `dataclasses` for concise models, but standard classes work too.

```python
from lodum import lodum
from dataclasses import dataclass

@lodum
@dataclass
class Point:
    x: float
    y: float
```

### 2. Serialize to JSON

The `lodum.json` module provides `dumps` and `loads` functions similar to the standard library's `json` module, but optimized for `@lodum` classes.

```python
from lodum import json

p = Point(x=1.5, y=2.0)
json_data = json.dumps(p)
print(json_data)  # {"x": 1.5, "y": 2.0}
```

### 3. Deserialize from JSON

When loading, you must specify the target class.

```python
p2 = json.loads(Point, '{"x": 10.0, "y": 20.0}')
print(p2)  # Point(x=10.0, y=20.0)
```

## Customizing Fields

You can use `lodum.field()` to customize how individual fields are handled.

```python
from lodum import lodum, field

@lodum
@dataclass
class User:
    user_id: int = field(rename="id")
    username: str
    password_hash: str = field(skip_serializing=True)
    active: bool = True
```

- `rename`: Use a different name in the serialized output.
- `skip_serializing`: Exclude the field when dumping.
- `default`: Provide a default value for loading if the field is missing.

## Working with Dictionaries

Sometimes you want to convert an object to a plain Python dictionary (e.g., for use in a web framework) without encoding it to a string.

```python
import lodum

user = User(user_id=1, username="alice", password_hash="secret")
data = lodum.asdict(user)
print(data)  # {"id": 1, "username": "alice", "active": True}

new_user = lodum.fromdict(User, data)
```

## Next Steps

- Check out the [API Reference](API_REFERENCE.md) (coming soon) for full details on all functions.
- See [Field Customization](FIELD_CUSTOMIZATION.md) for advanced field options.
- Read about [Validation](VALIDATION.md) to ensure your data is always correct.
