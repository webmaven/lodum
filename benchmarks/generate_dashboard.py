import json
import subprocess
from pathlib import Path
from datetime import datetime, timezone

def get_canonical_shas():
    """Returns the topologically ordered list of SHAs in 'main'."""
    try:
        output = subprocess.check_output(
            ["git", "rev-list", "--topo-order", "--reverse", "main"],
            text=True
        )
        return output.splitlines()
    except Exception as e:
        print(f"Error getting canonical SHAs: {e}")
        return []

def get_tags(canonical_shas):
    """Returns a mapping of SHA -> Tag Name, with remapping for reconstructed history."""
    try:
        # Get all tags and their original SHAs
        output = subprocess.check_output(
            ["git", "show-ref", "--tags"],
            text=True
        )
        original_tags = {}
        for line in output.splitlines():
            parts = line.split()
            if len(parts) == 2:
                sha, ref = parts
                tag = ref.replace("refs/tags/", "")
                try:
                    commit_sha = subprocess.check_output(["git", "rev-parse", f"{tag}^{{commit}}"], text=True).strip()
                    original_tags[tag] = commit_sha
                except:
                    original_tags[tag] = sha
        
        # Mapping table for reconstructed history
        # (Tag Name -> Partial Match or Specific SHA in 'main')
        remapped_tags = {
            "v0.1.0": "chore: finalize v0.1.0",
            "v0.2.0": "chore: Prepare v0.2.0 release",
            "v0.3.0": "release: v0.3.0"
        }
        
        # Resolve tags to current 'main' SHAs
        final_tags = {}
        
        # Get log of 'main' for message matching
        main_log = subprocess.check_output(
            ["git", "log", "main", "--format=%H|%s"],
            text=True
        ).splitlines()
        
        for tag, mapping in remapped_tags.items():
            # Try to find the SHA in main
            for line in main_log:
                sha, msg = line.split("|", 1)
                if mapping in msg:
                    final_tags[sha] = tag
                    break
        
        # Also include any tags that ARE in canonical_shas already
        for tag, sha in original_tags.items():
            if sha in canonical_shas:
                final_tags[sha] = tag
                
        return final_tags
    except Exception as e:
        print(f"Warning: Could not resolve tags: {e}")
        return {}

def generate_dashboard(history_dir, output_file):
    """
    Synthesizes data.js from atomic JSON files along the canonical SHA timeline.
    """
    history_dir = Path(history_dir)
    canonical_shas = get_canonical_shas()
    tags = get_tags(canonical_shas)
    
    data = {
        "entries": {},
        "history": canonical_shas,
        "tags": tags,
        "lastUpdate": int(datetime.now(timezone.utc).timestamp() * 1000)
    }
    
    # We also include tags that might not be in the direct main line but are important
    # (e.g. historical baselines we want to show)
    for sha, tag in tags.items():
        if sha not in data["history"]:
            # Check if this SHA has data. If so, we might want to include it at the start?
            # For now, we strictly follow 'main' history.
            pass

    # Process each SHA in canonical order
    for sha in canonical_shas:
        sha_dir = history_dir / sha
        if not sha_dir.exists():
            continue
            
        for result_file in sha_dir.glob("*.json"):
            platform = result_file.stem
            suite_name = f"Lodum Performance Index - {platform}"
            
            if suite_name not in data["entries"]:
                data["entries"][suite_name] = []
                
            try:
                with open(result_file, "r") as f:
                    payload = json.load(f)
                
                # Check for standard structure
                if "results" not in payload or "commit" not in payload:
                    continue
                    
                entry = {
                    "commit": payload["commit"],
                    "date": int(datetime.fromisoformat(payload["commit"].get("timestamp", datetime.now(timezone.utc).isoformat()).replace('Z', '+00:00')).timestamp() * 1000),
                    "tool": "customSmallerIsBetter",
                    "benches": payload["results"]
                }
                data["entries"][suite_name].append(entry)
            except Exception as e:
                print(f"Error processing {result_file}: {e}")

    # Write to data.js
    with open(output_file, "w") as f:
        f.write("window.BENCHMARK_DATA = ")
        json.dump(data, f, indent=2)
        f.write(";")
        
    print(f"Dashboard data generated: {len(canonical_shas)} total history points.")
    print(f"Mapped data for {sum(len(v) for v in data['entries'].values())} platform-entries.")

if __name__ == "__main__":
    import sys
    if len(sys.argv) < 3:
        print("Usage: python3 generate_dashboard.py <history_dir> <output_data.js>")
        sys.exit(1)
    generate_dashboard(sys.argv[1], sys.argv[2])
