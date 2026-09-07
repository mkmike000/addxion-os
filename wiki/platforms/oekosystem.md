---
type: platform
title: Ökosystem
description: North Star, Produkte, Package-Grenzen, Daten-Trennung.
status: active
owner: shared
updated: 2026-09-06
tags: [platform]
sources:
  - id: docs-eco
    resource: addxion-docs/src/content/docs/ecosystem/
    title: Ökosystem (Herkunft Starlight)
---

Truths: [T-NORTH-STAR](../fundamentals/truths.md), [T-MAINTAIN](../fundamentals/truths.md), [T-PKG-BOUNDARY](../fundamentals/truths.md), [T-DATA-AUTH-SHARED](../fundamentals/truths.md), [T-DATA-APP-ISOLATED](../fundamentals/truths.md).

# North Star

Ein durchgängiges Erlebnis über addxion.ai und addxion.com. Gleiche Design-Sprache, gemeinsame Auth, getrennte App-Daten. Fahrschule ist Fläche in addxion.ai, kein eigenes Produkt.

# Produkte

| Produkt | Repo | Rolle |
| --- | --- | --- |
| addxion.ai | `addxion-ai` | KI-App (Chat, Automatisierung, Wissen, Fahrschule) |
| addxion.com | `addxion-com` | Marketing, CMS |
| Neon | `addxion-neon` | Design System intern (Tokens, Components, behavior). Kein öffentliches Produkt auf com. |
| XI Core | `addxion-xi` | Elixir-Evolutionskern. Wissen: [addxion-xi](addxion-xi.md) |

`addxion-docs` ist **keine** Plattform mehr. [Decision](../decisions/docs-ssot-hier.md).

# Packages

```
Consumer: addxion.ai · addxion.com
    components · behavior  ← addxion-neon/packages/
    auth · ai · xi         ← addxion-auth / addxion-ai/packages/
         neon
```

| Package | Enthält | Enthält nicht |
| --- | --- | --- |
| `@addxion/neon` | Tokens, Manifest, Adapter | App-Logik, Auth |
| `@addxion/components` | Primitives, Chat, PageHeader, MenuBar, QuickNav, Command | Nav-Daten, LLM-Calls |
| `@addxion/auth` | Schema, Permissions, Session, Gates | Produkt-Tabellen |
| `@addxion/ai` | OpenRouter, Streaming, Message-Typen | Chrome, Scroll, Produkt-Prompts |
| `@addxion/behavior` | Scroll-Hooks, Haptics, Intent | React-DOM |
| `@addxion/xi` | `protocol`, `core` | UI, Nav-Logik, Docs-Sidebar |

Status: neon, components, auth, ai, behavior live; xi `protocol` + `core` live (HTTP-Port zum Kernel).

Heimat UI und Behavior: `addxion-neon`. Identity: `addxion-auth`. LLM und TS-XI: `addxion-ai`. Kernel: `addxion-xi`.

# Daten

Identity geteilt (`addxion-auth`). App-Daten isoliert (D1 oder Neon Postgres). Chat ≠ Fahrschul-Fortschritt (`FAHRSCHULE_DB`).

# Navigation

App-Nav: `manifest.ts` + app-lokale Helper. Chrome rendert, definiert keine Listen. Icons im Consumer (`@phosphor-icons/react`, duotone).

# Offen

Erledigt (Docs-Phase 0–4, Shell, Behavior, Manifest-Nav, Foundations) nicht erneut listen. Was noch gilt:

| Was | Status |
| --- | --- |
| Accent-Phase (chromatisch) | nicht terminiert; Grammatik bleibt mono |
| Neon-Vollmigration in addxion.ai (Untitled UI entfernen) | offen; Ziel Neon + Aria, kein UUI-Rest |
| Shopify-Template: Foundations wired, UX-Harvest offen | offen |
| Payload CMS nativ in Apps | deferred |
| XI Kernel + World dünn (Normandy / `agentic.trading`) | [Stand](addxion-xi.md) · AI-1 **Ist**; nächste: Live-Envs / World vertiefen |
| `federated-manifests.ts` automatisieren | niedrig |

