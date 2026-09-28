---
type: pattern
title: Landing zwei Türen
description: Eine Org-Row, Werkbank und öffentliche Projektion. Messung über den Collector. Wort jetzt Site.
status: active
owner: mike
updated: 2026-09-28
tags: [pattern, ads, sites]
sources:
  - id: chat-2026-09-28
    resource: raw/agentic-business-landings-2026-09-28.md
    title: Roh Chat Agentic Landings
---

Gilt mit [Sites Hosts](../decisions/sites-hosts.md) und [Landing öffentlich](../decisions/landing-public.md).

# Modell

Org besitzt Sites. Site besitzt Slug, Varianten, Body, Status, `hosts[]`.

Öffentliche Route rendert den Snapshot ohne App-Chrome. Werkbank denselben Datensatz mit Editor.

# Messung

`/c` mintet `xid` und leitet auf die Kunden-URL. Pixel und Formular → `POST /v1/events`.

# Host

| Option | Wann |
| --- | --- |
| `sites.kunde.de/{slug}` | Live, Ads |
| `sites.addxion.ai/{org}/{slug}` | Test |
| `ads.addxion.ai/…` | nie |

# Offen

**Ziel:** `sites.addxion.ai` im Dashboard am Worker `addxion-ai`. Custom Hostname Comsolution. Org `com-solution` oder Seed an bestehende Org.
**Ist:** Renderer + Werkbank-Vertrag in `addxion-ai` (`eedbd2c`, `e6780f2`). Host-Lookup lokal grün. Domain in wrangler, nicht im Dashboard. WfP-Tutorial unberührt.
