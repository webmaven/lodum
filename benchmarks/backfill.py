import subprocess
import os
import sys
from pathlib import Path

TAGS = ["v0.1.0", "v0.2.0", "v0.3.0"]
BENCH_SCRIPT = "benchmarks/run.py"
OUTPUT_DIR = Path("benchmarks/results/standardized_baseline")


def run_cmd(cmd):
    print(f"Running: {cmd}")
    result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"Error: {result.stderr}")
    return result


def backfill():
    if not OUTPUT_DIR.exists():
        OUTPUT_DIR.mkdir(parents=True)

    original_branch = run_cmd("git rev-parse --abbrev-ref HEAD").stdout.strip()

    try:
        for tag in TAGS:
            print(f"\n--- Backfilling {tag} ---")
            run_cmd(f"git checkout {tag}")

            # Run benchmarks using current python environment but historical code
            temp_bench = "benchmarks/run_refined.py"
            run_cmd(f"git checkout {original_branch} -- {BENCH_SCRIPT}")
            os.rename(BENCH_SCRIPT, temp_bench)
            # Restore the tag's version of the script so git is clean
            run_cmd(f"git checkout {tag} -- {BENCH_SCRIPT}")

            result = run_cmd(f"PYTHONPATH=src python3 {temp_bench} --json")
            if result.returncode == 0:
                with open(OUTPUT_DIR / f"{tag}.json", "w") as f:
                    f.write(result.stdout)
                print(f"Successfully backfilled {tag}")

            if os.path.exists(temp_bench):
                os.remove(temp_bench)

    finally:
        run_cmd(f"git checkout {original_branch}")


if __name__ == "__main__":
    if "--force" in sys.argv or not any(OUTPUT_DIR.glob("*.json")):
        backfill()
    else:
        print("Backfill already exists. Use --force to rerun.")
