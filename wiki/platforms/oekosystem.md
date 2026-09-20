---
type: platform
title: Ökosystem
description: North Star, Produkte, Package-Grenzen, Daten-Trennung.
status: active
owner: shared
updated: 2026-09-20
tags: [platform]
sources:
  - id: docs-eco
    resource: addxion-docs/src/content/docs/ecosystem/
    title: Ökosystem (Herkunft Starlight, archiviert)
---

Truths: [T-NORTH-STAR](../fundamentals/truths.md), [T-MAINTAIN](../fundamentals/truths.md), [T-PKG-BOUNDARY](../fundamentals/truths.md), [T-DATA-AUTH-SHARED](../fundamentals/truths.md), [T-DATA-APP-ISOLATED](../fundamentals/truths.md).

# North Star

Ein durchgängiges Erlebnis über addxion.ai und addxion.com. Gleiche Design-Sprache, gemeinsame Auth, getrennte App-Daten.

**Ist:** Fahrschule ist die App [süper](super.md) (Repo `super`). **Ziel:** Pack `fahrschule` auf [addxion-ai](addxion-ai.md), kein sechstes Produkt.

# Produkte

| Produkt | Repo | Rolle |
| --- | --- | --- |
| addxion.ai | `addxion-ai` | KI-App (Chat, Automatisierung, Wissen, Operatoren). Login-Host. |
| süper | `super` | Ist: Fahrschul-App. Ziel: White-Label / Pack auf ai. |
| addxion.com | `addxion-com` | Marketing, CMS |
| Neon | `addxion-neon` | Design System intern (Tokens, Components, behavior). Kein öffentliches Produkt auf com. |
| XI Core | `addxion-xi` | Elixir-Evolutionskern. Wissen: [addxion-xi](addxion-xi.md) |

`addxion-docs` ist **keine** Plattform. Repo archiviert, keine live Site. [Decision](../decisions/docs-ssot-hier.md).

# Packages

```
Consumer: addxion.ai · addxion.com · süper
    components · behavior · shell  ← addxion-neon/packages/
    auth · ai · xi                 ← addxion-ai/packages/
         neon
```

| Package | Enthält | Enthält nicht |
| --- | --- | --- |
| `@addxion/neon` | Tokens, Manifest, Adapter | App-Logik, Auth |
| `@addxion/components` | Primitives, Chat, PageHeader, MenuBar, QuickNav, Command | Nav-Daten, LLM-Calls |
| `@addxion/auth` | Schema, Permissions, Session, Gates | Produkt-Tabellen |
| `@addxion/ai` | OpenRouter, Streaming, Message-Typen, System-One-Client | Chrome, Scroll, Produkt-Prompts |
| `@addxion/behavior` | Scroll-Hooks, Haptics, Intent | React-DOM |
| `@addxion/xi` | `protocol`, `core` | UI, Nav-Logik, Docs-Sidebar |

Status: neon, components, auth, ai, behavior live; shell lebt noch (Soll components); xi `protocol` + `core` live (HTTP-Port zum Kernel).

Heimat UI und Behavior: `addxion-neon`. Identity: Package `addxion-ai/packages/auth`, Worker `addxion-ai`, D1-Name `addxion-auth`. Kein Repo `addxion-auth`. LLM und TS-XI: `addxion-ai`. Kernel: `addxion-xi`. System One: [Jev-Heimat](../decisions/jev-heimat.md).

# Daten

Identity geteilt (D1 `addxion-auth`). App-Daten isoliert (D1 oder Neon Postgres). Chat ≠ Fahrschul-Fortschritt (`FAHRSCHULE_DB` in Repo `super`).

# Navigation

App-Nav: `manifest.ts` + app-lokale Helper. Chrome rendert, definiert keine Listen. Icons im Consumer (`@phosphor-icons/react`, duotone).

# Offen

Erledigt (Docs-SSOT hier, Behavior, Manifest-Nav, Foundations) nicht erneut listen. Shell-Merge ist Soll, nicht Ist. Was noch gilt:

| Was | Status |
| --- | --- |
| Accent-Phase (chromatisch) | nicht terminiert; Grammatik bleibt mono |
| Neon-Vollmigration in addxion.ai (Untitled UI entfernen) | offen; Ziel Neon + Aria, kein UUI-Rest |
| Shopify-Template: Foundations wired, UX-Harvest offen | offen |
| Payload CMS nativ in Apps | deferred |
| XI Kernel + World dünn (Normandy / `agentic.trading`) | [Stand](addxion-xi.md) · AI-1 **Ist**; nächste: Live-Envs / World vertiefen |
| `federated-manifests.ts` automatisieren | niedrig |

