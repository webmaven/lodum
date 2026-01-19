import timeit
import json
import os
import sys

# Optional dependencies
try:
    import orjson
except ImportError:
    orjson = None

try:
    import msgpack
except ImportError:
    msgpack = None

try:
    import cbor2
except ImportError:
    cbor2 = None

try:
    import ruamel.yaml
    from ruamel.yaml import YAML
    yaml_obj = YAML(typ="safe")
except ImportError:
    ruamel.yaml = None

try:
    import tomli_w
    import tomli # for python < 3.11, but lodum handles it
except ImportError:
    tomli_w = None

import pickle
from typing import Any, Callable, Dict, List, Optional
from benchmarks.models import (
    LodumSimple, LodumComplex, LodumNested,
    PydanticSimple, PydanticComplex, PydanticNested,
    MarshmallowSimpleSchema, MarshmallowComplexSchema, MarshmallowNestedSchema
)
from lodum import json as lodum_json
from lodum import msgpack as lodum_msgpack
from lodum import cbor as lodum_cbor
from lodum import pickle as lodum_pickle
from lodum import yaml as lodum_yaml
from lodum import toml as lodum_toml

# Data Preparation
simple_data = {"name": "Alice", "age": 30, "active": True}
complex_data = {
    "id": 1,
    "name": "Project X",
    "tags": ["python", "serialization", "fast"],
    "metadata": {"version": "1.0", "author": "Jules"},
    "score": 95.5
}
nested_data = {
    "id": 100,
    "simple": simple_data,
    "children": [simple_data] * 5
}

# Object Instances
lodum_simple = LodumSimple(**simple_data)
lodum_complex = LodumComplex(**complex_data)
lodum_nested = LodumNested(
    id=nested_data["id"],
    simple=LodumSimple(**simple_data),
    children=[LodumSimple(**simple_data) for _ in range(5)]
)

pydantic_simple = PydanticSimple(**simple_data)
pydantic_complex = PydanticComplex(**complex_data)
pydantic_nested = PydanticNested(**nested_data)

mm_simple_schema = MarshmallowSimpleSchema()
mm_complex_schema = MarshmallowComplexSchema()
mm_nested_schema = MarshmallowNestedSchema()

mm_simple_obj = mm_simple_schema.load(simple_data)
mm_complex_obj = mm_complex_schema.load(complex_data)
mm_nested_obj = mm_nested_schema.load(nested_data)

# Pre-serialized data
simple_json = json.dumps(simple_data)
complex_json = json.dumps(complex_data)
nested_json = json.dumps(nested_data)

if msgpack:
    simple_msgpack = msgpack.packb(simple_data)
    complex_msgpack = msgpack.packb(complex_data)
    nested_msgpack = msgpack.packb(nested_data)

if cbor2:
    simple_cbor = cbor2.dumps(simple_data)
    complex_cbor = cbor2.dumps(complex_data)
    nested_cbor = cbor2.dumps(nested_data)

if ruamel.yaml:
    import io
    def yaml_dumps(d):
        with io.StringIO() as s:
            yaml_obj.dump(d, s)
            return s.getvalue()
    simple_yaml = yaml_dumps(simple_data)
    complex_yaml = yaml_dumps(complex_data)
    nested_yaml = yaml_dumps(nested_data)

if tomli_w:
    simple_toml = tomli_w.dumps(simple_data)
    complex_toml = tomli_w.dumps(complex_data)
    nested_toml = tomli_w.dumps({"root": nested_data}) # TOML needs a root table for some cases or can be tricky

simple_pickle = pickle.dumps(lodum_simple)
complex_pickle = pickle.dumps(lodum_complex)
nested_pickle = pickle.dumps(lodum_nested)


ITERATIONS = 2000 # Reduced for faster execution of slow formats

def bench(func):
    if func is None:
        return None
    timer = timeit.Timer(func)
    try:
        t = timer.timeit(number=ITERATIONS)
        return t / ITERATIONS * 1e6 # return in microseconds
    except Exception as e:
        # print(f"Error: {e}")
        return None

def run_group(group_name: str, benchmarks: Dict[str, Dict[str, Optional[Callable]]]):
    print(f"### {group_name}")
    print("| Library | Simple (us) | Complex (us) | Nested (us) |")
    print("| :--- | ---: | ---: | ---: |")

    for lib_name, funcs in benchmarks.items():
        simple_time = bench(funcs.get("simple"))
        complex_time = bench(funcs.get("complex"))
        nested_time = bench(funcs.get("nested"))

        if simple_time is None and complex_time is None and nested_time is None:
            continue

        def fmt(t):
            return f"{t:.2f}" if t is not None else "N/A"

        print(f"| {lib_name} | {fmt(simple_time)} | {fmt(complex_time)} | {fmt(nested_time)} |")
    print()

def run_all():
    print("# Lodum Performance Benchmarks\n")
    print(f"Iterations: {ITERATIONS}\n")
    print(f"Python version: {sys.version}\n")

    # JSON Serialization
    run_group("JSON Serialization (Object -> JSON)", {
        "Lodum": {
            "simple": lambda: lodum_json.dumps(lodum_simple),
            "complex": lambda: lodum_json.dumps(lodum_complex),
            "nested": lambda: lodum_json.dumps(lodum_nested),
        },
        "Pydantic (v2)": {
            "simple": lambda: pydantic_simple.model_dump_json(),
            "complex": lambda: pydantic_complex.model_dump_json(),
            "nested": lambda: pydantic_nested.model_dump_json(),
        },
        "Marshmallow": {
            "simple": lambda: json.dumps(mm_simple_schema.dump(mm_simple_obj)),
            "complex": lambda: json.dumps(mm_complex_schema.dump(mm_complex_obj)),
            "nested": lambda: json.dumps(mm_nested_schema.dump(mm_nested_obj)),
        },
        "Native json (dict)": {
            "simple": lambda: json.dumps(simple_data),
            "complex": lambda: json.dumps(complex_data),
            "nested": lambda: json.dumps(nested_data),
        },
        "orjson (dict)": {
            "simple": lambda: orjson.dumps(simple_data) if orjson else None,
            "complex": lambda: orjson.dumps(complex_data) if orjson else None,
            "nested": lambda: orjson.dumps(nested_data) if orjson else None,
        }
    })

    # JSON Deserialization
    run_group("JSON Deserialization (JSON -> Object)", {
        "Lodum": {
            "simple": lambda: lodum_json.loads(LodumSimple, simple_json),
            "complex": lambda: lodum_json.loads(LodumComplex, complex_json),
            "nested": lambda: lodum_json.loads(LodumNested, nested_json),
        },
        "Pydantic (v2)": {
            "simple": lambda: PydanticSimple.model_validate_json(simple_json),
            "complex": lambda: PydanticComplex.model_validate_json(complex_json),
            "nested": lambda: PydanticNested.model_validate_json(nested_json),
        },
        "Marshmallow": {
            "simple": lambda: mm_simple_schema.loads(simple_json),
            "complex": lambda: mm_complex_schema.loads(complex_json),
            "nested": lambda: mm_nested_schema.loads(nested_json),
        },
        "Native json (dict)": {
            "simple": lambda: json.loads(simple_json),
            "complex": lambda: json.loads(complex_json),
            "nested": lambda: json.loads(nested_json),
        },
        "orjson (dict)": {
            "simple": lambda: orjson.loads(simple_json) if orjson else None,
            "complex": lambda: orjson.loads(complex_json) if orjson else None,
            "nested": lambda: orjson.loads(nested_json) if orjson else None,
        }
    })

    # MsgPack
    if msgpack:
        run_group("MsgPack Serialization", {
            "Lodum": {
                "simple": lambda: lodum_msgpack.dumps(lodum_simple),
                "complex": lambda: lodum_msgpack.dumps(lodum_complex),
                "nested": lambda: lodum_msgpack.dumps(lodum_nested),
            },
            "Native msgpack (dict)": {
                "simple": lambda: msgpack.packb(simple_data),
                "complex": lambda: msgpack.packb(complex_data),
                "nested": lambda: msgpack.packb(nested_data),
            }
        })

        run_group("MsgPack Deserialization", {
            "Lodum": {
                "simple": lambda: lodum_msgpack.loads(LodumSimple, simple_msgpack),
                "complex": lambda: lodum_msgpack.loads(LodumComplex, complex_msgpack),
                "nested": lambda: lodum_msgpack.loads(LodumNested, nested_msgpack),
            },
            "Native msgpack (dict)": {
                "simple": lambda: msgpack.unpackb(simple_msgpack),
                "complex": lambda: msgpack.unpackb(complex_msgpack),
                "nested": lambda: msgpack.unpackb(nested_msgpack),
            }
        })

    # CBOR
    if cbor2:
        run_group("CBOR Serialization", {
            "Lodum": {
                "simple": lambda: lodum_cbor.dumps(lodum_simple),
                "complex": lambda: lodum_cbor.dumps(lodum_complex),
                "nested": lambda: lodum_cbor.dumps(lodum_nested),
            },
            "Native cbor2 (dict)": {
                "simple": lambda: cbor2.dumps(simple_data),
                "complex": lambda: cbor2.dumps(complex_data),
                "nested": lambda: cbor2.dumps(nested_data),
            }
        })

        run_group("CBOR Deserialization", {
            "Lodum": {
                "simple": lambda: lodum_cbor.loads(LodumSimple, simple_cbor),
                "complex": lambda: lodum_cbor.loads(LodumComplex, complex_cbor),
                "nested": lambda: lodum_cbor.loads(LodumNested, nested_cbor),
            },
            "Native cbor2 (dict)": {
                "simple": lambda: cbor2.loads(simple_cbor),
                "complex": lambda: cbor2.loads(complex_cbor),
                "nested": lambda: cbor2.loads(nested_cbor),
            }
        })

    # YAML
    if ruamel.yaml:
        run_group("YAML Serialization", {
            "Lodum": {
                "simple": lambda: lodum_yaml.dumps(lodum_simple),
                "complex": lambda: lodum_yaml.dumps(lodum_complex),
                "nested": lambda: lodum_yaml.dumps(lodum_nested),
            },
            "ruamel.yaml (dict)": {
                "simple": lambda: yaml_dumps(simple_data),
                "complex": lambda: yaml_dumps(complex_data),
                "nested": lambda: yaml_dumps(nested_data),
            }
        })

        run_group("YAML Deserialization", {
            "Lodum": {
                "simple": lambda: lodum_yaml.loads(LodumSimple, simple_yaml),
                "complex": lambda: lodum_yaml.loads(LodumComplex, complex_yaml),
                "nested": lambda: lodum_yaml.loads(LodumNested, nested_yaml),
            },
            "ruamel.yaml (dict)": {
                "simple": lambda: yaml_obj.load(simple_yaml),
                "complex": lambda: yaml_obj.load(complex_yaml),
                "nested": lambda: yaml_obj.load(nested_yaml),
            }
        })

    # TOML
    if tomli_w:
        run_group("TOML Serialization", {
            "Lodum": {
                "simple": lambda: lodum_toml.dumps(lodum_simple),
                "complex": lambda: lodum_toml.dumps(lodum_complex),
                "nested": lambda: lodum_toml.dumps(lodum_nested),
            },
            "tomli-w (dict)": {
                "simple": lambda: tomli_w.dumps(simple_data),
                "complex": lambda: tomli_w.dumps(complex_data),
                # nested_toml was slightly modified for root table
            }
        })

        run_group("TOML Deserialization", {
            "Lodum": {
                "simple": lambda: lodum_toml.loads(LodumSimple, simple_toml),
                "complex": lambda: lodum_toml.loads(LodumComplex, complex_toml),
                "nested": lambda: lodum_toml.loads(LodumNested, nested_toml),
            },
        })

    # Pickle
    run_group("Pickle Serialization", {
        "Lodum (Safe)": {
            "simple": lambda: lodum_pickle.dumps(lodum_simple),
            "complex": lambda: lodum_pickle.dumps(lodum_complex),
            "nested": lambda: lodum_pickle.dumps(lodum_nested),
        },
        "Native pickle": {
            "simple": lambda: pickle.dumps(lodum_simple),
            "complex": lambda: pickle.dumps(lodum_complex),
            "nested": lambda: pickle.dumps(lodum_nested),
        }
    })

    run_group("Pickle Deserialization", {
        "Lodum (Safe)": {
            "simple": lambda: lodum_pickle.loads(LodumSimple, simple_pickle),
            "complex": lambda: lodum_pickle.loads(LodumComplex, complex_pickle),
            "nested": lambda: lodum_pickle.loads(LodumNested, nested_pickle),
        },
        "Native pickle": {
            "simple": lambda: pickle.loads(simple_pickle),
            "complex": lambda: pickle.loads(complex_pickle),
            "nested": lambda: pickle.loads(nested_pickle),
        }
    })

if __name__ == "__main__":
    run_all()
