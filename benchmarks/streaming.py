import io
import json
import time
import tracemalloc
import sys
import subprocess
from typing import List, Type, Any, Iterator, Union, Optional
from pathlib import Path

# --- Compatibility Shims ---
# This is the single source of truth for library evolution compatibility.
try:
    from lodum import lodum
    from lodum import json as lodum_json
except ImportError:
    # Pre v0.4.0 import structure
    try:
        from lodum.core import serializable as lodum
        import lodum.json as lodum_json  # type: ignore
    except ImportError:
        lodum = None
        lodum_json = None

# Shim for decorator
decorator = lodum if lodum else lambda x: x

@decorator
class LargeItem:
    def __init__(self, id: int, name: str, data: List[int], active: bool):
        self.id = id
        self.name = name
        self.data = data
        self.active = active

def get_stream_func(lodum_json_module):
    """Dynamically resolves the streaming API for the current version."""
    if not lodum_json_module:
        return None
        
    if hasattr(lodum_json_module, 'load_stream'):
        return lodum_json_module.load_stream
    elif hasattr(lodum_json_module, 'stream'):
        return lodum_json_module.stream
    elif hasattr(lodum_json_module, 'from_iter'):
        return lodum_json_module.from_iter
    elif hasattr(lodum_json_module, 'from_json'):
        # Fallback for very old versions: if they have from_json but no stream,
        # we can't really stream, but we can provide a compatible interface
        def fallback(cls, source):
            if isinstance(source, io.IOBase):
                source = source.read().decode('utf-8')
            return lodum_json_module.from_json(cls, source)
        return fallback
    return None

stream_func = get_stream_func(lodum_json)

def loads_shim(cls: Type[Any], data: str) -> Any:
    """Dynamically resolves the loading API."""
    if not lodum_json:
        # Emergency fallback to standard json if library is totally broken/missing
        # but we want to avoid this if possible.
        raise ImportError("Lodum module not found")
        
    if hasattr(lodum_json, 'loads'):
        return lodum_json.loads(cls, data)
    elif hasattr(lodum_json, 'from_json'):
        return lodum_json.from_json(cls, data)
    else:
        raise RuntimeError("No compatible load API found")

# --- Rest of Benchmark Logic ---
def generate_large_json(count: int) -> bytes:
    items = []
    for i in range(count):
        items.append({
            "id": i,
            "name": f"Item {i}",
            "data": list(range(10)),
            "active": i % 2 == 0
        })
    return json.dumps(items).encode("utf-8")

def run_benchmark(count: int):
    raw_data = generate_large_json(count)
    results = []

    # --- Standard Load ---
    tracemalloc.start()
    start_time = time.perf_counter()
    try:
        json_str = raw_data.decode("utf-8")
        items = loads_shim(List[LargeItem], json_str)
        _ = len(items)
        end_time = time.perf_counter()
        _, peak = tracemalloc.get_traced_memory()
        tracemalloc.stop()
        
        results.append({
            "name": "Lodum Standard (loads)",
            "time": end_time - start_time,
            "memory_mb": peak / (1024 * 1024)
        })
    except Exception as e:
        tracemalloc.stop()
        print(f"DEBUG: Standard load failed: {e}")

    # --- Streaming Load ---
    if stream_func:
        tracemalloc.start()
        start_time = time.perf_counter()
        try:
            stream = io.BytesIO(raw_data)
            items_iter = stream_func(LargeItem, stream)
            items_count = 0
            for _ in items_iter:
                items_count += 1
            end_time = time.perf_counter()
            _, peak = tracemalloc.get_traced_memory()
            tracemalloc.stop()
            results.append({
                "name": "Lodum Streaming",
                "time": end_time - start_time,
                "memory_mb": peak / (1024 * 1024)
            })
        except Exception as e:
            tracemalloc.stop()
            print(f"DEBUG: Streaming load failed: {e}")

    # Output JSON results for the dashboard
    if "--json" in sys.argv:
        bench_data = []
        for res in results:
            bench_data.append({"name": f"{res['name']} Time", "unit": "s", "value": res['time']})
            bench_data.append({"name": f"{res['name']} Memory", "unit": "MB", "value": res['memory_mb']})
        print(json.dumps(bench_data))
    else:
        print("| Method | Time (s) | Peak Memory (MB) |")
        print("| :--- | ---: | ---: |")
        for res in results:
            print(f"| {res['name']} | {res['time']:.4f} | {res['memory_mb']:.2f} |")

if __name__ == "__main__":
    count = 100000
    if len(sys.argv) > 1 and not sys.argv[1].startswith("-"):
        count = int(sys.argv[1])
    run_benchmark(count)
