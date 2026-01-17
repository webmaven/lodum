# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import inspect
import functools
from typing import Any, Dict, List, Protocol, Type, Iterator

from .field import Field, _MISSING

def lodum(cls: Type) -> Type:
    """
    A class decorator that marks a class as lodum-enabled and processes field metadata.
    """
    setattr(cls, '_lodum_enabled', True)

    original_init = cls.__init__
    init_sig = inspect.signature(original_init)
    fields: Dict[str, Field] = {}

    for param in init_sig.parameters.values():
        if param.name == 'self':
            continue

        is_field_spec = isinstance(param.default, Field)

        if is_field_spec:
            field_info = param.default
        else:
            # Create a default Field for params without one, preserving its default value
            default = param.default if param.default is not param.empty else _MISSING
            field_info = Field(default=default)

        field_info.name = param.name
        field_info.type = param.annotation
        fields[param.name] = field_info

    setattr(cls, '_lodum_fields', fields)

    @functools.wraps(original_init)
    def new_init(self, *args, **kwargs):
        bound_args = init_sig.bind(self, *args, **kwargs)
        bound_args.apply_defaults()

        resolved_args = {}
        for name, value in bound_args.arguments.items():
            if name == 'self':
                continue

            if isinstance(value, Field):
                if value.has_default:
                    resolved_args[name] = value.get_default()
            else:
                resolved_args[name] = value

        original_init(self, **resolved_args)

    cls.__init__ = new_init
    return cls

class Dumper(Protocol):
    """
    Defines the interface for a data format dumper (encoder).
    """
    def dump_int(self, value: int) -> Any: ...
    def dump_str(self, value: str) -> Any: ...
    def dump_float(self, value: float) -> Any: ...
    def dump_bool(self, value: bool) -> Any: ...
    def dump_list(self, value: List[Any]) -> Any: ...
    def dump_dict(self, value: Dict[str, Any]) -> Any: ...
    def begin_struct(self, cls: Type) -> Any: ...
    def end_struct(self) -> Any: ...

class BaseDumper:
    """
    Base implementation of the Dumper protocol to reduce duplication.
    """
    def dump_int(self, value: int) -> Any: return value
    def dump_str(self, value: str) -> Any: return value
    def dump_float(self, value: float) -> Any: return value
    def dump_bool(self, value: bool) -> Any: return value
    def dump_list(self, value: List[Any]) -> Any: return value
    def dump_dict(self, value: Dict[str, Any]) -> Any: return value
    def begin_struct(self, cls: Type) -> Any: return {}
    def end_struct(self) -> Any: pass


class Loader(Protocol):
    """
    Defines the interface for a data format loader (decoder).
    """
    def load_int(self) -> int: ...
    def load_str(self) -> str: ...
    def load_float(self) -> float: ...
    def load_bool(self) -> bool: ...
    def load_list(self) -> Iterator['Loader']: ...
    def load_dict(self) -> Iterator[tuple[str, 'Loader']]: ...
    def load_any(self) -> Any: ...

class BaseLoader:
    """
    Base implementation of the Loader protocol to reduce duplication.
    """
    def __init__(self, data: Any):
        self._data = data

    def load_any(self) -> Any:
        return self._data
