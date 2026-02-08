# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import collections
import array
from lodum import lodum, json, yaml, msgpack, cbor, bson, pickle


@lodum
class AdditionalTypes:
    def __init__(
        self,
        dd: collections.defaultdict[str, int],
        od: collections.OrderedDict[str, int],
        counter: collections.Counter[str],
        arr: array.array,
        b: bytes,
        ba: bytearray,
    ):
        self.dd = dd
        self.od = od
        self.counter = counter
        self.arr = arr
        self.b = b
        self.ba = ba


def test_additional_types_json():
    dd = collections.defaultdict(int, {"a": 1})
    od = collections.OrderedDict([("z", 26), ("a", 1)])
    counter = collections.Counter(["a", "b", "a"])
    arr = array.array("i", [1, 2, 3])
    b = b"hello"
    ba = bytearray(b"world")

    obj = AdditionalTypes(dd, od, counter, arr, b, ba)

    encoded = json.dumps(obj)
    decoded = json.loads(AdditionalTypes, encoded)

    assert decoded.dd == dd
    assert decoded.od == od
    assert decoded.counter == counter
    assert list(decoded.arr) == list(arr)
    assert decoded.b == b
    assert decoded.ba == ba


def test_additional_types_yaml():
    dd = collections.defaultdict(int, {"a": 1})
    od = collections.OrderedDict([("z", 26), ("a", 1)])
    counter = collections.Counter(["a", "b", "a"])
    arr = array.array("i", [1, 2, 3])
    b = b"hello"
    ba = bytearray(b"world")

    obj = AdditionalTypes(dd, od, counter, arr, b, ba)

    encoded = yaml.dumps(obj)
    print(f"YAML ENCODED:\n{encoded}")
    decoded = yaml.loads(AdditionalTypes, encoded)

    assert decoded.dd == dd
    assert decoded.od == od
    assert decoded.counter == counter
    assert list(decoded.arr) == list(arr)
    assert decoded.b == b
    assert decoded.ba == ba


def test_additional_types_msgpack():
    dd = collections.defaultdict(int, {"a": 1})
    od = collections.OrderedDict([("z", 26), ("a", 1)])
    counter = collections.Counter(["a", "b", "a"])
    arr = array.array("i", [1, 2, 3])
    b = b"hello"
    ba = bytearray(b"world")

    obj = AdditionalTypes(dd, od, counter, arr, b, ba)

    encoded = msgpack.dumps(obj)
    decoded = msgpack.loads(AdditionalTypes, encoded)

    assert decoded.dd == dd
    assert decoded.od == od
    assert decoded.counter == counter
    assert list(decoded.arr) == list(arr)
    assert decoded.b == b
    assert decoded.ba == ba


def test_additional_types_cbor():
    dd = collections.defaultdict(int, {"a": 1})
    od = collections.OrderedDict([("z", 26), ("a", 1)])
    counter = collections.Counter(["a", "b", "a"])
    arr = array.array("i", [1, 2, 3])
    b = b"hello"
    ba = bytearray(b"world")

    obj = AdditionalTypes(dd, od, counter, arr, b, ba)

    encoded = cbor.dumps(obj)
    decoded = cbor.loads(AdditionalTypes, encoded)

    assert decoded.dd == dd
    assert decoded.od == od
    assert decoded.counter == counter
    assert list(decoded.arr) == list(arr)
    assert decoded.b == b
    assert decoded.ba == ba


def test_additional_types_bson():
    dd = collections.defaultdict(int, {"a": 1})
    od = collections.OrderedDict([("z", 26), ("a", 1)])
    counter = collections.Counter(["a", "b", "a"])
    arr = array.array("i", [1, 2, 3])
    b = b"hello"
    ba = bytearray(b"world")

    obj = AdditionalTypes(dd, od, counter, arr, b, ba)

    encoded = bson.dumps(obj)
    decoded = bson.loads(AdditionalTypes, encoded)

    assert decoded.dd == dd
    assert decoded.od == od
    assert decoded.counter == counter
    assert list(decoded.arr) == list(arr)
    assert decoded.b == b
    assert decoded.ba == ba


def test_additional_types_pickle():
    dd = collections.defaultdict(int, {"a": 1})
    od = collections.OrderedDict([("z", 26), ("a", 1)])
    counter = collections.Counter(["a", "b", "a"])
    arr = array.array("i", [1, 2, 3])
    b = b"hello"
    ba = bytearray(b"world")

    obj = AdditionalTypes(dd, od, counter, arr, b, ba)

    encoded = pickle.dumps(obj)
    decoded = pickle.loads(AdditionalTypes, encoded)

    assert decoded.dd == dd
    assert decoded.od == od
    assert decoded.counter == counter
    assert list(decoded.arr) == list(arr)
    assert decoded.b == b
    assert decoded.ba == ba


def test_defaultdict_inference():
    @lodum
    class DD:
        def __init__(self, data: collections.defaultdict[str, list]):
            self.data = data

    obj = DD(collections.defaultdict(list, {"a": [1]}))
    encoded = json.dumps(obj)
    decoded = json.loads(DD, encoded)

    assert decoded.data["b"] == []
    assert isinstance(decoded.data, collections.defaultdict)
    assert decoded.data.default_factory is list
