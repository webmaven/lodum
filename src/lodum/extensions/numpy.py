# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
from typing import Any, Dict, List, Optional, Type
import numpy as np
from ..core import Dumper, Loader
from ..registry import TypeHandler


def _dump_numpy_array(obj: Any, dumper: Dumper, depth: int, seen: Optional[set]) -> Any:
    # Need to import dump from internal to support recursion?
    # This is the circular dependency problem again.
    # But handlers in internal.py use `dump`.
    # We can pass `dump` as an argument if we change the signature or usage.
    # Wait, `dump` calls `handler(obj, dumper, depth, seen)`.
    # So `_dump_numpy_array` receives arguments.
    # It needs to call `dump` for the list items.

    # We can import `dump` inside the function to avoid top-level circular import.
    from ..internal import dump

    return dump(obj.tolist(), dumper, depth + 1, seen)


def _load_numpy_array(
    cls: Type[Any], loader: Loader, path: Optional[str] = None, depth: int = 0
) -> Any:
    from ..internal import load

    return np.array(load(List, loader, path, depth + 1))


def _schema_numpy_array(
    t: Type[Any], depth: int, visited: Optional[set]
) -> Dict[str, Any]:
    # Simplified schema for now, treating as generic array
    return {"type": "array"}


def register():
    from ..registry import registry

    registry.register(
        np.ndarray,
        TypeHandler(_dump_numpy_array, _load_numpy_array, _schema_numpy_array),
    )
