---
type: platform
title: Ads-Netzwerk
aliases: [ADDXION Ads, Conversion-API]
description: Eigenes Ads-Netzwerk. Intake ist eine Event-Pipeline. API ist Kern, Pixel ist Client.
status: draft
owner: mike
updated: 2026-09-23
tags: [platform, ads, draft]
sources:
  - id: chat-2026-09-23
    resource: raw/ads-netzwerk-2026-09-23.md
    title: Roh Chat Ads-Netzwerk
---

Produktcode: Instanz `addxion-ads`. Wissen bleibt hier.

# Zweck

ADDXION misst Auslieferung und Outcome auf eigenem Inventar und eigenen Funnels. Wahrheit liegt bei uns, nicht bei Meta. Fremde Netze sind Fan-in (Events zu uns) und Fan-out (unsere Events zu ihnen).

Phase 1 ist der Collector. Phasen 2–4 sind geplant, nicht gebaut.

# Entscheidung

[Ads-Intake](../decisions/ads-intake.md): eine Pipeline, zwei Türen. Host `ads.addxion.com`. Query `xid` plus Host-Cookie.

Wirkung eines Features: [Vorher Nachher](../patterns/vorher-nachher.md). Shop-Berichte bleiben in Shopify. Feature-Events und der Bestellhaken laufen über diese Pipeline.

# Wohin im bestehenden System

| System jetzt | Rolle | Phase |
| --- | --- | --- |
| `addxion-ads` Worker | `/c`, `/v1/events`, D1 | 1 |
| [addxion.com](addxion-com.md) | Landing, `xid` in Links, später `/ads.js` | 1–2 |
| [addxion.ai](addxion-ai.md) | Produzent Kauf/Lead; später Reports-UI | 2, UI 3 |
| Shopify Webhook + Custom Pixel | `purchase`, ATC, Feature-Events (`viz_*`) | 2 |
| Shopify Analytics | Baseline-CR, AOV, Funnel | nicht im Worker |
| Meta / Google / TikTok | Fan-out CAPI; optional Insights-Pull | 3 |
| [addxion-xi](addxion-xi.md) | optional Consumer (Score, Fan-out-Job) | 4, nie Intake |
| [addxion-auth](addxion-auth.md) | `external_id` nur bei Session | 2+ |

# Fluss Phase 1

```
Anzeige → ads.addxion.com/c?dest=…
  → 302 + ?xid= + Host-Cookie
Landing behält xid
POST /v1/events → Dedup → D1
```

# Phasen

## 1 Collector (jetzt, Repo `addxion-ads`)

Worker, `/c`, `/v1/events`, D1, Token, Allowlist, `xid` + Host-Cookie. Kein Pixel, kein Shopify, kein Meta, kein XI, kein Deploy-Zwang in dem Plan.

## 2 Produzenten und Pixel

| Stück | Ort | Sinn |
| --- | --- | --- |
| `/ads.js` | ads.addxion.com | Beacon-Client derselben API |
| ai-Server nach Lead/Kauf | addxion-ai | erster eigener Produzent |
| Shopify `orders/paid` | Shop → Worker | `purchase` + `xid` aus Note/Cart-Attribut |
| Shopify Custom Pixel | Customer Events | `page_view`, ATC, `viz_open` … |
| Bestellhaken | Shopify Metafield/Note | Feature genutzt ja/nein |

Ein Event-Modell. `source`: `api` \| `pixel` \| `shopify` \| `ai`. Custom Names erlaubt (`viz_success`). PII weiter verboten bis eigene Decision.

Nicht in 2: Meta-CAPI, Parent-Cookie, ai-Dashboard, Shop-Analytics nachbauen.

## 3 Spiegel und Qualität

| Stück | Richtung |
| --- | --- |
| Fan-out Meta CAPI / Google / TikTok | wir → die | nur `consent_marketing = 1`, gleiche `event_id` |
| Insights-Pull (Spend, Campaign) | die → wir | eigener Store `platform_stats`, nicht `events` |
| Impression `/i` | Publisher → wir | Phase-3-Messung, nicht Billing-Theater |
| Reports in addxion.ai | lesen D1 | UI ist Client |
| Basic Fraud | Worker oder Job | Bot, Doppelklick |

Shopify-CR und AOV bleiben Shopify-Export oder Admin-API. Nicht den Collector mit Analytics-Scraping füllen.

## 4 Optimierung

Bid auf eigene Events. XI nur als asynchroner Consumer, Collector läuft ohne Kernel. Kein Cross-Device-Graph als Ziel.

# Offen

**Ziel Phase 1:** Event mit `xid` in lokaler D1, Curl-Liste grün.
**Danach:** ein Produzent (ai oder Shopify), dann `/ads.js`.
**Nicht vermischen:** Feature-Launch und neue Ads in derselben Baseline-Woche. [Vorher Nachher](../patterns/vorher-nachher.md).
