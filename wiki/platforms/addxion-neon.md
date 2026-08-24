---
type: platform
title: addxion-neon
description: Zentrales Design System. Code in addxion-neon, Wissen hier.
status: active
owner: shared
updated: 2026-08-24
tags: [platform]
sources:
  - id: docs-neon
    resource: addxion-docs/src/content/docs/neon/
    title: Neon (Herkunft Starlight)
---

Control + Speed + Consistency ohne Vendor-Lock-in. Code: `addxion-neon`. Public: `@addxion/neon`. Intern: `@addxion/core` (Engine).

# Zweck

Tokens, Components, Manifest, dünne Plattform-Adapter (Astro, Shopify, …). 90 % zentral, 10 % Wrapper.

# Grenzen

Keine App-Logik, kein Auth, keine Chat-UI. Keine Kundenmarke in Neon Meta. Komponenten-APIs (Button-Varianten, Token-Tabellen) leben im Neon-Repo, nicht als zweite Katalog-SSOT hier.

# Principles

Lean-Agile: [Fundamental](../fundamentals/lean-agile.md). SSOT Tokens+Components im Neon-Repo. Versionierte Sections nicht in-place überschreiben. Multi-brand via `[data-brand]`, Werte beim Consumer. Performance und A11y zuerst.

# Signature (Grammatik)

Pill, Panel, Band, Eyebrow. Sections u. a. `hero-v1`, `features-v1`. Wiederholung ist Absicht — [UI-SSOT](../patterns/ui-ssot.md).

# Truths

[T-PKG-NEON](../fundamentals/truths.md), [T-NEON-BRAND](../fundamentals/truths.md), [T-NEON-PLATFORM](../fundamentals/truths.md), [T-NEON-FONTS](../fundamentals/truths.md), [T-NEON-SECTIONS](../fundamentals/truths.md).

# Agent-Regeln

Öffentlicher Name `@addxion/neon`. Token-Änderungen zuerst im Neon-Repo. Query Tokens aus Code/`addxion.tokens.json`, nicht aus dem Gedächtnis.
