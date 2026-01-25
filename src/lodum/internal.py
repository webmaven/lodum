# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import inspect
import datetime
import enum
import uuid
import collections
import array
import threading
import ast
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

from .core import Loader, Dumper, DEFAULT_MAX_DEPTH
from .core import DEFAULT_MAX_SIZE as DEFAULT_MAX_SIZE
from .exception import DeserializationError, SerializationError
from .field import _REGISTRY_LOCK
from .registry import registry, DumpHandler, LoadHandler, TypeHandler
from .compiler.analyzer import _resolve_forward_ref, _NAME_TO_TYPE_CACHE
from .compiler.dump_codegen import _build_dump_function_ast
from .compiler.load_codegen import _build_load_function_ast
from .handlers.base import (
    _dump_int,
    _dump_str,
    _dump_float,
    _dump_bool,
    _dump_primitive,
    _load_primitive,
    _load_any,
    _load_optional,
)
from .handlers.collections import (
    _dump_sequence,
    _dump_dict,
    _dump_array,
    _load_list,
    _load_dict,
    _load_defaultdict,
    _load_ordered_dict,
    _load_counter,
    _load_tuple,
    _load_set,
    _load_array,
    _load_union,
)
from .handlers.stdlib import (
    _dump_bytes,
    _dump_bytearray,
    _dump_datetime,
    _dump_enum,
    _dump_uuid,
    _dump_decimal,
    _dump_path,
    _load_datetime,
    _load_enum,
    _load_uuid,
    _load_decimal,
    _load_path,
    _load_bytes,
    _load_bytearray,
)

# Re-export schema generation
from .schema import generate_schema as generate_schema

T = TypeVar("T")

# --- Caching and Compilation ---

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


def _compile_dump_handler(cls: Type[Any]) -> DumpHandler:
    """
    Compiles an optimized dump handler for a lodum-enabled class using AST.
    """
    func_def, context = _build_dump_function_ast(cls, _get_dump_handler, dump)
    module = ast.Module(body=[func_def], type_ignores=[])
    ast.fix_missing_locations(module)
    code = compile(module, filename="<lodum-codegen>", mode="exec")

    local_vars: Dict[str, Any] = {}
    exec(code, context, local_vars)

    compiled_fn = local_vars[func_def.name]
    return lambda obj, dumper, depth, seen: compiled_fn(obj, dumper, dump, depth, seen)


def _get_dump_handler(
    t: Type[Any], excluding: Optional[Type[Any]] = None
) -> DumpHandler:
    if isinstance(t, str):
        t = ForwardRef(t)

    with _CACHE_LOCK:
        if t in _DUMP_HANDLER_CACHE:
            return _DUMP_HANDLER_CACHE[t]

        if inspect.isclass(t) and not isinstance(t, ForwardRef):
            with _REGISTRY_LOCK:
                _NAME_TO_TYPE_CACHE[t.__name__] = t

    if t == excluding:
        raise ValueError("Recursive reference during compilation")

    if isinstance(t, ForwardRef):
        resolved_type = _resolve_forward_ref(t, _DUMP_HANDLER_CACHE, registry._handlers)
        if resolved_type:
            return _get_dump_handler(resolved_type, excluding=excluding)
        return dump

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

    type_name = t.__name__ if hasattr(t, "__name__") else str(t)
    raise SerializationError(f"Object of type {type_name} is not lodum-enabled")


def _compile_load_handler(cls: Type[Any]) -> LoadHandler:
    """
    Compiles an optimized load handler for a lodum-enabled class using AST.
    """
    func_def, context = _build_load_function_ast(cls, _get_load_handler)
    module = ast.Module(body=[func_def], type_ignores=[])
    ast.fix_missing_locations(module)
    code = compile(module, filename="<lodum-codegen>", mode="exec")

    local_vars: Dict[str, Any] = {}
    exec(code, context, local_vars)
    compiled_fn = local_vars[func_def.name]
    return lambda cls_ignore, loader, path, depth: compiled_fn(loader, load, path, depth)


def _get_load_handler(
    t: Type[Any], excluding: Optional[Type[Any]] = None
) -> LoadHandler:
    if isinstance(t, str):
        t = ForwardRef(t)

    with _CACHE_LOCK:
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
        resolved_type = _resolve_forward_ref(t, _LOAD_HANDLER_CACHE, registry._handlers)
        if resolved_type:
            return _get_load_handler(resolved_type, excluding=excluding)
        raise DeserializationError(f"Cannot resolve ForwardRef {t.__forward_arg__!r}")

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


# --- Import Schema and register late to avoid circular issues ---
from .schema import (  # noqa: E402
    _schema_int,
    _schema_str,
    _schema_float,
    _schema_bool,
    _schema_none,
    _schema_any,
    _schema_uuid,
    _schema_decimal,
    _schema_path,
    _schema_bytes,
    _schema_list,
    _schema_dict,
    _schema_union,
    _schema_tuple,
    _schema_set,
    _schema_datetime,
    _schema_enum,
)

# --- Registration ---

registry.register(int, TypeHandler(_dump_int, _load_primitive, _schema_int))
registry.register(str, TypeHandler(_dump_str, _load_primitive, _schema_str))
registry.register(float, TypeHandler(_dump_float, _load_primitive, _schema_float))
registry.register(bool, TypeHandler(_dump_bool, _load_primitive, _schema_bool))
registry.register(
    type(None), TypeHandler(_dump_primitive, _load_primitive, _schema_none)
)
registry.register(
    Any,
    TypeHandler(dump, _load_any, _schema_any),  # Use global dump for Any
)

# Containers
registry.register(list, TypeHandler(_dump_sequence, _load_list, _schema_list))
registry.register(dict, TypeHandler(_dump_dict, _load_dict, _schema_dict))
registry.register(tuple, TypeHandler(_dump_sequence, _load_tuple, _schema_tuple))
registry.register(set, TypeHandler(_dump_sequence, _load_set, _schema_set))
registry.register(
    cast(Type[Any], Union), TypeHandler(dump, _load_union, _schema_union)
)  # Use global dump for Union

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