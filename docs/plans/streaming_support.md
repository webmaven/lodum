# Streaming Support & Polymorphic API Implementation Plan

## Overview
This plan details the implementation of high-efficiency streaming and the unification of the Lodum API. The goal is to provide a "Serde-style" experience where `load`, `dump`, and `stream` are the only functions a developer needs to know, regardless of data source or format.

## Architectural Pillars

1.  **Polymorphism**: Functions must be source-aware. `load(cls, source)` accepts `str`, `bytes`, `IO`, or `Path`.
2.  **Decentralization**: Each format module (JSON, MsgPack, etc.) is an autonomous implementation of the "Lodum Protocol."
3.  **Lazy Evaluation**: The `stream()` function provides an iterator-based alternative to `load()` for horizontal scale.

## Phase 1: Polymorphic Deserialization & Lazy Streams (Completed)

### Objectives
- [x] Standardize on `load(cls, source)` across all formats.
- [x] Implement `stream(cls, source)` for JSON (via `ijson`) and binary formats.
- [x] Create internal IO helpers (`_resolve_source`, `_resolve_target`) in `internal.py`.
- [x] Consolidate `loads`/`load_stream` into the new unified API.

### Technical Implementation
*   **JSON**: Uses `ijson.items(src, "item")` to yield objects from a top-level array.
*   **MsgPack/CBOR/BSON**: Leverages underlying library unpackers/iterators to yield concatenated objects.
*   **Safety**: All parsing errors are wrapped in Lodum's `DeserializationError`.

---

## Phase 2: Streaming Serialization (`dump` to target)

### Overview
The goal of this phase is to extend the `dump(obj, target)` API to support true memory-efficient streaming. Currently, `dump` to a target often materializes the intermediate dictionary in memory before writing.

**Detailed Design**: See [**Streaming Dump Specification (Phase 2)**](streaming_dump.md).

### Objectives
1.  **Direct Stream Writing**: Modify the AST-compiled dump handlers to write chunks directly to an IO target when provided, bypassing the intermediate Python `dict`.
2.  **Collection Streaming**: Implement a way to dump large iterables of objects efficiently.

---

## Phase 3: Async Integration (`aload`, `adump`, `astream`)

### Overview
Provide native support for `asyncio` streams (e.g., loading from an `aiohttp` response or dumping to an `aiofiles` handle).

### Objectives
1.  **`aload(cls, source)`**: Awaits data from an async stream.
2.  **`astream(cls, source)`**: Returns an `AsyncIterator`.
3.  **`adump(obj, target)`**: Awaits writes to an async target.

---

## Verification Criteria
- [ ] **Throughput**: `stream()` must maintain >10MB/s throughput on standardized XL datasets.
- [ ] **Memory**: `stream()` and `dump(target=...)` must maintain near-constant peak memory regardless of dataset size.
- [ ] **Parity**: All formats must implement the 3-function protocol (`load`, `dump`, `stream`).
