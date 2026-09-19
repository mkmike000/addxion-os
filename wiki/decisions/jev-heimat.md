---
type: decision
title: Jev-Client in @addxion/ai, XI nur Port
status: decided
owner: shared
updated: 2026-09-19
tags: [decision]
sources:
  - id: raw-jev
    resource: raw/jev-system-one-2026-09-19.md
    title: Jev System One Rohaufnahme
  - id: pattern-system-one
    resource: wiki/patterns/system-one.md
    title: System One
---

# Decision: Jev-Heimat

**Datum:** 2026-09-19

**Kontext:** TypeSafe Jev ist ein System-One-Modell, kein Chat-LLM. Frage war, ob der Schnitt in addxion-xi, addxion-ai, addxion-os oder woanders liegt. Muster: [System One](../patterns/system-one.md).

**Entscheidung:**

1. Wissen gilt hier (Pattern + diese Decision). Kein SDK in diesem Repo.
2. Decision-Client lebt in `@addxion/ai` neben dem Stream-Client. Kein eigenes `@addxion/jev`-Repo. [T-PKG-AI](../fundamentals/truths.md) bleibt LLM-SSOT; System One ist derselbe Package-Ort, anderer Aufruf (`classify` / System-One-HTTP, nicht Chat-Stream).
3. addxion-xi ruft den Client höchstens über bestehende Ports (`constrain`, vor Select als Zusatzsignal). Jev ersetzt nicht `evaluate_report`. Kernel bleibt ohne TypeSafe-SDK.
4. LangChain ist nicht Pflicht. HTTP zum Anbieter reicht.
5. Volumen-Flows (Mail, Lead) dürfen zuerst in der n8n-Instanz liegen. Pointer hierher, Workflow nicht kopieren.

**Konsequenzen:** Erster Bau = Adapter in `addxion-ai`, dann ein Router oder ein Tool-Gate. Factory-Preselect erst wenn der Client steht. Kein Parallel-Client in Elixir.

**Verworfen:** Jev als Chat-Ersatz. Jev-SDK im Kernel. Viertes Package nur für TypeSafe. Collective-Wahrheit in Turso.
