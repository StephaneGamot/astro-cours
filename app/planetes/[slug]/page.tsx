import Link from "next/link";
import { notFound } from "next/navigation";

import {
  PLANETS,
  getPlanet,
  getPlanetIndex,
  has,
  planetTheme,
  planetThumbSrc,
} from "./helpers";

import { Aura, Card, Hero, NavCard, SectionTitle } from "./ui";

export function generateStaticParams() {
  return PLANETS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const planet = getPlanet(slug);
  if (!planet) return {};
  return {
    title: `${planet.name} — Cours d’astrologie`,
    description: `${planet.name} : symbolique, expressions, maisons et aspects.`,
  };
}

export default async function PlanetPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const planet = getPlanet(slug);
  if (!planet) notFound();

  const idx = getPlanetIndex(planet.slug);
  if (idx === -1) notFound();

  const prev = idx > 0 ? PLANETS[idx - 1] : undefined;
  const next = idx < PLANETS.length - 1 ? PLANETS[idx + 1] : undefined;

  const accent = planetTheme(planet.slug);

  const heroSrc = planet.hero?.src ?? `/images/planetes/${planet.slug}/a.webp`;
  const heroAlt = planet.hero?.alt ?? `Illustration de ${planet.name}`;
  const thumbSrc = planet.image?.src ?? `/images/planetes/${planet.slug}/thumb.webp`;

  return (
    <main className="relative mx-auto max-w-4xl px-6 pb-12 text-text">
      <Aura aura={accent.aura} />

      {/* Header */}
      <header className={`mb-10 rounded-3xl border ${accent.border} bg-white/5 p-6 ${accent.glow}`}>
        <p className="text-xs uppercase tracking-[0.18em] text-muted">Planète</p>

        <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
          <h1 className="font-serif text-4xl sm:text-5xl">{planet.name}</h1>

          {has(planet.categorie) && (
            <span className={`inline-flex items-center gap-2 rounded-full border ${accent.border} ${accent.bg} px-4 py-2 text-sm ${accent.text}`}>
              <span className={`h-2 w-2 rounded-full ${accent.dot}`} />
              {planet.categorie}
            </span>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          {has(planet.motCle) && (
            <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-text/90">
              Mot-clé : {planet.motCle}
            </span>
          )}
          {has(planet.fonction) && (
            <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-text/90">
              {planet.fonction}
            </span>
          )}
          {has(planet.rythme) && (
            <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-text/90">
              Rythme : {planet.rythme}
            </span>
          )}
        </div>
      </header>

      {/* Hero */}
      <Hero
        src={heroSrc}
        alt={heroAlt}
        borderClass={accent.border}
        glowClass={accent.glow}
        lineClass={accent.line}
      />

      {/* Résumé express */}
      {Array.isArray(planet.resume) && planet.resume.length > 0 && (
        <section aria-labelledby="resume" className="mb-10">
          <SectionTitle id="resume" dotClass={accent.dot}>
            Résumé express
          </SectionTitle>

          <Card borderClass={accent.border} glowClass={accent.glow} className="mt-4">
            <ul className="space-y-2 text-sm text-text/85">
              {planet.resume.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${accent.dot}`} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </Card>
        </section>
      )}

      {/* Essentiel */}
      <section aria-labelledby="essentiel" className="mb-10">
        <SectionTitle id="essentiel" dotClass={accent.dot}>
          Essentiel
        </SectionTitle>

        <Card borderClass={accent.border} glowClass={accent.glow} className="mt-4">
          <dl className="grid gap-5 sm:grid-cols-2">
            {[
              ["Domicile", planet.domicile],
              ["Exaltation", planet.exaltation],
              ["Exil", planet.exil],
              ["Chute", planet.chute],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <dt className="text-xs uppercase tracking-wide text-muted">{label}</dt>
                <dd className="mt-1 text-base text-text">{value ?? "—"}</dd>
              </div>
            ))}
          </dl>
        </Card>
      </section>

      {/* Symbolique */}
      {has(planet.symbolique) && (
        <section aria-labelledby="symbolique" className="mb-10">
          <SectionTitle id="symbolique" dotClass={accent.dot}>
            Symbolique
          </SectionTitle>
          <Card borderClass={accent.border} glowClass={accent.glow} className="mt-4">
            <p className="text-sm leading-relaxed text-text/85">{planet.symbolique}</p>
          </Card>
        </section>
      )}

      {/* Mots-clés */}
      {Array.isArray(planet.motsCles) && planet.motsCles.length > 0 && (
        <section aria-labelledby="motscles" className="mb-10">
          <SectionTitle id="motscles" dotClass={accent.dot}>
            Mots-clés
          </SectionTitle>
          <Card borderClass={accent.border} glowClass={accent.glow} className="mt-4">
            <ul className="flex flex-wrap gap-2">
              {planet.motsCles.map((k) => (
                <li key={k} className={`rounded-full border ${accent.border} ${accent.bg} px-3 py-1 text-sm ${accent.text}`}>
                  {k}
                </li>
              ))}
            </ul>
          </Card>
        </section>
      )}

      {/* Forces / Ombres */}
      {(Array.isArray(planet.forces) || Array.isArray(planet.ombres)) && (
        <section aria-labelledby="polarites" className="mb-10">
          <SectionTitle id="polarites" dotClass={accent.dot}>
            Polarités
          </SectionTitle>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Card borderClass={accent.border} glowClass={accent.glow}>
              <p className="text-xs uppercase tracking-wide text-muted">Forces</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
                {Array.isArray(planet.forces) &&
                  planet.forces.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </Card>

            <Card borderClass={accent.border} glowClass={accent.glow}>
              <p className="text-xs uppercase tracking-wide text-muted">Ombres</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
                {Array.isArray(planet.ombres) &&
                  planet.ombres.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </Card>
          </div>
        </section>
      )}

      {/* Expressions */}
      {planet.expression && (
        <section aria-labelledby="expressions" className="mb-10">
          <SectionTitle id="expressions" dotClass={accent.dot}>
            Expressions
          </SectionTitle>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <Card borderClass={accent.border} glowClass={accent.glow}>
              <p className="text-xs uppercase tracking-wide text-muted">Aligné</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
                {planet.expression.aligne?.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </Card>

            <Card borderClass={accent.border} glowClass={accent.glow}>
              <p className="text-xs uppercase tracking-wide text-muted">En excès</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
                {planet.expression.exces?.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </Card>

            <Card borderClass={accent.border} glowClass={accent.glow}>
              <p className="text-xs uppercase tracking-wide text-muted">En manque</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
                {planet.expression.manque?.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </Card>
          </div>
        </section>
      )}

      {/* Maisons */}
      {Array.isArray(planet.dansLesMaisons) && planet.dansLesMaisons.length > 0 && (
        <section aria-labelledby="maisons" className="mb-10">
          <SectionTitle id="maisons" dotClass={accent.dot}>
            Dans les maisons
          </SectionTitle>

          <Card borderClass={accent.border} glowClass={accent.glow} className="mt-4">
            <div className="space-y-3">
              {planet.dansLesMaisons
                .slice()
                .sort((a, b) => a.maison - b.maison)
                .map((m) => (
                  <div key={m.maison} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xs uppercase tracking-wide text-muted">
                      Maison {m.maison}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-text/85">{m.texte}</p>
                  </div>
                ))}
            </div>
          </Card>
        </section>
      )}

      {/* Aspects */}
      {Array.isArray(planet.aspects) && planet.aspects.length > 0 && (
        <section aria-labelledby="aspects" className="mb-10">
          <SectionTitle id="aspects" dotClass={accent.dot}>
            Aspects principaux
          </SectionTitle>

          <Card borderClass={accent.border} glowClass={accent.glow} className="mt-4">
            <div className="space-y-3">
              {planet.aspects.map((a) => (
                <div key={a.aspect} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-wide text-muted">{a.aspect}</p>
                  <p className="mt-2 text-sm leading-relaxed text-text/85">{a.texte}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>
      )}

      {/* Dans un thème */}
      {Array.isArray(planet.dansUnTheme) && planet.dansUnTheme.length > 0 && (
        <section aria-labelledby="dansuntheme" className="mb-10">
          <SectionTitle id="dansuntheme" dotClass={accent.dot}>
            {planet.name} dans un thème
          </SectionTitle>

          <Card borderClass={accent.border} glowClass={accent.glow} className="mt-4">
            <div className="space-y-3 text-sm leading-relaxed text-text/85">
              {planet.dansUnTheme.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Card>
        </section>
      )}

      {/* Footer + nav */}
      <footer className="mt-12 border-t border-white/10 pt-8">
        <nav aria-label="Navigation entre les planètes" className="mt-8 grid gap-4 sm:grid-cols-2">
         {prev ? (
  <NavCard
    side="prev"
    href={`/planetes/${prev.slug}`}
    label="Précédent"
    name={prev.name}
    subtitle={prev.fonction ?? ""}
    imageSrc={planetThumbSrc(prev.slug)}
    imageAlt={`Illustration de ${prev.name}`}
    borderClass={accent.border}
    ringClass={accent.ring}
    glowClass={accent.glow}
  />
) : (
  <div className="hidden sm:block" />
)}

{next ? (
  <NavCard
    side="next"
    href={`/planetes/${next.slug}`}
    label="Suivant"
    name={next.name}
    subtitle={next.fonction ?? ""}
    imageSrc={planetThumbSrc(next.slug)}
    imageAlt={`Illustration de ${next.name}`}
    borderClass={accent.border}
    ringClass={accent.ring}
    glowClass={accent.glow}
  />
) : (
  <div className="hidden sm:block" />
)}

        </nav>

        <div className="mt-8 flex justify-center">
          <Link
            href="/#planetes"
            className={`rounded-full border ${accent.border} ${accent.bg} px-5 py-2 text-sm ${accent.text} hover:bg-white/10`}
          >
            ← Retour aux planètes
          </Link>
        </div>
      </footer>
    </main>
  );
}
