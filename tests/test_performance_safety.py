from lodum import lodum, json
from lodum.exception import SerializationError
import pytest

@lodum
class Node:
    def __init__(self, value: int, next: 'Node' = None):
        self.value = value
        self.next = next

def test_circular_reference():
    a = Node(1)
    b = Node(2)
    a.next = b
    b.next = a

    with pytest.raises(SerializationError, match="Circular reference detected"):
        json.dumps(a)

def test_multiple_references_same_object():
    # This is NOT a circular reference, just multiple paths to the same object
    shared = Node(100)
    root = Node(1, shared)
    root2 = Node(2, shared)

    @lodum
    class Root:
        def __init__(self, n1: Node, n2: Node):
            self.n1 = n1
            self.n2 = n2

    r = Root(root, root2)
    # This should succeed
    json_str = json.dumps(r)
    assert '"value": 100' in json_str

def test_list_cycle():
    a = []
    a.append(a)
    with pytest.raises(SerializationError, match="Circular reference detected"):
        json.dumps(a)

if __name__ == "__main__":
    pytest.main([__file__])
