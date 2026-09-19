---
type: pattern
title: System One
aliases: [Jev, typed decision, classifier]
description: Schnelle typisierte Entscheidung neben dem LLM. Kein Textgenerator.
status: active
owner: shared
updated: 2026-09-19
tags: [pattern]
sources:
  - id: raw-jev
    resource: raw/jev-system-one-2026-09-19.md
    title: Jev System One Rohaufnahme
  - id: typesafe-system-one
    resource: "https://docs.typesafe.ai/concepts/system-one"
    title: TypeSafe — System One
---

[T-PKG-AI](../fundamentals/truths.md), [T-EVOLUTION-CORE](../fundamentals/truths.md), [T-REPO-BOUNDARY](../fundamentals/truths.md). Heimat des Clients: [Jev-Heimat](../decisions/jev-heimat.md).

LLM schreibt und plant. System One entscheidet auf einem geschlossenen Antwort-Raum.

# Primitives

| Primitive | Frage | Raus |
| --- | --- | --- |
| Choice | welche Option | Wahrscheinlichkeit je Option plus Confidence |
| Score | wo auf einer geordneten Skala | Zahl, Verteilung, Confidence |
| Noul | gilt der Satz | Wahrscheinlichkeit 0–1 |

Mehrere Fragen gegen denselben State in einem Request. Keine Erklärung, kein Code, keine Copy.

# Wann

| Nutzen | Nicht nutzen |
| --- | --- |
| Routing, Triage, Gate, Vorfilter | Antwort an den Menschen |
| viele gleiche Urteile, Latency zählt | Env-Score (PnL, ROAS, CVR) |
| geschlossene Menge, Code brancht darauf | Lookup, Regex, Katalog-ID, feste Regel |

Kalibrierung gilt über Mengen, nicht als Garantie für den Einzelfall. Falsche In-Schema-Antwort bleibt möglich.

# Schnitt

State = Text oder JSON, den die App schon hat. Fragen = feste Schemas, versioniert im Consumer, nicht im Wiki. Schwelle und Fallback bestimmt der Caller (z. B. unter Confidence → Mensch oder LLM).

Instanz (Adapter, Key, n8n) bleibt Instanz. Hier nur das Muster.
