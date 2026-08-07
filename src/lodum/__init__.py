# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
__version__ = "0.4.0"

from typing import Any, TypeVar

from . import bson, cbor, concurrency, json, msgpack, pickle, toml, yaml
from .core import lodum
from .field import field
from .internal import generate_schema as schema

T = TypeVar("T")


def asdict(obj: Any) -> Any:
    """
    Recursively converts a lodum-enabled object into plain Python primitives (dict, list, etc.).
    This handles renaming, skipping fields, and converting enums/datetimes to values.
    """
    from .core import BaseDumper
    from .internal import dump

    return dump(obj, BaseDumper())


def fromdict(cls: type[T], data: Any) -> T:
    """
    Hydrates a lodum-enabled class from a dictionary or other plain Python primitives.
    This performs full type validation and nested object instantiation.
    """
    from .core import BaseLoader
    from .internal import load

    return load(cls, BaseLoader(data))


# Register extensions if available
try:
    from .extensions import numpy as ext_numpy

    ext_numpy.register()
except ImportError:
    pass

try:
    from .extensions import pandas as ext_pandas

    ext_pandas.register()
except ImportError:
    pass

try:
    from .extensions import polars as ext_polars

    ext_polars.register()
except ImportError:
    pass

__all__ = [
    "asdict",
    "bson",
    "cbor",
    "concurrency",
    "field",
    "fromdict",
    "json",
    "lodum",
    "msgpack",
    "pickle",
    "schema",
    "toml",
    "yaml",
]
