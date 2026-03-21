window.BENCHMARK_DATA = {
  "entries": {
    "Lodum Performance Index - Pyodide": [
      {
        "commit": {
          "id": "0af5cf12a9c959ae8b52b9d5c5086dac42a825dc",
          "message": "fix: point dashboard to production data.js",
          "timestamp": "2026-03-21T15:16:12+02:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/0af5cf12a9c959ae8b52b9d5c5086dac42a825dc"
        },
        "date": 1774099489673,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 11.306176384615481
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 3087.2449999996834
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 38.130951392857284
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 2255.2010000005394
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 52.451534999999915
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1409.6079999994515
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 2.7200740544094417
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 2567.7960000010103
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 3.8193360852487523
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 1438.8019999991286
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 9.17810464285708
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 44.47299999910115
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 12.864121933333253
          },
          {
            "name": "JSON Serialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 78.08600000025478
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 28.972160214285584
          },
          {
            "name": "JSON Serialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 77.1950000011401
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 72.69919007142863
          },
          {
            "name": "JSON Serialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 129.39299999992215
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 15.458533333333335
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 4054.5610000002343
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 34.998035928571284
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 4589.723000000489
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 64.15201473333347
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 3306.7610000010463
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 2.8546245390974136
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple (Cold Start)",
            "unit": "us",
            "value": 3973.3099999992305
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 4.771676458333503
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex (Cold Start)",
            "unit": "us",
            "value": 1961.3820000010662
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 11.66508932497793
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested (Cold Start)",
            "unit": "us",
            "value": 35.33599999983039
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 33.70623492857166
          },
          {
            "name": "JSON Deserialization Marshmallow simple (Cold Start)",
            "unit": "us",
            "value": 120.27500000044711
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 78.5786300357144
          },
          {
            "name": "JSON Deserialization Marshmallow complex (Cold Start)",
            "unit": "us",
            "value": 185.46800000152075
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 241.3771781785718
          },
          {
            "name": "JSON Deserialization Marshmallow nested (Cold Start)",
            "unit": "us",
            "value": 317.1239999986142
          },
          {
            "name": "MsgPack Serialization Lodum simple",
            "unit": "us",
            "value": 11.870657269230541
          },
          {
            "name": "MsgPack Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 212.878000002803
          },
          {
            "name": "MsgPack Serialization Lodum complex",
            "unit": "us",
            "value": 37.3227621666666
          },
          {
            "name": "MsgPack Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 84.89900000085981
          },
          {
            "name": "MsgPack Serialization Lodum nested",
            "unit": "us",
            "value": 50.274626928571465
          },
          {
            "name": "MsgPack Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 82.23399999707226
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 1.1702532231733127
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 12.48299999900837
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 2.086990913698186
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 13.987000002657624
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 3.781302565458857
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 12.904000001867644
          },
          {
            "name": "MsgPack Deserialization Lodum simple",
            "unit": "us",
            "value": 12.006430428570779
          },
          {
            "name": "MsgPack Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 706.2220000051411
          },
          {
            "name": "MsgPack Deserialization Lodum complex",
            "unit": "us",
            "value": 28.935510892857256
          },
          {
            "name": "MsgPack Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 76.61400000102958
          },
          {
            "name": "MsgPack Deserialization Lodum nested",
            "unit": "us",
            "value": 56.940589800000176
          },
          {
            "name": "MsgPack Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 97.07200000264038
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 1.0649501485281745
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple (Cold Start)",
            "unit": "us",
            "value": 10.379000002558314
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 2.3906113791263985
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex (Cold Start)",
            "unit": "us",
            "value": 14.828000004740716
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 5.46567112954508
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested (Cold Start)",
            "unit": "us",
            "value": 16.04999999926804
          },
          {
            "name": "CBOR Serialization Lodum simple",
            "unit": "us",
            "value": 39.04868767857193
          },
          {
            "name": "CBOR Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 128.19999999891252
          },
          {
            "name": "CBOR Serialization Lodum complex",
            "unit": "us",
            "value": 97.04185223333326
          },
          {
            "name": "CBOR Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 165.58000000088668
          },
          {
            "name": "CBOR Serialization Lodum nested",
            "unit": "us",
            "value": 180.56918343333285
          },
          {
            "name": "CBOR Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 225.11100000599527
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 24.794613100000145
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 46.47699999793531
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 53.28414878571408
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 83.73700000419149
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 123.1717295333328
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 152.08499999630476
          },
          {
            "name": "CBOR Deserialization Lodum simple",
            "unit": "us",
            "value": 36.509433464285735
          },
          {
            "name": "CBOR Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 238.19599999796992
          },
          {
            "name": "CBOR Deserialization Lodum complex",
            "unit": "us",
            "value": 75.93183758333429
          },
          {
            "name": "CBOR Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 215.77399999728186
          },
          {
            "name": "CBOR Deserialization Lodum nested",
            "unit": "us",
            "value": 150.26852016666604
          },
          {
            "name": "CBOR Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 186.24799999855668
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 19.01180053333273
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple (Cold Start)",
            "unit": "us",
            "value": 41.94899999276913
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 39.74905885714059
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex (Cold Start)",
            "unit": "us",
            "value": 65.3219999975363
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 85.3202460714298
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested (Cold Start)",
            "unit": "us",
            "value": 119.253000008257
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 595.5278446666663
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1224.161999999751
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 1390.4972517999995
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1505.9689999930015
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 3433.9182107666707
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 3494.361000008439
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 679.7665014999978
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1350.7580000009511
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1795.5617596666636
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1961.4320000016505
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1666.2214637333307
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1822.1010000161186
          },
          {
            "name": "TOML Serialization Lodum simple",
            "unit": "us",
            "value": 24.808098799995076
          },
          {
            "name": "TOML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 78.93800000147166
          },
          {
            "name": "TOML Serialization Lodum complex",
            "unit": "us",
            "value": 90.13779136666547
          },
          {
            "name": "TOML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 146.2639999658677
          },
          {
            "name": "TOML Serialization Lodum nested",
            "unit": "us",
            "value": 148.4037669230728
          },
          {
            "name": "TOML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 193.4919999939666
          },
          {
            "name": "TOML Deserialization Lodum simple",
            "unit": "us",
            "value": 42.66178570000155
          },
          {
            "name": "TOML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 141.20500003400593
          },
          {
            "name": "TOML Deserialization Lodum complex",
            "unit": "us",
            "value": 115.71763657142397
          },
          {
            "name": "TOML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 271.29799997283044
          },
          {
            "name": "TOML Deserialization Lodum nested",
            "unit": "us",
            "value": 235.71582896666618
          },
          {
            "name": "TOML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 313.88700000434255
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 15.68232438461118
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 161.93300001532407
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 37.8274200666605
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 94.41700001389108
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 57.48151496666954
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 99.57699995766234
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 11.842099642856445
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 1170.5519999622993
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 13.805436892860305
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 194.84500000999105
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 22.482870866665888
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 52.960000004986796
          }
        ]
      }
    ],
    "Lodum Performance Index - ubuntu-latest": [
      {
        "commit": {
          "id": "0af5cf12a9c959ae8b52b9d5c5086dac42a825dc",
          "message": "fix: point dashboard to production data.js",
          "timestamp": "2026-03-21T15:16:12+02:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/0af5cf12a9c959ae8b52b9d5c5086dac42a825dc"
        },
        "date": 1774099489673,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 6.387901652895626
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 909.7700000211262
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 19.788863749994334
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 941.9699999853037
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 29.600736071431907
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 681.5429999278422
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.423879861111664
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.9072649055562607
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.5567207111111228
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.2870557833333685
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 15.705288399999873
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 42.84389975555657
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 7.673202642852824
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1540.609000016957
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 18.020676499996096
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 2056.9739999700687
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 30.226235928580536
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1396.038000052613
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.469039444443412
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.3911850444443576
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 6.360317577780192
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 17.80687678888968
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 40.72305930000044
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 127.04332092777398
          },
          {
            "name": "MsgPack Serialization Lodum simple",
            "unit": "us",
            "value": 6.329394532650102
          },
          {
            "name": "MsgPack Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 51.66599999029131
          },
          {
            "name": "MsgPack Serialization Lodum complex",
            "unit": "us",
            "value": 18.909437285701966
          },
          {
            "name": "MsgPack Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 53.82100005135726
          },
          {
            "name": "MsgPack Serialization Lodum nested",
            "unit": "us",
            "value": 26.93753378572897
          },
          {
            "name": "MsgPack Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 54.7120000646828
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.711815029411323
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.163070329413074
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 1.9935557235300356
          },
          {
            "name": "MsgPack Deserialization Lodum simple",
            "unit": "us",
            "value": 6.141095313869163
          },
          {
            "name": "MsgPack Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 53.46899990854581
          },
          {
            "name": "MsgPack Deserialization Lodum complex",
            "unit": "us",
            "value": 14.893284583318215
          },
          {
            "name": "MsgPack Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 50.9249999822714
          },
          {
            "name": "MsgPack Deserialization Lodum nested",
            "unit": "us",
            "value": 27.118677999989618
          },
          {
            "name": "MsgPack Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 56.62600005962304
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.48290518823522427
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.0041882000007178
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.1774501764719605
          },
          {
            "name": "CBOR Serialization Lodum simple",
            "unit": "us",
            "value": 10.031813416298085
          },
          {
            "name": "CBOR Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 58.840000065174536
          },
          {
            "name": "CBOR Serialization Lodum complex",
            "unit": "us",
            "value": 24.099296000006884
          },
          {
            "name": "CBOR Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 80.88099991709896
          },
          {
            "name": "CBOR Serialization Lodum nested",
            "unit": "us",
            "value": 34.30212491665922
          },
          {
            "name": "CBOR Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 67.47599991285824
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 4.186143758823679
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 5.562398770588489
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 8.424710111763373
          },
          {
            "name": "CBOR Deserialization Lodum simple",
            "unit": "us",
            "value": 7.74675545535006
          },
          {
            "name": "CBOR Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 48.08999995020713
          },
          {
            "name": "CBOR Deserialization Lodum complex",
            "unit": "us",
            "value": 17.247061285721493
          },
          {
            "name": "CBOR Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 55.2129999960016
          },
          {
            "name": "CBOR Deserialization Lodum nested",
            "unit": "us",
            "value": 30.51469642858657
          },
          {
            "name": "CBOR Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 64.85100004738342
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 1.6832919882363024
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 2.4755538647070807
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 4.27499937058893
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 371.4959819285712
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 816.3549999835595
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 872.0320281666526
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1009.8370000832801
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2154.2444757857065
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2268.818999937139
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 444.8453959166632
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 716.8690000298739
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1176.2843854285572
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1299.5870000622745
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1115.4660813571452
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1213.596999946276
          },
          {
            "name": "TOML Serialization Lodum simple",
            "unit": "us",
            "value": 11.815288214279462
          },
          {
            "name": "TOML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 59.361000012359
          },
          {
            "name": "TOML Serialization Lodum complex",
            "unit": "us",
            "value": 45.105605250000735
          },
          {
            "name": "TOML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 125.88499998855696
          },
          {
            "name": "TOML Serialization Lodum nested",
            "unit": "us",
            "value": 75.97620450000402
          },
          {
            "name": "TOML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 134.20100003713742
          },
          {
            "name": "TOML Deserialization Lodum simple",
            "unit": "us",
            "value": 24.51252314286226
          },
          {
            "name": "TOML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 89.51799998158094
          },
          {
            "name": "TOML Deserialization Lodum complex",
            "unit": "us",
            "value": 75.46036691667268
          },
          {
            "name": "TOML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 129.05100004445558
          },
          {
            "name": "TOML Deserialization Lodum nested",
            "unit": "us",
            "value": 165.07559116666926
          },
          {
            "name": "TOML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 215.96400006274052
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 6.768968451559268
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 58.0580000359987
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 17.96933535714678
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 54.250999937721645
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 27.753806928566455
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 60.61300007331738
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.475323678828861
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 50.50499999015301
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 6.2484761575560865
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 23.95500007423834
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.937678732351884
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 31.669999998484855
          },
          {
            "name": "Lodum Standard (loads) Time",
            "unit": "s",
            "value": 24.83941164199996
          },
          {
            "name": "Lodum Standard (loads) Memory",
            "unit": "MB",
            "value": 453.7295587539673
          },
          {
            "name": "Lodum Streaming (load_stream) Time",
            "unit": "s",
            "value": 24.227764585
          },
          {
            "name": "Lodum Streaming (load_stream) Memory",
            "unit": "MB",
            "value": 206.50471858978273
          },
          {
            "name": "Pydantic v2 (validate_json) Time",
            "unit": "s",
            "value": 3.5474546651999845
          },
          {
            "name": "Pydantic v2 (validate_json) Memory",
            "unit": "MB",
            "value": 358.4690990447998
          }
        ]
      }
    ],
    "Lodum Performance Index - windows-latest": [
      {
        "commit": {
          "id": "0af5cf12a9c959ae8b52b9d5c5086dac42a825dc",
          "message": "fix: point dashboard to production data.js",
          "timestamp": "2026-03-21T15:16:12+02:00",
          "author": {
            "name": "Michael R. Bernstein",
            "email": "zopemaven@gmail.com"
          },
          "url": "https://github.com/webmaven/lodum/commit/0af5cf12a9c959ae8b52b9d5c5086dac42a825dc"
        },
        "date": 1774099489673,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "JSON Serialization Lodum simple",
            "unit": "us",
            "value": 5.831560344336046
          },
          {
            "name": "JSON Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1445.399999994379
          },
          {
            "name": "JSON Serialization Lodum complex",
            "unit": "us",
            "value": 19.194407142856157
          },
          {
            "name": "JSON Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 964.5000000091386
          },
          {
            "name": "JSON Serialization Lodum nested",
            "unit": "us",
            "value": 29.369971428573244
          },
          {
            "name": "JSON Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 634.5999999837204
          },
          {
            "name": "JSON Serialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.423879861111664
          },
          {
            "name": "JSON Serialization Pydantic (v2) complex",
            "unit": "us",
            "value": 1.9072649055562607
          },
          {
            "name": "JSON Serialization Pydantic (v2) nested",
            "unit": "us",
            "value": 3.5567207111111228
          },
          {
            "name": "JSON Serialization Marshmallow simple",
            "unit": "us",
            "value": 7.2870557833333685
          },
          {
            "name": "JSON Serialization Marshmallow complex",
            "unit": "us",
            "value": 15.705288399999873
          },
          {
            "name": "JSON Serialization Marshmallow nested",
            "unit": "us",
            "value": 42.84389975555657
          },
          {
            "name": "JSON Deserialization Lodum simple",
            "unit": "us",
            "value": 6.957124999999564
          },
          {
            "name": "JSON Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 1539.9999999772263
          },
          {
            "name": "JSON Deserialization Lodum complex",
            "unit": "us",
            "value": 17.868035714284606
          },
          {
            "name": "JSON Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1847.9999999954089
          },
          {
            "name": "JSON Deserialization Lodum nested",
            "unit": "us",
            "value": 30.615457142855817
          },
          {
            "name": "JSON Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1395.40000000693
          },
          {
            "name": "JSON Deserialization Pydantic (v2) simple",
            "unit": "us",
            "value": 1.469039444443412
          },
          {
            "name": "JSON Deserialization Pydantic (v2) complex",
            "unit": "us",
            "value": 2.3911850444443576
          },
          {
            "name": "JSON Deserialization Pydantic (v2) nested",
            "unit": "us",
            "value": 6.360317577780192
          },
          {
            "name": "JSON Deserialization Marshmallow simple",
            "unit": "us",
            "value": 17.80687678888968
          },
          {
            "name": "JSON Deserialization Marshmallow complex",
            "unit": "us",
            "value": 40.72305930000044
          },
          {
            "name": "JSON Deserialization Marshmallow nested",
            "unit": "us",
            "value": 127.04332092777398
          },
          {
            "name": "MsgPack Serialization Lodum simple",
            "unit": "us",
            "value": 6.200426276095639
          },
          {
            "name": "MsgPack Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 53.80000001764529
          },
          {
            "name": "MsgPack Serialization Lodum complex",
            "unit": "us",
            "value": 18.885057142855185
          },
          {
            "name": "MsgPack Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 52.800000020170046
          },
          {
            "name": "MsgPack Serialization Lodum nested",
            "unit": "us",
            "value": 27.797471428570475
          },
          {
            "name": "MsgPack Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 56.300000011333395
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.711815029411323
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.163070329413074
          },
          {
            "name": "MsgPack Serialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 1.9935557235300356
          },
          {
            "name": "MsgPack Deserialization Lodum simple",
            "unit": "us",
            "value": 5.4103503767098235
          },
          {
            "name": "MsgPack Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 55.400000007921335
          },
          {
            "name": "MsgPack Deserialization Lodum complex",
            "unit": "us",
            "value": 15.032514285717216
          },
          {
            "name": "MsgPack Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 50.90000001928274
          },
          {
            "name": "MsgPack Deserialization Lodum nested",
            "unit": "us",
            "value": 26.54425714285529
          },
          {
            "name": "MsgPack Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 54.500000004509275
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) simple",
            "unit": "us",
            "value": 0.48290518823522427
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) complex",
            "unit": "us",
            "value": 1.0041882000007178
          },
          {
            "name": "MsgPack Deserialization Native msgpack (dict) nested",
            "unit": "us",
            "value": 2.1774501764719605
          },
          {
            "name": "CBOR Serialization Lodum simple",
            "unit": "us",
            "value": 9.859914144262437
          },
          {
            "name": "CBOR Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 53.50000000703403
          },
          {
            "name": "CBOR Serialization Lodum complex",
            "unit": "us",
            "value": 24.165816666669098
          },
          {
            "name": "CBOR Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 73.30000002525594
          },
          {
            "name": "CBOR Serialization Lodum nested",
            "unit": "us",
            "value": 34.5466428571472
          },
          {
            "name": "CBOR Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 69.89999999973406
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 4.186143758823679
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 5.562398770588489
          },
          {
            "name": "CBOR Serialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 8.424710111763373
          },
          {
            "name": "CBOR Deserialization Lodum simple",
            "unit": "us",
            "value": 6.79435623244754
          },
          {
            "name": "CBOR Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 62.399999990248034
          },
          {
            "name": "CBOR Deserialization Lodum complex",
            "unit": "us",
            "value": 16.585757142859084
          },
          {
            "name": "CBOR Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 52.50000000955879
          },
          {
            "name": "CBOR Deserialization Lodum nested",
            "unit": "us",
            "value": 29.243850000002322
          },
          {
            "name": "CBOR Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 64.6000000017466
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) simple",
            "unit": "us",
            "value": 1.6832919882363024
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) complex",
            "unit": "us",
            "value": 2.4755538647070807
          },
          {
            "name": "CBOR Deserialization Native cbor2 (dict) nested",
            "unit": "us",
            "value": 4.27499937058893
          },
          {
            "name": "YAML Serialization Lodum simple",
            "unit": "us",
            "value": 348.536241666667
          },
          {
            "name": "YAML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 971.2000000092758
          },
          {
            "name": "YAML Serialization Lodum complex",
            "unit": "us",
            "value": 823.802142857143
          },
          {
            "name": "YAML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 921.0000000052787
          },
          {
            "name": "YAML Serialization Lodum nested",
            "unit": "us",
            "value": 2052.809007142859
          },
          {
            "name": "YAML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 2184.9000000031538
          },
          {
            "name": "YAML Deserialization Lodum simple",
            "unit": "us",
            "value": 434.69433571429556
          },
          {
            "name": "YAML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 689.299999976356
          },
          {
            "name": "YAML Deserialization Lodum complex",
            "unit": "us",
            "value": 1154.321799999991
          },
          {
            "name": "YAML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 1363.0999999918458
          },
          {
            "name": "YAML Deserialization Lodum nested",
            "unit": "us",
            "value": 1083.3448142857135
          },
          {
            "name": "YAML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 1175.2000000342377
          },
          {
            "name": "TOML Serialization Lodum simple",
            "unit": "us",
            "value": 12.37980000000031
          },
          {
            "name": "TOML Serialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 63.00000001147055
          },
          {
            "name": "TOML Serialization Lodum complex",
            "unit": "us",
            "value": 47.16235000000305
          },
          {
            "name": "TOML Serialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 102.59999999107094
          },
          {
            "name": "TOML Serialization Lodum nested",
            "unit": "us",
            "value": 77.8891357142868
          },
          {
            "name": "TOML Serialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 122.79999998554558
          },
          {
            "name": "TOML Deserialization Lodum simple",
            "unit": "us",
            "value": 24.207185714276743
          },
          {
            "name": "TOML Deserialization Lodum simple (Cold Start)",
            "unit": "us",
            "value": 88.79999995770049
          },
          {
            "name": "TOML Deserialization Lodum complex",
            "unit": "us",
            "value": 75.17384285713595
          },
          {
            "name": "TOML Deserialization Lodum complex (Cold Start)",
            "unit": "us",
            "value": 146.90000000427972
          },
          {
            "name": "TOML Deserialization Lodum nested",
            "unit": "us",
            "value": 165.5047142857151
          },
          {
            "name": "TOML Deserialization Lodum nested (Cold Start)",
            "unit": "us",
            "value": 218.30000002864836
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple",
            "unit": "us",
            "value": 6.720013012104859
          },
          {
            "name": "Pickle Serialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 59.60000004279209
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex",
            "unit": "us",
            "value": 17.67515714285293
          },
          {
            "name": "Pickle Serialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 71.10000001375738
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested",
            "unit": "us",
            "value": 28.02495833333296
          },
          {
            "name": "Pickle Serialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 64.30000001955705
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple",
            "unit": "us",
            "value": 5.084856791424791
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) simple (Cold Start)",
            "unit": "us",
            "value": 50.19999997557534
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex",
            "unit": "us",
            "value": 5.856895984201701
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) complex (Cold Start)",
            "unit": "us",
            "value": 25.699999980588473
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested",
            "unit": "us",
            "value": 9.522685785267349
          },
          {
            "name": "Pickle Deserialization Lodum (Safe) nested (Cold Start)",
            "unit": "us",
            "value": 32.5999999972737
          },
          {
            "name": "Lodum Standard (loads) Time",
            "unit": "s",
            "value": 28.68988412
          },
          {
            "name": "Lodum Standard (loads) Memory",
            "unit": "MB",
            "value": 453.7295587539673
          },
          {
            "name": "Lodum Streaming (load_stream) Time",
            "unit": "s",
            "value": 28.577452600000015
          },
          {
            "name": "Lodum Streaming (load_stream) Memory",
            "unit": "MB",
            "value": 206.50529117584227
          },
          {
            "name": "Pydantic v2 (validate_json) Time",
            "unit": "s",
            "value": 4.300156740000011
          },
          {
            "name": "Pydantic v2 (validate_json) Memory",
            "unit": "MB",
            "value": 358.4690990447998
          }
        ]
      }
    ]
  },
  "history": [
    "983e4f37dc3c48bd05996ae5012da6f64fa5245c",
    "63537b62561f2719f4c7b43aa467e106dfc251b9",
    "65614e8e38a624c1c4a80b548cc65dd5e8534b39",
    "e1a4382ff9c3a02bf9c83537c2ac700103657c0f",
    "fefc9c6a28a7d90f9ed79d9d746eaec711574006",
    "df271b6c3e454e1145d06a8543b6443e98e94aac",
    "6682a13238bd62d41fafa9487cc1a9e1673d648e",
    "a459cd9b5ecd6ee48a1ed7cb99c1c0b283744054",
    "a6f604f8ff245c7e0cda9c68788db2a350ab90fa",
    "a6ac85bf6b1246b5fff07d1c4319b370e214ec24",
    "df4a08d031446c0bf0224dad28717575cf508f43",
    "e2d4baf6aef888b19a65b4f498d90a365965b89c",
    "0fc01fbceaee6a93a403292adfeec354ab2e3a7b",
    "5f16fb1cb245f195e6f1a22f5e9d2e589eb2f8bf",
    "aa95eaf18000203c41edf6b8804e84a386228302",
    "0749403ae45d4e56f7b9a1c66f2918658f5ad00a",
    "2e3b6d55898f0a5020f8fad18ad14c2d2d515c38",
    "28984e6495ddd075dddd32c624e49b9ad956781b",
    "7e2b9c4dd8be826c7a6de144033add7b812dcacf",
    "72d885b5f30d1480223316e361e7c87495b156f1",
    "41195b91bcacddf43cf664ec8d7c590328fc68c2",
    "487b42889b5c00d0aa27036264e5584c41351ffb",
    "05c4f3e9e559ef65c8ea501a85bd0b0eac8ad192",
    "635724af9409cb44f06f7812eafc4562bfa8c0ec",
    "a61290748dc47eaf0d85cdd763cadcf85a42f8ae",
    "a769be83e1c3f1960d62050aa9313d8df5deb5d4",
    "6a9376c9b43540a386016f1735c83a07cd11d0e5",
    "ff35b3ba597e0bee54b5cdc09d47c2e47342da5d",
    "6a549f998bd92047bb2c749218b26616ef07ae1b",
    "b10805d54ac8c67f9575f8dce132035626bb29ed",
    "059b22712d9a489ee27fd146ebe15d5276fa8103",
    "b54e2915b1a5b6eaf755481dbc93a93f9b043dd0",
    "b562068dbe451441aafee9db3147dcc68e28f12d",
    "5582fd18d1bfc5f75a16bf1a6a7ba816c4b77d57",
    "f76713f7a4e1229e16961f8a2eba1e45e9c43a08",
    "f46e7d4db285dbe1e44b0009075425633e4f0a12",
    "52214fe83a7e0c53aaada8111bf96bfc2b0c7854",
    "610b3052146517b4856a0efc3faa9fb72c4069ad",
    "ecfcda11ff0cbf96f853a265f20d009664294849",
    "af3ebf9509621be572d9f84e8786a379f3a503cb",
    "f96581bcc24f20c770ee02a9f9e052593bf1a408",
    "95674eddc3644093e9d5d6e86e038f2cbc78bddb",
    "763840f2c61f28473e99f0c852d3fffbfb1e7924",
    "f097573b0af7078f5c8a82be54fa96d7197a9d93",
    "ed5015f111b8947a04c0373e0fd01987cd4ad29b",
    "6845bb10849811edd816251b0c98e7fc9af6df09",
    "ea216c25ce5de9a6e610568ecc74a7e2319cf0b5",
    "b0fe74bd2577723c2b78e0e8224c47e65697d464",
    "321b696f8bc12affa486c7a548731186c9224c07",
    "b380cacadf99f901d279fab5519a1ef33f4a755e",
    "40b831a99f9eb0ff830ed517c0eb1d66267759b4",
    "85a06d5a3e167231e17f97e1835d66e896285c24",
    "4f0cebe3247e3dfe32bbd0bc2b67b1efd9a1e9ea",
    "2e43a87d03c16c13ae7c5a0c54db81833c3a3ae5",
    "c7ef196df035042d3222929ec7855b171e07237d",
    "cbb1f6c61c7b652c51b554fc757e7241e2fa735e",
    "2b26e70b3e6e8b7cd8cae846b3a01f9eff90e089",
    "bc00407e8d179a840c54ee09f35c00332fbdfcbe",
    "614f0ac21084fec4cf1ecfe62021c6b423b1773d",
    "601366309c3705b374ee89cb76878db8c9137bc3",
    "48099694f813f7f116a3cdebdd889a83413bd127",
    "29bdb0648e1580219eefb1d04276f4a9ea2fc2ee",
    "04672ca1b16321ca242bad9ee67a4e72a7eca27d",
    "4e29ae5784ecc7ef994180e794243d855ba59912",
    "b11f6b6e1467b960cfcf55c62d09be64dc3039a4",
    "946f8b2e2959e23c7a142ebbb03307967b9b94a2",
    "96aee2467e2a06e84267199efd18b572d2419db9",
    "cad4d83b073139eefae4db9b6f4f22f84ce0e754",
    "0352a82aa491bfbb7145388bdde437c6b934d671",
    "5a937fff21e119433b7ed0bbad9fcaa8a6bc73f9",
    "d41cfef8f1f36ea3e074cbd20474aed2fd1651d4",
    "120778486fbe8b9ca52c0913f86c5182c38e9e32",
    "5bf6e23a14d0edc91cbc78cc572175de513cbe69",
    "61aed327fa2b3228096dc75f1ae262a07d05c810",
    "91441221f40c33b21df4273acbf88516e6beb0e7",
    "3f393847a8fd2bec04a6bb51d5ab42b48332acd8",
    "db2a93937f6b44662679c52a8c05cbfe429817a2",
    "27bc57bdc439fbd510e516e075bf3869501f1d1c",
    "29a7c9a52c810c22dc5b33575b7ba7750a942b52",
    "3f0ee54024b6d4e0a56d8b5d659d77e9681c607d",
    "51c6d940707166550e51057eeab95db894c922ac",
    "bc787e39bddc80af2879cdcfea53ab08ff76fc2a",
    "7a447dce5567c9ce241f46a89b49fcbc17a45d51",
    "26be523d441147000bb844ad13953f9e73edc038",
    "b8e2943a04bd22f31a7ae3fd027d6682ef8e8a4a",
    "40a4447d1067605ec33a07fd35967f8a01e3dd31",
    "243d16fc6a5ee4ee68f7ab7802bb474e192c44c3",
    "9f34589409337a2dc8fc1643e7167c5bcbe2fd83",
    "877bb769daf825775185f62ad3b534572837b149",
    "79b226045cd536164f47171d07b8bf39133c9fbb",
    "52891c23c25415a3300cc80b85f2cb69cd7c8d8c",
    "ecc9b9d9b259be2d0a48796847315b6079c8c3f5",
    "0f40e070c2531c17bce46b7ca3d769689d0c9d85",
    "d994daa331308ffd5440d7243313101d22340c26",
    "aae4a83f2f33a2da47da47d8d1e743001a672858",
    "d25cc70f061cdad40d67625718ac9cc49b19b576",
    "0ca5129d2506f42396b97491e7211b02e338393c",
    "19fbc5c82f56b810aad021c0742cc9737b316217",
    "d2b7db24b1b9e12ee46664ca117c7cb1f95b1b60",
    "e413d0ac8b1ef2458afb1891388b9a4fea0ee878",
    "89cf3b0c77c068873a0ca42ad98966f22257fb38",
    "8d3f3f7b488bac10ceafa539856254ce1ac5748d",
    "5dffd9e4b221d32210abf2735f0245c9b5fc0114",
    "cbb1ebb0cca2ebc4232c1b0022488c904183e019",
    "3172e45e883636f972520d8b8fafedd6980cd240",
    "4f867d525ff87620bd61992e8eb2d7ad8503a7a0",
    "8956662a760db30d84a8ba3d69b2ffc13b7cd643",
    "f29b8be38396bcc8b8fb68d537d7636a4d1e4be3",
    "64c8acb821eed4db9d65e452f9780f87c1f2d5c7",
    "e6ac5582f5176eb52b2af0c3ac2bc0fb8151936b",
    "7be328cdcc687989062e3510ce172a7ccb12acc4",
    "2348d431294e60f96556c48563af509fbc8e0b25",
    "cdd87866bba30eeb38cf4eed6d7655ea7a4c701c",
    "d4f14d499618b1e486a7a6ab44545b7e3d03f89a",
    "130bb4d52858865df7cffd59422ad1c78245b3b2",
    "9ff5af6589f65d1acb6bcd51c4355d4a3b514991",
    "179bae15c54c75e6efa6c0ca737c95c9d6085c35",
    "5e5ff814dde5caeb5fdf59a4711a0b4ce4b3468b",
    "36f59a9efe4c0860ef9ad801640ca9dc3e09eff5",
    "d0201f5d90fea3003796392caa1dc9e329daa126",
    "6489354d104ecac2fb7b38392f9b19226fac7417",
    "adfc72bb72f2cfe53c13a72fa6bbec3c4aaca5ce",
    "e30fb34d6717e8a47ec9b0104c0546b940f5cc7c",
    "08f635e39795f72ceaddc9271edbc96841d67c60",
    "f969bc91171557242e216a0c8864fefb3c9544a1",
    "e461199e6133e7c57f687c7fcf3ee767885c6e7a",
    "6b8c8450cacf91fa09f83f8f702d1bc4bb816f50",
    "8dd820f77505b9ca8b3e9f757875e37cb30b55ff",
    "0fdb90d9cff63a9f2806f1de357bd9806ca18e51",
    "7d805eb1b570130cae214db79f8427110d3ff12f",
    "a82ae43401fdf83ac75dd49563bfeb6ad8c13c24",
    "2fb9b167262d05b0cbfd05c58c3d5c9f630cbf01",
    "d43c3f319aba43a0f291a76b0d992a88b089da08",
    "3c04bb78f8c798da7bb8c5e56e4514502dadbbdf",
    "ec96f49de7d9b227c6dd2e8971b48a7e7f1df2af",
    "552da4612920a986f8491c56c4465b42f9e62a16",
    "3bf69b8e4f3d14397350d5006f97e4925897ccab",
    "b0b89a5e5742243b21326e5da71c5514b1751588",
    "2f70bf862c8c8f10d48a38bd47a3f8e0e72bb15a",
    "0145794a18287ee7c2e7a332b837c50abee5bb93",
    "75ddb1724ae473cb78b3089688d2d9c0b527b27b",
    "94a393d6cab67a9517269bb07e6bfed59c2b0366",
    "00493d2f8a4812bcd69db3b000a872fdae637524",
    "29d9b396056c60f788bb802fa44bd8cd02ba9a6d",
    "d829ba1ebc5612b3c11dd5b7a9750169b4c23127",
    "14950ec3d079e9996baa4ca3fdaf62d3128d6140",
    "f18b55e63bcaa5f41f6636b2c8b7b221253e4660",
    "5a7f17a91ecc1c1164b6edaeb66438d574e1f702",
    "b441f76c73e8d250bbc94eb5512683698be7311f",
    "c7ff9084b61cb4b8d0e0236d9ddb041740a96c2b",
    "c52009d89d3c1b1b70b22dd755f3454617478d8a",
    "460c335a5802c912caacc10c1b3fae914db2edaa",
    "84280ed87b7133be133029d34832d41e4aed6298",
    "290c95fbe0906d26d10833340253738f4ce68aa5",
    "a3d1943ffabce5839741d8c9bbe71a90bd63fa36",
    "0107d60161a89b624009af8e9ba69aad22b20d83",
    "37811469fe079e208d81dc9d481a1cf33c555d67",
    "dbce7aaf0c81950942c1c4eaed977e7da53a7f07",
    "f52b75f9a99dd732ec01bc8572717188b54cf59a",
    "3779a29053054756a63277838b950b4cd0179d6f",
    "aff6ba8324b21d2eb16c9d7f98e35f060a87d69b",
    "aa7808de3f485bbf9ba92227f8d329fac61a0f13",
    "a42d5250f6863ece01782c053b30e2ef1c62e66f",
    "75efb4e755f123bf816e339cbf451cf886e18a03",
    "ec4836e8c6171daaca7c76106f5da524587d5fac",
    "38052157701e19dd5a160311d5cb75f01ee3bbde",
    "574f9faf9156d86eaeb4138534dd8675533cef11",
    "f2cf1cecd0821b19e0ba3a3d1f8282445f805f1f",
    "bb2989e50062d4f6377c1dab869d3ba127c2970e",
    "6f2966c3d52879fc2021042c7f2227f1ef0bc911",
    "ccf89e061bdf6e6da7db6eb6007fa42f7787fd5a",
    "e1c327b1fdc99b9c6137fd5babb9e377da020a76",
    "54a88147e18f34c0c933e3c52501fc5b69b7a565",
    "6734dd40f497337b651acc9f620874ebfdc93ce1",
    "04305f8a9a6bf9ef20af3a314852fccb51d36d0a",
    "b480d81c5ae0e0bea8f7b49d1c20b48880b0cb92",
    "40dacdc2a828d751746b073440acb5fce5615400",
    "f4f6c30d8da3db39e789381c0ecfe568a16404d0",
    "1f453f5232a52ddd2ea38a90a7e96853028dd2cb",
    "28eb9a4e6b16df9a1eb9562ba06a891036029366",
    "a579cb0baa92373efa02a74a1c40b58949e3a40f",
    "b47de278e5a7c5784395c0663740a7d0cee82e87",
    "9d44f3b5fe52f4099e7da756c3ddd270b09d6a52",
    "586f99644197f9ea7a9484b83fec746de4fc4404",
    "2ff20e0878eea77e8f9cdfa139555bf3b87a74a3",
    "43b31261148b66835399838292adad79c22c53b7",
    "6bad8a19a11d98a71a133330220636b034d5f5d1",
    "1095c1c97a035038740c1e6b253e0b00da109b3d",
    "8e2e0660e889b43b1599f9eb9b85bd8cd47707d8",
    "c85a5895cd293546ec60e0fe08bf0c47d8481026",
    "55aff735b1e17b25c32327a98a2dd0d77c9d85ef",
    "1d84abee12a229450212d038dedab1bb641cf24e",
    "0e226c9d9d71393b64de74ecad3f136e45a8da12",
    "a866be26c2c5e8ae205d61b7f107b35e45d0d5c2",
    "8cac51a5d81f72b72f8b20a92a5ebd4b77285043",
    "461a7ef1b7288657e7ebafcd483efeb1b1a6c4a1",
    "262e6a7a2a317bc5261f4265b32b6f6b8f0e0c4e",
    "4fb2e380a651eebd695328c078ea9d7dfee25a46",
    "66ffd868c1ddb9e5aa589e1370ab8a48e3fa8f9e",
    "bb9a4e2be88f7f20d6020d41b5792a029b512786",
    "461b8ceb714705bf1d1f5379cfa4ecf5a68e9eaf",
    "0be34f2ebc7c03e28df7e1e1cc403c0ccfb8d45f",
    "a30878f15d6c1428a180061b74f6df9a4a1cadd4",
    "404f563b6b7cc637c5e84730e0bc42b94a53dea5",
    "d466da7afd823b6e9e831174b1ed78a41df47df3",
    "a42824ff215ae348ef6dd86f14ca543b3ae39bf3",
    "66109d7a527f2b35842895dde056cb68d04a5505",
    "34a5aef3923f3edec1386c7298f05993301188ec",
    "9e9d337643d68f60826c42fa42d23318481585c4",
    "bb470c4116302b5ec625a19e2669d1fa269ac5c4",
    "9edcb5d09716f99678a81e69bbaf5f3c7c9cc174",
    "884082670edc46610d1169e96d23efbc52e80e25",
    "ea03925c661cf4a6ab46314e42cf1df8cc82e038",
    "2108602908d9cf27949b4a62abfb87bb668dab55",
    "e7c7c7f19020951c394ee5f5cf6b248c732de4ef",
    "bd51123d66aeab95822ebddba291fea12c574584",
    "65acb6cd122ec615b03a58ce44e61a82c16abec8",
    "7f4575720c4d1265f4aab1997edc533c4c95c9c2",
    "0c0962a51c79551d92bf0fa14f1982bc2683c7aa",
    "bd22e79ce219d94de2c1831c6be0c25e19d233f6",
    "56c8f6d3183de56dbe9db1562c1c3559932dfe3d",
    "50228466db6f6a51c3372cf72b80ccaddff20a10",
    "8c888a0175766da42d9c06d36340fdc033caa049",
    "85da114d1c107b9a8ecc350386a0aad2827d3076",
    "57a9b565306f9db71437958fd51dd09b550a4291",
    "d6aec2470f491701af4fdd249dd54c35b3b6d59d",
    "0cd0aa793868f2a7013a30265a4c1210bd80bd28",
    "58cce4b2b5886cbce57379f93410e369a2232a29",
    "edda151eb7cee3ca5b28c29515c8b96136c631d3",
    "9d7a85e57bd9479938c78feb4195dd03465419fb",
    "db674e4fa5ef34025ed05a78026c090c2cb51278",
    "8a850d3297e9122f2322f2c8e7dc483c411ee1ab",
    "f14f511527ea6064bba0ec7b1e3cf6b20c8ddfdb",
    "2c2056e9c3138229031325cf6c4a8b8a731a58c4",
    "04e2165b880c220cfcea6bdfbeedc645dc837163",
    "8dd9dec838378d19d7873a2620d9b25f33ea8a15",
    "abaf2def62425513da0b14ca22af0634ceef4774",
    "2298148126e2c80f4bd2920b22890a92e386da45",
    "ee934efd1b7bacaa42317eefed591a5492a0356c",
    "047ea4f3bfa85ff3d4629976f752451d20b7e393",
    "61bca8d148931e029fd08618c46d0b87c0140f00",
    "14d881031dc16279a35bf6404b448c8b4f6c2278",
    "128f7f97b5fe23ba0ee5e52c1bbf17c0ca60a799",
    "90a2f18b00af11032ec7abac35430b59f7c72998",
    "d9484f09f450fdb39259497c01086c39613b3698",
    "7afdc3779c8ef392b0d3b4d960e08b6825136ace",
    "3d916822c0464ef249978479e008e3e27d7ea3ff",
    "1c97f41c84c04a08190eaeb8ae8c6966cf774563",
    "63c2624a7aa9da50eef001dda19754b4e28bbee4",
    "c1101dfb594d290b1d261ee28d464ac5b72c7266",
    "a9112e21974a243cae5fbc5db729827338985e26",
    "16df70762bbe58cec6247d98c8d219344e911618",
    "35f0e055abcb7c97cbc106d25fee6045dfe63fa2",
    "e4232bae039a4273a44454df9aeb13b0853e16ef",
    "1ed92d22617ef5d41af0184a8e1d3156cf94c97b",
    "bf1ba0d9ceb38b8ccb87810b8b85b409c6e1252d",
    "5849b949ecbb9e47263604e37bdb465b06b77e8f",
    "5ab5b251abbd6b357c8340392de64d19f4cefd94",
    "64e2d201e60bde6430c5ef794b13817c68fed81c",
    "39afca9fe7e959299d25dd7a8d014279318c6160",
    "2670aa4a3dd5308224d7bbd225e20d17fb8b48f7",
    "635ff8af349cf7f5b8303eccb0e76d0823504526",
    "83939a87c38f0f2d05a9adae1a3b520c4df6dffe",
    "d8611906458cdcf462ec04773de0d263c272247f",
    "84114016d4c9551f2427180fd1ce0d572081acdd",
    "4155744f36ac9cdf258f4c892de0d9eb9242db01",
    "d0813ae177d574d5b58922852cf38bb519e45b7b",
    "f94c34409f226d084c057ce58cf501a4441d4cac",
    "913c04315f1b1711ed6c4d2efcf31d57713d5bfc",
    "8318a56e7235c1c57aeb33661a4f1b34d26644eb",
    "58b8f3f5fc7e2bd9a754576785177388ed03ca70",
    "75690c2b20fca43c01c1b9b2aae238d44ca047fb",
    "915de624bb825055d06b63bb5a2ecd1c03ee6c37",
    "2170bd5f5a76ff0990df8b36d28799633175e4c0",
    "66e3f432495e4d3745664bc782eaab783c6b7730",
    "109286d5810feb26feaa9d873b99b5a96442e0c6",
    "2cb2e937fa98d599d643370683a688e26c25d5ee",
    "501d658c626ce837313479bc25e907f459f43c69",
    "ccc2051381f26b70824c6678329b7b7bc6939096",
    "7b95cd65acd084021c92e33d7dd111bc82df2a33",
    "cae8716dc2b22ed1de1c57d9ec6387f5f2630083",
    "1366ceee628c737a5f4c8c35d643d516584b9886",
    "f92a0c38ea39dc1df26eb4cb41bd33adf8cc3dc9",
    "9dd0a415279c8cb67730279567ed713acd22c48e",
    "76d60f3ef7b817e447cbb78605984242a17e2f6a",
    "057fa78a91e7dcdb03443a7c8755869ac7a4253b",
    "7c89219ff9354cddc1e124e28c13d10467bc18bf",
    "3ca15bea54382e3d4cc5b5ae368853cc365bb708",
    "20d7432c3e834ae900285f5db3dd38e69f64e14f",
    "b5a5dd47310862b83664620620f33087c32ad1db",
    "bc57ec28101982111740b6e2b719fe7089645b81",
    "d96b8acd0e30a82fbc4498b7b72d3487d0a546e4",
    "ba6ce72db0417b2ba106e34dc2c1f40edf5d33cf",
    "c17cea98b67f076fd57ede7d4b1e34529b75bb80",
    "632d268710c16b4d78f7d8e18cecf6ce083937ca",
    "b63224f4dc8a2daa829ce6c6b5bda80607b7f7e0",
    "ab544361d9dd02562de2206d9f899e16ea8166cc",
    "c89e9cd079d6efc508f2ed735d007507be91f991",
    "db72b814a8ce3411273bb653d98502f26dce4f20",
    "b08600b5022495fa5da947ada97194219c8e5512",
    "d794a451ccb8221e306eb10686c01a7bcdf4f4a8",
    "ff2ed92d7ed8921f12bb55d11c847fb9c5ad8d0f",
    "3647336bd3ff43085f3116cd5a1e7cd112e6d914",
    "5ba2a3275600ba508011e6e95981e41f7211ad05",
    "b4f3ed6b753bf638ad8995efde633eb125c9a315",
    "ec980bcad756ec91f5e541329fdf4c4ea56de5ab",
    "82078d39a42df982fb6cbb8b3f5fbfd26c9cfa00",
    "b59667dadba35c542a7a36dd8ead1b964e480131",
    "a923666dc86d07566107cd5492ae8881943a2577",
    "6dfa3479dea24757c5465def7abe02ff902a8f9f",
    "d16357809dd7bef997f3e4aa8eec745662b616b7",
    "874f3449f68d490ead7393bddb5e322eb505660b",
    "7b2429d762f94d70ac2bf59f525ade3bba274629",
    "89bc98e41102e0672f5733c4a312a45e78d129ad",
    "b91e96c38981d94e286dab917f36450d5d812a56",
    "a3a633221a3dca511cb9434e4cd44985120c73f4",
    "7283706b711279550fe815ef1eb5d634372b22ba",
    "a1a35267e5fad122633abde6570518ed63a67ec5",
    "4b541d566eb113ef01ce1ad6bc5bff96e552eb2b",
    "aee49f295ace1a9c5112b7a3e353d322afff76d3",
    "921afda52fd9c301784b5f485e077c3240afd9d9",
    "132d893a1d4f9c1937737dc7d991b61fb8bd3e27",
    "0165aa6f6b3781d3d44d5e83df5b47afb08730e4",
    "066215cb3836b8cfdae29261e94ea4ce6dead027",
    "72479c0237819fe8b6854713b03cd0a764ca6b62",
    "9b75b7c56fede6f84b1009a9d475f57782ded3e6",
    "0ca8a597509d6ac1dd5b0418bd055101cffa29bc",
    "e7ffc29045ef18f63c2d897bb2e223dbb7536b2b",
    "aacc82c02ab31fc402dccd2b044b34e49ad1b00d",
    "82e6ad4b4bb2401986a13c7b42834514d29439c4",
    "e3c03e68456ccbae6623b7bbdd866deef5f7b1c0",
    "1c7e65126639882076b66ba1d5d991853784a247",
    "c8723bbd9e8a81a9eb110e6eeb858a5cbfe535fe",
    "444df63a24bae45242310f6f51e5846a0c3427e5",
    "9ad0f80daa5f590243779475cad570dd02c992ea",
    "7683332095471652a2516d9ed83490cd76633e73",
    "cb31df9bb88bf14e8227776beb62bf19e00bfad9",
    "bc3a46ccfd2ad476ffcf12410e3490a67ceab9e3",
    "20cfe9b99cff84162fdaddd50b785b6941850b92",
    "4fbbb5b769e9bf5f18765814ff5e7af1d097c593",
    "ab9c2a86c76cf93614de10245b0f3244c77c1c42",
    "f00c2769a8cbf3f2d16729d2d11fc5e132076612",
    "26657be30b0836d77935368e4dafc6d9a94f40d0",
    "ef8f576db1f37f90cfdc18c58ff5a136620c8adf",
    "355e1e1f0c28f5fb537bb4057cebb0e2de92b772",
    "6389368d3c2d7ff0c0e2c5fa616affb01913d80d",
    "53f79d758cc3dd00b1b06c59595cd79f1cc622d6",
    "687985e4908e34b26cd497a8048b00e47510809a",
    "4019171ce460b8cfcb64e1334d7b042b0d8c3109",
    "b5796357c2ab461f0fdd0553bf4e317f9bd2790a",
    "de02bd442a625475e2b305c27cbe1626d0e77af6",
    "3e7cda2d9b1c0bac4b866d84bdb920a861dea932",
    "115b4d27aeeb82f491afcac071f07d34955996c0",
    "be9bb42cb2c88a29ef4b432dbf280b31aaae9a96",
    "ae6917654d05437e251e59a8bb62ed3bea1a502c",
    "3b8dc983d5a2ce09e333feaedb68a31b016e9a50",
    "b185d1db410b072c9a563232855ac0f6e662b4c6",
    "a807cad0c54cbdc100e1fe0d7ec0ce64a82ac3a4",
    "105c01819354ecacf329591fac1d543528274657",
    "1a2b1874da620e4ea7194c209d7e5f28a9397bef",
    "c81d563051bb571e7f369a96a82e48bb3d2ecb76",
    "69beac7853f4c81f37fadfcd7b890316d4d05cfa",
    "548b42d5baa592d4a20866a5b6ed411d8168bcd3",
    "5b446a0edf6deaa826a2a477a404ca8d09a5db94",
    "bb6bb2a641f915ba958b4875b9c6d2428892fc4e",
    "27ef178d76b7b501d9d32fe0be9be07d59dd794e",
    "843f9f17a523cc37abaf2c2a72e653014ca8f61d",
    "8dc08811d92aa6751e539ecafca43462faf15f41",
    "5ceffefc8de26bb9189bf0ec749939b01f16ceaf",
    "d4ff6c6cba419be1376a075233ffa3f7ae644b9e",
    "09f2222dbb6815218ca8a517f9b94867fad2ed41",
    "e54a60c36ea532d9c86723eedd3c145fc4fe38ec",
    "1624e1b751f20222b12531d5d4dad2d3505ae522",
    "1d990f4083f1a8b58edb355f759a10da114355e4",
    "8f34e0b5ab02280b1951657616cbbc7b22810b95",
    "826abf4cf753e082c8d098e125b670cd1cddb75e",
    "9d45974b1d8b65cda113bb9ca66b2f01ac2b6610",
    "62fd0ad7e51bd1323ea7aa8540b0a03209c54c7f",
    "799375d920ae9b3c88303eb562f2dd404c02b7c8",
    "3e86574c3d24a3b637b900c26c42712e359b82c9",
    "9e62c68070bab5d8eed4cc7c0a84e6852dff1733",
    "d7f1a889dbeba35263ec7a5f38dc95de66e025aa",
    "8799cbba58194aeb00d96b44331dd310d8ea1259",
    "c0e769450093f9e6411ec47720296bfa5eaee1cd",
    "1393e302c48bce1735508f4e8ae1e46f8b56e48a",
    "58b32b6f82e45c3251b099b651f82c3a759d6d1c",
    "669cc1d3e1c2cb1c661e49b65c81febb35a72e59",
    "b6fa52f6fca59a4a91e7a119bd1616b67de15673",
    "04180f91e139b5d305458ac695cf54ff28f2b961",
    "bb1229961fb41deac97b808ae095d8bc32aa8fe3",
    "fcdc6f74bda3db7c3fde9401d190d9bca292684f",
    "a3872cb46810393d37c5363dae5bae912671eaec",
    "58eedcefcfe53695cc931d1c217b9992a0c292c7",
    "c7e086fb5549e6dfd17dd010ddb4de36849b4e5a",
    "c56748bce413273966219f4665d8d3c2c32cb067",
    "570bc02a344756effd3d0462db66a1e4ef757bcc",
    "2c3e74c4be7a17939aa5b23a42523aa6f63b2862",
    "41bb791ac6c0182f64f042f3795e58219a9cab33",
    "84410ec370dc61c18de8dd4db22e8fdf73f9d885",
    "b6fe2d3e317b26e870941434692f1ac8d05661db",
    "d28fa2918b92ea559c14fa4209b081be275bb89c",
    "d48e33056d3f770586370c41bf868f16e053b93b",
    "5710532e1e93ff4a7739f78f21defc9a47e80421",
    "398ee474d3d242373e933d2fe085137fa5462bda",
    "88fbc6e97b9b381d55d542c56bc2a816114878ca",
    "7096dfdd99e088c48d59aba8b019f529fbd99ed4",
    "ec1a540e6b6dd213d89c41954330e09ddcdbee54",
    "d46fd0e5842d9634a6d5f4715eadec8c3ab101a8",
    "1876701e051de9a969d82f6a4c4b76b2528e74a7",
    "1b2fdc3a4d8de3ce455e2029fea55a811a79b9ab",
    "1d000dac3092e779a76fbb50f54ed46229bb8c97",
    "319d3634fc0ce2a2eab644d721f8150a7c08500e",
    "5924834aea9eb042d2dc1fb3b457e3c66d1e8f1a",
    "13f6bd58f186a29e7e1f527091f9a0a004d75d36",
    "6932ae6cc71982120cb04747d0534d37cd53b8ce",
    "c8d0b40f7fb01347da1de1be1a01df0c9d8af8b1",
    "670d326cb945a696b87e2313e1aa655f8fc1e087",
    "b2849fa83c287b9c0fdf0c75d9862baca4996084",
    "553cb89fd6c2cba62516f46b6ff8704b5f334186",
    "5e354107f99592a64b24011512361378ec1d83fb",
    "daf82827335a4ddcd9d0450526ab51c4db9112ab",
    "90639787b771487e07c1e626503f65f531487f8e",
    "da1e5a18cbc94a0b56a0b9b4751fc5ff83af4707",
    "195ebe721ff4449c97eab81314488de7bca91e36",
    "98db675c9b6af9452ecb99ad49d2d0667bdc2d02",
    "90135ce21052fc8857e34cff08aceca73ee436bc",
    "b985bc80bf172604cd5b8e10daa6165b8ef5a120",
    "4c9765027760d5c63e632f867dc4bea981ea94df",
    "1b33ab980b687d0d41596a8060e209cb33c50021",
    "83c7e9bcd4641fc58729fe03151e325512b92f3d",
    "5fda50100b9575b585c42bcf55aa6abec5feaede",
    "c7d2c528c9c81c64ad0f5d100c07f6964bfb3303",
    "483567ac22342b754cfea8e5a7e36c21dfbd782b",
    "265de6e3351d80c0ad7dac7185d3151534d1538b",
    "2eb00f150e9544118617bcaed5f224f5819cf6a6",
    "cf2dcfd7699ca91de2fc38ce74f785e1285e9e38",
    "732c117e08dbaff32bf66559ab48b1a5197a518b",
    "20a79193f4b1c5f12e57bfa010233aec2df89f86",
    "bc54a670b720e2dc08c954552c1785b99a99a37c",
    "18775e2bcc9ce114bff90b216b157f68586450ca",
    "7926550570c87a06f027ebb03c4337c3367da0e0",
    "dcdbcc0f724fe7085b44c7d8bdc05ff9f5c38c74",
    "6e0737d0a92aace4d503e5b2dd0d0e9750a477a8",
    "44488953004d3ef9fe60dd4215dd696c791aabec",
    "832537c58c318e1b1bf0dbcba1740509b9b0fe4f",
    "8d66fd2ce1a55cb3fe279c5435c5f0e93fcb7786",
    "86b2e5405f123058ed5817d3a757dfa20153d6f5",
    "40a5874a83f0cdabbd63c7a9e776ef784a3c8cf2",
    "d83c18e02676e3e47cc2685b3079e12a7b17afb5",
    "1836b6703a06874158ec5534d3be917baae7dc44",
    "fcf4677c3b0cd5535ff87c21c91ef867cf0c49e0",
    "2fa2f957c6a0713014abd58665b5f37d804178fb",
    "0af5cf12a9c959ae8b52b9d5c5086dac42a825dc"
  ],
  "tags": {
    "270ad761cf4c376e9bf92cbbeb416e682924c0bc": "v0.1.0",
    "83f1a3ceaa5c33a1056395be8b306ae942cc8b04": "v0.2.0",
    "d7b2e4ae5d43498d7da51aae82fa8777a46bc28f": "v0.3.0"
  },
  "lastUpdate": 1774099489673
};