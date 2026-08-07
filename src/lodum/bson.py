# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import io

try:
    import bson
except ImportError:
    bson = None  # type: ignore
from collections.abc import Iterator
from pathlib import Path
from typing import IO, Any, TypeVar

from .core import BaseDumper, BaseLoader, Loader
from .exception import DeserializationError
from .internal import (
    DEFAULT_MAX_SIZE,
    _resolve_source,
    _resolve_target,
)
from .internal import (
    dump as dump_internal,
)
from .internal import (
    load as load_internal,
)

T = TypeVar("T")

# --- Public API ---


def dump(
    obj: Any, target: IO[bytes] | Path | None = None, **kwargs: Any
) -> bytes | None:
    """
    Encodes a Python object to BSON.

    Args:
        obj: The object to encode.
        target: Optional file-like object or Path to write to.
        **kwargs: Additional arguments for bson.encode.

    Returns:
        The BSON bytes if target is None, otherwise None.
    """
    if bson is None:
        raise ImportError(
            "bson (pymongo) is required for BSON serialization. Install it with 'pip install lodum[bson]'."
        )
    dumper = BsonDumper()
    dumped_data = dump_internal(obj, dumper)

    # BSON requires a dictionary at the root
    if not isinstance(dumped_data, dict):
        dumped_data = {"_v": dumped_data}

    with _resolve_target(target, "wb") as out:
        if out is None:
            return bson.encode(dumped_data, **kwargs)
        out.write(bson.encode(dumped_data, **kwargs))
        return None


def dumps(obj: Any, **kwargs: Any) -> bytes:
    """Legacy alias for dump(obj)."""
    return dump(obj, **kwargs)  # type: ignore


def load(
    cls: type[T],
    source: bytes | IO[bytes] | Path,
    max_size: int = DEFAULT_MAX_SIZE,
) -> T:
    """
    Decodes BSON from bytes, stream, or file into a Python object.

    Args:
        cls: The class to instantiate.
        source: BSON bytes, file-like object, or Path.
        max_size: Maximum allowed size for bytes input.

    Returns:
        An instance of cls.
    """
    if bson is None:
        raise ImportError(
            "bson (pymongo) is required for BSON deserialization. Install it with 'pip install lodum[bson]'."
        )

    try:
        with _resolve_source(source, "rb") as src:
            if isinstance(src, (bytes, bytearray)):
                if len(src) > max_size:
                    raise DeserializationError(
                        f"Input size ({len(src)}) exceeds maximum allowed ({max_size})"
                    )
                data = bson.decode(src)
            elif hasattr(src, "read"):
                data = bson.decode(src.read())  # type: ignore[arg-type]
            else:
                raise DeserializationError(f"Unsupported source type: {type(src)}")
    except Exception as e:
        if isinstance(e, DeserializationError):
            raise
        raise DeserializationError(f"Failed to parse BSON: {e}")

    # Check if we wrapped a primitive
    if isinstance(data, dict) and "_v" in data and len(data) == 1:
        data = data["_v"]

    loader = BsonLoader(data)
    return load_internal(cls, loader)


def loads(cls: type[T], bson_bytes: bytes, **kwargs: Any) -> T:
    """Legacy alias for load(cls, source)."""
    return load(cls, bson_bytes, **kwargs)


def stream(cls: type[T], source: IO[bytes] | Path) -> Iterator[T]:
    """
    Lazily decodes a stream of BSON objects.
    Supports concatenated BSON objects.

    Args:
        cls: The class to instantiate for each item.
        source: A binary stream, file-like object, or Path.

    Returns:
        An iterator yielding instances of `cls`.
    """
    if bson is None:
        raise ImportError(
            "bson (pymongo) is required for BSON deserialization. Install it with 'pip install lodum[bson]'."
        )

    with _resolve_source(source, "rb") as src:
        if isinstance(src, (bytes, bytearray)):
            src = io.BytesIO(src)

        if not hasattr(src, "read"):
            raise DeserializationError(
                f"Unsupported source type for streaming: {type(src)}"
            )

        # decode_file_iter handles concatenated BSON documents
        for data in bson.decode_file_iter(src):  # type: ignore[arg-type]
            if isinstance(data, dict) and "_v" in data and len(data) == 1:
                data = data["_v"]
            yield load_internal(cls, BsonLoader(data))


# --- BSON Dumper Implementation ---


class BsonDumper(BaseDumper):
    pass


# --- BSON Loader Implementation ---


class BsonLoader(BaseLoader):
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

    def load_bytes_value(self, value: Any) -> bytes:
        if not isinstance(value, bytes):
            raise DeserializationError(f"Expected bytes, got {type(value).__name__}")
        return value
