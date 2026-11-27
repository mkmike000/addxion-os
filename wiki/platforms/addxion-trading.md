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

Öffentlich: `https://trading.addxion.ai` über den Cloudflare Tunnel auf dem Operator-Host
(Mac Mini zuhause), dahinter `127.0.0.1:8000`. Kein offener Port am Router, kein Proxy von
Hand. Bearer-Pflicht, `/health` offen für Tunnel-Probes. Einrichtung:
`deploy/trading.addxion.ai/` im Repo.

Cockpit und Darstellung des laufenden Systems: **addxion-app** (GPUI), Tab „Trading“.  
Web-Übersicht / Roadmap: `/operators/roadmap` in addxion.ai.

Zwei getrennte Wege in die App — nicht verwechseln:

| Weg | Datenquelle | Wo in addxion-app |
| --- | --- | --- |
| Kernel | `addxion-xi` → `GET /api/v1/venues/book`, `POST /api/v1/trading/live` | Tab „Handelsplatz" |
| Direkt | `addxion-trading` FastAPI über `xi-trading-client` | Tab „Trading" |

Beide Wege enden derzeit im selben Container. Der Kernel reicht intern an
`http://trading:8000` weiter; die App spricht den Service direkt über das Tailnet
(`100.122.177.104:8000`) oder lokal. Der direkte Weg gilt nur für die native Konsole
(Operator-Arbeitsplatz). Cockpit-Nutzer in addxion-ai lesen weiter ausschließlich über den
Kernel, siehe [trading-harness-port](../decisions/trading-harness-port.md).

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

# Betrieb

Container in **OrbStack** auf dem Operator-Host (Mac Mini), neben dem XI-Kernel. Die beiden
sind keine getrennten Welten mehr: sie laufen auf derselben Maschine, im gemeinsamen
Docker-Netz, und der Kernel erreicht den Service als `http://trading:8000`.

| Von | Adresse |
| --- | --- |
| Auf dem Host | `http://127.0.0.1:8000` |
| Laptop im Tailnet | `http://100.122.177.104:8000` |
| Kernel-Container | `http://trading:8000` |
| Öffentlich | `https://trading.addxion.ai` (Tunnel, DNS offen) |

Warum Container und kein venv: der Host hatte Python 3.9, `pyproject.toml` verlangt
`>=3.11`. Details und Einrichtung: `deploy/trading.addxion.ai/README.md` im Repo.

`ADDXION_TRADING_SECRET` ist Pflicht (`${VAR:?}` im Compose). Ohne Secret startet der
Container nicht; vorher antwortete jeder Endpunkt offen. `/health` bleibt offen für
Tunnel-Probes.

Der Kernel liest `ADDXION_TRADING_URL` und `ADDXION_TRADING_SECRET`
(`lib/xi/venue/client.ex`). Er ruft intern `/portfolio`, nicht mehr `/book` — der
Service-Endpunkt wurde am 2026-11-23 umbenannt.

Der Tunnel auf dem Mini wird **remote verwaltet**: die Ingress-Regeln liegen im
Cloudflare-Dashboard, nicht in `~/.cloudflared/config.yml`. Stand 2026-11-27: CNAME auf den
Tunnel, Ingress als Version 25 vor dem Catch-All. `cert.pem` war defekt und wurde per
`cloudflared tunnel login` ersetzt; das neue Cert trägt einen `apiToken` für die
Konfigurations-API.

Öffentlich nachgewiesen: `/health` 200 ohne Token (Tunnel-Probe), `/portfolio` und
`POST /kill-switch` ohne Token 401, falsches Token 403, richtiges 200.

Der Container bindet an `0.0.0.0:8000`, nicht an Loopback — der Laptop im Tailnet und der
Kernel sollen ihn direkt erreichen. Schutz ist das Bearer-Secret, nicht die Bind-Adresse.
CORS nur als Allowlist über `ADDXION_TRADING_CORS_ORIGINS`, kein `*`. Tests:
`tests/test_public_host.py`.

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

# Host und Sicherheit

Der Service ist ein Container (OrbStack) und darüber ein Cloudflare Tunnel. Die alte
launchd-Variante (`com.addxion.trading`, `run-service.sh`, venv auf dem Host) ist überholt:
der Host hat Python 3.9, `pyproject.toml` verlangt `>=3.11`. Die Dateien liegen noch im
Repo, sind aber nicht der Weg.

`ADDXION_TRADING_SECRET` ist **Pflicht** (`${VAR:?}` im Compose): ohne Secret startet der
Container nicht. Vorher antwortete jeder Endpunkt offen, auch `POST /connections`
(Exchange-Keys) und `POST /kill-switch`. `/health` bleibt ohne Token, damit Tunnel und
Monitoring prüfen können.

Dieselbe Domain teilen sich Service und Tunnel — kein zweiter Name, kein `/api`-Präfix.
Der Tunnel terminiert TLS.

## Unit-Steuerung und Kill-Switch

Units starten pausiert (`OperatorUnit.paused = True`) und `run_cycle` steigt bei `paused`
sofort aus. Bis 2026-11-24 gab es dafür keinen HTTP-Weg — nur `activate()` in Python. Jetzt:

- `POST /units/{name}/activate` — Unit scharf schalten, Antwort ist `get_status()`. Unbekannter Name → 404 `unit_not_found`
- `POST /units/{name}/pause` — wieder anhalten, schließt keine Position
- `POST /kill-switch` — Not-Aus, `run_once` überspringt danach jeden Zyklus, `health.status` wird `critical`
- `DELETE /kill-switch` — Not-Aus lösen

**Kill-Switch lösen schaltet keine Unit scharf.** Beides ist getrennt: der Not-Aus ist eine
Flotten-Entscheidung, das Aktivieren einer Unit eine Strategie-Entscheidung. Getestet in
`tests/test_unit_state.py`.

Die App (`addxion-app`) nutzt alle vier: Im Tab „Trading" schaltet ein Knopf je Unit zwischen
pausiert und laufend, der Not-Aus-Knopf setzt und löst den Kill-Switch. Beide zeigen den
tatsächlichen Zustand aus `SystemState`, nicht einen geratenen.

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
  Umgesetzt 2026-11-24 als HTTP-Endpunkte: `POST /units/{name}/activate` und `/pause`.  
  `OperatorUnit.paused` (default `True`), `activate()`, `pause()`.
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
