import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';
import { z } from 'zod';

const here = path.dirname(fileURLToPath(import.meta.url));
const raw = fs.readFileSync(path.join(here, 'site.yaml'), 'utf8');

const SiteSchema = z.object({
  name: z.string(),
  location: z.string(),
  eyebrow: z.string(),
  hero_prefix: z.string(),
  hero_accent: z.string(),
  hero_suffix: z.string(),
  intro: z.string(),
  intro_muted: z.string(),
  links: z.array(
    z.object({
      label: z.string(),
      href: z.string(),
    }),
  ),
  selected_work_range: z.string(),
  footer_left: z.string(),
});

export type Site = z.infer<typeof SiteSchema>;
export const site: Site = SiteSchema.parse(yaml.load(raw));
