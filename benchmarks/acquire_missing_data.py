import json
import subprocess
import sys
import os
from pathlib import Path

def run_command(cmd, cwd=None):
    """Utility to run a shell command and return its output."""
    try:
        return subprocess.check_output(cmd, shell=True, text=True, stderr=subprocess.STDOUT, cwd=cwd)
    except subprocess.CalledProcessError as e:
        print(f"Error running command '{cmd}': {e.output}")
        return None

def acquire_data(target_shas_path, output_dir, limit=5):
    """
    Iterates through SHAs, checks them out, runs benchmarks, and saves results.
    """
    output_dir = Path(output_dir)
    with open(target_shas_path, "r") as f:
        shas = [line.strip() for line in f if line.strip()]
    
    # Save current branch/SHA to return later
    original_ref = run_command("git rev-parse --abbrev-ref HEAD").strip()
    if original_ref == "HEAD":
        original_ref = run_command("git rev-parse HEAD").strip()
    
    print(f"Acquiring data for up to {limit} SHAs. Original ref: {original_ref}")
    
    count = 0
    for sha in shas:
        if count >= limit: break
        
        sha_dir = output_dir / sha
        # Check if we already have some data for this SHA
        if sha_dir.exists() and any(sha_dir.glob("*.json")):
            print(f"Skipping {sha} (already has data)")
            continue
            
        print(f"\n--- Processing SHA: {sha} ---")
        
        # 1. Checkout SHA
        if run_command(f"git checkout {sha}") is None:
            print(f"Failed to checkout {sha}, skipping.")
            continue
            
        # 2. Run Benchmarks
        # We use the venv's python and ensure PYTHONPATH includes src
        # Note: Older SHAs might have src in different places or different benchmark logic,
        # but since we've reconstructed main from 0.3.0, they should be fairly consistent.
        print(f"Running benchmarks for {sha}...")
        
        # Standard Benchmarks
        res_standard = run_command("POLARS_SKIP_CPU_CHECK=1 PYTHONPATH=src:. venv/bin/python3 benchmarks/run.py --json")
        if res_standard:
            try:
                payload = json.loads(res_standard)
                sha_dir.mkdir(parents=True, exist_ok=True)
                with open(sha_dir / "ubuntu-latest.json", "w") as f:
                    json.dump(payload, f, indent=2)
                print(f"Saved standard results for {sha}")
            except Exception as e:
                print(f"Failed to parse standard results for {sha}: {e}")
        
        # Streaming Benchmarks (if applicable)
        if Path("benchmarks/streaming.py").exists():
            print(f"Running streaming benchmarks for {sha}...")
            res_streaming = run_command("POLARS_SKIP_CPU_CHECK=1 PYTHONPATH=src:. venv/bin/python3 benchmarks/streaming.py --json")
            if res_streaming:
                try:
                    # Note: We might want to merge this or save it separately.
                    # Current merge_data.py expects individual files.
                    # For now, let's just save it as a separate file if we want,
                    # but typically they are merged into one platform file.
                    # Actually, benchmarks/run.py might already include everything if updated.
                    # But if not, we can save streaming results too.
                    # Let's see if run.py output already has it.
                    pass
                except: pass

        count += 1
        
    # Return to original ref
    print(f"\nReturning to original ref: {original_ref}")
    run_command(f"git checkout {original_ref}")
    print(f"Acquisition complete. Processed {count} SHAs.")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python3 acquire_missing_data.py <missing_shas.txt> <output_dir> [limit]")
        sys.exit(1)
    
    limit = 5
    if len(sys.argv) > 3:
        limit = int(sys.argv[3])
        
    acquire_data(sys.argv[1], sys.argv[2], limit)
