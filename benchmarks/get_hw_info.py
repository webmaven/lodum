import platform
import os
import subprocess
import json
import sys

        print(f"Initialized hardware signature for {platform.system()} at {filename}")
    elif "--check" in sys.argv:
        filename = f"benchmarks/metadata/hardware_{platform.system().lower()}.json"
        if not os.path.exists(filename):
            print(f"⚠️ No reference hardware found at {filename}. Use --init to create one.")
            sys.exit(0)
            
        with open(filename, "r") as f:
            ref = json.load(f)
        
        # Compare OS family and CPU model
        if info["processor"] != ref["processor"] or info["os"] != ref["os"]:
            print("❌ HARDWARE CHANGE DETECTED!")
            print(f"Current:   {info['processor']} ({info['os']})")
            print(f"Reference: {ref['processor']} ({ref['os']})")
            print("\nAction required: Run historical benchmarks to update baseline, then run with --init to update signature.")
            sys.exit(1)
        else:
            print(f"✅ Hardware matches reference: {info['processor']} ({info['os']})")