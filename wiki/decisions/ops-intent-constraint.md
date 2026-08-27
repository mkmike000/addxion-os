---
type: decision
title: Constraint und Auftrag in Ops
description: Eine Engstelle. Doing mit Absicht, Fertig-wenn und Tür.
status: decided
owner: shared
updated: 2026-08-27
tags: [ops, decision]
---

# Kontext

WIP max 3 und Score allein steuern nicht, *welche* drei Tickets laufen. Queue kann drei Staus parallel halten. Nicht jede Arbeit ist gleich teuer rückgängig.

# Entscheidung

1. Eine Constraint, gepflegt in [ops/index.md](../../ops/index.md).
2. Zug nach Doing nur mit Absicht, Fertig-wenn und Tür (`2-way` | `1-way`). Prozess: [Constraint und Auftrag](../processes/ops-constraint.md).
3. 1-way gilt erst mit Decision in diesem Ordner — oder die Decision entsteht in demselben Zug.

Bestehende Inbox-Tickets werden nicht nachgezogen. Pflicht gilt ab dem nächsten Zug nach Doing.

# Konsequenz

Agent setzt die Constraint nicht. Agent macht aus 1-way kein 2-way. Score-Formel bleibt. Kein zweites Board.
