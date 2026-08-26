---
type: pattern
title: Leser-Intent
description: Wann die Oberfläche den Leser bewegt. Nie gegen die Absicht scrollen.
status: active
owner: shared
updated: 2026-08-26
tags: [pattern]
sources:
  - id: docs-scroll
    resource: addxion-docs/src/content/docs/behavior/guidance/scroll-engineering.md
    title: Scroll Engineering (15 Prinzipien)
  - id: super-scroll
    resource: süper/docs/streaming-chat-scroll-engineering.md
    title: Streaming Chat Scroll (Ursprung)
---

Code: `@addxion/behavior` in `addxion-neon`. Shell bindet Hooks an DOM.

[T-PKG-BEHAVIOR](../fundamentals/truths.md).

# Grundregel

Nie gegen die Absicht des Lesers scrollen. Auto-Scroll ist nie der Default.

# Prinzipien

1. Nur bewegen, wenn der Leser Bewegung verlangt.
2. Follow nur, solange der Leser am Live-Edge folgt. Weggescrollt: dort bleiben.
3. Jede Interaktion ist Intent: Scroll, Auswahl, Tastatur, Links, Suche stoppen Auto-Bewegung.
4. Neuen Turn oben im Viewport beginnen.
5. Antwort in den freien Raum streamen.
6. Vorherigen Turn teilweise sichtbar lassen.
7. Neuer Inhalt darf offscreen ankommen.
8. Zeigen, was außerhalb passiert (Stream, neue Nachrichten).
9. Rückkehr zum Live-Edge leicht machen (Jump to latest setzt Follow zurück).
10. Sprung überall in der Konversation (Links, Suche, Unread).
11. Wiederöffnen am letzten User-Turn.
12. Platz halten bei Layout-Änderungen (Bilder, Markdown, Code).
13. Stop, Retry, Regenerate ohne Positionsdiebstahl.
14. Lange Threads flüssig halten.
15. Tastatur, Fokus, Screenreader in angemessenem Tempo.

# Hooks (Instanz)

`useFollowStream`, `useProxyWheelScroll`, `useScrollIntent` (geplant), Jump-to-latest über Follow. API im Package, nicht hier. `useProxyWheelScroll`: Desktop-Ränder der zentrierten Shell-Spalte → `.app-content`.
