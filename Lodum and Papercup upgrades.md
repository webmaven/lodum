Here is the architectural specification for the necessary upgrades to **Lodum** and **Papercup**.  
This document outlines the specific API changes and internal mechanics required to make these libraries robust enough to support a distributed, reactive UI framework, while keeping them strictly generalized and decoupled from the UI layer itself.

# **Part 1: Lodum API Specification**

**Objective:** Evolve Lodum into a deterministic serialization/deserialization engine capable of handling memory buffers and explicit reactive container types safely across thread boundaries.

### **1\. Zero-Copy Buffer Extraction & Normalization**

**The Change:** lodum.asdict() must safely extract and normalize buffer protocols (memoryview, bytearray, bytes, and NumPy arrays) into a standard representation (e.g., passing them through as raw JavaScript ArrayBuffer or Uint8Array equivalents via Pyodide's FFI) *without* modifying or corrupting the caller's local Python references.  
**Why it is needed:** In data-heavy applications (like charting or spreadsheet grids), workers will compute large matrices or binary chunks. Lodum must serialize these seamlessly so Papercup can pass them via postMessage.

### **2\. Explicit Subclass Reconstitution (The `ConfigDict` Pattern)**

**The Change:** `lodum.fromdict(cls, data)` must support the instantiation of explicitly typed wrappers that inherit from standard collections (e.g., custom subclasses of `collections.UserDict` or `collections.UserList`), as well as nested `@dataclass` structures.

**Why it is needed:** This is required to prevent **whole-object snapshot transfers** across the RPC boundary. If a dynamic mapping is typed merely as `dict`, Papercup and Lodum will hand the Pyodide worker a plain, local Python dictionary. If the worker changes a single nested string, it must serialize and send the *entire* dictionary back to the main thread to apply the update.

By explicitly typing fields (e.g., `metadata: ConfigDict`), `typing.get_type_hints` instructs Lodum and Papercup to respect the explicit type. This enables the worker to hold a proxy to the explicit `ConfigDict`, allowing it to perform fine-grained, in-place mutations (e.g., `remote_config["theme"] = "dark"`). Papercup can then send a lightweight, key-level `MSG_SET` across the wire, saving massive serialization overhead and CPU cycles on every interaction.

# **Part 2: Papercup API Specification**

**Objective:** Evolve Papercup into a highly predictable, strongly-typed RPC transport layer that respects async lifecycles (cancellations) and memory ownership (transfers).

### **1\. Explicit Buffer Transfer Control (papercup.transfer)**

**The Change:** Remove any implicit or automatic transferring of ArrayBuffer objects in the postMessage payload. Introduce an explicit wrapper primitive, papercup.transfer(val, \[buffers\]).  
`# Worker code returning a large payload:`  
`def get_chart_data():`  
    `data = compute_massive_array()`  
    `# Explicitly detach the buffer and transfer ownership to the main thread`  
    `return papercup.transfer(data, [data.memoryview])` 

**Why it is needed:** In JavaScript/Web Workers, transferring a buffer detaches it from the sender's memory space, leaving the sender with an empty buffer of byte-length 0\. If Papercup does this automatically, local Python variables inside the worker will silently become corrupted or empty after a return statement. Transferring ownership must be an explicit, conscious developer choice.

### **2\. Typed Remote Proxies (wrap\_as\[Protocol\])**

**The Change:** Provide a generic typing wrapper for RemoteProxy objects so developers can cast the dynamic RPC proxy to a statically defined Protocol or ABC.  
`from typing import Protocol`  
`from papercup import wrap_as`

`class DataEngine(Protocol):`  
    `async def apply_filter(self, category: str) -> dict: ...`

`# Cast the dynamic proxy for IDE support`  
`worker_api = wrap_as[DataEngine](papercup_proxy)`

`# IDE now provides autocomplete, and Mypy catches type errors here:`  
`result = await worker_api.apply_filter("Active")`

**Why it is needed:** Because Papercup proxies resolve methods dynamically via \_\_getattr\_\_, they represent a black hole to static analysis tools (mypy, pyright) and IDEs. Without this, developers get zero autocomplete when calling worker methods, destroying the Developer Experience.

### **3\. Asynchronous Task Cancellation Propagation**

**The Change:** If a caller on the main thread cancels a pending Papercup RPC future (e.g., task.cancel()), Papercup must trap the asyncio.CancelledError, send an out-of-band MSG\_CANCEL to the worker, and the worker's EndpointHandler must call .cancel() on the corresponding executing task.  
**Why it is needed:** If a user rapidly drags a slider from 0 to 100, the UI thread will dispatch dozens of heavy computation requests to the worker. To prevent the worker's event loop from suffocating under stale requests, the UI framework's OptimisticAction engine will cancel in-flight requests when a new one arrives. Papercup must bridge this cancellation across the thread boundary.

### **4\. Precise Exception Serialization & Re-Raising**

**The Change:** When an exposed method in the worker raises an exception (e.g., ValueError("Filter yields empty set")), Papercup must catch it, serialize the error type and message, and explicitly raise a RemoteExecutionError (or a dynamic equivalent) on the caller's side, attaching the original message.  
`try:`  
    `await worker_api.apply_filter("Invalid")`  
`except papercup.RemoteExecutionError as e:`  
    `print(f"Worker rejected transaction: {e}")`

**Why it is needed:** This is the linchpin of the **Transactional Optimistic UI** model. The Pyodide worker acts as the source of domain truth. If a UI component requests an invalid state transition, the worker must be able to reject it using standard Python exceptions. Papercup must ferry that exception back to the main thread so the UI can execute a rollback and show the user an error toast.