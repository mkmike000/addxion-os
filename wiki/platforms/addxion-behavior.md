---
type: platform
title: addxion-behavior
description: Scroll- und Interaktions-Entscheidungen. Kein DOM.
status: active
owner: shared
updated: 2026-08-24
tags: [platform]
sources:
  - id: docs-behavior
    resource: addxion-docs/src/content/docs/behavior/
    title: Behavior (Herkunft Starlight)
---

`@addxion/behavior` entscheidet wann und ob gescrollt wird. Framework-agnostic.

```
@addxion/ai (Chunks) → behavior (Entscheidung) → shell (Rendering)
```

Module in der Herkunft: `useFollowStream`, `useProxyWheelScroll`, `useScrollIntent`, `useHaptic`.

# Grenzen

Kein React-DOM, kein Rendering, keine Tokens.

# Truths

[T-PKG-BEHAVIOR](../fundamentals/truths.md).

# Agent-Regeln

Scroll-Logik nicht in Shell oder App nachbauen.
