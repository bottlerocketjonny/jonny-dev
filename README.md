# jonny-dev

Personal portfolio. Single-page Astro site, markdown-driven content, hand-crafted CSS.

## Requirements

- Node 20+
- pnpm

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
- `src/styles/` — tokens, reset, global CSS
- `design-reference/portfolio-final.html` — locked visual spec
