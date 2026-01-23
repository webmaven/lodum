from typing import Any, Callable, Dict, Optional, Type, NamedTuple, TypeVar
from .core import Loader, Dumper

T = TypeVar("T")

# Define function signatures
DumpHandler = Callable[[Any, Dumper, int, Optional[set]], Any]
LoadHandler = Callable[[Type[Any], Loader, Optional[str], int], Any]
SchemaHandler = Callable[[Type[Any], int, Optional[set]], Dict[str, Any]]


class TypeHandler(NamedTuple):
    dump_fn: DumpHandler
    load_fn: LoadHandler
    schema_fn: SchemaHandler


class TypeRegistry:
    def __init__(self) -> None:
        self._handlers: Dict[Type[Any], TypeHandler] = {}

    def register(self, t: Type[Any], handler: TypeHandler) -> None:
        self._handlers[t] = handler

    def get(self, t: Type[Any]) -> Optional[TypeHandler]:
        return self._handlers.get(t)

    def get_all(self) -> Dict[Type[Any], TypeHandler]:
        return self._handlers.copy()


# Global registry instance
registry = TypeRegistry()
