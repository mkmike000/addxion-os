---
id: design-system-transfer
type: decision
status: active
owner: mike
date: 2026-11-10
---

# Design System von addxion-ai nach addxion-app

Die monochrome Design Language aus `addxion-ai` (Neon-Tokens, Hairline, keine Accent-Creep) wird schrittweise in die native Operator-Konsole `addxion-app` (GPUI Kit + GPUI Fast) übertragen.

## Was gilt

- Tokens leben in `addxion-app/crates/xi-desktop/src/theme.rs` (`addxion_dark()`).
- Surfaces (Factory, Log, Buttons, Listen) nutzen die Semantic-Tokens.
- Seit 2026-11-24 sind alle sieben Tabs auf den Tokens, inklusive Trading-Tab.
- Komponenten (CardRoot, Pill, Band) und Motion folgen später.
- Web-App bleibt dünn; dichte Operator-Flächen nur nativ.

## Quellen

- `addxion-ai/DESIGN.md`
- `addxion-app` (theme.rs, Workbench)

## Verlinkt

- [[xi-clients]]
- [[xi-server-client]]
- [addxion-app](../platforms/addxion-app.md)
