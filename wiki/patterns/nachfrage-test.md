---
type: pattern
title: Nachfrage-Test
aliases: [Waitlist, Lead Magnet, Demand-Test]
description: Vor der Produktion Kontakt, Ort und Zahlungsabsicht sammeln. PDF ist nicht der Test.
status: active
owner: mike
updated: 2026-09-03
tags: [pattern, marketing]
sources:
  - id: chat-distribution-2026-09-03
    resource: raw/distribution-social-2026-09-03.md
    title: Grok-Chat Distribution Social
---

Theorie: [Distribution](../fundamentals/distribution.md). Klartext: das Ding heißt Nachfrage-Test, nicht Lead Magnet. Magnet ist nur eine Verpackung.

# Eine Aussage

Jeder Eingang in eigenes Inventar braucht drei Qualitäten. Fehlt die dritte, ist es Neugier, kein Markt.

1. **Kontakt** — wir erreichen die Person wieder.
2. **Ort oder Kontext** — Stadt, Betrieb, Prüfungsstelle, Rolle.
3. **Zahlungsabsicht** — Anzahlung, Reservierung, verbindliches Ja zum Preis. Nicht "interessant".

Kostenlose Liste liefert oft nur 1, selten 2, fast nie 3. 300 Free-Signups sind kein Beleg gegenüber einem Betrieb. 50 Anzahlungen in einer Stadt sind einer.

# Schwelle

Eine Zahl wie "300 pro Stadt, dann produzieren" ist eine **Produktionsregel**. Sie gilt nur, wenn die 300 dieselbe Qualität haben. Sonst skaliert man das falsche Signal.

# Event-Trennung

Immer getrennt zählen:

- `waitlist_signup` — Kontakt + Kontext
- `waitlist_paid` — Zahlungsabsicht

Retargeting nur auf Listen mit Absicht. Kooperation mit Betrieben nur mit dem zweiten Event plus Ort.

# Wiederverwendbar

Fahrschule, Handwerk, Reinigung, Beauty: derselbe Eingang (Inventar + Absicht). Nicht dieselbe Seite, nicht derselbe Reel, oft nicht derselbe Käufer. Muster kopieren, nachdem eine Instanz läuft. Nicht vorher.

# Nicht tun

- Konto für eine Plattform-Vision verlangen, bevor das konkrete Angebot da ist.
- Zwei Branchen in einem Test mischen.
- Produktion starten, weil die Liste lang ist.
