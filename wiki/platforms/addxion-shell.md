---
type: platform
title: addxion-shell
description: Nutzer-Schnittstellen-Schicht. Nicht bash/zsh.
status: active
owner: shared
updated: 2026-08-24
tags: [platform]
sources:
  - id: docs-shell
    resource: addxion-docs/src/content/docs/shell/
    title: Shell (Herkunft Starlight)
---

`@addxion/shell`: PageHeader, ChatSurface, Command Palette, BottomNav. Chat ist Schnittstelle, keine Feature-Seite. Gates: `@addxion/auth/gates`.

# Grenzen

Look → Neon. Nav-Daten → `manifest.ts`. Scroll → behavior. LLM → `@addxion/ai`.

# Truths

[T-PKG-SHELL](../fundamentals/truths.md), [T-SHELL-PAGEHEADER](../fundamentals/truths.md), [T-SHELL-ICONS](../fundamentals/truths.md), [T-NAV-MANIFEST](../fundamentals/truths.md).

# Agent-Regeln

Keine PageHeader-Forks im Consumer. Nav-Listen nicht in Shell hardcoden.