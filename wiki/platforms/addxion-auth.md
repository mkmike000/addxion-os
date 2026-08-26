---
type: platform
title: addxion-auth
description: Identity-SSOT. Package @addxion/auth.
status: active
owner: shared
updated: 2026-08-26
tags: [platform]
sources:
  - id: docs-auth
    resource: addxion-docs/src/content/docs/ecosystem/packages.md
    title: Package-Grenzen Auth
  - id: auth-readme
    resource: addxion-auth/README.md
    title: Auth-API vs Login-UI
---

Schema, Permissions, Session, Orgs, Grants, React-Gates (`./gates`). Eine Auth-DB (`addxion-auth`). Live in der Herkunft inkl. `app_registry` / `app_grant`.

# Routing

Login-UI kommt aus `addxion-ai`, ausgeliefert unter `auth.addxion.ai` (und `auth.addxion.com`). API: Worker `addxion-auth` (`/api/auth/*`, D1). `addxion.ai/login` → 302 → `auth.addxion.ai/login`. How-to bleibt im Auth-README.

# Grenzen

Keine Produkt-Tabellen. Kein zweites Better-Auth-Schema in Consumern.

# Truths

[T-PKG-AUTH](../fundamentals/truths.md), [T-DATA-AUTH-SHARED](../fundamentals/truths.md).

# Agent-Regeln

Identity nur hier erweitern, nicht in süper oder addxion-com nachbauen.
