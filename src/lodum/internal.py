import inspect
import datetime
import enum
import functools
from typing import Any, Callable, Dict, List, Type, TypeVar, Union, get_origin, get_args, Iterator
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

# --- Caching and Compilation ---

_DUMP_HANDLER_CACHE: Dict[Type, Callable] = {}
_LOAD_HANDLER_CACHE: Dict[Type, Callable] = {}

def dump(obj: Any, dumper: Dumper) -> Any:
    """Recursively encodes a Python object using a given dumper."""
    handler = _get_dump_handler(type(obj))
    return handler(obj, dumper)

def load(cls: Type[T], loader: Loader) -> T:
    """Recursively decodes a Python object using a given loader."""
    handler = _get_load_handler(cls)
    return handler(cls, loader)

def generate_schema(t: Type) -> Dict[str, Any]:
    """Generates a JSON Schema for a given type."""
    if t is int: return {"type": "integer"}
    if t is str: return {"type": "string"}
    if t is float: return {"type": "number"}
    if t is bool: return {"type": "boolean"}
    if t is type(None): return {"type": "null"}
    if t is Any: return {}

    origin = get_origin(t) or t
    args = get_args(t)

    if origin is list:
        item_schema = generate_schema(args[0]) if args else {}
        return {"type": "array", "items": item_schema}
    
    if origin is dict:
        val_schema = generate_schema(args[1]) if len(args) == 2 else {}
        return {"type": "object", "additionalProperties": val_schema}

    if origin is Union:
        return {"anyOf": [generate_schema(arg) for arg in args]}

    if origin is tuple:
        return {"type": "array", "prefixItems": [generate_schema(arg) for arg in args]}

    if origin is set:
        item_schema = generate_schema(args[0]) if args else {}
        return {"type": "array", "items": item_schema, "uniqueItems": True}

    if t is datetime.datetime:
        return {"type": "string", "format": "date-time"}

    if inspect.isclass(t) and issubclass(t, enum.Enum):
        return {"enum": [m.value for m in t]}

    if inspect.isclass(t) and getattr(t, '_lodum_enabled', False):
        fields: Dict[str, Field] = getattr(t, '_lodum_fields', {})
        properties = {}
        required = []
        for field_name, field_info in fields.items():
            key = field_info.rename if field_info.rename else field_info.name
            properties[key] = generate_schema(field_info.type)
            if not field_info.has_default:
                required.append(key)
        
        schema = {"type": "object", "properties": properties}
        if required:
            schema["required"] = required
        return schema

    return {}

def _compile_dump_handler(cls: Type) -> Callable:
    """
    Compiles an optimized dump handler for a lodum-enabled class.
    """
    fields: Dict[str, Field] = getattr(cls, '_lodum_fields', {})
    lines = []
    lines.append(f"def dump_{cls.__name__}(obj, dumper, dump_fn):")
    lines.append("    data = dumper.begin_struct(cls)")
    
    context = {
        'cls': cls,
        'DeserializationError': DeserializationError,
        'SerializationError': SerializationError,
    }

    for i, (field_name, field_info) in enumerate(fields.items()):
        if field_info.skip_serializing:
            continue
            
        key = field_info.rename if field_info.rename else field_info.name
        safe_key = f"key_{i}"
        context[safe_key] = key
        
        if field_info.serializer:
            ser_name = f"ser_{i}"
            context[ser_name] = field_info.serializer
            lines.append(f"    data[{safe_key}] = {ser_name}(obj.{field_name})")
        else:
            ftype = field_info.type
            if ftype is int:
                lines.append(f"    val = obj.{field_name}")
                lines.append(f"    data[{safe_key}] = dumper.dump_int(val) if isinstance(val, int) else dump_fn(val, dumper)")
            elif ftype is str:
                lines.append(f"    val = obj.{field_name}")
                lines.append(f"    data[{safe_key}] = dumper.dump_str(val) if isinstance(val, str) else dump_fn(val, dumper)")
            elif ftype is float:
                lines.append(f"    val = obj.{field_name}")
                lines.append(f"    data[{safe_key}] = dumper.dump_float(val) if isinstance(val, (float, int)) else dump_fn(val, dumper)")
            elif ftype is bool:
                lines.append(f"    val = obj.{field_name}")
                lines.append(f"    data[{safe_key}] = dumper.dump_bool(val) if isinstance(val, bool) else dump_fn(val, dumper)")
            else:
                lines.append(f"    data[{safe_key}] = dump_fn(obj.{field_name}, dumper)")
            
    lines.append("    dumper.end_struct()")
    lines.append("    return data")
    
    source = "\n".join(lines)
    local_vars = {}
    exec(source, context, local_vars)
    
    compiled_fn = local_vars[f"dump_{cls.__name__}"]
    return lambda obj, dumper: compiled_fn(obj, dumper, dump)

def _get_dump_handler(t: Type) -> Callable:
    if t in _DUMP_HANDLER_CACHE:
        return _DUMP_HANDLER_CACHE[t]

    if t in DUMP_DISPATCH:
        handler = DUMP_DISPATCH[t]
        _DUMP_HANDLER_CACHE[t] = handler
        return handler

    origin = get_origin(t) or t
    if origin is list or origin is set or origin is tuple:
        args = get_args(t)
        item_type = args[0] if args else Any
        item_handler = _get_dump_handler(item_type)
        def dump_seq(obj, dumper):
            return [item_handler(item, dumper) for item in obj]
        _DUMP_HANDLER_CACHE[t] = dump_seq
        return dump_seq
    
    if origin is dict:
        args = get_args(t)
        v_type = args[1] if len(args) == 2 else Any
        v_handler = _get_dump_handler(v_type)
        def dump_mapping(obj, dumper):
            return {str(k): v_handler(v, dumper) for k, v in obj.items()}
        _DUMP_HANDLER_CACHE[t] = dump_mapping
        return dump_mapping

    if inspect.isclass(t) and getattr(t, '_lodum_enabled', False):
        handler = _compile_dump_handler(t)
        _DUMP_HANDLER_CACHE[t] = handler
        return handler

    for super_t, handler in DUMP_DISPATCH.items():
        if inspect.isclass(t) and issubclass(t, super_t):
            _DUMP_HANDLER_CACHE[t] = handler
            return handler

    raise SerializationError(f"Object of type {t.__name__} is not lodum-enabled")

def _compile_load_handler(cls: Type) -> Callable:
    fields: Dict[str, Field] = getattr(cls, '_lodum_fields', {})
    lines = []
    lines.append(f"def load_{cls.__name__}(loader, load_fn):")
    lines.append("    try:")
    lines.append("        data = {k: v for k, v in loader.load_dict()}")
    lines.append("    except DeserializationError:")
    lines.append(f"        raise DeserializationError('Expected a dictionary to decode into class {cls.__name__}, but received a different type.')")
    lines.append("    args = {}")
    
    context = {
        'cls': cls,
        'DeserializationError': DeserializationError,
        'SerializationError': SerializationError,
    }

    for i, (field_name, field_info) in enumerate(fields.items()):
        field_name_in_json = field_info.rename if field_info.rename else field_info.name
        safe_json_name = f"key_{i}"
        context[safe_json_name] = field_name_in_json
        
        lines.append(f"    if {safe_json_name} in data:")
        lines.append(f"        val_loader = data[{safe_json_name}]")
        
        if field_info.deserializer:
            deser_name = f"deser_{i}"
            context[deser_name] = field_info.deserializer
            lines.append(f"        args['{field_name}'] = {deser_name}(val_loader.load_any())")
        else:
            ftype = field_info.type
            if ftype is int:
                lines.append(f"        try: args['{field_name}'] = val_loader.load_int()")
                lines.append(f"        except DeserializationError as e: raise DeserializationError(f'Error decoding field \\'{field_name}\\' for class {cls.__name__}: {{e}}')")
            elif ftype is str:
                lines.append(f"        try: args['{field_name}'] = val_loader.load_str()")
                lines.append(f"        except DeserializationError as e: raise DeserializationError(f'Error decoding field \\'{field_name}\\' for class {cls.__name__}: {{e}}')")
            elif ftype is float:
                lines.append(f"        try: args['{field_name}'] = val_loader.load_float()")
                lines.append(f"        except DeserializationError as e: raise DeserializationError(f'Error decoding field \\'{field_name}\\' for class {cls.__name__}: {{e}}')")
            elif ftype is bool:
                lines.append(f"        try: args['{field_name}'] = val_loader.load_bool()")
                lines.append(f"        except DeserializationError as e: raise DeserializationError(f'Error decoding field \\'{field_name}\\' for class {cls.__name__}: {{e}}')")
            else:
                type_name = f"type_{i}"
                context[type_name] = ftype
                lines.append(f"        try: args['{field_name}'] = load_fn({type_name}, val_loader)")
                lines.append(f"        except DeserializationError as e: raise DeserializationError(f'Error decoding field \\'{field_name}\\' for class {cls.__name__}: {{e}}')")
            
        if field_info.has_default:
            lines.append("    else:")
            default_getter = f"default_{i}"
            context[default_getter] = field_info.get_default
            lines.append(f"        args['{field_name}'] = {default_getter}()")
        else:
            lines.append("    else:")
            lines.append(f"        raise DeserializationError(\"Missing required field '\" + {safe_json_name} + \"' for class {cls.__name__}\")")

        if field_info.validate:
            validators = field_info.validate if isinstance(field_info.validate, list) else [field_info.validate]
            for j, v in enumerate(validators):
                v_name = f"v_{i}_{j}"
                context[v_name] = v
                lines.append(f"    try: {v_name}(args['{field_name}'])")
                lines.append(f"    except DeserializationError as e: raise DeserializationError(f'Validation failed for field \\'{field_name}\\' in {cls.__name__}: {{e}}')")

    lines.append("    try: return cls(**args)")
    lines.append("    except TypeError as e: raise DeserializationError(f'Failed to instantiate {cls.__name__}. Original error: {{e}}')")

    source = "\n".join(lines)
    local_vars = {}
    exec(source, context, local_vars)
    compiled_fn = local_vars[f"load_{cls.__name__}"]
    return lambda cls_ignore, loader: compiled_fn(loader, load)

def _get_load_handler(t: Type) -> Callable:
    if t in _LOAD_HANDLER_CACHE:
        return _LOAD_HANDLER_CACHE[t]

    if isinstance(t, TypeVar): return _load_any
    origin = get_origin(t) or t
    args = get_args(t)

    if origin is Union and len(args) == 2 and args[1] is type(None): return _load_optional
    if origin is Union: return _load_union

    if origin is list:
        args = get_args(t)
        item_type = args[0] if args else Any
        item_loader_fn = _get_load_handler(item_type)
        def load_list(cls_ignore, loader):
            return [item_loader_fn(item_type, item_l) for item_l in loader.load_list()]
        _LOAD_HANDLER_CACHE[t] = load_list
        return load_list

    if origin is dict:
        args = get_args(t)
        k_type, v_type = (args[0], args[1]) if len(args) == 2 else (Any, Any)
        if k_type is not str and k_type is not Any:
            raise DeserializationError("JSON/YAML object keys must be strings")
        v_loader_fn = _get_load_handler(v_type)
        def load_dict(cls_ignore, loader):
            return {k: v_loader_fn(v_type, v_l) for k, v_l in loader.load_dict()}
        _LOAD_HANDLER_CACHE[t] = load_dict
        return load_dict

    if origin in LOAD_DISPATCH:
        handler = LOAD_DISPATCH[origin]
        _LOAD_HANDLER_CACHE[origin] = handler
        return handler

    if inspect.isclass(origin) and getattr(origin, '_lodum_enabled', False):
        handler = _compile_load_handler(origin)
        _LOAD_HANDLER_CACHE[origin] = handler
        return handler

    for super_t, handler in LOAD_DISPATCH.items():
        if issubclass(origin, super_t): return handler
    raise DeserializationError(f"Cannot deserialize to type {t}")

# --- Generic Handlers ---

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
    item_type = args[0] if args else Any
    return [load(item_type, item_l) for item_l in l.load_list()]

def _load_dict(cls: Type[T], l: Loader) -> T:
    args = get_args(cls)
    key_type, value_type = (args[0], args[1]) if len(args) == 2 else (Any, Any)
    if key_type is not str and key_type is not Any:
        raise DeserializationError("JSON/YAML object keys must be strings")
    return {k: load(value_type, v_l) for k, v_l in l.load_dict()}

def _load_optional(cls: Type[T], l: Loader) -> T:
    if l.load_any() is None: return None
    inner_type = get_args(cls)[0]
    return load(inner_type, l)

def _load_union(cls: Type[T], l: Loader) -> T:
    data = l.load_any()
    def get_priority(t: Type) -> int:
        origin = get_origin(t) or t
        if origin is Any: return 0
        if data is None: return 100 if origin is type(None) else -1
        if isinstance(data, bool): return 90 if origin is bool else -1
        if isinstance(data, int):
            if origin is int: return 90
            if origin is float: return 85
            if inspect.isclass(origin) and issubclass(origin, enum.Enum):
                try: _ = origin(data); return 70
                except (ValueError, TypeError): return -1
            return -1
        if isinstance(data, float): return 90 if origin is float else -1
        if isinstance(data, str):
            if origin is datetime.datetime:
                if 'T' in data and ':' in data:
                    try: datetime.datetime.fromisoformat(data); return 90
                    except ValueError: return -1
                return -1
            if inspect.isclass(origin) and issubclass(origin, enum.Enum):
                try:
                    first_member = next(iter(origin))
                    if type(first_member.value) is str:
                        _ = origin(data); return 85
                except (ValueError, KeyError, StopIteration): pass
                return -1
            if origin is str: return 80
            return -1
        if isinstance(data, list): return 90 if origin in (list, tuple, set) else -1
        if isinstance(data, dict):
            if origin is dict: return 90
            if inspect.isclass(origin) and getattr(origin, '_lodum_enabled', False): return 80
            return -1
        return 10
    types = sorted(get_args(cls), key=get_priority, reverse=True)
    errors = []
    from .json import JsonLoader # Circular import local hack if needed or use better approach
    for inner_type in types:
        if get_priority(inner_type) < 0: continue
        try: return load(inner_type, l.__class__(data))
        except (DeserializationError, ValueError, TypeError, KeyError, AttributeError) as e:
            errors.append(f" - Failed as {inner_type}: {e}")
            continue
    error_details = "\n".join(errors)
    raise DeserializationError(f"Could not decode data into any of the types in {cls}.\nAttempted types:\n{error_details}")

def _load_datetime(cls: Type[T], l: Loader) -> T:
    return datetime.datetime.fromisoformat(l.load_str())

def _load_enum(cls: Type[T], l: Loader) -> T:
    first_member = next(iter(cls))
    value = load(type(first_member.value), l)
    return cls(value)

def _load_tuple(cls: Type[T], l: Loader) -> T:
    item_types = get_args(cls)
    return tuple(load(item_types[i], item_l) for i, item_l in enumerate(l.load_list()))

def _load_set(cls: Type[T], l: Loader) -> T:
    item_type, = get_args(cls)
    return {load(item_type, item_l) for item_l in l.load_list()}

def _load_numpy_array(cls: Type[T], l: Loader) -> T:
    return np.array(load(List, l))

def _load_pandas_dataframe(cls: Type[T], l: Loader) -> T:
    return pd.DataFrame.from_records(load(list, l))

def _load_pandas_series(cls: Type[T], l: Loader) -> T:
    return pd.Series(load(dict, l))

def _load_polars_dataframe(cls: Type[T], l: Loader) -> T:
    return pl.DataFrame(load(dict, l))

def _load_polars_series(cls: Type[T], l: Loader) -> T:
    return pl.Series(load(list, l))

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
