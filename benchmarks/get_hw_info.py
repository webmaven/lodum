import platform
import os
import subprocess
import json
import sys

            # Use PowerShell as wmic is deprecated and sometimes missing
            command = 'powershell -Command "(Get-CimInstance Win32_Processor).Name"'
            return subprocess.check_output(command, shell=True).decode().strip()
    except Exception:
        return "Unknown CPU"
    return "Unknown CPU"


if __name__ == "__main__":
    # Ensure stdout handles UTF-8 for emoji-like characters if we decide to keep them,
    # but better to just avoid them for maximum compatibility.
    info = get_hw_info()
    if "--init" in sys.argv:
        os.makedirs("benchmarks/metadata", exist_ok=True)
        filename = f"benchmarks/metadata/hardware_{platform.system().lower()}.json"
        with open(filename, "w") as f:
            json.dump(info, f, indent=2)
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