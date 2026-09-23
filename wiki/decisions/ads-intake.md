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

# Nicht

- Meta-Pixel als Wahrheit für eigenes Inventar.
- Zwei Event-Modelle (eines im Tag, eines im Server).
- Ads-Events in Fahrschul- oder Chat-DB mischen.

# Folge

Heimat der Aussage: [Ads-Netzwerk](../platforms/ads-netzwerk.md).
