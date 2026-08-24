---
type: pattern
title: UI-SSOT
description: Was sich über Apps synct. Komponieren, nicht pro Seite erfinden.
status: active
owner: shared
updated: 2026-08-24
tags: [pattern]
sources:
  - id: docs-ui-ssot
    resource: addxion-docs/src/content/docs/patterns/guidance/ui-ssot.md
    title: UI-SSOT & Extraktion
---

[T-UI-SSOT](../fundamentals/truths.md), [T-UI-ARIA](../fundamentals/truths.md), [T-UI-BORDERED](../fundamentals/truths.md).

| Ändern | Sync über Apps? |
| --- | --- |
| Platform Tokens (`addxion.tokens.json`) | ja |
| Product-Deltas in `brand.css` | nein |
| Komponente nur im Consumer | nein, bis Extraktion |
| `@addxion/components` / `@addxion/shell` | ja |

**Platform Consumer** importiert `@addxion/neon/brands/addxion.css` (Familie). **Neon Meta Consumer** importiert `@addxion/neon/styles` plus eigene Kundenmarke.

Phase: dark monochrome. Taucht Chrome zweimal auf → Components. Hex nicht erfinden.

Interaction: React Aria. Neon-Bridge ist CSS, kein Kit.
