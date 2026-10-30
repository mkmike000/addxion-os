---
type: raw
title: Chat Server zentral / Client dezentral / Rust-Worker
date: 2026-10-30
---

Quelle: Chat 2026-10-30. Next.js Go-Prototyp (Rauchg / timneutkens: Route Handlers und Proxy in Go für CPU-intensive Server-Workloads). Vergleich mit eigenem Vorhaben (native GPUI-Operator-Konsole).

Kernaussagen:
- Next.js + Go ist Server-Native, kein Desktop-Client.
- Kernel bleibt zentral (Elixir). Clients bleiben dezentral und austauschbar.
- Schwere Berechnung im Kernel: Rust-Worker (Port / Prozess / NIF nur bei Messung), nicht Kernel-Rewrite.
- Frontend bleibt TanStack. Kein Wechsel zu Next.js. Compute nicht über Vercel/Go-Route-Handler.
- Native Oberfläche nur dort, wo der Browser der Engpass ist (dichte Charts, Audio, Live-Zustände).
