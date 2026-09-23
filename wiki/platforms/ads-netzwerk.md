---
type: platform
title: Ads-Netzwerk
aliases: [ADDXION Ads, Conversion-API]
description: Eigenes Ads-Netzwerk. Intake ist eine Event-Pipeline. API ist Kern, Pixel ist Client.
status: draft
owner: mike
updated: 2026-09-24
tags: [platform, ads, draft]
sources:
  - id: chat-2026-09-23
    resource: raw/ads-netzwerk-2026-09-23.md
    title: Roh Chat Ads-Netzwerk
---

Produktcode Collector: `addxion-ads`. Shopify-Adapter: bestehende ADDXION Shopify-App (nicht App Store). Wissen hier.

# Zweck

ADDXION misst Auslieferung und Outcome auf eigenem Inventar und eigenen Funnels. Meta CAPI ist Fan-out, kein Intake.

# Entscheidung

[Ads-Intake](../decisions/ads-intake.md). Host `ads.addxion.com`. Query `xid` plus Host-Cookie.

Erste Conversion: Shopify `orders/paid` über die App. addxion.ai in diesem Rutsch nicht.

Wirkung von Features: [Vorher Nachher](../patterns/vorher-nachher.md). Shop-CR bleibt in Shopify Analytics.

# Adapter

Die Shopify-App ist der einzige Shop-Adapter.

| App | Collector |
| --- | --- |
| HMAC prüfen | kennt Shopify nicht |
| `xid` URL → Cart-Attribut | speichert Klick `/c` |
| `orders/paid` → `POST /v1/events` | Dedup, D1 |
| später App-Pixel `source=pixel` | gleiches Modell |

Nicht: n8n als Kern, Theme als Wahrheit, Events in Fahrschul-DB.

# Go-Live-Reihenfolge

1. Collector lokal curl-grün (`/c`, `/v1/events`).
2. App sendet denselben POST (HMAC, `source=shopify`).
3. Echter Webhook: Worker auf `*.workers.dev` **oder** Tunnel, eine Testorder, gleiche `xid` in `clicks` und `events`.
4. Dann Prod: `wrangler d1 create`, Secret, DNS `ads.addxion.com`, App-Env + Webhook-URL umstellen.

Kein Custom-Domain-Deploy vor Schritt 3.

# Phasen (kurz)

| Phase | Bau |
| --- | --- |
| 1 | Collector lokal — steht |
| 2a | App + `orders/paid` + `xid` im Cart |
| 2b | App-Pixel / Customer Events, `source=pixel` |
| 3 | Fan-out Meta CAPI (`consent_marketing=1`); Charts in addxion.ai; optional `platform_stats` |
| 4 | Optimierung; XI nur Consumer |

# Offen

**Jetzt:** Schritt 2–3. Echter Webhook, nicht nur curl.
**Ziel:** `ads.addxion.com` nach einer klebenden Testorder.
**Nicht:** CAPI, ai-UI, zehn Webhooks, Shop-KPIs in D1.
