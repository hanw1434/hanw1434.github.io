# Personal Website

My personal website, hosted on GitHub Pages at https://hanw1434.github.io.

## Structure

- `index.html`: the whole site, one self-contained page with its styles inlined. Home (About me, Education, Experience), Projects, Hobbies and Contact.
- `about.html`, `projects.html`, `resume.html`, `substack.html`: redirects to the matching section, so old links still work.

## Editing

Edit `index.html`, then commit and push; GitHub Pages redeploys automatically. Colors and fonts are CSS variables in `:root` inside the `<style>` block.

## Local preview

Open `index.html` in a browser, or run a local server:

```
python -m http.server
```
