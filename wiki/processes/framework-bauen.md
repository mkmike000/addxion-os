---
type: process
title: Framework bauen
aliases: [Framework anlegen, Framework erweitern]
description: Von Job bis Version. Erst Vertrag, dann Instanz, dann wachsen.
status: active
owner: shared
updated: 2026-09-21
tags: [process]
---

Regel: [Framework](../patterns/framework.md). Gilt: [Eigene Frameworks](../decisions/eigene-frameworks.md). Vorlage: [wiki/frameworks/_template.md](../frameworks/_template.md).

# Anlegen

1. **Job** in einem Satz. Zwei Jobs = zwei Frameworks.
2. **Name.** Identifier Englisch, Dateiname = `id`. [Klartext](../fundamentals/klartext.md): zeigt das Wort auf den Gegenstand?
3. Datei `wiki/frameworks/<id>.md` aus der Vorlage. `status: draft`. `version: v1`.
4. Vertrag füllen: Job, Drin, Nicht drin, Slots (leere Slots zählen, sie sind die Tür für später), Heimat.
5. In [wiki/frameworks/](../frameworks/) eintragen. Zeile in [log.md](../../log.md): `ingest: framework …`.

Ohne Job, Grenze, einen Slot und Version: kein Framework, höchstens ein Pattern.

# Nutzen

v1 ist klein genug, dass **eine** Instanz es halten kann. Kein v1 ohne nächsten Nutzer.

Instanz liegt im Repo, das die Sache ausführt. Hier nur Pointer, kein Abzug. [Pattern vs. Instanz](../fundamentals/pattern-vs-instanz.md).

Nach erstem Nutzen: `status: active`.

# Erweitern und verbessern

Dasselbe Framework über die Zeit, nicht ein zweites daneben für denselben Job.

| Änderung | Wohin |
| --- | --- |
| Neuer Slot, neue Option, Schärfung die nichts bricht | dieselbe Version |
| Kern, Pflichtfeld, umbenannter Slot, entfernte Regel | neue Version (`v2`). `v1` bleibt |
| Job hat sich gedreht | neues Framework, altes `deprecated` |

Instanzen ziehen selbst um. Solange eine Instanz `v1` pinnt, bleibt `v1` lesbar.

Breaking in derselben Version ist kein Verbessern.

# Fertig wenn

- `id` = Dateiname, Datei unter `wiki/frameworks/`.
- Job, Grenze, mindestens ein Slot, Version, Heimat.
- Ein Nutzer (Instanz oder benannter nächster Schritt).
- Index und Log gesetzt.

# Nicht tun

- TanStack, React Aria, PAS, ein Swipe als eigenes Framework führen.
- `latest` statt Version.
- Kitchen-Sink, "bis es sitzt", parallel zur laufenden Version.
- Framework-Wissen in der Instanz noch einmal erzählen.
