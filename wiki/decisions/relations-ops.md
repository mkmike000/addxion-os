---
type: decision
title: Relations-Queue in ops statt Twenty als SSOT
status: decided
owner: shared
updated: 2026-08-24
tags: [decision]
---

# Decision: Queue in dieser SSOT

**Datum:** 2026-08-24

**Kontext:** Offene Arbeit braucht eine sichtbare Queue. Twenty existiert, ist aber nicht die Wahrheit dieses Bundles. Der Bereich heißt Relations, nicht CRM.

**Entscheidung:** Offene Arbeit liegt in `ops/` (Inbox / Doing / Waiting). Opportunities in `ops/opportunities.md`. Firmen und Personen in `wiki/relations/`. Twenty ist nicht SSOT.

**Konsequenzen:** Tickets und Opportunities verlinken die Firmen-Datei, Personen nur per `id`. Kein `ops/clients/`. Kein Pflicht-Twenty. Siehe [Relations](relations-parties.md).

**Verworfen:** Twenty als führende Quelle für „was ist offen“. Der Name CRM für diesen Bereich.
