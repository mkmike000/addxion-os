---
type: decision
title: Landing öffentlich
description: Kunden-Landing ist Org-Datensatz. Werkbank hinter Session, öffentliche Projektion ohne Session. Nicht auf dem Ads-Host.
status: decided
owner: mike
updated: 2026-09-28
tags: [decision, ads, landing]
sources:
  - id: chat-2026-09-28
    resource: raw/agentic-business-landings-2026-09-28.md
    title: Roh Chat Agentic Landings
---

# Gilt

Die Landing ist ein Datensatz der Better-Auth-Organisation. Account des Kunden ist Voraussetzung zum Bauen, nicht zum Sehen.

Zwei Türen, eine Row:

| Tür | Wer | Pfad |
| --- | --- | --- |
| Werkbank | Org-Member, Session, active org | `addxion.ai/landings/{slug}` |
| Öffentlich | niemand eingeloggt | `addxion.ai/l/{slug}` oder Host |

Kein `/w/`-Präfix. Org kommt aus der Session, nicht aus der URL. Inhalt: [Landing-Inhalt](landing-content.md).

Nur `status: published` plus Snapshot auf der öffentlichen Route. Draft bleibt hinter Session.

# Host

Inhalt lebt in der Frontend-App (`addxion-ai`). Default-Pfad `/l/{slug}`.

Alias `l.addxion.ai/{slug}` darf dieselbe Renderer-Funktion treffen. Kein zweites Repo.

Kundendomain per CNAME auf denselben Renderer ist der Normalfall bei bezahltem Traffic. ADDXION-Subdomain ist Fallback.

`ads.addxion.ai` bleibt Collector. Kein HTML, kein `/landings`, kein Kundenslug dort. [Ads-Intake](ads-intake.md), [Heimat addxion.ai](heimat-ai.md).

# Klick

Anzeige → `ads.addxion.ai/c?dest=https://l.addxion.ai/{slug}` → 302 mit `xid` → Landing liest `xid` aus der URL → Formular und Pixel posten dieselbe `xid` an `POST /v1/events`.

`advertiser_id` = Org-Slug. `xid` ist Klick, nicht Session des Kunden, nicht Order-ID.

Variante ist Feld am Datensatz, kein Ordner, kein `index` in der URL.

# Nicht

- Landing auf `ads.addxion.ai`
- App-Shell auf der öffentlichen Route
- Events in Fahrschul- oder Auth-DB
- zwei Event-Modelle
- Collector in die Frontend-App mergen
- `/w/$org` als kanonische Werkbank

# Folge

[Landing zwei Türen](../patterns/landing-zwei-tueren.md), [Landing-Inhalt](landing-content.md), [Ads-Netzwerk](../platforms/ads-netzwerk.md), [Agentic Loop](agentic-loop.md).
