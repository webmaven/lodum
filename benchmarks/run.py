import json
import sys
import statistics
import pickle
import io
import os
import time
import subprocess
import traceback
import cProfile
from typing import Callable, Dict, Optional, List, Any

# Optional dependencies
try:
    import orjson
except Exception:
    orjson = None  # type: ignore

try:
    import msgpack  # type: ignore
except Exception:
    msgpack = None  # type: ignore

try:
    import cbor2
except Exception:
    cbor2 = None  # type: ignore

try:
    import ruamel.yaml
    from ruamel.yaml import YAML

    yaml_obj = YAML(typ="safe")
except (ImportError, NameError):
    ruamel = None  # type: ignore
    yaml_obj = None  # type: ignore

try:
    import tomli_w
except Exception:
    tomli_w = None  # type: ignore

try:
    import pyinstrument
except Exception:
    pyinstrument = None

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

def calibrate():
    """Measures standard library JSON performance as a hardware baseline."""
    import json
    import time
    import statistics
    
    # Fixed dataset
    data = {f"key_{i}": list(range(100)) for i in range(100)}
    iterations = 500
    times = []
    
    # Warmup
    json.dumps(data)
    
    for _ in range(iterations):
        start = time.perf_counter()
        json.dumps(data)
        times.append(time.perf_counter() - start)
    
    return statistics.median(times)

REFERENCE_BASELINE = calibrate()
print(f"DEBUG: Hardware Calibration Baseline: {REFERENCE_BASELINE:.8f}s")


# --- Lodum Imports with fallbacks for very old versions ---
try:
    from lodum import json as lodum_json
except Exception:
    try:
        import lodum.json as lodum_json  # type: ignore
    except Exception:
        lodum_json = None  # type: ignore

try:
    from lodum import msgpack as lodum_msgpack
except Exception:
    try:
        import lodum.msgpack as lodum_msgpack  # type: ignore
    except Exception:
        lodum_msgpack = None  # type: ignore

try:
    from lodum import cbor as lodum_cbor
except Exception:
    try:
        import lodum.cbor as lodum_cbor  # type: ignore
    except Exception:
        lodum_cbor = None  # type: ignore

try:
    from lodum import pickle as lodum_pickle
except Exception:
    try:
        import lodum.pickle as lodum_pickle  # type: ignore
    except Exception:
        lodum_pickle = None  # type: ignore

try:
    from lodum import yaml as lodum_yaml
except Exception:
    try:
        import lodum.yaml as lodum_yaml  # type: ignore
    except Exception:
        lodum_yaml = None  # type: ignore

try:
    from lodum import toml as lodum_toml
except Exception:
    try:
        import lodum.toml as lodum_toml  # type: ignore
    except Exception:
        lodum_toml = None  # type: ignore

# Fallbacks for function names in v0.1.0
if lodum_json:
    if not hasattr(lodum_json, "dumps") and hasattr(lodum_json, "to_json"):
        lodum_json.dumps = lodum_json.to_json
    if not hasattr(lodum_json, "loads") and hasattr(lodum_json, "from_json"):
        lodum_json.loads = lodum_json.from_json

if lodum_yaml:
    if not hasattr(lodum_yaml, "dumps") and hasattr(lodum_yaml, "to_yaml"):
        lodum_yaml.dumps = lodum_yaml.to_yaml
    if not hasattr(lodum_yaml, "loads") and hasattr(lodum_yaml, "from_yaml"):
        lodum_yaml.loads = lodum_yaml.from_yaml

if lodum_msgpack:
    if not hasattr(lodum_msgpack, "dumps") and hasattr(lodum_msgpack, "to_msgpack"):
        lodum_msgpack.dumps = lodum_msgpack.to_msgpack
    if not hasattr(lodum_msgpack, "loads") and hasattr(lodum_msgpack, "from_msgpack"):
        lodum_msgpack.loads = lodum_msgpack.from_msgpack

if lodum_cbor:
    if not hasattr(lodum_cbor, "dumps") and hasattr(lodum_cbor, "to_cbor"):
        lodum_cbor.dumps = lodum_cbor.to_cbor
    if not hasattr(lodum_cbor, "loads") and hasattr(lodum_cbor, "from_cbor"):
        lodum_cbor.loads = lodum_cbor.from_cbor

if lodum_pickle:
    if not hasattr(lodum_pickle, "dumps") and hasattr(lodum_pickle, "to_pickle"):
        lodum_pickle.dumps = lodum_pickle.to_pickle
    if not hasattr(lodum_pickle, "loads") and hasattr(lodum_pickle, "from_pickle"):
        lodum_pickle.loads = lodum_pickle.from_pickle

if lodum_toml:
    if not hasattr(lodum_toml, "dumps") and hasattr(lodum_toml, "to_toml"):
        lodum_toml.dumps = lodum_toml.to_toml
    if not hasattr(lodum_toml, "loads") and hasattr(lodum_toml, "from_toml"):
        lodum_toml.loads = lodum_toml.from_toml

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
lodum_simple = LodumSimple(**simple_data)  # type: ignore
lodum_complex = LodumComplex(**complex_data)  # type: ignore
lodum_nested = LodumNested(
    id=int(nested_data["id"]),  # type: ignore
    simple=LodumSimple(**simple_data),  # type: ignore
    children=[LodumSimple(**simple_data) for _ in range(5)],  # type: ignore
)

pydantic_simple = PydanticSimple(**simple_data)  # type: ignore
pydantic_complex = PydanticComplex(**complex_data)  # type: ignore
pydantic_nested = PydanticNested(**nested_data)  # type: ignore

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
    # TOML requires a dictionary at the root.
    nested_toml = tomli_w.dumps(nested_data)

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


def _calculate_stats(times: list[float]):
    """Calculates mean and stdev with outlier removal using IQR."""
    if not times:
        return 0.0, 0.0
    if len(times) < 4:
        return statistics.mean(times), statistics.stdev(times) if len(
            times
        ) > 1 else 0.0

    # Sort and remove outliers using IQR
    data = sorted(times)
    q1 = data[len(data) // 4]
    q3 = data[(len(data) * 3) // 4]
    iqr = q3 - q1
    lower_bound = q1 - 1.5 * iqr
    upper_bound = q3 + 1.5 * iqr

    filtered_data = [x for x in data if lower_bound <= x <= upper_bound]

    # If we filtered out too much, fall back to original
    if len(filtered_data) < 2:
        filtered_data = data

    return statistics.mean(filtered_data), statistics.stdev(filtered_data)


def bench(func, name: str = "unknown"):
    if func is None:
        return None

    verbose = "--verbose" in sys.argv
    fail_on_error = "--fail-on-error" in sys.argv
    should_profile = "--profile" in sys.argv
    profile_output_dir = None
    for arg in sys.argv:
        if arg.startswith("--profile-output="):
            profile_output_dir = arg.split("=")[1]

    # 1. Cold Start (First run)
    start_cold = time.perf_counter()
    try:
        func()
    except Exception:
        if verbose or fail_on_error:
            print(f"Error in cold start for {name}:", file=sys.stderr)
            traceback.print_exc()
        if fail_on_error:
            sys.exit(1)
        return None
    cold_time = (time.perf_counter() - start_cold) * 1e6  # us

    # 2. Warm Start (Steady state)
    # Adaptive Iterations: target at least 0.1s total time per repeat
    iterations = ITERATIONS
    try:
        # Initial probe
        start = time.perf_counter()
        func()
        single_op = time.perf_counter() - start
        if single_op < 0.00002:  # < 20us
            iterations = max(ITERATIONS, int(0.1 / (single_op or 1e-9)))
            # Cap to avoid infinite loops or extremely long runs
            iterations = min(iterations, 100000)
    except Exception:
        pass

    try:
        # WASM/Pyodide is noisier, so we use more repeats
        is_wasm = (
            "pyodide" in sys.modules
            or "Pyodide" in sys.version
            or os.environ.get("PYODIDE_SHARED_MEMORY")
        )
        repeats = 15 if is_wasm else 7
        all_times = []

        # 1. Measurement Phase (Clean numbers)
        for _ in range(repeats):
            # We measure the whole loop to avoid per-op perf_counter overhead
            start = time.perf_counter()
            for _ in range(iterations):
                func()
            duration = time.perf_counter() - start
            all_times.append((duration / iterations) * 1e6)  # us per op

        # 2. Optional Profiling Phase (Separate run to avoid skewing numbers)
        if should_profile:
            profiler = cProfile.Profile()
            profiler.enable()
            # We run enough iterations to get a good profile, but don't time it
            for _ in range(min(iterations, 1000)):
                func()
            profiler.disable()
            if profile_output_dir:
                os.makedirs(profile_output_dir, exist_ok=True)
                safe_name = "".join(c if c.isalnum() else "_" for c in name)
                prof_path = os.path.join(profile_output_dir, f"{safe_name}.prof")
                profiler.dump_stats(prof_path)

        if "--pyinstrument" in sys.argv and pyinstrument:
            pyinstrument_session = pyinstrument.Profiler()
            pyinstrument_session.start()
            for _ in range(min(iterations, 500)):
                func()
            pyinstrument_session.stop()
            if profile_output_dir:
                os.makedirs(profile_output_dir, exist_ok=True)
                safe_name = "".join(c if c.isalnum() else "_" for c in name)
                html_path = os.path.join(profile_output_dir, f"{safe_name}.html")
                with open(html_path, "w") as f:
                    f.write(pyinstrument_session.output_html())
            else:
                print(f"\n--- Pyinstrument Profile for {name} ---")
                print(pyinstrument_session.output_text(unicode=True, color=True))

        mean, stdev = _calculate_stats(all_times)
        return {
            "mean": mean,
            "stdev": stdev,
            "cold": cold_time,
            "iterations": iterations,
        }
    except Exception:
        if verbose or fail_on_error:
            print(f"Error in benchmark for {name}:", file=sys.stderr)
            traceback.print_exc()
        if fail_on_error:
            sys.exit(1)
        return None


def run_group(
    group_name: str,
    benchmarks: Dict[str, Dict[str, Optional[Callable]]],
    results_collector: List[Dict[str, Any]],
):
    use_baselines = "--use-baselines" in sys.argv
    is_json = "--json" in sys.argv

    if not is_json:
        print(f"### {group_name}")
        print(
            "| Library | Simple (us) | Complex (us) | Nested (us) | Cold Start (us) |"
        )
        print("| :--- | ---: | ---: | ---: | ---: |")

    for lib_name, funcs in benchmarks.items():
        results = {}
        for scenario in ["simple", "complex", "nested"]:
            baseline_key = f"{group_name} {lib_name} {scenario}"
            full_name = f"{group_name} {lib_name} {scenario}"
            if use_baselines and baseline_key in competitor_baselines:
                res = competitor_baselines[baseline_key]
            else:
                res = bench(funcs.get(scenario), name=full_name)

            results[scenario] = res
            if res and is_json:
                # Use global calibration_baseline if it exists, else 1.0
                ref = globals().get('calibration_baseline', 1.0)
                reference_us = ref if ref > 0 else 1.0
                results_collector.append(
                    {
                        "name": full_name, 
                        "unit": "us", 
                        "value": res["mean"],
                        "stdev": res["stdev"],
                        "iterations": res["iterations"],
                        "normalized": res["mean"] / reference_us
                    }
                )
                if "cold" in res:
                    results_collector.append(
                        {
                            "name": f"{full_name} (Cold Start)",
                            "unit": "us",
                            "value": res["cold"],
                        }
                    )

        if not any(results.values()):
            continue

        def fmt(res):
            if res is None:
                return "N/A"
            return f"{res['mean']:.2f} ± {res['stdev']:.2f}"

        def fmt_cold(res):
            if res is None or "cold" not in res:
                return "N/A"
            return f"{res['cold']:.2f}"

        # We show cold start for the 'complex' scenario as a representative sample
        if not is_json:
            print(
                f"| {lib_name} | {fmt(results.get('simple'))} | {fmt(results.get('complex'))} | {fmt(results.get('nested'))} | {fmt_cold(results.get('complex'))} |"
            )
    if not is_json:
        print()


def get_commit_info(target_sha=None):
    """Retrieves commit metadata using git."""
    try:
        ref = target_sha or "HEAD"
        sha = subprocess.check_output(
            f"git rev-parse {ref}", shell=True, text=True
        ).strip()
        msg = subprocess.check_output(
            f"git log -1 {sha} --format=%s", shell=True, text=True
        ).strip()
        author_name = subprocess.check_output(
            f"git log -1 {sha} --format=%an", shell=True, text=True
        ).strip()
        author_email = subprocess.check_output(
            f"git log -1 {sha} --format=%ae", shell=True, text=True
        ).strip()
        timestamp = subprocess.check_output(
            f"git log -1 {sha} --format=%cI", shell=True, text=True
        ).strip()

        return {
            "id": sha,
            "message": msg,
            "timestamp": timestamp,
            "author": {"name": author_name, "email": author_email},
            "url": f"https://github.com/webmaven/lodum/commit/{sha}",
        }
    except Exception as e:
        print(f"Error getting commit info: {e}", file=sys.stderr)
        return None


def run_all():
    is_json = "--json" in sys.argv
    use_baselines = "--use-baselines" in sys.argv

    target_sha = None
    for arg in sys.argv:
        if arg.startswith("--sha="):
            target_sha = arg.split("=")[1]

    all_results: List[Dict[str, Any]] = []

    if not is_json:
        print("# Lodum Performance Benchmarks\n")
        print(f"Iterations: {ITERATIONS}\n")
        print(f"Python version: {sys.version}\n")
        if use_baselines:
            print("Note: Using stored competitor baselines for comparison.\n")

    # JSON Serialization
    run_group(
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
        all_results,
    )

    # JSON Deserialization
    run_group(
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
        all_results,
    )

    # MsgPack
    if msgpack and lodum_msgpack:
        run_group(
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
            all_results,
        )
        run_group(
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
            all_results,
        )

    # CBOR
    if cbor2 and lodum_cbor:
        run_group(
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
            all_results,
        )
        run_group(
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
            all_results,
        )

    # YAML
    if ruamel.yaml and lodum_yaml:
        run_group(
            "YAML Serialization",
            {
                "Lodum": {
                    "simple": lambda: lodum_yaml.dumps(lodum_simple),
                    "complex": lambda: lodum_yaml.dumps(lodum_complex),
                    "nested": lambda: lodum_yaml.dumps(lodum_nested),
                },
            },
            all_results,
        )
        run_group(
            "YAML Deserialization",
            {
                "Lodum": {
                    "simple": lambda: lodum_yaml.loads(LodumSimple, simple_yaml),
                    "complex": lambda: lodum_yaml.loads(LodumComplex, complex_yaml),
                    "nested": lambda: lodum_yaml.loads(LodumNested, nested_yaml),
                },
            },
            all_results,
        )

    # TOML
    if tomli_w and lodum_toml:
        run_group(
            "TOML Serialization",
            {
                "Lodum": {
                    "simple": lambda: lodum_toml.dumps(lodum_simple),
                    "complex": lambda: lodum_toml.dumps(lodum_complex),
                    "nested": lambda: lodum_toml.dumps(lodum_nested),
                },
            },
            all_results,
        )
        run_group(
            "TOML Deserialization",
            {
                "Lodum": {
                    "simple": lambda: lodum_toml.loads(LodumSimple, simple_toml),
                    "complex": lambda: lodum_toml.loads(LodumComplex, complex_toml),
                    "nested": lambda: lodum_toml.loads(LodumNested, nested_toml),
                },
            },
            all_results,
        )

    # Pickle
    if lodum_pickle:
        run_group(
            "Pickle Serialization",
            {
                "Lodum (Safe)": {
                    "simple": lambda: lodum_pickle.dumps(lodum_simple),
                    "complex": lambda: lodum_pickle.dumps(lodum_complex),
                    "nested": lambda: lodum_pickle.dumps(lodum_nested),
                },
            },
            all_results,
        )
        run_group(
            "Pickle Deserialization",
            {
                "Lodum (Safe)": {
                    "simple": lambda: lodum_pickle.loads(LodumSimple, simple_pickle),
                    "complex": lambda: lodum_pickle.loads(LodumComplex, complex_pickle),
                    "nested": lambda: lodum_pickle.loads(LodumNested, nested_pickle),
                },
            },
            all_results,
        )

    if is_json:
        output = {"commit": get_commit_info(target_sha), "results": all_results}
        print(json.dumps(output))

    # Regression Check
    if "--check-regressions" in sys.argv:
        threshold = 0.15  # 15% threshold
        for arg in sys.argv:
            if arg.startswith("--threshold="):
                threshold = float(arg.split("=")[1])

        baseline_path = os.path.join(os.path.dirname(__file__), "lodum_baselines.json")
        if os.path.exists(baseline_path):
            with open(baseline_path, "r") as f:
                baselines = json.load(f)

            regressions = []
            for res in all_results:
                name = res["name"]
                if name in baselines:
                    base = baselines[name]["mean"]
                    current = res["value"]
                    if current > base * (1 + threshold):
                        increase = (current - base) / base * 100
                        regressions.append(
                            f"REGRESSION: {name} (Current: {current:.2f}us, Base: {base:.2f}us, +{increase:.1f}%)"
                        )

            if regressions:
                if not is_json:
                    print("\n" + "!" * 40)
                    print("PERFORMANCE REGRESSIONS DETECTED")
                    for r in regressions:
                        print(r)
                    print("!" * 40 + "\n")
                if "--fail-on-regression" in sys.argv:
                    sys.exit(1)
            else:
                if not is_json:
                    print("\nNo significant regressions detected.")


if __name__ == "__main__":
    run_all()
