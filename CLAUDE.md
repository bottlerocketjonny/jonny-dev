# jonny-dev — project notes

Single-page Astro portfolio. Static output, no client framework, no JS framework runtime. Hand-rolled CSS with design tokens.

## Stack

- **Astro 6** (static, `output: 'static'`)
- **TypeScript** (strict via `astro/tsconfigs`)
- **Zod** for content + site-data schema validation
- **js-yaml** to load `src/data/site.yaml` at build time
- **pnpm 10**, Node 22.12+
- `@astrojs/sitemap` integration
- Fonts: Inter Tight (variable), Instrument Serif, JetBrains Mono via `@fontsource*`

## Content model

- **Projects** — `src/content/projects/*.md`. Schema in `src/content.config.ts`. Each frontmatter must include `accent`, `context`, `year`, `stack[]`, `order`. Optional: `title`, `link`, `link_label`, `draft`, `featured`, `pullquote`, `image`. Body is short prose.
- **Site copy** — `src/data/site.yaml`, parsed and validated by `src/data/site.ts` (Zod). Import via `import { site } from '../data/site.ts'`.

Sort order: `ProjectList.astro` reads the collection, filters out drafts, sorts by `order` ascending, then splits featured vs rest.

## Styling

- Tokens in `src/styles/tokens.css` (colors, spacing, type). All component CSS pulls from these — no magic values.
- `reset.css` is a minimal modern reset.
- `global.css` holds layout primitives (`.container`, `.section-label`, `.mono`, `.skip-link`, etc.).
- Component styles live inside `<style>` blocks in each `.astro` file. Scoped by default.
- Visual reference: `design-reference/portfolio-final.html`. Treat it as the spec — match it.

## Conventions

- Prefer editing existing components over adding new ones.
- Keep components presentational; data comes from `site` or the projects collection.
- No new client-side JS unless there's a real reason (the only interactive bit is `ThemeToggle.astro`).
- No frameworks (React/Vue/Svelte) — keep it Astro + CSS.
- Run `pnpm build` before claiming a change is done; `astro check` runs first and will catch type/content errors.

## Deployment

**Host:** Cloudflare Pages, connected to `bottlerocketjonny/jonny-dev` on GitHub. Builds on push to `master`.

**Build settings (Cloudflare dashboard):**
- Framework preset: Astro
- Build command: `pnpm build`
- Output: `dist`
- Node: `22`

**Domain:** `jonnyc.dev` registered at GoDaddy. DNS delegated to Cloudflare nameservers; the apex + `www` are managed in the Cloudflare zone and attached to the Pages project as custom domains. Cloudflare issues the TLS cert.

**`astro.config.mjs`:** `site: 'https://jonnyc.dev'`, no `base`, `trailingSlash: 'always'`. If the canonical URL ever changes, update `site` so the sitemap and absolute URLs follow.

**Legacy GitHub Pages workflow:** `.github/workflows/deploy.yml` still publishes to `bottlerocketjonny.github.io/jonny-dev`. Delete it once Cloudflare is verified live, or leave it as a fallback mirror — but note it builds against `astro.config.mjs` which no longer sets `base: '/jonny-dev'`, so asset paths will 404 on the GH Pages URL until the workflow is removed or the config is branched.

## Useful paths

- Entry page: `src/pages/index.astro`
- Layout: `src/layouts/Base.astro`
- Hero copy / links / footer: `src/data/site.yaml`
- Add a project: new `.md` file in `src/content/projects/` with required frontmatter
- Static assets (favicon, CV, robots): `public/`
