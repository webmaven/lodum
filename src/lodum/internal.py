import inspect
import datetime
import enum
import uuid
import collections
import array
from decimal import Decimal
from pathlib import Path
from typing import (
    Any,
    Callable,
    Dict,
    List,
    Optional,
    Type,
    TypeVar,
    Union,
    get_origin,
    get_args,
    cast,
)

try:
    import numpy as np
except ImportError:
    np = None  # type: ignore

try:
    import pandas as pd
except ImportError:
    pd = None  # type: ignore

try:
    import polars as pl
except ImportError:
    pl = None  # type: ignore

from .core import Loader, Dumper
from .exception import DeserializationError, SerializationError
from .field import Field

T = TypeVar("T")

# --- Type-to-Handler Dispatch Tables ---

DumpHandler = Callable[[Any, Dumper], Any]
LoadHandler = Callable[[Type[Any], Loader, Optional[str]], Any]

DUMP_DISPATCH: Dict[Type[Any], DumpHandler] = {}
LOAD_DISPATCH: Dict[Type[Any], LoadHandler] = {}

# --- Caching and Compilation ---

_DUMP_HANDLER_CACHE: Dict[Type[Any], DumpHandler] = {}
_LOAD_HANDLER_CACHE: Dict[Type[Any], LoadHandler] = {}


def dump(obj: Any, dumper: Dumper) -> Any:
    """Recursively encodes a Python object using a given dumper."""
    handler = _get_dump_handler(type(obj))
    return handler(obj, dumper)


def load(cls: Type[T], loader: Loader, path: Optional[str] = None) -> T:
    """Recursively decodes a Python object using a given loader."""
    handler = _get_load_handler(cls)
    return cast(T, handler(cls, loader, path))


def generate_schema(t: Type[Any]) -> Dict[str, Any]:
    """Generates a JSON Schema for a given type."""
    if t is int:
        return {"type": "integer"}
    if t is str:
        return {"type": "string"}
    if t is float:
        return {"type": "number"}
    if t is bool:
        return {"type": "boolean"}
    if t is type(None):
        return {"type": "null"}
    if t is Any:
        return {}
    if t is uuid.UUID:
        return {"type": "string", "format": "uuid"}
    if t is Decimal:
        return {"type": "string"}
    if t is Path:
        return {"type": "string"}
    if t in (bytes, bytearray):
        return {"type": "string", "contentEncoding": "base64"}

    origin = get_origin(t) or t
    args = get_args(t)

    if origin in (list, array.array):
        item_schema = generate_schema(args[0]) if args else {}
        return {"type": "array", "items": item_schema}

    if origin in (
        dict,
        collections.defaultdict,
        collections.OrderedDict,
        collections.Counter,
    ):
        if origin is collections.Counter:
            val_schema = {"type": "integer"}
        else:
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

    if inspect.isclass(t) and getattr(t, "_lodum_enabled", False):
        fields: Dict[str, Field] = getattr(t, "_lodum_fields", {})
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


def _compile_dump_handler(cls: Type[Any]) -> DumpHandler:
    """
    Compiles an optimized dump handler for a lodum-enabled class.
    """
    fields: Dict[str, Field] = getattr(cls, "_lodum_fields", {})
    lines = []
    lines.append(f"def dump_{cls.__name__}(obj, dumper, dump_fn):")
    lines.append("    data = dumper.begin_struct(cls)")

    context: Dict[str, Any] = {
        "cls": cls,
        "DeserializationError": DeserializationError,
        "SerializationError": SerializationError,
    }

    PRIMITIVE_TYPES = {
        int: "dump_int",
        str: "dump_str",
        float: "dump_float",
        bool: "dump_bool",
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
            if ftype in PRIMITIVE_TYPES:
                dump_meth = PRIMITIVE_TYPES[ftype]
                lines.append(f"    val = obj.{field_name}")
                if ftype is float:
                    lines.append(
                        f"    data[{safe_key}] = dumper.{dump_meth}(val) if isinstance(val, (float, int)) else dump_fn(val, dumper)"
                    )
                else:
                    lines.append(
                        f"    data[{safe_key}] = dumper.{dump_meth}(val) if isinstance(val, {ftype.__name__}) else dump_fn(val, dumper)"
                    )
            else:
                lines.append(
                    f"    data[{safe_key}] = dump_fn(obj.{field_name}, dumper)"
                )

    lines.append("    dumper.end_struct()")
    lines.append("    return data")

    source = "\n".join(lines)
    local_vars: Dict[str, Any] = {}
    exec(source, context, local_vars)

    compiled_fn = local_vars[f"dump_{cls.__name__}"]
    return lambda obj, dumper: compiled_fn(obj, dumper, dump)


def _get_dump_handler(t: Type[Any]) -> DumpHandler:
    if t in _DUMP_HANDLER_CACHE:
        return _DUMP_HANDLER_CACHE[t]

    if t in DUMP_DISPATCH:
        handler = DUMP_DISPATCH[t]
        _DUMP_HANDLER_CACHE[t] = handler
        return handler

    origin = get_origin(t) or t
    if origin in (list, set, tuple, array.array):
        args = get_args(t)
        item_type = args[0] if args else Any
        item_handler = _get_dump_handler(item_type)

        def dump_seq(obj: Any, dumper: Dumper) -> List[Any]:
            return [item_handler(item, dumper) for item in obj]

        _DUMP_HANDLER_CACHE[t] = dump_seq
        return dump_seq

    if origin in (
        dict,
        collections.defaultdict,
        collections.OrderedDict,
        collections.Counter,
    ):
        args = get_args(t)
        v_type: Type[Any]
        if origin is collections.Counter:
            v_type = int
        else:
            v_type = args[1] if len(args) == 2 else Any
        v_handler = _get_dump_handler(v_type)

        def dump_mapping(obj: Any, dumper: Dumper) -> Dict[str, Any]:
            return {str(k): v_handler(v, dumper) for k, v in obj.items()}

        _DUMP_HANDLER_CACHE[t] = dump_mapping
        return dump_mapping

    if inspect.isclass(t) and getattr(t, "_lodum_enabled", False):
        handler = _compile_dump_handler(t)
        _DUMP_HANDLER_CACHE[t] = handler
        return handler

    for super_t, handler in DUMP_DISPATCH.items():
        if inspect.isclass(t) and issubclass(t, super_t):
            _DUMP_HANDLER_CACHE[t] = handler
            return handler

    raise SerializationError(f"Object of type {t.__name__} is not lodum-enabled")


def _compile_load_handler(cls: Type[Any]) -> LoadHandler:
    fields: Dict[str, Field] = getattr(cls, "_lodum_fields", {})
    lines = []
    lines.append(f"def load_{cls.__name__}(loader, load_fn, path):")
    lines.append("    try:")
    lines.append("        data = {k: v for k, v in loader.load_dict()}")
    lines.append("    except DeserializationError as e:")
    lines.append(
        f"        raise DeserializationError(f'Expected a dictionary to decode into class {cls.__name__}, but received a different type.', path)"
    )
    lines.append("    args = {}")

    context: Dict[str, Any] = {
        "cls": cls,
        "DeserializationError": DeserializationError,
        "SerializationError": SerializationError,
    }

    PRIMITIVE_LOADERS = {
        int: "load_int",
        str: "load_str",
        float: "load_float",
        bool: "load_bool",
    }

    for i, (field_name, field_info) in enumerate(fields.items()):
        field_name_in_json = field_info.rename if field_info.rename else field_info.name
        safe_json_name = f"key_{i}"
        context[safe_json_name] = field_name_in_json

        lines.append(
            f"    field_path = f'{{path}}.{field_name_in_json}' if path else '{field_name_in_json}'"
        )
        lines.append(f"    if {safe_json_name} in data:")
        lines.append(f"        val_loader = data[{safe_json_name}]")

        if field_info.deserializer:
            deser_name = f"deser_{i}"
            context[deser_name] = field_info.deserializer
            lines.append(
                f"        try: args['{field_name}'] = {deser_name}(val_loader.load_any())"
            )
            lines.append(
                "        except DeserializationError as e: raise DeserializationError(e.raw_message, e.path or field_path)"
            )
        else:
            ftype = field_info.type
            if ftype in PRIMITIVE_LOADERS:
                load_meth = PRIMITIVE_LOADERS[ftype]
                lines.append(
                    f"        try: args['{field_name}'] = val_loader.{load_meth}()"
                )
                lines.append(
                    "        except DeserializationError as e: raise DeserializationError(e.raw_message, e.path or field_path)"
                )
            else:
                type_name = f"type_{i}"
                context[type_name] = ftype
                lines.append(
                    f"        try: args['{field_name}'] = load_fn({type_name}, val_loader, field_path)"
                )
                lines.append(
                    "        except DeserializationError as e: raise DeserializationError(e.raw_message, e.path or field_path)"
                )

        if field_info.has_default:
            lines.append("    else:")
            default_getter = f"default_{i}"
            context[default_getter] = field_info.get_default
            lines.append(f"        args['{field_name}'] = {default_getter}()")
        else:
            lines.append("    else:")
            lines.append(
                f"        raise DeserializationError(f'Missing required field \\'{{{safe_json_name}}}\\' for class {cls.__name__}', path)"
            )

        if field_info.validate:
            validators = (
                field_info.validate
                if isinstance(field_info.validate, list)
                else [field_info.validate]
            )
            for j, v in enumerate(validators):
                v_name = f"v_{i}_{j}"
                context[v_name] = v
                lines.append(f"    try: {v_name}(args['{field_name}'])")
                lines.append(
                    "    except DeserializationError as e: raise DeserializationError(e.raw_message, e.path or field_path)"
                )

    lines.append("    try: return cls(**args)")
    lines.append(
        "    except TypeError as e: raise DeserializationError(f'Failed to instantiate {cls.__name__}. Original error: {{e}}', path)"
    )

    source = "\n".join(lines)
    local_vars: Dict[str, Any] = {}
    exec(source, context, local_vars)
    compiled_fn = local_vars[f"load_{cls.__name__}"]
    return lambda cls_ignore, loader, path: compiled_fn(loader, load, path)


def _get_load_handler(t: Type[Any]) -> LoadHandler:
    if t in _LOAD_HANDLER_CACHE:
        return _LOAD_HANDLER_CACHE[t]

    if isinstance(t, TypeVar):
        return _load_any
    origin = get_origin(t) or t
    args = get_args(t)

    if origin is Union and len(args) == 2 and args[1] is type(None):
        return _load_optional
    if origin is Union:
        return _load_union

    if origin in (list, array.array):
        args = get_args(t)
        item_type = args[0] if args else Any
        item_loader_fn = _get_load_handler(item_type)

        def load_list(
            cls_ignore: Type[Any], loader: Loader, path: Optional[str]
        ) -> Any:
            data = [
                item_loader_fn(item_type, item_l, f"{path}[{i}]" if path else f"[{i}]")
                for i, item_l in enumerate(loader.load_list())
            ]
            if origin is array.array:
                # Guess typecode: 'd' for floats, 'i' for ints
                typecode = "i"
                if data and isinstance(data[0], float):
                    typecode = "d"
                return array.array(typecode, data)
            return data

        _LOAD_HANDLER_CACHE[t] = load_list
        return load_list

    if origin in (
        dict,
        collections.defaultdict,
        collections.OrderedDict,
        collections.Counter,
    ):
        args = get_args(t)
        k_type: Type[Any]
        v_type: Type[Any]
        if origin is collections.Counter:
            k_type, v_type = (args[0] if args else Any), int
        else:
            k_type, v_type = (args[0], args[1]) if len(args) == 2 else (Any, Any)

        if k_type is not str and k_type is not Any:
            raise DeserializationError("JSON/YAML object keys must be strings")
        v_loader_fn = _get_load_handler(v_type)

        def load_dict(
            cls_ignore: Type[Any], loader: Loader, path: Optional[str]
        ) -> Any:
            data = {
                k: v_loader_fn(v_type, v_l, f"{path}.{k}" if path else k)
                for k, v_l in loader.load_dict()
            }
            if origin is collections.defaultdict:
                factory = v_type if v_type is not Any and callable(v_type) else None
                return collections.defaultdict(factory, data)
            if origin is collections.OrderedDict:
                return collections.OrderedDict(data)
            if origin is collections.Counter:
                return collections.Counter(data)
            return data

        _LOAD_HANDLER_CACHE[t] = load_dict
        return load_dict

    if origin in LOAD_DISPATCH:
        handler = LOAD_DISPATCH[origin]
        _LOAD_HANDLER_CACHE[origin] = handler
        return handler

    if inspect.isclass(origin) and getattr(origin, "_lodum_enabled", False):
        handler = _compile_load_handler(origin)
        _LOAD_HANDLER_CACHE[origin] = handler
        return handler

    for super_t, handler in LOAD_DISPATCH.items():
        if issubclass(origin, super_t):
            return handler
    raise DeserializationError(f"Cannot deserialize to type {t}")


# --- Generic Handlers ---


def _dump_primitive(obj: Any, dumper: Dumper) -> Any:
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


def _dump_sequence(obj: Any, dumper: Dumper) -> List[Any]:
    return [dump(item, dumper) for item in obj]


def _dump_dict(obj: Dict[Any, Any], dumper: Dumper) -> Dict[str, Any]:
    return {str(k): dump(v, dumper) for k, v in obj.items()}


def _dump_bytes(obj: bytes, d: Dumper) -> Any:
    return d.dump_bytes(obj)


def _dump_bytearray(obj: bytearray, d: Dumper) -> Any:
    return d.dump_bytes(bytes(obj))


def _dump_array(obj: array.array, d: Dumper) -> Any:
    return [dump(item, d) for item in obj]


def _dump_datetime(obj: datetime.datetime, d: Dumper) -> str:
    return d.dump_str(obj.isoformat())


def _dump_enum(obj: enum.Enum, d: Dumper) -> Any:
    return dump(obj.value, d)


def _dump_uuid(obj: uuid.UUID, d: Dumper) -> str:
    return d.dump_str(str(obj))


def _dump_decimal(obj: Decimal, d: Dumper) -> str:
    return d.dump_str(str(obj))


def _dump_path(obj: Path, d: Dumper) -> str:
    return d.dump_str(str(obj))


def _dump_numpy_array(obj: Any, d: Dumper) -> Any:
    return dump(obj.tolist(), d)


def _dump_pandas_dataframe(obj: Any, d: Dumper) -> Any:
    return dump(obj.to_dict(orient="records"), d)


def _dump_pandas_series(obj: Any, d: Dumper) -> Any:
    return dump(obj.to_dict(), d)


def _dump_polars_dataframe(obj: Any, d: Dumper) -> Any:
    return dump(obj.to_dict(), d)


def _dump_polars_series(obj: Any, d: Dumper) -> Any:
    return dump(obj.to_list(), d)


DUMP_DISPATCH.update(
    {
        int: _dump_primitive,
        str: _dump_primitive,
        float: _dump_primitive,
        bool: _dump_primitive,
        type(None): _dump_primitive,
        list: _dump_sequence,
        dict: _dump_dict,
        tuple: _dump_sequence,
        set: _dump_sequence,
        datetime.datetime: _dump_datetime,
        enum.Enum: _dump_enum,
        uuid.UUID: _dump_uuid,
        Decimal: _dump_decimal,
        Path: _dump_path,
        bytes: _dump_bytes,
        bytearray: _dump_bytearray,
        array.array: _dump_array,
        collections.defaultdict: _dump_dict,
        collections.OrderedDict: _dump_dict,
        collections.Counter: _dump_dict,
    }
)

if np is not None:
    DUMP_DISPATCH[np.ndarray] = _dump_numpy_array
if pd is not None:
    DUMP_DISPATCH[pd.DataFrame] = _dump_pandas_dataframe
    DUMP_DISPATCH[pd.Series] = _dump_pandas_series
if pl is not None:
    DUMP_DISPATCH[pl.DataFrame] = _dump_polars_dataframe
    DUMP_DISPATCH[pl.Series] = _dump_polars_series


def _load_primitive(cls: Type[T], loader: Loader, path: Optional[str] = None) -> T:
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


def _load_any(cls: Type[T], loader: Loader, path: Optional[str] = None) -> T:
    return cast(T, loader.load_any())


def _load_list(cls: Type[T], loader: Loader, path: Optional[str] = None) -> T:
    args = get_args(cls)
    item_type: Type[Any] = args[0] if args else Any
    return cast(
        T,
        [
            load(item_type, item_l, f"{path}[{i}]" if path else f"[{i}]")
            for i, item_l in enumerate(loader.load_list())
        ],
    )


def _load_dict(cls: Type[T], loader: Loader, path: Optional[str] = None) -> T:
    args = get_args(cls)
    key_type: Type[Any]
    value_type: Type[Any]
    key_type, value_type = (args[0], args[1]) if len(args) == 2 else (Any, Any)
    if key_type is not str and key_type is not Any:
        raise DeserializationError("JSON/YAML object keys must be strings", path)
    return cast(
        T,
        {
            k: load(value_type, v_l, f"{path}.{k}" if path else k)
            for k, v_l in loader.load_dict()
        },
    )


def _load_optional(cls: Type[T], loader: Loader, path: Optional[str] = None) -> T:
    if loader.load_any() is None:
        return cast(T, None)
    inner_type: Type[Any] = get_args(cls)[0]
    return load(inner_type, loader, path)


def _load_union(cls: Type[T], loader: Loader, path: Optional[str] = None) -> T:
    data = loader.load_any()

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
            if origin is dict:
                return 90
            if inspect.isclass(origin) and getattr(origin, "_lodum_enabled", False):
                return 80
            return -1
        return 10

    types: List[Type[Any]] = sorted(get_args(cls), key=get_priority, reverse=True)
    errors = []
    for inner_type in types:
        if get_priority(inner_type) < 0:
            continue
        try:
            # We need a new loader for the same data because the previous one might have been consumed
            # or it might be a specialized loader that we can re-instantiate.
            # Using type(loader)(data) is a bit of a hack but it works for current loaders.
            new_loader = type(loader)(data)  # type: ignore[operator, call-arg]
            return load(inner_type, new_loader, path)
        except (
            DeserializationError,
            ValueError,
            TypeError,
            KeyError,
            AttributeError,
        ) as e:
            msg = e.raw_message if isinstance(e, DeserializationError) else str(e)
            errors.append(f" - Failed as {inner_type}: {msg}")
            continue
    error_details = "\n".join(errors)
    raise DeserializationError(
        f"Could not decode data into any of the types in {cls}.\nAttempted types:\n{error_details}",
        path,
    )


def _load_datetime(cls: Type[T], loader: Loader, path: Optional[str] = None) -> T:
    try:
        return cast(T, datetime.datetime.fromisoformat(loader.load_str()))
    except (ValueError, DeserializationError) as e:
        msg = e.raw_message if isinstance(e, DeserializationError) else str(e)
        raise DeserializationError(
            msg, e.path if isinstance(e, DeserializationError) and e.path else path
        )


def _load_enum(cls: Type[T], loader: Loader, path: Optional[str] = None) -> T:
    try:
        first_member = next(iter(cls))  # type: ignore[call-overload]
        value = load(type(first_member.value), loader, path)
        return cast(T, cls(value))  # type: ignore[call-arg]
    except (ValueError, StopIteration, DeserializationError) as e:
        msg = e.raw_message if isinstance(e, DeserializationError) else str(e)
        raise DeserializationError(
            msg, e.path if isinstance(e, DeserializationError) and e.path else path
        )


def _load_uuid(cls: Type[T], loader: Loader, path: Optional[str] = None) -> T:
    try:
        return cast(T, uuid.UUID(loader.load_str()))
    except (ValueError, DeserializationError) as e:
        msg = e.raw_message if isinstance(e, DeserializationError) else str(e)
        raise DeserializationError(
            msg, e.path if isinstance(e, DeserializationError) and e.path else path
        )


def _load_decimal(cls: Type[T], loader: Loader, path: Optional[str] = None) -> T:
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


def _load_path(cls: Type[T], loader: Loader, path: Optional[str] = None) -> T:
    try:
        return cast(T, Path(loader.load_str()))
    except (TypeError, DeserializationError) as e:
        msg = e.raw_message if isinstance(e, DeserializationError) else str(e)
        raise DeserializationError(
            msg, e.path if isinstance(e, DeserializationError) and e.path else path
        )


def _load_bytes(cls: Type[T], loader: Loader, path: Optional[str] = None) -> T:
    try:
        return cast(T, loader.load_bytes())
    except (TypeError, DeserializationError) as e:
        msg = e.raw_message if isinstance(e, DeserializationError) else str(e)
        raise DeserializationError(
            msg, e.path if isinstance(e, DeserializationError) and e.path else path
        )


def _load_bytearray(cls: Type[T], loader: Loader, path: Optional[str] = None) -> T:
    try:
        return cast(T, bytearray(loader.load_bytes()))
    except (TypeError, DeserializationError, ValueError) as e:
        msg = e.raw_message if isinstance(e, DeserializationError) else str(e)
        raise DeserializationError(
            msg, e.path if isinstance(e, DeserializationError) and e.path else path
        )


def _load_array(cls: Type[T], loader: Loader, path: Optional[str] = None) -> T:
    try:
        data = _load_list(list, loader, path)
        typecode = "i"
        if data and isinstance(data[0], float):
            typecode = "d"
        return cast(T, array.array(typecode, data))
    except (TypeError, DeserializationError, ValueError) as e:
        msg = e.raw_message if isinstance(e, DeserializationError) else str(e)
        raise DeserializationError(
            msg, e.path if isinstance(e, DeserializationError) and e.path else path
        )


def _load_defaultdict(cls: Type[T], loader: Loader, path: Optional[str] = None) -> T:
    try:
        args = get_args(cls)
        val_type: Type[Any] = args[1] if len(args) == 2 else Any
        data = _load_dict(dict, loader, path)
        factory = val_type if val_type is not Any and callable(val_type) else None
        return cast(T, collections.defaultdict(factory, data))
    except (TypeError, DeserializationError) as e:
        msg = e.raw_message if isinstance(e, DeserializationError) else str(e)
        raise DeserializationError(
            msg, e.path if isinstance(e, DeserializationError) and e.path else path
        )


def _load_ordered_dict(cls: Type[T], loader: Loader, path: Optional[str] = None) -> T:
    try:
        data = _load_dict(dict, loader, path)
        return cast(T, collections.OrderedDict(data))
    except (TypeError, DeserializationError) as e:
        msg = e.raw_message if isinstance(e, DeserializationError) else str(e)
        raise DeserializationError(
            msg, e.path if isinstance(e, DeserializationError) and e.path else path
        )


def _load_counter(cls: Type[T], loader: Loader, path: Optional[str] = None) -> T:
    try:
        # Counter is basically Dict[Any, int]
        # But we need to make sure we load it correctly
        data = _load_dict(Dict[Any, int], loader, path)
        return cast(T, collections.Counter(data))
    except (TypeError, DeserializationError) as e:
        msg = e.raw_message if isinstance(e, DeserializationError) else str(e)
        raise DeserializationError(
            msg, e.path if isinstance(e, DeserializationError) and e.path else path
        )


def _load_tuple(cls: Type[T], loader: Loader, path: Optional[str] = None) -> T:
    try:
        item_types: tuple[Type[Any], ...] = get_args(cls)
        return cast(
            T,
            tuple(
                load(item_types[i], item_l, f"{path}[{i}]" if path else f"[{i}]")
                for i, item_l in enumerate(loader.load_list())
            ),
        )
    except (IndexError, DeserializationError) as e:
        msg = e.raw_message if isinstance(e, DeserializationError) else str(e)
        raise DeserializationError(
            msg, e.path if isinstance(e, DeserializationError) and e.path else path
        )


def _load_set(cls: Type[T], loader: Loader, path: Optional[str] = None) -> T:
    try:
        item_type: Type[Any] = get_args(cls)[0]
        return cast(
            T,
            {
                load(item_type, item_l, f"{path}[?]" if path else "[?]")
                for item_l in loader.load_list()
            },
        )
    except (TypeError, DeserializationError) as e:
        msg = e.raw_message if isinstance(e, DeserializationError) else str(e)
        raise DeserializationError(
            msg, e.path if isinstance(e, DeserializationError) and e.path else path
        )


def _load_numpy_array(cls: Type[T], loader: Loader, path: Optional[str] = None) -> T:
    if np is None:
        raise ImportError("numpy is required for numpy array deserialization")
    return cast(T, np.array(load(List, loader, path)))


def _load_pandas_dataframe(
    cls: Type[T], loader: Loader, path: Optional[str] = None
) -> T:
    if pd is None:
        raise ImportError("pandas is required for pandas DataFrame deserialization")
    return cast(T, pd.DataFrame.from_records(load(list, loader, path)))


def _load_pandas_series(cls: Type[T], loader: Loader, path: Optional[str] = None) -> T:
    if pd is None:
        raise ImportError("pandas is required for pandas Series deserialization")
    return cast(T, pd.Series(load(dict, loader, path)))


def _load_polars_dataframe(
    cls: Type[T], loader: Loader, path: Optional[str] = None
) -> T:
    if pl is None:
        raise ImportError("polars is required for polars DataFrame deserialization")
    return cast(T, pl.DataFrame(load(dict, loader, path)))


def _load_polars_series(cls: Type[T], loader: Loader, path: Optional[str] = None) -> T:
    if pl is None:
        raise ImportError("polars is required for polars Series deserialization")
    return cast(T, pl.Series(load(list, loader, path)))


LOAD_DISPATCH.update(
    {
        int: _load_primitive,
        str: _load_primitive,
        float: _load_primitive,
        bool: _load_primitive,
        type(None): _load_primitive,
        list: _load_list,
        dict: _load_dict,
        tuple: _load_tuple,
        set: _load_set,
        datetime.datetime: _load_datetime,
        enum.Enum: _load_enum,
        uuid.UUID: _load_uuid,
        Decimal: _load_decimal,
        Path: _load_path,
        bytes: _load_bytes,
        bytearray: _load_bytearray,
        array.array: _load_array,
        collections.defaultdict: _load_defaultdict,
        collections.OrderedDict: _load_ordered_dict,
        collections.Counter: _load_counter,
        Any: _load_any,
    }
)

if np is not None:
    LOAD_DISPATCH[np.ndarray] = _load_numpy_array
if pd is not None:
    LOAD_DISPATCH[pd.DataFrame] = _load_pandas_dataframe
    LOAD_DISPATCH[pd.Series] = _load_pandas_series
if pl is not None:
    LOAD_DISPATCH[pl.DataFrame] = _load_polars_dataframe
    LOAD_DISPATCH[pl.Series] = _load_polars_series
