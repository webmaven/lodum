# SPDX-FileCopyrightText: 2025-present Jules <jules@example.com>
#
# SPDX-License-Identifier: MIT
import numpy as np
from lodum.core import serializable
from lodum.json import to_json, from_json

@serializable
class NumpyObject:
    def __init__(self, data: np.ndarray):
        self.data = data

    def __eq__(self, other):
        return isinstance(other, NumpyObject) and np.array_equal(self.data, other.data)

def test_numpy_array():
    data = np.array([1, 2, 3])
    instance = NumpyObject(data=data)
    json_str = to_json(instance)
    result = from_json(NumpyObject, json_str)
    assert instance == result
