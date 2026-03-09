# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
from .concurrency import Lock, local
from typing import (
    Any,
    Callable,
    Dict,
    Iterator,
    List,
    Optional,
    Type,
    TypeVar,
    Protocol,
    TYPE_CHECKING,
    Union as TypingUnion,
    IO,
)

if TYPE_CHECKING:
    from .registry import TypeRegistry, DumpHandler, LoadHandler

from .exception import DeserializationError

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
        self.cache_lock = Lock()
        self.name_to_type_cache: Dict[str, Type[Any]] = {}


_active_context = local()


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
    A class decorator that marks a class as lodum-enabled.
    Field metadata is processed lazily during first serialization/deserialization
    to correctly handle forward references and circular dependencies.
    """

    def decorator(c: T) -> T:
        setattr(c, "_lodum_enabled", True)
        setattr(c, "_lodum_tag", tag)
        setattr(c, "_lodum_tag_value", tag_value or c.__name__)

        register_type(c)

        # Wrap __init__ to resolve Field defaults
        from functools import wraps
        from .field import Field

        original_init = c.__init__

        @wraps(original_init)
        def new_init(self, *args, **kwargs):
            original_init(self, *args, **kwargs)
            # Resolve Field defaults if any were left as instance attributes
            if hasattr(c, "_lodum_fields"):
                for name in c._lodum_fields:
                    try:
                        val = getattr(self, name)
                        if isinstance(val, Field):
                            setattr(self, name, val.get_default())
                    except AttributeError:
                        continue

        c.__init__ = new_init

        # Analysis is still officially lazy, but we perform it here
        # to ensure metadata is available for immediate use (e.g. in tests).
        from .compiler.analyzer import _analyze_class

        _analyze_class(c)
        return c

    if cls is None:
        return decorator
    return decorator(cls)


class Dumper(Protocol):
    """
    Defines the interface for a data format dumper (encoder).
    """

    def dump_int(
        self, value: int, depth: int = 0, seen: Optional[set] = None
    ) -> Any: ...
    def dump_str(
        self, value: str, depth: int = 0, seen: Optional[set] = None
    ) -> Any: ...
    def dump_float(
        self, value: float, depth: int = 0, seen: Optional[set] = None
    ) -> Any: ...
    def dump_bool(
        self, value: bool, depth: int = 0, seen: Optional[set] = None
    ) -> Any: ...
    def dump_bytes(
        self, value: bytes, depth: int = 0, seen: Optional[set] = None
    ) -> Any: ...
    def dump_none(self, depth: int = 0, seen: Optional[set] = None) -> Any: ...
    def dump_list(
        self, value: List[Any], depth: int = 0, seen: Optional[set] = None
    ) -> Any: ...
    def dump_dict(
        self, value: Dict[str, Any], depth: int = 0, seen: Optional[set] = None
    ) -> Any: ...
    def begin_struct(self, cls: Type) -> Any: ...
    def end_struct(self) -> Any: ...
    def field(
        self,
        name: str,
        value: Any,
        handler: Callable[[Any, "Dumper", int, Optional[set]], Any],
        depth: int = 0,
        seen: Optional[set] = None,
    ) -> None:
        """Processes a single struct field."""
        ...

    def begin_list(self) -> None:
        """Starts a sequence/list."""
        ...

    def end_list(self) -> Any:
        """Ends a sequence/list."""
        ...

    def list_item(
        self,
        value: Any,
        handler: Callable[[Any, "Dumper", int, Optional[set]], Any],
        depth: int = 0,
        seen: Optional[set] = None,
    ) -> None:
        """Processes a single list item."""
        ...


class BaseDumper:
    """
    Base implementation of the Dumper protocol to reduce duplication.
    """

    def __init__(self) -> None:
        self._struct_stack: List[Dict[str, Any]] = []
        self._list_stack: List[List[Any]] = []

    def dump_int(self, value: int, depth: int = 0, seen: Optional[set] = None) -> Any:
        return value

    def dump_str(self, value: str, depth: int = 0, seen: Optional[set] = None) -> Any:
        return value

    def dump_float(
        self, value: float, depth: int = 0, seen: Optional[set] = None
    ) -> Any:
        return value

    def dump_bool(self, value: bool, depth: int = 0, seen: Optional[set] = None) -> Any:
        return value

    def dump_bytes(
        self, value: bytes, depth: int = 0, seen: Optional[set] = None
    ) -> Any:
        return value

    def dump_none(self, depth: int = 0, seen: Optional[set] = None) -> Any:
        return None

    def dump_list(
        self, value: List[Any], depth: int = 0, seen: Optional[set] = None
    ) -> Any:
        return value

    def dump_dict(
        self, value: Dict[str, Any], depth: int = 0, seen: Optional[set] = None
    ) -> Any:
        return value

    def begin_struct(self, cls: Type) -> Any:
        self._struct_stack.append({})
        return self._struct_stack[-1]

    def end_struct(self) -> Any:
        return self._struct_stack.pop()

    def field(
        self,
        name: str,
        value: Any,
        handler: Callable[[Any, "Dumper", int, Optional[set]], Any],
        depth: int = 0,
        seen: Optional[set] = None,
    ) -> None:
        res = handler(value, self, depth, seen)
        self._struct_stack[-1][name] = res

    def begin_list(self) -> None:
        self._list_stack.append([])

    def end_list(self) -> Any:
        return self._list_stack.pop()

    def list_item(
        self,
        value: Any,
        handler: Callable[[Any, "Dumper", int, Optional[set]], Any],
        depth: int = 0,
        seen: Optional[set] = None,
    ) -> None:
        res = handler(value, self, depth, seen)
        self._list_stack[-1].append(res)


class StreamingDumper(Dumper):
    """
    Base class for dumpers that write directly to an IO target.
    """

    def __init__(self, target: IO[Any]) -> None:
        self._target = target
        self._depth = 0
        self._first_item_stack: List[bool] = [True]

    def write_raw(self, chunk: Any) -> None:
        """Writes pre-encoded data directly to the stream."""
        self._target.write(chunk)

    def begin_struct(self, cls: Type) -> Any:
        self._depth += 1
        self._first_item_stack.append(True)
        return None

    def end_struct(self) -> Any:
        self._depth -= 1
        self._first_item_stack.pop()
        return None

    def field(
        self,
        name: str,
        value: Any,
        handler: Callable[[Any, "Dumper", int, Optional[set]], Any],
        depth: int = 0,
        seen: Optional[set] = None,
    ) -> None:
        handler(value, self, depth, seen)

    def begin_list(self) -> None:
        self._depth += 1
        self._first_item_stack.append(True)

    def end_list(self) -> Any:
        self._depth -= 1
        self._first_item_stack.pop()
        return None

    def list_item(
        self,
        value: Any,
        handler: Callable[[Any, "Dumper", int, Optional[set]], Any],
        depth: int = 0,
        seen: Optional[set] = None,
    ) -> None:
        handler(value, self, depth, seen)


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
        return self._data

    def rewind(self, marker: Any) -> None:
        self._data = marker

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
