# Product Guidelines: lodum

## Prose Style & Tone
- **Tone**: The documentation should be authoritative, performance-centric, and pragmatic.
- **Clarity & Conciseness**: Avoid unnecessary filler. Focus on "why" (performance gains) and "how" (implementation steps).
- **Solution-Oriented**: Use "real-world" examples (e.g., server configs, user data) that resonate with developers building high-throughput systems.
- **Instructional Focus**: Provide clear, actionable steps for common workflows (e.g., "Round-trip examples", "Converting to/from Dictionaries").

## Developer Experience (DX) Principles
- **API Familiarity (StdLib-Like)**: Mimic standard Python library interfaces (`json.dumps`, `pickle.loads`) to minimize the learning curve and allow for easy drop-in replacement.
- **Actionable & Precise Erroring**: All deserialization errors MUST provide detailed path tracking (e.g., `Error at root.users[2].id`) to allow for immediate debugging.
- **Zero-Configuration Integration**: Third-party library support (NumPy, Pandas, Polars) should work out-of-the-box without requiring complex glue code or custom adapters.
- **Sensible, Secure Defaults**: The framework should be secure-by-default (e.g., `SafeUnpickler` and structural validation in Pickle).

## Visual Branding & UX
- **High-Contrast Professionalism**: Maintain a clean, professional aesthetic using high-contrast imagery (like the "dumptruck" header).
- **Visual Performance Data**: Use interactive, high-fidelity charts (e.g., ApexCharts) to visualize performance benchmarks and evolution.
- **Accessibility & Consistency**: Branding elements should be consistent across GitHub, documentation sites, and the interactive demo.

## Success Criteria for Features
- **Benchmark-Validated**: Any new feature or optimization MUST be validated against the performance baseline before release.
- **Type Safety**: Maintain 100% type hint coverage and IDE support for all public APIs.
- **WASM Ready**: New modules must consider the constraints of browser-based environments (WASM/Pyodide).
