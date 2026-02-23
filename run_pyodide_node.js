const { loadPyodide } = require("pyodide");
const fs = require("fs");
const path = require("path");

async function main() {
  const isBenchmark = process.argv.includes("--benchmark");
  const outputFile = process.argv.find(arg => arg.startsWith("--output="))?.split("=")[1];
  
  if (!isBenchmark) {
    console.log("Starting Pyodide...");
  }
  
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

  if (!isBenchmark) {
    console.log(`Installing ${wheelName} and dependencies...`);
  }
  
  // Install lodum and dependencies
  // We try to install pydantic but don't fail if it's not available in this env
  try {
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
        "ijson",
        "marshmallow",
        "pydantic"
      ]);
  } catch (err) {
    if (!isBenchmark) console.warn("Optional dependencies failed to install, retrying with core only...");
    await micropip.install([`emfs:${wheelName}`, "pytest", "ijson"]);
  }

  if (isBenchmark) {
    // Copy benchmark scripts
    pyodide.FS.mkdir("benchmarks");
    const benchDir = path.join(__dirname, "benchmarks");
    const benchFiles = fs.readdirSync(benchDir).filter(f => f.endsWith(".py"));
    for (const file of benchFiles) {
      const data = fs.readFileSync(path.join(benchDir, file));
      pyodide.FS.writeFile(path.join("benchmarks", file), data);
    }
    
    if (fs.existsSync(path.join(benchDir, "models.py"))) {
        const data = fs.readFileSync(path.join(benchDir, "models.py"));
        pyodide.FS.writeFile(path.join("benchmarks", "models.py"), data);
    }

    // Run benchmarks and return JSON string
    try {
      const jsonResult = await pyodide.runPythonAsync(`
import sys
import os
import json
import io
from contextlib import redirect_stdout

sys.path.append(os.getcwd())

from benchmarks.run import run_all

f = io.StringIO()
with redirect_stdout(f):
    sys.argv = ["benchmarks/run.py", "--json", "--use-baselines"]
    run_all()

f.getvalue()
      `);
      
      if (outputFile) {
        fs.writeFileSync(outputFile, jsonResult);
      } else {
        process.stdout.write(jsonResult);
      }
      process.exit(0);
    } catch (err) {
      console.error("Benchmark execution failed:");
      console.error(err);
      process.exit(1);
    }
    return;
  }

  // --- Standard Test Runner Path ---
  console.log("Copying tests...");
  pyodide.FS.mkdir("tests");
  const testsDir = path.join(__dirname, "tests");
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

if "${process.env.PYODIDE_SHARED_MEMORY || ''}" == "1":
    os.environ["PYODIDE_SHARED_MEMORY"] = "1"

ignore_args = [
    "--ignore=tests/test_polars.py",
    "--ignore=tests/test_yaml.py",
    "--ignore=tests/test_bson.py",
    "-k not bson and not test_format_parity_bytes",
]

try:
    retcode = pytest.main(["tests"] + ignore_args)
except SystemExit as e:
    retcode = e.code

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
