import os
import sys
import typing
import warnings

# --- Detection ---
IS_WASM = sys.platform == "emscripten"

try:
    import threading  # noqa: F401

    _HAS_THREADING = True
except ImportError:
    _HAS_THREADING = False


def _can_use_native_threads():
    if not _HAS_THREADING:
        return False
    if IS_WASM:
        # In Pyodide, threading exists but start() raises RuntimeError
        # unless SharedArrayBuffer is enabled (Cross-Origin Isolated).
        # We first check for the PYODIDE_SHARED_MEMORY env var.
        if os.environ.get("PYODIDE_SHARED_MEMORY") != "1":
            return False

        # Even if the env var is set, verify it actually works.
        # This prevents crashes in environments that claim to support
        # shared memory but restrict thread spawning (like some Node.js setups).
        try:
            import threading

            success = False

            def probe():
                nonlocal success
                success = True

            t = threading.Thread(target=probe)
            t.start()
            t.join(timeout=0.1)
            return success
        except (RuntimeError, ImportError):
            return False
    return True


_USE_NATIVE = _can_use_native_threads()

# --- Faux Implementations ---


class SequentialThread:
    """A faux thread that executes the target immediately on the current thread."""

    def __init__(
        self, group=None, target=None, name=None, args=(), kwargs=None, *, daemon=None
    ):
        self.target = target
        self.args = args
        self.kwargs = kwargs or {}
        self.name = name
        self.daemon = daemon
        self._started = False
        self._finished = False

    def start(self):
        if self._started:
            raise RuntimeError("Thread already started")

        warnings.warn(
            f"Thread '{self.name or 'unnamed'}' is being executed sequentially "
            "because native threading is not available in this environment.",
            RuntimeWarning,
            stacklevel=2,
        )

        self._started = True
        if self.target:
            self.target(*self.args, **self.kwargs)
        self._finished = True

    def join(self, timeout=None):
        pass

    def is_alive(self):
        return self._started and not self._finished


class WorkerThread(SequentialThread):
    """
    A faux thread intended to use Web Workers or Node worker_threads.

    Note: Full implementation requires a complex JS bridge to bootstrap a
    new Pyodide environment in the worker. This currently serves as a
    placeholder that executes sequentially to maintain compatibility.
    """

    def start(self):
        # TODO: Implement actual Worker spawning when state-sharing is not required.
        super().start()


class DummyLock:
    """A reentrant lock that does nothing, safe for single-threaded environments."""

    def acquire(self, blocking=True, timeout=-1):
        return True

    def release(self):
        pass

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        pass


class DummyRLock(DummyLock):
    pass


class DummyLocal:
    """A thread-local storage that is actually just a single-threaded object."""

    def __init__(self):
        # We use __dict__ to avoid infinite recursion if subclasses use __setattr__
        self.__dict__["_storage"] = {}

    def __getattr__(self, name):
        try:
            return self._storage[name]
        except KeyError:
            raise AttributeError(
                f"'{type(self).__name__}' object has no attribute '{name}'"
            )

    def __setattr__(self, name, value):
        self._storage[name] = value


# --- API Selection ---

if _USE_NATIVE:
    from threading import Lock as Lock
    from threading import RLock as RLock
    from threading import Thread as Thread
    from threading import local as local

    # In native environments, WorkerThread is just an alias for native Thread

    WorkerThread: typing.Any = Thread  # type: ignore[no-redef]

else:
    # Fallback to faux implementation

    def _is_worker_available():

        if not IS_WASM:
            # We could check for multiprocessing or Node worker_threads here,

            # but usually native threading is available on these platforms.

            return False

        try:
            import js  # type: ignore[import-not-found]

            # Browser environment

            if hasattr(js, "Worker"):
                return True

            # Node environment

            try:
                js.require("worker_threads")

                return True

            except Exception:
                return False

        except (ImportError, AttributeError):
            return False

    Lock = DummyLock  # type: ignore[misc, assignment]

    RLock = DummyRLock  # type: ignore[misc, assignment]

    local = DummyLocal  # type: ignore[misc, assignment]

    if _is_worker_available():
        # WorkerThread is provided as a class that users can import

        # via: from lodum.concurrency import WorkerThread as Thread

        # For now it still uses SequentialThread logic but is distinct.

        Thread: typing.Any = WorkerThread  # type: ignore[no-redef]

    else:
        Thread = SequentialThread  # type: ignore[misc, assignment, no-redef]

        WorkerThread = SequentialThread  # type: ignore[misc, assignment, no-redef]
