---
type: platform
title: addxion-app
aliases: [XI Desktop, XI Dev, native Operator-Konsole, GPUI-Konsole]
description: Native Operator-Konsole (Rust, GPUI). Zeigt Kernel und Trading-Service, ersetzt keine Web-Fläche.
status: active
owner: mike
updated: 2026-11-24
tags: [platform, gpui, rust, desktop, xi]
sources:
  - id: app-repo
    resource: mkmike000/addxion-app
    title: addxion-app
---

# Zweck

Native Desktop-App für Operator und Power-User: dichte Listen und Live-Updates, wo der
Browser der Engpass ist. Die Web-Fläche bleibt `addxion-ai`. Kein zweites Cockpit, keine
Domain-Logik, kein mitgelieferter Kernel.

Entscheidung: [XI Clients](../decisions/xi-clients.md).

# Stack

- Rust, GPUI Kit + **GPUI Fast** (Feature `gpui-fast` bzw. Crate `gpui-fast`)
- Cargo-Workspace mit drei Crates
- Release: Tag `v*` → macOS Universal-DMG, Windows-ZIP, Linux-tar.gz → R2
  `addxion-downloads/xi-desktop/<version>/` + Manifest `latest.json` für `addxion.ai/download`

# Crates

| Crate | Rolle |
| --- | --- |
| `xi-client` | HTTP + SSE zum XI-Kernel. Vertrag wie `@addxion/xi/core`, JSON-Envelope `{success,data,error}` |
| `xi-trading-client` | HTTP zum `addxion-trading` FastAPI. Rohes JSON, eigener Fehlermapper |
| `xi-desktop` | Die App: Workbench, Tabs, Theme, Texte |

Beide Clients sind blockierend (`reqwest::blocking`) und ohne UI, damit sie ohne GPUI testbar
bleiben. Aufrufe laufen in einem Thread, die UI bekommt das Ergebnis über einen Slot zurück.

# Tabs (Stand 2026-11-24)

| Tab | Quelle | Inhalt |
| --- | --- | --- |
| Fabrik | Kernel | Status, Kennzahlen, letzte Läufe |
| Schwärme | Kernel | Schwarm starten/beenden, Rollen |
| A2A | Kernel | Nachricht zwischen Agenten, Live-Strom der Session |
| Rezepte | Kernel | Rezepte, Pipeline-Läufe mit Freigabe |
| Paper | Kernel | Trockenlauf, Score + PnL |
| Handelsplatz | Kernel (`/api/v1/venues/book`) | Orderbuch, Live-Zyklus |
| Trading | `addxion-trading` (`https://trading.addxion.ai`) | Portfolio, SystemState, Units; Unit-Pause und Not-Aus schaltbar |

„Handelsplatz" und „Trading" sind **zwei verschiedene Datenwege** und bleiben getrennt. Der
Kopf der App zeigt je nach Tab die passenden Felder (Kernel-Adresse + Mandant, oder
Trading-Adresse + `org_id`).

# Konfiguration

| Variable | Standard | Bedeutung |
| --- | --- | --- |
| `XI_KERNEL_URL` | `https://xi.addxion.ai` | Kernel |
| `XI_TENANT_ID` | leer | Mandant, z. B. `acme-prod` |
| `XI_TRADING_URL` | `https://trading.addxion.ai` | Trading-Service |
| `XI_TRADING_ORG` | `demo` | `org_id` |
| `XI_TRADING_SECRET` | leer | Bearer, muss dem `ADDXION_TRADING_SECRET` des Service entsprechen |

# Sprache

Oberfläche Deutsch, Kernel-API englisch. Die Zuordnung steht an genau einer Stelle,
`crates/xi-desktop/src/text.rs`; alle sichtbaren Texte kommen von dort. Kernel-Typen
(`Run`, `Swarm`, `Recipe`, `Venue`) bleiben als Lehnwörter, weil die API sie so benennt.

# Design

Monochrome Tokens aus `addxion-ai` in `crates/xi-desktop/src/theme.rs` (`addxion_dark()`).
Hairline, kein Accent-Creep, Dark-first. Siehe
[Design System Transfer](../decisions/design-system-transfer.md).

# Icons

Quelle `assets/icons/source/xi-mark-1024.png`. Alle Formate werden generiert, nie von Hand
gepflegt: `scripts/make-icons.py` baut sie, `check-icons.py` prüft in der CI,
`preview-icons.py` erzeugt ein Sichtblatt. Plattformen behandeln Kanten unterschiedlich
(macOS transparent mit Innenabstand, iOS randlos ohne Alpha).

# Entwicklung

```bash
cargo dev                                   # App starten (Alias aus .cargo/config.toml)
scripts/dev-app.sh XI_TRADING_ORG=demo      # als .app-Bundle, für Dock-Icon
cargo test-client                           # Client-Tests, das was die CI fährt
python3 scripts/check-icons.py              # Icon-Formate
```

CI läuft `cargo test -p xi-client`, `cargo test -p xi-trading-client` und den Icon-Check.

# Grenzen

- Kein Kernel im Bundle, kein NIF. Default ist der Remote-Kernel.
- Keine UI im Kernel, keine Domain-Logik in der App.
- Kein Auto-Update (Download über `addxion.ai/download`, dann manuell).
- Audio und LiveKit sind Platzhalter.
- Das Trading-Repo bleibt die Quelle der Wahrheit für Flotten-Daten; die App liest nur.

# Related

- [XI Clients](../decisions/xi-clients.md)
- [XI Server zentral, Client dezentral](../decisions/xi-server-client.md)
- [Cockpit ↔ XI](../decisions/cockpit-xi.md)
- [addxion-trading](addxion-trading.md)
- [addxion-xi](addxion-xi.md)
