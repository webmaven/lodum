# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import pytest
from lodum.concurrency import WorkerThread as Thread
from typing import Optional, List, Any
from lodum import lodum, json
from lodum.exception import SerializationError, DeserializationError


@lodum
class RobustNode:
    def __init__(self, value: int, next_node: Optional["RobustNode"] = None):
        self.value = value
        self.next_node = next_node


def test_circular_reference():
    n1 = RobustNode(1)
    n2 = RobustNode(2)
    n1.next_node = n2
    n2.next_node = n1

    with pytest.raises(SerializationError) as excinfo:
        json.dumps(n1)
    assert "Circular reference detected" in str(excinfo.value)


def test_deeply_nested_structure():
    root = RobustNode(0)
    curr = root
    for i in range(1, 1500):  # Default Python limit is 1000
        curr.next_node = RobustNode(i)
        curr = curr.next_node

    with pytest.raises((RecursionError, SerializationError)):
        json.dumps(root)


def test_deeply_nested_load():
    # Create a deeply nested JSON string
    nested_json = '{"value": 1, "next_node": ' * 150 + "null" + "}" * 150
    with pytest.raises(DeserializationError) as excinfo:
        json.loads(RobustNode, nested_json)
    assert "Max recursion depth" in str(excinfo.value)


def test_very_large_input():
    # Large JSON string
    large_json = (
        "["
        + '{"value": 1, "next_node": null},' * 1000000
        + '{"value": 1, "next_node": null}]'
    )
    # Default limit is 10MB, this string is ~30MB
    with pytest.raises(DeserializationError) as excinfo:
        json.loads(List[RobustNode], large_json)
    assert "exceeds maximum allowed" in str(excinfo.value)


def test_thread_safety_compilation():
    @lodum
    class ThreadSafeTest:
        def __init__(self, a: int, b: int, c: int):
            self.a = a
            self.b = b
            self.c = c

    def worker():
        for _ in range(10):
            obj = ThreadSafeTest(1, 2, 3)
            s = json.dumps(obj)
            res = json.loads(ThreadSafeTest, s)
            assert res.a == 1

    threads = [Thread(target=worker) for _ in range(10)]
    for t in threads:
        t.start()
    for t in threads:
        t.join()


def test_invalid_type_annotations():
    # Test with a type that cannot be resolved or is not supported
    @lodum
    class InvalidType:
        def __init__(self, a: lambda x: x):  # Very invalid type annotation
            self.a = a

    InvalidType(a=1)
    # Serialization might still work if it doesn't look at the type,
    # but Deserialization should definitely fail if it tries to use the type.
    with pytest.raises((SerializationError, DeserializationError, TypeError)):
        json.loads(InvalidType, '{"a": 1}')


def test_recursive_schema():
    @lodum
    class RecursiveNode:
        def __init__(self, children: List[Any]):
            self.children = children

    # Force a recursive type
    RecursiveNode._lodum_fields["children"].type = List[RecursiveNode]

    s = json.schema(RecursiveNode)
    assert s["type"] == "object"
    assert s["properties"]["children"]["type"] == "array"
    assert s["properties"]["children"]["items"]["$ref"] == "#/definitions/RecursiveNode"


def test_corrupted_data_json():
    with pytest.raises(DeserializationError):
        json.loads(RobustNode, '{"value": "not an int"}')
    with pytest.raises(DeserializationError):
        json.loads(RobustNode, "[1, 2, 3]")  # Expected dict


def test_corrupted_data_yaml():
    from lodum import yaml

    with pytest.raises(DeserializationError):
        yaml.loads(RobustNode, "value: not an int")
    with pytest.raises(DeserializationError):
        yaml.loads(RobustNode, "- 1\n- 2")  # Expected dict


def test_corrupted_data_msgpack():
    from lodum import msgpack

    # packed list instead of dict
    data = msgpack.dumps([1, 2, 3])
    with pytest.raises(DeserializationError):
        msgpack.loads(RobustNode, data)

    # invalid value type
    data = msgpack.dumps({"value": "string", "next_node": None})
    with pytest.raises(DeserializationError):
        msgpack.loads(RobustNode, data)


def test_corrupted_data_cbor():
    from lodum import cbor

    data = cbor.dumps([1, 2, 3])
    with pytest.raises(DeserializationError):
        cbor.loads(RobustNode, data)

    data = cbor.dumps({"value": "string", "next_node": None})
    with pytest.raises(DeserializationError):
        cbor.loads(RobustNode, data)


def test_corrupted_data_bson():
    from lodum import bson

    # BSON always decodes to dict, so we test field type mismatch
    data = bson.dumps({"value": "string", "next_node": None})
    with pytest.raises(DeserializationError):
        bson.loads(RobustNode, data)


def test_corrupted_data_toml():
    from lodum import toml

    with pytest.raises(DeserializationError):
        toml.loads(RobustNode, 'value = "not an int"')
