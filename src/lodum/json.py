# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import json
from typing import Any, Dict, Iterator, Optional, Type, TypeVar, IO, Union
from pathlib import Path

from .core import Loader, BaseDumper, BaseLoader, StreamingDumper
from .exception import DeserializationError
from .internal import (
    dump as dump_internal,
    load as load_internal,
    generate_schema,
    DEFAULT_MAX_SIZE,
    _resolve_source,
    _resolve_target,
)

T = TypeVar("T")

# --- Public API ---


def dump(
    obj: Any, target: Optional[Union[IO[str], Path]] = None, **kwargs: Any
) -> Optional[str]:
    """
    Encodes a Python object to JSON.

    Args:
        obj: The object to encode.
        target: Optional file-like object or Path to write to.
        **kwargs: Additional arguments for json.dump(s) (e.g., indent).
                 Note: If target is provided, O(1) streaming is used and some
                 formatting kwargs might be ignored in the current implementation.

    Returns:
        The JSON string if target is None, otherwise None.
    """
    if target is None:
        # IR Mode for string output
        dumper = JsonDumper()
        dumped_data = dump_internal(obj, dumper)
        return json.dumps(dumped_data, **kwargs)

    # O(1) Streaming Mode
    with _resolve_target(target, "w") as out:
        assert out is not None
        dumper_stream = JsonStreamingDumper(out)
        dump_internal(obj, dumper_stream)
        return None


def dumps(obj: Any, **kwargs: Any) -> str:
    """Legacy alias for dump(obj)."""
    return dump(obj, **kwargs)  # type: ignore


def load(
    cls: Type[T], source: Union[str, IO[Any], Path], max_size: int = DEFAULT_MAX_SIZE
) -> T:
    """
    Decodes JSON from a string, stream, or file into a Python object.

    Args:
        cls: The class to instantiate.
        source: JSON string, file-like object, or Path.
        max_size: Maximum allowed size for string input.

    Returns:
        An instance of cls.
    """
    try:
        with _resolve_source(source, "r") as src:
            if isinstance(src, str):
                if len(src) > max_size:
                    raise DeserializationError(
                        f"Input size ({len(src)}) exceeds maximum allowed ({max_size})"
                    )
                data = json.loads(src)
            elif hasattr(src, "read"):
                data = json.load(src)  # type: ignore[arg-type]
            else:
                raise DeserializationError(f"Unsupported source type: {type(src)}")
    except Exception as e:
        if isinstance(e, DeserializationError):
            raise
        raise DeserializationError(f"Failed to parse JSON: {e}")

    loader = JsonLoader(data)
    return load_internal(cls, loader)


def loads(cls: Type[T], json_string: str, **kwargs: Any) -> T:
    """Legacy alias for load(cls, source)."""
    return load(cls, json_string, **kwargs)


def stream(cls: Type[T], source: Union[IO[bytes], Path]) -> Iterator[T]:
    """
    Lazily decodes a stream of JSON objects into instances of `cls`.
    Intended for sources containing a top-level array of objects.

    Args:
        cls: The class to instantiate for each item.
        source: A binary stream, file-like object, or Path to a JSON array.

    Returns:
        An iterator yielding instances of `cls`.
    """
    try:
        import ijson  # type: ignore[import-untyped]
    except ImportError:
        raise RuntimeError(
            "Streaming support requires 'ijson'. Install it with: pip install lodum[ijson]"
        )

    with _resolve_source(source, "rb") as src:
        try:
            # ijson.items yields standard Python dicts for each element.
            for item in ijson.items(src, "item"):
                yield load_internal(cls, JsonLoader(item))
        except ijson.common.JSONError as e:
            raise DeserializationError(f"Streaming JSON error: {e}")


def load_stream(cls: Type[T], stream_io: IO[bytes]) -> Iterator[T]:
    """Legacy alias for stream(cls, source)."""
    return stream(cls, stream_io)


def schema(cls: Type[Any]) -> Dict[str, Any]:
    """Generates a JSON Schema for a given lodum-enabled class."""
    return generate_schema(cls)


# --- JSON Dumper Implementation ---


class JsonDumper(BaseDumper):
    def dump_bytes(
        self, value: bytes, depth: int = 0, seen: Optional[set] = None
    ) -> Any:
        import base64

        return base64.b64encode(value).decode("ascii")

    def dump_buffer(
        self, value: Any, depth: int = 0, seen: Optional[set] = None
    ) -> Any:
        if hasattr(value, "tolist"):
            return value.tolist()
        if isinstance(value, (bytes, bytearray, memoryview)):
            return self.dump_bytes(bytes(value), depth, seen)
        return value


class JsonStreamingDumper(StreamingDumper):
    """
    Writes JSON tokens directly to a stream.
    """

    def dump_int(self, value: int, depth: int = 0, seen: Optional[set] = None) -> Any:
        self.write_raw(str(value))

    def dump_str(self, value: str, depth: int = 0, seen: Optional[set] = None) -> Any:
        self.write_raw(json.dumps(value))

    def dump_float(
        self, value: float, depth: int = 0, seen: Optional[set] = None
    ) -> Any:
        self.write_raw(str(value))

    def dump_bool(self, value: bool, depth: int = 0, seen: Optional[set] = None) -> Any:
        self.write_raw("true" if value else "false")

    def dump_none(self, depth: int = 0, seen: Optional[set] = None) -> Any:
        self.write_raw("null")

    def dump_bytes(
        self, value: bytes, depth: int = 0, seen: Optional[set] = None
    ) -> Any:
        import base64

        encoded = base64.b64encode(value).decode("ascii")
        self.write_raw(json.dumps(encoded))

    def dump_buffer(
        self, value: Any, depth: int = 0, seen: Optional[set] = None
    ) -> Any:
        if hasattr(value, "tolist"):
            from .internal import dump as _dump
            return _dump(value.tolist(), self, depth + 1, seen)
        if isinstance(value, (bytes, bytearray, memoryview)):
            return self.dump_bytes(bytes(value), depth, seen)
        return value

    def dump_list(
        self, value: list[Any], depth: int = 0, seen: Optional[set] = None
    ) -> Any:
        # Should normally not be called directly if orchestration is used
        from .internal import dump as _dump

        self.begin_list()
        for item in value:
            self.list_item(item, _dump, depth + 1, seen)
        return self.end_list()

    def dump_dict(
        self, value: dict[str, Any], depth: int = 0, seen: Optional[set] = None
    ) -> Any:
        # Should normally not be called directly if orchestration is used
        from .internal import dump as _dump

        self.begin_struct(dict)
        for k, v in value.items():
            self.field(str(k), v, _dump, depth + 1, seen)
        return self.end_struct()

    def begin_struct(self, cls: Type) -> Any:
        super().begin_struct(cls)
        self.write_raw("{")
        return None

    def end_struct(self) -> Any:
        self.write_raw("}")
        return super().end_struct()

    def field(
        self,
        name: str,
        value: Any,
        handler: Any,
        depth: int = 0,
        seen: Optional[set] = None,
    ) -> None:
        if not self._first_item_stack[-1]:
            self.write_raw(",")
        self._first_item_stack[-1] = False

        self.write_raw(json.dumps(name))
        self.write_raw(":")
        handler(value, self, depth, seen)

    def begin_list(self) -> None:
        super().begin_list()
        self.write_raw("[")

    def end_list(self) -> Any:
        self.write_raw("]")
        return super().end_list()

    def list_item(
        self,
        value: Any,
        handler: Any,
        depth: int = 0,
        seen: Optional[set] = None,
    ) -> None:
        if not self._first_item_stack[-1]:
            self.write_raw(",")
        self._first_item_stack[-1] = False

        handler(value, self, depth, seen)


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
