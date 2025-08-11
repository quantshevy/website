# Schevo – Static Site for GitHub Pages

This repository contains a minimal, modern, **static** website for Schevo.  
No build step required—just push and publish.

## Deploy on GitHub Pages

1. Create a new repo (e.g., `schevo-site`).
2. Add these files at the repo root:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `assets/logo.svg`
   - `assets/og-image.svg`
3. Commit and push.
4. In **Settings → Pages**, set **Source** to `Deploy from a branch`, and pick your default branch and `/ (root)`.
5. (Optional) Set a custom domain and enable HTTPS.

### Replace placeholders
- Update `link rel="canonical"` and `og:url` in `index.html` with your Pages URL or custom domain.
- Replace the **Microsoft Store** and **Direct Download** links in the **Download** section.
- Swap `assets/og-image.svg` if you have a branded social image.

## Customize
- Colors and radius are controlled by CSS variables in `styles.css`.
- The layout is responsive and supports dark/light via `prefers-color-scheme`.

© 2025 Schevo
