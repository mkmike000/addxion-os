# Ziele

Firmen-Outcomes. Keine Queue. Bewegung bleibt in [ops](../../ops/). Zeitmessung bleibt Notion »Arbeiten« / Spalte Dauer.

# Ziel vs. Aufgabe

Test (ein Ja reicht nicht — mindestens zwei):

| Frage | Ziel | Aufgabe |
| --- | --- | --- |
| Ändert sich die Lage der Firma, wenn es fertig ist? | ja | selten |
| Kann ich es in einem Satz als Zustand formulieren (»X gilt / steht / ist geschlossen«)? | ja | meist Aktion (»X machen«) |
| Braucht es Wochen und mehrere Arbeitspakete? | oft | oft Stunden/Tage |
| Ist »fertig« messbar ohne die Tätigkeit zu nennen? | ja | nein (»Ticket buchen« ist die Tätigkeit) |

Persönliches (iPhone, Aktienplan, Training) und Kunden-Teilschritte (»Angebotsabschluss Grafik-Werkstatt«) sind keine ADDXION-Ziele. Recurring (»QX abgeben«) ist Routine in ops, kein Ziel.

Notion-DB »Ziele« bleibt Historie. Neue Outcomes nur hier.

# OKR-light

Kein zweites Framework, keine Quartals-Zeremonie. Drei Zeilen pro Ziel-Datei:

| Schicht | Name | Ort |
| --- | --- | --- |
| Richtung | **O**bjective | Titel + `# Outcome` |
| Beweis | **K**ey **R**esults | 2–4 messbare Zustände, nicht Todos |
| Arbeit | Initiativen | [ops](../../ops/), nicht im Ziel-File stapeln |
| Zeit | Dauer | Notion-Rollup über Arbeiten. Kein Score. |

Regel für KR: »Woran sieht ein Fremder in 10 Sekunden, dass das O gilt?« — Zahl, Datum oder Ja/Nein. Nicht »MCP recherchieren«.

Zyklus: Quartal reicht. Max **3** aktive Objectives gleichzeitig (sonst ist alles wichtig).

Prio-Formel rankt Objectives gegeneinander. KRs bekommen keinen eigenen Score.

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

**B-Fragen:** Teil der Top-3-Jahresziele? Bringt es Geld, Position oder Gesundheit näher? Kann ich erklären, warum es zählt? Würde ich es tun, wenn niemand zusieht?

**R-Fragen:** Kostet Nicht-Erledigung Geld, Job oder Gesundheit? Blockiert es ≥ 2 wichtige Aufgaben? Rechtliche/kontraktuelle Folge? Ärger in 6 Monaten?

# Dateien

* [Vorlage](_template.md)
* [addxion.ai → Prototyp entwickelt](addxion-ai-prototyp.md)
