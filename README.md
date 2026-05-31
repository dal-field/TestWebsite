# Dallin Littlefield — Portfolio

A single-page portfolio branding Dallin Littlefield as an attorney and AI software
builder (founder of LitFlow). Sleek dark + techy design, no build
step — just static HTML, CSS, and vanilla JS.

## Structure

```
index.html      Markup + content (hero, featured project, about, contact)
styles.css      All styling (dark theme, responsive, animations)
script.js       Project-grid data + nav/scroll/reveal interactions
images/         Headshot + project screenshots (see images/README.md)
```

## Editing content

- **Tagline:** edit `#tagline` text in `index.html`.
- **Featured project (Pocket Defender):** edit the `<article class="featured">` block in `index.html`.
- **Other projects:** edit the `projects` array at the top of `script.js`.
- **Bio / About:** edit the `.about__body` block in `index.html`.
- **Contact email:** search for `dallin@litflow.io` in `index.html`.
- **Images:** see `images/README.md` for exact filenames.

## Running locally

It's fully static. Open `index.html` directly, or serve it:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Deploying

Works on any static host. Easiest options:
- **Vercel:** import the repo, framework preset = "Other", no build command.
- **GitHub Pages:** enable Pages on the branch, root directory.
- **Netlify:** drag-and-drop or connect the repo, no build command.
