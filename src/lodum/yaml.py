# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import io
from typing import Any, Dict, Iterator, Type, TypeVar

try:
    from ruamel.yaml import YAML

    yaml_available = True
except ImportError:
    YAML = None  # type: ignore
    yaml_available = False

from .core import Loader, BaseDumper, BaseLoader
from .internal import dump, load, DEFAULT_MAX_SIZE, generate_schema
from .exception import DeserializationError

T = TypeVar("T")
yaml: Any = None
if yaml_available:
    yaml = YAML(typ="safe")
    yaml.sort_base_mapping_type_on_output = False

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


def loads(cls: Type[T], yaml_string: str, max_size: int = DEFAULT_MAX_SIZE) -> T:
    """
    Decodes a YAML string to a Python object.
    """
    if len(yaml_string) > max_size:
        raise DeserializationError(
            f"Input size ({len(yaml_string)}) exceeds maximum allowed ({max_size})"
        )

    if not yaml_available:
        raise ImportError(
            "ruamel.yaml is required for YAML deserialization. Install it with 'pip install lodum[yaml]'."
        )

    data = yaml.load(yaml_string)
    loader = YamlLoader(data)
    # The core `load` logic is format-agnostic and can be reused.
    return load(cls, loader)


def schema(cls: Type[Any]) -> Dict[str, Any]:
    """Generates a JSON Schema for a given lodum-enabled class."""
    return generate_schema(cls)


# --- YAML Dumper Implementation ---


class YamlDumper(BaseDumper):
    """
    Encodes Python objects into a YAML-compatible intermediate representation.
    """

    def dump_bytes(self, value: bytes) -> Any:
        # YAML can handle bytes natively if using certain tags,
        # but for simplicity and cross-format consistency, we'll use base64 like JSON.
        import base64

        return base64.b64encode(value).decode("ascii")


# --- YAML Loader Implementation ---


class YamlLoader(BaseLoader):
    """
    Decodes a YAML-compatible intermediate representation into Python objects.
    """

    def load_list(self) -> Iterator["Loader"]:
        if not isinstance(self._data, list):
            raise DeserializationError(
                f"Expected list, got {type(self._data).__name__}"
            )
        return (YamlLoader(item) for item in self._data)

    def load_dict(self) -> Iterator[tuple[str, "Loader"]]:
        if not isinstance(self._data, dict):
            raise DeserializationError(
                f"Expected dict, got {type(self._data).__name__}"
            )
        return ((k, YamlLoader(v)) for k, v in self._data.items())

    def load_bytes_value(self, value: Any) -> bytes:
        if isinstance(value, bytes):
            return value
        if not isinstance(value, str):
            raise DeserializationError(f"Expected str, got {type(value).__name__}")
        import base64

        try:
            return base64.b64decode(value)
        except Exception as e:
            raise DeserializationError(f"Failed to decode base64: {e}")
