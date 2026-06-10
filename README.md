# Studio Vale Agency

The website for **Studio Vale Agency** — a Launceston, Tasmania digital agency
(formerly TiinkTech). Core services: **websites** and **social media
management**, plus AI workflows and agency management.

Lives at the GitHub **root user page**: **https://tink1005.github.io**

## Design
Black + acid-lime (`#050505` / `#ccff00`), Inter 900 uppercase headlines, sharp
0-radius edges, full-bleed black↔lime color-block sections. Design language taken
from the original TiinkTech site. All tokens are CSS variables at `:root` in
`styles.css`.

```
index.html   structure & content
styles.css   the look
script.js    nav, scroll reveals, contact form
```

## Sections
Hero · Services (Websites + Management as centrepiece pillars, AI Workflows &
Agency Management as supporting) · Work (Wash Kings, Sentri) · Pricing · CTA · Footer.

## Pricing (from rate card)
- Simple Site — $300 · Website + Store — $500 · Social Management — $300/mo
- 50% deposit to begin, balance on delivery.

## Make it real
- Wire the contact form to email (Web3Forms / Formspree → harrisa1005@outlook.com).
- Add a custom domain (e.g. `studiovale.com.au`) via repo Settings → Pages.

## Run locally
```bash
python3 -m http.server 8000   # http://localhost:8000
```
