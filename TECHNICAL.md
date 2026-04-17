# Dream Café — Technical documentation

This document describes the architecture, dependencies, and maintenance of the Dream Café marketing site.

## Overview

| Item | Detail |
| --- | --- |
| **Type** | Static single-page website (HTML, CSS, JavaScript) |
| **Rendering** | Client-side only; no build step |
| **Hosting** | Any static host (GitHub Pages, Netlify, Cloudflare Pages, S3, etc.) |

The site is intentionally dependency-free at build time: runtime assets are loaded from public CDNs (fonts, Leaflet).

## File layout

| Path | Purpose |
| --- | --- |
| `index.html` | Structure, content, section anchors (`#home`, `#information`, `#menu`, `#locations`, `#about`) |
| `styles.css` | Design tokens (CSS variables), layout, responsive rules, Leaflet pin override |
| `script.js` | Mobile navigation, footer year, Leaflet map initialization |
| `assets/moodboard.png` | Hero and About imagery (replace with production photography when available) |

## Dependencies (runtime)

These are referenced from `index.html` and do not require `npm install`.

| Resource | Version | Role |
| --- | --- | --- |
| [Google Fonts](https://fonts.google.com/) | `Cormorant Garamond`, `DM Sans` | Typography |
| [Leaflet](https://leafletjs.com/) | 1.9.4 (SRI-pinned) | Interactive map |
| [CARTO basemaps](https://carto.com/basemaps/) | Light raster tiles | Map appearance (minimal, light) |

## Local development

Tile requests and some browsers behave more reliably over HTTP(S) than `file://`. Serve the folder locally:

```bash
cd dream-cafe
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## Map behavior

- **Data source:** `script.js` defines a `locations` array: `name`, `city`, `lat`, `lng`.
- **Pins:** Custom `L.divIcon` with class `dream-pin`; styling is completed in `styles.css` (transparent Leaflet div icon background).
- **Bounds:** `fitBounds` with padding and `maxZoom: 7` so Bulgaria and Greece both remain visible.
- **Scroll zoom:** Disabled until the user clicks the map once, to avoid accidental zoom while scrolling the page.

To add or change a location:

1. Edit the matching address block in `index.html` (`.location-cards`).
2. Add or update the corresponding entry in `locations` in `script.js` with coordinates (WGS84).

## Styling system

CSS custom properties in `styles.css` (`:root`) define the palette:

- `--blush` / `--blush-deep` — accent fills and pin color
- `--cream` / `--cream-dark` — page backgrounds
- `--ink` / `--ink-muted` — text
- `--sage` — secondary accent (location labels)
- `--font-serif` / `--font-sans` — typography pairing

Mobile navigation uses `.site-nav.is-open` and `:has()` on `.site-header` for the toggle animation (modern browsers).

## Accessibility

- Landmark regions: `header`, `main`, `nav`, `footer`
- Skip targets: in-page links use fragment IDs; ensure new sections keep unique `id` values
- Map: `role="region"` and `aria-label` on `#map`; markers expose popups with name and city

## Deployment notes

- **GitHub Pages:** Publish the repository root or `/docs`; no build command required.
- **Cache:** After edits, CDN caches may delay font/tile updates; hard-refresh for verification.
- **HTTPS:** Required for mixed-content safety if you later add APIs; current external assets are HTTPS.

## Future extensions (not implemented)

- i18n (Bulgarian / Greek / English) via duplicate pages or a small JSON + JS layer
- Contact form (needs backend or third-party form service)
- Image optimization (WebP/AVIF, `srcset`) for hero assets
- Replace Leaflet with embedded Google Maps if brand guidelines require Google styling
