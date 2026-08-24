# Ziele

Firmen-Outcomes. Keine Queue. Bewegung bleibt in [ops](../../ops/). Instanz (Code, n8n, Site) bleibt im jeweiligen Repo.

Notion-DB »Ziele« ist gemischt (Outcomes + Arbeitstickets + Kundenschritte). Hier nur Outcomes, die für ADDXION gelten sollen.

# Prio (Notion-Ziele)

Gleiche Formel wie ops, **andere Skala**.

| Variable | Bedeutung | Skala Ziele | Skala ops-Tickets |
| --- | --- | --- | --- |
| B | Bedeutung | **1–10** | 1–5 |
| R | Risiko | **1–10** | 1–5 |
| A | Aufwand | **1–10** | 1–5 |
| D | Deadline | Datum oder leer | Datum oder leer |

```text
wenn D leer:
  Score = 0
sonst:
  Score = (B + R) * min(10, 10 - TageBisDeadline / 7) / max(1, A^0.35)
```

`TageBisDeadline` = Kalendertage von heute bis D. Überfällig: Faktor wächst, Deckel 10.

Ohne Deadline sortiert das Ziel nach unten. Score nicht von Hand pflegen — B/R/A/D setzen, Score rechnen.

**B-Fragen:** Teil der Top-3-Jahresziele? Bringt es Geld, Position oder Gesundheit näher? Kann ich erklären, warum es zählt? Würde ich es tun, wenn niemand zusieht?

**R-Fragen:** Kostet Nicht-Erledigung Geld, Job oder Gesundheit? Blockiert es ≥ 2 wichtige Aufgaben? Rechtliche/kontraktuelle Folge? Ärger in 6 Monaten?

Dauer (Notion-Rollup über 🔥 Arbeiten) ist kein Score. Pointer auf Arbeit, keine zweite Queue.

# Dateien

* [Vorlage](_template.md)
* [addxion.ai → Prototyp entwickelt](addxion-ai-prototyp.md)
