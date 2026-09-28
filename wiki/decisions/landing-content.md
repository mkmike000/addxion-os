---
type: decision
title: Landing-Inhalt
description: Keine Datei pro Kunde. Template plus Tokens plus Snapshot. Wort jetzt Site.
status: decided
owner: mike
updated: 2026-09-28
tags: [decision, sites, xi]
---

Host-Vertrag: [Sites Hosts](sites-hosts.md).

# Gilt

Eine Site ist kein Ordner in `addxion-ai`. Sie ist eine Row der Org.

| Schicht | Lebt wo | Beispiel |
| --- | --- | --- |
| Shell / Slots | Neon + Renderer | `hero-v1`, Form |
| Design-Tokens | Org oder Plattform | Farbe, Logo |
| Body / Snapshot | Site-Row | Blöcke oder HTML |
| Variante A/B/C | Child-Rows | gleicher Slug-Kontext |
| Hosts | `hosts[]` | `sites.com-solution.de` |
| Score-Rezept | XI Pointer | `org` + `landing_slug` + `variant` |

Bearbeiten: Org wählen, `/sites/{slug}`, Draft, Publish. Kein Kunden-Repo.

# Werkbank-URL

```
/sites
/sites/{slug}
```

Öffentlich: Kunden-Host `/{slug}`. Plattform-Test: `sites.addxion.ai/{org}/{slug}`.

# XI

Kernel speichert kein HTML. `Xi.LandingPointer` nur Slugs.

# Nicht

- Datei pro Kunde
- HTML in Turso
- `/w/$org`
- Ads-Host als Renderer
