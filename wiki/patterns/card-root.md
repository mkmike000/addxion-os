---
type: pattern
title: CardRoot
description: App-Card-Grammatik. GenUI füllt dieselben Slots. API im Neon-Repo.
status: active
owner: shared
updated: 2026-08-26
tags: [pattern]
sources:
  - id: docs-card-root
    resource: addxion-docs/src/content/docs/patterns/guidance/card-root.md
    title: CardRoot
  - id: docs-genui
    resource: addxion-docs/src/content/docs/ai/guidance/genui.md
    title: GenUI
---

Code: `@addxion/components/react` in `addxion-neon`. Wiring in `addxion-ai`.

# Namen

| Name | Was |
| --- | --- |
| Neon Card | Einfaches Panel für Marketing/leichte Gruppierung. Anderer Baustein. |
| CardRoot | App-Surface: neonline, Modes `full-bleed` \| `fill`, Slots. |
| CardWrapper | Äußerer Border-Gap-Rahmen. Nicht neonline, nicht full-bleed. |
| neonline | Border-Chrome **auf** CardRoot. |
| GenUI | Prompt → strukturierter Tree → dieselben Wrapper+Roots. Kein zweites Card-System. |

# Schichten

```
CardWrapper          äußerer Frame + Padding
└── CardRoot         neonline + mode + Slots
    Header / Toolbar / Hero / Body / Footer
```

# GenUI

```
Prompt / Agent → TanStack AI → AiUiTree → CardWrapper → CardRoot[]
```

Menschen und Modelle füllen dasselbe Slot-Inventar. Slot-API, Lab `/lab/card-root`, Zod: Instanz in neon/ai, nicht hier.
