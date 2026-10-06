---
type: decision
title: Effect v4 für Server-IO in addxion-ai
status: decided
owner: shared
updated: 2026-10-04
tags: [decision, effect, addxion-ai]
---

# Decision: Effect v4 auf dem Server

**Datum:** 2026-10-04

**Kontext:** In `addxion-ai` lief Effect nur auf Teilen der Auth/Admin/DB-Server-FNs. Neue IO-Pfade (CRM, XI-Session, Agentic, Grants) nutzten plain `async`/`try/catch`. Zwei Stile.

**Entscheidung:** Neue und geänderte TanStack Server-FNs sowie Server-IO-Pipelines (DB, XI-Core, Auth-Resolve) bauen mit **Effect v4** (`effect@^4`). Truth: [T-EFFECT-SERVER](../fundamentals/truths.md).

**Pattern (Instanz `addxion-ai`):**

- `Effect.gen` + `tryDb` / `tryPromiseUnknown`
- `runServerEffect` wenn Fehler werfen sollen
- `runServerEffectCatching` für `{ ok: false; error }`
- Helpers: `src/lib/effect/run.ts`, Errors: `src/lib/effect/errors.ts`

**Nicht:** Client/UI, reine Sync-Mapper, Streaming-Response-Bodies (Chat-SSE) in Effect pressen.

**Konsequenzen:** Arbeitsregeln in `addxion-ai/AGENTS.md` und Cursor-Rule `effect-server.mdc` verweisen hierher. `bun run lint:server` deckt die Effect-Server-FNs ab.

**Verworfen:** Effect überall inkl. React-Client. Zweite Fehlerbibliothek parallel zu Effect.
