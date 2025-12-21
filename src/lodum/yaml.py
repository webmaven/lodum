# SPDX-FileCopyrightText: 2025-present Jules <jules@example.com>
#
# SPDX-License-Identifier: MIT
import io
from typing import Any, Iterator, Type, TypeVar
from ruamel.yaml import YAML

from .core import Deserializer, Serializer
from .json import serialize, deserialize

T = TypeVar("T")
yaml = YAML(typ='safe')

# --- Public API ---

def to_yaml(obj: Any) -> str:
    """
    Serializes a Python object to a YAML string.
    """
    serializer = YamlSerializer()
    # The core `serialize` logic is format-agnostic and can be reused.
    serialized_data = serialize(obj, serializer)

    with io.StringIO() as string_stream:
        yaml.dump(serialized_data, string_stream)
        return string_stream.getvalue()

def from_yaml(cls: Type[T], yaml_string: str) -> T:
    """
    Deserializes a YAML string to a Python object.
    """
    data = yaml.load(yaml_string)
    deserializer = YamlDeserializer(data)
    # The core `deserialize` logic is format-agnostic and can be reused.
    return deserialize(cls, deserializer)

# --- YAML Serializer Implementation ---

class YamlSerializer(Serializer):
    """
    Serializes Python objects into a YAML-compatible intermediate representation.
    """
    def serialize_int(self, value: int) -> int: return value
    def serialize_str(self, value: str) -> str: return value
    def serialize_float(self, value: float) -> float: return value
    def serialize_bool(self, value: bool) -> bool: return value
    def begin_struct(self, cls: Type) -> dict: return {}
    def end_struct(self) -> None: pass

# --- YAML Deserializer Implementation ---

class YamlDeserializer(Deserializer):
    """
    Deserializes a YAML-compatible intermediate representation into Python objects.
    """
    def __init__(self, data: Any):
        self._data = data

    def as_int(self) -> int:
        if not isinstance(self._data, int):
            raise TypeError(f"Expected int, got {type(self._data).__name__}")
        return self._data
    def as_str(self) -> str:
        if not isinstance(self._data, str):
            raise TypeError(f"Expected str, got {type(self._data).__name__}")
        return self._data
    def as_float(self) -> float:
        if not isinstance(self._data, (float, int)):
            raise TypeError(f"Expected float, got {type(self._data).__name__}")
        return float(self._data)
    def as_bool(self) -> bool:
        if not isinstance(self._data, bool):
            raise TypeError(f"Expected bool, got {type(self._data).__name__}")
        return self._data
    def as_list(self) -> Iterator['Deserializer']:
        if not isinstance(self._data, list):
            raise TypeError(f"Expected list, got {type(self._data).__name__}")
        return (YamlDeserializer(item) for item in self._data)
    def as_dict(self) -> Iterator[tuple[str, 'Deserializer']]:
        if not isinstance(self._data, dict):
            raise TypeError(f"Expected dict, got {type(self._data).__name__}")
        return ((k, YamlDeserializer(v)) for k, v in self._data.items())
    def as_any(self) -> Any:
        return self._data
