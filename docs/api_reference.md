# API Reference

This page contains the technical documentation for all core modules in `lodum`.

## Core API

::: lodum
    options:
      show_category_heading: false
      members:
        - lodum
        - asdict
        - fromdict
        - schema

::: lodum.core
    options:
      show_category_heading: false
      members:
        - Context
        - Dumper
        - StreamingDumper
        - Loader

::: lodum.field
    options:
      show_category_heading: false
      members:
        - field

::: lodum.concurrency
    options:
      show_category_heading: false
      members:
        - WorkerThread
        - Lock
        - RLock
        - local

## Data Formats

::: lodum.json
::: lodum.yaml
::: lodum.msgpack
::: lodum.cbor
::: lodum.bson
::: lodum.toml
::: lodum.pickle

## Validation

::: lodum.validators
