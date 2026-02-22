# SPDX-FileCopyrightText: 2025-present Jules <jules@example.com>
#
# SPDX-License-Identifier: Apache-2.0
import pytest
from lodum import lodum, json

pl = pytest.importorskip("polars")


@lodum
class PolarsObject:
    def __init__(self, df: pl.DataFrame, s: pl.Series):
        self.df = df
        self.s = s

    def __eq__(self, other):
        return (
            isinstance(other, PolarsObject)
            and self.df.equals(other.df)
            and self.s.equals(other.s)
        )


def test_polars_dataframe_series():
    df = pl.DataFrame({"a": [1, 2], "b": [3, 4]})
    s = pl.Series([1, 2, 3])
    instance = PolarsObject(df=df, s=s)
    json_str = json.dumps(instance)
    result = json.loads(PolarsObject, json_str)
    assert instance == result
