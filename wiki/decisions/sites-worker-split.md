# Sites-Worker vs App-Worker

## Status

**Umgesetzt (2026-10-26).** Repo **`addxion-sites`**, Worker `addxion-sites`, Neon bleibt SSOT.

## Problem

Öffentliche Kunden-Landings (`sites.addxion.ai`, `sites.{domain}`) liefen im selben Worker wie `addxion.ai`. Custom-Hosts auf dem App-Catch-all lieferten veralteten Renderer (z. B. Inline-Formular statt Modal).

## Entscheidung

| Schicht | Wo | Was |
| --- | --- | --- |
| **Control Plane** | addxion-ai | Werkbank `/sites`, CRUD → **Neon** |
| **Data Plane** | addxion-sites | SSR, Lead, Measure, **c15t** (D1 am Sites-Worker) |
| **Daten-SSOT** | Neon | `(org_id, slug, body, theme, hosts, status)` |

| Thema | Regel |
| --- | --- |
| Deploy App | `bun run deploy` — **kein** Sites-Renderer |
| Deploy Landings | Repo `addxion-sites`: `bun run deploy` |
| Consent | Nur Sites: `VITE_C15T_BACKEND_URL=https://sites.addxion.ai/api/c15t` |
| Base URL Sites | `VITE_BASE_URL=https://sites.addxion.ai` |
| Custom-Host | Worker **`addxion-sites`** (Dashboard: Custom Domain oder Zone-Route). Zone muss im CF-Account liegen — sonst DNS beim Kunden + Custom Domain am Worker. |
| ComSolution Lead | Kein Inline-Block; nur Fullscreen-Modal (CTA) |

### HTTP-Grenze (M2M)

Nach Publish in der App:

`POST https://sites.addxion.ai/api/internal/publish-snapshot`  
`Authorization: Bearer $SITES_INTERNAL_SECRET`  
Body: `{ org, slug, hosts[], updatedAt? }` → R2-Snapshot am Edge.

Ohne Secret: App nutzt Übergangs-Fallback (Snapshot-Fetch selbst).

### Sync (Übergang)

`addxion-sites/scripts/sync-from-addxion-ai.sh` — nur wenn Public-Renderer in der App geändert wurde. Ziel: Package `@addxion/sites-renderer`, kein Voll-Sync.

## Nicht-Ziele

- Kein Repo/Deploy pro Kunde.
- Kein c15t / öffentlicher Site-Renderer in addxion-ai.

## Referenzen

- Repo `addxion-sites`, addxion-ai `AGENTS.md` → Sites
- [public-vs-app](public-vs-app.md), [site-measure](site-measure.md)
