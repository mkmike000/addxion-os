---
okf_version: "0.2"
---

# ADDXION Knowledge

Git-SSOT für kollektives Wissen. Workspace-Ordner heißt `addxion-os` — das ist ein Name, kein Kernel.

Wissen dient **Handlung**. Eine Aussage = ein Ort. Menschen und Agenten: [AGENTS.md](AGENTS.md).

| Schicht | Ordner | Rolle |
| --- | --- | --- |
| Quelle | [raw/](raw/) | unverändert, nicht Wahrheit |
| Wahrheit | [wiki/](wiki/) | was gilt |
| Bewegung | [ops/](ops/) | Queue, kein zweites Wissen |

Code-Repos (Kunden, Produkte) sind Instanzen. Sie spiegeln diese SSOT nicht. XI speichert kein Collective. addxion-ai schreibt keine Parallel-Wahrheit. RAG ist kein Content-Ordner (später Index über diesem Repo, Output nur `.rag/`).

# Drei Operationen

1. **Ingest** — Quelle nach `raw/` → verdichten nach `wiki/` → Zeile in [log.md](log.md).
2. **Query** — zuerst diese Datei und `wiki/`, nicht zwanzig Repos.
3. **Lint** — tote Links, Widersprüche, doppelte Aussagen, veraltete Firmen-Seiten.

# Wiki

* [Fundamentals](wiki/fundamentals/) — Leitprinzipien, [Truths](wiki/fundamentals/truths.md)
* [Branding](wiki/branding.md) — Markenstrategie
* [Platforms](wiki/platforms/) — eine Datei pro Plattform
* [Patterns](wiki/patterns/) — wiederverwendbar
* [Relations](wiki/relations/) — Firmen und Personen; Opportunities in ops
* [Decisions](wiki/decisions/) — Festlegungen
* [Processes](wiki/processes/) — generisch, nicht kundenspezifisch

# Ops

* [Inbox](ops/inbox.md) — Score-sortiert
* [Doing](ops/doing.md) — WIP max 3
* [Waiting](ops/waiting.md)
* [Opportunities](ops/opportunities.md) — mögliche Leistungen
* [Routines](ops/routines.md)

# Log

* [log.md](log.md)
