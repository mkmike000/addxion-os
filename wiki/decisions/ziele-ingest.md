---
type: decision
title: Ziele-Ingest lean
status: decided
owner: mike
updated: 2026-08-25
tags: [decision, goal]
---

# Decision: Notion-Ziele → OS, lean

**Datum:** 2026-08-25

**Kontext:** Notion-DB »Ziele« (~97 Zeilen) mischt Outcomes, Kunden-Teilschritte, Privat, Routinen und leere Titel. Alles soll im OS landen — aber einmal richtig verdichtet, ohne an Totes zu hängen.

**Regel (Verarbeitung):**

| Signal | Wohin | Wann Datei |
| --- | --- | --- |
| Firmen-Zustand (Outcome) | `wiki/goals/` als O + 2–4 KR | immer, max 3 aktiv |
| Wiederkehrend (QX, Backup, Wartung) | `ops/routines.md` | eine Zeile, kein Ziel |
| Arbeitspaket / Kunden-»→« | `ops/` + Relation-Firma | Ticket nur wenn WIP |
| Privat (iPhone, Aktien, Training) | **nicht** ins OS | Notion/Leben |
| Erledigt / Annulliert ohne Lerneffekt | **kein** Wiki-File | Notion-Archiv reicht |
| Erledigt / Annulliert **mit** Lerneffekt | eine Zeile in [lessons](../goals/lessons.md) | nur wenn Fehler sonst doppelt |
| Leerer Titel / unlesbar | trash oder Parent klären | kein Import |

**Lean-Tests vor jeder neuen goals-Datei:**

1. Ändert sich die Lage der Firma, wenn es gilt?
2. Kann ich es in einem Satz als Zustand schreiben?
3. Würde ich in 6 Monaten noch wissen, warum diese Datei existiert?

Nein zu einem → keine Datei. Lesson statt Zombie.

**Verworfen:** 1:1-Migration der DB. Zweite Queue aus »Arbeiten«. Persönliches in wiki/goals.
