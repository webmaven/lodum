# SPDX-FileCopyrightText: 2025-present Jules <jules@example.com>
#
# SPDX-License-Identifier: MIT
import polars as pl
from lodum.core import serializable
from lodum.json import to_json, from_json

@serializable
class PolarsObject:
    def __init__(self, df: pl.DataFrame, series: pl.Series):
        self.df = df
        self.series = series

    def __eq__(self, other):
        return isinstance(other, PolarsObject) and self.df.equals(other.df) and self.series.equals(other.series)

def test_polars_dataframe_and_series():
    df = pl.DataFrame({"a": [1, 2, 3], "b": [4, 5, 6]})
    series = pl.Series("c", [1, 2, 3])
    instance = PolarsObject(df=df, series=series)
    json_str = to_json(instance)
    result = from_json(PolarsObject, json_str)
    assert instance == result
