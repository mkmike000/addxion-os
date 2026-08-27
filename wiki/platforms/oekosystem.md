---
type: platform
title: Ökosystem
description: North Star, Produkte, Package-Grenzen, Daten-Trennung.
status: active
owner: shared
updated: 2026-08-27
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
| Neon | `addxion-neon` | Design System intern (Tokens, Components, shell, behavior). Kein öffentliches Produkt auf com. |
| XI Core | `addxion-xi` | Elixir-Evolutionskern. Wissen: [addxion-xi](addxion-xi.md) |

`addxion-docs` ist **keine** Plattform mehr. [Decision](../decisions/docs-ssot-hier.md).

# Packages

```
Consumer: süper · addxion.ai · addxion.com
    shell · behavior     ← addxion-neon/packages/
    auth · ai · xi       ← addxion-auth / addxion-ai/packages/
         neon
```

| Package | Enthält | Enthält nicht |
| --- | --- | --- |
| `@addxion/neon` | Tokens, Components, Manifest, Adapter | App-Logik, Auth, Chat-UI |
| `@addxion/auth` | Schema, Permissions, Session, Gates | Produkt-Tabellen |
| `@addxion/ai` | OpenRouter, Streaming, Message-Typen | Shell, Scroll, Produkt-Prompts |
| `@addxion/behavior` | Scroll-Hooks, Haptics, Intent | React-DOM |
| `@addxion/shell` | PageHeader, ChatSurface, Command UI | Nav-Daten, LLM-Calls |
| `@addxion/xi` | `protocol`, `core` | UI, Nav-Logik, Docs-Sidebar |

Status: neon, auth, ai, behavior, shell live; xi `protocol` live, `core` Stub.

Heimat Shell und Behavior: `addxion-neon`. Identity: `addxion-auth`. LLM und TS-XI: `addxion-ai`. Shell und Behavior behalten.

# Daten

Identity geteilt (`addxion-auth`). App-Daten isoliert (D1 oder Neon Postgres). Chat in addxion.ai ≠ Fortschritt in süper.

# Navigation

App-Nav: `manifest.ts` + app-lokale Helper. Shell rendert, definiert keine Listen. Icons in der Consumer-Shell (`lucide-react`).

# Offen

Erledigt (Docs-Phase 0–4, Shell, Behavior, Manifest-Nav, Foundations) nicht erneut listen. Was noch gilt:

| Was | Status |
| --- | --- |
| Accent-Phase (chromatisch) | nicht terminiert; Grammatik bleibt mono |
| Neon-Vollmigration in addxion.ai (Untitled UI entfernen) | offen; Ziel Neon + Aria, kein UUI-Rest |
| Shopify-Template: Foundations wired, UX-Harvest offen | offen |
| Payload CMS nativ in Apps | deferred |
| XI Core EC-0 → EC-1 → AT-1, dann härterer `@addxion/xi/core` | [Stand](addxion-xi.md); Code `addxion-xi` |
| `federated-manifests.ts` automatisieren | niedrig |

