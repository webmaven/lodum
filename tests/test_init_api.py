# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
from lodum import lodum, asdict, fromdict, schema


@lodum
class Simple:
    def __init__(self, x: int):
        self.x = x


def test_asdict_fromdict():
    s = Simple(10)
    d = asdict(s)
    assert d == {"x": 10}

    s2 = fromdict(Simple, d)
    assert s2.x == 10


def test_schema_api():
    s = schema(Simple)
    assert s["type"] == "object"
    assert "x" in s["properties"]
