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

ADDXION misst Auslieferung und Outcome auf eigenem Inventar und eigenen Funnels. Wahrheit liegt bei uns, nicht bei Meta. Fremde Netze bleiben optionale Fan-out-Ziele.

Gilt als Richtung. Phase 1 ist der Collector, kein DSP.

# Entscheidung

[Ads-Intake](../decisions/ads-intake.md): eine Pipeline, zwei Türen. Host `ads.addxion.com`. Query `xid` plus Host-Cookie.

# Wohin im bestehenden System

| System jetzt | Rolle fürs Netzwerk | Warum |
| --- | --- | --- |
| [addxion.ai](addxion-ai.md) Kurse, Fahrschule, Org | Conversion-Quelle; später Reports-UI | Server kennt Abschluss; UI ist Client |
| [addxion.com](addxion-com.md) Landings | Click-Ziel, `xid` in Links | Traffic landet hier |
| Shopify Customer Events / Webhooks | Shop-Purchase | Checkout serverseitig wahr |
| `addxion-ads` Worker | `/c`, `/v1/events`, Store | eigener Dienst |
| [addxion-xi](addxion-xi.md) | nicht Tag 1 | kein Ad-Server |
| [addxion-auth](addxion-auth.md) | `external_id` nur bei Session | nicht vermischen |
| n8n | kein Intake-Kern | Adapter höchstens |
| Meta/Google Pixel | fremdes Netz | nur Fan-out |

Ads-Events: eigener Store (D1 am Worker). Nicht `FAHRSCHULE_DB`, nicht Chat. [Privacy](../patterns/privacy-by-design.md).

# Fluss Phase 1

```
Anzeige → ads.addxion.com/c?dest=…
  → 302 + ?xid= + Set-Cookie Host ads.addxion.com
Landing com behält xid in CTA
Abschluss ai oder Shop
  → POST ads.addxion.com/v1/events { event_id, click_id=xid }
  → Dedup → D1
```

# Phasen

| Phase | Bauen | Nicht bauen |
| --- | --- | --- |
| 1 | Worker, `/c`, `/v1/events`, D1, ein Produzent | Auktion, Parent-Cookie, Meta, ai-UI |
| 2 | `/ads.js`, Shopify-Adapter | zweites Event-Modell |
| 3 | Impression, Frequency, Basic Fraud | volles DSP |
| 4 | Bid auf eigene Events | Cross-Device-Graph |

# Offen

**Ziel:** Phase-1-Collector live, ein Produktions-Event mit `xid` in D1.
**Ist:** Host und Cookie-Rang entschieden. Repo `addxion-ads` existiert. Endpoint nicht dokumentiert als live.
**Lücke:** Implementierung im Ads-Repo.
**Zu klären:** Welcher erste Produzent (Kurs ai vs Shopify) beim ersten Merge.
