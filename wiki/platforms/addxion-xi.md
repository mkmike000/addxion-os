---
type: platform
title: addxion-xi
description: Elixir-Kern und TypeScript-Glue. Keine Collective-SSOT.
status: active
owner: shared
updated: 2026-08-24
tags: [platform]
sources:
  - id: docs-xi
    resource: addxion-docs/src/content/docs/xi/
    title: XI (Herkunft Starlight)
  - id: xi-kernel
    resource: addxion-xi README/MASTERPLAN
    title: Kernel Isolate/Remember/Message/Select/Constrain
---

Zwei Schichten, eine Datei.

# XI Core (Repo addxion-xi)

Runtime. Isolate · Remember · Message · Select · Constrain. Ein Agent, ein Brain (lokale `.db` oder Turso). Recipes aus Runs (`commit` / list / rollback). Elixir/OTP.

Kein Firmenwiki. Kein Alex/Mike-Merge. Kein Ersatz für `raw/` oder `wiki/`.

# @addxion/xi (TS)

Ein Package, zwei Subpaths: `protocol` (Typen, Events, Manifest-Schema) und `core` (Port zum Elixir-Kern; in der Herkunft Stub). Kein Nav, kein UI, kein LLM.

App-Navigation: `manifest.ts` + app-lokal. `@addxion/xi/nav` ist entfernt.

# Hebel (geplant)

Wiki-Pattern kann einen Run füttern. Ein bewährtes Recipe wird Pattern nur, wenn ein Mensch es hebt. Brain bleibt beim Agenten. Collective bleibt Git.

# Truths

[T-PKG-XI](../fundamentals/truths.md), [T-EVOLUTION-CORE](../fundamentals/truths.md), [T-NAV-MANIFEST](../fundamentals/truths.md). Collective vs. Runtime: [XI ist Runtime](../fundamentals/xi-ist-runtime.md).

# Agent-Regeln

Nicht aufteilen in zwei Packages. Nav nicht ins XI-Package zurückbauen. Mechanik-Plan: `addxion-xi/MASTERPLAN.md`.
