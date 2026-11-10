---
type: decision
title: Public vs App
description: Schaufenster nur öffentliche Information. Auftrag, Tabelle und Google-Profil hinter Session in der App.
status: decided
owner: mike
updated: 2026-11-10
tags: [decision, frontend, bewertungen]
sources:
  - id: chat-2026-10-06-bewertungen-app
    title: Google verbinden landet in /app/bewertungen
---

# Gilt

Eine TanStack-App, zwei Türen. Absicht sitzt im Pfad. [Heimat addxion.ai](heimat-ai.md).

| Tür | Wer | Was |
| --- | --- | --- |
| Schaufenster | niemand muss eingeloggt sein | Urteil, Preis, Ablauf. CTA öffnet Konto. |
| App | Session | Auftrag, Tabelle, Checkout, Google-Business-Profil |

Bewertungen ist der erste Schnitt. Die Werkbank `addxion.ai/app/bewertungen` trägt Konto, Tabelle, Auswahl und Zahlung.

`/leistungen` gibt es nicht mehr. Alte Links leiten auf `/` um, `/leistungen/bewertungen` auf `/app/bewertungen`.

„Google verbinden“ ist Better-Auth-Google mit Callback `/app/bewertungen`. Google-Business-Profil und Liste gibt es nur in der App.

OAuth-Return und Stripe-Return für diesen Auftrag: `/app/bewertungen`.

# Nicht

- Auftrag, Bewertungs-Tabelle oder Checkout auf einem öffentlichen Pfad
- Demo-Liste auf einer öffentlichen Seite
- App-Shell auf dem Schaufenster

# Folge

[T-PUBLIC-APP](../fundamentals/truths.md), [addxion-ai](../platforms/addxion-ai.md).
