# Personal Website

My personal website, hosted on GitHub Pages.

## Structure

- `index.html` — the whole site: one page with Home, About, Education, Projects, Hobbies, and Contact sections
- `css/style.css` — all styling (light/dark colors are CSS variables at the top)
- `js/nav.js` — theme toggle and nav highlighting for the section in view
- `about.html`, `projects.html`, `resume.html`, `substack.html` — redirects to the matching section, so old links still work

## Adding a new section

1. Add a `<section id="newsection" class="section">` to `index.html` (copy an existing one).
2. Add a matching link to the nav in `index.html`:
   ```html
   <li><a class="nav-link" href="#newsection">New Section</a></li>
   ```
3. Commit and push — GitHub Pages redeploys automatically.

## Local preview

Just open `index.html` in a browser, or run a local server:

```
python -m http.server
```
