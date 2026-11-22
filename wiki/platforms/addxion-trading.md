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
  - id: concept-pdf
    resource: attachments/Algo-Trading-Plattform_ Konzept und Aufbau.pdf
    title: Algo-Trading-Plattform Konzept und Aufbau (Sep 30, 2026)
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
- Execution: Orders + Reconciliation + Modi
- Risk: Unit + Portfolio
- Data: Timescale via Neon
- Runtime: kontinuierlicher Loop
- Observability: Book-Snapshot für die App
- Position & Exit: Lifecycle einer Position

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

# Konzept-Abgleich (PDF Sep 2026)

Quelle: „Algo-Trading-Plattform: Konzept und Aufbau“ (30.09.2026).

## Passt gut (behalten)

- Flotte → Unit → Bot bleibt die richtige Granularität.
- Signal-Unit als einzige Rechenstelle → Catalog. Alle Operatoren sehen denselben Katalog.
- Strategy = drei Fragen: Einsteigen, Stop-Loss, Take-Profit.
- Catalog-Format: Richtung + Wert + Verlässlichkeit (bereits in `IndicatorValue`).
- Max. eine Position pro Operator/Coin, Pause bei veralteten Daten, immer Stop-Loss.
- Trennung: Wer handelt, bewertet sich nicht selbst (Stats-Bot). Wer überwacht, greift nicht ein (Watch-Bot).

## Was wir sinnvoll erweitert haben

Das PDF lässt Operatoren direkt Orders an die Börse schicken. Wir haben dazwischen gelegt:

- `ExecutionManager` mit Modi (DRY_RUN / PAPER / LIVE)
- `Position` als eigene Entität + `ExitMonitor`
- Reconciliation als explizites Konzept (noch Skeleton)
- Runtime + Health + Kill-Switch auf Fleet-Ebene
- Book-Vertrag für die App (statt Viewer in der Data-Unit)

Diese Schicht ist nötig, sobald man von „Demo-Skript“ zu etwas kommt, das man laufen lassen will.

## Nützlich, aber später (Skeleton vorhanden)

- Unabhängige Performance-Berechnung im Stats-Bot aus echten Fills (nicht aus Operator-Eigenmeldung).  
  Skeleton: `src/addxion_trading/operator/stats.py` (`ingest_fills`, `compute_performance`).
- Neue Operator-Units starten pausiert und werden bewusst scharf geschaltet.  
  Skeleton: `OperatorUnit.paused` (default `True`), `activate()`, `pause()`.
- Strategie-Versionierung: bei Strategie-Änderung Statistik neu beginnen.  
  Skeleton: `strategy_version`, `bump_strategy_version()`.

## Zu komplex / nicht jetzt

- Vollständiger Prüfkatalog vor jeder Catalog-Veröffentlichung (viele Regeln). Aktuell reicht: leere Daten → `is_restricted`.
- Viewer-Logik innerhalb der Data-Unit. Anzeige gehört in die App, Data bleibt Speicher.
- Automatische Strategie-Versionierungsmaschinerie.
- Mehrere Flotten / Asset-Klassen-Adapter (Forex, Aktien). Architektur erlaubt es, aber nicht der nächste Schritt.

## Namensgebung

Kernbegriffe (Flotte, Unit, Bot, Catalog, Operator, Signal-Unit, Operator-Unit) bleiben. Sie sind klar und decken sich mit dem Konzept.

Die neuen Begriffe (Execution, Reconciliation, Position, Runtime, Observability) sind präziser als das PDF und nötig. Keine Umbenennung empfohlen.

# Related

- Decision: [Agentic Trading Rails](../decisions/agentic-trading-rails.md)
- Roadmap: `docs/roadmap.md` im Repo + Web-Ansicht unter `/operators/roadmap`
