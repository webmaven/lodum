window.BENCHMARK_DATA = {
  "lastUpdate": 1771828696044,
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
          "id": "b0f558129260a1528dfd55041edd7af37df2dabd",
          "message": "chore: update hardware signature for ubuntu-latest",
          "timestamp": "2026-02-23T06:35:33Z",
          "url": "https://github.com/webmaven/lodum/commit/b0f558129260a1528dfd55041edd7af37df2dabd"
        },
        "date": 1771828694807,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum simple",
            "value": 4.839465399999199,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum complex",
            "value": 7.948615699999806,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Lodum nested",
            "value": 21.777583500000475,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.2928234000000316,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) complex",
            "value": 1.78460829999878,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.260147000000302,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow simple",
            "value": 7.4108701000007215,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow complex",
            "value": 16.329661600000378,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Serialization Marshmallow nested",
            "value": 46.351726300000706,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum simple",
            "value": 12.682812900000329,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum complex",
            "value": 26.8452166000003,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Lodum nested",
            "value": 77.59302749999932,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.3737680000019736,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.187932899998657,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 5.36731559999879,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow simple",
            "value": 19.092978800000537,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow complex",
            "value": 45.08672179999991,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) JSON Deserialization Marshmallow nested",
            "value": 137.99416330000014,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum simple",
            "value": 3.137426199999993,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum complex",
            "value": 5.161596199998542,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Lodum nested",
            "value": 17.14504349999686,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.6232117999999787,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 0.965126500000224,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 1.640985999998179,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum simple",
            "value": 10.352715600001261,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum complex",
            "value": 23.828169200000104,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Lodum nested",
            "value": 72.24936920000005,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.5147914999994896,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.01975199999913,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.293738100000553,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum simple",
            "value": 6.590338400000917,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum complex",
            "value": 9.795821199999466,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Lodum nested",
            "value": 24.129264999999123,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.24373149999866,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 9.242920799999865,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.757126699998707,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum simple",
            "value": 12.197397699998191,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum complex",
            "value": 25.73425699999916,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Lodum nested",
            "value": 74.79510270000134,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.8409619999999904,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.6957938000009563,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.628789500000607,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum simple",
            "value": 365.37249570000085,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum complex",
            "value": 838.8670010000013,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Serialization Lodum nested",
            "value": 2129.1965020000007,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum simple",
            "value": 458.7751204000014,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum complex",
            "value": 1214.6116605999978,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) YAML Deserialization Lodum nested",
            "value": 1181.6167411999998,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum simple",
            "value": 8.82060499999966,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum complex",
            "value": 26.73588180000195,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Serialization Lodum nested",
            "value": 62.85563999999795,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum simple",
            "value": 31.508809500004983,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) TOML Deserialization Lodum complex",
            "value": 85.06400029999952,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.5471595999970305,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.695295700004067,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 23.248833200000263,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.7200534000021435,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.496809500002996,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 8.036506299998791,
            "unit": "us"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Time",
            "value": 33.91884438700001,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Time",
            "value": 30.746119340000007,
            "unit": "s"
          },
          {
            "name": "(ubuntu-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7128286361694336,
            "unit": "MB"
          },
          {
            "name": "(ubuntu-latest) Pydantic v2 (validate_json) Time",
            "value": 3.691046825000001,
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
          "id": "cab9f8318ab8b2e7282edca37c6f18565edd819f",
          "message": "fix: update benchmark tool name to 'customSmallerIsBetter'",
          "timestamp": "2026-02-23T08:29:14+02:00",
          "tree_id": "2875739bd18538a7c321b0e8460a808819037186",
          "url": "https://github.com/webmaven/lodum/commit/cab9f8318ab8b2e7282edca37c6f18565edd819f"
        },
        "date": 1771828365032,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "(windows-latest) JSON Serialization Lodum simple",
            "value": 4.513239999999996,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum complex",
            "value": 7.438110000003917,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Lodum nested",
            "value": 21.52541999999471,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) simple",
            "value": 1.419820000000982,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) complex",
            "value": 2.2268999999880634,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Pydantic (v2) nested",
            "value": 3.6874499999953514,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow simple",
            "value": 6.610620000003564,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow complex",
            "value": 14.478200000002062,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Serialization Marshmallow nested",
            "value": 40.33024999999952,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum simple",
            "value": 11.28052999999909,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum complex",
            "value": 24.980709999999817,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Lodum nested",
            "value": 70.5576399999984,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) simple",
            "value": 1.542320000004338,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) complex",
            "value": 2.6173600000049646,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Pydantic (v2) nested",
            "value": 8.515590000007478,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow simple",
            "value": 16.64026999999919,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow complex",
            "value": 39.42118000000505,
            "unit": "us"
          },
          {
            "name": "(windows-latest) JSON Deserialization Marshmallow nested",
            "value": 123.25180000000273,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum simple",
            "value": 3.2204600000000028,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum complex",
            "value": 5.400639999993473,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Lodum nested",
            "value": 16.662610000003042,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) simple",
            "value": 0.8097200000008797,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) complex",
            "value": 1.390040000001136,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Serialization Native msgpack (dict) nested",
            "value": 2.425310000000991,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum simple",
            "value": 9.429910000000064,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum complex",
            "value": 21.00611999999842,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Lodum nested",
            "value": 66.83616999999913,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) simple",
            "value": 0.49447000000668595,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) complex",
            "value": 1.0140499999977237,
            "unit": "us"
          },
          {
            "name": "(windows-latest) MsgPack Deserialization Native msgpack (dict) nested",
            "value": 2.2168200000066918,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum simple",
            "value": 6.699659999998175,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum complex",
            "value": 9.919450000012375,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Lodum nested",
            "value": 23.52117000000362,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) simple",
            "value": 4.334510000001046,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) complex",
            "value": 5.759399999993775,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Serialization Native cbor2 (dict) nested",
            "value": 8.911329999995132,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum simple",
            "value": 10.599350000001095,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum complex",
            "value": 24.14425000000051,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Lodum nested",
            "value": 69.57065000000284,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) simple",
            "value": 1.5801799999962896,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) complex",
            "value": 2.4135200000046098,
            "unit": "us"
          },
          {
            "name": "(windows-latest) CBOR Deserialization Native cbor2 (dict) nested",
            "value": 4.185900000004494,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum simple",
            "value": 343.13790000000495,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum complex",
            "value": 794.5486800000026,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Serialization Lodum nested",
            "value": 2017.1863000000033,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum simple",
            "value": 440.29802999999674,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum complex",
            "value": 1134.2197199999987,
            "unit": "us"
          },
          {
            "name": "(windows-latest) YAML Deserialization Lodum nested",
            "value": 1111.7485999999985,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum simple",
            "value": 8.417839999987109,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum complex",
            "value": 27.948090000001002,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Serialization Lodum nested",
            "value": 63.014559999999165,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum simple",
            "value": 29.067720000000463,
            "unit": "us"
          },
          {
            "name": "(windows-latest) TOML Deserialization Lodum complex",
            "value": 82.32404000000315,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) simple",
            "value": 4.482050000007121,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) complex",
            "value": 6.852209999999559,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Serialization Lodum (Safe) nested",
            "value": 24.255010000001676,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) simple",
            "value": 3.530469999992647,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) complex",
            "value": 4.427679999997736,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Pickle Deserialization Lodum (Safe) nested",
            "value": 7.809199999991279,
            "unit": "us"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Time",
            "value": 38.410575300000005,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Standard (loads) Memory",
            "value": 453.7406358718872,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Time",
            "value": 35.70370710000003,
            "unit": "s"
          },
          {
            "name": "(windows-latest) Lodum Streaming (load_stream) Memory",
            "value": 0.7155342102050781,
            "unit": "MB"
          },
          {
            "name": "(windows-latest) Pydantic v2 (validate_json) Time",
            "value": 4.718085799999926,
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