window.BENCHMARK_DATA = {
  "lastUpdate": 1771839030598,
  "repoUrl": "https://github.com/webmaven/lodum",
  "entries": {
    "Lodum Performance Index - ubuntu-latest": [
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
          "id": "81234e50d674fb999af7f3dff0afad0b604f2c19",
          "message": "docs: improve performance dashboard integration and add timestamp to footer\n\n- Moved benchmark data to root 'benchmarks/' on gh-pages to avoid versioning conflicts.\n- Updated PERFORMANCE.md link to the dashboard.\n- Enabled mkdocs-git-revision-date-localized-plugin for generation timestamps.\n- Updated CI/CD workflows to include the new plugin.",
          "timestamp": "2026-02-23T08:57:06+02:00",
          "tree_id": "d6e4cccf60b4ed8d22d7396c70246e4bcacc1b2c",
          "url": "https://github.com/webmaven/lodum/commit/81234e50d674fb999af7f3dff0afad0b604f2c19"
        },
        "date": 1771830002879,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum simple",
            "value": 4.9006935999983625,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum complex",
            "value": 7.9021515000000875,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum nested",
            "value": 21.68584740000057,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.311013600000166,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.8419658999995647,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.4836893999994345,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow simple",
            "value": 7.622008999999963,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow complex",
            "value": 16.85745979999922,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow nested",
            "value": 46.123878200000235,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum simple",
            "value": 12.47156729999972,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum complex",
            "value": 26.351480700000707,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum nested",
            "value": 74.44273090000024,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.53505239999987,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.3294643999996367,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 5.371625200000096,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow simple",
            "value": 20.22356570000099,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow complex",
            "value": 43.962801000000695,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow nested",
            "value": 138.03858690000013,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum simple",
            "value": 3.1146642000003055,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum complex",
            "value": 5.186427699999996,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum nested",
            "value": 16.90701919999995,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.6280764999999633,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 0.9679155999997135,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 1.6581831999992858,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum simple",
            "value": 10.864919299999798,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum complex",
            "value": 22.71836769999922,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum nested",
            "value": 67.81249600000123,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.5099340999990432,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.0348302999986458,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.2537429999992753,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum simple",
            "value": 6.726758099999586,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum complex",
            "value": 9.872948099999945,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum nested",
            "value": 24.029791099999898,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.053981300000942,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.376995600000356,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.170834600001342,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum simple",
            "value": 12.18657019999938,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum complex",
            "value": 25.794149600000083,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum nested",
            "value": 73.61189589999881,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.7645618999999613,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.576227499999817,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.401918000000649,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum simple",
            "value": 365.9474724000006,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum complex",
            "value": 850.7948325000015,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum nested",
            "value": 2149.2997668000016,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum simple",
            "value": 464.05310889999924,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum complex",
            "value": 1225.8376956999982,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum nested",
            "value": 1187.5701816000003,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum simple",
            "value": 8.768975600000317,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum complex",
            "value": 27.684769200001824,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum nested",
            "value": 63.373117699998716,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum simple",
            "value": 31.27581890000215,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum complex",
            "value": 85.26110959999897,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.501849800001878,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.626133000000323,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 23.157189200000516,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.7200308999999265,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.5178786999997556,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 8.011852499998895,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Time",
            "value": 33.602012199,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Time",
            "value": 31.244652317000003,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7129364013671875,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Pydantic v2 (validate_json) Time",
            "value": 3.5706756159999884,
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
          "id": "81234e50d674fb999af7f3dff0afad0b604f2c19",
          "message": "docs: improve performance dashboard integration and add timestamp to footer\n\n- Moved benchmark data to root 'benchmarks/' on gh-pages to avoid versioning conflicts.\n- Updated PERFORMANCE.md link to the dashboard.\n- Enabled mkdocs-git-revision-date-localized-plugin for generation timestamps.\n- Updated CI/CD workflows to include the new plugin.",
          "timestamp": "2026-02-23T06:56:51Z",
          "url": "https://github.com/webmaven/lodum/commit/81234e50d674fb999af7f3dff0afad0b604f2c19"
        },
        "date": 1771830163658,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum simple",
            "value": 4.8670157000003655,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum complex",
            "value": 7.833714200000941,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum nested",
            "value": 21.603558900000053,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.3626881000000424,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.7924174000000903,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.3131335000000206,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow simple",
            "value": 7.482343100000577,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow complex",
            "value": 16.231327200000578,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow nested",
            "value": 44.69750820000016,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum simple",
            "value": 12.199786499999732,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum complex",
            "value": 25.434292599999964,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum nested",
            "value": 72.87341540000014,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.4685675999999148,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.220939999999416,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 5.309397900001045,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow simple",
            "value": 18.628851600000473,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow complex",
            "value": 44.46034480000094,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow nested",
            "value": 135.85081290000005,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum simple",
            "value": 3.08354200000025,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum complex",
            "value": 5.090684499999298,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum nested",
            "value": 16.710965700001168,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.6247668999989742,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 0.955068800000447,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 1.6591024000000232,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum simple",
            "value": 10.229091100001142,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum complex",
            "value": 22.199108399999545,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum nested",
            "value": 69.20820520000106,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.5137043999994262,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.016610599999268,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.2851375999998425,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum simple",
            "value": 6.403379099999995,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum complex",
            "value": 9.496845400000353,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum nested",
            "value": 24.415545899999813,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.422334299999875,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.318248500000067,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.192013400000775,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum simple",
            "value": 11.895758700001124,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum complex",
            "value": 24.72898019999974,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum nested",
            "value": 73.06461740000003,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.7940466000005983,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.5486639000000366,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.464866700000414,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum simple",
            "value": 363.0202970999996,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum complex",
            "value": 838.3717664000002,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum nested",
            "value": 2116.656349399999,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum simple",
            "value": 459.2119024000013,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum complex",
            "value": 1207.534318099998,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum nested",
            "value": 1179.6562127,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum simple",
            "value": 8.93414170000284,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum complex",
            "value": 27.23778520000053,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum nested",
            "value": 63.71653249999838,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum simple",
            "value": 30.759904500000346,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum complex",
            "value": 83.98120949999992,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.531972699999187,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.67904479999919,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 22.89050770000074,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.764596300000278,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.563655600000516,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 7.950527499998828,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Time",
            "value": 33.538364386,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Time",
            "value": 30.86869363400001,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7129364013671875,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Pydantic v2 (validate_json) Time",
            "value": 3.778150815999993,
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
          "id": "37ec2cc79499f790b2ae028f5a8f6e91808c84e8",
          "message": "docs: enable last updated timestamp in footer",
          "timestamp": "2026-02-23T09:15:36+02:00",
          "tree_id": "c5381518476421c6c38dcee58da9d5af0cdf2a3b",
          "url": "https://github.com/webmaven/lodum/commit/37ec2cc79499f790b2ae028f5a8f6e91808c84e8"
        },
        "date": 1771831109477,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum simple",
            "value": 5.025434499999903,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum complex",
            "value": 8.131630199999051,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum nested",
            "value": 22.16397699999959,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.3657681999994509,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.8520385000009298,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.3127036999992754,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow simple",
            "value": 7.562357300000855,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow complex",
            "value": 16.83595060000087,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow nested",
            "value": 46.54449380000116,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum simple",
            "value": 11.999575599999446,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum complex",
            "value": 25.503006699999986,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum nested",
            "value": 72.31527160000084,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.3616405000007603,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.1593943000006277,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 5.259466500000798,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow simple",
            "value": 19.393281700000387,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow complex",
            "value": 43.15073309999988,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow nested",
            "value": 132.28756860000033,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum simple",
            "value": 3.209157799999929,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum complex",
            "value": 5.250846599999903,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum nested",
            "value": 16.9104573999995,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.6199597999994921,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 0.9551220000012961,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 1.6362162999989494,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum simple",
            "value": 10.01900310000039,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum complex",
            "value": 21.79454650000139,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum nested",
            "value": 67.51612580000028,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.4994469000003221,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.017001399998918,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.231829500000515,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum simple",
            "value": 6.707478799999933,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum complex",
            "value": 9.866065399999968,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum nested",
            "value": 24.178196799999796,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.118964399999925,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.3821378000002085,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.445619200000465,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum simple",
            "value": 11.583150599999925,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum complex",
            "value": 24.713077800000605,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum nested",
            "value": 70.75623439999887,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.7868489999997905,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.5781349999995484,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.394937799999354,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum simple",
            "value": 359.0039051000005,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum complex",
            "value": 824.5682642000005,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum nested",
            "value": 2133.6176471999993,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum simple",
            "value": 459.4192281000005,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum complex",
            "value": 1221.914497600001,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum nested",
            "value": 1196.5616685,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum simple",
            "value": 8.925536000000989,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum complex",
            "value": 27.69214030000029,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum nested",
            "value": 63.71211149999993,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum simple",
            "value": 30.288800299999252,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum complex",
            "value": 84.22681669999861,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.637251900000194,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.84039139999868,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 23.54231779999907,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.689747299999624,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.399445300001048,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 7.9567432999994026,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Time",
            "value": 34.081258425,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Time",
            "value": 30.932001240000005,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7128829956054688,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Pydantic v2 (validate_json) Time",
            "value": 3.765404397999987,
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
          "id": "37ec2cc79499f790b2ae028f5a8f6e91808c84e8",
          "message": "docs: enable last updated timestamp in footer",
          "timestamp": "2026-02-23T07:15:36Z",
          "url": "https://github.com/webmaven/lodum/commit/37ec2cc79499f790b2ae028f5a8f6e91808c84e8"
        },
        "date": 1771831121429,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum simple",
            "value": 5.495106100000413,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum complex",
            "value": 9.040488099999777,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum nested",
            "value": 21.66463720000067,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.3007811999997898,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.7905960000007326,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.3111070999986225,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow simple",
            "value": 7.666667899999169,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow complex",
            "value": 16.564523999999636,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow nested",
            "value": 44.657164000000904,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum simple",
            "value": 12.030574599999255,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum complex",
            "value": 25.444603100000762,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum nested",
            "value": 73.273996799999,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.390890199999717,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.2431684999993706,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 5.19590569999977,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow simple",
            "value": 19.092737299999385,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow complex",
            "value": 43.337170999999586,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow nested",
            "value": 135.19314559999884,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum simple",
            "value": 3.0911517999996363,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum complex",
            "value": 5.160378600000115,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum nested",
            "value": 16.75422810000029,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.6230234999989648,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 0.9675492999996038,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 1.647835500000383,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum simple",
            "value": 10.112715800001126,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum complex",
            "value": 22.265866099998988,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum nested",
            "value": 68.4544877999997,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.5040930999996363,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.0488633999997887,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.2503428999989694,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum simple",
            "value": 6.464223199999708,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum complex",
            "value": 9.746498900000233,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum nested",
            "value": 23.73708069999907,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.056912200000795,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.434744899999799,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.10753869999985,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum simple",
            "value": 11.73654099999979,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum complex",
            "value": 24.555604199999692,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum nested",
            "value": 72.48434290000105,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.7677881000004447,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.5773490999995374,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.455694800000742,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum simple",
            "value": 364.2305917999991,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum complex",
            "value": 846.9119361000012,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum nested",
            "value": 2148.4301759000004,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum simple",
            "value": 454.45908909999986,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum complex",
            "value": 1211.9716114999987,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum nested",
            "value": 1188.0539060000003,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum simple",
            "value": 8.88773350000065,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum complex",
            "value": 27.359296100001984,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum nested",
            "value": 64.20202049999943,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum simple",
            "value": 30.667383899999834,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum complex",
            "value": 85.43676120000043,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.682653400000447,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.900212100001113,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 22.95047419999605,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.7095116999992683,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.510863799998788,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 7.976257400001431,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Time",
            "value": 34.03541526999999,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Time",
            "value": 30.590299904999995,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7127799987792969,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Pydantic v2 (validate_json) Time",
            "value": 3.583995165999994,
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
          "id": "a9bdf066e9cd9e25b72566001faeffd7a3a0791a",
          "message": "fix: ensure benchmarks metadata directory exists and improve workflow robustness",
          "timestamp": "2026-02-23T09:59:17+02:00",
          "tree_id": "b22646de224fd68476f1c14cf050281f84f205f6",
          "url": "https://github.com/webmaven/lodum/commit/a9bdf066e9cd9e25b72566001faeffd7a3a0791a"
        },
        "date": 1771833730839,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum simple",
            "value": 4.847885400000251,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum complex",
            "value": 7.869507000000908,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum nested",
            "value": 21.58964970000028,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.3535666999999307,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.8141348999996865,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.37199720000001,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow simple",
            "value": 7.5147063999999375,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow complex",
            "value": 16.50935930000017,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow nested",
            "value": 45.75353839999963,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum simple",
            "value": 12.2908185,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum complex",
            "value": 26.022286300000985,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum nested",
            "value": 73.4621385000004,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.388931799999682,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.1752607999999896,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 5.23411890000105,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow simple",
            "value": 18.88987710000052,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow complex",
            "value": 45.046409200001136,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow nested",
            "value": 138.61458909999982,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum simple",
            "value": 3.1423952999993787,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum complex",
            "value": 5.128987499999482,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum nested",
            "value": 16.841317199999395,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.6264201999989893,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 0.9591065000002175,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 1.6433888999998203,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum simple",
            "value": 10.129925700000086,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum complex",
            "value": 22.32898480000003,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum nested",
            "value": 69.98712880000042,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.5019968999995683,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.0455722999992645,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.2373935999993932,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum simple",
            "value": 6.63571119999915,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum complex",
            "value": 9.659639300001288,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum nested",
            "value": 23.749541499999793,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.254916399999331,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.565028100000546,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.35619609999938,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum simple",
            "value": 11.767780299999941,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum complex",
            "value": 24.95320800000016,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum nested",
            "value": 72.4975827999991,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.7792668000012668,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.592615300000034,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.446766000000935,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum simple",
            "value": 364.15155460000005,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum complex",
            "value": 837.9291042999995,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum nested",
            "value": 2131.687239600001,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum simple",
            "value": 455.51369939999944,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum complex",
            "value": 1211.1699845000003,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum nested",
            "value": 1173.0238178000009,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum simple",
            "value": 8.757575200000645,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum complex",
            "value": 27.587503799999524,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum nested",
            "value": 63.059455599997705,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum simple",
            "value": 30.934308799999144,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum complex",
            "value": 83.7743783999997,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.540830699998821,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.625121999999806,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 23.00272519999993,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.6331988000000592,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.4742634000030534,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 7.970394799997393,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Time",
            "value": 34.05124420599999,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Time",
            "value": 30.342832402000028,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7129364013671875,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Pydantic v2 (validate_json) Time",
            "value": 3.586357948,
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
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "github-actions[bot]@users.noreply.github.com"
          },
          "id": "49ba79e289d0697a05526177588ff55550b33eb7",
          "message": "chore: update hardware signature for ubuntu-latest",
          "timestamp": "2026-02-23T08:00:08Z",
          "url": "https://github.com/webmaven/lodum/commit/49ba79e289d0697a05526177588ff55550b33eb7"
        },
        "date": 1771833744080,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum simple",
            "value": 5.107252100000181,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum complex",
            "value": 8.392390500000602,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum nested",
            "value": 25.905712300000516,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.3556222000005391,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.882787899999272,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.352724799999862,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow simple",
            "value": 7.6157281000007515,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow complex",
            "value": 16.112903100000153,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow nested",
            "value": 45.12554630000025,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum simple",
            "value": 11.989827099999673,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum complex",
            "value": 22.24774180000111,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum nested",
            "value": 68.41447580000022,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.4506578999998965,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.3273235000011994,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 5.358195899999885,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow simple",
            "value": 17.82941699999938,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow complex",
            "value": 38.50661899999892,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow nested",
            "value": 122.29651259999983,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum simple",
            "value": 3.2152302000000077,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum complex",
            "value": 5.428696400000632,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum nested",
            "value": 17.019418300000666,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.5875100999986671,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 0.9594377000006205,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 1.6771152999993433,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum simple",
            "value": 9.868779699999664,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum complex",
            "value": 19.735135900000245,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum nested",
            "value": 65.29519090000022,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.41861999999994737,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 0.9188133999998627,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 1.9477745000010316,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum simple",
            "value": 6.570463300000995,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum complex",
            "value": 9.542016099999273,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum nested",
            "value": 23.374072900001153,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.093772599998857,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.371737800000176,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.1025498999999,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum simple",
            "value": 11.447713100000101,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum complex",
            "value": 21.55852580000115,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum nested",
            "value": 68.36517409999985,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.7707815000001403,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.499430400001046,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.259916599999514,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum simple",
            "value": 299.1513617999999,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum complex",
            "value": 706.9976617999984,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum nested",
            "value": 1780.2689880000003,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum simple",
            "value": 414.8640803999996,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum complex",
            "value": 1078.5784736000026,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum nested",
            "value": 1066.5018396999997,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum simple",
            "value": 8.911603199999263,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum complex",
            "value": 25.92407230000191,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum nested",
            "value": 57.06858649999873,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum simple",
            "value": 24.44861209999658,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum complex",
            "value": 63.661390700001164,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.745823000000371,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.7666102000004,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 22.984600200000216,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.812505799999144,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.689979500000163,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 8.09095989999804,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Time",
            "value": 33.969308815999995,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Time",
            "value": 29.398777488000007,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7128829956054688,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Pydantic v2 (validate_json) Time",
            "value": 3.929805866999999,
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
          "id": "e56b0efb4465c89a7b5359581622836221d8d4b3",
          "message": "docs: add trailing slash to dashboard link",
          "timestamp": "2026-02-23T08:08:32Z",
          "url": "https://github.com/webmaven/lodum/commit/e56b0efb4465c89a7b5359581622836221d8d4b3"
        },
        "date": 1771834209124,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum simple",
            "value": 5.136624599999351,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum complex",
            "value": 8.085679199999163,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum nested",
            "value": 21.556832499999246,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.3554913000000113,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.8644859999994878,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.3826551999993626,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow simple",
            "value": 7.297772000000435,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow complex",
            "value": 15.985211200000293,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow nested",
            "value": 42.89578369999987,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum simple",
            "value": 11.940872000000269,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum complex",
            "value": 22.274110399998648,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum nested",
            "value": 69.60416800000004,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.4213040000001342,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.33473209999957,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 5.369869500000846,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow simple",
            "value": 17.64620279999889,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow complex",
            "value": 38.236568499998924,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow nested",
            "value": 123.64992759999964,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum simple",
            "value": 3.192054699999858,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum complex",
            "value": 5.2059272000001044,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum nested",
            "value": 17.034464200000343,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.587447799999552,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 0.9521366999997838,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 1.7483151000000419,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum simple",
            "value": 10.211062600000531,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum complex",
            "value": 23.05305550000014,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum nested",
            "value": 67.92740920000071,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.42225259999995046,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 0.9256671999999355,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 1.9586523999997496,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum simple",
            "value": 6.693832599999183,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum complex",
            "value": 9.766254300000554,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum nested",
            "value": 23.823248099999716,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.255233599999286,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.561091999999945,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.294493900000077,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum simple",
            "value": 11.755229699998893,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum complex",
            "value": 23.342994099999714,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum nested",
            "value": 67.85759030000023,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.735046299999965,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.50286569999858,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.290962099999973,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum simple",
            "value": 305.2066627999999,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum complex",
            "value": 720.8141474999977,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum nested",
            "value": 1834.2824663000001,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum simple",
            "value": 427.05205589999906,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum complex",
            "value": 1112.5937907999996,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum nested",
            "value": 1104.6012635999987,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum simple",
            "value": 9.017823099999589,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum complex",
            "value": 26.52380629999982,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum nested",
            "value": 58.62164920000197,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum simple",
            "value": 25.440664099998855,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum complex",
            "value": 66.39157789999928,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.813952000002075,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.981177500000513,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 23.679034200000615,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.913518199999544,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.724262299998827,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 8.168942900000786,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Time",
            "value": 33.76645526,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Time",
            "value": 29.465443824999994,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7129364013671875,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Pydantic v2 (validate_json) Time",
            "value": 4.072230787999985,
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
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "github-actions[bot]@users.noreply.github.com"
          },
          "id": "1fcadd403b44ff5a339bd99cd9f36bba0cb39065",
          "message": "chore: update hardware signature for ubuntu-latest",
          "timestamp": "2026-02-23T08:37:59Z",
          "url": "https://github.com/webmaven/lodum/commit/1fcadd403b44ff5a339bd99cd9f36bba0cb39065"
        },
        "date": 1771836022864,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum simple",
            "value": 4.853679200000727,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum complex",
            "value": 9.701020000000682,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum nested",
            "value": 21.58009470000053,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.3012617000001114,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.8186769999992691,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.303945099999339,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow simple",
            "value": 7.52667720000062,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow complex",
            "value": 16.567118500000788,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow nested",
            "value": 46.39196250000026,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum simple",
            "value": 12.451161199999916,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum complex",
            "value": 26.67043929999977,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum nested",
            "value": 76.61300359999998,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.538036899999895,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.4138255000003994,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 5.397191800000201,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow simple",
            "value": 18.715955300000076,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow complex",
            "value": 43.573108799999716,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow nested",
            "value": 135.74114730000062,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum simple",
            "value": 3.0627710000004527,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum complex",
            "value": 5.096801599999878,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum nested",
            "value": 16.655964600001028,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.6398475999993991,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 0.98191270000072,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 1.6669409999991558,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum simple",
            "value": 10.169805900000028,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum complex",
            "value": 21.926525400000685,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum nested",
            "value": 68.9230086000002,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.5174033999999494,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.042158300001006,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.3073505999995803,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum simple",
            "value": 6.534149200001593,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum complex",
            "value": 9.674837400000058,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum nested",
            "value": 23.733666900000827,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.1090580000009425,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.363620200001407,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.18688550000104,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum simple",
            "value": 11.785534100000206,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum complex",
            "value": 24.223403599999216,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum nested",
            "value": 72.46573700000027,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.7605716999995025,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.6045212000006757,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.469704899999272,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum simple",
            "value": 359.8358625000003,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum complex",
            "value": 828.6191059000004,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum nested",
            "value": 2117.406334900002,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum simple",
            "value": 457.0422700000009,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum complex",
            "value": 1213.0150864000016,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum nested",
            "value": 1177.055040300003,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum simple",
            "value": 8.942441799999301,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum complex",
            "value": 27.11239460000172,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum nested",
            "value": 63.51577800000001,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum simple",
            "value": 30.431942899998887,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum complex",
            "value": 83.68428550000004,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.519001400001343,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.604098400001135,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 23.230376999998725,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.6748920000007956,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.5419721999991225,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 7.905363099999364,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Time",
            "value": 33.142654406999995,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Time",
            "value": 29.558812173999996,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.712885856628418,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Pydantic v2 (validate_json) Time",
            "value": 3.6064395070000046,
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
          "id": "b6ad19948d8c2e2aa98a4fe0862ba804ce422a59",
          "message": "fix: resolve syntax error in get_hw_info.py",
          "timestamp": "2026-02-23T08:53:01Z",
          "url": "https://github.com/webmaven/lodum/commit/b6ad19948d8c2e2aa98a4fe0862ba804ce422a59"
        },
        "date": 1771836824158,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.4582955000008724,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.7938256000007868,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.47523900000013,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow simple",
            "value": 7.659207899999387,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow complex",
            "value": 16.998011599999074,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow nested",
            "value": 44.670615699999416,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.4645438000009392,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.2840030000004674,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 5.386508899999853,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow simple",
            "value": 17.776792000000086,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow complex",
            "value": 40.03747609999948,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow nested",
            "value": 122.8660431999991,
            "unit": "us"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "github-actions[bot]@users.noreply.github.com"
          },
          "id": "fdee763c5e0a08f71ba248f6bff302160c991d2f",
          "message": "chore: update hardware signature for windows-latest",
          "timestamp": "2026-02-23T08:54:19Z",
          "url": "https://github.com/webmaven/lodum/commit/fdee763c5e0a08f71ba248f6bff302160c991d2f"
        },
        "date": 1771836900378,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum simple",
            "value": 4.795301299995458,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum complex",
            "value": 7.85169929999654,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum nested",
            "value": 21.71872480000161,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.3507287999999562,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.8041909999993777,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.340952199997105,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow simple",
            "value": 7.393329900000367,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow complex",
            "value": 16.20196119999946,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow nested",
            "value": 44.08644819999665,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum simple",
            "value": 12.161440799999923,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum complex",
            "value": 25.82695589999844,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum nested",
            "value": 72.87188789999846,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.4035473999967962,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.2048165000001063,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 5.209731099998294,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow simple",
            "value": 18.655439500003013,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow complex",
            "value": 43.90475849999973,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow nested",
            "value": 137.69684359999985,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum simple",
            "value": 3.0986333999976523,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum complex",
            "value": 5.135680700001899,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum nested",
            "value": 16.728453600006787,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.6327993999974524,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 0.9761358999980985,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 1.7080523000004177,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum simple",
            "value": 10.163023800004112,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum complex",
            "value": 22.06347199999925,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum nested",
            "value": 68.02009559999931,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.496571700003301,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.02114100000108,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.2227458999992677,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum simple",
            "value": 6.467672999997376,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum complex",
            "value": 9.50164509999638,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum nested",
            "value": 23.556451600003925,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.059500900001467,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.341278899996382,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.186944599992785,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum simple",
            "value": 11.997567699998513,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum complex",
            "value": 25.252844199999913,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum nested",
            "value": 73.47322020000036,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.791550399997277,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.5729304999998703,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.441124899997817,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum simple",
            "value": 365.7985152000009,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum complex",
            "value": 845.7292074999941,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum nested",
            "value": 2152.4999121000037,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum simple",
            "value": 460.0787197000045,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum complex",
            "value": 1196.9129778999986,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum nested",
            "value": 1168.4446383000022,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum simple",
            "value": 8.797833100007324,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum complex",
            "value": 27.515494100001092,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum nested",
            "value": 62.800248600001396,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum simple",
            "value": 30.53202599999736,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum complex",
            "value": 84.35796050000306,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.672836400001756,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.8297015999974064,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 23.0436960999981,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.707323599999768,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.427274700000794,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 7.909946699999182,
            "unit": "us"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "github-actions[bot]@users.noreply.github.com"
          },
          "id": "fdee763c5e0a08f71ba248f6bff302160c991d2f",
          "message": "chore: update hardware signature for windows-latest",
          "timestamp": "2026-02-23T08:54:19Z",
          "url": "https://github.com/webmaven/lodum/commit/fdee763c5e0a08f71ba248f6bff302160c991d2f"
        },
        "date": 1771836961207,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum simple",
            "value": 4.9247072,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum complex",
            "value": 8.092245400000309,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum nested",
            "value": 22.114178099999293,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.3081265999993263,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.7483826000002978,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.318888599999781,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow simple",
            "value": 7.582300600000025,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow complex",
            "value": 16.49850430000015,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow nested",
            "value": 44.72076480000169,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum simple",
            "value": 12.028102599999357,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum complex",
            "value": 25.07533059999929,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum nested",
            "value": 72.88926969999991,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.3777656000002025,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.162927799998471,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 5.160739200000108,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow simple",
            "value": 19.83097580000006,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow complex",
            "value": 43.990432500000054,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow nested",
            "value": 133.77582569999973,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum simple",
            "value": 3.1435504000000947,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum complex",
            "value": 5.243037299999287,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum nested",
            "value": 17.08506239999963,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.624493700000528,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 0.9518112999998607,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 1.6401702000003127,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum simple",
            "value": 10.040259800000229,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum complex",
            "value": 22.22689400000064,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum nested",
            "value": 68.80291219999961,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.5024549999994576,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.0267551000005426,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.239456200000234,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum simple",
            "value": 6.527158299999769,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum complex",
            "value": 9.672486699999183,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum nested",
            "value": 23.89781430000042,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.100940100001793,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.5377318000005005,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.298049300000088,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum simple",
            "value": 11.614044999999606,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum complex",
            "value": 25.049607600001167,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum nested",
            "value": 72.43462489999999,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.728699299999903,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.5352155999989634,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.399444599999924,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum simple",
            "value": 357.80677699999967,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum complex",
            "value": 824.5495576000011,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum nested",
            "value": 2100.9125861000016,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum simple",
            "value": 454.55481859999907,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum complex",
            "value": 1198.4909644000013,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum nested",
            "value": 1158.672101500001,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum simple",
            "value": 8.755208600001652,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum complex",
            "value": 26.811334300001022,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum nested",
            "value": 62.835356600000125,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum simple",
            "value": 30.218365300000016,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum complex",
            "value": 82.75410570000048,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.588774600000534,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.677481799998475,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 22.930660100001887,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.7401959999996848,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.439478800000529,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 8.008414100000039,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Time",
            "value": 33.458068654,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Time",
            "value": 30.155786491000015,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7129364013671875,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Pydantic v2 (validate_json) Time",
            "value": 3.5947656059999815,
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
          "id": "b6ad19948d8c2e2aa98a4fe0862ba804ce422a59",
          "message": "fix: resolve syntax error in get_hw_info.py",
          "timestamp": "2026-02-23T10:53:01+02:00",
          "tree_id": "238f07d7015075070babe5245d67463929494fbe",
          "url": "https://github.com/webmaven/lodum/commit/b6ad19948d8c2e2aa98a4fe0862ba804ce422a59"
        },
        "date": 1771836960577,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum simple",
            "value": 4.910785500004522,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum complex",
            "value": 7.908919799999126,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum nested",
            "value": 21.955216199998517,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.3323557999967761,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.764754299998117,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.276084099999821,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow simple",
            "value": 7.723575800000049,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow complex",
            "value": 16.723537700002566,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow nested",
            "value": 45.80971309999882,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum simple",
            "value": 12.138170700004025,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum complex",
            "value": 25.634939299996518,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum nested",
            "value": 73.22105719999854,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.3913057999985767,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.1974520000014763,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 5.224880899996265,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow simple",
            "value": 18.617400999997358,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow complex",
            "value": 44.343061500003955,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow nested",
            "value": 140.42061000000388,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum simple",
            "value": 3.115947199998459,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum complex",
            "value": 5.25852899999677,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum nested",
            "value": 17.05574010000248,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.6261911000024156,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 0.962597599996684,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 1.6461055999997143,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum simple",
            "value": 10.215853299999367,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum complex",
            "value": 22.426033400000733,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum nested",
            "value": 69.88676249999912,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.49794780000240735,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.0218680999997787,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.207805500003701,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum simple",
            "value": 6.825239099998726,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum complex",
            "value": 9.952646399997889,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum nested",
            "value": 24.24879879999935,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.194060199998262,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.584191500003044,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.677244200001155,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum simple",
            "value": 11.829429099998379,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum complex",
            "value": 24.7516485999995,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum nested",
            "value": 74.01558070000362,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.7888487000021769,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.6010378999956174,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.477705800005083,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum simple",
            "value": 363.1111788999988,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum complex",
            "value": 829.8922415000021,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum nested",
            "value": 2121.5665038999987,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum simple",
            "value": 457.63703089999694,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum complex",
            "value": 1216.740285000003,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum nested",
            "value": 1189.9156753999932,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum simple",
            "value": 8.874286399998255,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum complex",
            "value": 26.981306900000845,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum nested",
            "value": 63.49815890000059,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum simple",
            "value": 31.09036609999407,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum complex",
            "value": 83.54456449999361,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.6474895999949695,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.717012699999714,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 22.77964419999421,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.717478399994434,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.381412899999759,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 7.891534300000558,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Time",
            "value": 33.67434444700001,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Time",
            "value": 30.97790170899998,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7129364013671875,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Pydantic v2 (validate_json) Time",
            "value": 3.615073446999986,
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
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "github-actions[bot]@users.noreply.github.com"
          },
          "id": "fdee763c5e0a08f71ba248f6bff302160c991d2f",
          "message": "chore: update hardware signature for windows-latest",
          "timestamp": "2026-02-23T08:54:19Z",
          "url": "https://github.com/webmaven/lodum/commit/fdee763c5e0a08f71ba248f6bff302160c991d2f"
        },
        "date": 1771836992687,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum simple",
            "value": 4.922061099998132,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum complex",
            "value": 7.931094499997471,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum nested",
            "value": 21.83504820000053,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.3170687000027215,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.850858200000971,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.309753599999965,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow simple",
            "value": 7.704251799999895,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow complex",
            "value": 16.898254500000576,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow nested",
            "value": 45.998815000001514,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum simple",
            "value": 12.229773500000363,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum complex",
            "value": 26.168026900002417,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum nested",
            "value": 73.6291171000019,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.406701999999882,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.184403500000087,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 5.389548600000182,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow simple",
            "value": 19.04342659999969,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow complex",
            "value": 45.396865200000036,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow nested",
            "value": 133.42373640000034,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum simple",
            "value": 3.1474754000001326,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum complex",
            "value": 5.173989699997605,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum nested",
            "value": 16.870130000000927,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.6272317000011185,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 0.9658809000001156,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 1.6451482999983114,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum simple",
            "value": 10.185456299997497,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum complex",
            "value": 23.041951599999777,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum nested",
            "value": 68.43577429999783,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.4989517999987924,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.0472505000024057,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.2186713000010627,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum simple",
            "value": 6.656488000000138,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum complex",
            "value": 9.860376899999324,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum nested",
            "value": 24.02590650000178,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.155747100001861,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.470061799998405,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.313431899999557,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum simple",
            "value": 11.802045699998587,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum complex",
            "value": 25.121679500000482,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum nested",
            "value": 72.78413280000251,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.7614786000009985,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.5899104999993483,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.5528671000028,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum simple",
            "value": 364.9242304999987,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum complex",
            "value": 844.4982183999983,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum nested",
            "value": 2159.8861458,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum simple",
            "value": 468.0196572999989,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum complex",
            "value": 1243.2526789999984,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum nested",
            "value": 1206.909182999999,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum simple",
            "value": 8.987770100003445,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum complex",
            "value": 27.61795490000054,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum nested",
            "value": 63.489464299999554,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum simple",
            "value": 31.255396700001373,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum complex",
            "value": 85.81168510000055,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.58893670000009,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.713750400001572,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 22.96759510000186,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.658962400001542,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.438164800001232,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 7.815062400001693,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Time",
            "value": 33.620463849000004,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Time",
            "value": 30.985316134000016,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7129364013671875,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Pydantic v2 (validate_json) Time",
            "value": 3.635200273999999,
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
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "github-actions[bot]@users.noreply.github.com"
          },
          "id": "fdee763c5e0a08f71ba248f6bff302160c991d2f",
          "message": "chore: update hardware signature for windows-latest",
          "timestamp": "2026-02-23T08:54:19Z",
          "url": "https://github.com/webmaven/lodum/commit/fdee763c5e0a08f71ba248f6bff302160c991d2f"
        },
        "date": 1771837849240,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.34195369999901,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.7872216000000662,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.393591399999707,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow simple",
            "value": 7.5934881000037535,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow complex",
            "value": 16.614339799997424,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow nested",
            "value": 44.86558559999878,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.3692999999989297,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.153799400004175,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 5.152024100001995,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow simple",
            "value": 18.86741950000186,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow complex",
            "value": 44.127849899997784,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow nested",
            "value": 136.2168951000001,
            "unit": "us"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "github-actions[bot]@users.noreply.github.com"
          },
          "id": "fdee763c5e0a08f71ba248f6bff302160c991d2f",
          "message": "chore: update hardware signature for windows-latest",
          "timestamp": "2026-02-23T08:54:19Z",
          "url": "https://github.com/webmaven/lodum/commit/fdee763c5e0a08f71ba248f6bff302160c991d2f"
        },
        "date": 1771837922676,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum simple",
            "value": 4.846627799999226,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum complex",
            "value": 7.790278299999898,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum nested",
            "value": 21.6689197000008,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.3248578999977667,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.8750421999996547,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.3042927999986205,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow simple",
            "value": 7.638332799999148,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow complex",
            "value": 16.251037599998597,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow nested",
            "value": 45.46884310000081,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum simple",
            "value": 12.201633300001902,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum complex",
            "value": 25.7584621999996,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum nested",
            "value": 73.63506319999829,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.3761707000028878,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.1416528000003154,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 5.362612200001138,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow simple",
            "value": 18.57209359999814,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow complex",
            "value": 43.208327299996085,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow nested",
            "value": 134.76039859999958,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum simple",
            "value": 3.1092637000000423,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum complex",
            "value": 5.198785300001418,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum nested",
            "value": 16.825610400000812,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.6184757999989188,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 0.9737741999998661,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 1.661856000001194,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum simple",
            "value": 10.115125400000125,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum complex",
            "value": 22.381330300001423,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum nested",
            "value": 69.0997503999995,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.5037224000005835,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.0308337000012102,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.236537100000646,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum simple",
            "value": 6.467374900000777,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum complex",
            "value": 9.688024400001893,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum nested",
            "value": 23.69514720000012,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.089966700000502,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.422486700000206,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.374703100000147,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum simple",
            "value": 11.767146399999717,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum complex",
            "value": 24.40213520000185,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum nested",
            "value": 72.2400241999992,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.7763447000007204,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.5603305999979398,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.437847199999112,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum simple",
            "value": 355.61671539999935,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum complex",
            "value": 819.1903064999977,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum nested",
            "value": 2086.8132039000016,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum simple",
            "value": 458.8455113000066,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum complex",
            "value": 1198.0374452999997,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum nested",
            "value": 1168.689971699999,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum simple",
            "value": 8.751982300003647,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum complex",
            "value": 27.178832099997408,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum nested",
            "value": 62.99214900000152,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum simple",
            "value": 30.44517350000433,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum complex",
            "value": 83.29952959999787,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.516898200000696,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.675947799999449,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 22.52606730000082,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.6286187000001746,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.4158332999984395,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 7.8457820000011225,
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
            "name": "Michael R. Bernstein",
            "username": "webmaven",
            "email": "zopemaven@gmail.com"
          },
          "id": "136743961d81d91580f1772ccbee9a4159533f93",
          "message": "fix: resolve indentation error in get_hw_info.py",
          "timestamp": "2026-02-23T09:16:25Z",
          "url": "https://github.com/webmaven/lodum/commit/136743961d81d91580f1772ccbee9a4159533f93"
        },
        "date": 1771838230753,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.3478185999929337,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.7525858999931643,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.323175000008405,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow simple",
            "value": 7.441204100001642,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow complex",
            "value": 16.44558569998935,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow nested",
            "value": 44.51383130000295,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.3773149999963152,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.133049700000811,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 5.2593674999911855,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow simple",
            "value": 18.633121599998503,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow complex",
            "value": 43.28287109998996,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow nested",
            "value": 136.44234240000515,
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
            "name": "Michael R. Bernstein",
            "username": "webmaven",
            "email": "zopemaven@gmail.com"
          },
          "id": "136743961d81d91580f1772ccbee9a4159533f93",
          "message": "fix: resolve indentation error in get_hw_info.py",
          "timestamp": "2026-02-23T09:16:25Z",
          "url": "https://github.com/webmaven/lodum/commit/136743961d81d91580f1772ccbee9a4159533f93"
        },
        "date": 1771838296987,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum simple",
            "value": 4.892954500000002,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum complex",
            "value": 7.841642900000068,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum nested",
            "value": 21.495279699999514,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.3178586000002213,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.844887899999037,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.5980656999996086,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow simple",
            "value": 7.596008500000551,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow complex",
            "value": 16.947452099999794,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow nested",
            "value": 47.70064089999906,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum simple",
            "value": 12.029125299999066,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum complex",
            "value": 26.767408700001027,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum nested",
            "value": 73.74263710000122,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.375639200000478,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.1354280999986486,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 5.145846099999574,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow simple",
            "value": 18.47447090000003,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow complex",
            "value": 44.60082249999999,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow nested",
            "value": 135.95133550000043,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum simple",
            "value": 3.10980590000014,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum complex",
            "value": 5.391347100000843,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum nested",
            "value": 16.653317999998762,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.6225057999998285,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 0.9779441999995697,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 1.6483011000005376,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum simple",
            "value": 10.091959200000389,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum complex",
            "value": 22.43454269999887,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum nested",
            "value": 69.18394960000072,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.5103624999996725,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.0470311000013055,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.2701439000009316,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum simple",
            "value": 6.637382600000308,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum complex",
            "value": 9.845197900001779,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum nested",
            "value": 23.807192499999985,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.150472100000258,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.427139999998332,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.225136200000094,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum simple",
            "value": 11.627906799999721,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum complex",
            "value": 25.59456680000025,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum nested",
            "value": 73.25523109999992,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.8376716999995324,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.6519494999995175,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.521525999999199,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum simple",
            "value": 356.73101329999923,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum complex",
            "value": 824.626251199998,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum nested",
            "value": 2104.3808712000005,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum simple",
            "value": 458.94658039999996,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum complex",
            "value": 1210.4347887999993,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum nested",
            "value": 1179.5465824000019,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum simple",
            "value": 8.813419499999497,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum complex",
            "value": 26.822396599999365,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum nested",
            "value": 63.20694130000107,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum simple",
            "value": 30.544471800000395,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum complex",
            "value": 84.43325970000188,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.5526899999998705,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.742462200003274,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 22.89568380000162,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.707189500001107,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.529279099998007,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 8.028077499999142,
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
          "id": "136743961d81d91580f1772ccbee9a4159533f93",
          "message": "fix: resolve indentation error in get_hw_info.py",
          "timestamp": "2026-02-23T11:16:25+02:00",
          "tree_id": "2694e27d4c4e0b71d9833db5b4eb4f445bc2d56d",
          "url": "https://github.com/webmaven/lodum/commit/136743961d81d91580f1772ccbee9a4159533f93"
        },
        "date": 1771838361533,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum simple",
            "value": 4.822403700018185,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum complex",
            "value": 7.9375756000899855,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum nested",
            "value": 22.233201700009886,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.332226400018044,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.8668317999527062,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.3223181999801454,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow simple",
            "value": 7.801209199942605,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow complex",
            "value": 17.196523200027514,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow nested",
            "value": 47.23634699998911,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum simple",
            "value": 11.997079799903076,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum complex",
            "value": 25.95444509997833,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum nested",
            "value": 71.89300089999051,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.3943794000169873,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.2159550999731437,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 5.195725200019297,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow simple",
            "value": 18.41346330002125,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow complex",
            "value": 43.65486639990195,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow nested",
            "value": 135.400317299991,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum simple",
            "value": 3.09286010001415,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum complex",
            "value": 5.578258900004585,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum nested",
            "value": 17.011875100024554,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.6245227999443159,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 0.9557145000144374,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 1.662578500008749,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum simple",
            "value": 10.034932999997181,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum complex",
            "value": 22.145022099994094,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum nested",
            "value": 66.87683830000424,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.5074103999504587,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.0343611999815039,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.2339594000641227,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum simple",
            "value": 6.592840500024977,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum complex",
            "value": 9.649467199960782,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum nested",
            "value": 24.104660700004388,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.209711099974811,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.542971200065949,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.340107100093519,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum simple",
            "value": 11.67092430005141,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum complex",
            "value": 24.94562490005592,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum nested",
            "value": 71.74533359993802,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.8688259000555263,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.71159129993066,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.556255099942064,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum simple",
            "value": 363.89241510005377,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum complex",
            "value": 838.0935318999946,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum nested",
            "value": 2112.249648099987,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum simple",
            "value": 462.30735100002676,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum complex",
            "value": 1200.5088475999855,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum nested",
            "value": 1166.714812300006,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum simple",
            "value": 8.556329900011406,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum complex",
            "value": 26.37677990001066,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum nested",
            "value": 62.12543340002412,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum simple",
            "value": 30.052777499986405,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum complex",
            "value": 83.70054160009204,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.526342299959651,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.645343900027001,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 22.56385939995198,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.73781590001272,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.476093699940975,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 7.91957490000641,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Time",
            "value": 33.517860651999854,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Time",
            "value": 30.474164910000127,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7129364013671875,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Pydantic v2 (validate_json) Time",
            "value": 3.640729790000023,
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
          "id": "136743961d81d91580f1772ccbee9a4159533f93",
          "message": "fix: resolve indentation error in get_hw_info.py",
          "timestamp": "2026-02-23T09:16:25Z",
          "url": "https://github.com/webmaven/lodum/commit/136743961d81d91580f1772ccbee9a4159533f93"
        },
        "date": 1771838374282,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum simple",
            "value": 4.888740299998773,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum complex",
            "value": 7.894280299999679,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum nested",
            "value": 22.360507300000165,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.3031212999997877,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.7550960999997756,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.343757899999389,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow simple",
            "value": 7.730234399999603,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow complex",
            "value": 16.447427200000675,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow nested",
            "value": 45.53389549999949,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum simple",
            "value": 12.193437800001306,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum complex",
            "value": 26.278509600000888,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum nested",
            "value": 73.86363040000035,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.363182199998647,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.1306285999997954,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 5.149411599999354,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow simple",
            "value": 19.092268199999296,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow complex",
            "value": 44.62994610000024,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow nested",
            "value": 138.13714070000032,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum simple",
            "value": 3.1666489999999214,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum complex",
            "value": 5.261597000000506,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum nested",
            "value": 16.839690300000143,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.6419698000001972,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 0.9818323000004625,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 1.6818862999997464,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum simple",
            "value": 10.128956199999806,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum complex",
            "value": 22.46437020000016,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum nested",
            "value": 68.62690280000052,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.5020172999998351,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.0443819999998993,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.2415098000003297,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum simple",
            "value": 6.764790699999423,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum complex",
            "value": 9.735405000000696,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum nested",
            "value": 24.214365700000684,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.261873099999747,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.607657299999147,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.501336300000162,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum simple",
            "value": 11.924775599999293,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum complex",
            "value": 25.17214009999975,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum nested",
            "value": 72.40332809999899,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.7739636999991149,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.599241000000063,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.39169530000072,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum simple",
            "value": 360.2891241999984,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum complex",
            "value": 823.6220477000018,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum nested",
            "value": 2104.1605496,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum simple",
            "value": 459.4586236999987,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum complex",
            "value": 1206.5354765000022,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum nested",
            "value": 1174.9152144000007,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum simple",
            "value": 8.945208299999763,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum complex",
            "value": 27.591199399998345,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum nested",
            "value": 63.19788259999797,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum simple",
            "value": 31.351116000000445,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum complex",
            "value": 85.02940569999993,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.672967199999789,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.760745799999768,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 23.106234500002643,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.830629999995949,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.559740600001305,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 7.910928300000819,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Time",
            "value": 39.160590866999996,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Time",
            "value": 30.688539599999984,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7129364013671875,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Pydantic v2 (validate_json) Time",
            "value": 3.7457755410000004,
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
          "id": "ffb6b17ebbaf64ac9ebd6c18fcf3cd80f638a874",
          "message": "fix: correctly associate historical benchmarks with their commit IDs",
          "timestamp": "2026-02-23T09:21:48Z",
          "url": "https://github.com/webmaven/lodum/commit/ffb6b17ebbaf64ac9ebd6c18fcf3cd80f638a874"
        },
        "date": 1771838553743,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.2828393999996024,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.7384546000002388,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.2520058000002905,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow simple",
            "value": 7.549643999999489,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow complex",
            "value": 16.580565099999944,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow nested",
            "value": 44.46815000000157,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.4053086999993525,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.177859700000795,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 5.150167199998634,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow simple",
            "value": 18.893476700002054,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow complex",
            "value": 43.85177310000046,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow nested",
            "value": 134.5677565999992,
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
            "name": "Michael R. Bernstein",
            "username": "webmaven",
            "email": "zopemaven@gmail.com"
          },
          "id": "ffb6b17ebbaf64ac9ebd6c18fcf3cd80f638a874",
          "message": "fix: correctly associate historical benchmarks with their commit IDs",
          "timestamp": "2026-02-23T09:21:48Z",
          "url": "https://github.com/webmaven/lodum/commit/ffb6b17ebbaf64ac9ebd6c18fcf3cd80f638a874"
        },
        "date": 1771838623437,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum simple",
            "value": 4.9918868000006,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum complex",
            "value": 7.887105899999369,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum nested",
            "value": 21.573902700001213,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.324482300000085,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.8049838999992573,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.2742147000000443,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow simple",
            "value": 7.477306300000208,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow complex",
            "value": 16.345122099999543,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow nested",
            "value": 45.030757300000346,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum simple",
            "value": 12.089328099999364,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum complex",
            "value": 25.967847699999425,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum nested",
            "value": 73.19997270000016,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.3904326999998773,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.180537899998569,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 5.302222899999975,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow simple",
            "value": 18.705008100000953,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow complex",
            "value": 43.768560200000195,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow nested",
            "value": 134.9799162999993,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum simple",
            "value": 3.093709899999908,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum complex",
            "value": 5.16730899999942,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum nested",
            "value": 16.762749599999438,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.6430796000003625,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 0.982263899999225,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 1.6750481999999067,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum simple",
            "value": 10.130866700001206,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum complex",
            "value": 22.678430400001304,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum nested",
            "value": 69.16772119999948,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.5129696000011563,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.0129100000000335,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.204407700000388,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum simple",
            "value": 6.467111700000316,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum complex",
            "value": 9.587656800000133,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum nested",
            "value": 23.695409899999476,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.023854299999385,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.3370287999996435,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.174406200000561,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum simple",
            "value": 11.724863199999902,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum complex",
            "value": 24.760218499999098,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum nested",
            "value": 72.36744980000012,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.7491756999994834,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.59442590000063,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.440482000000401,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum simple",
            "value": 358.6427923999999,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum complex",
            "value": 825.037026199999,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum nested",
            "value": 2102.407518299998,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum simple",
            "value": 460.2117770999982,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum complex",
            "value": 1222.2082810000018,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum nested",
            "value": 1191.8023321999997,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum simple",
            "value": 8.840581599999098,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum complex",
            "value": 27.00283650000017,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum nested",
            "value": 63.09470350000197,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum simple",
            "value": 31.14239980000093,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum complex",
            "value": 83.86834329999999,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.538605599999812,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.696224099999881,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 22.991815399998927,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.945358399998611,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.549642200001358,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 7.9424161999980925,
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
          "id": "ffb6b17ebbaf64ac9ebd6c18fcf3cd80f638a874",
          "message": "fix: correctly associate historical benchmarks with their commit IDs",
          "timestamp": "2026-02-23T11:21:48+02:00",
          "tree_id": "ed70373efb05d65e86192eae29f94b0e9e4016bc",
          "url": "https://github.com/webmaven/lodum/commit/ffb6b17ebbaf64ac9ebd6c18fcf3cd80f638a874"
        },
        "date": 1771838672894,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum simple",
            "value": 4.64177909999961,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum complex",
            "value": 7.70952109999854,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum nested",
            "value": 20.21953999999937,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.2121663000002059,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.692916900000796,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.1817652999990287,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow simple",
            "value": 7.300017699996886,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow complex",
            "value": 16.02455149999713,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow nested",
            "value": 42.91416850000189,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum simple",
            "value": 11.400495899999896,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum complex",
            "value": 22.98955840000474,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum nested",
            "value": 67.47886029999961,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.327868399999943,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.106323399998189,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 5.1209190000008675,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow simple",
            "value": 16.776144099999613,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow complex",
            "value": 39.31593659999919,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow nested",
            "value": 121.12622540000189,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum simple",
            "value": 2.9568354999994995,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum complex",
            "value": 5.072793400000819,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum nested",
            "value": 16.025404699999513,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.559789700001545,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 0.8625495999993404,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 1.483027299997275,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum simple",
            "value": 9.663929400002758,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum complex",
            "value": 19.63450469999941,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum nested",
            "value": 63.18596819999982,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.46247479999976804,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 0.9366503999984843,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 1.9868295999998509,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum simple",
            "value": 6.405205199999386,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum complex",
            "value": 9.41923670000051,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum nested",
            "value": 22.647567200002072,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 3.9332316999988843,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.336373899999103,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.00044160000084,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum simple",
            "value": 11.264732299999025,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum complex",
            "value": 22.47706030000103,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum nested",
            "value": 66.90797669999853,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.745585700001584,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.4675327000011293,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.127454100000705,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum simple",
            "value": 324.16773880000136,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum complex",
            "value": 756.7151875999982,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum nested",
            "value": 1945.6369765000006,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum simple",
            "value": 401.6583122000043,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum complex",
            "value": 1072.5764787000003,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum nested",
            "value": 1033.2348685999962,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum simple",
            "value": 8.161209399997915,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum complex",
            "value": 24.071300099998894,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum nested",
            "value": 57.715898699999,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum simple",
            "value": 28.233918600000152,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum complex",
            "value": 76.41261340000085,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.323852099997794,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.486506599995323,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 21.43047259999946,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.6992149000013796,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.474741300001028,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 7.8478846000024305,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Time",
            "value": 33.117374044,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Time",
            "value": 29.810909471000002,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.712885856628418,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Pydantic v2 (validate_json) Time",
            "value": 3.4180755259999955,
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
          "id": "ffb6b17ebbaf64ac9ebd6c18fcf3cd80f638a874",
          "message": "fix: correctly associate historical benchmarks with their commit IDs",
          "timestamp": "2026-02-23T09:21:48Z",
          "url": "https://github.com/webmaven/lodum/commit/ffb6b17ebbaf64ac9ebd6c18fcf3cd80f638a874"
        },
        "date": 1771838690397,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum simple",
            "value": 4.994922999999574,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum complex",
            "value": 8.319771999999404,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum nested",
            "value": 23.05078690000073,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.39002179999963,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.8560034999993036,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.4641168000000278,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow simple",
            "value": 7.921061700000109,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow complex",
            "value": 16.811470699998665,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow nested",
            "value": 44.63567060000102,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum simple",
            "value": 12.170437599999673,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum complex",
            "value": 25.604629099998988,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum nested",
            "value": 72.38422440000036,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.3774637000004475,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.2093659000006483,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 5.500336700000474,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow simple",
            "value": 18.55694010000093,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow complex",
            "value": 43.71105419999992,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow nested",
            "value": 142.72469229999913,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum simple",
            "value": 3.2363368999995146,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum complex",
            "value": 7.4173530999992465,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum nested",
            "value": 17.734988599998758,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.6456651000007696,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 0.9982142999994892,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 1.6822209000004307,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum simple",
            "value": 9.940788000000111,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum complex",
            "value": 22.015007600001013,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum nested",
            "value": 67.97291850000065,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.5057952000015575,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.0202544000001978,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.277792500000686,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum simple",
            "value": 6.566501700000771,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum complex",
            "value": 9.898212499999914,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum nested",
            "value": 24.035093499999505,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.147430000001151,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.434466799999171,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.616046700000624,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum simple",
            "value": 12.168193799999472,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum complex",
            "value": 24.880660000000177,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum nested",
            "value": 72.01085319999976,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.7810883000002775,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.5545428000000925,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.918168299999337,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum simple",
            "value": 361.8557568,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum complex",
            "value": 845.4437976999969,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum nested",
            "value": 2146.3763421999984,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum simple",
            "value": 459.1949177000018,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum complex",
            "value": 1208.7671768999996,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum nested",
            "value": 1183.9628299999972,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum simple",
            "value": 8.773505400000658,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum complex",
            "value": 27.16647910000063,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum nested",
            "value": 63.615331699999444,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum simple",
            "value": 31.458166899999185,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum complex",
            "value": 83.17433689999802,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.627553800000328,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.815519499998857,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 23.06635430000057,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.6930773999998223,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.552538299999753,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 7.9767459999985135,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Time",
            "value": 33.335150919000014,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Time",
            "value": 29.78561109100002,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7129364013671875,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Pydantic v2 (validate_json) Time",
            "value": 3.71821208099999,
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
          "id": "2ac38481873e9f11b9a4bc24cfa2f3885b2e1175",
          "message": "fix: explicitly set commit-id for historical benchmarks",
          "timestamp": "2026-02-23T09:27:27Z",
          "url": "https://github.com/webmaven/lodum/commit/2ac38481873e9f11b9a4bc24cfa2f3885b2e1175"
        },
        "date": 1771838890799,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.316338900000602,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.8055828999997914,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.2079682000002663,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow simple",
            "value": 7.529320000000439,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow complex",
            "value": 16.40785200000039,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow nested",
            "value": 44.52047610000136,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.3945466999999212,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.2181138000000544,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 5.254832400001419,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow simple",
            "value": 19.618055300001203,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow complex",
            "value": 44.15288619999913,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow nested",
            "value": 136.72756229999976,
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
            "name": "Michael R. Bernstein",
            "username": "webmaven",
            "email": "zopemaven@gmail.com"
          },
          "id": "2ac38481873e9f11b9a4bc24cfa2f3885b2e1175",
          "message": "fix: explicitly set commit-id for historical benchmarks",
          "timestamp": "2026-02-23T09:27:27Z",
          "url": "https://github.com/webmaven/lodum/commit/2ac38481873e9f11b9a4bc24cfa2f3885b2e1175"
        },
        "date": 1771838962837,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum simple",
            "value": 4.821237499999853,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum complex",
            "value": 7.959982400000598,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum nested",
            "value": 22.090767300000635,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.3530197999997995,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.7897344999994402,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.4000176999988696,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow simple",
            "value": 7.490194599999711,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow complex",
            "value": 16.232943199999994,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow nested",
            "value": 45.70419970000117,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum simple",
            "value": 12.16422550000047,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum complex",
            "value": 25.888210700001224,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum nested",
            "value": 73.11015279999964,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.365540999999837,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.11988330000068,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 5.298319900000337,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow simple",
            "value": 18.399119999999414,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow complex",
            "value": 44.63398849999933,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow nested",
            "value": 134.16392249999944,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum simple",
            "value": 3.096152899999538,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum complex",
            "value": 5.265457699999843,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum nested",
            "value": 16.90548779999901,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.6279311000000121,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 0.9966517999991709,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 1.658640699999836,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum simple",
            "value": 10.15883589999973,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum complex",
            "value": 22.174772499999307,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum nested",
            "value": 68.7578350999992,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.4986580000000629,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.013917100000583,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.2247574000012094,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum simple",
            "value": 6.503176200001093,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum complex",
            "value": 9.850967500000252,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum nested",
            "value": 23.7217035999997,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.076958500000671,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.373966900000227,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.15572619999898,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum simple",
            "value": 11.968643899999165,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum complex",
            "value": 25.44021309999991,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum nested",
            "value": 72.90528660000035,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.789948200000424,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.5744849000005843,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.452103099999505,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum simple",
            "value": 357.71958369999976,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum complex",
            "value": 835.095944099998,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum nested",
            "value": 2115.574317400001,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum simple",
            "value": 459.1366218999994,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum complex",
            "value": 1208.072429699999,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum nested",
            "value": 1185.305884600001,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum simple",
            "value": 9.012578299999063,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum complex",
            "value": 27.88907870000088,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum nested",
            "value": 64.54040520000035,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum simple",
            "value": 30.62838040000031,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum complex",
            "value": 83.61529510000167,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.593937700002471,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.817891800000098,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 22.998944700002255,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.7824430000000575,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.482796199999939,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 8.18258469999904,
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
            "name": "Michael R. Bernstein",
            "username": "webmaven",
            "email": "zopemaven@gmail.com"
          },
          "id": "9265587501b6597cd995730e37fc95f64ddca79f",
          "message": "Initial commit: add lodum serialization library\n\nAdd the initial implementation of the lodum Python serialization/deserialization library. Includes core logic, support for JSON, YAML, and pickle formats, field customization, exception handling, and comprehensive tests for primitives, custom classes, typing, numpy, pandas, polars, and nested structures.",
          "timestamp": "2025-12-21T16:42:30Z",
          "url": "https://github.com/webmaven/lodum/commit/9265587501b6597cd995730e37fc95f64ddca79f"
        },
        "date": 1771839013120,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.3184244999990824,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.8682264000005944,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.2882064999995464,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow simple",
            "value": 7.643474799999694,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow complex",
            "value": 17.186427200000054,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow nested",
            "value": 45.58009199999944,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.3955746999997132,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.1797726000002626,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 5.289951399999637,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow simple",
            "value": 18.395753799998715,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow complex",
            "value": 44.38298409999817,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow nested",
            "value": 134.31613209999966,
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
          "id": "2ac38481873e9f11b9a4bc24cfa2f3885b2e1175",
          "message": "fix: explicitly set commit-id for historical benchmarks",
          "timestamp": "2026-02-23T11:27:27+02:00",
          "tree_id": "95257c3db12ae9b4dbababa57f590348783ccea2",
          "url": "https://github.com/webmaven/lodum/commit/2ac38481873e9f11b9a4bc24cfa2f3885b2e1175"
        },
        "date": 1771839029705,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum simple",
            "value": 4.8401329000000715,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum complex",
            "value": 7.845118099999837,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum nested",
            "value": 22.03768939999975,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.3004682000001822,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.8629603000007933,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.2646836000004953,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow simple",
            "value": 8.01843090000034,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow complex",
            "value": 16.90656199999978,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow nested",
            "value": 46.8623517999994,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum simple",
            "value": 12.24011980000057,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum complex",
            "value": 25.833958400000512,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum nested",
            "value": 73.33348980000025,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.4281145999994749,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.2346398999999906,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 5.2206558999998265,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow simple",
            "value": 18.50753870000048,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow complex",
            "value": 43.87122620000099,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow nested",
            "value": 137.06431920000028,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum simple",
            "value": 3.110612700000104,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum complex",
            "value": 5.116456999999741,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum nested",
            "value": 16.98619770000107,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.6443931999996266,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 0.9811304000010068,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 1.6618514999983347,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum simple",
            "value": 10.080006300000832,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum complex",
            "value": 23.15971710000042,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum nested",
            "value": 68.53515119999685,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.5171883000002708,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.0333326999997894,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.2537653000014757,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum simple",
            "value": 6.617947200001595,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum complex",
            "value": 9.784837999998786,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum nested",
            "value": 24.17852619999934,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.220888999998351,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.499210399999299,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.24942920000069,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum simple",
            "value": 11.79881299999721,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum complex",
            "value": 25.37769029999879,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum nested",
            "value": 73.94127909999924,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.7780072000007863,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.6131854000013277,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.4084810000015295,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum simple",
            "value": 359.20475100000147,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum complex",
            "value": 834.3811001999995,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum nested",
            "value": 2121.5485725999997,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum simple",
            "value": 462.9406583000005,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum complex",
            "value": 1225.353270700002,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum nested",
            "value": 1197.0656419000009,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum simple",
            "value": 9.035029100004976,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum complex",
            "value": 27.32295810000096,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum nested",
            "value": 63.63152819999698,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum simple",
            "value": 31.142760500000573,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum complex",
            "value": 84.3461026,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.642556100000661,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.815562499997441,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 23.448617300005026,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.69217979999803,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.691723900000966,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 7.988510599994925,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Time",
            "value": 33.26213453600002,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Time",
            "value": 30.239064460999998,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7128286361694336,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Pydantic v2 (validate_json) Time",
            "value": 3.5963208169999916,
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
          "id": "81234e50d674fb999af7f3dff0afad0b604f2c19",
          "message": "docs: improve performance dashboard integration and add timestamp to footer\n\n- Moved benchmark data to root 'benchmarks/' on gh-pages to avoid versioning conflicts.\n- Updated PERFORMANCE.md link to the dashboard.\n- Enabled mkdocs-git-revision-date-localized-plugin for generation timestamps.\n- Updated CI/CD workflows to include the new plugin.",
          "timestamp": "2026-02-23T08:57:06+02:00",
          "tree_id": "d6e4cccf60b4ed8d22d7396c70246e4bcacc1b2c",
          "url": "https://github.com/webmaven/lodum/commit/81234e50d674fb999af7f3dff0afad0b604f2c19"
        },
        "date": 1771830039739,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(windows-latest) JSON Serialization Lodum simple",
            "value": 4.575490000001992,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum complex",
            "value": 9.03545999999551,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum nested",
            "value": 21.215659999990066,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.4904700000045068,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) complex",
            "value": 2.05738000000224,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.7297399999999925,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow simple",
            "value": 6.645319999995536,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow complex",
            "value": 14.740890000001627,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow nested",
            "value": 40.120969999998124,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum simple",
            "value": 11.790830000001051,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum complex",
            "value": 25.67572000000382,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum nested",
            "value": 70.85412000000133,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.56893000000764,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.658120000000963,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 8.493329999993193,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow simple",
            "value": 16.68066999999951,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow complex",
            "value": 39.2597999999964,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow nested",
            "value": 125.76307000000497,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum simple",
            "value": 3.319520000002285,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum complex",
            "value": 5.342730000000984,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum nested",
            "value": 16.718380000003208,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.8589199999960329,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 1.4621200000078716,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 2.4145199999964007,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum simple",
            "value": 9.155540000000428,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum complex",
            "value": 21.78380999999945,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum nested",
            "value": 66.93435999999338,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.5220700000052148,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.0148300000025756,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.2400800000013987,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum simple",
            "value": 6.764029999999366,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum complex",
            "value": 9.673550000002251,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum nested",
            "value": 23.534810000001016,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.335590000005141,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.796660000009979,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.781709999993836,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum simple",
            "value": 10.925689999999122,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum complex",
            "value": 24.232860000000755,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum nested",
            "value": 69.58919000000492,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.6023699999948349,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.3908199999880253,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.244049999999788,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum simple",
            "value": 338.9329900000007,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum complex",
            "value": 792.8332699999942,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum nested",
            "value": 2013.3150999999998,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum simple",
            "value": 434.40643999999793,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum complex",
            "value": 1149.0640299999995,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum nested",
            "value": 1114.1087400000004,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum simple",
            "value": 8.459289999996145,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum complex",
            "value": 27.573289999997996,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum nested",
            "value": 62.135109999996985,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum simple",
            "value": 29.87990000000309,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum complex",
            "value": 83.8747699999999,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.565400000001318,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.557780000002822,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 22.12405000000217,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.5124400000029254,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.425159999999551,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 7.923180000005914,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Time",
            "value": 37.509867799999995,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Time",
            "value": 34.92267350000003,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7154855728149414,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Pydantic v2 (validate_json) Time",
            "value": 4.0811391999999955,
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
          "id": "81234e50d674fb999af7f3dff0afad0b604f2c19",
          "message": "docs: improve performance dashboard integration and add timestamp to footer\n\n- Moved benchmark data to root 'benchmarks/' on gh-pages to avoid versioning conflicts.\n- Updated PERFORMANCE.md link to the dashboard.\n- Enabled mkdocs-git-revision-date-localized-plugin for generation timestamps.\n- Updated CI/CD workflows to include the new plugin.",
          "timestamp": "2026-02-23T06:56:51Z",
          "url": "https://github.com/webmaven/lodum/commit/81234e50d674fb999af7f3dff0afad0b604f2c19"
        },
        "date": 1771830207172,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(windows-latest) JSON Serialization Lodum simple",
            "value": 4.622410000001764,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum complex",
            "value": 8.883710000003475,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum nested",
            "value": 21.134970000005637,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.4178599999979724,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) complex",
            "value": 2.031120000003739,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.6814000000020997,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow simple",
            "value": 6.740550000003509,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow complex",
            "value": 14.56190000000106,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow nested",
            "value": 39.9407999999994,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum simple",
            "value": 11.67437000000291,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum complex",
            "value": 25.09470000000249,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum nested",
            "value": 71.39794999999935,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.6224600000015243,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.8683900000032736,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 7.25253999999893,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow simple",
            "value": 16.565480000002708,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow complex",
            "value": 40.63063000000113,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow nested",
            "value": 126.11389999999858,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum simple",
            "value": 3.334019999999782,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum complex",
            "value": 5.424059999995734,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum nested",
            "value": 17.18711999999698,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.818540000003054,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 1.3818200000059733,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 2.396300000000906,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum simple",
            "value": 9.327719999998862,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum complex",
            "value": 22.469100000000708,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum nested",
            "value": 67.38513000000523,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.48603000000184693,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.0086700000016435,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.292970000002015,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum simple",
            "value": 6.735000000000468,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum complex",
            "value": 9.833660000001032,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum nested",
            "value": 23.161849999999617,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.525519999998551,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.960020000000554,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.95510999999658,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum simple",
            "value": 10.805209999998056,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum complex",
            "value": 24.11662000000092,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum nested",
            "value": 70.7241899999957,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.687239999998269,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.466229999998859,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.160480000004441,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum simple",
            "value": 343.35918000000447,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum complex",
            "value": 809.257869999999,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum nested",
            "value": 2036.590780000003,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum simple",
            "value": 436.8415200000044,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum complex",
            "value": 1157.7607900000005,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum nested",
            "value": 1123.4136199999966,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum simple",
            "value": 8.496570000002635,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum complex",
            "value": 29.018000000004918,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum nested",
            "value": 63.89949999999658,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum simple",
            "value": 30.583679999998026,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum complex",
            "value": 84.32528999999533,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.524409999996237,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.642140000002428,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 22.006329999999252,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.5689099999956397,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.3155099999978574,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 7.710670000000164,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Time",
            "value": 37.77290210000004,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Time",
            "value": 34.350264100000004,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7155342102050781,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Pydantic v2 (validate_json) Time",
            "value": 4.0918901000000005,
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
          "id": "37ec2cc79499f790b2ae028f5a8f6e91808c84e8",
          "message": "docs: enable last updated timestamp in footer",
          "timestamp": "2026-02-23T07:15:36Z",
          "url": "https://github.com/webmaven/lodum/commit/37ec2cc79499f790b2ae028f5a8f6e91808c84e8"
        },
        "date": 1771831160535,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(windows-latest) JSON Serialization Lodum simple",
            "value": 4.634789999988698,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum complex",
            "value": 7.437820000001238,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum nested",
            "value": 21.306450000002997,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.4206299999955263,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.9754699999964487,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.636809999994739,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow simple",
            "value": 6.5426000000002205,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow complex",
            "value": 14.262519999994083,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow nested",
            "value": 40.01853000000324,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum simple",
            "value": 11.485490000006848,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum complex",
            "value": 24.863850000002685,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum nested",
            "value": 71.53343000001087,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.5815999999972519,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.5941100000011375,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 6.784589999995205,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow simple",
            "value": 16.993929999995316,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow complex",
            "value": 39.14828000000057,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow nested",
            "value": 124.04784000000859,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum simple",
            "value": 3.29169999999408,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum complex",
            "value": 5.375770000006241,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum nested",
            "value": 16.611530000005814,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.8220400000027439,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 1.3911399999983587,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 2.413969999992105,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum simple",
            "value": 9.235439999991968,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum complex",
            "value": 21.074529999987135,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum nested",
            "value": 66.29558000000202,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.4891900000018268,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 0.9900299999969775,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.2186000000033346,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum simple",
            "value": 6.6017200000089815,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum complex",
            "value": 9.627280000000837,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum nested",
            "value": 23.28751000000011,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.232890000008638,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.650840000004109,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.838930000007394,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum simple",
            "value": 10.823040000002493,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum complex",
            "value": 23.39823999999453,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum nested",
            "value": 69.49812999999949,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.6091200000062145,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.3822900000027403,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.169579999995676,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum simple",
            "value": 346.8449000000021,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum complex",
            "value": 805.5205500000056,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum nested",
            "value": 2049.2812300000082,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum simple",
            "value": 437.4493400000006,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum complex",
            "value": 1139.1163399999925,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum nested",
            "value": 1115.5521899999997,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum simple",
            "value": 8.639710000005607,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum complex",
            "value": 28.210760000001756,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum nested",
            "value": 63.13637999999742,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum simple",
            "value": 29.88426000000004,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum complex",
            "value": 84.02882999999974,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.407649999990326,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.541370000007873,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 21.684799999991355,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.523780000006127,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.409029999999348,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 7.7509899999938625,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Time",
            "value": 39.337812299999996,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Time",
            "value": 35.29599510000003,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7155265808105469,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Pydantic v2 (validate_json) Time",
            "value": 4.354390999999964,
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
          "id": "37ec2cc79499f790b2ae028f5a8f6e91808c84e8",
          "message": "docs: enable last updated timestamp in footer",
          "timestamp": "2026-02-23T09:15:36+02:00",
          "tree_id": "c5381518476421c6c38dcee58da9d5af0cdf2a3b",
          "url": "https://github.com/webmaven/lodum/commit/37ec2cc79499f790b2ae028f5a8f6e91808c84e8"
        },
        "date": 1771831199187,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(windows-latest) JSON Serialization Lodum simple",
            "value": 4.53160999999227,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum complex",
            "value": 7.397769999988668,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum nested",
            "value": 21.434359999989283,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.4730600000007144,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) complex",
            "value": 2.0487200000161465,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.704159999995227,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow simple",
            "value": 6.7596599999887985,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow complex",
            "value": 14.286939999999504,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow nested",
            "value": 40.99461000001838,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum simple",
            "value": 11.659819999999854,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum complex",
            "value": 25.500340000007782,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum nested",
            "value": 72.43363999999701,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.5519600000061473,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.584809999996196,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 8.658589999993183,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow simple",
            "value": 16.71843000001445,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow complex",
            "value": 39.511499999991884,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow nested",
            "value": 128.17306000001736,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum simple",
            "value": 3.208059999985835,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum complex",
            "value": 5.240289999994729,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum nested",
            "value": 17.039729999987685,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.8235499999841522,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 1.3837499999908687,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 2.4505800000042655,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum simple",
            "value": 9.14925999999241,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum complex",
            "value": 22.099170000001322,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum nested",
            "value": 68.41684999998279,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.4905799999960436,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.0427000000049702,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.2165500000141947,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum simple",
            "value": 6.6901099999995495,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum complex",
            "value": 9.696730000007392,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum nested",
            "value": 23.60697000001437,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.359909999982392,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.89518000000453,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.68220999998357,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum simple",
            "value": 10.53905000001123,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum complex",
            "value": 24.059599999998227,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum nested",
            "value": 70.85779999999886,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.6070199999944634,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.3730000000000473,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.181200000004992,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum simple",
            "value": 343.22104999999965,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum complex",
            "value": 806.9797999999992,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum nested",
            "value": 2078.238450000015,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum simple",
            "value": 442.7728199999933,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum complex",
            "value": 1173.8089700000046,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum nested",
            "value": 1164.833259999989,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum simple",
            "value": 8.783640000012838,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum complex",
            "value": 31.754270000010365,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum nested",
            "value": 71.67998999999554,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum simple",
            "value": 33.97048000001632,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum complex",
            "value": 86.14516999998614,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.637619999971321,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.4410499999894455,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 22.346509999988484,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.540210000016941,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.423919999999271,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 7.783480000000509,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Time",
            "value": 39.22512949999998,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Time",
            "value": 35.316281499999945,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.71563720703125,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Pydantic v2 (validate_json) Time",
            "value": 4.249003499999958,
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
          "id": "a9bdf066e9cd9e25b72566001faeffd7a3a0791a",
          "message": "fix: ensure benchmarks metadata directory exists and improve workflow robustness",
          "timestamp": "2026-02-23T09:59:17+02:00",
          "tree_id": "b22646de224fd68476f1c14cf050281f84f205f6",
          "url": "https://github.com/webmaven/lodum/commit/a9bdf066e9cd9e25b72566001faeffd7a3a0791a"
        },
        "date": 1771833772782,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(windows-latest) JSON Serialization Lodum simple",
            "value": 4.495340000005399,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum complex",
            "value": 7.41294000000039,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum nested",
            "value": 21.35617999999795,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.4482100000009268,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) complex",
            "value": 2.0657000000028347,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.6837499999933243,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow simple",
            "value": 6.670069999995576,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow complex",
            "value": 14.484879999997702,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow nested",
            "value": 41.27937000000088,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum simple",
            "value": 11.526939999998831,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum complex",
            "value": 25.09297999999376,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum nested",
            "value": 71.05902999999785,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.587210000008099,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.585620000002109,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 8.972879999987526,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow simple",
            "value": 17.587149999991425,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow complex",
            "value": 39.588859999997794,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow nested",
            "value": 126.76866999999561,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum simple",
            "value": 3.2434099999932187,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum complex",
            "value": 5.416230000002997,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum nested",
            "value": 16.58391000000279,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.8359799999993811,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 1.4138900000034482,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 2.454989999995405,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum simple",
            "value": 9.215969999996787,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum complex",
            "value": 22.54552999999646,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum nested",
            "value": 65.88177999999516,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.4869099999893933,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.0065899999972316,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.1781000000089534,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum simple",
            "value": 6.499019999989741,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum complex",
            "value": 9.56868000000668,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum nested",
            "value": 24.47833999999034,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.260560000005853,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.675100000001976,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.698390000006384,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum simple",
            "value": 10.686889999999494,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum complex",
            "value": 23.97309999999493,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum nested",
            "value": 68.47207000001276,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.6350600000066606,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.394880000002786,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.157820000000356,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum simple",
            "value": 340.5961600000012,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum complex",
            "value": 799.1883900000005,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum nested",
            "value": 2054.9094799999975,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum simple",
            "value": 445.06706000000236,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum complex",
            "value": 1175.8108200000038,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum nested",
            "value": 1131.8656000000033,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum simple",
            "value": 8.339200000000346,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum complex",
            "value": 28.44106000000579,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum nested",
            "value": 63.604610000004406,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum simple",
            "value": 30.017430000009426,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum complex",
            "value": 82.98431000000619,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.520730000001549,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.680120000004308,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 22.088469999999916,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.478909999995494,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.2575300000009975,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 7.697150000001329,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Time",
            "value": 37.8847361,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Time",
            "value": 35.567882,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.71563720703125,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Pydantic v2 (validate_json) Time",
            "value": 4.506734599999959,
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
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "github-actions[bot]@users.noreply.github.com"
          },
          "id": "49ba79e289d0697a05526177588ff55550b33eb7",
          "message": "chore: update hardware signature for ubuntu-latest",
          "timestamp": "2026-02-23T08:00:08Z",
          "url": "https://github.com/webmaven/lodum/commit/49ba79e289d0697a05526177588ff55550b33eb7"
        },
        "date": 1771833813829,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(windows-latest) JSON Serialization Lodum simple",
            "value": 4.812580000009348,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum complex",
            "value": 7.358879999992496,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum nested",
            "value": 21.302300000002106,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.4370699999858516,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.9988699999998971,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.8106299999867588,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow simple",
            "value": 6.595509999999649,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow complex",
            "value": 14.32113999998137,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow nested",
            "value": 40.538230000004205,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum simple",
            "value": 12.466059999997015,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum complex",
            "value": 24.880060000009507,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum nested",
            "value": 73.04134999999405,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.6350900000247748,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.574830000014572,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 6.922429999997348,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow simple",
            "value": 16.731850000007853,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow complex",
            "value": 39.35513999998648,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow nested",
            "value": 118.86041999998724,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum simple",
            "value": 3.2547299999919233,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum complex",
            "value": 6.300990000011097,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum nested",
            "value": 16.76235000001043,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.8076699999946868,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 1.3742699999966135,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 2.398530000004939,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum simple",
            "value": 9.163100000012037,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum complex",
            "value": 21.56723000000511,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum nested",
            "value": 67.73833000002014,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.49845999999433843,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.0071599999946557,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.2932500000024447,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum simple",
            "value": 6.66023999999652,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum complex",
            "value": 9.722530000010465,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum nested",
            "value": 23.627269999985856,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.253789999972923,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.852340000001277,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.682820000001357,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum simple",
            "value": 10.949200000004566,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum complex",
            "value": 24.307690000000548,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum nested",
            "value": 71.60761000000093,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.627209999992374,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.3669900000186317,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.154530000005252,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum simple",
            "value": 359.57786000001306,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum complex",
            "value": 855.7785999999965,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum nested",
            "value": 2149.291219999998,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum simple",
            "value": 431.94816999998693,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum complex",
            "value": 1149.8583399999802,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum nested",
            "value": 1147.5103200000035,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum simple",
            "value": 8.456279999995786,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum complex",
            "value": 28.18596999999272,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum nested",
            "value": 63.183059999994384,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum simple",
            "value": 30.198410000002696,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum complex",
            "value": 84.77845000002162,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.42337999998017,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.628189999992173,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 22.642820000010033,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.563459999998031,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.317760000014914,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 7.705299999986437,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Time",
            "value": 39.00975510000001,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Time",
            "value": 40.33348509999996,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7155847549438477,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Pydantic v2 (validate_json) Time",
            "value": 4.397695399999975,
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
          "id": "e56b0efb4465c89a7b5359581622836221d8d4b3",
          "message": "docs: add trailing slash to dashboard link",
          "timestamp": "2026-02-23T08:08:32Z",
          "url": "https://github.com/webmaven/lodum/commit/e56b0efb4465c89a7b5359581622836221d8d4b3"
        },
        "date": 1771834283225,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(windows-latest) JSON Serialization Lodum simple",
            "value": 4.861400000004323,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum complex",
            "value": 7.808860000000095,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum nested",
            "value": 21.859719999986282,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.4996299999779694,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) complex",
            "value": 2.122400000007474,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.877460000001065,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow simple",
            "value": 6.825419999984206,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow complex",
            "value": 14.966209999988678,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow nested",
            "value": 39.143520000016,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum simple",
            "value": 11.42946000001075,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum complex",
            "value": 25.787629999990713,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum nested",
            "value": 73.35011000000122,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.5413800000146693,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.811979999989944,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 7.0503500000086206,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow simple",
            "value": 20.7481499999858,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow complex",
            "value": 42.12673999999197,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow nested",
            "value": 136.63119999999935,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum simple",
            "value": 3.2762199999865516,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum complex",
            "value": 5.572780000011335,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum nested",
            "value": 17.410610000001725,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.8335399999850779,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 1.4240599999880033,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 2.5192700000047807,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum simple",
            "value": 9.254810000004454,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum complex",
            "value": 22.060690000000704,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum nested",
            "value": 68.09257999999545,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.4984299999932773,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.0040499999718122,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.1903399999928297,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum simple",
            "value": 6.882359999997334,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum complex",
            "value": 10.145460000012463,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum nested",
            "value": 23.55603999997129,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.290320000006886,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 6.031669999981659,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 9.114039999997203,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum simple",
            "value": 11.125159999994594,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum complex",
            "value": 26.59561999998914,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum nested",
            "value": 79.54498999999942,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.935809999997673,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 3.198330000009264,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.277130000002671,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum simple",
            "value": 388.44411999998556,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum complex",
            "value": 875.6156799999872,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum nested",
            "value": 2100.921190000008,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum simple",
            "value": 447.8805499999794,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum complex",
            "value": 1165.4753199999845,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum nested",
            "value": 1138.0761700000107,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum simple",
            "value": 9.850700000004053,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum complex",
            "value": 27.637209999988954,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum nested",
            "value": 65.61381000001347,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum simple",
            "value": 30.78214999999318,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum complex",
            "value": 86.52101999999786,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 5.068110000013348,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.984490000024834,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 29.20377999998891,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 6.034560000000511,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.427449999991495,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 9.415290000004006,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Time",
            "value": 46.27815680000003,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Time",
            "value": 34.65801350000004,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7155866622924805,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Pydantic v2 (validate_json) Time",
            "value": 4.316393599999969,
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
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "github-actions[bot]@users.noreply.github.com"
          },
          "id": "1fcadd403b44ff5a339bd99cd9f36bba0cb39065",
          "message": "chore: update hardware signature for ubuntu-latest",
          "timestamp": "2026-02-23T08:37:59Z",
          "url": "https://github.com/webmaven/lodum/commit/1fcadd403b44ff5a339bd99cd9f36bba0cb39065"
        },
        "date": 1771836068306,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(windows-latest) JSON Serialization Lodum simple",
            "value": 4.5369200000038745,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum complex",
            "value": 7.454580000006672,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum nested",
            "value": 21.47674999999367,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.413419999994403,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) complex",
            "value": 2.005759999997281,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.7081299999954354,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow simple",
            "value": 6.762349999996786,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow complex",
            "value": 14.627160000009098,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow nested",
            "value": 40.14205000000288,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum simple",
            "value": 11.587740000004487,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum complex",
            "value": 24.921730000005482,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum nested",
            "value": 72.39464000000453,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.575570000005655,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.5970499999971253,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 6.744190000006256,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow simple",
            "value": 16.70378000000028,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow complex",
            "value": 39.524239999997235,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow nested",
            "value": 123.27089000000342,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum simple",
            "value": 3.2387900000003356,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum complex",
            "value": 5.636269999990873,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum nested",
            "value": 17.13788000000136,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.8425600000066424,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 1.4183300000013332,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 2.4981900000057067,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum simple",
            "value": 9.24837999999113,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum complex",
            "value": 22.000899999994772,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum nested",
            "value": 68.26465999999982,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.49319000000309643,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.0197600000026341,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.2479200000020683,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum simple",
            "value": 6.765319999993835,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum complex",
            "value": 9.829470000005358,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum nested",
            "value": 23.069520000001376,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.255160000002434,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.6269400000076075,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.776549999998906,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum simple",
            "value": 10.846529999992072,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum complex",
            "value": 23.165890000001355,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum nested",
            "value": 70.07300000000782,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.6076800000007552,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.3919599999999264,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.048060000002351,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum simple",
            "value": 344.22934000000964,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum complex",
            "value": 801.3862399999937,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum nested",
            "value": 2046.5022500000034,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum simple",
            "value": 435.8966300000077,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum complex",
            "value": 1150.6992200000013,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum nested",
            "value": 1118.2061299999987,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum simple",
            "value": 8.398149999999305,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum complex",
            "value": 27.41463999999496,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum nested",
            "value": 63.82003999999597,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum simple",
            "value": 30.012639999995372,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum complex",
            "value": 83.00044000000071,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.450480000002699,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.503259999993816,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 21.78923999999256,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.572850000006156,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.441779999996243,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 8.031250000004775,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Time",
            "value": 38.30003099999999,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Time",
            "value": 36.716871099999935,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7155265808105469,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Pydantic v2 (validate_json) Time",
            "value": 4.630299799999989,
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
          "id": "b6ad19948d8c2e2aa98a4fe0862ba804ce422a59",
          "message": "fix: resolve syntax error in get_hw_info.py",
          "timestamp": "2026-02-23T10:53:01+02:00",
          "tree_id": "238f07d7015075070babe5245d67463929494fbe",
          "url": "https://github.com/webmaven/lodum/commit/b6ad19948d8c2e2aa98a4fe0862ba804ce422a59"
        },
        "date": 1771836996351,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(windows-latest) JSON Serialization Lodum simple",
            "value": 4.621189999997455,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum complex",
            "value": 7.506940000001805,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum nested",
            "value": 21.273959999999192,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.4115699999962317,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.9819399999988718,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.6863999999980024,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow simple",
            "value": 6.657250000003501,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow complex",
            "value": 14.933819999998832,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow nested",
            "value": 42.194210000002386,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum simple",
            "value": 11.618179999999256,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum complex",
            "value": 24.737580000001458,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum nested",
            "value": 71.43352999999877,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.5391199999953642,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.555420000001618,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 6.87087999999676,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow simple",
            "value": 17.46112000000437,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow complex",
            "value": 39.96463000000006,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow nested",
            "value": 123.86001000000135,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum simple",
            "value": 3.227700000002187,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum complex",
            "value": 5.390830000001756,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum nested",
            "value": 16.655090000006112,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.8097299999974439,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 1.4168300000022782,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 2.464679999994246,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum simple",
            "value": 9.267129999997792,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum complex",
            "value": 21.49050000000159,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum nested",
            "value": 67.29537000000221,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.4933599999986882,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.0158200000034867,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.1994799999987436,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum simple",
            "value": 6.70526000000109,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum complex",
            "value": 9.830699999997705,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum nested",
            "value": 23.661709999998948,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.239320000002067,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.693910000002234,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.610610000002339,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum simple",
            "value": 10.88943000000313,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum complex",
            "value": 23.441510000003518,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum nested",
            "value": 68.71014000000173,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.591969999998355,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.3468799999989187,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.090060000004314,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum simple",
            "value": 344.15102000000104,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum complex",
            "value": 808.115220000002,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum nested",
            "value": 2066.0081700000005,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum simple",
            "value": 440.1196300000038,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum complex",
            "value": 1154.7696500000086,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum nested",
            "value": 1131.6554000000053,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum simple",
            "value": 8.334519999999657,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum complex",
            "value": 28.33800000000224,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum nested",
            "value": 62.85366000000181,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum simple",
            "value": 30.099680000000717,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum complex",
            "value": 83.00535000000195,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.505129999995461,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.558300000000372,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 22.45932999999809,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.5795700000051056,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.619729999990341,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 7.910049999998137,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Time",
            "value": 37.9847398,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Time",
            "value": 35.93380969999998,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.71563720703125,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Pydantic v2 (validate_json) Time",
            "value": 4.411771500000043,
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
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "github-actions[bot]@users.noreply.github.com"
          },
          "id": "fdee763c5e0a08f71ba248f6bff302160c991d2f",
          "message": "chore: update hardware signature for windows-latest",
          "timestamp": "2026-02-23T08:54:19Z",
          "url": "https://github.com/webmaven/lodum/commit/fdee763c5e0a08f71ba248f6bff302160c991d2f"
        },
        "date": 1771837011912,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(windows-latest) JSON Serialization Lodum simple",
            "value": 4.595099999997387,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum complex",
            "value": 7.4375100000025895,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum nested",
            "value": 21.12040999999749,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.4240000000000919,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.954649999998992,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.7164200000034953,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow simple",
            "value": 6.674140000001216,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow complex",
            "value": 14.946800000001303,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow nested",
            "value": 40.491510000001085,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum simple",
            "value": 11.566479999996204,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum complex",
            "value": 25.089929999995775,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum nested",
            "value": 71.87457999999936,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.552580000000603,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.561060000007842,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 6.612200000000712,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow simple",
            "value": 16.960680000002526,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow complex",
            "value": 39.02737999999886,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow nested",
            "value": 122.02359999999999,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum simple",
            "value": 3.317349999997532,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum complex",
            "value": 5.275650000004362,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum nested",
            "value": 16.62811000000488,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.8596999999952004,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 1.4127500000029158,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 2.428479999997535,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum simple",
            "value": 9.203440000004548,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum complex",
            "value": 21.61447000000294,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum nested",
            "value": 68.2184399999926,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.5062300000076903,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.0278799999980492,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.258569999997917,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum simple",
            "value": 6.647139999995488,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum complex",
            "value": 9.688360000006924,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum nested",
            "value": 23.378939999997783,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.216589999998632,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.697969999999941,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.60370999999418,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum simple",
            "value": 10.634960000004412,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum complex",
            "value": 24.013909999996486,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum nested",
            "value": 71.2613699999963,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.5993400000070324,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.3836500000072647,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.19317999999862,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum simple",
            "value": 340.23588999999674,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum complex",
            "value": 806.8524000000025,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum nested",
            "value": 2050.0209700000028,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum simple",
            "value": 443.6444900000083,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum complex",
            "value": 1154.9789999999973,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum nested",
            "value": 1125.172800000007,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum simple",
            "value": 8.506800000003523,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum complex",
            "value": 28.272640000000138,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum nested",
            "value": 64.40884999999525,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum simple",
            "value": 29.68770999999606,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum complex",
            "value": 82.01200000000881,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.477649999995492,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.511360000001787,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 22.035249999998996,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.4689999999955035,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.411260000006223,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 7.879420000006121,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Time",
            "value": 37.57005240000001,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Time",
            "value": 35.04704889999999,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7155838012695312,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Pydantic v2 (validate_json) Time",
            "value": 4.280442499999992,
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
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "github-actions[bot]@users.noreply.github.com"
          },
          "id": "fdee763c5e0a08f71ba248f6bff302160c991d2f",
          "message": "chore: update hardware signature for windows-latest",
          "timestamp": "2026-02-23T08:54:19Z",
          "url": "https://github.com/webmaven/lodum/commit/fdee763c5e0a08f71ba248f6bff302160c991d2f"
        },
        "date": 1771837041964,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(windows-latest) JSON Serialization Lodum simple",
            "value": 5.044219999990673,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum complex",
            "value": 7.457720000002155,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum nested",
            "value": 21.377750000010565,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.4250100000140264,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) complex",
            "value": 2.0087000000103217,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.9751199999955134,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow simple",
            "value": 6.67967999999064,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow complex",
            "value": 15.134409999996024,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow nested",
            "value": 40.04625999999689,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum simple",
            "value": 11.720670000011069,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum complex",
            "value": 24.957440000002862,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum nested",
            "value": 71.691229999999,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.591560000008485,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.555250000000342,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 7.288100000016584,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow simple",
            "value": 16.293399999995017,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow complex",
            "value": 43.61772000000883,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow nested",
            "value": 124.14150999999265,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum simple",
            "value": 3.169979999995576,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum complex",
            "value": 5.258119999996325,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum nested",
            "value": 17.242590000012115,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 1.5274599999997918,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 1.9342400000027737,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 2.5229200000012497,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum simple",
            "value": 9.93332000001601,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum complex",
            "value": 23.26178999999229,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum nested",
            "value": 68.30028000000539,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.4656200000226818,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 0.991700000020046,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.2083500000007916,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum simple",
            "value": 6.620910000003732,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum complex",
            "value": 9.749750000014501,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum nested",
            "value": 24.749959999996918,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.287090000002536,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.752920000008999,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.675719999996545,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum simple",
            "value": 11.142589999997199,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum complex",
            "value": 24.355549999995674,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum nested",
            "value": 74.54581999999164,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.5676900000130445,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.4252500000102373,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.133909999984553,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum simple",
            "value": 349.6820399999933,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum complex",
            "value": 828.7948899999947,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum nested",
            "value": 2078.225159999988,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum simple",
            "value": 435.7959000000051,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum complex",
            "value": 1152.2930400000178,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum nested",
            "value": 1135.457329999997,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum simple",
            "value": 8.397750000005999,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum complex",
            "value": 28.36391000000731,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum nested",
            "value": 64.06717000000981,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum simple",
            "value": 30.029480000007425,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum complex",
            "value": 83.82850000000417,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.688510000005408,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.666689999997288,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 22.05511000000797,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.6937899999884394,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.5574699999974655,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 8.164480000016283,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Time",
            "value": 39.377598000000035,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Time",
            "value": 37.48342620000005,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7155866622924805,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Pydantic v2 (validate_json) Time",
            "value": 4.144005399999969,
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
          "id": "136743961d81d91580f1772ccbee9a4159533f93",
          "message": "fix: resolve indentation error in get_hw_info.py",
          "timestamp": "2026-02-23T11:16:25+02:00",
          "tree_id": "2694e27d4c4e0b71d9833db5b4eb4f445bc2d56d",
          "url": "https://github.com/webmaven/lodum/commit/136743961d81d91580f1772ccbee9a4159533f93"
        },
        "date": 1771838397785,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(windows-latest) JSON Serialization Lodum simple",
            "value": 4.689689999997881,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum complex",
            "value": 7.561500000002752,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum nested",
            "value": 21.7301300000031,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.4183799999955227,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.9709900000009386,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.732940000003282,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow simple",
            "value": 6.67503000000238,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow complex",
            "value": 14.390700000001289,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow nested",
            "value": 39.669019999996635,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum simple",
            "value": 11.502919999998085,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum complex",
            "value": 25.004999999998745,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum nested",
            "value": 71.58169999999586,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.5492099999960374,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.6770099999964714,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 6.837940000002618,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow simple",
            "value": 19.025409999994736,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow complex",
            "value": 40.975909999997384,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow nested",
            "value": 126.32932000000208,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum simple",
            "value": 3.2763500000044132,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum complex",
            "value": 5.425759999997126,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum nested",
            "value": 16.949560000000474,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.8545599999933984,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 1.4074099999845657,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 2.388070000006337,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum simple",
            "value": 9.123119999992468,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum complex",
            "value": 21.220569999996997,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum nested",
            "value": 70.35950999999727,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.4913599999952112,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.0026499999980842,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.2456600000055005,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum simple",
            "value": 6.5894100000036815,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum complex",
            "value": 9.67388000000824,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum nested",
            "value": 23.548899999997275,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.275549999994155,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.76575000000048,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.598369999998567,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum simple",
            "value": 10.695850000001883,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum complex",
            "value": 23.89982000000259,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum nested",
            "value": 70.32743000000323,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.6496600000039052,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.4695599999915885,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.261910000002445,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum simple",
            "value": 343.7852100000043,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum complex",
            "value": 811.8819099999996,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum nested",
            "value": 2043.0944300000021,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum simple",
            "value": 438.9415900000017,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum complex",
            "value": 1162.8346799999917,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum nested",
            "value": 1129.1531700000064,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum simple",
            "value": 8.540139999985286,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum complex",
            "value": 28.345089999993434,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum nested",
            "value": 63.42425000000276,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum simple",
            "value": 29.573409999994738,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum complex",
            "value": 82.40513000000647,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.52601999998592,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.9647099999940565,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 22.11459000000673,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.5987500000032924,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.442709999989347,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 7.82813000000715,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Time",
            "value": 38.8472137,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Time",
            "value": 36.128783699999985,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7155866622924805,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Pydantic v2 (validate_json) Time",
            "value": 4.208723299999974,
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
          "id": "136743961d81d91580f1772ccbee9a4159533f93",
          "message": "fix: resolve indentation error in get_hw_info.py",
          "timestamp": "2026-02-23T09:16:25Z",
          "url": "https://github.com/webmaven/lodum/commit/136743961d81d91580f1772ccbee9a4159533f93"
        },
        "date": 1771838416520,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(windows-latest) JSON Serialization Lodum simple",
            "value": 4.610470000000078,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum complex",
            "value": 7.402990000002774,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum nested",
            "value": 21.548749999999472,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.3957199999936165,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) complex",
            "value": 2.038679999998294,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.719369999993205,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow simple",
            "value": 6.777429999993956,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow complex",
            "value": 15.486929999997301,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow nested",
            "value": 40.658750000000055,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum simple",
            "value": 11.78796000000375,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum complex",
            "value": 25.117929999993294,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum nested",
            "value": 72.00553999999784,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.584709999997358,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.5843100000031427,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 6.713200000001507,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow simple",
            "value": 17.143290000007028,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow complex",
            "value": 39.617150000003676,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow nested",
            "value": 122.1675399999981,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum simple",
            "value": 3.273920000003727,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum complex",
            "value": 5.414800000005471,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum nested",
            "value": 16.722600000002785,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.8333499999992,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 1.4115500000059455,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 2.414400000003525,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum simple",
            "value": 9.327009999998381,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum complex",
            "value": 21.23873000000458,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum nested",
            "value": 68.49687999999787,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.49420000000282016,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.0182100000065475,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.2624700000051234,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum simple",
            "value": 6.786870000001954,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum complex",
            "value": 9.93781000001377,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum nested",
            "value": 23.579369999993105,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.302190000004202,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.7666900000015175,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.625680000000102,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum simple",
            "value": 11.074659999991354,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum complex",
            "value": 23.566499999998314,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum nested",
            "value": 70.8663999999942,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.568880000002082,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.3496600000044054,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.098879999997962,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum simple",
            "value": 344.82834000000366,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum complex",
            "value": 812.2366900000031,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum nested",
            "value": 2112.4209900000096,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum simple",
            "value": 450.9669400000064,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum complex",
            "value": 1301.1837700000115,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum nested",
            "value": 1143.0285799999979,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum simple",
            "value": 8.357879999994111,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum complex",
            "value": 27.70752999999786,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum nested",
            "value": 62.65130000000454,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum simple",
            "value": 30.25602999999819,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum complex",
            "value": 82.86578999999392,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.4706299999916155,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.453139999985069,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 21.982470000000376,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.4827499999892098,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.357860000004621,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 8.03174999998646,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Time",
            "value": 38.262276199999974,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Time",
            "value": 35.379307400000016,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.71563720703125,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Pydantic v2 (validate_json) Time",
            "value": 4.249594000000002,
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
          "id": "ffb6b17ebbaf64ac9ebd6c18fcf3cd80f638a874",
          "message": "fix: correctly associate historical benchmarks with their commit IDs",
          "timestamp": "2026-02-23T11:21:48+02:00",
          "tree_id": "ed70373efb05d65e86192eae29f94b0e9e4016bc",
          "url": "https://github.com/webmaven/lodum/commit/ffb6b17ebbaf64ac9ebd6c18fcf3cd80f638a874"
        },
        "date": 1771838722460,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(windows-latest) JSON Serialization Lodum simple",
            "value": 4.334090000008928,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum complex",
            "value": 7.118489999999156,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum nested",
            "value": 20.363410000004478,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.429200000001174,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.938519999998789,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.8557400000001962,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow simple",
            "value": 6.408399999992298,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow complex",
            "value": 14.103259999995998,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow nested",
            "value": 38.911319999999705,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum simple",
            "value": 10.68396000000007,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum complex",
            "value": 23.198560000003,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum nested",
            "value": 65.35812000000192,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.50408999999172,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.58209999999508,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 9.480229999996936,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow simple",
            "value": 15.526140000002897,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow complex",
            "value": 37.13428000000363,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow nested",
            "value": 112.27628000000323,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum simple",
            "value": 3.1597900000008394,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum complex",
            "value": 5.184430000002749,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum nested",
            "value": 16.138899999998557,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.7540700000106426,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 1.2347000000033859,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 2.195030000001452,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum simple",
            "value": 9.005720000004658,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum complex",
            "value": 19.711059999991676,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum nested",
            "value": 60.178289999998924,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.4663399999969897,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 0.9639300000003459,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.090459999999439,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum simple",
            "value": 6.31521000000248,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum complex",
            "value": 9.592869999994491,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum nested",
            "value": 21.982470000000376,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.038339999993923,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.462110000001985,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.350699999999733,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum simple",
            "value": 10.177740000011681,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum complex",
            "value": 21.8166300000064,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum nested",
            "value": 63.189330000000155,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.5598899999929472,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.320190000000366,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.01348999999982,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum simple",
            "value": 304.3434999999988,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum complex",
            "value": 715.101020000003,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum nested",
            "value": 1832.9395499999976,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum simple",
            "value": 372.93726000000333,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum complex",
            "value": 996.7911400000048,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum nested",
            "value": 970.4612700000041,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum simple",
            "value": 7.796760000002223,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum complex",
            "value": 25.773400000002766,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum nested",
            "value": 60.300519999998414,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum simple",
            "value": 28.3303500000045,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum complex",
            "value": 76.96564000000876,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.281219999995756,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.386120000007622,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 21.010790000008228,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.5039499999925283,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.29541000000313,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 7.754770000002509,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Time",
            "value": 39.009466499999974,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Time",
            "value": 38.02247380000006,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7155771255493164,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Pydantic v2 (validate_json) Time",
            "value": 4.3592830999999705,
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
          "id": "ffb6b17ebbaf64ac9ebd6c18fcf3cd80f638a874",
          "message": "fix: correctly associate historical benchmarks with their commit IDs",
          "timestamp": "2026-02-23T09:21:48Z",
          "url": "https://github.com/webmaven/lodum/commit/ffb6b17ebbaf64ac9ebd6c18fcf3cd80f638a874"
        },
        "date": 1771838764860,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(windows-latest) JSON Serialization Lodum simple",
            "value": 4.515590000005432,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum complex",
            "value": 7.432590000007622,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum nested",
            "value": 21.21810999999525,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.4386499999886837,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.9975300000169227,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.8173100000108207,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow simple",
            "value": 6.558660000007421,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow complex",
            "value": 14.441800000008698,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow nested",
            "value": 39.546469999993406,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum simple",
            "value": 11.342669999999089,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum complex",
            "value": 25.21355000000085,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum nested",
            "value": 71.21148999998468,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.536129999988134,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.5508299999955852,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 6.715049999991152,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow simple",
            "value": 16.746450000005098,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow complex",
            "value": 39.1150400000015,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow nested",
            "value": 119.30701000002273,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum simple",
            "value": 3.2674500000098305,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum complex",
            "value": 5.507439999996677,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum nested",
            "value": 17.35878000000639,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.8209899999997106,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 1.4044200000057572,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 2.521619999993163,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum simple",
            "value": 9.254020000003038,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum complex",
            "value": 21.128799999996772,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum nested",
            "value": 68.28818999998703,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.4899399999999332,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.0122899999942092,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.2776599999929203,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum simple",
            "value": 6.585750000022017,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum complex",
            "value": 9.82240000001866,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum nested",
            "value": 23.40265000001409,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.298990000006597,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.831510000007256,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.732060000011188,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum simple",
            "value": 11.010059999989608,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum complex",
            "value": 23.846560000004047,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum nested",
            "value": 71.73244999999042,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.6081900000017413,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.4183200000038596,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.126670000016475,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum simple",
            "value": 342.7907600000026,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum complex",
            "value": 810.150699999997,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum nested",
            "value": 2041.1537400000043,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum simple",
            "value": 436.6989600000011,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum complex",
            "value": 1133.434469999986,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum nested",
            "value": 1097.772109999994,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum simple",
            "value": 8.43643000001748,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum complex",
            "value": 27.415050000001884,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum nested",
            "value": 63.07070999998814,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum simple",
            "value": 29.756030000010014,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum complex",
            "value": 82.8637699999831,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.471329999989848,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.441410000002179,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 21.914000000003853,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.485669999986385,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.402459999994335,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 7.862429999977394,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Time",
            "value": 39.11332970000001,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Time",
            "value": 36.66439019999996,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7155866622924805,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Pydantic v2 (validate_json) Time",
            "value": 4.33884240000009,
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