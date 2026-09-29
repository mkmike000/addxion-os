---
type: company
id: stadichair
title: Stadichair
aliases: [Studichair, Studycher, Study Chair]
description: Kunde Jonas Braamt. Shopify. KI-Agent Bild+Text zu Stuhl-Gerüsten.
status: active
owner: mike
updated: 2026-09-29
tags: [company]
sources:
  - id: stand-2026-09-06
    resource: raw/relations-stand-2026-09-06.md
    title: Relations-Stand 2026-09-06
  - id: chat-2026-09-29
    resource: raw/gespraeche-felgen-stadichair-2026-09-29.md
    title: Gespräche 2026-09-29
---

Kunde. Name so genannt. Bestandskunde und Upsell. Shop auf Shopify. Will kein eigenes System. Relativ guter Umsatz.

Stand 2026-09-06: drei Löschversuche an Google-Bewertungen — zwei 1-Sterne entfernt; eine abgelehnt (früherer Versuch); eine neue Bewertung (Niederlande) entfernt. [Bewertung-Scan](../../patterns/bewertung-scan.md) auf addxion.com für Jonas relevant, Produkt noch Aufbau (Google-API ausstehend).

Stand 2026-09-29: Bedarf KI-Agent. Kunde sendet Bild plus Textfrage zum Stuhl-Gerüst. Widget auf Shopify. Verarbeitung auf ADDXION-AI über Cloudflare. Soll in Kunden-Ops (Inbox, Score) landen, nicht als isoliertes Ticket-Tool bleiben.

# Personen

- [Jonas Braamt](../people/jonas-braamt.md)

# Instanzen

- Shopify-Shop (Instanz beim Kunden).
- Geplant: Widget Shopify → Worker Cloudflare → addxion.ai.

# Vergleich

Neben [Felgenimperium](felgenimperium.md): gleiche Schicht, anderer Fall. Muster: [Shopify-KI-Support](../../patterns/shopify-ki-support.md). Zielbild Ops: [Kunden-Ops-Inbox](../../patterns/kunden-ops-inbox.md).

# Offene Punkte

- Ziel: Bewertung-Scan nutzbar; KI-Agent Bild+Text live an Shopify; zweite Automation nur nach Bedarf.
- Ist: manuelle Löschungen teils erfolgt; Agent und Google-API unfertig.
- Lücke: Schnitt Widget → Cloudflare → addxion.ai; Rechtsweg Löschen; Prioritätsformel in der App.
- Zu klären: Scope Agent vs. Bewertung-Scan; wer Host der Kundenakte ist.
- Queue: [ops/opportunities.md](../../../ops/opportunities.md), [ops/waiting.md](../../../ops/waiting.md).
