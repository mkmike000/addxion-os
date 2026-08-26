---
type: decision
title: Plattform-Wissen in dieser SSOT, addxion-docs nicht mehr Wahrheit
status: decided
owner: shared
updated: 2026-08-26
tags: [decision]
---

# Decision: addxion-docs ist keine SSOT mehr

**Datum:** 2026-08-24

**Kontext:** Plattform-Wahrheit lag in `addxion-docs` (Starlight, addxion.ai/docs). Dieses Repo ist die Collective-SSOT. Zwei Wahrheitsorte. Auftrag: `addxion-docs` soll weg.

**Entscheidung:** Kollektives Plattform-Wissen gilt nur noch in diesem Wiki. `addxion-docs` ist keine Plattform-Datei mehr. Truth-IDs bleiben; [T-PLATFORM-SSOT](../fundamentals/truths.md) zeigt hierher.

**Konsequenzen:** Query zuerst `index.md` und `wiki/`. Starlight nicht fortschreiben. Öffentliche Docs-Site ist aus der App. Keine Redirect-Schicht.

**Erledigt 2026-08-26:** GitHub-Repo `addxion-docs` archiviert. Cloudflare Pages-Projekt gelöscht. CNAME `docs.addxion.com` entfernt.

**Verworfen:** Parallel-SSOT in Starlight. Komplette Kopie jeder Komponenten-Seite hierher (APIs bleiben in `addxion-neon` / Produkt-Repos).
