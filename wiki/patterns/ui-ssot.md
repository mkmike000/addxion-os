---
type: pattern
title: UI-SSOT
description: Was sich über Apps synct. Komponieren, nicht pro Seite erfinden.
status: active
owner: shared
updated: 2026-09-06
tags: [pattern]
sources:
  - id: docs-ui-ssot
    resource: addxion-docs/src/content/docs/patterns/guidance/ui-ssot.md
    title: UI-SSOT & Extraktion
---

[T-UI-SSOT](../fundamentals/truths.md), [T-UI-ARIA](../fundamentals/truths.md), [T-UI-BORDERED](../fundamentals/truths.md). Grammatik: [Design](../design.md). Ziel-Packages: [Einmal pflegen](einmal-pflegen.md).

| Ändern | Sync über Apps? |
| --- | --- |
| Platform Tokens (`addxion.tokens.json`) | ja (`render:brand` → Consumer-`@import`) |
| Product-Deltas in `brand.css` | nein |
| Komponente nur im Consumer | nein, bis Extraktion |
| `@addxion/components` | ja |

Phase: dark monochrome. Hex nicht erfinden. Taucht Chrome zweimal auf → Components.

# Consumer-Typen

**Platform Consumer** (Ökosystem-Familie):

```css
@import "@addxion/neon/brands/addxion.css";
/* danach nur Deltas */
```

Wired: addxion-com, addxion.ai, süper, mike-kaufmann-com, addxion-cms (Payload-Admin über CSS-Variablen, kein Aria-Rewrite). addxion-docs tot (Repo archiviert). addxion.ai: neues UI = Neon + Aria; Untitled UI nicht neu, bei Touch ersetzen.

**Neon Meta Consumer** (Token-Engine ohne ADDXION-Brand zu erzwingen):

```css
@import "@addxion/neon/styles";
/* eigene brand.css — Kundenmarke */
```

Shopify-Neon-Template startet mit Platform; Kundenmarke überschreibt Tokens. Liquid-Felgen (`felgenimperium`) ist UX-Pattern, nicht Brand-SSOT.

| Produkt | Brand |
| --- | --- |
| Shopify Neon Template | Platform + Store-Deltas |
| Kunden-Store Skin | Override in `brand.css` / Shop-Config |
| shopify-neon-app (Admin) | Polaris; getrennt vom Storefront |

# Wohin neuer UI-Code

| Signal | Ziel |
| --- | --- |
| Nur Look / Tokens | `addxion.tokens.json` oder Consumer-Delta |
| React-Control (Dialog, Select, …) | React Aria; kein Base UI / Radix als Standard |
| Wiederkehrender Design-Baustein | `@addxion/components` |
| App-Chrome (PageHeader, Chat, MenuBar, QuickNav, Sidebar, Breadcrumb) | `@addxion/components` |
| Nav-Daten, Protocol | `@addxion/xi` (kein UI) |
| Scroll ohne Markup | `@addxion/behavior` |
| Einmalig produktspezifisch | Consumer lokal; zweite App → Extraktion |

Fahrschule in addxion.ai nutzt Neon + Aria. Neon-Bridge `shadcn-bridge.css` ist CSS-Mapping, kein Kit.

# Agent-Regeln

App = Marketing-Basis; Specials nur wenn ausschließlich Marketing. React-Controls: Aria. Platform vs. Meta vor dem ersten Import klären.

Org: **Hybrid / Balanced** — Neon-Core (Tokens, Aria-Primitives, Grammatik) zentral; Consumer (com, ai) nur Deltas und lokale Specials. Kein Base UI, kein zweites Kit, keine Skill-Pakete im Repo. Wissen in [Design](../design.md).
