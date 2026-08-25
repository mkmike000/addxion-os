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

`people/` im Root gibt es nicht (Kollab-Identität). Relations-Personen: `wiki/relations/people/`. `ops/clients/` und `wiki/clients/` gibt es nicht — erledigt: alles unter `wiki/relations/`. Der Bereich heißt **Relations**, nicht CRM. Twenty ist nicht SSOT.

## Drei Operationen

### Ingest

1. Quelle nach `raw/` legen (oder dort lassen).
2. In eigenen Worten nach `wiki/` verdichten. Pattern, Firma, Person und Ziel getrennt.
3. Links statt Kopie. `sources` setzen, wo Herkunft existiert.
4. Zeile in `log.md` (neueste oben): `ingest: …`

### Query

Zuerst [index.md](index.md) und `wiki/`. Nicht in Kunden-Repos suchen, solange die SSOT reicht.

### Lint

Tote Links, Widersprüche, doppelte Aussagen, veraltete Firmen-Seiten, Personen-Datei nicht `vorname-nachname`, Firma ohne `id` oder `id` ungleich Dateiname, zwei gleiche `id`, zwei gleiche Vor-Nachnamen ohne Zahlensuffix, Alias das eine andere Person oder Firma meint, Firma ohne `# Personen` oder Person ohne Firmen-Link, Tickets/Opportunities ohne Wiki-Link, Ziel ohne `id` oder B/R/A außerhalb 1–10. Befund: Zeile `lint: …` in `log.md`.

**Lint-Priorität:** Zuerst aktive Firmen + Einträge in ops + aktive Ziele; leere Stubs nicht als Blocker behandeln.

## log.md

Ein File für die ganze SSOT. Neueste oben. Git bleibt Versionierung; das Log ist der Agenten-Digest.

```text
## YYYY-MM-DD
- ingest: …
- decision: …
- done: …
- lint: …
```

## Pattern vs. Instanz vs. Relations vs. Ziel

- **Pattern** (`wiki/patterns/`) — wiederverwendbar, abstrakt (z. B. Mail-Automation als Leistungsmuster).
- **Firma** (`wiki/relations/companies/firmenname.md`) — eine Datei. Dateiname = Name (Slug). `id` Pflicht, gleich dem Dateinamen. Kunde oder Lead (`tags: [lead]`). Abschnitt `# Personen` mit Links auf die Personen-Dateien. Bei zwei gleichen Namen: Zahlensuffix (`…-2`). Ändert sich der reale Name, Datei und `id` nachziehen.
- **Person** (`wiki/relations/people/vorname-nachname.md`) — eine natürliche Person. Dateiname = Vor- und Nachname (Slug). `id` Pflicht, gleich dem Dateinamen. Firma steht unter `# Firma`, nicht im Dateinamen. Kein `p-firma-…`. Bei zwei Personen mit gleichem Vor- und Nachnamen: Zahlensuffix (`…-2`) und `disambiguation` (Firma oder Rolle), keine Privatdaten. Nie mergen. Ändert sich der reale Name, Datei und `id` nachziehen. Keine E-Mail, Telefon, Adresse, Geburtstag.
- **Ziel** (`wiki/goals/slug.md`) — Firmen-Outcome. `id` Pflicht, gleich Dateiname. B/R/A **1–10**, Deadline oder leer. Score rechnen, nicht als dritte Zahl pflegen. Notion-DB »Ziele« ist gemischt — nur Outcomes hierher, keine Arbeitstickets.
- **Instance** — konkrete Umsetzung (n8n, Repo, Webflow). Die Instanz ist die Quelle jener Sache. Hier Pointer, kein Abzug des Workflows oder der Kundendaten. Beispiel: Mail-Entlastung bei Grafik-Werkstatt = n8n-Mail-Automation-Instanz, nicht nur abstraktes Pattern.
- **Opportunity** (`ops/opportunities.md`) — welche Leistung man wem anbieten könnte. Link auf Firma, optional Person-Datei. Zählt nicht zum Doing-WIP. Wird zum Inbox-Ticket, wenn man sie aktiv angehen will.

## Collective

Gültig für alle = nur `wiki/` nach bewusstem Merge (Branch/PR oder explizites Freigeben). `owner`: `mike` | `alex` | `lukas` | `shared`. Lukas ist ein erlaubter Wert, keine gesetzte Schreib-Identität in diesem Bundle. Gesetzte Schreiber: Alex und Mike. Persönliche Rohordner gibt es nicht.

## Frontmatter (OKF-light)

Jede kuratierte Wiki-Datei außer kurzen Indexes:

```yaml
---
type: pattern | company | person | decision | process | platform | fundamental | goal
id: …   # Pflicht bei company, person und goal; gleich dem Dateinamen
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

Bei `type: goal` zusätzlich: `goal_status` (`ideen` | `in_arbeit` | `on_hold` | `erledigt` | `annulliert`), `B`, `R`, `A` (1–10), `deadline` (YYYY-MM-DD oder leer).

**Aliases** (von Obsidian): andere Schreibweisen **derselben** Sache — Webflow-Titel, Handelsname. Nicht die `id`, nicht eine zweite Person oder Firma. Bei Personen bleibt der Dateiname der Vor- und Nachname; bei Firmen der Firmenname. Query und Lint durchsuchen `title` und `aliases`.

## Ops — Kanban

| Spalte | Datei | Regel |
| --- | --- | --- |
| Inbox | `ops/inbox.md` | neu, Score absteigend |
| Doing | `ops/doing.md` | WIP-Limit **max 3** |
| Waiting | `ops/waiting.md` | wartet auf externe Partei |
| Opportunities | `ops/opportunities.md` | mögliche Leistung; kein WIP |
| Done | — | Eintrag entfernen; optional Zeile in `log.md` |

Board = diese Dateien (kein separates UI). Ziehen = Text in die Ziel-Datei verschieben und Score neu.

Ticket:

```markdown
- [ ] Kurz-Titel
  Link: wiki/…
  B: 1-5  R: 1-5  D: YYYY-MM-DD oder —  A: 1-5
  Score: …
  Hinweis: optional eine Zeile
```

### Prio-Formel (Notion, verbindlich)

Dieselbe Formel, zwei Skalen:

| Kontext | B, R, A |
| --- | --- |
| ops-Tickets | 1–5 |
| wiki/goals | 1–10 |

```text
wenn D leer:
  Score = 0
sonst:
  Score = (B + R) * min(10, 10 - TageBisDeadline / 7) / max(1, A^0.35)
```

`TageBisDeadline` = Kalendertage von heute bis D (ganze Tage). Überfällig: negativ → der Faktor wächst, wird aber durch `min(10, …)` auf 10 gedeckelt (wie Notion).

**Folge:** Ohne Deadline Score 0. Deadline setzen, sobald terminiert.

Beispiel Ticket (1–5): B=2, R=2, A=2, D in 8 Tagen → (4) * min(10, 10−8/7) / max(1, 2^0.35) ≈ 27.9.

Beispiel Ziel (1–10): B=10, R=8, A=10, D überfällig → (18) * 10 / 10^0.35 ≈ 80.4.

Queue-SSOT bleibt ops. Ziele tragen B/R/A/D im Frontmatter; Score nicht als extra gepflegte Zahl. Firmen-Datei darf `## Offene Punkte` haben, die Queue nicht ersetzen. Opportunity ist nicht automatisch ein Doing-Ticket.

## XI und RAG

XI = Runtime (Brains, Recipes) in Repo `addxion-xi`. Kein Collective-Wiki. Ein Recipe wird Pattern nur, wenn ein Mensch es hebt. Plattform-Kurzfassung: [wiki/platforms/addxion-xi.md](wiki/platforms/addxion-xi.md).

RAG kommt später als Index über diesem Repo. Output nur `.rag/` (gitignored). Kein Content-Ordner `rag/`. MCP ist Adapter, nicht SSOT: [wiki/processes/mcp.md](wiki/processes/mcp.md).

Später (nicht jetzt): GitHub Actions für Sync/Konflikt-Hinweise; Human-in-the-Loop ggf. über n8n. Contradiction/Angleich-Logik als Prozess, nicht als zweite Wahrheit.

## Guardrails

- Eine Aussage, ein Ort. Unklar → fragen.
- Keine Secrets, Rechnungen, Verträge, personenbezogenen Kundendaten (keine E-Mail, Telefon, Anschrift, Geburtstag in Personen-Dateien). Das ist **Privacy** in diesem Bundle.
- Commits nur auf ausdrückliche Bitte.
- Agent widerspricht, wenn Behauptung und Beleg nicht zusammenpassen.
