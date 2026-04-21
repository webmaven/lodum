import json
import subprocess
import sys
import os
from pathlib import Path
from datetime import datetime, timezone
import argparse

def get_canonical_shas(repo_dir):
    """Returns the topologically ordered list of SHAs in 'main' from the specified repo."""
    for ref in ["main", "origin/main", "HEAD"]:
        try:
            output = subprocess.check_output(
                ["git", "rev-list", "--topo-order", "--reverse", ref],
                text=True,
                cwd=repo_dir
            )
            shas = output.splitlines()
            if shas:
                print(f"Found {len(shas)} canonical SHAs using {ref} in {repo_dir}")
                return shas
        except Exception:
            continue
    return []

def get_tags(repo_dir, canonical_shas):
    """Returns a mapping of SHA -> Tag Name, with remapping for reconstructed history."""
    try:
        # Get all tags and their original SHAs
        output = subprocess.check_output(
            ["git", "show-ref", "--tags"],
            text=True,
            cwd=repo_dir
        )
        original_tags = {}
        for line in output.splitlines():
            parts = line.split()
            if len(parts) == 2:
                sha, ref = parts
                tag = ref.replace("refs/tags/", "")
                try:
                    commit_sha = subprocess.check_output(["git", "rev-parse", f"{tag}^{{commit}}"], text=True, cwd=repo_dir).strip()
                    original_tags[tag] = commit_sha
                except:
                    original_tags[tag] = sha
        
        # Mapping table for reconstructed history
        remapped_tags = {
            "v0.1.0": "Initial commit: add lodum serialization library",
            "v0.2.0": "chore: Prepare v0.2.0 release",
            "v0.3.0": "release: v0.3.0"
        }
        
        final_tags = {}
        
        # Get log of 'main' for message matching
        main_log = []
        for ref in ["main", "origin/main", "HEAD"]:
            try:
                main_log = subprocess.check_output(
                    ["git", "log", ref, "--format=%H|%s"],
                    text=True,
                    cwd=repo_dir
                ).splitlines()
                if main_log:
                    print(f"Using {ref} for tag resolution")
                    break
            except Exception:
                continue
        
        if not main_log:
            return {}
        
        for tag, mapping in remapped_tags.items():
            for line in main_log:
                sha, msg = line.split("|", 1)
                if mapping in msg:
                    final_tags[sha] = tag
                    break
        
        for tag, sha in original_tags.items():
            if sha in canonical_shas:
                final_tags[sha] = tag
                
        return final_tags
    except Exception as e:
        print(f"Warning: Could not resolve tags: {e}")
        return {}

def generate_dashboard(history_dir, output_file, repo_dir):
    """
    Synthesizes data.js from atomic JSON files along the canonical SHA timeline.
    """
    history_dir = Path(history_dir)
    canonical_shas = get_canonical_shas(repo_dir)
    tags = get_tags(repo_dir, canonical_shas)
    
    if not canonical_shas:
        print("Error: No canonical SHAs found. Aborting generation.")
        sys.exit(1)

    data = {
        "entries": {},
        "history": canonical_shas,
        "tags": tags,
        "lastUpdate": int(datetime.now(timezone.utc).timestamp() * 1000)
    }
    
    # Process each SHA in canonical order
    mapped_count = 0
    for sha in canonical_shas:
        sha_dir = history_dir / sha
        if not sha_dir.exists():
            continue
            
        for result_file in sha_dir.rglob("*.json"):
            platform = result_file.stem
            suite_name = f"Lodum Performance Index - {platform}"
            
            if suite_name not in data["entries"]:
                data["entries"][suite_name] = []
                
            try:
                with open(result_file, "r") as f:
                    payload = json.load(f)
                
                if "results" not in payload or "commit" not in payload:
                    continue
                    
                # Normalize results if available
                final_benches = []
                for bench in payload["results"]:
                    new_bench = bench.copy()
                    if "normalized" in bench:
                        # Use normalized value as the primary display value (as a 'virtual' microsecond)
                        # We multiply by 100 to make it readable in the charts (e.g. 0.05 -> 5.0)
                        # This doesn't change the relative performance, just the scale.
                        new_bench["value"] = bench["normalized"] * 100
                        new_bench["unit"] = "pts" # Performance Points
                        new_bench["raw_value"] = bench["value"]
                        new_bench["raw_unit"] = bench["unit"]
                    final_benches.append(new_bench)

                entry = {
                    "commit": payload["commit"],
                    "date": int(datetime.fromisoformat(payload["commit"].get("timestamp", datetime.now(timezone.utc).isoformat()).replace('Z', '+00:00')).timestamp() * 1000),
                    "tool": "customSmallerIsBetter",
                    "benches": final_benches
                }
                data["entries"][suite_name].append(entry)
                mapped_count += 1
            except Exception as e:
                print(f"Error processing {result_file}: {e}")

    # Write to data.js
    with open(output_file, "w") as f:
        f.write("window.BENCHMARK_DATA = ")
        json.dump(data, f, indent=2)
        f.write(";")
        
    print(f"Dashboard data generated: {len(canonical_shas)} total history points.")
    print(f"Mapped data for {mapped_count} platform-entries.")

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("history_dir")
    parser.add_argument("output_file")
    parser.add_argument("--repo", default=".", help="Path to the git repo for history")
    args = parser.parse_args()
    
    generate_dashboard(args.history_dir, args.output_file, args.repo)
