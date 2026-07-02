# Personal Website

My personal website, hosted on GitHub Pages.

## Structure

- `index.html` — home page
- `about.html`, `projects.html`, `resume.html` — section pages
- `css/style.css` — all styling (colors are defined as CSS variables at the top)
- `js/nav.js` — the shared top navigation bar

## Adding a new section

1. Copy an existing page (e.g. `about.html`) to `newsection.html` and replace the `<main>` content.
2. Add one line to the `NAV_LINKS` array in `js/nav.js`:
   ```js
   { label: "New Section", href: "newsection.html" },
   ```
3. Commit and push — GitHub Pages redeploys automatically.

## Local preview

Just open `index.html` in a browser, or run a local server:

```
python -m http.server
```
