---
type: decision
title: Ads-Intake
description: Eigenes Ads-Netzwerk. Conversion-API ist Kern. Pixel ist Client derselben Events.
status: decided
owner: mike
updated: 2026-09-25
tags: [decision, ads]
sources:
  - id: chat-2026-09-23
    resource: raw/ads-netzwerk-2026-09-23.md
    title: Roh Chat Ads-Netzwerk
---

# Gilt

Conversion-API ist das Produkt. Pixel ist Client derselben Events.

Shopify-Adapter ist die bestehende ADDXION Shopify-App. Sie prüft HMAC und postet. Der Collector bleibt Shopify-unabhängig.

Meta CAPI ist optionaler Fan-out, nicht Voraussetzung für das eigene Netz.

# Host

Intake: `ads.addxion.ai` — `/c`, `/v1/events`, später `/ads.js`.
Ansicht: addxion.ai liest den Store.
Code Collector: `addxion-ads`.
Go-Live: lokal curl → App-POST → `workers.dev` oder Tunnel + Testorder → Custom Domain.

Host-Ziel folgt [Heimat addxion.ai](heimat-ai.md). `ads.addxion.com` ist nicht mehr Ziel.

# Click-ID

`xid` = Klick, nicht Order-ID, nicht Meta-Cookie, nicht Login.
Query `xid` ist die Brücke. Host-Cookie nur auf `ads.addxion.ai`.

# Nicht

- Meta-Pixel als Wahrheit.
- Zwei Event-Modelle.
- Collector in der Frontend-App mergen.
- Ads-Events in Fahrschul- oder Auth-DB.

# Folge

[Ads-Netzwerk](../platforms/ads-netzwerk.md).
