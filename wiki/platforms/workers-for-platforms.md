---
type: platform
title: Workers for Platforms
description: Cloudflare WfP auf Konto ADDXION. Dispatch-Tutorial getrennt vom Sites-Renderer.
status: draft
owner: mike
updated: 2026-09-28
tags: [platform, cloudflare, sites]
sources:
  - id: chat-2026-09-28-wfp
    resource: raw/sites-hosts-2026-09-28.md
    title: Sites Hosts plus WfP-Kauf
---

Konto ADDXION.

# Renderer Ist

Worker `addxion-ai`. Commits `eedbd2c` (Renderer), `e6780f2` (AGENTS-Vertrag).

Lokal mit `Host`:

| Request | Ergebnis |
| --- | --- |
| `sites.addxion.ai/com-solution/angebot` | Seed „Angebot“ |
| `sites.addxion.ai/angebot` | 404 |
| `sites.com-solution.de/angebot` | dieselbe Seed |
| `/sites` ohne Session | `/login` |

Werkbank listet die Seed-Row nur bei aktiver Org `com-solution`. Lokal existieren `addxion` und `wahibs-fahrschule` — Liste leer ist korrekt, kein Bug.

`sites.addxion.ai` steht in `wrangler.jsonc`, im CF-Dashboard in diesem Lauf nicht angehängt.

# Dispatch-Tutorial (unverändert)

| Ding | Wert |
| --- | --- |
| Namespace | `staging` |
| Namespace-ID | `f3449ecf-b2ef-4b2e-91b0-c6a9aa12ce67` |
| User-Worker | `customer-worker-1` |
| Dispatch-Worker | `my-dispatcher` |
| Probe | `my-dispatcher.throbbing-dust-30d3.workers.dev` Hello World |
| Code lokal | `Documents/GitHub/workers-for-platforms/` |

# Grenze

[Sites Hosts](../decisions/sites-hosts.md). Kein CNAME auf den Dispatcher. Kein User-Worker pro Kunde, solange Body eine Row ist.

Nächster CF-Schritt: Domain `sites.addxion.ai` am Worker `addxion-ai` im Dashboard anhängen. Danach Custom Hostname `sites.com-solution.de`.
