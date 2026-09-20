---
type: platform
title: süper
description: Lebende Fahrschul-App. Ziel White-Label auf addxion.ai.
status: active
owner: shared
updated: 2026-09-20
tags: [platform]
---

# Ist

Eigene Next-App. Repo `super`. Host `süper.app` (`xn--sper-0ra.app`). App-D1 `super-app` (`FAHRSCHULE_DB`). Auth-D1 dieselbe wie ai: `addxion-auth`. Eigenes `/login`.

Routen leben **hier**, nicht in [addxion-ai](addxion-ai.md): `/theorie-pruefung`, `/fortschrittskarte`, `/analysen`, `/kurse`, `/muster`, `/schueler`, plus `/onboarding`, `/profil`, `/diagrammkarte`, `/richtlinien`. Nav-SSOT: `src/manifest.ts`.

Chrome-Ist: `@addxion/shell`. Siehe [addxion-shell](addxion-shell.md).

# Ziel

Keine eigene App mehr. Fahrschul-Domäne als Pack `fahrschule` in [addxion-ai](addxion-ai.md). `süper.app` dann **White-Label** derselben App für eine Fahrschul-Organisation: eigene Domain, gleiches Produkt.

Schule = Organisation. Lehrer steuert Karten der Schüler. Redirects von `xn--sper-0ra.app` nach addxion.ai, sobald die Domain auf der neuen Surface steht.

Nicht jetzt: Routen nach ai kopieren. Erst Chrome, Schema-Vertrag, dann Route für Route.

# Später

Lehrer-CRUD Termine und Fahrstunden. White-Label-Domain pro Schule.

# Truths

[T-DATA-APP-ISOLATED](../fundamentals/truths.md), [T-NAV-MANIFEST](../fundamentals/truths.md), [T-PKG-AUTH](../fundamentals/truths.md).
