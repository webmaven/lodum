# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
from typing import Optional, Any
import pytest
from lodum.core import BaseDumper
from lodum.internal import dump
from lodum import lodum, asdict


class MockCustomDumper(BaseDumper):
    def __init__(self):
        super().__init__()
        self.recorded_depths = []

    def dump_int(self, value: int, depth: int = 0, seen: Optional[set] = None) -> Any:
        self.recorded_depths.append(depth)
        return value


@lodum
class NestedItem:
    def __init__(self, val: int):
        self.val = val


@lodum
class ParentContainer:
    def __init__(self, item: NestedItem):
        self.item = item


def test_dumper_protocol_depth_propagation():
    dumper = MockCustomDumper()
    container = ParentContainer(item=NestedItem(val=42))
    dump(container, dumper)

    assert len(dumper.recorded_depths) > 0
    # Depth for nested item val should be >= 2
    assert dumper.recorded_depths[0] >= 2
