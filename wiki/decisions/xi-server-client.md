---
type: decision
title: XI Server zentral, Client dezentral
aliases: [Rust-Worker, TanStack bleibt]
description: Kernel bleibt zentrale Quelle. Clients austauschbar. Schwere Berechnung in Rust-Worker. Frontend bleibt TanStack.
status: decided
owner: mike
updated: 2026-10-30
tags: [decision, platform]
sources:
  - id: chat-2026-10-30
    resource: raw/xi-server-client-2026-10-30.md
    title: Chat-Roh
---

# Entscheidung

Der **Kernel ist zentral**. Clients sind dezentral und austauschbar.

| Schicht | Rolle | Sprache | Nicht |
|---------|-------|---------|-------|
| **Kernel** | Runs, Select, Factory, Tenants, Scoring, Koordination | Elixir | UI, Auth, schwere CPU-Schleifen |
| **Rust-Worker** | Schwere Berechnung (Simulation, Scoring-Batches, Signal) | Rust | Business-Logik, Tenant-Isolation |
| **Web-Client** | Dashboard, Sharing, leichte Steuerung | TanStack (bestehend) | Zweite Operator-Konsole |
| **Native-Client** | Dichte Operator-Fläche, nur wo Browser der Engpass ist | GPUI | Zweites Gehirn, Kernel-Logik |

# Was gilt

- Server erweitern vor Client ersetzen. Logik bleibt im Kernel.
- Rust-Worker für gemessene CPU-Hot-Paths. Start: Port oder externer Prozess. NIF nur bei gemessener Latenz.
- Frontend bleibt TanStack. Kein Wechsel zu Next.js. Kein Go-Route-Handler als Compute-Pfad.
- Native App ist Spezialwerkzeug, kein Architektur-Zentrum. Siehe [XI Clients](xi-clients.md).
- Next.js + Go (Vercel) ist Server-Feature für deren Kunden. Nicht derselbe Hebel.

# Grenzen

- Kein Kernel-Rewrite in Rust oder Go.
- Keine Domain- oder Selektionslogik im Client.
- Worker kennt keine Tenants und keine Recipes.

Pointer: [addxion-xi](../platforms/addxion-xi.md), [XI Clients](xi-clients.md).
