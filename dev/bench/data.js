window.BENCHMARK_DATA = {
  "lastUpdate": 1771828329540,
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
          "id": "cab9f8318ab8b2e7282edca37c6f18565edd819f",
          "message": "fix: update benchmark tool name to 'customSmallerIsBetter'",
          "timestamp": "2026-02-23T08:29:14+02:00",
          "tree_id": "2875739bd18538a7c321b0e8460a808819037186",
          "url": "https://github.com/webmaven/lodum/commit/cab9f8318ab8b2e7282edca37c6f18565edd819f"
        },
        "date": 1771828328844,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum simple",
            "value": 5.058190199997625,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum complex",
            "value": 7.9383524999997235,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum nested",
            "value": 22.396614800000236,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.2988136000004147,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.774337900000944,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.2658315000006155,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow simple",
            "value": 7.426782499999263,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow complex",
            "value": 16.441969600002437,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow nested",
            "value": 44.17005529999898,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum simple",
            "value": 12.03968690000039,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum complex",
            "value": 25.784029400000463,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum nested",
            "value": 73.16255300000165,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.56146530000143,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.327080799997816,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 5.405245799998681,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow simple",
            "value": 19.330912100001285,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow complex",
            "value": 44.60805960000016,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow nested",
            "value": 135.45621359999984,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum simple",
            "value": 3.1184379999999123,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum complex",
            "value": 5.215547000000242,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum nested",
            "value": 16.896609300000875,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.6223033999987138,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 0.96182070000026,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 1.6365430000021775,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum simple",
            "value": 10.177425800000606,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum complex",
            "value": 22.000179000001197,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum nested",
            "value": 68.12877670000006,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.5106868999988023,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.025078800000756,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.2883227000008333,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum simple",
            "value": 6.524575999999627,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum complex",
            "value": 9.691184500000816,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum nested",
            "value": 23.590200899998592,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.078014799998186,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.382256199997926,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.041444500000239,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum simple",
            "value": 11.874258399998894,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum complex",
            "value": 25.234319300001573,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum nested",
            "value": 72.61134820000024,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.7658725999979197,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.578035700000214,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.468045400000165,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum simple",
            "value": 358.65295730000213,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum complex",
            "value": 824.3407132999977,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum nested",
            "value": 2102.0052727000007,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum simple",
            "value": 457.7057050999997,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum complex",
            "value": 1201.8534499000025,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum nested",
            "value": 1184.0843776999975,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum simple",
            "value": 8.856350399997837,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum complex",
            "value": 27.271651200001656,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum nested",
            "value": 62.9961652999981,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum simple",
            "value": 30.98084780000363,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum complex",
            "value": 84.76328080000144,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.605159500005129,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.784893599999009,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 23.224776000000702,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.8766204000040716,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.683936499998254,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 8.328667599997175,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Time",
            "value": 37.99228568799998,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Time",
            "value": 29.87808244499999,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7129364013671875,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Pydantic v2 (validate_json) Time",
            "value": 3.5783966999999848,
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