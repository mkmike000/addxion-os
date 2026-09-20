---
type: decision
title: Eigene Frameworks, versioniert, über die Zeit erweiterbar
status: decided
owner: shared
updated: 2026-09-21
tags: [decision]
---

# Decision: eigene Frameworks

**Datum:** 2026-09-21

**Kontext:** Patterns sind einzelne Aussagen. Fremde Systeme (Copy-Gerüste, Libraries) lagen als Quelle oder Abhängigkeit da, ohne dass ADDXION ein eigenes, wachsendes Vertragssystem führte. Auftrag: eigene Frameworks bauen; allgemein, nicht nur für Copy oder Code; über die Zeit erweiterbar und verbesserbar.

**Entscheidung:** ADDXION besitzt Frameworks. Ein Framework hat Job, Grenze, Slots und Version. Die Instanz pinnt eine Version. Erweitern und verbessern ist der Normalfall: additiv in der Version, sonst neue Version. Fremdes bleibt Quelle, nicht SSOT.

**Konsequenzen:** Dateien unter [wiki/frameworks/](../frameworks/). Regel [Framework](../patterns/framework.md). Ablauf [Framework bauen](../processes/framework-bauen.md). Truth [T-FRAMEWORK](../fundamentals/truths.md). `type: framework` in [AGENTS.md](../../AGENTS.md).

**Verworfen:** Fremdes umbenennen und als eigenes führen. Ein Framework für alles. `latest` als Vertrag. Stilles Überschreiben einer Version, auf der Instanzen sitzen.
