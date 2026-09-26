---
type: decision
title: i18n de und en
description: Sprache, Markt und Inhalt getrennt. Öffentlich Locale in der URL. App-Preference. Default de, zweite Sprache en.
status: decided
owner: mike
updated: 2026-09-26
tags: [decision, i18n, frontend]
---

# Festlegung

ADDXION spricht zuerst Deutsch, dann Englisch. Nicht zwanzig Sprachen. Nicht Sprache mit Markt oder Währung vermischen.

Die großen (Stripe, Notion, Shopify, Airbnb) trennen drei Dinge. Wir auch.

| Ding | Was es steuert | Wer entscheidet |
| --- | --- | --- |
| Sprache | UI-Chrome, Buttons, Fehler, Datumsformat | Mensch. Öffentlich die URL. In der App das Profil |
| Markt | Recht, Steuer, Währung, Zahlart, Impressum | Firma / Sitz, nicht die UI-Sprache |
| Inhalt | Marketing-Copy, Cases, News | Redaktion. Zweite Fassung, keine Rohübersetzung |

Stripe lokalisiert Marketing und Docs per URL. Das Dashboard folgt der Account-Sprache, nicht `/en/billing`. Notion und Slack ebenso. Airbnb mischt Sprache und Markt, weil der Marktplatz ortsgebunden ist. Linear bleibt bewusst Englisch. Wir sind kein Linear: DE-KMU und Fahrschulen bleiben die erste Fläche. Wir sind kein Airbnb: ein Sprachwechsel darf keine andere MwSt erzeugen.

# Surfaces

Eine Frontend-App unter [Heimat addxion.ai](heimat-ai.md). Zwei Lesarten derselben App.

| Fläche | Signal | Default |
| --- | --- | --- |
| Öffentlich (Verkauf, News, Leistungen) | Locale in der URL. `hreflang`. Umschalter sichtbar | `de` ohne Präfix. `en` unter `/en/` |
| Werkbank (Session, Chat, Operatoren) | Preference im Profil, Fallback Cookie, dann `Accept-Language` | `de`. Kein Locale-Präfix in App-Pfaden |
| Recht | Eigene Texte, kein Catalog-String | Impressum nur `de`. Datenschutz/AGB eigene EN-Fassung, wenn EN-Nutzer echte Vertragspartner sind |
| Fahrschule / Gebiet | Markt DE | UI darf `en` sein. Katalog, Recht, Prüfgebiet bleiben DE |

Payload-Admin kennt `de` und `en` schon. Das ist Backoffice, nicht die öffentliche Entscheidung.

# URL

Bestehende DE-Pfade bleiben kanonisch: `/leistungen/`, `/produkte/`, `/inspiration/`. Kein `/de/` davor. Englisch hängt `/en/` davor: `/en/products/`.

`x-default` zeigt auf die DE-URL ohne Präfix. Jede öffentliche Seite hat `hreflang` auf sich und auf die Schwester.

App-Routen (`/chat`, `/operators`, Altbestand `/gespraeche`) nicht übersetzen. Identifier bleiben Englisch laut [Klartext](../fundamentals/klartext.md). Deutsche App-Pfade sind Altbestand, kein zweites Locale-Routing.

Erste Visite auf `/`: `Accept-Language` darf nach `/en/` schicken, nur wenn kein Locale-Cookie sitzt. Explizite Wahl schlägt Header. Kein Geo-IP für Sprache.

# Copy

Deutsch ist die erste Stimme, nicht die Übersetzung aus dem Englischen. Englisch ist eine zweite Fassung derselben Haltung: konkret, keine Gedankenstriche, keine KI-Floskeln. [Branding](../branding.md), [Copy-Gerüste](../patterns/copy-gerueste.md).

„Gütersloh & Bielefeld“ bleibt auf `de`. EN-Home spricht den Nutzen, nicht die OWL-Adresse als Claim.

News, Cases, Leistungsseiten: nur publizieren, wenn die Fassung steht. Leere EN-Seite ist 404, nicht Auto-Translate.

# Technik

Muster: [i18n](../patterns/i18n.md).

- Eine Catalog-Quelle, typisiert. Kein `i18next` plus TMS am Tag eins.
- React Aria `I18nProvider` plus `@internationalized/date` für Datum, Zahl, Kalender. Liegt schon im Stack.
- Preference-Key `locale` neben Theme. Persistenz Cookie, später Profil.
- `html lang` und `og:locale` folgen der wirksamen Sprache.
- Sortierung und `Intl.*` nehmen die wirksame Locale, nicht hart `"de"`.

# Nicht

- Sprache aus IP-Land ableiten
- Währung oder Steuer an den Sprachschalter hängen
- App-Pfade `/gespraeche` ↔ `/conversations` je Locale
- DE-URLs nach `/de/` ziehen (SEO-Bruch)
- Machine-Translate als EN-Stimme
- Crowdin/Lokalise, bevor Catalogs und Umschalter stehen
- Impressum „übersetzen“
- Dritte Sprache, bevor `de` und `en` auf Login, Home, Nav, Fehler sitzen

# Folge

[i18n](../patterns/i18n.md), [Klartext](../fundamentals/klartext.md), [Marketing-Sites](../patterns/marketing-sites.md), [addxion-ai](../platforms/addxion-ai.md), [T-I18N](../fundamentals/truths.md).
