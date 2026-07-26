# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
try:
    import tomllib  # type: ignore[import-not-found]
except ImportError:
    try:
        import tomli as tomllib  # type: ignore[no-redef, import-not-found]
    except ImportError:
        tomllib = None  # type: ignore

try:
    import tomli_w
except ImportError:
    tomli_w = None  # type: ignore
from typing import Any, Dict, Iterator, Optional, Type, TypeVar, Union, IO
from pathlib import Path

from .core import Loader, BaseDumper, BaseLoader
from .exception import DeserializationError
from .internal import (
    dump as dump_internal,
    load as load_internal,
    DEFAULT_MAX_SIZE,
    generate_schema,
    _resolve_source,
    _resolve_target,
)

T = TypeVar("T")

# --- Public API ---


def dump(
    obj: Any, target: Optional[Union[IO[str], Path]] = None, **kwargs: Any
) -> Optional[str]:
    """
    Encodes a Python object to TOML.

    Args:
        obj: The object to encode.
        target: Optional file-like object or Path to write to.
        **kwargs: Additional arguments for tomli_w.dump(s).

    Returns:
        The TOML string if target is None, otherwise None.

    Raises:
        ImportError: If tomli-w is not installed.
    """
    if tomli_w is None:
        raise ImportError(
            "tomli-w is required for TOML serialization. Install it with 'pip install lodum[toml]'."
        )
    dumper = TomlDumper()
    dumped_data = dump_internal(obj, dumper)

    with _resolve_target(target, "w") as out:
        if out is None:
            return tomli_w.dumps(dumped_data, **kwargs)
        tomli_w.dump(dumped_data, out, **kwargs)
        return None


def dumps(obj: Any, **kwargs: Any) -> str:
    """Legacy alias for dump(obj)."""
    return dump(obj, **kwargs)  # type: ignore


def load(
    cls: Type[T], source: Union[str, IO[Any], Path], max_size: int = DEFAULT_MAX_SIZE
) -> T:
    """
    Decodes TOML from a string, stream, or file into a Python object.

    Args:
        cls: The class to instantiate.
        source: TOML string, file-like object, or Path.
        max_size: Maximum allowed size for string input.

    Returns:
        An instance of cls populated with the decoded data.

    Raises:
        DeserializationError: If the input is invalid or exceeds max_size.
        ImportError: If tomllib (or tomli) is not installed.
    """
    if tomllib is None:
        raise ImportError(
            "tomllib (or tomli) is required for TOML deserialization. Install it with 'pip install lodum[toml]'."
        )

    try:
        with _resolve_source(source, "rb") as src:
            if isinstance(src, str):
                if len(src) > max_size:
                    raise DeserializationError(
                        f"Input size ({len(src)}) exceeds maximum allowed ({max_size})"
                    )
                data = tomllib.loads(src)
            elif hasattr(src, "read"):
                data = tomllib.load(src)  # type: ignore[arg-type]
            else:
                raise DeserializationError(f"Unsupported source type: {type(src)}")
    except Exception as e:
        if isinstance(e, DeserializationError):
            raise
        raise DeserializationError(f"Failed to parse TOML: {e}")

    loader = TomlLoader(data)
    return load_internal(cls, loader)


def loads(cls: Type[T], toml_string: str, **kwargs: Any) -> T:
    """Legacy alias for load(cls, source)."""
    return load(cls, toml_string, **kwargs)


def schema(cls: Type[Any]) -> Dict[str, Any]:
    """Generates a JSON Schema for a given lodum-enabled class."""
    return generate_schema(cls)


# --- TOML Dumper Implementation ---


class TomlDumper(BaseDumper):
    def dump_bytes(
        self, value: bytes, depth: int = 0, seen: Optional[set] = None
    ) -> Any:
        import base64

        return base64.b64encode(value).decode("ascii")


# --- TOML Loader Implementation ---


class TomlLoader(BaseLoader):
    def load_list(self) -> Iterator["Loader"]:
        if not isinstance(self._data, list):
            raise DeserializationError(
                f"Expected list, got {type(self._data).__name__}"
            )
        return (TomlLoader(item) for item in self._data)

    def load_dict(self) -> Iterator[tuple[str, "Loader"]]:
        if not isinstance(self._data, dict):
            raise DeserializationError(
                f"Expected dict, got {type(self._data).__name__}"
            )
        return ((k, TomlLoader(v)) for k, v in self._data.items())

    def load_bytes_value(self, value: Any) -> bytes:
        if not isinstance(value, str):
            raise DeserializationError(f"Expected str, got {type(value).__name__}")
        import base64

        try:
            return base64.b64decode(value)
        except Exception as e:
            raise DeserializationError(f"Failed to decode base64: {e}")
