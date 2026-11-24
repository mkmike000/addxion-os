---
type: platform
title: addxion-trading
description: Modulare Algotrading-Plattform (Python). Venues für Agentic Trading. Darstellung in addxion-app.
status: active
owner: mike
updated: 2026-11-24
tags: [platform, trading, agentic]
sources:
  - id: trading-repo
    resource: mkmike000/addxion-trading
    title: addxion-trading
  - id: app-repo
    resource: mkmike000/addxion-app
    title: addxion-app (GPUI)
  - id: concept-pdf
    resource: attachments/Algo-Trading-Plattform_ Konzept und Aufbau.pdf
    title: Algo-Trading-Plattform Konzept und Aufbau (Sep 30, 2026)
---

# Zweck

Python-Service für Markt-Execution (Crypto zuerst).  
Architektur: Flotte → Signal-Unit / Operator-Unit / CatalogStore.

Cockpit und Darstellung des laufenden Systems: **addxion-app** (GPUI), Tab „Trading“.  
Web-Übersicht / Roadmap: `/operators/roadmap` in addxion.ai.

# Frameworks (Mental Models)

Persistente Lernresource im Repo: `docs/frameworks/`.

- Signal: Catalog als Single Source of Truth
- Strategy / Operator: Entscheidung vs. Ausführung
- Execution: Orders + Reconciliation + Modi (ExecutionMode ist Quelle der Wahrheit)
- Risk: Unit + Portfolio
- Data: CatalogStore (In-Memory) + Persistence (Timescale via Neon)
- Runtime: kontinuierlicher Loop
- Observability: Portfolio-Snapshot + SystemState für die App
- Position & Exit: Lifecycle einer Position
- Venues & Asset Classes: Multi-Asset / Multi-Venue Struktur

Details: [addxion-trading docs/frameworks](https://github.com/mkmike000/addxion-trading/tree/main/docs/frameworks).

# Stack

- Python 3.11+
- CCXT (CEX)
- FastAPI (REST)
- TimescaleDB via Neon (Persistenz, solange Compression nicht nötig)
- Freqtrade (Backtesting-Bridge)

# API für die App

- `GET /portfolio` — PortfolioSnapshot: Positionen, Fills, Summary, Kontext (`context` mit dry_run, sandbox, exchange_id, execution_mode, health)
- `GET /system-state` — SystemState: Flotte, Asset-Class, Venue, Health (Status + Notes + Kill-Switch + data_fresh + exchange_ok), Units + units_summary (total/running/paused)
- `GET /overview`, `GET /units`, `POST /cycle` (liefert overview + portfolio + system_state)
- `POST /connections`, `POST /connections/test`

Feld in Position-/Fill-Rows: `operator_unit` (nicht mehr `agent`).

`strategy_version` kommt als String ("1"). Client nimmt String und Zahl.

# App-Einbau (addxion-app)

Tab „Trading“ in der GPUI-App (main ab `8ec10c1`).

- Crate `xi-trading-client` (blockierend, eigener Fehler-Mapper: `trading_unreachable`, `trading_http_<status>:<detail>`, `trading_invalid_json:<status>`)
- Bearer nur wenn `XI_TRADING_SECRET` gesetzt
- Tab zeigt echten Unit-Status („pausiert“ / „läuft“), Kill-Switch als Warnsatz, Asset-Class, Venue, Health
- `/cycle`-Antwort wird direkt verwendet (kein zweites Laden)
- 10-s-Poll aktualisiert nur Daten, schreibt keine Protokollzeilen
- `/connections` und `/connections/test` im Client, noch nicht in der UI verdrahtet

Hinweis: Units starten pausiert. Ohne Aktivieren-Endpunkt bleibt der Zyklus wirkungslos. (Endpunkt nachgezogen.)

# Grenzen

Kein Billing (das ist Agentic Finances / Stripe).  
Keine Collective-Wahrheit hier.  
DEX-Adapter (Hyperliquid, Jupiter) später — Skeleton vorhanden.

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

- `ExecutionManager` mit Modi (DRY_RUN / PAPER / LIVE). **ExecutionMode ist die einzige Quelle der Wahrheit**; `dry_run` am Exchange wird daraus abgeleitet.
- `Position` als eigene Entität + `ExitMonitor`
- Reconciliation als explizites Konzept (noch Skeleton)
- Runtime + Health + Kill-Switch auf Fleet-Ebene
- Portfolio-Snapshot + SystemState für die App (statt Viewer in der Data-Unit)

Diese Schicht ist nötig, sobald man von „Demo-Skript“ zu etwas kommt, das man laufen lassen will.

## Nützlich, aber später (Skeleton vorhanden)

- Unabhängige Performance-Berechnung im Stats-Bot aus echten Fills (nicht aus Operator-Eigenmeldung).  
  Skeleton: `src/addxion_trading/operator/stats.py` (`ingest_fills`, `compute_performance`).
- Neue Operator-Units starten pausiert und werden bewusst scharf geschaltet.  
  Skeleton: `OperatorUnit.paused` (default `True`), `activate()`, `pause()`.
- Strategie-Versionierung: bei Strategie-Änderung Statistik neu beginnen.  
  Skeleton: `strategy_version`, `bump_strategy_version()`.
- Multi-Asset / Multi-Venue: AssetClass + Venue protocols + CcxtVenue.  
  Skeleton: `venues/` (AssetClass, MarketDataSource, OrderVenue, CcxtVenue). Fleet hat `asset_class`.

## Zu komplex / nicht jetzt (Skeleton vorgemerkt)

- Vollständiger Prüfkatalog vor jeder Catalog-Veröffentlichung.  
  Skeleton: `signal/validator.py` (`CatalogValidator`). Aktuell reicht: leere Daten → `is_restricted`.
- Viewer-Logik innerhalb der Data-Unit. Anzeige gehört in die App, Data bleibt Speicher.  
  In-Memory-Teil heißt jetzt `CatalogStore`. Persistence bleibt die DB-Schicht.
- Automatische Strategie-Versionierungsmaschinerie.  
  Skeleton: `operator/versioning.py` (`StrategyVersioning`). Einfaches `bump_strategy_version` existiert bereits.

## Namensgebung

Kernbegriffe (Flotte, Unit, Bot, Catalog, Operator, Signal-Unit, Operator-Unit) bleiben.

**Flotte nicht in AssetClass umbenennen.**  
Flotte = die komplette Handelsanlage (Systeminstanz).  
AssetClass = was die Flotte handelt (Eigenschaft).  
Venue = wo sie handelt (CCXT-CEX, Hyperliquid, Jupiter, …).  
Mehrere Flotten können dieselbe Asset-Klasse handeln.

**Portfolio, nicht Book / Orderbook.**  
`/portfolio` liefert den Zustand der eigenen Anlage (Positionen, Fills, Summary).  
Kein Orderbook (das wäre Bid/Ask der Börse).

**SystemState**  
Breiter als Portfolio: Flotte, Asset-Class, Venue, Health, Kill-Switch, Units.  
Endpunkt: `/system-state`.

**CatalogStore**  
In-Memory-Cache der Catalogs für den laufenden Prozess.  
Persistence (Timescale/Neon) bleibt die dauerhafte Ablage.

**operator_unit**  
Feld in Portfolio-Rows (vorher `agent`). Bezeichnet den Namen der Operator-Unit.

Die neuen Begriffe (Execution, Reconciliation, Position, Runtime, Observability, Venue, AssetClass, Portfolio, SystemState, CatalogStore) sind präziser als das PDF und nötig.

# Related

- Decision: [Agentic Trading Rails](../decisions/agentic-trading-rails.md)
- Roadmap: `docs/roadmap.md` im Repo + Web-Ansicht unter `/operators/roadmap`
- App: [addxion-app](https://github.com/mkmike000/addxion-app) — Tab Trading ab `8ec10c1`
