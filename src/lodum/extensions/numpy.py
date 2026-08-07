# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
from typing import Any

import numpy as np

from ..core import Dumper, Loader
from ..registry import TypeHandler


def _dump_numpy_array(obj: Any, dumper: Dumper, depth: int, seen: set | None) -> Any:
    if hasattr(dumper, "dump_buffer"):
        return dumper.dump_buffer(obj, depth, seen)

    from ..internal import dump

    return dump(obj.tolist(), dumper, depth + 1, seen)


def _load_numpy_array(
    cls: type[Any], loader: Loader, path: str | None = None, depth: int = 0
) -> Any:
    from ..internal import load

    marker = loader.mark()
    try:
        raw_data = loader.load_any()
        if isinstance(raw_data, (memoryview, bytes, bytearray, np.ndarray)):
            return np.array(raw_data, copy=False)
    except (ValueError, TypeError, BufferError):
        # Fast-path failed (wrong dtype, shape, etc.) — fall back to list deserialization
        pass
    loader.rewind(marker)

    return np.array(load(list, loader, path, depth + 1))


def _schema_numpy_array(
    t: type[Any], depth: int, visited: set | None
) -> dict[str, Any]:
    # Simplified schema for now, treating as generic array
    return {"type": "array"}


def register():
    from ..registry import registry

    registry.register(
        np.ndarray,
        TypeHandler(_dump_numpy_array, _load_numpy_array, _schema_numpy_array),
    )
