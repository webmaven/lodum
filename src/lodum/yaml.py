# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import io
from typing import Any, Iterator, Type, TypeVar

try:
    from ruamel.yaml import YAML

    yaml_available = True
except ImportError:
    YAML = None  # type: ignore
    yaml_available = False

from .core import Loader, Dumper
from .internal import dump, load

T = TypeVar("T")
yaml: Any = None
if yaml_available:
    yaml = YAML(typ="safe")

# --- Public API ---


def dumps(obj: Any) -> str:
    """
    Encodes a Python object to a YAML string.
    """
    if not yaml_available:
        raise ImportError(
            "ruamel.yaml is required for YAML serialization. Install it with 'pip install lodum[yaml]'."
        )

    dumper = YamlDumper()
    # The core `dump` logic is format-agnostic and can be reused.
    dumped_data = dump(obj, dumper)

    with io.StringIO() as string_stream:
        yaml.dump(dumped_data, string_stream)
        return string_stream.getvalue()


def loads(cls: Type[T], yaml_string: str) -> T:
    """
    Decodes a YAML string to a Python object.
    """
    if not yaml_available:
        raise ImportError(
            "ruamel.yaml is required for YAML deserialization. Install it with 'pip install lodum[yaml]'."
        )

    data = yaml.load(yaml_string)
    loader = YamlLoader(data)
    # The core `load` logic is format-agnostic and can be reused.
    return load(cls, loader)


# --- YAML Dumper Implementation ---


class YamlDumper(Dumper):
    """
    Encodes Python objects into a YAML-compatible intermediate representation.
    """

    def dump_int(self, value: int) -> int:
        return value

    def dump_str(self, value: str) -> str:
        return value

    def dump_float(self, value: float) -> float:
        return value

    def dump_bool(self, value: bool) -> bool:
        return value

    def dump_list(self, value: list) -> list:
        return value

    def dump_dict(self, value: dict) -> dict:
        return value

    def begin_struct(self, cls: Type) -> dict:
        return {}

    def end_struct(self) -> None:
        pass


# --- YAML Loader Implementation ---


class YamlLoader(Loader):
    """
    Decodes a YAML-compatible intermediate representation into Python objects.
    """

    def __init__(self, data: Any):
        self._data = data

    def load_int(self) -> int:
        if not isinstance(self._data, int):
            raise TypeError(f"Expected int, got {type(self._data).__name__}")
        return self._data

    def load_str(self) -> str:
        if not isinstance(self._data, str):
            raise TypeError(f"Expected str, got {type(self._data).__name__}")
        return self._data

    def load_float(self) -> float:
        if not isinstance(self._data, (float, int)):
            raise TypeError(f"Expected float, got {type(self._data).__name__}")
        return float(self._data)

    def load_bool(self) -> bool:
        if not isinstance(self._data, bool):
            raise TypeError(f"Expected bool, got {type(self._data).__name__}")
        return self._data

    def load_list(self) -> Iterator["Loader"]:
        if not isinstance(self._data, list):
            raise TypeError(f"Expected list, got {type(self._data).__name__}")
        return (YamlLoader(item) for item in self._data)

    def load_dict(self) -> Iterator[tuple[str, "Loader"]]:
        if not isinstance(self._data, dict):
            raise TypeError(f"Expected dict, got {type(self._data).__name__}")
        return ((k, YamlLoader(v)) for k, v in self._data.items())

    def load_any(self) -> Any:
        return self._data
