---
type: process
title: MCP
description: Adapter für Ingest, Lint und später Query. Keine zweite SSOT.
status: draft
owner: shared
updated: 2026-08-27
tags: [process]
---

MCP holt und prüft. Wahrheit bleibt Git (`wiki/`, `ops/`).

Agent-CLIs (GitHub, `xi runs`): [AXI](axi.md). MCP hier bleibt Ingest/Lint. Query-MCP nicht, solange Git oder eine os-CLI reicht.

# Wann interessant

| Zweck | Wann |
| --- | --- |
| **Ingest** | Quelle wiederholt Namen liefert (Twenty/Neon, GitHub-Repos, Webflow-Ordner) — verdichten ins Wiki, nicht spiegeln |
| **Lint** | Relations-Graph oft bricht (Person ohne Firma, doppelte `id`, Alias zeigt auf fremde `id`, tote Pfade) |
| **Query** | XI oder addxion-ai dieses Wiki zitieren sollen, ohne das Repo zu klonen. Suche: `title` + `aliases`, Person nur per `id`. Erst wenn CLI nicht reicht |
| **Ops lesen** | Termine (z. B. Rückkehr) an `ops/waiting.md` erinnern — Deadline bleibt in ops |

Zuerst Ingest und Lint. Query-MCP nicht vor einer geformten os-CLI. RAG-Index höchstens `.rag/` (gitignored).

# Nicht

Wiki nach Twenty zurückschreiben. E-Mail, Telefon, Anschrift in Tool-DBs. Truths in KV/D1 duplizieren. Graph als Wahrheit. AXI-Katalog als MCP-Server.

Siehe [XI ist Runtime](../fundamentals/xi-ist-runtime.md), [addxion-xi](../platforms/addxion-xi.md).
