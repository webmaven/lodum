# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import io
from collections.abc import Iterator
from pathlib import Path
from typing import IO, Any, TypeVar

try:
    from ruamel.yaml import YAML

    yaml_available = True
except ImportError:
    YAML = None  # type: ignore
    yaml_available = False

from .core import BaseDumper, BaseLoader, Loader
from .exception import DeserializationError
from .internal import (
    DEFAULT_MAX_SIZE,
    _resolve_source,
    _resolve_target,
    generate_schema,
)
from .internal import (
    dump as dump_internal,
)
from .internal import (
    load as load_internal,
)

T = TypeVar("T")
_yaml_instance: Any = None


def _get_yaml():
    global _yaml_instance
    if _yaml_instance is None and yaml_available:
        _yaml_instance = YAML(typ="safe")
        _yaml_instance.sort_base_mapping_type_on_output = False
    return _yaml_instance


# --- Public API ---


def dump(obj: Any, target: IO[str] | Path | None = None, **kwargs: Any) -> str | None:
    """
    Encodes a Python object to YAML.

    Args:
        obj: The object to encode.
        target: Optional file-like object or Path to write to.
        **kwargs: Additional arguments for yaml.dump.

    Returns:
        The YAML string if target is None, otherwise None.
    """
    if not yaml_available:
        raise ImportError(
            "ruamel.yaml is required for YAML serialization. Install it with 'pip install lodum[yaml]'."
        )

    dumper = YamlDumper()
    dumped_data = dump_internal(obj, dumper)

    with _resolve_target(target, "w") as out:
        if out is None:
            with io.StringIO() as string_stream:
                _get_yaml().dump(dumped_data, string_stream, **kwargs)
                return string_stream.getvalue()
        _get_yaml().dump(dumped_data, out, **kwargs)
        return None


def dumps(obj: Any, **kwargs: Any) -> str:
    """Legacy alias for dump(obj)."""
    return dump(obj, **kwargs)  # type: ignore


def load(
    cls: type[T], source: str | IO[Any] | Path, max_size: int = DEFAULT_MAX_SIZE
) -> T:
    """
    Decodes YAML from a string, stream, or file into a Python object.

    Args:
        cls: The class to instantiate.
        source: YAML string, file-like object, or Path.
        max_size: Maximum allowed size for string input.

    Returns:
        An instance of cls.
    """
    if not yaml_available:
        raise ImportError(
            "ruamel.yaml is required for YAML deserialization. Install it with 'pip install lodum[yaml]'."
        )

    try:
        with _resolve_source(source, "r") as src:
            if isinstance(src, str):
                if len(src) > max_size:
                    raise DeserializationError(
                        f"Input size ({len(src)}) exceeds maximum allowed ({max_size})"
                    )
                data = _get_yaml().load(src)
            else:
                data = _get_yaml().load(src)
    except Exception as e:
        if isinstance(e, DeserializationError):
            raise
        raise DeserializationError(f"Failed to parse YAML: {e}")

    loader = YamlLoader(data)
    return load_internal(cls, loader)


def loads(cls: type[T], yaml_string: str, **kwargs: Any) -> T:
    """Legacy alias for load(cls, source)."""
    return load(cls, yaml_string, **kwargs)


def stream(cls: type[T], source: IO[Any] | Path) -> Iterator[T]:
    """
    Lazily decodes a stream of YAML documents.

    Args:
        cls: The class to instantiate for each item.
        source: A stream, file-like object, or Path.

    Returns:
        An iterator yielding instances of `cls`.
    """
    if not yaml_available:
        raise ImportError(
            "ruamel.yaml is required for YAML deserialization. Install it with 'pip install lodum[yaml]'."
        )

    with _resolve_source(source, "r") as src:
        # load_all handles multi-document YAML streams
        for data in _get_yaml().load_all(src):
            yield load_internal(cls, YamlLoader(data))


def schema(cls: type[Any]) -> dict[str, Any]:
    """Generates a JSON Schema for a given lodum-enabled class."""
    return generate_schema(cls)


# --- YAML Dumper Implementation ---


class YamlDumper(BaseDumper):
    """
    Encodes Python objects into a YAML-compatible intermediate representation.
    """

    def dump_bytes(self, value: bytes, depth: int = 0, seen: set | None = None) -> Any:
        # YAML can handle bytes natively if using certain tags,
        # but for simplicity and cross-format consistency, we'll use base64 like JSON.
        import base64

        return base64.b64encode(value).decode("ascii")

    def dump_buffer(self, value: Any, depth: int = 0, seen: set | None = None) -> Any:
        if hasattr(value, "tolist"):
            return value.tolist()
        if isinstance(value, (bytes, bytearray, memoryview)):
            return self.dump_bytes(bytes(value), depth, seen)
        return value


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
