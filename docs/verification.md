# Redesign verification

Verified in Chrome on October 14, 2026. The site is buildless static HTML/CSS/JS.

## Browser checks

- At 1280 × 900 and 375 × 812, in light and dark themes: all six navigation links reach the correct section and update the active indicator; no horizontal overflow.
- Both hero calls to action reach their target sections.
- Legacy redirects reach About, Projects, Education, and Hobbies respectively, with the correct active link.
- Theme selection persists through reload. On the initial visit with no stored selection, the dark OS preference was respected. The preference-change listener follows the OS until the visitor chooses a theme.
- Keyboard navigation shows a solid 2px focus outline. Skip to content focuses the main landmark.
- No console errors or warnings were captured during these checks.
- Additional overflow checks passed at 680, 681, 768, 1000, 1001, and 1920 pixels.
- Reduced-motion rules disable smooth scrolling, transitions, and animations (source inspection).
- JavaScript syntax check passed using `node --check js/nav.js`. Supplied content strings were checked against the HTML.

## Text contrast

Rendered text/background pairs and reusable surface styles were checked using WCAG relative luminance. The list revision uses primary, muted, and accent text directly on the page background; all retain passing contrast. Decorative swatches and ornaments are excluded.

| Theme | Text | Background | Ratio |
| --- | --- | --- | --- |
| light | rgb(234, 226, 214) | rgb(42, 40, 37) | 11.44:1 |
| light | rgb(42, 40, 37) | rgb(234, 226, 214) | 11.44:1 |
| light | rgb(96, 89, 79) | rgb(234, 226, 214) | 5.38:1 |
| light | rgb(106, 85, 60) | rgb(234, 226, 214) | 5.49:1 |
| light | rgb(42, 40, 37) | rgb(241, 234, 222) | 12.29:1 |
| light | rgb(96, 89, 79) | rgb(241, 234, 222) | 5.78:1 |
| light | rgb(42, 40, 37) | rgb(221, 210, 194) | 9.85:1 |
| dark | rgb(27, 26, 24) | rgb(236, 231, 223) | 14.13:1 |
| dark | rgb(236, 231, 223) | rgb(27, 26, 24) | 14.13:1 |
| dark | rgb(168, 161, 150) | rgb(27, 26, 24) | 6.79:1 |
| dark | rgb(205, 184, 148) | rgb(27, 26, 24) | 9.01:1 |
| dark | rgb(236, 231, 223) | rgb(35, 34, 32) | 12.92:1 |
| dark | rgb(168, 161, 150) | rgb(35, 34, 32) | 6.21:1 |
| dark | rgb(236, 231, 223) | rgb(45, 43, 39) | 11.48:1 |

After the oatmeal palette revision, primary-button hover and future project links use the deeper accent. All rendered text pairs and button hover states meet 4.5:1. The hero illustration and corner logo are removed. Navigation and no-overflow checks were repeated after changing the fonts and phone header.

The latest size revision reduces the main heading to 116px maximum on desktop and 64–96px on phones, uses regular weight (400), and tightens hero spacing. Desktop and phone captures were refreshed in both themes; navigation and overflow were rechecked.

## Screenshots

Viewport and full-page captures for desktop light, desktop dark, phone light, and phone dark are in `docs/screenshots/`.

## Club name sources

The three abbreviated entries now include their full names, retaining the supplied acronyms. Names were checked against [AI Safety Student Team](https://aisst.ai/mission), [Harvard Undergraduate Sports Analysis Collective](https://harvardsportsanalysis.org/), and [Harvard Undergraduate Data Analytics Group](https://harvardanalytics.org/). Other club names are unchanged. Coursework and clubs use semantic bulleted lists, checked for wrapping on phones.
