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

_SERIALIZE_HANDLER_CACHE: Dict[Type, Callable] = {}

def _get_serialize_handler(t: Type) -> Callable:
    """
    Retrieves the appropriate serialization handler for a given type, with caching.
    """
    if t in _SERIALIZE_HANDLER_CACHE:
        return _SERIALIZE_HANDLER_CACHE[t]

    # Direct match in dispatch table
    if t in SERIALIZE_DISPATCH:
        handler = SERIALIZE_DISPATCH[t]
        _SERIALIZE_HANDLER_CACHE[t] = handler
        return handler

    # Serializable struct
    if inspect.isclass(t) and getattr(t, '_lodum_serializable', False):
        _SERIALIZE_HANDLER_CACHE[t] = _serialize_struct
        return _serialize_struct

    # Check for subclass relationships
    for super_t, handler in SERIALIZE_DISPATCH.items():
        # We check `inspect.isclass` because `super_t` can be things like `enum.Enum`,
        # which are classes, but `t` could be an instance.
        if inspect.isclass(t) and issubclass(t, super_t):
            _SERIALIZE_HANDLER_CACHE[t] = handler
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
    Deserializes a union type by inspecting the data and trying to deserialize into
    the most specific types first.
    """
    data = d.as_any()
    deserializer_for_attempt = JsonDeserializer(data)

    # A very explicit priority mapping to determine the order of attempts.
    # Higher numbers are tried first.
    def get_priority(t: Type) -> int:
        origin = get_origin(t) or t
        if origin is Any: return 0
        if data is None: return 100 if origin is type(None) else -1

        if isinstance(data, bool):
            return 90 if origin is bool else -1

        if isinstance(data, int):
            if origin is int: return 90
            if origin is float: return 85
            if inspect.isclass(origin) and issubclass(origin, enum.Enum):
                try:
                    _ = origin(data)
                    return 70
                except ValueError:
                    return -1
            return -1

        if isinstance(data, float):
            return 90 if origin is float else -1

        if isinstance(data, str):
            if origin is datetime.datetime:
                # Be more specific: only treat strings with a time component as datetimes.
                if 'T' in data and ':' in data:
                    try:
                        datetime.datetime.fromisoformat(data)
                        return 90
                    except ValueError:
                        return -1
                else:
                    return -1
            if inspect.isclass(origin) and issubclass(origin, enum.Enum):
                first_member = next(iter(origin))
                value_type = type(first_member.value)
                if value_type is str:
                    try:
                        _ = origin(data)
                        return 85 # Higher than str
                    except (ValueError, KeyError):
                        return -1
                else: # e.g. enum with int values, but data is string
                    return -1
            if origin is str: return 80
            return -1

        if isinstance(data, list):
            if origin in (list, tuple, set):
                return 90
            return -1

        if isinstance(data, dict):
            if origin is dict: return 90
            if inspect.isclass(origin) and getattr(origin, '_lodum_serializable', False):
                return 80
            return -1

        return 10 # Should not be reached for known JSON types

    # Sort types by priority, highest first.
    types = sorted(get_args(cls), key=get_priority, reverse=True)

    errors = []
    for inner_type in types:
        # Skip types that are impossible matches
        if get_priority(inner_type) < 0:
            continue
        try:
            return deserialize(inner_type, deserializer_for_attempt)
        except (DeserializationError, ValueError, TypeError, KeyError, AttributeError) as e:
            errors.append(f" - Failed to deserialize as {inner_type}: {e}")
            continue

    error_details = "\n".join(errors)
    raise DeserializationError(
        f"Could not deserialize data into any of the types in {cls}.\n"
        f"Attempted types:\n{error_details}"
    )


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

    try:
        data = {k: v for k, v in deserializer.as_dict()}
    except DeserializationError:
        raise DeserializationError(f"Expected a dictionary to deserialize into class {cls.__name__}, but received a different type.")

    constructor_args = {}

    for field_info in fields.values():
        field_name_in_json = field_info.rename if field_info.rename else field_info.name

        try:
            if field_name_in_json in data:
                field_deserializer = data[field_name_in_json]
                if field_info.deserializer:
                    constructor_args[field_info.name] = field_info.deserializer(field_deserializer.as_any())
                else:
                    constructor_args[field_info.name] = deserialize(field_info.type, field_deserializer)
            elif field_info.has_default:
                constructor_args[field_info.name] = field_info.get_default()
            else:
                # This will be caught by the outer try...except block.
                raise KeyError(field_name_in_json)
        except KeyError:
            raise DeserializationError(f"Missing required field '{field_name_in_json}' for class {cls.__name__}")
        except DeserializationError as e:
            raise DeserializationError(f"Error deserializing field '{field_info.name}' for class {cls.__name__}: {e}")

    try:
        return cls(**constructor_args)
    except TypeError as e:
        raise DeserializationError(f"Failed to instantiate {cls.__name__}. Check that the constructor signature matches the provided data. Original error: {e}")

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
