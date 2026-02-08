# Implementing New Formats

`Lodum` is designed to be format-agnostic. You can add support for a new data format (e.g., XML, Protobuf, or a custom text format) by implementing two core protocols: `Dumper` and `Loader`.

The core engine uses these protocols to bridge the gap between Python objects and the specific data format, handling all the complex logic like recursion, type validation, and circular reference detection.

## The `Dumper` Protocol

A `Dumper` is responsible for taking primitive Python values and converting them into an intermediate representation (IR) or directly into the target format.

### Protocol Interface

```python
class Dumper(Protocol):
    def dump_int(self, value: int) -> Any: ...
    def dump_str(self, value: str) -> Any: ...
    def dump_float(self, value: float) -> Any: ...
    def dump_bool(self, value: bool) -> Any: ...
    def dump_bytes(self, value: bytes) -> Any: ...
    def dump_list(self, value: List[Any]) -> Any: ...
    def dump_dict(self, value: Dict[str, Any]) -> Any: ...
    def begin_struct(self, cls: Type) -> Any: ...
    def end_struct(self) -> Any: ...
```

### Implementing a Dumper

Most formats can inherit from `BaseDumper`, which provides default implementations that return the values as-is. This is useful for formats that work with standard Python collections (like JSON or YAML libraries).

```python
from lodum.core import BaseDumper

class MyFormatDumper(BaseDumper):
    def dump_bytes(self, value: bytes) -> Any:
        # Example: encode bytes to hex for a text format
        return value.hex()
```

## The `Loader` Protocol

A `Loader` is responsible for reading primitive values and collections from the source data.

### Protocol Interface

```python
class Loader(Protocol):
    def load_int(self) -> int: ...
    def load_str(self) -> str: ...
    def load_float(self) -> float: ...
    def load_bool(self) -> bool: ...
    def load_bytes(self) -> bytes: ...
    def load_list(self) -> Iterator["Loader"]: ...
    def load_dict(self) -> Iterator[tuple[str, "Loader"]]: ...
    def load_any(self) -> Any: ...
    def mark(self) -> Any: ...
    def rewind(self, marker: Any) -> None: ...
    def get_dict(self) -> Optional[Union[Dict[str, Any], List[Any]]]: ...
```

### Key Methods

- **`load_list` / `load_dict`**: These should return an iterator of *new* `Loader` instances, each wrapping a nested element.
- **`mark` / `rewind`**: Required for supporting `Union` types. `mark()` should return the current state of the loader, and `rewind(marker)` should restore it. This allows `lodum` to try decoding data into multiple different types.
- **`get_dict`**: An optimization. If the current data is already a raw Python `dict` or `list`, returning it here allows the compiler to bypass creating multiple `Loader` wrappers.

### Implementing a Loader

Inheriting from `BaseLoader` is highly recommended. It provides standardized type checking and error messages (e.g., "Expected int, got str").

```python
from lodum.core import BaseLoader

class MyFormatLoader(BaseLoader):
    # BaseLoader handles load_int, load_str, etc. using load_any()
    # You only need to override specific behavior.
    pass
```

## Creating the Public API

Once you have your `Dumper` and `Loader`, you typically expose `dumps` and `loads` functions that wrap the `lodum.internal` calls.

```python
from typing import Any, Type, TypeVar
from lodum.internal import dump, load

T = TypeVar("T")

def dumps(obj: Any) -> str:
    dumper = MyFormatDumper()
    data = dump(obj, dumper)
    return str(data) # Or your format's encoding logic

def loads(cls: Type[T], data_string: str) -> T:
    # Your format's parsing logic to get a Python dict/list
    raw_data = parse_my_format(data_string) 
    loader = MyFormatLoader(raw_data)
    return load(cls, loader)
```

## Best Practices

1. **Use `BaseLoader`**: It ensures your format provides the same high-quality error messages as the built-in formats.
2. **Handle `bytes`**: If your format doesn't support raw binary data, implement `dump_bytes` and `load_bytes_value` to handle Base64 or Hex encoding.
3. **Recursive Safety**: You don't need to worry about recursion limits or circular references; the `lodum.internal.dump` and `load` functions handle this automatically.
4. **Performance**: If your format returns standard Python dicts/lists, ensure `get_dict()` returns them to enable the compiler's fast-path optimizations.
5. **Thoroughly Test Your Implementation**: After implementing a new format, it's crucial to ensure its correctness and robustness. Run the project's comprehensive test suite and add new tests specifically for your format. Refer to the [Contributing Guide](../CONTRIBUTING.md) for detailed instructions on running tests and maintaining code quality.