# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
try:
    import bson
except ImportError:
    bson = None  # type: ignore
from typing import Any, Iterator, Type, TypeVar

from .core import Loader, BaseDumper, BaseLoader
from .exception import DeserializationError
from .internal import dump, load, DEFAULT_MAX_SIZE

T = TypeVar("T")

# --- Public API ---


def dumps(obj: Any) -> bytes:
    """Encodes a Python object to BSON bytes (dumps)."""
    if bson is None:
        raise ImportError(
            "bson (pymongo) is required for BSON serialization. Install it with 'pip install lodum[bson]'."
        )
    dumper = BsonDumper()
    dumped_data = dump(obj, dumper)
    # BSON requires a dictionary at the root
    if not isinstance(dumped_data, dict):
        dumped_data = {"_v": dumped_data}
    return bson.encode(dumped_data)


def loads(cls: Type[T], bson_bytes: bytes, max_size: int = DEFAULT_MAX_SIZE) -> T:
    """Decodes BSON bytes to a Python object (loads)."""
    if len(bson_bytes) > max_size:
        raise DeserializationError(
            f"Input size ({len(bson_bytes)}) exceeds maximum allowed ({max_size})"
        )

    if bson is None:
        raise ImportError(
            "bson (pymongo) is required for BSON deserialization. Install it with 'pip install lodum[bson]'."
        )
    try:
        data = bson.decode(bson_bytes)
    except Exception as e:
        raise DeserializationError(f"Failed to parse BSON: {e}")

    # Check if we wrapped a primitive
    if "_v" in data and len(data) == 1:
        data = data["_v"]

    loader = BsonLoader(data)
    return load(cls, loader)


# --- BSON Dumper Implementation ---


class BsonDumper(BaseDumper):
    pass


# --- BSON Loader Implementation ---


class BsonLoader(BaseLoader):
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
            raise DeserializationError(
                f"Expected float, got {type(self._data).__name__}"
            )
        return float(self._data)

    def load_bool(self) -> bool:
        if not isinstance(self._data, bool):
            raise DeserializationError(
                f"Expected bool, got {type(self._data).__name__}"
            )
        return self._data

    def load_list(self) -> Iterator["Loader"]:
        if not isinstance(self._data, list):
            raise DeserializationError(
                f"Expected list, got {type(self._data).__name__}"
            )
        return (BsonLoader(item) for item in self._data)

    def load_dict(self) -> Iterator[tuple[str, "Loader"]]:
        if not isinstance(self._data, dict):
            raise DeserializationError(
                f"Expected dict, got {type(self._data).__name__}"
            )
        return ((k, BsonLoader(v)) for k, v in self._data.items())

    def load_bytes(self) -> bytes:
        if not isinstance(self._data, bytes):
            raise DeserializationError(
                f"Expected bytes, got {type(self._data).__name__}"
            )
        return self._data
