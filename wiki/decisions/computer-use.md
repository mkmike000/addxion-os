---
type: decision
title: Computer-Use — späteres Produkt (Browser first)
status: draft
owner: shared
updated: 2026-10-05
tags: [decision, xi, cockpit, computer-use, browser]
---

# Computer-Use (später)

Produkt-Idee für ADDXION: Agents handeln in einer **sichtbaren Umgebung** (Browser oder Desktop), nicht nur Text im Pi-Käfig.

**Nicht jetzt bauen.** Merker nach Chat-Migrations-Runden (TanStack AI / A2A / Pi-Ports).  
Verwandt: [Agentic Loop](agentic-loop.md), Platform [addxion-xi](../platforms/addxion-xi.md).

## Abgrenzung zu heute

| Heute | Computer-Use |
|-------|----------------|
| Pi + OrbStack = Linux-Käfig `/work` (Code, Shell, Dateien) | GUI / Browser steuern (sehen + klicken + tippen) |
| Kein Host-PTY, kein Desktop in der App | Eigene Runtime + Stream + Policy |
| Port-Muster: HTTP → `@addxion/xi/core` → Cockpit-Tool/UI | **Gleicher Port-Muster**, neuer World-Adapter |

OrbStack „GUI anmachen“ ≠ Computer-Use. Braucht eigene Env.

## Capability-Matrix

| Fähigkeit | **A — Hosted Browser** (Welle 1) | **B — Full Desktop** (Welle 2+) |
|-----------|-----------------------------------|----------------------------------|
| Ziel | Web-Workflows (Formulare, Admin-UIs, QA, Recherche) | Beliebige Desktop-Apps |
| Runtime | Gehosteter Browser (z. B. Browserbase / Steel / eigenes Chromium-Pool) | VM/Container mit Desktop (VNC/WebRTC) oder Cloud-Desktop |
| Wahrnehmung | Screenshot / DOM-Snapshot / Accessibility-Tree | Screenshot (+ optional A11y) |
| Aktion | navigate, click, type, scroll, wait, tab | + Fenster, Apps starten, Dateien außerhalb Browser |
| Session | 1 Browser-Kontext / Tenant-Job | 1 Desktop-Session / Tenant-Job |
| Kosten / Ops | niedriger, schneller live | höher, Image-Pflege, GPU optional |
| Risiko | Domain-Allowlist, Credentials, Captcha | + Host-Escape, Malware, breitere Oberfläche |
| Cockpit | Live-View + HITL Approve für sensible Steps | gleich, plus Session-Record |
| XI-Fit | Port `:browser` / `computer.browser_*` Tools | Port `:desktop` / `computer.desktop_*` |
| Score/Factory | Job = Run; Erfolg = Task-Contract (URL-Ziel, Assertion) | gleich, schwerer messbar |

**Default-Pfad:** A zuerst. B nur wenn Browser-Use produktseitig nicht reicht.

## Architektur (Zielbild)

```
Cockpit (addxion-ai)
  → TanStack Tool / you>
  → @addxion/xi/core
  → XI Kernel HTTP Port
  → World-Adapter: BrowserRuntime | DesktopRuntime
  → Stream (Frames/Events) zurück ins Cockpit
```

Regeln (wie andere Kernel-Fähigkeiten):

1. HTTP-Port in Elixir zuerst  
2. Typed Client in `@addxion/xi/core`  
3. Cockpit Tool und/oder Live-Panel  
4. Tenant = `{orgSlug}-prod` — keine User-IDs als Isolate-Key  
5. Evolutionslogik bleibt Kernel; Runtime ist steckbare World

## Policy (Pflicht vor Prod)

- Feature-Gate (z. B. `operators.computer` oder `agentic.browser`)
- Domain-Allowlist / Blocklist pro Org
- Secrets nie im Prompt-Log; Credential-Broker getrennt
- HITL für Zahlungen, Deletes, externe Posts (konfigurierbar)
- Audit: wer hat wann welche Action ausgelöst
- Kill-Switch + Max-Dauer / Max-Cost pro Session

## Wellen (nur Merker)

1. **Hosted Browser MVP** — start/stop session, navigate/click/type, Screenshot-Stream, ein Normandy-/Operators-Panel, ein Chat-Tool-Set  
2. **Contract + Score** — Task-Assertions, Run in Factory, Budget  
3. **Full Desktop** — nur wenn Bedarf klar (nicht „weil cool“)  
4. **Isolate Cloud** — Sessions persistieren / skalieren jenseits eines Hosts — Decision: [isolate-cloud.md](isolate-cloud.md); kann Browser-Runtime hosten

## Explizit nicht

- Pi/OrbStack als Computer-Use verkaufen  
- Agent steuert den Laptop des Users ohne Käfig  
- Computer-Use ohne Policy/HITL in Prod  
- Parallel-Plan nur im Kernel-Repo — SSOT bleibt Collective (`addxion-os`)

## Offen (wenn Umsetzung startet)

- Anbieter vs. self-hosted Chromium  
- Stream-Transport (SSE Frames vs. WebRTC)  
- Ob Browser-Port unter Isolate hängt oder eigener Supervisor  
- Preis-/Quota-Modell pro Org
