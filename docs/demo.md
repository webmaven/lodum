# Interactive Demo

Try `lodum` directly in your browser! This demo uses [Pyodide](https://pyodide.org/) to run a full Python environment in your browser with zero installation.

<div id="demo-container" style="border: 1px solid #ccc; padding: 15px; border-radius: 8px; background: #f9f9f9;">
    <div style="margin-bottom: 10px;">
        <strong>Python Code:</strong>
        <textarea id="python-code" style="width: 100%; height: 250px; font-family: monospace; padding: 10px; border: 1px solid #ddd; border-radius: 4px;">
from lodum import lodum, json, yaml
from dataclasses import dataclass

@lodum
@dataclass
class User:
    name: str
    age: int
    is_active: bool

# Create an object
user = User(name="Alex", age=30, is_active=True)

# Serialize to JSON
json_data = json.dumps(user)
print(f"JSON Output:\n{json_data}\n")

# Serialize to YAML
yaml_data = yaml.dumps(user)
print(f"YAML Output:\n{yaml_data}")

# Deserialize back
new_user = json.loads(User, json_data)
print(f"\nDeserialized: {new_user}")
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
            pyodide = await loadPyodide();
            statusElement.textContent = "Loading dependencies (micropip, lodum)...";
            await pyodide.loadPackage("micropip");
            const micropip = pyodide.pyimport("micropip");
            
            // Install lodum and its common dependencies
            // We use the version currently on PyPI. 
            await micropip.install(["lodum[all]"]);
            
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
                    outputElement.textContent += str + "\n";
                }
            });
            
            await pyodide.runPythonAsync(code);
            statusElement.textContent = "Success!";
        } catch (err) {
            outputElement.textContent += "\nError:\n" + err.message;
            statusElement.textContent = "Failed.";
        }
    }

    runButton.addEventListener('click', runCode);
    init();
</script>

## How it works
This page loads the official `Pyodide` distribution and uses `micropip` to install `lodum` directly into your browser's memory. No data is sent to a server; all serialization and deserialization happen locally in your browser.
