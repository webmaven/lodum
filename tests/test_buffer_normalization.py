# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import numpy as np
import pytest
from lodum.core import BaseDumper, Dumper, BaseLoader
from lodum.internal import dump
from lodum.handlers.stdlib import _dump_bytearray
from lodum.extensions.numpy import _dump_numpy_array, _load_numpy_array, register as register_numpy


class MockCustomDumper(BaseDumper):
    def __init__(self):
        super().__init__()
        self.dump_buffer_called = False

    def dump_buffer(self, value, depth=0, seen=None):
        self.dump_buffer_called = True
        return super().dump_buffer(value, depth, seen)


class MockBufferLoader(BaseLoader):
    def __init__(self, data):
        super().__init__(data)
        self.rewound = False

    def rewind(self, marker):
        self.rewound = True
        super().rewind(marker)


def test_base_dumper_dump_buffer():
    dumper = BaseDumper()

    # bytes -> memoryview
    b_val = b"hello world"
    res_b = dumper.dump_buffer(b_val)
    assert isinstance(res_b, memoryview)
    assert bytes(res_b) == b_val

    # bytearray -> memoryview
    ba_val = bytearray(b"hello world")
    res_ba = dumper.dump_buffer(ba_val)
    assert isinstance(res_ba, memoryview)
    assert bytes(res_ba) == bytes(ba_val)

    # other values returned as-is
    arr = np.array([1, 2, 3])
    assert dumper.dump_buffer(arr) is arr
    assert dumper.dump_buffer(123) == 123


def test_dump_bytearray_uses_dump_buffer():
    dumper = MockCustomDumper()
    ba = bytearray(b"test data")
    res = _dump_bytearray(ba, dumper, 0, None)
    assert dumper.dump_buffer_called is True
    assert isinstance(res, memoryview)


def test_dump_numpy_array_uses_dump_buffer():
    dumper = MockCustomDumper()
    arr = np.array([1, 2, 3, 4, 5])
    res = _dump_numpy_array(arr, dumper, 0, None)
    assert dumper.dump_buffer_called is True
    assert res is arr


def test_load_numpy_array_fast_path():
    # Fast path with memoryview
    mv = memoryview(b"\x01\x00\x00\x00\x02\x00\x00\x00")
    loader = MockBufferLoader(mv)
    res = _load_numpy_array(np.ndarray, loader)
    assert isinstance(res, np.ndarray)
    assert loader.rewound is False

    # Fast path with bytearray
    ba = bytearray(b"\x01\x02\x03")
    loader = MockBufferLoader(ba)
    res = _load_numpy_array(np.ndarray, loader)
    assert isinstance(res, np.ndarray)

    # Fast path with np.ndarray
    existing_arr = np.array([10, 20, 30])
    loader = MockBufferLoader(existing_arr)
    res = _load_numpy_array(np.ndarray, loader)
    assert isinstance(res, np.ndarray)
    assert np.array_equal(res, existing_arr)


def test_load_numpy_array_fallback():
    # List data should trigger rewind and fallback
    list_data = [1, 2, 3, 4]
    loader = MockBufferLoader(list_data)
    res = _load_numpy_array(np.ndarray, loader)
    assert isinstance(res, np.ndarray)
    assert loader.rewound is True
    assert np.array_equal(res, np.array([1, 2, 3, 4]))
