---
type: process
title: Constraint und Auftrag
description: Eine Engstelle. Doing nur mit Absicht und Fertig-wenn.
status: active
owner: shared
updated: 2026-08-27
tags: [ops, process]
---

Gilt in `ops/`. Regeln auch in [AGENTS.md](../../AGENTS.md).

# Constraint

Es gibt immer höchstens **eine** Engstelle. Steht oben in [ops/index.md](../../ops/index.md) unter `Constraint`.

- Leer (`—`) = noch nicht gesetzt. Agent erfindet sie nicht.
- Gesetzt = Doing zieht bevorzugt Arbeit, die diese Stelle bewegt. Anderes bleibt Inbox, Waiting oder Opportunity.
- Wechsel nur durch Menschen, eine Zeile `decision:` in `log.md`.

Die Engstelle ist das, woran gerade alles andere wartet: Angebot raus, Antwort vom Kunden, eine Migration, Aufmerksamkeit.

# Auftrag (Doing)

Nach Doing nur mit:

```text
Absicht: warum das jetzt
Fertig wenn: beobachtbar, ohne Nachsatz
Nicht tun: eine Grenze, optional
```

Ohne `Fertig wenn` bleibt das Ticket in der Inbox. Agents schließen nur gegen dieses Kriterium.
