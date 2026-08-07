# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
from typing import (
    Any,
    TypeVar,
    cast,
    get_args,
)

from ..core import Dumper, Loader
from ..exception import DeserializationError, SerializationError

T = TypeVar("T")


def _dump_int(obj: Any, dumper: Dumper, depth: int, seen: set | None) -> int:
    return dumper.dump_int(obj, depth, seen)


def _dump_str(obj: Any, dumper: Dumper, depth: int, seen: set | None) -> str:
    return dumper.dump_str(obj, depth, seen)


def _dump_float(obj: Any, dumper: Dumper, depth: int, seen: set | None) -> float:
    return dumper.dump_float(obj, depth, seen)


def _dump_bool(obj: Any, dumper: Dumper, depth: int, seen: set | None) -> bool:
    return dumper.dump_bool(obj, depth, seen)


def _dump_primitive(obj: Any, dumper: Dumper, depth: int, seen: set | None) -> Any:
    if isinstance(obj, bool):
        return dumper.dump_bool(obj, depth, seen)
    if isinstance(obj, int):
        return dumper.dump_int(obj, depth, seen)
    if isinstance(obj, str):
        return dumper.dump_str(obj, depth, seen)
    if isinstance(obj, float):
        return dumper.dump_float(obj, depth, seen)
    if obj is None:
        return dumper.dump_none(depth, seen)
    raise SerializationError(f"Unsupported primitive type: {type(obj).__name__}")


def _load_primitive(
    cls: type[T], loader: Loader, path: str | None = None, depth: int = 0
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
    cls: type[T], loader: Loader, path: str | None = None, depth: int = 0
) -> T:
    return cast(T, loader.load_any())


def _load_optional(
    cls: type[T], loader: Loader, path: str | None = None, depth: int = 0
) -> T:
    from ..internal import load

    if loader.load_any() is None:
        return cast(T, None)
    inner_type: type[Any] = get_args(cls)[0]
    return load(inner_type, loader, path, depth + 1)
