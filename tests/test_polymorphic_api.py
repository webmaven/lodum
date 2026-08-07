# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import io

from lodum import bson, cbor, json, lodum, msgpack, pickle, toml, yaml


@lodum
class User:
    def __init__(self, id: int, name: str):
        self.id = id
        self.name = name


def test_json_polymorphism(tmp_path):
    user = User(1, "Jules")
    json_str = '{"id": 1, "name": "Jules"}'

    # 1. Load from string
    assert json.load(User, json_str).name == "Jules"

    # 2. Load from IO
    assert json.load(User, io.StringIO(json_str)).name == "Jules"

    # 3. Load from Path
    p = tmp_path / "user.json"
    p.write_text(json_str)
    assert json.load(User, p).name == "Jules"

    # 4. Dump to string
    assert json.load(dict, json.dump(user)) == json.load(dict, json_str)

    # 5. Dump to IO
    buf = io.StringIO()
    json.dump(user, buf)
    assert json.load(dict, buf.getvalue()) == json.load(dict, json_str)

    # 6. Dump to Path
    p2 = tmp_path / "out.json"
    json.dump(user, p2)
    assert json.load(dict, p2.read_text()) == json.load(dict, json_str)


def test_msgpack_polymorphism(tmp_path):
    user = User(1, "Jules")
    # msgpack.packb({"id": 1, "name": "Jules"}, use_bin_type=True)
    packed = b"\x82\xa2id\x01\xa4name\xa5Jules"

    # 1. Load from bytes
    assert msgpack.load(User, packed).name == "Jules"

    # 2. Load from IO
    assert msgpack.load(User, io.BytesIO(packed)).name == "Jules"

    # 3. Load from Path
    p = tmp_path / "user.msgpack"
    p.write_bytes(packed)
    assert msgpack.load(User, p).name == "Jules"

    # 4. Dump to bytes
    assert msgpack.dump(user) == packed

    # 5. Dump to IO
    buf = io.BytesIO()
    msgpack.dump(user, buf)
    assert buf.getvalue() == packed

    # 6. Dump to Path
    p2 = tmp_path / "out.msgpack"
    msgpack.dump(user, p2)
    assert p2.read_bytes() == packed


def test_json_stream_polymorphism(tmp_path):
    json_str = '[{"id": 1, "name": "A"}, {"id": 2, "name": "B"}]'

    # 1. Stream from IO
    stream_results = list(json.stream(User, io.BytesIO(json_str.encode())))
    assert len(stream_results) == 2
    assert stream_results[0].name == "A"

    # 2. Stream from Path
    p = tmp_path / "users.json"
    p.write_text(json_str)
    stream_results = list(json.stream(User, p))
    assert len(stream_results) == 2
    assert stream_results[1].name == "B"


def test_msgpack_stream_polymorphism(tmp_path):
    packed = b"\x82\xa2id\x01\xa4name\xa1A\x82\xa2id\x02\xa4name\xa1B"  # Two concatenated objects

    # 1. Stream from IO
    stream_results = list(msgpack.stream(User, io.BytesIO(packed)))
    assert len(stream_results) == 2
    assert stream_results[0].name == "A"
    assert stream_results[1].name == "B"

    # 2. Stream from Path
    p = tmp_path / "users.msgpack"
    p.write_bytes(packed)
    stream_results = list(msgpack.stream(User, p))
    assert len(stream_results) == 2


def test_yaml_polymorphism(tmp_path):
    user = User(1, "Jules")
    yaml_str = """id: 1
name: Jules
"""

    # 1. Load from string
    assert yaml.load(User, yaml_str).name == "Jules"

    # 2. Load from Path
    p = tmp_path / "user.yaml"
    p.write_text(yaml_str)
    assert yaml.load(User, p).name == "Jules"

    # 3. Dump to string
    assert yaml.load(dict, yaml.dump(user)) == yaml.load(dict, yaml_str)


def test_toml_polymorphism(tmp_path):
    user = User(1, "Jules")
    toml_str = """id = 1
name = "Jules"
"""

    # 1. Load from string
    assert toml.load(User, toml_str).name == "Jules"

    # 2. Load from Path
    p = tmp_path / "user.toml"
    p.write_text(toml_str)
    assert toml.load(User, p).name == "Jules"

    # 3. Dump to string
    assert toml.load(dict, toml.dump(user)) == toml.load(dict, toml_str)


def test_pickle_polymorphism(tmp_path):
    user = User(1, "Jules")
    import pickle as std_pickle

    packed = pickle.dump(user)

    # 1. Load from bytes
    assert pickle.load(User, packed).name == "Jules"

    # 2. Dump to Path
    p = tmp_path / "user.pkl"
    pickle.dump(user, p)
    assert std_pickle.loads(p.read_bytes()).name == "Jules"


def test_cbor_stream(tmp_path):
    user1 = User(1, "A")
    user2 = User(2, "B")
    p1 = cbor.dump(user1)
    p2 = cbor.dump(user2)
    print(f"DEBUG: p1={p1!r} len={len(p1)}")
    print(f"DEBUG: p2={p2!r} len={len(p2)}")
    packed = p1 + p2
    print(f"DEBUG: packed={packed!r} len={len(packed)}")

    stream_results = list(cbor.stream(User, io.BytesIO(packed)))
    assert len(stream_results) == 2
    assert stream_results[0].name == "A"
    assert stream_results[1].name == "B"


def test_bson_stream(tmp_path):
    user1 = User(1, "A")
    user2 = User(2, "B")
    packed = bson.dump(user1) + bson.dump(user2)

    stream_results = list(bson.stream(User, io.BytesIO(packed)))
    assert len(stream_results) == 2
    assert stream_results[0].name == "A"
    assert stream_results[1].name == "B"
