# anrghv.github.io

My personal academic website — rebuilt on Jekyll, hosted via GitHub Pages.

🌐 **Live site:** [anrghv.github.io](https://anrghv.github.io)

## How this works

Content and design are fully separated:

- **Content** lives in Markdown files (`index.md`, `research.md`, `cv.md`,
  `contact.md`, `publications.md`) and in two collections, `_talks/` and
  `_publications/`. Editing what the site *says* never touches HTML or CSS.
- **Design** lives in exactly one file: `assets/css/main.scss`. Editing what
  the site *looks like* never touches content.

GitHub Pages builds the site with Jekyll automatically on every push to
`main` — no build step to run yourself, no CI config needed.

## Adding content

**A new talk:** add a file to `_talks/`, e.g. `_talks/2027-my-talk.md`:

```yaml
---
title: "Talk title"
authors: "Anuj Raghav"
venue: "Conference name, location"
year: 2027
type: "Contributed Talk"
tags: [tag1, tag2]
---
```

**A new publication:** same idea in `_publications/`.

**A new nav item / page:** add a `.md` file with `layout: page` in the front
matter, and add it to the `nav:` list in `_config.yml`.

Nothing else needs editing — the publications page, nav, and styling all
read from these files automatically.

## Local preview

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000`. Jekyll rebuilds automatically as you
edit Markdown files.

## Site structure

```
anrghv.github.io/
├── _config.yml          # site title, nav items, collection config
├── _layouts/             # page shells (default, home, page)
├── _includes/            # nav.html, footer.html
├── _talks/                # one file per talk — content only
├── _publications/         # one file per publication — content only
├── _data/social.yml       # contact links (email, GitHub, LinkedIn, ORCID)
├── assets/css/main.scss   # the ONE file that controls all styling
├── index.md               # About / home page
├── research.md
├── cv.md
├── contact.md
├── publications.md         # auto-lists _talks/ + _publications/
└── LICENSE
```

## License

MIT — see [LICENSE](LICENSE). Please don't reproduce the personal content
(biography, CV, research descriptions) without permission.
