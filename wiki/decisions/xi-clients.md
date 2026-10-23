---
type: decision
title: XI Clients
aliases: [nativer Client, GPUI Client]
description: Web-Client und nativer Client getrennt vom Elixir-Kernel. Kernel bleibt Server-Prozess.
status: decided
owner: mike
updated: 2026-10-23
tags: [decision, platform]
sources:
  - id: chat-2026-10-23
    resource: raw/xi-clients-2026-10-23.md
    title: Chat-Roh
---

# Entscheidung

Es gibt **einen Kernel** (addxion-xi, Elixir/OTP) und **mehrere Clients**.

| Client | Rolle | Technik | Deployment |
|--------|-------|---------|------------|
| **Web** | Öffentliche Fläche, Distribution, Cockpit | bestehendes TS in addxion-ai | Cloudflare |
| **Native** | Operator / Power-User: dichte Konsole, Chat, LiveKit | GPUI (Rust), eigener Prozess | lokale App (Download + Auto-Update) |

Beide sprechen denselben Vertrag zum Kernel (heute HTTP/WS).

# Grenzen

- Kernel bleibt Elixir. Kein Rewrite in Rust.
- Native App ist **kein** NIF im Kernel.
- Kernel wird **nicht** mit der App mitgeliefert. Default: Remote-Kernel. Local-Mode nur optional als Konfiguration (localhost), nicht als Bundle.
- Native App kommt nicht auf Cloudflare. Kernel bleibt auf eigenem Server.
- Keine UI im Kernel. Keine Domain-Logik in den Clients.

# Verhältnis zu Rust

Rust im Kernel nur bei gemessenem Hot-Path (Turso-Treiber, später ggf. Wire). Rust im Client ist die UI-Runtime. Zwei Schichten.

# Nächster Schritt

Cursor-Prompt für `apps/native` (oder `apps/xi-desktop`) in addxion-ai: minimaler GPUI-Client, der den Kernel anspricht. Web bleibt unverändert.

Pointer: [addxion-xi](../platforms/addxion-xi.md), [addxion-ai](../platforms/addxion-ai.md).
