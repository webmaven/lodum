# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import io
import pytest
from lodum import lodum, json
from lodum.exception import DeserializationError

<<<<<<< HEAD

=======
>>>>>>> main
@lodum
class User:
    def __init__(self, id: int, name: str):
        self.id = id
        self.name = name

<<<<<<< HEAD

def test_load_stream_success():
    data = b'[{"id": 1, "name": "Alice"}, {"id": 2, "name": "Bob"}]'
    stream = io.BytesIO(data)

    users = list(json.load_stream(User, stream))

=======
def test_load_stream_success():
    data = b'[{"id": 1, "name": "Alice"}, {"id": 2, "name": "Bob"}]'
    stream = io.BytesIO(data)
    
    users = list(json.load_stream(User, stream))
    
>>>>>>> main
    assert len(users) == 2
    assert users[0].id == 1
    assert users[0].name == "Alice"
    assert users[1].id == 2
    assert users[1].name == "Bob"

<<<<<<< HEAD

def test_load_stream_empty_array():
    data = b"[]"
    stream = io.BytesIO(data)

    users = list(json.load_stream(User, stream))
    assert len(users) == 0


def test_load_stream_malformed_json():
    data = b'[{"id": 1, "name": "Alice"}, {"id": 2, "name": "Bob"'  # Missing closing brace and bracket
    stream = io.BytesIO(data)

=======
def test_load_stream_empty_array():
    data = b"[]"
    stream = io.BytesIO(data)
    
    users = list(json.load_stream(User, stream))
    assert len(users) == 0

def test_load_stream_malformed_json():
    data = b'[{"id": 1, "name": "Alice"}, {"id": 2, "name": "Bob"' # Missing closing brace and bracket
    stream = io.BytesIO(data)
    
>>>>>>> main
    iterator = json.load_stream(User, stream)
    assert next(iterator).id == 1
    with pytest.raises(DeserializationError, match="Streaming JSON error"):
        next(iterator)

<<<<<<< HEAD

=======
>>>>>>> main
def test_load_stream_lazy_evaluation():
    # Verify that it doesn't load everything at once.
    # We use a wrapper that tracks calls to read().
    class TrackingStream:
        def __init__(self, data):
            self.data = io.BytesIO(data)
            self.total_read = 0
<<<<<<< HEAD

=======
        
>>>>>>> main
        def read(self, size=-1):
            chunk = self.data.read(size)
            self.total_read += len(chunk)
            return chunk

<<<<<<< HEAD
    data = (
        b"["
        + b",".join(
            [b'{"id": ' + str(i).encode() + b', "name": "User"}' for i in range(5000)]
        )
        + b"]"
    )
    stream = TrackingStream(data)

    iterator = json.load_stream(User, stream)

=======
    data = b'[' + b','.join([b'{"id": ' + str(i).encode() + b', "name": "User"}' for i in range(5000)]) + b']'
    stream = TrackingStream(data)
    
    iterator = json.load_stream(User, stream)
    
>>>>>>> main
    # After first next(), we should have read only a small portion of the stream
    next(iterator)
    # ijson usually reads in 64KB chunks by default, but our data is small.
    # It will definitely have read some data, but shouldn't have read 100% if we have enough items.
    assert stream.total_read > 0
    assert stream.total_read < len(data)
<<<<<<< HEAD

    # Exhaust the iterator
    for _ in iterator:
        pass

    assert stream.total_read >= len(data)


def test_load_stream_no_ijson(monkeypatch):
    # Simulate ijson not being installed
    import sys

    monkeypatch.setitem(sys.modules, "ijson", None)

=======
    
    # Exhaust the iterator
    for _ in iterator:
        pass
    
    assert stream.total_read >= len(data)

def test_load_stream_no_ijson(monkeypatch):
    # Simulate ijson not being installed
    import sys
    monkeypatch.setitem(sys.modules, "ijson", None)
    
>>>>>>> main
    stream = io.BytesIO(b"[]")
    with pytest.raises(RuntimeError, match="Streaming support requires 'ijson'"):
        list(json.load_stream(User, stream))
