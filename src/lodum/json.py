# SPDX-FileCopyrightText: 2025-present Jules <jules@example.com>
#
# SPDX-License-Identifier: MIT
import json
import inspect
from typing import Any, Callable, Dict, Type, TypeVar, get_origin, get_args, Iterator, Union, List
import datetime
import enum
import numpy as np
import pandas as pd
import polars as pl

from .core import Loader, Dumper
from .exception import DeserializationError, SerializationError
from .field import Field

T = TypeVar("T")

# --- Type-to-Handler Dispatch Tables ---

DUMP_DISPATCH: Dict[Type, Callable] = {}
LOAD_DISPATCH: Dict[Type, Callable] = {}


# --- Public API ---

def dumps(obj: Any) -> str:
    """Encodes a Python object to a JSON string (dumps)."""
    dumper = JsonDumper()
    dumped_data = dump(obj, dumper)
    return json.dumps(dumped_data)


def loads(cls: Type[T], json_string: str) -> T:
    """Decodes a JSON string to a Python object (loads)."""
    data = json.loads(json_string)
    loader = JsonLoader(data)
    return load(cls, loader)


# --- Encoding (Dumping) Implementation ---

def dump(obj: Any, dumper: Dumper) -> Any:
    """Recursively encodes a Python object using a given dumper."""
    handler = _get_dump_handler(type(obj))
    return handler(obj, dumper)

def _get_dump_handler(t: Type) -> Callable:
    if t in DUMP_DISPATCH:
        return DUMP_DISPATCH[t]
    if inspect.isclass(t) and getattr(t, '_lodum_enabled', False):
        return _dump_struct
    for super_t, handler in DUMP_DISPATCH.items():
        if issubclass(t, super_t):
            return handler
    raise SerializationError(f"Object of type {t.__name__} is not lodum-enabled")

def _dump_primitive(obj: Any, dumper: Dumper) -> Any:
    if isinstance(obj, bool): return dumper.dump_bool(obj)
    if isinstance(obj, int): return dumper.dump_int(obj)
    if isinstance(obj, str): return dumper.dump_str(obj)
    if isinstance(obj, float): return dumper.dump_float(obj)
    if obj is None: return None
    raise SerializationError(f"Unsupported primitive type: {type(obj).__name__}")

def _dump_sequence(obj: Any, dumper: Dumper) -> list:
    return [dump(item, dumper) for item in obj]

def _dump_dict(obj: dict, dumper: Dumper) -> dict:
    return {str(k): dump(v, dumper) for k, v in obj.items()}

def _dump_struct(obj: Any, dumper: Dumper) -> Any:
    data = dumper.begin_struct(obj.__class__)
    fields: Dict[str, Field] = getattr(obj.__class__, '_lodum_fields', {})

    for field_info in fields.values():
        if field_info.skip_serializing:
            continue

        key = field_info.rename if field_info.rename else field_info.name
        value = getattr(obj, field_info.name)

        if field_info.serializer:
            data[key] = field_info.serializer(value)
        else:
            data[key] = dump(value, dumper)

    dumper.end_struct()
    return data

def _dump_datetime(obj: datetime.datetime, d: Dumper) -> str:
    return d.dump_str(obj.isoformat())

def _dump_enum(obj: enum.Enum, d: Dumper) -> Any:
    return dump(obj.value, d)

def _dump_numpy_array(obj: np.ndarray, d: Dumper) -> Any:
    return dump(obj.tolist(), d)

def _dump_pandas_dataframe(obj: pd.DataFrame, d: Dumper) -> Any:
    return dump(obj.to_dict(orient="records"), d)

def _dump_pandas_series(obj: pd.Series, d: Dumper) -> Any:
    return dump(obj.to_dict(), d)

def _dump_polars_dataframe(obj: pl.DataFrame, d: Dumper) -> Any:
    return dump(obj.to_dict(), d)

def _dump_polars_series(obj: pl.Series, d: Dumper) -> Any:
    return dump(obj.to_list(), d)

DUMP_DISPATCH.update({
    int: _dump_primitive, str: _dump_primitive, float: _dump_primitive,
    bool: _dump_primitive, type(None): _dump_primitive,
    list: _dump_sequence, dict: _dump_dict,
    tuple: _dump_sequence, set: _dump_sequence,
    datetime.datetime: _dump_datetime,
    enum.Enum: _dump_enum,
    np.ndarray: _dump_numpy_array,
    pd.DataFrame: _dump_pandas_dataframe,
    pd.Series: _dump_pandas_series,
    pl.DataFrame: _dump_polars_dataframe,
    pl.Series: _dump_polars_series,
})


class JsonDumper(Dumper):
    def dump_int(self, v: int) -> int: return v
    def dump_str(self, v: str) -> str: return v
    def dump_float(self, v: float) -> float: return v
    def dump_bool(self, v: bool) -> bool: return v
    def begin_struct(self, cls: Type) -> dict: return {}
    def end_struct(self) -> None: pass


# --- Decoding (Loading) Implementation ---

def load(cls: Type[T], loader: Loader) -> T:
    handler = _get_load_handler(cls)
    return handler(cls, loader)

def _get_load_handler(t: Type) -> Callable:
    if isinstance(t, TypeVar):
        return _load_any
    origin = get_origin(t) or t
    args = get_args(t)

    # Handle Optional[T] by checking for Union[T, None]
    if origin is Union and len(args) == 2 and args[1] is type(None):
        return _load_optional
    if origin is Union:
        return _load_union

    if origin in LOAD_DISPATCH:
        return LOAD_DISPATCH[origin]
    if inspect.isclass(origin) and getattr(origin, '_lodum_enabled', False):
        return _load_struct
    for super_t, handler in LOAD_DISPATCH.items():
        if issubclass(origin, super_t):
            return handler
    raise DeserializationError(f"Cannot deserialize to type {t}")

def _load_primitive(cls: Type[T], l: Loader) -> T:
    if cls is int: return l.load_int()
    if cls is str: return l.load_str()
    if cls is float: return l.load_float()
    if cls is bool: return l.load_bool()
    if cls is type(None): return None
    raise DeserializationError(f"Unsupported primitive type: {cls.__name__}")


def _load_any(cls: Type[T], l: Loader) -> T:
    return l.load_any()

def _load_list(cls: Type[T], l: Loader) -> T:
    args = get_args(cls)
    if len(args) == 1:
        item_type, = args
    else:
        item_type = Any
    return [load(item_type, item_l) for item_l in l.load_list()]

def _load_dict(cls: Type[T], l: Loader) -> T:
    args = get_args(cls)
    if len(args) == 2:
        key_type, value_type = args
    else:
        key_type, value_type = Any, Any

    if key_type is not str and key_type is not Any:
        raise DeserializationError("JSON object keys must be strings")
    return {k: load(value_type, v_l) for k, v_l in l.load_dict()}


def _load_union(cls: Type[T], l: Loader) -> T:
    """
    Decodes a union type by trying each type in the union in order.
    The first one that succeeds is returned.
    """
    data = l.load_any()
    # Prioritize types that are more specific.
    def sort_key(t):
        if isinstance(t, type):
            if issubclass(t, enum.Enum) and isinstance(data, str):
                try:
                    t(data)
                    return (3, t.__name__)
                except (ValueError, TypeError):
                    pass
            if isinstance(data, t):
                return (2, t.__name__)
        return (0, str(t))

    types = sorted(get_args(cls), key=sort_key, reverse=True)

    for inner_type in types:
        try:
            return load(inner_type, l)
        except (DeserializationError, ValueError, TypeError, KeyError, AttributeError):
            continue
    raise DeserializationError(f"Could not deserialize data into any of the types in {cls}")


def _load_optional(cls: Type[T], l: Loader) -> T:
    """
    Decodes an optional type. An optional is a Union[T, None].
    If the data is None, return None. Otherwise, decode to T.
    """
    if l.load_any() is None:
        return None

    # Get the inner type T from Optional[T]
    inner_type = get_args(cls)[0]
    return load(inner_type, l)


def _load_struct(cls: Type[T], loader: Loader) -> T:
    fields: Dict[str, Field] = getattr(cls, '_lodum_fields', {})
    data = {k: v for k, v in loader.load_dict()}
    constructor_args = {}

    for field_info in fields.values():
        field_name_in_json = field_info.rename if field_info.rename else field_info.name

        if field_name_in_json in data:
            field_loader = data[field_name_in_json]
            if field_info.deserializer:
                constructor_args[field_info.name] = field_info.deserializer(field_loader.load_any())
            else:
                constructor_args[field_info.name] = load(field_info.type, field_loader)
        elif field_info.has_default:
            constructor_args[field_info.name] = field_info.get_default()
        else:
            raise DeserializationError(f"Missing required field '{field_name_in_json}' for class {cls.__name__}")

    return cls(**constructor_args)

def _load_datetime(cls: Type[T], l: Loader) -> T:
    return datetime.datetime.fromisoformat(l.load_str())

def _load_enum(cls: Type[T], l: Loader) -> T:
    first_member = next(iter(cls))
    value_type = type(first_member.value)
    value = load(value_type, l)
    return cls(value)

def _load_tuple(cls: Type[T], l: Loader) -> T:
    item_types = get_args(cls)
    items = [load(item_types[i], item_l) for i, item_l in enumerate(l.load_list())]
    return tuple(items)

def _load_set(cls: Type[T], l: Loader) -> T:
    item_type, = get_args(cls)
    return {load(item_type, item_l) for item_l in l.load_list()}

def _load_numpy_array(cls: Type[T], l: Loader) -> T:
    return np.array(load(List, l))

def _load_pandas_dataframe(cls: Type[T], l: Loader) -> T:
    data = load(list, l)
    return pd.DataFrame.from_records(data)

def _load_pandas_series(cls: Type[T], l: Loader) -> T:
    data = load(dict, l)
    return pd.Series(data)

def _load_polars_dataframe(cls: Type[T], l: Loader) -> T:
    data = load(dict, l)
    return pl.DataFrame(data)

def _load_polars_series(cls: Type[T], l: Loader) -> T:
    data = load(list, l)
    return pl.Series(data)

LOAD_DISPATCH.update({
    int: _load_primitive, str: _load_primitive, float: _load_primitive,
    bool: _load_primitive, type(None): _load_primitive,
    list: _load_list, dict: _load_dict,
    tuple: _load_tuple, set: _load_set,
    datetime.datetime: _load_datetime,
    enum.Enum: _load_enum,
    Any: _load_any,
    np.ndarray: _load_numpy_array,
    pd.DataFrame: _load_pandas_dataframe,
    pd.Series: _load_pandas_series,
    pl.DataFrame: _load_polars_dataframe,
    pl.Series: _load_polars_series,
})


class JsonLoader(Loader):
    def __init__(self, data: Any): self._data = data
    def load_int(self) -> int:
        if not isinstance(self._data, int): raise DeserializationError(f"Expected int, got {type(self._data).__name__}")
        return self._data
    def load_str(self) -> str:
        if not isinstance(self._data, str): raise DeserializationError(f"Expected str, got {type(self._data).__name__}")
        return self._data
    def load_float(self) -> float:
        if not isinstance(self._data, (float, int)):
            raise DeserializationError(f"Expected float, got {type(self._data).__name__}")
        return float(self._data)
    def load_bool(self) -> bool:
        if not isinstance(self._data, bool): raise DeserializationError(f"Expected bool, got {type(self._data).__name__}")
        return self._data
    def load_list(self) -> Iterator['Loader']:
        if not isinstance(self._data, list): raise DeserializationError(f"Expected list, got {type(self._data).__name__}")
        return (JsonLoader(item) for item in self._data)
    def load_dict(self) -> Iterator[tuple[str, 'Loader']]:
        if not isinstance(self._data, dict): raise DeserializationError(f"Expected dict, got {type(self._data).__name__}")
        return ((k, JsonLoader(v)) for k, v in self._data.items())
    def load_any(self) -> Any:
        return self._data
