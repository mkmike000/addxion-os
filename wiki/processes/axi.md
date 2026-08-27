---
type: process
title: AXI
description: Agent-CLIs nutzen und formen. Kein Katalog im Kernel, keine zweite Prinzipien-SSOT.
status: active
owner: shared
updated: 2026-08-27
tags: [process]
sources:
  - id: axi-principles
    resource: https://axi.md/
    title: AXI — Agent eXperience Interface
---

AXI ist Design für Agent-CLIs. Nicht Produkt, nicht Kernel-Port, nicht MCP.

Prinzipien: [axi.md](https://axi.md/). Nicht hier abschreiben.

# Bindung

| Bindung | Bedeutung | Hier |
| --- | --- | --- |
| **Nutzen** | Existierende AXI-CLI auf der Maschine | Cursor-Host: `gh-axi`. Pi-Workspace: dieselben CLIs, nur wenn `allow_bash` an ist |
| **Formen** | Eigene CLI an die Prinzipien (Live-Stand, Exit-Codes, `count`, `help[]`) | `xi runs` · `xi metrics` · `xi status` |
| **Bauen** | Eigenes `*-axi`-Package | nicht |
| **Nicht** | Agent editiert Dateien | Kernel, Auth, Neon, Chat-UI, Kunden-Sites |

Einmal Host, gilt für alle Repos. AXI nicht in Kundenrepos vendorn. Kernel vendort den Katalog nicht.

# GitHub

Agents: `gh-axi`, nicht `gh`. Setup: `gh-axi setup hooks` (opt-in).

# MCP

MCP holt und prüft das Wiki: [MCP](mcp.md). Query-MCP nicht, solange Git oder eine os-CLI reicht. AXI ersetzt MCP nicht als SSOT-Thema.

# Kernel

Pi darf AXI-CLIs in der Workspace execen (`XI_PI_ALLOW_BASH` / OrbStack-Käfig). Code: Repo `addxion-xi`. Wissen: [addxion-xi](../platforms/addxion-xi.md).
