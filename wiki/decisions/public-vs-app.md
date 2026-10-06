---
type: decision
title: Public vs App
description: Schaufenster nur öffentliche Information. Auftrag, Tabelle und Google-Profil hinter Session in der App.
status: decided
owner: mike
updated: 2026-10-06
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

Bewertungen ist der erste Schnitt:

- Öffentlich: `addxion.ai/leistungen/bewertungen` — nur Information plus „Google verbinden“.
- App: `addxion.ai/app/bewertungen` — Konto, Tabelle, wählen, zahlen.

„Google verbinden“ auf der öffentlichen Seite ist Better-Auth-Google. Callback `/app/bewertungen`. Danach Google-Business-Profil und die Liste nur in der App.

OAuth-Return und Stripe-Return für diesen Auftrag: `/app/bewertungen`, nicht die Leistungsseite.

# Nicht

- Auftrag, Bewertungs-Tabelle oder Checkout auf `/leistungen/bewertungen`
- Demo-Liste auf der öffentlichen Seite
- App-Shell auf dem Schaufenster

# Folge

[T-PUBLIC-APP](../fundamentals/truths.md), [addxion-ai](../platforms/addxion-ai.md).
