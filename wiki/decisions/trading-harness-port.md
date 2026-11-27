---
type: decision
title: addxion-trading ↔ Harness ↔ XI
description: Venue-Welt in addxion-trading (Python/CCXT). Cockpit-Buch nur über XI-Kernel. Harness hält Creds und trading_fill.
status: decided
owner: shared
updated: 2026-11-24
tags: [decision, agentic-trading, xi]
---

# Festlegung

| Repo | Rolle |
|------|--------|
| `addxion-trading` | Flotte/Units, CCXT, `POST /cycle`, `/portfolio`, `/system-state`, Unit-Steuerung |
| `addxion-xi` | `GET /api/v1/venues/book`, `POST /api/v1/trading/live` → Trading-HTTP |
| `addxion-ai` | Konnektoren, Neon `org_venue_connection` + `trading_fill`, UI Normandy |
| `addxion-app` | Native Konsole, liest Trading **direkt** (Tab „Trading") |

Cockpit **liest** das Trading-Buch **nicht** direkt von addxion-trading — nur über `@addxion/xi/core`.

Konnektor-Test (`POST /connections/test`) darf Harness → Trading direkt.

## Ausnahme: native Konsole

`addxion-app` spricht `addxion-trading` direkt an (`xi-trading-client`, Tab „Trading"), parallel
zum Kernel-Weg im Tab „Handelsplatz". Begründung: Die Konsole ist ein Operator-Arbeitsplatz auf
einem Rechner, kein Mandanten-Cockpit. Sie hält keine Creds, liest nur Snapshots und startet
Dry-Run-Zyklen. Mandanten-Creds und `trading_fill` bleiben im Harness.

**Nicht übernehmen:** Ein Web-Client in addxion-ai darf diese Direktverbindung nicht nachahmen.
Dort bleibt der Kernel der einzige Weg.

Siehe [agentic-trading-rails.md](agentic-trading-rails.md), [addxion-trading](../platforms/addxion-trading.md).
