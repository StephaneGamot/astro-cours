import type { Metadata } from "next";
import {
  buildMeta,
  localizedPathUrl,
  pathLanguageAlternates,
  toSeoLocale,
  SITE_NAME,
  absoluteUrl,
} from "@/lib/seo";
import { mentionsLegalesContent } from "./content";

/**
 * Page « Mentions légales » — i18n (fr/en/es).
 * Tout le texte vient de ./content.tsx ; ici uniquement la présentation.
 */

const INTERNAL_PATH = "/mentions-legales";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = toSeoLocale(locale);
  const c = mentionsLegalesContent[loc];
  return buildMeta({
    title: c.meta.title,
    description: c.meta.description,
    canonicalPath: INTERNAL_PATH,
    type: "website",
    locale: loc,
    canonicalUrl: localizedPathUrl(INTERNAL_PATH, loc),
    languages: pathLanguageAlternates(INTERNAL_PATH),
  });
}

/* ------------------------------------------------------------------ */
/*  Composant réutilisable pour chaque article                        */
/* ------------------------------------------------------------------ */
function Article({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="group relative rounded-2xl border border-white/[0.06] bg-surface/60 backdrop-blur-sm px-6 py-7 sm:px-8 sm:py-8 transition-colors duration-300 hover:border-white/[0.10]">
      {/* Numéro d'article */}
      <div className="mb-4 flex items-baseline gap-3">
        <span className="inline-flex h-8 min-w-[2rem] items-center justify-center rounded-lg bg-violet-500/10 px-2 text-xs font-semibold tracking-wide text-violet-400">
          {number}
        </span>
        <h2 className="font-serif text-xl font-semibold tracking-tight text-text sm:text-[1.35rem]">
          {title}
        </h2>
      </div>

      <div className="space-y-3 text-[0.935rem] leading-relaxed text-text/75">
        {children}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page principale                                                   */
/* ------------------------------------------------------------------ */
export default async function MentionsLegalesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = toSeoLocale(locale);
  const c = mentionsLegalesContent[loc];

  return (
    <main id="main-content" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: c.jsonld.name,
        description: c.jsonld.description,
        inLanguage: loc,
        url: localizedPathUrl(INTERNAL_PATH, loc),
        "@id": localizedPathUrl(INTERNAL_PATH, loc),
        isPartOf: { "@type": "WebSite", name: SITE_NAME, url: absoluteUrl("/") }
      }) }} />
      {/* ── En-tête ─────────────────────────────────────────────── */}
      <header className="mb-12 space-y-4 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-violet-400">
          {c.header.eyebrow}
        </p>
        <h1 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          {c.header.h1}
        </h1>
        <p className="mx-auto max-w-xl text-sm leading-relaxed text-text/60">
          {c.header.intro}
        </p>
        <p className="text-xs text-text/40">
          {c.header.lastUpdateLabel}&nbsp;: {c.header.lastUpdate}
        </p>
      </header>

      {/* ── Articles ────────────────────────────────────────────── */}
      <div className="space-y-6">
        {c.articles.map((a) => (
          <Article key={a.number} number={a.number} title={a.title}>
            {a.body}
          </Article>
        ))}
      </div>

      {/* ── Pied de page ────────────────────────────────────────── */}
      <footer className="mt-14 border-t border-white/[0.06] pt-8 text-center text-xs text-text/35">
        {c.footer}
      </footer>
    </main>
  );
}
