---
type: pattern
title: Fahrschulen
description: Zielgruppe Fahrschulen in Deutschland. Angebot, Überblick, Instanz. Kein CRM-Dump.
status: draft
owner: shared
updated: 2026-09-08
tags: [pattern]
---

Fahrschulen sind in [Branding](../branding.md) sekundäre Zielgruppe. Dieses Pattern ist der Plan für die Nische. Produkt [süper](../platforms/super.md) und [addxion.ai](../platforms/addxion-ai.md) sind nicht der Keil.

# Satz

Jede Fahrschule braucht Sichtbarkeit und Anfragen. ADDXION verkauft zuerst Content, Website und Werbung, später Automation. Die Liste aller Schulen in Deutschland liegt in einer n8n-Instanz, nicht in dieser SSOT.

# Öffentliche Fläche

Landing auf addxion.com: `/page/fahrschule/`. Rail wie die Leistungen. Indexiert, nicht in der Nav, nicht Command Palette. Kein neues Paket. Copy legt Content, Website und Werbung auf die Nische.

# Nicht hier

- Keine tausend Firmen-Dateien unter [Relations](../relations/). Relation erst, wenn ein Gespräch läuft.
- Kein Inbox-Ticket als System für die Nische. Queue bleibt Bewegung an einer konkreten Schule oder am Aufsetzen der Instanz.
- Keine E-Mail, Telefon, Adresse in Personen-Dateien. [Privacy](privacy-by-design.md).
- Kein White-Label in v1. [Branding](../branding.md). Gleiche Seitenstruktur ist erlaubt, gleiche Baukasten-Marke nicht.
- Kein Kaltmail-Massenversand aus gescrapten Adressen. UWG; Kontaktweg ist Empfehlung, Anruf, vor Ort.

# Warum es trägt

Inhaber entscheidet selbst. Standort ist lokal, Wettbewerb um Schüler ist ständig. Site, Fotos und Film sind oft schwach oder veraltet. Fuhrpark und Team wechseln, Content muss nach. Das ist wiederholbar, ohne KI-Produkt und ohne Shop.

Beweisanker in Relations: [Wahib's Fahrschule](../relations/companies/wahibs-fahrschule.md), Opportunity Website & Bilder, Videos, in Twenty 7.000 EUR (ungeprüft). [Fahrschule Senkhorst](../relations/companies/fahrschule-senkhorst.md), [Fahrschule am ZOB](../relations/companies/fahrschule-am-zob.md), [Ninos Fahrschule](../relations/companies/ninos-fahrschule.md) sind dieselbe Nische, nicht die Liste.

# Angebot

Leistungen aus Branding, auf die Nische gelegt. Kein neues Paket erfinden, bis eines verkauft und benannt ist.

| Reihenfolge | Leistung | Was die Schule davon hat |
| --- | --- | --- |
| 1 | Content | Fotos Fuhrpark, Team, Theorieraum. Film für Site und Anzeigen. |
| 2 | Websites | Klassen, Preise, Team, Anfrage. Impressum und Pflichttexte. |
| 3 | Werbung | Anfragen in der Stadt, Landing aus der Site, nicht Media-Buying als Kern. |
| 4 | Automationen | Anfragen, Erinnerung, Bewertungen. n8n beim Kunden oder intern. |
| später | Apps / süper | Lern-App, wenn die Schule das Produkt will. Nicht im Erstgespräch. |
| selten | Shops | nur wenn es etwas zu verkaufen gibt. |

Erstgespräch: Site und Bilder. KI und süper nur wenn gefragt.

# Wiederkehr

Gilt, nicht nur Idee. Nach dem Erstauftrag bleibt die Schule Kunde, weil sich der Anlass wiederholt.

- **Neuer Fuhrpark:** neues Fahrzeug oder neues Krad → neue Fotos und oft neuer Film. Die alten Aufnahmen sind falsch.
- **Saison-Anzeigen:** Frühjahr, Herbst, Azubi. Werbung auf der bestehenden Landing, nicht jedes Mal eine neue Site.
- **Team:** neuer Fahrlehrer → Portrait und Seite nachziehen.

Automation monatlich erst, wenn Anfragen laufen. Paketname offen; der Rhythmus ist der Grund, warum das Geschäft trägt.

# Überblick

Ziel ist Sicht auf Fahrschulen in **Deutschland**, die man angehen kann. DACH später. Es gibt keine Bundes-SSOT aller Fahrschulen. Verzeichnisse und Karten-APIs sind Discovery. Firecrawl (oder ein anderer Extractor) ist Anreicherung einer bekannten URL: CMS, Klassen, ob Fotos da sind. Nicht der Census.

Qualifizierung in der Instanz, nicht im Wiki:

- Stadt / Kreis
- URL ja/nein, grobe Qualität
- Solo vs. mehrere Standorte
- Status: roh, qualifiziert, Gespräch, Kunde, nicht relevant

Beachhead zuerst: OWL / NRW, wo schon Gespräche sind. Die Gesamtliste dient dem Überblick und dem Score, nicht dem gleichzeitigen Anschreiben aller Schulen.

# Instanz

Die Liste und die Läufe sind **n8n**. [Pattern vs. Instanz](../fundamentals/pattern-vs-instanz.md). Workflows bleiben in der Instanz. [Repo-Grenzen](repo-grenzen.md): n8n ist Laufzeit, addxion.ai ist Fahrschul-Domäne (Stunden, Theorie), dieses Wiki gilt.

n8n macht:

1. Quellen einziehen (Verzeichnis, Export, API), nicht „das ganze Web“.
2. Tabelle halten (Name, Ort, URL, Score, Status).
3. Öffentliche Site anreichern, wo eine URL da ist.
4. Score für Outreach. Mensch entscheidet den Kontakt.

n8n macht nicht: Wahrheit dieser SSOT, Personen-PII, Massenmail.

Host, Workflow-Name und Tabellen-Ort sind offen. Nicht dieselbe Instanz wie [Grafik-Werkstatt Mail-Entlastung](../relations/companies/grafik-werkstatt.md) vermischen, ohne das bewusst zu entscheiden.

# Offen

**Ziel:** Überblick Deutschland plus wiederholbares Erstangebot, ohne die Nische in Inbox oder Relations zu kippen.

**Ist:** Öffentliche Landing `/page/fahrschule/` auf addxion.com. Vier Firmen in Relations. Wahib-Opportunity 7.000 EUR. Firecrawl war Inbox-Idee, verworfen als Census. Ninos-Gründungsordner ist aus dieser SSOT entfernt; Roh bleibt `raw/ninos-fahrschule-briefing.md`. Vor-Ort-Gang Bielefeld ist Absicht (reingehen, präsentieren, Bedarf fragen, Nein als Training). Sales-Skript von [Marco Wiede](../relations/people/marco-wiede.md) noch nicht da.

**Lücke:** Keine n8n-Instanz für die Liste. Kein Businessplan dieser Akquise in `raw/` oder Wiki. Discovery-Quelle nicht gesetzt. Kein schriftliches 12-Phasen-Skript.

**Zu klären:**

- Welcher Businessplan gemeint ist: Akquise-Plan ADDXION an Fahrschulen, oder Gründung [Ninos Fahrschule](../relations/companies/ninos-fahrschule.md). Nicht mergen.
- Erste Quelle für die DE-Liste (Verband, Branchenverzeichnis, Places-API).
- Wo n8n läuft und wie die Tabelle heißt.
- Ob 7.000 EUR das Anker-Angebot bleibt oder nur Wahibs Umfang war.
- Ob der erste Bielefeld-Gang vor oder nach dem Skript stattfindet.
