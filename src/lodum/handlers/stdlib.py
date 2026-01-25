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
    Optional,
    Type,
    TypeVar,
    cast,
)

from ..core import Loader, Dumper
from ..exception import DeserializationError

T = TypeVar("T")


def _dump_bytes(obj: Any, d: Dumper, depth: int, seen: Optional[set]) -> Any:
    return d.dump_bytes(obj)


def _dump_bytearray(obj: Any, d: Dumper, depth: int, seen: Optional[set]) -> Any:
    return d.dump_bytes(bytes(obj))


def _dump_datetime(
    obj: datetime.datetime, d: Dumper, depth: int, seen: Optional[set]
) -> str:
    return d.dump_str(obj.isoformat())


def _dump_enum(obj: enum.Enum, d: Dumper, depth: int, seen: Optional[set]) -> Any:
    from ..internal import dump

    return dump(obj.value, d, depth + 1, seen)


def _dump_uuid(obj: uuid.UUID, d: Dumper, depth: int, seen: Optional[set]) -> str:
    return d.dump_str(str(obj))


def _dump_decimal(obj: Any, d: Dumper, depth: int, seen: Optional[set]) -> str:
    return d.dump_str(str(obj))


def _dump_path(obj: Any, d: Dumper, depth: int, seen: Optional[set]) -> str:
    return d.dump_str(str(obj))


def _load_datetime(
    cls: Type[T], loader: Loader, path: Optional[str] = None, depth: int = 0
) -> T:
    try:
        return cast(T, datetime.datetime.fromisoformat(loader.load_str()))
    except (ValueError, DeserializationError) as e:
        msg = e.raw_message if isinstance(e, DeserializationError) else str(e)
        raise DeserializationError(
            msg, e.path if isinstance(e, DeserializationError) and e.path else path
        )


def _load_enum(
    cls: Type[T], loader: Loader, path: Optional[str] = None, depth: int = 0
) -> T:
    from ..internal import load

    try:
        first_member = next(iter(cls))  # type: ignore[call-overload]
        value = load(type(first_member.value), loader, path, depth + 1)
        return cast(T, cls(value))  # type: ignore[call-arg]
    except (ValueError, StopIteration, DeserializationError) as e:
        msg = e.raw_message if isinstance(e, DeserializationError) else str(e)
        raise DeserializationError(
            msg, e.path if isinstance(e, DeserializationError) and e.path else path
        )


def _load_uuid(
    cls: Type[T], loader: Loader, path: Optional[str] = None, depth: int = 0
) -> T:
    try:
        return cast(T, uuid.UUID(loader.load_str()))
    except (ValueError, DeserializationError) as e:
        msg = e.raw_message if isinstance(e, DeserializationError) else str(e)
        raise DeserializationError(
            msg, e.path if isinstance(e, DeserializationError) and e.path else path
        )


def _load_decimal(
    cls: Type[T], loader: Loader, path: Optional[str] = None, depth: int = 0
) -> T:
    try:
        # Load as string or float/int
        val = loader.load_any()
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
    cls: Type[T], loader: Loader, path: Optional[str] = None, depth: int = 0
) -> T:
    try:
        return cast(T, Path(loader.load_str()))
    except (TypeError, DeserializationError) as e:
        msg = e.raw_message if isinstance(e, DeserializationError) else str(e)
        raise DeserializationError(
            msg, e.path if isinstance(e, DeserializationError) and e.path else path
        )


def _load_bytes(
    cls: Type[T], loader: Loader, path: Optional[str] = None, depth: int = 0
) -> T:
    try:
        return cast(T, loader.load_bytes())
    except (TypeError, DeserializationError) as e:
        msg = e.raw_message if isinstance(e, DeserializationError) else str(e)
        raise DeserializationError(
            msg, e.path if isinstance(e, DeserializationError) and e.path else path
        )


def _load_bytearray(
    cls: Type[T], loader: Loader, path: Optional[str] = None, depth: int = 0
) -> T:
    try:
        return cast(T, bytearray(loader.load_bytes()))
    except (TypeError, DeserializationError, ValueError) as e:
        msg = e.raw_message if isinstance(e, DeserializationError) else str(e)
        raise DeserializationError(
            msg, e.path if isinstance(e, DeserializationError) and e.path else path
        )
