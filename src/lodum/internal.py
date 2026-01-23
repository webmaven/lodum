import inspect
import datetime
import enum
import uuid
import collections
import array
import threading
from decimal import Decimal
from pathlib import Path
from typing import (
    Any,
    Dict,
    List,
    Optional,
    Type,
    TypeVar,
    Union,
    get_origin,
    get_args,
    cast,
    ForwardRef,
)

from .core import Loader, Dumper
from .exception import DeserializationError, SerializationError
from .field import Field, _NAME_TO_TYPE_CACHE, _REGISTRY_LOCK
from .registry import registry, TypeHandler, DumpHandler, LoadHandler

T = TypeVar("T")

# --- Security Limits ---

DEFAULT_MAX_DEPTH = 100
DEFAULT_MAX_SIZE = 10 * 1024 * 1024  # 10MB

# --- Caching and Compilation ---


def _sanitize_name(name: str) -> str:
    """Sanitizes a string to be a valid Python identifier part."""
    if not name:
        return "unknown"
    return "".join(c if c.isalnum() else "_" for c in name)


_DUMP_HANDLER_CACHE: Dict[Type[Any], DumpHandler] = {}
_LOAD_HANDLER_CACHE: Dict[Type[Any], LoadHandler] = {}
_CACHE_LOCK = threading.Lock()


def dump(obj: Any, dumper: Dumper, depth: int = 0, seen: Optional[set] = None) -> Any:
    """Recursively encodes a Python object using a given dumper."""
    if depth > DEFAULT_MAX_DEPTH:
        raise SerializationError(f"Max recursion depth ({DEFAULT_MAX_DEPTH}) exceeded")

    if seen is None:
        seen = set()

    obj_id = id(obj)
    if obj_id in seen:
        raise SerializationError("Circular reference detected")

    # Only track containers and lodum objects to detect cycles
    is_container = isinstance(
        obj, (list, dict, set, tuple, collections.deque, array.array)
    ) or getattr(obj, "_lodum_enabled", False)

    if is_container:
        seen.add(obj_id)

    try:
        handler = _get_dump_handler(type(obj))
        return handler(obj, dumper, depth, seen)
    finally:
        if is_container:
            seen.remove(obj_id)


def load(cls: Type[T], loader: Loader, path: Optional[str] = None, depth: int = 0) -> T:
    """Recursively decodes a Python object using a given loader."""
    if depth > DEFAULT_MAX_DEPTH:
        raise DeserializationError(
            f"Max recursion depth ({DEFAULT_MAX_DEPTH}) exceeded", path
        )
    handler = _get_load_handler(cls)
    return cast(T, handler(cls, loader, path, depth))


def generate_schema(
    t: Type[Any], depth: int = 0, visited: Optional[set] = None
) -> Dict[str, Any]:
    """Generates a JSON Schema for a given type."""
    if depth > DEFAULT_MAX_DEPTH:
        raise SerializationError(
            f"Max recursion depth ({DEFAULT_MAX_DEPTH}) exceeded during schema generation"
        )

    if visited is None:
        visited = set()

    # Direct registry lookup
    if t in registry._handlers:
        return registry._handlers[t].schema_fn(t, depth, visited)

    origin = get_origin(t) or t

    # Generic lookup (exact match)
    if origin in registry._handlers:
        return registry._handlers[origin].schema_fn(t, depth, visited)

    # Inheritance lookup
    for super_t, h_obj in registry._handlers.items():
        try:
            if inspect.isclass(origin) and issubclass(origin, super_t):
                return h_obj.schema_fn(t, depth, visited)
        except TypeError:
            continue

    if inspect.isclass(t) and getattr(t, "_lodum_enabled", False):
        if t in visited:
            # Recursive reference
            return {"$ref": f"#/definitions/{_sanitize_name(t.__name__)}"}

        visited.add(t)
        fields: Dict[str, Field] = getattr(t, "_lodum_fields", {})
        properties = {}
        required = []
        for field_name, field_info in fields.items():
            key = field_info.rename if field_info.rename else field_info.name
            properties[key] = generate_schema(field_info.type, depth + 1, visited)
            if not field_info.has_default:
                required.append(key)

        schema = {"type": "object", "properties": properties}

        tag_name = getattr(t, "_lodum_tag", None)
        if tag_name:
            tag_value = getattr(t, "_lodum_tag_value", t.__name__)
            properties[tag_name] = {"const": tag_value}
            if tag_name not in required:
                required.append(tag_name)

        if required:
            schema["required"] = required

        visited.remove(t)
        return schema

    return {}


def _compile_dump_handler(cls: Type[Any]) -> DumpHandler:
    """
    Compiles an optimized dump handler for a lodum-enabled class.
    """
    fields: Dict[str, Field] = getattr(cls, "_lodum_fields", {})
    lines = []
    safe_name = _sanitize_name(cls.__name__)
    lines.append(f"def dump_{safe_name}(obj, dumper, dump_fn, depth, seen):")
    lines.append("    data = dumper.begin_struct(cls)")

    tag = getattr(cls, "_lodum_tag", None)
    tag_value = getattr(cls, "_lodum_tag_value", None)

    context: Dict[str, Any] = {
        "cls": cls,
        "DeserializationError": DeserializationError,
        "SerializationError": SerializationError,
    }

    if tag:
        context["tag_name"] = tag
        context["tag_value"] = tag_value
        lines.append("    data[tag_name] = dumper.dump_str(tag_value)")

    PRIMITIVE_TYPES = {
        int: "dump_int",
        str: "dump_str",
        float: "dump_float",
        bool: "dump_bool",
        bytes: "dump_bytes",
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
                        f"    data[{safe_key}] = dumper.{dump_meth}(val) if isinstance(val, (float, int)) else dump_fn(val, dumper, depth + 1, seen)"
                    )
                else:
                    lines.append(
                        f"    data[{safe_key}] = dumper.{dump_meth}(val) if isinstance(val, {ftype.__name__}) else dump_fn(val, dumper, depth + 1, seen)"
                    )
            else:
                lines.append(
                    f"    data[{safe_key}] = dump_fn(obj.{field_name}, dumper, depth + 1, seen)"
                )

    lines.append("    dumper.end_struct()")
    lines.append("    return data")

    source = "\n".join(lines)
    local_vars: Dict[str, Any] = {}
    exec(source, context, local_vars)

    compiled_fn = local_vars[f"dump_{safe_name}"]
    return lambda obj, dumper, depth, seen: compiled_fn(obj, dumper, dump, depth, seen)


def _get_dump_handler(
    t: Type[Any], excluding: Optional[Type[Any]] = None
) -> DumpHandler:
    if isinstance(t, str):
        t = ForwardRef(t)

    # Lock-free fast path for cache hits
    if t in _DUMP_HANDLER_CACHE:
        return _DUMP_HANDLER_CACHE[t]

    with _CACHE_LOCK:
        # Double-check inside lock
        if t in _DUMP_HANDLER_CACHE:
            return _DUMP_HANDLER_CACHE[t]

        if inspect.isclass(t) and not isinstance(t, ForwardRef):
            with _REGISTRY_LOCK:
                _NAME_TO_TYPE_CACHE[t.__name__] = t

    if t == excluding:
        raise ValueError("Recursive reference during compilation")

    if t in registry._handlers:
        handler = registry._handlers[t].dump_fn
        with _CACHE_LOCK:
            _DUMP_HANDLER_CACHE[t] = handler
        return handler

    origin = get_origin(t) or t
    if origin in registry._handlers:
        handler = registry._handlers[origin].dump_fn
        with _CACHE_LOCK:
            _DUMP_HANDLER_CACHE[t] = handler
        return handler

    if origin in (list, set, tuple, array.array):
        args = get_args(t)
        item_type = args[0] if args else Any
        item_handler = _get_dump_handler(item_type, excluding=excluding)

        def dump_seq(
            obj: Any, dumper: Dumper, depth: int, seen: Optional[set]
        ) -> List[Any]:
            return [item_handler(item, dumper, depth + 1, seen) for item in obj]

        with _CACHE_LOCK:
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
        v_handler = _get_dump_handler(v_type, excluding=excluding)

        def dump_mapping(
            obj: Any, dumper: Dumper, depth: int, seen: Optional[set]
        ) -> Dict[str, Any]:
            return {
                str(k): v_handler(v, dumper, depth + 1, seen) for k, v in obj.items()
            }

        with _CACHE_LOCK:
            _DUMP_HANDLER_CACHE[t] = dump_mapping
        return dump_mapping

    if inspect.isclass(t) and getattr(t, "_lodum_enabled", False):
        handler = _compile_dump_handler(t)
        with _CACHE_LOCK:
            _DUMP_HANDLER_CACHE[t] = handler
        return handler

    for super_t, h_obj in registry._handlers.items():
        try:
            if inspect.isclass(t) and issubclass(t, super_t):
                handler = h_obj.dump_fn
                with _CACHE_LOCK:
                    _DUMP_HANDLER_CACHE[t] = handler
                return handler
        except TypeError:
            continue

    raise SerializationError(f"Object of type {t.__name__} is not lodum-enabled")


def _compile_load_handler(cls: Type[Any]) -> LoadHandler:
    fields: Dict[str, Field] = getattr(cls, "_lodum_fields", {})
    lines = []
    safe_name = _sanitize_name(cls.__name__)
    lines.append(f"def load_{safe_name}(loader, load_fn, path, depth):")
    lines.append("    raw_data = loader.get_dict()")
    lines.append("    if isinstance(raw_data, dict):")
    lines.append("        data = raw_data")
    lines.append("        is_raw = True")
    lines.append("    else:")
    lines.append("        try:")
    lines.append("            data = {k: v for k, v in loader.load_dict()}")
    lines.append("            is_raw = False")
    lines.append("        except DeserializationError as e:")
    lines.append(
        f"            raise DeserializationError(f'Expected a dictionary to decode into class {cls.__name__}, but received a different type.', path)"
    )
    lines.append("    args = {}")

    context: Dict[str, Any] = {
        "cls": cls,
        "DeserializationError": DeserializationError,
        "SerializationError": SerializationError,
    }

    tag = getattr(cls, "_lodum_tag", None)
    tag_value = getattr(cls, "_lodum_tag_value", None)

    if tag:
        context["tag_name"] = tag
        context["tag_value"] = tag_value
        lines.append("    if tag_name in data:")
        lines.append(
            "        actual_tag = data[tag_name] if is_raw else data[tag_name].load_any()"
        )
        lines.append("        if actual_tag != tag_value:")
        lines.append(
            "            raise DeserializationError(f'Invalid tag value: expected {tag_value}, got {actual_tag}', path)"
        )

    PRIMITIVE_LOADERS = {
        int: "load_int",
        str: "load_str",
        float: "load_float",
        bool: "load_bool",
        bytes: "load_bytes",
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
                f"        try: args['{field_name}'] = {deser_name}(val_loader if is_raw else val_loader.load_any())"
            )
            lines.append(
                "        except DeserializationError as e: raise DeserializationError(e.raw_message, e.path or field_path)"
            )
        else:
            ftype = field_info.type
            if ftype in PRIMITIVE_LOADERS:
                load_meth = PRIMITIVE_LOADERS[ftype]
                lines.append("        if is_raw:")
                if ftype is int:
                    lines.append(
                        "            if not isinstance(val_loader, int) or isinstance(val_loader, bool): raise DeserializationError(f'Expected int, got {type(val_loader).__name__}', field_path)"
                    )
                    lines.append(f"            args['{field_name}'] = val_loader")
                elif ftype is str:
                    lines.append(
                        "            if not isinstance(val_loader, str): raise DeserializationError(f'Expected str, got {type(val_loader).__name__}', field_path)"
                    )
                    lines.append(f"            args['{field_name}'] = val_loader")
                elif ftype is float:
                    lines.append(
                        "            if not isinstance(val_loader, (float, int)): raise DeserializationError(f'Expected float, got {type(val_loader).__name__}', field_path)"
                    )
                    lines.append(
                        f"            args['{field_name}'] = float(val_loader)"
                    )
                elif ftype is bool:
                    lines.append(
                        "            if not isinstance(val_loader, bool): raise DeserializationError(f'Expected bool, got {type(val_loader).__name__}', field_path)"
                    )
                    lines.append(f"            args['{field_name}'] = val_loader")
                elif ftype is bytes:
                    lines.append(
                        f"            try: args['{field_name}'] = loader.load_bytes_value(val_loader)"
                    )
                    lines.append(
                        "            except DeserializationError as e: raise DeserializationError(e.raw_message, e.path or field_path)"
                    )

                lines.append("        else:")
                lines.append(
                    f"            try: args['{field_name}'] = val_loader.{load_meth}()"
                )
                lines.append(
                    "            except DeserializationError as e: raise DeserializationError(e.raw_message, e.path or field_path)"
                )
            else:
                type_name = f"type_{i}"
                context[type_name] = ftype
                lines.append(
                    "        val_to_load = val_loader if not is_raw else type(loader)(val_loader)"
                )
                lines.append(
                    f"        try: args['{field_name}'] = load_fn({type_name}, val_to_load, field_path, depth + 1)"
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
    compiled_fn = local_vars[f"load_{safe_name}"]
    return lambda cls_ignore, loader, path, depth: compiled_fn(
        loader, load, path, depth
    )


def _get_load_handler(
    t: Type[Any], excluding: Optional[Type[Any]] = None
) -> LoadHandler:
    if isinstance(t, str):
        t = ForwardRef(t)

    # Lock-free fast path for cache hits
    if t in _LOAD_HANDLER_CACHE:
        return _LOAD_HANDLER_CACHE[t]

    with _CACHE_LOCK:
        # Double-check inside lock
        if t in _LOAD_HANDLER_CACHE:
            return _LOAD_HANDLER_CACHE[t]

        if inspect.isclass(t) and not isinstance(t, ForwardRef):
            with _REGISTRY_LOCK:
                _NAME_TO_TYPE_CACHE[t.__name__] = t

    if t == excluding:
        raise ValueError("Recursive reference during compilation")

    if isinstance(t, TypeVar):
        return _load_any
    if isinstance(t, ForwardRef):
        ref_name = t.__forward_arg__
        # Try registry first
        for cls in registry._handlers:
            try:
                if inspect.isclass(cls) and cls.__name__ == ref_name:
                    return _get_load_handler(cls)
            except TypeError:
                continue
        # Try cache
        with _CACHE_LOCK:
            for cls in _LOAD_HANDLER_CACHE:
                try:
                    if inspect.isclass(cls) and cls.__name__ == ref_name:
                        return _LOAD_HANDLER_CACHE[cls]
                except TypeError:
                    continue

        resolved_type = None
        with _REGISTRY_LOCK:
            resolved_type = _NAME_TO_TYPE_CACHE.get(ref_name)
        if resolved_type:
            return _get_load_handler(resolved_type, excluding=excluding)

        raise DeserializationError(f"Cannot resolve ForwardRef {ref_name!r}")

    origin = get_origin(t) or t
    args = get_args(t)

    if origin is Union and len(args) == 2 and args[1] is type(None):
        return _load_optional

    if origin is Union:
        # Check if it's a Tagged Union
        tag_names = set()
        for arg in args:
            if inspect.isclass(arg):
                tag_names.add(getattr(arg, "_lodum_tag", None))
            else:
                tag_names.add(None)

        if len(tag_names) == 1 and None not in tag_names:
            tag_name = tag_names.pop()
            tag_map = {}
            for arg in args:
                tag_value = getattr(arg, "_lodum_tag_value", arg.__name__)
                tag_map[tag_value] = arg

            # Pre-resolve handlers for each variant
            handler_map = {
                tag_val: _get_load_handler(v_type, excluding=excluding)
                for tag_val, v_type in tag_map.items()
            }

            def load_tagged_union(cls_ignore, loader, path, depth):
                if depth > DEFAULT_MAX_DEPTH:
                    raise DeserializationError(
                        f"Max recursion depth ({DEFAULT_MAX_DEPTH}) exceeded", path
                    )
                raw = loader.get_dict()
                data = raw if raw is not None else loader.load_any()
                if isinstance(data, dict) and tag_name in data:
                    tv = data[tag_name]
                    if tv in handler_map:
                        v_handler = handler_map[tv]
                        v_type = tag_map[tv]
                        new_loader = type(loader)(data)  # type: ignore[operator, call-arg]
                        return v_handler(v_type, new_loader, path, depth + 1)
                return _load_union(t, loader, path, depth)

            with _CACHE_LOCK:
                _LOAD_HANDLER_CACHE[t] = load_tagged_union
            return load_tagged_union

        return _load_union

    # Registry lookup for origin (e.g., list, dict) or concrete type
    if origin in registry._handlers:
        pass

    if origin in (list, array.array):
        args = get_args(t)
        item_type = args[0] if args else Any
        item_loader_fn = _get_load_handler(item_type, excluding=excluding)

        def load_list(
            cls_ignore: Type[Any], loader: Loader, path: Optional[str], depth: int
        ) -> Any:
            data = [
                item_loader_fn(
                    item_type, item_l, f"{path}[{i}]" if path else f"[{i}]", depth + 1
                )
                for i, item_l in enumerate(loader.load_list())
            ]
            if origin is array.array:
                # Guess typecode: 'd' for floats, 'i' for ints
                typecode = "i"
                if data and isinstance(data[0], float):
                    typecode = "d"
                return array.array(typecode, data)
            return data

        with _CACHE_LOCK:
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
        v_loader_fn = _get_load_handler(v_type, excluding=excluding)

        def load_dict(
            cls_ignore: Type[Any], loader: Loader, path: Optional[str], depth: int
        ) -> Any:
            data = {
                k: v_loader_fn(v_type, v_l, f"{path}.{k}" if path else k, depth + 1)
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

        with _CACHE_LOCK:
            _LOAD_HANDLER_CACHE[t] = load_dict
        return load_dict

    if origin in registry._handlers:
        handler = registry._handlers[origin].load_fn
        with _CACHE_LOCK:
            _LOAD_HANDLER_CACHE[origin] = handler
        return handler

    if inspect.isclass(origin) and getattr(origin, "_lodum_enabled", False):
        handler = _compile_load_handler(origin)
        with _CACHE_LOCK:
            _LOAD_HANDLER_CACHE[origin] = handler
        return handler

    for super_t, h_obj in registry._handlers.items():
        try:
            if inspect.isclass(origin) and issubclass(origin, super_t):
                return h_obj.load_fn
        except TypeError:
            continue
    raise DeserializationError(f"Cannot deserialize to type {t}")


# --- Schema Handlers ---


def _schema_int(t: Type[Any], depth: int, visited: Optional[set]) -> Dict[str, Any]:
    return {"type": "integer"}


def _schema_str(t: Type[Any], depth: int, visited: Optional[set]) -> Dict[str, Any]:
    return {"type": "string"}


def _schema_float(t: Type[Any], depth: int, visited: Optional[set]) -> Dict[str, Any]:
    return {"type": "number"}


def _schema_bool(t: Type[Any], depth: int, visited: Optional[set]) -> Dict[str, Any]:
    return {"type": "boolean"}


def _schema_none(t: Type[Any], depth: int, visited: Optional[set]) -> Dict[str, Any]:
    return {"type": "null"}


def _schema_any(t: Type[Any], depth: int, visited: Optional[set]) -> Dict[str, Any]:
    return {}


def _schema_uuid(t: Type[Any], depth: int, visited: Optional[set]) -> Dict[str, Any]:
    return {"type": "string", "format": "uuid"}


def _schema_decimal(t: Type[Any], depth: int, visited: Optional[set]) -> Dict[str, Any]:
    return {"type": "string"}


def _schema_path(t: Type[Any], depth: int, visited: Optional[set]) -> Dict[str, Any]:
    return {"type": "string"}


def _schema_bytes(t: Type[Any], depth: int, visited: Optional[set]) -> Dict[str, Any]:
    return {"type": "string", "contentEncoding": "base64"}


def _schema_list(t: Type[Any], depth: int, visited: Optional[set]) -> Dict[str, Any]:
    args = get_args(t)
    item_schema = generate_schema(args[0], depth + 1, visited) if args else {}
    return {"type": "array", "items": item_schema}


def _schema_dict(t: Type[Any], depth: int, visited: Optional[set]) -> Dict[str, Any]:
    args = get_args(t)
    origin = get_origin(t) or t
    if origin is collections.Counter:
        val_schema = {"type": "integer"}
    else:
        val_schema = (
            generate_schema(args[1], depth + 1, visited) if len(args) == 2 else {}
        )
    return {"type": "object", "additionalProperties": val_schema}


def _schema_union(t: Type[Any], depth: int, visited: Optional[set]) -> Dict[str, Any]:
    args = get_args(t)
    schema: Dict[str, Any] = {
        "anyOf": [generate_schema(arg, depth + 1, visited) for arg in args]
    }

    tag_names = set()
    for arg in args:
        if inspect.isclass(arg) and getattr(arg, "_lodum_enabled", False):
            tag_names.add(getattr(arg, "_lodum_tag", None))
        else:
            tag_names.add(None)

    if len(tag_names) == 1 and None not in tag_names:
        tag_name = tag_names.pop()
        schema["discriminator"] = {"propertyName": tag_name}

    return schema


def _schema_tuple(t: Type[Any], depth: int, visited: Optional[set]) -> Dict[str, Any]:
    args = get_args(t)
    return {
        "type": "array",
        "prefixItems": [generate_schema(arg, depth + 1, visited) for arg in args],
    }


def _schema_set(t: Type[Any], depth: int, visited: Optional[set]) -> Dict[str, Any]:
    args = get_args(t)
    item_schema = generate_schema(args[0], depth + 1, visited) if args else {}
    return {"type": "array", "items": item_schema, "uniqueItems": True}


def _schema_datetime(
    t: Type[Any], depth: int, visited: Optional[set]
) -> Dict[str, Any]:
    return {"type": "string", "format": "date-time"}


def _schema_enum(t: Type[Any], depth: int, visited: Optional[set]) -> Dict[str, Any]:
    return {"enum": [m.value for m in t]}


# --- Generic Handlers (Dump/Load) ---


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


def _dump_sequence(
    obj: Any, dumper: Dumper, depth: int, seen: Optional[set]
) -> List[Any]:
    return [dump(item, dumper, depth + 1, seen) for item in obj]


def _dump_dict(
    obj: Dict[Any, Any], dumper: Dumper, depth: int, seen: Optional[set]
) -> Dict[str, Any]:
    return {str(k): dump(v, dumper, depth + 1, seen) for k, v in obj.items()}


def _dump_bytes(obj: Any, d: Dumper, depth: int, seen: Optional[set]) -> Any:
    return d.dump_bytes(obj)


def _dump_bytearray(obj: Any, d: Dumper, depth: int, seen: Optional[set]) -> Any:
    return d.dump_bytes(bytes(obj))


def _dump_array(obj: array.array, d: Dumper, depth: int, seen: Optional[set]) -> Any:
    return [dump(item, d, depth + 1, seen) for item in obj]


def _dump_datetime(
    obj: datetime.datetime, d: Dumper, depth: int, seen: Optional[set]
) -> str:
    return d.dump_str(obj.isoformat())


def _dump_enum(obj: enum.Enum, d: Dumper, depth: int, seen: Optional[set]) -> Any:
    return dump(obj.value, d, depth + 1, seen)


def _dump_uuid(obj: uuid.UUID, d: Dumper, depth: int, seen: Optional[set]) -> str:
    return d.dump_str(str(obj))


def _dump_decimal(obj: Any, d: Dumper, depth: int, seen: Optional[set]) -> str:
    return d.dump_str(str(obj))


def _dump_path(obj: Any, d: Dumper, depth: int, seen: Optional[set]) -> str:
    return d.dump_str(str(obj))


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


def _load_list(
    cls: Type[T], loader: Loader, path: Optional[str] = None, depth: int = 0
) -> T:
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
    args = get_args(cls)
    key_type: Type[Any]
    value_type: Type[Any]
    key_type, value_type = (args[0], args[1]) if len(args) == 2 else (Any, Any)
    if key_type is not str and key_type is not Any:
        raise DeserializationError("JSON/YAML object keys must be strings", path)
    return cast(
        T,
        {
            k: load(value_type, v_l, f"{path}.{k}" if path else k, depth + 1)
            for k, v_l in loader.load_dict()
        },
    )


def _load_optional(
    cls: Type[T], loader: Loader, path: Optional[str] = None, depth: int = 0
) -> T:
    if loader.load_any() is None:
        return cast(T, None)
    inner_type: Type[Any] = get_args(cls)[0]
    return load(inner_type, loader, path, depth + 1)


def _load_union(
    cls: Type[T], loader: Loader, path: Optional[str] = None, depth: int = 0
) -> T:
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


def _load_array(
    cls: Type[T], loader: Loader, path: Optional[str] = None, depth: int = 0
) -> T:
    try:
        data = _load_list(list, loader, path, depth)
        typecode = "i"
        if data and isinstance(data[0], float):
            typecode = "d"
        return cast(T, array.array(typecode, data))
    except (TypeError, DeserializationError, ValueError) as e:
        msg = e.raw_message if isinstance(e, DeserializationError) else str(e)
        raise DeserializationError(
            msg, e.path if isinstance(e, DeserializationError) and e.path else path
        )


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
        msg = e.raw_message if isinstance(e, DeserializationError) else str(e)
        raise DeserializationError(
            msg, e.path if isinstance(e, DeserializationError) and e.path else path
        )


def _load_ordered_dict(
    cls: Type[T], loader: Loader, path: Optional[str] = None, depth: int = 0
) -> T:
    try:
        data = _load_dict(dict, loader, path, depth)
        return cast(T, collections.OrderedDict(data))
    except (TypeError, DeserializationError) as e:
        msg = e.raw_message if isinstance(e, DeserializationError) else str(e)
        raise DeserializationError(
            msg, e.path if isinstance(e, DeserializationError) and e.path else path
        )


def _load_counter(
    cls: Type[T], loader: Loader, path: Optional[str] = None, depth: int = 0
) -> T:
    try:
        # Counter is basically Dict[Any, int]
        # But we need to make sure we load it correctly
        data = _load_dict(Dict[Any, int], loader, path, depth)
        return cast(T, collections.Counter(data))
    except (TypeError, DeserializationError) as e:
        msg = e.raw_message if isinstance(e, DeserializationError) else str(e)
        raise DeserializationError(
            msg, e.path if isinstance(e, DeserializationError) and e.path else path
        )


def _load_tuple(
    cls: Type[T], loader: Loader, path: Optional[str] = None, depth: int = 0
) -> T:
    try:
        item_types: tuple[Type[Any], ...] = get_args(cls)
        return cast(
            T,
            tuple(
                load(
                    item_types[i],
                    item_l,
                    f"{path}[{i}]" if path else f"[{i}]",
                    depth + 1,
                )
                for i, item_l in enumerate(loader.load_list())
            ),
        )
    except (IndexError, DeserializationError) as e:
        msg = e.raw_message if isinstance(e, DeserializationError) else str(e)
        raise DeserializationError(
            msg, e.path if isinstance(e, DeserializationError) and e.path else path
        )


def _load_set(
    cls: Type[T], loader: Loader, path: Optional[str] = None, depth: int = 0
) -> T:
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
        msg = e.raw_message if isinstance(e, DeserializationError) else str(e)
        raise DeserializationError(
            msg, e.path if isinstance(e, DeserializationError) and e.path else path
        )


# --- Registration ---

registry.register(int, TypeHandler(_dump_primitive, _load_primitive, _schema_int))
registry.register(str, TypeHandler(_dump_primitive, _load_primitive, _schema_str))
registry.register(float, TypeHandler(_dump_primitive, _load_primitive, _schema_float))
registry.register(bool, TypeHandler(_dump_primitive, _load_primitive, _schema_bool))
registry.register(
    type(None), TypeHandler(_dump_primitive, _load_primitive, _schema_none)
)
registry.register(
    Any,
    TypeHandler(
        _dump_primitive, _load_any, _schema_any
    ),  # Any might need custom handling?
)

# Containers
registry.register(list, TypeHandler(_dump_sequence, _load_list, _schema_list))
registry.register(dict, TypeHandler(_dump_dict, _load_dict, _schema_dict))
registry.register(tuple, TypeHandler(_dump_sequence, _load_tuple, _schema_tuple))
registry.register(set, TypeHandler(_dump_sequence, _load_set, _schema_set))
registry.register(Union, TypeHandler(_dump_primitive, _load_union, _schema_union))  # type: ignore[arg-type]

# Library types
registry.register(
    datetime.datetime, TypeHandler(_dump_datetime, _load_datetime, _schema_datetime)
)
registry.register(enum.Enum, TypeHandler(_dump_enum, _load_enum, _schema_enum))
registry.register(uuid.UUID, TypeHandler(_dump_uuid, _load_uuid, _schema_uuid))
registry.register(Decimal, TypeHandler(_dump_decimal, _load_decimal, _schema_decimal))
registry.register(Path, TypeHandler(_dump_path, _load_path, _schema_path))
registry.register(bytes, TypeHandler(_dump_bytes, _load_bytes, _schema_bytes))
registry.register(
    bytearray, TypeHandler(_dump_bytearray, _load_bytearray, _schema_bytes)
)
registry.register(array.array, TypeHandler(_dump_array, _load_array, _schema_list))

# Collections
registry.register(
    collections.defaultdict, TypeHandler(_dump_dict, _load_defaultdict, _schema_dict)
)
registry.register(
    collections.OrderedDict, TypeHandler(_dump_dict, _load_ordered_dict, _schema_dict)
)
registry.register(
    collections.Counter, TypeHandler(_dump_dict, _load_counter, _schema_dict)
)

# Initialize name-to-type cache with basic types
with _REGISTRY_LOCK:
    for _cls in registry.get_all():
        if inspect.isclass(_cls):
            _NAME_TO_TYPE_CACHE[_cls.__name__] = _cls
