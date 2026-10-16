---
type: pattern
title: Inverse Pyramide für Agenten-Vertrauen
description: Meiste Arbeit in Codebase-Verbesserungen und Static Analysis, damit Coding-Agenten in der ADDXION AI App standardmäßig richtig arbeiten. Prose und Human Review minimal.
status: active
owner: mike
updated: 2026-10-16
tags: [pattern, agents, coding]
sources:
  - id: poteto-2026-10-16
    resource: https://x.com/poteto/status/2111133080526495985
    title: How do you trust your agents' work more?
---

Gilt für Coding-Agenten, die an der [ADDXION AI App](../platforms/addxion-ai.md) und den zugehörigen Packages arbeiten. Nicht der Runtime-Loop für Kunden ([Agentic Loop](agentic-loop.md)).

# Inverse Pyramide

Meiste Aufwand oben, wenigste unten. Codebase-Verbesserungen sind deterministisch und token-effizient. Human Review skaliert nicht.

1. **Codebase-Verbesserungen** — bessere Architektur, starke Typen, Invarianten, klare Grenzen. Agenten kopieren, was existiert und nehmen den kürzesten Weg. Mach den einfachen Weg zum richtigen. Probleme kategorisch durch Code eliminieren.
2. **Static Analysis** — Linter, Tests, CI, Verifikation. Token-effizient, fängt Issues vorab. Alles, was erzwungen werden kann, gehört hierher.
3. **Prose** — Kommentare, Regeln, AGENTS.md, Skills. Nur für das, was nicht erzwungen werden kann und Agent-Urteil braucht. Minimal nutzen.
4. **Human Review** — am schwersten zu skalieren. Bei der Rate, mit der Agenten Code landen, unmöglich jeden PR gründlich zu reviewen. Aufwand auf den höchsten Hebelpunkt: Umgebung so designen, dass Agenten standardmäßig richtig tun.

# Praktisch in der ADDXION AI App

- **Codebase:** Klare Modulgrenzen in TanStack Start / Effect / Better Auth. Starke Typen (TypeScript strict, Rust-Invarianten wo vorhanden). Eine Art, Dinge zu tun. Agenten fallen in den Erfolgspfad, nicht in den Abkürzungspfad.
- **Static:** Linter und Tests, die Agenten selbst ausführen können (CI-Feedback machine-readable). Verifikations-Skills oder Skripte, die den Agenten zeigen, ob die Änderung stimmt (Screenshot, CLI-Output, Test-Lauf). Kein Token-Verbrennen für Regeln, die ein Compiler ablehnen kann.
- **Prose:** Kurze AGENTS.md oder Skill nur für Workflow-Besonderheiten (z. B. wie man die App startet, wie man verifiziert, wo die Org-Grenzen liegen). Nicht 500 Zeilen Regeln. Poteto-mode / pstack-Prinzipien als Stil, wenn nützlich.
- **Review:** Menschliches Review nur noch an Hebelpunkten (Architektur-Entscheidungen, 1-way-Änderungen). Sonst: Agent verifiziert selbst, Cross-Model-Review oder automatische Checks. Schlaf besser, weil die Umgebung den Rest erzwingt.

Ergebnis: Weniger "Agent Judgment", mehr deterministische Korrektheit, höhere Token-Effizienz, skalierbarere Agenten-Arbeit an der App.
