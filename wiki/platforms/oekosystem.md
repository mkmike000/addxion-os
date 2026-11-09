---
type: platform
title: Ökosystem
description: North Star, Produkte, Package-Grenzen, Daten-Trennung.
status: active
owner: shared
updated: 2026-11-09
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
| addxion.ai | `addxion-ai` | **Harness** + Cockpit (Chat, Automatisierung, Werkbank; Fahrschule als Fläche). Decision: [addxion-ai-harness](../decisions/addxion-ai-harness.md) |
| addxion.com | `addxion-com` | Marketing, CMS |
| Neon | `addxion-ai/neon/` | Design System intern (Tokens, Components, behavior). Kein öffentliches Produkt auf com. |
| XI Core | `addxion-xi` | Elixir-Evolutionskern. Wissen: [addxion-xi](addxion-xi.md) |
| Ads Collector | `addxion-ads` | Klick und Event unter `addxion.ai/ads`. Kauf: [AdCP](../decisions/adcp.md) |
| Agentic Trading (Venues) | `addxion-trading` | CCXT/Flotte, FastAPI (`/book`, `/cycle`). Cockpit-Anbindung: [trading-harness-port](../decisions/trading-harness-port.md) |

`addxion-docs` ist **keine** Plattform mehr. [Decision](../decisions/docs-ssot-hier.md).

# Packages

```
Consumer: addxion.ai · addxion.com
    neon · components · behavior  ← addxion-ai/neon/
    auth · ai · xi                ← addxion-ai/packages/ (+ auth-Heimat)
```

| Package | Enthält | Enthält nicht |
| --- | --- | --- |
| `@addxion/neon` | Tokens, CSS, Manifest, Bridges | App-Logik, Auth; kein `@addxion/core` |
| `@addxion/components` | Primitives, Chat, PageHeader, MenuBar, QuickNav, Command | Nav-Daten, LLM-Calls |
| `@addxion/auth` | Schema, Permissions, Session, Gates | Produkt-Tabellen |
| `@addxion/ai` | OpenRouter, Streaming, Message-Typen, System-One-Client | Chrome, Scroll, Produkt-Prompts |
| `@addxion/behavior` | Scroll-Hooks, Haptics, Intent | React-DOM |
| `@addxion/xi` | `protocol`, `core` | UI, Nav-Logik, Docs-Sidebar |

Status: neon, components, auth, ai, behavior live; xi `protocol` + `core` live (HTTP-Port zum Kernel). Decision: [neon-packages-lean](../decisions/neon-packages-lean.md).

Heimat UI und Behavior: `addxion-neon`. Identity: `addxion-auth`. LLM und TS-XI: `addxion-ai`. Kernel: `addxion-xi`. System One: [Jev-Heimat](../decisions/jev-heimat.md).

# Daten

Identity geteilt (`addxion-auth`). App-Daten isoliert (D1 oder Neon Postgres). Chat ≠ Fahrschul-Fortschritt (`FAHRSCHULE_DB`).

# Navigation

App-Nav: `manifest.ts` + app-lokale Helper. Chrome rendert, definiert keine Listen. Icons im Consumer (`lucide-react`).

# Offen

Erledigt (Docs-Phase 0–4, Shell, Behavior, Manifest-Nav, Foundations) nicht erneut listen. Was noch gilt:

| Was | Status |
| --- | --- |
| Accent-Phase (chromatisch) | nicht terminiert; Grammatik bleibt mono |
| Neon-Vollmigration in addxion.ai (Untitled UI entfernen) | offen; Ziel Neon + Aria, kein UUI-Rest. `@shadcn/lint` auf aktiver Fläche, UUI-Ordner Override |
| Shopify-Template: Foundations wired, UX-Harvest offen | offen |
| Payload CMS nativ in Apps | deferred |
| XI Kernel + World dünn (Normandy / `agentic.trading`) | [Stand](addxion-xi.md) · AI-1 **Ist**; nächste: Live-Envs / World vertiefen |
| `federated-manifests.ts` automatisieren | niedrig |

