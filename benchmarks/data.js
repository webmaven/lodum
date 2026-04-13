window.BENCHMARK_DATA = {
  "entries": {
    "Lodum Performance Index - Pyodide": [
      {
        "commit": {
          "id": "9265587501b6597cd995730e37fc95f64ddca79f",
          "message": "Initial commit: add lodum serialization library",
          "timestamp": "2025-12-21T09:42:30-07:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/9265587501b6597cd995730e37fc95f64ddca79f"
        },
        "date": 1766335350000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3182068771896596
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 16.31299999615976
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.749700247972135
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 9.992000002512214
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.143687426081531
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 22.936000000584045
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.1248642384622585
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 50.77899999861302
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 15.434049142857477
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 59.589000002802095
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 41.581414333333555
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 72.6899999961006
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.301034813094804
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 149.48999999830903
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.151578855836299
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 14.317999998070263
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.076402294434486
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 27.132999996126728
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 17.131867535714512
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 99.7790000027976
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 40.743408423076595
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 81.94699999819477
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 124.10537490909074
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 169.62400000153366
          }
        ]
      },
      {
        "commit": {
          "id": "1fb87eb57ae833359443384fbc4238072ca2b614",
          "message": "Create Lodum_implementation_plan.md",
          "timestamp": "2025-12-22T13:33:21-07:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/1fb87eb57ae833359443384fbc4238072ca2b614"
        },
        "date": 1766435601000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.2859257926261447
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 17.24100000188855
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.711102936337444
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 9.923999996885868
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.1661421648305597
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 22.39100000167582
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.185607110493745
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 50.48699999576911
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 15.458077250559995
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 56.777999994039874
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 41.39277539285656
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 72.32199999407385
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.4015884333941941
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 201.84999999628417
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.191209781394
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 13.631999998153788
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.178592773864527
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 27.346999999622312
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 17.09069692307735
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 109.21700000210421
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 40.48964667857164
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 80.84499999938544
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 123.09406346666663
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 173.0829999999628
          }
        ]
      },
      {
        "commit": {
          "id": "2d0e16dd3e930bca2e6842fbb844f27253b9d194",
          "message": "refactor: Improve performance, robustness, and error handling in JSON module",
          "timestamp": "2025-12-23T21:11:46Z",
          "author": {
            "name": "google-labs-jules[bot]",
            "email": "161369871+google-labs-jules[bot]@users.noreply.github.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/2d0e16dd3e930bca2e6842fbb844f27253b9d194"
        },
        "date": 1766524306000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3765001898672604
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 14.82800001895157
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.8963168334360523
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 7.423999988986907
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.4791919018550925
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 15.438999980688095
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.443111150021436
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 45.78499999752239
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.404405178572492
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 49.70300000195493
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 44.72507696667284
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 69.39899998315013
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.4006558434618417
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 159.4790000467583
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.258589138134195
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 11.9219999987763
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.3842803324034865
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 20.237000001088745
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 19.801677392860842
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 99.81699997752003
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 47.41086592857308
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 92.65299996741305
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 140.96479296666757
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 188.5330000277463
          }
        ]
      },
      {
        "commit": {
          "id": "f20be747e4c40c1bd1389a09954242a01353a5b6",
          "message": "chore: Prepare v0.2.0 release (Refs #63)",
          "timestamp": "2026-02-09T01:01:57+02:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/f20be747e4c40c1bd1389a09954242a01353a5b6"
        },
        "date": 1770591717000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 4.731151515151522
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 551.3679999964438
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 7.507545759087617
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 863.6349999946447
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 20.62638085714319
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 512.0619999985365
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.2541204313616252
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 29.929999996625156
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.683133009809091
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 11.159000003146957
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.08326828685586
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 12.779999998713265
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.104386111064722
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 47.77899999908186
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 15.53762157333343
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 46.69599999829188
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 40.67191167857206
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 72.0330000021363
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 11.085197821428647
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1458.2000000018525
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 23.822660874999773
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1901.0799999961137
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 66.98200023333409
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1433.5799999969367
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.2708501860853585
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 196.3449999990985
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.171247565129314
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 14.62700000587347
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.17334029855215
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 27.88700000166955
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 16.93369464285713
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 106.53200000376728
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 41.10674717857167
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 82.56099999925937
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 121.29546221428556
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 171.09900000633615
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 328.4675227500011
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 590.5400000045802
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 769.5717942692304
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 845.0739999972257
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 1961.6050223666675
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2044.9229999996987
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 398.48912103845834
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 653.1940000229497
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1062.855862892856
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1173.5090000115633
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1024.4628224285707
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1107.9610000024331
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 4.36450097147256
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 56.67400000675116
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.5888458298542725
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 22.38499999407395
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 21.838995466665285
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 48.86700000383826
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 3.504904052287749
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 30.358000003616326
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 4.332080669710627
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 15.031000003773443
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 7.396517415832302
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 19.473999998353975
          }
        ]
      },
      {
        "commit": {
          "id": "159df1cc05981de0d3f091cde9bfd4fc076d5b9e",
          "message": "release: v0.3.0 - Robust WASM Concurrency Support",
          "timestamp": "2026-02-21T18:36:35+02:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/159df1cc05981de0d3f091cde9bfd4fc076d5b9e"
        },
        "date": 1771691795000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 4.873090446853923
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 639.127999995992
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 7.919990948422505
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 948.4839999984729
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 21.162340214286296
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 580.1650000023528
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.40216542658731
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 35.61300000143319
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.8585495341519158
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 10.695999996812589
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.416663554153557
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 14.100999997879171
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.4232376327377505
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 61.7019999964441
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.254545366666424
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 69.14299999749574
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 44.13005392307722
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 79.88900000555077
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 11.917351142857667
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1620.8890000015685
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 21.875925307691855
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 2198.2300000047417
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 68.71258507142893
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1543.4270000014294
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.4604825767263492
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 300.73199999947064
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.3635026916263624
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 19.02900000061436
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.378488758927732
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 32.7390000052219
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 17.86836107142875
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 132.3190000022123
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 39.71842439285719
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 96.00399999953879
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 125.19671700000146
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 191.35699999139888
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 299.8156682692309
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 648.6430000052223
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 711.4109818571437
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 876.5040000042745
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 1794.3264595333337
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1962.846000012064
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 412.5764704583344
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 762.9349999831447
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1066.721283166665
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1204.4979999927818
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1072.4841578000005
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1154.8939999954655
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 4.659407736724071
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 61.57299998221788
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.922503501052475
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 23.095000017292477
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 22.845916266667626
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 56.174999997438135
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 3.9051329069433782
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 40.85200001213707
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 4.732495344046279
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 15.963999999257794
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 8.208954152848191
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 24.377000016784223
          }
        ]
      },
      {
        "commit": {
          "id": "45abcb8a7856780e2d1f6d9968acda37cf74a72a",
          "message": "conductor(setup): Add project context and initial performance infrastructure overhaul track",
          "timestamp": "2026-04-10T17:34:55+03:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/45abcb8a7856780e2d1f6d9968acda37cf74a72a"
        },
        "date": 1775831695000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 6.537190898871694
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 995.3619999976127
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 20.091369535715028
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1168.4039999977358
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 31.44802226666646
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 781.6840000032244
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3920700403800021
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 33.242000000655025
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.8357638523769377
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 12.935000000879882
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.4634449082918386
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 15.949000001569402
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.615457434116707
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 58.86900000007245
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.748823571428215
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 53.84700000377052
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 44.79881010714313
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 86.43200000335582
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.6359591785712775
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1547.80599999782
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 15.964487642857199
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 2039.9859999997716
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 23.911532166666422
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2211.6769999982466
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.404217087740904
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 282.7889999963418
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.3821945930316843
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 19.987000001719935
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.39293891463022
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 31.53899999119858
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 19.06807089285881
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 118.55099999991126
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 46.026615499999934
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 95.60899999883077
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 140.32348163333333
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 201.35600000514842
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 382.1099394285723
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 921.9599999994443
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 901.8847167500006
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 997.491999996214
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2202.042348535714
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2328.9800000014793
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 459.4086479999991
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 721.773000009307
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1224.9002926428543
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1342.0370000005732
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1133.7743353928583
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1240.064999990409
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.434671562700197
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 62.09699995451956
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 19.008257800000667
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 85.16899998767258
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 30.859457100003358
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 62.81800000351723
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.65881462944437
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 39.785000012670935
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.572961956804518
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 21.11000003424124
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 10.011567672198797
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 28.002000021842832
          }
        ]
      },
      {
        "commit": {
          "id": "f899f3cb24910f127e187618103aa2a651307866",
          "message": "feat(benchmarks): Add migrate_data.py and its unit tests",
          "timestamp": "2026-04-10T23:27:50+03:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/f899f3cb24910f127e187618103aa2a651307866"
        },
        "date": 1775852870000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 6.341403214446046
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 865.3330000001347
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 18.59024607692315
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1067.3549999964393
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 28.65318635714306
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 725.6970000000251
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.2348266986097478
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 30.55099999471622
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.6920266357785836
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 9.806999997863386
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.107946790048724
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 13.091999996106551
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.255846580084949
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 49.72299999650431
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 15.997269999999967
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 46.2199999944346
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 41.85679736666733
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 80.33499999982041
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.610597749999313
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1427.9419999994047
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 14.906386535714285
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1866.4299999997525
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 21.79260546428528
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1982.8980000013985
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.2786824110331227
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 199.15099999678887
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.1568830784759285
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 16.174999998952444
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.165140640927628
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 29.662999999402473
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 17.170938071428157
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 99.19499999710979
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 41.01820716666632
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 83.76699999956827
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 122.98771685714348
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 172.33799999871735
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 335.8639656666661
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 768.2329999951776
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 787.8027187000005
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 938.2599999980812
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 1966.4463661666668
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2078.2599999904505
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 392.7659706923073
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 654.905999994071
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1061.3870652333333
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1159.2820000032589
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 967.9599541666666
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1060.5160000238811
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 6.93632255703145
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 56.905999997525214
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 17.46443907142695
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 57.736999991675475
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 27.74854559999748
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 50.82100000208811
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.358862470463269
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 36.273999995728445
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.1575701648301315
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 18.51999999757936
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.449196016877721
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 24.91500001156055
          }
        ]
      },
      {
        "commit": {
          "id": "61179cbc4a51134d2f4927bad1b793810e0534d6",
          "message": "chore(benchmarks): Finalize performance infrastructure overhaul",
          "timestamp": "2026-04-11T15:39:16+03:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/61179cbc4a51134d2f4927bad1b793810e0534d6"
        },
        "date": 1775911156000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 6.531323091339753
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 988.1820000003927
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 20.143227499999686
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1153.9710000008085
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 32.53931193333296
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 786.1349999984668
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.403544027153348
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 32.811000004073776
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.8306912403961044
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 14.257000003681242
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.385296314088285
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 15.509000000690776
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.633004692223659
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 54.321999996886916
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.70718033333287
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 53.46999999744639
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 45.184402892857634
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 124.98299999919027
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.54250289285585
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1572.1110000015415
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 15.78796134615437
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 2086.590999994087
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 23.414313071428797
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2129.820999996923
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.4263953756735972
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 249.08399998935238
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.3961042640868095
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 16.600999998672705
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.444519237407733
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 35.24599999593647
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 19.500860500001643
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 117.41999999514974
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 46.85861464285627
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 101.36000000215972
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 140.43931178571458
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 196.25699999892277
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 383.845860178572
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 865.6570000056263
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 896.5613912499997
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 988.2159999961004
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2206.4147848666657
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2352.431000005595
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 455.2182226428546
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 710.6260000000475
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1216.0357438846145
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1324.0819999964515
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1128.1348039999993
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1194.0679999895565
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.085345992147279
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 58.16799995272959
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 18.540613199998763
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 54.95199997085365
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 29.507454899999175
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 59.309999983270245
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.400725649164415
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 38.22099995431927
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.265701685571828
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 21.389000039562234
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.809746681019487
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 26.81999995957085
          }
        ]
      },
      {
        "commit": {
          "id": "f6b6a332a4ae2b82c95fe57fb6fe1d64a59f878f",
          "message": "chore(benchmarks): finalize robust performance infrastructure",
          "timestamp": "2026-04-13T09:44:04+03:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/f6b6a332a4ae2b82c95fe57fb6fe1d64a59f878f"
        },
        "date": 1776062644000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 6.591206977698355
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 951.3340000069093
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 19.859459785713288
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1166.662000002816
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 30.97431939999827
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 793.3010000016338
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3857207253299793
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 33.05799999964165
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.8511342508661062
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 11.376999992762649
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.4711879638235796
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 15.71299999625353
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.4475815435815855
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 57.81500000523465
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.578742499998356
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 63.9339999963795
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 44.40814028571438
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 82.5219999995852
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.828108291667097
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1575.0360000055252
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 15.48233975000051
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 2041.9260000039685
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 23.131982300000686
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2170.8239999895795
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.4332166082476758
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 265.86200000622284
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.3847683345095545
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 18.757999995955288
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.391506002739282
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 33.18900000692793
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 18.125578607140877
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 123.85299999095878
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 40.11770453571525
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 91.83599999573744
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 129.04405806666688
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 188.23799999267976
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 308.3100530000011
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 890.6139999993457
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 737.0707329583327
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 857.3659999910888
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 1801.3971899666672
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1881.7189999822403
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 405.5205093666653
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 715.4459999867413
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1058.748516066666
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1248.323999988088
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1002.9874512333331
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1083.9220000207206
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.335068399828093
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 66.38799999336698
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 18.724089923079664
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 67.96000002395886
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 29.860168892864994
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 55.36200001188263
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.723672562938307
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 43.54399999328962
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.524272093085436
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 19.087999987732474
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 10.035518102260543
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 25.807999975313578
          }
        ]
      }
    ],
    "Lodum Performance Index - ubuntu-latest": [
      {
        "commit": {
          "id": "9265587501b6597cd995730e37fc95f64ddca79f",
          "message": "Initial commit: add lodum serialization library",
          "timestamp": "2025-12-21T09:42:30-07:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/9265587501b6597cd995730e37fc95f64ddca79f"
        },
        "date": 1766335350000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 5.373857620070305
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 38.58800000955398
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 10.71576425732739
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 35.50300000654261
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 23.774876499998193
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 74.12099999726252
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.4023746962349652
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 36.776000001736975
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.895771829068967
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 11.878000009346579
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.5217550639701702
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 14.471000000071399
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.476713841436048
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 78.91899998924146
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.33845114285545
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 72.27800000464413
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 43.76313133333435
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 98.95799999526389
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 17.444986916665073
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 108.25200000397217
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 33.5572895714295
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 69.75499999839485
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 109.00400299999902
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 150.94599999088132
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.4300971930046373
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 252.40799999437513
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.256778733295527
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 17.225999997094732
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.489307687804255
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 32.679000000257474
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 18.463881416667032
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 137.36600000413546
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 40.71230771428499
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 1190.0430000082451
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 127.0513738333309
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 179.75899999100875
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 305.94165421428494
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 657.1340000078862
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 718.8845698333341
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 835.0410000019792
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 1790.9906807142854
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2176.278999996839
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 424.18392900000157
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 822.132000010356
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1092.5499960714274
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1216.02100000473
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1113.9791954999996
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1199.7869999902377
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.1738921386769405
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 53.509999986545154
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 9.69835385149893
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 29.31400001671136
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 24.899943785716314
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 44.23600000791339
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 3.5647253810823125
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 37.015000003748355
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 4.331365390099084
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 22.714000010637392
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 7.669575160748488
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 21.78299999400224
          }
        ]
      },
      {
        "commit": {
          "id": "f20be747e4c40c1bd1389a09954242a01353a5b6",
          "message": "chore: Prepare v0.2.0 release (Refs #63)",
          "timestamp": "2026-02-09T01:01:57+02:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/f20be747e4c40c1bd1389a09954242a01353a5b6"
        },
        "date": 1770591717000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 4.870743639243576
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 673.6520000032442
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 7.941440586841831
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1010.6280000030665
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 22.123722214285888
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 561.0620000027211
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.405644469613775
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 79.54699999856985
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.87618974857302
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 13.475000002927118
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.393182623028061
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 16.209999998295643
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.913478098172914
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 75.28099999376536
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.942997833333823
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 56.8659999942156
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 45.86632728571414
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 86.05000000727614
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 12.08984516666689
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1644.6010000095157
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 26.022639785713256
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 2236.363000008623
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 75.65739699999934
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1644.651999995972
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.369447211779398
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 265.9549999890487
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.176759328799736
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 20.28800000175579
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.2525018164602795
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 33.76300000468291
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 18.905722214288037
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 108.75300000634525
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 45.02195035714201
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 98.72399999721893
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 141.53846842857322
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 224.2280000075425
          },
          {
            "name": "MsgPack Serialization Lodum simple",
            "unit": "us",
            "value": 3.1894577851789965
          },
          {
            "name": "MsgPack Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 80.54000001322947
          },
          {
            "name": "MsgPack Serialization Lodum complex",
            "unit": "us",
            "value": 5.33472366929383
          },
          {
            "name": "MsgPack Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 20.128000002728186
          },
          {
            "name": "MsgPack Serialization Lodum nested",
            "unit": "us",
            "value": 17.187762428569897
          },
          {
            "name": "MsgPack Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 50.12300000828418
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.6353289783333338
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.8649999990193464
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.0063632853270736
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 6.191999986526753
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 1.699595247658698
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 5.018999999606422
          },
          {
            "name": "MsgPack Deserialization Lodum simple",
            "unit": "us",
            "value": 10.132213250000651
          },
          {
            "name": "MsgPack Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 84.3669999994745
          },
          {
            "name": "MsgPack Deserialization Lodum complex",
            "unit": "us",
            "value": 22.02885119999962
          },
          {
            "name": "MsgPack Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 61.09299999934592
          },
          {
            "name": "MsgPack Deserialization Lodum nested",
            "unit": "us",
            "value": 68.7438104285708
          },
          {
            "name": "MsgPack Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 102.90200000895311
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.49630683571430323
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.8750000069521775
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.0153586541417483
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 7.61399999760215
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.2146383673956964
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 7.784999993987185
          },
          {
            "name": "CBOR Serialization Lodum simple",
            "unit": "us",
            "value": 6.67748724198492
          },
          {
            "name": "CBOR Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 77.71500000330889
          },
          {
            "name": "CBOR Serialization Lodum complex",
            "unit": "us",
            "value": 10.070909357141643
          },
          {
            "name": "CBOR Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 31.178000000409156
          },
          {
            "name": "CBOR Serialization Lodum nested",
            "unit": "us",
            "value": 24.306355428570164
          },
          {
            "name": "CBOR Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 56.164000000080705
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 4.232546591298441
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 9.398000003102425
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 5.691565160318493
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 14.125999996394967
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 8.630916494059848
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 17.782999989890413
          },
          {
            "name": "CBOR Deserialization Lodum simple",
            "unit": "us",
            "value": 12.16757508333425
          },
          {
            "name": "CBOR Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 71.8639999917059
          },
          {
            "name": "CBOR Deserialization Lodum complex",
            "unit": "us",
            "value": 25.12986433333353
          },
          {
            "name": "CBOR Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 79.58799999130406
          },
          {
            "name": "CBOR Deserialization Lodum nested",
            "unit": "us",
            "value": 74.33642064285705
          },
          {
            "name": "CBOR Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 110.90699999272147
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 1.9757702591676387
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 7.9050000039160295
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 3.3108677261264603
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 9.678000012058874
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 6.371337707496784
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 13.273999996954444
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 374.77106775000027
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 739.8469999913004
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 863.499889333332
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 963.6529999994536
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2192.7361799285736
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2286.284999996724
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 463.3442148571447
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 794.7480000041196
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1211.4461344999986
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1345.7850000122562
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1185.05533471429
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1256.277999999611
          },
          {
            "name": "TOML Serialization Lodum simple",
            "unit": "us",
            "value": 8.72441862235429
          },
          {
            "name": "TOML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 48.149999997804116
          },
          {
            "name": "TOML Serialization Lodum complex",
            "unit": "us",
            "value": 26.69056541666966
          },
          {
            "name": "TOML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 65.56200000318313
          },
          {
            "name": "TOML Serialization Lodum nested",
            "unit": "us",
            "value": 63.18538335714306
          },
          {
            "name": "TOML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 107.09999997970954
          },
          {
            "name": "TOML Deserialization Lodum simple",
            "unit": "us",
            "value": 29.494207714283302
          },
          {
            "name": "TOML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 122.16700000067249
          },
          {
            "name": "TOML Deserialization Lodum complex",
            "unit": "us",
            "value": 81.6431219285708
          },
          {
            "name": "TOML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 166.33000001320397
          },
          {
            "name": "TOML Deserialization Lodum nested",
            "unit": "us",
            "value": 207.35094421428357
          },
          {
            "name": "TOML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 257.850000025428
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 4.453312341679447
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 72.99600000010287
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.5045151698258765
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 24.715999984437076
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 22.556104357142154
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 56.39500000143016
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 3.5518651832746846
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 34.49400000476999
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 4.329174531398074
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 16.039999991335208
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 7.7405798731132665
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 22.322000006624876
          }
        ]
      },
      {
        "commit": {
          "id": "159df1cc05981de0d3f091cde9bfd4fc076d5b9e",
          "message": "release: v0.3.0 - Robust WASM Concurrency Support",
          "timestamp": "2026-02-21T18:36:35+02:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/159df1cc05981de0d3f091cde9bfd4fc076d5b9e"
        },
        "date": 1771691795000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 4.81188977259306
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 595.3360000034991
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 7.805509936756264
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1013.6909999971522
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 21.93127700000121
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 516.6680000172619
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.4589163890523338
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 32.00999998398402
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.8972072727273035
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 12.231999988898679
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.4926074421726536
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 16.56099999536309
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.646946931360947
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 58.13900000362082
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.473592785713112
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 59.30099999318372
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 44.87666533332894
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 79.03799999553485
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 11.98915492857111
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1570.966000002727
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 25.573559285715778
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 2116.829000016196
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 72.3620224999958
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1475.2870000052098
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3851413372672983
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 276.4179999985572
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.222750302102816
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 16.21999999201762
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.251569518593062
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 30.667000004314104
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 18.695080749997334
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 109.28599999715516
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 45.268043928572865
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 93.73599999662474
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 135.495099142854
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 189.68599999880098
          },
          {
            "name": "MsgPack Serialization Lodum simple",
            "unit": "us",
            "value": 3.1841225455567788
          },
          {
            "name": "MsgPack Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 54.5420000150898
          },
          {
            "name": "MsgPack Serialization Lodum complex",
            "unit": "us",
            "value": 5.267118876536696
          },
          {
            "name": "MsgPack Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 17.342000006692615
          },
          {
            "name": "MsgPack Serialization Lodum nested",
            "unit": "us",
            "value": 17.30918450000323
          },
          {
            "name": "MsgPack Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 45.02400000205853
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.6555119199419596
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 3.405999990491182
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.0268735264165547
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 5.160000000614673
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 1.7227513663662877
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 5.899999990788274
          },
          {
            "name": "MsgPack Deserialization Lodum simple",
            "unit": "us",
            "value": 10.023449783549143
          },
          {
            "name": "MsgPack Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 64.92200000707271
          },
          {
            "name": "MsgPack Deserialization Lodum complex",
            "unit": "us",
            "value": 21.60940475000217
          },
          {
            "name": "MsgPack Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 75.72199999117402
          },
          {
            "name": "MsgPack Deserialization Lodum nested",
            "unit": "us",
            "value": 67.65622535714247
          },
          {
            "name": "MsgPack Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 97.96399999117966
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.5062077742857696
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 3.2260000182304793
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.0733723566217033
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 6.812000009404073
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.2915375593041967
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 7.373999977744461
          },
          {
            "name": "CBOR Serialization Lodum simple",
            "unit": "us",
            "value": 6.593719906828012
          },
          {
            "name": "CBOR Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 66.3950000046043
          },
          {
            "name": "CBOR Serialization Lodum complex",
            "unit": "us",
            "value": 9.866688391264953
          },
          {
            "name": "CBOR Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 43.48100000584054
          },
          {
            "name": "CBOR Serialization Lodum nested",
            "unit": "us",
            "value": 24.07740928571351
          },
          {
            "name": "CBOR Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 53.81100001500272
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 4.265068237146043
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 9.167000001752967
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 5.607911353750587
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 14.245999977902102
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 8.548914547948588
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 17.002000021193453
          },
          {
            "name": "CBOR Deserialization Lodum simple",
            "unit": "us",
            "value": 11.89952489999655
          },
          {
            "name": "CBOR Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 67.03599999013932
          },
          {
            "name": "CBOR Deserialization Lodum complex",
            "unit": "us",
            "value": 25.24019699999818
          },
          {
            "name": "CBOR Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 69.89100000964754
          },
          {
            "name": "CBOR Deserialization Lodum nested",
            "unit": "us",
            "value": 73.72329083333067
          },
          {
            "name": "CBOR Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 106.76099998363497
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 1.9249269431240859
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 6.231000014622623
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 3.2786753496646295
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 9.016999996447339
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 6.463027248501907
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 13.034999994943064
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 372.83655864285544
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 695.7049999982701
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 857.5186389285697
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 949.6129999888581
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2148.1700842142855
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2239.6020000030603
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 461.63840321428853
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 771.888999992143
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1214.7923422142871
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1300.9500000009666
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1167.722363083333
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1251.1780000181716
          },
          {
            "name": "TOML Serialization Lodum simple",
            "unit": "us",
            "value": 8.722795902581526
          },
          {
            "name": "TOML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 43.38200000120196
          },
          {
            "name": "TOML Serialization Lodum complex",
            "unit": "us",
            "value": 26.709347500002423
          },
          {
            "name": "TOML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 60.11299998931463
          },
          {
            "name": "TOML Serialization Lodum nested",
            "unit": "us",
            "value": 63.68719035714321
          },
          {
            "name": "TOML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 105.12800000128664
          },
          {
            "name": "TOML Deserialization Lodum simple",
            "unit": "us",
            "value": 29.637696916668215
          },
          {
            "name": "TOML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 107.65300001480682
          },
          {
            "name": "TOML Deserialization Lodum complex",
            "unit": "us",
            "value": 82.57441258333387
          },
          {
            "name": "TOML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 147.06599998248748
          },
          {
            "name": "TOML Deserialization Lodum nested",
            "unit": "us",
            "value": 209.1370015000038
          },
          {
            "name": "TOML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 292.0279999898412
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 4.508448453607586
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 65.91400000388603
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.549935139491639
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 23.58399999025096
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 23.181989642858575
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 66.35400001187008
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 3.8013780972526585
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 35.92799998841656
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 4.546562838099291
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 17.583000015974903
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 8.190750418622937
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 21.510999999918567
          }
        ]
      },
      {
        "commit": {
          "id": "45abcb8a7856780e2d1f6d9968acda37cf74a72a",
          "message": "conductor(setup): Add project context and initial performance infrastructure overhaul track",
          "timestamp": "2026-04-10T17:34:55+03:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/45abcb8a7856780e2d1f6d9968acda37cf74a72a"
        },
        "date": 1775831695000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 6.601121892171305
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 960.642000002565
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 20.037053666666676
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1150.7059999971148
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 31.72346019999921
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 807.6969999990524
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3507841257145785
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 34.31399998987672
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.7825134563328966
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 10.93000000196298
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.31498756788296
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 17.401999997446183
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.615145437677424
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 75.4710000023806
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.808731285712902
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 54.310999999529486
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 45.478196749999235
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 79.96899999795914
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 7.049691583333129
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1676.6970000077208
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 16.295960999999675
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 2050.805000010314
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 23.840025500002564
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1450.1940000002378
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3867169006277913
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 285.6130000026269
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.223741023524618
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 17.05200000401419
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.313605206999784
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 31.839999991234436
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 19.772949583333126
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 112.17899999849124
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 48.11594735714055
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 91.86100000135866
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 145.09185316666637
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 231.99099999260397
          },
          {
            "name": "MsgPack Serialization Lodum simple",
            "unit": "us",
            "value": 6.736894392523562
          },
          {
            "name": "MsgPack Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 79.21700000679266
          },
          {
            "name": "MsgPack Serialization Lodum complex",
            "unit": "us",
            "value": 19.33957907142972
          },
          {
            "name": "MsgPack Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 70.32099999548791
          },
          {
            "name": "MsgPack Serialization Lodum nested",
            "unit": "us",
            "value": 28.842615642856476
          },
          {
            "name": "MsgPack Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 52.227000011839664
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.6365016928571217
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.874999992741323
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.0018753530328768
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 5.470999994372505
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 1.7210797019490922
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 5.198999986077979
          },
          {
            "name": "MsgPack Deserialization Lodum simple",
            "unit": "us",
            "value": 5.08594296388099
          },
          {
            "name": "MsgPack Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 44.622999993748635
          },
          {
            "name": "MsgPack Deserialization Lodum complex",
            "unit": "us",
            "value": 13.664586000000867
          },
          {
            "name": "MsgPack Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 48.70099999720878
          },
          {
            "name": "MsgPack Deserialization Lodum nested",
            "unit": "us",
            "value": 20.691298642857095
          },
          {
            "name": "MsgPack Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 43.380999997566505
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.5024181528571197
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.294000012170727
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.032404713525796
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 6.401999996796803
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.213191370142434
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 7.173000000193497
          },
          {
            "name": "CBOR Serialization Lodum simple",
            "unit": "us",
            "value": 10.195413571428803
          },
          {
            "name": "CBOR Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 106.87900000050377
          },
          {
            "name": "CBOR Serialization Lodum complex",
            "unit": "us",
            "value": 24.78512021428563
          },
          {
            "name": "CBOR Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 83.28500000231998
          },
          {
            "name": "CBOR Serialization Lodum nested",
            "unit": "us",
            "value": 36.855423214284144
          },
          {
            "name": "CBOR Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 62.52699999720335
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 4.196424453379998
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 10.729999999625761
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 5.578573792993008
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 13.554999995335493
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 8.420221320509052
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 16.801000001009925
          },
          {
            "name": "CBOR Deserialization Lodum simple",
            "unit": "us",
            "value": 6.944630325629258
          },
          {
            "name": "CBOR Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 53.87000000212083
          },
          {
            "name": "CBOR Deserialization Lodum complex",
            "unit": "us",
            "value": 16.571855750000235
          },
          {
            "name": "CBOR Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 52.87899999473211
          },
          {
            "name": "CBOR Deserialization Lodum nested",
            "unit": "us",
            "value": 25.995368142857394
          },
          {
            "name": "CBOR Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 57.47799998800929
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 1.9503701711923167
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 5.600999998023326
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 3.513501751000469
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 9.39699999946697
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 6.693618463335952
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 13.264999992657067
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 377.25176208333266
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 905.5670000037708
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 882.6460782857138
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 961.7430000048444
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2180.0272038333355
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2270.0620000080107
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 444.38584925000174
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 694.1540000013902
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1178.2083747142858
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1291.6990000064743
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1103.9690049285705
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1197.0519999806584
          },
          {
            "name": "TOML Serialization Lodum simple",
            "unit": "us",
            "value": 12.784892916663182
          },
          {
            "name": "TOML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 72.68599998155878
          },
          {
            "name": "TOML Serialization Lodum complex",
            "unit": "us",
            "value": 46.428239857145776
          },
          {
            "name": "TOML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 113.4519999936856
          },
          {
            "name": "TOML Serialization Lodum nested",
            "unit": "us",
            "value": 79.30984300000432
          },
          {
            "name": "TOML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 108.912999991162
          },
          {
            "name": "TOML Deserialization Lodum simple",
            "unit": "us",
            "value": 22.29545566666739
          },
          {
            "name": "TOML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 96.83999999765547
          },
          {
            "name": "TOML Deserialization Lodum complex",
            "unit": "us",
            "value": 74.67334585714573
          },
          {
            "name": "TOML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 118.71200001678517
          },
          {
            "name": "TOML Deserialization Lodum nested",
            "unit": "us",
            "value": 157.33617028570887
          },
          {
            "name": "TOML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 205.16199998610318
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.176922138627696
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 68.0869999882816
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 18.5504517142862
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 66.40400002311253
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 30.135954642856536
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 83.64599997889854
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.552416078219089
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 45.804999984966344
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.3459009992011906
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 32.12000001440174
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.982161907481258
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 26.609999991933364
          }
        ]
      },
      {
        "commit": {
          "id": "f899f3cb24910f127e187618103aa2a651307866",
          "message": "feat(benchmarks): Add migrate_data.py and its unit tests",
          "timestamp": "2026-04-10T23:27:50+03:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/f899f3cb24910f127e187618103aa2a651307866"
        },
        "date": 1775852870000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 6.5426528188445285
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 986.9929999979377
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 19.829598333333347
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1207.8960000110328
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 30.527758928570847
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 799.93200000672
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3786306275808011
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 35.794000012856486
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.9138326896745093
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 11.867000011989148
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.461516247342518
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 16.945000027135393
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.536821146651397
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 59.51899998990484
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.226752999995956
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 67.61200000937606
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 45.79957641666491
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 76.6649999945912
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.6948313333317815
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1586.3449999926615
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 15.424327166667714
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 2053.1670000139
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 23.04514164285771
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1430.760999994618
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.425761913196672
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 362.27499998631174
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.313981347908957
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 18.197999992253244
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.381110304061357
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 32.41900000716669
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 17.955483071428294
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 130.93699999444652
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 39.81658485714539
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 91.0470000121677
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 127.6192539166677
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 196.46499998771105
          },
          {
            "name": "MsgPack Serialization Lodum simple",
            "unit": "us",
            "value": 6.446384472308731
          },
          {
            "name": "MsgPack Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 80.63199999241988
          },
          {
            "name": "MsgPack Serialization Lodum complex",
            "unit": "us",
            "value": 18.806976214284937
          },
          {
            "name": "MsgPack Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 70.11499999975968
          },
          {
            "name": "MsgPack Serialization Lodum nested",
            "unit": "us",
            "value": 27.57711278571102
          },
          {
            "name": "MsgPack Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 50.98700000871759
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.6003158642857086
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.5939999943602743
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.0086772275430334
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 5.397999984779744
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 1.7137496399775813
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 6.119000005355701
          },
          {
            "name": "MsgPack Deserialization Lodum simple",
            "unit": "us",
            "value": 5.075053149225179
          },
          {
            "name": "MsgPack Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 54.24099998663223
          },
          {
            "name": "MsgPack Deserialization Lodum complex",
            "unit": "us",
            "value": 13.375388204300394
          },
          {
            "name": "MsgPack Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 50.886999986232695
          },
          {
            "name": "MsgPack Deserialization Lodum nested",
            "unit": "us",
            "value": 20.76536149999697
          },
          {
            "name": "MsgPack Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 40.09999997833802
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.44849654714283815
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 1.853000014762074
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 0.9634678532525245
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 6.358999996791681
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.0370198236302373
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 7.452000005514492
          },
          {
            "name": "CBOR Serialization Lodum simple",
            "unit": "us",
            "value": 9.847197083333961
          },
          {
            "name": "CBOR Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 101.99400000487913
          },
          {
            "name": "CBOR Serialization Lodum complex",
            "unit": "us",
            "value": 23.019946916662093
          },
          {
            "name": "CBOR Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 60.209999986682305
          },
          {
            "name": "CBOR Serialization Lodum nested",
            "unit": "us",
            "value": 34.09728228571599
          },
          {
            "name": "CBOR Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 69.64499999639884
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 4.163296828713679
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 8.132000004934525
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 5.499270052441247
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 12.499000007437644
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 8.253358866159857
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 15.052999998488303
          },
          {
            "name": "CBOR Deserialization Lodum simple",
            "unit": "us",
            "value": 6.814403763900548
          },
          {
            "name": "CBOR Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 54.71199997941767
          },
          {
            "name": "CBOR Deserialization Lodum complex",
            "unit": "us",
            "value": 15.755719642860251
          },
          {
            "name": "CBOR Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 49.074000003201945
          },
          {
            "name": "CBOR Deserialization Lodum nested",
            "unit": "us",
            "value": 25.851573142854736
          },
          {
            "name": "CBOR Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 45.66800001271076
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 1.9896683854031798
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 4.105999977355168
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 3.3755047277400925
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 9.24400001167669
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 6.552925863997306
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 22.494000006645365
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 308.3690363333318
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 909.6469999860801
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 741.3748319285714
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 876.7479999960415
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 1828.6261594285722
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1940.646999969431
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 407.47116221428263
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 738.4099999967475
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1072.9422724166586
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1239.06200002466
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1015.8995491428706
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1118.5210000235202
          },
          {
            "name": "TOML Serialization Lodum simple",
            "unit": "us",
            "value": 12.301087833336055
          },
          {
            "name": "TOML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 62.9840000101467
          },
          {
            "name": "TOML Serialization Lodum complex",
            "unit": "us",
            "value": 40.438946571425404
          },
          {
            "name": "TOML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 92.76999998064639
          },
          {
            "name": "TOML Serialization Lodum nested",
            "unit": "us",
            "value": 68.72274035714148
          },
          {
            "name": "TOML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 102.98399996599983
          },
          {
            "name": "TOML Deserialization Lodum simple",
            "unit": "us",
            "value": 20.222445333336243
          },
          {
            "name": "TOML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 118.18699999821547
          },
          {
            "name": "TOML Deserialization Lodum complex",
            "unit": "us",
            "value": 59.71010833333897
          },
          {
            "name": "TOML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 114.49199996604875
          },
          {
            "name": "TOML Deserialization Lodum nested",
            "unit": "us",
            "value": 136.73761378571012
          },
          {
            "name": "TOML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 173.7609999850065
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.257321281169618
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 62.46399999554342
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 17.98114025000075
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 64.08600000895603
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 29.152354071425993
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 53.21999998386673
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.506508417879296
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 45.9590000332355
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.274312982273473
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 31.45799996673304
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.763046773304294
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 22.46400003969029
          }
        ]
      },
      {
        "commit": {
          "id": "61179cbc4a51134d2f4927bad1b793810e0534d6",
          "message": "chore(benchmarks): Finalize performance infrastructure overhaul",
          "timestamp": "2026-04-11T15:39:16+03:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/61179cbc4a51134d2f4927bad1b793810e0534d6"
        },
        "date": 1775911156000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 6.537008914800552
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1014.0319999862868
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 20.372965714284216
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1190.922000006367
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 31.80024708333562
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 797.599000009086
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.4246981874551712
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 31.208999999421394
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.9052540970206122
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 11.651999997752682
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.3791153332363297
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 16.411000004268317
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.613376491914138
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 73.50799999983337
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.89276128571444
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 55.2129999960016
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 48.5153684285718
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 80.14899999864156
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.559261333332955
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1589.1960000118388
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 16.014701916667207
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 2132.639999999242
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 23.675468428568333
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1511.3810000002559
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3899045408554869
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 278.9199999995162
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.2671340862551306
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 17.151999998077372
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.392930522212869
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 32.63000000686134
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 19.12935225000112
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 112.5900000005231
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 46.34202414285734
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 97.85299999975905
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 145.76484450000038
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 217.39600001069448
          },
          {
            "name": "MsgPack Serialization Lodum simple",
            "unit": "us",
            "value": 6.746429619871762
          },
          {
            "name": "MsgPack Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 77.76500000034048
          },
          {
            "name": "MsgPack Serialization Lodum complex",
            "unit": "us",
            "value": 19.997841571428207
          },
          {
            "name": "MsgPack Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 55.53299999405681
          },
          {
            "name": "MsgPack Serialization Lodum nested",
            "unit": "us",
            "value": 29.312686999999876
          },
          {
            "name": "MsgPack Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 67.89699999387722
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.652334445438805
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.6049999917177047
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.0196097709663252
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 5.7499999996935
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 1.718791685199998
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 6.703000011043514
          },
          {
            "name": "MsgPack Deserialization Lodum simple",
            "unit": "us",
            "value": 5.066910280144984
          },
          {
            "name": "MsgPack Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 48.87200000780467
          },
          {
            "name": "MsgPack Deserialization Lodum complex",
            "unit": "us",
            "value": 13.851625928570652
          },
          {
            "name": "MsgPack Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 49.15099999891481
          },
          {
            "name": "MsgPack Deserialization Lodum nested",
            "unit": "us",
            "value": 20.850058214285077
          },
          {
            "name": "MsgPack Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 43.2909999972253
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.5107263142857172
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.5150000055873534
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.037200956747713
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 7.463000002871922
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.266278957917497
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 7.694999993645979
          },
          {
            "name": "CBOR Serialization Lodum simple",
            "unit": "us",
            "value": 10.604393642854657
          },
          {
            "name": "CBOR Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 99.12500000552882
          },
          {
            "name": "CBOR Serialization Lodum complex",
            "unit": "us",
            "value": 25.181907916664414
          },
          {
            "name": "CBOR Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 63.69899999469908
          },
          {
            "name": "CBOR Serialization Lodum nested",
            "unit": "us",
            "value": 37.256173583332476
          },
          {
            "name": "CBOR Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 65.65299999294893
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 4.23714782966562
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 10.279000008495132
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 5.659728234766223
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 13.816000006272589
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 8.465835715038418
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 17.302000003383
          },
          {
            "name": "CBOR Deserialization Lodum simple",
            "unit": "us",
            "value": 6.946808381344929
          },
          {
            "name": "CBOR Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 52.858999993077305
          },
          {
            "name": "CBOR Deserialization Lodum complex",
            "unit": "us",
            "value": 16.48453549999947
          },
          {
            "name": "CBOR Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 51.85700000254201
          },
          {
            "name": "CBOR Deserialization Lodum nested",
            "unit": "us",
            "value": 26.166618928571545
          },
          {
            "name": "CBOR Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 55.24299999137838
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 1.950083523200398
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 6.462000001761226
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 3.3375600017832268
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 10.21900000353071
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 6.461069364537355
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 15.928999999914595
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 380.35780328571485
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 913.5749999984455
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 883.0736334999989
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 982.2430000099303
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2180.5031737857153
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2293.669000010823
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 454.97526685714513
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 767.0109999935448
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1207.9475125000035
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1298.6930000238317
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1128.9834231428579
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1207.6140000090163
          },
          {
            "name": "TOML Serialization Lodum simple",
            "unit": "us",
            "value": 12.711848285712383
          },
          {
            "name": "TOML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 62.11600000938233
          },
          {
            "name": "TOML Serialization Lodum complex",
            "unit": "us",
            "value": 47.31137999999849
          },
          {
            "name": "TOML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 118.71099999893886
          },
          {
            "name": "TOML Serialization Lodum nested",
            "unit": "us",
            "value": 78.7780700833333
          },
          {
            "name": "TOML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 112.7799999949275
          },
          {
            "name": "TOML Deserialization Lodum simple",
            "unit": "us",
            "value": 22.511924285715118
          },
          {
            "name": "TOML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 120.88599999060534
          },
          {
            "name": "TOML Deserialization Lodum complex",
            "unit": "us",
            "value": 73.4529810714264
          },
          {
            "name": "TOML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 125.11399998516026
          },
          {
            "name": "TOML Deserialization Lodum nested",
            "unit": "us",
            "value": 154.88192708333295
          },
          {
            "name": "TOML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 209.72199999391705
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.2145628210695945
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 62.716999991607736
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 18.879187999999658
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 65.33199999125827
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 30.278518642859353
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 56.7259999968428
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.5342778716219065
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 40.115000018658975
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.315351067218795
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 34.87499998300336
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.941626857145788
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 35.155999995595266
          }
        ]
      },
      {
        "commit": {
          "id": "f6b6a332a4ae2b82c95fe57fb6fe1d64a59f878f",
          "message": "chore(benchmarks): finalize robust performance infrastructure",
          "timestamp": "2026-04-13T09:44:04+03:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/f6b6a332a4ae2b82c95fe57fb6fe1d64a59f878f"
        },
        "date": 1776062644000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 6.643710175229004
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 978.5579999999072
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 20.195204583333865
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1223.1050000011123
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 31.12809549999948
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 808.6830000024747
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.356482056678306
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 36.59400000088908
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.901585260352598
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 12.559000005296639
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.448158949597877
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 17.816999999809013
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.563928753345492
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 72.64899999626095
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.55199350000025
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 56.63499999997157
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 45.72334614285672
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 86.87999999779095
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.761308250000653
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1552.5900000028514
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 15.46755890000071
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 2057.8879999959554
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 22.86639471428639
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1439.0290000036998
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.4327081327440758
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 297.8670000004513
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.289214787254252
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 17.2149999997373
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.418250250250324
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 34.50199999832648
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 18.71558042857099
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 136.25500000102875
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 40.09504483333437
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 96.66500000093947
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 128.01718458333335
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 191.03800000408455
          },
          {
            "name": "MsgPack Serialization Lodum simple",
            "unit": "us",
            "value": 6.643780206744467
          },
          {
            "name": "MsgPack Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 89.8449999979789
          },
          {
            "name": "MsgPack Serialization Lodum complex",
            "unit": "us",
            "value": 19.22558428571313
          },
          {
            "name": "MsgPack Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 57.47600000205466
          },
          {
            "name": "MsgPack Serialization Lodum nested",
            "unit": "us",
            "value": 28.476106749999158
          },
          {
            "name": "MsgPack Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 45.77899999702595
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.6036071742857173
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.2039999976186664
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 0.9866604751837569
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 6.630000001450753
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 1.7195077426978274
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 6.970999997690797
          },
          {
            "name": "MsgPack Deserialization Lodum simple",
            "unit": "us",
            "value": 5.119992576139587
          },
          {
            "name": "MsgPack Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 55.7740000033391
          },
          {
            "name": "MsgPack Deserialization Lodum complex",
            "unit": "us",
            "value": 13.290356886744355
          },
          {
            "name": "MsgPack Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 48.30200001038065
          },
          {
            "name": "MsgPack Deserialization Lodum nested",
            "unit": "us",
            "value": 20.491766785714358
          },
          {
            "name": "MsgPack Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 63.61500000195974
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.44825104714283676
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.4739999986422845
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 0.9621411155558632
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 7.840999998620646
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 1.9964601518576266
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 7.001000000173008
          },
          {
            "name": "CBOR Serialization Lodum simple",
            "unit": "us",
            "value": 10.026327110227841
          },
          {
            "name": "CBOR Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 105.69799999871066
          },
          {
            "name": "CBOR Serialization Lodum complex",
            "unit": "us",
            "value": 23.472446857143478
          },
          {
            "name": "CBOR Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 60.80100000360744
          },
          {
            "name": "CBOR Serialization Lodum nested",
            "unit": "us",
            "value": 34.78241150000067
          },
          {
            "name": "CBOR Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 57.225000006155824
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 4.357278241263167
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 7.76199999563687
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 5.681423279914482
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 12.518000005456997
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 8.530135506718066
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 15.664000002857392
          },
          {
            "name": "CBOR Deserialization Lodum simple",
            "unit": "us",
            "value": 6.822676998338715
          },
          {
            "name": "CBOR Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 58.41800000894182
          },
          {
            "name": "CBOR Deserialization Lodum complex",
            "unit": "us",
            "value": 15.864147428568947
          },
          {
            "name": "CBOR Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 50.13499999506621
          },
          {
            "name": "CBOR Deserialization Lodum nested",
            "unit": "us",
            "value": 25.521115285715926
          },
          {
            "name": "CBOR Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 44.81700000269484
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 1.965293089944287
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 5.228000006241018
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 3.381717335249683
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 9.53400000014426
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 6.914002191742087
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 13.800999994373342
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 308.0730490714296
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 929.5739999970465
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 737.5097256666668
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 923.0069999972557
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 1815.736321785714
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1931.085999999027
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 404.3886721666681
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 777.2059999950898
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1062.430100857139
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1185.4889999938223
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 983.7488878571443
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1111.8790000068657
          },
          {
            "name": "TOML Serialization Lodum simple",
            "unit": "us",
            "value": 12.209478857146548
          },
          {
            "name": "TOML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 62.54299998431634
          },
          {
            "name": "TOML Serialization Lodum complex",
            "unit": "us",
            "value": 39.75046985714365
          },
          {
            "name": "TOML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 96.2150000134443
          },
          {
            "name": "TOML Serialization Lodum nested",
            "unit": "us",
            "value": 67.86742600000244
          },
          {
            "name": "TOML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 102.56400000230315
          },
          {
            "name": "TOML Deserialization Lodum simple",
            "unit": "us",
            "value": 20.356390928573173
          },
          {
            "name": "TOML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 107.50100000223028
          },
          {
            "name": "TOML Deserialization Lodum complex",
            "unit": "us",
            "value": 58.12364539999919
          },
          {
            "name": "TOML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 118.46699999296106
          },
          {
            "name": "TOML Deserialization Lodum nested",
            "unit": "us",
            "value": 133.0956669285724
          },
          {
            "name": "TOML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 177.35600002311003
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.124757140509734
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 86.65999999379892
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 18.539337571429623
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 56.814999993548554
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 29.457867428571863
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 52.92000000167718
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.672947148430407
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 43.58600000387014
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.354061721930061
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 32.809000003908295
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.9013964068017
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 24.366999980429682
          }
        ]
      }
    ],
    "Lodum Performance Index - windows-latest": [
      {
        "commit": {
          "id": "9265587501b6597cd995730e37fc95f64ddca79f",
          "message": "Initial commit: add lodum serialization library",
          "timestamp": "2025-12-21T09:42:30-07:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/9265587501b6597cd995730e37fc95f64ddca79f"
        },
        "date": 1766335350000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 4.98124519969146
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 39.80000002457018
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 10.09595854463116
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 40.799999965202005
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 22.68218571428195
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 68.60000002006927
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.5156928225135404
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 117.69999997568448
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.091357985008066
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 54.59999999857246
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.792513361803107
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 45.00000000007276
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 6.700892637498059
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 87.80000001706867
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 14.449671428577306
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 66.69999999076026
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 40.147485714279746
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 106.59999998097192
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 15.730571428568803
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 149.70000000857908
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 29.99299285713976
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 73.4999999849606
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 97.24340714285518
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 179.0000000028158
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.5796867026558756
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 296.6999999785003
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.70564624517021
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 73.70000002993038
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 6.94215016847933
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 88.50000000393266
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 15.74923571428144
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 128.00000001789158
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 35.606935714278215
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 98.90000001178123
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 111.14747857142707
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 190.9999999725187
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 284.66755833334406
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 669.2000000043663
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 675.1241214285691
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 817.1000000061213
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 1692.7987785714274
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1835.9999999688625
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 398.1428357142858
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 764.0999999694031
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1008.48092857143
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1100.7999999037565
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1040.1892428571548
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1137.0999999371634
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 4.967081473214056
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 57.999999967250915
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 9.40105302828846
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 33.50000008595089
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 24.110607142867075
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 60.59999998342391
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 3.254838814753153
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 48.50000004807953
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 4.008256666830242
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 16.599999980826396
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 7.1683514285755985
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 25.19999998185085
          }
        ]
      },
      {
        "commit": {
          "id": "f20be747e4c40c1bd1389a09954242a01353a5b6",
          "message": "chore: Prepare v0.2.0 release (Refs #63)",
          "timestamp": "2026-02-09T01:01:57+02:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/f20be747e4c40c1bd1389a09954242a01353a5b6"
        },
        "date": 1770591717000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 4.419248769946847
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 582.5000000641012
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 7.434941854153395
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 902.9999998801941
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 21.16735000000907
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 497.7999999482563
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.423397593050564
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 108.1000000340282
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.1923008546489737
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 37.99999990405922
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.6768042768081206
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 40.09999997833802
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 6.583726078712906
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 79.50000008349889
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 14.540450000007846
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 50.600000122358324
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 40.4185142857289
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 82.90000005217735
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 11.523149999967634
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1469.6999999159743
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 25.098228571437176
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1860.5000000206928
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 71.20453571425449
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1415.000000179134
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.5305179545023746
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 243.700000055469
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.5842069559767125
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 58.399999943503644
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 9.00313214286338
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 78.49999997233681
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 16.900566666663508
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 102.400000059788
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 40.30255714285756
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 84.00000001529406
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 127.01667857140819
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 177.6999999947293
          },
          {
            "name": "MsgPack Serialization Lodum simple",
            "unit": "us",
            "value": 3.2111435901227803
          },
          {
            "name": "MsgPack Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 54.20000002231973
          },
          {
            "name": "MsgPack Serialization Lodum complex",
            "unit": "us",
            "value": 5.2566081821058015
          },
          {
            "name": "MsgPack Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 20.29999996011611
          },
          {
            "name": "MsgPack Serialization Lodum nested",
            "unit": "us",
            "value": 16.590857142854734
          },
          {
            "name": "MsgPack Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 47.900000026857015
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.8268539411397743
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 3.89999991057266
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.4134211428576495
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 7.699999969190685
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.4094884759067736
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 6.299999995462713
          },
          {
            "name": "MsgPack Deserialization Lodum simple",
            "unit": "us",
            "value": 9.324996588901827
          },
          {
            "name": "MsgPack Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 100.2999999855092
          },
          {
            "name": "MsgPack Deserialization Lodum complex",
            "unit": "us",
            "value": 22.082292857151383
          },
          {
            "name": "MsgPack Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 57.10000004910398
          },
          {
            "name": "MsgPack Deserialization Lodum nested",
            "unit": "us",
            "value": 68.18887142856056
          },
          {
            "name": "MsgPack Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 101.59999987990886
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.5081891428569308
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 3.1000001854408765
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.0081980534092636
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 5.299999884300632
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.2697751207669055
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 7.000000096013537
          },
          {
            "name": "CBOR Serialization Lodum simple",
            "unit": "us",
            "value": 6.525864807971053
          },
          {
            "name": "CBOR Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 75.59999994555255
          },
          {
            "name": "CBOR Serialization Lodum complex",
            "unit": "us",
            "value": 9.597756396438738
          },
          {
            "name": "CBOR Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 28.100000008635106
          },
          {
            "name": "CBOR Serialization Lodum nested",
            "unit": "us",
            "value": 23.134971428541057
          },
          {
            "name": "CBOR Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 53.600000001097214
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 4.214049842428924
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 9.299999874201603
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 5.669007988652847
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 15.300000086426735
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 8.552916266274227
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 18.099999806509004
          },
          {
            "name": "CBOR Deserialization Lodum simple",
            "unit": "us",
            "value": 11.086721428569035
          },
          {
            "name": "CBOR Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 111.39999992337835
          },
          {
            "name": "CBOR Deserialization Lodum complex",
            "unit": "us",
            "value": 24.34589999997375
          },
          {
            "name": "CBOR Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 67.4999998864223
          },
          {
            "name": "CBOR Deserialization Lodum nested",
            "unit": "us",
            "value": 70.83545833336302
          },
          {
            "name": "CBOR Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 103.80000003351597
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 1.7515401389290177
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 5.399999963628943
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 3.05110972441583
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 23.199999986900366
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 5.732983010291983
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 12.200000128359534
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 338.799975000029
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 634.3000000015309
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 784.0970642857071
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 836.5999999568885
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2012.0225500000158
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2100.6999998007814
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 435.2033000000309
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 693.8999999874795
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1129.9749999999935
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1256.8000001920154
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1113.2490599999983
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1217.3999998594809
          },
          {
            "name": "TOML Serialization Lodum simple",
            "unit": "us",
            "value": 8.313776776588798
          },
          {
            "name": "TOML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 45.199999931355705
          },
          {
            "name": "TOML Serialization Lodum complex",
            "unit": "us",
            "value": 27.151992857121904
          },
          {
            "name": "TOML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 62.40000016077829
          },
          {
            "name": "TOML Serialization Lodum nested",
            "unit": "us",
            "value": 62.105542857157815
          },
          {
            "name": "TOML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 105.20000000724394
          },
          {
            "name": "TOML Deserialization Lodum simple",
            "unit": "us",
            "value": 29.739028571433273
          },
          {
            "name": "TOML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 130.80000007903436
          },
          {
            "name": "TOML Deserialization Lodum complex",
            "unit": "us",
            "value": 82.8687714285609
          },
          {
            "name": "TOML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 139.7999999426247
          },
          {
            "name": "TOML Deserialization Lodum nested",
            "unit": "us",
            "value": 211.0851928571427
          },
          {
            "name": "TOML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 250.4999999928259
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 4.589704367724005
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 62.30000008144998
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.750592371778729
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 28.400000019246363
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 22.339342857159345
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 63.400000044566696
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 3.2965872369832567
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 41.099999862126424
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 4.106185195851549
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 18.299999965165625
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 7.20930242923477
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 24.799999891911284
          }
        ]
      },
      {
        "commit": {
          "id": "159df1cc05981de0d3f091cde9bfd4fc076d5b9e",
          "message": "release: v0.3.0 - Robust WASM Concurrency Support",
          "timestamp": "2026-02-21T18:36:35+02:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/159df1cc05981de0d3f091cde9bfd4fc076d5b9e"
        },
        "date": 1771691795000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 4.535319043808686
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 536.4999999528663
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 7.3875832336467
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 913.0000000823202
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 20.788733333290565
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 500.30000011247466
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.42585373345528
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 98.69999985312461
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.014913791992646
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 46.8000000637403
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.669245006740572
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 39.100000094549614
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 6.623993915083555
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 53.10000005920301
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 14.679035714298802
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 64.19999999707215
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 39.33934285714713
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 76.79999998799758
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 11.583628571429472
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1451.0000000882428
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 25.26940714285177
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1938.2000000405242
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 70.78957142856065
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1451.500000030137
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.5110307088626642
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 240.80000002868474
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.591294702011537
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 62.30000008144998
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 6.664530562528588
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 51.20000014358084
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 17.26097142855971
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 107.29999985414906
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 41.003049999988306
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 89.09999996831175
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 125.6315571428591
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 178.3000000159518
          },
          {
            "name": "MsgPack Serialization Lodum simple",
            "unit": "us",
            "value": 3.2115232895008647
          },
          {
            "name": "MsgPack Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 47.900000026857015
          },
          {
            "name": "MsgPack Serialization Lodum complex",
            "unit": "us",
            "value": 5.326391310383802
          },
          {
            "name": "MsgPack Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 21.000000060666935
          },
          {
            "name": "MsgPack Serialization Lodum nested",
            "unit": "us",
            "value": 16.59824285715266
          },
          {
            "name": "MsgPack Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 46.099999963189475
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.8200943058091819
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 3.5000000480067683
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.407328571429259
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 6.600000006073969
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.4107132857046154
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 6.100000064179767
          },
          {
            "name": "MsgPack Deserialization Lodum simple",
            "unit": "us",
            "value": 9.236448929022952
          },
          {
            "name": "MsgPack Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 99.20000002239249
          },
          {
            "name": "MsgPack Deserialization Lodum complex",
            "unit": "us",
            "value": 22.21256428569112
          },
          {
            "name": "MsgPack Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 58.09999993289239
          },
          {
            "name": "MsgPack Deserialization Lodum nested",
            "unit": "us",
            "value": 67.70375714285949
          },
          {
            "name": "MsgPack Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 124.50000008357165
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.49793099999988044
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.699999868127634
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.013241832417193
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 6.799999937356915
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.2121316528352497
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 9.099999942918657
          },
          {
            "name": "CBOR Serialization Lodum simple",
            "unit": "us",
            "value": 6.676496125283312
          },
          {
            "name": "CBOR Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 61.7999999121821
          },
          {
            "name": "CBOR Serialization Lodum complex",
            "unit": "us",
            "value": 9.624418408784239
          },
          {
            "name": "CBOR Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 27.90000007735216
          },
          {
            "name": "CBOR Serialization Lodum nested",
            "unit": "us",
            "value": 23.476828571412106
          },
          {
            "name": "CBOR Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 54.39999995360267
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 4.253766663138736
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 9.300000101575279
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 5.612043285056601
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 15.50000001770968
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 8.501290051599893
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 18.20000011321099
          },
          {
            "name": "CBOR Deserialization Lodum simple",
            "unit": "us",
            "value": 10.867642857127587
          },
          {
            "name": "CBOR Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 117.70000014621473
          },
          {
            "name": "CBOR Deserialization Lodum complex",
            "unit": "us",
            "value": 24.079185714283216
          },
          {
            "name": "CBOR Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 61.2999999702879
          },
          {
            "name": "CBOR Deserialization Lodum nested",
            "unit": "us",
            "value": 71.46812857143102
          },
          {
            "name": "CBOR Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 103.20000001229346
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 1.7542638739789653
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 6.0999998368060915
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 3.0217372608037993
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 17.399999933331856
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 5.7535221626082595
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 12.900000001536682
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 344.8385000000209
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 659.4999999833817
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 803.9120499999918
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 857.9000000281667
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2066.5482999999736
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2121.1000000675995
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 441.42402142860453
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 741.199999993114
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1136.0993642857368
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1273.8000000354077
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1128.1080357143114
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1156.299999820476
          },
          {
            "name": "TOML Serialization Lodum simple",
            "unit": "us",
            "value": 8.570566390121554
          },
          {
            "name": "TOML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 45.20000015872938
          },
          {
            "name": "TOML Serialization Lodum complex",
            "unit": "us",
            "value": 27.9529785714528
          },
          {
            "name": "TOML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 63.400000044566696
          },
          {
            "name": "TOML Serialization Lodum nested",
            "unit": "us",
            "value": 62.60870000000653
          },
          {
            "name": "TOML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 128.30000014218967
          },
          {
            "name": "TOML Deserialization Lodum simple",
            "unit": "us",
            "value": 29.384807142865352
          },
          {
            "name": "TOML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 125.09999987742049
          },
          {
            "name": "TOML Deserialization Lodum complex",
            "unit": "us",
            "value": 81.55238571430345
          },
          {
            "name": "TOML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 139.90000002195302
          },
          {
            "name": "TOML Deserialization Lodum nested",
            "unit": "us",
            "value": 206.7703214285562
          },
          {
            "name": "TOML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 254.79999999333813
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 4.460380576371319
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 54.09999994299142
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.4896768442262855
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 27.50000021478627
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 21.90530000001445
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 58.90000011277152
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 3.4824379462739765
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 82.79999997284904
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 4.439765039763448
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 31.199999966702308
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 7.715539707303102
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 22.500000113723218
          }
        ]
      },
      {
        "commit": {
          "id": "45abcb8a7856780e2d1f6d9968acda37cf74a72a",
          "message": "conductor(setup): Add project context and initial performance infrastructure overhaul track",
          "timestamp": "2026-04-10T17:34:55+03:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/45abcb8a7856780e2d1f6d9968acda37cf74a72a"
        },
        "date": 1775831695000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 5.863688788595426
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 863.0999999468258
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 18.124908333324658
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1035.0000000016735
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 27.844124999991966
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 699.8000000066895
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3890767596891067
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 96.99999998247222
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.2340853371042013
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 37.2000000652406
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.6460299007449315
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 29.400000016721606
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 6.405232857142502
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 50.899999905595905
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 14.109603554336339
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 49.49999993186793
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 38.36459285714357
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 77.00000003296736
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.004435714276367
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1384.499999971922
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 14.168533333332789
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1980.3000000138127
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 21.31070000000553
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1308.999999992011
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.4408965422978266
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 312.1000000874119
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.5196721044487633
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 48.600000013721
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 7.069034575981606
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 61.100000039004954
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 15.658064285714447
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 100.90000000673172
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 38.39755714284365
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 87.50000006330083
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 116.4921714285632
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 177.39999998411804
          },
          {
            "name": "MsgPack Serialization Lodum simple",
            "unit": "us",
            "value": 6.237520801332332
          },
          {
            "name": "MsgPack Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 77.29999992989178
          },
          {
            "name": "MsgPack Serialization Lodum complex",
            "unit": "us",
            "value": 17.549029999997856
          },
          {
            "name": "MsgPack Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 53.40000006981427
          },
          {
            "name": "MsgPack Serialization Lodum nested",
            "unit": "us",
            "value": 25.639078571422097
          },
          {
            "name": "MsgPack Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 48.300000003109744
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.761536446145974
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 3.199999923708674
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.2613662390024374
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 6.000000098538294
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.2358114156449838
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 6.800000051043753
          },
          {
            "name": "MsgPack Deserialization Lodum simple",
            "unit": "us",
            "value": 4.43692985864854
          },
          {
            "name": "MsgPack Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 75.00000003801688
          },
          {
            "name": "MsgPack Deserialization Lodum complex",
            "unit": "us",
            "value": 11.808158293771921
          },
          {
            "name": "MsgPack Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 44.90000003443129
          },
          {
            "name": "MsgPack Deserialization Lodum nested",
            "unit": "us",
            "value": 18.383771428586574
          },
          {
            "name": "MsgPack Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 38.30000002835732
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.4681741666666994
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 7.200000027296483
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 0.9716177161769946
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 6.800000051043753
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.137273087273103
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 7.999999979801942
          },
          {
            "name": "CBOR Serialization Lodum simple",
            "unit": "us",
            "value": 9.40952536215216
          },
          {
            "name": "CBOR Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 81.80000008906063
          },
          {
            "name": "CBOR Serialization Lodum complex",
            "unit": "us",
            "value": 22.218678571424075
          },
          {
            "name": "CBOR Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 57.40000005971524
          },
          {
            "name": "CBOR Serialization Lodum nested",
            "unit": "us",
            "value": 32.60513571427737
          },
          {
            "name": "CBOR Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 55.900000006658956
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 4.143809285713879
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 8.099999945443415
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 5.61704511704424
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 15.50000001770968
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 8.526455178848867
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 15.200000007098424
          },
          {
            "name": "CBOR Deserialization Lodum simple",
            "unit": "us",
            "value": 5.864438727289019
          },
          {
            "name": "CBOR Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 83.30000002843008
          },
          {
            "name": "CBOR Deserialization Lodum complex",
            "unit": "us",
            "value": 14.088589908726034
          },
          {
            "name": "CBOR Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 46.90000002938177
          },
          {
            "name": "CBOR Deserialization Lodum nested",
            "unit": "us",
            "value": 22.297983333335953
          },
          {
            "name": "CBOR Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 48.600000013721
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 1.662810604969781
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 4.300000000512227
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 2.9801967029510124
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 8.699999966665928
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 5.8084814570980345
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 11.3999999484804
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 310.26101666665795
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1845.200000047953
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 744.0431428571352
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 873.2999999665481
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 1885.733124999992
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1947.6999999596956
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 381.4470333333209
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 735.8999999951266
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1041.397614285716
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1856.2000000201806
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 986.2306285714177
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1007.8999999905136
          },
          {
            "name": "TOML Serialization Lodum simple",
            "unit": "us",
            "value": 13.970278765825785
          },
          {
            "name": "TOML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 65.80000001576991
          },
          {
            "name": "TOML Serialization Lodum complex",
            "unit": "us",
            "value": 57.00497857143968
          },
          {
            "name": "TOML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 93.7999999450767
          },
          {
            "name": "TOML Serialization Lodum nested",
            "unit": "us",
            "value": 73.67884999999319
          },
          {
            "name": "TOML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 115.19999998199637
          },
          {
            "name": "TOML Deserialization Lodum simple",
            "unit": "us",
            "value": 20.215621428568348
          },
          {
            "name": "TOML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 88.00000000519503
          },
          {
            "name": "TOML Deserialization Lodum complex",
            "unit": "us",
            "value": 67.56440714284346
          },
          {
            "name": "TOML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 129.19999994664977
          },
          {
            "name": "TOML Deserialization Lodum nested",
            "unit": "us",
            "value": 138.31184999999854
          },
          {
            "name": "TOML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 203.49999999780266
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 6.812113321934995
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 80.19999995667604
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 17.18769999999787
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 55.49999991671939
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 27.40766428572832
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 55.399999951077916
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 4.998614013643646
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 52.09999994804093
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 5.717379088903588
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 32.400000009147334
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.140377885485657
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 26.300000058654405
          }
        ]
      },
      {
        "commit": {
          "id": "f899f3cb24910f127e187618103aa2a651307866",
          "message": "feat(benchmarks): Add migrate_data.py and its unit tests",
          "timestamp": "2026-04-10T23:27:50+03:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/f899f3cb24910f127e187618103aa2a651307866"
        },
        "date": 1775852870000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 6.163814543158734
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1011.8999998667277
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 18.55017142856598
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1068.0000000320433
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 29.676624999998086
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 769.7000000916887
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.4422864125908772
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 123.50000019978324
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.127702614668996
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 48.39999996875122
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 4.00142018387127
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 46.19999981514411
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 6.681697125030695
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 89.00000011635711
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 14.30858571430755
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 57.50000013904355
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 41.25537857143107
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 84.00000001529406
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.317424999982298
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1421.8999999684456
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 14.17748000001211
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 2004.700000043158
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 21.36550714281579
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1340.1999999587133
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.5255925059257107
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 298.10000000907166
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.6524528411870825
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 68.40000014562975
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 7.032796549513058
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 81.70000000973232
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 16.13082142861393
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 118.79999988195777
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 35.182642857129004
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 88.09999985714967
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 111.00168571426495
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 183.69999997958075
          },
          {
            "name": "MsgPack Serialization Lodum simple",
            "unit": "us",
            "value": 6.486063376335914
          },
          {
            "name": "MsgPack Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 97.30000010677031
          },
          {
            "name": "MsgPack Serialization Lodum complex",
            "unit": "us",
            "value": 18.61568571432924
          },
          {
            "name": "MsgPack Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 58.399999943503644
          },
          {
            "name": "MsgPack Serialization Lodum nested",
            "unit": "us",
            "value": 27.198764285685684
          },
          {
            "name": "MsgPack Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 47.60000001624576
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.8100241528809841
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.900000026784255
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.3945696666670908
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 6.100000064179767
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.376896526896866
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 6.299999995462713
          },
          {
            "name": "MsgPack Deserialization Lodum simple",
            "unit": "us",
            "value": 4.617676767678903
          },
          {
            "name": "MsgPack Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 96.69999985817412
          },
          {
            "name": "MsgPack Deserialization Lodum complex",
            "unit": "us",
            "value": 11.970866666634569
          },
          {
            "name": "MsgPack Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 47.900000026857015
          },
          {
            "name": "MsgPack Deserialization Lodum nested",
            "unit": "us",
            "value": 18.60923571431223
          },
          {
            "name": "MsgPack Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 37.49999996216502
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.4734199999997405
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 3.000000106112566
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.0012348012356198
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 7.099999947968172
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.244083121498887
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 8.600000001024455
          },
          {
            "name": "CBOR Serialization Lodum simple",
            "unit": "us",
            "value": 9.703454931483755
          },
          {
            "name": "CBOR Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 93.80000005876354
          },
          {
            "name": "CBOR Serialization Lodum complex",
            "unit": "us",
            "value": 22.659235714302536
          },
          {
            "name": "CBOR Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 59.10000004405447
          },
          {
            "name": "CBOR Serialization Lodum nested",
            "unit": "us",
            "value": 33.24551666668185
          },
          {
            "name": "CBOR Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 56.99999996977567
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 4.197581646015345
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 8.600000001024455
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 5.618355982772683
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 40.299999909620965
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 8.344552883859196
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 17.20000000204891
          },
          {
            "name": "CBOR Deserialization Lodum simple",
            "unit": "us",
            "value": 6.114616916183265
          },
          {
            "name": "CBOR Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 94.40000007998606
          },
          {
            "name": "CBOR Deserialization Lodum complex",
            "unit": "us",
            "value": 13.983650000000125
          },
          {
            "name": "CBOR Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 50.20000003241876
          },
          {
            "name": "CBOR Deserialization Lodum nested",
            "unit": "us",
            "value": 22.460541666703193
          },
          {
            "name": "CBOR Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 41.49999995206599
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 1.6247776535857985
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 4.79999994240643
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 2.91517435803231
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 9.300000101575279
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 5.654234054235157
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 12.799999922208372
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 284.28623571426215
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1100.700000051802
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 679.6302583333235
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 815.0000001023727
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 1688.567214285724
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1794.3000000286702
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 377.0580833333194
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 679.7000000915432
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 987.953064285713
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1125.7999999543244
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 925.9093749999655
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1064.5999998359912
          },
          {
            "name": "TOML Serialization Lodum simple",
            "unit": "us",
            "value": 11.6340794382234
          },
          {
            "name": "TOML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 69.40000002941815
          },
          {
            "name": "TOML Serialization Lodum complex",
            "unit": "us",
            "value": 38.17015714283961
          },
          {
            "name": "TOML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 97.39999995872495
          },
          {
            "name": "TOML Serialization Lodum nested",
            "unit": "us",
            "value": 65.70115714282565
          },
          {
            "name": "TOML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 148.20000001236622
          },
          {
            "name": "TOML Deserialization Lodum simple",
            "unit": "us",
            "value": 18.264716666654596
          },
          {
            "name": "TOML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 96.10000006432529
          },
          {
            "name": "TOML Deserialization Lodum complex",
            "unit": "us",
            "value": 55.24768571426973
          },
          {
            "name": "TOML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 123.19999996179831
          },
          {
            "name": "TOML Deserialization Lodum nested",
            "unit": "us",
            "value": 123.79094999999195
          },
          {
            "name": "TOML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 211.6000000569329
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.019444444444223
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 85.69999999963329
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 17.760664285706948
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 52.9999999798747
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 28.274758333301026
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 61.499999901570845
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.097762835146582
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 46.999999995023245
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 5.891890340810857
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 22.30000018244027
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.218017857136829
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 27.999999929306796
          }
        ]
      },
      {
        "commit": {
          "id": "61179cbc4a51134d2f4927bad1b793810e0534d6",
          "message": "chore(benchmarks): Finalize performance infrastructure overhaul",
          "timestamp": "2026-04-11T15:39:16+03:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/61179cbc4a51134d2f4927bad1b793810e0534d6"
        },
        "date": 1775911156000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 6.563294797688619
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 929.8999998463842
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 18.890616666719023
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1115.600000048289
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 29.691164285687982
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 802.7999997466395
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.4224199999976659
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 104.10000004412723
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.232333159987313
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 47.39999985758914
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.717273142855057
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 36.90000039568986
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 6.4993167398864005
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 57.300000207760604
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 14.53975833332303
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 47.900000026857015
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 39.99749166662999
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 78.40000034775585
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.199592857163744
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1457.700000173645
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 15.326508333297777
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1890.6000000242784
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 22.652608333335895
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1352.6999996429367
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.5119764285762878
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 246.49999977555126
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.609693187722555
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 53.39999961506692
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 6.550652934073238
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 52.800000048591755
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 17.526766666643805
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 245.49999989176285
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 41.24956428576557
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 109.50000023512985
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 127.35641428564901
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 184.09999984214664
          },
          {
            "name": "MsgPack Serialization Lodum simple",
            "unit": "us",
            "value": 6.367537497531075
          },
          {
            "name": "MsgPack Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 69.1000000188069
          },
          {
            "name": "MsgPack Serialization Lodum complex",
            "unit": "us",
            "value": 18.34287857140485
          },
          {
            "name": "MsgPack Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 51.20000014358084
          },
          {
            "name": "MsgPack Serialization Lodum nested",
            "unit": "us",
            "value": 27.459328571434785
          },
          {
            "name": "MsgPack Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 48.800000058690784
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.8305635877065932
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 3.099999958067201
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.4083706083709877
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 6.4000000747910235
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.5236317913260677
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 6.70000008540228
          },
          {
            "name": "MsgPack Deserialization Lodum simple",
            "unit": "us",
            "value": 4.579332976636759
          },
          {
            "name": "MsgPack Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 84.10000009462237
          },
          {
            "name": "MsgPack Deserialization Lodum complex",
            "unit": "us",
            "value": 12.552662627544812
          },
          {
            "name": "MsgPack Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 46.89999968832126
          },
          {
            "name": "MsgPack Deserialization Lodum nested",
            "unit": "us",
            "value": 19.16532142864266
          },
          {
            "name": "MsgPack Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 44.70000021683518
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.5005511428563685
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.7999999474559445
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.0260529760511672
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 7.099999947968172
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.226700353399968
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 8.299999990413198
          },
          {
            "name": "CBOR Serialization Lodum simple",
            "unit": "us",
            "value": 9.91118571421014
          },
          {
            "name": "CBOR Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 88.4000000951346
          },
          {
            "name": "CBOR Serialization Lodum complex",
            "unit": "us",
            "value": 24.82404285722493
          },
          {
            "name": "CBOR Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 62.5000002401066
          },
          {
            "name": "CBOR Serialization Lodum nested",
            "unit": "us",
            "value": 35.57113571430039
          },
          {
            "name": "CBOR Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 59.80000014460529
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 4.168182639641974
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 8.900000011635711
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 5.545037582107469
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 14.700000065204222
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 8.421190193313162
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 16.99999984339229
          },
          {
            "name": "CBOR Deserialization Lodum simple",
            "unit": "us",
            "value": 6.108077322011174
          },
          {
            "name": "CBOR Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 89.29999967222102
          },
          {
            "name": "CBOR Deserialization Lodum complex",
            "unit": "us",
            "value": 14.897040000050765
          },
          {
            "name": "CBOR Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 45.79999995257822
          },
          {
            "name": "CBOR Deserialization Lodum nested",
            "unit": "us",
            "value": 23.04485833334032
          },
          {
            "name": "CBOR Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 45.49999994196696
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 1.6957973949345437
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 6.000000212225132
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 3.035358294687632
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 11.000000085914508
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 5.795130920163479
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 12.199999673612183
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 346.53217142850474
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1103.300000067975
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 820.4192714285584
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 933.9000002910325
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2054.2067428571368
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2096.400000027643
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 419.9686785713896
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 692.5000002411252
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1124.5717899999818
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1248.6000000535569
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1045.607764285803
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1066.1999999683758
          },
          {
            "name": "TOML Serialization Lodum simple",
            "unit": "us",
            "value": 12.922942857195656
          },
          {
            "name": "TOML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 66.60000008196221
          },
          {
            "name": "TOML Serialization Lodum complex",
            "unit": "us",
            "value": 46.941235714289824
          },
          {
            "name": "TOML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 96.90000024420442
          },
          {
            "name": "TOML Serialization Lodum nested",
            "unit": "us",
            "value": 78.92483571432811
          },
          {
            "name": "TOML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 130.39999976172112
          },
          {
            "name": "TOML Deserialization Lodum simple",
            "unit": "us",
            "value": 22.686392857134965
          },
          {
            "name": "TOML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 79.20000007288763
          },
          {
            "name": "TOML Deserialization Lodum complex",
            "unit": "us",
            "value": 72.79136428564925
          },
          {
            "name": "TOML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 119.19999997189734
          },
          {
            "name": "TOML Deserialization Lodum nested",
            "unit": "us",
            "value": 153.47924285720183
          },
          {
            "name": "TOML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 211.40000035302364
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 6.881274625676208
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 116.10000001383014
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 17.781164285777
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 50.30000011174707
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 28.523728571501902
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 55.29999998543644
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.185892857200868
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 44.50000005817856
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 5.941776824732223
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 19.099999917671084
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.53259217351275
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 26.6000001829525
          }
        ]
      },
      {
        "commit": {
          "id": "f6b6a332a4ae2b82c95fe57fb6fe1d64a59f878f",
          "message": "chore(benchmarks): finalize robust performance infrastructure",
          "timestamp": "2026-04-13T09:44:04+03:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/f6b6a332a4ae2b82c95fe57fb6fe1d64a59f878f"
        },
        "date": 1776062644000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 5.810046959963168
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 949.6000000126514
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 18.06269999998936
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1021.6000000582426
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 28.100971428557386
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 702.0000000466098
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3932240598904397
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 99.59999999864522
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.9721987007700625
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 39.099999980862776
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.604587948499609
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 34.90000005967886
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 6.2355679093107295
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 52.09999994804093
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 14.171022934110765
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 48.99999998997373
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 37.72220714284101
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 78.79999998294807
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 5.941464285724253
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1682.9000001052918
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 14.139628571431981
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1814.3999999438165
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 20.9196785714393
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1328.5999999652631
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.4523615705546244
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 342.89999996417464
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.553427575406946
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 59.89999999655993
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 7.119098217320512
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 76.30000004610338
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 15.558621428567676
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 103.69999995418766
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 36.89718571428102
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 84.5000000708751
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 114.70039166666386
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 177.6999999947293
          },
          {
            "name": "MsgPack Serialization Lodum simple",
            "unit": "us",
            "value": 6.206409118061027
          },
          {
            "name": "MsgPack Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 76.70000002235611
          },
          {
            "name": "MsgPack Serialization Lodum complex",
            "unit": "us",
            "value": 17.98858571428192
          },
          {
            "name": "MsgPack Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 55.09999994046666
          },
          {
            "name": "MsgPack Serialization Lodum nested",
            "unit": "us",
            "value": 25.84962857141753
          },
          {
            "name": "MsgPack Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 45.999999997548
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.7962862391432578
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 3.900000024259498
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.2769349209860519
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 7.799999934832158
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.260059726550803
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 5.900000019209983
          },
          {
            "name": "MsgPack Deserialization Lodum simple",
            "unit": "us",
            "value": 4.396068963518334
          },
          {
            "name": "MsgPack Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 76.1000000011336
          },
          {
            "name": "MsgPack Deserialization Lodum complex",
            "unit": "us",
            "value": 11.812929390593869
          },
          {
            "name": "MsgPack Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 52.9999999798747
          },
          {
            "name": "MsgPack Deserialization Lodum nested",
            "unit": "us",
            "value": 18.175964285709206
          },
          {
            "name": "MsgPack Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 38.90000004957983
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.470371499999942
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.7999999474559445
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 0.9959165060927547
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 6.5000000404324965
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.2588388445529355
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 7.099999947968172
          },
          {
            "name": "CBOR Serialization Lodum simple",
            "unit": "us",
            "value": 9.483089528744754
          },
          {
            "name": "CBOR Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 83.60000003904133
          },
          {
            "name": "CBOR Serialization Lodum complex",
            "unit": "us",
            "value": 22.533000000009906
          },
          {
            "name": "CBOR Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 57.80000003596797
          },
          {
            "name": "CBOR Serialization Lodum nested",
            "unit": "us",
            "value": 33.414221428569945
          },
          {
            "name": "CBOR Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 56.699999959164415
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 4.17853987054621
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 8.700000080352766
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 5.665644265646846
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 13.299999977789412
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 8.542912946429233
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 14.99999996212864
          },
          {
            "name": "CBOR Deserialization Lodum simple",
            "unit": "us",
            "value": 6.099726906636388
          },
          {
            "name": "CBOR Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 81.60000004409085
          },
          {
            "name": "CBOR Deserialization Lodum complex",
            "unit": "us",
            "value": 14.272901579982925
          },
          {
            "name": "CBOR Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 45.39999997632549
          },
          {
            "name": "CBOR Deserialization Lodum nested",
            "unit": "us",
            "value": 22.160683333339648
          },
          {
            "name": "CBOR Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 58.399999943503644
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 1.7326009340679136
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 6.399999961104186
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 3.000318004770178
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 8.7999999323074
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 5.870063270064812
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 13.400000057117722
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 307.43285714284445
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 962.8000000247994
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 737.987000000008
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 818.6999999679756
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 1851.329900000015
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1911.1999999950058
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 375.4141571428623
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 688.5000000238506
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1029.8560916666684
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1151.2999999467866
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 949.656457142867
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1059.7000000416301
          },
          {
            "name": "TOML Serialization Lodum simple",
            "unit": "us",
            "value": 11.151078571417981
          },
          {
            "name": "TOML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 75.89999995616381
          },
          {
            "name": "TOML Serialization Lodum complex",
            "unit": "us",
            "value": 42.579385714312984
          },
          {
            "name": "TOML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 124.3000001522887
          },
          {
            "name": "TOML Serialization Lodum nested",
            "unit": "us",
            "value": 72.31673571430163
          },
          {
            "name": "TOML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 104.19999989608186
          },
          {
            "name": "TOML Deserialization Lodum simple",
            "unit": "us",
            "value": 20.013025000006717
          },
          {
            "name": "TOML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 81.29999991979275
          },
          {
            "name": "TOML Deserialization Lodum complex",
            "unit": "us",
            "value": 67.78634166666582
          },
          {
            "name": "TOML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 111.30000007142371
          },
          {
            "name": "TOML Deserialization Lodum nested",
            "unit": "us",
            "value": 141.76188571428025
          },
          {
            "name": "TOML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 164.1999999719701
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.166313044033171
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 72.49999998748535
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 19.394871428582
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 51.900000016757986
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 29.411028571433103
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 50.40000019107538
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.241802841802541
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 46.49999982575537
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.272542195930502
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 19.600000086938962
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.903295818612193
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 25.900000082401675
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
    "f6b6a332a4ae2b82c95fe57fb6fe1d64a59f878f"
  ],
  "tags": {
    "9265587501b6597cd995730e37fc95f64ddca79f": "v0.1.0",
    "f20be747e4c40c1bd1389a09954242a01353a5b6": "v0.2.0",
    "159df1cc05981de0d3f091cde9bfd4fc076d5b9e": "v0.3.0"
  },
  "lastUpdate": 1776071490397
};