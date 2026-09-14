---
type: platform
title: addxion-com
description: Marketing und CMS. IA hier. Code in addxion-com.
status: active
owner: shared
updated: 2026-09-14
tags: [platform]
sources:
  - id: com-masterplan
    resource: addxion-com/MASTERPLAN.md
    title: Masterplan addxion.com (IA übernommen 2026-08-26)
---

Repo `addxion-com`. Marketing-Seiten, `brand.css`, Payload-CMS unter `/cms`. Copy folgt Branding. Look folgt Design. Cards: CardRoot immer `mode="full-bleed"`. Idle Kante links/rechts/unten, Hover/Focus Scoop `--card-scoop` 200ms wie `/kundenprojekte/`. Hero und Body. Keine One-off-Cards mit Ring oder Schatten.

# Grenzen

Keine Design-System-Primitives. Keine parallele Markenstrategie.

# IA

```
/                         Start: erster Screen Claim 100dvh mit Header. Danach Nav-Kacheln, Mission. Keine Karten-Reihen
/produkte/                Produkte. Inspiration, Sprachagenten, Packs und Features von addxion.ai, Aufklärer, GenUI, Neon
/zielgruppen/             Zielgruppen. Masonry, zuerst Fahrschulen. Nicht in der Palette als Einzel-Seiten
/inspiration/             Produkt Inspiration. Formular hier, Karte auf Start und /produkte/, nicht in der Nav. Ablauf: Daten, Richtung, danach. Empfehlung hängt denselben Scan an (`?ref=`)
/inspiration/ergebnis/    Ergebnis (noindex)
/kundenprojekte/          Kundenprojekte. Erste Zelle Claim plus Termin. Dann Zeilen 1/3, links nach rechts
/leistungen/              Hub: Masonry, Zelle folgt dem Bild. Content erstellen, Landingpages bauen, Werbung aufsetzen, Performance Marketing, Bewertungen löschen, Websites bauen, SEO, AEO und GEO, Shops einrichten, Apps bauen, Automationen aufsetzen, Kontinuierliche Betreuung
/news/                    News. Masonry 1/3 wie die anderen Hubs
/news/<slug>/             Artikel. Rail wie Leistungen. Serie Agentic
/empfehlung/              Empfehlung
/leistungen/content/
/leistungen/werbung/
/leistungen/performance-marketing/ Google und Meta. Anzeigen steuern. Tracking bleibt Werbung.
/leistungen/bewertungen/  Negative Google-Bewertungen löschen lassen
/leistungen/websites/     Rail wie die anderen. Raster liegt auf /kundenprojekte/
/leistungen/seo/          SEO, AEO und GEO. Motiv: monochromes Stillleben
/leistungen/shops/        Eine Seite: Einrichtung, Theme, Katalog, Integrationen, Fehler, Audit
/leistungen/apps/
/leistungen/automationen/ Automationen aufsetzen. 249 € / Monat, 24 Monate
/leistungen/landingpages/ Erste Seite 1.000 €, weitere Unterseite 500 €
/leistungen/betreuung/    Kontinuierliche Betreuung, 24 Monate nach Go-Live
/page/fahrschule/         Vertikal Fahrschule. Karte auf /zielgruppen/, nicht in der Palette
/page/aufklaerer/         Vertikal Aufklärer (EuroIQ). Karte auf /produkte/, nicht in der Palette
/neon/                    Lab Neon (Katalog-Index), noindex, nicht in der Nav
/neon/buttons|fields|…     Lab-Kategorien, noindex
/neon/frames/             Compare, Before/After
/neon/genui/              GenUI-Composer, noindex, nicht in der Nav
```

Leistungsseiten: zweispaltiges Rail. Start: einspaltig, kein Hero-Rail, kein Pin. Rail-Claim `font-light`, wie die Start-H1, Klasse `.rail-claim` in `site.css`: `w-full` mobil, `md:w-2/3` der linken Box (Leistungen). Leistungs-Claims: Umbruch über Breite, nicht erzwungen. Start-H1: volle Breite, Umbruch nach „in“ (`Deine Digitalagentur in` / `Gütersloh & Bielefeld`), kein Punkt am Ende. Die zwei Zeilen spielen ein (Fade, 10px Y, blur 4px, `--duration-slow`), dann Lede, Primary, Nav-Kacheln, Mission (Stagger 120ms). Kein Zeichen-Stagger. `prefers-reduced-motion: reduce` = Endzustand sofort. Darunter ein Satz Lede (`Design, Website, Shop und App aus einer Hand.`), dann Primary „Kundenprojekte ansehen“. Header eine Spalte: ADDXION® als Link zur Startseite plus Nav, Hover dimmt, kein zweites Feld, kein Sektions-Titel auf Home. Start: erster Screen Claim plus Neon-Primary „Kundenprojekte ansehen“ (`/kundenprojekte/`), **100dvh zusammen mit PageHeader** (Hero zieht unter den Header). H1, Lede und Primary zentriert im ersten Screen (horizontal und vertikal). Kein Termin auf der Startseite, solange Inspiration fehlt. Keine Leistungs-, Projekt- oder Produkt-Karten auf der Startseite. Darunter Nav-Kacheln, je eine Zelle mit Outline-Button und Lucide-Icon: Leistungen, Produkte, Zielgruppen, News, Empfehlung, Richtlinien. Kundenprojekte nur im Hero-Primary, nicht nochmal als Kachel. Dann Mission als normale Sektion, nicht 100svh. Keine Pfeil-Navigation. Kein Chart, keine Zeitachse auf der Startseite. Nav und Command Palette: Home, Kundenprojekte, Leistungen (`/leistungen/`), Produkte (`/produkte/`), Zielgruppen (`/zielgruppen/`), News (`/news/`), Empfehlung, Richtlinien. Aufklärer und Fahrschule nicht in der Palette. Keine einzelnen Leistungs-Items in der Nav. Kundenprojekte nur unter `/kundenprojekte/`. Keine Alias-Routen (`/projekte/`, `/kundenstimmen/`, `/system/`, `/aufklaerer/`, `/automations/`). Keine Slash-301; Links enden auf `/` (`trailingSlash: always`). Nur Host-Canonical: `www.addxion.com` → `addxion.com`. Inspiration: Karte unter `/produkte/`, Formular unter `/inspiration/`. Nicht auf der Startseite. Keine Seite `/kooperation/`. Wer Kunden bringt, landet auf `/empfehlung/`. Subunternehmer-Auftritt ist kein öffentliches Angebot.

`/produkte/`: Hub wie Leistungen (Hairline-Raster, drei unabhängige Spalten, Items reihum, `hug` / `project-masonry--ltr`, kein Featured). Karten aus `src/lib/produkt-hub.ts`: Inspiration, Sprachagenten (`https://addxion.ai/voice`), Packs Analyse und Voll, Features Market Chart, Operatoren, Finanzen, Gespräche, Agentic Trading, CRM / Kontakte, Dokumentation, dann Aufklärer (`/page/aufklaerer/`), GenUI (`/neon/genui/`), Neon (`/neon/`). Packs und Features folgen `addxion-ai/src/lib/features/registry.ts` (ohne Pack `empty`). CardRoot `mode="full-bleed"`. Nicht die Leistungs-Karten. Indexiert, in der Nav und Command Palette. Kein Rail.

`/zielgruppen/`: Hub. Karten aus `src/lib/zielgruppe-hub.ts`. Als Erstes Fahrschulen (`/page/fahrschule/`). `thirds` nur wenn die Anzahl durch 3 teilbar ist: dann mobil Embla-Loop je voller 3er-Zeile (`ThirdsSwipeRow`), Desktop Raster. Kein `hug`. Indexiert, in der Nav und Command Palette. Kein Rail. Einzel-Vertikalen nicht in der Palette.

`/kundenprojekte/`: Hairline-Raster wie Neon (Gap-Trick: Parent `--border`, Zellen `--background`). Erste Zelle: H1 `Du hast ein Projekt im Kopf?` mit Liquid-Button `Termin buchen` in der Zeile nach dem „?“ (`inline-block`, `vertical-align: middle`, `margin-left` 0.4em, Cal `mike-kaufmann/15min`). H1 Zeilenabstand `1.05` Desktop, mobil `1.5` plus `margin-top` am CTA, damit der Button die Zeile darüber nicht küsst (`.project-lead-claim`). Danach alle Projekt-Karten 1/3, kein Featured, **links nach rechts** über drei unabhängige Spalten (`hug` / `project-masonry--ltr`): Item 0/3/6 links, 1/4/7 Mitte, 2/5/8 rechts. Keine gemeinsame Zeilenhöhe — die nächste Karte sitzt direkt unter der vorherigen in derselben Spalte. Hairlines: volle Höhe zwischen den Spalten (`::before`/`::after` bei 1/3 und 2/3), unter Zellen `border-bottom`. Mobil eine Spalte in Originalreihenfolge. Reihenfolge in `WEBSITE_PROJECTS`: eigene zuerst, dann der Project111-Block, Burger Weber, Simon & Partners zuletzt. Pro Zelle Neon-CardRoot: Header-Titel, Hero-Screenshot `mode="full-bleed"` (idle kein Abstand links/rechts/unten; Hover/Focus Scoop per `clip-path`, Höhe bleibt), kein Footer (`src/lib/projects.ts`). Höhe folgt dem Screenshot. Passt eine Kundenstimme (Join über id bzw. `projectId`), sitzen Portrait und Screenshot nebeneinander in einem CardWrapper (`mode="grid"`, zwei CardRoots `embedded`). Ein Header über beide: Vorname, optional Partner (`AgeTwo`, `Adwork`, `Project111`), dann Firma, Abstufung (`muted`). Firma nicht nochmal auf dem Screenshot. Ohne Portrait derselbe Header auf der Screenshot-Karte. Header = Card-Fläche (`bg-card`), nicht Canvas. Portrait links, Screenshot rechts, gleiche Höhe, `object-cover`, 4px Abstand dazwischen (`gap-x-1`), kein Hairline-Strich, kein Außenrahmen am Wrapper. Screenshot verlinkt die Live-Website, Portrait die Kunden-Site. Indexiert, in der Nav und Command Palette. Kein Rail.

Kein eigener Stimmen-Hub. Portraits nur links in den Projektkarten (`src/lib/kundenstimmen.ts`).

`/leistungen/`: Hub wie `/kundenprojekte/` ohne Lead-Zelle. Hairline-Raster, drei unabhängige Spalten, Items reihum (`hug` / `project-masonry--ltr` in `LeistungGrid`). Keine gemeinsame Zeilenhöhe — die Zelle folgt dem Bild. Elf Karten, links nach rechts. Pro Zelle Neon-CardRoot: Header-Titel, Hero-Bild `mode="full-bleed"` (idle Kante, Hover Scoop per `clip-path`), kein Footer (`src/lib/leistung-hub.ts`). Katalogname meist Leistung + Infinitiv; Ausnahmen **Kontinuierliche Betreuung**, **Performance Marketing** und **SEO, AEO und GEO** (Nomen, nicht Infinitiv). Reihenfolge: Content erstellen, Landingpages bauen, Werbung aufsetzen, Performance Marketing, Bewertungen löschen, Websites bauen, SEO, AEO und GEO, Shops einrichten, Apps bauen, Automationen aufsetzen, Kontinuierliche Betreuung. Motive in `public/leistungen/`. SEO-Karte: monochromes Stillleben (Laptop Suche, Telefon Antwort), wie Websites und Performance Marketing, nicht die Startseiten-Collage. Shop ist eine Seite (`/leistungen/shops/`), keine Kinder-URLs. Karte verlinkt die Leistungsseite.

`/news/`: Hub wie Leistungen (Hairline-Raster, alle Karten 1/3, kein Featured). Karten aus `src/lib/news.ts` (`NEWS_POSTS`). In der Nav und Command Palette. Start zeigt News erst ab zwei echten Karten. Hub ohne Rail. Keine externe AI-Karte.

`/news/<slug>/`: Artikel, Rail wie Leistungen (Claim links, Abschnitte rechts, Related, Serie, CTA). Daten in `NEWS_POSTS`. Serie Agentic: Marketing, Ads, Websites, Sales, Commerce, Content, Operations, Support, Visibility, Interfaces, Booking. Haltung, kein neues Produkt. Copy folgt Branding. HTML-Title = Nutzen, kein ADDXION.

`/empfehlung/`: Rail wie Leistungen links (Claim, CTA „Eintragen“). Kein Caption unter dem Button (keine „Antwort in 24 Stunden“, keine Mail). Rechte Spalte stapelt: Provision, Für wen, Vorteile, Ablauf, Anfrage, Fragen — hintereinander, nicht je `100dvh`. Ablauf: der Kunde bleibt im Inspiration-Scan. Wer schickt, sendet `/inspiration/?ref=`. Kürzel in der Session (`src/lib/inspire/ref.ts`). CTA „Den Scan ansehen“.

`/leistungen/websites/`: gleiches Rail wie die anderen Leistungen (Vorgehen, Umfang, Related, CTA). Projekt-Screenshots unter `/kundenprojekte/`.

`/leistungen/seo/`: gleiches Rail. Katalogname **SEO, AEO und GEO**. Google, Antwortmaschinen, generative Engines. Motiv: monochromes Stillleben, `public/leistungen/seo-2.webp`.

`/leistungen/landingpages/`: gleiches Rail. Erste Seite 1.000 €, jede weitere Unterseite 500 €. Tracking bleibt Werbung. Anzeigen bleiben Performance Marketing.

`/leistungen/performance-marketing/`: gleiches Rail. Katalogname **Performance Marketing**. Google Ads und Meta, Budget, Gebote, Creatives, Reporting. Pixel und Strecke bleiben Werbung aufsetzen. Die Seite hinter dem Klick bleibt Landingpages.

`/leistungen/automationen/`: gleiches Rail. Katalogname **Automationen aufsetzen**. 249 € pro Monat, 24 Monate. Workflows über Tools hinweg, kein Shop-App-Ersatz.

`/leistungen/betreuung/`: gleiches Rail. Katalogname **Kontinuierliche Betreuung**. 24 Monate nach Go-Live für Website, Shop, App, Landingpage oder Automation. Betrieb, nicht Neubau.

`/leistungen/shops/`: gleiches Rail, eine Seite. Vorgehen deckt Einrichtung, Theme, Katalog, Integrationen, Fehlerbehebung und Audit. Keine Kinder-URLs.

`/leistungen/bewertungen/`: gleiches Rail. Links der Claim (`w-full md:w-2/3`, Klasse `.rail-claim`), darunter Neon-Button `Google verbinden` (an der Stelle von Termin buchen). Nach OAuth: Button-Text `Google verbunden`, disabled. Rechts leer, bis das Profil verbunden ist; dann Liste, Auswahl, Zahlung. Kein Lede unter dem Claim. Kein Eyebrow „Auftrag“, kein „prüfen“, kein Sternenkauf. Keine Tabs, kein Maps-Link, keine Beschreibung zuerst. Ohne Liste kein Checkout. `?demo=1` legt einen Draft mit Beispielliste, als wäre Google verbunden. Nicht in der Nav. Checkout ist echt. E-Mail erst im Stripe-Checkout. Stripe-Position: `Google Bewertung löschen`. Liste = Neon-Table (Hairline, Checkbox, Name, Bewertung), ohne Sterne-Spalte, ohne Einzelpreis. Filter = Neon-Select (Schnellauswahl). Eine filled Primary. Checkbox aus Neon. Fehler und Hinweise: persistenter Toast unten (`SiteToast`), bleibt bis ×. URL-`error` landet dort. 29 € pro Bewertung. Pflicht: eigene Kommentare und Likes sind weg. Stripe Checkout dark: Session `branding_settings` plus Account-Akzent `#171717` (Checkout-Hintergrund), Button `#E5E5E5`, Pill, Inter. API `2026-08-26.dahlia`. Nach 14 Tagen Erstattung, wenn die Bewertung noch da ist. Stripe-Webhook `POST /api/bewertungen/stripe/`. n8n `https://n8n.addxion.com/webhook/bewertungen-auftrag` (Header `X-N8N-Secret`). Status zurück an `POST /api/bewertungen/n8n/`. KV `BEWERTUNGEN_ORDERS`. Code: `src/lib/bewertungen/`. Google Cloud: APIs `mybusinessaccountmanagement`, `mybusinessbusinessinformation`, `mybusiness` einschalten. Reviews: `batchGetReviews`, sonst Standort für Standort; ein kaputter Standort killt den Connect nicht. Zusätzlich [GBP-API-Zugang](https://support.google.com/business/contact/api_default) (Basic API Access), sonst Quota 0. Redirect `/api/bewertungen/google/callback/`. Nicht der Auth-Login.

n8n-Body nach Zahlung: `orderId`, `email`, `source` (`google` | `beschreibung`), `note`, `dossier`, `ownerCleanupConfirmed`, `items[]` (`id`, `gbpName`, `rating`, `comment`, `verdict`, `analysis`, `amountCents: 2900`), `paidAt`. n8n-Callback: `orderId`, optional `status`, `items[]` mit `done` | `refunded`.

Zeitachse eine Achse, drei Stufen. News in der Gegenwart. Mission auf 2036.

Daten im Repo: `src/lib/services.ts`, `src/lib/verticals.ts`, `src/lib/projects.ts`, `src/lib/kundenstimmen.ts`, `src/lib/leistung-hub.ts`, `src/lib/produkt-hub.ts`, `src/lib/zielgruppe-hub.ts`, `src/lib/news.ts`, `src/lib/empfehlung.ts`, `src/lib/inspire/journey.ts`, `src/lib/inspire/ref.ts`, `src/lib/faqs.ts`, `src/lib/bewertungen/`, `src/lib/euroiq.ts`, `src/lib/whatsapp.ts`, `src/lib/neon-lab.ts`. Seiten in `src/pages`.

`/page/`: Vertikalen, nicht Leistungen. Fahrschule über `/zielgruppen/`, Aufklärer über `/produkte/`. Indexiert. Nicht in der Command Palette. Fahrschule-Copy aus [Fahrschulen](../patterns/fahrschulen.md).

`/page/aufklaerer/`: Vertikal Aufklärer, Rail wie die anderen. Links Claim und CTA „In WhatsApp starten“. Rechts zuerst das Chat-Beispiel in CardRoot (Header EuroIQ, Body Verlauf und Score), dann Vorgehen als nummerierte Schritte (01–04), Umfang, Score, Für wen, FAQ. CTA unten: nur Heading plus Button, kein wiederholter Hero-Subtext. Kein Formular, kein Quiz auf der Seite. Prefill `/aufklaeren` startet den Check im WhatsApp-Unternehmensprofil. Check selbst: n8n-Workflow **EuroIQ Aufklärer · WhatsApp** in n8n-addxion, Tabelle `euroiq_sessions`. Acht Fragen, Score 0–100, ein Hebel, Mensch nur nach explizitem Ja. Code: `src/lib/euroiq.ts`, `src/lib/whatsapp.ts`.

`/neon/genui/`: GenUI-Composer, nicht in der Nav, nicht in der Sitemap, `noindex`. PageHeader-Titel = Heading und Input in einem. Offene Nav listet Board und Vorlagen.

`/neon/`: Lab **Neon** (Katalog), nicht in der Nav, nicht in der Sitemap, `noindex`. Index listet Kategorien. Unterseiten: `/neon/buttons/`, `/neon/fields/`, `/neon/overlays/`, `/neon/navigation/`, `/neon/tables/`, `/neon/charts/`, `/neon/marks/`, `/neon/types/`, `/neon/surfaces/`, `/neon/frames/`. Hairline-Raster wie `/kundenprojekte/` (`project-masonry--ltr`): drei unabhängige Spalten, Items reihum links nach rechts, Höhe folgt dem Inhalt, keine gemeinsame Zeilenhöhe, keine Restspalten-Füllung. Inhalt in der Zelle zentriert. Jede Unterseite schließt mit Next im selben Raster (Outline-Button „Weiter zu {Label} →“), nicht volle Breite, keine Komponenten-Vorschau. Vorschauen nur auf dem Index. Tables: Table und Data grid nebeneinander. `/neon/surfaces/`: Card, CardRoot, Hero, Accordion, QR, Skeleton = CardRoot `mode="full-bleed"` (idle Kante, Hover Scoop wie `/kundenprojekte/`). Zelle **QR**: QR mit 3D-T-Shirt (transparent) in der Mitte, darunter Secondary mit Lucide `X` (icon-only). `/neon/frames/`: Compare und Before/After, Hairline-Split, keine Slider. Input und InputGroup = Pill, Prefix (`https://`) = Sans, gleiche Schrift wie Placeholder (`beispiel.de`). Combobox = Pill. Tabs nur die Leiste, kein Panel-Text. Table- und Data-grid-Zelle nebeneinander im Masonry, nicht untereinander. Vorschau Bewertungen bzw. Grid: zwei Zeilen, Table ohne Caption „n von m gewählt“, Grid ohne Toolbar. Kein tablecn-Kit. Kein Band „ai heute — Untitled UI“. Badge mit Lucide-`X` und Bild, Avatar-Glance (Initials, Lucide `User`/`Plus`/`BadgeCheck`, zentriert). Zellen **File** (PDF/XLSX/PNG/MP4-Kürzel), **Payment** (`PaymentMark`: Visa, Mastercard, Amex), **Social** (`SocialButton`: Google/GitHub/Apple), **Hitbox** (`FeaturedIcon` 44×44) — alle aus `@addxion/components`, Lab nur Import. Kein Dot-Primitive. Button-Zelle: Glass (Chrome-Pill mit Lucide-House vor dem Label, vor Primary), Primary, Secondary, Outline, Ghost (idle muted, Hover Wash-Pill), Link (unterstrichener Text, Hover dimmt). Zelle **Zustände**: Disabled, Laden. Zelle **Sizes**: Small, Medium, Large (Primary). Zelle **Title**: Variable Inter, `wght` folgt dem Pointer pro Glyphe (`prefers-reduced-motion` = 400). Zelle **Field** nach InputGroup: sichtbares Label, Control, Description, Error am Feld. Data-grid interaktiv (Checkbox, Switch Aktiv). Chart: je eine Rasterzelle (1/4) für Area, Line, Bar, Composed, Radar, Pie, Radial, Sankey — Typen aus [EvilCharts ECharts](https://evilcharts.com/docs/echarts/components), Look Neon-Tokens. Icons = Lucide. Kein Band Sections. Kein Band Chrome. Sprache: Zell-Label und Varianten = Identifier Englisch; Nutztext und Bänder Deutsch ([Klartext](../fundamentals/klartext.md)).

# Agent-Regeln

Deltas in `brand.css`. Wissen nur im Wiki. Repo = Ausführung.
