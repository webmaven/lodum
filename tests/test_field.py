from lodum.field import Field


def test_field_repr():
    f = Field(rename="foo", skip_serializing=True)
    f.name = "bar"
    f.type = int
    repr_str = repr(f)
    assert "Field" in repr_str
    assert "name='bar'" in repr_str
    assert "type=<class 'int'>" in repr_str
    assert "rename='foo'" in repr_str
    assert "skip_serializing=True" in repr_str


def test_field_eq():
    f1 = Field(rename="foo")
    f1.name = "bar"
    f1.type = int

    f2 = Field(rename="foo")
    f2.name = "bar"
    f2.type = int

    assert f1 == f2

    f3 = Field(rename="baz")
    f3.name = "bar"
    f3.type = int
    assert f1 != f3

    f4 = Field(rename="foo")
    f4.name = "qux"
    f4.type = int
    assert f1 != f4


def test_field_eq_with_defaults():
    f1 = Field(default=10)
    f2 = Field(default=10)
    assert f1 == f2

    f3 = Field(default=20)
    assert f1 != f3


def test_field_eq_with_factory():
    def factory():
        return []

    f1 = Field(default_factory=factory)
    f2 = Field(default_factory=factory)
    assert f1 == f2

    def factory2():
        return []

    f3 = Field(default_factory=factory2)
    assert f1 != f3
