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
| `index.html` | Structure, content, section anchors (`#home`, `#information`, `#menu`, `#testimonials`, `#locations`, `#about`) |
| `styles.css` | Design tokens per `data-theme`, layout, testimonials, theme/lang controls, Leaflet pin override |
| `script.js` | i18n (EN/BG), theme persistence, mobile navigation, footer year, Leaflet map + popups |
| `favicon.ico`, `favicon-*.png`, `apple-touch-icon.png`, `android-chrome-*.png`, `site.webmanifest` | Favicons and PWA manifest (project root) |
| `assets/*.jpg` | Photography used in hero, information strip, menu cards, and about (see below) |

### Favicon & manifest

Favicon package lives next to `index.html`. `site.webmanifest` uses relative icon paths so it works on GitHub Pages.

### Themes (`data-theme` on `<html>`)

| Theme | Notes |
| --- | --- |
| `blush` | Default; original palette |
| `lavender` | Soft purple–lavender accents |
| `peach` | Warm peach–apricot accents |

Choice is stored in `localStorage` under `dreamcafe-theme`. CSS variables `--blush`, `--cream`, `--sage`, etc., swap per theme; map pins re-tint from computed `--blush`.

### Languages

English (`en`) and Bulgarian (`bg`). Copy lives in `script.js` (`STRINGS`); elements use `data-i18n`, `data-i18n-alt`, `data-i18n-aria`, or `data-i18n-title`. Language is stored in `localStorage` under `dreamcafe-lang`. Document `lang`, `<title>`, and meta description update when the language changes.

### Settings menu

Theme (square color swatches + labels) and language live in a **Settings** dropdown in the header. The panel closes on outside click, **Escape**, or when opening the mobile navigation. Theme swatches use flat base colors (`#f4d0d0`, `#e0d4f0`, `#ffd9c9`) as quick previews.

### Hero parallax (subtle)

When **`prefers-reduced-motion: reduce`** is off, `script.js` applies a **light scroll-linked parallax** on the hero only: the photo moves slightly slower than the page (`translate3d` + small `scale` so edges stay covered), and the headline block moves a bit in the opposite direction for depth. Values are **clamped** (about ±46px / ±20px) so motion stays calm. **`requestAnimationFrame`** + **passive** scroll listeners keep scrolling smooth. If the user enables “reduce motion” in the OS, transforms are cleared and `html.js-parallax` is not used.

### Image usage (`assets/`)

| File | Where it appears |
| --- | --- |
| `7f5ec140b3ff4ae7892af4e2706a66ed.jpg` | Home hero |
| `1cd37d6500f94860dae90faf814d4187.jpg` | Information — main column image |
| `e23afac6a89b7b0b0dc9c0fcc103114a.jpg` | Information — gallery |
| `f508ba2ae3ace0743b2fb7ecf49ff6cf.jpg` | Information — gallery |
| `450d84c9a67fd79019d9385e0b9ad95d.jpg` | Information — gallery |
| `f8561ea80e14bd1989b4fe87736e1468.jpg` | Menu — Coffee |
| `ff025bc01db3a954679604c06cd73b00.jpg` | Menu — Cold & creamy |
| `f180cc8627673b1ee12238d0df513d59.jpg` | Menu — Pastries & cakes |
| `df58b22138cc8ecae28d000a2488c409.jpg` | Menu — Light & savory (outdoor seating) |
| `a71a7776caa4b122863c5b220a053626.jpg` | About — founder portrait |

Additional JPEGs in `assets/` are available for future sections or swaps. `moodboard.png` is retained as an optional legacy asset.

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
