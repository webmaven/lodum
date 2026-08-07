# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
from typing import Any, Dict, List, Optional, Type
import numpy as np
from ..core import Dumper, Loader
from ..registry import TypeHandler


def _dump_numpy_array(obj: Any, dumper: Dumper, depth: int, seen: Optional[set]) -> Any:
    if hasattr(dumper, "dump_buffer"):
        return dumper.dump_buffer(obj, depth, seen)

    from ..internal import dump

    return dump(obj.tolist(), dumper, depth + 1, seen)


def _load_numpy_array(
    cls: Type[Any], loader: Loader, path: Optional[str] = None, depth: int = 0
) -> Any:
    from ..internal import load

    marker = loader.mark()
    try:
        raw_data = loader.load_any()
        if isinstance(raw_data, (memoryview, bytes, bytearray, np.ndarray)):
            return np.array(raw_data, copy=False)
    except Exception:
        pass
    loader.rewind(marker)

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
