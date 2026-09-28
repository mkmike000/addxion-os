---
type: decision
title: Agentic Loop
description: ADDXION wird agentisch über das Objekt Loop, nicht über mehr Chat. XI konsumiert Loops.
status: decided
owner: mike
updated: 2026-09-28
tags: [decision, xi, ads]
sources:
  - id: chat-2026-09-28
    resource: raw/agentic-business-landings-2026-09-28.md
    title: Roh Chat Agentic Landings
---

# Gilt

Ein Agentic Business ist ein geschlossener Kreislauf pro Angebot, kein Chat über dem Kernel.

Die Arbeitseinheit heißt **Loop**. Eine Loop hat genau: Owner, Metrik, Budget, Tür, Fertig-wenn. Ohne die fünf schreibt ein Agent Text, kein Geschäft.

Reihenfolge im Lauf: beobachten → Hypothese → Handlung mit Budget → messen → commit oder kill.

XI konsumiert Loops. XI erfindet keine Loops.

# Käfig

1-way (Mensch): Veröffentlichen, Budget erhöhen, Kundendomain, CAPI an Dritte.
2-way (Agent erlaubt): Copy, Variante, UTM, Report.

Consent vor Fan-out. `consent_marketing = 1` ist Voraussetzung für Meta CAPI. Sonst bleibt das Event im eigenen Store.

Score kommt aus dem Ads-Store (`clicks` + `events` mit gleicher `xid`), nicht aus dem Bauch des Agenten.

Eine klebende Testorder und die Ads-Phasen 2–3 stehen vor Landing-Fabrik und vor XI-Optimierung. [Ads-Netzwerk](../platforms/ads-netzwerk.md).

# Nicht

- Agent ohne Loop-Objekt
- Variante ohne Hypothese
- XI schreibt Ads, bevor eine Loop an einem Kunden durchläuft
- Principal und Agent ohne Kill-Schwelle

# Folge

[Agentic Loop](../patterns/agentic-loop.md), [Factory-Effekte](../patterns/factory-effekte.md), [Landing öffentlich](landing-public.md).
