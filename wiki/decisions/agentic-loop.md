---
type: decision
title: Agentic Loop — Cockpit ↔ XI
status: active
owner: shared
updated: 2026-10-05
tags: [decision, xi, ai, cockpit]
---

# Agentic Loop (Cockpit ↔ XI)

App (`addxion-ai`) = Cockpit. Kernel (`addxion-xi`) = Fabrik. Evolutionslogik bleibt in Elixir.

## Inference

- Chat-Streaming: **TanStack AI** (`@tanstack/ai` + `@tanstack/ai-react` + `@tanstack/ai-openrouter`).
- Wire: AG-UI SSE (`chat` → `toServerSentEventsResponse` ← `fetchServerSentEvents` / `useChat`).
- One-shots (Site): weiter `completeChat` (raw OpenRouter) — nicht Teil des Agent-Loops.

## XI-Steuerung

| Pfad | Zweck |
|------|--------|
| `you>` / Kernel-Line Bypass | Power-User → `$xiSessionLine` ohne LLM |
| TanStack Server-Tools `xi_*` | NL → Kernel-Ports (status, session_line, paper, evolve, swarm lifecycle, factory, recipes, pipeline HITL, Pi, workspace, A2A) |
| A2A | Live via Kernel Event-SSE → App-Proxy `/api/xi/events/stream`; Send = `POST /message` |

Tenant: `{orgSlug}-prod` (`xiTenantId`). Kein `agentic-trading-<userId>`.

## Transport

- Commands/Tools: HTTP über `@addxion/xi/core` (typed Client, kein Extra-Service).
- Live Events: SSE vom Kernel (Auth-Proxy in der App). Poll nur Soft-Fallback.

## Pi / Workspace

- Pi = Coding-Port hinter `:coding`, Käfig = OrbStack Workspace (`/work`).
- Kein Host-PTY / kein GUI-Computer-Use in der App.
- App-Ports: status / start / prompt / await / abort / stop + workspace status.

## Recipes / HITL

- Recipes: `GET /api/v1/recipes`, Commit `POST /api/v1/recipes/commit`.
- Pipeline HITL: `GET /api/v1/pipeline/runs`, `POST …/approve|reject` (Kernel-Postgres).
- Cockpit: Normandy-Panels + Chat-Tools.

## Swarm Lifecycle

- `GET/POST/DELETE /api/v1/swarms` → `@addxion/xi/core` + Server-FNs + Normandy-Panel.
- Tenant-Filter in App (list/teardown); Spawn immer mit Tenant-ID.

## GenUI

- Ziel: TanStack `outputSchema` → `AiUiTree` → CardWrapper/CardRoot.
- Pfad verdrahtet; Heuristik-Fallback in Neon bleibt.

## Neue Kernel-Fähigkeit

1. HTTP-Port in Elixir
2. Methode in `@addxion/xi/core`
3. Cockpit Tool und/oder UI

## Smoke (Deploy)

Vor Prod-Freigabe:

1. Kernel mit Message-Port + Event-SSE + Pi/Workspace + Recipes deployen (`XI_KERNEL_URL`).
2. App: Feature `operators` oder `agentic.trading`, Org aktiv.
3. Normandy: Swarm spawnen → A2A Live Badge „Live“ → Paper-Lauf → Factory-Strip zeigt Cost.
4. Chat: Tool `xi_list_swarms` / `xi_a2a_send` / `xi_list_recipes` einmal NL.
5. HITL nur wenn Kernel-Postgres an; sonst erwarteter Offline-Hinweis.

## Backlog (außerhalb Chat-Migration)

- Memory-UI, Edge-Relay, Neon-Threads
- **Isolate Cloud** — Decision: [isolate-cloud.md](isolate-cloud.md)
- **Computer-Use** (Hosted Browser first, Full Desktop später) — Decision: [computer-use.md](computer-use.md)
- **Geld-Schienen** (Finances vs Trading vs A2A-Value) — Decision: [agentic-trading-rails.md](agentic-trading-rails.md)
