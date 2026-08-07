# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import datetime
import enum
import uuid
from decimal import Decimal
from pathlib import Path
from typing import (
    Any,
    TypeVar,
    cast,
)

from ..core import Dumper, Loader
from ..exception import DeserializationError

T = TypeVar("T")


def _dump_bytes(obj: Any, d: Dumper, depth: int, seen: set | None) -> Any:
    return d.dump_bytes(obj, depth, seen)


def _dump_bytearray(obj: Any, d: Dumper, depth: int, seen: set | None) -> Any:
    if hasattr(d, "dump_buffer"):
        return d.dump_buffer(obj, depth, seen)
    return d.dump_bytes(bytes(obj), depth, seen)


def _dump_datetime(
    obj: datetime.datetime, d: Dumper, depth: int, seen: set | None
) -> str:
    return d.dump_str(obj.isoformat(), depth, seen)


def _dump_enum(obj: enum.Enum, d: Dumper, depth: int, seen: set | None) -> Any:
    from ..internal import dump

    return dump(obj.value, d, depth + 1, seen)


def _dump_uuid(obj: uuid.UUID, d: Dumper, depth: int, seen: set | None) -> str:
    return d.dump_str(str(obj), depth, seen)


def _dump_decimal(obj: Any, d: Dumper, depth: int, seen: set | None) -> str:
    return d.dump_str(str(obj), depth, seen)


def _dump_path(obj: Any, d: Dumper, depth: int, seen: set | None) -> str:
    return d.dump_str(str(obj), depth, seen)


def _load_datetime(
    cls: type[T], loader: Loader, path: str | None = None, depth: int = 0
) -> T:
    val = loader.load_str()
    try:
        return cast(T, datetime.datetime.fromisoformat(val))
    except (ValueError, DeserializationError) as e:
        msg = (
            f"Invalid ISO datetime format: '{val}'"
            if isinstance(e, ValueError)
            else e.raw_message
        )
        raise DeserializationError(msg, path)


def _load_enum(
    cls: type[T], loader: Loader, path: str | None = None, depth: int = 0
) -> T:
    from ..internal import load

    try:
        first_member = next(iter(cls))  # type: ignore[call-overload]
        value = load(type(first_member.value), loader, path, depth + 1)
        return cast(T, cls(value))  # type: ignore[call-arg]
    except (ValueError, StopIteration, DeserializationError) as e:
        if isinstance(e, StopIteration):
            msg = f"Cannot load into empty Enum {cls.__name__}"
        elif isinstance(e, ValueError):
            msg = f"Invalid value for Enum {cls.__name__}"
        else:
            msg = e.raw_message
        raise DeserializationError(msg, path)


def _load_uuid(
    cls: type[T], loader: Loader, path: str | None = None, depth: int = 0
) -> T:
    val = loader.load_str()
    try:
        return cast(T, uuid.UUID(val))
    except (ValueError, DeserializationError) as e:
        msg = (
            f"Invalid UUID format: '{val}'"
            if isinstance(e, ValueError)
            else e.raw_message
        )
        raise DeserializationError(msg, path)


def _load_decimal(
    cls: type[T], loader: Loader, path: str | None = None, depth: int = 0
) -> T:
    try:
        # Load as string or float/int or direct Decimal (BSON might provide it)
        val = loader.load_any()
        if isinstance(val, Decimal):
            return cast(T, val)
        if not isinstance(val, (str, float, int)):
            raise DeserializationError(
                f"Expected string, float or int for Decimal, got {type(val).__name__}"
            )
        return cast(T, Decimal(str(val)))
    except (ValueError, DeserializationError) as e:
        msg = e.raw_message if isinstance(e, DeserializationError) else str(e)
        raise DeserializationError(
            msg, e.path if isinstance(e, DeserializationError) and e.path else path
        )


def _load_path(
    cls: type[T], loader: Loader, path: str | None = None, depth: int = 0
) -> T:
    try:
        return cast(T, Path(loader.load_str()))
    except (TypeError, DeserializationError) as e:
        msg = "Invalid Path format" if isinstance(e, TypeError) else e.raw_message
        raise DeserializationError(msg, path)


def _load_bytes(
    cls: type[T], loader: Loader, path: str | None = None, depth: int = 0
) -> T:
    try:
        return cast(T, loader.load_bytes())
    except (TypeError, DeserializationError) as e:
        msg = (
            "Expected bytes or base64 string"
            if isinstance(e, TypeError)
            else f"Expected bytes or base64 string: {e.raw_message}"
        )
        raise DeserializationError(msg, path)


def _load_bytearray(
    cls: type[T], loader: Loader, path: str | None = None, depth: int = 0
) -> T:
    try:
        return cast(T, bytearray(loader.load_bytes()))
    except (TypeError, DeserializationError, ValueError) as e:
        msg = (
            "Invalid bytearray data"
            if isinstance(e, (TypeError, ValueError))
            else f"Invalid bytearray data: {e.raw_message}"
        )
        raise DeserializationError(msg, path)
