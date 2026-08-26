---
type: pattern
title: CSS-Schichten
description: Import-Reihenfolge für Platform- und Meta-Consumer. Kein zweites Token-System.
status: active
owner: shared
updated: 2026-08-26
tags: [pattern]
sources:
  - id: docs-css
    resource: addxion-docs/src/content/docs/patterns/guidance/css-architecture.md
    title: CSS Architecture
---

[T-NEON-PLATFORM](../fundamentals/truths.md), [T-NEON-BRAND](../fundamentals/truths.md), [T-UI-BORDERED](../fundamentals/truths.md). Consumer-Typen: [UI-SSOT](ui-ssot.md). Dateinamen und Ports: Consumer-`AGENTS.md`.

# Schichten

| Schicht | Ort |
| --- | --- |
| Platform Foundations | `@addxion/neon/brands/addxion.*` |
| Product-Delta | Consumer-`brand.css` |
| Marketing-Chrome | `site.css` (unpräfixiertes Tailwind) |
| Neon-Utilities | `neon.css` (`tw:` Prefix), nur wenn Primitives gebraucht |
| Bridges | `shadcn-bridge.css`, früher Starlight-Bridge |

Marketing-Layout lädt `site.css`, nicht global `neon.css` neben unpräfixiertem Tailwind.

```
addxion.css → brand.css (nur Deltas) → semantic / Bridges
```

Foundations einmal in Neon ändern, alle Platform-Consumer ziehen nach. Strukturlinien: 1px Background-Gap (`bordered-grid`), nicht Schatten-Karten.

# Prefix

Neon: `tw:`. Marketing-Seiten: unpräfixierte Klassen über `site.css`. Nicht mischen auf derselben Fläche.
