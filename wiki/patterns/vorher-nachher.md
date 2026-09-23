---
type: pattern
title: Vorher Nachher
description: Feature-Wirkung nur mit eingefrorener Baseline. Gleiche Wochen, eine Änderung.
status: active
owner: mike
updated: 2026-09-23
tags: [pattern, marketing, measurement]
sources:
  - id: chat-visualizer-messung
    resource: Chat Feature-Messung Visualizer / Shopify-Zahlen
    title: Baseline vier Wochen
---

# Gilt

Vier Wochen vorher dieselben Zahlen einfrieren. Feature an. Vier Wochen danach dieselben Schnitte. Woche 1 allein gilt nicht. Launch plus Sale plus neue Ads in derselben Woche macht das Vorher/Nachher unbrauchbar.

# Minimum

1. Eine Plattform-Kennzahl, die schon existiert (z. B. Shopify-CR).
2. Wenige Feature-Events in derselben Event-Pipeline ([Ads-Netzwerk](../platforms/ads-netzwerk.md)), nicht nur in GTM-Folklore.
3. Ein Haken an der Bestellung oder am Lead (Metafield, Note, Flag), damit Umsatz mit Tool vs. ohne Tool geht.

# Shopify-Schnitt (gleich schneiden)

Sessions Produktseiten, Shop-CR, CR nur relevante Collections, ATC-Rate PDP, AOV, Rückgaben, Checkout-Abbruch. Gleicher Zeitraum, gleiche Geräte wenn möglich. Quelle bleibt Shopify Analytics — der Collector ersetzt den Shop-Bericht nicht, er liefert die Feature-Events und den Haken.

# Feature-Events (Beispiel Visualizer)

`viz_open`, `viz_upload`, `viz_success`, `viz_fail`, `viz_add_to_cart`. Danach zwei Gruppen: hat generiert vs. hat nicht. Das ist die ehrliche Conversion.

Namen sind Beispiel. Dasselbe Muster für Kurs-Player, Voice-Agent, Fahrschul-Funnel.

# Marketing während des Fensters

Kampagne nicht umbauen. Feature-Traffic mit `utm_content` markieren. Support-Anfragen zum Feature vorher/nachher zählen, wenn die Zahl das Produkt tragen soll.

# Nicht

Fremde „+15 %“ ohne Baseline. Collector-Phase-1 als Ersatz für Shop-Analytics.
