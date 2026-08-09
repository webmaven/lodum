# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
from typing import Any

import polars as pl  # type: ignore[import-not-found]

from ..core import Dumper, Loader
from ..registry import TypeHandler


def _dump_polars_dataframe(
    obj: Any, dumper: Dumper, depth: int, seen: set | None
) -> Any:
    from ..internal import dump

    return dump(obj.to_dict(), dumper, depth + 1, seen)


def _dump_polars_series(obj: Any, dumper: Dumper, depth: int, seen: set | None) -> Any:
    from ..internal import dump

    return dump(obj.to_list(), dumper, depth + 1, seen)


def _load_polars_dataframe(
    cls: type[Any], loader: Loader, path: str | None = None, depth: int = 0
) -> Any:
    from ..internal import load

    return pl.DataFrame(load(dict, loader, path, depth + 1))


def _load_polars_series(
    cls: type[Any], loader: Loader, path: str | None = None, depth: int = 0
) -> Any:
    from ..internal import load

    return pl.Series(load(list[Any], loader, path, depth + 1))


def _schema_polars_dataframe(
    t: type[Any], depth: int, visited: set | None
) -> dict[str, Any]:
    return {"type": "object"}


def _schema_polars_series(
    t: type[Any], depth: int, visited: set | None
) -> dict[str, Any]:
    return {"type": "array"}


def register():
    from ..registry import registry

    registry.register(
        pl.DataFrame,
        TypeHandler(
            _dump_polars_dataframe, _load_polars_dataframe, _schema_polars_dataframe
        ),
    )
    registry.register(
        pl.Series,
        TypeHandler(_dump_polars_series, _load_polars_series, _schema_polars_series),
    )
