# ADDXION Knowledge — AGENTS.md

Knowledge-SSOT. Kein Operating System. Kein Produktcode. Deutsch.

Einstieg: [index.md](index.md).

## Schichten

| Ort | Rolle | Agent |
| --- | --- | --- |
| `raw/` | Quelle, unverändert | lesen; nicht umschreiben (außer Datei nach expliziter Bitte verschieben) |
| `wiki/` | was gilt | verdichten, verlinken, nicht duplizieren |
| `ops/` | Bewegung (Queue) | Tickets mit Link ins Wiki; kein Wissen hier lagern |
| `log.md` | ein Chronik-File für die ganze SSOT | nach Ingest / Decision / Done / Lint eine Zeile |

`people/` im Root gibt es nicht (Kollab-Identität). Relations-Personen: `wiki/relations/people/`. `ops/clients/` gibt es nicht. Der Bereich heißt **Relations**, nicht CRM.

## Drei Operationen

### Ingest

1. Quelle nach `raw/` legen (oder dort lassen).
2. In eigenen Worten nach `wiki/` verdichten. Pattern, Firma und Person getrennt.
3. Links statt Kopie. `sources` setzen, wo Herkunft existiert.
4. Zeile in `log.md` (neueste oben): `ingest: …`

### Query

Zuerst [index.md](index.md) und `wiki/`. Nicht in Kunden-Repos suchen, solange die SSOT reicht.

### Lint

Tote Links, Widersprüche, doppelte Aussagen, veraltete Firmen-Seiten, Personen-Datei nicht `vorname-nachname`, Firma ohne `id` oder `id` ungleich Dateiname, zwei gleiche `id`, zwei gleiche Vor-Nachnamen ohne Zahlensuffix, Alias das eine andere Person oder Firma meint, Firma ohne `# Personen` oder Person ohne Firmen-Link, Tickets/Opportunities ohne Wiki-Link. Befund: Zeile `lint: …` in `log.md`.

## log.md

Ein File für die ganze SSOT. Neueste oben. Git bleibt Versionierung; das Log ist der Agenten-Digest.

```text
## YYYY-MM-DD
- ingest: …
- decision: …
- done: …
- lint: …
```

## Pattern vs. Instanz vs. Relations

- **Pattern** (`wiki/patterns/`) — wiederverwendbar, abstrakt.
- **Firma** (`wiki/relations/companies/firmenname.md`) — eine Datei. Dateiname = Name (Slug). `id` Pflicht, gleich dem Dateinamen. Kunde oder Lead (`tags: [lead]`). Abschnitt `# Personen` mit Links auf die Personen-Dateien. Bei zwei gleichen Namen: Zahlensuffix (`…-2`). Ändert sich der reale Name, Datei und `id` nachziehen.
- **Person** (`wiki/relations/people/vorname-nachname.md`) — eine natürliche Person. Dateiname = Vor- und Nachname (Slug). `id` Pflicht, gleich dem Dateinamen. Firma steht unter `# Firma`, nicht im Dateinamen. Kein `p-firma-…`. Bei zwei Personen mit gleichem Vor- und Nachnamen: Zahlensuffix (`…-2`) und `disambiguation` (Firma oder Rolle), keine Privatdaten. Nie mergen. Ändert sich der reale Name, Datei und `id` nachziehen. Keine E-Mail, Telefon, Adresse.
- **Instance** — konkrete Umsetzung (n8n, Repo, Webflow). Die Instanz ist die Quelle jener Sache. Hier Pointer, kein Abzug des Workflows oder der Kundendaten.
- **Opportunity** (`ops/opportunities.md`) — welche Leistung man wem anbieten könnte. Link auf Firma, optional Person-Datei. Zählt nicht zum Doing-WIP.

## Collective

Gültig für alle = nur `wiki/` nach bewusstem Merge. `owner`: `mike` | `alex` | `lukas` | `shared`. Lukas ist ein erlaubter Wert, keine gesetzte Identität in diesem Bundle. Gesetzte Schreiber: Alex und Mike.

## Frontmatter (OKF-light)

Jede kuratierte Wiki-Datei außer kurzen Indexes:

```yaml
---
type: pattern | company | person | decision | process | platform | fundamental
id: …   # Pflicht bei company und person; gleich dem Dateinamen
title: …
aliases: []
description: …
status: draft | active | decided | deprecated
owner: mike | alex | lukas | shared
updated: YYYY-MM-DD
tags: []
---
```

`type` Pflicht. Rest empfohlen. Herkunft: OKF-`sources` (id, resource, title), nicht Prosa `sourcedFrom`. Kein `verified` erfinden — fehlt = unverified.

**Aliases** (von Obsidian): andere Schreibweisen **derselben** Sache — Webflow-Titel, Handelsname. Nicht die `id`, nicht eine zweite Person oder Firma. Bei Personen bleibt der Dateiname der Vor- und Nachname; bei Firmen der Firmenname. Query und Lint durchsuchen `title` und `aliases`.

## Ops — Kanban

| Spalte | Datei | Regel |
| --- | --- | --- |
| Inbox | `ops/inbox.md` | neu, Score absteigend |
| Doing | `ops/doing.md` | WIP-Limit **max 3** |
| Waiting | `ops/waiting.md` | wartet auf externe Partei |
| Opportunities | `ops/opportunities.md` | mögliche Leistung; kein WIP |
| Done | — | Eintrag entfernen; optional Zeile in `log.md` |

Ticket:

```markdown
- [ ] Kurz-Titel
  Link: wiki/…
  B: 1-5  R: 1-5  D: YYYY-MM-DD oder —  A: 1-5
  Score: …
  Hinweis: optional eine Zeile
```

`Score = (B * 2) + (R * 2) + DeadlineBoost - A`

DeadlineBoost: überfällig 3, ≤3 Tage 2, ≤7 Tage 1, sonst 0.

Kein Score im Wiki. Queue-SSOT ist ops. Firmen-Datei darf `## Offene Punkte` haben, die Queue nicht ersetzen. Opportunity ist nicht automatisch ein Doing-Ticket.

## XI und RAG

XI = Runtime (Brains, Recipes). Kein Collective-Wiki. Ein Recipe wird Pattern nur, wenn ein Mensch es hebt.

RAG kommt später als Index über diesem Repo. Output nur `.rag/` (gitignored). Kein Content-Ordner `rag/`. MCP ist Adapter, nicht SSOT: [wiki/processes/mcp.md](wiki/processes/mcp.md).

## Guardrails

- Eine Aussage, ein Ort. Unklar → fragen.
- Keine Secrets, Rechnungen, Verträge, personenbezogenen Kundendaten (keine E-Mail, Telefon, Anschrift, Geburtstag in Personen-Dateien).
- Commits nur auf ausdrückliche Bitte.
- Agent widerspricht, wenn Behauptung und Beleg nicht zusammenpassen.
