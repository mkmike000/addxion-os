---
type: pattern
title: Privacy by Design
description: Datenschutz als Architektur, nicht als Checkbox hinterher.
status: active
owner: shared
updated: 2026-08-26
tags: [pattern]
sources:
  - id: docs-privacy
    resource: addxion-docs/src/content/docs/patterns/guidance/privacy-by-design.md
    title: Privacy by Design
---

[T-DATA-AUTH-SHARED](../fundamentals/truths.md), [T-DATA-APP-ISOLATED](../fundamentals/truths.md), [T-PKG-AI](../fundamentals/truths.md). Personen in Relations: keine E-Mail, Telefon, Adresse, Geburtstag. [AGENTS.md](../../AGENTS.md).

# Prinzip

Datenminimierung. Privacy by Default (restriktive Defaults, Opt-in wo sinnvoll). Transparenz, welche Daten wohin fließen. Secrets nur serverseitig, nie im Client-Bundle.

# Bereich

| Bereich | Regel |
| --- | --- |
| Marketing (`addxion-com`) | Keine Third-Party-Tracker ohne bewusste Entscheidung. Öffentliche Inhalte ohne personenbezogene Testdaten. CMS nur authentifiziert. |
| Auth | Identity in D1 (`@addxion/auth`). Minimale OAuth-Scopes. HttpOnly-Session; keine Session-Tokens in `localStorage`. |
| LLM (`@addxion/ai`) | PII vor Aufruf filtern oder pseudonymisieren. Kein Training mit Kundendaten by Default. Retention bewusst. |
| Neon | Keine Telemetrie in Primitives. Analytics entscheidet der Consumer, nicht das Shared Package. |

# Vor Merge

1. Welche personenbezogenen Daten, warum nötig?
2. Wo gespeichert (D1, Neon, R2, Drittanbieter)?
3. Löschung und Export?
4. In Datenschutz-Doku oder Produkt-MASTERPLAN erwähnt?

Bundle-Grenzen (`.server`, kein TCP-DB-Client im Worker) bleiben Instanz-Regel in `addxion-ai`, nicht hier.
