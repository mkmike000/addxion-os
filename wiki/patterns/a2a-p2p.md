---
type: pattern
title: A2A und P2P
aliases: [Agent2Agent, agentic P2P, A2A P2P]
description: Agent-zu-Agent ist Peer-Kommunikation. Crypto kann Trust und Settlement liefern. Heimat ist der XI-Kernel, nicht die App.
status: draft
owner: mike
updated: 2026-09-22
tags: [pattern, agents, p2p, xi]
sources:
  - id: raw-a2a
    resource: raw/a2a-p2p-crypto-2026-08-08.md
    title: Rohaufnahme Chat A2A P2P Crypto
---

Heimat: [addxion-xi → Später](../platforms/addxion-xi.md#später). Dort gilt: A2A = externer Interop-Adapter, nicht Kernel-Kern. `Message` im Keil ≠ A2A-Protokoll.

Kein Collective-Merge. Exploration, nicht nächster Slice.

# Was gilt

- A2A und MCP sind komplementär: MCP = Agent zu Tool, A2A = Agent zu Agent.
- „Ein System“ heißt Ports um den Kernel (Transport, Interop, Storage, Settle, Compute) — nicht zwei Welten kleben und nicht A2A in den Kernel ziehen.
- Reihenfolge in XI: Keil + limits + Effect Log zuerst. Dann Identity/Settle, dann A2A-Bridge, dann Discover, dann Storage, dann Compute. Nicht Marktplatz zuerst.

# Schichten (außen am Kernel)

| Schicht | Rolle | XI-Port |
| --- | --- | --- |
| libp2p / DHT / GossipSub | finden, Mesh | Transport |
| A2A | Task, Modalität, opaque Apps | Interop |
| IPFS o. ä. | Cards, Artifacts, Receipts | Storage |
| DID, x402, Escrow | Identität, Pay, Reputation | Settle |
| DePIN / Edge | Compute mieten | Compute |

Klassisches P2P tauscht statische Objekte. Agentic P2P tauscht Fähigkeiten und Aktionen — stateful, ohne Nachweis unsicher.

# Nicht tun

A2A / AdCP / libp2p nicht in den Kernel. Score nicht on-chain ersetzen. Shared CRDT-Memory nicht als Keil-Default. Kein zweiter Plan in [addxion-ai](../platforms/addxion-ai.md).
