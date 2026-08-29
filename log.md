# Log

Agenten-Digest. Neueste oben. Git bleibt die Versionierung. Eine Chronik: ab 2026-08 diese SSOT; davor die alte Docs-Chronik, verdichtet.

## 2026-08-29

- ingest: Gebietspaket (schwierige Stellen im Prüfgebiet). Roh: `raw/gebietspaket-2026-08-28.md`.
- decision: Kein Staatsauftrag / kein BMV-Monopol. Datei: `wiki/decisions/gebietspaket-kein-staatsauftrag.md`.
- done: Pattern Lizenz, Prozess Pilot+Messung+Phasen, Prozess Fahrlehrerverbände. Opportunity Pilot Wahib's. Nicht in Doing.

## 2026-08-27

- decision: Doing braucht Tür `2-way` | `1-way`. 1-way nur mit Decision. Clix = 2-way. `raw/story/` für Erzählung, nicht Wiki.
- decision: Constraint und Auftrag in Ops — eine Engstelle in `ops/index.md` (jetzt `—`, Mensch setzt). Doing nur mit Absicht und Fertig-wenn. Dateien: `wiki/processes/ops-constraint.md`, `wiki/decisions/ops-intent-constraint.md`. Inbox nicht nachgezogen. Clix-Doing um Auftrag ergänzt.
- done: AXI-Bindung — Prozess `wiki/processes/axi.md`, Abgrenzung in mcp.md. Host `gh-axi`. Kernel formt `xi runs`/`metrics`/`status`; Pi darf AXI-CLIs nur bei `allow_bash`.
- decision: Parken = Ticket + Wiki-`# Offen` (Ziel, Ist, Lücke, Zu klären). Kein Essay in ops. Pickup-Beispiel: wissen-sync Git/CI.
- done: Design-Sync-Hook (`addxion-os/.cursor/hooks/design-sync.mjs`). com+ai: Turn-Ende ohne Wiki oder Instanz-Notiz → Follow-up.
- done: Wissen-Sync: com-Grammatik (Hairline, Rail, Zeitachse) im gleichen Chat wie der Code, sonst driftet der nächste Consumer.
- done: `addxion-com/MASTERPLAN.md` entfernt. IA/Redirects/Zeitachse/FAQ nach `wiki/platforms/addxion-com.md` nachgezogen (beim ersten Ingest verdichtet verloren). Ausführung nur `AGENTS.md`.
- ingest: Kumo Design-Skill (https://kumo-ui.com/skill/). Roh: `raw/kumo-design-skill.md`. Craft nach `wiki/design.md` verdichtet. Kumo bleibt Cloudflare-Kit, nicht unser System (kein Base UI, keine 14px-Pflicht, Headings 400). Skill installiert: `~/.agents/skills/kumo-design`.
- done: OrbStack-Live: `orb run` (CLI-Fix), Linux-Node+pi unter `/work/.xi`, Provision/exec/`pi --version` im Käfig grün.
- done: `addxion-xi/MASTERPLAN.md` entfernt. Hinweise nur `AGENTS.md`.
- ingest: Kernel-Plan vollständig in `wiki/platforms/addxion-xi.md` (nicht verdichtet): API, CLI, Turso, Envelope, Evolutionsstufen, Cockpit, Prinzipien, Später-Backlog inkl. Agenten-Internet. STATUS_MAP / BRAIN_FACTORY / DOMAIN_INTELLIGENCE / TENANT / BRAIN_SCHEMA mitgezogen.
- done: Gründungsordner `ninos-fahrschule/` aus der Knowledge-SSOT entfernt (Businessplan, Finanzplan, Fuhrpark). Wiki-Verdichtung und `raw/ninos-fahrschule-briefing.md` bleiben.

## 2026-08-26

- ingest: Ninos Fahrschule Gründung — Ordner `ninos-fahrschule/` (Businessplan, Fuhrpark, Finanzplan). Roh: `raw/ninos-fahrschule-briefing.md`. Firma und Person nachgezogen. Klassen B/BE/A, E-Automatik+AHK, BMW 218d Schalter, Anhänger 810 kg, Kräder A/A2/A1 plus 50-cm³-Roller. Planinvest 140.000 €.
- done: Zweit-Clone `/Users/adx01/addxion-os` nach `Documents/GitHub/addxion-os` gemergt und gelöscht. Twenty-Ingest übernommen; Design-Commits und Marth blieben.
- done: Twenty-Instanz gekillt — Neon-Projekt TwentyCRM gelöscht, DNS/Tunnel `crm.addxion.com` entfernt, lokaler Clone und LaunchAgent weg. GitHub `twenty-addxion` noch da (Token ohne `delete_repo`).
- ingest: TwentyCRM Neon vollständig gelesen. Echt: Wahib's Fahrschule, Fahrschule Senkhorst, The Butchers OWL; Personen Wahib Yousef, Martin Senkhorst (neu), Mario Funke (GF); Deal Website & Bilder, Videos 7.000 EUR. Demo Figma/Stripe/… nicht verdichtet. Roh: `raw/twenty-crm-neon-inventory.md`. Instanz Twenty darf nach diesem Stand gekillt werden.
- ingest: Lead Michael Marth Band + Person `michael-marth` (Frontmann). Site WordPress michael-marth-band.de. Wunsch AEO/GEO bzw. Anfragen „Hochzeitsband buchen“; 3,5k abgelehnt; BAFA erwähnt. Opportunity + Inbox Angebot klären.
- done: addxion-docs stillgelegt — GitHub archiviert, CF Pages-Projekt gelöscht, CNAME `docs.addxion.com` entfernt. Keine Redirects.
- decision: Untitled UI ist kein Ziel. addxion.ai → Neon + React Aria; UUI nur Altbestand, bei Touch ersetzen.
- decision: Design-System = addxion-neon. Consumer bleiben com/ai/shopify. Starlight-Styles nicht ins System.
- ingest: Offene Ökosystem-Punkte aus alter Docs-Roadmap nach `wiki/platforms/oekosystem.md` (Accent, Neon-Vollmigration, Shopify-UX, Payload deferred, XI Core). Erledigte Phasen nicht kopiert.
- decision: Eine Design-SSOT `wiki/design.md`. com+ai ein Look. Shell und Behavior behalten (Code in neon). MASTERPLAN nur Ausführung. Docs ohne 301.
- ingest: Vision/Mission/Werte als leere Abschnitte in Branding. com-IA nach `wiki/platforms/addxion-com.md`.
- decision: Neon-Katalog nicht ins Wiki. Varianten/Props/Tokens bleiben Code + MCP in addxion-neon.
- ingest: Empfehlung aus Branding nach `wiki/processes/vertrieb.md`.
- done: Offener Punkt Fullstack vs Gateway geschlossen.
- ingest: Design-Language, UI-SSOT (Consumer-Typen), Privacy by Design, Marketing-Sites, Auth-Routing, Consumer-AGENTS-Vorlage. Quellen addxion-docs / addxion-auth README. Branding-Kurzabsatz zeigt auf das Pattern. com-MASTERPLAN vs Wiki-Gateway als offener Punkt an der Platform-Datei, nicht überschrieben.
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

## 2026-07-30

- done: CardRoot und CardWrapper in `@addxion/components/react`. neonline auf CardRoot; Wrapper = Border-Gap, nicht full-bleed. Modes `full-bleed` | `fill`. GenUI: TanStack AI → AiUiTree → Wrapper + Cards. Lab `/lab/card-root`.

## 2026-07-23

- done: Bordered Grid als Utility in `@addxion/neon` (`.bordered-grid`, Export `bordered-grid.css`). com importiert das Slice statt lokaler Kopie.

## 2026-07-22

- decision: T-EVOLUTION-CORE. XI Core = portabler Evolutionskern; `xi/core` nur Port. Kein Chat-Ersatz, kein Merge der Mechanik ins TS-Package.

## 2026-07-21

- decision: T-UI-BORDERED. Trennung über 1px Background-Gap, nicht Schatten-Karten.

## 2026-07-20

- decision: T-BRAND-STRATEGY. Marke (Produkt, Zielgruppe, Story, Archetype) als SSOT; `brand.css` bleibt Instanz. Damals in addxion-docs; gilt seit 2026-08-24 in diesem Wiki.

## 2026-07-14

- done: Öffentliche Changelog-Seite in Starlight (Commit-Stil). Abgelöst durch dieses File.

## 2026-06-15

- done: addxion-docs auf Starlight plus Neon-Tokens (Sidebar, Bridge, Docs-Command-Palette).

## 2026-06-01

- decision: Plattform-Wahrheit nach addxion-docs (Migration von addxion-com). Truths-Registry und Docs-Sync. Gilt nicht mehr: 2026-08-24 dieses Wiki.

## 2026-05-20

- done: Packages `@addxion/shell`, `@addxion/behavior`, `@addxion/xi` (protocol, damals nav). `manifest.ts` statt hardcodierter Nav. Shell-Extraktion aus süper gestartet. `@addxion/xi/nav` später entfernt.

## 2026-05-01

- done: addxion-docs auf Cloudflare Pages. Öffentliche URL damals `addxion.com/docs`.
