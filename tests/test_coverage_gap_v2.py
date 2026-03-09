# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import array
import collections
import datetime
from typing import Any, Dict, ForwardRef, List, Set, Tuple, Union

import pytest

from lodum import bson, cbor, fromdict, lodum, msgpack, toml, yaml
from lodum.core import BaseDumper, BaseLoader, get_context
from lodum.exception import DeserializationError
from lodum.internal import (
    DEFAULT_MAX_DEPTH,
    _get_dump_handler,
    _get_load_handler,
    dump,
    load,
)


# --- Format Handlers ---


def test_toml_dump_bytes():
    from lodum.toml import TomlDumper

    assert TomlDumper().dump_bytes(b"hello") == "aGVsbG8="


def test_toml_loader_list_error():
    from lodum.toml import TomlLoader

    with pytest.raises(DeserializationError, match="Expected list"):
        TomlLoader("s").load_list()


def test_toml_loader_dict_error():
    from lodum.toml import TomlLoader

    with pytest.raises(DeserializationError, match="Expected dict"):
        TomlLoader("s").load_dict()


def test_toml_loader_bytes_type_error():
    from lodum.toml import TomlLoader

    with pytest.raises(DeserializationError, match="Expected str"):
        TomlLoader(1).load_bytes_value(1)


def test_toml_loader_bytes_decode_error():
    from lodum.toml import TomlLoader

    with pytest.raises(DeserializationError, match="Failed to decode base64"):
        TomlLoader("a").load_bytes_value("a")


def test_yaml_dump_bytes():
    from lodum.yaml import YamlDumper

    assert YamlDumper().dump_bytes(b"hello") == "aGVsbG8="


def test_yaml_loader_list_error():
    from lodum.yaml import YamlLoader

    with pytest.raises(DeserializationError, match="Expected list"):
        YamlLoader("s").load_list()


def test_yaml_loader_dict_error():
    from lodum.yaml import YamlLoader

    with pytest.raises(DeserializationError, match="Expected dict"):
        YamlLoader("s").load_dict()


def test_yaml_loader_bytes_type_error():
    from lodum.yaml import YamlLoader

    with pytest.raises(DeserializationError, match="Expected str"):
        YamlLoader(1).load_bytes_value(1)


def test_yaml_loader_bytes_decode_error():
    from lodum.yaml import YamlLoader

    with pytest.raises(DeserializationError, match="Failed to decode base64"):
        YamlLoader("a").load_bytes_value("a")


def test_msgpack_loader_list_error():
    from lodum.msgpack import MsgPackLoader

    with pytest.raises(DeserializationError, match="Expected list"):
        MsgPackLoader("s").load_list()


def test_msgpack_loader_dict_error():
    from lodum.msgpack import MsgPackLoader

    with pytest.raises(DeserializationError, match="Expected dict"):
        MsgPackLoader("s").load_dict()


def test_msgpack_loader_bytes_error():
    from lodum.msgpack import MsgPackLoader

    with pytest.raises(DeserializationError, match="Expected bytes"):
        MsgPackLoader(1).load_bytes_value(1)


def test_cbor_loader_list_error():
    from lodum.cbor import CborLoader

    with pytest.raises(DeserializationError, match="Expected list"):
        CborLoader("s").load_list()


def test_cbor_loader_dict_error():
    from lodum.cbor import CborLoader

    with pytest.raises(DeserializationError, match="Expected dict"):
        CborLoader("s").load_dict()


def test_cbor_loader_bytes_error():
    from lodum.cbor import CborLoader

    with pytest.raises(DeserializationError, match="Expected bytes"):
        CborLoader(1).load_bytes_value(1)


def test_cbor_loader_int_error():
    from lodum.cbor import CborLoader

    with pytest.raises(DeserializationError, match="Expected int"):
        CborLoader("s").load_int()


def test_cbor_loader_str_error():
    from lodum.cbor import CborLoader

    with pytest.raises(DeserializationError, match="Expected str"):
        CborLoader(1).load_str()


def test_cbor_loader_float_error():
    from lodum.cbor import CborLoader

    with pytest.raises(DeserializationError, match="Expected float"):
        CborLoader("s").load_float()


def test_cbor_loader_bool_error():
    from lodum.cbor import CborLoader

    with pytest.raises(DeserializationError, match="Expected bool"):
        CborLoader(1).load_bool()


def test_bson_loader_list_error():
    from lodum.bson import BsonLoader

    with pytest.raises(DeserializationError, match="Expected list"):
        BsonLoader("s").load_list()


def test_bson_loader_dict_error():
    from lodum.bson import BsonLoader

    with pytest.raises(DeserializationError, match="Expected dict"):
        BsonLoader("s").load_dict()


def test_bson_loader_bytes_error():
    from lodum.bson import BsonLoader

    with pytest.raises(DeserializationError, match="Expected bytes"):
        BsonLoader(1).load_bytes_value(1)


def test_bson_primitive_wrapper():
    assert bson.loads(int, bson.dumps(123)) == 123


def test_toml_loads_error_wrap():
    with pytest.raises(DeserializationError, match="Failed to parse TOML"):
        toml.loads(Dict, "a=[")


def test_bson_loads_error_wrap():
    with pytest.raises(DeserializationError, match="Failed to parse BSON"):
        bson.loads(Dict, b"\x00")


def test_cbor_loads_error_wrap():
    with pytest.raises(DeserializationError, match="Failed to parse CBOR"):
        cbor.loads(Dict, b"\xbf")


def test_msgpack_loads_error_wrap():
    with pytest.raises(DeserializationError, match="Failed to parse MsgPack"):
        msgpack.loads(Dict, b"\xc1")


def test_format_loads_max_size():
    from lodum import bson, cbor, msgpack, toml, yaml

    for mod in [bson, cbor, msgpack, toml, yaml]:
        # Skip if the module's underlying library is not available
        if mod == bson and bson.bson is None:
            continue
        if mod == cbor and cbor.cbor2 is None:
            continue
        if mod == msgpack and msgpack.msgpack is None:
            continue
        if mod == toml and toml.tomllib is None:
            continue
        if mod == yaml and yaml.yaml_available is False:
            continue

        data = b"x" * 100 if mod != toml and mod != yaml else "a=1" * 50
        with pytest.raises(DeserializationError, match="exceeds maximum"):
            mod.loads(Dict, data, max_size=10)


# --- Collections ---


def test_load_dict_key_type_error():
    from lodum.handlers.collections import _load_dict

    with pytest.raises(DeserializationError, match="keys must be strings"):
        _load_dict(Dict[int, str], BaseLoader({"1": "a"}))


def test_load_defaultdict_error():
    from lodum.handlers.collections import _load_defaultdict

    with pytest.raises(DeserializationError, match="Failed to create defaultdict"):
        _load_defaultdict(dict, BaseLoader("s"))


def test_load_ordered_dict_error():
    from lodum.handlers.collections import _load_ordered_dict

    with pytest.raises(DeserializationError, match="Failed to create OrderedDict"):
        _load_ordered_dict(dict, BaseLoader("s"))


def test_load_counter_error():
    from lodum.handlers.collections import _load_counter

    with pytest.raises(DeserializationError, match="Failed to create Counter"):
        _load_counter(dict, BaseLoader("s"))


def test_load_set_unhashable():
    from lodum.handlers.collections import _load_set

    with pytest.raises(DeserializationError, match="elements must be hashable"):
        _load_set(Set[List[int]], BaseLoader([[1]]))


def test_load_union_tagged_match():
    @lodum(tag="type")
    class A:
        def __init__(self, x: int):
            self.x = x

    assert isinstance(fromdict(Union[A, int], {"type": "A", "x": 10}), A)


def test_load_union_priority_datetime():
    T = Union[datetime.datetime, str]
    assert isinstance(fromdict(T, "2026-01-24T20:00:00"), datetime.datetime)
    assert fromdict(T, "not a date") == "not a date"


def test_load_union_priority_numbers():
    T = Union[float, int]
    assert type(fromdict(T, 1)) is int
    assert type(fromdict(T, 1.1)) is float


def test_load_union_no_match():
    with pytest.raises(DeserializationError, match="Could not decode data"):
        fromdict(Union[int, List[int]], {"a": 1})


def test_load_array_float():
    from lodum.handlers.collections import _load_array

    assert _load_array(array.array, BaseLoader([1.1])).typecode == "d"


def test_load_array_error():
    from lodum.handlers.collections import _load_array

    with pytest.raises(DeserializationError):
        _load_array(array.array, BaseLoader(["err"]))


# --- Core / Internal ---


def test_internal_load_string_type():
    @lodum
    class RestoredSimple:
        def __init__(self, x: int):
            self.x = x

    assert isinstance(load("RestoredSimple", BaseLoader({"x": 1})), RestoredSimple)


def test_internal_get_load_handler_dict_key_error():
    with pytest.raises(DeserializationError, match="keys must be strings"):
        _get_load_handler(Dict[int, str])


def test_internal_get_load_handler_unknown_forward_ref():
    with pytest.raises(DeserializationError, match="Cannot resolve ForwardRef"):
        _get_load_handler(ForwardRef("Missing"))


def test_internal_get_dump_handler_unknown_forward_ref():
    assert _get_dump_handler(ForwardRef("Unknown")) is dump


def test_internal_get_handler_valid_forward_ref():
    @lodum
    class Node:
        def __init__(self, v: int = 0):
            self.v = v

    assert _get_load_handler(ForwardRef("Node")) is not None
    assert _get_dump_handler(ForwardRef("Node")) is not None


def test_internal_recursion_dump_error():
    class UncachedD:
        pass

    with pytest.raises(ValueError, match="Recursive reference"):
        _get_dump_handler(UncachedD, excluding=UncachedD)


def test_internal_recursion_load_error():
    class UncachedL:
        pass

    with pytest.raises(ValueError, match="Recursive reference"):
        _get_load_handler(UncachedL, excluding=UncachedL)


def test_internal_dump_cache_double_check():
    ctx = get_context()

    class DC_D:
        pass

    original_lock = ctx.cache_lock

    class MockLock:
        def __enter__(self):
            ctx.dump_cache[DC_D] = lambda x, d, dp, s: x

        def __exit__(self, *args):
            pass

    ctx.cache_lock = MockLock()
    try:
        assert _get_dump_handler(DC_D) is not None
    finally:
        ctx.cache_lock = original_lock


def test_internal_load_cache_double_check():
    ctx = get_context()

    class DC_L:
        pass

    original_lock = ctx.cache_lock

    class MockLock:
        def __enter__(self):
            ctx.load_cache[DC_L] = lambda c, loader, p, d: None

        def __exit__(self, *args):
            pass

    ctx.cache_lock = MockLock()
    try:
        assert _get_load_handler(DC_L) is not None
    finally:
        ctx.cache_lock = original_lock


def test_resolve_forward_ref_context_cache_hit():
    from lodum.compiler.analyzer import _resolve_forward_ref

    @lodum
    class CT:
        pass

    assert _resolve_forward_ref(ForwardRef("CT"), {CT: True}, {}, {}) == CT
    assert (
        _resolve_forward_ref(ForwardRef("CT"), {List[int]: True, CT: True}, {}, {})
        == CT
    )


def test_resolve_forward_ref_not_found():
    from lodum.compiler.analyzer import _resolve_forward_ref

    assert _resolve_forward_ref(ForwardRef("U"), {}, {}, {"K": int}) is None
    assert _resolve_forward_ref(ForwardRef("K"), {}, {}, {"K": int}) is int


# --- Field ---


def test_field_init_conflict():
    from lodum.field import Field

    with pytest.raises(ValueError):
        Field(default=1, default_factory=list)


def test_field_repr_full():
    from lodum.field import Field

    f = Field(
        rename="r",
        default=0,
        serializer=lambda x: x,
        deserializer=lambda x: x,
        validate=lambda x: x,
    )
    f.name = "n"
    f.type = int
    r = repr(f)
    for s in [
        "name='n'",
        "type=<class 'int'>",
        "rename='r'",
        "default=0",
        "serializer=",
        "deserializer=",
        "validate=",
    ]:
        assert s in r


def test_field_repr_factory():
    from lodum.field import Field

    assert "default_factory=" in repr(Field(default_factory=list))


def test_field_eq():
    from lodum.field import Field

    f1 = Field(rename="a")
    f2 = Field(rename="b")
    assert f1 == f1
    assert f1 != f2
    assert f1 != "not a field"


def test_field_register_type():
    from lodum.field import _NAME_TO_TYPE_CACHE, register_type

    class RT:
        pass

    register_type(RT)
    assert _NAME_TO_TYPE_CACHE["RT"] == RT


# --- Schema ---


def test_schema_recursion_error():
    from lodum.schema import generate_schema

    with pytest.raises(ValueError, match="Max recursion"):
        generate_schema(int, depth=DEFAULT_MAX_DEPTH + 1)


def test_schema_counter():
    from lodum.schema import generate_schema

    assert generate_schema(collections.Counter)["additionalProperties"] == {
        "type": "integer"
    }


def test_schema_tuple():
    from lodum.schema import generate_schema

    assert "prefixItems" in generate_schema(Tuple[int, str])


def test_schema_set():
    from lodum.schema import generate_schema

    assert generate_schema(Set[int])["uniqueItems"] is True


def test_schema_union_discriminator():
    from lodum.schema import generate_schema

    @lodum(tag="t")
    class UA:
        pass

    @lodum(tag="t")
    class UB:
        pass

    assert "discriminator" in generate_schema(Union[UA, UB])


# --- Validators ---


def test_validator_base_error():
    from lodum.validators import Validator

    with pytest.raises(NotImplementedError):
        Validator()(1)


def test_validator_length_no_len():
    from lodum.validators import Length

    with pytest.raises(DeserializationError, match="has no length"):
        Length(min=1)(123)


def test_validator_length_max():
    from lodum.validators import Length

    with pytest.raises(DeserializationError, match="greater than maximum"):
        Length(max=1)([1, 2])


def test_validator_match_not_str():
    from lodum.validators import Match

    with pytest.raises(DeserializationError, match="is not a string"):
        Match(".*")(123)


# --- Core / BaseLoader ---


def test_base_loader_load_dict_error():
    with pytest.raises(DeserializationError, match="Expected dict"):
        BaseLoader([]).load_dict()


def test_base_loader_get_dict_none():
    assert BaseLoader(1).get_dict() is None


def test_base_loader_load_bytes_error():
    with pytest.raises(DeserializationError, match="Expected bytes"):
        BaseLoader(1).load_bytes()


# --- Registry ---


def test_registry_get_active():
    reg = get_context().registry
    assert reg.get(int) is not None
    assert reg.get(complex) is None


# --- Mocking Gaps ---


def test_sanitize_name_empty():
    from lodum.compiler.analyzer import _sanitize_name

    assert _sanitize_name("") == "unknown"


def test_resolve_forward_ref_registry_hit():
    from lodum.compiler.analyzer import _resolve_forward_ref

    class RegTarget:
        pass

    # Registry is the 3rd argument
    res = _resolve_forward_ref(ForwardRef("RegTarget"), {}, {RegTarget: True}, {})
    assert res == RegTarget


def test_resolve_forward_ref_cache_hit():
    from lodum.compiler.analyzer import _resolve_forward_ref

    class CacheTarget:
        pass

    # Cache is the 2nd argument
    res = _resolve_forward_ref(ForwardRef("CacheTarget"), {CacheTarget: True}, {}, {})
    assert res == CacheTarget


def test_resolve_forward_ref_type_error_resistance():
    from lodum.compiler.analyzer import _resolve_forward_ref

    # An object that raises TypeError on attribute access
    class Evil:
        @property
        def __name__(self):
            raise TypeError("evil")

    # Put it in registry and cache to hit the except blocks
    res = _resolve_forward_ref(
        ForwardRef("Any"), {Evil(): True}, {Evil(): True}, {"Any": int}
    )
    assert res is int


def test_base_dumper_extra_methods():
    d = BaseDumper()
    assert d.dump_list([1]) == [1]
    assert d.dump_dict({"a": 1}) == {"a": 1}
    assert d.begin_struct(int) == {}
    assert d.end_struct() == {}


def test_base_loader_successful_ops():
    assert BaseLoader(b"bin").load_bytes() == b"bin"
    assert list(BaseLoader({"a": 1}).load_dict())[0][0] == "a"
    with pytest.raises(DeserializationError):
        BaseLoader(1).load_list()


def test_pickle_security_vulnerability():
    """Verify that dangerous builtins are blocked by SafeUnpickler."""
    import pickle
    from lodum import pickle as lodum_pickle

    # Payload that attempts to call eval
    payload = pickle.dumps(eval)
    with pytest.raises(
        DeserializationError, match="Unsafe builtin 'eval' is forbidden"
    ):
        lodum_pickle.loads(Any, payload)

    # Payload that attempts to use os.system (module might be 'os' or 'posix'/'nt')
    import os

    payload_os = pickle.dumps(os.system)
    with pytest.raises(DeserializationError, match="Unsafe module '.*' is forbidden"):
        lodum_pickle.loads(Any, payload_os)


def test_mock_missing_deps_full():
    from unittest.mock import patch

    with patch("lodum.toml.tomli_w", None):
        with pytest.raises(ImportError, match="tomli-w"):
            toml.dumps({})
    with patch("lodum.toml.tomllib", None):
        with pytest.raises(ImportError, match="tomllib"):
            toml.loads(Dict, "")
    with patch("lodum.yaml.yaml_available", False):
        with pytest.raises(ImportError, match="ruamel.yaml"):
            yaml.dumps({})
        with pytest.raises(ImportError, match="ruamel.yaml"):
            yaml.loads(Dict, "")
    with patch("lodum.bson.bson", None):
        with pytest.raises(ImportError, match="bson"):
            bson.dumps({})
            bson.loads(Dict, b"")
    with patch("lodum.cbor.cbor2", None):
        with pytest.raises(ImportError, match="cbor2"):
            cbor.dumps({})
            cbor.loads(Dict, b"")
    with patch("lodum.msgpack.msgpack", None):
        with pytest.raises(ImportError, match="msgpack"):
            msgpack.dumps({})
            msgpack.loads(Dict, b"")
