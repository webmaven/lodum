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
            "value": 1.4665920544163786
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 14.8580000001175
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.9051141002577217
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 9.45800000096142
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.470556810588514
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 22.392000005311274
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.5156398434057845
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 55.713999998374675
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.33642076666651
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 54.05999999652522
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 45.1465254285718
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 72.82500000371783
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.4259405741615105
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 227.92499999724214
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.2472595487379126
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 13.534999993680685
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.3560585487592505
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 21.99100000410681
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 18.705051666666844
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 107.62099999794827
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 44.515445807692146
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 100.3309999987323
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 136.91559713333396
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 201.58699999939245
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
            "value": 5.102288323108134
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 661.1769999977923
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 8.04459140354592
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 976.6130000059547
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 21.85377767857182
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 570.681000013451
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3843573094387502
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 35.15299999889976
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.8604392878196059
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 12.679000008120056
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.4380831559852263
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 13.971000001333778
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.544907515586337
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 61.031999990746044
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.534735384615608
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 53.55099999349022
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 44.77949692307703
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 83.51599998945858
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 11.679547307691196
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1629.0219999888222
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 22.52661996666679
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 2070.0750000059998
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 67.80189746428685
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1469.0710000024865
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.4383689220275715
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 285.05000000222935
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.377248414952957
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 17.51700000340861
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.406461598521561
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 40.21099999818034
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 18.60506649999886
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 124.21799999629002
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 40.548424566666576
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 92.83999999354364
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 125.78366589285598
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 191.62799999605795
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 301.6499569285693
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 650.029999974322
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 716.4088663333312
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 828.2480000048054
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 1801.8165737666682
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1935.5860000018765
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 412.5607468000008
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 753.2539999886012
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1068.7879760333326
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1208.5589999912827
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1073.3434442142839
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1149.478000002091
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 4.711251242958479
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 60.74099997022131
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.820289765738357
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 24.166999992303317
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 23.176191200000556
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 54.98199999465214
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 3.716911094285024
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 37.07500002292363
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 4.4520607560236085
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 15.983999958280037
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 7.75318681983041
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 23.074999944583396
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
            "value": 4.737745088535945
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 581.2109999965287
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 7.796258922223749
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 930.6509999902346
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 21.49255556666579
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 532.5110000029554
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3470676320021415
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 32.60100000090915
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.8144068852293622
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 13.40500000424072
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.3961823490103753
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 14.668000005713111
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.575827228723126
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 54.4910000002119
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.62220410714253
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 62.677000002508976
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 44.70197486666573
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 78.55599999118112
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 11.995975214285336
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1576.2430000023642
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 25.198316333333064
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 2040.738000005149
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 73.03011486666738
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1427.3060000107307
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.372968764855694
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 256.3569999978199
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.3289739085825083
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 15.5979999902911
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.399843380328969
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 26.73000000186221
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 18.99461510714216
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 110.04400001013437
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 44.85772082142806
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 111.1469999983683
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 141.85608906666545
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 193.85000000227137
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 367.8530850333331
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 620.1419999882773
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 860.2284751666645
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 928.1769999915923
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2167.9726604333327
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2249.159000001555
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 462.09764189999873
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 745.0150000067879
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1215.5357581333324
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1306.7289999924014
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1178.062228099996
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1275.1099999945836
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 4.548534611409369
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 49.84299999932773
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.676468373139165
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 23.93400001210466
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 23.09098626666734
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 58.28899998050474
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 3.6983793407500145
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 44.67299999078023
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 4.4472440764827095
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 15.259000008427392
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 7.896280955075153
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 22.221999984139984
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
      },
      {
        "commit": {
          "id": "19d795ee9cc3a97db38896a1186aca5e1402d17a",
          "message": "fix(ci): fix branch fetching in finalize-deployment",
          "timestamp": "2026-04-11T22:16:26+03:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/19d795ee9cc3a97db38896a1186aca5e1402d17a"
        },
        "date": 1775934986000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 6.625199139215798
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 969.1580000037447
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 19.98200953846335
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1184.4779999989896
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 31.604730461539205
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 809.6629999840843
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3734217362879675
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 29.914999998936764
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.8311520541893829
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 11.139999998022176
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.380309523809862
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 14.958000008391537
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.598219431697447
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 53.008000008958334
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.50771066666626
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 68.26699998896402
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 45.46774353571387
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 81.20999999050582
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.572350999999595
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1539.8769999990236
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 15.866447964285157
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 2064.671999988832
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 23.37871550000159
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2101.6899999892757
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3642358825651313
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 273.54700000614685
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.2508874366218685
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 17.293000013296478
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.238630407882183
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 27.711000001318098
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 19.330348714284185
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 110.48499999333217
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 46.451841399999694
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 100.49699997694006
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 138.73237650000192
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 218.15400000946283
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 381.0776339642885
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 836.2719999865931
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 895.2145025833324
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 966.0610000139513
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2200.0227919666686
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2320.128000008026
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 454.98088028571107
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 701.9619999937277
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1218.1866969000016
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1315.820000002077
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1121.7676862142878
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1209.2740000184676
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.29681295682558
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 58.808999995108024
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 18.797180115381725
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 66.38299998940056
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 30.597600846157583
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 55.55399997092536
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.470595550641845
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 39.193999953113234
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.312069697995941
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 20.9289999588691
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.982588447687958
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 28.032999978222506
          }
        ]
      },
      {
        "commit": {
          "id": "41b1889f62dc4a7b9b4d77a3fcefa0e77a7bcdd8",
          "message": "fix(ci): robust concurrent gh-pages updates",
          "timestamp": "2026-04-11T22:24:14+03:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/41b1889f62dc4a7b9b4d77a3fcefa0e77a7bcdd8"
        },
        "date": 1775935454000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 6.604128045867242
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 939.872000003561
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 19.92005776923132
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1198.8059999978873
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 30.834016785714624
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 787.7970000009782
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3589900377244377
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 35.8180000006314
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.8342547366960307
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 11.016000001973225
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.50458947092037
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 15.994000001740005
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.424534344455727
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 61.692000002722125
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.09844257142891
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 53.538999999602765
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 44.720936892857516
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 79.27699999754623
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.670333846153598
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1556.0350000001222
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 15.389853928570776
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1986.541999997371
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 23.03876314285702
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2159.978999998202
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.443154086635674
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 301.19600000233504
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.4829322599387984
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 18.409999995583348
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.433847824219825
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 30.596000001992252
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 17.820903178570294
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 121.55999999663436
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 39.44406710714356
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 88.00100000172506
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 126.36106646428605
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 182.4109999972734
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 305.78229914285794
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 869.5020000004661
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 734.3228940333328
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 840.3209999983119
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 1818.7283577666653
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1943.2770000094024
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 407.61873664285883
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 731.0969999991812
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1073.1534724333292
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1208.6739999972451
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1009.626855033333
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1137.0969999973113
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.330465550239136
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 65.26799998596289
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 18.82924883333601
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 67.97200001074089
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 29.832790607140883
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 53.22000001228844
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.546467255790287
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 42.15299998122646
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.416317074335808
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 19.78899999244277
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.87390841029184
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 27.090000003227033
          }
        ]
      },
      {
        "commit": {
          "id": "7045e5c6f7e471e9eb08c4c575c53a723efb5d62",
          "message": "fix(benchmarks): robust tag resolution",
          "timestamp": "2026-04-11T22:33:40+03:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/7045e5c6f7e471e9eb08c4c575c53a723efb5d62"
        },
        "date": 1775936020000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 6.667401548516883
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 966.4279999981318
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 19.830120428571416
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1589.8850000013454
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 31.156822115384294
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 817.9269999999406
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3869799194470602
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 38.4470000014403
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.875076095250373
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 23.275000003764035
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.519393845848102
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 17.166000006341164
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.558336329876949
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 67.43999999514472
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.606499166665856
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 56.364000002417924
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 45.18951780000009
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 85.8779999930448
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.826898461538961
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1608.4119999959512
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 15.482063642857266
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 2102.355999994643
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 22.921813321428175
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2243.395999997233
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.4423769667192352
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 298.4540000028346
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.3862999465810533
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 18.918000009193747
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.375809975267977
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 33.78099999906681
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 18.337180678570977
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 129.33300000383952
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 41.39656638461549
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 91.15499999268195
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 124.8417916250008
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 188.5009999966769
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 306.4576523214281
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 911.5440000044828
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 729.3388722499988
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 864.4739999965623
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 1811.275646499998
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1951.4509999964957
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 406.1420825999979
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 729.2439999844191
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1072.665621566665
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1213.583999998491
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1005.6330960357137
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1112.0919999996204
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.513869900718626
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 75.57299997529299
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 18.83710636666649
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 69.46400000629183
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 29.739330833335014
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 56.18400001594637
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.908557000443642
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 45.41800001334195
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.632070858473855
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 18.798000013475757
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 10.107904415317
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 27.48099998939324
          }
        ]
      },
      {
        "commit": {
          "id": "244850c47f45f8f142eedceb4b8dd24a668d7b24",
          "message": "fix(ci): fix generator repo path and windows PYTHONPATH",
          "timestamp": "2026-04-11T22:41:26+03:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/244850c47f45f8f142eedceb4b8dd24a668d7b24"
        },
        "date": 1775936486000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 6.536729719133037
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 965.4190000034646
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 19.931958678571146
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1149.542999996811
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 31.520319500000703
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 775.5159999973671
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3804212586276998
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 31.849999999167267
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.8191341968214383
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 11.030999999661617
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.429627015537987
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 30.34600000262344
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.562354297219233
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 56.66500000245378
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.542390100000166
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 54.45100000400771
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 45.01848993333392
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 88.50500000079364
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.557702464285648
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1539.831000002323
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 16.0351272499997
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1923.9169999991645
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 23.277823269230915
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2311.689999999089
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.4389596829880311
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 266.64699999656705
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.3664784800213443
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 19.356000002801466
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.375693739990274
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 28.07199999921295
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 18.634437653846227
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 111.92799999548697
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 45.00876920000039
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 97.33099999920114
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 141.16339739999995
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 194.77300000403375
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 381.34359573077
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 868.5270000015066
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 892.3395048000003
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 974.9559999931989
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2204.183932900001
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2298.6540000005107
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 457.84334819999896
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 775.3250000064327
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1220.6056618666669
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1308.2269999813434
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1123.8417628666648
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1204.2540000152258
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.183281114834343
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 76.46200000976933
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 18.82717183333303
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 64.6009999911712
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 29.857684607141064
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 55.61300000067604
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.452135604697749
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 46.70699999564931
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.286245152264919
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 20.427999999128588
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.94949802130812
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 28.933999999480875
          }
        ]
      },
      {
        "commit": {
          "id": "b9ee729ac3438f64f376eb8920b0eb2e8a4fbeee",
          "message": "fix(ci): fix shell compatibility and concurrent push logic",
          "timestamp": "2026-04-11T22:48:34+03:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/b9ee729ac3438f64f376eb8920b0eb2e8a4fbeee"
        },
        "date": 1775936914000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 6.588906685981605
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 942.4070000036977
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 20.252194678570948
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1140.145000000814
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 31.75394053333349
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 752.3419999984071
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3950474485394002
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 28.59599999993634
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.803498841723194
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 24.816999996346567
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.331062024818534
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 13.285000001417302
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.581233239209237
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 55.47399999983327
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.67900557142892
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 52.658000001315486
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 44.61462126923129
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 80.94199999675311
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.529466958332897
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1527.920000000904
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 16.142857538461076
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1918.238000001793
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 23.911776653847028
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2036.0480000007897
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3954370893048353
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 232.4430000015809
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.287167036550574
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 15.027999999972508
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.268011769295877
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 25.48999999874013
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 19.055713923076922
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 107.44200000090132
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 45.5512938928569
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 92.45300000060297
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 139.3282945333335
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 191.15799999980254
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 380.8680495333344
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 836.7800000002035
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 886.9142274285713
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1055.1929999991216
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2204.4581354666675
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2321.818000012854
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 455.63040134615346
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 736.02099999448
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1226.9204010833298
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1302.3850000024595
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1144.3248613571434
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1227.47399998957
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.355625346614749
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 60.01299999525145
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 19.096823433333537
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 69.01900002276307
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 30.236797099998586
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 57.487999981731264
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.537778042450154
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 40.194999996856495
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.515133282883235
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 20.739000035518984
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 10.037870989411312
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 26.800000000548607
          }
        ]
      },
      {
        "commit": {
          "id": "f228e12d93aebd785c8270aa71caa209676fd8a6",
          "message": "fix(ci): definitive infrastructure fix",
          "timestamp": "2026-04-11T22:58:18+03:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/f228e12d93aebd785c8270aa71caa209676fd8a6"
        },
        "date": 1775937498000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 6.602262181660949
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 958.4419999981719
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 20.103266875000376
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1170.8680000026561
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 31.732564833333754
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 776.0829999980956
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3631712249999122
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 28.743000001441033
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.8216093457396871
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 11.450999998885436
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.3382632616573433
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 14.366999998571828
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.462235318934167
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 66.97399999922027
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.483065269230934
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 51.636000002019955
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 45.31681520833312
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 77.49400000278683
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.459507769231338
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1529.6160000062287
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 15.756397357142912
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 2000.1119999975003
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 23.44128145833313
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2111.0969999966755
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.4137850826743399
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 264.53200000275956
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.284172521201784
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 16.601000005778133
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.263179249416673
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 28.753000002268436
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 18.78535234615369
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 107.79000000127326
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 45.98249153333285
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 92.80300000114039
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 139.93794218181804
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 209.0889999948331
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 379.271912964286
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 866.5260000029207
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 893.8956121785704
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 999.8480000064092
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2178.1461808666672
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2354.502000002867
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 450.62092224999736
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 710.2410000072723
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1202.554808333332
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1312.412000004315
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1118.0066679999973
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1202.6269999978467
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.082760622281776
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 59.53100000510858
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 18.767981866666144
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 51.65600001078019
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 29.89122333333493
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 74.35800000621384
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.488921804025701
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 40.1249999981701
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.37997118079208
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 20.889000012402903
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.779371771025069
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 26.840000003858222
          }
        ]
      },
      {
        "commit": {
          "id": "128c1906c4bcac0cd635310926d61d535a4e7960",
          "message": "fix(deps): standardize imports and add diagnostic tracing for CI",
          "timestamp": "2026-04-12T14:06:49+03:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/128c1906c4bcac0cd635310926d61d535a4e7960"
        },
        "date": 1775992009000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 6.915371415192083
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 949.2679999993925
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 20.453054192307228
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1167.0840000022054
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 31.81423466666692
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 787.7470000039466
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3671663941161318
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 30.913000003351954
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.8503615469855146
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 10.883000001626897
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.3820863280394473
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 13.294000005714679
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.662659538944513
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 55.68499999952792
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 17.503122807692232
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 52.44799999815086
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 46.011548818182035
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 86.07099999835555
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.702181884615919
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1512.5760000032074
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 16.243489624999736
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 2013.063999996234
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 24.19357156666706
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2112.941999996565
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.4392465824898288
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 266.75999999525857
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.359228256588204
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 18.314000001851127
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.394330709594536
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 29.427999997722054
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 19.291883576923233
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 110.82900000047857
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 46.11212167857128
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 95.08899999843834
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 140.4443721333332
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 198.73400000136598
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 385.126729499999
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 837.8389999990077
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 892.9944488999988
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 972.5620000011759
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2192.8938751000014
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2288.442999997642
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 451.289454866667
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 727.9120000021067
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1203.8065350714292
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1293.7889999875551
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1121.5961519666687
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1179.312000004984
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.427899200946658
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 57.60800002008182
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 18.951603800001255
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 55.32399998742221
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 30.48236819999867
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 56.87699999157303
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.5860722202493704
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 39.14400002713592
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.293761652508038
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 21.591000006537797
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.934667674222878
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 27.31199998606826
          }
        ]
      },
      {
        "commit": {
          "id": "ad3d67c384598b985567e65bffdae2abaf0bfe17",
          "message": "refactor: remove CI debug traces",
          "timestamp": "2026-04-12T14:17:45+03:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/ad3d67c384598b985567e65bffdae2abaf0bfe17"
        },
        "date": 1775992665000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 6.508190464286047
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 917.6089999982651
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 19.841383766667775
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1158.07699999948
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 31.599053230770835
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 787.7479999933712
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3761104543304565
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 33.24099999701957
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.8201947510583905
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 10.729999999625761
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.341751685393273
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 15.930000003550049
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.728654362744369
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 59.53100000510858
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.57692523333291
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 57.116999997219864
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 45.621359166668185
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 82.18399999293524
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.491714769231075
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1537.0359999877792
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 15.680819535714667
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 2030.2979999939907
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 23.550193461538527
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2175.708999999415
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.372499680545885
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 272.8779999898734
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.254493785213089
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 19.41600000066046
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.282117521626516
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 32.770999993658734
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 19.02441539285706
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 119.51300000134779
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 45.3974276923077
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 97.75199998784956
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 142.560570642857
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 223.00600001301518
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 380.232771230768
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 877.7759999958334
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 886.7003476785698
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1007.5369999924533
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2162.4822318214306
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2252.2969999840825
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 452.1789238076945
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 747.9240000236587
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1209.1497166071415
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1304.4600000000628
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1109.7756649642859
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1206.1969999876965
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.169106559422749
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 83.68600003905158
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 18.68927333332901
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 52.63799999966068
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 29.618542321429686
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 59.69099998992533
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.466048175866812
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 43.03000002892077
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.388383910055474
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 22.69200001592253
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.896329550207614
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 28.3819999822299
          }
        ]
      },
      {
        "commit": {
          "id": "e40d57f35b5fc6be67a5302714851cb9e512b733",
          "message": "fix(benchmarks): implement version-aware streaming compatibility shim",
          "timestamp": "2026-04-12T14:25:39+03:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/e40d57f35b5fc6be67a5302714851cb9e512b733"
        },
        "date": 1775993139000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 6.750019553715234
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 961.1529999986601
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 19.736411038461362
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1248.3379999963518
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 31.557156250000013
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 799.0209999988451
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3629250510785709
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 32.34999999790489
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.8126279021879006
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 32.089999997708674
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.305893229437243
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 14.276999998230622
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.744760205345892
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 61.435000006326845
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.906071966666286
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 53.841000003274075
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 45.702332392856704
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 86.69099999991658
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.477383499999908
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1553.7989999998558
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 15.729803999999348
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 2086.853999998084
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 23.141808821429116
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2142.5280000002545
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3924066094768204
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 241.3509999996677
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.258508704925361
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 17.58300000176405
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.282354282641713
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 29.034000000649485
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 19.715417214285935
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 114.3229999982509
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 46.786675633334106
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 96.00500000317425
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 146.49196093333336
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 207.23899999808282
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 389.2739340769237
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 876.281000003587
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 909.9439908333334
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1005.6960000071058
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2249.8530174666653
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2366.8559999947547
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 460.7715369000014
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 742.9519999959666
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1240.3415122999984
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1327.6969999935773
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1157.404048533335
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1240.4839999931028
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.464285563344122
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 61.805999962416536
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 18.804899300001427
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 69.97099995942335
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 30.48422807142767
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 61.25499999143358
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.555127070111738
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 38.39200002175858
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.387194528471426
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 23.302999977659056
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.945037043024971
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 27.82200004958213
          }
        ]
      }
    ],
    "Lodum Performance Index - ubuntu-latest": [
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
      },
      {
        "commit": {
          "id": "19d795ee9cc3a97db38896a1186aca5e1402d17a",
          "message": "fix(ci): fix branch fetching in finalize-deployment",
          "timestamp": "2026-04-11T22:16:26+03:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/19d795ee9cc3a97db38896a1186aca5e1402d17a"
        },
        "date": 1775934986000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 6.74022175000033
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 989.7270000180924
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 19.894915333331653
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1225.7079999926646
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 31.70444642857311
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 798.501000019769
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3500272759536402
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 34.83500000811546
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.8422416629610787
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 12.943999990966404
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.4661276869936875
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 15.63899999723617
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.756722976796559
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 78.5269999994398
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.909650142857963
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 56.185000005370966
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 45.878340499996284
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 81.31199999183991
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.613398166670947
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1548.5609999927874
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 15.69669583333185
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 2051.7099999892707
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 23.74767385714652
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1440.5790000182606
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.374247148809526
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 273.16999998561187
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.164367420787312
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 17.591999977639716
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.437604221841592
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 49.48299999796291
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 19.52757616666645
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 116.14699999995537
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 47.31675157142945
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 97.04100000362814
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 144.20594691666602
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 212.71700001079807
          },
          {
            "name": "MsgPack Serialization Lodum simple",
            "unit": "us",
            "value": 6.832714375660074
          },
          {
            "name": "MsgPack Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 85.4890000141495
          },
          {
            "name": "MsgPack Serialization Lodum complex",
            "unit": "us",
            "value": 19.56806558333331
          },
          {
            "name": "MsgPack Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 68.6479999956191
          },
          {
            "name": "MsgPack Serialization Lodum nested",
            "unit": "us",
            "value": 28.792566499999356
          },
          {
            "name": "MsgPack Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 53.58999999316438
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.6399969616251837
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 3.826999972034173
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.006899796609539
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 6.442000000106418
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 1.710935858039311
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 6.461999987550371
          },
          {
            "name": "MsgPack Deserialization Lodum simple",
            "unit": "us",
            "value": 5.126050954707341
          },
          {
            "name": "MsgPack Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 50.35399999542278
          },
          {
            "name": "MsgPack Deserialization Lodum complex",
            "unit": "us",
            "value": 13.788000857147154
          },
          {
            "name": "MsgPack Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 51.15499999419626
          },
          {
            "name": "MsgPack Deserialization Lodum nested",
            "unit": "us",
            "value": 21.355137785712536
          },
          {
            "name": "MsgPack Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 46.55800000818999
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.5013341366666187
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.8350000036425627
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.0300275870333115
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 7.69400000422138
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.2377814617796536
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 7.393999993610123
          },
          {
            "name": "CBOR Serialization Lodum simple",
            "unit": "us",
            "value": 10.283493642859298
          },
          {
            "name": "CBOR Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 101.41900000348869
          },
          {
            "name": "CBOR Serialization Lodum complex",
            "unit": "us",
            "value": 24.70437449999809
          },
          {
            "name": "CBOR Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 84.94900001210226
          },
          {
            "name": "CBOR Serialization Lodum nested",
            "unit": "us",
            "value": 35.899347666666394
          },
          {
            "name": "CBOR Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 64.44100000635444
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 4.115207390021464
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 13.365000000931104
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 5.478709278576505
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 17.281999987517338
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 8.383232963437914
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 36.82799999182862
          },
          {
            "name": "CBOR Deserialization Lodum simple",
            "unit": "us",
            "value": 6.889038114634607
          },
          {
            "name": "CBOR Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 54.33100000118429
          },
          {
            "name": "CBOR Deserialization Lodum complex",
            "unit": "us",
            "value": 16.323969428573346
          },
          {
            "name": "CBOR Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 53.08900000500216
          },
          {
            "name": "CBOR Deserialization Lodum nested",
            "unit": "us",
            "value": 26.06389500000148
          },
          {
            "name": "CBOR Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 51.42599999885533
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 1.9238198269649234
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 5.320000013853132
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 3.279933189396597
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 9.52799999254239
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 6.445662225881178
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 12.644000008776857
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 386.5198747142894
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 955.0229999888415
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 910.5931920000033
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 999.2560000000594
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2214.3447746428596
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2349.977000022818
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 462.8612712142878
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 736.4340000037828
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1227.262623142851
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1342.8860000033183
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1134.9836660000067
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1218.7240000116617
          },
          {
            "name": "TOML Serialization Lodum simple",
            "unit": "us",
            "value": 12.275619499997484
          },
          {
            "name": "TOML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 58.79000002551038
          },
          {
            "name": "TOML Serialization Lodum complex",
            "unit": "us",
            "value": 46.14351642856767
          },
          {
            "name": "TOML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 95.70800000346935
          },
          {
            "name": "TOML Serialization Lodum nested",
            "unit": "us",
            "value": 78.25555435714803
          },
          {
            "name": "TOML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 113.91300000695992
          },
          {
            "name": "TOML Deserialization Lodum simple",
            "unit": "us",
            "value": 22.277502833333074
          },
          {
            "name": "TOML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 103.44300000042495
          },
          {
            "name": "TOML Deserialization Lodum complex",
            "unit": "us",
            "value": 72.93518678571331
          },
          {
            "name": "TOML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 124.48200004655519
          },
          {
            "name": "TOML Deserialization Lodum nested",
            "unit": "us",
            "value": 155.49014478571215
          },
          {
            "name": "TOML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 201.10500003056586
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.265841552567155
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 59.54100004146312
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 18.6238839999971
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 51.546000008784176
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 29.855906928576456
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 55.59299995638867
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.423845431070155
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 38.69200003236983
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.324012674467194
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 34.10299996176036
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.84092174618149
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 26.880000007167837
          }
        ]
      },
      {
        "commit": {
          "id": "41b1889f62dc4a7b9b4d77a3fcefa0e77a7bcdd8",
          "message": "fix(ci): robust concurrent gh-pages updates",
          "timestamp": "2026-04-11T22:24:14+03:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/41b1889f62dc4a7b9b4d77a3fcefa0e77a7bcdd8"
        },
        "date": 1775935454000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 6.6912656250003275
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 966.7679999978418
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 20.45482542857156
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1186.2839999992048
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 30.849691000000234
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 805.2670000040507
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3723669153987106
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 39.487999998755186
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.9254173390809153
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 12.738999998873624
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.4611744040493115
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 18.838000002574518
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.525905529666218
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 66.8599999968933
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.379949500000397
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 56.67799999997669
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 44.995662500000456
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 85.38799999513458
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 7.043460071428293
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1617.2130000029483
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 15.507278333333355
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 2088.4409999979425
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 22.814583916667058
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1468.7239999986446
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.5159703962416546
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 312.6229999992347
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.3772239680787184
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 17.016000001035536
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.706427262623278
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 34.58100000131026
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 18.395135666667173
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 140.9479999949781
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 41.25599671428607
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 111.81500000390088
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 126.62564935714317
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 214.13699999328628
          },
          {
            "name": "MsgPack Serialization Lodum simple",
            "unit": "us",
            "value": 6.623578704883274
          },
          {
            "name": "MsgPack Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 94.62000000581838
          },
          {
            "name": "MsgPack Serialization Lodum complex",
            "unit": "us",
            "value": 19.31328514285724
          },
          {
            "name": "MsgPack Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 71.32599999692957
          },
          {
            "name": "MsgPack Serialization Lodum nested",
            "unit": "us",
            "value": 28.213420285714466
          },
          {
            "name": "MsgPack Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 49.10300000915413
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.597923530000036
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.2039999976186664
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 0.9908719345278887
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 6.259000002728499
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 1.7036611963851922
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 5.227999992030163
          },
          {
            "name": "MsgPack Deserialization Lodum simple",
            "unit": "us",
            "value": 5.042920852706382
          },
          {
            "name": "MsgPack Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 59.906999993586396
          },
          {
            "name": "MsgPack Deserialization Lodum complex",
            "unit": "us",
            "value": 13.395332541642976
          },
          {
            "name": "MsgPack Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 52.706000005287024
          },
          {
            "name": "MsgPack Deserialization Lodum nested",
            "unit": "us",
            "value": 20.15812807142936
          },
          {
            "name": "MsgPack Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 41.88100000135364
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.4659204628571599
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.452999993352023
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.0428720818633352
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 8.613000005652793
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.1460658745782992
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 7.992000007561728
          },
          {
            "name": "CBOR Serialization Lodum simple",
            "unit": "us",
            "value": 10.508475285715033
          },
          {
            "name": "CBOR Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 105.94600000501941
          },
          {
            "name": "CBOR Serialization Lodum complex",
            "unit": "us",
            "value": 23.731032916665857
          },
          {
            "name": "CBOR Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 61.491000010960306
          },
          {
            "name": "CBOR Serialization Lodum nested",
            "unit": "us",
            "value": 34.774172666664306
          },
          {
            "name": "CBOR Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 56.84399999950074
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 4.331952285804303
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 8.512000007954157
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 5.657439226695793
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 13.260000002901506
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 8.629723722173765
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 16.494000007583054
          },
          {
            "name": "CBOR Deserialization Lodum simple",
            "unit": "us",
            "value": 6.871462825911214
          },
          {
            "name": "CBOR Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 62.53200000116976
          },
          {
            "name": "CBOR Deserialization Lodum complex",
            "unit": "us",
            "value": 15.705594333334478
          },
          {
            "name": "CBOR Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 52.24699999928362
          },
          {
            "name": "CBOR Deserialization Lodum nested",
            "unit": "us",
            "value": 26.086167642856953
          },
          {
            "name": "CBOR Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 46.549000003892615
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 1.9484966240181874
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 5.368000003613815
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 3.3613238365067404
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 9.524000006422284
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 6.434656969110776
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 12.619000003155634
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 305.30066649999793
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 965.4240000003256
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 731.5946158333352
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 859.9080000095682
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 1802.5544975833345
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1899.6019999946157
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 414.3541734166665
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 774.6419999961063
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1082.364353214286
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1225.3479999912997
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1011.0322037857173
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1115.895999987515
          },
          {
            "name": "TOML Serialization Lodum simple",
            "unit": "us",
            "value": 12.234285166663028
          },
          {
            "name": "TOML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 65.2360000117369
          },
          {
            "name": "TOML Serialization Lodum complex",
            "unit": "us",
            "value": 40.579639428569536
          },
          {
            "name": "TOML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 100.06799999473515
          },
          {
            "name": "TOML Serialization Lodum nested",
            "unit": "us",
            "value": 69.30112471428426
          },
          {
            "name": "TOML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 107.30799999691953
          },
          {
            "name": "TOML Deserialization Lodum simple",
            "unit": "us",
            "value": 19.777132833330786
          },
          {
            "name": "TOML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 112.51600000150574
          },
          {
            "name": "TOML Deserialization Lodum complex",
            "unit": "us",
            "value": 58.478326928569196
          },
          {
            "name": "TOML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 122.7709999795934
          },
          {
            "name": "TOML Deserialization Lodum nested",
            "unit": "us",
            "value": 133.6829379285689
          },
          {
            "name": "TOML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 189.60000002721245
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.336421461244776
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 86.03599999901235
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 18.81319033333521
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 50.73500000207787
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 30.020624857144185
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 65.39699998597825
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.689589695870434
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 40.56999998169886
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.408289488218341
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 34.89099998432721
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.982566848390224
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 24.306000000251515
          }
        ]
      },
      {
        "commit": {
          "id": "7045e5c6f7e471e9eb08c4c575c53a723efb5d62",
          "message": "fix(benchmarks): robust tag resolution",
          "timestamp": "2026-04-11T22:33:40+03:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/7045e5c6f7e471e9eb08c4c575c53a723efb5d62"
        },
        "date": 1775936020000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 6.690993054681373
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1016.3180000120065
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 20.350689833333508
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1195.464000005586
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 31.554203083334897
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 800.4120000038029
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3569306841076654
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 32.261000001199136
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.7943833339369037
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 13.945999995712555
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.3453304852060044
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 16.840999990108685
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.658642576119014
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 73.46799999652376
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.872535428571414
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 51.98800000982828
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 45.110113071428614
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 78.70800000375766
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.519798916666986
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1579.45499999812
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 15.90890657142958
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 2028.9879999921823
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 23.25560666666367
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1456.8240000016885
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3883034911356342
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 279.3240000045216
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.2008383270062493
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 20.167999991826946
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.3279846320790005
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 34.54400000180158
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 19.368542142857898
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 117.50999999549094
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 46.50760057142885
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 97.412999991775
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 139.94096121428612
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 211.71699999911198
          },
          {
            "name": "MsgPack Serialization Lodum simple",
            "unit": "us",
            "value": 6.703257419579766
          },
          {
            "name": "MsgPack Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 75.91199999978926
          },
          {
            "name": "MsgPack Serialization Lodum complex",
            "unit": "us",
            "value": 19.80011471428611
          },
          {
            "name": "MsgPack Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 69.85199999576253
          },
          {
            "name": "MsgPack Serialization Lodum nested",
            "unit": "us",
            "value": 29.19925058333443
          },
          {
            "name": "MsgPack Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 52.077999995958635
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.6303346535929474
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 3.246000005674432
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.0092196462771064
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 5.911000002356559
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 1.697483859580943
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 5.59100000430135
          },
          {
            "name": "MsgPack Deserialization Lodum simple",
            "unit": "us",
            "value": 5.070983288299031
          },
          {
            "name": "MsgPack Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 48.19999999483571
          },
          {
            "name": "MsgPack Deserialization Lodum complex",
            "unit": "us",
            "value": 13.853296666666163
          },
          {
            "name": "MsgPack Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 49.68299998608927
          },
          {
            "name": "MsgPack Deserialization Lodum nested",
            "unit": "us",
            "value": 20.825525142857007
          },
          {
            "name": "MsgPack Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 45.88600000943188
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.5017321716666837
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.7759999881027397
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.0171775814850144
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 6.643000006079092
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.228106696305495
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 7.593999981736488
          },
          {
            "name": "CBOR Serialization Lodum simple",
            "unit": "us",
            "value": 10.538420071428943
          },
          {
            "name": "CBOR Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 93.58600001974082
          },
          {
            "name": "CBOR Serialization Lodum complex",
            "unit": "us",
            "value": 25.01810921428671
          },
          {
            "name": "CBOR Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 63.790000012886594
          },
          {
            "name": "CBOR Serialization Lodum nested",
            "unit": "us",
            "value": 36.90272635714312
          },
          {
            "name": "CBOR Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 62.82799998302835
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 4.185367669253968
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 9.8489999800222
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 5.565658477599568
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 16.119999997954437
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 8.41009768175037
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 17.86299998229879
          },
          {
            "name": "CBOR Deserialization Lodum simple",
            "unit": "us",
            "value": 6.810997906855095
          },
          {
            "name": "CBOR Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 52.72900000363734
          },
          {
            "name": "CBOR Deserialization Lodum complex",
            "unit": "us",
            "value": 16.201514333334426
          },
          {
            "name": "CBOR Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 51.44700000414559
          },
          {
            "name": "CBOR Deserialization Lodum nested",
            "unit": "us",
            "value": 25.744939571428713
          },
          {
            "name": "CBOR Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 51.52700001076482
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 1.9396637092902222
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 6.271000017932238
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 3.304170479462135
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 10.17899998601024
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 6.55627245390882
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 13.704999986430266
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 380.12016899999827
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 907.392999977219
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 892.8137497857124
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 987.1029999999337
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2210.7046802142836
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2309.4350000008035
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 458.78980791666635
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 753.9350000058676
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1230.6739417142844
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1350.1440000140974
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1147.2241579285724
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1326.869999985547
          },
          {
            "name": "TOML Serialization Lodum simple",
            "unit": "us",
            "value": 12.940509583332963
          },
          {
            "name": "TOML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 62.42699998892931
          },
          {
            "name": "TOML Serialization Lodum complex",
            "unit": "us",
            "value": 48.4332581428585
          },
          {
            "name": "TOML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 101.420000021335
          },
          {
            "name": "TOML Serialization Lodum nested",
            "unit": "us",
            "value": 80.84274428571396
          },
          {
            "name": "TOML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 132.38899998668785
          },
          {
            "name": "TOML Deserialization Lodum simple",
            "unit": "us",
            "value": 23.315046357144606
          },
          {
            "name": "TOML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 103.87500000774708
          },
          {
            "name": "TOML Deserialization Lodum complex",
            "unit": "us",
            "value": 74.1099072142869
          },
          {
            "name": "TOML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 142.24699998521828
          },
          {
            "name": "TOML Deserialization Lodum nested",
            "unit": "us",
            "value": 157.0144028571434
          },
          {
            "name": "TOML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 225.57300002290503
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.307852514844315
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 75.62199999711083
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 18.987714428573913
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 55.46400001321672
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 30.546808357142044
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 71.87400001384958
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.545619117205763
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 39.533999995455815
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.398916943884139
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 35.205999978416
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 10.162803578551262
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 27.47100000988212
          }
        ]
      },
      {
        "commit": {
          "id": "244850c47f45f8f142eedceb4b8dd24a668d7b24",
          "message": "fix(ci): fix generator repo path and windows PYTHONPATH",
          "timestamp": "2026-04-11T22:41:26+03:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/244850c47f45f8f142eedceb4b8dd24a668d7b24"
        },
        "date": 1775936486000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 6.83237231005703
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 991.7790000031346
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 20.281942142857087
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1208.3860000018376
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 31.2425022142858
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 812.0040000036965
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3742408306417662
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 36.32500000350092
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.876207874044657
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 13.599999995506096
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.4563006679099844
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 15.963999999257794
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.6206881987578985
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 61.58299999725614
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.82016428571436
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 55.664000001343084
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 45.2317179166671
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 80.43099999355263
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.777615750001094
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1578.0779999943206
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 15.499103666667699
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 2127.674999996998
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 23.147125142857913
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1523.104999989755
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.4915991639387784
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 317.0570000037287
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.399580150862927
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 18.447999991622055
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.355602521008392
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 33.84100000403123
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 17.974446666665738
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 124.7380000108933
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 39.89124492857091
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 91.37699998973403
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 125.99498185714303
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 208.32399999903828
          },
          {
            "name": "MsgPack Serialization Lodum simple",
            "unit": "us",
            "value": 6.711680671183147
          },
          {
            "name": "MsgPack Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 91.63999999373118
          },
          {
            "name": "MsgPack Serialization Lodum complex",
            "unit": "us",
            "value": 19.00814021428435
          },
          {
            "name": "MsgPack Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 69.87700000138375
          },
          {
            "name": "MsgPack Serialization Lodum nested",
            "unit": "us",
            "value": 28.20298342857289
          },
          {
            "name": "MsgPack Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 51.23800001172185
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.5955810485714201
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.4540000111983318
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 0.9823582341430093
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 6.490000004077956
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 1.680314655142276
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 5.948999998395266
          },
          {
            "name": "MsgPack Deserialization Lodum simple",
            "unit": "us",
            "value": 5.073796568627309
          },
          {
            "name": "MsgPack Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 56.88600001008126
          },
          {
            "name": "MsgPack Deserialization Lodum complex",
            "unit": "us",
            "value": 13.362858159549063
          },
          {
            "name": "MsgPack Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 54.58300000782401
          },
          {
            "name": "MsgPack Deserialization Lodum nested",
            "unit": "us",
            "value": 20.485455071429165
          },
          {
            "name": "MsgPack Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 43.14500000646149
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.4485462285714042
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.543999997328683
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 0.9662144692966492
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 7.420999992291399
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 1.9938351081257863
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 7.851999995978076
          },
          {
            "name": "CBOR Serialization Lodum simple",
            "unit": "us",
            "value": 10.071090284813502
          },
          {
            "name": "CBOR Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 102.65499999206895
          },
          {
            "name": "CBOR Serialization Lodum complex",
            "unit": "us",
            "value": 23.468142428571678
          },
          {
            "name": "CBOR Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 62.364000001480235
          },
          {
            "name": "CBOR Serialization Lodum nested",
            "unit": "us",
            "value": 34.63060871428577
          },
          {
            "name": "CBOR Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 57.46699999065186
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 4.2671790496379804
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 9.335000001442495
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 5.576816623529876
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 13.770999998996558
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 8.247973416675938
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 32.29899999723784
          },
          {
            "name": "CBOR Deserialization Lodum simple",
            "unit": "us",
            "value": 6.744020136761474
          },
          {
            "name": "CBOR Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 57.8869999969811
          },
          {
            "name": "CBOR Deserialization Lodum complex",
            "unit": "us",
            "value": 15.805532642857097
          },
          {
            "name": "CBOR Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 51.56800000349904
          },
          {
            "name": "CBOR Deserialization Lodum nested",
            "unit": "us",
            "value": 25.211582428570164
          },
          {
            "name": "CBOR Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 49.18400000519796
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 1.9447662574108355
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 4.607000008149953
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 3.283225602649755
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 10.19500000154494
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 6.420226651901165
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 13.37000000489752
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 306.9790152857144
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 998.2459999946514
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 730.3132206666672
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 858.0540000053816
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 1795.8525938571422
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1936.5320000019892
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 407.53939133333597
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 766.9480000060958
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1061.5403054285712
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1221.6840000007778
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 988.408728583335
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1101.5720000102647
          },
          {
            "name": "TOML Serialization Lodum simple",
            "unit": "us",
            "value": 12.243049999999775
          },
          {
            "name": "TOML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 76.03500000641361
          },
          {
            "name": "TOML Serialization Lodum complex",
            "unit": "us",
            "value": 40.130042642855656
          },
          {
            "name": "TOML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 98.59900001174537
          },
          {
            "name": "TOML Serialization Lodum nested",
            "unit": "us",
            "value": 68.37025570000321
          },
          {
            "name": "TOML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 105.37899999008005
          },
          {
            "name": "TOML Deserialization Lodum simple",
            "unit": "us",
            "value": 19.760151416666833
          },
          {
            "name": "TOML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 111.4080000093054
          },
          {
            "name": "TOML Deserialization Lodum complex",
            "unit": "us",
            "value": 58.15229671428718
          },
          {
            "name": "TOML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 116.99699999212498
          },
          {
            "name": "TOML Deserialization Lodum nested",
            "unit": "us",
            "value": 133.60955285713973
          },
          {
            "name": "TOML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 187.27200000512312
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.34744895395999
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 77.84700000001976
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 18.732996250003946
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 49.473999979454675
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 29.962693642862146
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 67.02100000666178
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.565815014322324
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 41.10199998308417
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.368612964663824
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 31.646999985923685
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.877164861205106
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 23.744999992914018
          }
        ]
      },
      {
        "commit": {
          "id": "b9ee729ac3438f64f376eb8920b0eb2e8a4fbeee",
          "message": "fix(ci): fix shell compatibility and concurrent push logic",
          "timestamp": "2026-04-11T22:48:34+03:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/b9ee729ac3438f64f376eb8920b0eb2e8a4fbeee"
        },
        "date": 1775936914000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 6.752019853313143
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 987.1280000055549
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 20.390532214285376
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1170.3179999997815
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 30.827581071427293
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 811.7590000011887
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.408832486046445
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 35.54100000258131
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.9189512318299728
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 12.50700000099414
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.5039616348984204
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 14.83199999796625
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.86893822903131
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 63.173000000915636
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.580938833334002
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 51.605999999537744
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 46.63825583333411
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 77.52500000179907
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.8426184166667054
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1587.2640000011984
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 15.503808333334018
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 2019.222000001264
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 23.23322885714266
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1422.8619999983039
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.4440997121780328
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 305.9319999962895
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.3769999299519813
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 16.575000003626883
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.60733519991678
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 33.95000000239179
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 18.615173833333404
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 140.2869999935774
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 41.17836721428552
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 91.2150000047518
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 130.56015649999964
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 198.13300000492973
          },
          {
            "name": "MsgPack Serialization Lodum simple",
            "unit": "us",
            "value": 6.497400353745585
          },
          {
            "name": "MsgPack Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 89.97300000146424
          },
          {
            "name": "MsgPack Serialization Lodum complex",
            "unit": "us",
            "value": 18.763420142857257
          },
          {
            "name": "MsgPack Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 83.3630000016683
          },
          {
            "name": "MsgPack Serialization Lodum nested",
            "unit": "us",
            "value": 27.607688928571047
          },
          {
            "name": "MsgPack Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 58.5459999982163
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.6055579557142872
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.5639999989834905
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 0.9864017956536706
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 6.528999996646689
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 1.6826234379670841
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 4.977000003236753
          },
          {
            "name": "MsgPack Deserialization Lodum simple",
            "unit": "us",
            "value": 5.086390034555745
          },
          {
            "name": "MsgPack Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 52.79799999868828
          },
          {
            "name": "MsgPack Deserialization Lodum complex",
            "unit": "us",
            "value": 13.340466071428652
          },
          {
            "name": "MsgPack Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 51.14500000047428
          },
          {
            "name": "MsgPack Deserialization Lodum nested",
            "unit": "us",
            "value": 20.7646505714294
          },
          {
            "name": "MsgPack Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 41.701999997201256
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.4623174971428564
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.413000004253263
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 0.9908846304716068
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 7.240999998714415
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.0482495519826793
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 7.169999996392562
          },
          {
            "name": "CBOR Serialization Lodum simple",
            "unit": "us",
            "value": 10.042164230343896
          },
          {
            "name": "CBOR Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 118.88499999912483
          },
          {
            "name": "CBOR Serialization Lodum complex",
            "unit": "us",
            "value": 23.38788091666603
          },
          {
            "name": "CBOR Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 58.3160000005023
          },
          {
            "name": "CBOR Serialization Lodum nested",
            "unit": "us",
            "value": 34.66073716666607
          },
          {
            "name": "CBOR Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 55.42099999900074
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 4.242827450096702
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 8.592999996892559
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 5.534449090358836
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 13.860999999337764
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 8.235082981164439
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 15.903000004868773
          },
          {
            "name": "CBOR Deserialization Lodum simple",
            "unit": "us",
            "value": 6.926851732473442
          },
          {
            "name": "CBOR Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 57.45400000023437
          },
          {
            "name": "CBOR Deserialization Lodum complex",
            "unit": "us",
            "value": 15.777623999998777
          },
          {
            "name": "CBOR Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 51.37499999818829
          },
          {
            "name": "CBOR Deserialization Lodum nested",
            "unit": "us",
            "value": 25.494074083333373
          },
          {
            "name": "CBOR Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 44.21500000262313
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 1.9413384718440305
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 4.437000001189517
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 3.3067830283029283
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 8.782999998402374
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 6.462379949801126
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 12.71900001142967
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 305.33489008333345
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 898.1670000025588
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 723.589804083332
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 841.3770000004206
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 1801.1162515
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1906.0419999874512
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 412.9718714285713
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 724.4570000040085
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1062.95722214286
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1200.5060000035428
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 997.2109938333311
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1089.012000008438
          },
          {
            "name": "TOML Serialization Lodum simple",
            "unit": "us",
            "value": 12.43428624999865
          },
          {
            "name": "TOML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 66.68800000397823
          },
          {
            "name": "TOML Serialization Lodum complex",
            "unit": "us",
            "value": 40.550402285715236
          },
          {
            "name": "TOML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 91.69499998051833
          },
          {
            "name": "TOML Serialization Lodum nested",
            "unit": "us",
            "value": 69.15901285714605
          },
          {
            "name": "TOML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 102.59100000098442
          },
          {
            "name": "TOML Deserialization Lodum simple",
            "unit": "us",
            "value": 20.034031750000736
          },
          {
            "name": "TOML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 125.41400002419323
          },
          {
            "name": "TOML Deserialization Lodum complex",
            "unit": "us",
            "value": 58.871198285716886
          },
          {
            "name": "TOML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 117.06200001526668
          },
          {
            "name": "TOML Deserialization Lodum nested",
            "unit": "us",
            "value": 136.76092066666948
          },
          {
            "name": "TOML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 189.66900000805254
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.219068609482747
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 82.88200001516088
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 18.572181714282415
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 50.52400001659407
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 29.2531788333316
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 65.49699998004144
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.470377398240034
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 39.76900001134709
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.212864793358146
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 33.07800000129646
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.66392685861305
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 22.713999982215682
          }
        ]
      },
      {
        "commit": {
          "id": "f228e12d93aebd785c8270aa71caa209676fd8a6",
          "message": "fix(ci): definitive infrastructure fix",
          "timestamp": "2026-04-11T22:58:18+03:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/f228e12d93aebd785c8270aa71caa209676fd8a6"
        },
        "date": 1775937498000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 6.561307357913304
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 944.7540000024901
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 20.182637083333788
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1053.8269999997851
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 31.57822785714361
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 690.079000001731
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3870292987793038
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 24.886999995032966
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.857361767463508
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 9.407999996824401
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.3665262729860235
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 12.25200000476434
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.4727146621203
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 69.70000000450227
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.435274499999913
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 47.21799999884979
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 44.46323014285675
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 72.525000000212
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.7087556666667325
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1548.200000001998
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 17.50101599999963
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1925.7949999982316
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 24.95735583333314
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1436.9430000016337
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.421100359836115
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 244.12599999834583
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.188210593338968
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 14.95800000128611
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.546510029150074
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 23.97499999773345
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 19.21095316666725
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 119.73299999823439
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 46.108705999999295
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 89.86699999979919
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 144.1946682857141
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 195.61500000264687
          },
          {
            "name": "MsgPack Serialization Lodum simple",
            "unit": "us",
            "value": 6.648384313460932
          },
          {
            "name": "MsgPack Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 62.75700000202278
          },
          {
            "name": "MsgPack Serialization Lodum complex",
            "unit": "us",
            "value": 19.39421764285701
          },
          {
            "name": "MsgPack Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 52.41799999566865
          },
          {
            "name": "MsgPack Serialization Lodum nested",
            "unit": "us",
            "value": 28.614683083333148
          },
          {
            "name": "MsgPack Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 46.897999993689155
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.6477943326197976
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.6040000022931054
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.0131958672812003
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 5.661000002987748
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 1.7088166314575586
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 5.290000004265494
          },
          {
            "name": "MsgPack Deserialization Lodum simple",
            "unit": "us",
            "value": 5.021455480432016
          },
          {
            "name": "MsgPack Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 44.58299999043902
          },
          {
            "name": "MsgPack Deserialization Lodum complex",
            "unit": "us",
            "value": 13.598583750001817
          },
          {
            "name": "MsgPack Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 45.39500000078078
          },
          {
            "name": "MsgPack Deserialization Lodum nested",
            "unit": "us",
            "value": 20.880698666667048
          },
          {
            "name": "MsgPack Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 38.07100000585706
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.5030740485714246
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 1.9529999946144017
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.0266271197035683
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 3.6869999888722305
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.2135224109092135
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 4.379000003496003
          },
          {
            "name": "CBOR Serialization Lodum simple",
            "unit": "us",
            "value": 10.156483357142017
          },
          {
            "name": "CBOR Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 67.81599999783339
          },
          {
            "name": "CBOR Serialization Lodum complex",
            "unit": "us",
            "value": 24.492794928573655
          },
          {
            "name": "CBOR Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 56.19499999909294
          },
          {
            "name": "CBOR Serialization Lodum nested",
            "unit": "us",
            "value": 36.29654728571349
          },
          {
            "name": "CBOR Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 56.02500000634336
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 4.095318249526608
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 19.174999991378172
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 5.53464673552648
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 12.564000002157627
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 8.456221414564611
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 15.908999998259787
          },
          {
            "name": "CBOR Deserialization Lodum simple",
            "unit": "us",
            "value": 6.866936375158266
          },
          {
            "name": "CBOR Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 46.275999991962635
          },
          {
            "name": "CBOR Deserialization Lodum complex",
            "unit": "us",
            "value": 16.210522499998245
          },
          {
            "name": "CBOR Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 46.99700001253859
          },
          {
            "name": "CBOR Deserialization Lodum nested",
            "unit": "us",
            "value": 25.766476714286416
          },
          {
            "name": "CBOR Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 43.02099999620168
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 1.9395035614005376
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 5.821000002015353
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 3.2975486921529025
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 7.623999991324126
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 6.336981073246369
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 11.070999988760377
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 378.620040250001
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 872.5389999995059
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 888.7143512142858
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 994.5370000110643
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2235.7996946428552
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2315.8420000015667
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 459.0350419285727
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 735.4330000026721
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1197.6364197142836
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1320.9349999954156
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1100.5872018333325
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1181.5039999873989
          },
          {
            "name": "TOML Serialization Lodum simple",
            "unit": "us",
            "value": 12.397029571429487
          },
          {
            "name": "TOML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 53.82000000508924
          },
          {
            "name": "TOML Serialization Lodum complex",
            "unit": "us",
            "value": 46.3975182142836
          },
          {
            "name": "TOML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 96.9900000029611
          },
          {
            "name": "TOML Serialization Lodum nested",
            "unit": "us",
            "value": 79.38133857142914
          },
          {
            "name": "TOML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 126.29599999058883
          },
          {
            "name": "TOML Deserialization Lodum simple",
            "unit": "us",
            "value": 22.528385214284544
          },
          {
            "name": "TOML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 95.6880000160254
          },
          {
            "name": "TOML Deserialization Lodum complex",
            "unit": "us",
            "value": 72.76214049999956
          },
          {
            "name": "TOML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 116.61800002116252
          },
          {
            "name": "TOML Deserialization Lodum nested",
            "unit": "us",
            "value": 157.41924800000362
          },
          {
            "name": "TOML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 201.51600000417602
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.079184915022833
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 64.79099999978644
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 18.65647700000141
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 47.16800000892363
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 29.725068928572437
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 57.77799998440969
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.390024345981952
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 37.10899997599881
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.243177955272073
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 27.922000015223603
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.828019058185442
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 25.90799999779847
          }
        ]
      },
      {
        "commit": {
          "id": "ad3d67c384598b985567e65bffdae2abaf0bfe17",
          "message": "refactor: remove CI debug traces",
          "timestamp": "2026-04-12T14:17:45+03:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/ad3d67c384598b985567e65bffdae2abaf0bfe17"
        },
        "date": 1775992665000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 6.740910123269269
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 970.1150000012149
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 20.154454166667907
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1173.617999995713
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 31.25613785714267
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 805.8290000008128
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.4095416260966618
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 35.18300000138197
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.9227801580403927
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 12.249000000963406
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.444038727137581
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 16.71500000099968
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.678712574394866
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 61.73200000603174
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.373335785713902
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 53.219000001547556
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 46.09158114285756
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 80.47000000033222
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.8086212499990735
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1621.0830000034093
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 15.614986166667679
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 2057.4440000018512
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 22.855163571429774
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1441.1550000019702
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.4298213799276003
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 304.65400000423415
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.272372171435776
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 17.966999998009214
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.318226426147358
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 32.928999999626285
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 18.152330666667993
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 123.95399999576284
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 40.49549564285623
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 92.44799999663655
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 126.70663928571406
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 194.3600000018364
          },
          {
            "name": "MsgPack Serialization Lodum simple",
            "unit": "us",
            "value": 6.6647200082485725
          },
          {
            "name": "MsgPack Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 88.7810000023137
          },
          {
            "name": "MsgPack Serialization Lodum complex",
            "unit": "us",
            "value": 19.169680214285936
          },
          {
            "name": "MsgPack Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 68.3029999990481
          },
          {
            "name": "MsgPack Serialization Lodum nested",
            "unit": "us",
            "value": 28.190389785714945
          },
          {
            "name": "MsgPack Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 48.3019999961698
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.6082864728571634
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.804999994054924
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 0.9868077804265808
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 6.119000005355701
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 1.7048760311530513
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 5.287999996994586
          },
          {
            "name": "MsgPack Deserialization Lodum simple",
            "unit": "us",
            "value": 5.0991352567319685
          },
          {
            "name": "MsgPack Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 49.05399999444171
          },
          {
            "name": "MsgPack Deserialization Lodum complex",
            "unit": "us",
            "value": 13.413711941478775
          },
          {
            "name": "MsgPack Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 49.91499999817961
          },
          {
            "name": "MsgPack Deserialization Lodum nested",
            "unit": "us",
            "value": 20.3003148571419
          },
          {
            "name": "MsgPack Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 41.36199999749124
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.4479271428571557
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.3540000029242947
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 0.9638576893418255
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 6.9510000031414165
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.037441782710192
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 7.541000002220244
          },
          {
            "name": "CBOR Serialization Lodum simple",
            "unit": "us",
            "value": 10.189687357143587
          },
          {
            "name": "CBOR Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 111.90799999383216
          },
          {
            "name": "CBOR Serialization Lodum complex",
            "unit": "us",
            "value": 23.680605714284905
          },
          {
            "name": "CBOR Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 57.01599999952123
          },
          {
            "name": "CBOR Serialization Lodum nested",
            "unit": "us",
            "value": 34.615461785713414
          },
          {
            "name": "CBOR Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 55.59299999902123
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 4.249245429906866
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 8.95399999478741
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 5.6471394713355405
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 13.058999996928833
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 8.386366520481417
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 16.013999996289385
          },
          {
            "name": "CBOR Deserialization Lodum simple",
            "unit": "us",
            "value": 6.755987733731844
          },
          {
            "name": "CBOR Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 55.29300000262083
          },
          {
            "name": "CBOR Deserialization Lodum complex",
            "unit": "us",
            "value": 15.857616071430009
          },
          {
            "name": "CBOR Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 47.91199999942819
          },
          {
            "name": "CBOR Deserialization Lodum nested",
            "unit": "us",
            "value": 25.27606875000051
          },
          {
            "name": "CBOR Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 44.71799999805626
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 1.894149873042196
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 4.746999991311895
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 3.2383748604800444
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 8.974000010653072
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 6.312814407678655
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 23.544999990576798
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 311.57736242857123
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 899.2690000013681
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 736.6438210000023
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 872.6789999968787
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 1821.1979788571437
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1930.8789999996634
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 408.4328819999996
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 741.7730000014444
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1076.4782421666664
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1214.6210000025803
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1025.8330246428623
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1122.9940000134775
          },
          {
            "name": "TOML Serialization Lodum simple",
            "unit": "us",
            "value": 12.500090083330898
          },
          {
            "name": "TOML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 64.25600000170562
          },
          {
            "name": "TOML Serialization Lodum complex",
            "unit": "us",
            "value": 40.44228885714217
          },
          {
            "name": "TOML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 97.81700001099125
          },
          {
            "name": "TOML Serialization Lodum nested",
            "unit": "us",
            "value": 70.65635521428655
          },
          {
            "name": "TOML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 106.19900001529459
          },
          {
            "name": "TOML Deserialization Lodum simple",
            "unit": "us",
            "value": 20.25446658333389
          },
          {
            "name": "TOML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 109.91499999590815
          },
          {
            "name": "TOML Deserialization Lodum complex",
            "unit": "us",
            "value": 59.37102466666744
          },
          {
            "name": "TOML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 129.5240000160902
          },
          {
            "name": "TOML Deserialization Lodum nested",
            "unit": "us",
            "value": 136.39675635714354
          },
          {
            "name": "TOML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 180.24999999965985
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.360749885615849
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 65.8990000204085
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 18.873151642858538
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 65.00699998923665
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 29.772673749998074
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 53.50000000703403
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.678354588506929
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 43.34500002300956
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.48767064168088
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 33.16999999469772
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 10.321084485968639
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 23.545000004787653
          }
        ]
      },
      {
        "commit": {
          "id": "e40d57f35b5fc6be67a5302714851cb9e512b733",
          "message": "fix(benchmarks): implement version-aware streaming compatibility shim",
          "timestamp": "2026-04-12T14:25:39+03:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/e40d57f35b5fc6be67a5302714851cb9e512b733"
        },
        "date": 1775993139000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 6.742119917972185
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1010.3340000000571
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 20.31526971428629
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1084.7639999980174
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 32.06038657142735
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 790.4340000095544
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3825592841887517
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 32.8810000098656
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.857095365851177
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 14.437000004363654
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.3488130375974596
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 17.55299999217641
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.542770220018573
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 57.116999997219864
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.50404050000073
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 53.09899999872414
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 45.49252149999968
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 82.30400000286409
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.703696666666777
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1545.3130000082638
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 16.059329083335665
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 2046.0570000011558
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 23.770543099999486
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1418.1060000026946
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.5009774935863354
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 258.63199999776043
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.317109801009904
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 14.626999998768042
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 5.344635400570947
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 30.035999998290208
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 19.16648907142766
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 125.635000003399
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 46.56628233333393
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 92.55300000177158
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 142.4383653571429
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 242.9740000025049
          },
          {
            "name": "MsgPack Serialization Lodum simple",
            "unit": "us",
            "value": 6.689499895510162
          },
          {
            "name": "MsgPack Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 77.62499998875683
          },
          {
            "name": "MsgPack Serialization Lodum complex",
            "unit": "us",
            "value": 19.56687957142833
          },
          {
            "name": "MsgPack Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 68.83899999365894
          },
          {
            "name": "MsgPack Serialization Lodum nested",
            "unit": "us",
            "value": 29.353197214283405
          },
          {
            "name": "MsgPack Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 53.188999999065345
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.6421174534784397
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.855000019508225
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.031633860873178
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 6.130999992137731
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 1.7039266596627425
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 5.269000013186087
          },
          {
            "name": "MsgPack Deserialization Lodum simple",
            "unit": "us",
            "value": 5.0174233610625185
          },
          {
            "name": "MsgPack Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 47.659000017574726
          },
          {
            "name": "MsgPack Deserialization Lodum complex",
            "unit": "us",
            "value": 13.822919750002901
          },
          {
            "name": "MsgPack Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 47.04799999899478
          },
          {
            "name": "MsgPack Deserialization Lodum nested",
            "unit": "us",
            "value": 20.946858785714134
          },
          {
            "name": "MsgPack Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 44.29300000197145
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.5047793414285755
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.40500000359134
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.03524690005524
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 6.37199997299831
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.267951809041264
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 7.553999978426873
          },
          {
            "name": "CBOR Serialization Lodum simple",
            "unit": "us",
            "value": 10.511388642856089
          },
          {
            "name": "CBOR Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 92.95399999587062
          },
          {
            "name": "CBOR Serialization Lodum complex",
            "unit": "us",
            "value": 24.74108957142513
          },
          {
            "name": "CBOR Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 60.01199997740514
          },
          {
            "name": "CBOR Serialization Lodum nested",
            "unit": "us",
            "value": 36.643766714285725
          },
          {
            "name": "CBOR Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 62.306000017997576
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 4.218164826280088
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 9.378000015658472
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 5.51497603597515
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 14.045999989775737
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 8.422590842900403
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 17.242000012629433
          },
          {
            "name": "CBOR Deserialization Lodum simple",
            "unit": "us",
            "value": 6.848423247444167
          },
          {
            "name": "CBOR Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 52.17700001480807
          },
          {
            "name": "CBOR Deserialization Lodum complex",
            "unit": "us",
            "value": 16.267775666667223
          },
          {
            "name": "CBOR Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 50.40400000666523
          },
          {
            "name": "CBOR Deserialization Lodum nested",
            "unit": "us",
            "value": 25.61544014285541
          },
          {
            "name": "CBOR Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 48.380000009728974
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 1.9562354602509804
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 5.731000015885002
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 3.355011363231467
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 9.237000000439366
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 6.407274057889368
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 12.623000003486595
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 388.3573389999993
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 885.1409999977022
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 899.3549327142825
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1003.0210000024908
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2222.9618776428597
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2331.6600000100607
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 460.87227028570913
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 738.4280000053423
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1220.1980700714269
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1328.6780000214549
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1128.2740389285705
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1208.1339999951979
          },
          {
            "name": "TOML Serialization Lodum simple",
            "unit": "us",
            "value": 12.852332916665432
          },
          {
            "name": "TOML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 59.652000004462025
          },
          {
            "name": "TOML Serialization Lodum complex",
            "unit": "us",
            "value": 48.74310128571275
          },
          {
            "name": "TOML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 105.4660000079366
          },
          {
            "name": "TOML Serialization Lodum nested",
            "unit": "us",
            "value": 81.30423850000008
          },
          {
            "name": "TOML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 130.69400000631504
          },
          {
            "name": "TOML Deserialization Lodum simple",
            "unit": "us",
            "value": 23.70624974999913
          },
          {
            "name": "TOML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 106.9799999982024
          },
          {
            "name": "TOML Deserialization Lodum complex",
            "unit": "us",
            "value": 75.16196342856826
          },
          {
            "name": "TOML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 124.46299999169241
          },
          {
            "name": "TOML Deserialization Lodum nested",
            "unit": "us",
            "value": 159.5848036999996
          },
          {
            "name": "TOML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 233.3349999901202
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.623333952511589
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 69.8409999984051
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 19.41879071428738
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 50.874999999450665
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 31.453207285715784
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 71.69400001316717
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.611650448269027
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 38.57199999401928
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.474540509259404
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 35.305000011476295
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 10.052095903822359
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 26.55899999126632
          }
        ]
      }
    ],
    "Lodum Performance Index - windows-latest": [
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
          "id": "f228e12d93aebd785c8270aa71caa209676fd8a6",
          "message": "fix(ci): definitive infrastructure fix",
          "timestamp": "2026-04-11T22:58:18+03:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/f228e12d93aebd785c8270aa71caa209676fd8a6"
        },
        "date": 1775937498000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 5.933364347742037
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 905.1000000113163
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 19.812928571427943
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1079.8000000136199
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 30.038471428566385
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 705.4000000152882
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.4810873159048599
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 90.79999998107269
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.222226485791206
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 37.300000002460365
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.6687291687297026
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 35.90000000031068
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 6.519285714285444
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 54.900000009183714
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 14.364691666668724
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 48.70000000778418
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 39.13370714285439
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 78.09999999608408
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 5.950541666668603
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1446.299999997791
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 15.709907142855123
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1897.8999999887947
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 22.019350000001786
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1299.2999999994481
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.498511024384937
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 260.60000001848493
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.577035881435266
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 56.79999998164931
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 6.514868606402457
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 52.800000020170046
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 17.306583333332053
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 105.70000000598156
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 40.884225000001585
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 102.9000000016822
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 126.47793571428119
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 189.200000022538
          },
          {
            "name": "MsgPack Serialization Lodum simple",
            "unit": "us",
            "value": 6.394882995319742
          },
          {
            "name": "MsgPack Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 72.59999998154854
          },
          {
            "name": "MsgPack Serialization Lodum complex",
            "unit": "us",
            "value": 18.427428571428095
          },
          {
            "name": "MsgPack Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 52.00000001082117
          },
          {
            "name": "MsgPack Serialization Lodum nested",
            "unit": "us",
            "value": 27.651914285714593
          },
          {
            "name": "MsgPack Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 50.70000000273467
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.8496236496235926
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 3.2000000089738023
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.4142272142271828
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 6.000000013273166
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.4695460157264253
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 6.399999989525895
          },
          {
            "name": "MsgPack Deserialization Lodum simple",
            "unit": "us",
            "value": 4.45665324899393
          },
          {
            "name": "MsgPack Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 90.19999998827188
          },
          {
            "name": "MsgPack Deserialization Lodum complex",
            "unit": "us",
            "value": 12.36787534300095
          },
          {
            "name": "MsgPack Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 45.999999997548
          },
          {
            "name": "MsgPack Deserialization Lodum nested",
            "unit": "us",
            "value": 19.068592857142416
          },
          {
            "name": "MsgPack Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 38.200000005872425
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.49205014285709986
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.700000010236181
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.02140742857143
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 7.199999998874773
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.2181346813469736
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 7.799999991675577
          },
          {
            "name": "CBOR Serialization Lodum simple",
            "unit": "us",
            "value": 9.846499971999558
          },
          {
            "name": "CBOR Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 83.7000000046828
          },
          {
            "name": "CBOR Serialization Lodum complex",
            "unit": "us",
            "value": 23.473085714286412
          },
          {
            "name": "CBOR Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 63.300000022081804
          },
          {
            "name": "CBOR Serialization Lodum nested",
            "unit": "us",
            "value": 34.95838571428424
          },
          {
            "name": "CBOR Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 58.8000000050215
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 4.206187249497876
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 10.500000001911758
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 5.549744488246486
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 15.099999984613532
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 8.499969141993862
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 17.999999982976078
          },
          {
            "name": "CBOR Deserialization Lodum simple",
            "unit": "us",
            "value": 5.934168521863056
          },
          {
            "name": "CBOR Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 91.90000000103282
          },
          {
            "name": "CBOR Deserialization Lodum complex",
            "unit": "us",
            "value": 14.91439285714031
          },
          {
            "name": "CBOR Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 46.40000000222244
          },
          {
            "name": "CBOR Deserialization Lodum nested",
            "unit": "us",
            "value": 24.69525000000163
          },
          {
            "name": "CBOR Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 87.00000000771979
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 1.7232773830261716
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 6.000000013273166
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 2.9964548330618244
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 9.299999987888441
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 5.815501098466048
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 14.200000009623182
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 348.85431428570865
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1051.2000000062471
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 829.322121428567
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 873.2000000009066
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2060.0300642857082
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2126.5000000028067
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 426.5959250000056
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 690.5999999844425
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1129.878758333329
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1252.8999999972257
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1055.6275500000052
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1104.1999999861218
          },
          {
            "name": "TOML Serialization Lodum simple",
            "unit": "us",
            "value": 13.490008333344386
          },
          {
            "name": "TOML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 58.09999998973581
          },
          {
            "name": "TOML Serialization Lodum complex",
            "unit": "us",
            "value": 46.698892857140855
          },
          {
            "name": "TOML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 93.20000003754103
          },
          {
            "name": "TOML Serialization Lodum nested",
            "unit": "us",
            "value": 77.84745714285383
          },
          {
            "name": "TOML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 124.49999996988481
          },
          {
            "name": "TOML Deserialization Lodum simple",
            "unit": "us",
            "value": 22.660128571422838
          },
          {
            "name": "TOML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 82.80000002969246
          },
          {
            "name": "TOML Deserialization Lodum complex",
            "unit": "us",
            "value": 74.07870714285585
          },
          {
            "name": "TOML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 119.69999997063496
          },
          {
            "name": "TOML Deserialization Lodum nested",
            "unit": "us",
            "value": 153.96793571428344
          },
          {
            "name": "TOML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 193.50000002305023
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 6.8047687671933526
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 76.19999996677507
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 17.505992857138608
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 53.10000000235959
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 28.714464285716954
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 56.9000000041342
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.080598809170131
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 45.39999997632549
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 5.882911168625123
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 21.899999978813867
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.304838709677279
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 25.900000025558256
          }
        ]
      },
      {
        "commit": {
          "id": "ad3d67c384598b985567e65bffdae2abaf0bfe17",
          "message": "refactor: remove CI debug traces",
          "timestamp": "2026-04-12T14:17:45+03:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/ad3d67c384598b985567e65bffdae2abaf0bfe17"
        },
        "date": 1775992665000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 5.803291931056559
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 860.700000032466
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 17.895349999999357
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1029.0999999824635
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 27.678692857136866
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 749.199999972916
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.3622297749050494
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 97.60000000369473
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.938430857142391
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 39.499999957115506
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.6323603028591958
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 38.70000000461005
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 6.16675925925847
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 46.69999998441199
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 13.764380522656163
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 44.800000011946395
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 37.43380714286104
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 78.69999996046317
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 5.971721428575653
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1420.7000000396874
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 14.96299999999857
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1828.1000000115455
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 21.024250000006564
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1324.699999997847
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.425911666024567
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 280.9999999726642
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.847634490908832
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 59.09999998721105
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 9.32160345095429
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 82.20000000846994
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 15.669671428570707
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 102.79999997919731
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 37.405041666659145
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 82.09999998598505
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 114.41956428571335
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 178.19999999346692
          },
          {
            "name": "MsgPack Serialization Lodum simple",
            "unit": "us",
            "value": 6.2084686774941265
          },
          {
            "name": "MsgPack Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 77.2999999867352
          },
          {
            "name": "MsgPack Serialization Lodum complex",
            "unit": "us",
            "value": 17.313141666671566
          },
          {
            "name": "MsgPack Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 51.6999999717882
          },
          {
            "name": "MsgPack Serialization Lodum nested",
            "unit": "us",
            "value": 25.64691428571564
          },
          {
            "name": "MsgPack Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 43.80000001447115
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.7625887142856007
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 3.199999980552093
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.2451431777172337
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 5.499999986113835
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.209695956684519
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 5.29999999798747
          },
          {
            "name": "MsgPack Deserialization Lodum simple",
            "unit": "us",
            "value": 4.387145465755709
          },
          {
            "name": "MsgPack Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 77.69999996298793
          },
          {
            "name": "MsgPack Deserialization Lodum complex",
            "unit": "us",
            "value": 11.659941436251806
          },
          {
            "name": "MsgPack Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 45.80000000942164
          },
          {
            "name": "MsgPack Deserialization Lodum nested",
            "unit": "us",
            "value": 18.127514285717034
          },
          {
            "name": "MsgPack Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 39.899999990211654
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.4680014285713696
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.200000039920269
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 0.9757068056544085
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 6.5000000404324965
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.152137500000403
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 7.2999999929379555
          },
          {
            "name": "CBOR Serialization Lodum simple",
            "unit": "us",
            "value": 9.480884613345903
          },
          {
            "name": "CBOR Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 81.29999997663617
          },
          {
            "name": "CBOR Serialization Lodum complex",
            "unit": "us",
            "value": 21.726591666677564
          },
          {
            "name": "CBOR Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 58.500000022831955
          },
          {
            "name": "CBOR Serialization Lodum nested",
            "unit": "us",
            "value": 31.845357142864422
          },
          {
            "name": "CBOR Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 56.300000039755105
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 4.098353385981958
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 7.900000014160469
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 5.580567180566622
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 13.400000000274304
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 8.525478316327558
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 16.000000016447302
          },
          {
            "name": "CBOR Deserialization Lodum simple",
            "unit": "us",
            "value": 5.871563097147698
          },
          {
            "name": "CBOR Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 87.80000001706867
          },
          {
            "name": "CBOR Deserialization Lodum complex",
            "unit": "us",
            "value": 13.511250000002898
          },
          {
            "name": "CBOR Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 61.20000000464643
          },
          {
            "name": "CBOR Deserialization Lodum nested",
            "unit": "us",
            "value": 22.072442857141336
          },
          {
            "name": "CBOR Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 43.80000001447115
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 1.650994815916838
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 4.9999999873762135
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 4.5372472658187695
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 8.00000003664536
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 5.908110221731219
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 12.900000001536682
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 323.6272499999992
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1046.0000000307446
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 767.502158333329
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 801.8999999990228
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 1853.4799071428633
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1939.9999999905049
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 369.4451571428569
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 685.9000000076776
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1007.2925071428601
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1145.6999999950312
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 922.1568583333332
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1060.9000000272317
          },
          {
            "name": "TOML Serialization Lodum simple",
            "unit": "us",
            "value": 11.150654156203904
          },
          {
            "name": "TOML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 53.40000001297085
          },
          {
            "name": "TOML Serialization Lodum complex",
            "unit": "us",
            "value": 42.79355833333417
          },
          {
            "name": "TOML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 91.70000004132817
          },
          {
            "name": "TOML Serialization Lodum nested",
            "unit": "us",
            "value": 72.01902500000301
          },
          {
            "name": "TOML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 118.1999999744221
          },
          {
            "name": "TOML Deserialization Lodum simple",
            "unit": "us",
            "value": 19.965214285710836
          },
          {
            "name": "TOML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 77.30000004357862
          },
          {
            "name": "TOML Deserialization Lodum complex",
            "unit": "us",
            "value": 67.71605833333656
          },
          {
            "name": "TOML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 110.00000000649379
          },
          {
            "name": "TOML Deserialization Lodum nested",
            "unit": "us",
            "value": 137.5791571428603
          },
          {
            "name": "TOML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 188.90000001192675
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 6.760409896814339
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 81.19999995415128
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 17.36618571429663
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 48.800000001847366
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 27.201800000004337
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 67.99999999884676
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.024441964285007
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 39.29999996898914
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 5.718192100225527
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 20.000000006348273
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.15093003720061
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 26.39999996745246
          }
        ]
      },
      {
        "commit": {
          "id": "e40d57f35b5fc6be67a5302714851cb9e512b733",
          "message": "fix(benchmarks): implement version-aware streaming compatibility shim",
          "timestamp": "2026-04-12T14:25:39+03:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/e40d57f35b5fc6be67a5302714851cb9e512b733"
        },
        "date": 1775993139000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 6.2904193647864135
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 927.799999999479
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 20.499421428573733
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1178.3999999579464
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 32.062099999999795
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 756.2999999777276
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.472386800987097
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 97.29999999308347
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.198058591134829
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 44.30000001320877
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.754144331547581
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 37.800000029619696
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.586769743543024
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 68.80000000819564
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 16.198458333325522
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 55.69999996168917
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 45.7400333333311
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 86.09999997588602
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.118741666673107
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1515.6000000047243
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 16.620985714289255
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 2002.800000013849
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 22.79819285714016
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1442.1999999854052
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.549540895921275
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 259.4999999701031
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.5819836793467643
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 85.69999999963329
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 8.7030871309106
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 71.600000012495
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 18.50668571428368
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 104.80000003099121
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 41.91689285713908
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 89.29999995643811
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 138.4618214285719
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 187.10000000510263
          },
          {
            "name": "MsgPack Serialization Lodum simple",
            "unit": "us",
            "value": 6.590057929828465
          },
          {
            "name": "MsgPack Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 69.49999999505962
          },
          {
            "name": "MsgPack Serialization Lodum complex",
            "unit": "us",
            "value": 19.2072571428566
          },
          {
            "name": "MsgPack Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 92.19999998322237
          },
          {
            "name": "MsgPack Serialization Lodum nested",
            "unit": "us",
            "value": 28.533907142856055
          },
          {
            "name": "MsgPack Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 52.299999993010715
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.8637995137997101
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 3.4000000255218765
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.4151848571430037
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 6.499999983589078
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.440609179116215
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 6.399999961104186
          },
          {
            "name": "MsgPack Deserialization Lodum simple",
            "unit": "us",
            "value": 4.561613484575986
          },
          {
            "name": "MsgPack Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 76.800000044841
          },
          {
            "name": "MsgPack Deserialization Lodum complex",
            "unit": "us",
            "value": 13.565328571433254
          },
          {
            "name": "MsgPack Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 46.00000005439142
          },
          {
            "name": "MsgPack Deserialization Lodum nested",
            "unit": "us",
            "value": 19.53489285714178
          },
          {
            "name": "MsgPack Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 42.30000001825829
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.498363999999943
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 2.19999998307685
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.0280068571429573
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 6.600000006073969
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.2568295632829933
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 7.700000026034104
          },
          {
            "name": "CBOR Serialization Lodum simple",
            "unit": "us",
            "value": 10.034771428576862
          },
          {
            "name": "CBOR Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 80.09999999103457
          },
          {
            "name": "CBOR Serialization Lodum complex",
            "unit": "us",
            "value": 24.051721428573305
          },
          {
            "name": "CBOR Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 60.29999997281266
          },
          {
            "name": "CBOR Serialization Lodum nested",
            "unit": "us",
            "value": 36.16622142857295
          },
          {
            "name": "CBOR Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 58.99999996472616
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 4.338690165469232
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 9.299999987888441
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 6.038894827113262
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 16.70000000331129
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 8.527497204072862
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 17.70000000078653
          },
          {
            "name": "CBOR Deserialization Lodum simple",
            "unit": "us",
            "value": 6.035902378768719
          },
          {
            "name": "CBOR Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 94.30000000065775
          },
          {
            "name": "CBOR Deserialization Lodum complex",
            "unit": "us",
            "value": 15.377271428568358
          },
          {
            "name": "CBOR Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 51.29999999553547
          },
          {
            "name": "CBOR Deserialization Lodum nested",
            "unit": "us",
            "value": 23.23635714285745
          },
          {
            "name": "CBOR Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 49.40000002306988
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 1.7641535714283967
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 5.6999999742402
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 3.0478123352662103
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 10.799999984101305
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 5.913529303523388
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 13.400000000274304
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 382.39840714285833
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1216.1000000219246
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 906.0586071428572
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 963.5999999773048
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2550.080735714297
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2503.9000000219858
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 487.34580714283635
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 822.799999923518
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1236.4888571428553
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1296.2000000698026
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1149.9606999999921
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1228.9000000009764
          },
          {
            "name": "TOML Serialization Lodum simple",
            "unit": "us",
            "value": 12.589578571448458
          },
          {
            "name": "TOML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 58.70000006780174
          },
          {
            "name": "TOML Serialization Lodum complex",
            "unit": "us",
            "value": 47.03145714286653
          },
          {
            "name": "TOML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 97.10000006180053
          },
          {
            "name": "TOML Serialization Lodum nested",
            "unit": "us",
            "value": 79.99965000001501
          },
          {
            "name": "TOML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 126.39999999919382
          },
          {
            "name": "TOML Deserialization Lodum simple",
            "unit": "us",
            "value": 22.38608571427189
          },
          {
            "name": "TOML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 91.60000001884328
          },
          {
            "name": "TOML Deserialization Lodum complex",
            "unit": "us",
            "value": 74.13888571427866
          },
          {
            "name": "TOML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 130.09999997848354
          },
          {
            "name": "TOML Deserialization Lodum nested",
            "unit": "us",
            "value": 161.0515785714272
          },
          {
            "name": "TOML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 189.39999995382095
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 7.082654232761249
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 100.20000001986773
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 18.100600000000863
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 50.999999984924216
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 31.223478571421634
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 58.500000022831955
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.257275295777438
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 42.200000052616815
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.090357695288287
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 27.199999976801337
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.489310974663772
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 34.49999996973929
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
    "19d795ee9cc3a97db38896a1186aca5e1402d17a",
    "41b1889f62dc4a7b9b4d77a3fcefa0e77a7bcdd8",
    "7045e5c6f7e471e9eb08c4c575c53a723efb5d62",
    "244850c47f45f8f142eedceb4b8dd24a668d7b24",
    "b9ee729ac3438f64f376eb8920b0eb2e8a4fbeee",
    "f228e12d93aebd785c8270aa71caa209676fd8a6",
    "128c1906c4bcac0cd635310926d61d535a4e7960",
    "ad3d67c384598b985567e65bffdae2abaf0bfe17",
    "e40d57f35b5fc6be67a5302714851cb9e512b733"
  ],
  "tags": {
    "9265587501b6597cd995730e37fc95f64ddca79f": "v0.1.0",
    "f20be747e4c40c1bd1389a09954242a01353a5b6": "v0.2.0",
    "159df1cc05981de0d3f091cde9bfd4fc076d5b9e": "v0.3.0"
  },
  "lastUpdate": 1776006959110
};