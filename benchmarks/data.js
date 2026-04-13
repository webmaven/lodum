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
          "id": "d6a0ff900a39f2ce5e895168affe0371748f6d8e",
          "message": "docs: Update README with correct import statements",
          "timestamp": "2025-12-23T21:18:04Z",
          "author": {
            "name": "google-labs-jules[bot]",
            "email": "161369871+google-labs-jules[bot]@users.noreply.github.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/d6a0ff900a39f2ce5e895168affe0371748f6d8e"
        },
        "date": 1766524684000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3078328894135138
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 17.415999998604548
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.7331129085411034
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 9.210999998288116
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.165493890104043
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 22.029999996675542
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.072426764982762
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 52.821000004144025
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 15.33941173333299
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 53.936999997006296
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 41.33310486666678
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 71.74699999978884
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.297855905879573
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 155.64699999970344
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.154643832608583
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 15.548000000364937
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.25388823240408
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 27.398000000289358
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 16.816576538461668
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 105.99800000221649
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 40.74610223333366
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 88.69299999503255
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 122.48204085714269
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 178.77699999502283
          }
        ]
      },
      {
        "commit": {
          "id": "df033c0f2503a7023f9e6b2bbc5a245ac0ccaee8",
          "message": "docs: Update documentation, license, and contribution guidelines",
          "timestamp": "2025-12-23T21:36:24Z",
          "author": {
            "name": "google-labs-jules[bot]",
            "email": "161369871+google-labs-jules[bot]@users.noreply.github.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/df033c0f2503a7023f9e6b2bbc5a245ac0ccaee8"
        },
        "date": 1766525784000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3886630330058352
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 13.916000000335771
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.852234090090113
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 11.160999989101583
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.567825910102133
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 25.597999993465237
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.516689825960604
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 59.12999999679869
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.52900153846122
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 65.04199998857985
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 44.25358203846103
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 75.12000000531316
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3807025390711767
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 182.8320000072381
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.313720179893685
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 14.747000008696887
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.419877221443926
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 25.648000004707683
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 18.950961269230614
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 118.3209999879864
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 45.775180071427
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 101.1390000087431
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 141.32381673076986
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 224.73000001355103
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
            "value": 6.6271340897475675
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 949.1339999954107
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 19.838436499999723
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1139.745999999775
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 30.87907815384674
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 797.7599999975382
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3989698617197996
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 35.77299999335537
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.8561827382321046
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 12.490999999670294
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.5158214217309998
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 15.683000000876746
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.651210635538366
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 61.67100000453729
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.388387607143784
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 52.677999995864866
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 45.62427189285704
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 82.82299999962106
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.72083276923165
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1564.886000004151
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 15.299893038461713
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 2034.3529999991006
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 22.91462188461515
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2165.648000001852
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.4059126149768124
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 299.78599999935795
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.3485456446463275
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 24.016000004678517
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.356191068467159
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 32.06699999935836
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 18.7752155714279
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 138.3860000032655
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 40.651055153846784
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 94.40099999835638
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 132.08986703333352
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 191.1869999986493
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 309.66445133333366
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 885.970999988217
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 734.9768929999996
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 860.8019999911676
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 1820.4883036000022
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1945.3799999951116
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 406.10402787499805
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 715.6149999900663
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1081.3032210999988
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1202.2660000070573
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1006.2434477142871
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1113.5929999852578
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.239364373616812
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 67.19999998949788
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 18.680739400000828
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 69.37399999173977
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 29.89968046666623
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 55.833999994092665
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.581393208419482
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 44.09600001054059
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.545411683043022
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 19.66000002084911
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 10.08769067405399
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 26.308999991897508
          }
        ]
      },
      {
        "commit": {
          "id": "776522eb9256420afe61652677bd5b2f0aede598",
          "message": "chore(benchmarks): Save current progress before data acquisition",
          "timestamp": "2026-04-11T15:28:57+03:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/776522eb9256420afe61652677bd5b2f0aede598"
        },
        "date": 1775910537000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 6.494997641243247
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 934.2219999979307
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 19.826278785714887
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1139.1239999980485
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 31.105906333333404
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 750.8500000028562
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3530567979982662
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 31.650000003935475
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.7811907358615375
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 12.624000000016622
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.289228553235993
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 15.96000000603226
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.6101403587234815
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 55.394000000319465
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.475973033333464
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 52.02700000239702
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 45.03383223076987
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 79.71800000206031
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.521109541666921
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1509.2249999995033
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 15.644855607143477
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 2026.7709999970407
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 23.29802589285736
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2046.767000003058
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3884151319694513
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 237.71299999708617
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.310336703497305
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 17.68300000293266
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.430675193014209
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 28.583999998943455
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 19.53443510714286
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 112.95099999841796
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 47.39216876666674
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 93.95600000061677
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 147.88936660000024
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 203.93100000148934
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 381.5187344666678
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 876.6990000026453
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 892.9669775666672
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 982.0660000059434
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2204.6842869333327
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2321.9709999864335
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 451.95455660714146
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 713.3340000109456
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1206.458007400001
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1294.5409999929325
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1117.5752647500008
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1198.8910000013675
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.329574448220221
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 56.76600000015242
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 18.757291733335062
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 63.51900000822752
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 29.909430733330094
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 54.110999997192266
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.420479255570447
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 37.43000002032204
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.206957731525789
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 18.584999963877635
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.673639549808868
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 26.63899999788555
          }
        ]
      },
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
            "value": 6.4393945677977005
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 933.6789999991879
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 19.76608253571399
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1158.1569999989938
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 31.244943166666182
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 791.5539999956422
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3895906094005777
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 28.253000003530815
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.8108322334784004
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 13.78599999668495
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.33130576667245
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 14.937999999631302
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.681357531901396
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 54.70100000337652
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.353927500000356
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 57.60700000223551
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 46.23623339285616
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 80.26899999435955
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.588669571428848
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1552.622000005499
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 15.664096678570669
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1997.8210000033414
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 23.246585285713298
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2122.223000000645
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3675804454000047
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 234.94699999559998
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.2686020745389244
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 17.903000006924685
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.3238762833252755
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 28.87400000162188
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 19.707844961538367
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 112.35900000627908
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 46.61817692857134
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 96.00900000350521
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 145.0337666785718
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 192.39800000292462
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 391.5811946428579
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 846.9180000005849
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 913.7350961999999
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1002.4759999964772
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2287.956910300001
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2499.4999999989886
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 456.71568416666827
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 722.3650000014459
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1220.4196355333333
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1330.0450000031105
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1132.6385903333319
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1217.846999992389
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.286885715889889
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 60.883999992711324
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 18.743964033332833
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 66.47399999337722
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 29.700619678568582
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 56.47499997962768
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.4645559517171
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 41.0760000022492
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.324262917119519
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 19.345999987763207
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.80907452680607
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 26.149000007080758
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
            "value": 6.557628593188866
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 949.2929999979083
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 20.05725946428554
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1142.2880000040436
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 30.962946899999604
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 785.2900000031582
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3908435241073203
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 35.10999999889464
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.924583015283507
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 12.390999998501684
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.42631526425082
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 16.10400000373602
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.5695403914591095
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 62.622999998040996
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.384377299999404
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 54.36000000003105
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 45.07989423333285
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 81.99100000183535
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 7.134360249999361
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1561.5619999991281
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 15.719773750000394
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 2067.3220000020365
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 23.117831607143454
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2313.8060000036376
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.436296748382685
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 269.2790000011769
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.3808058676632076
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 18.40699999888784
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.521100360729038
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 32.41400000320027
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 18.316068384615612
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 128.45300000208226
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 40.19947386666658
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 93.73099999976375
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 126.19209099999952
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 184.67700000002196
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 310.076252766667
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 888.8060000060705
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 739.1859405769238
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 855.7269999869277
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 1814.1978910666674
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1953.757999999084
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 402.5455412666673
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 819.7230000064337
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1063.5116652999993
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1184.0909999989435
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1006.3849066000017
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1090.959999999086
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.385878716069971
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 65.43899999655878
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 19.10046189999927
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 68.8939999804461
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 30.423002066667472
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 54.2620000203442
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.623460418766772
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 52.02899998835164
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.470971934921022
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 17.857000017329483
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 10.065135326253369
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 25.26800000168805
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
          "id": "d6a0ff900a39f2ce5e895168affe0371748f6d8e",
          "message": "docs: Update README with correct import statements",
          "timestamp": "2025-12-23T21:18:04Z",
          "author": {
            "name": "google-labs-jules[bot]",
            "email": "161369871+google-labs-jules[bot]@users.noreply.github.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/d6a0ff900a39f2ce5e895168affe0371748f6d8e"
        },
        "date": 1766524684000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 5.298128875179951
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 42.258999997102364
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 10.693714380825735
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 43.46099999708031
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 23.467274999999788
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 65.36200000084591
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.4377191710722836
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 36.33800000102383
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.8759050144735723
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 13.003999995930826
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.3976606525739106
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 13.595999995175134
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 8.082697836119504
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 78.08499999839569
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.94788314285692
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 68.19699999738305
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 44.82103364285602
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 113.46200000161843
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 18.310594583334467
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 97.18100000100094
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 38.03826149999878
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 77.65399999470901
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 117.63500807142943
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 151.05100000312177
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.4070664068296697
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 233.05400000595
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.201237829253736
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 16.8809999934183
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.337141894648717
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 36.48800000632946
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 19.119333583332104
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 157.9059999983201
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 45.471313499998445
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 100.00800000398158
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 140.6645689999999
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 218.7900000052423
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 370.0430485833325
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 700.5469999938896
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 865.6279040833326
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 972.8640000048472
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2195.4469722142844
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2281.765999995855
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 480.7508875714278
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 799.7119999885172
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1247.0519098571465
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1371.9490000028145
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1235.6641163571444
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1385.8349999793518
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 4.830270609320058
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 51.68700002400328
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 9.429487699041134
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 30.336000008901465
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 23.797549571428686
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 55.78399998285022
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 3.5279637961066985
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 36.217999991094985
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 4.299418419323548
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 30.336000008901465
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 7.667938717398102
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 24.49499999102045
          }
        ]
      },
      {
        "commit": {
          "id": "df033c0f2503a7023f9e6b2bbc5a245ac0ccaee8",
          "message": "docs: Update documentation, license, and contribution guidelines",
          "timestamp": "2025-12-23T21:36:24Z",
          "author": {
            "name": "google-labs-jules[bot]",
            "email": "161369871+google-labs-jules[bot]@users.noreply.github.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/df033c0f2503a7023f9e6b2bbc5a245ac0ccaee8"
        },
        "date": 1766525784000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 5.245305135024446
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 34.9749999912774
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 10.730613142856425
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 60.50300000026709
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 22.94252449999945
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 63.99000000101296
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3624314863911955
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 34.13399998919431
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.790800003492654
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 12.092999995161335
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.3312458122772606
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 15.468999990275734
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.692874245472918
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 72.31499999704738
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.77494991666606
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 69.58999999540083
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 44.32085041666648
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 95.46799999782252
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 18.710914999999773
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 92.65399999947022
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 36.99470250000303
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 70.84199999951579
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 115.29753341666667
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 149.41999999962263
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.354159180809953
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 219.59100000401577
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.184409737487244
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 16.931000004660746
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.2758129454500775
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 30.858000002353947
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 19.988958499999637
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 148.88799999823732
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 45.821275857142446
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 111.67799999611816
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 143.99089083333413
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 241.23000000031425
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 373.4881531666687
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 673.5980000058817
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 870.2268107000009
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 959.2520000012428
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2209.4093339166675
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2286.0910000019885
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 480.8834772857133
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 788.6639999981071
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1243.5897150714286
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1381.8019999973785
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1228.1028727142882
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1315.3679999788892
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 4.644300120146662
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 46.18599999162143
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 9.13672957960775
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 27.520999992702855
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 23.610148500000133
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 44.56299998878421
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 3.3859083173869777
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 45.36499997698229
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 4.14794076092745
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 14.958000008391537
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 7.35204358793231
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 21.52999999793792
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
            "value": 6.72874232539797
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 970.6180000108589
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 20.29700600000221
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1160.975999994207
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 31.75596207142815
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 797.3610000107101
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3799014858077139
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 30.48799999305629
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.8759494187872559
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 14.106999998375613
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.4240389086234173
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 16.5109999983315
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.7471412761149745
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 60.80400000030295
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.96190114285656
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 53.561000001423054
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 46.774917357140566
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 83.24699999207041
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.697343357141149
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1553.6749999967014
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 16.32687285714342
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1934.0300000010302
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 24.820970428571343
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1404.5439999961218
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.4083912481592014
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 273.62399998764886
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.284204425343779
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 17.743000000791653
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.396354172398643
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 31.769000003123438
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 19.289952416666978
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 117.1410000040396
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 46.52035308333424
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 93.12499999225565
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 141.8117022857146
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 211.71899999217203
          },
          {
            "name": "MsgPack Serialization Lodum simple",
            "unit": "us",
            "value": 6.8134948758721405
          },
          {
            "name": "MsgPack Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 76.07299998824146
          },
          {
            "name": "MsgPack Serialization Lodum complex",
            "unit": "us",
            "value": 19.943044285713743
          },
          {
            "name": "MsgPack Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 52.17899999365727
          },
          {
            "name": "MsgPack Serialization Lodum nested",
            "unit": "us",
            "value": 28.947236416667483
          },
          {
            "name": "MsgPack Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 53.25999998717634
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.6632969412567875
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.9059999917535606
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.013150339867684
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 5.320000013853132
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 1.712596339908001
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 4.968999974153121
          },
          {
            "name": "MsgPack Deserialization Lodum simple",
            "unit": "us",
            "value": 5.106057531634178
          },
          {
            "name": "MsgPack Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 46.03700000416211
          },
          {
            "name": "MsgPack Deserialization Lodum complex",
            "unit": "us",
            "value": 13.703379857143918
          },
          {
            "name": "MsgPack Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 46.05700002002777
          },
          {
            "name": "MsgPack Deserialization Lodum nested",
            "unit": "us",
            "value": 21.32672314285904
          },
          {
            "name": "MsgPack Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 41.347999996332874
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.52201127166659
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.6950000062697654
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.0634463293849643
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 7.28399999161411
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.3042925867315254
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 7.823999993661346
          },
          {
            "name": "CBOR Serialization Lodum simple",
            "unit": "us",
            "value": 10.363350499998448
          },
          {
            "name": "CBOR Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 85.68100000161394
          },
          {
            "name": "CBOR Serialization Lodum complex",
            "unit": "us",
            "value": 24.50477871428396
          },
          {
            "name": "CBOR Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 59.171999993168356
          },
          {
            "name": "CBOR Serialization Lodum nested",
            "unit": "us",
            "value": 36.65077757143211
          },
          {
            "name": "CBOR Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 62.12700000673976
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 4.46989367348516
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 10.209000009808733
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 6.164062587412189
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 14.257000003681242
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 8.74398487763427
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 18.63500000354179
          },
          {
            "name": "CBOR Deserialization Lodum simple",
            "unit": "us",
            "value": 6.871635968292929
          },
          {
            "name": "CBOR Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 52.369000002272514
          },
          {
            "name": "CBOR Deserialization Lodum complex",
            "unit": "us",
            "value": 16.299082357142375
          },
          {
            "name": "CBOR Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 56.78700000544268
          },
          {
            "name": "CBOR Deserialization Lodum nested",
            "unit": "us",
            "value": 25.8736804285726
          },
          {
            "name": "CBOR Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 47.38999999176485
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 1.9797940216914478
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 5.911999977570304
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 3.2877511724199766
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 9.468000001788823
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 6.377711709765822
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 12.953999998899235
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 393.1244720000007
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 935.8020000149736
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 895.0570052142857
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 992.289000009805
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2202.4452757857102
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2305.602999996381
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 463.3837103333344
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 759.5609999953012
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1205.052830833336
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1328.701999995019
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1116.355895083333
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1200.983000018141
          },
          {
            "name": "TOML Serialization Lodum simple",
            "unit": "us",
            "value": 12.422419166663682
          },
          {
            "name": "TOML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 58.57099998252124
          },
          {
            "name": "TOML Serialization Lodum complex",
            "unit": "us",
            "value": 46.435078357142906
          },
          {
            "name": "TOML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 94.93900000734357
          },
          {
            "name": "TOML Serialization Lodum nested",
            "unit": "us",
            "value": 78.93838414285474
          },
          {
            "name": "TOML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 111.56000002188193
          },
          {
            "name": "TOML Deserialization Lodum simple",
            "unit": "us",
            "value": 22.52975257142761
          },
          {
            "name": "TOML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 115.95800000918643
          },
          {
            "name": "TOML Deserialization Lodum complex",
            "unit": "us",
            "value": 74.20308421428753
          },
          {
            "name": "TOML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 122.5609999835342
          },
          {
            "name": "TOML Deserialization Lodum nested",
            "unit": "us",
            "value": 157.33211364285995
          },
          {
            "name": "TOML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 188.18500001316352
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.181398302765939
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 60.84499997882631
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 18.702816857141006
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 75.68300000571071
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 30.01399442856975
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 56.54699998558499
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.614848927010549
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 37.7009999965594
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.440517995570321
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 31.39999998325038
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 10.129073966353317
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 26.300000001810986
          }
        ]
      },
      {
        "commit": {
          "id": "776522eb9256420afe61652677bd5b2f0aede598",
          "message": "chore(benchmarks): Save current progress before data acquisition",
          "timestamp": "2026-04-11T15:28:57+03:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/776522eb9256420afe61652677bd5b2f0aede598"
        },
        "date": 1775910537000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 6.520785676947331
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 946.0409999988428
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 19.73438892857209
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1181.3420000024166
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 31.064919249999434
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 763.9800000021069
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.382877043286194
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 32.900999997309555
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.8478457023412913
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 12.1419999956629
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.344410413715098
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 14.597000003391258
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.773892778180197
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 57.146999999702075
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.83881828571389
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 55.244000002119265
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 46.70646100000044
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 79.05900000082511
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.82351200000042
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1522.33700000437
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 15.826969750000568
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1953.8969999999267
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 23.41715050000026
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1611.834000001977
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3455129748527639
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 289.4729999951551
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.1838942079189287
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 14.447000005191057
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.337243347587198
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 32.02900000331965
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 19.02133633333314
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 111.58899999941241
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 45.708796083332594
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 94.13699999782921
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 140.76514100000028
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 207.81899999633424
          },
          {
            "name": "MsgPack Serialization Lodum simple",
            "unit": "us",
            "value": 6.635352692141111
          },
          {
            "name": "MsgPack Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 254.07600000448838
          },
          {
            "name": "MsgPack Serialization Lodum complex",
            "unit": "us",
            "value": 19.4670172142872
          },
          {
            "name": "MsgPack Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 51.96700000453802
          },
          {
            "name": "MsgPack Serialization Lodum nested",
            "unit": "us",
            "value": 28.693682333334653
          },
          {
            "name": "MsgPack Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 50.5350000139515
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.6258577048949602
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 3.145999997400395
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 0.9774503126996871
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 6.08099999510614
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 1.6588922409646458
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 5.459999997015075
          },
          {
            "name": "MsgPack Deserialization Lodum simple",
            "unit": "us",
            "value": 5.059187747004846
          },
          {
            "name": "MsgPack Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 45.616000008408264
          },
          {
            "name": "MsgPack Deserialization Lodum complex",
            "unit": "us",
            "value": 13.614394142855701
          },
          {
            "name": "MsgPack Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 61.875000000100044
          },
          {
            "name": "MsgPack Deserialization Lodum nested",
            "unit": "us",
            "value": 21.04517264285834
          },
          {
            "name": "MsgPack Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 44.42300000562227
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.5160350757143257
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.545000000964137
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.0389255130877697
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 6.221999996114391
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.297719132520714
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 7.664999998269195
          },
          {
            "name": "CBOR Serialization Lodum simple",
            "unit": "us",
            "value": 10.345633714285286
          },
          {
            "name": "CBOR Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 91.81199999375167
          },
          {
            "name": "CBOR Serialization Lodum complex",
            "unit": "us",
            "value": 24.326973428568774
          },
          {
            "name": "CBOR Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 60.00199999789402
          },
          {
            "name": "CBOR Serialization Lodum nested",
            "unit": "us",
            "value": 36.22100028571294
          },
          {
            "name": "CBOR Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 61.63499999445321
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 4.154374463893524
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 11.631999996097875
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 5.473699539106794
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 14.217000000371627
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 8.425783828382214
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 17.361999994136568
          },
          {
            "name": "CBOR Deserialization Lodum simple",
            "unit": "us",
            "value": 6.735412538137199
          },
          {
            "name": "CBOR Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 51.044999992200246
          },
          {
            "name": "CBOR Deserialization Lodum complex",
            "unit": "us",
            "value": 16.016221833333805
          },
          {
            "name": "CBOR Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 51.34600000644696
          },
          {
            "name": "CBOR Deserialization Lodum nested",
            "unit": "us",
            "value": 25.720961142856222
          },
          {
            "name": "CBOR Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 46.01699998829645
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 1.9510816525504115
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 6.072000005019618
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 3.327605400445831
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 9.73899999223704
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 6.437502637059993
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 14.12700000003042
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 381.93329200000056
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 890.6569999993508
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 890.3078415000008
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 973.7640000082592
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2211.2234896428586
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2264.551999999753
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 457.12868042857076
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 712.3540000009143
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1197.5372427857178
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1304.4730000046911
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1116.2466319999994
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1188.748000004125
          },
          {
            "name": "TOML Serialization Lodum simple",
            "unit": "us",
            "value": 12.15247008333383
          },
          {
            "name": "TOML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 56.2349999881917
          },
          {
            "name": "TOML Serialization Lodum complex",
            "unit": "us",
            "value": 46.26850435714199
          },
          {
            "name": "TOML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 88.82700001322519
          },
          {
            "name": "TOML Serialization Lodum nested",
            "unit": "us",
            "value": 77.42230607142834
          },
          {
            "name": "TOML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 107.78200001482219
          },
          {
            "name": "TOML Deserialization Lodum simple",
            "unit": "us",
            "value": 22.36807328571087
          },
          {
            "name": "TOML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 94.7370000119463
          },
          {
            "name": "TOML Deserialization Lodum complex",
            "unit": "us",
            "value": 73.06542274999828
          },
          {
            "name": "TOML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 115.95700001976184
          },
          {
            "name": "TOML Deserialization Lodum nested",
            "unit": "us",
            "value": 155.30405792857087
          },
          {
            "name": "TOML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 186.07799998449082
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.148402706406083
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 57.26699998831464
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 18.78506621428804
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 51.22600001072897
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 30.29709199999786
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 55.44399999735106
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.358599227388796
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 43.47099999790771
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.1910003775541
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 34.50500000212742
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.794377515544634
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 26.81999998799256
          }
        ]
      },
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
            "value": 6.453293182070978
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1060.627000001091
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 20.1706441428579
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1083.3489999981794
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 31.934087666667093
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 711.6459999991775
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3575976113261425
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 37.88000000071179
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.901448576358954
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 10.189000001048498
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.3791364605544136
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 14.456999998913034
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.815912744568609
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 54.57199999625573
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.74708828571525
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 51.88699999791879
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 45.655968214284876
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 75.29299999475825
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.502860583333714
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1541.2470000057965
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 15.845573166667274
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1903.433999999038
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 23.496486642856038
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1281.482999999639
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3768425733651166
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 269.7619999949552
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.2301024327927443
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 13.185000000248692
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.325787470032949
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 28.242999995597984
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 19.585850083333394
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 110.27600000090843
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 45.703408499999654
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 87.80400000318878
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 144.4922893571423
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 233.7760000017397
          },
          {
            "name": "MsgPack Serialization Lodum simple",
            "unit": "us",
            "value": 6.710128012111953
          },
          {
            "name": "MsgPack Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 69.57900001225426
          },
          {
            "name": "MsgPack Serialization Lodum complex",
            "unit": "us",
            "value": 19.81572228571135
          },
          {
            "name": "MsgPack Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 50.60499999842705
          },
          {
            "name": "MsgPack Serialization Lodum nested",
            "unit": "us",
            "value": 29.58915674999929
          },
          {
            "name": "MsgPack Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 48.61000000744298
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.6349481001824305
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.635000001305343
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.008408174183287
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 4.598999993277175
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 1.7051859682714126
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 5.039000001261229
          },
          {
            "name": "MsgPack Deserialization Lodum simple",
            "unit": "us",
            "value": 5.194013732443483
          },
          {
            "name": "MsgPack Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 42.247999999744934
          },
          {
            "name": "MsgPack Deserialization Lodum complex",
            "unit": "us",
            "value": 13.742489499999047
          },
          {
            "name": "MsgPack Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 43.56200000188437
          },
          {
            "name": "MsgPack Deserialization Lodum nested",
            "unit": "us",
            "value": 23.54463978571378
          },
          {
            "name": "MsgPack Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 39.92499999583288
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.4943059928571155
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.56499998840809
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.0053397705297966
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 6.532000000447624
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.1813457092188884
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 6.413000008365088
          },
          {
            "name": "CBOR Serialization Lodum simple",
            "unit": "us",
            "value": 10.101476666667017
          },
          {
            "name": "CBOR Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 88.0560000098285
          },
          {
            "name": "CBOR Serialization Lodum complex",
            "unit": "us",
            "value": 24.578209000000786
          },
          {
            "name": "CBOR Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 57.01599999952123
          },
          {
            "name": "CBOR Serialization Lodum nested",
            "unit": "us",
            "value": 36.96819964285579
          },
          {
            "name": "CBOR Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 60.82400000195776
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 4.18367245443754
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 9.80899999092344
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 5.559440835403296
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 12.824000009459269
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 8.512145588527844
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 16.931000004660746
          },
          {
            "name": "CBOR Deserialization Lodum simple",
            "unit": "us",
            "value": 6.713075709425314
          },
          {
            "name": "CBOR Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 49.40299999134368
          },
          {
            "name": "CBOR Deserialization Lodum complex",
            "unit": "us",
            "value": 16.611187357143415
          },
          {
            "name": "CBOR Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 50.7450000100107
          },
          {
            "name": "CBOR Deserialization Lodum nested",
            "unit": "us",
            "value": 25.42581191666689
          },
          {
            "name": "CBOR Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 55.344000003287874
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 1.9053879616035785
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 5.731000001674147
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 3.221532809836817
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 9.637999994538404
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 6.340200526784799
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 14.426999996430823
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 375.06349499999914
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 892.1480000054771
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 880.8308352857159
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 948.6940000016375
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2175.7450154999988
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2295.011000001068
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 457.8502201428551
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 714.3050000024687
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1195.6664086428584
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1315.6699999967714
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1098.1539046428586
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1162.803999989137
          },
          {
            "name": "TOML Serialization Lodum simple",
            "unit": "us",
            "value": 12.446784000005096
          },
          {
            "name": "TOML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 55.86400001789116
          },
          {
            "name": "TOML Serialization Lodum complex",
            "unit": "us",
            "value": 46.59089214285724
          },
          {
            "name": "TOML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 85.45000000026448
          },
          {
            "name": "TOML Serialization Lodum nested",
            "unit": "us",
            "value": 79.10002416667083
          },
          {
            "name": "TOML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 108.56299999773
          },
          {
            "name": "TOML Deserialization Lodum simple",
            "unit": "us",
            "value": 22.2064524166683
          },
          {
            "name": "TOML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 94.50600001059684
          },
          {
            "name": "TOML Deserialization Lodum complex",
            "unit": "us",
            "value": 72.21889558333079
          },
          {
            "name": "TOML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 109.2640000024403
          },
          {
            "name": "TOML Deserialization Lodum nested",
            "unit": "us",
            "value": 154.06260550000385
          },
          {
            "name": "TOML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 184.5950000074481
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.135396134974628
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 67.00500000533793
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 18.683211428572527
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 47.09800001023723
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 29.726204583333526
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 52.15800001678872
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.538862644702306
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 34.42499999550819
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.329843676926026
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 27.381999984754657
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.856666556363864
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 25.286999999707405
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
            "value": 6.514865730917999
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 935.5839999969362
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 20.023546857142804
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1078.7510000014322
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 31.522678416666377
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 721.4139999973668
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3707063247231481
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 31.30799999695455
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.8194765826970614
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 9.608000006267048
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.3444839827561337
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 13.836000000821969
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.8331535186860295
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 52.57800000180168
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 17.26869785714261
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 55.0029999999424
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 46.89287764285664
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 78.8269999958402
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.658701571428338
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1564.5169999984887
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 16.202829928571155
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1911.4729999998303
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 23.42347921428559
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1373.0599999988158
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.4100302543679109
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 244.06400000032136
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.2846817446704364
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 12.062999999784552
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.40439350912786
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 25.52699999824881
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 19.687170142857116
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 107.49100000140288
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 46.00715285714279
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 87.99399999759316
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 145.38060957142866
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 233.51499999790803
          },
          {
            "name": "MsgPack Serialization Lodum simple",
            "unit": "us",
            "value": 6.622104971597688
          },
          {
            "name": "MsgPack Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 160.94000000066444
          },
          {
            "name": "MsgPack Serialization Lodum complex",
            "unit": "us",
            "value": 19.359058666665874
          },
          {
            "name": "MsgPack Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 47.80900000156407
          },
          {
            "name": "MsgPack Serialization Lodum nested",
            "unit": "us",
            "value": 28.981043928571943
          },
          {
            "name": "MsgPack Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 50.42400000121461
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.6511794947037111
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 3.1360000036784186
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.0011733044164406
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 4.859000000578817
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 1.6938273876442091
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 5.079999993995443
          },
          {
            "name": "MsgPack Deserialization Lodum simple",
            "unit": "us",
            "value": 4.923996556974167
          },
          {
            "name": "MsgPack Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 44.703000000367865
          },
          {
            "name": "MsgPack Deserialization Lodum complex",
            "unit": "us",
            "value": 13.462429750000856
          },
          {
            "name": "MsgPack Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 44.5030000122415
          },
          {
            "name": "MsgPack Deserialization Lodum nested",
            "unit": "us",
            "value": 20.430265214285118
          },
          {
            "name": "MsgPack Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 37.620000000515574
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.4986813100000139
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.1339999989322678
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.029196028984116
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 5.058999988705182
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.2196479962980864
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 6.010999996419741
          },
          {
            "name": "CBOR Serialization Lodum simple",
            "unit": "us",
            "value": 10.093497916664992
          },
          {
            "name": "CBOR Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 84.23699999582368
          },
          {
            "name": "CBOR Serialization Lodum complex",
            "unit": "us",
            "value": 24.614796428571545
          },
          {
            "name": "CBOR Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 54.261000002497894
          },
          {
            "name": "CBOR Serialization Lodum nested",
            "unit": "us",
            "value": 36.1215827142861
          },
          {
            "name": "CBOR Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 58.46900000960886
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 4.143529813701876
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 10.619999997629748
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 5.483214681454402
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 12.542999996867366
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 8.315986077481494
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 17.292999999085623
          },
          {
            "name": "CBOR Deserialization Lodum simple",
            "unit": "us",
            "value": 6.67942042192491
          },
          {
            "name": "CBOR Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 49.883000002637345
          },
          {
            "name": "CBOR Deserialization Lodum complex",
            "unit": "us",
            "value": 16.033953416665508
          },
          {
            "name": "CBOR Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 46.79799999962597
          },
          {
            "name": "CBOR Deserialization Lodum nested",
            "unit": "us",
            "value": 25.603615285712674
          },
          {
            "name": "CBOR Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 43.53100000287213
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 2.070451287106691
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 5.650999995054917
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 3.303077007812055
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 10.199000001875902
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 6.4255838442672495
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 12.764000004494847
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 385.71126328571586
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 896.030000006931
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 899.4518623571436
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 989.183999990928
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2236.668036785714
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2285.3500000081794
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 454.6239471428574
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 738.466000001381
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1200.8299424285715
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1317.8160000109074
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1104.2285561428591
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1183.1550000067637
          },
          {
            "name": "TOML Serialization Lodum simple",
            "unit": "us",
            "value": 12.479776666668366
          },
          {
            "name": "TOML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 54.79200001445861
          },
          {
            "name": "TOML Serialization Lodum complex",
            "unit": "us",
            "value": 46.87978485714187
          },
          {
            "name": "TOML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 84.90800001936805
          },
          {
            "name": "TOML Serialization Lodum nested",
            "unit": "us",
            "value": 79.7124974999998
          },
          {
            "name": "TOML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 111.68800000405099
          },
          {
            "name": "TOML Deserialization Lodum simple",
            "unit": "us",
            "value": 22.620145142860387
          },
          {
            "name": "TOML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 92.58200000772376
          },
          {
            "name": "TOML Deserialization Lodum complex",
            "unit": "us",
            "value": 73.44533824999881
          },
          {
            "name": "TOML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 111.43699998683587
          },
          {
            "name": "TOML Deserialization Lodum nested",
            "unit": "us",
            "value": 155.55711285714276
          },
          {
            "name": "TOML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 203.73000000972752
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.1260849420849155
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 53.64899999449335
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 18.744535285713532
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 58.10800001881944
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 29.995462750001423
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 53.03899999375972
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.396196128170074
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 39.76400000738067
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.209912890838675
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 30.686999991758057
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.799800059689103
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 25.32700000301702
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
          "id": "d6a0ff900a39f2ce5e895168affe0371748f6d8e",
          "message": "docs: Update README with correct import statements",
          "timestamp": "2025-12-23T21:18:04Z",
          "author": {
            "name": "google-labs-jules[bot]",
            "email": "161369871+google-labs-jules[bot]@users.noreply.github.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/d6a0ff900a39f2ce5e895168affe0371748f6d8e"
        },
        "date": 1766524684000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 4.850967671887634
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 33.9000000053602
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 9.84126162616371
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 38.2999999715139
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 22.06000000000093
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 66.69999999076026
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.4118057752007669
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 84.79999996779952
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.9839129368115143
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 41.89999998516214
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.6781784905458466
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 30.799999990449578
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 6.628000548592962
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 53.40000001297085
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 14.832842857137914
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 53.29999999048596
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 39.2388642857132
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 109.00000000901855
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 17.300721428568977
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 115.90000002570378
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 35.31469999999461
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 69.49999999505962
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 110.22345714285719
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 156.39999998029452
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.4882130964169733
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 260.1999999569671
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.568629373746117
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 57.80000003596797
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 6.5507872503839595
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 54.099999999834836
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 18.320021428564814
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 105.70000000598156
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 41.1727071428548
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 82.89999999533393
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 125.4236166666658
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 194.00000002178786
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 338.5407142857235
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 611.3000000027569
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 795.710121428572
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 914.7999999754575
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2024.4396428571424
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2104.9000000061824
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 447.2921928571501
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 822.70000001472
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1158.3258785714302
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1247.899999953006
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1156.0524999999918
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1249.1999999610925
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 4.7364409689100295
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 44.60000002382003
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 9.111071026736198
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 28.29999999676147
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 23.33321666667132
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 49.200000034943514
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 3.1768387817561488
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 45.999999997548
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 4.00547059118507
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 24.100000018734136
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 7.075149314745618
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 22.00000000129876
          }
        ]
      },
      {
        "commit": {
          "id": "df033c0f2503a7023f9e6b2bbc5a245ac0ccaee8",
          "message": "docs: Update documentation, license, and contribution guidelines",
          "timestamp": "2025-12-23T21:36:24Z",
          "author": {
            "name": "google-labs-jules[bot]",
            "email": "161369871+google-labs-jules[bot]@users.noreply.github.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/df033c0f2503a7023f9e6b2bbc5a245ac0ccaee8"
        },
        "date": 1766525784000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 4.704621796077732
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 33.59999999474894
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 10.131175422604839
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 37.59999998464991
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 22.219464285719987
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 58.29999997786217
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.441105982488935
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 113.099999964561
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.0291809584390252
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 39.500000013958925
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.7358043316328913
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 40.69999999956053
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 6.634493059216202
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 56.20000001727021
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 14.638778571436108
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 64.19999999707215
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 39.57944285714835
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 106.8000000259417
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 17.830399999998765
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 111.89999997895939
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 35.45537857143342
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 67.8000000107204
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 111.4452571428574
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 159.89999997145787
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.4964808579795004
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 278.29999999084976
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.516752169060783
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 66.00000000389628
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 7.151492857141355
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 64.69999999580978
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 17.344785714284075
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 110.89999998148414
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 41.26784285715855
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 94.59999995442558
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 125.50122142856627
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 236.29999998320272
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 345.63078571427957
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 624.5000000149048
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 814.2525166666653
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 941.5999999760061
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2038.1592750000027
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2126.3999999519
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 456.54642142856767
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 810.5999999656888
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1159.1854249999992
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1226.4999999729298
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1181.6789285714274
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1233.8999999883526
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 4.760764968238643
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 47.499999993760866
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 9.22164709459158
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 27.999999986150215
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 23.528821428560118
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 53.200000024844485
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 3.2197835197843405
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 49.50000004555477
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 3.9975560103295438
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 16.499999958341505
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 7.145642135642552
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 23.999999996249244
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
            "value": 6.161757323898158
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 865.2000000211046
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 19.180908333330155
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1095.2000000088447
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 30.373021428577626
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 759.4999999582797
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3985575160238675
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 81.9000000547021
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.0078351193835373
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 32.400000009147334
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.7297036155508776
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 29.10000000611035
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 6.5597225127218834
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 53.700000080425525
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 14.361041666669886
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 53.89999989802163
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 39.894592857154166
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 77.99999991675577
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.2132583333323055
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1471.299999934672
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 15.636035714294394
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1923.7999999859312
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 22.193324999998747
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1367.5999999804844
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.520474903269111
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 252.2999999428066
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.5124194477454975
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 49.600000011196244
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 6.592965220769544
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 52.39999995865219
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 17.144349999995256
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 103.50000002290471
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 40.66472857143871
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 88.79999995770049
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 123.95348571427738
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 216.0999999887281
          },
          {
            "name": "MsgPack Serialization Lodum simple",
            "unit": "us",
            "value": 6.4071738701359475
          },
          {
            "name": "MsgPack Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 69.29999995008984
          },
          {
            "name": "MsgPack Serialization Lodum complex",
            "unit": "us",
            "value": 18.908778571439402
          },
          {
            "name": "MsgPack Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 53.69999996673869
          },
          {
            "name": "MsgPack Serialization Lodum nested",
            "unit": "us",
            "value": 27.754928571409568
          },
          {
            "name": "MsgPack Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 47.69999998188723
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.8400032685745117
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 3.6000000136482413
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.4231120231122232
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 6.699999971715442
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.4093840750728766
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 6.4000000747910235
          },
          {
            "name": "MsgPack Deserialization Lodum simple",
            "unit": "us",
            "value": 4.579247990371216
          },
          {
            "name": "MsgPack Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 64.19999999707215
          },
          {
            "name": "MsgPack Deserialization Lodum complex",
            "unit": "us",
            "value": 12.425328571436824
          },
          {
            "name": "MsgPack Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 46.69999998441199
          },
          {
            "name": "MsgPack Deserialization Lodum nested",
            "unit": "us",
            "value": 19.221066666678627
          },
          {
            "name": "MsgPack Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 43.09999997076375
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.495496666666971
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.7999999474559445
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.0189257915169674
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 6.800000051043753
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.2019444927781375
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 7.699999969190685
          },
          {
            "name": "CBOR Serialization Lodum simple",
            "unit": "us",
            "value": 9.835192857143024
          },
          {
            "name": "CBOR Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 81.9000000547021
          },
          {
            "name": "CBOR Serialization Lodum complex",
            "unit": "us",
            "value": 23.826099999991715
          },
          {
            "name": "CBOR Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 64.80000001829467
          },
          {
            "name": "CBOR Serialization Lodum nested",
            "unit": "us",
            "value": 34.79105000000767
          },
          {
            "name": "CBOR Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 58.899999999084685
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 4.238520603827185
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 11.599999993450183
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 5.559304359305461
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 15.89999999396241
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 8.532018401380956
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 16.799999912109342
          },
          {
            "name": "CBOR Deserialization Lodum simple",
            "unit": "us",
            "value": 5.993093450893921
          },
          {
            "name": "CBOR Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 77.79999998547282
          },
          {
            "name": "CBOR Deserialization Lodum complex",
            "unit": "us",
            "value": 14.826528571437134
          },
          {
            "name": "CBOR Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 49.0999999556152
          },
          {
            "name": "CBOR Deserialization Lodum nested",
            "unit": "us",
            "value": 23.239657142856426
          },
          {
            "name": "CBOR Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 49.200000034943514
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 1.6942976459770795
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 7.900000014160469
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 3.0924274285722015
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 10.400000064691994
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 5.828794893311936
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 13.299999977789412
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 351.2683285714177
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1152.0000000473374
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 830.9209166666562
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 918.8999999878433
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2060.1090500000023
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2254.3999999697917
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 427.9776214285838
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 668.5000000743457
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1148.1943642857166
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1244.3000000530446
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1080.707258333329
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1123.6999999937325
          },
          {
            "name": "TOML Serialization Lodum simple",
            "unit": "us",
            "value": 11.997483333317405
          },
          {
            "name": "TOML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 150.39999993859965
          },
          {
            "name": "TOML Serialization Lodum complex",
            "unit": "us",
            "value": 45.66588571427538
          },
          {
            "name": "TOML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 109.50000000775617
          },
          {
            "name": "TOML Serialization Lodum nested",
            "unit": "us",
            "value": 78.08100714285209
          },
          {
            "name": "TOML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 136.30000000830478
          },
          {
            "name": "TOML Deserialization Lodum simple",
            "unit": "us",
            "value": 22.063014285712207
          },
          {
            "name": "TOML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 87.499999949614
          },
          {
            "name": "TOML Deserialization Lodum complex",
            "unit": "us",
            "value": 73.79239999999398
          },
          {
            "name": "TOML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 127.09999998605781
          },
          {
            "name": "TOML Deserialization Lodum nested",
            "unit": "us",
            "value": 156.66533571429196
          },
          {
            "name": "TOML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 187.20000002758752
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 6.975891589241324
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 79.79999998042331
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 18.219683333332643
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 56.40000006224
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 30.017778571431922
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 57.80000003596797
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.127188916355914
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 44.399999978850246
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 5.968230105839474
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 23.199999986900366
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.540062008899392
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 29.900000072302646
          }
        ]
      },
      {
        "commit": {
          "id": "776522eb9256420afe61652677bd5b2f0aede598",
          "message": "chore(benchmarks): Save current progress before data acquisition",
          "timestamp": "2026-04-11T15:28:57+03:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/776522eb9256420afe61652677bd5b2f0aede598"
        },
        "date": 1775910537000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 5.995620519745481
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 907.0000000974687
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 19.911642857096012
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1158.699999905366
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 31.193392857111185
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 735.0000000769796
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.5060007817282304
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 101.00000008606003
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.3315857143058696
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 43.99999988891068
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.8026038418015182
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 27.299999601382297
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 6.53838566714636
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 55.5999999960477
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 14.577492857110233
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 54.00000009103678
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 39.37694999994316
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 81.70000000973232
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.176550000039545
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1527.799999621493
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 15.822764285790722
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1970.7999999809545
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 22.815542857123155
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1445.5999998972402
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.593843876406188
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 265.10000043344917
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.6341505562101197
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 60.00000030326191
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 6.856912442401746
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 61.00000018705032
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 17.76614166665998
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 104.79999991730438
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 41.05570833333635
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 86.70000033816905
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 128.8142357142468
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 195.5000002453744
          },
          {
            "name": "MsgPack Serialization Lodum simple",
            "unit": "us",
            "value": 6.431863918536563
          },
          {
            "name": "MsgPack Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 75.69999979750719
          },
          {
            "name": "MsgPack Serialization Lodum complex",
            "unit": "us",
            "value": 18.910724999955164
          },
          {
            "name": "MsgPack Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 52.599999889935134
          },
          {
            "name": "MsgPack Serialization Lodum nested",
            "unit": "us",
            "value": 28.379135714301032
          },
          {
            "name": "MsgPack Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 64.19999999707215
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.8561122488972421
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 3.3000001167238224
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.4063156063160582
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 6.799999937356915
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.4236719779281928
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 6.70000008540228
          },
          {
            "name": "MsgPack Deserialization Lodum simple",
            "unit": "us",
            "value": 4.500289171778722
          },
          {
            "name": "MsgPack Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 72.1999999768741
          },
          {
            "name": "MsgPack Deserialization Lodum complex",
            "unit": "us",
            "value": 13.395025714297455
          },
          {
            "name": "MsgPack Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 43.900000036956044
          },
          {
            "name": "MsgPack Deserialization Lodum nested",
            "unit": "us",
            "value": 19.055099999962163
          },
          {
            "name": "MsgPack Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 44.2000000475673
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.49861828571465594
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.600000243546674
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.0238209238195946
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 5.399999736255268
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.2104133636816754
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 8.400000297115184
          },
          {
            "name": "CBOR Serialization Lodum simple",
            "unit": "us",
            "value": 10.029971428593853
          },
          {
            "name": "CBOR Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 80.59999981924193
          },
          {
            "name": "CBOR Serialization Lodum complex",
            "unit": "us",
            "value": 24.087457142871113
          },
          {
            "name": "CBOR Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 70.00000005064066
          },
          {
            "name": "CBOR Serialization Lodum nested",
            "unit": "us",
            "value": 35.47674999994602
          },
          {
            "name": "CBOR Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 60.400000165827805
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 4.238786551472041
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 9.899999895424116
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 5.618636022459208
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 15.800000255694613
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 8.553990539699814
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 17.800000023271423
          },
          {
            "name": "CBOR Deserialization Lodum simple",
            "unit": "us",
            "value": 5.934276579692808
          },
          {
            "name": "CBOR Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 80.70000012594392
          },
          {
            "name": "CBOR Deserialization Lodum complex",
            "unit": "us",
            "value": 14.827450000060102
          },
          {
            "name": "CBOR Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 77.09999999860884
          },
          {
            "name": "CBOR Deserialization Lodum nested",
            "unit": "us",
            "value": 23.377750000008746
          },
          {
            "name": "CBOR Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 45.200000386103056
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 1.738490567440123
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 5.80000005356851
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 3.019720025769099
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 9.399999726156238
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 5.8143536023099855
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 22.199999875738285
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 345.36844166674047
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1135.9999998603598
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 810.5834357143067
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 965.7000000515836
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2028.7451642857377
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2087.500000016007
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 422.2220166665996
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 699.8999997449573
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1117.850857142912
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1200.2999997093866
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1039.5397666666593
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1088.6999998547253
          },
          {
            "name": "TOML Serialization Lodum simple",
            "unit": "us",
            "value": 12.662485714339969
          },
          {
            "name": "TOML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 63.59999997584964
          },
          {
            "name": "TOML Serialization Lodum complex",
            "unit": "us",
            "value": 46.730314285728774
          },
          {
            "name": "TOML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 95.69999974701204
          },
          {
            "name": "TOML Serialization Lodum nested",
            "unit": "us",
            "value": 80.99427857145461
          },
          {
            "name": "TOML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 121.6000000567874
          },
          {
            "name": "TOML Deserialization Lodum simple",
            "unit": "us",
            "value": 22.85099285709943
          },
          {
            "name": "TOML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 122.5999999405758
          },
          {
            "name": "TOML Deserialization Lodum complex",
            "unit": "us",
            "value": 73.184171428563
          },
          {
            "name": "TOML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 124.40000000424334
          },
          {
            "name": "TOML Deserialization Lodum nested",
            "unit": "us",
            "value": 155.0301000000088
          },
          {
            "name": "TOML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 182.79999994774698
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.0101892627235145
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 72.59999983943999
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 17.600671428551454
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 52.69999974188977
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 28.50444285711871
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 56.800000038492726
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.186779790577257
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 42.79999984646565
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 5.908814306976771
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 20.10000025620684
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.250943894388111
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 27.099999897473026
          }
        ]
      },
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
            "value": 6.110669989911728
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 956.6999999890413
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 19.889210000005164
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1134.1999999956442
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 31.201935714286883
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 776.5999999946871
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.4400916509164539
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 89.00000000267028
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.022085732200752
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 66.80000001324515
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.7757281348122382
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 36.70000000965956
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 6.76497682372501
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 52.59999997520026
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 14.883549999999397
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 47.3000000056345
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 40.631266666669795
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 77.30000001515691
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.047074999997903
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1470.6000000046515
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 15.771291666666798
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1938.4000000002288
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 22.340185714284644
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1326.0999999999967
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.5154821595597858
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 238.49999999470128
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.6682766358955154
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 61.099999982161535
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 8.83231562952797
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 58.8000000050215
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 17.694683333331795
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 131.19999999844367
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 41.85796428571515
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 88.69999999205902
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 128.89516428571264
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 192.9999999958909
          },
          {
            "name": "MsgPack Serialization Lodum simple",
            "unit": "us",
            "value": 6.41168555435951
          },
          {
            "name": "MsgPack Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 86.2999999924341
          },
          {
            "name": "MsgPack Serialization Lodum complex",
            "unit": "us",
            "value": 18.878392857142703
          },
          {
            "name": "MsgPack Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 58.70000001095832
          },
          {
            "name": "MsgPack Serialization Lodum nested",
            "unit": "us",
            "value": 27.463328571430775
          },
          {
            "name": "MsgPack Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 48.300000003109744
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.8217576884244582
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 3.7000000077114237
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.40071550071546
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 12.199999986250987
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.4938851510811677
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 6.399999989525895
          },
          {
            "name": "MsgPack Deserialization Lodum simple",
            "unit": "us",
            "value": 4.504506866417742
          },
          {
            "name": "MsgPack Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 66.59999999669708
          },
          {
            "name": "MsgPack Deserialization Lodum complex",
            "unit": "us",
            "value": 12.281340763255848
          },
          {
            "name": "MsgPack Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 43.500000003859896
          },
          {
            "name": "MsgPack Deserialization Lodum nested",
            "unit": "us",
            "value": 19.66508333333176
          },
          {
            "name": "MsgPack Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 40.400000017370985
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.5068227142857447
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.3999999996249244
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.0140460930813946
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 6.500000012010787
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.1930713445709
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 7.49999998106432
          },
          {
            "name": "CBOR Serialization Lodum simple",
            "unit": "us",
            "value": 9.910321428569498
          },
          {
            "name": "CBOR Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 93.3000000031825
          },
          {
            "name": "CBOR Serialization Lodum complex",
            "unit": "us",
            "value": 23.522814285712457
          },
          {
            "name": "CBOR Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 57.099999992260564
          },
          {
            "name": "CBOR Serialization Lodum nested",
            "unit": "us",
            "value": 35.269628571431404
          },
          {
            "name": "CBOR Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 60.200000007171184
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 4.373084231126581
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 9.099999999762076
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 5.725174011137244
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 14.200000009623182
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 8.67535036556503
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 17.899999988912896
          },
          {
            "name": "CBOR Deserialization Lodum simple",
            "unit": "us",
            "value": 5.884356886558533
          },
          {
            "name": "CBOR Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 84.39999999154679
          },
          {
            "name": "CBOR Deserialization Lodum complex",
            "unit": "us",
            "value": 14.823907142860955
          },
          {
            "name": "CBOR Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 50.600000008671486
          },
          {
            "name": "CBOR Deserialization Lodum nested",
            "unit": "us",
            "value": 23.02912857142506
          },
          {
            "name": "CBOR Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 45.10000002255765
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 1.7670707142853206
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 5.599999951755308
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 3.062162978772298
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 9.999999974752427
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 5.89743000718027
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 13.200000012147939
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 339.5242499999987
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1070.7999999794993
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 796.5250214285747
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 858.4999999925458
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2020.7394357142944
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2033.200000028046
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 431.3125999999962
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 825.8999999952721
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1140.0141357142875
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1214.5999999688684
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1046.7290142857084
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1154.4000000185406
          },
          {
            "name": "TOML Serialization Lodum simple",
            "unit": "us",
            "value": 12.739649999995587
          },
          {
            "name": "TOML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 59.49999996346378
          },
          {
            "name": "TOML Serialization Lodum complex",
            "unit": "us",
            "value": 46.58625833333
          },
          {
            "name": "TOML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 105.20000000724394
          },
          {
            "name": "TOML Serialization Lodum nested",
            "unit": "us",
            "value": 76.36364285713982
          },
          {
            "name": "TOML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 126.4999999648353
          },
          {
            "name": "TOML Deserialization Lodum simple",
            "unit": "us",
            "value": 20.951908333330493
          },
          {
            "name": "TOML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 80.20000001351946
          },
          {
            "name": "TOML Deserialization Lodum complex",
            "unit": "us",
            "value": 71.61902142857457
          },
          {
            "name": "TOML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 117.99999998629573
          },
          {
            "name": "TOML Deserialization Lodum nested",
            "unit": "us",
            "value": 149.70011428570322
          },
          {
            "name": "TOML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 212.49999997507985
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.049587269775608
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 91.59999996199986
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 18.223021428562042
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 52.10000000488435
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 29.06350714284908
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 56.59999999352294
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.109568382735613
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 38.89999999273641
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 5.905739504523985
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 19.50000000761065
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.328718171296488
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 24.800000005598122
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
            "value": 6.387571428571651
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1057.7999999554777
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 20.23025714286015
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1137.0000000283653
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 31.00919285714911
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 739.900000041871
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.4565815693192965
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 109.90000004085232
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.0395794041439586
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 36.20000001092194
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.755912711904944
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 43.399999981375004
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 6.566415055845495
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 56.49999997103805
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 14.804571428572087
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 53.10000000235959
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 40.65673571428517
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 83.39999999407155
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.129391666675588
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1539.6000000009735
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 15.953266666661154
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1929.7000000051412
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 22.24852857142829
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1335.199999971337
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.5062608500866672
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 264.7000000024491
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.5969333630492963
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 59.89999999655993
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 6.466606923212086
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 58.19999995537728
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 18.5185714285743
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 112.99999999891952
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 41.8931416666671
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 89.30000001328153
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 130.0865142857138
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 210.299999992003
          },
          {
            "name": "MsgPack Serialization Lodum simple",
            "unit": "us",
            "value": 6.776758976008571
          },
          {
            "name": "MsgPack Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 85.20000000089567
          },
          {
            "name": "MsgPack Serialization Lodum complex",
            "unit": "us",
            "value": 19.49091428571137
          },
          {
            "name": "MsgPack Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 54.99999997482519
          },
          {
            "name": "MsgPack Serialization Lodum nested",
            "unit": "us",
            "value": 28.71774999999031
          },
          {
            "name": "MsgPack Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 53.10000000235959
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.8224622898489128
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 3.700000036133133
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.3903351428569164
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 6.799999994200334
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.484430386040004
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 7.49999998106432
          },
          {
            "name": "MsgPack Deserialization Lodum simple",
            "unit": "us",
            "value": 4.623083780495809
          },
          {
            "name": "MsgPack Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 84.20000000342043
          },
          {
            "name": "MsgPack Deserialization Lodum complex",
            "unit": "us",
            "value": 13.14349285714148
          },
          {
            "name": "MsgPack Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 47.3000000056345
          },
          {
            "name": "MsgPack Deserialization Lodum nested",
            "unit": "us",
            "value": 19.24078571428416
          },
          {
            "name": "MsgPack Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 42.80000001699591
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.49374414285710244
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.4999999936881068
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.0211026666665173
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 7.100000004811591
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.1919343354748557
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 7.999999979801942
          },
          {
            "name": "CBOR Serialization Lodum simple",
            "unit": "us",
            "value": 10.358171428574028
          },
          {
            "name": "CBOR Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 89.60000002389279
          },
          {
            "name": "CBOR Serialization Lodum complex",
            "unit": "us",
            "value": 24.519442857151066
          },
          {
            "name": "CBOR Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 63.299999965238385
          },
          {
            "name": "CBOR Serialization Lodum nested",
            "unit": "us",
            "value": 35.43713333333187
          },
          {
            "name": "CBOR Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 60.89999999403517
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 4.3145495502446884
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 9.599999998499698
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 5.720742926575639
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 15.00000001897206
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 8.608672651899262
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 32.400000009147334
          },
          {
            "name": "CBOR Deserialization Lodum simple",
            "unit": "us",
            "value": 6.081953214979033
          },
          {
            "name": "CBOR Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 90.19999998827188
          },
          {
            "name": "CBOR Deserialization Lodum complex",
            "unit": "us",
            "value": 15.637035714287808
          },
          {
            "name": "CBOR Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 49.30000000058499
          },
          {
            "name": "CBOR Deserialization Lodum nested",
            "unit": "us",
            "value": 23.357407142859593
          },
          {
            "name": "CBOR Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 52.79999999174834
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 1.7188710641948488
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 6.20000002982124
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 3.0657914079143165
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 12.79999997905179
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 5.839676983848503
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 14.599999985875911
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 347.46385714285566
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1075.2999999681379
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 824.1371999999956
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 932.2000000224762
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2043.8064750000012
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2116.8999999758853
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 439.7592214285656
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 717.0000000087384
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1168.2616416666651
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1266.5000000424698
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1073.0757500000095
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1231.3000000858665
          },
          {
            "name": "TOML Serialization Lodum simple",
            "unit": "us",
            "value": 13.29026428571264
          },
          {
            "name": "TOML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 68.19999998697313
          },
          {
            "name": "TOML Serialization Lodum complex",
            "unit": "us",
            "value": 47.898814285710095
          },
          {
            "name": "TOML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 117.7000000325279
          },
          {
            "name": "TOML Serialization Lodum nested",
            "unit": "us",
            "value": 79.30191428570359
          },
          {
            "name": "TOML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 191.2000000174885
          },
          {
            "name": "TOML Deserialization Lodum simple",
            "unit": "us",
            "value": 22.269349999995875
          },
          {
            "name": "TOML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 92.30000000570726
          },
          {
            "name": "TOML Deserialization Lodum complex",
            "unit": "us",
            "value": 73.17332857142641
          },
          {
            "name": "TOML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 125.79999997797131
          },
          {
            "name": "TOML Deserialization Lodum nested",
            "unit": "us",
            "value": 154.76697857144472
          },
          {
            "name": "TOML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 223.09999997105479
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.590550564654836
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 75.70000002488086
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 18.906509999987975
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 58.399999943503644
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 29.882257142836416
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 64.79999990460783
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.145949705723061
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 54.20000002231973
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 5.9466844959540275
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 20.899999981338624
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.391516399814165
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 28.100000008635106
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
  "lastUpdate": 1776074888170
};