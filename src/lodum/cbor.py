# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
try:
    import cbor2
except ImportError:
    cbor2 = None  # type: ignore
from typing import Any, Iterator, Type, TypeVar

from .core import Loader, BaseDumper, BaseLoader
from .exception import DeserializationError
from .internal import dump, load, DEFAULT_MAX_SIZE

T = TypeVar("T")

# --- Public API ---


def dumps(obj: Any) -> bytes:
    """Encodes a Python object to CBOR bytes (dumps)."""
    if cbor2 is None:
        raise ImportError(
            "cbor2 is required for CBOR serialization. Install it with 'pip install lodum[cbor]'."
        )
    dumper = CborDumper()
    dumped_data = dump(obj, dumper)
    return cbor2.dumps(dumped_data)


def loads(
    cls: Type[T], cbor_bytes: bytes, max_size: int = DEFAULT_MAX_SIZE
) -> T:
    """Decodes CBOR bytes to a Python object (loads)."""
    if len(cbor_bytes) > max_size:
        raise DeserializationError(
            f"Input size ({len(cbor_bytes)}) exceeds maximum allowed ({max_size})"
        )

    if cbor2 is None:
        raise ImportError(
            "cbor2 is required for CBOR deserialization. Install it with 'pip install lodum[cbor]'."
        )
    try:
        data = cbor2.loads(cbor_bytes)
    except Exception as e:
        raise DeserializationError(f"Failed to parse CBOR: {e}")
    loader = CborLoader(data)
    return load(cls, loader)


# --- CBOR Dumper Implementation ---


class CborDumper(BaseDumper):
    pass


# --- CBOR Loader Implementation ---


class CborLoader(BaseLoader):
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
        return (CborLoader(item) for item in self._data)

    def load_dict(self) -> Iterator[tuple[str, "Loader"]]:
        if not isinstance(self._data, dict):
            raise DeserializationError(
                f"Expected dict, got {type(self._data).__name__}"
            )
        return ((k, CborLoader(v)) for k, v in self._data.items())

    def load_bytes(self) -> bytes:
        if not isinstance(self._data, bytes):
            raise DeserializationError(
                f"Expected bytes, got {type(self._data).__name__}"
            )
        return self._data
