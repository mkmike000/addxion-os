---
type: decision
title: Ads-Intake
description: Eigenes Ads-Netzwerk. Conversion-API ist Kern. Pixel ist Client derselben Events.
status: decided
owner: mike
updated: 2026-09-23
tags: [decision, ads]
sources:
  - id: chat-2026-09-23
    resource: raw/ads-netzwerk-2026-09-23.md
    title: Roh Chat Ads-Netzwerk
---

# Gilt

Wer selbst Inventar und Messung betreibt, hat eine Event-Pipeline. Die Conversion-API ist das Produkt. Der Pixel ist ein versionierter Client dieser API, kein zweites System.

CAPI-only reicht erst, wenn jeder Advertiser `click_id` serverseitig durchreicht. KMU (Fahrschule, Shop) brauchen den Pixel als Adapter.

Pixel-only reicht nicht für Kauf, Refund, Qualität, Adblock.

# Host

Eine Subdomain, zwei Pfade. Nicht `c.` plus `t.`.

- Intake: `ads.addxion.com` — `/c`, `/v1/events`, später `/ads.js`
- Ansicht: Routen in addxion.ai lesen denselben Store per API. Collector bleibt auf `.com`.
- Code: Instanz-Repo `addxion-ads` (Cloudflare Worker). Nicht in `addxion-ai` oder XI.

`addxion.com` und `addxion.ai` sind zwei Sites. Ein Cookie überquert die Grenze nicht.

# Click-ID (Phase 1)

Beides, mit Rang:

1. Query `xid` ist die Brücke com → ai → Shop. Pflicht.
2. Host-Cookie nur auf `ads.addxion.com` (nicht `Domain=.addxion.com`). Bequem für Pixel auf com. Reicht allein nicht.

Nicht in Phase 1: Parent-Cookie `.addxion.com`. Mehr Reichweite, mehr Erklärung, löst ai trotzdem nicht.

# Nicht

- Meta-Pixel als Wahrheit für eigenes Inventar.
- Zwei Event-Modelle (eines im Tag, eines im Server).
- Ads-Events in Fahrschul- oder Chat-DB mischen.
- Collector auf `ads.addxion.ai`, nur weil Reports in der App landen sollen.

# Folge

Heimat: [Ads-Netzwerk](../platforms/ads-netzwerk.md).
