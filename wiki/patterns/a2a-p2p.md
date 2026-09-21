---
type: pattern
title: A2A und P2P
aliases: [Agent2Agent, agentic P2P, A2A P2P]
description: Agent-zu-Agent ist Peer-Kommunikation. Ports um den Kernel. Wirkung auf Run-Marge, nicht auf App-Preis.
status: draft
owner: mike
updated: 2026-09-22
tags: [pattern, agents, p2p, xi]
sources:
  - id: raw-a2a
    resource: raw/a2a-p2p-crypto-2026-08-08.md
    title: Rohaufnahme Chat A2A P2P Crypto
  - id: raw-marge
    resource: raw/a2a-p2p-marge-2026-09-22.md
    title: Rohaufnahme Run-Marge
---

Heimat: [addxion-xi → Später](../platforms/addxion-xi.md#später). Dort gilt: A2A = externer Interop-Adapter, nicht Kernel-Kern. `Message` im Keil ≠ A2A-Protokoll. Factory-Formel (Marge/Run, Wert/Recipe) steht in derselben Plattform-Datei, Abschnitt Factory. Loop- und Kernel-Effekte: [Factory-Effekte](factory-effekte.md).

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

# Wirtschaftlichkeit

Die Ports ändern nicht den Preis der App. Sie ändern, wo Geld auf der **Run**-Ebene entsteht und verbrennt.

Formel bleibt die aus [addxion-xi](../platforms/addxion-xi.md) (Factory): Marge/Run = Erlös/Run minus LLM, Tools, Turso, Compute×Brain-Sekunden×N, minus Failed-Trials. Wert/Recipe = Summe der Margen minus Findungskosten.

| Hebel | Wirkung auf Marge | Wann |
| --- | --- | --- |
| Keil + limits | weniger Failed-Trials, gedeckelter LLM-Fraß | jetzt |
| Settle hinter `constrain` | Mini-Erlöse/Run buchbar; Nichtzahlung sinkt; Gas/Gebühr bleibt Kosten | sobald ein Task Geld wert ist |
| A2A-Bridge | Erlös und Einkauf über die Tenant-Grenze; N kann sinken | fremde Agents nachgefragt |
| CAS / Receipts | weniger Kopie, billigeres Audit | Cards und Beweise geteilt werden |
| DePIN | Compute billiger im Mittel, teurer im Worst Case | Compute ist die dominante Zeile und Score zählt Ausfall |
| Capability-Markt | Recipe-Wert über Tenants | zuletzt, nach Select |

Unverändert: [addxion-ai](../platforms/addxion-ai.md) bleibt Cockpit. Seats, Fahrschule, Normandy finanzieren sich über Produkt, nicht über Mesh.

Risiko: Port-Fixkosten vor geschlossenem Keil = Burn ohne Erlös/Run. Fremde Peers ohne Evidence und Spend-Limit steigern Failed-Trials. Score on-chain gibt die Marge an den Markt.

Lesart: Der Run wird Handelsware. Wirtschaftlich erst, wenn ein Run ohne Mesh schon messbar oder positiv ist.

# Nicht tun

A2A / AdCP / libp2p nicht in den Kernel. Score nicht on-chain ersetzen. Shared CRDT-Memory nicht als Keil-Default. Kein zweiter Plan in [addxion-ai](../platforms/addxion-ai.md).
