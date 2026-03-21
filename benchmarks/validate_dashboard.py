import json
import sys
from pathlib import Path

def validate_dashboard():
    success = True
    root = Path(__file__).parent.parent
    data_js_path = root / "benchmarks" / "data.js"
    index_html_path = root / "benchmarks" / "index.html"

    print("--- Dashboard Integrity Check ---")

    # 1. Check index.html points to correct production data.js
    if index_html_path.exists():
        content = index_html_path.read_text()
        if 'src="./data.js"' not in content and 'src="data.js"' not in content:
            print("ERROR: index.html does not point to production './data.js'")
            success = False
        else:
            print("OK: index.html points to production data.js")
    else:
        print("ERROR: benchmarks/index.html not found")
        success = False

    # 2. Check data.js structure and consistency
    # Note: data.js is window.BENCHMARK_DATA = {...};
    if data_js_path.exists():
        content = data_js_path.read_text()
        try:
            json_str = content[content.find('{'):content.rfind('}')+1]
            data = json.loads(json_str)
            
            # Check required keys
            for key in ["entries", "history", "tags"]:
                if key not in data:
                    print(f"ERROR: data.js missing key: {key}")
                    success = False
            
            if success:
                history_len = len(data["history"])
                entry_ids = set()
                for suite in data["entries"].values():
                    for p in suite:
                        entry_ids.add(p["commit"]["id"])
                
                # Check for empty history
                if history_len == 0:
                    print("ERROR: data.js history is empty")
                    success = False
                
                # Check that history includes the data we have
                missing_in_history = [entry_id for entry_id in entry_ids if entry_id not in data["history"]]
                if missing_in_history:
                    print(f"ERROR: data.js history is missing {len(missing_in_history)} entries found in data")
                    success = False
                
                # STRICT CHECK: Check that EVERY SHA in history has corresponding data OR is tagged (prevents bloat)
                # Tags are considered significant even if benchmarking failed for them.
                tag_shas = set(data.get("tags", {}).keys())
                extra_in_history = [sha for sha in data["history"] if sha not in entry_ids and sha not in tag_shas]
                if extra_in_history:
                    print(f"ERROR: data.js history contains {len(extra_in_history)} bloated entries with no data and no tags")
                    success = False
                
                if success:
                    print(f"OK: data.js validated ({history_len} history points, {len(entry_ids)} unique entries, {len(tag_shas)} tags)")
                
        except Exception as e:
            print(f"ERROR: Failed to parse data.js: {e}")
            success = False
    else:
        # If it doesn't exist yet, we might be in a fresh CI run before deployment
        # But for production gh-pages it MUST exist.
        print("WARNING: benchmarks/data.js not found locally (expected if not yet pulled from gh-pages)")

    if not success:
        print("--- VALIDATION FAILED ---")
        sys.exit(1)
    
    print("--- VALIDATION SUCCESSFUL ---")

if __name__ == "__main__":
    validate_dashboard()
