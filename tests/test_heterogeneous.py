from lodum import lodum, json
import pytest


@lodum
class Simple:
    def __init__(self, value: int):
        self.value = value


def test_heterogeneous_list_dump():
    # Field hinted as List[int] but contains a Lodum object
    @lodum
    class Container:
        def __init__(self, items: list[int]):
            self.items = items

    obj = Container(items=[1, Simple(2), 3])
    # This should succeed and correctly serialize Simple(2)
    json_str = json.dumps(obj)
    assert '"items": [1, {"value": 2}, 3]' in json_str


def test_heterogeneous_dict_dump():
    @lodum
    class Container:
        def __init__(self, data: dict[str, int]):
            self.data = data

    obj = Container(data={"a": 1, "b": Simple(2)})
    json_str = json.dumps(obj)
    assert '"data": {"a": 1, "b": {"value": 2}}' in json_str


def test_generic_heterogeneous_dump():
    # Generic list dump (not through a class field)
    data = [1, Simple(2), 3]
    json_str = json.dumps(data)
    assert '[1, {"value": 2}, 3]' == json_str


if __name__ == "__main__":
    pytest.main([__file__])
