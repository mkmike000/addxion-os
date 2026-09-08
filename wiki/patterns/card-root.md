---
type: pattern
title: CardRoot
description: App-Card-Grammatik. GenUI füllt dieselben Slots. API im Neon-Repo.
status: active
owner: shared
updated: 2026-09-07
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

Header-Titel: `text-sm font-medium` (Chrome, kein Display-Heading). Hero-Media sitzt in der Scoop (`rounded-xl`). `mode="full-bleed"`: idle kein Abstand links/rechts/unten, Abrundung oben zum Titel (`rounded-t-xl`) und unten durch Root (`overflow-hidden rounded-xl`). Hover und Focus-within: Scoop per `--card-scoop` (`@property`, 200ms, nicht Margin — Masonry-Höhe bleibt). `0.25rem` L/R/unten. Kein Footer-Chrome.

# Fläche

Canvas hinter dem Panel: `--color-background`. Panel (Hero/Body): `--color-card`. Nicht `--color-primary` — das ist die filled CTA, in Dark fast weiß. Nicht Untitled-UI `secondary_subtle`.

# GenUI

```
Prompt / Agent → TanStack AI → AiUiTree → CardWrapper → CardRoot[]
```

Menschen und Modelle füllen dasselbe Slot-Inventar. Slot-API und Zod: Neon. Live-Lab: com `/neon/` (Zelle CardRoot). Auth-Lab: ai `/lab/card-root`. MDX-Tags später dieselbe Registry (`*.meta.ts`).
