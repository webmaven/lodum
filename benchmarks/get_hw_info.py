import json
import os
import platform
import subprocess
import sys

def get_cpu_info():
    try:
        if platform.system() == "Windows":
            # Use PowerShell as wmic is deprecated and sometimes missing
            command = 'powershell -Command "(Get-CimInstance Win32_Processor).Name"'
            return subprocess.check_output(command, shell=True).decode().strip()
        elif platform.system() == "Linux":
            with open("/proc/cpuinfo", "r") as f:
                for line in f:
                    if "model name" in line:
                        return line.split(":")[1].strip()
        elif platform.system() == "Darwin":
            return subprocess.check_output(["sysctl", "-n", "machdep.cpu.brand_string"]).decode().strip()
    except Exception:
        return "Unknown CPU"
    return "Unknown CPU"

def main():
    if "--init" in sys.argv:
        info = {
            "system": platform.system(),
            "cpu": get_cpu_info(),
            "machine": platform.machine()
        }
        filename = f"benchmarks/metadata/hardware_{platform.system().lower()}.json"
        os.makedirs("benchmarks/metadata", exist_ok=True)
        with open(filename, "w") as f:
            json.dump(info, f, indent=2)
        print(f"Initialized hardware signature for {platform.system()} at {filename}")
    elif "--check" in sys.argv:
        filename = f"benchmarks/metadata/hardware_{platform.system().lower()}.json"
        if not os.path.exists(filename):
            print(f"Warning: Baseline hardware file {filename} not found. Skipping check.")
            return
        
        with open(filename, "r") as f:
            baseline = json.load(f)
        
        current = {
            "system": platform.system(),
            "cpu": get_cpu_info(),
            "machine": platform.machine()
        }
        
        if current != baseline:
            print("HARDWARE CHANGE DETECTED!")
            print(f"Baseline: {baseline}")
            print(f"Current:  {current}")
            if os.environ.get("ALLOW_HW_MISMATCH") == "1":
                print("WARNING: Hardware mismatch ignored due to ALLOW_HW_MISMATCH=1")
            else:
                # Exit with error to block benchmark run on mismatched hardware
                sys.exit(1)
        else:
            print(f"Hardware validation successful: {current['cpu']}")

if __name__ == "__main__":
    main()
