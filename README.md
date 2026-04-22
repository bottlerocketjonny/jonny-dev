# jonny-dev

Personal portfolio at [jonnyc.dev](https://jonnyc.dev). Single-page Astro site, markdown-driven content, hand-crafted CSS.

## Requirements

- Node 22.12+
- pnpm 10+

## Commands

| Command         | Action                                      |
| --------------- | ------------------------------------------- |
| `pnpm install` | Install dependencies                        |
| `pnpm dev`     | Start dev server at `localhost:4321`        |
| `pnpm build`   | Type-check and build to `./dist/`           |
| `pnpm preview` | Preview the production build locally        |

## Structure

- `src/content/projects/` — one markdown file per project
- `src/data/site.yaml` — site-wide copy (name, hero, links, footer)
- `src/components/` — Astro components (Hero, About, ProjectList, …)
- `src/layouts/Base.astro` — root layout
- `src/styles/` — `tokens.css`, `reset.css`, `global.css`
- `public/` — static assets served at site root (`favicon.svg`, `robots.txt`, `cv.pdf`)
- `design-reference/portfolio-final.html` — locked visual spec

## Deployment

Hosted on **Cloudflare Pages**, built from the `master` branch of this repo.

Build settings:

| Setting               | Value          |
| --------------------- | -------------- |
| Framework preset      | Astro          |
| Build command         | `pnpm build`   |
| Build output directory| `dist`         |
| Node version          | `22`           |

Custom domain `jonnyc.dev` is registered with GoDaddy and pointed at Cloudflare via nameserver delegation. See `CLAUDE.md` for the full setup notes.
