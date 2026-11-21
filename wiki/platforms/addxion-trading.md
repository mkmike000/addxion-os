---
type: platform
title: addxion-trading
description: Modulare Algotrading-Plattform (Python). Venues für Agentic Trading. Darstellung in addxion-app.
status: active
owner: mike
updated: 2026-11-22
tags: [platform, trading, agentic]
sources:
  - id: trading-repo
    resource: mkmike000/addxion-trading
    title: addxion-trading
---

# Zweck

Python-Service für Markt-Execution (Crypto zuerst).  
Architektur: Flotte → Signal-Unit / Operator-Unit / Data-Unit.

Cockpit und Darstellung des laufenden Systems: **addxion-app** (GPUI).  
Web-Übersicht / Roadmap: `/operators/roadmap` in addxion.ai.

# Frameworks (Mental Models)

Persistente Lernresource im Repo: `docs/frameworks/`.

- Signal: Catalog als Single Source of Truth
- Strategy / Operator: Entscheidung vs. Ausführung
- Execution: Orders + Reconciliation + Modi (Skeleton mit konkreter Struktur)
- Risk: Unit + Portfolio
- Data: Timescale via Neon
- Runtime: kontinuierlicher Loop
- Observability: Book-Snapshot für die App

Details: [addxion-trading docs/frameworks](https://github.com/mkmike000/addxion-trading/tree/main/docs/frameworks).

# Stack

- Python 3.11+
- CCXT (CEX)
- FastAPI (REST)
- TimescaleDB via Neon (Persistenz, solange Compression nicht nötig)
- Freqtrade (Backtesting-Bridge)

# Grenzen

Kein Billing (das ist Agentic Finances / Stripe).  
Keine Collective-Wahrheit hier.  
DEX-Adapter (Hyperliquid, Jupiter) später.

# Related

- Decision: [Agentic Trading Rails](../decisions/agentic-trading-rails.md)
- Roadmap: `docs/roadmap.md` im Repo + Web-Ansicht unter `/operators/roadmap`
