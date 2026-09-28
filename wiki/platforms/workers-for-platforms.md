---
type: platform
title: Workers for Platforms
description: Cloudflare WfP auf Konto ADDXION. Dispatch für Kunden-Hosts. Noch nicht der Sites-Renderer.
status: draft
owner: mike
updated: 2026-09-28
tags: [platform, cloudflare, sites]
sources:
  - id: chat-2026-09-28-wfp
    resource: raw/sites-hosts-2026-09-28.md
    title: Sites Hosts plus WfP-Kauf
---

Konto ADDXION. `addxion-ai`-Worker bleibt unverändert.

# Ist 2026-09-28

| Ding | Wert |
| --- | --- |
| Dispatch-Namespace | `staging` |
| Namespace-ID | `f3449ecf-b2ef-4b2e-91b0-c6a9aa12ce67` |
| User-Worker | `customer-worker-1` in `staging` |
| Dispatch-Worker | `my-dispatcher`, Binding `dispatcher` → `staging` |
| Probe | `https://my-dispatcher.throbbing-dust-30d3.workers.dev/` → `Hello World!` |
| Code lokal | `Documents/GitHub/workers-for-platforms/` (`customer-worker-1`, `my-dispatcher`) |

Das ist der Tutorial-Pfad. Kein Site-Body, kein Host-Lookup, kein Pixel.

# Grenze

[Sites Hosts](../decisions/sites-hosts.md): Renderer-Logik in `addxion-ai`. WfP liefert Custom Hostnames und optional Dispatch.

Nicht: Kunden-CNAME auf `my-dispatcher.…workers.dev` legen. Nicht: pro Kunde ein User-Worker mit eigener HTML, solange Body eine Row ist.

Sinnvoll an WfP jetzt: Custom Hostname `sites.com-solution.de` (SSL + TXT) gegen den Host, der den Sites-Renderer ausliefert — zuerst `sites.addxion.ai` / derselbe `addxion-ai`-Worker. Dispatch-User-Worker erst, wenn ein Kunde wirklich isolierte Runtime braucht.

# Nicht

- Hello-World als Ads-Dest
- `addxion-ai` in den Namespace schieben ohne Plan
- Secrets in dieser Datei
