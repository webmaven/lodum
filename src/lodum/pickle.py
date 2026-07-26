# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import pickle
import builtins
import io
from typing import Any, Optional, Type, TypeVar, Union, IO
from pathlib import Path

from .core import Dumper
from .internal import (
    dump as validate_lodum_structure,
    DEFAULT_MAX_SIZE,
    _resolve_source,
    _resolve_target,
)
from .exception import DeserializationError

T = TypeVar("T")

# --- Safe Encoding ---


class ValidationDumper(Dumper):
    """A no-op dumper used only for validation."""

    def dump_int(self, value: int, depth: int = 0, seen: Optional[set] = None) -> Any:
        pass

    def dump_str(self, value: str, depth: int = 0, seen: Optional[set] = None) -> Any:
        pass

    def dump_float(
        self, value: float, depth: int = 0, seen: Optional[set] = None
    ) -> Any:
        pass

    def dump_bool(self, value: bool, depth: int = 0, seen: Optional[set] = None) -> Any:
        pass

    def dump_bytes(
        self, value: bytes, depth: int = 0, seen: Optional[set] = None
    ) -> Any:
        pass

    def dump_list(
        self, value: list[Any], depth: int = 0, seen: Optional[set] = None
    ) -> Any:
        pass

    def dump_dict(
        self, value: dict[str, Any], depth: int = 0, seen: Optional[set] = None
    ) -> Any:
        pass

    def begin_struct(self, cls: Type[Any]) -> Any:
        return {}  # Return a dummy dict

    def end_struct(self) -> Any:
        pass

    def field(
        self,
        name: str,
        value: Any,
        handler: Any,
        depth: int = 0,
        seen: Optional[set] = None,
    ) -> None:
        handler(value, self, depth, seen)

    def begin_list(self) -> None:
        pass

    def end_list(self) -> Any:
        pass

    def list_item(
        self,
        value: Any,
        handler: Any,
        depth: int = 0,
        seen: Optional[set] = None,
    ) -> None:
        handler(value, self, depth, seen)

    def dump_none(self, depth: int = 0, seen: Optional[set] = None) -> Any:
        pass


def dump(
    obj: Any, target: Optional[Union[IO[bytes], Path]] = None, **kwargs: Any
) -> Optional[bytes]:
    """
    Encodes a Python object to a pickle byte string, ensuring it is safe.

    Args:
        obj: The object to encode.
        target: Optional file-like object or Path to write to.
        **kwargs: Additional arguments for pickle.dump(s).

    Returns:
        The pickle bytes if target is None, otherwise None.
    """
    validator = ValidationDumper()
    validate_lodum_structure(obj, validator)

    with _resolve_target(target, "wb") as out:
        if out is None:
            return pickle.dumps(obj, **kwargs)
        pickle.dump(obj, out, **kwargs)
        return None


def dumps(obj: Any, **kwargs: Any) -> bytes:
    """Legacy alias for dump(obj)."""
    return dump(obj, **kwargs)  # type: ignore


# --- Safe Decoding ---


class SafeUnpickler(pickle.Unpickler):
    """
    A custom unpickler that only allows safe, lodum-enabled classes to be loaded.
    """

    def find_class(self, module_name: str, class_name: str) -> Type:
        if "os" in module_name or "sys" in module_name or "subprocess" in module_name:
            raise pickle.UnpicklingError(f"Unsafe module '{module_name}' is forbidden.")

        SAFE_BUILTINS = {
            "int",
            "float",
            "str",
            "bool",
            "bytes",
            "bytearray",
            "list",
            "tuple",
            "dict",
            "set",
            "frozenset",
            "complex",
            "NoneType",
            "type",
        }

        if module_name == "builtins":
            if class_name in SAFE_BUILTINS and hasattr(builtins, class_name):
                return getattr(builtins, class_name)
            raise pickle.UnpicklingError(f"Unsafe builtin '{class_name}' is forbidden.")

        if module_name == "collections" and class_name in (
            "defaultdict",
            "OrderedDict",
            "Counter",
        ):
            import collections

            return getattr(collections, class_name)

        if module_name == "array" and class_name in ("array", "_array_reconstructor"):
            import array

            return getattr(array, class_name)

        cls = super().find_class(module_name, class_name)

        if getattr(cls, "_lodum_enabled", False):
            return cls

        raise pickle.UnpicklingError(
            f"Attempted to unpickle a non-lodum type: {module_name}.{class_name}"
        )


def load(
    cls: Type[T],
    source: Union[bytes, IO[bytes], Path],
    max_size: int = DEFAULT_MAX_SIZE,
) -> T:
    """
    Decodes a pickle from bytes, stream, or file into a Python object.

    Args:
        cls: The class to instantiate.
        source: pickle bytes, file-like object, or Path.
        max_size: Maximum allowed size for bytes input.

    Returns:
        An instance of cls.
    """
    try:
        with _resolve_source(source, "rb") as src:
            f: IO[bytes]
            if isinstance(src, (bytes, bytearray)):
                if len(src) > max_size:
                    raise DeserializationError(
                        f"Input size ({len(src)}) exceeds maximum allowed ({max_size})"
                    )
                # Unpickler doesn't take bytes directly
                f = io.BytesIO(src)
            elif hasattr(src, "read"):
                f = src  # type: ignore[assignment]
            else:
                raise DeserializationError(f"Unsupported source type: {type(src)}")

            unpickler = SafeUnpickler(f)
            obj = unpickler.load()
    except (
        pickle.UnpicklingError,
        AttributeError,
        ImportError,
        IndexError,
        TypeError,
    ) as e:
        raise DeserializationError(f"Failed to unpickle data: {e}")

    if not isinstance(obj, cls):
        raise DeserializationError(
            f"Deserialized object is of type {type(obj).__name__}, but expected {cls.__name__}"
        )

    return obj


def loads(cls: Type[T], data: bytes, **kwargs: Any) -> T:
    """Legacy alias for load(cls, source)."""
    return load(cls, data, **kwargs)
