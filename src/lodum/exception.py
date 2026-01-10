# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
class LodumError(Exception):
    """Base exception for all lodum errors."""

class SerializationError(LodumError):
    """Raised when an error occurs during serialization."""

class DeserializationError(LodumError):
    """Raised when an error occurs during deserialization."""
