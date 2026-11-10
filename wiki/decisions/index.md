# Decisions

Bewusste Festlegungen.

* [Design System Transfer](design-system-transfer.md) — Monochrome-Tokens von addxion-ai nach addxion-app
* [XI Server zentral, Client dezentral](xi-server-client.md) — Kernel zentral, Rust-Worker, TanStack bleibt
* [XI Clients](xi-clients.md) — Web + Native getrennt vom Elixir-Kernel
* [i18n de und en](i18n-de-en.md) — Sprache, Markt, Inhalt getrennt. Default `de`, zweite Sprache `en`
* [Heimat addxion.ai](heimat-ai.md) — Produkt auf `.ai`, `.com` nur 301, eine Frontend-App
* [Sites Hosts](sites-hosts.md) — Site = Row, Host+Slug, CNAME ohne Pfad, WfP, Collector getrennt
* [Landing öffentlich](landing-public.md) — Org-Datensatz, öffentliche Projektion, nicht auf dem Ads-Host
* [Landing-Inhalt](landing-content.md) — Row nicht Datei, kein `/w/`, XI nur Pointer
* [Agentic Loop](agentic-loop.md) — Loop-Objekt, XI konsumiert, Mensch an 1-way
* [Relations-Queue in ops](relations-ops.md)
* [Firma, Person, Opportunity](relations-parties.md)
* [addxion-docs ist keine SSOT](docs-ssot-hier.md)
* [Constraint und Auftrag in Ops](ops-intent-constraint.md)
* [Zwei Kanäle](zwei-kanaele.md) — this.type und addxion.ai
* [Kurs nach Nachfrage](kurs-nach-nachfrage.md) — Waitlist vor Produktion
* [Rechnung vs Checkout](rechnung-vs-checkout.md) — Verkauf vor dem Geld
* [Scope Marco Wiede drei Monate](scope-marco-wiede.md) — Entwurf; Name MW Complete, Partnerzugriff da
* [Swipe-Stack](swipe-stack.md) — Motion plus Embla; Three.js später
* [Jev-Heimat](jev-heimat.md) — Client in `@addxion/ai`, XI nur Port
* [Ads-Intake](ads-intake.md) — API Kern, Pixel Client; Host `ads.addxion.ai`
* [Effect v4 Server](effect-server.md) — Server-FNs/IO in addxion-ai mit Effect
* [Public vs App](public-vs-app.md) — Schaufenster Info, Auftrag in der App
* [Cockpit ↔ XI](cockpit-xi.md) — TanStack AI, `xi_*`-Tools, A2A-SSE
* [Computer-Use](computer-use.md) — später: Hosted Browser first, Desktop später
* [Isolate Cloud](isolate-cloud.md) — Käfig-Fabrik für Skalierung (nicht OrbStack allein)
* [Agentic Finances vs Trading](agentic-trading-rails.md) — Billing · Venues · A2A-Value
