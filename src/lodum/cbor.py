# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import io

try:
    import cbor2
except ImportError:
    cbor2 = None  # type: ignore
from typing import Any, Iterator, Optional, Type, TypeVar, Union, IO
from pathlib import Path

from .core import Loader, BaseDumper, BaseLoader
from .exception import DeserializationError
from .internal import (
    dump as dump_internal,
    load as load_internal,
    DEFAULT_MAX_SIZE,
    _resolve_source,
    _resolve_target,
)

T = TypeVar("T")

# --- Public API ---


def dump(
    obj: Any, target: Optional[Union[IO[bytes], Path]] = None, **kwargs
) -> Optional[bytes]:
    """
    Encodes a Python object to CBOR.

    Args:
        obj: The object to encode.
        target: Optional file-like object or Path to write to.
        **kwargs: Additional arguments for cbor2.dump(s).

    Returns:
        The CBOR bytes if target is None, otherwise None.
    """
    if cbor2 is None:
        raise ImportError(
            "cbor2 is required for CBOR serialization. Install it with 'pip install lodum[cbor]'."
        )
    dumper = CborDumper()
    dumped_data = dump_internal(obj, dumper)

    with _resolve_target(target, "wb") as out:
        if out is None:
            return cbor2.dumps(dumped_data, **kwargs)
        cbor2.dump(dumped_data, out, **kwargs)
        return None


def dumps(obj: Any, **kwargs) -> bytes:
    """Legacy alias for dump(obj)."""
    return dump(obj, **kwargs)  # type: ignore


def load(
    cls: Type[T],
    source: Union[bytes, IO[bytes], Path],
    max_size: int = DEFAULT_MAX_SIZE,
) -> T:
    """
    Decodes CBOR from bytes, stream, or file into a Python object.

    Args:
        cls: The class to instantiate.
        source: CBOR bytes, file-like object, or Path.
        max_size: Maximum allowed size for bytes input.

    Returns:
        An instance of cls.
    """
    if cbor2 is None:
        raise ImportError(
            "cbor2 is required for CBOR deserialization. Install it with 'pip install lodum[cbor]'."
        )

    try:
        with _resolve_source(source, "rb") as src:
            if isinstance(src, (bytes, bytearray)):
                if len(src) > max_size:
                    raise DeserializationError(
                        f"Input size ({len(src)}) exceeds maximum allowed ({max_size})"
                    )
                data = cbor2.loads(src)
            elif hasattr(src, "read"):
                data = cbor2.load(src)  # type: ignore[arg-type]
            else:
                raise DeserializationError(f"Unsupported source type: {type(src)}")
    except Exception as e:
        if isinstance(e, DeserializationError):
            raise
        raise DeserializationError(f"Failed to parse CBOR: {e}")

    loader = CborLoader(data)
    return load_internal(cls, loader)


def loads(cls: Type[T], cbor_bytes: bytes, **kwargs) -> T:
    """Legacy alias for load(cls, source)."""
    return load(cls, cbor_bytes, **kwargs)


def stream(cls: Type[T], source: Union[IO[bytes], Path]) -> Iterator[T]:
    """
    Lazily decodes a stream of CBOR objects.
    Supports concatenated CBOR objects.

    Args:
        cls: The class to instantiate for each item.
        source: A binary stream, file-like object, or Path.

    Returns:
        An iterator yielding instances of `cls`.
    """
    if cbor2 is None:
        raise ImportError(
            "cbor2 is required for CBOR deserialization. Install it with 'pip install lodum[cbor]'."
        )

    with _resolve_source(source, "rb") as src:
        if isinstance(src, (bytes, bytearray)):
            src = io.BytesIO(src)

        if not hasattr(src, "read"):
            raise DeserializationError(
                f"Unsupported source type for streaming: {type(src)}"
            )

        decoder = cbor2.CBORDecoder(src)  # type: ignore[arg-type]
        try:
            while True:
                data = decoder.decode()
                yield load_internal(cls, CborLoader(data))
        except (EOFError, cbor2.CBORDecodeEOF):
            pass


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

    def load_bytes_value(self, value: Any) -> bytes:
        if not isinstance(value, bytes):
            raise DeserializationError(f"Expected bytes, got {type(value).__name__}")
        return value
