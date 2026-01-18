# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
from typing import Optional


class LodumError(Exception):
    """Base exception for all lodum errors."""


class SerializationError(LodumError):
    """Raised when an error occurs during serialization."""


class DeserializationError(LodumError):
    """Raised when an error occurs during deserialization."""

    def __init__(self, message: str, path: Optional[str] = None):
        self.raw_message = message
        self.path = path
        full_message = f"Error at {path}: {message}" if path else message
        super().__init__(full_message)
