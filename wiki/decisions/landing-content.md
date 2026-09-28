---
type: decision
title: Landing-Inhalt
description: Keine Datei pro Kunde im Hauptprojekt. Template plus Tokens plus Snapshot. Varianten sind Rows. XI zeigt nur hin.
status: decided
owner: mike
updated: 2026-09-28
tags: [decision, landing, xi]
---

# Gilt

Eine Landing ist kein Ordner in `addxion-ai`. Sie ist eine Row der Org.

| Schicht | Lebt wo | Beispiel |
| --- | --- | --- |
| Shell / Slots | ein Renderer in der App | `offer`, `lead`, `video` |
| Design-Tokens | Org oder Plattform | Button-Radius, Nav |
| Snapshot | Landing-Row | Headline, CTA, Bild |
| Variante A/B/C | Child-Rows derselben Landing | `variant=b` |
| Hosts | Feld `hosts[]` | `l.addxion.ai`, `go.chsoptima.de` |
| Score-Rezept | XI Recipe | Pointer `org` + `landing_slug` + `variant` |

Bearbeiten heißt: Org wählen, Row öffnen, Snapshot ändern, Publish. Kein Checkout des Kunden-Repos. Kein `chsoptima/index.tsx` committen.

Zentrale Änderung (Nav-Button überall): Token oder Slot in der Shell. Eine Publish-Welle. Nicht 40 Dateien.

A/B: neue Varianten-Row, Traffic split über `xid` / Experiment-Feld. Gewinner wird `published`. Verlierer bleibt Row, Rollback ist Status, kein Git-Revert der Kundenhtml.

# Werkbank-URL

`/w/` nicht. Active Org kommt aus Better Auth. Interne Pfade:

```
/landings
/landings/{slug}
```

Öffentlich:

```
/l/{slug}                  Fallback
l.addxion.ai/{slug}        Kanon intern
go.kunde.de                CNAME
```

Org-Slug in der internen URL zu wiederholen ist Lärm. Org-Wechsel ist der Switcher.

# XI

Kernel speichert kein HTML. `Xi.LandingPointer` akzeptiert nur Slugs. Live-Write bleibt App. Harness `Xi.Envs.Websites` bleibt numerisch (`cta_strength`, `hero_variant`). Pointer-Keys sind optional — 2-way Tür.

Grant `landings` an der Org schaltet die Werkbank. Öffentliche Route prüft Grant nicht, nur `published`.

# Nicht

- Datei pro Kunde im App-Repo
- HTML in Turso / XI Recipe
- `/w/$org` als Pflichtpräfix
- Variante als Ordner `index`
- Ads-Host als Renderer
