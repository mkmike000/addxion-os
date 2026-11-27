# Log

Agenten-Digest. Neueste oben. Git bleibt die Versionierung. Eine Chronik: ab 2026-08 diese SSOT; davor die alte Docs-Chronik, verdichtet.

## 2026-11-27

- done: addxion-trading läuft als Container in OrbStack auf dem Operator-Host (Mac Mini), neben dem Kernel. Ports: Host 8000, Laptop im Tailnet `100.122.177.104:8000`, Kernel `trading:8000` im gemeinsamen Docker-Netz. Kein venv, weil der Host Python 3.9 hat und `pyproject` `>=3.11` verlangt.
- decision: `ADDXION_TRADING_SECRET` ist im Compose Pflicht (`${VAR:?}`). Ohne Secret startet der Container nicht. `/health` bleibt offen für Tunnel-Probes.
- done: Kernel ruft `GET /portfolio` statt `GET /book` (Service-Umbenennung vom 2026-11-23). Vorher lief die Live-Venue-Route ins 404, weil das Kernel-Image vom 11.10. den Endpunkt nicht kannte.
- lint: **Platte des Minis war zu 100 % voll** (121 MB frei), OrbStack abgestürzt, Kernel und Trading offline. Bereinigt: 42 GB verwaiste Docker-Desktop-Daten (Docker.app nicht mehr installiert, OrbStack ersetzt es), 12 GB Notion-Partitions-Cache, 5,1 GB AnzeigenChef-Reste (App nicht installiert). Stand danach: 59 GB frei, 72 %.
- done: Kernel-Rebuild braucht gedrosselte Erlang-Scheduler (`--build-arg ELIXIR_ERL_OPTIONS="+S 2"`). Ohne das killt der OOM das 16-GB-Mac-mini mitten im Build, Swap war zu 86 % voll.
- lint: offen — DNS/Ingress für `trading.addxion.ai`. Tunnel ist remote verwaltet (Regeln im Cloudflare-Dashboard), `cert.pem` vom 23.06. abgelaufen, `cloudflared tunnel route dns` scheitert mit Authentication error. Bis dahin nur im Tailnet erreichbar.
- done: `trading.addxion.ai` ist öffentlich erreichbar. `cert.pem` war defekt (282 Bytes, kein Zertifikat) und blockierte den Login; per `cloudflared tunnel login` ersetzt, das neue Cert trägt einen `apiToken` für die Konfigurations-API. DNS per `cloudflared tunnel route dns`, Ingress per API als Version 25 vor dem Catch-All. Nachgewiesen: `/health` 200, `/portfolio` ohne Token 401, falsches Token 403, richtiges 200.

## 2026-11-24

- done: Trading-Tab in addxion-app (main `8ec10c1`). Crate `xi-trading-client` gegen `/portfolio` und `/system-state`. Unit-Status, Kill-Switch, Asset-Class, Venue in der Kopfzeile. `/cycle`-Antwort direkt genutzt. Poll still. `/connections` im Client, nicht in der UI. Activate-Endpunkt im Service nachgezogen.
- done: Trading öffentlich unter `trading.addxion.ai`. Cloudflare Tunnel auf dem Operator-Host (Mac Mini zuhause), dahinter `127.0.0.1:8000`, kein offener Port. Deploy-Paket `deploy/trading.addxion.ai/` (launchd `com.addxion.trading`, `run-service.sh`, Tunnel-Skript, README). Wegen des öffentlichen Hosts ist `ADDXION_TRADING_SECRET` jetzt Pflicht — `run-service.sh` bricht sonst mit Exit 78 ab. CORS als Allowlist (`ADDXION_TRADING_CORS_ORIGINS`), `/health` bleibt offen. Tests `tests/test_public_host.py`. `addxion-app`: `DEFAULT_TRADING_URL` → `https://trading.addxion.ai`, lokal weiter über `XI_TRADING_URL`.
- done: Unit-Steuerung im Trading-Service über HTTP. `POST /units/{name}/activate`, `POST /units/{name}/pause`, `POST /kill-switch`, `DELETE /kill-switch`. Vorher gab es nur `activate()` in Python, damit blieben alle Units dauerhaft pausiert. Kill-Switch lösen schaltet bewusst keine Unit scharf. Tests `tests/test_unit_state.py` (7 Fälle).
- done: addxion-app nutzt die Unit-Endpunkte: Knopf je Unit im Trading-Tab (pausiert ↔ laufend), Not-Aus-Knopf. Client `xi-trading-client` um `activate_unit`, `pause_unit`, `activate_kill_switch`, `release_kill_switch` erweitert.
- ingest: Platform `addxion-app` angelegt (war seit 2026-11-10 nur in Decisions erwähnt). Crates `xi-client`, `xi-trading-client`, `xi-desktop`; sieben Tabs; Konfiguration; Icon-Pipeline; Release nach R2.
- done: Trading-API-Doku nachgezogen: `/book` → `/portfolio` in `agentic-trading-rails`, Direktverbindung `addxion-app → addxion-trading` als Ausnahme in `trading-harness-port` festgehalten (gilt nicht für den Web-Client).
- done: Design System Transfer — alle sieben Tabs auf den Monochrome-Tokens.

## 2026-11-23

- done: Trading-API umbenannt. `/book` → `/portfolio` (PortfolioSnapshot). Neuer Endpunkt `/system-state`. Feld `agent` → `operator_unit`. DataUnit → CatalogStore (In-Memory). ExecutionMode ist einzige Quelle der Wahrheit für dry_run.
- done: Portfolio-Struktur verbessert (Kontext unter `context`). SystemState liefert Health-Detail (status, notes, kill_switch, data_fresh, exchange_ok) und units_summary (total/running/paused). Tests in `tests/test_system_state.py`.

## 2026-11-22

- ingest: Platform `addxion-trading` angelegt. Foundations + Frameworks (Mental Models) im Repo vorbereitet. Darstellung in addxion-app. Persistenz Timescale via Neon. Roadmap in docs/roadmap.md.
- done: Roadmap-Seite unter `/operators/roadmap` in addxion.ai. Execution-Skeleton im Trading-Repo mit konkreter Struktur (Manager, Modi, Reconciliation) erweitert.
- done: Strukturrahmen komplett: Observability, Position/Exit, Data-Modelle, Health/Kill-Switch, Persistence-Skeleton. Phase 0 abgeschlossen.
- done: Verdrahtung: Operator nutzt Position + ExitMonitor + ExecutionManager. Fleet kennt RuntimeLoop und Health. Book arbeitet mit Position-Objekten. Dry-Run-Demo-Pfad bleibt funktionsfähig.
- ingest: Konzept-Abgleich PDF „Algo-Trading-Plattform: Konzept und Aufbau“ (30.09.2026) gegen aktuelles System. Kernarchitektur passt. Execution-/Position-/Runtime-Schicht ist sinnvolle Erweiterung. Stats-Bot-Unabhängigkeit und Unit-Pause später. Prüfkatalog und Viewer-in-Data-Unit nicht jetzt. Namensgebung bleibt.
- done: Skeleton für später hinterlegt: unabhängiger StatsBot (`operator/stats.py`), Unit-Pause (`paused` + `activate`), Strategie-Versionierung (`strategy_version` + `bump_strategy_version`). Roadmap Phase 4 erweitert.
- done: Multi-Asset / Multi-Venue Skeleton: `venues/` (AssetClass, MarketDataSource, OrderVenue, CcxtVenue). Fleet hat `asset_class` (default crypto_spot). CatalogValidator und StrategyVersioning als vorgemerkte Skelette. Flotte bleibt Name; AssetClass und Venue sind Eigenschaften.

## 2026-11-10

- decision: `wiki/decisions/design-system-transfer.md` — Monochrome Design Language aus addxion-ai (Neon) wird schrittweise in addxion-app (GPUI) übertragen. Tokens in theme.rs, Surfaces folgen.

## 2026-11-03

- ingest: Bestimmungs-Narrativ Mike. Roh `raw/story/bestimmung-2026-11-03.md`. Pattern `wiki/patterns/bestimmungs-kriterien.md` (draft). Kriterien: digital, wiederkehrend, zentral steuerbar, AI-fähig, skalierbar. Keine Fahrschul-Expertise. Offen: konkretes Problem.
- ingest: Abraham Bulun Korrekturen von Jakub. Roh `raw/abraham-bulun-korrekturen-2026-11-03.md`. Sohn heißt Armun (nicht Ammar), vor kurzem geheiratet. Abraham Teilhaber einiger Stores (nicht alle 17 selbst). Jakub fährt zur nächsten Eröffnung als Fahrer. Person `armun-bulun` angelegt, `ammar-bulun` Alias.
- ingest: Abraham Bulun AI-Pitch Explainer-Videos Idee. Roh `raw/abraham-bulun-ai-pitch-videos-2026-11-03.md`. Kurze 2-10 Min Videos zu AI-Business-Nutzen (Belege, Suche, RAG etc.) für YouTube/Instagram/TikTok um Wert besser zu vermitteln.
- ingest: Abraham Bulun Office-Beobachtungen. Roh `raw/abraham-bulun-office-2026-11-03.md`. Ammar ca. gleiches Alter wie Mike, etwas technischer/modern. Zwei Mitarbeiterinnen für Office. Café Cavan morgens leer.
- ingest: Abraham Bulun Zürich in-person Treffen. Roh `raw/abraham-bulun-zurich-2026-11-03.md`. Person nachgezogen (12 CH / 5 DE bestätigt, iPhone App, Hustler, Erinnerung Anfang Dezember). Eindruck an Stani gesendet.
- ingest: Abraham Bulun KFC Gespräch. Roh `raw/abraham-bulun-kfc-2026-11-03.md`. Personen `abraham-bulun`, `ammar-bulun`. Jakub nachgezogen (Cousin). Opportunity eigene App Zürich / KI. Ultimatum Anfang Dezember.

## 2026-10-30

- decision: `wiki/decisions/xi-server-client.md` — Kernel zentral, Clients dezentral. Rust-Worker für schwere Berechnung. Frontend bleibt TanStack, kein Next.js+Go. Roh `raw/xi-server-client-2026-10-30.md`.

## 2026-10-23

- decision: `wiki/decisions/xi-clients.md` — Web-Client und nativer GPUI-Client getrennt vom Elixir-Kernel. Kein NIF, kein Kernel-Bundle, Kernel bleibt Server. Roh `raw/xi-clients-2026-10-23.md`.
