---
type: pattern
title: Sites Host plus Slug
description: Keine globalen Slugs. Kunde im Host, Seite im Pfad.
status: active
owner: mike
updated: 2026-09-28
tags: [pattern, sites, dns]
sources:
  - id: chat-2026-09-28-sites
    resource: raw/sites-hosts-2026-09-28.md
    title: Roh Sites Hosts
---

Gilt mit [Sites Hosts](../decisions/sites-hosts.md).

Zwei Kunden, gleicher Slug `vergleich-13`:

```text
sites.com-solution.de/vergleich-13
sites.chsoptima.de/vergleich-13
```

Kein Streit. Test ohne Kunden-DNS:

```text
sites.addxion.ai/com-solution/vergleich-13
sites.addxion.ai/chsoptima/vergleich-13
```

`sites.addxion.ai/vergleich-13` existiert nicht.
