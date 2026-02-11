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
from typing import Any, Dict, Iterator, Type, TypeVar

from .core import Loader, BaseDumper, BaseLoader
from .exception import DeserializationError
from .internal import dump, load, DEFAULT_MAX_SIZE, generate_schema

T = TypeVar("T")

# --- Public API ---


def dumps(obj: Any) -> str:
    """
    Encodes a Python object to a TOML string.

    Args:
        obj: The object to encode. Must be lodum-enabled or a supported type.

    Returns:
        A TOML string representation of the object.

    Raises:
        ImportError: If tomli-w is not installed.
    """
    if tomli_w is None:
        raise ImportError(
            "tomli-w is required for TOML serialization. Install it with 'pip install lodum[toml]'."
        )
    dumper = TomlDumper()
    dumped_data = dump(obj, dumper)
    return tomli_w.dumps(dumped_data)


def loads(cls: Type[T], toml_string: str, max_size: int = DEFAULT_MAX_SIZE) -> T:
    """
    Decodes a TOML string into a Python object of the specified type.

    Args:
        cls: The class to instantiate.
        toml_string: The TOML data to decode.
        max_size: Maximum allowed size of the input string in bytes.

    Returns:
        An instance of cls populated with the decoded data.

    Raises:
        DeserializationError: If the input is invalid or exceeds max_size.
        ImportError: If tomllib (or tomli) is not installed.
    """
    if len(toml_string) > max_size:
        raise DeserializationError(
            f"Input size ({len(toml_string)}) exceeds maximum allowed ({max_size})"
        )

    if tomllib is None:
        raise ImportError(
            "tomllib (or tomli) is required for TOML deserialization. Install it with 'pip install lodum[toml]'."
        )
    try:
        data = tomllib.loads(toml_string)
    except Exception as e:
        if isinstance(e, DeserializationError):
            raise e
        raise DeserializationError(f"Failed to parse TOML: {e}")
    loader = TomlLoader(data)
    return load(cls, loader)


def schema(cls: Type[Any]) -> Dict[str, Any]:
    """Generates a JSON Schema for a given lodum-enabled class."""
    return generate_schema(cls)


# --- TOML Dumper Implementation ---


class TomlDumper(BaseDumper):
    def dump_bytes(self, value: bytes) -> Any:
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
