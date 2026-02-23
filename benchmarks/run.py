import timeit
import json
import sys
import statistics
import pickle
import io
import os
import time
from typing import Callable, Dict, Optional, Any, List

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
except ImportError:
    tomli_w = None

from benchmarks.models import (
    LodumSimple,
    LodumComplex,
    LodumNested,
    PydanticSimple,
    PydanticComplex,
    PydanticNested,
    MarshmallowSimpleSchema,
    MarshmallowComplexSchema,
    MarshmallowNestedSchema,
)

# --- Lodum Imports with fallbacks for very old versions ---
try:
    from lodum import json as lodum_json
except ImportError:
    try:
        import lodum.json as lodum_json
    except ImportError:
        lodum_json = None

try:
    from lodum import msgpack as lodum_msgpack
except ImportError:
    try:
        import lodum.msgpack as lodum_msgpack
    except ImportError:
        lodum_msgpack = None

try:
    from lodum import cbor as lodum_cbor
except ImportError:
    try:
        import lodum.cbor as lodum_cbor
    except ImportError:
        lodum_cbor = None

try:
    from lodum import pickle as lodum_pickle
except ImportError:
    try:
        import lodum.pickle as lodum_pickle
    except ImportError:
        lodum_pickle = None

try:
    from lodum import yaml as lodum_yaml
except ImportError:
    try:
        import lodum.yaml as lodum_yaml
    except ImportError:
        lodum_yaml = None

try:
    from lodum import toml as lodum_toml
except ImportError:
    try:
        import lodum.toml as lodum_toml
    except ImportError:
        lodum_toml = None

# Fallbacks for function names in v0.1.0
if lodum_json:
    if not hasattr(lodum_json, "dumps") and hasattr(lodum_json, "to_json"):
        lodum_json.dumps = lodum_json.to_json
    if not hasattr(lodum_json, "loads") and hasattr(lodum_json, "from_json"):
        lodum_json.loads = lodum_json.from_json

# Data Preparation
simple_data = {"name": "Alice", "age": 30, "active": True}
complex_data = {
    "id": 1,
    "name": "Project X",
    "tags": ["python", "serialization", "fast"],
    "metadata": {"version": "1.0", "author": "Jules"},
    "score": 95.5,
}
nested_data = {"id": 100, "simple": simple_data, "children": [simple_data] * 5}

# Object Instances
lodum_simple = LodumSimple(**simple_data)
lodum_complex = LodumComplex(**complex_data)
lodum_nested = LodumNested(
    id=nested_data["id"],
    simple=LodumSimple(**simple_data),
    children=[LodumSimple(**simple_data) for _ in range(5)],
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
    nested_toml = tomli_w.dumps({"root": nested_data})

simple_pickle = pickle.dumps(lodum_simple)
complex_pickle = pickle.dumps(lodum_complex)
nested_pickle = pickle.dumps(lodum_nested)

ITERATIONS = 2000

# Baselines Loading
BASELINES_FILE = os.path.join(os.path.dirname(__file__), "competitor_baselines.json")
competitor_baselines = {}
if os.path.exists(BASELINES_FILE):
    with open(BASELINES_FILE, "r") as f:
        competitor_baselines = json.load(f)


def bench(func):
    if func is None:
        return None
    
    # 1. Cold Start (First run)
    start_cold = time.perf_counter()
    func()
    cold_time = (time.perf_counter() - start_cold) * 1e6 # us
    
    # 2. Warm Start (Steady state)
    timer = timeit.Timer(func)
    try:
        times = timer.repeat(repeat=5, number=ITERATIONS)
        us_per_op = [(t / ITERATIONS) * 1e6 for t in times]
        return {
            "mean": statistics.mean(us_per_op),
            "stdev": statistics.stdev(us_per_op),
            "cold": cold_time
        }
    except Exception:
        return None


def run_group(group_name: str, benchmarks: Dict[str, Dict[str, Optional[Callable]]]):
    print(f"### {group_name}")
    print("| Library | Simple (us) | Complex (us) | Nested (us) | Cold Start (us) |")
    print("| :--- | ---: | ---: | ---: | ---: |")

    use_baselines = "--use-baselines" in sys.argv

    for lib_name, funcs in benchmarks.items():
        results = {}
        for scenario in ["simple", "complex", "nested"]:
            baseline_key = f"{group_name} {lib_name} {scenario}"
            if use_baselines and baseline_key in competitor_baselines:
                results[scenario] = competitor_baselines[baseline_key]
            else:
                results[scenario] = bench(funcs.get(scenario))

        if not any(results.values()):
            continue

        def fmt(res):
            if res is None:
                return "N/A"
            return f"{res['mean']:.2f} ± {res['stdev']:.2f}"
        
        def fmt_cold(res):
            if res is None or "cold" not in res: return "N/A"
            return f"{res['cold']:.2f}"

        # We show cold start for the 'complex' scenario as a representative sample
        print(
            f"| {lib_name} | {fmt(results.get('simple'))} | {fmt(results.get('complex'))} | {fmt(results.get('nested'))} | {fmt_cold(results.get('complex'))} |"
        )
    print()


def run_all():
    is_json = "--json" in sys.argv
    use_baselines = "--use-baselines" in sys.argv
    all_results = []

    def collect_group(group_name, benchmarks):
        if is_json:
            for lib, funcs in benchmarks.items():
                for name, fn in funcs.items():
                    baseline_key = f"{group_name} {lib} {name}"
                    if use_baselines and baseline_key in competitor_baselines:
                        res = competitor_baselines[baseline_key]
                    else:
                        res = bench(fn)
                    
                    if res:
                        all_results.append(
                            {
                                "name": f"{group_name} {lib} {name}",
                                "unit": "us",
                                "value": res["mean"],
                            }
                        )
                        if "cold" in res:
                            all_results.append(
                                {
                                    "name": f"{group_name} {lib} {name} (Cold Start)",
                                    "unit": "us",
                                    "value": res["cold"],
                                }
                            )
        else:
            run_group(group_name, benchmarks)

    if not is_json:
        print("# Lodum Performance Benchmarks\n")
        print(f"Iterations: {ITERATIONS}\n")
        print(f"Python version: {sys.version}\n")
        if use_baselines:
            print("Note: Using stored competitor baselines for comparison.\n")

    # JSON Serialization
    collect_group(
        "JSON Serialization",
        {
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
        },
    )

    # JSON Deserialization
    collect_group(
        "JSON Deserialization",
        {
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
        },
    )

    # MsgPack
    if msgpack and lodum_msgpack:
        collect_group(
            "MsgPack Serialization",
            {
                "Lodum": {
                    "simple": lambda: lodum_msgpack.dumps(lodum_simple),
                    "complex": lambda: lodum_msgpack.dumps(lodum_complex),
                    "nested": lambda: lodum_msgpack.dumps(lodum_nested),
                },
                "Native msgpack (dict)": {
                    "simple": lambda: msgpack.packb(simple_data),
                    "complex": lambda: msgpack.packb(complex_data),
                    "nested": lambda: msgpack.packb(nested_data),
                },
            },
        )
        collect_group(
            "MsgPack Deserialization",
            {
                "Lodum": {
                    "simple": lambda: lodum_msgpack.loads(LodumSimple, simple_msgpack),
                    "complex": lambda: lodum_msgpack.loads(
                        LodumComplex, complex_msgpack
                    ),
                    "nested": lambda: lodum_msgpack.loads(LodumNested, nested_msgpack),
                },
                "Native msgpack (dict)": {
                    "simple": lambda: msgpack.unpackb(simple_msgpack),
                    "complex": lambda: msgpack.unpackb(complex_msgpack),
                    "nested": lambda: msgpack.unpackb(nested_msgpack),
                },
            },
        )

    # CBOR
    if cbor2 and lodum_cbor:
        collect_group(
            "CBOR Serialization",
            {
                "Lodum": {
                    "simple": lambda: lodum_cbor.dumps(lodum_simple),
                    "complex": lambda: lodum_cbor.dumps(lodum_complex),
                    "nested": lambda: lodum_cbor.dumps(lodum_nested),
                },
                "Native cbor2 (dict)": {
                    "simple": lambda: cbor2.dumps(simple_data),
                    "complex": lambda: cbor2.dumps(complex_data),
                    "nested": lambda: cbor2.dumps(nested_data),
                },
            },
        )
        collect_group(
            "CBOR Deserialization",
            {
                "Lodum": {
                    "simple": lambda: lodum_cbor.loads(LodumSimple, simple_cbor),
                    "complex": lambda: lodum_cbor.loads(LodumComplex, complex_cbor),
                    "nested": lambda: lodum_cbor.loads(LodumNested, nested_cbor),
                },
                "Native cbor2 (dict)": {
                    "simple": lambda: cbor2.loads(simple_cbor),
                    "complex": lambda: cbor2.loads(complex_cbor),
                    "nested": lambda: cbor2.loads(nested_cbor),
                },
            },
        )

    # YAML
    if ruamel.yaml and lodum_yaml:
        collect_group(
            "YAML Serialization",
            {
                "Lodum": {
                    "simple": lambda: lodum_yaml.dumps(lodum_simple),
                    "complex": lambda: lodum_yaml.dumps(lodum_complex),
                    "nested": lambda: lodum_yaml.dumps(lodum_nested),
                },
            },
        )
        collect_group(
            "YAML Deserialization",
            {
                "Lodum": {
                    "simple": lambda: lodum_yaml.loads(LodumSimple, simple_yaml),
                    "complex": lambda: lodum_yaml.loads(LodumComplex, complex_yaml),
                    "nested": lambda: lodum_yaml.loads(LodumNested, nested_yaml),
                },
            },
        )

    # TOML
    if tomli_w and lodum_toml:
        collect_group(
            "TOML Serialization",
            {
                "Lodum": {
                    "simple": lambda: lodum_toml.dumps(lodum_simple),
                    "complex": lambda: lodum_toml.dumps(lodum_complex),
                    "nested": lambda: lodum_toml.dumps(lodum_nested),
                },
            },
        )
        collect_group(
            "TOML Deserialization",
            {
                "Lodum": {
                    "simple": lambda: lodum_toml.loads(LodumSimple, simple_toml),
                    "complex": lambda: lodum_toml.loads(LodumComplex, complex_toml),
                    "nested": lambda: lodum_toml.loads(LodumNested, nested_toml),
                },
            },
        )

    # Pickle
    if lodum_pickle:
        collect_group(
            "Pickle Serialization",
            {
                "Lodum (Safe)": {
                    "simple": lambda: lodum_pickle.dumps(lodum_simple),
                    "complex": lambda: lodum_pickle.dumps(lodum_complex),
                    "nested": lambda: lodum_pickle.dumps(lodum_nested),
                },
            },
        )
        collect_group(
            "Pickle Deserialization",
            {
                "Lodum (Safe)": {
                    "simple": lambda: lodum_pickle.loads(LodumSimple, simple_pickle),
                    "complex": lambda: lodum_pickle.loads(LodumComplex, complex_pickle),
                    "nested": lambda: lodum_pickle.loads(LodumNested, nested_pickle),
                },
            },
        )

    if is_json:
        print(json.dumps(all_results))


if __name__ == "__main__":
    run_all()
