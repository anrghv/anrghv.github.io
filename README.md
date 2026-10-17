# anrghv.github.io

Personal site of **Anuj Raghav** — PhD student in Experimental High Energy Physics,
University of Delhi · CMS Experiment, CERN.

Static site built with Jekyll and published by GitHub Pages straight from `main`:
push a commit and the site rebuilds itself, no CI to maintain.

## What it is made of

| Piece | Detail |
| --- | --- |
| Generator | Jekyll (kramdown + GFM, `jekyll-feed`, `jekyll-sitemap`) |
| Styles | `assets/css/main.css` — one file, plain CSS, no preprocessor and no build step |
| Script | `assets/js/main.js` — theme toggle, mobile nav, entrance stagger, print button |
| Icons | `_includes/icon.html` — inline SVG, sized with `1em` so it follows font size |
| Content | Markdown pages + front-matter-only collections (`_research`, `_talks`, `_publications`) |

No frameworks, no tracking, no third-party scripts. The only external requests are
the three Google fonts.

## Structure

```
_config.yml            site title, description, nav, identity, collections
index.md               About page — hero content lives in its front matter
research.md            renders every project in _research/
publications.md        renders _talks/ and _publications/
cv.md                  CV (has print styles)
contact.md             contact cards, driven by _data/social.yml
404.md                 not-found page
_data/social.yml       contact links shown on /contact/ and in the footer
_research/*.md         one file per research project (front matter only)
_talks/*.md            one file per talk (front matter only)
_publications/*.md     one file per publication or thesis (front matter only)
_includes/             nav.html, footer.html, icon.html
_layouts/              default.html, home.html, page.html
assets/css/main.css    the whole design
assets/js/main.js      progressive enhancements
assets/img/            favicon.svg, og.png (social preview card)
tools/                 review helpers — never published (excluded in _config.yml)
```

## Editing content

- **Nav** — reorder or add items in `_config.yml` under `nav:`. Nothing else to touch.
- **Hero (About page)** — `index.md` front matter: `actions`, `facts`, `currently`,
  `interests` (plus an optional `portrait`, which renders next to the text). The prose
  below it is plain Markdown.
- **A research project** — copy any file in `_research/`. Fields: `order`, `eyebrow`,
  `title`, `subtitle`, `status`, `links`, `overview`, `highlights`, `implementation`, `tags`.
  `research.md` renders them; the "What I'm curious about" cards come from its own
  `curious:` front matter.
- **A talk / thesis / publication** — add a file to `_talks/` or `_publications/` with
  `year`, `title`, `authors`, `venue`, `type`, `tags`. Talks also take a `date` (orders the
  list, newest first), a `date_label` (what readers see, e.g. `3 Oct 2026`) and `upcoming`.
- **Contact links** — `_data/social.yml`; the `icon:` value must match a name in
  `_includes/icon.html`. These feed both the contact page and the footer.
- **Structured data / social previews** — `_config.yml` under `identity:` and `og_image:`.

## Design

- Every colour, font, radius, shadow and width is a custom property at the top of
  `assets/css/main.css`, in `:root` (light) and `[data-theme="dark"]` (dark).
  Change the palette there and the whole site follows, in both themes.
- Typography: **Fraunces** for display, **Inter** for body and UI, **IBM Plex Mono**
  for labels and metadata.
- Theme: follows the operating system on a first visit, then remembers the reader's
  choice in `localStorage`. The theme is applied before first paint, so there is no flash.
- Accessibility: skip link, visible focus rings, `aria-current` on the active nav item,
  labelled icon buttons, and `prefers-reduced-motion` disables all motion.
- Print: the CV page prints cleanly (chrome and motion removed, accents flattened).

## Local preview

GitHub Pages builds the site for you, but for local work:

```bash
gem install jekyll jekyll-feed jekyll-sitemap webrick
# run from the *parent* folder so Bundler does not pick up the Gemfile
jekyll serve --source anrghv.github.io --destination anrghv.github.io/_site
```

`tools/preview.html` is a review harness that renders the running site inside
fixed-width frames, which is handy for checking breakpoints without resizing
the window:

```
http://127.0.0.1:8000/tools/preview.html?path=/research/&w=1280,900,420
```

`tools/og-card.html` is the source of `assets/img/og.png` (1200×630): open it at
exactly 1200px wide and re-capture the image if the identity block changes.

## Licence

Content © Anuj Raghav. Site code released under the MIT licence (`LICENSE`).
