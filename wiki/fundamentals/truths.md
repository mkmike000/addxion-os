---
type: fundamental
title: Truths
description: Registry der Plattform-Wahrheiten. IDs referenzieren, nicht paraphrasieren.
status: active
owner: shared
updated: 2026-08-26
tags: [fundamental]
sources:
  - id: docs-truths
    resource: addxion-docs/src/content/docs/ecosystem/truths.md
    title: Truths — Plattform-Wahrheiten (Herkunft)
---

Herkunft: Starlight-Registry in `addxion-docs`. Volltext gilt **hier**. Überall sonst `T-…` nennen.

Truth = was gilt. Handlung = `AGENTS.md` und Agent-Abschnitte auf den Wiki-Seiten.

# Meta

### T-TRUTHS-SSOT

Eine Heimat: diese Datei. Keine parallele Wahrheiten-Sammlung in anderen Repos.

### T-DOC-SECTIONS

War: jede Starlight-Seite `## Truths` + `## Für Agents`. **Deprecated** — Starlight ist nicht mehr SSOT. Wiki-Dateien: Frontmatter laut [AGENTS.md](../../AGENTS.md).

### T-AGENTS-REPO

Jedes Build-Repo hat ein `AGENTS.md` mit Verweis auf relevante Truths **in diesem Wiki**, nicht als zweite Quelle.

### T-PLATFORM-SSOT

Plattform-Wahrheit lebt in **diesem Repo**. Instanzen verlinken hierher, speichern Wissen nicht erneut.

# Ökosystem

### T-NORTH-STAR

Durchgängiges Nutzererlebnis über süper, addxion.ai und addxion.com. Gleiche Design-Sprache, gemeinsame Auth, **getrennte App-Daten** pro Produkt.

### T-MAINTAIN

Einmal pflegen. Shared Packages vor parallelen Kopien. Ausarbeitung: [Einmal pflegen](../patterns/einmal-pflegen.md).

### T-REPO-BOUNDARY

Jedes Repo hat eine klare Verantwortung. [Repo-Grenzen](../patterns/repo-grenzen.md).

### T-DOCS-SYNC

Ökosystem-relevante Code-Änderung: Wiki in diesem Repo im gleichen Zyklus aktualisieren. Der alte Starlight-PR-Prozess gilt nicht mehr.

# Packages

### T-PKG-NEON

Öffentlicher Name: `@addxion/neon`. `@addxion/core` ist interne Engine, kein Consumer-Einstieg.

### T-PKG-SHELL

`@addxion/shell` = Nutzer-Schnittstellen-Schicht (Layout, Chat, Command). Nicht bash/zsh. Chat ist Shell-Komponente, keine Feature-Seite. Gates: `@addxion/auth/gates`.

### T-PKG-XI

XI = Cross Intelligence. `@addxion/xi` = TS-SDK: Subpaths `protocol` und `core` (Port zum Elixir-Kern `addxion-xi`). `nav` ist entfernt. Kein UI.

### T-EVOLUTION-CORE

XI Core (Repo `addxion-xi`) ist der portable Evolutions- und Swarm-Kern: mutieren → trialen → scoren → committen; Versionierung, Rollback, Turso-Memory pro Agent. Apps sind Welten hinter Ports. `@addxion/xi/core` ist der TypeScript-Port, nicht die Evolutionslogik und kein Chat-Ersatz.

### T-PKG-AUTH

`@addxion/auth` = Identity-SSOT inkl. React-Gates. Kein paralleles Auth-Schema in Consumern.

### T-PKG-AI

`@addxion/ai` = LLM-SSOT (Streaming, Message-Typen). Keine Shell-, Scroll- oder Produkt-Prompts im Package.

### T-PKG-BEHAVIOR

`@addxion/behavior` = Scroll- und Interaktions-Entscheidungen, framework-agnostic. Kein React-DOM.

### T-PKG-BOUNDARY

Package-Grenzen ohne expliziten Vertrag nicht überschreiten. Tabelle: [Ökosystem](../platforms/oekosystem.md).

# Navigation und UI

### T-NAV-MANIFEST

App-Navigation: `manifest.ts` pro App + app-lokale Resolver. Kein `@addxion/xi/nav`.

### T-NAV-THREE

Drei Schichten: App-Manifest, Content-Nav (früher Starlight), Shell-Rendering. Nicht vermischen.

### T-NAV-DOCS

War: Starlight-Sidebar = Content-Nav. **Deprecated** mit addxion-docs.

### T-SHELL-PAGEHEADER

`PageHeader`-Struktur in `@addxion/shell`. Titel pro App aus `manifest.ts` via `resolveSection`. Keine lokalen Forks.

### T-SHELL-ICONS

App-UI-Icons: `lucide-react`. Mapping in der Consumer-Shell, nicht in `manifest.ts`.

### T-UI-BORDERED

Bereiche trennen über eine geteilte 1px-Linie, nicht über Schatten oder floating Cards. Layout-Container eckig; interaktive Elemente dürfen gerundet bleiben.

### T-UI-SSOT

Wiederkehrende Design-UI in `@addxion/components`. App-Chrome in `@addxion/shell`. XI ist Glue, kein UI. Dieselbe Pill/Card/Band/Eyebrow — komponieren. Phase: dark monochrome. Token-Rollen statt Hardcode-Hex. Ausarbeitung: [UI-SSOT](../patterns/ui-ssot.md).

### T-UI-ARIA

Interaktions-Primitives = React Aria. Kein Base UI, kein Radix, **kein Untitled UI als Ziel**. UUI in addxion.ai ist Altbestand und wird entfernt. Neon `shadcn-bridge.css` ist CSS-Token-Mapping, kein Kit.

# Daten und Brand

### T-DATA-AUTH-SHARED

Identity (User, Session, Org, Grants) ist ökosystem-weit geteilt (`addxion-auth`).

### T-DATA-APP-ISOLATED

Produkt-Daten sind pro App isoliert. Kein Cross-Product-Leak.

### T-BRAND-STRATEGY

Markenstrategie nur in [Branding](../branding.md). Marketing-Copy in addxion-com folgt, formuliert die Strategie nicht neu.

### T-NEON-BRAND

Product-Brand-Deltas (`electric`, `cream`, …) in Consumer-`brand.css`. Keine Kundenmarke in Neon Meta.

### T-NEON-PLATFORM

Platform Foundations in `@addxion/neon/brands/addxion.tokens.json` (+ generiertes CSS). Apps importieren und überschreiben nur Deltas.

### T-NEON-FONTS

Keine Google Fonts. Self-hosted Inter aus `@addxion/neon/fonts/inter.css`. System-Schrift hat Vorrang.

### T-NEON-SECTIONS

Versionierte Sections (`hero-v1`, `features-v1`) nicht in-place überschreiben — neue Version anlegen.
