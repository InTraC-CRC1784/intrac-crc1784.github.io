# Contributing to the InTraC Knowledge Base

## Content structure

All content lives in Markdown (`.md`) files in the `docs/` directory. You don't need to touch any HTML or CSS — the layouts handle the design.

## Adding a new page

Create a new `.md` file in `docs/` with YAML frontmatter:

```yaml
---
layout: page
title: "Your Page Title"
description: "A short description shown in the page hero"
nav_order: 9
icon: "🔧"
---

Your Markdown content here...
```

### Frontmatter fields

| Field | Required | Description |
|-------|----------|-------------|
| `layout` | Yes | Use `page` for all content pages |
| `title` | Yes | Page title (shown in nav and hero) |
| `description` | No | Subtitle shown in the page hero banner |
| `nav_order` | Yes | Navigation order (lower number = appears first) |
| `icon` | No | Emoji shown in the hero section |
| `parent` | No | Title of the parent page (for child pages) |
| `has_children` | No | Set to `true` if this page has sub-pages |

## Editing existing content

1. Find the relevant `.md` file in `docs/`
2. Edit the Markdown content
3. Push to `main`
4. The site rebuilds automatically

## Adding images

1. Drop your image file in `assets/images/`
2. Reference it in Markdown: `![Alt text](/assets/images/your-image.png)`

## Creating child pages

To create a sub-page (e.g., a new workflow type):

1. Set `has_children: true` on the parent page
2. Create the child page with `parent: "Parent Title"` in frontmatter

Example:

```yaml
---
layout: page
title: "My New Workflow"
parent: "Workflows"
nav_order: 4
---
```

## Using callouts

Add info/tip/warning boxes using the callout include:

```
{% include callout.html type="info" title="Note" content="Your message here." %}
```

Available types: `info`, `tip`, `warning`, `danger`.

## Local preview

```bash
bundle install
bundle exec jekyll serve
```

Visit `http://localhost:4000` to preview your changes.

## Deployment

The site rebuilds and deploys automatically when changes are pushed to the `main` branch via GitHub Actions.
