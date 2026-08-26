---
type: platform
title: addxion-com
description: Marketing und CMS. IA hier. Code in addxion-com.
status: active
owner: shared
updated: 2026-08-26
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
/inspiration/             Produkt Inspiration
/inspiration/ergebnis/    Ergebnis (noindex)
/empfehlung/              Empfehlung
/automations/             Produkt Automationen
/leistungen/content/
/leistungen/werbung/
/leistungen/websites/
/leistungen/shops/
/leistungen/shops/*       Einrichtung, Themes, Integrationen, Fehlerbehebung, Audit, Katalog
/leistungen/apps/
```

Start und Leistungsseiten: zweispaltiges Rail. Rechte Start-Rail: Vergangenheit (Kundenstimmen), Gegenwart (Produkte, Leistungen, News), Zukunft (Mission).

Zeitachse eine Achse, drei Stufen. News in der Gegenwart. Mission auf 2036.

Daten im Repo: `src/lib/services.ts`, `src/lib/empfehlung.ts`, `src/lib/faqs.ts`. Seiten in `src/pages`.

# Agent-Regeln

Deltas in `brand.css`. Wissen nur im Wiki. Repo = Ausführung.
