---
type: platform
title: addxion-ai
description: KI-App unter addxion.ai und Package @addxion/ai.
status: active
owner: shared
updated: 2026-08-24
tags: [platform]
sources:
  - id: docs-ai
    resource: addxion-docs/src/content/docs/ai/
    title: AI (Herkunft Starlight)
---

Zwei Dinge, eine Datei: die **App** und das **LLM-Package**.

# Zweck

App: Chat-Assistenten, Automatisierung, Wissensmanagement. URL addxion.ai. Repo `addxion-ai`.

Package `@addxion/ai`: Stream-Chunks und Message-Format. System-Prompts und Produkt-DB bleiben im Consumer.

# Grenzen

Schreibt keine Collective-Wahrheit. Kein paralleles Auth-Schema. Shell für Chat-UI, behavior für Scroll.

# Stack (App)

TanStack Start, React Aria + Neon-Tokens, Better Auth + Drizzle, Effect, Cloudflare Workers. Auth-DB: D1 (`addxion-auth`). App-DB: Neon + Hyperdrive (in der Herkunft: geplant). LLM: OpenRouter. Bun.

# Truths

[T-PKG-AI](../fundamentals/truths.md), [T-PKG-AUTH](../fundamentals/truths.md), [T-UI-ARIA](../fundamentals/truths.md), [T-DATA-APP-ISOLATED](../fundamentals/truths.md).

# Agent-Regeln

LLM-Client nur im Package. Neue Base-UI/Radix-Imports nicht. Query zuerst dieses Wiki.

# Links

- [Ökosystem](oekosystem.md)
- MASTERPLAN im Produkt-Repo, nicht hier.
