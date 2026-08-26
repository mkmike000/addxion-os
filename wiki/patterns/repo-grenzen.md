---
type: pattern
title: Repo-Grenzen
description: SSOT pro Inhaltstyp. addxion-docs ist keine Docs-SSOT mehr.
status: active
owner: shared
updated: 2026-08-26
tags: [pattern]
sources:
  - id: docs-boundaries
    resource: addxion-docs/src/content/docs/patterns/guidance/repo-boundaries.md
    title: Repo Boundaries
---

[T-REPO-BOUNDARY](../fundamentals/truths.md). Schreibweise: **Neon**, nicht „ADDXION NEON“.

| Inhalt | SSOT |
| --- | --- |
| Design Tokens + Primitives | `addxion-neon` |
| Markenwerte (ink, cream, electric) | `addxion-com` (`brand.css`) |
| Auth-Schema | `addxion-auth` / `@addxion/auth` |
| Shell | `@addxion/shell` in `addxion-neon` (behalten) |
| Scroll / Intent | `@addxion/behavior` in `addxion-neon` (behalten) |
| Cross-App-Protokoll | `@addxion/xi` |
| LLM-Client | `@addxion/ai` |
| Plattform-Wissen, Marke, Design-Grammatik | **dieses Repo** |
| Site-IA (addxion.com) | [addxion-com](../platforms/addxion-com.md) |
| n8n-Workflows, Laufzeit-Quellen | die jeweilige n8n-Instanz |
| Gebaute Site (Staging/Live) | Webflow bzw. das Site-Repo |
| Marketing-Copy | `addxion-com` (folgt [Branding](../branding.md)) |
| Headless CMS | `addxion-com` (`/cms`) |
| Fahrschul-Domäne | `süper` |

Neon-Änderungen zuerst im Neon-Repo, dann Consumer.
