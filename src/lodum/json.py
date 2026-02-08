# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import json
from typing import Any, Dict, Iterator, Type, TypeVar

from .core import Loader, BaseDumper, BaseLoader
from .exception import DeserializationError
from .internal import dump, load, generate_schema, DEFAULT_MAX_SIZE

T = TypeVar("T")

# --- Public API ---


def dumps(obj: Any) -> str:
    """
    Encodes a Python object to a JSON string.

    Args:
        obj: The object to encode. Must be lodum-enabled or a supported type.

    Returns:
        A JSON string representation of the object.
    """
    dumper = JsonDumper()
    dumped_data = dump(obj, dumper)
    return json.dumps(dumped_data)


def loads(cls: Type[T], json_string: str, max_size: int = DEFAULT_MAX_SIZE) -> T:
    """
    Decodes a JSON string into a Python object of the specified type.

    Args:
        cls: The class to instantiate.
        json_string: The JSON data to decode.
        max_size: Maximum allowed size of the input string in bytes.

    Returns:
        An instance of cls populated with the decoded data.

    Raises:
        DeserializationError: If the input is invalid or exceeds max_size.
    """
    if len(json_string) > max_size:
        raise DeserializationError(
            f"Input size ({len(json_string)}) exceeds maximum allowed ({max_size})"
        )
    data = json.loads(json_string)
    loader = JsonLoader(data)
    return load(cls, loader)


def schema(cls: Type[Any]) -> Dict[str, Any]:
    """Generates a JSON Schema for a given lodum-enabled class."""
    return generate_schema(cls)


# --- JSON Dumper Implementation ---


class JsonDumper(BaseDumper):
    def dump_bytes(self, value: bytes) -> Any:
        import base64

        return base64.b64encode(value).decode("ascii")


# --- JSON Loader Implementation ---


class JsonLoader(BaseLoader):
    def load_list(self) -> Iterator["Loader"]:
        if not isinstance(self._data, list):
            raise DeserializationError(
                f"Expected list, got {type(self._data).__name__}"
            )
        return (JsonLoader(item) for item in self._data)

    def load_dict(self) -> Iterator[tuple[str, "Loader"]]:
        if not isinstance(self._data, dict):
            raise DeserializationError(
                f"Expected dict, got {type(self._data).__name__}"
            )
        return ((k, JsonLoader(v)) for k, v in self._data.items())

    def load_bytes_value(self, value: Any) -> bytes:
        if not isinstance(value, str):
            raise DeserializationError(f"Expected str, got {type(value).__name__}")
        import base64

        try:
            return base64.b64decode(value)
        except Exception as e:
            raise DeserializationError(f"Failed to decode base64: {e}")
