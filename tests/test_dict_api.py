# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import collections

import pytest

import lodum


@lodum.lodum
class Child:
    def __init__(self, name: str):
        self.name = name


@lodum.lodum
class Parent:
    def __init__(
        self,
        id: int = lodum.field(rename="pk"),
        children: list[Child] = lodum.field(default_factory=list),
    ):
        self.id = id
        self.children = children


def test_asdict_normalization():
    # Test normalization of UserList and UserDict subclasses
    class MyList(collections.UserList):
        pass

    class MyDict(collections.UserDict):
        pass

    data = MyList([Child(name="A"), Child(name="B")])
    res = lodum.asdict(data)

    # Result should be a plain list of plain dicts
    assert isinstance(res, list)
    assert res == [{"name": "A"}, {"name": "B"}]
    assert type(res) is list


def test_asdict_deep_parent():
    p = Parent(id=1, children=[Child(name="C1")])
    res = lodum.asdict(p)

    assert res == {"pk": 1, "children": [{"name": "C1"}]}
    assert type(res) is dict


def test_fromdict_hydration():
    data = {"pk": 10, "children": [{"name": "C1"}, {"name": "C2"}]}
    obj = lodum.fromdict(Parent, data)

    assert isinstance(obj, Parent)
    assert obj.id == 10
    assert len(obj.children) == 2
    assert isinstance(obj.children[0], Child)
    assert obj.children[0].name == "C1"


def test_fromdict_validation_error():
    data = {"pk": "not-an-int"}
    with pytest.raises(lodum.exception.DeserializationError, match="Expected int"):
        lodum.fromdict(Parent, data)


def test_deque_normalization():
    dq = collections.deque([1, 2, 3])
    res = lodum.asdict(dq)
    assert res == [1, 2, 3]
    assert type(res) is list


def test_userdict_normalization():
    class MyDict(collections.UserDict):
        pass

    d = MyDict({"a": 1, "b": 2})
    res = lodum.asdict(d)
    assert res == {"a": 1, "b": 2}
    assert type(res) is dict
