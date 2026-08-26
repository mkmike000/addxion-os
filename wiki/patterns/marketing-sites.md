---
type: pattern
title: Marketing-Sites
description: Wiederverwendbare Regeln für öffentliche Surfaces. Instanz-How-to bleibt im Consumer-Repo.
status: active
owner: shared
updated: 2026-08-26
tags: [pattern]
sources:
  - id: docs-marketing-sites
    resource: addxion-docs/src/content/docs/patterns/guidance/marketing-sites.md
    title: Websites entwickeln
---

Gilt für öffentliche Surfaces (addxion.com, Guest/Login). Stack, Ports, `site.ts`, Sitemap-Dateien: Consumer-`AGENTS.md`, vor allem `addxion-com`. Copy-Strategie: [Branding](../branding.md). Look: [Design](../design.md). Privacy: [Privacy by Design](privacy-by-design.md).

[T-PKG-NEON](../fundamentals/truths.md), [T-NEON-FONTS](../fundamentals/truths.md), [T-UI-SSOT](../fundamentals/truths.md), [T-BRAND-STRATEGY](../fundamentals/truths.md).

# Chrome

Marketing-Header (`@addxion/components`, öffentliches Layout) ≠ App-`PageHeader` (`@addxion/shell`, geschützte Routen). Inhalt und Marke im Consumer-Wrapper; keine Brand-Tokens im Package.

# HTML-Title

Der Meta-Title beschreibt den Nutzen, nicht den Produktnamen und nicht „ADDXION“. Sichtbare H1 darf den Produktnamen tragen.

| Falsch | Richtig |
| --- | --- |
| `Automations \| Workflows, die mitdenken` | `Workflows, die mitdenken` |
| `Neon \| Design System` | `Design System für skalierbare Marken` |

Eine H1 pro Seite. Eyebrow-Mono ist kein Heading-Ersatz. Preview/Staging und interne Flows: `noindex`. 404 wirklich 404, nicht Soft-404 unter 200.

# Fonts und Hydration

Keine Google Fonts. Inter self-hosted: `@addxion/neon/fonts/inter.css`. System-Schrift zuerst.

Astro: `client:load` nur above-the-fold; `client:visible` below. Nicht alles hydratisieren.

# Copy

Keine Gedankenstriche in Fließtext. Keine KI-Floskeln. Produktnamen **Neon**, **AI** ohne „ADDXION®“-Präfix im Produktnamen.

# DoD (Marketing-Seite)

Unique Title + Description (Title-Regel). Eine H1. Primary-CTA hydratisiert und klickbar. Kontrast Desktop + Mobile. `noindex` bewusst. Build grün. Neue URL in Sitemap und `llms.txt` des **Marketing**-Repos, nicht in einer zweiten Docs-SSOT.
