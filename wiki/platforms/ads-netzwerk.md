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

Phase 1 Collector ist lokal fertig. Nächster Diff: Shopify `orders/paid`. addxion.ai in diesem Rutsch nicht (Kursseite fehlt).

# Entscheidung

[Ads-Intake](../decisions/ads-intake.md): eine Pipeline, zwei Türen. Host `ads.addxion.com`. Query `xid` plus Host-Cookie.

Wirkung eines Features: [Vorher Nachher](../patterns/vorher-nachher.md). Shop-Berichte bleiben in Shopify. Feature-Events und der Bestellhaken laufen über diese Pipeline.

# Wohin im bestehenden System

| System jetzt | Rolle | Phase |
| --- | --- | --- |
| `addxion-ads` Worker | `/c`, `/v1/events`, D1 | 1 lokal |
| [addxion.com](addxion-com.md) | Landing, `xid` in Links, später `/ads.js` | 1–2 |
| [addxion.ai](addxion-ai.md) | später Produzent + Reports-UI | nach Shop |
| Shopify Webhook + Custom Pixel | erster Produzent `purchase` | 2 jetzt |
| Shopify Analytics | Baseline-CR, AOV, Funnel | nicht im Worker |
| Meta / Google / TikTok | Fan-out CAPI; optional Insights-Pull | 3 |
| [addxion-xi](addxion-xi.md) | optional Consumer | 4, nie Intake |
| [addxion-auth](addxion-auth.md) | `external_id` nur bei Session | 2+ |

# Fluss Phase 1

```
Anzeige → ads.addxion.com/c?dest=…
  → 302 + ?xid= + Host-Cookie
Landing behält xid
POST /v1/events → Dedup → D1
```

# Phasen

## 1 Collector (Repo `addxion-ads`, lokal grün)

Worker, `/c`, `/v1/events`, D1, Token, Allowlist. Kein Deploy mit Platzhalter-`database_id`.

## 2 Produzenten und Pixel

Zuerst Shopify `orders/paid`. ai und `/ads.js` danach.

| Stück | Ort | Sinn |
| --- | --- | --- |
| Shopify `orders/paid` | Shop → Worker | `purchase` + `xid` aus Note/Cart-Attribut |
| `/ads.js` | ads.addxion.com | später |
| ai-Server | addxion-ai | später |
| Custom Pixel | Customer Events | nach Webhook |
| Bestellhaken | Shopify Metafield/Note | Feature ja/nein |

# Offen

**Ist:** Phase 1 lokal. Collector unverändert lassen.
**Jetzt:** Shopify-Webhook + Cart-Attribut `xid`. Journey `/c` → Shop → gleiche `xid` in `clicks` und `events`.
**Dann:** `wrangler d1 create`, Secret, Route `ads.addxion.com`.
**Nicht:** ai-Kurs, Meta, Visualizer-Pixel, Shop-CR in D1.
