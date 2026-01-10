# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
try:
    import tomllib
except ImportError:
    import tomli as tomllib
import tomli_w
from typing import Any, Iterator, Type, TypeVar

from .core import Loader, Dumper
from .exception import DeserializationError
from .internal import dump, load

T = TypeVar("T")

# --- Public API ---

def dumps(obj: Any) -> str:
    """Encodes a Python object to a TOML string (dumps)."""
    dumper = TomlDumper()
    dumped_data = dump(obj, dumper)
    return tomli_w.dumps(dumped_data)


def loads(cls: Type[T], toml_string: str) -> T:
    """Decodes a TOML string to a Python object (loads)."""
    try:
        data = tomllib.loads(toml_string)
    except tomllib.TOMLDecodeError as e:
        raise DeserializationError(f"Failed to parse TOML: {e}")
    loader = TomlLoader(data)
    return load(cls, loader)


# --- TOML Dumper Implementation ---

class TomlDumper(Dumper):
    def dump_int(self, v: int) -> int: return v
    def dump_str(self, v: str) -> str: return v
    def dump_float(self, v: float) -> float: return v
    def dump_bool(self, v: bool) -> bool: return v
    def dump_list(self, v: list) -> list: return v
    def dump_dict(self, v: dict) -> dict: return v
    def begin_struct(self, cls: Type) -> dict: return {}
    def end_struct(self) -> None: pass


# --- TOML Loader Implementation ---

class TomlLoader(Loader):
    def __init__(self, data: Any): self._data = data
    def load_int(self) -> int:
        if not isinstance(self._data, int): raise DeserializationError(f"Expected int, got {type(self._data).__name__}")
        return self._data
    def load_str(self) -> str:
        if not isinstance(self._data, str): raise DeserializationError(f"Expected str, got {type(self._data).__name__}")
        return self._data
    def load_float(self) -> float:
        if not isinstance(self._data, (float, int)):
            raise DeserializationError(f"Expected float, got {type(self._data).__name__}")
        return float(self._data)
    def load_bool(self) -> bool:
        if not isinstance(self._data, bool): raise DeserializationError(f"Expected bool, got {type(self._data).__name__}")
        return self._data
    def load_list(self) -> Iterator['Loader']:
        if not isinstance(self._data, list): raise DeserializationError(f"Expected list, got {type(self._data).__name__}")
        return (TomlLoader(item) for item in self._data)
    def load_dict(self) -> Iterator[tuple[str, 'Loader']]:
        if not isinstance(self._data, dict): raise DeserializationError(f"Expected dict, got {type(self._data).__name__}")
        return ((k, TomlLoader(v)) for k, v in self._data.items())
    def load_any(self) -> Any:
        return self._data
