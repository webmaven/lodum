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

from .core import Deserializer, Serializer
from .exception import DeserializationError, SerializationError
from .field import Field

T = TypeVar("T")

# --- Type-to-Handler Dispatch Tables ---

SERIALIZE_DISPATCH: Dict[Type, Callable] = {}
DESERIALIZE_DISPATCH: Dict[Type, Callable] = {}


# --- Public API ---

def to_json(obj: Any) -> str:
    """Serializes a Python object to a JSON string."""
    serializer = JsonSerializer()
    serialized_data = serialize(obj, serializer)
    return json.dumps(serialized_data)


def from_json(cls: Type[T], json_string: str) -> T:
    """Deserializes a JSON string to a Python object."""
    data = json.loads(json_string)
    deserializer = JsonDeserializer(data)
    return deserialize(cls, deserializer)


# --- Serialization Implementation ---

def serialize(obj: Any, serializer: Serializer) -> Any:
    """Recursively serializes a Python object using a given serializer."""
    handler = _get_serialize_handler(type(obj))
    return handler(obj, serializer)

def _get_serialize_handler(t: Type) -> Callable:
    if t in SERIALIZE_DISPATCH:
        return SERIALIZE_DISPATCH[t]
    if inspect.isclass(t) and getattr(t, '_lodum_serializable', False):
        return _serialize_struct
    for super_t, handler in SERIALIZE_DISPATCH.items():
        if issubclass(t, super_t):
            return handler
    raise SerializationError(f"Object of type {t.__name__} is not serializable")

def _serialize_primitive(obj: Any, serializer: Serializer) -> Any:
    if isinstance(obj, bool): return serializer.serialize_bool(obj)
    if isinstance(obj, int): return serializer.serialize_int(obj)
    if isinstance(obj, str): return serializer.serialize_str(obj)
    if isinstance(obj, float): return serializer.serialize_float(obj)
    if obj is None: return None
    raise SerializationError(f"Unsupported primitive type: {type(obj).__name__}")

def _serialize_sequence(obj: Any, serializer: Serializer) -> list:
    return [serialize(item, serializer) for item in obj]

def _serialize_dict(obj: dict, serializer: Serializer) -> dict:
    return {str(k): serialize(v, serializer) for k, v in obj.items()}

def _serialize_struct(obj: Any, serializer: Serializer) -> Any:
    data = serializer.begin_struct(obj.__class__)
    fields: Dict[str, Field] = getattr(obj.__class__, '_lodum_fields', {})

    for field_info in fields.values():
        if field_info.skip_serializing:
            continue

        key = field_info.rename if field_info.rename else field_info.name
        value = getattr(obj, field_info.name)

        if field_info.serializer:
            data[key] = field_info.serializer(value)
        else:
            data[key] = serialize(value, serializer)

    serializer.end_struct()
    return data

def _serialize_datetime(obj: datetime.datetime, s: Serializer) -> str:
    return s.serialize_str(obj.isoformat())

def _serialize_enum(obj: enum.Enum, s: Serializer) -> Any:
    return serialize(obj.value, s)

def _serialize_numpy_array(obj: np.ndarray, s: Serializer) -> Any:
    return serialize(obj.tolist(), s)

def _serialize_pandas_dataframe(obj: pd.DataFrame, s: Serializer) -> Any:
    return serialize(obj.to_dict(orient="records"), s)

def _serialize_pandas_series(obj: pd.Series, s: Serializer) -> Any:
    return serialize(obj.to_dict(), s)

def _serialize_polars_dataframe(obj: pl.DataFrame, s: Serializer) -> Any:
    return serialize(obj.to_dict(), s)

def _serialize_polars_series(obj: pl.Series, s: Serializer) -> Any:
    return serialize(obj.to_list(), s)

SERIALIZE_DISPATCH.update({
    int: _serialize_primitive, str: _serialize_primitive, float: _serialize_primitive,
    bool: _serialize_primitive, type(None): _serialize_primitive,
    list: _serialize_sequence, dict: _serialize_dict,
    tuple: _serialize_sequence, set: _serialize_sequence,
    datetime.datetime: _serialize_datetime,
    enum.Enum: _serialize_enum,
    np.ndarray: _serialize_numpy_array,
    pd.DataFrame: _serialize_pandas_dataframe,
    pd.Series: _serialize_pandas_series,
    pl.DataFrame: _serialize_polars_dataframe,
    pl.Series: _serialize_polars_series,
})


class JsonSerializer(Serializer):
    def serialize_int(self, v: int) -> int: return v
    def serialize_str(self, v: str) -> str: return v
    def serialize_float(self, v: float) -> float: return v
    def serialize_bool(self, v: bool) -> bool: return v
    def begin_struct(self, cls: Type) -> dict: return {}
    def end_struct(self) -> None: pass


# --- Deserialization Implementation ---

def deserialize(cls: Type[T], deserializer: Deserializer) -> T:
    handler = _get_deserialize_handler(cls)
    return handler(cls, deserializer)

def _get_deserialize_handler(t: Type) -> Callable:
    if isinstance(t, TypeVar):
        return _deserialize_any
    origin = get_origin(t) or t
    args = get_args(t)

    # Handle Optional[T] by checking for Union[T, None]
    if origin is Union and len(args) == 2 and args[1] is type(None):
        return _deserialize_optional
    if origin is Union:
        return _deserialize_union

    if origin in DESERIALIZE_DISPATCH:
        return DESERIALIZE_DISPATCH[origin]
    if inspect.isclass(origin) and getattr(origin, '_lodum_serializable', False):
        return _deserialize_struct
    for super_t, handler in DESERIALIZE_DISPATCH.items():
        if issubclass(origin, super_t):
            return handler
    raise DeserializationError(f"Cannot deserialize to type {t}")

def _deserialize_primitive(cls: Type[T], d: Deserializer) -> T:
    if cls is int: return d.as_int()
    if cls is str: return d.as_str()
    if cls is float: return d.as_float()
    if cls is bool: return d.as_bool()
    if cls is type(None): return None
    raise DeserializationError(f"Unsupported primitive type: {cls.__name__}")


def _deserialize_any(cls: Type[T], d: Deserializer) -> T:
    return d.as_any()

def _deserialize_list(cls: Type[T], d: Deserializer) -> T:
    args = get_args(cls)
    if len(args) == 1:
        item_type, = args
    else:
        item_type = Any
    return [deserialize(item_type, item_d) for item_d in d.as_list()]

def _deserialize_dict(cls: Type[T], d: Deserializer) -> T:
    args = get_args(cls)
    if len(args) == 2:
        key_type, value_type = args
    else:
        key_type, value_type = Any, Any

    if key_type is not str and key_type is not Any:
        raise DeserializationError("JSON object keys must be strings")
    return {k: deserialize(value_type, v_d) for k, v_d in d.as_dict()}


def _deserialize_union(cls: Type[T], d: Deserializer) -> T:
    """
    Deserializes a union type by trying each type in the union in order.
    The first one that succeeds is returned.
    """
    data = d.as_any()
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
            return deserialize(inner_type, d)
        except (DeserializationError, ValueError, TypeError, KeyError, AttributeError):
            continue
    raise DeserializationError(f"Could not deserialize data into any of the types in {cls}")


def _deserialize_optional(cls: Type[T], d: Deserializer) -> T:
    """
    Deserializes an optional type. An optional is a Union[T, None].
    If the data is None, return None. Otherwise, deserialize to T.
    """
    if d.as_any() is None:
        return None

    # Get the inner type T from Optional[T]
    inner_type = get_args(cls)[0]
    return deserialize(inner_type, d)


def _deserialize_struct(cls: Type[T], deserializer: Deserializer) -> T:
    fields: Dict[str, Field] = getattr(cls, '_lodum_fields', {})
    data = {k: v for k, v in deserializer.as_dict()}
    constructor_args = {}

    for field_info in fields.values():
        field_name_in_json = field_info.rename if field_info.rename else field_info.name

        if field_name_in_json in data:
            field_deserializer = data[field_name_in_json]
            if field_info.deserializer:
                constructor_args[field_info.name] = field_info.deserializer(field_deserializer.as_any())
            else:
                constructor_args[field_info.name] = deserialize(field_info.type, field_deserializer)
        elif field_info.has_default:
            constructor_args[field_info.name] = field_info.get_default()
        else:
            raise DeserializationError(f"Missing required field '{field_name_in_json}' for class {cls.__name__}")

    return cls(**constructor_args)

def _deserialize_datetime(cls: Type[T], d: Deserializer) -> T:
    return datetime.datetime.fromisoformat(d.as_str())

def _deserialize_enum(cls: Type[T], d: Deserializer) -> T:
    first_member = next(iter(cls))
    value_type = type(first_member.value)
    value = deserialize(value_type, d)
    return cls(value)

def _deserialize_tuple(cls: Type[T], d: Deserializer) -> T:
    item_types = get_args(cls)
    items = [deserialize(item_types[i], item_d) for i, item_d in enumerate(d.as_list())]
    return tuple(items)

def _deserialize_set(cls: Type[T], d: Deserializer) -> T:
    item_type, = get_args(cls)
    return {deserialize(item_type, item_d) for item_d in d.as_list()}

def _deserialize_numpy_array(cls: Type[T], d: Deserializer) -> T:
    return np.array(deserialize(List, d))

def _deserialize_pandas_dataframe(cls: Type[T], d: Deserializer) -> T:
    data = deserialize(list, d)
    return pd.DataFrame.from_records(data)

def _deserialize_pandas_series(cls: Type[T], d: Deserializer) -> T:
    data = deserialize(dict, d)
    return pd.Series(data)

def _deserialize_polars_dataframe(cls: Type[T], d: Deserializer) -> T:
    data = deserialize(dict, d)
    return pl.DataFrame(data)

def _deserialize_polars_series(cls: Type[T], d: Deserializer) -> T:
    data = deserialize(list, d)
    return pl.Series(data)

DESERIALIZE_DISPATCH.update({
    int: _deserialize_primitive, str: _deserialize_primitive, float: _deserialize_primitive,
    bool: _deserialize_primitive, type(None): _deserialize_primitive,
    list: _deserialize_list, dict: _deserialize_dict,
    tuple: _deserialize_tuple, set: _deserialize_set,
    datetime.datetime: _deserialize_datetime,
    enum.Enum: _deserialize_enum,
    Any: _deserialize_any,
    np.ndarray: _deserialize_numpy_array,
    pd.DataFrame: _deserialize_pandas_dataframe,
    pd.Series: _deserialize_pandas_series,
    pl.DataFrame: _deserialize_polars_dataframe,
    pl.Series: _deserialize_polars_series,
})


class JsonDeserializer(Deserializer):
    def __init__(self, data: Any): self._data = data
    def as_int(self) -> int:
        if not isinstance(self._data, int): raise DeserializationError(f"Expected int, got {type(self._data).__name__}")
        return self._data
    def as_str(self) -> str:
        if not isinstance(self._data, str): raise DeserializationError(f"Expected str, got {type(self._data).__name__}")
        return self._data
    def as_float(self) -> float:
        if not isinstance(self._data, (float, int)):
            raise DeserializationError(f"Expected float, got {type(self._data).__name__}")
        return float(self._data)
    def as_bool(self) -> bool:
        if not isinstance(self._data, bool): raise DeserializationError(f"Expected bool, got {type(self._data).__name__}")
        return self._data
    def as_list(self) -> Iterator['Deserializer']:
        if not isinstance(self._data, list): raise DeserializationError(f"Expected list, got {type(self._data).__name__}")
        return (JsonDeserializer(item) for item in self._data)
    def as_dict(self) -> Iterator[tuple[str, 'Deserializer']]:
        if not isinstance(self._data, dict): raise DeserializationError(f"Expected dict, got {type(self._data).__name__}")
        return ((k, JsonDeserializer(v)) for k, v in self._data.items())
    def as_any(self) -> Any:
        return self._data
