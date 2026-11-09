---
type: decision
title: addxion-trading ↔ Harness ↔ XI
description: Venue-Welt in addxion-trading (Python/CCXT). Cockpit-Buch nur über XI-Kernel. Harness hält Creds und trading_fill.
status: decided
owner: shared
updated: 2026-11-09
tags: [decision, agentic-trading, xi]
---

# Festlegung

| Repo | Rolle |
|------|--------|
| `addxion-trading` | Flotte/Units, CCXT, `POST /cycle`, `/book` |
| `addxion-xi` | `GET /api/v1/venues/book`, `POST /api/v1/trading/live` → Trading-HTTP |
| `addxion-ai` | Konnektoren, Neon `org_venue_connection` + `trading_fill`, UI Normandy |

Cockpit **liest** das Trading-Buch **nicht** direkt von addxion-trading — nur über `@addxion/xi/core`.

Konnektor-Test (`POST /connections/test`) darf Harness → Trading direkt.

Siehe [agentic-trading-rails.md](agentic-trading-rails.md).
