window.BENCHMARK_DATA = {
  "lastUpdate": 1771859356455,
  "repoUrl": "https://github.com/webmaven/lodum",
  "entries": {
    "Lodum Performance Index - ubuntu-latest": [
      {
        "commit": {
          "author": {
            "name": "Michael R. Bernstein",
            "username": "webmaven",
            "email": "zopemaven@gmail.com"
          },
          "committer": {
            "name": "Michael R. Bernstein",
            "username": "webmaven",
            "email": "zopemaven@gmail.com"
          },
          "id": "9265587501b6597cd995730e37fc95f64ddca79f",
          "message": "Initial commit: add lodum serialization library\n\nAdd the initial implementation of the lodum Python serialization/deserialization library. Includes core logic, support for JSON, YAML, and pickle formats, field customization, exception handling, and comprehensive tests for primitives, custom classes, typing, numpy, pandas, polars, and nested structures.",
          "timestamp": "2025-12-21T16:42:30Z",
          "url": "https://github.com/webmaven/lodum/commit/9265587501b6597cd995730e37fc95f64ddca79f"
        },
        "date": 1771842640847,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum simple",
            "value": 5.56457960000003,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum complex",
            "value": 10.95368990000054,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum nested",
            "value": 25.58409190000077,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) simple",
            "value": 2.247775200000035,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.844885899999582,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.737685099999055,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow simple",
            "value": 7.988853500000914,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow complex",
            "value": 15.972746899998214,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow nested",
            "value": 44.585790400000036,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum simple",
            "value": 18.817706099999754,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum complex",
            "value": 37.30625620000012,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum nested",
            "value": 117.8067354999989,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.37136779999949,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.134409799999304,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 5.194490399999552,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow simple",
            "value": 18.837470999999795,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow complex",
            "value": 43.70354800000058,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow nested",
            "value": 137.24389499999887,
            "unit": "us"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael R. Bernstein",
            "username": "webmaven",
            "email": "zopemaven@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f716a980700849a7f30f76a765875b22343db258",
          "message": "Merge pull request #64 from webmaven/feature/issue-63-release-prep\n\nRelease Preparation: v0.2.0 (First Public Release)",
          "timestamp": "2026-02-11T10:41:27Z",
          "url": "https://github.com/webmaven/lodum/commit/f716a980700849a7f30f76a765875b22343db258"
        },
        "date": 1771842709679,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum simple",
            "value": 4.855057299999999,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum complex",
            "value": 7.788697500001263,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum nested",
            "value": 21.542077600000198,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.3089295999975548,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.8487299999975448,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.3681276999971033,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow simple",
            "value": 7.37490589999652,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow complex",
            "value": 16.233843899999556,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow nested",
            "value": 46.0387924000031,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum simple",
            "value": 12.050159499997903,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum complex",
            "value": 25.99451629999976,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum nested",
            "value": 72.63008730000138,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.3640656999996281,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.154394100000445,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 5.266180999996095,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow simple",
            "value": 18.34044360000462,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow complex",
            "value": 43.693607500003395,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow nested",
            "value": 133.00257610000017,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum simple",
            "value": 3.0904577000001154,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum complex",
            "value": 5.148524600002702,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum nested",
            "value": 16.63249940000071,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.6389552000030108,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 0.9807061000032036,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 1.6672513000031586,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum simple",
            "value": 10.046204899998656,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum complex",
            "value": 21.53310199999794,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum nested",
            "value": 67.57022259999985,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.5302047000014909,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.045805799998334,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.272499400001493,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum simple",
            "value": 6.691639500002111,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum complex",
            "value": 9.857840200004375,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum nested",
            "value": 23.761985499999128,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.2098598999984915,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.532823699999767,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.387627700000166,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum simple",
            "value": 11.772569399994381,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum complex",
            "value": 25.060467200000858,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum nested",
            "value": 72.05881120000015,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.7972501999963697,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.5914135999983046,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.460882000000765,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum simple",
            "value": 361.31455130000063,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum complex",
            "value": 834.5101522000022,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum nested",
            "value": 2107.0687652000006,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum simple",
            "value": 453.2284543000003,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum complex",
            "value": 1191.564739100002,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum nested",
            "value": 1163.3447734999977,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum simple",
            "value": 8.801571300000433,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum complex",
            "value": 27.130199999996307,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum nested",
            "value": 62.66288759999838,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum simple",
            "value": 30.968744099999412,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum complex",
            "value": 84.94361100000276,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.49742570000069,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.682279899999344,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 22.71805009999639,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.717133800000738,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.499474399997894,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 7.9126982999980555,
            "unit": "us"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zopemaven@gmail.com",
            "name": "Michael R. Bernstein",
            "username": "webmaven"
          },
          "committer": {
            "email": "zopemaven@gmail.com",
            "name": "Michael R. Bernstein",
            "username": "webmaven"
          },
          "distinct": true,
          "id": "ed52d6a97e8ed995d71fe5e3a894334880ec7c1a",
          "message": "fix: exhaustive resilience for v0.1.0 historical benchmarks",
          "timestamp": "2026-02-23T12:29:56+02:00",
          "tree_id": "14264673a7d41a6152f9ab15b0b3c29f19fd8f54",
          "url": "https://github.com/webmaven/lodum/commit/ed52d6a97e8ed995d71fe5e3a894334880ec7c1a"
        },
        "date": 1771842759352,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum simple",
            "value": 5.055674599999804,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum complex",
            "value": 8.198253300000147,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum nested",
            "value": 21.972593899999993,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.3606029999991165,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.8666847999995184,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.3604450999995095,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow simple",
            "value": 7.81757630000115,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow complex",
            "value": 16.777405600000606,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow nested",
            "value": 45.20473860000038,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum simple",
            "value": 11.800493400000533,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum complex",
            "value": 22.357701399999286,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum nested",
            "value": 67.69606449999941,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.434521299999858,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.41966230000088,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 6.260406500000926,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow simple",
            "value": 18.57124189999979,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow complex",
            "value": 38.816050999999874,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow nested",
            "value": 122.52781360000071,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum simple",
            "value": 3.1491212000013036,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum complex",
            "value": 5.3414620999987505,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum nested",
            "value": 16.870673799999736,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.5885038999998926,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 0.9685739000005356,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 1.6846743000009212,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum simple",
            "value": 9.980433100000852,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum complex",
            "value": 20.196467699999943,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum nested",
            "value": 65.15678520000066,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.4252837999999315,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 0.9387712000005877,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 1.9612204999994276,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum simple",
            "value": 6.685255900000442,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum complex",
            "value": 9.868037099999327,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum nested",
            "value": 23.726783700001164,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.282127799999813,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.576916699999401,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.318133399998828,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum simple",
            "value": 11.499316199999754,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum complex",
            "value": 21.683288600000594,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum nested",
            "value": 68.03522050000055,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.836223299999773,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.5757319999996753,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.262140699999861,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum simple",
            "value": 299.7033076000001,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum complex",
            "value": 704.5062451999996,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum nested",
            "value": 1784.8366177000003,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum simple",
            "value": 414.7035090000003,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum complex",
            "value": 1075.4192372999994,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum nested",
            "value": 1074.0574289999997,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum simple",
            "value": 8.872288600001355,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum complex",
            "value": 26.17690260000103,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum nested",
            "value": 57.86891129999958,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum simple",
            "value": 25.081153399999323,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum complex",
            "value": 67.41576670000171,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.83108860000101,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.996732499999325,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 23.45775789999891,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.90732139999983,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.8038284999989855,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 8.085091399999556,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Time",
            "value": 33.84996363100001,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Time",
            "value": 29.552456592999988,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7129364013671875,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Pydantic v2 (validate_json) Time",
            "value": 4.0146975350000105,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Pydantic v2 (validate_json) Memory",
            "value": 358.4476375579834,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael R. Bernstein",
            "username": "webmaven",
            "email": "zopemaven@gmail.com"
          },
          "committer": {
            "name": "Michael R. Bernstein",
            "username": "webmaven",
            "email": "zopemaven@gmail.com"
          },
          "id": "c4244175adf968af7d9428415241e9013e1e7d6e",
          "message": "chore: remove accidental api docs commit",
          "timestamp": "2026-02-23T10:30:27Z",
          "url": "https://github.com/webmaven/lodum/commit/c4244175adf968af7d9428415241e9013e1e7d6e"
        },
        "date": 1771842780032,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum simple",
            "value": 4.859658300000547,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum complex",
            "value": 7.7783466999996165,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum nested",
            "value": 21.73828710000052,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.3370651999998984,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.8111836999992192,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.3049777999991647,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow simple",
            "value": 7.584416399999583,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow complex",
            "value": 16.569043800001282,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow nested",
            "value": 44.98988339999954,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum simple",
            "value": 12.097692799999749,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum complex",
            "value": 27.361361599999867,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum nested",
            "value": 73.25376679999991,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.3683297999996569,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.211996499999458,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 5.258066900000813,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow simple",
            "value": 18.838479600000113,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow complex",
            "value": 44.330508199999485,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow nested",
            "value": 137.8611745999997,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum simple",
            "value": 3.121299099999675,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum complex",
            "value": 5.138866400000808,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum nested",
            "value": 16.798397899999884,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.6185024000004091,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 0.9536754999984964,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 1.6350109000001112,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum simple",
            "value": 10.041309999999015,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum complex",
            "value": 21.90305230000007,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum nested",
            "value": 69.01732030000076,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.4931030000001613,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.0311781000005737,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.199053399999684,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum simple",
            "value": 6.486157699998785,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum complex",
            "value": 9.718311700000015,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum nested",
            "value": 23.756650400000012,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.098792799999984,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.444049399999784,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.351083999999531,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum simple",
            "value": 11.640434800001742,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum complex",
            "value": 25.906785200000115,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum nested",
            "value": 75.53393130000003,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.7435885999994127,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.593849700000561,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.442062000000391,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum simple",
            "value": 363.0451322000006,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum complex",
            "value": 839.2974160000016,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum nested",
            "value": 2117.4053001000007,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum simple",
            "value": 460.8698040000007,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum complex",
            "value": 1219.8135808999994,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum nested",
            "value": 1186.7137587000016,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum simple",
            "value": 8.707734200002903,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum complex",
            "value": 27.230584300001226,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum nested",
            "value": 62.86771020000117,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum simple",
            "value": 30.42371819999801,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum complex",
            "value": 82.61794859999867,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.601286800001958,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.855009499997777,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 23.204844400000013,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.6609657999974843,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.4876181000020665,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 7.861822499998539,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Time",
            "value": 33.73292701400001,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Time",
            "value": 30.368419060999997,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7128829956054688,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Pydantic v2 (validate_json) Time",
            "value": 3.52953880299998,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Pydantic v2 (validate_json) Memory",
            "value": 358.4476375579834,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zopemaven@gmail.com",
            "name": "Michael R. Bernstein",
            "username": "webmaven"
          },
          "committer": {
            "email": "zopemaven@gmail.com",
            "name": "Michael R. Bernstein",
            "username": "webmaven"
          },
          "distinct": true,
          "id": "c4244175adf968af7d9428415241e9013e1e7d6e",
          "message": "chore: remove accidental api docs commit",
          "timestamp": "2026-02-23T12:30:27+02:00",
          "tree_id": "77be04dea4180647835bf56cb8d2661bb5ed2cc1",
          "url": "https://github.com/webmaven/lodum/commit/c4244175adf968af7d9428415241e9013e1e7d6e"
        },
        "date": 1771842801458,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum simple",
            "value": 4.787070700000129,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum complex",
            "value": 7.85974030000105,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum nested",
            "value": 21.65075079999994,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.329569899999683,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.8354405000010843,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.458806799999792,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow simple",
            "value": 8.029119999999068,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow complex",
            "value": 16.899896400000358,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow nested",
            "value": 45.09664929999886,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum simple",
            "value": 11.993822599999504,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum complex",
            "value": 25.65800490000072,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum nested",
            "value": 73.16525880000029,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.3593932999988567,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.2194330000004925,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 5.217589400000122,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow simple",
            "value": 18.852407100000335,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow complex",
            "value": 43.78705900000028,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow nested",
            "value": 138.00932949999947,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum simple",
            "value": 3.1035839000011833,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum complex",
            "value": 5.265145199999921,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum nested",
            "value": 16.782382800000306,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.6228264999990074,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 0.9587189000001217,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 1.6548101999987352,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum simple",
            "value": 10.100147100000356,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum complex",
            "value": 22.23505650000064,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum nested",
            "value": 68.21844390000038,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.491273099999745,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.0261997000014844,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.212302600000271,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum simple",
            "value": 6.518329999999395,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum complex",
            "value": 9.684066799999869,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum nested",
            "value": 23.962527300000147,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.0602038000010054,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.342704599998882,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.15894370000052,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum simple",
            "value": 11.846358500000065,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum complex",
            "value": 24.774455499999704,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum nested",
            "value": 72.38530500000024,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.7464452999988112,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.5347545999991894,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.385030599998885,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum simple",
            "value": 363.411698800001,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum complex",
            "value": 837.0899763999987,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum nested",
            "value": 2120.9886600000004,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum simple",
            "value": 463.9819667999987,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum complex",
            "value": 1218.102378300003,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum nested",
            "value": 1194.8935791000026,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum simple",
            "value": 9.153944999999908,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum complex",
            "value": 27.64291789999902,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum nested",
            "value": 63.95380739999865,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum simple",
            "value": 31.7104927999992,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum complex",
            "value": 84.83511009999916,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.507972400000426,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.7137575000003835,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 22.861420099998497,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.678966800001149,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.543369300000677,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 7.931958599999689,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Time",
            "value": 33.790000563999996,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Time",
            "value": 30.05463333899999,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7128839492797852,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Pydantic v2 (validate_json) Time",
            "value": 3.8079518680000035,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Pydantic v2 (validate_json) Memory",
            "value": 358.4476375579834,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zopemaven@gmail.com",
            "name": "Michael R. Bernstein",
            "username": "webmaven"
          },
          "committer": {
            "email": "zopemaven@gmail.com",
            "name": "Michael R. Bernstein",
            "username": "webmaven"
          },
          "distinct": true,
          "id": "6b3427772a826dc47e3bb95e0d9d0e0ffcdf18a1",
          "message": "docs: integrate CI-standardized historical benchmarks into repository",
          "timestamp": "2026-02-23T12:46:16+02:00",
          "tree_id": "14ea3a1b460afec5eaf4304b4bf276f4894dce22",
          "url": "https://github.com/webmaven/lodum/commit/6b3427772a826dc47e3bb95e0d9d0e0ffcdf18a1"
        },
        "date": 1771843738147,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum simple",
            "value": 5.196947400001051,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum complex",
            "value": 8.229162199999962,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum nested",
            "value": 21.617834099999556,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.3547561999999402,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.8636528000001817,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.4702832000014894,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow simple",
            "value": 7.620474299999103,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow complex",
            "value": 16.48852339999962,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow nested",
            "value": 44.64756139999935,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum simple",
            "value": 11.798951500000499,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum complex",
            "value": 22.636616899999495,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum nested",
            "value": 67.85130820000091,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.4107813000009628,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.30488649999927,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 5.420226300000053,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow simple",
            "value": 17.69466169999845,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow complex",
            "value": 39.00068809999908,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow nested",
            "value": 123.24439230000124,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum simple",
            "value": 3.299987899999479,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum complex",
            "value": 5.305956600000172,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum nested",
            "value": 17.520680200000527,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.5988828999996088,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 0.9648531999999932,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 1.6742162999996424,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum simple",
            "value": 9.947976600000175,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum complex",
            "value": 20.49996510000156,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum nested",
            "value": 65.69611390000034,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.41649660000047106,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 0.9360684000000674,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 1.9467867999999555,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum simple",
            "value": 6.705903200000307,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum complex",
            "value": 9.745367300000396,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum nested",
            "value": 24.119166499999523,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.142924899999656,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.476413199998831,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.286775699998827,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum simple",
            "value": 11.404524299999963,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum complex",
            "value": 21.86476010000007,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum nested",
            "value": 67.50841270000052,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.7370127999988938,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.5543035999994856,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.2371369000008485,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum simple",
            "value": 298.7404579999989,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum complex",
            "value": 710.2392717999998,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum nested",
            "value": 1787.1035927000023,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum simple",
            "value": 415.4780748999997,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum complex",
            "value": 1075.124734699999,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum nested",
            "value": 1073.3555170000018,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum simple",
            "value": 8.811603599998818,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum complex",
            "value": 25.784591699998316,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum nested",
            "value": 57.102014599998085,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum simple",
            "value": 24.63639840000127,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum complex",
            "value": 65.10094269999769,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.950341900001831,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 7.0227435999981935,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 23.51478149999906,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.8601818999993043,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.691925900000626,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 8.100328899999454,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Time",
            "value": 33.728789967,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Time",
            "value": 29.33228817599999,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7128715515136719,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Pydantic v2 (validate_json) Time",
            "value": 3.899258524000004,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Pydantic v2 (validate_json) Memory",
            "value": 358.4476375579834,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zopemaven@gmail.com",
            "name": "Michael R. Bernstein",
            "username": "webmaven"
          },
          "committer": {
            "email": "zopemaven@gmail.com",
            "name": "Michael R. Bernstein",
            "username": "webmaven"
          },
          "distinct": true,
          "id": "a0009e54d0b2fa4a261e9ddc94b94f88248984de",
          "message": "docs: standardize performance analysis on Linux hardware and versioned trajectory",
          "timestamp": "2026-02-23T13:48:57+02:00",
          "tree_id": "2bdb903da85a05c26a65a8b08556d54f6227579c",
          "url": "https://github.com/webmaven/lodum/commit/a0009e54d0b2fa4a261e9ddc94b94f88248984de"
        },
        "date": 1771847509025,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum simple",
            "value": 4.839921499999633,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum complex",
            "value": 7.919892199999623,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum nested",
            "value": 21.97512899999907,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.3107920999992473,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.7512863999989747,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.3097492999999645,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow simple",
            "value": 7.617373100000435,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow complex",
            "value": 16.48169780000046,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow nested",
            "value": 45.977930100000464,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum simple",
            "value": 12.311167799999367,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum complex",
            "value": 25.522169800001393,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum nested",
            "value": 74.54166910000026,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.3806395999999665,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.193355599999336,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 5.172340500001127,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow simple",
            "value": 18.823858500000057,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow complex",
            "value": 44.45367419999968,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow nested",
            "value": 135.67622510000206,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum simple",
            "value": 3.1769178999994097,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum complex",
            "value": 5.275658199999356,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum nested",
            "value": 16.912631100000652,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.6153036999997141,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 0.9471936000004177,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 1.6341253000000222,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum simple",
            "value": 10.28667499999969,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum complex",
            "value": 21.964740399999982,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum nested",
            "value": 69.22338319999994,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.5010860999995259,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.0182238999995263,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.2208888999998067,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum simple",
            "value": 6.4866514000001985,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum complex",
            "value": 9.754389899999438,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum nested",
            "value": 24.07177489999981,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.057336099999986,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.339047300000033,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.1447402000002,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum simple",
            "value": 12.022134099998993,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum complex",
            "value": 24.383570099999474,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum nested",
            "value": 72.89512870000081,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.765894800000467,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.5142837999993617,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.357265100001229,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum simple",
            "value": 365.4580655000004,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum complex",
            "value": 846.2587403000001,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum nested",
            "value": 2157.736836199999,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum simple",
            "value": 457.15076210000234,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum complex",
            "value": 1219.2769809999988,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum nested",
            "value": 1184.948083099998,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum simple",
            "value": 8.76290909999966,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum complex",
            "value": 27.716014699998937,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum nested",
            "value": 63.141757900002915,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum simple",
            "value": 31.107091100000158,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum complex",
            "value": 84.76557099999837,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.505021299998191,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.674343800000315,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 23.21963780000118,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.6600327000002153,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.510942500002102,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 7.813346999999737,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Time",
            "value": 33.50690367200001,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Time",
            "value": 29.998693056000008,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7128334045410156,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Pydantic v2 (validate_json) Time",
            "value": 3.5662470059999976,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Pydantic v2 (validate_json) Memory",
            "value": 358.4476375579834,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zopemaven@gmail.com",
            "name": "Michael R. Bernstein",
            "username": "webmaven"
          },
          "committer": {
            "email": "zopemaven@gmail.com",
            "name": "Michael R. Bernstein",
            "username": "webmaven"
          },
          "distinct": true,
          "id": "9481b299fff79af74705509801ddd28e882dedef",
          "message": "docs: implement benchmark methodology and refactor performance nav",
          "timestamp": "2026-02-23T13:59:06+02:00",
          "tree_id": "413678a97ee9a10c7630eaba9ef67a88b6acc731",
          "url": "https://github.com/webmaven/lodum/commit/9481b299fff79af74705509801ddd28e882dedef"
        },
        "date": 1771848120562,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum simple",
            "value": 4.84970740000108,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum complex",
            "value": 7.768558899999789,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum nested",
            "value": 21.619784300000333,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.3212229999993497,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.7932980000011867,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.3849355999990394,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow simple",
            "value": 7.488947999996753,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow complex",
            "value": 16.419245200000887,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow nested",
            "value": 44.798734300005094,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum simple",
            "value": 12.147409299998913,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum complex",
            "value": 25.689984899997853,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum nested",
            "value": 74.92656539999984,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.3955306999974937,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.172431700000743,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 5.222182500003214,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow simple",
            "value": 18.782320500000083,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow complex",
            "value": 43.75327130000244,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow nested",
            "value": 133.95007629999895,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum simple",
            "value": 3.095310899999504,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum complex",
            "value": 5.107455399999594,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum nested",
            "value": 16.82524800000067,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.6133648000002268,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 0.9614856000013106,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 1.6432949000034114,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum simple",
            "value": 10.212312799998813,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum complex",
            "value": 21.701666900000305,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum nested",
            "value": 69.24932170000204,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.5012556999957951,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.0309703000018544,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.221236599999088,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum simple",
            "value": 6.573252000004004,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum complex",
            "value": 9.731047700000772,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum nested",
            "value": 24.105647700000077,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.120648599999299,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.395588100000737,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.209640100000115,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum simple",
            "value": 11.992412199998626,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum complex",
            "value": 24.91053690000342,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum nested",
            "value": 74.97616499999822,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.7546987999992325,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.567270499997676,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.454069899998103,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum simple",
            "value": 362.11811710000177,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum complex",
            "value": 840.7448143000039,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum nested",
            "value": 2143.136191900004,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum simple",
            "value": 464.8727674999975,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum complex",
            "value": 1223.4603554999978,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum nested",
            "value": 1194.2240181999978,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum simple",
            "value": 8.917993099998966,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum complex",
            "value": 26.446233800007235,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum nested",
            "value": 63.10342559999924,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum simple",
            "value": 31.03564330000097,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum complex",
            "value": 84.07652700000199,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.540525199999479,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.675237900000752,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 23.173454099998025,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.664555700001415,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.469758099997989,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 7.9129106999971555,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Time",
            "value": 33.904697715000026,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Time",
            "value": 30.17204172999999,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.712885856628418,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Pydantic v2 (validate_json) Time",
            "value": 3.719694446999995,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Pydantic v2 (validate_json) Memory",
            "value": 358.4476375579834,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zopemaven@gmail.com",
            "name": "Michael R. Bernstein",
            "username": "webmaven"
          },
          "committer": {
            "email": "zopemaven@gmail.com",
            "name": "Michael R. Bernstein",
            "username": "webmaven"
          },
          "distinct": true,
          "id": "3c71c64750fbf5a356db91728c2be570c3be5c1a",
          "message": "docs: complete performance documentation overhaul and navigation refactor",
          "timestamp": "2026-02-23T14:32:03+02:00",
          "tree_id": "89212ac1435c5fa50141ffe863e805bc9c62a3b6",
          "url": "https://github.com/webmaven/lodum/commit/3c71c64750fbf5a356db91728c2be570c3be5c1a"
        },
        "date": 1771850095245,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum simple",
            "value": 5.144567700003222,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum complex",
            "value": 8.18574779999608,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum nested",
            "value": 22.1042989999944,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.3173551999983601,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.7720909000018992,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.2582579000006717,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow simple",
            "value": 7.662719699999343,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow complex",
            "value": 16.893830399999388,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow nested",
            "value": 45.747423999998205,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum simple",
            "value": 12.970272199999044,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum complex",
            "value": 25.65420089999577,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum nested",
            "value": 73.49072829999557,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.3848668999941083,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.1392754999993713,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 5.215245500002652,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow simple",
            "value": 18.81826049999802,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow complex",
            "value": 43.91084599999999,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow nested",
            "value": 133.97284180000213,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum simple",
            "value": 3.3054507000002786,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum complex",
            "value": 5.373527599996919,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum nested",
            "value": 17.006306300001484,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.6408507999992707,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 0.958814800003438,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 1.6492740000018102,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum simple",
            "value": 10.353303100001199,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum complex",
            "value": 22.90760779999914,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum nested",
            "value": 68.83814430000257,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.5143250999992688,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.0266251000018656,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.2949928999992153,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum simple",
            "value": 6.826720099999761,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum complex",
            "value": 9.872325399999227,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum nested",
            "value": 24.018614199999888,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.115337900000782,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.428820700001324,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.274628999998868,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum simple",
            "value": 12.157261400000152,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum complex",
            "value": 24.80501730000242,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum nested",
            "value": 73.95628659999716,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.790423400001373,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.581713199998603,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.485094600002526,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum simple",
            "value": 363.003710000001,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum complex",
            "value": 834.5639612999975,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum nested",
            "value": 2121.716602899997,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum simple",
            "value": 460.76094390000435,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum complex",
            "value": 1218.9478159000032,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum nested",
            "value": 1173.7626777000003,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum simple",
            "value": 9.09618059999957,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum complex",
            "value": 27.21697959999858,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum nested",
            "value": 63.64476330000173,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum simple",
            "value": 31.00413479999986,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum complex",
            "value": 83.72260070000266,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.668813300000352,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.817820800000618,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 23.18641490000175,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.7864055000000008,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.510911199997736,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 8.036488599998393,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Time",
            "value": 33.38994971300002,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Time",
            "value": 30.334483308000017,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7129364013671875,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Pydantic v2 (validate_json) Time",
            "value": 3.728712078000001,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Pydantic v2 (validate_json) Memory",
            "value": 358.4476375579834,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zopemaven@gmail.com",
            "name": "Michael R. Bernstein",
            "username": "webmaven"
          },
          "committer": {
            "email": "zopemaven@gmail.com",
            "name": "Michael R. Bernstein",
            "username": "webmaven"
          },
          "distinct": true,
          "id": "80bcce39a19a7204bfa8477e588775a4fdf7b2db",
          "message": "style: reformat benchmarks to satisfy ruff",
          "timestamp": "2026-02-23T15:39:15+02:00",
          "tree_id": "6e74a1bd4a936713102f72ae3470bce1b0e63139",
          "url": "https://github.com/webmaven/lodum/commit/80bcce39a19a7204bfa8477e588775a4fdf7b2db"
        },
        "date": 1771854127094,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum simple",
            "value": 4.923835800000376,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum complex",
            "value": 8.032442199999679,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum nested",
            "value": 21.82152479999999,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.3417780999986917,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.817595300000363,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.3039643000016383,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow simple",
            "value": 7.940686899999605,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow complex",
            "value": 18.426737800000126,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow nested",
            "value": 46.372631699999545,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum simple",
            "value": 12.482974099999211,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum complex",
            "value": 25.78252979999931,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum nested",
            "value": 73.71681420000016,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.3829235999999412,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.1620558000009282,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 5.139677400001119,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow simple",
            "value": 18.69435780000046,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow complex",
            "value": 43.48765410000013,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow nested",
            "value": 138.16654239999977,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum simple",
            "value": 3.1214445999999896,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum complex",
            "value": 5.337454300000388,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum nested",
            "value": 16.91724009999902,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.6370453000002385,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 0.9861539999995728,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 1.6542100999998866,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum simple",
            "value": 10.294628700000175,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum complex",
            "value": 22.354070000000092,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum nested",
            "value": 68.87204929999982,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.5073201000001859,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.0316269000007594,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.2319119000002274,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum simple",
            "value": 6.545174000000031,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum complex",
            "value": 9.881172899999058,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum nested",
            "value": 24.162486099999825,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.1176521000011235,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.415665400000336,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.337548099999736,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum simple",
            "value": 12.113914100000756,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum complex",
            "value": 24.833504699999054,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum nested",
            "value": 72.94054500000016,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.7845666000006588,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.6053146999998944,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.4478575000006515,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum simple",
            "value": 353.92850810000095,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum complex",
            "value": 825.8555088000002,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum nested",
            "value": 2117.3365588999986,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum simple",
            "value": 463.31270470000163,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum complex",
            "value": 1209.483129899999,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum nested",
            "value": 1178.257531,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum simple",
            "value": 8.812284899998701,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum complex",
            "value": 27.737095000000522,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum nested",
            "value": 62.92318449999925,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum simple",
            "value": 31.35938770000024,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum complex",
            "value": 84.25742479999911,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.65981219999918,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.880936599999643,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 23.38527389999996,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.727240199999926,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.48531609999776,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 8.039261300000078,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Time",
            "value": 33.945277147,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Time",
            "value": 30.30609617600001,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7129364013671875,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Pydantic v2 (validate_json) Time",
            "value": 3.6238134179999975,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Pydantic v2 (validate_json) Memory",
            "value": 358.4476375579834,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zopemaven@gmail.com",
            "name": "Michael R. Bernstein",
            "username": "webmaven"
          },
          "committer": {
            "email": "zopemaven@gmail.com",
            "name": "Michael R. Bernstein",
            "username": "webmaven"
          },
          "distinct": true,
          "id": "fd67102a092bb3278780f6b65243286efa535380",
          "message": "perf: optimize benchmarks by using stored competitor baselines\n\n- Generated benchmarks/competitor_baselines.json from historical data.\n- Updated benchmarks/run.py to optionally skip competitor runs using --use-baselines.\n- Enabled baseline usage in CI workflows to reduce run time and ensure stability.",
          "timestamp": "2026-02-23T15:56:45+02:00",
          "tree_id": "3b105adc71672cb8d70eaa3b0796b8b9de4f2c7f",
          "url": "https://github.com/webmaven/lodum/commit/fd67102a092bb3278780f6b65243286efa535380"
        },
        "date": 1771855174053,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum simple",
            "value": 4.941252599999757,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum complex",
            "value": 7.990305000001285,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum nested",
            "value": 22.202720300000323,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.423879861111664,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.9072649055562607,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.5567207111111228,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow simple",
            "value": 7.2870557833333685,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow complex",
            "value": 15.705288399999873,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow nested",
            "value": 42.84389975555657,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum simple",
            "value": 12.085109199999522,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum complex",
            "value": 25.887247399999325,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum nested",
            "value": 73.88958630000033,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.469039444443412,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.3911850444443576,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 6.360317577780192,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow simple",
            "value": 17.80687678888968,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow complex",
            "value": 40.72305930000044,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow nested",
            "value": 127.04332092777398,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum simple",
            "value": 3.091611900001112,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum complex",
            "value": 5.161031000000094,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum nested",
            "value": 17.2047548000009,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.711815029411323,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 1.163070329413074,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 1.9935557235300356,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum simple",
            "value": 10.139226500001541,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum complex",
            "value": 22.304332099999158,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum nested",
            "value": 68.91313689999947,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.48290518823522427,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.0041882000007178,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.1774501764719605,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum simple",
            "value": 6.714785299999448,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum complex",
            "value": 9.844874000002335,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum nested",
            "value": 24.359592599999758,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.186143758823679,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.562398770588489,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.424710111763373,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum simple",
            "value": 11.910168299999668,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum complex",
            "value": 24.89012940000208,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum nested",
            "value": 73.12753260000164,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.6832919882363024,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.4755538647070807,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.27499937058893,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum simple",
            "value": 367.22803560000017,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum complex",
            "value": 837.8864907000008,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum nested",
            "value": 2147.5572307999983,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum simple",
            "value": 459.12278859999844,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum complex",
            "value": 1244.5883724999987,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum nested",
            "value": 1184.834696699997,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum simple",
            "value": 8.973702100004743,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum complex",
            "value": 28.025096799999005,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum nested",
            "value": 63.473742600001515,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum simple",
            "value": 31.122391200003108,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum complex",
            "value": 86.42371220000484,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.517326900000285,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.620368000002941,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 23.70475509999892,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.748349599996459,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.463944300002254,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 8.013254500002631,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Time",
            "value": 33.652671365,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Time",
            "value": 30.044494254,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7128810882568359,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Pydantic v2 (validate_json) Time",
            "value": 3.5766132990000017,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Pydantic v2 (validate_json) Memory",
            "value": 358.4476375579834,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zopemaven@gmail.com",
            "name": "Michael R. Bernstein",
            "username": "webmaven"
          },
          "committer": {
            "email": "zopemaven@gmail.com",
            "name": "Michael R. Bernstein",
            "username": "webmaven"
          },
          "distinct": true,
          "id": "1d32052a4c2decda8933d852e60073327ade1ae8",
          "message": "feat: implement universal Pyodide/WASM benchmarking",
          "timestamp": "2026-02-23T17:06:09+02:00",
          "tree_id": "db4126673e00e77fa054c181e5c20acc5f610928",
          "url": "https://github.com/webmaven/lodum/commit/1d32052a4c2decda8933d852e60073327ade1ae8"
        },
        "date": 1771859346913,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum simple",
            "value": 4.806099499999306,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum complex",
            "value": 7.790630099999873,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum nested",
            "value": 21.581537700000553,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.423879861111664,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.9072649055562607,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.5567207111111228,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow simple",
            "value": 7.2870557833333685,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow complex",
            "value": 15.705288399999873,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow nested",
            "value": 42.84389975555657,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum simple",
            "value": 12.450288199999449,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum complex",
            "value": 25.768706499999183,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum nested",
            "value": 73.23181120000157,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.469039444443412,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.3911850444443576,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 6.360317577780192,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow simple",
            "value": 17.80687678888968,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow complex",
            "value": 40.72305930000044,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow nested",
            "value": 127.04332092777398,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum simple",
            "value": 3.132001099999826,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum complex",
            "value": 5.184918799999139,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum nested",
            "value": 16.958283800000373,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.711815029411323,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 1.163070329413074,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 1.9935557235300356,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum simple",
            "value": 10.237776400000342,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum complex",
            "value": 22.40217049999913,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum nested",
            "value": 68.28418070000026,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.48290518823522427,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.0041882000007178,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.1774501764719605,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum simple",
            "value": 6.559895500000579,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum complex",
            "value": 9.932403900000963,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum nested",
            "value": 24.177492900000175,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.186143758823679,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.562398770588489,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.424710111763373,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum simple",
            "value": 11.934766199999558,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum complex",
            "value": 25.068608200000142,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum nested",
            "value": 72.17679910000001,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.6832919882363024,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.4755538647070807,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.27499937058893,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum simple",
            "value": 364.89615179999856,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum complex",
            "value": 829.9423428999972,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum nested",
            "value": 2121.862899899999,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum simple",
            "value": 461.71497579999823,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum complex",
            "value": 1215.1309755,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum nested",
            "value": 1178.9350297000012,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum simple",
            "value": 8.73679299999992,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum complex",
            "value": 27.725814199999377,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum nested",
            "value": 63.94043700000225,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum simple",
            "value": 31.87812109999868,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum complex",
            "value": 85.2960926999998,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.517466599999409,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.694660999997382,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 23.170013699999004,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.746680000000424,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.467385400000978,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 8.012544099999275,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Time",
            "value": 33.16471143800001,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Time",
            "value": 29.963998868999994,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7128715515136719,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Pydantic v2 (validate_json) Time",
            "value": 3.674464327999999,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Pydantic v2 (validate_json) Memory",
            "value": 358.4476375579834,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael R. Bernstein",
            "username": "webmaven",
            "email": "zopemaven@gmail.com"
          },
          "committer": {
            "name": "Michael R. Bernstein",
            "username": "webmaven",
            "email": "zopemaven@gmail.com"
          },
          "id": "1d32052a4c2decda8933d852e60073327ade1ae8",
          "message": "feat: implement universal Pyodide/WASM benchmarking",
          "timestamp": "2026-02-23T15:06:09Z",
          "url": "https://github.com/webmaven/lodum/commit/1d32052a4c2decda8933d852e60073327ade1ae8"
        },
        "date": 1771859355191,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum simple",
            "value": 4.8449181000016495,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum complex",
            "value": 7.776992699999852,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum nested",
            "value": 21.617116999999553,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.423879861111664,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.9072649055562607,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.5567207111111228,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow simple",
            "value": 7.2870557833333685,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow complex",
            "value": 15.705288399999873,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow nested",
            "value": 42.84389975555657,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum simple",
            "value": 12.352258099999602,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum complex",
            "value": 26.3162623999996,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum nested",
            "value": 72.75002470000018,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.469039444443412,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.3911850444443576,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 6.360317577780192,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow simple",
            "value": 17.80687678888968,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow complex",
            "value": 40.72305930000044,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow nested",
            "value": 127.04332092777398,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum simple",
            "value": 3.123122200000239,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum complex",
            "value": 5.158233600000273,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum nested",
            "value": 16.66620059999957,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.711815029411323,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 1.163070329413074,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 1.9935557235300356,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum simple",
            "value": 10.179507300000523,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum complex",
            "value": 21.811176599999982,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum nested",
            "value": 67.93867049999989,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.48290518823522427,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.0041882000007178,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.1774501764719605,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum simple",
            "value": 6.598970900000012,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum complex",
            "value": 9.77407430000099,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum nested",
            "value": 23.928537700000163,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.186143758823679,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.562398770588489,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.424710111763373,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum simple",
            "value": 12.003163500000369,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum complex",
            "value": 24.718356199999647,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum nested",
            "value": 72.0222401000008,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.6832919882363024,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.4755538647070807,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.27499937058893,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum simple",
            "value": 356.70208770000045,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum complex",
            "value": 835.4936511000005,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum nested",
            "value": 2103.556437499999,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum simple",
            "value": 454.17990109999806,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum complex",
            "value": 1194.795019099999,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum nested",
            "value": 1177.4117248999971,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum simple",
            "value": 8.759817700001804,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum complex",
            "value": 27.63691550000118,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum nested",
            "value": 61.94831030000216,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum simple",
            "value": 30.633502999999962,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum complex",
            "value": 83.44878800000117,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.563176900001054,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.706352699998774,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 22.621494000000553,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.7582762999988972,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.472265399999742,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 7.946569500001033,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Time",
            "value": 33.624510067,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Time",
            "value": 29.743290684000016,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7128839492797852,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Pydantic v2 (validate_json) Time",
            "value": 3.550908368999984,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Pydantic v2 (validate_json) Memory",
            "value": 358.4476375579834,
            "unit": "MB"
          }
        ]
      }
    ],
    "Lodum Performance Index - windows-latest": [
      {
        "commit": {
          "author": {
            "email": "zopemaven@gmail.com",
            "name": "Michael R. Bernstein",
            "username": "webmaven"
          },
          "committer": {
            "email": "zopemaven@gmail.com",
            "name": "Michael R. Bernstein",
            "username": "webmaven"
          },
          "distinct": true,
          "id": "ed52d6a97e8ed995d71fe5e3a894334880ec7c1a",
          "message": "fix: exhaustive resilience for v0.1.0 historical benchmarks",
          "timestamp": "2026-02-23T12:29:56+02:00",
          "tree_id": "14264673a7d41a6152f9ab15b0b3c29f19fd8f54",
          "url": "https://github.com/webmaven/lodum/commit/ed52d6a97e8ed995d71fe5e3a894334880ec7c1a"
        },
        "date": 1771842809409,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(windows-latest) JSON Serialization Lodum simple",
            "value": 4.934809999986101,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum complex",
            "value": 7.084680000002663,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum nested",
            "value": 19.726299999990715,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.3723700000014105,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.9471000000066851,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.652549999992516,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow simple",
            "value": 6.552680000015698,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow complex",
            "value": 14.026179999996202,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow nested",
            "value": 39.34711999999081,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum simple",
            "value": 10.4986899999858,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum complex",
            "value": 23.238470000012512,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum nested",
            "value": 64.86440000001039,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.496650000012778,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.5562400000126217,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 9.670530000016697,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow simple",
            "value": 15.409629999999197,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow complex",
            "value": 36.275369999998475,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow nested",
            "value": 113.53807999998935,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum simple",
            "value": 3.1679999999937536,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum complex",
            "value": 5.19649999999956,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum nested",
            "value": 15.97405999999637,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.752979999992931,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 1.2403900000094836,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 2.2018300000127056,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum simple",
            "value": 8.961160000012569,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum complex",
            "value": 19.647759999986647,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum nested",
            "value": 60.44124999999667,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.45982999999978347,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 0.9666799999990872,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.0827000000167573,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum simple",
            "value": 6.410729999981868,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum complex",
            "value": 9.38544999999067,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum nested",
            "value": 22.2609099999886,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.079060000003665,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.594829999995454,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.463099999994483,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum simple",
            "value": 10.224649999997837,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum complex",
            "value": 21.400560000006408,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum nested",
            "value": 63.86553999998341,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.565500000015163,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.2791200000142453,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 3.9349800000081814,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum simple",
            "value": 299.98427999998967,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum complex",
            "value": 705.0414399999909,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum nested",
            "value": 1812.6596500000005,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum simple",
            "value": 372.05966999998736,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum complex",
            "value": 1016.3948300000129,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum nested",
            "value": 980.4390799999965,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum simple",
            "value": 7.830139999998664,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum complex",
            "value": 26.02375999999822,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum nested",
            "value": 59.24334999999701,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum simple",
            "value": 28.08361000001014,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum complex",
            "value": 76.89337000001615,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.3666499999972075,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.3547800000151256,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 21.280620000015915,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.474180000000615,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.411949999996523,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 7.681379999996807,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Time",
            "value": 38.695606699999985,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Time",
            "value": 37.30677489999994,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7155771255493164,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Pydantic v2 (validate_json) Time",
            "value": 4.145257399999991,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Pydantic v2 (validate_json) Memory",
            "value": 358.4476375579834,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael R. Bernstein",
            "username": "webmaven",
            "email": "zopemaven@gmail.com"
          },
          "committer": {
            "name": "Michael R. Bernstein",
            "username": "webmaven",
            "email": "zopemaven@gmail.com"
          },
          "id": "c4244175adf968af7d9428415241e9013e1e7d6e",
          "message": "chore: remove accidental api docs commit",
          "timestamp": "2026-02-23T10:30:27Z",
          "url": "https://github.com/webmaven/lodum/commit/c4244175adf968af7d9428415241e9013e1e7d6e"
        },
        "date": 1771842822669,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(windows-latest) JSON Serialization Lodum simple",
            "value": 4.521900000008827,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum complex",
            "value": 7.48798999999849,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum nested",
            "value": 21.296380000001136,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.4319699999987279,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) complex",
            "value": 2.0878800000105002,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.777540000010049,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow simple",
            "value": 6.460770000001048,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow complex",
            "value": 14.415340000005017,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow nested",
            "value": 39.05458000000408,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum simple",
            "value": 11.566940000005843,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum complex",
            "value": 24.52917000001662,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum nested",
            "value": 71.51296000000116,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.5608799999938583,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.616699999998673,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 7.395339999993666,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow simple",
            "value": 16.5415199999984,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow complex",
            "value": 39.02290000000335,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow nested",
            "value": 123.18910999999844,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum simple",
            "value": 3.276690000001281,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum complex",
            "value": 5.366559999998799,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum nested",
            "value": 16.866880000003448,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.8385799999985011,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 1.42999000000259,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 2.4858099999903516,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum simple",
            "value": 9.36824999998862,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum complex",
            "value": 21.415600000000268,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum nested",
            "value": 66.73291999999265,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.48807999999667123,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 0.9933499999988271,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.2132000000055996,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum simple",
            "value": 6.528489999999465,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum complex",
            "value": 10.091929999998683,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum nested",
            "value": 23.06864999999334,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.291570000009415,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.686880000001793,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.58171999999513,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum simple",
            "value": 10.883410000008098,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum complex",
            "value": 23.826929999995627,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum nested",
            "value": 70.53738999999837,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.5965100000016719,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.3820100000023103,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.12532000000283,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum simple",
            "value": 344.20123000000444,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum complex",
            "value": 799.3919099999914,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum nested",
            "value": 2050.119179999984,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum simple",
            "value": 441.0153300000047,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum complex",
            "value": 1153.5974699999997,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum nested",
            "value": 1135.4929799999923,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum simple",
            "value": 8.622020000007069,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum complex",
            "value": 28.037059999996927,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum nested",
            "value": 63.336469999990186,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum simple",
            "value": 30.143139999995583,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum complex",
            "value": 84.6969000000172,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.59761999999273,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.663840000010168,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 22.106720000010682,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.583260000004884,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.357959999981631,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 8.548129999985576,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Time",
            "value": 38.32925190000003,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Time",
            "value": 36.12420439999994,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7155866622924805,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Pydantic v2 (validate_json) Time",
            "value": 4.396422099999995,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Pydantic v2 (validate_json) Memory",
            "value": 358.4476375579834,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zopemaven@gmail.com",
            "name": "Michael R. Bernstein",
            "username": "webmaven"
          },
          "committer": {
            "email": "zopemaven@gmail.com",
            "name": "Michael R. Bernstein",
            "username": "webmaven"
          },
          "distinct": true,
          "id": "c4244175adf968af7d9428415241e9013e1e7d6e",
          "message": "chore: remove accidental api docs commit",
          "timestamp": "2026-02-23T12:30:27+02:00",
          "tree_id": "77be04dea4180647835bf56cb8d2661bb5ed2cc1",
          "url": "https://github.com/webmaven/lodum/commit/c4244175adf968af7d9428415241e9013e1e7d6e"
        },
        "date": 1771842847126,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(windows-latest) JSON Serialization Lodum simple",
            "value": 4.6017000000063035,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum complex",
            "value": 7.921820000001389,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum nested",
            "value": 21.327039999999897,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.4367699999922934,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) complex",
            "value": 2.0298499999967134,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) nested",
            "value": 4.0795699999989665,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow simple",
            "value": 6.658590000000686,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow complex",
            "value": 14.515339999996968,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow nested",
            "value": 41.271750000004204,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum simple",
            "value": 12.018930000004957,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum complex",
            "value": 25.516969999995354,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum nested",
            "value": 71.63428999999724,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.571049999989782,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.512020000006032,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 6.786200000004783,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow simple",
            "value": 17.071200000003728,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow complex",
            "value": 38.957020000003695,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow nested",
            "value": 127.25014999999189,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum simple",
            "value": 3.2973900000001777,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum complex",
            "value": 5.444770000002563,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum nested",
            "value": 16.951260000001867,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.824209999990444,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 1.4115599999968254,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 2.4864999999977044,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum simple",
            "value": 9.207690000005186,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum complex",
            "value": 21.770769999994855,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum nested",
            "value": 66.7676599999993,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.4864699999984623,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.0061999999948057,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.216249999997899,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum simple",
            "value": 6.816460000004554,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum complex",
            "value": 9.843110000002753,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum nested",
            "value": 23.606009999997468,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.393660000005184,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.812409999998636,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.909899999991922,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum simple",
            "value": 11.014110000007804,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum complex",
            "value": 24.32365999999888,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum nested",
            "value": 71.62005999999792,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.6197699999963788,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.4469700000054218,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.333889999998064,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum simple",
            "value": 340.40564999999106,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum complex",
            "value": 790.7684399999994,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum nested",
            "value": 1998.3034700000019,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum simple",
            "value": 429.6112199999982,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum complex",
            "value": 1123.9969099999996,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum nested",
            "value": 1101.402569999999,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum simple",
            "value": 8.439709999987599,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum complex",
            "value": 25.775249999998096,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum nested",
            "value": 61.997569999994084,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum simple",
            "value": 29.415470000003552,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum complex",
            "value": 82.49079999999935,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.563439999998309,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.447110000010525,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 22.15472000000318,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.5928100000091945,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.54003999999486,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 8.02509000001237,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Time",
            "value": 43.31364479999996,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Time",
            "value": 36.06098210000005,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7154817581176758,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Pydantic v2 (validate_json) Time",
            "value": 4.549071300000037,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Pydantic v2 (validate_json) Memory",
            "value": 358.4476375579834,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zopemaven@gmail.com",
            "name": "Michael R. Bernstein",
            "username": "webmaven"
          },
          "committer": {
            "email": "zopemaven@gmail.com",
            "name": "Michael R. Bernstein",
            "username": "webmaven"
          },
          "distinct": true,
          "id": "6b3427772a826dc47e3bb95e0d9d0e0ffcdf18a1",
          "message": "docs: integrate CI-standardized historical benchmarks into repository",
          "timestamp": "2026-02-23T12:46:16+02:00",
          "tree_id": "14ea3a1b460afec5eaf4304b4bf276f4894dce22",
          "url": "https://github.com/webmaven/lodum/commit/6b3427772a826dc47e3bb95e0d9d0e0ffcdf18a1"
        },
        "date": 1771843789214,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(windows-latest) JSON Serialization Lodum simple",
            "value": 4.712840000001961,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum complex",
            "value": 7.549599999998691,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum nested",
            "value": 22.35200000000077,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.4115500000059455,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.947219999999561,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.712129999996705,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow simple",
            "value": 7.113439999994853,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow complex",
            "value": 14.686399999999367,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow nested",
            "value": 39.82582000000434,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum simple",
            "value": 11.693230000003041,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum complex",
            "value": 25.412670000008575,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum nested",
            "value": 72.87469999999985,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.5426599999898372,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.606709999997747,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 8.618919999997843,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow simple",
            "value": 17.242619999996123,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow complex",
            "value": 39.138059999999086,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow nested",
            "value": 123.27474999999595,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum simple",
            "value": 3.2740899999907924,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum complex",
            "value": 5.371740000003911,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum nested",
            "value": 17.2624600000006,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.8356800000001385,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 1.4239599999996244,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 2.424690000003693,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum simple",
            "value": 9.34048999999959,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum complex",
            "value": 22.719269999998914,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum nested",
            "value": 69.30624999999964,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.49658000000363245,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.0118600000055267,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.215750000004846,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum simple",
            "value": 6.630829999994603,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum complex",
            "value": 9.793560000008483,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum nested",
            "value": 23.38423000000489,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.338699999993878,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.791640000001053,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.642749999995658,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum simple",
            "value": 10.882789999999432,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum complex",
            "value": 24.48031999999216,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum nested",
            "value": 72.37029000001485,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.5952199999958339,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.3782100000005357,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.252769999999373,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum simple",
            "value": 343.93726000001266,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum complex",
            "value": 803.5713399999906,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum nested",
            "value": 2019.5930199999907,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum simple",
            "value": 434.55597999999895,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum complex",
            "value": 1144.29801,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum nested",
            "value": 1108.6447700000008,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum simple",
            "value": 8.664609999999584,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum complex",
            "value": 28.784209999997756,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum nested",
            "value": 64.65423999999871,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum simple",
            "value": 29.96575000000803,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum complex",
            "value": 85.90356999999926,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.503210000001445,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.509600000003957,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 21.887959999986606,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.5032200000102875,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.320639999991727,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 7.65048999999749,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Time",
            "value": 37.69045620000003,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Time",
            "value": 36.61562170000002,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.71563720703125,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Pydantic v2 (validate_json) Time",
            "value": 4.227730300000019,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Pydantic v2 (validate_json) Memory",
            "value": 358.4476375579834,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zopemaven@gmail.com",
            "name": "Michael R. Bernstein",
            "username": "webmaven"
          },
          "committer": {
            "email": "zopemaven@gmail.com",
            "name": "Michael R. Bernstein",
            "username": "webmaven"
          },
          "distinct": true,
          "id": "a0009e54d0b2fa4a261e9ddc94b94f88248984de",
          "message": "docs: standardize performance analysis on Linux hardware and versioned trajectory",
          "timestamp": "2026-02-23T13:48:57+02:00",
          "tree_id": "2bdb903da85a05c26a65a8b08556d54f6227579c",
          "url": "https://github.com/webmaven/lodum/commit/a0009e54d0b2fa4a261e9ddc94b94f88248984de"
        },
        "date": 1771847553939,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(windows-latest) JSON Serialization Lodum simple",
            "value": 4.330429999998842,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum complex",
            "value": 7.048029999998562,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum nested",
            "value": 20.04788000000417,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.4698399999986123,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) complex",
            "value": 2.042250000010881,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.6577500000021246,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow simple",
            "value": 6.5294399999970665,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow complex",
            "value": 14.083859999999504,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow nested",
            "value": 38.67498999998702,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum simple",
            "value": 10.927850000001627,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum complex",
            "value": 23.192679999999655,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum nested",
            "value": 65.19702999999595,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.4864699999975528,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.5953500000014174,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 6.524820000004183,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow simple",
            "value": 15.262210000003051,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow complex",
            "value": 36.90505000000144,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow nested",
            "value": 111.36629999999741,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum simple",
            "value": 3.1978799999990315,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum complex",
            "value": 5.267119999996339,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum nested",
            "value": 15.889070000002905,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.7802400000002763,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 1.3541000000032,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 2.2297900000012305,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum simple",
            "value": 8.786850000001323,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum complex",
            "value": 19.496120000007977,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum nested",
            "value": 60.528110000001334,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.4572599999960403,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 0.975020000009863,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.092479999993202,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum simple",
            "value": 6.354449999997769,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum complex",
            "value": 9.306739999988167,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum nested",
            "value": 22.325580000006084,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.221099999995204,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.665209999995113,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.542519999997467,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum simple",
            "value": 10.300810000001093,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum complex",
            "value": 21.53009000000452,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum nested",
            "value": 63.84351000000378,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.517630000000736,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.317550000003621,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.0769199999942884,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum simple",
            "value": 304.757369999993,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum complex",
            "value": 717.4997499999961,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum nested",
            "value": 1855.7438300000058,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum simple",
            "value": 382.2728400000017,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum complex",
            "value": 1028.5804700000028,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum nested",
            "value": 1000.7780399999945,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum simple",
            "value": 7.877939999991668,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum complex",
            "value": 25.838920000001053,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum nested",
            "value": 59.870219999993424,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum simple",
            "value": 27.768809999997757,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum complex",
            "value": 77.17467999999599,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.2642200000045705,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.400259999992386,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 21.106329999997797,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.564080000001013,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.2736000000047625,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 7.5424400000031255,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Time",
            "value": 38.87431759999993,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Time",
            "value": 36.65755109999998,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7154836654663086,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Pydantic v2 (validate_json) Time",
            "value": 4.224969299999998,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Pydantic v2 (validate_json) Memory",
            "value": 358.4476375579834,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zopemaven@gmail.com",
            "name": "Michael R. Bernstein",
            "username": "webmaven"
          },
          "committer": {
            "email": "zopemaven@gmail.com",
            "name": "Michael R. Bernstein",
            "username": "webmaven"
          },
          "distinct": true,
          "id": "9481b299fff79af74705509801ddd28e882dedef",
          "message": "docs: implement benchmark methodology and refactor performance nav",
          "timestamp": "2026-02-23T13:59:06+02:00",
          "tree_id": "413678a97ee9a10c7630eaba9ef67a88b6acc731",
          "url": "https://github.com/webmaven/lodum/commit/9481b299fff79af74705509801ddd28e882dedef"
        },
        "date": 1771848172067,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(windows-latest) JSON Serialization Lodum simple",
            "value": 4.780519999997068,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum complex",
            "value": 7.633500000019922,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum nested",
            "value": 21.319770000002336,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.399970000011308,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.9799699999907716,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.654269999992721,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow simple",
            "value": 6.609489999993912,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow complex",
            "value": 14.393460000007963,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow nested",
            "value": 39.618780000012066,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum simple",
            "value": 11.75216999999975,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum complex",
            "value": 25.527900000008685,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum nested",
            "value": 69.8107200000095,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.7527000000086446,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.652229999989686,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 6.680050000011306,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow simple",
            "value": 17.605220000007193,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow complex",
            "value": 39.044639999997344,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow nested",
            "value": 118.46341999996639,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum simple",
            "value": 3.261540000005425,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum complex",
            "value": 5.366779999997107,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum nested",
            "value": 17.258959999981016,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.84185000001753,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 1.4044399999988855,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 2.4022299999955976,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum simple",
            "value": 9.01488000001791,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum complex",
            "value": 20.636100000012902,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum nested",
            "value": 65.15974000000142,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.4850800000099298,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.063329999999496,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.243020000003071,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum simple",
            "value": 6.5116199999920354,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum complex",
            "value": 9.607749999986481,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum nested",
            "value": 23.252009999987422,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.181029999983821,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.6322300000033465,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.611280000002353,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum simple",
            "value": 10.620239999991554,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum complex",
            "value": 22.95341000001372,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum nested",
            "value": 69.0144299999929,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.5552900000102454,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.3519500000020344,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.10808999999972,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum simple",
            "value": 337.1811599999887,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum complex",
            "value": 784.2965900000081,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum nested",
            "value": 2079.1226500000107,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum simple",
            "value": 469.0011299999924,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum complex",
            "value": 1266.7721699999902,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum nested",
            "value": 1153.9463799999908,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum simple",
            "value": 9.631690000003346,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum complex",
            "value": 27.77553999999327,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum nested",
            "value": 67.12646999999379,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum simple",
            "value": 31.962830000020404,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum complex",
            "value": 85.07308000001785,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.497379999986606,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.611290000012104,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 22.18851000001223,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.47917999999936,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.417449999994005,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 7.873629999983223,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Time",
            "value": 39.303927099999896,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Time",
            "value": 34.895724799999925,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.71563720703125,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Pydantic v2 (validate_json) Time",
            "value": 4.44240979999995,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Pydantic v2 (validate_json) Memory",
            "value": 358.4476375579834,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zopemaven@gmail.com",
            "name": "Michael R. Bernstein",
            "username": "webmaven"
          },
          "committer": {
            "email": "zopemaven@gmail.com",
            "name": "Michael R. Bernstein",
            "username": "webmaven"
          },
          "distinct": true,
          "id": "3c71c64750fbf5a356db91728c2be570c3be5c1a",
          "message": "docs: complete performance documentation overhaul and navigation refactor",
          "timestamp": "2026-02-23T14:32:03+02:00",
          "tree_id": "89212ac1435c5fa50141ffe863e805bc9c62a3b6",
          "url": "https://github.com/webmaven/lodum/commit/3c71c64750fbf5a356db91728c2be570c3be5c1a"
        },
        "date": 1771850136650,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(windows-latest) JSON Serialization Lodum simple",
            "value": 4.553299999997762,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum complex",
            "value": 7.6741199999901255,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum nested",
            "value": 21.443359999994982,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.4488300000095933,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) complex",
            "value": 2.030549999994946,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.7107900000080463,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow simple",
            "value": 6.951620000006642,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow complex",
            "value": 14.935469999988982,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow nested",
            "value": 39.545530000015106,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum simple",
            "value": 11.414170000011836,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum complex",
            "value": 24.807659999993348,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum nested",
            "value": 71.11407999999528,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.554950000002009,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.686499999992975,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 8.471900000006372,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow simple",
            "value": 16.947490000001153,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow complex",
            "value": 38.96523000000229,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow nested",
            "value": 127.4287799999911,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum simple",
            "value": 3.329880000006824,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum complex",
            "value": 5.677050000002737,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum nested",
            "value": 17.647610000000213,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.8289999999931297,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 1.4461900000071637,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 2.414350000003651,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum simple",
            "value": 9.218029999999544,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum complex",
            "value": 21.727439999995113,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum nested",
            "value": 67.88985000000594,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.47709000000395463,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.0015199999998003,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.1984500000030494,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum simple",
            "value": 6.618429999997488,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum complex",
            "value": 9.832729999993717,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum nested",
            "value": 23.465709999999262,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.270090000011351,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.728360000006205,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.584860000007666,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum simple",
            "value": 11.51754999999639,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum complex",
            "value": 23.46489999999335,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum nested",
            "value": 70.55873999998994,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.6059299999994892,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.4436900000011974,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.132510000005141,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum simple",
            "value": 339.2247900000086,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum complex",
            "value": 798.7050500000009,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum nested",
            "value": 2042.3014199999955,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum simple",
            "value": 439.4258799999932,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum complex",
            "value": 1151.7065800000069,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum nested",
            "value": 1123.8592799999935,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum simple",
            "value": 8.372100000002547,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum complex",
            "value": 28.32001999999534,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum nested",
            "value": 63.469160000011016,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum simple",
            "value": 29.464560000002393,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum complex",
            "value": 82.02804999999671,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.466640000003963,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.723499999998239,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 22.340679999996382,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.5182000000020253,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.440710000000081,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 7.696359999999913,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Time",
            "value": 38.04473180000002,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Time",
            "value": 34.7841962,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7155847549438477,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Pydantic v2 (validate_json) Time",
            "value": 4.4825009999999565,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Pydantic v2 (validate_json) Memory",
            "value": 358.4476375579834,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zopemaven@gmail.com",
            "name": "Michael R. Bernstein",
            "username": "webmaven"
          },
          "committer": {
            "email": "zopemaven@gmail.com",
            "name": "Michael R. Bernstein",
            "username": "webmaven"
          },
          "distinct": true,
          "id": "80bcce39a19a7204bfa8477e588775a4fdf7b2db",
          "message": "style: reformat benchmarks to satisfy ruff",
          "timestamp": "2026-02-23T15:39:15+02:00",
          "tree_id": "6e74a1bd4a936713102f72ae3470bce1b0e63139",
          "url": "https://github.com/webmaven/lodum/commit/80bcce39a19a7204bfa8477e588775a4fdf7b2db"
        },
        "date": 1771854166951,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(windows-latest) JSON Serialization Lodum simple",
            "value": 4.660409999996773,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum complex",
            "value": 7.523430000003373,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum nested",
            "value": 20.938079999999104,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.4286900000001879,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) complex",
            "value": 2.06110000000308,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.819140000001653,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow simple",
            "value": 7.16589999999826,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow complex",
            "value": 14.476170000003208,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow nested",
            "value": 40.39148999999611,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum simple",
            "value": 10.771159999998758,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum complex",
            "value": 20.251369999996882,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum nested",
            "value": 62.31492999999659,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.6249299999969935,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.7036799999990535,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 6.971550000002935,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow simple",
            "value": 18.19039000000373,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow complex",
            "value": 35.76988999999742,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow nested",
            "value": 108.61431999999809,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum simple",
            "value": 3.288729999999873,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum complex",
            "value": 5.436009999996827,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum nested",
            "value": 16.589720000001762,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.8240799999981618,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 1.3813899999973955,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 2.3483799999979738,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum simple",
            "value": 9.078629999999066,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum complex",
            "value": 18.262869999998088,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum nested",
            "value": 59.52525999999807,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.47864999999376323,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 0.9677699999997458,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.1939099999997325,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum simple",
            "value": 6.679180000003271,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum complex",
            "value": 9.67938000000288,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum nested",
            "value": 22.59798000000046,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.184349999999881,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.697190000003616,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.41481999999587,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum simple",
            "value": 10.386859999997,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum complex",
            "value": 19.421710000003145,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum nested",
            "value": 61.931640000003085,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.6040100000026314,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.3662799999982553,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.178970000000959,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum simple",
            "value": 280.5342399999972,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum complex",
            "value": 667.614770000003,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum nested",
            "value": 1691.6301900000037,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum simple",
            "value": 379.8458700000026,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum complex",
            "value": 975.1525000000015,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum nested",
            "value": 989.3366200000003,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum simple",
            "value": 8.275570000006383,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum complex",
            "value": 24.58528999999885,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum nested",
            "value": 55.977809999996,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum simple",
            "value": 23.129040000003442,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum complex",
            "value": 61.601789999997436,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.555709999999635,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.6812099999992824,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 21.337910000005422,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.5905999999954474,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.353340000005801,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 7.828269999998838,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Time",
            "value": 36.84680589999999,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Time",
            "value": 33.124052500000005,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7155342102050781,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Pydantic v2 (validate_json) Time",
            "value": 4.75779940000001,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Pydantic v2 (validate_json) Memory",
            "value": 358.4476375579834,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zopemaven@gmail.com",
            "name": "Michael R. Bernstein",
            "username": "webmaven"
          },
          "committer": {
            "email": "zopemaven@gmail.com",
            "name": "Michael R. Bernstein",
            "username": "webmaven"
          },
          "distinct": true,
          "id": "fd67102a092bb3278780f6b65243286efa535380",
          "message": "perf: optimize benchmarks by using stored competitor baselines\n\n- Generated benchmarks/competitor_baselines.json from historical data.\n- Updated benchmarks/run.py to optionally skip competitor runs using --use-baselines.\n- Enabled baseline usage in CI workflows to reduce run time and ensure stability.",
          "timestamp": "2026-02-23T15:56:45+02:00",
          "tree_id": "3b105adc71672cb8d70eaa3b0796b8b9de4f2c7f",
          "url": "https://github.com/webmaven/lodum/commit/fd67102a092bb3278780f6b65243286efa535380"
        },
        "date": 1771855224354,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(windows-latest) JSON Serialization Lodum simple",
            "value": 4.516190000003917,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum complex",
            "value": 7.523340000005874,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum nested",
            "value": 21.0682800000086,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.423879861111664,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.9072649055562607,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.5567207111111228,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow simple",
            "value": 7.2870557833333685,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow complex",
            "value": 15.705288399999873,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow nested",
            "value": 42.84389975555657,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum simple",
            "value": 12.032050000004801,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum complex",
            "value": 24.859190000000808,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum nested",
            "value": 72.17463000000066,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.469039444443412,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.3911850444443576,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 6.360317577780192,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow simple",
            "value": 17.80687678888968,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow complex",
            "value": 40.72305930000044,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow nested",
            "value": 127.04332092777398,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum simple",
            "value": 3.3011600000065755,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum complex",
            "value": 5.358300000000327,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum nested",
            "value": 16.745129999992514,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.711815029411323,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 1.163070329413074,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 1.9935557235300356,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum simple",
            "value": 9.276150000005146,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum complex",
            "value": 22.065060000005587,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum nested",
            "value": 67.06205000000409,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.48290518823522427,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.0041882000007178,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.1774501764719605,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum simple",
            "value": 6.7971,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum complex",
            "value": 9.763729999997395,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum nested",
            "value": 23.198430000007875,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.186143758823679,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.562398770588489,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.424710111763373,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum simple",
            "value": 10.783379999998033,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum complex",
            "value": 23.509980000005726,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum nested",
            "value": 69.91614999998887,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.6832919882363024,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.4755538647070807,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.27499937058893,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum simple",
            "value": 342.18333999999686,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum complex",
            "value": 793.3631500000047,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum nested",
            "value": 2032.3519599999997,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum simple",
            "value": 444.5496099999957,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum complex",
            "value": 1156.0244000000012,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum nested",
            "value": 1134.8716699999954,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum simple",
            "value": 8.605040000003328,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum complex",
            "value": 29.177609999999277,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum nested",
            "value": 64.43631999999866,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum simple",
            "value": 29.596649999996316,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum complex",
            "value": 82.51857999999288,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.533559999993031,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.6267999999979565,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 22.190230000001065,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.537690000001703,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.366189999996095,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 7.808679999993728,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Time",
            "value": 39.30844130000003,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Time",
            "value": 36.84497150000004,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7155847549438477,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Pydantic v2 (validate_json) Time",
            "value": 4.500234000000091,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Pydantic v2 (validate_json) Memory",
            "value": 358.4476375579834,
            "unit": "MB"
          }
        ]
      }
    ]
  }
}