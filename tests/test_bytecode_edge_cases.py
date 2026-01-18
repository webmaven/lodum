# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import pytest
from lodum import lodum, json

def test_odd_class_name():
    # Class names with characters that are invalid in Python identifiers
    OddName = type("Odd-Name Class", (), {"_lodum_enabled": True})

    from lodum.field import Field
    f = Field()
    f.name = "a"
    f.type = int
    setattr(OddName, "_lodum_fields", {"a": f})

    # We need a way to instantiate it since we didn't give it an __init__
    obj = OddName()
    obj.a = 1

    # This should now succeed because of sanitization
    try:
        json.dumps(obj)
    except Exception as e:
        pytest.fail(f"Dumping with odd class name failed: {e}")

def test_field_shadowing_internals():
    @lodum
    class ShadowInternals:
        def __init__(self, loader: int, load_fn: int, path: int, data: int, args: int, val_loader: int):
            self.loader = loader
            self.load_fn = load_fn
            self.path = path
            self.data = data
            self.args = args
            self.val_loader = val_loader

    obj = ShadowInternals(1, 2, 3, 4, 5, 6)
    json_str = json.dumps(obj)
    res = json.loads(ShadowInternals, json_str)
    assert res.loader == 1
    assert res.val_loader == 6

def test_many_fields():
    # Dynamically create a class with many fields
    field_names = [f"field_{i}" for i in range(200)]

    def __init__(self, **kwargs):
        for k, v in kwargs.items():
            setattr(self, k, v)

    ManyFields = type("ManyFields", (), {"__init__": __init__, "_lodum_enabled": True})

    from lodum.field import Field
    lodum_fields = {}
    for name in field_names:
        f = Field()
        f.name = name
        f.type = int
        lodum_fields[name] = f

    setattr(ManyFields, "_lodum_fields", lodum_fields)

    data = {name: i for i, name in enumerate(field_names)}
    obj = ManyFields(**data)

    json_str = json.dumps(obj)
    res = json.loads(ManyFields, json_str)
    assert getattr(res, "field_199") == 199
