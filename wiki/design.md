---
type: fundamental
title: Design
aliases: [Design Language, DESIGN.md]
description: Eine Design-SSOT. Grammatik für App und Marketing. Tokens in Neon.
status: active
owner: shared
updated: 2026-09-08
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

Geteilt: Neon-Tokens, System → Inter, Headings 400 (Hero/Rail-Claim Light 300), Outline-CTA default, dark monochrome, Pill / Card / Band / Eyebrow. Marketing-Specials nur wenn sie ausschließlich dort Sinn machen (`cp-page.css`).

# Haltung

Engineering log, not brochure. Chromatische Akzente später, nicht „schnell mal“. Hex nicht hardcoden.

# System

Neon ist das Produkt, nicht eine Sammlung von Skill-Paketen. Wenige Bausteine, jeder genau — leicht in der Fläche, scharf in der Regel.

Layouts, Dashboards, Screens: **komponieren** aus `@addxion/components`. Wiederkehrend → Package. Einmalig → Consumer, bis es zweimal vorkommt.

Agent-Kontext: diese Datei + Neon-MCP (`list_tokens`, `get_component`, `list_rules`). Keine `.agents/skills`, kein `npx skills add`, keine zweite Grammatik. Fremde Seiten sind Filter-Quellen; was gilt, steht hier.

Performant = wenig DOM, Token-Motion, keine Extra-CSS-Libraries. Minimal = ein Elevation-Modell, eine CTA-Grammatik, eine Interaktionsschicht (Aria). Neu nur wenn ein Screen es braucht und nichts im Katalog reicht.

# Schichten

| Schicht | Ort |
| --- | --- |
| Platform Foundations | `@addxion/neon/brands/addxion.*` |
| Product-Delta | Consumer-`brand.css` |
| Shared UI | `@addxion/components` |
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
| CTA | Outline default; **eine** filled Primary pro Viewport; Secondary = Card-Fläche (`bg-card`), dieselbe Fläche wie CardRoot-Header, wie „Über Uns“. Ghost = idle `muted`, keine Fläche; Hover = Wash (`bg-foreground/10`) plus `fg`. Link = unterstrichener Text, kein Pill (`variant="link"`). Toast = Wash-Pill, kein Card-Rahmen, `backdrop-blur-md` auf der Pill (kein Viewport-Overlay). Schließen = Quadrat-Ghost mit Phosphor `X` (duotone), kein Text-× |
| Elevation | Hairline; Shadow nur Floating UI. Glass-Nav (Hairline + inset highlight, kein Drop-Shadow) ist Chrome (MenuBar / QuickNav), kein CTA |
| Chat | Eine Fläche: Nachrichten und Composer teilen die MetricsChart04-Schale (Wash + Panel). Lab-GenUI: PageHeader-Titel ist Heading und Input in einem (`page-title`, dasselbe Feld wie die Palette-Suche), autofocus. Offene Nav listet Board und Vorlagen, kein zweites Header-Feld. Placeholder = Hover / Auswahl / Zelle in der Zeile. Keine iMessage-Bubbles, keine zweite ChatBox-Zelle |
| Tabelle | Hairline-Zeilen, Luft in der Zelle (`px-3 py-3`). Zeile Ghost: idle keine Fläche, Hover Wash. Selected bleibt Wash. Kein Schatten, kein tablecn-Kit. Checkbox, dann Name, dann Text |
| Chart | Lab: EvilCharts-ECharts-Katalog (Area, Line, Bar, Composed, Radar, Pie, Radial, Sankey), größer, monochrom über Tokens. Engine `echarts`, kein shadcn-Dump, keine Accents. Neon-`Chart` bleibt die kleine SVG-Primitive |
| Icons | Phosphor Duotone (`@phosphor-icons/react`, `weight="duotone"`), zentriert im Slot. App-Root: `IconProvider` aus `@addxion/components/react`. `FeaturedIcon` = Phosphor in Secondary-Well, Lab als Hitbox 44×44. File-Typen = Kürzel in Secondary-Well, nicht `@untitledui/file-icons`. Payment = `PaymentMark`, Social = `SocialButton` — beide in `@addxion/components`, Marken-Silhouette, `currentColor`, monochrome. Social = Secondary-Pill. Payment = Secondary-Well. Kein Dot-Primitive (Status-Pip am Avatar). Lab in com importiert |
| Authority | Größe + Weight 400, nicht Bold-700 Display. Marketing-Hero und Rail-Claim: Light 300 (`font-light`), wie die Start-H1. Rail-Claim volle Breite mobil, `md:w-2/3` Desktop (com: `.rail-claim`) |
| Hover | Ghost für idle Interaktion in Listen und Chrome: keine Fläche, Wash (`bg-foreground/10`) plus `fg` erst unter `@media (hover: hover)`. Dieselbe Klasse: `ghostHover` in `@addxion/components`. Selected/Active und Status-Badges behalten Wash. Nicht Ghost: Primary/Outline, Card/Panel, Inputs, Text-Links. Text-Links: Unterstrich, Hover dimmt. Farbwechsel sofort — kein `transition` auf color/background/border |

Sans/Display/Body: System → Inter, Weight 400. Display nur für Marketing-Heroes. Rail-Claim und Start-H1: `font-light`. CardRoot-Header: `text-sm font-medium` (Chrome, nicht Heading). Mono nur für Eyebrow, IDs, Code. InputGroup-Prefix (`https://`) ist Sans, gleiche Größe und Farbe wie der Placeholder. Lab-Title: Variable `wght` am Pointer, nicht als Default-Heading.

Shapes: Interactive = Pill; Cards/Panels = ~8px; Full-bleed = 0 idle, Hover/Focus Scoop `--card-scoop` 200ms (`0.25rem` L/R/unten, keine Layout-Höhe). Input und InputGroup = Pill, wie Combobox.

# Herkunft

Craft-Quellen, nicht Kits. Bei Konflikt gilt diese Datei.

| Quelle | Was | Nicht |
| --- | --- | --- |
| Lumos | `rem`, eine Fluid-Kurve, Theme am Vorfahren, Variante legt Token-Aliase um | Klassen, Lime-Primary, Heading 500, Color-Transition |
| Kumo | Nähe, Sentence case, Hairline-Haltung | Base UI, semibold als Default, `ring-kumo` |
| Rauno | Label, Fehler am Feld, Motion-Budget, Skeleton=Slot | Shadow-Elevation, Heading 500–600, Glow |

# Signature

EyebrowMono, HairlineDivider, Card/Panel, PillPrimary, PillOutline, InputSoft. APIs im Neon-Repo.

# Do / Don't

Do: gleiche Grammatik; Tokens; Outline default; Hairline; extrahieren.

Don't: zweiten Look; Accent-Creep; neue Card/Button-Stile pro Seite; Shadow-Stacks; reines `#000`.

# Konsolidierung

Das Design-System ist **addxion-neon** (Tokens, Primitives, Signature, Sections, MCP). Nicht addxion-com.

| Fläche | Rolle |
| --- | --- |
| neon | System: Tokens, Button/Card/Band, CardRoot, `FeaturedIcon`, `SocialButton`, `PaymentMark`, Chat (`ChatCard`, `ChatBox`, `ChatSurface`), PageHeader, MenuBar, QuickNav, Sidebar, Breadcrumb, ButtonGroup, Adapter |
| com, ai, süper, cms, shopify-template | Consumer: `brand.css`-Deltas + lokale Seiten |
| neon `.hairline` + `HairlineDivider` | System: 1px strukturelle Linie, gleiche Farbe wie bordered-grid |
| com `site.css` (Rail, Zeitachse) | Instanz, bis ein zweiter Consumer sie braucht, dann nach neon heben |
| ai UUI | Altbestand. Ziel Neon + Aria. Kein zweites Kit |
| shopify | Neon Meta + Store-Delta; Commerce-UX im Template, nicht in com |
| addxion-docs / Starlight | tot. Bridge und Prose nicht ins System |

# Agent-Check

1. Foundations importiert?
2. Pill/Card/Band/Eyebrow wiederverwendet?
3. Monochrome, kein Accent?
4. Text über die Leiter, Hover dimmt — ohne Color-Transition? Ghost-Hover = Wash, nicht neue Fläche?
5. Shadow nur Floating?
6. Headings Weight 400 (`font-normal`), nicht bold/semibold? Rail-Claim und Start-H1: `font-light`, `.rail-claim` (`w-full md:w-2/3`)?
7. Sichtbares Label (`htmlFor` / Aria); Placeholder ist kein Label?
8. Fehler am Feld, nicht als Toast der ersten Wahl?
9. Disabled ohne Tooltip; Icon-only mit `aria-label`; Tooltip ohne interaktiven Inhalt?
10. Hover nur unter `@media (hover: hover)`? Inputs auf Touch nicht unter 16px?
11. Motion: `duration-fast`/`duration-normal` (150/200ms), Overlay nicht von Scale 0, Press ~0.96; `prefers-reduced-motion: reduce`?
12. Skeleton = Slot-Silhouette; Media mit `aspect-ratio`?
13. Status nie nur Farbe; Empty = eine Aktion; Feedback am Trigger?
14. Katalog gelesen, nichts erfunden, kein Skill-Paket?

# Motion

Tokens: `--duration-fast` 150ms, `--duration-normal` 200ms, `--duration-slow` 300ms. Overlay fade/scale von ~0.95, nicht von 0. Backdrop solid, kein Viewport-Blur. Color/background/border ohne Transition. `prefers-reduced-motion: reduce` schaltet Bewegung ab.

# A11y

Kontrast: `--adx-fg` auf Canvas mindestens AA; `--adx-muted` nicht als einziger Text für Pflicht-Info. Switch sofort. Destructive nur mit Confirm (Dialog). Submit danach disabled.
