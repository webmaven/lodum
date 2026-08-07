# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import collections
from typing import Generic, TypeVar

import lodum


class CustomDict(dict):
    pass


class CustomList(list):
    pass


class CustomUserDict(collections.UserDict):
    pass


class CustomUserList(collections.UserList):
    pass


@lodum.lodum
class Item:
    def __init__(self, val: int):
        self.val = val


@lodum.lodum
class Container:
    def __init__(
        self,
        custom_map: CustomDict,
        custom_seq: CustomList,
        user_map: collections.UserDict,
        user_seq: collections.UserList,
    ):
        self.custom_map = custom_map
        self.custom_seq = custom_seq
        self.user_map = user_map
        self.user_seq = user_seq


def test_custom_dict_reconstitution():
    json_str = '{"a": 1, "b": 2}'
    res = lodum.json.loads(CustomDict, json_str)
    assert isinstance(res, CustomDict)
    assert type(res) is CustomDict
    assert res == {"a": 1, "b": 2}


def test_custom_list_reconstitution():
    json_str = '[1, 2, 3]'
    res = lodum.json.loads(CustomList, json_str)
    assert isinstance(res, CustomList)
    assert type(res) is CustomList
    assert res == [1, 2, 3]


def test_userdict_reconstitution():
    json_str = '{"x": 10}'
    res = lodum.json.loads(collections.UserDict, json_str)
    assert isinstance(res, collections.UserDict)
    assert type(res) is collections.UserDict
    assert res == {"x": 10}

    res_custom = lodum.json.loads(CustomUserDict, json_str)
    assert isinstance(res_custom, CustomUserDict)
    assert type(res_custom) is CustomUserDict
    assert res_custom == {"x": 10}


def test_userlist_reconstitution():
    json_str = '["a", "b"]'
    res = lodum.json.loads(collections.UserList, json_str)
    assert isinstance(res, collections.UserList)
    assert type(res) is collections.UserList
    assert res == ["a", "b"]

    res_custom = lodum.json.loads(CustomUserList, json_str)
    assert isinstance(res_custom, CustomUserList)
    assert type(res_custom) is CustomUserList
    assert res_custom == ["a", "b"]


def test_typed_subclass_reconstitution():
    T = TypeVar("T")

    class TypedCustomList(list, Generic[T]):
        pass

    class TypedCustomDict(dict, Generic[T]):
        pass

    json_list = '[{"val": 5}, {"val": 10}]'
    res_list = lodum.json.loads(TypedCustomList[Item], json_list)
    assert isinstance(res_list, TypedCustomList)
    assert type(res_list) is TypedCustomList
    assert len(res_list) == 2
    assert isinstance(res_list[0], Item)
    assert res_list[0].val == 5

    json_dict = '{"item1": {"val": 42}}'
    res_dict = lodum.json.loads(TypedCustomDict[str, Item], json_dict)
    assert isinstance(res_dict, TypedCustomDict)
    assert type(res_dict) is TypedCustomDict
    assert "item1" in res_dict
    assert isinstance(res_dict["item1"], Item)
    assert res_dict["item1"].val == 42


def test_lodum_class_field_subclass_reconstitution():
    data = {
        "custom_map": {"k": 1},
        "custom_seq": [10, 20],
        "user_map": {"u": 2},
        "user_seq": [30, 40],
    }
    c = lodum.fromdict(Container, data)
    assert isinstance(c.custom_map, CustomDict)
    assert type(c.custom_map) is CustomDict
    assert isinstance(c.custom_seq, CustomList)
    assert type(c.custom_seq) is CustomList
    assert isinstance(c.user_map, collections.UserDict)
    assert type(c.user_map) is collections.UserDict
    assert isinstance(c.user_seq, collections.UserList)
    assert type(c.user_seq) is collections.UserList


def test_builtin_collections_not_affected():
    # Built-in collection types should still return their standard types
    assert type(lodum.json.loads(dict, '{"a": 1}')) is dict
    assert type(lodum.json.loads(list, '[1, 2]')) is list
    assert type(lodum.json.loads(collections.defaultdict, '{"a": 1}')) is collections.defaultdict
    assert type(lodum.json.loads(collections.OrderedDict, '{"a": 1}')) is collections.OrderedDict
    assert type(lodum.json.loads(collections.Counter, '{"a": 1}')) is collections.Counter
