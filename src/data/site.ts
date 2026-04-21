import yaml from 'js-yaml';
import { z } from 'zod';
import raw from './site.yaml?raw';

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
  about_label: z.string(),
  about: z.string(),
  selected_work_range: z.string(),
  open_source_label: z.string(),
  open_source: z.array(
    z.object({
      label: z.string(),
      note: z.string(),
      href: z.string().optional(),
    }),
  ),
  footer_left: z.string(),
});

export type Site = z.infer<typeof SiteSchema>;
export const site: Site = SiteSchema.parse(yaml.load(raw));
