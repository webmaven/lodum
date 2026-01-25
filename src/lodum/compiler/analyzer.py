# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import inspect
from typing import (
    Any,
    Type,
    ForwardRef,
    Optional,
)


def _sanitize_name(name: str) -> str:
    """Sanitizes a string to be a valid Python identifier part."""
    if not name:
        return "unknown"
    return "".join(c if c.isalnum() else "_" for c in name)


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
