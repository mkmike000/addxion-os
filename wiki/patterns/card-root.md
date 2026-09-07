---
type: pattern
title: CardRoot
description: App-Card-Grammatik. GenUI füllt dieselben Slots. API im Neon-Repo.
status: active
owner: shared
updated: 2026-08-28
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

# Fläche

Canvas hinter dem Panel: `--color-background`. Panel (Hero/Body): `--color-card`. Nicht `--color-primary` — das ist die filled CTA, in Dark fast weiß. Nicht Untitled-UI `secondary_subtle`.

# GenUI

```
Prompt / Agent → TanStack AI → AiUiTree → CardWrapper → CardRoot[]
```

Menschen und Modelle füllen dasselbe Slot-Inventar. Slot-API und Zod: Neon. Live-Lab: com `/neon/` (Zelle CardRoot). Auth-Lab: ai `/lab/card-root`. MDX-Tags später dieselbe Registry (`*.meta.ts`).
