# **Product Requirements Document (PRD): Pyodide Performance Telemetry Suite**

## **1\. Overview & Problem Statement**

The objective is to establish a rigorous, reproducible, automated performance benchmarking suite for lodum (Python-native reactive state serialization via dynamically compiled ASTs) and papercup (the RPC bridge to JavaScript).  
Benchmarking WebAssembly (Wasm) inside a browser on a shared GitHub Actions runner introduces massive environmental noise (noisy neighbor CPU throttling, garbage collection pauses, V8 tier-up behavior). Traditional mean-based benchmarking fails in this environment. We require a system that produces statistically trustworthy, actionable data to validate optimizations and prevent performance regressions, without manual intervention.

## **2\. Goals & Non-Goals**

* **Goal:** Measure the exact cold-start latency of lodum AST compilation.  
* **Goal:** Measure the warm-state throughput (objects serialized/deserialized per second).  
* **Goal:** Automatically detect statistically significant performance regressions (or improvements) in Pull Requests.  
* **Goal:** Isolate pure Python bytecode performance from the JS/Python FFI bridge overhead.  
* **Non-Goal:** Achieving perfectly identical absolute execution times across different CI runs. (We are measuring relative performance).

## **3\. Key Target Metrics**

> 1. **Cold-Start Time (ms):** The time taken to construct, compile, and execute a lodum serializer for a new dataclass for the first time.  
> 2. **Warm Throughput (ops/sec):** The sustained serialization rate after 5,000 warm-up loops (ensuring V8 TurboFan has fully optimized the Wasm execution).  
> 3. **Bridge Latency (ms):** The round-trip time for a payload crossing the papercup boundary.

## **4\. The Testing Scenarios (Environment Search)**

We will run tests across two distinct environments to capture both raw potential and real-world friction:

* **Scenario A: The Sterile Node.js Baseline.** Runs Pyodide in Node.js. No browser rendering engine, no CSS repaints, no DOM garbage collection. This provides the theoretical maximum speed limit of the bytecode.  
* **Scenario B: The Headless Playwright Browser.** Runs Pyodide in headless Chrome. This subjects the bytecode to realistic CPU contention, event-loop starvation, and "noisy neighbor" browser overhead.

# **Technical Specification: Statistical Benchmarking Framework**

## **1\. Core Architecture**

The suite will operate using an **A/B Interleaved Execution Engine** to neutralize environmental bias.  
Instead of running main in one runner and the PR branch in another, the harness will load both versions of lodum into the *same* runtime, in the *same* process, and alternate execution (main \-\> PR \-\> main \-\> PR). If the GitHub Action runner gets throttled, the penalty applies symmetrically.

## **2\. Overcoming Playwright IPC Overhead**

When running in Playwright, every command sent between the Node test-runner and the browser incurs a WebSocket Inter-Process Communication (IPC) overhead.

* **Constraint:** If we trigger a 1ms Python function from Playwright, the 5ms IPC round-trip will swallow the metric.  
* **Implementation:** We must bypass Playwright's IPC for the actual measurement. The harness will use page.evaluate() to inject a self-contained JavaScript/Pyodide benchmarking loop directly into the browser context. The browser will execute the interleaved loops, calculate the timings locally via performance.now(), and return only the final aggregated array of metrics to Playwright.

## **3\. The Payload Matrix**

To ensure optimizations do not introduce hidden cliffs, the harness will test three distinct payload shapes:

> 1. **Flat & Wide:** An @observable dataclass with 50 primitive attributes (ints/floats) to test attribute access and flat memory packing.  
> 2. **Deeply Nested:** A class nested 5 levels deep to test AST recursion limits and stack overhead.  
> 3. **The Heavy Chunk:** A payload containing a 5MB bytearray to test zero-copy ArrayBuffer boundaries across the FFI.

## **4\. The Statistical Engine**

Standard averages (means) are fundamentally broken in browser benchmarking due to garbage collection spikes. The suite will use **Robust Non-Parametric Statistics**:

* **Central Tendency:** Median (not Mean).  
* **Variance:** Median Absolute Deviation (MAD) to quantify the spread while ignoring 500ms GC outlier pauses.  
* **Hypothesis Testing:** [Mann-Whitney U Test](https://en.wikipedia.org/wiki/Mann%E2%80%93Whitney_U_test). This test does not assume normal distribution. It ranks all execution times from both main and the PR, and determines the mathematical probability ($p$-value) that the PR branch is genuinely faster.

# **Gradual Implementation Plan**

## **Phase 1: The Sterile Node.js Baseline (Weeks 1\)**

* **Focus:** Isolate lodum from the browser.  
* **Tasks:**  
  * Write a Node.js script that initializes Pyodide.  
  * Implement the Payload Matrix (Flat, Deep, Heavy).  
  * Implement the Warm-up Loop (5,000 iterations to trigger V8 tier-up) before starting the timer.  
  * Record raw time.perf\_counter() arrays for cold-starts and warm throughput.

## **Phase 2: The Statistical Analysis Engine (Week 2\)**

* **Focus:** Mathematical rigor.  
* **Tasks:**  
  * Implement a Python (or JS) script to process the raw output arrays.  
  * Calculate Median and MAD.  
  * Implement the scipy.stats.mannwhitneyu function (or equivalent) to compare two datasets.  
  * Output a structured JSON report (e.g., {"improvement": "+14%", "p\_value": 0.001, "significant": true}).

## **Phase 3: The Playwright Browser Integration (Week 3\)**

* **Focus:** Real-world execution and FFI bridge metrics.  
* **Tasks:**  
  * Set up a Playwright headless Chrome fixture.  
  * Implement the page.evaluate() injection to run the benchmark inside the browser context, dodging the IPC WebSocket overhead.  
  * Add papercup bridge latency tests using the "FFI Sandwich" method (measuring JS time minus internal Python time).

## **Phase 4: GitHub Actions & Continuous Benchmarking (Week 4\)**

* **Focus:** CI/CD Automation.  
* **Tasks:**  
  * Create a GitHub Actions workflow that runs on PRs.  
  * The workflow pulls the main branch, builds it, builds the PR branch, and passes both artifacts to the A/B Interleaved Engine.  
  * Use a GitHub Action tool (like github-script) to post a PR comment with the statistical results, immediately flagging if a bytecode tweak caused a rank-reversal or regression under browser load.