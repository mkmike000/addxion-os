---
type: platform
title: addxion-ai
description: KI-App unter addxion.ai und Package @addxion/ai.
status: active
owner: shared
updated: 2026-09-20
tags: [platform]
sources:
  - id: docs-ai
    resource: addxion-docs/src/content/docs/ai/
    title: AI (Herkunft Starlight, archiviert)
---

Zwei Dinge, eine Datei: die **App** und das **LLM-Package**.

# Zweck

App: Chat-Assistenten, Automatisierung, Wissensmanagement, Operatoren/Flotten. URL addxion.ai. Repo `addxion-ai`. Hostet Login (`auth.addxion.ai` und `/login`). Heimat der TS-Packages `@addxion/auth`, `@addxion/ai`, `@addxion/xi`.

Package `@addxion/ai`: Stream-Chunks und Message-Format. System-Prompts und Produkt-DB bleiben im Consumer. System-One-Client (Jev) derselbe Package-Ort, nicht Chat-Stream — [Jev-Heimat](../decisions/jev-heimat.md), Muster [System One](../patterns/system-one.md).

Package `@addxion/xi`: `protocol` + `core` (HTTP-Client zum Elixir-Kernel). Evolutionslogik bleibt in `addxion-xi`.

# Ist

Routen in diesem Repo: `/` (Home), `/gespraeche`, `/operators` (Normandy `/operators/fleets/normandy`), `/finanzen`, `/profil`, `/admin`, `/login`, `/richtlinien`, `/voice`. Manifest: `src/manifest.ts`.

Fahrschul-Routen leben **nicht** hier. `/theorie-pruefung`, `/fortschrittskarte`, `/schueler`, `/analysen`, `/kurse`, `/muster`, `/onboarding` stehen in [süper](super.md) (Repo `super`, Host `süper.app`). ai snapshot’t sie in `federated-manifests.ts`.

`/docs` im Manifest ist kein lebendes Starlight. [addxion-docs](../decisions/docs-ssot-hier.md) ist archiviert.

Auth: Package `addxion-ai/packages/auth`. Worker = diese App (`addxion-ai`). D1-Name `addxion-auth`. Siehe [addxion-auth](addxion-auth.md).

# Ziel

Fahrschule als Pack `fahrschule` auf dieser App. Jede Schule = Better-Auth-**Organisation**. Lehrer = Org-`owner`/`admin`, Schüler = `member`. Lehrer steuern Karten unter `/fortschrittskarte?student=`. Weitere Ziel-Routen: `/schueler`, `/theorie-pruefung`, `/analysen`, `/termine`, `/kurse`, `/onboarding`. Kartendaten und Theorie bleiben isoliert: D1 `super-app` (`FAHRSCHULE_DB`).

`süper.app` dann White-Label derselben App für eine Fahrschul-Org. Bis dahin: [süper](super.md) ist die lebende App.

`/kurse` als Compass-Vollbreite, nicht die 480px-Chat-Shell. Kurs-Rail rechts. PageHeader `wide` mit Glass-Nav (kein Drop-Shadow).

# Grenzen

Schreibt keine Collective-Wahrheit. Kein paralleles Auth-Schema. Chat-UI (`ChatSurface`, `ChatBox`) und Chrome-Soll: `@addxion/components`. Ist-Chrome: [addxion-shell](addxion-shell.md). Scroll aus `@addxion/behavior`. Mentions, Voice, LLM bleiben App. Keine Kernel-Interna nachbauen.

# Stack (App)

TanStack Start, React Aria + Neon-Tokens, Better Auth + Drizzle, Effect, Cloudflare Workers. Untitled UI ist Altbestand, nicht Ziel. Katalog: `addxion.com/neon`. `src/components/ui` ist Aria-Fassade auf Neon-Grammatik (Pill-Button/Input/Badge, Select/Combobox-Trigger, SocialButton aus `@addxion/components`). Auth-DB: D1 (`addxion-auth`). App-DB: Neon + Hyperdrive (geplant). LLM: OpenRouter. Bun.

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

LLM-Client nur im Package. Kein Base UI, Radix oder neues Untitled UI. Evolutionslogik nicht nach `@addxion/xi` kopieren. Query zuerst dieses Wiki. Fahrschul-Routen nicht hier erfinden — Ist ist [süper](super.md).
