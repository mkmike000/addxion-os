# Log

Agenten-Digest. Neueste oben. Git bleibt die Versionierung. Eine Chronik: ab 2026-08 diese SSOT; davor die alte Docs-Chronik, verdichtet.

## 2026-11-10

- decision: `wiki/decisions/design-system-transfer.md` — Monochrome Design Language aus addxion-ai (Neon) wird schrittweise in addxion-app (GPUI) übertragen. Tokens in theme.rs, Surfaces folgen.

## 2026-11-03

- ingest: Bestimmungs-Narrativ Mike. Roh `raw/story/bestimmung-2026-11-03.md`. Pattern `wiki/patterns/bestimmungs-kriterien.md` (draft). Kriterien: digital, wiederkehrend, zentral steuerbar, AI-fähig, skalierbar. Keine Fahrschul-Expertise. Offen: konkretes Problem.
- ingest: Abraham Bulun Korrekturen von Jakub. Roh `raw/abraham-bulun-korrekturen-2026-11-03.md`. Sohn heißt Armun (nicht Ammar), vor kurzem geheiratet. Abraham Teilhaber einiger Stores (nicht alle 17 selbst). Jakub fährt zur nächsten Eröffnung als Fahrer. Person `armun-bulun` angelegt, `ammar-bulun` Alias.
- ingest: Abraham Bulun AI-Pitch Explainer-Videos Idee. Roh `raw/abraham-bulun-ai-pitch-videos-2026-11-03.md`. Kurze 2-10 Min Videos zu AI-Business-Nutzen (Belege, Suche, RAG etc.) für YouTube/Instagram/TikTok um Wert besser zu vermitteln.
- ingest: Abraham Bulun Office-Beobachtungen. Roh `raw/abraham-bulun-office-2026-11-03.md`. Ammar ca. gleiches Alter wie Mike, etwas technischer/modern. Zwei Mitarbeiterinnen für Office. Café Cavan morgens leer.
- ingest: Abraham Bulun Zürich in-person Treffen. Roh `raw/abraham-bulun-zurich-2026-11-03.md`. Person nachgezogen (12 CH / 5 DE bestätigt, iPhone App, Hustler, Erinnerung Anfang Dezember). Eindruck an Stani gesendet.
- ingest: Abraham Bulun KFC Gespräch. Roh `raw/abraham-bulun-kfc-2026-11-03.md`. Personen `abraham-bulun`, `ammar-bulun`. Jakub nachgezogen (Cousin). Opportunity eigene App Zürich / KI. Ultimatum Anfang Dezember.

## 2026-10-30

- decision: `wiki/decisions/xi-server-client.md` — Kernel zentral, Clients dezentral. Rust-Worker für schwere Berechnung. Frontend bleibt TanStack, kein Next.js+Go. Roh `raw/xi-server-client-2026-10-30.md`.

## 2026-10-23

- decision: `wiki/decisions/xi-clients.md` — Web-Client und nativer GPUI-Client getrennt vom Elixir-Kernel. Kein NIF, kein Kernel-Bundle, Kernel bleibt Server. Roh `raw/xi-clients-2026-10-23.md`.
