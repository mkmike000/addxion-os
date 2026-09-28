---
type: decision
title: Landing öffentlich
description: Kunden-Site ist Org-Datensatz. Werkbank hinter Session, öffentliche Projektion ohne Session. Nicht auf dem Ads-Host. Wort jetzt Site.
status: decided
owner: mike
updated: 2026-09-28
tags: [decision, ads, sites]
sources:
  - id: chat-2026-09-28
    resource: raw/agentic-business-landings-2026-09-28.md
    title: Roh Chat Agentic Landings
---

Wort und Host-Vertrag: [Sites Hosts](sites-hosts.md). Diese Datei bleibt die alte Tür (zwei Türen, eine Row).

# Gilt

Die Site ist ein Datensatz der Better-Auth-Organisation. Account des Kunden ist Voraussetzung zum Bauen, nicht zum Sehen.

| Tür | Wer | Pfad |
| --- | --- | --- |
| Werkbank | Org-Member, Session | `addxion.ai/sites/{slug}` |
| Öffentlich | niemand eingeloggt | Kunden-Host `/{slug}` |

Kein `/w/`-Präfix. Org kommt aus der Session.

Nur `status: published` plus Snapshot auf der öffentlichen Route.

# Host

Renderer in `addxion-ai`. CNAME-Ziel `sites.addxion.ai`. Kundendomain ist Ads-Dest.

`ads.addxion.ai` bleibt Collector. [Ads-Intake](ads-intake.md), [Heimat addxion.ai](heimat-ai.md).

# Klick

Anzeige → `ads.addxion.ai/c?dest=https://sites.kunde.de/{slug}` → 302 mit `xid` → Site liest `xid` → Formular und Pixel posten dieselbe `xid`.

`advertiser_id` = Org-Slug.

# Nicht

- Site auf `ads.addxion.ai`
- App-Shell auf der öffentlichen Route
- CNAME-Ziel mit Pfad
- globaler Slug auf `sites.addxion.ai`

# Folge

[Sites Hosts](sites-hosts.md), [Landing zwei Türen](../patterns/landing-zwei-tueren.md), [Landing-Inhalt](landing-content.md).
