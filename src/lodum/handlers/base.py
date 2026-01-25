# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
from typing import (
    Any,
    Optional,
    Type,
    TypeVar,
    get_args,
    cast,
)

from ..core import Loader, Dumper
from ..exception import DeserializationError, SerializationError

T = TypeVar("T")


def _dump_int(obj: Any, dumper: Dumper, depth: int, seen: Optional[set]) -> int:
    return dumper.dump_int(obj)


def _dump_str(obj: Any, dumper: Dumper, depth: int, seen: Optional[set]) -> str:
    return dumper.dump_str(obj)


def _dump_float(obj: Any, dumper: Dumper, depth: int, seen: Optional[set]) -> float:
    return dumper.dump_float(obj)


def _dump_bool(obj: Any, dumper: Dumper, depth: int, seen: Optional[set]) -> bool:
    return dumper.dump_bool(obj)


def _dump_primitive(obj: Any, dumper: Dumper, depth: int, seen: Optional[set]) -> Any:
    if isinstance(obj, bool):
        return dumper.dump_bool(obj)
    if isinstance(obj, int):
        return dumper.dump_int(obj)
    if isinstance(obj, str):
        return dumper.dump_str(obj)
    if isinstance(obj, float):
        return dumper.dump_float(obj)
    if obj is None:
        return None
    raise SerializationError(f"Unsupported primitive type: {type(obj).__name__}")


def _load_primitive(
    cls: Type[T], loader: Loader, path: Optional[str] = None, depth: int = 0
) -> T:
    try:
        if cls is int:
            return cast(T, loader.load_int())
        if cls is str:
            return cast(T, loader.load_str())
        if cls is float:
            return cast(T, loader.load_float())
        if cls is bool:
            return cast(T, loader.load_bool())
        if cls is type(None):
            return cast(T, None)
    except DeserializationError as e:
        raise DeserializationError(e.raw_message, e.path or path)
    raise DeserializationError(f"Unsupported primitive type: {cls.__name__}", path)


def _load_any(
    cls: Type[T], loader: Loader, path: Optional[str] = None, depth: int = 0
) -> T:
    return cast(T, loader.load_any())


def _load_optional(
    cls: Type[T], loader: Loader, path: Optional[str] = None, depth: int = 0
) -> T:
    from ..internal import load

    if loader.load_any() is None:
        return cast(T, None)
    inner_type: Type[Any] = get_args(cls)[0]
    return load(inner_type, loader, path, depth + 1)
