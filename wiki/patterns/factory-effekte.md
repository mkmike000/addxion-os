---
type: pattern
title: Factory-Effekte
aliases: [XI-Effekte, Run-Effekte]
description: Was der Factory-Loop erzeugt, was der Kernel erzeugt, was noch Nutzen hätte. Sortiert nach Hebel auf Marge/Run oder Wert/Recipe.
status: draft
owner: mike
updated: 2026-09-22
tags: [pattern, xi, factory]
sources:
  - id: raw-effekte
    resource: raw/factory-effekte-2026-09-22.md
    title: Rohaufnahme Factory-Effekte
---

Heimat der Mechanik: [addxion-xi](../platforms/addxion-xi.md) (Factory, Keil, Später). Ports und Run-Marge: [A2A und P2P](a2a-p2p.md). Kein Collective-Merge. Kein nächster Slice.

Nutzen = Hebel auf Marge/Run oder Wert/Recipe. Oben = mehr Hebel.

# Loop (schon da)

| Nutzen | Effekt | Woraus |
| --- | --- | --- |
| hoch | Selektion: schlechte Brains sterben, gute Recipes bleiben | Score → Commit / Kill / Teardown |
| hoch | Burn ist gedeckelt | `constrain`, Episode-Limit, soft TTL |
| hoch | Lernen hat einen Preis | Failed-Trials bis Recipe-Commit |
| mittel | Parallelität ohne Gedächtnis-Vermischung | Isolate: 1 Brain / Agent |
| mittel | Koordination ist sichtbar und kostet | Message, kein shared Memory |
| mittel | Wiederverwendung statt jedes Mal neu suchen | Recipe-Ledger |
| mittel | Versuch ist auditierbar | Effect Log, `run_id` |
| niedrig | Swarm nur bei Rollenkonflikt | \(N\) in der Compute-Zeile |

Ohne Score: parallele Chatbots. Mit Score: Optimierer.

# Kernel

| Nutzen | Effekt | Primitive |
| --- | --- | --- |
| hoch | Spawn / Budget / Teardown folgen dem Score | Select + Factory |
| hoch | Ein Lauf endet | Teardown |
| hoch | Erlaubt-sein ist eine Zahl | Constrain / limits |
| hoch | Verlauf ist die Wahrheit | Remember + Effect Log |
| mittel | Einfluss nur über Nachrichten | Message / Envelope |
| mittel | Zustand überlebt den Prozess | Isolate (Brain = DB) |
| mittel | Dieselbe Mechanik über Envs | Ports observe / act / evaluate |
| niedrig | Portfolio statt Einzel-Env | RecipeBundle / `score_v1` lean |

Emergenz im Kernel: Isolate + Message + Select, unter Kosten.

# Noch interessant

| Nutzen | Effekt | Noch nicht | Bedingung |
| --- | --- | --- | --- |
| hoch | Mini-Erlös/Run ohne Rechnung | Settle hinter limits | Task hat einen Preis |
| hoch | Fremde Arbeit kaufen/verkaufen, \(N\) sinkt | A2A-Bridge | fremde Peers nachgefragt |
| hoch | Neue Recipe nur beobachten, dann Commit | Shadow mode | Recipe-Versionierung |
| hoch | Warum ein Run starb, steht im Ledger | Deliberate death | Score→Factory |
| mittel | Trial bitgleich wiederholen | Deterministic replay | Effect Log first-class |
| mittel | Diff zwischen Commits | Recipe diff | Commit sichtbar |
| mittel | Compute variabel, Ausfall im Score | DePIN-Port | Compute dominant |
| mittel | Receipt → Score | CAS + Evidence | Storage-Port |
| mittel | Idle kostet ~0 | Hibernation-to-zero | Density-Problem |
| mittel | Recipe über Tenant-Grenze | Propagate / Markt | Select bleibt lokal |
| niedrig | Similarity ohne Full-Scan | Native Turso Vectors | Scale |
| niedrig | Mutationsparameter mutieren unter Budget | RSI-light | limits hart |

Nicht oben: Token-Marktplatz zuerst, on-chain Score, A2A im Kernel.

Lesart: Der Kernel erzeugt Druck, Deckel, Gedächtnis, Tod. Danach zählen Effekte, die Erlös/Run sichtbar machen oder Findungskosten senken — nicht mehr Primitive.
