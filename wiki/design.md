---
type: fundamental
title: Design
aliases: [Design Language, DESIGN.md]
description: Eine Design-SSOT. Grammatik für App und Marketing. Tokens in Neon.
status: active
owner: shared
updated: 2026-08-26
tags: [design]
sources:
  - id: docs-design-language
    resource: addxion-docs/src/content/docs/branding/design-language.mdx
    title: Design Language (Herkunft Starlight)
---

Ein Look. App und Marketing teilen Foundation und Grammatik. Werte: `@addxion/neon/brands/addxion.tokens.json`. Consumer-`brand.css` nur Deltas. Keine zweite `DESIGN.md` in Produkt-Repos.

# Ein Look (com + ai)

Von **com:** Hairline statt Schatten-Karten, Rail, Zeitachse, keine 3D-Service-Cards.

Von **ai:** CardWrapper + CardRoot (App-Surfaces), React Aria für Controls, GenUI füllt dieselben Slots. Untitled UI ist Altbestand — nicht ausbauen, **entfernen**.

Geteilt: Neon-Tokens, System → Inter, Headings 400, Outline-CTA default, dark monochrome, Pill / Card / Band / Eyebrow. Marketing-Specials nur wenn sie ausschließlich dort Sinn machen (`cp-page.css`).

# Haltung

Engineering log, not brochure. Chromatische Akzente später, nicht „schnell mal“. Hex nicht hardcoden.

# Schichten

| Schicht | Ort |
| --- | --- |
| Platform Foundations | `@addxion/neon/brands/addxion.*` |
| Product-Delta | Consumer-`brand.css` |
| Shared UI | `@addxion/components`, `@addxion/shell` |
| Grammatik | diese Datei |

```css
@import "@addxion/neon/brands/addxion.css";
/* danach nur Overrides */
```

# Grammatik

**Repetition is the system.** Nicht pro Seite erfinden.

| Rolle | Jetzt |
| --- | --- |
| Text | `--adx-fg` → `--adx-fg-2` → `--adx-muted` → `--adx-meta` |
| Fläche | Canvas near-black (nie reines `#000`), Panel, Wash |
| CTA | Outline default; **eine** filled Primary pro Viewport |
| Elevation | Hairline; Shadow nur Floating UI |
| Authority | Größe + Weight 400, nicht Bold-700 Display |
| Hover | Text-Links dimmen |

Sans/Display/Body: System → Inter, Weight 400. Display nur für Marketing-Heroes. Mono nur für Eyebrow, IDs, Code.

Shapes: Interactive = Pill; Cards/Panels = ~8px; Full-bleed = 0.

# Signature

HeroBand, ContentBand, EyebrowMono, HairlineDivider, Card/Panel, PillPrimary, PillOutline, InputSoft. APIs im Neon-Repo.

# Do / Don't

Do: gleiche Grammatik; Tokens; Outline default; Hairline; extrahieren.

Don't: zweiten Look; Accent-Creep; neue Card/Button-Stile pro Seite; Shadow-Stacks; reines `#000`.

# Konsolidierung

Das Design-System ist **addxion-neon** (Tokens, Primitives, Signature, Sections, MCP). Nicht addxion-com.

| Fläche | Rolle |
| --- | --- |
| neon | System: Tokens, Button/Card/Band, CardRoot, hero-v1, Adapter |
| com, ai, süper, shopify-template | Consumer: `brand.css`-Deltas + lokale Seiten |
| com `site.css` (Rail, Zeitachse, Hairline) | Instanz, bis ein zweiter Consumer sie braucht, dann nach neon heben |
| ai UUI | Altbestand. Ziel Neon + Aria. Kein zweites Kit |
| shopify | Neon Meta + Store-Delta; Commerce-UX im Template, nicht in com |
| addxion-docs / Starlight | tot. Bridge und Prose nicht ins System |

# Agent-Check

1. Foundations importiert?
2. Pill/Card/Band/Eyebrow wiederverwendet?
3. Monochrome, kein Accent?
4. Text über die Leiter, Hover dimmt?
5. Shadow nur Floating?
