# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
from dataclasses import dataclass, field

import lodum


@dataclass
class SimpleData:
    name: str
    age: int


@dataclass
class ConfigData:
    host: str = "localhost"
    port: int = 8080
    tags: list[str] = field(default_factory=list)


@dataclass
class NonInitData:
    id: int
    calculated: str = field(init=False, default="computed")

    def __post_init__(self):
        self.calculated = f"id_{self.id}"


@dataclass
class Address:
    city: str
    zipcode: str


@dataclass
class User:
    name: str
    address: Address


@lodum.lodum
class LodumChild:
    def __init__(self, val: int = 42):
        self.val = val


@dataclass
class DataclassParent:
    child: LodumChild


def test_simple_dataclass_asdict_fromdict():
    data = SimpleData(name="Alice", age=30)
    d = lodum.asdict(data)
    assert d == {"name": "Alice", "age": 30}

    obj = lodum.fromdict(SimpleData, d)
    assert isinstance(obj, SimpleData)
    assert obj.name == "Alice"
    assert obj.age == 30


def test_simple_dataclass_json_dumps_loads():
    data = SimpleData(name="Bob", age=25)
    json_str = lodum.json.dumps(data)
    loaded = lodum.json.loads(SimpleData, json_str)
    assert loaded == data


def test_dataclass_default_and_factory():
    # Test with default values applied when missing in dict
    obj1 = lodum.fromdict(ConfigData, {})
    assert obj1.host == "localhost"
    assert obj1.port == 8080
    assert obj1.tags == []

    # Test with overrides
    obj2 = lodum.fromdict(ConfigData, {"host": "example.com", "tags": ["web", "db"]})
    assert obj2.host == "example.com"
    assert obj2.port == 8080
    assert obj2.tags == ["web", "db"]

    serialized = lodum.asdict(obj2)
    assert serialized == {"host": "example.com", "port": 8080, "tags": ["web", "db"]}


def test_dataclass_non_init_fields():
    data = NonInitData(id=10)
    assert data.calculated == "id_10"

    d = lodum.asdict(data)
    # init=False field 'calculated' must not be serialized
    assert d == {"id": 10}

    obj = lodum.fromdict(NonInitData, {"id": 10})
    assert isinstance(obj, NonInitData)
    assert obj.id == 10
    assert obj.calculated == "id_10"


def test_nested_dataclasses():
    user = User(name="Charlie", address=Address(city="Seattle", zipcode="98101"))
    d = lodum.asdict(user)
    assert d == {"name": "Charlie", "address": {"city": "Seattle", "zipcode": "98101"}}

    hydrated = lodum.fromdict(User, d)
    assert isinstance(hydrated, User)
    assert isinstance(hydrated.address, Address)
    assert hydrated.name == "Charlie"
    assert hydrated.address.city == "Seattle"
    assert hydrated.address.zipcode == "98101"


def test_interop_dataclass_and_lodum_class():
    parent = DataclassParent(child=LodumChild(val=99))
    d = lodum.asdict(parent)
    assert d == {"child": {"val": 99}}

    hydrated = lodum.fromdict(DataclassParent, d)
    assert isinstance(hydrated, DataclassParent)
    assert isinstance(hydrated.child, LodumChild)
    assert hydrated.child.val == 99
