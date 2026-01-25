# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import inspect
import functools
import threading
from typing import (
    Any,
    Dict,
    Iterator,
    List,
    Optional,
    Type,
    TypeVar,
    Protocol,
    TYPE_CHECKING,
    Union as TypingUnion,
)

if TYPE_CHECKING:
    from .registry import TypeRegistry, DumpHandler, LoadHandler

from .exception import DeserializationError
from .field import Field, _MISSING

T = TypeVar("T", bound=Type[Any])

# --- Security Limits ---

DEFAULT_MAX_DEPTH = 100
DEFAULT_MAX_SIZE = 10 * 1024 * 1024  # 10MB


class Context:
    """
    Holds the serialization/deserialization context, including registry and caches.
    Encapsulating this allows for isolated serialization environments.
    """

    def __init__(self, registry: Optional["TypeRegistry"] = None) -> None:
        from .registry import registry as global_registry

        self.registry: "TypeRegistry" = (
            registry.copy() if registry else global_registry.copy()
        )
        self.dump_cache: Dict[Type[Any], "DumpHandler"] = {}
        self.load_cache: Dict[Type[Any], "LoadHandler"] = {}
        self.cache_lock = threading.Lock()
        self.name_to_type_cache: Dict[str, Type[Any]] = {}


_active_context = threading.local()


def get_context() -> Context:
    """Returns the currently active context or creates a default one."""
    if not hasattr(_active_context, "current"):
        _active_context.current = Context()
    return _active_context.current


def set_context(context: Context) -> None:
    """Sets the active context for the current thread."""
    _active_context.current = context


def reset_context() -> Context:
    """Resets the active context to a fresh one and returns it."""
    from .internal import _register_builtin_handlers

    ctx = Context()
    set_context(ctx)
    _register_builtin_handlers(ctx)
    return ctx


def register_type(cls: Type[Any]) -> None:
    """Registers a class in the name-to-type cache of the active context."""
    ctx = get_context()
    ctx.name_to_type_cache[cls.__name__] = cls


def lodum(
    cls: Optional[T] = None,
    tag: Optional[str] = None,
    tag_value: Optional[str] = None,
) -> Any:
    """
    A class decorator that marks a class as lodum-enabled and processes field metadata.

    Args:
        cls: The class to decorate.
        tag: An optional field name to use as a tag for identifying the class in a Union.
        tag_value: An optional value for the tag field. Defaults to the class name.
    """

    def decorator(c: T) -> T:
        setattr(c, "_lodum_enabled", True)
        setattr(c, "_lodum_tag", tag)
        setattr(c, "_lodum_tag_value", tag_value or c.__name__)

        original_init = c.__init__
        init_sig = inspect.signature(original_init)
        fields: Dict[str, Field] = {}

        for param in init_sig.parameters.values():
            if param.name == "self":
                continue

            is_field_spec = isinstance(param.default, Field)

            if is_field_spec:
                field_info = param.default
            else:
                # Create a default Field for params without one, preserving its default value
                default = (
                    param.default if param.default is not param.empty else _MISSING
                )
                field_info = Field(default=default)

            field_info.name = param.name
            field_info.type = param.annotation
            fields[param.name] = field_info

        setattr(c, "_lodum_fields", fields)

        @functools.wraps(original_init)
        def new_init(self: Any, *args: Any, **kwargs: Any) -> None:
            bound_args = init_sig.bind(self, *args, **kwargs)
            bound_args.apply_defaults()

            resolved_args = {}
            for name, value in bound_args.arguments.items():
                if name == "self":
                    continue

                if isinstance(value, Field):
                    if value.has_default:
                        resolved_args[name] = value.get_default()
                else:
                    resolved_args[name] = value

            original_init(self, **resolved_args)

        c.__init__ = new_init  # type: ignore[method-assign]
        register_type(c)
        return c

    if cls is None:
        return decorator
    return decorator(cls)


class Dumper(Protocol):
    """
    Defines the interface for a data format dumper (encoder).
    """

    def dump_int(self, value: int) -> Any: ...
    def dump_str(self, value: str) -> Any: ...
    def dump_float(self, value: float) -> Any: ...
    def dump_bool(self, value: bool) -> Any: ...
    def dump_bytes(self, value: bytes) -> Any: ...
    def dump_list(self, value: List[Any]) -> Any: ...
    def dump_dict(self, value: Dict[str, Any]) -> Any: ...
    def begin_struct(self, cls: Type) -> Any: ...
    def end_struct(self) -> Any: ...


class BaseDumper:
    """
    Base implementation of the Dumper protocol to reduce duplication.
    """

    def dump_int(self, value: int) -> Any:
        return value

    def dump_str(self, value: str) -> Any:
        return value

    def dump_float(self, value: float) -> Any:
        return value

    def dump_bool(self, value: bool) -> Any:
        return value

    def dump_bytes(self, value: bytes) -> Any:
        return value

    def dump_list(self, value: List[Any]) -> Any:
        return value

    def dump_dict(self, value: Dict[str, Any]) -> Any:
        return value

    def begin_struct(self, cls: Type) -> Any:
        return {}

    def end_struct(self) -> Any:
        pass


class Loader(Protocol):
    """
    Defines the interface for a data format loader (decoder).
    """

    def load_int(self) -> int: ...
    def load_str(self) -> str: ...
    def load_float(self) -> float: ...
    def load_bool(self) -> bool: ...
    def load_bytes(self) -> bytes: ...
    def load_list(self) -> Iterator["Loader"]: ...
    def load_dict(self) -> Iterator[tuple[str, "Loader"]]: ...
    def load_any(self) -> Any: ...
    def mark(self) -> Any: ...
    def rewind(self, marker: Any) -> None: ...
    def get_dict(self) -> Optional[TypingUnion[Dict[str, Any], List[Any]]]: ...
    def load_bytes_value(self, value: Any) -> bytes: ...


class BaseLoader:
    """
    Base implementation of the Loader protocol to reduce duplication.
    """

    def __init__(self, data: Any) -> None:
        self._data = data

    def load_any(self) -> Any:
        return self._data

    def mark(self) -> Any:
        return None

    def rewind(self, marker: Any) -> None:
        pass

    def load_int(self) -> int:
        val = self.load_any()
        if not isinstance(val, int) or isinstance(val, bool):
            raise DeserializationError(f"Expected int, got {type(val).__name__}")
        return val

    def load_str(self) -> str:
        val = self.load_any()
        if not isinstance(val, str):
            raise DeserializationError(f"Expected str, got {type(val).__name__}")
        return val

    def load_float(self) -> float:
        val = self.load_any()
        if not isinstance(val, (float, int)):
            raise DeserializationError(f"Expected float, got {type(val).__name__}")
        return float(val)

    def load_bool(self) -> bool:
        val = self.load_any()
        if not isinstance(val, bool):
            raise DeserializationError(f"Expected bool, got {type(val).__name__}")
        return val

    def load_list(self) -> Iterator["Loader"]:
        val = self.load_any()
        if not isinstance(val, list):
            raise DeserializationError(f"Expected list, got {type(val).__name__}")
        return (type(self)(item) for item in val)

    def load_dict(self) -> Iterator[tuple[str, "Loader"]]:
        val = self.load_any()
        if not isinstance(val, dict):
            raise DeserializationError(f"Expected dict, got {type(val).__name__}")
        return ((str(k), type(self)(v)) for k, v in val.items())

    def get_dict(self) -> Optional[TypingUnion[Dict[str, Any], List[Any]]]:
        if isinstance(self._data, (dict, list)):
            return self._data
        return None

    def load_bytes(self) -> bytes:
        return self.load_bytes_value(self._data)

    def load_bytes_value(self, value: Any) -> bytes:
        if not isinstance(value, bytes):
            raise DeserializationError(f"Expected bytes, got {type(value).__name__}")
        return value
