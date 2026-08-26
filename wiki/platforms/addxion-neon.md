---
type: platform
title: addxion-neon
description: Design-System-Code. Grammatik im Wiki-Design. Katalog im Repo.
status: active
owner: shared
updated: 2026-08-26
tags: [platform]
sources:
  - id: docs-neon
    resource: addxion-docs/src/content/docs/neon/
    title: Neon (Herkunft Starlight)
---

Control + Speed + Consistency. Skalierbare digitale Marken. Code: `addxion-neon`. Public: `@addxion/neon`. Intern: `@addxion/core`.

# Zweck

Tokens, Components, Manifest, Adapter. 90 % zentral, 10 % Wrapper. Keine App-Logik, kein Auth, keine Chat-UI. Keine Kundenmarke in Neon Meta.

Katalog: `*.meta.ts`, MCP. Nicht ins Wiki kopieren.

# Shell

Package `@addxion/shell`. **Behalten.** PageHeader, ChatSurface, Command Palette, BottomNav, SiteFooter. Nutzen: addxion.ai, süper, addxion.com. Look aus Neon-Tokens. Nav-Daten bleiben im Consumer-`manifest.ts`.

# Behavior

Package `@addxion/behavior`. **Behalten.** Echte Hooks, keine Markdown-Sammlung: `useFollowStream` (Chat Follow-at-bottom), `useProxyWheelScroll` (Wheel auf Desktop-Rändern → Hauptspalte). Kein React-DOM, keine Tokens. Prinzip: Leser-Intent.

# Agent-Regeln

Token-Änderungen zuerst hier. Query Werte aus `addxion.tokens.json`, nicht aus dem Gedächtnis.
