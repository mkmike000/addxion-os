---
type: decision
title: Constraint und Auftrag in Ops
description: Eine Engstelle in ops/index.md. Doing nur mit Absicht und Fertig-wenn.
status: decided
owner: shared
updated: 2026-08-27
tags: [ops, decision]
---

# Kontext

WIP max 3 und Score allein steuern nicht, *welche* drei Tickets laufen. Queue kann drei Staus parallel halten.

# Entscheidung

1. Eine Constraint, gepflegt in [ops/index.md](../../ops/index.md).
2. Zug nach Doing nur mit Absicht und Fertig-wenn. Prozess: [Constraint und Auftrag](../processes/ops-constraint.md).

Bestehende Inbox-Tickets werden nicht nachgezogen. Pflicht gilt ab dem nächsten Zug nach Doing.

# Konsequenz

Agent setzt die Constraint nicht. Score-Formel bleibt. Kein zweites Board.
