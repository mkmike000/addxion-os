---
type: decision
title: Agentic Finances vs Agentic Trading — drei Geld-Schienen
description: Billing (Stripe/Agentic Finances), Venues (Agentic Trading), A2A-Value (P2P). Nicht vermischen.
status: decided
owner: shared
updated: 2026-10-06
tags: [decision, agentic-trading, agentic-finances, stripe, xi, a2a, finanzen, konnektoren]
---

# Festlegung

Drei Schienen. Drei Jobs. Keine Vermischung.

| Schiene | Produkt / Fläche | Job | Typische Rails |
| --- | --- | --- | --- |
| **Billing** | **Agentic Finances** (`/finanzen`, Feature `agentic.finances`) | Rechnungen, EUR-Zahlungen, Org-Kontostand, Packs | Stripe (Checkout, Connect, Balance, Invoices) |
| **Venues** | **Agentic Trading** (Normandy, Feature `agentic.trading`) | Märkte ausführen: Crypto zuerst; später Aktien, ETFs, Dividenden, Polymarket, … | Exchange / DEX / Broker / Prediction-Market-APIs |
| **A2A-Value** | später, neben XI-A2A | Wert zwischen Agenten: Anteil, Swarm-Fee, Settlement | On-chain / Wallet↔Wallet (P2P) |

Truth: [T-TRADING-RAILS](../fundamentals/truths.md). Loop: [agentic-loop.md](agentic-loop.md). Checkout-Verkauf: [rechnung-vs-checkout.md](rechnung-vs-checkout.md).

# Agentic Finances

- Fläche: `addxion.ai/finanzen` (Nav-Label „Finanzen“, Titel Agentic Finances).
- Pack: `agentic-finances` → Keys `finanzen` + `agentic.finances`.
- Inhalt: Rechnungen, EUR-Zahlungen, Stripe als Konnektor.
- **Nicht:** Crypto-Wallets, Börsen-Fills, Polymarket, Agent-P2P.

# Agentic Trading

- Fläche: Flotte Normandy unter Operatoren; Feature `agentic.trading`.
- Fokus: Crypto und Märkte (Paper → Live-Venues). Asset-Klassen Zielbild: Crypto, Aktien, ETFs, Dividenden, Polymarket, ….
- Pro Klasse eigener Venue-Konnektor — nicht Stripe.
- XI-Factory (`run` / `evolve` / Session) bleibt Evolutions- und Steuerungslogik.

# Stripe

**Ja für Agentic Finances:** Org verbinden (Konnektor), Balance/Tx/Payouts/Invoices → Finanzen; Feature-Packs und bestehende Checkouts (z. B. Bewertungen).

**Stripe Crypto ist Merchant-Rail**, kein P2P und keine Trading-Venue: Kunde zahlt Stablecoin → oft Fiat auf Stripe-Balance. Optional höchstens Fiat-/Stablecoin-Onramp für Trading-Cash — nie Markt-Execution und nie Agent↔Agent-Settlement.

# A2A vs. P2P-Crypto

XI-**A2A** = peer Task-Handoff (Auftrag, Grenze, Ergebnis).

**A2A-Value** (später) = peer Value-Transfer neben dem Task. Eigenes Rail. Stripe Crypto ersetzt das nicht. Gehört näher zu Agentic Trading / Agent-Ökonomie als zu Finances.

# Konnektoren (addxion-ai)

`/konnektoren` = Org-Kopplung externer Konten.

- Stripe = Billing → Agentic Finances.
- Exchange / Broker / Polymarket = Venues → Agentic Trading.
- Social bleibt getrennt (Profil / Ads).

# Nicht tun

- Stripe als Trading-Venue behandeln.
- Crypto-Guthaben und Börsen-Fills unter Agentic Finances führen.
- Stripe Crypto mit Agent-P2P oder XI-A2A gleichsetzen.
- Billing-Ledger und Trading-Ledger in einer ungeklärten Tabelle vermischen.

# Konsequenzen

- Cockpit: Finanzen = Billing; Normandy = Märkte.
- Neue Markt-Fähigkeit: Venue-Port zuerst (Kernel / `@addxion/xi/core`), dann Cockpit — analog [agentic-loop.md](agentic-loop.md).
- Instanz: `addxion-ai` Feature-Registry + Konnektoren-Katalog.
