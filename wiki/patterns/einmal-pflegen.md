---
type: pattern
title: Einmal pflegen
description: Shared Package vor paralleler Kopie.
status: active
owner: shared
updated: 2026-08-24
tags: [pattern]
sources:
  - id: docs-maintain
    resource: addxion-docs/src/content/docs/ecosystem/single-maintenance.md
    title: Einmal pflegen
---

Kanonisch: [T-MAINTAIN](../fundamentals/truths.md).

Bevor etwas in einem Consumer landet: kommt dasselbe schon woanders vor? Dann Shared Package erweitern, nicht forken. Produktspezifisch bleibt Domäne, Copy, app-eigene Tabellen.

| Bedarf | Ziel |
| --- | --- |
| Button, Card, Sections | `@addxion/components` |
| Layout, Chat, PageHeader | `@addxion/shell` |
| Protokoll-Typen | `@addxion/xi/protocol` |
| Scroll, Haptics | `@addxion/behavior` |
| Tokens, Foundations | `@addxion/neon` |
| Session, Grants | `@addxion/auth` |
| Streaming | `@addxion/ai` |
