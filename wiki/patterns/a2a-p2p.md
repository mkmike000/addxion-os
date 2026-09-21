---
type: pattern
title: A2A und P2P
aliases: [Agent2Agent, agentic P2P, A2A P2P]
description: Agent-zu-Agent-Kommunikation ist Peer-Kommunikation. Crypto kann Trust und Settlement liefern. Ein Stack ist denkbar, nicht beschlossen.
status: draft
owner: mike
updated: 2026-09-21
tags: [pattern, agents, p2p]
sources:
  - id: raw-a2a
    resource: raw/a2a-p2p-crypto-2026-08-08.md
    title: Rohaufnahme Chat A2A P2P Crypto
---

Kein Collective-Merge. Exploration Mike, August 2026.

A2A (Agent2Agent) ist ein offenes Protokoll für Delegation zwischen undurchsichtigen Agenten. Ein Agent darf Client und Server sein. Das ist Peer-to-Peer auf der Agent-Ebene, nicht nur HTTP-Client gegen eine API.

Crypto-Netze sind ebenfalls Peer-to-Peer: direkte Verifikation, Token, Reputation. Dieselbe Topologie, andere Payload (Wert statt Task).

# Was gilt hier

- A2A und MCP sind komplementär: MCP = Agent zu Tool, A2A = Agent zu Agent.
- „Ein System“ heißt: eine Mesh-Schicht plus eine Settlement-Schicht, nicht zwei Klebestellen.
- Das ist **kein** Beschluss, den Runtime (Elixir/Turso/Rust oder XI-Kernel) darauf umzustellen.

# Schichten, die zur Idee passen

| Schicht | Rolle |
| --- | --- |
| libp2p / DHT / GossipSub | finden, verbinden, signed Capabilities |
| A2A | Task, Modalität, Opaque Execution |
| IPFS o. ä. | Agent Cards, Artifacts, Beweise |
| Crypto | Identität, Escrow, Micropayment (z. B. x402), Reputation |
| DePIN / Edge | Compute mieten, wenn lokal zu schwach |

Klassisches P2P (BitTorrent, IPFS) tauscht statische Objekte. Agentic P2P tauscht Fähigkeiten und Aktionen — stateful, heterogen, unsicher ohne Nachweis.

# Nicht tun

Kein zweites Wiki neben [addxion-ai](../platforms/addxion-ai.md) oder [addxion-xi](../platforms/addxion-xi.md). Instanz bleibt Instanz. Kein Token, keine Chain, kein A2A-Adapter als Wahrheit hier.

# Offen

- Ziel: Runtime spricht A2A und trägt crypto-native Identität — ja oder nein.
- Ist: Chat und Kernel über HTTP, kein A2A-Mesh.
- Lücke: Discovery, Settlement, Evidence-Packages fehlen als Produkt.
- Zu klären: bleibt das Forschungsbild oder wird es Pattern für den Kernel.
