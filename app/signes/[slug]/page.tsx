import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import {
  elementTheme,
  getSign,
  getSignIndex,
  getZodiaqueItemBySlug,
} from "@/components/sections/zodiaque/Helpers";

import signes from "../../../data/signes.details.json";

type Sign = {
  slug: string;
  nom?: string;
  name?: string;

  element?: string;
  periode?: string;
  polarite?: string;
  mode?: string;

  maitre?: string;
  exaltation?: string;
  exil?: string;
  chute?: string;

  mythologie?: string;

  analogie?: {
    animal?: string;
    objet?: string;
    fonction?: string;
  };

  anatomie?: string[];
  generalites?: string[];

  forces?: string[];
  ombres?: string[];
  besoins?: string[];

  aptitudes?: {
    atouts?: string[];
    defis?: string[];
  };

  planeteDansLeSigne?: {
    intro?: string;
    motsCles?: string[];
    exemples?: string[];
  };

  dansUnTheme?: string[];

  motCle?: string;
};

const SITE_URL = "https://www.astro-cours.com";
const SITE_NAME = "Astro Cours";

const SIGNS = signes as Sign[];

function normalizeSlug(raw: string) {
  return decodeURIComponent(raw).trim().toLowerCase();
}

function getSignBySlug(slug: string) {
  const s = normalizeSlug(slug);
  return SIGNS.find((x) => x.slug === s);
}

function getSignLabel(sign: Sign) {
  return sign.nom ?? sign.name ?? sign.slug;
}

function getCanonicalUrl(slug: string) {
  return `${SITE_URL}/signes/${slug}`;
}

function getOgImageUrl(slug: string) {

    return `${SITE_URL}/images/zodiaque/png/${slug}.png`;
}

function getFallbackOgImageUrl(slug: string) {
  return `${SITE_URL}/images/signes/${slug}/b.webp`;
}

function clampMeta(s: string, max = 170) {
  const clean = s.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;

  const cut = clean.slice(0, max - 1);
  const last = cut.lastIndexOf(".");

  return last > 80 ? cut.slice(0, last + 1) : `${cut.trimEnd()}…`;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return SIGNS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug: raw } = await params;
  const slug = normalizeSlug(raw);

  const sign = getSignBySlug(slug);
  if (!sign) return {};

  const label = getSignLabel(sign);
  const canonical = getCanonicalUrl(slug);
  const ogImage = getOgImageUrl(slug);

  const hookParts = [
    sign.element ? `Élément ${sign.element}` : null,
    sign.mode ? `Mode ${sign.mode}` : null,
    sign.polarite ? sign.polarite : null,
  ].filter(Boolean);

  const hook = hookParts.length ? `${hookParts.join(" • ")}. ` : "";
  const time = sign.periode ? `Période : ${sign.periode}. ` : "";
  const ruler = sign.maitre ? `Maître : ${sign.maitre}. ` : "";
  const keyword = sign.motCle ? `Mot-clé : ${sign.motCle}. ` : "";

  const highlights =
    Array.isArray(sign.generalites) && sign.generalites.length
      ? `Repères : ${sign.generalites.slice(0, 2).join(" ")} `
      : Array.isArray(sign.forces) && sign.forces.length
      ? `Forces : ${sign.forces.slice(0, 2).join(", ")}. `
      : Array.isArray(sign.ombres) && sign.ombres.length
      ? `Défis : ${sign.ombres.slice(0, 2).join(", ")}. `
      : "";

  const action =
    "Traits, amour, travail, qualités, défis, symbolique et lecture claire du signe.";

  const description = clampMeta(
    `${label} : signe astrologique. ${hook}${time}${ruler}${keyword}${highlights}${action}`,
    170
  );

  const socialContentBySlug: Record<
    string,
    { title: string; description: string }
  > = {
    belier: {
      title: "Bélier : personnalité, amour, forces et défis",
      description:
        "Découvrez la personnalité du Bélier, ses qualités, ses défis, sa manière d’aimer et les grandes dynamiques de ce signe astrologique.",
    },
    taureau: {
      title: "Taureau : personnalité, amour, forces et défis",
      description:
        "Découvrez la personnalité du Taureau, sa stabilité, ses qualités, ses défis et sa manière d’aimer en astrologie.",
    },
    gemeaux: {
      title: "Gémeaux : personnalité, amour, forces et défis",
      description:
        "Découvrez la personnalité des Gémeaux, leur vivacité d’esprit, leurs qualités, leurs défis et leur manière d’aimer.",
    },
    cancer: {
      title: "Cancer : personnalité, amour, forces et défis",
      description:
        "Découvrez la personnalité du Cancer, sa sensibilité, ses qualités, ses défis et sa manière d’aimer en astrologie.",
    },
    lion: {
      title: "Lion : personnalité, amour, forces et défis",
      description:
        "Découvrez la personnalité du Lion, son rayonnement, ses qualités, ses défis et sa manière d’aimer.",
    },
    vierge: {
      title: "Vierge : personnalité, amour, forces et défis",
      description:
        "Découvrez la personnalité de la Vierge, sa précision, ses qualités, ses défis et sa manière d’aimer.",
    },
    balance: {
      title: "Balance : personnalité, amour, forces et défis",
      description:
        "Découvrez la personnalité de la Balance, son sens de l’harmonie, ses qualités, ses défis et sa manière d’aimer.",
    },
    scorpion: {
      title: "Scorpion : personnalité, amour, forces et défis",
      description:
        "Découvrez la personnalité du Scorpion, son intensité, ses qualités, ses défis et sa manière d’aimer.",
    },
    sagittaire: {
      title: "Sagittaire : personnalité, amour, forces et défis",
      description:
        "Découvrez la personnalité du Sagittaire, son élan, ses qualités, ses défis et sa manière d’aimer.",
    },
    capricorne: {
      title: "Capricorne : personnalité, amour, forces et défis",
      description:
        "Découvrez la personnalité du Capricorne, sa discipline, ses qualités, ses défis et sa manière d’aimer.",
    },
    verseau: {
      title: "Verseau : personnalité, amour, forces et défis",
      description:
        "Découvrez la personnalité du Verseau, son originalité, ses qualités, ses défis et sa manière d’aimer.",
    },
    poissons: {
      title: "Poissons : personnalité, amour, forces et défis",
      description:
        "Découvrez la personnalité des Poissons, leur sensibilité, leurs qualités, leurs défis et leur manière d’aimer.",
    },
  };

  const social = socialContentBySlug[slug] ?? {
    title: `${label} : personnalité, amour, forces et défis`,
    description: `Découvrez la personnalité du ${label}, ses qualités, ses défis, sa manière d’aimer et les grandes dynamiques de ce signe astrologique.`,
  };

  const socialTitle = social.title;
  const socialDescription = clampMeta(social.description, 170);

  return {
    title: `${label} — Signe astrologique | ${SITE_NAME}`,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: socialTitle,
      description: socialDescription,
      url: canonical,
      siteName: SITE_NAME,
      locale: "fr_FR",
      type: "article",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `Illustration astrologique du signe ${label}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: socialDescription,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function SignPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug: raw } = await params;
  const slug = normalizeSlug(raw);

  const sign = getSign(slug);
  if (!sign) notFound();

  const label = sign.name;
  const canonical = getCanonicalUrl(sign.slug);
  const ogImage = getOgImageUrl(sign.slug);
  const fallbackOgImage = getFallbackOgImageUrl(sign.slug);

  const list = SIGNS;
  const idx = getSignIndex(sign.slug);
  if (idx === -1) notFound();

  const prevSign = list[(idx - 1 + list.length) % list.length];
  const nextSign = list[(idx + 1) % list.length];

  const prevItem = prevSign ? getZodiaqueItemBySlug(prevSign.slug) : undefined;
  const nextItem = nextSign ? getZodiaqueItemBySlug(nextSign.slug) : undefined;

  const prevImgSrc =
    prevItem?.image?.src ?? `/images/zodiaque/${prevSign.slug}.webp`;

  const prevImgAlt =
    prevItem?.image?.alt ?? `Symbole astrologique du ${prevSign.name}`;

  const nextImgSrc =
    nextItem?.image?.src ?? `/images/zodiaque/${nextSign.slug}.webp`;

  const nextImgAlt =
    nextItem?.image?.alt ?? `Symbole astrologique du ${nextSign.name}`;

  const heroSrc = `/images/signes/${sign.slug}/a.webp`;
  const elementSrc = `/images/signes/${sign.slug}/b.webp`;

  const accent = elementTheme(sign.element);

  const has = <T,>(v: T | undefined | null): v is T =>
    v !== undefined && v !== null;

  const introText =
    Array.isArray(sign.generalites) && sign.generalites.length > 0
      ? sign.generalites[0]
      : `${label} est un signe du zodiaque associé à une dynamique particulière, à un élément, à un rythme et à une manière singulière d’entrer dans la vie.`;

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${label} — Signe astrologique`,
    headline: `${label} — Signe astrologique`,
    description: introText,
    url: canonical,
    inLanguage: "fr-FR",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: ogImage,
    },
    about: {
      "@type": "Thing",
      name: label,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Signes astrologiques",
        item: `${SITE_URL}/signes`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: label,
        item: canonical,
      },
    ],
  };

  const definedTermJsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: label,
    description: introText,
    inDefinedTermSet: `${SITE_URL}/signes`,
    termCode: sign.slug,
    url: canonical,
  };

  const Card = ({
    children,
    className = "",
  }: {
    children: ReactNode;
    className?: string;
  }) => (
    <div
      className={`rounded-3xl border ${accent.border} bg-white/5 p-6 backdrop-blur ${accent.glow} ${className}`}
    >
      {children}
    </div>
  );

  const H2 = ({ id, children }: { id: string; children: ReactNode }) => (
    <h2 id={id} className="font-serif text-2xl sm:text-3xl">
      <span className={`mr-3 inline-block h-2 w-2 rounded-full ${accent.dot}`} />
      {children}
    </h2>
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermJsonLd) }}
      />

      <main className="mx-auto max-w-4xl px-6 pb-12 text-text">
        <header
          className={`mb-10 rounded-3xl border ${accent.border} bg-white/5 p-6 ${accent.glow}`}
          aria-labelledby="sign-title"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-muted">
            Signe du zodiaque
          </p>

          <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
            <h1 id="sign-title" className="font-serif text-4xl sm:text-5xl">
              {label}
            </h1>

            {has(sign.element) && (
              <span
                className={`inline-flex items-center gap-2 rounded-full border ${accent.border} ${accent.bg} px-4 py-2 text-sm ${accent.text}`}
              >
                <span className={`h-2 w-2 rounded-full ${accent.dot}`} />
                {sign.element}
              </span>
            )}
          </div>

          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            {has(sign.periode) && (
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-text/90">
                {sign.periode}
              </span>
            )}
            {has(sign.polarite) && (
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-text/90">
                {sign.polarite}
              </span>
            )}
            {has(sign.mode) && (
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-text/90">
                {sign.mode}
              </span>
            )}
            {has(sign.maitre) && (
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-text/90">
                Maître : {sign.maitre}
              </span>
            )}
          </div>
        </header>

        <div
          className={`mb-12 overflow-hidden rounded-3xl border ${accent.border} bg-white/5 ${accent.glow}`}
        >
          <div className="relative">
            <Image
              src={heroSrc}
              alt={`Illustration symbolique : ${label}`}
              width={1600}
              height={900}
              priority
              className="h-auto w-full object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
            <div
              className={`pointer-events-none absolute bottom-0 left-0 h-1 w-full ${accent.line}`}
            />
          </div>
        </div>

        <section aria-labelledby="essentiel" className="mb-10">
          <H2 id="essentiel">Essentiel</H2>

          <Card className="mt-4">
            <dl className="grid gap-5 sm:grid-cols-2">
              {[
                ["Maître", sign.maitre],
                ["Exaltation", sign.exaltation],
                ["Exil", sign.exil],
                ["Chute", sign.chute],
              ].map(([label, value]) => (
                <div
                  key={label as string}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4"
                >
                  <dt className="text-xs uppercase tracking-wide text-muted">
                    {label}
                  </dt>
                  <dd className="mt-1 text-base text-text">{(value as any) ?? "—"}</dd>
                </div>
              ))}
            </dl>
          </Card>
        </section>

        {has(sign.mythologie) && (
          <section aria-labelledby="mythologie" className="mb-10">
            <H2 id="mythologie">Référence mythologique</H2>
            <Card className="mt-4">
              <p className="text-sm leading-relaxed text-text/85">
                {sign.mythologie}
              </p>
            </Card>
          </section>
        )}

        {has(sign.analogie) && (
          <section aria-labelledby="analogies" className="mb-10">
            <H2 id="analogies">Analogies symboliques</H2>

            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {[
                ["Animal", sign.analogie.animal],
                ["Objet", sign.analogie.objet],
                ["Fonction", sign.analogie.fonction],
              ].map(([t, v]) => (
                <div
                  key={t as string}
                  className={`rounded-3xl border ${accent.border} bg-white/5 p-5 ${accent.glow}`}
                >
                  <p className="text-xs uppercase tracking-wide text-muted">{t}</p>
                  <p className="mt-2 text-sm text-text/85">{v as string}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {Array.isArray(sign.anatomie) && sign.anatomie.length > 0 && (
          <section aria-labelledby="anatomie" className="mb-10">
            <H2 id="anatomie">Anatomie associée</H2>
            <Card className="mt-4">
              <ul className="flex flex-wrap gap-2">
                {sign.anatomie.map((x: string) => (
                  <li
                    key={x}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-text/90"
                  >
                    {x}
                  </li>
                ))}
              </ul>
            </Card>
          </section>
        )}

        {Array.isArray(sign.generalites) && sign.generalites.length > 0 && (
          <section aria-labelledby="generalites" className="mb-10">
            <H2 id="generalites">Généralités</H2>
            <Card className="mt-4">
              <div className="space-y-3 text-sm leading-relaxed text-text/85">
                {sign.generalites.map((p: string) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Card>
          </section>
        )}

        <div
          className={`mb-12 overflow-hidden rounded-3xl border ${accent.border} bg-white/5 ${accent.glow}`}
        >
          <Image
            src={elementSrc}
            alt={`Élément du signe : ${sign.element ?? label}`}
            width={1200}
            height={900}
            className="h-auto w-full object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>

        {(Array.isArray(sign.forces) ||
          Array.isArray(sign.ombres) ||
          Array.isArray(sign.besoins)) && (
          <section aria-labelledby="reperes" className="mb-10">
            <H2 id="reperes">Repères</H2>

            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {[
                ["Forces", sign.forces],
                ["Ombres", sign.ombres],
                ["Besoins", sign.besoins],
              ].map(([title, arr]) => (
                <div
                  key={title as string}
                  className={`rounded-3xl border ${accent.border} bg-white/5 p-5 ${accent.glow}`}
                >
                  <p className="text-xs uppercase tracking-wide text-muted">{title}</p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
                    {Array.isArray(arr) &&
                      (arr as string[]).map((x) => <li key={x}>{x}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {has(sign.aptitudes) && (
          <section aria-labelledby="aptitudes" className="mb-10">
            <H2 id="aptitudes">Aptitudes attribuées</H2>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {[
                ["Atouts", sign.aptitudes.atouts],
                ["Défis", sign.aptitudes.defis],
              ].map(([title, arr]) => (
                <div
                  key={title as string}
                  className={`rounded-3xl border ${accent.border} bg-white/5 p-6 ${accent.glow}`}
                >
                  <p className="text-xs uppercase tracking-wide text-muted">{title}</p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
                    {Array.isArray(arr) &&
                      (arr as string[]).map((x) => <li key={x}>{x}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {has(sign.planeteDansLeSigne) && (
          <section aria-labelledby="planete" className="mb-10">
            <H2 id="planete">Une planète en {label}</H2>

            <Card className="mt-4">
              <p className="text-sm leading-relaxed text-text/85">
                {sign.planeteDansLeSigne.intro}
              </p>

              {Array.isArray(sign.planeteDansLeSigne?.motsCles) &&
                sign.planeteDansLeSigne.motsCles.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {sign.planeteDansLeSigne.motsCles.map((k: string) => (
                      <li
                        key={k}
                        className={`rounded-full border ${accent.border} ${accent.bg} px-3 py-1 text-sm ${accent.text}`}
                      >
                        {k}
                      </li>
                    ))}
                  </ul>
                )}

              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-text/85">
                {sign.planeteDansLeSigne.exemples?.map((e: string) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </Card>
          </section>
        )}

        {Array.isArray(sign.dansUnTheme) && sign.dansUnTheme.length > 0 && (
          <section aria-labelledby="dansuntheme" className="mb-10">
            <H2 id="dansuntheme">Le signe dans un thème</H2>
            <Card className="mt-4">
              <div className="space-y-3 text-sm leading-relaxed text-text/85">
                {sign.dansUnTheme.map((p: string) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Card>
          </section>
        )}

        <footer className="mt-12 border-t border-white/10 pt-8">
          {has(sign.motCle) && (
            <div className="flex justify-center">
              <p
                role="note"
                aria-label="Mot-clé du signe"
                className={`inline-flex items-center gap-3 rounded-full border ${accent.border} ${accent.bg} px-6 py-3 ${accent.text} ${accent.glow}`}
              >
                <span className="text-xs uppercase tracking-wide text-muted">
                  Mot-clé
                </span>
                <span className="font-serif text-xl text-text/95">
                  « {sign.motCle} »
                </span>
              </p>
            </div>
          )}

          <nav
            aria-label="Navigation entre les signes"
            className="mt-8 grid gap-4 sm:grid-cols-2"
          >
            {prevSign ? (
              <Link
                href={`/signes/${prevSign.slug}`}
                className={`group rounded-3xl border ${accent.border} bg-white/5 p-5 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 ${accent.ring} ${accent.glow}`}
                aria-label={`Aller au signe précédent : ${prevSign.name}`}
              >
                <div className="flex items-center gap-4">
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-wide text-muted">
                      Précédent
                    </p>
                    <p className="mt-1 font-serif text-2xl text-text group-hover:underline">
                      {prevSign.name}
                    </p>
                    <p className="mt-1 text-sm text-text/70">
                      {(prevSign as any).periode ?? ""}
                    </p>
                  </div>

                  {prevItem?.image?.src ? (
                    <div
                      className={`relative h-24 w-24 overflow-hidden rounded-2xl border ${accent.border} bg-black/20`}
                    >
                      <Image
                        src={prevImgSrc}
                        alt={prevImgAlt}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-[1.04]"
                        sizes="96px"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>
                  ) : (
                    <div
                      className={`h-24 w-24 rounded-2xl border ${accent.border} bg-white/5`}
                    />
                  )}
                </div>
              </Link>
            ) : (
              <div className="hidden sm:block" />
            )}

            {nextSign ? (
              <Link
                href={`/signes/${nextSign.slug}`}
                className={`group rounded-3xl border ${accent.border} bg-white/5 p-5 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 ${accent.ring} ${accent.glow}`}
                aria-label={`Aller au signe suivant : ${nextSign.name}`}
              >
                <div className="flex items-center gap-4">
                  {nextItem?.image?.src ? (
                    <div
                      className={`relative h-24 w-24 overflow-hidden rounded-2xl border ${accent.border} bg-black/20`}
                    >
                      <Image
                        src={nextImgSrc}
                        alt={nextImgAlt}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-[1.04]"
                        sizes="96px"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>
                  ) : (
                    <div
                      className={`h-24 w-24 rounded-2xl border ${accent.border} bg-white/5`}
                    />
                  )}

                  <div className="min-w-0 flex-1 text-right">
                    <p className="text-xs uppercase tracking-wide text-muted">
                      Suivant
                    </p>
                    <p className="mt-1 font-serif text-2xl text-text group-hover:underline">
                      {nextSign.name}
                    </p>
                    <p className="mt-1 text-sm text-text/70">
                      {(nextSign as any).periode ?? ""}
                    </p>
                  </div>
                </div>
              </Link>
            ) : (
              <div className="hidden sm:block" />
            )}
          </nav>
        </footer>
      </main>
    </>
  );
}
