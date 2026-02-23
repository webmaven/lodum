window.BENCHMARK_DATA = {
  "lastUpdate": 1771842802191,
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
      }
    ]
  }
}