# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
try:
    import msgpack  # type: ignore[import-untyped]
except ImportError:
    msgpack = None  # type: ignore
from typing import Any, Iterator, Type, TypeVar

from .core import Loader, BaseDumper, BaseLoader
from .exception import DeserializationError
from .internal import dump, load, DEFAULT_MAX_SIZE

T = TypeVar("T")

# --- Public API ---


def dumps(obj: Any) -> bytes:
    """
    Encodes a Python object to MsgPack bytes.

    Args:
        obj: The object to encode. Must be lodum-enabled or a supported type.

    Returns:
        The MsgPack-encoded bytes.

    Raises:
        ImportError: If msgpack is not installed.
    """
    if msgpack is None:
        raise ImportError(
            "msgpack is required for MsgPack serialization. Install it with 'pip install lodum[msgpack]'."
        )
    dumper = MsgPackDumper()
    dumped_data = dump(obj, dumper)
    return msgpack.packb(dumped_data, use_bin_type=True)


def loads(cls: Type[T], packed_bytes: bytes, max_size: int = DEFAULT_MAX_SIZE) -> T:
    """
    Decodes MsgPack bytes into a Python object of the specified type.

    Args:
        cls: The class to instantiate.
        packed_bytes: The MsgPack data to decode.
        max_size: Maximum allowed size of the input bytes.

    Returns:
        An instance of cls populated with the decoded data.

    Raises:
        DeserializationError: If the input is invalid or exceeds max_size.
        ImportError: If msgpack is not installed.
    """
    if len(packed_bytes) > max_size:
        raise DeserializationError(
            f"Input size ({len(packed_bytes)}) exceeds maximum allowed ({max_size})"
        )

    if msgpack is None:
        raise ImportError(
            "msgpack is required for MsgPack deserialization. Install it with 'pip install lodum[msgpack]'."
        )
    try:
        data = msgpack.unpackb(packed_bytes, raw=False)
    except Exception as e:
        raise DeserializationError(f"Failed to parse MsgPack: {e}")
    loader = MsgPackLoader(data)
    return load(cls, loader)


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
