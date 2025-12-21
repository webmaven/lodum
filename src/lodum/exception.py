# SPDX-FileCopyrightText: 2025-present Jules <jules@example.com>
#
# SPDX-License-Identifier: MIT
class LodumError(Exception):
    """Base exception for all lodum errors."""

class SerializationError(LodumError):
    """Raised when an error occurs during serialization."""

class DeserializationError(LodumError):
    """Raised when an error occurs during deserialization."""
