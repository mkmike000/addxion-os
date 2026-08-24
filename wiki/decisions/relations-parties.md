---
type: decision
title: Firma, Person, Opportunity — Relations, nicht CRM
status: decided
owner: shared
updated: 2026-08-24
tags: [decision]
---

# Decision: Relations hat drei Dinge

**Datum:** 2026-08-24

**Kontext:** Eine Datei „Client“ vermischt Firma, Mensch und Deal. Zwei Menschen können denselben Namen tragen. Der alte Name „CRM“ trifft das nicht. Kodierte Schlüssel (`p-firma-vorname`) liegen neben der Realität.

**Entscheidung:**

1. Der Bereich heißt **Relations** (`wiki/relations/`). Nicht CRM.
2. **Firma** = `wiki/relations/companies/firmenname.md`. Dateiname folgt dem realen Namen (Slug). `id` Pflicht, gleich dem Dateinamen. Lead: `tags: [lead]`. Abschnitt `# Personen` mit Links auf die Personen-Dateien. Zwei gleiche Namen: Zahlensuffix (`…-2`). Ändert sich der Name, Datei und `id` nachziehen.
3. **Person** = `wiki/relations/people/vorname-nachname.md`. Dateiname folgt dem realen Vor- und Nachnamen (Slug). `id` Pflicht, gleich dem Dateinamen. Abschnitt `# Firma` mit Link zurück. Keine E-Mail, Telefon, Adresse, Geburtstag. Zwei gleiche Vor- und Nachnamen: Zahlensuffix (`…-2`) plus `disambiguation`. Ändert sich der Name, Datei und `id` nachziehen.
4. **Opportunity** = `ops/opportunities.md`. Mögliche Leistung. Firma Pflicht, Person optional per Datei. Zählt nicht zum Doing-WIP.

Webflow-Staging ist eine **Instanz** (gebaute Seite), keine zweite Firmen-Wahrheit.

Kollab-Personen der Firma ADDXION: [Alex Fauther](../relations/people/alex-fauther.md), [Mike Kaufmann](../relations/people/mike-kaufmann.md). Identität der Kollab: [identitaet](../fundamentals/identitaet.md). Root-`people/` gibt es nicht. Frontmatter-`owner: alex` ist Schreiber, nicht die Person-Datei.

**Homonyme:** Gleicher Vor- und Nachname oder gleicher Firmenname → Zahl am Dateinamen und an der `id`, nicht mergen. Bei Personen: `disambiguation` Pflicht (Firma oder Rolle, nicht Privatdaten).

**Verworfen:** Bezeichnung CRM. Eine Partei-Datei für Mensch und Firma. Schlüssel `p-firma-vorname`. Root-`people/` für Kollab-Identität. Opportunities als Wiki-Wahrheit ohne Queue. Firma ohne Personen-Abschnitt.
