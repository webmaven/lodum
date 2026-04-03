import io
import json
import time
import tracemalloc
import sys
<<<<<<< HEAD
from typing import List
=======
from typing import List, Type, Any
>>>>>>> main
from lodum import lodum, json as lodum_json

try:
    from pydantic import TypeAdapter, BaseModel
except ImportError:
    TypeAdapter = None

<<<<<<< HEAD

=======
>>>>>>> main
@lodum
class LargeItem:
    def __init__(self, id: int, name: str, data: List[int], active: bool):
        self.id = id
        self.name = name
        self.data = data
        self.active = active

<<<<<<< HEAD

if TypeAdapter:

=======
if TypeAdapter:
>>>>>>> main
    class PydanticItem(BaseModel):
        id: int
        name: str
        data: List[int]
        active: bool
<<<<<<< HEAD

    pydantic_adapter = TypeAdapter(List[PydanticItem])


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


def run_benchmark(count: int):
    is_json = "--json" in sys.argv
    if not is_json:
        print(f"Generating {count} items...")
    raw_data = generate_large_json(count)
    data_size_mb = len(raw_data) / (1024 * 1024)
    if not is_json:
        print(f"Data size: {data_size_mb:.2f} MB\n")
=======
    
    pydantic_adapter = TypeAdapter(List[PydanticItem])

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
    print(f"Generating {count} items...")
    raw_data = generate_large_json(count)
    data_size_mb = len(raw_data) / (1024 * 1024)
    print(f"Data size: {data_size_mb:.2f} MB\n")
>>>>>>> main

    results = []

    # --- Standard loads ---
    tracemalloc.start()
    start_time = time.perf_counter()
<<<<<<< HEAD

    # We use a string for loads as per existing API
    json_str = raw_data.decode("utf-8")
    items = lodum_json.loads(List[LargeItem], json_str, max_size=len(raw_data) * 2)
    # Force consumption if it was somehow lazy (it isn't)
    _ = len(items)

    end_time = time.perf_counter()
    current, peak = tracemalloc.get_traced_memory()
    tracemalloc.stop()

    results.append(
        {
            "name": "Lodum Standard (loads)",
            "time": end_time - start_time,
            "memory_mb": peak / (1024 * 1024),
        }
    )
=======
    
    # We use a string for loads as per existing API
    json_str = raw_data.decode("utf-8")
    items = lodum_json.loads(List[LargeItem], json_str)
    # Force consumption if it was somehow lazy (it isn't)
    _ = len(items)
    
    end_time = time.perf_counter()
    current, peak = tracemalloc.get_traced_memory()
    tracemalloc.stop()
    
    results.append({
        "name": "Lodum Standard (loads)",
        "time": end_time - start_time,
        "memory_mb": peak / (1024 * 1024)
    })
>>>>>>> main

    # --- Streaming load_stream ---
    tracemalloc.start()
    start_time = time.perf_counter()
<<<<<<< HEAD

=======
    
>>>>>>> main
    stream = io.BytesIO(raw_data)
    items_iter = lodum_json.load_stream(LargeItem, stream)
    # Must consume the iterator to measure full time/memory
    items_count = 0
    for _ in items_iter:
        items_count += 1
<<<<<<< HEAD

    end_time = time.perf_counter()
    current, peak = tracemalloc.get_traced_memory()
    tracemalloc.stop()

    results.append(
        {
            "name": "Lodum Streaming (load_stream)",
            "time": end_time - start_time,
            "memory_mb": peak / (1024 * 1024),
        }
    )
=======
    
    end_time = time.perf_counter()
    current, peak = tracemalloc.get_traced_memory()
    tracemalloc.stop()
    
    results.append({
        "name": "Lodum Streaming (load_stream)",
        "time": end_time - start_time,
        "memory_mb": peak / (1024 * 1024)
    })
>>>>>>> main

    # --- Pydantic (for comparison) ---
    if TypeAdapter:
        tracemalloc.start()
        start_time = time.perf_counter()
<<<<<<< HEAD

        # Pydantic v2 validate_json is very fast but in-memory
        _ = pydantic_adapter.validate_json(raw_data)

        end_time = time.perf_counter()
        current, peak = tracemalloc.get_traced_memory()
        tracemalloc.stop()

        results.append(
            {
                "name": "Pydantic v2 (validate_json)",
                "time": end_time - start_time,
                "memory_mb": peak / (1024 * 1024),
            }
        )
=======
        
        # Pydantic v2 validate_json is very fast but in-memory
        _ = pydantic_adapter.validate_json(raw_data)
        
        end_time = time.perf_counter()
        current, peak = tracemalloc.get_traced_memory()
        tracemalloc.stop()
        
        results.append({
            "name": "Pydantic v2 (validate_json)",
            "time": end_time - start_time,
            "memory_mb": peak / (1024 * 1024)
        })
>>>>>>> main

    # Print Results
    if "--json" in sys.argv:
        # Format for github-action-benchmark
        bench_data = []
        for res in results:
<<<<<<< HEAD
            bench_data.append(
                {"name": f"{res['name']} Time", "unit": "s", "value": res["time"]}
            )
            bench_data.append(
                {
                    "name": f"{res['name']} Memory",
                    "unit": "MB",
                    "value": res["memory_mb"],
                }
            )
=======
            bench_data.append({
                "name": f"{res['name']} Time",
                "unit": "s",
                "value": res['time']
            })
            bench_data.append({
                "name": f"{res['name']} Memory",
                "unit": "MB",
                "value": res['memory_mb']
            })
>>>>>>> main
        print(json.dumps(bench_data))
    else:
        print("| Method | Time (s) | Peak Memory (MB) |")
        print("| :--- | ---: | ---: |")
        for res in results:
            print(f"| {res['name']} | {res['time']:.4f} | {res['memory_mb']:.2f} |")

<<<<<<< HEAD

=======
>>>>>>> main
if __name__ == "__main__":
    count = 100000
    if len(sys.argv) > 1 and not sys.argv[1].startswith("-"):
        count = int(sys.argv[1])
    run_benchmark(count)
