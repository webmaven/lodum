window.BENCHMARK_DATA = {
  "entries": {
    "Lodum Performance Index - ubuntu-latest": [
      {
        "commit": {
          "id": "05f64aea5c90b6ba04adca8c71d9d04e0d07757c",
          "message": "fix(ci): fix workflow_dispatch condition in benchmarks.yml",
          "timestamp": "2026-04-11T17:52:27+03:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/05f64aea5c90b6ba04adca8c71d9d04e0d07757c"
        },
        "date": 1775919147000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 6.7533218205473275
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 959.2070000010722
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 20.301857499998615
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1161.6439999997397
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 32.44988371428548
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 797.3350000014534
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.370780798167131
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 31.900000003304285
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.8033976993636756
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 12.844000004008649
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.3295871884140955
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 16.600999998672705
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.78470486831601
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 61.414000001036584
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.957765357142915
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 53.92999999997983
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 46.66831016666606
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 78.26599999560813
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.61534083333315
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1570.57500000235
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 16.071967500000284
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 2038.2060000017077
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 23.633605916668188
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1435.0430000007464
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3687562315482629
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 265.88500000457316
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.1869183310682763
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 17.472999999768035
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.326739035283998
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 30.847000004996517
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 19.716630785714933
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 116.52199999900859
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 47.256552571427434
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 112.90500000171733
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 145.04322021428604
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 241.51299999886078
          },
          {
            "name": "MsgPack Serialization Lodum simple",
            "unit": "us",
            "value": 6.786190567677437
          },
          {
            "name": "MsgPack Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 75.311000003353
          },
          {
            "name": "MsgPack Serialization Lodum complex",
            "unit": "us",
            "value": 19.561884250000123
          },
          {
            "name": "MsgPack Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 69.83100000468312
          },
          {
            "name": "MsgPack Serialization Lodum nested",
            "unit": "us",
            "value": 29.78756521428494
          },
          {
            "name": "MsgPack Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 53.62099999928205
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.6502781433333382
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 3.327000001718261
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.00996392163552
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 6.452000000933822
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 1.70773164089549
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 5.409999999983484
          },
          {
            "name": "MsgPack Deserialization Lodum simple",
            "unit": "us",
            "value": 4.957690193050554
          },
          {
            "name": "MsgPack Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 47.088999991729
          },
          {
            "name": "MsgPack Deserialization Lodum complex",
            "unit": "us",
            "value": 13.543750214285158
          },
          {
            "name": "MsgPack Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 49.0920000117967
          },
          {
            "name": "MsgPack Deserialization Lodum nested",
            "unit": "us",
            "value": 20.776597714286385
          },
          {
            "name": "MsgPack Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 44.924000007995346
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.49967886714286786
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.8059999976903782
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.0369956859877463
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 6.822999992550649
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.2296054761768436
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 7.4240000031977615
          },
          {
            "name": "CBOR Serialization Lodum simple",
            "unit": "us",
            "value": 10.422304214286678
          },
          {
            "name": "CBOR Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 90.59999999294632
          },
          {
            "name": "CBOR Serialization Lodum complex",
            "unit": "us",
            "value": 24.966952642857215
          },
          {
            "name": "CBOR Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 60.33300000751751
          },
          {
            "name": "CBOR Serialization Lodum nested",
            "unit": "us",
            "value": 37.0197326428569
          },
          {
            "name": "CBOR Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 64.91199999913988
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 4.230632706514997
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 10.118999995256672
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 5.651707277355703
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 16.090000002577654
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 8.524633029792728
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 16.470999995021884
          },
          {
            "name": "CBOR Deserialization Lodum simple",
            "unit": "us",
            "value": 6.722793051964267
          },
          {
            "name": "CBOR Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 51.58700000151839
          },
          {
            "name": "CBOR Deserialization Lodum complex",
            "unit": "us",
            "value": 16.104906285712723
          },
          {
            "name": "CBOR Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 49.594000003594374
          },
          {
            "name": "CBOR Deserialization Lodum nested",
            "unit": "us",
            "value": 25.72945700000062
          },
          {
            "name": "CBOR Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 48.49100000114959
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 1.9417657800358337
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 5.520000001979497
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 3.279248533327201
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 9.917999989283999
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 6.431339687120267
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 13.094999999907486
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 378.60203158333405
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 938.3909999911566
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 884.0625662857136
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 984.9279999940563
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2215.8830151428574
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2333.609000004344
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 460.2956605714285
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 783.1000000066979
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1213.1945790000032
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1325.507999993647
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1130.1356796666628
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1201.5249999990374
          },
          {
            "name": "TOML Serialization Lodum simple",
            "unit": "us",
            "value": 12.624830000000031
          },
          {
            "name": "TOML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 60.62400001383139
          },
          {
            "name": "TOML Serialization Lodum complex",
            "unit": "us",
            "value": 47.26917716667126
          },
          {
            "name": "TOML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 93.34599999988313
          },
          {
            "name": "TOML Serialization Lodum nested",
            "unit": "us",
            "value": 79.88888835713836
          },
          {
            "name": "TOML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 130.49500000761327
          },
          {
            "name": "TOML Deserialization Lodum simple",
            "unit": "us",
            "value": 22.633050749999956
          },
          {
            "name": "TOML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 100.00800000398158
          },
          {
            "name": "TOML Deserialization Lodum complex",
            "unit": "us",
            "value": 73.93737825000102
          },
          {
            "name": "TOML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 121.20700000650686
          },
          {
            "name": "TOML Deserialization Lodum nested",
            "unit": "us",
            "value": 156.56211471428452
          },
          {
            "name": "TOML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 205.85599997957615
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.230514365277292
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 69.27000001155648
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 18.759330071430572
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 50.555000001395456
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 30.675736785716317
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 69.54100001621555
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.527906114996352
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 39.46399999676942
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.362588312596541
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 31.729999989238422
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.913431694980314
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 27.3220000224228
          }
        ]
      },
      {
        "commit": {
          "id": "7132b0e7d9bab8d548b39ba833a5047e935772ca",
          "message": "fix(ci): fix PYTHONPATH and platform inference in benchmarks",
          "timestamp": "2026-04-11T19:06:51+03:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/7132b0e7d9bab8d548b39ba833a5047e935772ca"
        },
        "date": 1775923611000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 6.537506396229339
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 966.0720000042033
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 20.106194500000033
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1199.9789999990185
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 31.36175791666614
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 805.4230000027474
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3735569909278829
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 33.01099999930557
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.8219773567058237
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 11.11099999917542
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.465964403694444
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 16.450000003942478
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.65485722610739
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 58.45900000167603
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.740610571428505
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 54.53200000005154
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 46.387483714286965
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 80.07899999995516
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.647211499998917
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1561.9230000041284
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 16.06047316666744
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1966.1299999995663
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 23.729282428572418
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1465.267999996911
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.403422064151278
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 265.05600000348295
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.237984704515079
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 15.520000005153634
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.263970730247377
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 30.58800000133033
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 19.666392071429634
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 114.17400000368616
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 47.143315142857745
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 95.61899999965817
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 146.20313142857302
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 237.0939999991606
          },
          {
            "name": "MsgPack Serialization Lodum simple",
            "unit": "us",
            "value": 6.757818319684243
          },
          {
            "name": "MsgPack Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 80.5799999952228
          },
          {
            "name": "MsgPack Serialization Lodum complex",
            "unit": "us",
            "value": 19.674838499998515
          },
          {
            "name": "MsgPack Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 65.57300000054056
          },
          {
            "name": "MsgPack Serialization Lodum nested",
            "unit": "us",
            "value": 28.720587714285475
          },
          {
            "name": "MsgPack Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 53.4200000004148
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.6375543728571286
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 3.3970000004046597
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.0100588943480304
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 5.811000008293377
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 1.7023864805023314
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 5.63099999340011
          },
          {
            "name": "MsgPack Deserialization Lodum simple",
            "unit": "us",
            "value": 5.041928974706556
          },
          {
            "name": "MsgPack Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 49.643000011201366
          },
          {
            "name": "MsgPack Deserialization Lodum complex",
            "unit": "us",
            "value": 13.710353357141562
          },
          {
            "name": "MsgPack Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 49.091999997585845
          },
          {
            "name": "MsgPack Deserialization Lodum nested",
            "unit": "us",
            "value": 21.026121142856116
          },
          {
            "name": "MsgPack Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 44.93400000171732
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.4960967028571466
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.3950000098693636
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.0470475365232652
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 6.58200001169007
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.26568887026952
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 7.203999999205735
          },
          {
            "name": "CBOR Serialization Lodum simple",
            "unit": "us",
            "value": 10.511262428570335
          },
          {
            "name": "CBOR Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 95.01799999611649
          },
          {
            "name": "CBOR Serialization Lodum complex",
            "unit": "us",
            "value": 25.087689214285344
          },
          {
            "name": "CBOR Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 64.2500000083146
          },
          {
            "name": "CBOR Serialization Lodum nested",
            "unit": "us",
            "value": 36.426765142856254
          },
          {
            "name": "CBOR Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 66.27400000525085
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 4.120437318294314
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 9.747999996534418
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 5.488270238622725
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 14.69699999745444
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 8.333301796134727
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 17.433000010669275
          },
          {
            "name": "CBOR Deserialization Lodum simple",
            "unit": "us",
            "value": 6.865663401398242
          },
          {
            "name": "CBOR Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 52.58800000262909
          },
          {
            "name": "CBOR Deserialization Lodum complex",
            "unit": "us",
            "value": 16.233611357143168
          },
          {
            "name": "CBOR Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 50.65499999545864
          },
          {
            "name": "CBOR Deserialization Lodum nested",
            "unit": "us",
            "value": 25.839781571427523
          },
          {
            "name": "CBOR Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 48.44000000048254
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 2.053895870826572
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 5.931000004011366
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 3.2355082760505844
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 17.76300000244646
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 6.359071836198523
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 12.492999999835774
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 385.03328608333356
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 866.0510000026989
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 895.5375051666649
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 991.3760000017646
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2210.6407771428567
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2312.873999997578
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 463.4684454166684
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 740.395999997645
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1227.783354928572
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1334.4360000075994
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1122.805722999997
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1217.2170000042115
          },
          {
            "name": "TOML Serialization Lodum simple",
            "unit": "us",
            "value": 12.845286428571967
          },
          {
            "name": "TOML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 60.09300000187068
          },
          {
            "name": "TOML Serialization Lodum complex",
            "unit": "us",
            "value": 47.38353658333002
          },
          {
            "name": "TOML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 98.50500001107321
          },
          {
            "name": "TOML Serialization Lodum nested",
            "unit": "us",
            "value": 79.25519635714043
          },
          {
            "name": "TOML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 121.1870000190629
          },
          {
            "name": "TOML Deserialization Lodum simple",
            "unit": "us",
            "value": 22.87373985714274
          },
          {
            "name": "TOML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 114.76399998855413
          },
          {
            "name": "TOML Deserialization Lodum complex",
            "unit": "us",
            "value": 74.66750057142845
          },
          {
            "name": "TOML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 120.77599998860933
          },
          {
            "name": "TOML Deserialization Lodum nested",
            "unit": "us",
            "value": 154.2442740000029
          },
          {
            "name": "TOML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 205.08399998675486
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.234142154671661
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 71.17299998071758
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 19.063397166668494
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 49.84399998875233
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 30.07033164285287
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 66.37499998873864
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.41046943813667
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 35.35599998372163
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.369794034305271
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 28.532999976960127
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.941404933336779
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 24.796999980480905
          }
        ]
      },
      {
        "commit": {
          "id": "37530aa38f7c39d5d242ee755e8d0fc529500103",
          "message": "fix(ci): improve CI robustness and fix dependencies",
          "timestamp": "2026-04-11T22:00:35+03:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/37530aa38f7c39d5d242ee755e8d0fc529500103"
        },
        "date": 1775934035000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 6.613316124266327
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 964.8320000010813
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 20.067837416667327
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1215.0270000006458
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 31.52101942857095
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 790.8329999963826
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3833568169436152
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 36.87599999580016
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.8923313476016144
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 12.237999996500548
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.47951723900799
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 16.896000005317546
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.604088068288603
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 60.150000003034165
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.746430857143732
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 63.564999997822724
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 46.62769985714275
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 80.83299999839255
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.773863750000331
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1564.704999999833
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 15.509444428571179
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 2039.0840000032995
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 23.208746857142565
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1451.2920000058216
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.4204177309234298
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 290.91200000408435
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.3459368965196967
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 16.97599999772592
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.423477643426299
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 33.29999999834854
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 18.455230166665615
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 131.15600000190852
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 40.561137571428574
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 98.80799999706369
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 126.90435049999991
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 206.88000000035345
          },
          {
            "name": "MsgPack Serialization Lodum simple",
            "unit": "us",
            "value": 6.542469335470908
          },
          {
            "name": "MsgPack Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 87.51100000381484
          },
          {
            "name": "MsgPack Serialization Lodum complex",
            "unit": "us",
            "value": 19.11413649999953
          },
          {
            "name": "MsgPack Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 68.27199999293043
          },
          {
            "name": "MsgPack Serialization Lodum nested",
            "unit": "us",
            "value": 28.206817000001447
          },
          {
            "name": "MsgPack Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 47.76199999412256
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.6152903142857318
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.573999992705467
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 0.9972123070835324
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 6.6399999951727295
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 1.724660308466981
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 5.728999994403239
          },
          {
            "name": "MsgPack Deserialization Lodum simple",
            "unit": "us",
            "value": 5.027911135297489
          },
          {
            "name": "MsgPack Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 54.60199999163251
          },
          {
            "name": "MsgPack Deserialization Lodum complex",
            "unit": "us",
            "value": 13.497835227432669
          },
          {
            "name": "MsgPack Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 50.796000010677744
          },
          {
            "name": "MsgPack Deserialization Lodum nested",
            "unit": "us",
            "value": 20.698274785715398
          },
          {
            "name": "MsgPack Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 40.701000003195986
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.45770716285718194
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.7439999996659026
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 0.9698923285095657
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 6.8599999991647564
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.007402270715006
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 7.360999987326977
          },
          {
            "name": "CBOR Serialization Lodum simple",
            "unit": "us",
            "value": 10.059986858838506
          },
          {
            "name": "CBOR Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 100.2299999868228
          },
          {
            "name": "CBOR Serialization Lodum complex",
            "unit": "us",
            "value": 23.228423916666685
          },
          {
            "name": "CBOR Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 58.31700001124318
          },
          {
            "name": "CBOR Serialization Lodum nested",
            "unit": "us",
            "value": 34.49758141666711
          },
          {
            "name": "CBOR Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 57.04599999489801
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 4.262492167319905
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 8.983000000739594
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 5.556878597437422
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 14.491999991150806
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 8.277476869419534
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 16.424999998321255
          },
          {
            "name": "CBOR Deserialization Lodum simple",
            "unit": "us",
            "value": 6.800672779679201
          },
          {
            "name": "CBOR Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 57.92700000029072
          },
          {
            "name": "CBOR Deserialization Lodum complex",
            "unit": "us",
            "value": 15.781800999999769
          },
          {
            "name": "CBOR Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 50.82599999184367
          },
          {
            "name": "CBOR Deserialization Lodum nested",
            "unit": "us",
            "value": 25.396454428571605
          },
          {
            "name": "CBOR Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 44.766999991452394
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 1.924021075394742
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 4.426000003832087
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 3.28743585350994
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 9.895000005144539
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 6.427718378849953
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 12.629000011088465
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 304.4642002857125
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 917.1250000008513
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 730.1390177857152
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 852.4459999961209
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 1800.1743969285715
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1913.1090000001905
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 405.36617028571493
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 732.4779999891007
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1045.0800704285734
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1211.6169999956128
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 988.8072295714271
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1102.1720000030655
          },
          {
            "name": "TOML Serialization Lodum simple",
            "unit": "us",
            "value": 12.50118625000122
          },
          {
            "name": "TOML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 64.52700000636469
          },
          {
            "name": "TOML Serialization Lodum complex",
            "unit": "us",
            "value": 40.96907371428366
          },
          {
            "name": "TOML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 97.60599999708575
          },
          {
            "name": "TOML Serialization Lodum nested",
            "unit": "us",
            "value": 69.73930791666542
          },
          {
            "name": "TOML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 107.01099998300379
          },
          {
            "name": "TOML Deserialization Lodum simple",
            "unit": "us",
            "value": 19.80247024999926
          },
          {
            "name": "TOML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 104.8670000045604
          },
          {
            "name": "TOML Deserialization Lodum complex",
            "unit": "us",
            "value": 58.19341157142536
          },
          {
            "name": "TOML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 126.54000002498833
          },
          {
            "name": "TOML Deserialization Lodum nested",
            "unit": "us",
            "value": 135.91812664285538
          },
          {
            "name": "TOML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 188.8829999927566
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.322897009121715
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 76.75500000914326
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 19.11695700000036
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 48.72299999192364
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 30.173430642855287
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 64.6769999832486
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.612522265178198
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 51.786999989644755
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.391884537815342
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 30.986999973947604
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.819035823658217
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 22.333999993406906
          }
        ]
      },
      {
        "commit": {
          "id": "7b334e8edab0040585a8895050e4e65bed38acd4",
          "message": "fix(ci): robust historical benchmarking with latest infrastructure",
          "timestamp": "2026-04-11T22:04:23+03:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/7b334e8edab0040585a8895050e4e65bed38acd4"
        },
        "date": 1775934263000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 6.629759906659971
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 986.0720000034462
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 20.008097166666516
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1163.5580000017853
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 30.525051000000285
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 790.332999997645
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3723042002570571
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 37.2160000026156
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.9001892549639978
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 11.807999996449325
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.443075739783859
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 15.374000000178967
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.575362920913553
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 60.280999996109585
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.284852249999798
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 53.52099999811344
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 46.220294071429485
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 81.05299999527915
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.808811333333035
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1613.163999998335
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 15.319344666666032
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 2053.357999997729
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 23.354659428570862
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1447.1929999970712
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.506631677607122
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 312.87199999496806
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.3967028120916494
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 16.133999999112802
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.419972589120901
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 33.770999998239404
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 18.35395141666633
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 126.98200001182158
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 41.19768528571553
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 96.75600000491613
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 129.87642542857205
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 226.56199999460114
          },
          {
            "name": "MsgPack Serialization Lodum simple",
            "unit": "us",
            "value": 6.67001775529756
          },
          {
            "name": "MsgPack Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 90.81700000024284
          },
          {
            "name": "MsgPack Serialization Lodum complex",
            "unit": "us",
            "value": 19.076799285715293
          },
          {
            "name": "MsgPack Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 65.71900000551523
          },
          {
            "name": "MsgPack Serialization Lodum nested",
            "unit": "us",
            "value": 28.01392449999948
          },
          {
            "name": "MsgPack Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 48.483000000487664
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.600985815000025
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 3.4950000014077887
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 0.9927786323999029
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 6.429999999113534
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 1.7052816217913036
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 6.2090000056969075
          },
          {
            "name": "MsgPack Deserialization Lodum simple",
            "unit": "us",
            "value": 5.165231382036144
          },
          {
            "name": "MsgPack Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 52.98900001093898
          },
          {
            "name": "MsgPack Deserialization Lodum complex",
            "unit": "us",
            "value": 13.644374798564193
          },
          {
            "name": "MsgPack Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 54.16099999422386
          },
          {
            "name": "MsgPack Deserialization Lodum nested",
            "unit": "us",
            "value": 20.86029878571541
          },
          {
            "name": "MsgPack Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 40.84200000420424
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.4528957200000353
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.2130000019160434
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 0.9706545568829418
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 7.440999993946207
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.0302101063925706
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 8.30300000131956
          },
          {
            "name": "CBOR Serialization Lodum simple",
            "unit": "us",
            "value": 10.112336099348918
          },
          {
            "name": "CBOR Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 101.89400001081594
          },
          {
            "name": "CBOR Serialization Lodum complex",
            "unit": "us",
            "value": 23.853817785713716
          },
          {
            "name": "CBOR Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 61.8939999981194
          },
          {
            "name": "CBOR Serialization Lodum nested",
            "unit": "us",
            "value": 34.556944571426534
          },
          {
            "name": "CBOR Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 55.432999999993626
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 4.169080997243526
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 8.562999994410347
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 5.585711108879625
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 15.102999995519895
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 8.217891111760004
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 15.97399999297977
          },
          {
            "name": "CBOR Deserialization Lodum simple",
            "unit": "us",
            "value": 7.043167994026868
          },
          {
            "name": "CBOR Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 56.755000002794986
          },
          {
            "name": "CBOR Deserialization Lodum complex",
            "unit": "us",
            "value": 15.76945707142739
          },
          {
            "name": "CBOR Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 56.546000010371245
          },
          {
            "name": "CBOR Deserialization Lodum nested",
            "unit": "us",
            "value": 25.76645807143052
          },
          {
            "name": "CBOR Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 45.86900000447258
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 1.938985073032247
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 4.115999999498854
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 3.298286930608606
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 8.562999994410347
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 6.487151260504024
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 13.671000004933376
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 303.13222278571624
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 905.2500000024111
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 723.3182380714293
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 846.6379999987339
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 1797.3965650714276
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1889.8710000030405
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 403.27039807142535
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 764.4039999945562
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1067.0171974999992
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1191.2980000090556
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1000.7419904166638
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1092.9289999808134
          },
          {
            "name": "TOML Serialization Lodum simple",
            "unit": "us",
            "value": 12.354868416665
          },
          {
            "name": "TOML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 63.94600001158324
          },
          {
            "name": "TOML Serialization Lodum complex",
            "unit": "us",
            "value": 40.608572928574304
          },
          {
            "name": "TOML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 96.00399999953879
          },
          {
            "name": "TOML Serialization Lodum nested",
            "unit": "us",
            "value": 69.07609335714174
          },
          {
            "name": "TOML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 109.20399998326502
          },
          {
            "name": "TOML Deserialization Lodum simple",
            "unit": "us",
            "value": 20.15567374999942
          },
          {
            "name": "TOML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 116.49599997554105
          },
          {
            "name": "TOML Deserialization Lodum complex",
            "unit": "us",
            "value": 58.825397142860375
          },
          {
            "name": "TOML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 129.3460000226787
          },
          {
            "name": "TOML Deserialization Lodum nested",
            "unit": "us",
            "value": 134.45193333333094
          },
          {
            "name": "TOML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 192.439999977978
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.182983997707383
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 62.183000011373224
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 18.38975885714181
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 67.4519999961376
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 29.511061499997975
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 68.02300001140793
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.620170326651331
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 40.35099999555314
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.345102809208082
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 34.17100001001927
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.730879092261276
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 27.200999994647646
          }
        ]
      }
    ],
    "Lodum Performance Index - Pyodide": [
      {
        "commit": {
          "id": "7b334e8edab0040585a8895050e4e65bed38acd4",
          "message": "fix(ci): robust historical benchmarking with latest infrastructure",
          "timestamp": "2026-04-11T22:04:23+03:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/7b334e8edab0040585a8895050e4e65bed38acd4"
        },
        "date": 1775934263000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 6.503052626872293
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 932.2699999998463
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 19.706481666667663
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1150.0069999996754
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 30.979513714285392
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 772.3619999993048
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3672571573073562
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 26.940000005026832
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.838086802428608
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 9.939000001679688
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.4404230301703937
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 17.66300000127785
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.367048529545677
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 52.627999998833275
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.47987913333253
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 54.461000004835114
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 44.74748389285667
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 74.23800000339043
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.485716249999385
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1532.4630000037587
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 15.711214178571353
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1961.956999998904
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 23.158676033333354
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1987.853999999345
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.421248146749239
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 238.4749999961855
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.264718713450263
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 15.429000001176973
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.444558726581122
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 27.480999996498667
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 18.90307267857137
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 108.10100000213652
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 45.32131973333312
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 86.70199999727402
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 142.20574046666647
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 212.19599999966476
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 376.7800901666677
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 828.4669999980565
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 885.7405785666666
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 970.4810000101816
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2186.7568089666665
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2309.4289999932016
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 448.5593515714277
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 683.3350000192695
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1203.336537576922
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1284.417000022131
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1112.5992731071415
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1394.1320000014912
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.359453162122281
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 53.97099999981947
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 19.0293506000008
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 57.918000010204196
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 30.29069453333288
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 55.022999987386356
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.438103769230032
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 51.7670000022008
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.25961465178332
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 18.073999996204293
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.92513358323926
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 25.566999994453
          }
        ]
      }
    ]
  },
  "history": [
    "9265587501b6597cd995730e37fc95f64ddca79f",
    "1fb87eb57ae833359443384fbc4238072ca2b614",
    "972abcafec1f84282b3bfbf2458640d43708a5c3",
    "c249f1e43d0043ea6215e5c64e13082624cb86c0",
    "2d0e16dd3e930bca2e6842fbb844f27253b9d194",
    "d6a0ff900a39f2ce5e895168affe0371748f6d8e",
    "df033c0f2503a7023f9e6b2bbc5a245ac0ccaee8",
    "3bac7a91a148ca61cdd3f0830fd7cdb267d62ade",
    "183cf8791be02007dd18b533afce5a0e4e26b143",
    "4144800d2c4d4b3f62ad5657ac89c7e8713816fa",
    "d47b84f95acd2932bd42a0c4dcea7883be0267a4",
    "37109faa290309f59d60017ec9a90690cb6e6e5f",
    "67d98481142c3e7ef21ffaa65192a3c7590cff0c",
    "3506e55b19d5fb12c4fe3fdc341d69e205492846",
    "18845ea1c08ac4442816751120b7765cad7eb5c1",
    "8d2f13a5eb3198392bddcbf85141910eae3eeba3",
    "deb7cf1ea86dbc4a7979f2f96f03fc5a0f800dd4",
    "51de95449842ca1ddd3fb95bb7a5ad83a67acbc3",
    "c3363932119acf89967c0a54964d41724e545cda",
    "7fbdc2c4a38c1d407d417be7ec4784e1f656d24d",
    "c39b95eccdd38968c46fe057fe35da97145ee10f",
    "b38758f7f9956e3c1e77a7901227ae5ac4df9f53",
    "5dac6e22506ad7492df9ab69fc03e48e610dfcb1",
    "b6b7cb3158bd867bad865bab65cbcd4d3c0f0c57",
    "c569f1a2e499217f60db94ffdfa56d353ffd5c34",
    "f2bac7459853208af21b247fd135095bf61c8f8f",
    "27dc50c22a72d7e83e1df4dfc037a5abc6456816",
    "b51b1d042ec040297a97f9bc1033aeff80e56dd5",
    "0456e09636d5258e938fcda36cb9929b76497da2",
    "a0eb50b2936bbb824cd541544f02bd1ce44d5ccd",
    "fd71eb9050deb8a3b152c37ec8c8afdd5173cbee",
    "a3ba95a6d1d92cfcb45a48fa7a1e74ef410026a0",
    "9638db53725f6c58583cbd274c5eb6e87be02b4f",
    "98d387e6f186bbc70331c2e0ba1d9940f29ed551",
    "619136e809b15cbda570eeef50e6fb2de8358c53",
    "dd4a6089f1da4b5779e31b4bd85adaa8fb29e421",
    "468d738eea1850316810ea3bb1846a4888fb7449",
    "4433da52119176d11f87bd973cf718939e738257",
    "e77813f7c68b53e04b4e0e57617273be218e9562",
    "725b06fb90e932a1291caa6981b1579812353a68",
    "2b35ede34b032750aa7c519b022418b243571706",
    "ea9429fb6c5402daa499992cd2294cc55ce1d047",
    "edd279456205d977672ad99a830e7afe810e175a",
    "586d321917101ac94832de0c1d021bab445d5436",
    "736e97c9a9f0eec9639237bc97701382dcda1cf6",
    "ca29aa3038d88495b5129638f5ade1229b494720",
    "9ffd250147ffcea5e15dff88f9a4a611bf998ed5",
    "8d66109f770250cb8bca2e9ba16106fd3d26198d",
    "6f5761a4eabbdfb9fc73e3b19786e85e91af9601",
    "55efe2af4bbe590f59a72e5b0c57b2b2a4740a86",
    "de269311f5d78a0b97a4003fa94997058b550d14",
    "3dfd5adceb5bf105c6c8f96633257b98b8874bcc",
    "d72807379b91377dc3d7e4deab82a1b732d1932d",
    "7d5ae0ad5a26cdf9c8cfdbc377adedb3f008b505",
    "7257312564ae90ea3cff17358129f5d6c7fbc0ce",
    "88a6c3d2bb7d865dad27345d43e85076ec998714",
    "b26268b4d13a7b7371c1c100669643e144f89c6b",
    "5fb3858a167bcbc8a58df287bdf0a7ab0069eb36",
    "948bb6d3ad43c27f48072791354a137ec4b87bf8",
    "d3b333fa2270f73074a78c2c616192326b3c4ad0",
    "d29f654634f1b120133f161551ca9e4cf64011e9",
    "1765a5be68f8fcbcd0168074121af237d3e4c97f",
    "9b0594e083a793fa261af1435258b9529f95898c",
    "3c0ba6d315f29863b12a34134ec3df9b8aa5800e",
    "1d9a38dbfab7466208cd5942a0b5a07ea7d3c187",
    "c6c73ebe8d92f9f21e8a6fe9db06cfc3b9f1bef2",
    "71a11c438a674451a9d07619d6e74288571eb6be",
    "7fd3b83399f4335c820b4f705ec5b8c6472f4a92",
    "825320e23e8a912313642532aca817520170bf84",
    "241021d7767ca2473b96ec16322358fb00e46a28",
    "f9527d7404cc30353a93d4b842afd6bf0c370ab8",
    "2e6a9b5d76ef1fdd986c413adb7c4eb279b47434",
    "0a9bc14be947acce82362a47f7877046116e14c8",
    "1f55ab53a7251168bf1ea92e5aec2d289bb53e2b",
    "90d07afe7f7e15c753cebb3c61e29e2988c2d282",
    "d7ad0b6fba1f9a47357741e2d9c816edcfcd6e0a",
    "77049f901b37aa5f9008556941ce29ac4b91bfc7",
    "5299f36069ea58621c0660e0458e547849bdbf73",
    "55eeb5a6724e6d27fb6cea7eea057a1672c181cb",
    "b96e2679bb642fc96dc087e8bd207215491fb086",
    "37f4789d468d4cd83bc8c9ded0627a3c71d860ed",
    "fe9f5110f23c24046b0166b6b79d0b5b13d556c2",
    "fab4537b1df0f485b535af513ecfb7d792eadaca",
    "6a3c3392c3010616a333744434d032bf263cee73",
    "7f016a15be9b814581e9fdf2326928a4bb35f714",
    "4ac08748e4d38ee92c2369e5d614c67d1c764242",
    "00a7c9c06cb090ec090f33bbc24e7d53f53cf6e8",
    "ed8c4aceec0c5961d1221da6769269f045888ffa",
    "c1f0b078c306c09792233455d64ac6588e463ec5",
    "5ba7d38607a1c79cc63429ee19cf280a62366817",
    "0e8cb72188c7e13951abddb805913376a605fbe6",
    "73e3f8b4755e7e2ce6c9df004708aea4ba9f1b96",
    "da197f099155e2c7953bf07760c1a1f06322e09c",
    "0e721846eaae986aeb299c4d774dcc1d4c0482b6",
    "20a6b5e5a1dead5bfe6e798d0d0b2591f26c3ad0",
    "794bc3062271fb7e59fba65d48c762047965e0b1",
    "6beb03566e709859b4146dd4d04f339e230c7fd7",
    "18b9989b8dae62e26310e9c2b034f0aa86368b16",
    "064558173637e1a24d22786091fab57c9aec6522",
    "52f3d7db5f6c7b5290858ff26089ff36b0b31c1d",
    "2f08157da9ed798aacc1ef17a9c22afb85174851",
    "21fd732196c95c6f2504d18d85f47c57f4e6bbab",
    "add7e4f9bce2514b84924cd4f201c573ea90b28f",
    "8cd807510d7d6b645c6e6b9c730ecd9f2a7956f6",
    "548001bc0484885188ee6e1c331a5e298c07341a",
    "a3991f0f5075bc3aa850eadb9fcdf5e65e4eda9f",
    "12963cd526de9c110702bb1b8d2d95bcd9e72c0d",
    "cf623f59a1e78551c096833a41fb8f40eca2cf40",
    "47685262b762c9c9685910cd46868b313c4a1fb3",
    "21337f6ff06bfbf67646a7a2cc1794f7d2527b84",
    "d5f9ee1504b54b2dbf993aa35fd1064b5adf8af3",
    "148f18c4b6da9e1fa95ffc265a90734579220348",
    "dc229a6b52bb18f23b1817ad8ca4cc4077c78867",
    "bc3075d29eae9bead925e669cf7faf0354b9f9e0",
    "31f8b8efe106853faacd02351fc94c3592b689ad",
    "deac2e7323620df230e5945a90d849a26a7d635c",
    "4fd0ffc65694427f3d99d7ece41930e34a6e2a83",
    "4f15bd3bcce986c7122f2a0168475d7f49c59391",
    "811b964005ae0b0c546d50a34effbc53df3aca46",
    "6fcb5dee61df080f412422e458d0403002207b4e",
    "823f1ded4ece179cc6921abbc0afb8b692d16281",
    "6221e0827dbd852aa5710842954cb8d480e933ad",
    "ff739f63a82a224b576635e6001d744422cc0bbc",
    "327a200054bcee916acae1fd2620bc1d3a47b256",
    "2b0b54bffe65adaceb9f02b0c96647b5d51c922e",
    "35073c47ee9e8c59effce7046e9447f89814837a",
    "b422e0312296334c6910cff7d6d3196128faddaf",
    "8f4b660c7fe3c2c8c5fb77fe2beae0f1e9235be8",
    "e41e3bcd34e312aa447ec82615d157b3764db371",
    "3dcf87471538c0f4fe450e524fe93f2b543f03fd",
    "0736994ecc3180bbd8323bf3172394498cf95007",
    "a43f8fe4fa863d5e9b44948a3e8c16f24272567c",
    "2897c22fe62e2f042ea29a0c67254cfafff942fb",
    "958780814c736bdf09cf7af92967ff92520beb15",
    "6eb1d8ff30e4be66786959ab2bb6b5d8952e86c7",
    "35c8d01193933f7896586d60e6b5a43271af37d4",
    "7a8adc62bdc857c8c655b6e35b1fdd7d4866d49c",
    "8922849935c7f9e970e5b5e970438e936f62558f",
    "44abfe2831f2c5553461c114624d0f5bbff8cdca",
    "f20be747e4c40c1bd1389a09954242a01353a5b6",
    "66a60b962f9d12d045717b3abfbeaa6d7a67f45a",
    "6e072bdd9da0dd5912003ff4ebd00e86dc753eda",
    "fee7fa850c5cd4ff7c0a1a7ce7d7b3b14febca52",
    "54243b590a6da4f9557a47a5f31156ae72ef97ed",
    "91c121f02b97b857ae0fc8b2a7621b5083d94cc9",
    "4ba1d47364a93edc529546dea3e8d890ff99bc3b",
    "05b2db895e9620655c5c3696e80f40a492a3ba2a",
    "b17aa90973d8d3305290c65542f53c2b6acbdf8e",
    "f716a980700849a7f30f76a765875b22343db258",
    "610dc53e6b31f247ef3f1ea7a8beaedc360c8d9c",
    "85e4dbe351a0d44bb8b649eaf83b076449ebb91d",
    "5e376edb164732b425b9662e47e1913bcf1b8f3f",
    "e9e5f36f632db0902877f5cb06103a60a3a9d97d",
    "5a1b5ae8fc8737a64af8e3287116229fb98baeb6",
    "0b7b888f57b973dbb39c18ff8099a001ee6d3601",
    "7f1b1879519f3f8820403fe026d7a91bf3f57f53",
    "746d1cfefdf5c61fdd0bd8783dd86a6cbd5d6836",
    "0e50bc11d90761380d4c26fd4ec471fd778f1bf9",
    "ecf0c0d8343e7243d12404db43c1aeb106d4bc08",
    "3ee01bcda8b6bca3cc7be5a3d2848c355eff1152",
    "e6b6ba9eccb4a323eaa76a2a1c45eef9a5ef7ac8",
    "7bfe224d9bd46cffcc49aca6e17100d7b5bfe37b",
    "13655d378f2f6fe3194076d3f214c7fecb930ec4",
    "bdea2337e329fbe7049504559afe91f97179a002",
    "0a150c1913778aa0fab66e1f4a6333e25cf2a9e7",
    "359a24a44e922850d78a3685cc4c1c87a2614826",
    "2adadfea69c81467166c2fd6b2857889a13e690a",
    "5d28ad2234fe78800ffe089951a6fb73c53f9455",
    "ebb361378cf26299a9f1e9643bd2fdbbd6e05148",
    "103c87cb3c6325bddcfeb7d89977590083a4f46c",
    "159df1cc05981de0d3f091cde9bfd4fc076d5b9e",
    "24897caa76beb42f0fe6fe2cce5aeea8ae36983a",
    "476cde6eb503d82bc1fa3708b7d415302168f5c6",
    "0d3c9f4f03063be551af3acbe4e1c73c3c585f4a",
    "a3eb98e93785ab5f3a1c732eb305ea32c267251b",
    "7e8aaa5b9debc9d257b53aed255129fb1a4c4e67",
    "cab40d840562ddf614fc3442c6a9bdb500937ea2",
    "d276d7a9b52f08c6504724b5a5010417d21868d9",
    "e1f7edb404054b7685d7ae3f3ed54cc2cb4c2e2b",
    "b21b324df9369d0f0fde2795b23f50ae382b751b",
    "98be7998306c16b1fe59ceaa610a62f00b77174f",
    "5970837a49f4242a1e822cafe71e0b08d165a4a2",
    "061aa1904192a4767ddfabd76ce51015373e53a0",
    "45abcb8a7856780e2d1f6d9968acda37cf74a72a",
    "f899f3cb24910f127e187618103aa2a651307866",
    "776522eb9256420afe61652677bd5b2f0aede598",
    "671c126f95f30eaafb6ce9aab95b21c7072d401b",
    "61179cbc4a51134d2f4927bad1b793810e0534d6",
    "05f64aea5c90b6ba04adca8c71d9d04e0d07757c",
    "333db72d4d80ea927b2b68f5327db88b2c1f95c5",
    "7132b0e7d9bab8d548b39ba833a5047e935772ca",
    "37530aa38f7c39d5d242ee755e8d0fc529500103",
    "7b334e8edab0040585a8895050e4e65bed38acd4",
    "72b6947c52a8b1dd03a2642d9f87c05ec000e365",
    "19d795ee9cc3a97db38896a1186aca5e1402d17a"
  ],
  "tags": {},
  "lastUpdate": 1775935223209
};