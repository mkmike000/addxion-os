---
type: pattern
id: zero-touch-schicht
title: Zero-Touch-Schicht
description: Eine Anbindung, kein zweites System. Mensch nur bei Geld und 1-way.
status: draft
owner: mike
updated: 2026-09-29
tags: [pattern]
sources:
  - id: chat-2026-09-29-2
    resource: raw/fokus-premium-jonas-2026-09-29.md
    title: Fokus Premium und Jonas
---

Kunde bleibt auf Shopify. Ein Widget. Bild und/oder Text gehen an einen Cloudflare-Worker. Der Worker schreibt in die Kundenakte ([Kunden-Ops-Inbox](kunden-ops-inbox.md)). Antwort geht zurück in den Shop. Mike pflegt keine Tickets. Kunde lernt kein neues Tool.

Mensch nur bei: Zahlung, Kill, Scope-1-way.

Nicht: zweites Dashboard für den Kunden, manuelles Inbox-Sortieren, kleines Tuning pro Shop.

Passt zu [Shopify-KI-Support](shopify-ki-support.md).

# Großer Schnitt statt kleiner

Ein Vertrag für alle Shops: Payload (Bild, Text, Shop-ID, Kunden-ID), Antwort (Text, optional Bild), Fehler. Zweiter Shop ist Konfig, nicht Bau.

# Offen

- Ziel: Widget live bei Jonas, gleicher Vertrag für Premium.
- Ist: Bedarf genannt, Vertrag nicht gebaut.
- Lücke: ein Repo, ein Worker, ein Widget-Snippet.
- Zu klären: Heimat addxion.ai vs. XI.
