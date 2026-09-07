---
type: platform
title: addxion-com
description: Marketing und CMS. IA hier. Code in addxion-com.
status: active
owner: shared
updated: 2026-09-06
tags: [platform]
sources:
  - id: com-masterplan
    resource: addxion-com/MASTERPLAN.md
    title: Masterplan addxion.com (IA übernommen 2026-08-26)
---

Repo `addxion-com`. Marketing-Seiten, `brand.css`, Payload-CMS unter `/cms`. Copy folgt Branding. Look folgt Design.

# Grenzen

Keine Design-System-Primitives. Keine parallele Markenstrategie.

# IA

```
/                         Start: Hero, Vergangenheit, Gegenwart, Zukunft
/inspiration/             Produkt Inspiration. Formular hier, nicht im Start-Rail, nicht in der Nav
/inspiration/ergebnis/    Ergebnis (noindex)
/empfehlung/              Empfehlung
/automations/             Produkt Automationen
/leistungen/content/
/leistungen/werbung/
/leistungen/bewertungen/  Negative Google-Bewertungen löschen lassen
/leistungen/websites/     Rail wie die anderen, plus Projekt-Raster
/leistungen/shops/
/leistungen/shops/*       Einrichtung, Themes, Integrationen, Fehlerbehebung, Audit, Katalog
/leistungen/apps/
/page/fahrschule/         Vertikal Fahrschule. Rail wie Leistungen, nicht in der Nav
/page/aufklaerer/         Vertikal Aufklärer (EuroIQ). Rail wie Leistungen, Chat in Card
/aufklaerer/              301 auf /page/aufklaerer/
/neon/                    Lab Neon (Katalog-Index), noindex, nicht in der Nav
/neon/buttons|field|…     Lab-Kategorien, noindex
/neon/frames/             Compare, Before/After
/neon/genui/              GenUI-Composer, noindex, nicht in der Nav
/system/                  301 auf /neon/
```

Start und Leistungsseiten: zweispaltiges Rail. Rail-Claim `font-light`, wie die Start-H1, `w-full` mobil und `md:w-2/3` der linken Box, Umbruch über Breite, nicht erzwungen. Header links: ADDXION® als Link zur Startseite, gleiches `page-title`, Hover dimmt. Rechte Start-Rail: Vergangenheit (Kundenstimmen), Gegenwart (Leistungen, News), Zukunft (Mission). Inspiration nur unter `/inspiration/`, nicht in der Start-Rail.

`/leistungen/websites/`: gleiches Rail wie die anderen Leistungen (Vorgehen, Umfang, Related, CTA). Zusätzlich oben rechts Hairline-Raster der Projekt-Screenshots (`src/lib/projects.ts`).

`/leistungen/bewertungen/`: gleiches Rail. Links der Claim in `w-2/3`, darunter Neon-Button `Google verbinden` (an der Stelle von Termin buchen). Nach OAuth: Button-Text `Google verbunden`, disabled. Rechts leer, bis das Profil verbunden ist; dann Liste, Auswahl, Zahlung. Kein Lede unter dem Claim. Kein Eyebrow „Auftrag“, kein „prüfen“, kein Sternenkauf. Keine Tabs, kein Maps-Link, keine Beschreibung zuerst. Ohne Liste kein Checkout. `?demo=1` legt einen Draft mit Beispielliste, als wäre Google verbunden. Nicht in der Nav. Checkout ist echt. E-Mail erst im Stripe-Checkout. Stripe-Position: `Google Bewertung löschen`. Liste = Neon-Table (Hairline, Checkbox, Name, Bewertung), ohne Sterne-Spalte, ohne Einzelpreis. Filter = Neon-Select (Schnellauswahl). Eine filled Primary. Checkbox aus Neon. Fehler und Hinweise: persistenter Toast unten (`SiteToast`), bleibt bis ×. URL-`error` landet dort. 29 € pro Bewertung. Pflicht: eigene Kommentare und Likes sind weg. Stripe Checkout dark: Session `branding_settings` plus Account-Akzent `#171717` (Checkout-Hintergrund), Button `#E5E5E5`, Pill, Inter. API `2026-08-26.dahlia`. Nach 14 Tagen Erstattung, wenn die Bewertung noch da ist. Stripe-Webhook `POST /api/bewertungen/stripe/`. n8n `https://n8n.addxion.com/webhook/bewertungen-auftrag` (Header `X-N8N-Secret`). Status zurück an `POST /api/bewertungen/n8n/`. KV `BEWERTUNGEN_ORDERS`. Code: `src/lib/bewertungen/`. Google Cloud: APIs `mybusinessaccountmanagement`, `mybusinessbusinessinformation`, `mybusiness` einschalten. Reviews: `batchGetReviews`, sonst Standort für Standort; ein kaputter Standort killt den Connect nicht. Zusätzlich [GBP-API-Zugang](https://support.google.com/business/contact/api_default) (Basic API Access), sonst Quota 0. Redirect `/api/bewertungen/google/callback/`. Nicht der Auth-Login.

n8n-Body nach Zahlung: `orderId`, `email`, `source` (`google` | `beschreibung`), `note`, `dossier`, `ownerCleanupConfirmed`, `items[]` (`id`, `gbpName`, `rating`, `comment`, `verdict`, `analysis`, `amountCents: 2900`), `paidAt`. n8n-Callback: `orderId`, optional `status`, `items[]` mit `done` | `refunded`.

Zeitachse eine Achse, drei Stufen. News in der Gegenwart. Mission auf 2036.

Daten im Repo: `src/lib/services.ts`, `src/lib/verticals.ts`, `src/lib/projects.ts`, `src/lib/empfehlung.ts`, `src/lib/faqs.ts`, `src/lib/bewertungen/`, `src/lib/euroiq.ts`, `src/lib/whatsapp.ts`, `src/lib/neon-lab.ts`. Seiten in `src/pages`.

`/page/`: Vertikalen, nicht Leistungen. Fahrschule und Aufklärer. Indexiert, nicht in der Nav, nicht Command Palette. Fahrschule-Copy aus [Fahrschulen](../patterns/fahrschulen.md).

`/page/aufklaerer/`: Vertikal Aufklärer, Rail wie die anderen. Links Claim (`w-full md:w-2/3`) und CTA „In WhatsApp starten“. Rechts zuerst das Chat-Beispiel in einer Neon-Card, dann Vorgehen, Umfang, Score, Für wen, FAQ. CTA unten: nur Heading plus Button, kein wiederholter Hero-Subtext. Kein Formular, kein Quiz auf der Seite. Prefill `/aufklaeren` startet den Check im WhatsApp-Unternehmensprofil. `/aufklaerer/` 301 hierher. Code: `src/lib/euroiq.ts`, `src/lib/whatsapp.ts`.

`/neon/genui/`: GenUI-Composer, nicht in der Nav, nicht in der Sitemap, `noindex`. PageHeader-Titel = Heading und Input in einem. Offene Nav listet Board und Vorlagen.

`/neon/`: Lab **Neon** (Katalog), nicht in der Nav, nicht in der Sitemap, `noindex`. Index listet Kategorien. Unterseiten: `/neon/buttons/`, `/neon/field/`, `/neon/overlay/`, `/neon/navigation/`, `/neon/table/`, `/neon/chart/`, `/neon/mark/`, `/neon/type/`, `/neon/surface/`, `/neon/frames/`. Hairline-Raster, Zellen transparent. Katalog = `@addxion/components`-Imports inkl. Field, InputGroup, Toast, Table, Chart, Aria-Controls. `/neon/frames/`: Compare und Before/After, Hairline-Split, keine Slider. Input und InputGroup = Pill, Prefix (`https://`) = Sans, gleiche Schrift wie Placeholder (`beispiel.de`). Combobox = Pill. Tabs nur die Leiste, kein Panel-Text. Table- und Data-grid-Zelle je eine Rasterzelle (1/4), nebeneinander in der ersten Hälfte der Zeile, nicht `col-span-2`. Vorschau Bewertungen bzw. Grid: zwei Zeilen, Table ohne Caption „n von m gewählt“, Grid ohne Toolbar. Kein tablecn-Kit. Kein Band „ai heute — Untitled UI“. Badge mit Phosphor-`X` und Bild, Avatar-Glance (Initials, Phosphor `User`/`Plus`/`SealCheck`, zentriert). Zellen **File** (PDF/XLSX/PNG/MP4-Kürzel), **Payment** (`PaymentMark`: Visa, Mastercard, Amex), **Social** (`SocialButton`: Google/GitHub/Apple), **Hitbox** (`FeaturedIcon` 44×44) — alle aus `@addxion/components`, Lab nur Import. Kein Dot-Primitive. Button-Zelle: Primary, Secondary, Outline, Ghost (idle muted, Hover Wash-Pill), Link (unterstrichener Text, Hover dimmt). Darunter Nav-Probe (QuickNav-Pill, Chrome, keine CTA-Variante). Zelle **Zustände**: Disabled, Laden. Zelle **Sizes**: Small, Medium, Large (Primary). Zelle **Title**: Variable Inter, `wght` folgt dem Pointer pro Glyphe (`prefers-reduced-motion` = 400). Zelle **Field** nach InputGroup: sichtbares Label, Control, Description, Error am Feld. Data-grid interaktiv (Checkbox, Switch Aktiv). Chart: je eine Rasterzelle (1/4) für Area, Line, Bar, Composed, Radar, Pie, Radial, Sankey — Typen aus [EvilCharts ECharts](https://evilcharts.com/docs/echarts/components), Look Neon-Tokens. Icons = Phosphor Duotone. Kein Band Sections. Kein Band Chrome. Sprache: Zell-Label und Varianten = Identifier Englisch; Nutztext und Bänder Deutsch ([Klartext](../fundamentals/klartext.md)). `/system/` 301 auf `/neon/`.

# Agent-Regeln

Deltas in `brand.css`. Wissen nur im Wiki. Repo = Ausführung.
