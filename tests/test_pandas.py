# SPDX-FileCopyrightText: 2025-present Jules <jules@example.com>
#
# SPDX-License-Identifier: MIT
import pandas as pd
from lodum.core import serializable
from lodum.json import to_json, from_json

@serializable
class PandasObject:
    def __init__(self, df: pd.DataFrame, series: pd.Series):
        self.df = df
        self.series = series

    def __eq__(self, other):
        return isinstance(other, PandasObject) and self.df.reset_index(drop=True).equals(other.df.reset_index(drop=True)) and self.series.reset_index(drop=True).equals(other.series.reset_index(drop=True))

def test_pandas_dataframe_and_series():
    df = pd.DataFrame({"a": [1, 2, 3], "b": [4, 5, 6]})
    series = pd.Series([1, 2, 3], name="c")
    instance = PandasObject(df=df, series=series)
    json_str = to_json(instance)
    result = from_json(PandasObject, json_str)
    assert instance == result
