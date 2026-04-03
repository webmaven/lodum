# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import inspect
from typing import (
    Any,
    Dict,
    Type,
    ForwardRef,
    Optional,
)

from ..field import Field, _MISSING


def _sanitize_name(name: str) -> str:
    """Sanitizes a string to be a valid Python identifier part."""
    if not name:
        return "unknown"
    return "".join(c if c.isalnum() else "_" for c in name)


def _analyze_class(cls: Type[Any]) -> None:
    """
    Analyzes a class signature to extract lodum fields.
    Populates _lodum_fields on the class.
    """
    if hasattr(cls, "_lodum_fields"):
        return

    # To handle circular imports, we might need a lock or more care here,
    # but for now we do standard signature analysis.
    try:
        init_sig = inspect.signature(cls.__init__)
    except (ValueError, TypeError):
        # Fallback for classes without a clear __init__
        setattr(cls, "_lodum_fields", {})
        return

    fields: Dict[str, Field] = {}

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

    setattr(cls, "_lodum_fields", fields)


def _resolve_forward_ref(
    t: ForwardRef,
    context_cache: dict[Type[Any], Any],
    registry_handlers: dict[Type[Any], Any],
    name_to_type_cache: dict[str, Type[Any]],
) -> Optional[Type[Any]]:
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
