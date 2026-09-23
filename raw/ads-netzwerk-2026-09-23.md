---
type: Data
title: Ads-Netzwerk Intake
description: Rohaufnahme Chat 2026-09-23 zu eigenem Ads-Netzwerk, Pixel, Conversion-API.
status: draft
sources:
  - id: chat-2026-09-23
    resource: Grok-Chat Mike 2026-09-23 Custom Pixel / CAPI / eigenes Netzwerk
    title: Chat Ads-Netzwerk
---

Datum der Aufnahme: 2026-09-23

# Werte

| Zeichen | Einheit | Anmerkung |
| --- | --- | --- |
| Ziel | Aussage | Selbst Ads-Netzwerk werden, nicht nur Meta/Google orchestrieren |
| Intake | Aussage | Eigene Conversion-API als Kern; Pixel als Client derselben Pipeline |
| Nächster Schritt genannt | Artefakt | POST /v1/events Payload plus schmales JS (Consent, click_id, Beacon) |
| Abgrenzung Meta | Aussage | Meta-Pixel nur wenn auch auf Meta ausgespielt wird |
| Phase 1 genannt | Aussage | Click-Redirect plus click_id plus API lead/purchase |
| Phase 2 genannt | Aussage | First-Party-JS plus Shopify-Adapter |
| Phase 3 genannt | Aussage | Impression-Tracker, Frequency, Basic Fraud |
| Phase 4 genannt | Aussage | Bid auf eigene Events |
| Systeme im Chat genannt | Pointer | Shopify Customer Events, addxion.ai Kurse/Fahrschule, Cloudflare, Elixir/Turso Runtime |

Kein „deshalb“. Keine Empfehlung. Aussage erst nach Verdichtung in wiki/.
