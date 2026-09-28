---
type: pattern
title: Agentic Loop
description: Arbeitseinheit für ein agentisches ADDXION. Frameworks nur soweit sie die Loop steuern.
status: active
owner: mike
updated: 2026-09-28
tags: [pattern, xi]
sources:
  - id: chat-2026-09-28
    resource: raw/agentic-business-landings-2026-09-28.md
    title: Roh Chat Agentic Landings
---

Gilt mit [Agentic Loop](../decisions/agentic-loop.md). Kernel-Effekte: [Factory-Effekte](factory-effekte.md). Messung: [Vorher Nachher](vorher-nachher.md).

# Felder

| Feld | Rolle |
| --- | --- |
| Owner | Mensch, Principal |
| Kunde / Org | Advertiser, `advertiser_id` |
| Angebot | eine Leistung, eine Landing-Row |
| Hypothese | Satz vor der Variante |
| Metrik | Kosten pro qualifiziertem Event gegen Deckungsbeitrag |
| Budget | Deckel für Traffic und Agent-Burn |
| Tür | 1-way oder 2-way |
| Fertig-wenn | beobachtbar, sonst kein Lauf |
| Kill | Schwelle, unter der der Lauf stirbt |

# Frameworks in der Loop

| Name | Wo in der Loop |
| --- | --- |
| OODA | Observe = Ads-Store. Orient = Hypothese. Decide = Tür. Act = Publish oder Kill. |
| Theory of Constraints | Nur den Engpass des Kunden anfassen (Klick, Landing, Formular, Angebot, Abschluss). |
| Unit Economics | Metrik ist Geld, nicht Traffic. |
| Cynefin | Klar automatisieren. Kompliziert nach Rezept. Komplex nur als Trial. Chaotisch nicht. |
| Principal-Agent | Du setzt Käfig. Agent handelt darin. |

Ohne Orient entstehen Varianten ohne Grund. Ohne Kill ist der Agent ein Chatbot mit Budget.

# Reihenfolge

1. Collector klebt eine `xid` durch Klick und Event.
2. Eine Org, eine Landing, eine Hypothese.
3. Mensch öffnet die Tür Publish.
4. Score aus dem Store.
5. Commit oder Kill.
6. Erst dann XI auf weitere Loops.

# Offen

**Ziel:** Eine Loop an einem Kunden durchlaufen.
**Ist:** Kernel-Schleife existiert für Trading. Kein Loop-Objekt für Ads/Landings.
**Lücke:** Schema Loop, Bindung Landing + Kampagne + Budget.
**Zu klären:** Erster Kunde (CHSOPTIMA, comsolution oder Felgenimperium).
