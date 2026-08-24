---
type: platform
title: Ökosystem
description: North Star, Produkte, Package-Grenzen, Daten-Trennung.
status: active
owner: shared
updated: 2026-08-24
tags: [platform]
sources:
  - id: docs-eco
    resource: addxion-docs/src/content/docs/ecosystem/
    title: Ökosystem (Herkunft Starlight)
---

Truths: [T-NORTH-STAR](../fundamentals/truths.md), [T-MAINTAIN](../fundamentals/truths.md), [T-PKG-BOUNDARY](../fundamentals/truths.md), [T-DATA-AUTH-SHARED](../fundamentals/truths.md), [T-DATA-APP-ISOLATED](../fundamentals/truths.md).

# North Star

Ein durchgängiges Erlebnis über süper, addxion.ai und addxion.com. Gleiche Design-Sprache, gemeinsame Auth, getrennte App-Daten.

# Produkte

| Produkt | Repo | Rolle |
| --- | --- | --- |
| süper | `süper` | Fahrschul-Lern-App |
| addxion.ai | `addxion-ai` | KI-App (Chat, Automatisierung, Wissen) |
| addxion.com | `addxion-com` | Marketing, CMS |
| Neon | `addxion-neon` | Design System |
| XI Core | `addxion-xi` | Elixir-Evolutionskern |

`addxion-docs` ist **keine** Plattform mehr. [Decision](../decisions/docs-ssot-hier.md).

# Packages

```
Consumer: süper · addxion.ai · addxion.com
    shell · xi · behavior
         neon · auth · ai
```

| Package | Enthält | Enthält nicht |
| --- | --- | --- |
| `@addxion/neon` | Tokens, Components, Manifest, Adapter | App-Logik, Auth, Chat-UI |
| `@addxion/auth` | Schema, Permissions, Session, Gates | Produkt-Tabellen |
| `@addxion/ai` | OpenRouter, Streaming, Message-Typen | Shell, Scroll, Produkt-Prompts |
| `@addxion/behavior` | Scroll-Hooks, Haptics, Intent | React-DOM |
| `@addxion/shell` | PageHeader, ChatSurface, Command UI | Nav-Daten, LLM-Calls |
| `@addxion/xi` | `protocol`, `core` | UI, Nav-Logik, Docs-Sidebar |

Status laut Herkunft (Juli 2026): neon, auth, ai, behavior, shell live; xi `protocol` live, `core` Stub.

Herkunft nennt Shell/Behavior einmal unter `addxion-neon/packages/`, einmal unter `addxion-ai/packages/`. [Repo-Grenzen](../patterns/repo-grenzen.md) setzt Identity/LLM/Shell/Behavior/XI auf addxion-ai. Ungeklärt — nicht hier entscheiden.

# Daten

Identity geteilt (`addxion-auth`). App-Daten isoliert (D1 oder Neon Postgres). Chat in addxion.ai ≠ Fortschritt in süper.

# Navigation

App-Nav: `manifest.ts` + app-lokale Helper. Shell rendert, definiert keine Listen. Icons in der Consumer-Shell (`lucide-react`).
