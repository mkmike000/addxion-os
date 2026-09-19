---
type: Data
title: Jev System One
description: Rohaufnahme ohne Folgerung.
status: draft
sources:
  - id: x-runkle-2026-09-18
    resource: "https://x.com/sydneyrunkle/status/2100754364545761643"
    title: Sydney Runkle / LangChain — Jev mit LangChain
  - id: typesafe-system-one
    resource: "https://docs.typesafe.ai/concepts/system-one"
    title: TypeSafe — System One
  - id: typesafe-models
    resource: "https://docs.typesafe.ai/models.md"
    title: TypeSafe — Models / Jev 1.13
---

Datum der Aufnahme: 2026-09-19

# Werte

| Zeichen | Einheit | Anmerkung |
| --- | --- | --- |
| Jev | Modell | TypeSafe AI, erstes öffentliches System-One-Modell |
| System One | Klasse | State rein, typisierte Entscheidung plus Wahrscheinlichkeit raus; kein Text |
| Primitive | Choice, Score, Noul | Auswahl / Skala / Ja-Nein |
| Parallel | Fragen pro Request | eine State, mehrere Fragen |
| Latenz | 70–500 ms | Angabe Anbieter / LangChain-Post |
| Preis | 0,042 USD / MTok Input | Output laut Anbieter frei; Stand Doku 2026-09 |
| Modell-ID | jev-1.13.0 / jev-latest | gehostete API, Gewichte nicht öffentlich |
| Input | Text, JSON, Text-Array | kein Bild, Audio, Video (Stand Doku) |
| Kontext | 64k Request; 32k State + längste Frage | |
| Training | RLCD | Reinforcement Learning for Calibrated Decisions |
| LangChain | TypeSafeClassifier | optional; ADDXION-Stack nicht vorausgesetzt |
| Beispiele im Post | Routing, Tool-Gate, Ticket-Triage | Browser-Agent, Trading-Agent, Mail-Triage genannt |

Kein „daher“. Aussage nach Verdichtung in `wiki/patterns/system-one.md` und `wiki/decisions/jev-heimat.md`.
