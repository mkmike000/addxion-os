---
type: platform
title: addxion-xi
aliases: [XI Kernel, XI Core]
description: Elixir-Evolutionskern. Wissen hier; Code in Repo addxion-xi.
status: active
owner: shared
updated: 2026-08-27
tags: [platform]
sources:
  - id: xi-masterplan
    resource: addxion-xi/MASTERPLAN.md
    title: Kernel-Plan (ingest; Datei entfernt)
  - id: xi-status
    resource: addxion-xi/docs/STATUS_MAP.md
    title: Ist vs. Muss (ingest; Datei ist Pointer)
  - id: xi-factory
    resource: addxion-xi/docs/BRAIN_FACTORY.md
    title: Brain · Run · Recipe (ingest; Datei ist Pointer)
  - id: xi-domain
    resource: addxion-xi/docs/DOMAIN_INTELLIGENCE.md
    title: Domain-Canvas (ingest; Datei ist Pointer)
  - id: xi-kernel
    resource: addxion-xi
    title: Isolate / Remember / Message / Select / Constrain
---

Runtime. Isolate · Remember · Message · Select · Constrain. Collective bleibt dieses Wiki. Instanz: Repo `addxion-xi` (`AGENTS.md`, Code, README).

[T-PKG-XI](../fundamentals/truths.md), [T-EVOLUTION-CORE](../fundamentals/truths.md), [T-KLARTEXT](../fundamentals/klartext.md), [XI ist Runtime](../fundamentals/xi-ist-runtime.md).

**Stand:** Aug 2026 · Fundament (EC-0/1, AT-1 Paper, Factory Runs, CLI, Pipeline Phases 3–11) gelegt.  
**Fokus jetzt:** Keil schließen (domain-agnostisch) → World dünn (Runs/Metrics) → weitere Agentic-*-Envs.

**Leitsatz:** Schlechte Brains sterben, gute Recipes bleiben — messbar, unter Budget, über Domänen.

# Zweck

Portabler Evolutions- und Swarm-Kern: mutieren → trialen → scoren → committen — in jeder Umgebung über Adapter, mit Rollback und Turso-Memory.

| Lesart | Bedeutung |
|--------|-----------|
| **XI** | Intelligenz über Grenzen kreuzen und skalieren |
| **add(xi)on** | X = Multiplikation; XI = multiply / cross intelligence |
| **XI Kernel** | Mechanik: Loop, Swarms, Memory, Ports (Repo `addxion-xi`) |

- **Self** portabel (Elixir/OTP)
- **World** steckbar (nur Ports)
- **Memory** in Turso (1 DB / Agent)

Ohne Score = Chatbot-Farm. Mit Score = Optimierer.

# Grenzen

- Kein Firmenwiki, kein Collective in Turso.
- Kein Chat-/Coding-Produkt. Pi darf als Port hinter `:coding` hängen — nicht Keil-Kern.
- Kein Ersatz für `@addxion/ai`.
- Kein Domain-Protokoll im Kernel (AdCP nur Ads-Env).
- Kein Universalitäts-Claim ohne ≥2 Envs.
- Kein paralleler Plan im Kernel-Repo. Hinweise: `AGENTS.md`.

# Schichten

```
Apps (addxion.ai · …)              Worlds / Kunden-UI
        │
@addxion/xi                        TS-SDK (Repo addxion-ai)
 ├── protocol                      Vertrag / Typen
 └── core                          HTTP-Client → Kernel
        │
XI Kernel (Elixir/OTP)             Repo addxion-xi
 ├── Swarms / Agent GenServers
 ├── Evolutionsloop + Factory
 ├── Event Bus / Effect Log
 └── Turso Brains (1 DB / Agent)
        │
optional @addxion/ai               LLM als Worker-Capability
```

| Schicht | Verantwortung | Nicht |
|---------|---------------|-------|
| **XI Kernel** | Loop, OTP-Swarms, Turso-Brains, Score, Factory | Chat-UI, Auth, Branding |
| **`@addxion/xi/core`** | TS-Client → Kernel HTTP | Evolutionslogik im Bundle |
| **`@addxion/xi/protocol`** | Types, Envelope | UI |
| **addxion.ai** | World: Runs-Cockpit, Fleets, Feature-Gates | Kernel-Interna |

`@addxion/xi/nav` ist entfernt. App-Nav: `manifest.ts` + app-lokal.

# Keil

| Primitive | Bedeutung | Schon da | Noch |
|-----------|-----------|----------|------|
| **Isolate** | 1 Turso-Brain / Agent | lokal + Cloud-Code | Live-Verify Turso-Account |
| **Remember** | Events, Focus, Memories | Paper-`run_id` | Envelope-Typen durchgängig |
| **Message** | Peer-Messages, kein shared Memory | Swarm / CLI | strukturierte Envelopes durchgängig |
| **Select** | Score → Commit / Kill | `decide_from_score` + series | Evolution↔Factory enger |
| **Constrain** | was erlaubt ist | episode limit + soft TTL | tool-call limits |

`constrain` = Verb. Die Zahlen heißen **limits**. [Klartext](../fundamentals/klartext.md).

Runtime-Verstärker (WASM, Binary Wire, Secret-Broker, …) und **dezentrales Agenten-Internet** (A2A Protocol + Crypto + P2P): siehe [Später](#später). Nach geschlossenem Select-Loop.

`Message` im Keil ≠ [A2A Protocol](https://a2a-protocol.org/latest/). A2A Protocol = externer Interop-Adapter.

# Begriffe

| Wort | Ding | Nicht |
|------|------|--------|
| **Tenant** | wem es gehört (`acme`) | Role, Env |
| **Workspace** | Sitz: Disk + `exec` hinter `constrain` | run dir, Pi |
| **Run** | ein bewerteter Versuch | Tenant, Swarm |
| **run dir** | Ordner eines Runs (`runs/<run_id>/`) | Workspace |
| **Recipe** | Spielweise, die Select behält | Artifact, Policy |
| **Brain** | Memory eines Agenten (1 DB) | Agent (OTP-Hülle) |
| **Agent** | Runtime um ein Brain | Fleet |
| **Swarm** | lebende Gruppe | Run (bewertet) |
| **Fleet** | UX-Gruppe in addxion.ai | Swarm |
| **Env** | Weltphysik hinter Ports | Tenant, Marketing |
| **Product line** | Oberbegriff (Nav, Bundle-Score) | Env |
| **Role** | Job des Agenten im Tenant | Tenant |

Marketing = Product line + optional RecipeBundle. Kein Env.

Tenant-Namen: `{org}-{env}[-{project}]`, lowercase, `a-z0-9-_`, ≤64, kein Role-Name als Tenant. Beispiele: `acme-dev`, `acme-prod`, `addxion-demo`, `personal-jacky`.

```
tenant: acme
  ├── agent A (role: market)  → brain acme/<idA>.db
  └── agent B (role: risk)    → brain acme/<idB>.db
        ↑ nur Messages, kein shared Memory
```

Agents nebeneinander: Isolation durch eigene Brains, Rede nur über Messages. Tenants isolieren Workspaces/Kunden (Pfade / Cloud-DB-Namen).

**solo** (`kind: "solo"`): ein Agent via `xi.spawn`. **swarm** (`kind: "swarm"`): ≥2 Rollen. Intern derselbe Index (`_meta/swarms.json`).

# Ports und Envs

Gleichwertige Env-Familien hinter denselben Ports — **keine Domain-Hierarchie**. Kernel bleibt domain-agnostisch.

| Port | Input | Output | Kernel-Nutzung |
|------|-------|--------|----------------|
| `observe` | ctx | observation (+ `_ctx`) | Agent sieht Welt |
| `act` | ctx, action | ctx' | Transition |
| `evaluate` | ctx | float score | Back-compat Select |
| `evaluate_report` | ctx | `Xi.Score` envelope | Preferiert |
| `constrain` | ctx, action | `:ok` \| error | was erlaubt ist |

Contract: `Xi.Env.Contract` · Tests: `test/xi/env/contract_test.exs`.

Kernel sieht Score, `score_version`, `violations` — keine Domain-Felder. `diagnostics` sind opaque (IO/UI).

| Env | Score-Richtung | Status |
|-----|----------------|--------|
| Trading (Paper) | PnL / Drawdown / limits | Harness **Ist** |
| Websites | Conversion / Qualität | Harness **Ist** · Live-Adapter offen |
| Ads | ROAS / CAC / delivery limits | Harness **Ist** · AdCP-Live offen, AdCP nicht im Kernel |

Paper ist Harness für `evaluate`, kein privilegiertes Produktziel.

```
Tenant
 └── Product line (marketing | trading | …)   ← Bundle-Score möglich, kein Env
      └── Env (ads | websites | paper_trading | …)
           └── Agent Swarm
                ├── <role>.db …
                └── Messages (keine shared Tables)
```

# Factory

XI ist eine Fabrik für Gehirne: nicht Chatbots, sondern Einheiten mit Memory, Lifecycle und Selektionsdruck.

```
Use Case
   ↓
Factory spawnt Brain(s)     ← Isolation (1 Turso-DB pro Agent)
   ↓
Agents messagingen          ← Messages (kein shared Memory)
   ↓
Score entscheidet           ← Natural Selection
   ↓
Teardown / Archive          ← Tod ist ein Feature
   ↓
Recipe bleibt               ← was überlebt, wird wiederverwendet
```

**Emergenz** = Isolation + Messages + Score.

Run = spawn → message → score → teardown. Economics-Unit. Nicht „ein Agent“ als Abrechnung.

| Ebene | Unit | Skaliert wie |
|-------|------|--------------|
| Atom | **Brain** | Anzahl Gehirne / Storage |
| Runtime | Agent | Prozesse |
| Mission / Cash | **Run** | Jobs mit Score |
| IP / Moat | **Recipe** | Wiederverwendung über Tenants |

Recipe = was Selektion behält (`commit` / list / rollback). Evolution-Meta: Tabelle `recipes`.

Score steuert Teardown / Recipe-Candidate / `budget_hint`, wenn der Caller `teardown` nicht setzt. `run_swarm_series` kettet Budget. Events tragen `run_id`.

Wann Swarm/Run lohnt: echte Rollenkonflikte (Market vs Risk), messbarer Env-Score. Wann nicht: gleiche Aufgabe, gleicher Kontext, kein Score → ein Agent reicht.

```
Contribution Margin / Run
  = Revenue / Run
  − (LLM + Tools + Turso + Compute × Brain-Sekunden × N Agents)
  − Failed-Trial-Anteil

Value / Recipe
  = Σ Margins aller Runs auf diesem Recipe
  − Kosten, es zu finden (Trials bis Commit)
```

Pro Run (Factory-Ledger): `brains_spawned`, `messages`, `score`, `duration_ms`, `cost_llm_eur` / `revenue_eur`, `recipe_id`, `status` (`running` · `scored` · `torn_down` · `failed`).

# Domain

Haltung aus dem Architektur-Chat. Status **Ist**, wo nicht anders.

| # | Entscheidung |
|---|--------------|
| D1 | Kernel domain-agnostisch: Ports + Select + limits + Recipe-Ledger |
| D2 | Env = Weltphysik + Score, nicht Tenant |
| D3 | Domain-Intelligenz = State / Actions / Transition / Score / Constraints / Recipe |
| D4 | Elixir zuerst für Envs |
| D5 | Rust nur bei gemessenem Hot-Path — bewusst offen |
| D6 | Keine eigene DSL / LSP jetzt |
| D7 | Rhai/Scripting erst bei Schmerz |
| D8 | Marketing = Portfolio/Bundle, kein Env |
| D9 | Score-Envelope `score_v1` |
| D10 | ≥2 Envs als Agnostik-Beweis (Ads + Websites Harness neben Paper) |
| D11 | AdCP nur im Ads-Env |
| D12 | Recipes früh: commit / list / rollback + Bundle-Kind |

Score-Envelope:

```json
{
  "score": 0.81,
  "score_version": "score_v1",
  "diagnostics": { "... domain-opaque ..." },
  "violations": 0
}
```

Marketing-Portfolio: `marketing_score = w_ads * ads.score + w_web * websites.score - cross_penalty` — `Xi.Score.portfolio/3`, `Xi.RecipeBundle.score_marketing/3`.

## Trading (Paper) — Ist / vertieft

| Block | Inhalt | Wo |
|-------|--------|-----|
| State | price, position, equity, dd, regime, day_*, cooldown | `Xi.Envs.PaperTrading` |
| Actions | buy \| sell \| hold + size | recipe → action |
| Transition | fills, stop, daily loss, cooldown | `act/2` |
| Score | pnl − dd − violations − blocks | `evaluate_report/1` |
| Constraints | max_position, stop_dd, max_daily_loss, cooldown | `constrain` + gates |
| Recipe | edge, size, max_position, stop_dd, max_daily_loss, cooldown_bars | Factory kind `paper_trading` |

## Ads — Harness

| Block | Inhalt | Wo |
|-------|--------|-----|
| State | spend, impressions, clicks, conversions, revenue, budget_left, bid, pace | `Xi.Envs.Ads` |
| Actions | set_bid, shift_budget, pause/enable creative | `act/2` |
| Transition | synthetic auction + delivery | `deliver/1` |
| Score | ROAS/CAC/underspend/freq shaped | `evaluate_report/1` |
| Constraints | bid/budget/explore/creative ranges | `constrain/2` |
| Recipe | bid, budget, explore_rate, creative_on | kind `ads` (via `body`) |

Nicht gebaut: Live AdCP-Adapter.

## Websites — Harness

| Block | Inhalt | Wo |
|-------|--------|-----|
| State | traffic, bounce, cvr, aov, lcp, cls, brand_violations, funnel_weak_step | `Xi.Envs.Websites` |
| Actions | swap_variant, set_cta, set_copy, toggle_module | catalog-only |
| Transition | synthetic traffic response | `simulate_traffic/1` |
| Score | cvr×value − bounce − perf − brand | `evaluate_report/1` |
| Constraints | hero catalog, ranges, module 0/1 | `constrain/2` |
| Recipe | cta_strength, hero_variant, module_social, copy_clarity | kind `websites` |

Nicht gebaut: echtes Crawl/Shadow-A/B, CMS-Write.

## Marketing Bundle — Ist

Weights, Members (recipe_id + kind + inline `body`), shared limits (`shared_limits`; liest alt `shared_caps`), Persist als Factory recipe `kind: "marketing_bundle"`.

```json
{
  "bundle": "marketing",
  "score_version": "score_v1",
  "weights": {"ads": 0.6, "websites": 0.4},
  "members": {
    "ads": {"recipe_id": null, "kind": "ads", "body": {"bid": 1.2}},
    "websites": {"recipe_id": null, "kind": "websites", "body": {"cta_strength": 0.8}}
  },
  "shared_limits": {"brand_max_violations": 0}
}
```

Code: `lib/xi/score.ex`, `lib/xi/recipe_bundle.ex`, `lib/xi/env.ex`, `lib/xi/envs/*.ex`.

# Speicher

| Begriff | Rolle |
|---------|--------|
| **Turso** | Produkt / Cloud / gemeinte DB |
| **`ecto_libsql`** | Elixir-Treiber (Name ≠ Produktwahl) |

| Scope | Isolation |
|-------|-----------|
| Agent Brain (events, focus, memories, embeddings) | 1 DB / Agent |
| Evolution Meta (proposals, scores, recipes) | 1 DB Kernel oder Tenant |

Kein Pinecone/Weaviate im MVP. Meta heute teils noch Postgres — Übergang.

Datei (local): `priv/brains/<tenant>/<agent_id>.db`.

| Tabelle | Inhalt |
|---------|--------|
| **events** | Envelope-Timeline |
| **agent_focus** | 1 Zeile: `current_task`, `goals_json` |
| **memories** | Content + Embedding (JSON-Array) + metadata |

Agent: dünner GenServer; Dauerzustand in Turso. Hält conn zur Brain-DB: chat/tell → INSERT events; status → focus; events → SELECT; similar_memories → scan + cosine in Elixir.

Envelope-Typen: `Thinking` \| `Decision` \| `ToolCall` \| `Observation` \| `Reflection` \| `GoalUpdate` \| `Score`.

Brain-Backends: `local` (default, Datei unter `priv/brains/`) · `remote` (`TURSO_API_TOKEN` + `TURSO_ORG`) · `replica` (Cloud + lokale Embedded Replica). Setup: Kernel-README.

Turso Cloud (Secrets nicht in Chat): `TURSO_API_TOKEN` (Platform API), `TURSO_ORG` (Org-Slug), optional Pilot `TURSO_URL` + token.

```bash
turso db create xi-brain-pilot
turso db show xi-brain-pilot --url
turso db tokens create xi-brain-pilot
turso org token create
```

Performance-Risiken: `similar_memories` lädt bis 2000 Rows (cosine in BEAM); viele offene Agents = je 1 Connection; events ohne Limit; remote = RTT (`replica` hilft); LLM in `chat` dominiert Latenz. Regel: Brain klein halten; Similarity erst mit native Turso vectors skalieren.

# Evolutionsstufen

| Stufe | Inhalt | Status |
|-------|--------|--------|
| 1 Behavioral | Recipe A/B gegen Score | MVP / härten |
| 2 Skill/Code | Module nur bei Messgewinn | danach |
| 3 Architektur-Selbstumbau | Kernel redesign | Vision |

Autonomie: **Propose → Trial → Commit → Propagate**.

# Nächste Entwicklung

Erste 3 (Attacke — in dieser Reihenfolge):

| # | Slice | Warum essentiell | Status |
|---|--------|------------------|--------|
| **1** | **Score → Factory** | Ohne das ist Isolation nur Storage. Selektion muss Spawn/Budget/Teardown steuern. | **Ja** (Paper) — `decide_from_score` + `next_episodes` / `run_swarm_series`; API ohne forced teardown |
| **2** | **Effect Log** | Score ohne Trajectory = Anekdote. Envelope-Timeline (+ Run-ID) ist Wahrheit für Eval, Audit, später RSI. | **Ja** (Paper) — `run_id` + Score-Meta auf Events |
| **3** | **Constrain limits** | Loop ohne Budget frisst sich selbst. TTL/episodes/tool-calls am Run — sonst kein sicheres RSI-light. | **Ja** (lean) — `max_episodes` + soft `max_duration_ms` TTL |
| **4** | **Recipe Commit** | was überlebt, muss bleiben | **Ja** (lean) — Ledger commit/list/rollback · `GET/POST /api/v1/recipes*` |

Danach: Isolate Cloud live · World dünn · Envs Websites/Ads live · tool-call limits.

Reihenfolge gesamt:

1. **Keil schließen** — Score→Factory · Effect Log · limits · Recipe
2. **World dünn** — Factory Runs + Metrics in addxion.ai (`XI_KERNEL_URL`)
3. **Envs einstecken** — Websites, dann Ads (Live-Adapter; Harness bleibt Golden Run)
4. **World vertiefen** — nur was Runs/Selektion braucht (kein CLI-Clone)

## Slice-Disziplin

| Regel | Bedeutung |
|-------|-----------|
| **Ein Slice = ein Done** | messbarer Outcome in diesem File |
| **Golden Run** | festes Harness-Skript → Score + Events + Factory-Zeile; nach jedem Slice noch grün |
| **Failure budget** | limits für Tokens/Zeit/Agents *am Slice selbst* |
| **Harness ≠ Domain** | eingestecktes Env nur für `evaluate`, keine Domain-Features im Kernel-Slice |
| **World-dünn hart** | nur Runs + Metrics; alles andere = Scope-Creep |
| **Kill-Kriterium** | Slice stoppen/schneiden wenn Done nicht greifbar |

Offen nach diesem Keil (Domain-Canvas): Factory speichert noch primär float score (Envelope ist da); AdCP-Live; echte Site-Adapter; Bundle-UI in addxion.ai; Recipe Diff / Shadow; `xi bundle` / Marketing-Portfolio aus zwei Runs; Rust-NIF nur bei gemessenem Hot Loop.

Nicht als nächstes: eigene DSL, LSP, Wasm-Plugins, `xi run marketing`.

# Stand

Fokus: Keil zu (Paper-Pfad **Ja**) → World dünn (Runs/Metrics in addxion.ai) → Live-Envs.

| Stufe | Ziel | Status |
|-------|------|--------|
| EC-0 | Agent + Brain + Swarm | weitgehend **Ist** |
| EC-1 | Behavioral Loop Commit/Rollback | **Ist**, Factory-Kopplung offen |
| AT-1 | Paper Trading Ports + Score | **Ist** (Harness) |
| Keil | Score→Factory · Effect Log · limits · Recipe-Ledger | **Ja** (Paper-Pfad); Cloud/World/tool-call limits offen |
| World dünn | Runs/Metrics live | **Fokus** |
| EC-2 | Agentic Websites | **Harness Ist** · Live-Adapter danach |
| EC-3 | Agentic Ads (AdCP-Adapter) | **Harness Ist** · AdCP-Live danach |
| Marketing Bundle | Portfolio-Score + `marketing_bundle` Recipe | **Ist** (lean) |
| RSI-light | Meta mutiert Mutationsparameter unter limits | danach |

Factory: Run-Ledger start/finish/list/metrics · `factory_band` / `recipe_candidate`. Teardown = Score-Politik (auto wenn kein `teardown` im Body). Euro grob → echt noch offen. Recipe-Diff · Shadow mode noch offen.

CLI (Dev):

| Befehl | Status |
|--------|--------|
| `xi run [trading\|websites\|ads]` | **Ja** — Runner + Catalog; `priv/envs` = harness_defaults |
| Marketing als Env | **Nein** (guard) — `Xi.Marketing` / RecipeBundle |
| Run `score_envelope` | **Ja** — in metrics + Score-Event |
| `xi runs [--limit]` · `xi metrics` · `xi status` | **Ja** — `count` · `help[]` · `xi runs --full`. Status: Workspace-Adapter + coder |
| Domain-Flags in globaler CLI | **Nein** — Config pro Env |
| Live-Broker / Live-Site / AdCP | offen |

Pipeline (Implementation Runs, Postgres):

| | Schon da | Noch |
|---|----------|------|
| Orchestrator | `start_run` · `advance_pipeline` · HITL approve/reject · `reconcile` | — |
| Phasen | analyzing → proposing → coding → evaluating → critiquing → reviewing → deploying → completed | LLM live (optional) |
| API | `/api/v1/runs/:id` · approve/reject · fitness · strategy/roadmap · architectural_proposals | — |
| Factory vs Pipeline | Factory Runs: `GET /api/v1/runs` · Pipeline: `GET /api/v1/pipeline/runs` | Naming vereinheitlichen? |

Workspace + Pi: **Ja** — Dev-Default `:orbstack` + `backend: :pi`. Test/CI: `:dir` + Jido.

# addxion.ai

Kernel = Fabrik. App = Cockpit für **Runs & Selektion**. Flotte **Normandy** — Panel Factory Runs + Metrics (`XI_KERNEL_URL`).

| Zeigen | Nicht zeigen |
|--------|----------------|
| Factory Runs-Tabelle + Metrics | Setup-Wizard, Brain-Pfade, Secrets |
| Run-Detail (Score, Recipe, limits) | Terminal-REPL / Chat 1:1 spiegeln |
| Fleet-Kontext (z. B. Normandy) | Evolve-/Meta-Internals als Dashboard-First |
| Agent-Liste read-only (id, role, status) | Markdown-CLI, Debug-Schritt |

Status World: Factory Runs + Metrics = Panel-Branch, Wiring offen. Run-Detail / Recipe-Liste später. CLI-Spiegel / Brain-Pfade **Nein**.

Nächste World-Slices: Cockpit zeigt `score_v1` / Envelope-Diagnostics (read-only) → Marketing Bundle UX/API (zwei Env-Runs → `Xi.Marketing.score` → `marketing_bundle` commit) → ein Live-Adapter (Ads AdCP *oder* Websites Shadow; Harness bleibt Golden Run) → Recipe Diff / Shadow → Perf erst profilieren.

# CLI

Kern: `xi run [trading|websites|ads]` · `xi runs [--limit] [--full]` · `xi metrics` · `xi status` · `xi brain` · `xi spawn` · `xi agents` · `xi message` · `xi stop` · `xi kill` · `xi help` / `mix xi install`.

`xi run <env>` = Factory Run; Domain-Config in `priv/envs/`. Kein `--coder` an `xi run` — Factory ist nicht die Pipeline. Workspace + coder: `xi status`. Chat-Session = Dev/Debug, nicht UI-Ziel.

```bash
mix xi.spawn --tenant acme-dev --role trader --chat
```

Setup: Kernel-README, nicht hier.

# API

| Methode | Pfad | Zweck |
|---------|------|-------|
| GET | `/api/v1/status` | inkl. `factory` Snapshot |
| POST | `/api/v1/swarms` | Swarm starten |
| DELETE | `/api/v1/swarms/:id` | Teardown (Brain-Dateien bleiben) |
| GET | `/api/v1/agents/:id/events` | Envelope-Timeline |
| POST | `/api/v1/evolve` | Evolution |
| POST | `/api/v1/trading/paper` | AT-1 Run (Score→Factory auto, außer `teardown` gesetzt) |
| GET | `/api/v1/factory/metrics` | Aggregate für Dashboard |
| GET | `/api/v1/runs` | Factory Runs-Tabelle |
| GET | `/api/v1/recipes` | Recipe-Ledger |
| POST | `/api/v1/recipes/commit` | Recipe aus Run committen |
| GET | `/api/v1/pipeline/runs` | Implementation-Pipeline |
| GET | `/api/v1/runs/:id` | Pipeline-Run |
| POST | `/api/v1/runs/:id/approve` · `reject` | HITL |
| GET/POST | fitness · strategy/roadmap · architectural_proposals | Pipeline |

# Workspace und Pi

Workspace = ein Sitz **pro Tenant**. Default-Adapter **`:orbstack`**. `:dir` für Test/CI und Maschinen ohne `orb`. Prod später gleicher Port.

run dir liegt in der Workspace. Fallback `Xi.RunDir` wenn der Port aus ist.

Pi = Coding-Worker hinter `:coding`. Default **`backend: :pi`**. Jido nur mit `XI_CODER_BACKEND=jido` oder in Tests. Kein stiller Fallback: Binary fehlt → Fehler. Bash auf dem Host aus; in OrbStack an. Pi darf AXI-CLIs (`gh-axi`, …) in der Workspace execen, wenn `allow_bash` an ist. Kernel vendort sie nicht. Bindung: [AXI](../processes/axi.md).

`orb run -m <machine> …` (kein `--`). Linux-Node + `pi` liegen unter `/work/.xi` (Host-Cache `~/.cache/xi/guest-tools`, glibc — Ubuntu, nicht Alpine). Isoliertes Netz blockiert Host/LAN, nicht das öffentliche Netz.

Flags: `XI_WORKSPACE_ENABLED`, `XI_WORKSPACE_ADAPTER`, `XI_ORB_BINARY`, `XI_PI_BINARY`, `XI_PI_ALLOW_BASH`, `XI_PI_MAX_DURATION_MS`, `XI_PI_MAX_TOOL_CALLS`. Code: `Xi.Ports.Workspace`, `Xi.Ports.Pi`, `Xi.RunDir`.

Zwei Adapter, kein Keil-Primitive. `constrain` bleibt das Port-Verb.

# Kohärenz und Emergenz

**Kohärenz** = Envelope · Ports · Agent · Score→Commit.  
**Emergenz** = Isolate · Message · Select (+ Constrain unter echten Kosten).

Ohne `evaluate`: parallele Chatbots. Mit Score: Cross Intelligence.

# Führungsprinzipien

1. Kein umgebungsspezifisches Feature ohne Port.
2. Keine Evolution ohne Score.
3. Agentic-* sind gleichwertig; Kernel domain-agnostisch.
4. Lean + agile: dünne Slices, dieses File als Tracker.
5. Elixir = Betrieb (Supervision, parallele Trials).
6. **Ein Plan:** dieses File.
7. **Docs mitliefern:** Code-Änderung am Keil/API → dieses File im selben Zug. Setup-only: Kernel-README. Hinweise im Repo: `AGENTS.md`.

# Später

Bewusst **nicht jetzt**. Nach Keil + World-dünn priorisieren.

## Hoher Hebel (nächste Kandidaten nach Fokus)

| Idee | Wert | Voraussetzung |
|------|------|---------------|
| **Score-Schema versioniert** (`score_v1`) | Domains vergleichbar ohne Kernel-Fork | Score→Factory steht — Envelope **Ist**, Factory speichert noch primär float |
| **Shadow mode** | neue Recipe nur beobachten, dann Commit | Recipe-Versionierung |
| **Env contract tests** | jeder Adapter muss Ports + Score-Shape erfüllen | ≥2 Envs — Tests **Ist**, CI-Gate dokumentieren |
| **Recipe diff** | was zwischen Commits änderte | Commit/Rollback sichtbar |
| **Deterministic seed / replay bar** | Trials reproduzierbar | Effect Log First-Class |
| **Deliberate death** im Ledger | warum ein Run starb | Score→Factory |
| Native Turso **vectors** | Similarity in DB statt JSON-Scan | Scale |
| **checkpoints** | Snapshots für Rollback | — |
| **tools** History | ToolCall-Ergebnisse indexiert | — |
| Cloud **archive** meta | frozen brains nach Teardown | — |

## Interop und Runtime

| Idee | Haltung | Note |
|------|---------|------|
| **A2A Protocol** ([a2a-protocol.org](https://a2a-protocol.org/latest/)) | **Später, Adapter — nicht Kernel-Kern** | Externes Agent↔Agent (opaque Apps). XI-intern bleibt Envelope/`Swarm.message`. MCP = Tools (Komplement). Bridge erst wenn fremde Agents angebunden werden. |
| **Binary Wire** (kompakte Bytes) | Später | Transport-Optimierung *unserer* Envelopes; nicht dasselbe wie A2A Protocol |
| **WASM / MicroVM Sandbox** | Später | harte Tool-Isolation |
| **Capability / Secret Broker** | Später | nach limits + mediated tools |
| **Mediated Tool Execution** | Später | Side-Effects nur über Broker |
| **Hibernation-to-zero** | Später | Idle-Density |
| **Time-Travel / Replay UI** | Später | Effect Log zuerst |
| **Native Turso Vectors** | Später | Similarity-Scale |
| **Recipe-Propagate über Tenants** | Später | lokale Recipes zuerst |
| **Sub-Agents hinter constrain** | Später | limits + Select |
| **Freier Topologie-Generator** | Später | Score-Historie steuert schon |
| **Euro-Kosten echt** | Später | grobe Metrics zuerst |
| **Lokales LLM als Kern** | Nein als Kern | optional Worker |
| **Markdown-CLI-Chat** | Nein (Terminal) | ggf. App-Export |
| **Kernel-Selbstumbau (Stufe 3)** | Vision | RSI-light + limits |
| **AdCP / A2A Protocol im Kernel** | **Nein** | nur Domain-/Interop-Adapter außen |
| **libp2p / DHT / GossipSub** | Später, Transport-Port | Discovery + Mesh; keine zentrale Registry |
| **IPFS (o. ä. CAS)** | Später, Storage-Port | Agent Cards, Artifacts, signed Receipts — content-addressed |
| **DIDs + x402 / Escrow** | Später, Trust-/Settle-Port | Identity, Micropayments; limits begrenzen Spend |
| **Capability-Märkte** (Bittensor-/PeerClaw-Muster) | Vision, Economy-Port | Incentive für zuverlässige Capabilities; kein Vendor-Lock im Kernel |
| **DePIN Compute** | Später, Compute-Port | idle/remote GPU mieten; Abrechnung über Settle-Port |

## Dezentrales Agenten-Internet (Vision)

These: **A2A (Semantik) + Crypto (Trust/Pay/Identity) + P2P (Transport/Storage/Compute) = ein Stack** — nicht zwei Welten kleben. Peers sind symmetrisch: jeder Agent kann Client und Server sein. Kein zentrales Orchester.

Schichten — alles **außen** am Kernel, Ports/Adapter:

```
Connectivity & Discovery    libp2p · Kad-DHT · GossipSub · Mesh
Semantik & Task-Delegation  A2A Protocol (Adapter) · Capability-Descriptors
Speicher & Beweise          IPFS / CAS · Agent Cards · signed Receipts/Traces
Wirtschaft & Trust          DIDs · Tokens · Escrow · x402 · Reputation
Ressourcen                  DePIN / edge Compute (Akash, Render, …)
        │
        ▼  Ports only
XI Kernel                   Isolate · Remember · Message · Select · Constrain
                            (Turso-Brain, Envelope, Score→Factory, limits)
```

| Schicht | Job | Bausteine (Beispiele) | XI-Haltung |
|---------|-----|------------------------|------------|
| **Connectivity** | finden, Mesh halten | libp2p, Kad-DHT, GossipSub | Transport-Port; Topologie nicht im Kernel |
| **Semantik** | Tasks delegieren, opaque Apps | A2A Protocol, signed Capability-Descriptors | Interop-Adapter; intern = Envelope |
| **Speicher / Beweise** | Cards, Knowledge, Weights, Receipts | IPFS, Arweave-ähnlich, content-addressed | Storage-Port; Brain bleibt Turso/`Isolate` |
| **Wirtschaft / Trust** | Identity, Pay, Reputation | DIDs, x402, Escrow, Token-Evidence | Settle-/Identity-Port; limits aus `Constrain` |
| **Ressourcen** | Compute mieten wenn lokal zu schwach | DePIN (Akash, Render, io.net, …) | Compute-Port; Score bleibt Kernel |

Klassischer P2P-Kontext (BitTorrent, Tox/Nostr-Relays, BOINC, Filecoin/Storj): Muster-Lieferanten für Discovery, CAS und Anreize — **keine** Kernel-Dependencies.

| Kernel (unverhandelbar) | Ports liefern |
|-------------------------|---------------|
| Envelope / `Swarm.message` | A2A-Bridge zu fremden Agents |
| 1 Turso-Brain / Agent (`Isolate`) | CAS für geteilte Cards/Artifacts |
| Score → Commit / Kill (`Select`) | on-chain / signed Evidence als Input zu Score |
| limits, Budget, Tool-Rechte (`Constrain`) | Spend-Limits gegen Settle; Compute-Miete |
| Effect Log / Recipes | verifizierbare Receipts im Mesh |

Chain und Markt liefern **Receipts und Anreize**. Evolutionslogik (mutieren → trialen → scoren → committen) bleibt Kernel.

**Local-first:** Persönliche / edge Agents: sensible Arbeit bleibt lokal (Turso-Brain, limits). Ins Mesh nur, was der Agent teilen will (Card, Capability, bezahlter Subtask, Receipt). Global = Discovery + Settlement; lokal = Memory + Selektion.

Reihenfolge (wenn Später dran ist):

1. Keil + limits + Effect Log stehen (Voraussetzung).
2. **Identity- + Settle-Port** (DID optional, x402/Escrow hinter limits).
3. **A2A-Bridge** (fremde Peers; intern weiter Envelope).
4. **Discover-Port** (libp2p / DHT — Agent Cards austauschen).
5. **Storage-Port** (IPFS/CAS für Cards, Artifacts, Receipts).
6. **Compute-Port** (DePIN) + später Capability-Märkte (Incentive-Layer).

Skip Schritte nicht „Marktplatz zuerst“ — sonst Orchester mit Token-Lack.

| Nein | Warum |
|------|--------|
| A2A Protocol / AdCP / libp2p **im Kernel** | Kernel domain- und transport-agnostisch |
| Shared CRDT-Memory als Keil-Default | Keil: kein shared Memory zwischen Agents |
| Bittensor/PeerClaw/Society als Vendor-Kern | Muster ok; Port-Schnittstelle, kein Lock-in |
| On-chain Score als Ersatz für `evaluate` | Score-Politik bleibt lokal/versioniert (`score_v1`) |

# Instanz

| Ort | Rolle |
|-----|--------|
| dieses File | was gilt — der Plan |
| `addxion-xi/AGENTS.md` | Vertrag für Agents im Kernel-Repo |
| `addxion-xi/README.md` | Setup, CLI-Install, Docker, HTTP |
| `addxion-xi` Code | Ausführung |

# Agent-Regeln

Query zuerst dieses File. Evolutionslogik nicht nach `@addxion/xi` kopieren. Nav nicht ins XI-Package. Code-Änderung am Keil/API: dieses File im gleichen Zyklus. Hinweise im Kernel-Repo nur `AGENTS.md`.
