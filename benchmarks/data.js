window.BENCHMARK_DATA = {
  "lastUpdate": 1771842760153,
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
      }
    ]
  }
}