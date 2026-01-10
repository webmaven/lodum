# SPDX-FileCopyrightText: 2025-present Jules <jules@example.com>
#
# SPDX-License-Identifier: Apache-2.0
from typing import List, Dict, Any
from lodum import lodum, json

@lodum
class NestedObject:
    def __init__(self, data: Any):
        self.data = data

    def __eq__(self, other):
        return isinstance(other, NestedObject) and self.data == other.data

def test_list_of_dicts():
    data = [{"a": 1, "b": 2}, {"c": 3, "d": 4}]
    instance = NestedObject(data=data)
    json_str = json.dumps(instance)
    result = json.loads(NestedObject, json_str)
    assert instance == result

def test_dict_of_lists():
    data = {"a": [1, 2, 3], "b": [4, 5, 6]}
    instance = NestedObject(data=data)
    json_str = json.dumps(instance)
    result = json.loads(NestedObject, json_str)
    assert instance == result

def test_list_of_lists_of_lists():
    data = [[[1], [2]], [[3], [4]]]
    instance = NestedObject(data=data)
    json_str = json.dumps(instance)
    result = json.loads(NestedObject, json_str)
    assert instance == result

def test_dict_of_lists_of_lists_of_lists():
    data = {"a": [[[1], [2]], [[3], [4]]]}
    instance = NestedObject(data=data)
    json_str = json.dumps(instance)
    result = json.loads(NestedObject, json_str)
    assert instance == result

def test_dict_of_dicts_of_lists():
    data = {"a": {"b": [1, 2, 3]}}
    instance = NestedObject(data=data)
    json_str = json.dumps(instance)
    result = json.loads(NestedObject, json_str)
    assert instance == result
