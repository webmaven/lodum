# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
try:
    import msgpack  # type: ignore[import-untyped]
except ImportError:
    msgpack = None  # type: ignore
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
    Encodes a Python object to MsgPack.

    Args:
        obj: The object to encode.
        target: Optional file-like object or Path to write to.
        **kwargs: Additional arguments for msgpack.packb.

    Returns:
        The MsgPack bytes if target is None, otherwise None.
    """
    if msgpack is None:
        raise ImportError(
            "msgpack is required for MsgPack serialization. Install it with 'pip install lodum[msgpack]'."
        )
    dumper = MsgPackDumper()
    dumped_data = dump_internal(obj, dumper)

    kwargs.setdefault("use_bin_type", True)

    with _resolve_target(target, "wb") as out:
        if out is None:
            return msgpack.packb(dumped_data, **kwargs)
        out.write(msgpack.packb(dumped_data, **kwargs))
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
    Decodes MsgPack from bytes, stream, or file into a Python object.

    Args:
        cls: The class to instantiate.
        source: MsgPack bytes, file-like object, or Path.
        max_size: Maximum allowed size for bytes input.

    Returns:
        An instance of cls.
    """
    if msgpack is None:
        raise ImportError(
            "msgpack is required for MsgPack deserialization. Install it with 'pip install lodum[msgpack]'."
        )

    try:
        with _resolve_source(source, "rb") as src:
            if isinstance(src, (bytes, bytearray)):
                if len(src) > max_size:
                    raise DeserializationError(
                        f"Input size ({len(src)}) exceeds maximum allowed ({max_size})"
                    )
                data = msgpack.unpackb(src, raw=False)
            else:
                data = msgpack.unpack(src, raw=False)
    except Exception as e:
        if isinstance(e, DeserializationError):
            raise
        raise DeserializationError(f"Failed to parse MsgPack: {e}")

    loader = MsgPackLoader(data)
    return load_internal(cls, loader)


def loads(cls: type[T], packed_bytes: bytes, **kwargs: Any) -> T:
    """Legacy alias for load(cls, source)."""
    return load(cls, packed_bytes, **kwargs)


def stream(cls: type[T], source: IO[bytes] | Path) -> Iterator[T]:
    """
    Lazily decodes a stream of MsgPack objects.
    Supports concatenated MsgPack objects (ND-MsgPack style).

    Args:
        cls: The class to instantiate for each item.
        source: A binary stream, file-like object, or Path.

    Returns:
        An iterator yielding instances of `cls`.
    """
    if msgpack is None:
        raise ImportError(
            "msgpack is required for MsgPack deserialization. Install it with 'pip install lodum[msgpack]'."
        )

    with _resolve_source(source, "rb") as src:
        # Use Unpacker for streaming multiple objects
        unpacker = msgpack.Unpacker(src, raw=False)
        for data in unpacker:
            yield load_internal(cls, MsgPackLoader(data))


# --- MsgPack Dumper Implementation ---


class MsgPackDumper(BaseDumper):
    pass


# --- MsgPack Loader Implementation ---


class MsgPackLoader(BaseLoader):
    def load_list(self) -> Iterator["Loader"]:
        if not isinstance(self._data, list):
            raise DeserializationError(
                f"Expected list, got {type(self._data).__name__}"
            )
        return (MsgPackLoader(item) for item in self._data)

    def load_dict(self) -> Iterator[tuple[str, "Loader"]]:
        if not isinstance(self._data, dict):
            raise DeserializationError(
                f"Expected dict, got {type(self._data).__name__}"
            )
        return ((k, MsgPackLoader(v)) for k, v in self._data.items())

    def load_bytes_value(self, value: Any) -> bytes:
        if not isinstance(value, bytes):
            raise DeserializationError(f"Expected bytes, got {type(value).__name__}")
        return value
