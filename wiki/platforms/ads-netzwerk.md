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

Kein Produktcode hier. Instanz-Repo gibt es noch nicht.

# Zweck

ADDXION misst Auslieferung und Outcome auf eigenem Inventar und eigenen Funnels. Wahrheit liegt bei uns, nicht bei Meta. Fremde Netze bleiben optionale Fan-out-Ziele.

Gilt nicht als laufendes Produkt. Gilt als Richtung nach Chat 2026-09-23.

# Entscheidung

[Ads-Intake](../decisions/ads-intake.md): eine Pipeline, zwei Türen (API und Pixel). API führt.

# Wohin im bestehenden System

| System jetzt | Rolle fürs Netzwerk | Warum |
| --- | --- | --- |
| [addxion.ai](addxion-ai.md) Kurse, Fahrschule, Org | Conversion-Quelle (`lead`, `purchase`, Theorie, Termin) | Der Server kennt den Abschluss |
| [addxion.com](addxion-com.md) Landings | Click-Ziel, First-Party-JS | Traffic landet hier |
| Shopify Customer Events / Webhooks | Shop-Purchase ohne Theme-Pixel | Checkout ist serverseitig wahr |
| Cloudflare Worker | Collector `POST /v1/events`, Click-Redirect | Rand, First-Party-Host |
| [addxion-xi](addxion-xi.md) | Später Fan-out, Qualität, nicht Tag-1-Ad-Server | Kernel ist Evolution, kein DSP |
| [addxion-auth](addxion-auth.md) | `external_id` nur wo schon Session | Identity nicht mit Ads-Events vermischen |
| n8n | Kein Intake-Kern | Adapter höchstens |
| Meta/Google Pixel | Fremdes Netz | Nur Fan-out, nicht unser Dataset |

App-Daten bleiben isoliert. Ads-Events sind ein eigenes Store, nicht `FAHRSCHULE_DB` und nicht Chat. [Privacy](../patterns/privacy-by-design.md).

# Wie der Fluss läuft

```
Click-Redirect (click_id setzen)
    → Landing com / ai / Shop
Pixel (optional) → dieselben Events
Server (ai, Shopify, Formular) → POST /v1/events
    → Dedup event_id
    → Store
    → später Fan-out Meta CAPI / Google / Warehouse
```

# Phasen

| Phase | Bauen | Nicht bauen |
| --- | --- | --- |
| 1 | Click-Redirect, `click_id`, API `lead`/`purchase` | Auktion, Meta-Kompatibilität |
| 2 | First-Party-JS, Shopify-Adapter | Zweites Wahrheitssystem |
| 3 | Impression, Frequency, Basic Fraud | Volles DSP |
| 4 | Bid auf eigene Events | Cross-Device-Graph |

# Grenzen

- Kein Meta-Pixel als Kern unseres Netzes.
- Kein Tracking ohne Consent im EWR.
- Produktcode nicht in diesem Repo. [Repo-Grenzen](../patterns/repo-grenzen.md).
- Clicky / fremde Ad-Plattform von Partnern ist nicht dieses Produkt, solange nicht entschieden.

# Offen

**Ziel:** Phase-1-Vertrag schriftlich und implementierbar.
**Ist:** Richtung gilt. Kein Repo, kein Endpoint live.
**Lücke:** Payload und Pixel-Client fehlen als Artefakt.
**Zu klären / nächster Schritt:** `POST /v1/events` Felder plus schmales JS (Consent, `click_id` aus Query, Beacon). Danach Host-Name und welches Repo den Collector trägt.
