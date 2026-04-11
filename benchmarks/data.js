window.BENCHMARK_DATA = {
  "entries": {
    "Lodum Performance Index - unknown": [
      {
        "commit": {
          "id": "671c126f95f30eaafb6ce9aab95b21c7072d401b",
          "message": "fix(benchmarks): Bypass polars CPU check in acquisition script",
          "timestamp": "2026-04-11T15:30:48+03:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/671c126f95f30eaafb6ce9aab95b21c7072d401b"
        },
        "date": 1775910648000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 6.497259586519421
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 959.7669999976688
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 19.76038416666685
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1190.8270000020593
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 31.288678142857407
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 819.0049999967641
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.393529197307755
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 33.8130000017145
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.8943885788747377
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 11.641000000395252
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.3869460203230997
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 14.75799999894889
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.6181998041777295
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 59.55099999965796
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.67808428571403
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 54.00999999949363
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 45.37369592857132
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 76.73300000021754
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.710212083333407
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1581.4240000011637
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 15.82147658333355
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 2064.4129999993766
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 23.1226200714281
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1413.7019999935774
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.383929548656892
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 264.0310000003865
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.18518975614811
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 15.197999999827516
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.463265121021233
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 31.528999997476603
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 19.74522535714231
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 119.20200000048453
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 45.83919392857183
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 93.99300000012545
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 139.2596266428571
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 213.73899999588275
          },
          {
            "name": "MsgPack Serialization Lodum simple",
            "unit": "us",
            "value": 6.689767993646771
          },
          {
            "name": "MsgPack Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 77.72600000066632
          },
          {
            "name": "MsgPack Serialization Lodum complex",
            "unit": "us",
            "value": 19.387320357140986
          },
          {
            "name": "MsgPack Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 58.82000000667631
          },
          {
            "name": "MsgPack Serialization Lodum nested",
            "unit": "us",
            "value": 29.134576571427676
          },
          {
            "name": "MsgPack Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 53.030000003673194
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.6383168585714267
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 3.1360000036784186
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 0.9929449395225893
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 5.321000003277732
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 1.6741744530565286
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 5.9619999888127495
          },
          {
            "name": "MsgPack Deserialization Lodum simple",
            "unit": "us",
            "value": 5.264472384182753
          },
          {
            "name": "MsgPack Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 57.80799999399733
          },
          {
            "name": "MsgPack Deserialization Lodum complex",
            "unit": "us",
            "value": 13.184124166667033
          },
          {
            "name": "MsgPack Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 46.58699999993132
          },
          {
            "name": "MsgPack Deserialization Lodum nested",
            "unit": "us",
            "value": 20.520255833333795
          },
          {
            "name": "MsgPack Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 56.786000001807224
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.5019638928571624
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.505000011865377
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.0080033361111813
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 5.811000008293377
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.2881313513958816
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 8.105999995677848
          },
          {
            "name": "CBOR Serialization Lodum simple",
            "unit": "us",
            "value": 10.324038357142383
          },
          {
            "name": "CBOR Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 236.72199999680288
          },
          {
            "name": "CBOR Serialization Lodum complex",
            "unit": "us",
            "value": 24.242056833334875
          },
          {
            "name": "CBOR Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 61.25500000564443
          },
          {
            "name": "CBOR Serialization Lodum nested",
            "unit": "us",
            "value": 36.29094149999901
          },
          {
            "name": "CBOR Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 64.79200000342189
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 4.247344865812991
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 10.350000010816984
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 5.417940786090171
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 14.867000004414876
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 8.22437669140776
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 17.904000003454712
          },
          {
            "name": "CBOR Deserialization Lodum simple",
            "unit": "us",
            "value": 6.798332117738998
          },
          {
            "name": "CBOR Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 51.33700000214958
          },
          {
            "name": "CBOR Deserialization Lodum complex",
            "unit": "us",
            "value": 16.008551357144945
          },
          {
            "name": "CBOR Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 44.533000007618284
          },
          {
            "name": "CBOR Deserialization Lodum nested",
            "unit": "us",
            "value": 25.378320785713576
          },
          {
            "name": "CBOR Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 43.83200000290799
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 1.9408463390627237
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 4.988999990018783
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 3.279206914252244
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 8.987000001070555
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 6.359134527053603
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 26.911000006180075
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 380.76425358333427
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1048.5629999976709
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 879.9480489166668
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 995.4519999979539
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2185.743106142855
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2384.354000000144
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 465.8941409285719
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 958.1230000037522
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1224.5930259999998
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1343.3740000152739
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1124.3466053571447
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1205.615999992915
          },
          {
            "name": "TOML Serialization Lodum simple",
            "unit": "us",
            "value": 12.682701214286242
          },
          {
            "name": "TOML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 65.09099998197598
          },
          {
            "name": "TOML Serialization Lodum complex",
            "unit": "us",
            "value": 46.81217442856881
          },
          {
            "name": "TOML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 96.94100000956496
          },
          {
            "name": "TOML Serialization Lodum nested",
            "unit": "us",
            "value": 79.24567721428437
          },
          {
            "name": "TOML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 112.20999999750347
          },
          {
            "name": "TOML Deserialization Lodum simple",
            "unit": "us",
            "value": 22.873077285711116
          },
          {
            "name": "TOML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 102.5519999870994
          },
          {
            "name": "TOML Deserialization Lodum complex",
            "unit": "us",
            "value": 73.16781092857484
          },
          {
            "name": "TOML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 141.28399999435715
          },
          {
            "name": "TOML Deserialization Lodum nested",
            "unit": "us",
            "value": 155.94050616667232
          },
          {
            "name": "TOML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 193.0010000137372
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.1687626003871125
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 59.30099999318372
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 18.65767999999927
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 64.84100001102888
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 30.158760714282298
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 71.89400000129353
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.435265979722823
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 40.296000008765986
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.324158652474195
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 31.669000009060255
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.781376613965667
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 26.389999987941337
          }
        ]
      },
      {
        "commit": {
          "id": "333db72d4d80ea927b2b68f5327db88b2c1f95c5",
          "message": "fix(ci): simplify benchmark workflow dispatch logic",
          "timestamp": "2026-04-11T17:53:03+03:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/333db72d4d80ea927b2b68f5327db88b2c1f95c5"
        },
        "date": 1775919183000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 6.774744626368187
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 984.2949999949724
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 20.818382500000407
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1166.8060000005198
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 32.180682166665996
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 827.0820000007006
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3728620118383934
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 33.48299999572646
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.9126631448015925
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 13.014000003863657
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.372888716425904
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 14.908000011359945
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.5969746261634725
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 59.469999996508704
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.88434158333152
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 51.9069999995736
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 46.39209628571552
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 77.00399999066576
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.763340714285399
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1555.7500000085156
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 16.64851942857228
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 2017.2709999997096
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 23.903521285714444
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1411.7329999976391
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.398753899182826
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 278.91099999521884
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.2578288303523664
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 16.329999994013633
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.50376123076186
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 29.664999999567954
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 19.37053775000071
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 111.85900000043603
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 45.96777221428689
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 92.21199999842611
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 144.91458242857342
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 208.26799999440482
          },
          {
            "name": "MsgPack Serialization Lodum simple",
            "unit": "us",
            "value": 6.789353524075509
          },
          {
            "name": "MsgPack Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 71.10300001045289
          },
          {
            "name": "MsgPack Serialization Lodum complex",
            "unit": "us",
            "value": 20.260193285713918
          },
          {
            "name": "MsgPack Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 52.89899999638692
          },
          {
            "name": "MsgPack Serialization Lodum nested",
            "unit": "us",
            "value": 29.283360928571614
          },
          {
            "name": "MsgPack Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 51.26599998561687
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.6393876950000296
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.6750000188258127
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 0.9999379900696515
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 5.440999984784867
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 1.6926530734759968
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 6.221000006689792
          },
          {
            "name": "MsgPack Deserialization Lodum simple",
            "unit": "us",
            "value": 5.016625873917311
          },
          {
            "name": "MsgPack Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 50.68400000141082
          },
          {
            "name": "MsgPack Deserialization Lodum complex",
            "unit": "us",
            "value": 13.848120999999278
          },
          {
            "name": "MsgPack Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 46.49600001016552
          },
          {
            "name": "MsgPack Deserialization Lodum nested",
            "unit": "us",
            "value": 20.726071285713893
          },
          {
            "name": "MsgPack Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 43.55099997610523
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.5063896133334348
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.5150000055873534
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.046354802279101
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 6.893000005447902
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.2525023982184065
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 7.914999997638006
          },
          {
            "name": "CBOR Serialization Lodum simple",
            "unit": "us",
            "value": 10.457006714288143
          },
          {
            "name": "CBOR Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 88.27400000654961
          },
          {
            "name": "CBOR Serialization Lodum complex",
            "unit": "us",
            "value": 25.285129642857182
          },
          {
            "name": "CBOR Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 63.16799999694922
          },
          {
            "name": "CBOR Serialization Lodum nested",
            "unit": "us",
            "value": 36.918264928571276
          },
          {
            "name": "CBOR Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 61.17400002381146
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 4.2008923911494165
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 9.898999991264645
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 5.597623374326006
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 14.536999998426836
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 8.454615085412453
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 17.54300001266529
          },
          {
            "name": "CBOR Deserialization Lodum simple",
            "unit": "us",
            "value": 6.935371694672481
          },
          {
            "name": "CBOR Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 49.28199999199023
          },
          {
            "name": "CBOR Deserialization Lodum complex",
            "unit": "us",
            "value": 16.659489928571247
          },
          {
            "name": "CBOR Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 48.971000012443255
          },
          {
            "name": "CBOR Deserialization Lodum nested",
            "unit": "us",
            "value": 25.89587928571291
          },
          {
            "name": "CBOR Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 47.659000017574726
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 1.983798485621393
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 6.702999996832659
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 3.3603234198320635
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 9.919000007130307
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 6.788248099325664
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 13.875999997026156
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 380.16708708333385
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 920.4270000111592
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 892.5218722142907
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 980.6090000097356
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2222.3564457857146
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2320.495999981631
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 464.095801583331
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 776.847999986785
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1236.3808630714257
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1402.593999983992
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1138.3121797857143
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1233.6300000015399
          },
          {
            "name": "TOML Serialization Lodum simple",
            "unit": "us",
            "value": 12.733850250003323
          },
          {
            "name": "TOML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 58.26800000363619
          },
          {
            "name": "TOML Serialization Lodum complex",
            "unit": "us",
            "value": 47.20224092857604
          },
          {
            "name": "TOML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 93.91500000788255
          },
          {
            "name": "TOML Serialization Lodum nested",
            "unit": "us",
            "value": 80.13960871428642
          },
          {
            "name": "TOML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 153.0139999772473
          },
          {
            "name": "TOML Deserialization Lodum simple",
            "unit": "us",
            "value": 22.60496158333325
          },
          {
            "name": "TOML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 106.7679999948723
          },
          {
            "name": "TOML Deserialization Lodum complex",
            "unit": "us",
            "value": 74.03265207142746
          },
          {
            "name": "TOML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 142.0440000003964
          },
          {
            "name": "TOML Deserialization Lodum nested",
            "unit": "us",
            "value": 157.09646228571575
          },
          {
            "name": "TOML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 206.94599999160346
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.453554597583976
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 56.11399998883826
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 19.402029642855773
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 63.51900000822752
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 30.610311357146916
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 68.52699999626566
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.528854986347225
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 38.73200000725774
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.373489682621223
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 37.48000000314278
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.903172304727946
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 26.970000021719898
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
    "333db72d4d80ea927b2b68f5327db88b2c1f95c5"
  ],
  "tags": {
    "f20be747e4c40c1bd1389a09954242a01353a5b6": "v0.2.0",
    "159df1cc05981de0d3f091cde9bfd4fc076d5b9e": "v0.3.0"
  },
  "lastUpdate": 1775919387203
};