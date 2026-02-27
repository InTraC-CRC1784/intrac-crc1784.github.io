# InTraC - Knowledge Base Website

The website for **Data, Software & Computing Platform** of the InTraC Collaborative Research Centre (CRC 1784).

## Quick start

```bash
# clone the repo
git clone git@github.com:InTraC-CRC1784/intrac-website.git
cd intrac-website

# install dependencies
bundle install

# run locally
bundle exec jekyll serve
```

Site will be at `http://localhost:4000`.

## How to edit content

All page content lives in **Markdown files** inside the `docs/` folder. No HTML knowledge needed for most edits.

### File overview

| File | Page |
|------|------|
| `docs/workflows.md` | Workflows — pipelines, tools, versions |
| `docs/training.md` | Training — course levels and overview |
| `docs/data-management.md` | Data Management — NEFELI, FAIR data |
| `docs/platform.md` | Analysis Platform |
| `docs/services.md` | Services — consulting, mentoring, analysis |
| `index.md` | Home page front matter (title, subtitle) |

### Editing a subpage

1. Open the `.md` file in `docs/`
2. The top section between `---` lines is **front matter** (title, description, nav order) — change as needed
3. Below that is regular Markdown — edit text, links, and lists as you would in any Markdown file
4. Commit and push

### Common tasks

**Change a page title:**
```yaml
# in the front matter at the top of the file
title: "New Title Here"
```

**Add a bullet point to a list:**
```markdown
- **Bold label** — Description text here
```

**Add a link:**
```markdown
[Link text](https://example.com)
```

**Add a pipeline to workflows:**
```markdown
| [nf-core/newpipeline](https://nf-co.re/newpipeline/) | 1.0.0 |
```

**Change the intro text on a subpage:**
Edit the `<p style="font-size: 1.15em;">...</p>` line near the top of the file.

### Main page & layout

| File | What it controls |
|------|-----------------|
| `_layouts/home.html` | Main page sections (headings, descriptions, links) |
| `_includes/hero.html` | Hero area (logo, title, top links) |
| `_includes/nav.html` | Navigation bar (desktop + mobile) |
| `_config.yml` | Site title, description, build settings |

### Styling

Styles live in `_sass/`. The main file is `_sass/style.scss`. Only edit if you need to change colours, spacing, or layout.

## Deployment

Push to `main` and GitHub Actions will rebuild the site automatically via GitHub Pages.

## Contact

**Email:** TBD