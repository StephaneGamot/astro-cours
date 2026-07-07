import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { themeAstralContent } from "./content";
import {
  buildMeta,
  localizedPathUrl,
  pathLanguageAlternates,
  toSeoLocale,
  AUTHOR_PERSON,
  PUBLISHER_ORG,
  SITE_URL,
} from "@/lib/seo";

/**
 * Page pilier « Thème astral » (audit SEO 07/2026).
 * Cible la plus grosse requête informationnelle du secteur FR
 * (« thème astral », « thème natal ») + « birth chart » / « carta astral ».
 * Future page d'accueil du calculateur de thème.
 */

const INTERNAL_PATH = "/theme-astral";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = toSeoLocale(locale);
  const c = themeAstralContent[loc];
  return buildMeta({
    title: c.meta.title,
    description: c.meta.description,
    canonicalPath: INTERNAL_PATH,
    type: "article",
    locale: loc,
    canonicalUrl: localizedPathUrl(INTERNAL_PATH, loc),
    languages: pathLanguageAlternates(INTERNAL_PATH),
  });
}

const card = "rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8";

export default async function ThemeAstralPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const loc = toSeoLocale(locale);
  const c = themeAstralContent[loc];
  const pageUrl = localizedPathUrl(INTERNAL_PATH, loc);

  const ARTICLE_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.jsonld.headline,
    description: c.jsonld.description,
    inLanguage: loc,
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    author: AUTHOR_PERSON,
    publisher: PUBLISHER_ORG,
    image: [`${SITE_URL}/og/cover.jpg`],
    datePublished: "2026-07-07T12:00:00Z",
    dateModified: "2026-07-07T12:00:00Z",
    articleSection: c.jsonld.articleSection,
  };

  const BREADCRUMB_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: c.breadcrumbHome, item: localizedPathUrl("/", loc) },
      { "@type": "ListItem", position: 2, name: c.hero.h1, item: pageUrl },
    ],
  };

  const FAQ_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main id="main-content" className="mx-auto max-w-4xl px-6 pb-16 pt-10 text-text">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />

      {/* HERO */}
      <header className="mb-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5">
        <div className="p-7 sm:p-10">
          <p className="text-xs uppercase tracking-[0.18em] text-muted">{c.hero.eyebrow}</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl">{c.hero.h1}</h1>
          <div className="mt-4 max-w-3xl text-sm leading-relaxed text-text/80 sm:text-base">
            {c.hero.intro}
          </div>
        </div>
      </header>

      {/* DÉFINITION (featured snippet) */}
      <section className="mb-10 rounded-2xl border border-violet-400/20 bg-violet-500/[0.06] px-6 py-5">
        <p className="text-sm font-semibold uppercase tracking-widest text-violet-300/90">
          {c.defBox.label}
        </p>
        <div className="mt-2 text-base leading-relaxed text-text/85">{c.defBox.body}</div>
      </section>

      {/* SOMMAIRE */}
      <nav aria-label={c.hero.h1} className="mb-12 flex flex-wrap gap-2">
        {c.sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-text/80 transition hover:border-violet-400/30 hover:text-violet-200"
          >
            {s.title}
          </a>
        ))}
      </nav>

      {/* SECTIONS */}
      <div className="space-y-10">
        {c.sections.map((s) => (
          <section key={s.id} id={s.id} className={card}>
            <h2 className="font-serif text-2xl sm:text-3xl">{s.title}</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-text/80 sm:text-base [&_a]:text-violet-300 [&_a]:underline [&_a]:decoration-1 [&_a]:underline-offset-2 hover:[&_a]:text-violet-200">
              {s.body}
            </div>
          </section>
        ))}
      </div>

      {/* FAQ */}
      <section className="mt-14">
        <h2 className="font-serif text-2xl sm:text-3xl">{c.faqTitle}</h2>
        <dl className="mt-6 space-y-4">
          {c.faq.map((f) => (
            <div key={f.q} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <dt className="font-medium text-text">{f.q}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-text/80">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* CTA — maillage vers les hubs */}
      <section className="mt-14 rounded-3xl border border-violet-400/20 bg-violet-500/[0.06] p-7 sm:p-9">
        <h2 className="font-serif text-2xl sm:text-3xl">{c.cta.title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-text/80">{c.cta.body}</p>
        <ul role="list" className="mt-5 flex flex-wrap gap-3">
          {c.cta.links.map((l) => (
            <li key={l.href}>
              <Link
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                href={l.href as any}
                className="inline-block rounded-full border border-violet-400/30 bg-white/5 px-5 py-2 text-sm font-medium text-violet-200 transition hover:bg-violet-400/10"
              >
                {l.label} →
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
