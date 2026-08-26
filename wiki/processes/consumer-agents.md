---
type: process
title: Consumer-AGENTS
description: Truths in Build-Repos nur referenzieren, nicht paraphrasieren.
status: active
owner: shared
updated: 2026-08-26
tags: [process]
sources:
  - id: docs-consumer-agents
    resource: addxion-docs/templates/consumer-agents-truths.md
    title: Vorlage Consumer Truths (Herkunft Starlight)
---

[T-AGENTS-REPO](../fundamentals/truths.md), [T-TRUTHS-SSOT](../fundamentals/truths.md). Volltext nur in [Truths](../fundamentals/truths.md). Sync: [Wissen-Sync](wissen-sync.md).

Jedes Build-Repo hat ein `AGENTS.md`: Stack, Commands, lokale Deltas. Collective nicht wiederholen. Design: [Design](../design.md) — keine zweite `DESIGN.md`. MASTERPLAN nur Ausführung (Phasen, Dateipfade), kein Wissen.

Vorlage für den Truths-Block. Nur IDs behalten, die für das Repo gelten. Pfad lokal Sibling:

```markdown
## Truths

Plattform-Wahrheiten: [addxion-os/wiki/fundamentals/truths.md](../addxion-os/wiki/fundamentals/truths.md)

| ID | Relevanz für dieses Repo |
| --- | --- |
| T-MAINTAIN | Shared Packages statt Duplikate |
| T-TRUTHS-SSOT | Truths nur in der Registry referenzieren |
| T-NAV-MANIFEST | Nav über manifest.ts + app-lokale Helper |
| T-PKG-SHELL | UI-Schicht aus @addxion/shell |
| T-PKG-NEON | Design über @addxion/neon |
```
