# SPDX-FileCopyrightText: 2025-present Jules <jules@example.com>
#
# SPDX-License-Identifier: MIT
import inspect
import functools
from typing import Any, Dict, List, Protocol, Type, Iterator

from .field import Field, _MISSING

def serializable(cls: Type) -> Type:
    """
    A class decorator that marks a class as serializable and processes field metadata.
    """
    setattr(cls, '_lodum_serializable', True)

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

class Serializer(Protocol):
    """
    Defines the interface for a data format serializer.
    """
    def serialize_int(self, value: int) -> Any: ...
    def serialize_str(self, value: str) -> Any: ...
    def serialize_float(self, value: float) -> Any: ...
    def serialize_bool(self, value: bool) -> Any: ...
    def serialize_list(self, value: List[Any]) -> Any: ...
    def serialize_dict(self, value: Dict[str, Any]) -> Any: ...
    def begin_struct(self, cls: Type) -> Any: ...
    def end_struct(self) -> Any: ...


class Deserializer(Protocol):
    """
    Defines the interface for a data format deserializer.
    """
    def as_int(self) -> int: ...
    def as_str(self) -> str: ...
    def as_float(self) -> float: ...
    def as_bool(self) -> bool: ...
    def as_list(self) -> Iterator['Deserializer']: ...
    def as_dict(self) -> Iterator[tuple[str, 'Deserializer']]: ...
    def as_any(self) -> Any: ...
