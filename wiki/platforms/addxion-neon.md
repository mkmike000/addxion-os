---
type: platform
title: addxion-neon
description: Design-System-Code. Grammatik im Wiki-Design. Katalog im Repo.
status: active
owner: shared
updated: 2026-08-28
tags: [platform]
sources:
  - id: docs-neon
    resource: addxion-docs/src/content/docs/neon/
    title: Neon (Herkunft Starlight)
---

Control + Speed + Consistency. Skalierbare digitale Marken. Code: `addxion-neon`. Public: `@addxion/neon`. Intern: `@addxion/core`.

# Zweck

Tokens, Components, Manifest, Adapter. 90 % zentral, 10 % Wrapper. Keine App-Logik, kein Auth. Chat-UI (Schale) gehört ins Package; LLM-Calls nicht.

Katalog: `*.meta.ts`, MCP. Nicht ins Wiki kopieren.

# Chrome

PageHeader (optional Composer-Slot), ChatSurface, ChatBox, Command Palette, MenuBar, QuickNav, Sidebar, Breadcrumb, SiteFooter: `@addxion/components`. Nutzen: addxion.ai, süper, addxion.com. Nav-Daten bleiben im Consumer-`manifest.ts`.

# Behavior

Package `@addxion/behavior`. **Behalten.** Echte Hooks, keine Markdown-Sammlung: `useFollowStream` (Chat Follow-at-bottom), `useProxyWheelScroll` (Wheel auf Desktop-Rändern → Hauptspalte). Kein React-DOM, keine Tokens. Prinzip: Leser-Intent.

# Herkunft

Lumos und Kumo sind Craft-Quellen für Foundations und Grammatik, nicht Substrate. Look und Konflikt: [Design](../design.md).

# Agent-Regeln

Token-Änderungen zuerst hier. Query Werte aus `addxion.tokens.json`, nicht aus dem Gedächtnis. Grammatik: [Design](../design.md). Keine Skill-Pakete (`.agents/skills`, `npx skills add`). Neue Compounds nur bei Screen-Bedarf, dann meta + Katalog.
