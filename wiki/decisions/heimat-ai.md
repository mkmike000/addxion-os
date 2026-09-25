---
type: decision
title: Heimat addxion.ai
description: Produktmarke auf addxion.ai. addxion.com nur 301. Eine Frontend-App. Design von com gilt. USP technisch überlegen.
status: decided
owner: mike
updated: 2026-09-25
tags: [decision, domain, frontend, brand]
---

# Festlegung

ADDXION geht in die Produktrichtung. Öffentliche Heimat ist `addxion.ai`.

`addxion.com` und `www.addxion.com` sind Redirect (301) auf denselben Pfad unter `addxion.ai`. Kein zweites Frontend auf `.com`.

Eine TanStack-Start-App trägt Schaufenster und Dashboard. Absicht sitzt im Pfad, nicht in der TLD: öffentliche Seiten ohne Session, Werkbank hinter Session.

USP: technisch überlegen wirken. Nicht Agentur-Look als Kern, nicht zwei Design-Systeme.

Look-Quelle: das Design von `addxion-com` (Neon, Brand, Motion) wird auf die App unter `.ai` übernommen und angepasst. Untitled UI bleibt Altbestand, Ziel Neon + Aria.

# Hosts

| Host | Rolle |
| --- | --- |
| `addxion.ai` | eine Frontend-App: Verkauf + Dashboard |
| `addxion.com` | 301 → `addxion.ai` + Pfad |
| `ads.addxion.ai` | Ads-Collector (`/c`, `/v1/events`) |
| `xi.addxion.ai` | XI-Kernel |
| `auth.addxion.ai` | Auth-API und Login-Auslieferung |

Alte Hosts `ads.addxion.com`, `xi.addxion.com`, `auth.addxion.com` gelten nicht mehr als Ziel. Umstellung geplant, nicht stillschweigend parallel.

# Bleibt getrennt (kein Frontend)

- Collector-Repo `addxion-ads`
- Kernel-Repo `addxion-xi`
- Auth-Repo `addxion-auth` / Package `@addxion/auth`
- Neon als Package, keine eigene Site

Ads-Events nicht in Fahrschul- oder Auth-DB. Cookie Ads nur auf `ads.addxion.ai`.

# Redirect

Pfadtreu: `/leistungen/websites/` auf `.com` → `https://addxion.ai/leistungen/websites/`.
Subdomains `ads` / `xi` / `auth` nicht mit dem Apex-Redirect killen.

# Nicht

- `.com` als Frontend lassen
- `.ai` als reines Backend
- Ads oder XI in die Frontend-App mergen
- zweites Theme neben Neon/com-Design

# Folge

[addxion-ai](../platforms/addxion-ai.md), [addxion-com](../platforms/addxion-com.md), [Ads-Intake](ads-intake.md), [Ads-Netzwerk](../platforms/ads-netzwerk.md), [addxion-auth](../platforms/addxion-auth.md), [Ökosystem](../platforms/oekosystem.md).
