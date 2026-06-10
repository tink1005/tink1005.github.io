# Studio Vale Agency

The website for **Studio Vale Agency** — a boutique web design studio in
Launceston, Tasmania (formerly TiinkTech). We design and build websites for
small and local businesses.

Lives at the GitHub **root user page**: **https://tink1005.github.io**

## Stack
Plain HTML / CSS / vanilla JS — no build step. Fonts: Fraunces + Archivo +
Space Mono (Google Fonts). Theme is a warm editorial light palette (paper /
ink / pine green / clay) — all in CSS variables at `:root` in `styles.css`.

```
index.html   structure & content
styles.css   the look
script.js    nav, scroll reveals, contact form
```

## Portfolio
Case-study cards link to live work:
- Wash Kings — https://tink1005.github.io/wash-kings/
- Sentri Apparel — https://tink1005.github.io/sentri-apparel-mockup/

Previews are CSS-rendered (no image files) so nothing can 404.

## Make it real
- Wire the contact form to email (Web3Forms / Formspree).
- Add a custom domain (e.g. `studiovale.com.au`) via repo Settings → Pages.
- Swap CSS previews for real screenshots as the portfolio grows.

## Run locally
```bash
python3 -m http.server 8000   # http://localhost:8000
```
