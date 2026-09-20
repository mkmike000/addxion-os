---
type: platform
title: addxion-auth
description: Identity-SSOT. Package @addxion/auth in addxion-ai. D1 addxion-auth.
status: active
owner: shared
updated: 2026-09-20
tags: [platform]
sources:
  - id: docs-auth
    resource: addxion-docs/src/content/docs/ecosystem/packages.md
    title: Package-Grenzen Auth (Herkunft Starlight, archiviert)
  - id: auth-readme
    resource: addxion-ai/packages/auth/README.md
    title: Auth-API vs Login-UI
---

Kein Repo `addxion-auth`. Schema, Permissions, Session, Orgs, Grants, React-Gates (`./gates`): Package `@addxion/auth` unter **`addxion-ai/packages/auth`**.

Eine Auth-DB: D1-Name **`addxion-auth`** (Binding `AUTH_DB`). Worker = **`addxion-ai`** (dieselbe App). Hosts: `addxion.ai`, `auth.addxion.ai`.

# Routing

Login-UI und `/api/auth/*` kommen aus `addxion-ai`. Auslieferung unter `auth.addxion.ai` und `addxion.ai/login`. How-to: `addxion-ai/packages/auth/README.md`.

# Grenzen

Keine Produkt-Tabellen. Kein zweites Better-Auth-Schema in Consumern. Kein siebtes Auth-Repo.

# Truths

[T-PKG-AUTH](../fundamentals/truths.md), [T-DATA-AUTH-SHARED](../fundamentals/truths.md).

# Agent-Regeln

Identity nur im Package `addxion-ai/packages/auth` erweitern, nicht in süper oder addxion-com nachbauen.
