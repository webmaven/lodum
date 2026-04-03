# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
__version__ = "0.4.0.dev0"

from .core import lodum
from .field import field
from .internal import generate_schema as schema
from . import json, yaml, pickle, toml, msgpack, cbor, bson, concurrency
from typing import Any, Type, TypeVar

T = TypeVar("T")


def asdict(obj: Any) -> Any:
    """
    Recursively converts a lodum-enabled object into plain Python primitives (dict, list, etc.).
    This handles renaming, skipping fields, and converting enums/datetimes to values.
    """
    from .internal import dump
    from .core import BaseDumper

    return dump(obj, BaseDumper())


def fromdict(cls: Type[T], data: Any) -> T:
    """
    Hydrates a lodum-enabled class from a dictionary or other plain Python primitives.
    This performs full type validation and nested object instantiation.
    """
    from .internal import load
    from .core import BaseLoader

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
    "lodum",
    "field",
    "schema",
    "asdict",
    "fromdict",
    "json",
    "yaml",
    "pickle",
    "toml",
    "msgpack",
    "cbor",
    "bson",
    "concurrency",
]
