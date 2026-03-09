# Field Customization in Lodum

Lodum provides the `field()` function to customize the behavior of individual fields during serialization and deserialization.

## Usage

Use `field()` as a default value for your class attributes or `__init__` parameters.

```python
from lodum import lodum, field

@lodum
class User:
    def __init__(
        self,
        # Rename 'user_id' to 'id' in the output
        user_id: int = field(rename="id"),

        # This field will not be included in the output
        password_hash: str = field(skip_serializing=True),

        # Provide a default value
        active: bool = field(default=True),

        # Use a factory for mutable defaults
        prefs: dict = field(default_factory=dict)
    ):
        self.user_id = user_id
        self.password_hash = password_hash
        self.active = active
        self.prefs = prefs
```

## Available Options

| Option | Type | Description |
| --- | --- | --- |
| `rename` | `str` | The name to use for the field in the serialized format. |
| `skip_serializing` | `bool` | If `True`, the field is excluded when dumping. |
| `default` | `Any` | A default value if the field is missing during loading. |
| `default_factory` | `Callable` | A zero-argument function called for a default value. |
| `serializer` | `Callable` | A custom function to encode the field's value. |
| `deserializer` | `Callable` | A custom function to decode the field's value. |
| `validate` | `Callable \| List[Callable]` | One or more validators to run during loading. |

## Custom Serializers and Deserializers

You can provide custom functions for fine-grained control.

```python
import base64
from lodum import lodum, field

def b64_encode(v: bytes) -> str:
    return base64.b64encode(v).decode('ascii')

def b64_decode(v: str) -> bytes:
    return base64.b64decode(v)

@lodum
class Image:
    def __init__(
        self,
        data: bytes = field(serializer=b64_encode, deserializer=b64_decode)
    ):
        self.data = data
```
