---
type: pattern
title: Repo-Grenzen
description: SSOT pro Inhaltstyp. addxion-docs ist keine Docs-SSOT mehr.
status: active
owner: shared
updated: 2026-09-20
tags: [pattern]
sources:
  - id: docs-boundaries
    resource: addxion-docs/src/content/docs/patterns/guidance/repo-boundaries.md
    title: Repo Boundaries (Herkunft Starlight, archiviert)
---

[T-REPO-BOUNDARY](../fundamentals/truths.md). Schreibweise: **Neon**, nicht „ADDXION NEON“.

| Inhalt | SSOT |
| --- | --- |
| Design Tokens + Primitives + App-Chrome | `addxion-neon` / `@addxion/components` |
| Markenwerte (ink, cream, electric) | `addxion-com` (`brand.css`) |
| Auth-Schema | `addxion-ai/packages/auth` (`@addxion/auth`). D1-Name `addxion-auth`. Kein Auth-Repo. |
| Scroll / Intent | `@addxion/behavior` in `addxion-neon` (behalten) |
| Cross-App-Protokoll | `@addxion/xi` |
| LLM-Client + System-One-Client | `@addxion/ai` — [Jev-Heimat](../decisions/jev-heimat.md) |
| Env-Score | Kernel `evaluate_report`, nicht Jev |
| Plattform-Wissen, Marke, Design-Grammatik | **dieses Repo** |
| XI Kernel (Plan, Keil, Stand, Begriffe) | [addxion-xi](../platforms/addxion-xi.md) |
| XI Kernel Code | Instanz `addxion-xi` |
| Site-IA (addxion.com) | [addxion-com](../platforms/addxion-com.md) |
| n8n-Workflows, Laufzeit-Quellen | die jeweilige n8n-Instanz |
| Fahrschul-Akquise-Liste (DE) | n8n-Instanz, Plan: [Fahrschulen](fahrschulen.md) |
| Gebaute Site (Staging/Live) | Webflow bzw. das Site-Repo |
| Marketing-Copy | `addxion-com` (folgt [Branding](../branding.md)) |
| Headless CMS | `addxion-com` (`/cms`) |
| Fahrschul-Domäne | **Ist** Repo `super` / D1 `super-app`. **Ziel** Pack `fahrschule` in addxion-ai, dieselbe DB. |

Neon-Änderungen zuerst im Neon-Repo, dann Consumer.
