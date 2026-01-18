# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
try:
    import tomllib
except ImportError:
    try:
        import tomli as tomllib  # type: ignore[no-redef, import-not-found]
    except ImportError:
        tomllib = None  # type: ignore

try:
    import tomli_w
except ImportError:
    tomli_w = None  # type: ignore
from typing import Any, Iterator, Type, TypeVar

from .core import Loader, BaseDumper, BaseLoader
from .exception import DeserializationError
from .internal import dump, load

T = TypeVar("T")

# --- Public API ---

def dumps(obj: Any) -> str:
    """Encodes a Python object to a TOML string (dumps)."""
    if tomli_w is None:
        raise ImportError("tomli-w is required for TOML serialization. Install it with 'pip install lodum[toml]'.")
    dumper = TomlDumper()
    dumped_data = dump(obj, dumper)
    return tomli_w.dumps(dumped_data)


def loads(cls: Type[T], toml_string: str) -> T:
    """Decodes a TOML string to a Python object (loads)."""
    if tomllib is None:
        raise ImportError("tomllib (or tomli) is required for TOML deserialization. Install it with 'pip install lodum[toml]'.")
    try:
        data = tomllib.loads(toml_string)
    except tomllib.TOMLDecodeError as e:
        raise DeserializationError(f"Failed to parse TOML: {e}")
    loader = TomlLoader(data)
    return load(cls, loader)


# --- TOML Dumper Implementation ---

class TomlDumper(BaseDumper):
    pass


# --- TOML Loader Implementation ---

class TomlLoader(BaseLoader):
    def load_int(self) -> int:
        if not isinstance(self._data, int):
            raise DeserializationError(f"Expected int, got {type(self._data).__name__}")
        return self._data

    def load_str(self) -> str:
        if not isinstance(self._data, str):
            raise DeserializationError(f"Expected str, got {type(self._data).__name__}")
        return self._data

    def load_float(self) -> float:
        if not isinstance(self._data, (float, int)):
            raise DeserializationError(f"Expected float, got {type(self._data).__name__}")
        return float(self._data)

    def load_bool(self) -> bool:
        if not isinstance(self._data, bool):
            raise DeserializationError(f"Expected bool, got {type(self._data).__name__}")
        return self._data

    def load_list(self) -> Iterator['Loader']:
        if not isinstance(self._data, list):
            raise DeserializationError(f"Expected list, got {type(self._data).__name__}")
        return (TomlLoader(item) for item in self._data)

    def load_dict(self) -> Iterator[tuple[str, 'Loader']]:
        if not isinstance(self._data, dict):
            raise DeserializationError(f"Expected dict, got {type(self._data).__name__}")
        return ((k, TomlLoader(v)) for k, v in self._data.items())
