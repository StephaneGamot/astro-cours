import Image from "next/image";
import { notFound } from "next/navigation";

import signes from "../../../data/signes.details.json";

type Sign = (typeof signes)[number];

function getSign(slug: string): Sign | undefined {
  return (signes as Sign[]).find((s) => s.slug === slug);
}

export function generateStaticParams() {
  return (signes as Sign[]).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const sign = getSign(slug);
  if (!sign) return {};

  return {
    title: `${sign.name} — Cours d’astrologie`,
    description: `${sign.name} : période, polarité, mode, élément, maîtrises, symbolique et interprétation.`,
  };
}

export default async function SignPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const sign = getSign(slug);
  if (!sign) notFound();

  // Helpers pour éviter les crash si un champ manque sur certains signes
  const has = <T,>(v: T | undefined | null): v is T =>
    v !== undefined && v !== null;

  // --- Images (convention par dossier)
  // Hero (16:9) : 1600x900
  const heroSrc = `/images/signes/${sign.slug}/a.webp`;

  // Element (4:3) : 1200x900
  const elementSrc = `/images/signes/${sign.slug}/b.webp`;


  return (
    <main className="max-w-4xl mx-auto px-6 pb-10 text-text">
       {/* HERO IMAGE (16:9) */}
      <div className="mb-12 overflow-hidden rounded-3xl">
        <Image
          src={heroSrc}
          alt={`Illustration symbolique : ${sign.name}`}
          width={1500}
          height={300}
          priority
          className="h-auto w-full object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>

      
      {/* Header */}
      <header className="mb-8">
        <p className="text-sm text-muted">Signe du zodiaque</p>
        <h1 className="mt-2 font-serif text-4xl">{sign.name}</h1>

        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          {has(sign.periode) && (
            <span className="rounded-full bg-white/5 px-3 py-1 text-text/90">
              {sign.periode}
            </span>
          )}
          {has(sign.polarite) && (
            <span className="rounded-full bg-white/5 px-3 py-1 text-text/90">
              {sign.polarite}
            </span>
          )}
          {has(sign.mode) && (
            <span className="rounded-full bg-white/5 px-3 py-1 text-text/90">
              {sign.mode}
            </span>
          )}
          {has(sign.element) && (
            <span className="rounded-full bg-white/5 px-3 py-1 text-text/90">
              {sign.element}
            </span>
          )}
        </div>
      </header>

     

      {/* Essentiel */}
      <section aria-labelledby="essentiel" className="mb-10">
        <h2 id="essentiel" className="font-serif text-2xl">
          Essentiel
        </h2>

        <dl className="mt-4 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 sm:grid-cols-2">
          <div>
            <dt className="text-xs uppercase tracking-wide text-muted">Maître</dt>
            <dd className="mt-1 text-text">{sign.maitre ?? "—"}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-muted">
              Exaltation
            </dt>
            <dd className="mt-1 text-text">{sign.exaltation ?? "—"}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-muted">Exil</dt>
            <dd className="mt-1 text-text">{sign.exil ?? "—"}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-muted">Chute</dt>
            <dd className="mt-1 text-text">{sign.chute ?? "—"}</dd>
          </div>
        </dl>
      </section>

     

      {/* Mythologie */}
      {has(sign.mythologie) && (
        <section aria-labelledby="mythologie" className="mb-10">
          <h2 id="mythologie" className="font-serif text-2xl">
            Référence mythologique
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-text/85">
            {sign.mythologie}
          </p>
        </section>
      )}

      {/* Symbolique Image (3:2) – après mythologie */}
 

      {/* Analogies */}
      {has(sign.analogie) && (
        <section aria-labelledby="analogies" className="mb-10">
          <h2 id="analogies" className="font-serif text-2xl">
            Analogies symboliques
          </h2>

          <ul className="mt-4 grid gap-4 sm:grid-cols-3">
            <li className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-wide text-muted">Animal</p>
              <p className="mt-2 text-sm">{sign.analogie.animal}</p>
            </li>
            <li className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-wide text-muted">Objet</p>
              <p className="mt-2 text-sm">{sign.analogie.objet}</p>
            </li>
            <li className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-wide text-muted">
                Fonction
              </p>
              <p className="mt-2 text-sm">{sign.analogie.fonction}</p>
            </li>
          </ul>
        </section>
      )}
     
      {/* Anatomie */}
      {Array.isArray(sign.anatomie) && sign.anatomie.length > 0 && (
        <section aria-labelledby="anatomie" className="mb-10">
          <h2 id="anatomie" className="font-serif text-2xl">
            Anatomie associée
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {sign.anatomie.map((x: string) => (
              <li
                key={x}
                className="rounded-full bg-white/5 px-3 py-1 text-sm text-text/90"
              >
                {x}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Généralités */}
      {Array.isArray(sign.generalites) && sign.generalites.length > 0 && (
        <section aria-labelledby="generalites" className="mb-10">
          <h2 id="generalites" className="font-serif text-2xl">
            Généralités
          </h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-text/85">
            {sign.generalites.map((p: string) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>
      )}
       {/* ELEMENT IMAGE (4:3) – jolie "respiration" */}
      <div className="mb-12 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
        <Image
          src={elementSrc}
          alt={`Élément du signe : ${sign.element ?? sign.name}`}
          width={1200}
          height={700}
          className="h-auto w-full object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>

      {/* Repères (Forces / Ombres / Besoins) */}
      {(Array.isArray((sign as any).forces) ||
        Array.isArray((sign as any).ombres) ||
        Array.isArray((sign as any).besoins)) && (
        <section aria-labelledby="reperes" className="mb-10">
          <h2 id="reperes" className="font-serif text-2xl">
            Repères
          </h2>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-wide text-muted">Forces</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
                {Array.isArray((sign as any).forces) &&
                  (sign as any).forces.map((x: string) => <li key={x}>{x}</li>)}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-wide text-muted">Ombres</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
                {Array.isArray((sign as any).ombres) &&
                  (sign as any).ombres.map((x: string) => <li key={x}>{x}</li>)}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-wide text-muted">Besoins</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
                {Array.isArray((sign as any).besoins) &&
                  (sign as any).besoins.map((x: string) => <li key={x}>{x}</li>)}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Aptitudes */}
      {has(sign.aptitudes) && (
        <section aria-labelledby="aptitudes" className="mb-10">
          <h2 id="aptitudes" className="font-serif text-2xl">
            Aptitudes attribuées
          </h2>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-wide text-muted">Atouts</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
                {sign.aptitudes.atouts?.map((t: string) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-wide text-muted">Défis</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
                {sign.aptitudes.defis?.map((t: string) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Une planète dans le signe */}
      {has(sign.planeteDansLeSigne) && (
        <section aria-labelledby="planete" className="mb-10">
          <h2 id="planete" className="font-serif text-2xl">
            Une planète en {sign.name}
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-text/85">
            {sign.planeteDansLeSigne.intro}
          </p>

          {Array.isArray((sign.planeteDansLeSigne as any).motsCles) &&
            (sign.planeteDansLeSigne as any).motsCles.length > 0 && (
              <ul className="mt-3 flex flex-wrap gap-2">
                {(sign.planeteDansLeSigne as any).motsCles.map((k: string) => (
                  <li
                    key={k}
                    className="rounded-full bg-white/5 px-3 py-1 text-sm text-text/90"
                  >
                    {k}
                  </li>
                ))}
              </ul>
            )}

          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-text/85">
            {sign.planeteDansLeSigne.exemples?.map((e: string) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Le signe dans un thème (optionnel) */}
      {Array.isArray((sign as any).dansUnTheme) &&
        (sign as any).dansUnTheme.length > 0 && (
          <section aria-labelledby="dansuntheme" className="mb-10">
            <h2 id="dansuntheme" className="font-serif text-2xl">
              Le signe dans un thème
            </h2>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-text/85">
              {(sign as any).dansUnTheme.map((p: string) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </section>
        )}

      {/* Mot-clé */}
      {has(sign.motCle) && (
        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="font-serif text-2xl">Mot-clé</h2>
          <p className="mt-3 text-lg text-text/90">« {sign.motCle} »</p>
        </section>
      )}
      
    </main>
  );
}
