# Interactive Demo

Try `lodum` directly in your browser! This demo uses [Pyodide](https://pyodide.org/) to run a full Python environment in your browser with zero installation.

<div id="demo-container" style="border: 1px solid #ccc; padding: 15px; border-radius: 8px; background: #f9f9f9;">
    <div style="margin-bottom: 10px;">
        <strong>Python Code:</strong>
        <textarea id="python-code" style="width: 100%; height: 250px; font-family: monospace; padding: 10px; border: 1px solid #ddd; border-radius: 4px;">
from lodum import lodum, json
from dataclasses import dataclass
import numpy as np

@lodum
@dataclass
class Point:
    name: str
    coords: np.ndarray

# Create an object with a NumPy array
p = Point(name="Origin", coords=np.array([0.0, 0.0, 0.0]))

# Serialize to JSON (NumPy handled natively!)
json_data = json.dumps(p)
print(f"JSON Output:\n{json_data}\n")

# Deserialize back
new_point = json.loads(Point, json_data)
print(f"Deserialized Coords: {new_point.coords}")
print(f"Type: {type(new_point.coords)}")
        </textarea>
    </div>
    <button id="run-button" style="padding: 10px 20px; background: #fbc929; border: none; border-radius: 4px; cursor: pointer; font-weight: bold; color: #1e1e1e;">
        Run Code
    </button>
    <div id="status" style="margin-top: 10px; font-style: italic; color: #666;">
        Initializing Pyodide...
    </div>
    <div style="margin-top: 15px;">
        <strong>Output:</strong>
        <pre id="output" style="background: #1e1e1e; color: #f8f8f2; padding: 15px; border-radius: 4px; min-height: 100px; white-space: pre-wrap; word-break: break-all;"></pre>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/pyodide/v0.27.2/full/pyodide.js"></script>
<script>
    const outputElement = document.getElementById('output');
    const statusElement = document.getElementById('status');
    const runButton = document.getElementById('run-button');
    const codeArea = document.getElementById('python-code');

    let pyodide;

    async function init() {
        runButton.disabled = true;
        try {
            statusElement.textContent = "Loading Pyodide...";
            pyodide = await loadPyodide({
                indexURL: "https://cdn.jsdelivr.net/pyodide/v0.27.2/full/"
            });
            statusElement.textContent = "Loading dependencies (micropip, lodum)...";
            await pyodide.loadPackage("micropip");
            const micropip = pyodide.pyimport("micropip");
            
            // Install lodum and WASM-safe dependencies.
            await micropip.install(["lodum", "cbor2", "msgpack", "tomli", "tomli-w", "numpy", "pandas"]);
            
            statusElement.textContent = "Ready!";
            runButton.disabled = false;
        } catch (err) {
            statusElement.textContent = "Initialization failed: " + err.message;
            console.error(err);
        }
    }

    async function runCode() {
        const code = codeArea.value;
        outputElement.textContent = "";
        statusElement.textContent = "Running...";
        
        try {
            // Redirect stdout to our output element
            pyodide.setStdout({
                batched: (str) => {
                    outputElement.textContent += `${str}\n`;
                }
            });
            
            await pyodide.runPythonAsync(code);
            statusElement.textContent = "Success!";
        } catch (err) {
            outputElement.textContent += `\nError:\n${err.message}`;
            statusElement.textContent = "Failed.";
        }
    }

    runButton.addEventListener('click', runCode);
    init();
</script>

## How it works
This page loads the official `Pyodide` distribution and uses `micropip` to install `lodum` directly into your browser's memory. No data is sent to a server; all serialization and deserialization happen locally in your browser.
