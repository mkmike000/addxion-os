---
type: decision
title: Isolate Cloud — Käfig-Fabrik (Skalierung)
status: draft
owner: shared
updated: 2026-10-06
tags: [decision, xi, isolate, ops]
---

# Isolate Cloud

**Isolate** = Käfig für einen Run/Agent: eigener Arbeitsraum, nicht der ganze Host, nicht die Daten anderer Tenants.

**Isolate Cloud** = dieselbe Idee als **Fabrik**: viele Käfige parallel provisionieren, begrenzen, aufräumen — nicht „alles hängt an einem Mac/Server“.

Verwandt: [Agentic Loop](agentic-loop.md), [Computer-Use](computer-use.md), Platform [addxion-xi](../platforms/addxion-xi.md).

## Heute vs. Ziel

| Heute (lokal / dünn) | Isolate Cloud |
|----------------------|---------------|
| OrbStack `/work`, ein Prozess auf einem Rechner | Viele Isolates auf Abruf |
| Gut zum Basteln / Demo / Smoke | Gut für viele Orgs + parallele Jobs |
| Host aus → Jobs tot | Lifecycle unabhängig vom Dev-Laptop |

## Was Skalierung braucht (Ort egal)

Nicht „muss Hyperscaler heißen“. Pflicht ist die **Fabrik-Mentalität**:

1. **Viele Isolates parallel** — nicht ein `/work` für alle  
2. **Provision + Teardown** — Start/Löschen schnell, kein Restmüll  
3. **Limits** — CPU/RAM/Netz/Dauer/Cost pro Job  
4. **Tenant-Grenze** — Org A greift nie Org B (`{orgSlug}-prod`)  
5. **Scheduler** — Queue wenn voll, Fairness, Kill bei Timeout  
6. **Ort ≠ Cockpit** — Worker `addxion.ai` hostet die UI; Sandbox kann woanders laufen  

Ort kann sein: eigener Server, Hetzner, Cloudflare Containers, Fly, Browser-Pool, …  
**„Cloud“ im Namen** = as-a-Service / multi-tenant Ops — nicht Logo auf der Rechnung.

## Wann lokal reicht

- Wenige Devs, wenige Jobs, Pi basteln  
- Demo / Smoke gegen einen Kernel  

## Wann die Fabrik nötig wird

- Viele Orgs, parallele Paper / Pi / Browser-Jobs  
- Jobs länger als ein Reboot des Bastel-Hosts  
- Prod darf nicht von „addxion-01 muss an sein“ abhängen  

## Bezug Computer-Use

Hosted Browser / Desktop-Sessions brauchen dieselbe Isolate-Fabrik als Runtime-Heim.  
Siehe Wellen in [computer-use.md](computer-use.md) (Isolate Cloud als Welle 4 dort).

## Explizit nicht

- OrbStack allein als „Isolate Cloud“ verkaufen  
- Ein shared Workspace für alle Tenants  
- Sandbox im gleichen Prozess wie der Cloudflare Worker  

## Offen (wenn Umsetzung startet)

- Self-hosted vs. gemietete Container/VMs  
- Ob Pi-Workspace und Browser-Runtime denselben Supervisor teilen  
- Quota-/Preis-Modell pro Org  
- Observability (wer läuft wo, Cost pro Isolate)
