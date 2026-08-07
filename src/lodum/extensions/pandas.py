# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
from typing import Any

import pandas as pd

from ..core import Dumper, Loader
from ..registry import TypeHandler


def _dump_pandas_dataframe(
    obj: Any, dumper: Dumper, depth: int, seen: set | None
) -> Any:
    from ..internal import dump

    return dump(obj.to_dict(orient="records"), dumper, depth + 1, seen)


def _dump_pandas_series(
    obj: Any, dumper: Dumper, depth: int, seen: set | None
) -> Any:
    from ..internal import dump

    return dump(obj.to_dict(), dumper, depth + 1, seen)


def _load_pandas_dataframe(
    cls: type[Any], loader: Loader, path: str | None = None, depth: int = 0
) -> Any:
    from ..internal import load

    data = load(list[dict[str, Any]], loader, path, depth + 1)
    return pd.DataFrame.from_records(data)


def _load_pandas_series(
    cls: type[Any], loader: Loader, path: str | None = None, depth: int = 0
) -> Any:
    from ..internal import load

    return pd.Series(load(dict, loader, path, depth + 1))


def _schema_pandas_dataframe(
    t: type[Any], depth: int, visited: set | None
) -> dict[str, Any]:
    return {"type": "array", "items": {"type": "object"}}


def _schema_pandas_series(
    t: type[Any], depth: int, visited: set | None
) -> dict[str, Any]:
    return {"type": "object"}


def register():
    from ..registry import registry

    registry.register(
        pd.DataFrame,
        TypeHandler(
            _dump_pandas_dataframe, _load_pandas_dataframe, _schema_pandas_dataframe
        ),
    )
    registry.register(
        pd.Series,
        TypeHandler(_dump_pandas_series, _load_pandas_series, _schema_pandas_series),
    )
