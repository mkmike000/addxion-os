---
type: pattern
title: Framework
aliases: [eigenes Framework, Gerüst-System]
description: Eigenes, versioniertes Vertragssystem mit Slots. Fremdes bleibt Quelle.
status: active
owner: shared
updated: 2026-09-21
tags: [pattern]
---

[T-FRAMEWORK](../fundamentals/truths.md). Bauen: [Framework bauen](../processes/framework-bauen.md). Gilt: [Eigene Frameworks](../decisions/eigene-frameworks.md).

Pattern = eine Aussage. Framework = ein System aus Vertrag, Version und Slots, das ADDXION besitzt.

# Eine Aussage

ADDXION baut eigene Frameworks. Sie wachsen über Versionen und Slots, nicht durch stilles Überschreiben.

# Was es ist

| | Framework | Pattern | Instanz |
| --- | --- | --- | --- |
| Ort | [wiki/frameworks/](../frameworks/) | `wiki/patterns/` | Repo, n8n, Site |
| Inhalt | Job, Grenze, Slots, Version | eine wiederverwendbare Aussage | Code, Workflow, Stück |
| Besitz | ADDXION | ADDXION | Ausführung |

Fremdes (PAS, TanStack, React Aria, ein Swipe) ist Quelle oder Abhängigkeit. Es ist nicht das Framework.

Copy-Gerüste bleiben Gerüste für Sätze: [Copy-Gerüste](copy-gerueste.md). Ein ADDXION-Gerüst mit Version und Slots ist ein Framework.

# Vertrag

Jedes Framework nennt:

1. **Job** — eine Aufgabe, nicht alle.
2. **Drin / nicht drin** — Grenze.
3. **Slots** — wo später etwas andockt, ohne den Kern zu brechen.
4. **Version** — `v1`, `v2`. Die Instanz pinnt eine Version.
5. **Heimat** — welches Repo die Instanz hält.

`id` = Dateiname. Identifier Englisch (`framework`, Slot-Namen). Wiki Deutsch. [Klartext](../fundamentals/klartext.md).

# Über die Zeit

- Erweitern = neuer Slot oder additive Regel in derselben Version, wenn Instanzen nicht brechen.
- Verbessern am Kern = neue Version. Alte bleibt, bis keine Instanz mehr pinnt.
- In-place überschreiben wie bei fremden Libraries: nicht. Gleicher Schnitt: [T-NEON-SECTIONS](../fundamentals/truths.md).
- `latest` ist kein Vertrag.

# Nicht tun

- Fremdes Framework umbenennen und als eigenes führen.
- Ein Framework für alles.
- Framework ohne Slot (dann ist es ein Pattern).
- Wissen der Instanz hierher kopieren.
- Zweite Wahrheit in einem Consumer-`MASTERPLAN.md`.
