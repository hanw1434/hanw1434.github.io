# Han Wu — personal website

A single-page portfolio with warm neutral colors, oversized typography, a square monogram, and a static mathematical wireframe. Light and dark themes retain the original site's palette. About, Projects, and Hobbies intentionally contain only their headings until real content is added.

## Structure

- `index.html`: all content, in Home → About → Education → Projects → Hobbies → Contact order.
- `css/style.css`: responsive layout, reusable project styles, and light/dark CSS color variables.
- `js/nav.js`: persisted theme selection, system preference tracking, and active-section navigation (`aria-current`).
- `favicon.svg`: the monogram favicon.
- `about.html` → `index.html#about`
- `projects.html` → `index.html#projects`
- `resume.html` → `index.html#education`
- `substack.html` → `index.html#hobbies`
- `docs/screenshots/`: reviewed desktop and phone screenshots.

No framework, package install, or build step is required. GitHub Pages serves the repository root on `main`. Merging the redesign pull request publishes it; keep review work on a feature branch.

## Preview locally

From the repository root:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open `http://127.0.0.1:4173/`. The theme button switches light/dark and remembers the choice. Until a visitor selects a theme, the site follows their OS preference, including preference changes while open. To restore automatic theme selection, remove the `theme` key from this site's local storage.

## Add content to the empty sections

Keep the section IDs and headings so navigation and legacy links continue working.

For About and Hobbies, add real `<p>` elements inside the corresponding `.section-body.prose`. The text column and paragraph spacing are already styled.

For Projects, add `<article class="project-card">` elements inside `#projects .project-grid`. Each card can contain an `<h3>` title, a `<p>` description, a `<ul class="tags">` with `<li>` technology names, and an `<a>` with the real project URL. The existing grid uses two columns on desktop and one on mobile. No placeholder cards are shipped.

For schools and awards, follow the existing semantic article/list markup. Preserve award ordering from newest to oldest and retain a visible year on each entry.

## Accessibility and performance

Semantic landmarks, a skip link, visible keyboard focus, named controls, and an accessible active-location indicator are included. Navigation remains fully visible at phone widths. Reduced-motion preferences disable smooth scrolling and transitions. The mathematical illustration is static inline SVG and hidden from assistive technology. Text uses only `--text`, `--text-muted`, or `--accent` on contrast-checked backgrounds; swatches and `--accent-soft` are decorative only. Inter loads from Google Fonts with `display=swap` and a system-font fallback.
