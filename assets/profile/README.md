# Profile visual sources

These SVGs explain methodology; they are not model results. A fixed graphite background, muted blue and teal accent retain contrast in both GitHub themes. Images use one column, responsive widths, native fonts and accompanying text. No external image services are required.

- **Header:** the existing 3×3 identity as a typographic accent.
- **Architecture:** project-owner context and [FPL333 documentation](https://github.com/acroice/fpl333/blob/main/pipeline/README.md), checked on 2026-11-01. Automated ingestion; manual feature builds. The dashboard is separate, without suggesting it consumes predictions. Dashed borders mark planned work.
- **EDA:** synthetic observations `[40, 44, 42, 48, 51, null, 53, 82, 57, 60, 58, 64]` in arbitrary units. The missing observation creates a break in the line. No inference about real demand or FPL players is intended.
- **Validation:** conceptual expanding windows and a final holdout. Block widths do not prescribe split sizes. No performance metrics are represented.
- **Forecasting:** synthetic history `[40, 45, 43, 48, 44, 49, 47, 52, 48, 53, 51, 56]`, followed by a seasonal-naive forecast `[48, 53, 51, 56]`. A four-week cycle is chosen solely to explain a baseline. No FPL results, fitted ML model or uncertainty estimates are claimed.

The previous PNG charts remain in the repository but are no longer embedded: their data provenance and reported metrics could not be established. No standalone empirical analysis is claimed for these illustrations.

## Rebuild and preview

Run `node scripts/generate-profile.mjs` from the repository root to regenerate all five SVGs without dependencies.

Open the root [README](../../README.md) in VS Code and use **Markdown: Open Preview to the Side** (`Ctrl+K V`). For GitHub's actual renderer, open the branch README or draft PR; switch between light and dark themes and check a narrow window. Only standard Markdown and responsive image tags are used in the profile.
