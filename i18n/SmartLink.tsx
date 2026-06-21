"use client";

import NextLink from "next/link";
import { useLocale } from "next-intl";
import { createNavigation } from "next-intl/navigation";
import type { ComponentProps } from "react";
import { routing } from "./routing";
import { localizeSlug, pillarTypeFromTemplate } from "./slugs";

const { getPathname } = createNavigation(routing);

/* ────────────────────────────────────────────────────────────────
   Matcher : chemin interne "plat" (ex: /signes/balance) → template
   pathnames (/signes/[slug]) + params {slug:"balance"}.
   ──────────────────────────────────────────────────────────────── */

const TEMPLATES = Object.keys(routing.pathnames).sort(
  (a, b) => staticCount(b) - staticCount(a),
);

function staticCount(t: string): number {
  return t.split("/").filter((s) => s && !s.startsWith("[")).length;
}

function matchHref(
  path: string,
): { template: string; params: Record<string, string> } | null {
  const segs = path.split("/").filter(Boolean);
  for (const t of TEMPLATES) {
    const ts = t.split("/").filter(Boolean);
    if (ts.length !== segs.length) continue;
    const params: Record<string, string> = {};
    let ok = true;
    for (let i = 0; i < ts.length; i++) {
      if (ts[i].startsWith("[")) {
        params[ts[i].slice(1, -1)] = segs[i];
      } else if (ts[i] !== segs[i]) {
        ok = false;
        break;
      }
    }
    if (ok) return { template: t, params };
  }
  return null;
}

type LinkProps = Omit<ComponentProps<typeof NextLink>, "href" | "locale"> & {
  href: string;
  locale?: string;
};

/**
 * Link qui localise automatiquement un href string selon `pathnames`.
 * - hrefs externes / ancres / mailto : inchangés.
 * - sinon : segment(s) traduits pour la locale courante (ou `locale` prop).
 */
export function Link({ href, locale, ...rest }: LinkProps) {
  const current = useLocale();
  const target = (locale ?? current) as (typeof routing.locales)[number];

  if (typeof href !== "string" || /^(https?:|mailto:|tel:|#)/.test(href)) {
    return <NextLink href={href} {...rest} />;
  }

  // Sépare query + hash.
  const hashIdx = href.indexOf("#");
  const hash = hashIdx >= 0 ? href.slice(hashIdx) : "";
  let path = hashIdx >= 0 ? href.slice(0, hashIdx) : href;
  const qIdx = path.indexOf("?");
  const query = qIdx >= 0 ? path.slice(qIdx) : "";
  if (qIdx >= 0) path = path.slice(0, qIdx);

  let localized: string;
  const m = matchHref(path);
  try {
    if (m) {
      const params = { ...m.params };
      // Slug des piliers : traduit pour la locale cible (balance→libra…).
      const pillar = pillarTypeFromTemplate(m.template);
      if (pillar && params.slug) {
        params.slug = localizeSlug(pillar, params.slug, target);
      }
      localized = getPathname({
        locale: target,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        href: { pathname: m.template, params } as any,
      });
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      localized = getPathname({ locale: target, href: path as any });
    }
  } catch {
    localized = target === routing.defaultLocale ? path : `/${target}${path}`;
  }

  return <NextLink href={`${localized}${query}${hash}`} {...rest} />;
}
