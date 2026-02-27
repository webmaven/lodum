# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import collections
import array
import inspect
from typing import (
    Any,
    Dict,
    List,
    Optional,
    Type,
    TypeVar,
    get_origin,
    get_args,
    cast,
)

from ..core import Loader, Dumper
from ..exception import DeserializationError

T = TypeVar("T")


def _dump_sequence(
    obj: Any, dumper: Dumper, depth: int, seen: Optional[set]
) -> List[Any]:
    from ..internal import dump

    return [dump(item, dumper, depth + 1, seen) for item in obj]


def _dump_dict(
    obj: Dict[Any, Any], dumper: Dumper, depth: int, seen: Optional[set]
) -> Dict[str, Any]:
    from ..internal import dump

    return {str(k): dump(v, dumper, depth + 1, seen) for k, v in obj.items()}


def _dump_array(obj: array.array, d: Dumper, depth: int, seen: Optional[set]) -> Any:
    from ..internal import dump

    return [dump(item, d, depth + 1, seen) for item in obj]


def _load_list(
    cls: Type[T], loader: Loader, path: Optional[str] = None, depth: int = 0
) -> T:
    from ..internal import load

    args = get_args(cls)
    item_type: Type[Any] = args[0] if args else Any
    return cast(
        T,
        [
            load(item_type, item_l, f"{path}[{i}]" if path else f"[{i}]", depth + 1)
            for i, item_l in enumerate(loader.load_list())
        ],
    )


def _load_dict(
    cls: Type[T], loader: Loader, path: Optional[str] = None, depth: int = 0
) -> T:
    from ..internal import load

    args = get_args(cls)
    key_type: Type[Any]
    value_type: Type[Any]
    key_type, value_type = (args[0], args[1]) if len(args) == 2 else (Any, Any)
    if key_type is not str and key_type is not Any:
        raise DeserializationError("JSON/YAML object keys must be strings", path)

    data = {
        k: load(value_type, v_l, f"{path}.{k}" if path else k, depth + 1)
        for k, v_l in loader.load_dict()
    }

    origin = get_origin(cls) or cls
    if inspect.isclass(origin) and issubclass(origin, dict) and origin is not dict:
        return cast(T, origin(data))
    return cast(T, data)


def _load_defaultdict(
    cls: Type[T], loader: Loader, path: Optional[str] = None, depth: int = 0
) -> T:
    try:
        args = get_args(cls)
        val_type: Type[Any] = args[1] if len(args) == 2 else Any
        data = _load_dict(dict, loader, path, depth)
        factory = val_type if val_type is not Any and callable(val_type) else None
        return cast(T, collections.defaultdict(factory, data))
    except (TypeError, DeserializationError) as e:
        msg = (
            f"Failed to create defaultdict: {e}"
            if isinstance(e, TypeError)
            else f"Failed to create defaultdict: {e.raw_message}"
        )
        raise DeserializationError(msg, path)


def _load_ordered_dict(
    cls: Type[T], loader: Loader, path: Optional[str] = None, depth: int = 0
) -> T:
    try:
        data = _load_dict(dict, loader, path, depth)
        return cast(T, collections.OrderedDict(data))
    except (TypeError, DeserializationError) as e:
        msg = (
            f"Failed to create OrderedDict: {e}"
            if isinstance(e, TypeError)
            else f"Failed to create OrderedDict: {e.raw_message}"
        )
        raise DeserializationError(msg, path)


def _load_counter(
    cls: Type[T], loader: Loader, path: Optional[str] = None, depth: int = 0
) -> T:
    try:
        # Counter is basically Dict[Any, int]
        # But we need to make sure we load it correctly
        data = _load_dict(Dict[Any, int], loader, path, depth)
        return cast(T, collections.Counter(data))
    except (TypeError, DeserializationError) as e:
        msg = (
            f"Failed to create Counter: {e}"
            if isinstance(e, TypeError)
            else f"Failed to create Counter: {e.raw_message}"
        )
        raise DeserializationError(msg, path)


def _load_tuple(
    cls: Type[T], loader: Loader, path: Optional[str] = None, depth: int = 0
) -> T:
    from ..internal import load

    try:
        item_types: tuple[Type[Any], ...] = get_args(cls)
        raw_items = list(loader.load_list())
        if len(raw_items) != len(item_types):
            raise DeserializationError(f"Tuple length mismatch for {cls}")

        return cast(
            T,
            tuple(
                load(
                    item_types[i],
                    item_l,
                    f"{path}[{i}]" if path else f"[{i}]",
                    depth + 1,
                )
                for i, item_l in enumerate(raw_items)
            ),
        )
    except (IndexError, DeserializationError) as e:
        if isinstance(e, IndexError):
            msg = f"Tuple length mismatch for {cls}"
        else:
            msg = e.raw_message
        raise DeserializationError(msg, path)


def _load_set(
    cls: Type[T], loader: Loader, path: Optional[str] = None, depth: int = 0
) -> T:
    from ..internal import load

    try:
        item_type: Type[Any] = get_args(cls)[0]
        return cast(
            T,
            {
                load(item_type, item_l, f"{path}[?]" if path else "[?]", depth + 1)
                for item_l in loader.load_list()
            },
        )
    except (TypeError, DeserializationError) as e:
        msg = (
            f"Failed to create set (elements must be hashable): {e}"
            if isinstance(e, TypeError)
            else e.raw_message
        )
        raise DeserializationError(msg, path)


def _load_union(
    cls: Type[T], loader: Loader, path: Optional[str] = None, depth: int = 0
) -> T:
    from ..internal import load
    import inspect
    import enum
    import datetime

    marker = loader.mark()
    data = loader.load_any()
    # Reset loader state after inspection
    loader.rewind(marker)

    # Check for Tagged Union logic if data is a dict and we have tag info
    if isinstance(data, dict):
        for inner_type in get_args(cls):
            tag_name = getattr(inner_type, "_lodum_tag", None)
            if tag_name and tag_name in data:
                tag_value = data[tag_name]
                expected_value = getattr(
                    inner_type, "_lodum_tag_value", inner_type.__name__
                )
                if tag_value == expected_value:
                    new_loader = type(loader)(data)  # type: ignore[operator, call-arg]
                    return load(inner_type, new_loader, path, depth + 1)

    def get_priority(t: Type[Any]) -> int:
        origin = get_origin(t) or t
        if origin is Any:
            return 0
        if data is None:
            return 100 if origin is type(None) else -1
        if isinstance(data, bool):
            return 90 if origin is bool else -1
        if isinstance(data, int):
            if origin is int:
                return 90
            if origin is float:
                return 85
            if inspect.isclass(origin) and issubclass(origin, enum.Enum):
                try:
                    _ = origin(data)
                    return 70
                except (ValueError, TypeError):
                    return -1
            return -1
        if isinstance(data, float):
            return 90 if origin is float else -1
        if isinstance(data, str):
            if origin is datetime.datetime:
                if "T" in data and ":" in data:
                    try:
                        datetime.datetime.fromisoformat(data)
                        return 90
                    except ValueError:
                        return -1
                return -1
            if inspect.isclass(origin) and issubclass(origin, enum.Enum):
                try:
                    first_member = next(iter(origin))
                    if type(first_member.value) is str:
                        _ = origin(data)
                        return 85
                except (ValueError, KeyError, StopIteration):
                    pass
                return -1
            if origin is str:
                return 80
            return -1
        if isinstance(data, list):
            return 90 if origin in (list, tuple, set) else -1
        if isinstance(data, dict):
            if inspect.isclass(origin) and getattr(origin, "_lodum_enabled", False):
                return 95  # Higher than generic dict (90)
            if origin is dict:
                return 90
            return -1
        return 10

    types: List[Type[Any]] = sorted(get_args(cls), key=get_priority, reverse=True)
    errors = []
    for inner_type in types:
        if get_priority(inner_type) < 0:
            continue
        try:
            return load(inner_type, loader, path, depth + 1)
        except (
            DeserializationError,
            ValueError,
            TypeError,
            KeyError,
            AttributeError,
        ) as e:
            msg = e.raw_message if isinstance(e, DeserializationError) else str(e)
            errors.append(f" - Failed as {inner_type}: {msg}")
            loader.rewind(marker)
            continue
    error_details = "\n".join(errors)
    raise DeserializationError(
        f"Could not decode data into any of the types in {cls}.\nAttempted types:\n{error_details}",
        path,
    )


def _load_array(
    cls: Type[T], loader: Loader, path: Optional[str] = None, depth: int = 0
) -> T:
    try:
        data = _load_list(list, loader, path, depth)
        typecode = "i"
        if data and isinstance(data[0], float):
            typecode = "d"
        try:
            return cast(T, array.array(typecode, data))
        except (TypeError, ValueError) as e:
            raise DeserializationError(f"Failed to create array: {e}")
    except DeserializationError as e:
        raise DeserializationError(e.raw_message, path)
