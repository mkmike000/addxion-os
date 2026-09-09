---
type: platform
title: addxion-ai
description: KI-App unter addxion.ai und Package @addxion/ai.
status: active
owner: shared
updated: 2026-09-09
tags: [platform]
sources:
  - id: docs-ai
    resource: addxion-docs/src/content/docs/ai/
    title: AI (Herkunft Starlight)
---

Zwei Dinge, eine Datei: die **App** und das **LLM-Package**.

# Zweck

App: Chat-Assistenten, Automatisierung, Wissensmanagement, Kurse (`/kurse`), Fahrschule, Operatoren/Flotten. URL addxion.ai. Repo `addxion-ai`.

Fahrschule lebt hier. Jede Schule ist eine Better-Auth-**Organisation** (Pack `fahrschule`). Lehrer = Org-`owner`/`admin`, Schüler = `member`. Lehrer steuern Fortschrittskarten unter `/fortschrittskarte?student=`. Schülerliste `/schueler`. Fragekatalog `/fragen` + `/fragen/$id`. Analysen `/analysen`, Termine `/termine`, Kurse `/kurse`, Onboarding `/onboarding`. Kartendaten und Theorie: D1 `super-app` (`FAHRSCHULE_DB`).

`süper.app` später White-Label derselben App für eine Fahrschul-Org.

Demo-Logins auf `/login`, gruppiert nach Pack: Fahrschule (Ninos Lehrer, Mike Schüler), Netzwerk (Emilia), Chart (Bobby). Seed: `bun run seed:demo`.

`/kurse` ist Compass-Vollbreite, nicht die 480px-Chat-Shell. Kurs-Rail rechts. PageHeader `wide` mit Glass-Nav (kein Drop-Shadow).

Package `@addxion/ai`: Stream-Chunks und Message-Format. System-Prompts und Produkt-DB bleiben im Consumer.

Package `@addxion/xi`: `protocol` + `core` (HTTP-Client zum Elixir-Kernel). Evolutionslogik bleibt in `addxion-xi`.

# Grenzen

Schreibt keine Collective-Wahrheit. Kein paralleles Auth-Schema. Chat-UI (`ChatSurface`, `ChatBox`) und Chrome aus `@addxion/components`, Scroll aus `@addxion/behavior`. Mentions, Voice, LLM bleiben App. Keine Kernel-Interna nachbauen.

# Stack (App)

TanStack Start, React Aria + Neon-Tokens, Better Auth + Drizzle, Effect, Cloudflare Workers. Untitled UI ist Altbestand, nicht Ziel. Katalog: `addxion.com/neon`. `src/components/ui` ist Aria-Fassade auf Neon-Grammatik (Pill-Button/Input/Badge, Select/Combobox-Trigger, SocialButton aus `@addxion/components`). Auth-DB: D1 (`addxion-auth`). App-DB: Neon + Hyperdrive (in der Herkunft: geplant). LLM: OpenRouter. Bun.

Gesten: Motion + Embla + vaul. Three.js später. [Swipe-Stack](../decisions/swipe-stack.md).

# XI Kernel / Agentic Trading (AI-1)

World-dünn-Oberfläche für den Kernel. Plan und Keil: [addxion-xi](addxion-xi.md).

| | |
|--|--|
| Feature-Grant | `agentic.trading` |
| Env | `XI_KERNEL_URL` (Default lokal `http://127.0.0.1:4000`, Prod `https://xi.addxion.com`) |
| Flotte | **Normandy** — `/operators/fleets/normandy` |
| Legacy | `/operators/trading` redirect → Normandy |
| UI | Tabs Status & Läufe (`FactoryRunsPanel`) + Swarm-Chat |
| Server | `src/lib/agentic/trading.functions.ts` über `@addxion/xi/core` |

Offline-Banner wenn Kernel nicht erreichbar. Paper/Evolve/Status-Keywords im Chat. Kernel Lite reicht für Swarm/Paper/Factory.

# Truths

[T-PKG-AI](../fundamentals/truths.md), [T-PKG-AUTH](../fundamentals/truths.md), [T-PKG-XI](../fundamentals/truths.md), [T-EVOLUTION-CORE](../fundamentals/truths.md), [T-UI-ARIA](../fundamentals/truths.md), [T-DATA-APP-ISOLATED](../fundamentals/truths.md).

# Agent-Regeln

LLM-Client nur im Package. Kein Base UI, Radix oder neues Untitled UI. Evolutionslogik nicht nach `@addxion/xi` kopieren. Query zuerst dieses Wiki.
