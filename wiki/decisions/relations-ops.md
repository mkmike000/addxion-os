---
type: decision
title: Relations-Queue in ops statt Twenty als SSOT
status: decided
owner: shared
updated: 2026-08-24
tags: [decision]
---

# Decision: Queue in dieser SSOT (Relations, nicht CRM)

**Datum:** 2026-08-24  
**Nachzug:** 2026-08-24 — CRM-Bezeichnung und `wiki/clients/` sind erledigt; Modell heißt Relations.

**Kontext:** Offene Arbeit braucht eine sichtbare Queue. Twenty existiert, ist aber nicht die Wahrheit dieses Bundles. Früher „CRM-light in ops“; der Bereich heißt **Relations**, nicht CRM. Firmen/Personen liegen unter `wiki/relations/`, nicht unter `wiki/clients/`.

**Entscheidung:** Offene Arbeit liegt in `ops/` (Inbox / Doing / Waiting). Opportunities in `ops/opportunities.md`. Firmen und Personen in `wiki/relations/`. Twenty ist nicht SSOT. Kein `ops/clients/`, kein `wiki/clients/`.

**Konsequenzen:** Tickets und Opportunities verlinken die Firmen-Datei, Personen nur per `id`. Kein Pflicht-Twenty. Prio-Formel: Notion-Logik in [AGENTS.md](../../AGENTS.md). Siehe [Relations Parties](relations-parties.md).

**Verworfen:** Twenty als führende Quelle für „was ist offen“. Der Name CRM für diesen Bereich. Parallel-Decision `crm-light-ops.md` (Inhalt hier gebündelt).
