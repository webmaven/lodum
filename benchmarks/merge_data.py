import json
import sys
from pathlib import Path
from datetime import datetime, timezone

def save_results(history_dir, artifacts_dir):
    """
    Saves new JSON benchmark results into the atomic history structure.
    history_dir: Path to benchmarks/history in gh-pages
    artifacts_dir: Path where CI uploaded new result JSONs
    """
    history_dir = Path(history_dir)
    artifacts_dir = Path(artifacts_dir)
    
    # Process all new JSON artifacts
    # The artifacts are expected to be named results-benchmark-<platform>.json
    # and contain {"commit": {...}, "results": [...]}
    artifacts = list(artifacts_dir.glob("**/*.json"))
    
    for artifact_path in artifacts:
        try:
            with open(artifact_path, "r") as f:
                payload = json.load(f)
            
            commit_info = payload.get("commit")
            new_benches = payload.get("results")
            
            if not commit_info or not new_benches:
                print(f"Skipping malformed artifact: {artifact_path}")
                continue
            
            sha = commit_info["id"]
            
            # Infer platform from full path
            path_str = str(artifact_path).lower()
            platform = "unknown"
            if "ubuntu" in path_str: platform = "ubuntu-latest"
            elif "windows" in path_str: platform = "windows-latest"
            elif "pyodide" in path_str: platform = "Pyodide"
            
            sha_dir = history_dir / sha
            sha_dir.mkdir(parents=True, exist_ok=True)
            
            output_file = sha_dir / f"{platform}.json"
            
            # Save the atomic result
            with open(output_file, "w") as f:
                json.dump(payload, f, indent=2)
                
            print(f"Saved atomic results for {sha} on {platform}")
            
        except Exception as e:
            print(f"Error processing {artifact_path}: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python3 merge_data.py <history_dir> <artifacts_dir>")
        sys.exit(1)
    save_results(sys.argv[1], sys.argv[2])
