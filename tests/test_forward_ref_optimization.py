from lodum import lodum, json
from typing import Optional


@lodum
class Node:
    def __init__(self, value: int, next: Optional["Node"] = None):
        self.value = value
        self.next = next


@lodum
class A:
    def __init__(self, b: Optional["B"] = None):
        self.b = b


@lodum
class B:
    def __init__(self, a: Optional["A"] = None):
        self.a = a


def test_recursive_forward_ref():
    data = '{"value": 1, "next": {"value": 2, "next": null}}'
    node = json.loads(Node, data)
    assert node.value == 1
    assert node.next.value == 2
    assert node.next.next is None

    # Round trip
    dumped = json.dumps(node)
    assert json.loads(Node, dumped).value == 1


def test_mutual_recursive_forward_ref():
    _ = json.dumps(B(a=None))  # Register B

    data = '{"b": {"a": null}}'
    a = json.loads(A, data)
    assert a.b.a is None
    assert isinstance(a.b, B)


if __name__ == "__main__":
    test_recursive_forward_ref()
    test_mutual_recursive_forward_ref()
    print("All tests passed!")
