import io
import json
import time
import tracemalloc
import sys
import subprocess
from typing import List, Optional, Type, Any
try:
    from lodum import lodum, json as lodum_json
except ImportError:
    try:
        from lodum.core import lodum
        import lodum.json as lodum_json  # type: ignore
    except ImportError:
        try:
            # v0.1.0 fallback
            from lodum.core import serializable as lodum
            import lodum.json as lodum_json  # type: ignore
        except ImportError:
            lodum = None  # type: ignore
            lodum_json = None  # type: ignore

# Fallbacks for v0.1.0/v0.2.0 naming
if lodum_json:
    if not hasattr(lodum_json, "loads") and hasattr(lodum_json, "from_json"):
        lodum_json.loads = lodum_json.from_json
    if not hasattr(lodum_json, "load_stream") and hasattr(lodum_json, "from_iter"):
        lodum_json.load_stream = lodum_json.from_iter

try:
    from pydantic import TypeAdapter, BaseModel  # type: ignore
except ImportError:
    TypeAdapter = None  # type: ignore
    BaseModel = object  # type: ignore


def _dummy_decorator(c): return c
decorator = lodum if lodum else _dummy_decorator

@decorator
class LargeItem:
    def __init__(self, id: int, name: str, data: List[int], active: bool):
        self.id = id
        self.name = name
        self.data = data
        self.active = active


if TypeAdapter:  # type: ignore

    class PydanticItem(BaseModel):  # type: ignore
        id: int
        name: str
        data: List[int]
        active: bool

    pydantic_adapter = TypeAdapter(List[PydanticItem])  # type: ignore


def generate_large_json(count: int) -> bytes:
    items = []
    for i in range(count):
        items.append(
            {
                "id": i,
                "name": f"Item {i}",
                "data": list(range(10)),
                "active": i % 2 == 0,
            }
        )
    return json.dumps(items).encode("utf-8")


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
    except Exception:
        return None


def run_benchmark(count: int):
    import statistics
    import gc

    is_json = "--json" in sys.argv

    target_sha = None
    for arg in sys.argv:
        if arg.startswith("--sha="):
            target_sha = arg.split("=")[1]

    if not is_json:
        print(f"Generating {count} items...")

    raw_data = generate_large_json(count)
    data_size_mb = len(raw_data) / (1024 * 1024)
    if not is_json:
        print(f"Data size: {data_size_mb:.2f} MB\n")

    scenarios = []
    if lodum_json and hasattr(lodum_json, "loads"):
        def lodum_std_load(data):
            try:
                # Modern API supports max_size
                return lodum_json.loads(
                    List[LargeItem], data.decode("utf-8"), max_size=len(data) * 2
                )
            except TypeError:
                # Older API (v0.1.0/v0.2.0)
                return lodum_json.loads(List[LargeItem], data.decode("utf-8"))

        scenarios.append(("Lodum Standard (loads)", lodum_std_load))
    
    if lodum_json and hasattr(lodum_json, "load_stream"):
        scenarios.append((
            "Lodum Streaming (load_stream)",
            lambda data: list(lodum_json.load_stream(LargeItem, io.BytesIO(data))),
        ))

    if TypeAdapter:  # type: ignore
        scenarios.append(
            (
                "Pydantic v2 (validate_json)",
                lambda data: pydantic_adapter.validate_json(data),  # type: ignore
            )
        )

    all_results = []
    trials = 5

    for name, func in scenarios:
        trial_times = []
        trial_memories = []

        for _ in range(trials):
            gc.collect()
            tracemalloc.start()
            start_time = time.perf_counter()

            _ = func(raw_data)

            end_time = time.perf_counter()
            current, peak = tracemalloc.get_traced_memory()
            tracemalloc.stop()

            trial_times.append(end_time - start_time)
            trial_memories.append(peak / (1024 * 1024))

        all_results.append(
            {
                "name": name,
                "time_mean": statistics.mean(trial_times),
                "time_stdev": statistics.stdev(trial_times),
                "memory_mean": statistics.mean(trial_memories),
                "memory_stdev": statistics.stdev(trial_memories),
            }
        )

    # Print Results
    if "--json" in sys.argv:
        bench_data = []
        for res in all_results:
            bench_data.append(
                {"name": f"{res['name']} Time", "unit": "s", "value": res["time_mean"]}
            )
            bench_data.append(
                {
                    "name": f"{res['name']} Memory",
                    "unit": "MB",
                    "value": res["memory_mean"],
                }
            )

        output = {"commit": get_commit_info(target_sha), "results": bench_data}
        print(json.dumps(output))
    else:
        print("| Method | Time (s) | Peak Memory (MB) |")
        print("| :--- | ---: | ---: |")
        for res in all_results:
            print(
                f"| {res['name']} | {res['time_mean']:.4f} \u00b1 {res['time_stdev']:.4f} | {res['memory_mean']:.2f} \u00b1 {res['memory_stdev']:.2f} |"
            )


if __name__ == "__main__":
    count = 100000
    if len(sys.argv) > 1 and not sys.argv[1].startswith("-"):
        count = int(sys.argv[1])
    run_benchmark(count)
