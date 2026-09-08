---
type: platform
title: addxion-com
description: Marketing und CMS. IA hier. Code in addxion-com.
status: active
owner: shared
updated: 2026-09-08
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
/                         Start: erster Screen Claim 100dvh mit Header. Danach Nav-Kacheln, Mission. Keine Karten-Reihen
/produkte/                Produkte. 2×3: Inspiration, Automationen, AI, Aufklärer, GenUI, Neon
/zielgruppen/             Zielgruppen. Masonry, zuerst Fahrschulen. Nicht in der Palette als Einzel-Seiten
/inspiration/             Produkt Inspiration. Formular hier, Karte auf Start und /produkte/, nicht in der Nav
/inspiration/ergebnis/    Ergebnis (noindex)
/projekte/                Projektübersicht. Masonry 1/3, Höhe folgt dem Screenshot
/kundenstimmen/           301 auf /projekte/
/leistungen/              Hub: 2×3. Content erstellen, Werbung aufsetzen, Bewertungen löschen, Websites bauen, Shops einrichten, Apps bauen. Automationen nur /produkte/
/news/                    News. Masonry 1/3 wie die anderen Hubs
/empfehlung/              Empfehlung
/automations/             Produkt Automationen
/leistungen/content/
/leistungen/werbung/
/leistungen/bewertungen/  Negative Google-Bewertungen löschen lassen
/leistungen/websites/     Rail wie die anderen. Raster liegt auf /projekte/
/leistungen/shops/        Eine Seite: Einrichtung, Theme, Katalog, Integrationen, Fehler, Audit
/leistungen/apps/
/page/fahrschule/         Vertikal Fahrschule. Karte auf /zielgruppen/, nicht in der Palette
/page/aufklaerer/         Vertikal Aufklärer (EuroIQ). Karte auf /produkte/, nicht in der Palette
/aufklaerer/              301 auf /page/aufklaerer/
/neon/                    Lab Neon (Katalog-Index), noindex, nicht in der Nav
/neon/buttons|field|…     Lab-Kategorien, noindex
/neon/frames/             Compare, Before/After
/neon/genui/              GenUI-Composer, noindex, nicht in der Nav
/system/                  301 auf /neon/
```

Leistungsseiten: zweispaltiges Rail. Start: einspaltig, kein Hero-Rail, kein Pin. Rail-Claim `font-light`, wie die Start-H1, Klasse `.rail-claim` in `site.css`: `w-full` mobil, `md:w-2/3` der linken Box (Leistungen). Leistungs-Claims: Umbruch über Breite, nicht erzwungen. Start-H1: volle Breite, Umbruch nach „in“ (`Deine Digitalagentur in` / `Gütersloh & Bielefeld`), kein Punkt am Ende. Darunter ein Satz Lede (`Marke, Web, Shop und Software aus einer Hand.`), dann Primary „Projekte ansehen“. Header eine Spalte: ADDXION® als Link zur Startseite plus Nav, Hover dimmt, kein zweites Feld, kein Sektions-Titel auf Home. Start: erster Screen Claim plus Neon-Primary „Projekte ansehen“ (`/projekte/`), **100dvh zusammen mit PageHeader** (Hero zieht unter den Header). H1, Lede und Primary zentriert im ersten Screen (horizontal und vertikal). Kein Termin auf der Startseite, solange Inspiration fehlt. Keine Leistungs-, Projekt- oder Produkt-Karten auf der Startseite. Darunter Nav-Kacheln, je eine Zelle mit Outline-Button und Phosphor-Icon: Leistungen, Produkte, Zielgruppen, News, Empfehlung, Richtlinien. Projekte nur im Hero-Primary, nicht nochmal als Kachel. Dann Mission als normale Sektion, nicht 100svh. Keine Pfeil-Navigation. Kein Chart, keine Zeitachse auf der Startseite. Nav und Command Palette: Home, Projekte, Leistungen (`/leistungen/`), Produkte (`/produkte/`), Zielgruppen (`/zielgruppen/`), News (`/news/`), Empfehlung, Richtlinien. Aufklärer und Fahrschule nicht in der Palette. Keine einzelnen Leistungs-Items in der Nav. Projektübersicht nur unter `/projekte/`. Inspiration: Karte unter `/produkte/`, Formular unter `/inspiration/`. Nicht auf der Startseite. Keine Seite `/kooperation/`. Wer Kunden bringt, landet auf `/empfehlung/`. Subunternehmer-Auftritt ist kein öffentliches Angebot.

`/produkte/`: Hub wie Leistungen (Hairline-Raster, Zeilen 1/3, kein Featured). Karten aus `src/lib/produkt-hub.ts`: Inspiration, Automationen, AI (`addxion.ai`), Aufklärer (`/page/aufklaerer/`), GenUI (`/neon/genui/`), Neon (`/neon/`). Nicht die Leistungs-Karten. Indexiert, in der Nav und Command Palette. Kein Rail.

`/zielgruppen/`: Hub wie Leistungen. Karten aus `src/lib/zielgruppe-hub.ts`. Als Erstes Fahrschulen (`/page/fahrschule/`). Indexiert, in der Nav und Command Palette. Kein Rail. Einzel-Vertikalen nicht in der Palette.

`/projekte/`: Hairline-Raster wie Neon (Gap-Trick: Parent `--border`, Zellen `--background`). Alle Karten 1/3, kein Featured. Pro Zelle Neon-CardRoot: Header-Titel, Hero-Screenshot `mode="full-bleed"` (idle kein Abstand links/rechts/unten; Hover/Focus Scoop per `clip-path`, Höhe bleibt), kein Footer (`src/lib/projects.ts`). Höhe folgt dem Screenshot. Passt eine Kundenstimme (Join über id bzw. `projectId`), sitzen Portrait und Screenshot nebeneinander in einem CardWrapper (`mode="grid"`, zwei CardRoots `embedded`). Ein Header über beide: Vorname plus Firma in Abstufung (`muted`), Firma nicht nochmal auf dem Screenshot. Header = Card-Fläche (`bg-card`), nicht Canvas. Portrait links, Screenshot rechts, gleiche Höhe, `object-cover`, 4px Abstand dazwischen (`gap-x-1`), kein Hairline-Strich, kein Außenrahmen am Wrapper. Screenshot verlinkt die Live-Website, Portrait die Kunden-Site. Indexiert, in der Nav und Command Palette. Kein Rail.

`/kundenstimmen/`: 301 auf `/projekte/`. Kein eigener Hub. Portraits nur links in den Projektkarten (`src/lib/kundenstimmen.ts`).

`/leistungen/`: Hub wie `/projekte/` (Hairline-Raster, Gap-Trick): alle Karten 1/3, kein Featured. Pro Zelle Neon-CardRoot: Header-Titel, Hero-Bild `mode="full-bleed"` (idle Kante, Hover Scoop per `clip-path`), kein Footer (`src/lib/leistung-hub.ts`). Sechs Karten, 2×3, zeilenweise (nicht Spalten-Masonry). Katalogname Leistung + Infinitiv: Content erstellen, Werbung aufsetzen, Bewertungen löschen, Websites bauen, Shops einrichten, Apps bauen. Automationen sitzt auf `/produkte/`, nicht hier. Motive in `public/leistungen/`, nicht Projekt-Screenshots. Shop ist eine Seite (`/leistungen/shops/`), keine Kinder-URLs. Alte `/leistungen/shops/*` 301 dorthin. Karte verlinkt die Leistungsseite. Kein 301 auf Home.

`/news/`: Hub wie Leistungen (Hairline-Raster, alle Karten 1/3, kein Featured). Karten aus `src/lib/news.ts`. Aktuell nur „Neue Features in ADDXION AI“. In der Nav und Command Palette. Start zeigt News erst ab zwei echten Karten. Kein Rail auf der Seite.

`/empfehlung/`: Rail wie Leistungen links (Claim, CTA „Eintragen“). Kein Caption unter dem Button (keine „Antwort in 24 Stunden“, keine Mail). Rechte Spalte stapelt: Provision, Für wen, Vorteile, Ablauf, Anfrage, Fragen — hintereinander, nicht je `100dvh`.

`/leistungen/websites/`: gleiches Rail wie die anderen Leistungen (Vorgehen, Umfang, Related, CTA). Projekt-Screenshots unter `/projekte/`.

`/leistungen/shops/`: gleiches Rail, eine Seite. Vorgehen deckt Einrichtung, Theme, Katalog, Integrationen, Fehlerbehebung und Audit. Keine Kinder-URLs.

`/leistungen/bewertungen/`: gleiches Rail. Links der Claim (`w-full md:w-2/3`, Klasse `.rail-claim`), darunter Neon-Button `Google verbinden` (an der Stelle von Termin buchen). Nach OAuth: Button-Text `Google verbunden`, disabled. Rechts leer, bis das Profil verbunden ist; dann Liste, Auswahl, Zahlung. Kein Lede unter dem Claim. Kein Eyebrow „Auftrag“, kein „prüfen“, kein Sternenkauf. Keine Tabs, kein Maps-Link, keine Beschreibung zuerst. Ohne Liste kein Checkout. `?demo=1` legt einen Draft mit Beispielliste, als wäre Google verbunden. Nicht in der Nav. Checkout ist echt. E-Mail erst im Stripe-Checkout. Stripe-Position: `Google Bewertung löschen`. Liste = Neon-Table (Hairline, Checkbox, Name, Bewertung), ohne Sterne-Spalte, ohne Einzelpreis. Filter = Neon-Select (Schnellauswahl). Eine filled Primary. Checkbox aus Neon. Fehler und Hinweise: persistenter Toast unten (`SiteToast`), bleibt bis ×. URL-`error` landet dort. 29 € pro Bewertung. Pflicht: eigene Kommentare und Likes sind weg. Stripe Checkout dark: Session `branding_settings` plus Account-Akzent `#171717` (Checkout-Hintergrund), Button `#E5E5E5`, Pill, Inter. API `2026-08-26.dahlia`. Nach 14 Tagen Erstattung, wenn die Bewertung noch da ist. Stripe-Webhook `POST /api/bewertungen/stripe/`. n8n `https://n8n.addxion.com/webhook/bewertungen-auftrag` (Header `X-N8N-Secret`). Status zurück an `POST /api/bewertungen/n8n/`. KV `BEWERTUNGEN_ORDERS`. Code: `src/lib/bewertungen/`. Google Cloud: APIs `mybusinessaccountmanagement`, `mybusinessbusinessinformation`, `mybusiness` einschalten. Reviews: `batchGetReviews`, sonst Standort für Standort; ein kaputter Standort killt den Connect nicht. Zusätzlich [GBP-API-Zugang](https://support.google.com/business/contact/api_default) (Basic API Access), sonst Quota 0. Redirect `/api/bewertungen/google/callback/`. Nicht der Auth-Login.

n8n-Body nach Zahlung: `orderId`, `email`, `source` (`google` | `beschreibung`), `note`, `dossier`, `ownerCleanupConfirmed`, `items[]` (`id`, `gbpName`, `rating`, `comment`, `verdict`, `analysis`, `amountCents: 2900`), `paidAt`. n8n-Callback: `orderId`, optional `status`, `items[]` mit `done` | `refunded`.

Zeitachse eine Achse, drei Stufen. News in der Gegenwart. Mission auf 2036.

Daten im Repo: `src/lib/services.ts`, `src/lib/verticals.ts`, `src/lib/projects.ts`, `src/lib/kundenstimmen.ts`, `src/lib/leistung-hub.ts`, `src/lib/produkt-hub.ts`, `src/lib/zielgruppe-hub.ts`, `src/lib/news.ts`, `src/lib/empfehlung.ts`, `src/lib/faqs.ts`, `src/lib/bewertungen/`, `src/lib/euroiq.ts`, `src/lib/whatsapp.ts`, `src/lib/neon-lab.ts`. Seiten in `src/pages`.

`/page/`: Vertikalen, nicht Leistungen. Fahrschule über `/zielgruppen/`, Aufklärer über `/produkte/`. Indexiert. Nicht in der Command Palette. Fahrschule-Copy aus [Fahrschulen](../patterns/fahrschulen.md).

`/page/aufklaerer/`: Vertikal Aufklärer, Rail wie die anderen. Links Claim und CTA „In WhatsApp starten“. Rechts zuerst das Chat-Beispiel in CardRoot (Header EuroIQ, Body Verlauf und Score), dann Vorgehen als nummerierte Schritte (01–04), Umfang, Score, Für wen, FAQ. CTA unten: nur Heading plus Button, kein wiederholter Hero-Subtext. Kein Formular, kein Quiz auf der Seite. Prefill `/aufklaeren` startet den Check im WhatsApp-Unternehmensprofil. Check selbst: n8n-Workflow **EuroIQ Aufklärer · WhatsApp** in n8n-addxion, Tabelle `euroiq_sessions`. Acht Fragen, Score 0–100, ein Hebel, Mensch nur nach explizitem Ja. `/aufklaerer/` 301 hierher. Code: `src/lib/euroiq.ts`, `src/lib/whatsapp.ts`.

`/neon/genui/`: GenUI-Composer, nicht in der Nav, nicht in der Sitemap, `noindex`. PageHeader-Titel = Heading und Input in einem. Offene Nav listet Board und Vorlagen.

`/neon/`: Lab **Neon** (Katalog), nicht in der Nav, nicht in der Sitemap, `noindex`. Index listet Kategorien. Unterseiten: `/neon/buttons/`, `/neon/field/`, `/neon/overlay/`, `/neon/navigation/`, `/neon/table/`, `/neon/chart/`, `/neon/mark/`, `/neon/type/`, `/neon/surface/`, `/neon/frames/`. Hairline-Raster (Gap-Trick, nicht transparent). Katalog = `@addxion/components`-Imports inkl. Field, InputGroup, Toast, Table, Chart, Aria-Controls. `/neon/surface/`: Zelle Hero = CardRoot `mode="full-bleed"`. `/neon/frames/`: Compare und Before/After, Hairline-Split, keine Slider. Input und InputGroup = Pill, Prefix (`https://`) = Sans, gleiche Schrift wie Placeholder (`beispiel.de`). Combobox = Pill. Tabs nur die Leiste, kein Panel-Text. Table- und Data-grid-Zelle je eine Rasterzelle (1/4), nebeneinander in der ersten Hälfte der Zeile, nicht `col-span-2`. Vorschau Bewertungen bzw. Grid: zwei Zeilen, Table ohne Caption „n von m gewählt“, Grid ohne Toolbar. Kein tablecn-Kit. Kein Band „ai heute — Untitled UI“. Badge mit Phosphor-`X` und Bild, Avatar-Glance (Initials, Phosphor `User`/`Plus`/`SealCheck`, zentriert). Zellen **File** (PDF/XLSX/PNG/MP4-Kürzel), **Payment** (`PaymentMark`: Visa, Mastercard, Amex), **Social** (`SocialButton`: Google/GitHub/Apple), **Hitbox** (`FeaturedIcon` 44×44) — alle aus `@addxion/components`, Lab nur Import. Kein Dot-Primitive. Button-Zelle: Primary, Secondary, Outline, Ghost (idle muted, Hover Wash-Pill), Link (unterstrichener Text, Hover dimmt). Darunter Nav-Probe (QuickNav-Pill, Chrome, keine CTA-Variante). Zelle **Zustände**: Disabled, Laden. Zelle **Sizes**: Small, Medium, Large (Primary). Zelle **Title**: Variable Inter, `wght` folgt dem Pointer pro Glyphe (`prefers-reduced-motion` = 400). Zelle **Field** nach InputGroup: sichtbares Label, Control, Description, Error am Feld. Data-grid interaktiv (Checkbox, Switch Aktiv). Chart: je eine Rasterzelle (1/4) für Area, Line, Bar, Composed, Radar, Pie, Radial, Sankey — Typen aus [EvilCharts ECharts](https://evilcharts.com/docs/echarts/components), Look Neon-Tokens. Icons = Phosphor Duotone. Kein Band Sections. Kein Band Chrome. Sprache: Zell-Label und Varianten = Identifier Englisch; Nutztext und Bänder Deutsch ([Klartext](../fundamentals/klartext.md)). `/system/` 301 auf `/neon/`.

# Agent-Regeln

Deltas in `brand.css`. Wissen nur im Wiki. Repo = Ausführung.
