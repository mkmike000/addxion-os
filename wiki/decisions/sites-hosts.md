---
type: decision
title: Sites Hosts
description: Öffentliche Kunden-Seiten heißen Sites. Host plus Slug. CNAME ohne Pfad. Collector getrennt. Workers for Platforms für Zertifikate.
status: decided
owner: mike
updated: 2026-09-28
tags: [decision, sites, dns, cloudflare]
sources:
  - id: chat-2026-09-28-sites
    resource: raw/sites-hosts-2026-09-28.md
    title: Roh Sites Hosts
---

# Wort

**Site** = eine öffentliche Kampagnenseite einer Org. Nicht Landing, nicht Datei.

# Klebt

Diese Türen nicht mehr aufmachen:

1. Seiten-Host-Familie ≠ Collector. `sites.addxion.ai` und Kunden-CNAME tragen HTML. `ads.addxion.ai` trägt `/c`, Pixel, Events. Kein HTML auf dem Collector.
2. Inhalt ist eine Row (`org_id` + `slug` + `body` + `hosts[]` + `status`). Keine Kundendatei im App-Repo.
3. Öffentliche Ads-URL ist die **Kundendomain**. `sites.addxion.ai` ist nur CNAME-Ziel und Test-Fallback.
4. Identität einer Site = **Host + Slug**. Unique `(org_id, slug)`. Kein globaler Slug.
5. Dieselbe App `addxion-ai`. `sites.*` ist Hostname, kein zweites Git. Zweites Worker-Entry im selben Repo erst bei Last.
6. Pixel-ID liegt an der Org. Eine Injektion im Renderer. Meta Events Manager sieht die Kundendomain.
7. Custom Hostnames über Workers for Platforms (Kauf 2026-09-28). Hosts nicht fest in wrangler pro Kunde.

# DNS

Ein CNAME pro Kunde, nicht pro Site.

```text
Typ:  CNAME
Name: sites
Ziel: sites.addxion.ai
```

Ziel ist ein Hostname. Kein Pfad, kein `https://`, kein `/com-solution/`.

HTTPS auf der Kundendomain braucht Besitzprüfung. Ablauf: Custom Hostname bei CF anlegen, dann **eine** Mail mit CNAME plus dem TXT (oder zweiten CNAME), den CF anzeigt. Werte nicht raten. Zone des Kunden schon bei Cloudflare: SSL kann in *seiner* Zone liegen, dann kein TXT von uns.

Neue Site danach: neue Row, DNS bleibt.

# Auflösung

| Host | Pfad | Bedeutung |
| --- | --- | --- |
| `sites.com-solution.de` | `/{slug}` | Org aus `hosts[]`, Site aus Slug |
| `sites.addxion.ai` | `/{org}/{slug}` | nur Test. Nacktes `/{slug}` ist 404 |
| `ads.addxion.ai` | — | kein Site-Renderer |

Gleicher Slug bei zwei Orgs ist erlaubt. Konflikt nur auf dem Plattform-Host ohne Org-Segment — den Pfad gibt es nicht.

# Werkbank

Active Org aus Better Auth. Pfade intern `/sites` und `/sites/{slug}`. Kein `/w/`.

Body-Leiter: Felder → Blöcke (Default) → HTML-Feld → eigene Shell nur bei neuem Raster. Neon bleibt Schicht 1 (keine Kundenmarke im Neon-Repo). Org-Tokens Schicht 2. Body Schicht 3.

# Anzeige

```text
ads.addxion.ai/c?dest=https://sites.com-solution.de/angebot&aid=com-solution
```

`dest` ist die Kunden-URL.

# Nicht

- CNAME-Ziel mit Pfad
- `sites.addxion.ai/{slug}` ohne Org
- HTML oder Site-Renderer auf `ads.addxion.ai`
- Datei pro Kunde
- zweites Sites-Repo
- Apex der Kunden-Website auf uns legen
- Pixel-Snippet pro Site hardcoden

# Folge

[Landing öffentlich](landing-public.md) (alte Tür, gilt unter dem Wort Site weiter), [Landing-Inhalt](landing-content.md), [Sites Host+Slug](../patterns/sites-host-slug.md), [Heimat](heimat-ai.md).
