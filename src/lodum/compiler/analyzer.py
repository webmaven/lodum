# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import dataclasses
import inspect
from typing import (
    Any,
    ForwardRef,
)

from ..field import _MISSING, Field


def _sanitize_name(name: str) -> str:
    """Sanitizes a string to be a valid Python identifier part."""
    if not name:
        return "unknown"
    return "".join(c if c.isalnum() else "_" for c in name)


def _analyze_class(cls: type[Any]) -> None:
    """
    Analyzes a class signature to extract lodum fields.
    Populates _lodum_fields on the class.
    """
    if hasattr(cls, "_lodum_fields"):
        return

    if dataclasses.is_dataclass(cls):
        cls._lodum_enabled = True
        fields: dict[str, Field] = {}
        for f in dataclasses.fields(cls):
            if not f.init:
                continue

            if isinstance(f.default, Field):
                field_info = f.default
            else:
                default = _MISSING
                default_factory = None
                if f.default is not dataclasses.MISSING:
                    default = f.default
                elif f.default_factory is not dataclasses.MISSING:
                    default_factory = f.default_factory

                field_info = Field(
                    default=default,
                    default_factory=default_factory,
                )

            field_info.name = f.name
            field_info.type = f.type
            fields[f.name] = field_info

        cls._lodum_fields = fields
        return

    try:
        init_sig = inspect.signature(cls.__init__)
    except (ValueError, TypeError):
        # Fallback for classes without a clear __init__
        cls._lodum_fields = {}
        return

    fields: dict[str, Field] = {}

    for param in init_sig.parameters.values():
        if param.name == "self":
            continue

        is_field_spec = isinstance(param.default, Field)

        if is_field_spec:
            field_info = param.default
        else:
            # Create a default Field for params without one, preserving its default value
            default = param.default if param.default is not param.empty else _MISSING
            field_info = Field(default=default)

        field_info.name = param.name
        field_info.type = (
            param.annotation if param.annotation is not param.empty else Any
        )
        fields[param.name] = field_info

    cls._lodum_fields = fields


def _resolve_forward_ref(
    t: ForwardRef,
    context_cache: dict[type[Any], Any],
    registry_handlers: dict[type[Any], Any],
    name_to_type_cache: dict[str, type[Any]],
) -> type[Any] | None:
    ref_name = t.__forward_arg__
    # Try registry first
    for cls_reg in registry_handlers:
        try:
            if inspect.isclass(cls_reg) and cls_reg.__name__ == ref_name:
                return cls_reg
        except TypeError:
            continue
    # Try cache
    for cls_cache in context_cache:
        try:
            if inspect.isclass(cls_cache) and cls_cache.__name__ == ref_name:
                return cls_cache
        except TypeError:
            continue

    return name_to_type_cache.get(ref_name)
