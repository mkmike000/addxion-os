# Log

Agenten-Digest. Neueste oben. Git bleibt die Versionierung.

## 2026-08-26

- done: Inbox — Firecrawl für Fahrschulen installieren, Wahib’s Angebot fertigstellen, Notion-Daten zum OS übertragen.

## 2026-08-24

- decision: Prio-Formel = Notion-Logik (ohne Deadline → Score 0; sonst (B+R)*min(10,10−Tage/7)/max(1,A^0.35)). Alte Boost-Formel verworfen. Tickets in ops neu gescored.
- decision: Relations-Queue nachgezogen — `wiki/clients/` gibt es nicht mehr; CRM-Name verworfen; Inhalt der alten Idee „CRM-light“ liegt in `wiki/decisions/relations-ops.md`. Keine parallele Datei `crm-light-ops.md`.
- lint: Log-Historie erwähnte noch `wiki/clients/` und `crm-light-ops.md` als offene Migration — Status: erledigt (Relations).
- ingest: Klarstellung Mail-Entlastung = n8n-Mail-Automation-Instanz für Grafik-Werkstatt (nicht nur abstraktes Pattern). Datei: `wiki/relations/companies/grafik-werkstatt.md`.
- decision: Dieses Repo ist Knowledge-SSOT, nicht SSOT für Instanzen (n8n, Webflow, Kunden-Repos). README und `eine-ssot` an Realität.
- done: GitHub-Sicherung — privates Repo `addxion-os` unter mkmike000.
- decision: Firma hat `id` Pflicht (gleich Dateiname, Slug). Alle Firmen-Dateien nachgezogen. Zahl nur bei Namenskollision. Kein `c-…`.
- decision: Personen-Datei = Vorname-Nachname (Slug); kein `p-firma-…`. Zahl nur bei Namenskollision. Alle bestehenden Personen umbenannt.
- ingest: Alex Fauther — Kollab, Firma ADDXION; Identität und Decision Relations nachgezogen. Besitz der Vorhaben weiter unbekannt.
- ingest: IDS-OWL/Levent Cakici (`levent-cakici`, Website damals Kollab); Zaungigant/Alper Cakici (`alper-cakici`, zaungigant.de); Brüder, Verhältnis zur Kollab in Ordnung.
- ingest: Relations-Batch — Cleany/Ogulcan, MotionMovies/Marlon, Emilia/Polakowska, Project111/André, ad.work/Stanislaw, smptgroup/Naramsin, Ninos Fahrschule/Ninos, FlashSites/Hakan+Stacket gesperrt, Weebal/Lukas Sunderkötter, ADDXION/Mike (vorher Agentur Kaufmann), Go-User ohne Person, Agetwo/Dino, Maervlin/Marvin+maervlin.de, Improdent/Deppe (Dino bezahlt, Dominic hostet), Visiondesign/Dominic, Butchers/Mario+Live, Pekobau Name offen via Stani, LA-Tools/Andreas via André. Geburtstag Marvin nicht gespeichert.
- ingest: Zalin-Falafel — Webflow `zalin-falafel.webflow.io` (Kollab für Onur); Live-Site einmal optimiert. Instanz an der Firma, nicht zweite Org.
- ingest: Hagelganz + Konstantin Richter. Zalin Products GmbH (Sites zalin.de, zalin-falafel.de) — Besitzer Sabo, Onur arbeitet dort, Simon bekannt über Onur. Opportunity Partnerschaft Onur, nicht beschlossen.
- ingest: Prozess MCP — Adapter für Ingest/Lint, Query erst mit XI-/AI-Brücke. Datei: `wiki/processes/mcp.md`.
- ingest: MVC Holding; GF Ammar, Einfluss Ilham; Benteler Motors Anteile Holding + David, Quote unbekannt. Wahib Nachname Yousef, `id` unverändert.
- ingest: Person `wahib-yousef`; Opportunity/Waiting Website Wahib D: 2026-09-01 (Rückkehr Urlaub). Kunde Real Service GmbH + Owner `tolga-bozkurt`.
- ingest: Fundamental `lean` → `lean-agile` (Lean + Agile in einer Datei, Alias Lean).
- ingest: Frontmatter `aliases` (Obsidian-Prinzip: andere Namen derselben Sache, nicht anderer Schlüssel). Belegt an Salon L'Amour, Lackiertechnik GROSS, Soul Kitchen, Weebal, FS-Wine, Bäumer.
- decision: Bereich heißt Relations, nicht CRM. Firma ↔ Person verlinkt. Webflow-Staging = Instanz. Datei: `wiki/decisions/relations-parties.md`.
- ingest: Lead Bäumer-Motorgeräte + Person `thorsten-baeumer` (Inhaber, öffentlich genannt). Webflow-Ordner Kunden & Partner: bestehende Firmen um Staging ergänzt; neu 100achtzig, ids-owl, maervlin, motionmovies, stillsmotion, weebal.
- decision: Firma vs. Person vs. Opportunity. Person-Schlüssel ist `id`, nicht der Name. Opportunities in `ops/opportunities.md`.
- ingest: Kunden-Stubs pekobau, soulkitchen-bielefeld, handyfix24, fs-wine, salon-lamour, vanego, burger-weber, lackiertechnik-gross. Nicht in TwentyCRM.
- ingest: Lead Fahrschule am ZOB (`tags: [lead]`). Twenty-Opportunities Figma/Stripe/… sind gelöschte Demo-Daten, nicht ingestiert.
- ingest: Client-Stubs und Twenty-Namen nach Relations migriert (kein `wiki/clients/` mehr).
- ingest: Plattform-Wissen aus `addxion-docs` verdichtet (Truths, Branding, Ökosystem, Packages, Patterns). Komponenten-Kataloge bleiben in `addxion-neon`.
- decision: `addxion-docs` keine SSOT/Plattform mehr. Datei: `wiki/decisions/docs-ssot-hier.md`. T-PLATFORM-SSOT zeigt hierher.
- done: Plattform-Datei `wiki/platforms/addxion-docs.md` entfernt.
- lint: Routines-Eintrag „Docs einziehen“ gestrichen; Inbox-Ticket Repo stilllegen.
- ingest: Knowledge-SSOT umgebaut — `raw/` / `wiki/` / `ops/`, Root-`index.md`, Ingest/Query/Lint in `AGENTS.md`.
