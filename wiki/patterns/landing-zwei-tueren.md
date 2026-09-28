---
type: pattern
title: Landing zwei Türen
description: Eine Org-Row, Werkbank und öffentliche Projektion. Messung über den Collector, nicht über den Inhaltshost.
status: active
owner: mike
updated: 2026-09-28
tags: [pattern, ads, landing]
sources:
  - id: chat-2026-09-28
    resource: raw/agentic-business-landings-2026-09-28.md
    title: Roh Chat Agentic Landings
---

Gilt mit [Landing öffentlich](../decisions/landing-public.md). Look: [Marketing-Sites](marketing-sites.md), [CTA-Mauer](cta-mauer.md). Privacy: [Privacy by Design](privacy-by-design.md).

# Modell

Org besitzt Landings. Landing besitzt Slug, Varianten, Snapshot, Status.

Öffentliche Route rendert den Snapshot ohne App-Chrome. Werkbank rendert denselben Datensatz mit Editor.

Besucher ≠ Org-Member. `xid` klebt am Klick. Session des Kunden klebt nicht am Besucher.

# Messung

`/c` mintet oder übernimmt `xid` und leitet auf die öffentliche URL. Die Landing ist `dest`, nie der Collector-Host.

Pixel und Formular sind Clients von `POST /v1/events`. Ein Event-Modell.

Charts liest `addxion.ai` aus dem Ads-Store. Shop-CR bleibt im Shop.

# Optionen (Host)

| Option | Wann |
| --- | --- |
| `addxion.ai/l/{slug}` | Default, eine App |
| `l.addxion.ai/{slug}` | Alias, CSP und Allowlist trennen |
| Kundendomain | bezahlter Traffic |
| `ads.addxion.ai/…` | nie |

# Offen

**Ziel:** Erste veröffentlichte Kunden-Landing mit `xid` in `clicks` und `events`.
**Ist:** Kein Landing-Datensatz in der App. Collector Phase 2–3 offen.
**Lücke:** Schema, öffentliche Route, Pixel-Client, Allowlist der dest-Hosts.
**Zu klären:** Alias-Host jetzt oder nach erstem `/l/{slug}`.
