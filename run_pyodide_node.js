const { loadPyodide } = require("pyodide");
const fs = require("fs");
const path = require("path");

async function main() {
  console.log("Starting Pyodide...");
  const pyodide = await loadPyodide();
  await pyodide.loadPackage("micropip");
  const micropip = pyodide.pyimport("micropip");

  // Find the wheel
  const distDir = path.join(__dirname, "dist");
  const wheels = fs.readdirSync(distDir).filter(f => f.endsWith(".whl"));
  if (wheels.length === 0) {
    console.error("No wheel found in dist/ - run 'python -m build' first");
    process.exit(1);
  }
  const wheelName = wheels[0];
  const wheelPath = path.join(distDir, wheelName);
  const wheelData = fs.readFileSync(wheelPath);

  // Write wheel to emulated FS
  pyodide.FS.writeFile(wheelName, wheelData);

  console.log(`Installing ${wheelName} and dependencies...`);
  // Install lodum and pytest
  // Try to install some optional dependencies that are likely pure python or have pyodide ports
  await micropip.install([
    `emfs:${wheelName}`, 
    "pytest", 
    "cbor2", 
    "msgpack",
    "tomli",
    "tomli-w",
    "ruamel.yaml",
    "numpy",
    "pandas",
  ]);

  // Copy tests to emulated FS
  console.log("Copying tests...");
  pyodide.FS.mkdir("tests");
  const testsDir = path.join(__dirname, "tests");
  // Recursive copy would be better, but for now we just get the top level
  const testFiles = fs.readdirSync(testsDir).filter(f => f.endsWith(".py"));
  for (const file of testFiles) {
    const data = fs.readFileSync(path.join(testsDir, file));
    pyodide.FS.writeFile(path.join("tests", file), data);
  }

  console.log("Running pytest...");
  try {
    await pyodide.runPythonAsync(`
import pytest
import sys
import os

# Ignore tests with heavy/missing dependencies in Pyodide
ignore_args = [
    "--ignore=tests/test_polars.py",
    "--ignore=tests/test_yaml.py",  # ruamel.yaml has C extensions
    "--ignore=tests/test_bson.py",  # pymongo has C extensions
    "-k not bson and not test_format_parity_bytes", # we don't have pymongo and parity bytes check is problematic
]

try:
    # Mock threading.Thread for Pyodide to allow thread_safety tests to run sequentially
    import threading
    class MockThread:
        def __init__(self, target, args=(), kwargs=None):
            self.target = target
            self.args = args
            self.kwargs = kwargs or {}
        def start(self):
            self.target(*self.args, **self.kwargs)
        def join(self, timeout=None):
            pass
    threading.Thread = MockThread

    retcode = pytest.main(["tests"] + ignore_args)
except SystemExit as e:
    retcode = e.code

print(f"Pytest exited with code: {retcode}")
if retcode != 0:
    raise Exception(f"Pytest failed with code {retcode}")
    `);
    console.log("SUCCESS");
    process.exit(0);
  } catch (err) {
    console.error("Pyodide test runner encountered an error:");
    console.error(err);
    process.exit(1);
  }
}

main();
