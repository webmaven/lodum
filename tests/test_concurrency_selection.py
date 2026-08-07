import sys

from lodum import concurrency


def test_concurrency_selection_logic():
    # Verify that IS_WASM is correctly detected
    expected_wasm = sys.platform == "emscripten"
    assert concurrency.IS_WASM == expected_wasm

    if concurrency._USE_NATIVE:
        import threading

        # Verify that we are indeed using native threading
        assert concurrency.Thread is threading.Thread
        assert concurrency.Lock is threading.Lock
        assert concurrency.RLock is threading.RLock
        assert concurrency.local is threading.local
        # WorkerThread should be an alias for Thread in native mode
        assert concurrency.WorkerThread is threading.Thread
    else:
        # Verify we are using the shims
        assert issubclass(concurrency.Thread, concurrency.SequentialThread)
        assert concurrency.Lock is concurrency.DummyLock
        assert concurrency.RLock is concurrency.DummyRLock
        assert concurrency.local is concurrency.DummyLocal


def test_worker_thread_import_alias():
    # from lodum.concurrency import WorkerThread as Thread
    from lodum.concurrency import WorkerThread as Thread

    assert Thread is concurrency.WorkerThread
