# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
__version__ = "0.1.0"

from .core import lodum
from .field import field
from .internal import generate_schema as schema
from . import json, yaml, pickle, toml, msgpack, cbor, bson

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
    "json",
    "yaml",
    "pickle",
    "toml",
    "msgpack",
    "cbor",
    "bson",
]
