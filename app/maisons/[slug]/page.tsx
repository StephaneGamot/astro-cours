import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import maisons from "../../../data/maisons.details.json";
import planetes from "../../../data/planetes.details.json";

/* ---------------- Types ---------------- */

type HouseType = "angulaire" | "succedente" | "cadente";
type Quadrant = "Est" | "Ouest" | "Nord" | "Sud";

type House = {
  numero: number;
  slug: string;
  titreCourt?: string;
  nom: string;
  axe?: string;
  type?: HouseType;
  quadrant?: Quadrant;

  niveauLecture?: {
    motsCles?: string[];
    fonction?: string;
    arena?: string;
    verbes?: string[];
    questions?: string[];
  };

  domaines: {
    principaux?: string[];
    secondaires?: string[];
    dansLaVie?: string[];
  };

  pedagogie?: {
    aRetenir?: string[];
    erreursFrequences?: string[];
    repereInterpretation?: string[];
  };

  polarites?: {
    forces?: string[];
    ombres?: string[];
    besoins?: string[];
  };

  pratique?: {
    phrasesCles?: string[];
    exemplesConcrets?: string[];
    exercices?: string[];
  };

  planetesDansLaMaisonOverrides?: Record<
    string,
    { angle?: string; texte: string; motsCles?: string[] }
  >;
};

type Planet = {
  slug: string;
  name: string;
  motCle?: string;
  fonction?: string;
  categorie?: string;
};



const ROMAN = [
  "",
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
  "XI",
  "XII",
] as const;

function toRoman(n: number) {
  return ROMAN[n] ?? String(n);
}

const HOUSES = maisons as House[];
const PLANETS = planetes as Planet[];

const has = <T,>(v: T | undefined | null): v is T =>
  v !== undefined && v !== null;

/* ---------------- Data helpers ---------------- */

function getHouse(slug: string) {
  return HOUSES.find((h) => h.slug === slug);
}
function getHouseIndex(slug: string) {
  return HOUSES.findIndex((h) => h.slug === slug);
}

function themeForHouse(h: House) {
  const byType: Record<
    HouseType,
    { border: string; pill: string; dot: string; ring: string }
  > = {
    angulaire: {
      border: "border-emerald-400/25",
      pill: "bg-emerald-500/10 text-emerald-200 border-emerald-400/20",
      dot: "bg-emerald-400/70",
      ring: "focus-visible:ring-emerald-400/35",
    },
    succedente: {
      border: "border-sky-400/25",
      pill: "bg-sky-500/10 text-sky-200 border-sky-400/20",
      dot: "bg-sky-400/70",
      ring: "focus-visible:ring-sky-400/35",
    },
    cadente: {
      border: "border-violet-400/25",
      pill: "bg-violet-500/10 text-violet-200 border-violet-400/20",
      dot: "bg-violet-400/70",
      ring: "focus-visible:ring-violet-400/35",
    },
  };

  const t = byType[h.type ?? "cadente"];

  const quadrantLabel =
    h.quadrant === "Est"
      ? "Est (moi)"
      : h.quadrant === "Ouest"
      ? "Ouest (autre)"
      : h.quadrant === "Nord"
      ? "Nord (racines)"
      : h.quadrant === "Sud"
      ? "Sud (monde)"
      : undefined;

  return { ...t, quadrantLabel };
}

function planetInHouseText(planet: Planet, house: House) {
  const override = house.planetesDansLaMaisonOverrides?.[planet.slug];
  if (override?.texte) return override.texte;

  const arena = house.niveauLecture?.arena ?? `Maison ${house.numero}`;
  const pf = planet.fonction ?? planet.name;
  const motCle = planet.motCle ? ` (${planet.motCle})` : "";

  // Gabarit volontairement clair, pédagogique, pas ésotérique flou.
  return `${planet.name}${motCle} en ${arena} : la fonction de ${pf} s’exprime ici de manière concrète. Elle colore les expériences liées à cette maison, devient un thème récurrent et indique un “point d’action” privilégié. Le défi est d’éviter l’excès (sur-investir ce domaine) ou l’évitement (ne pas assumer la leçon de cette maison) ; la maturité consiste à canaliser cette énergie vers des choix simples et cohérents.`;
}

/* ---------------- Next.js ---------------- */

export function generateStaticParams() {
  return HOUSES.map((h) => ({ slug: h.slug }));
}

export function generateMetadata(
  { params }: { params: { slug: string } }
): Metadata {
  const house = getHouse(params.slug);
  if (!house) return {};

  const title = `${house.titreCourt ?? `Maison ${house.numero}`} — ${house.nom}`;

  const principaux = (house.domaines?.principaux ?? []).filter(Boolean);
  const descPlus = principaux.length ? ` Domaines : ${principaux.join(", ")}.` : "";

  return {
    title,
    description: `Maison ${house.numero} : sens, domaines, repères et interprétations.${descPlus}`,
    alternates: {
      canonical: `/maisons/${house.slug}`,
    },
    openGraph: {
      title,
      description: `Maison ${house.numero} : sens, domaines, repères et interprétations.${descPlus}`,
      url: `/maisons/${house.slug}`,
      type: "article",
    },
  };
}


export default async function HousePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const house = getHouse(slug);
  if (!house) notFound();

  const heroSrc = `/images/maisons/hero/${toRoman(house.numero)}.webp`;

  const idx = getHouseIndex(house.slug);
  if (idx === -1) notFound();

const prev = HOUSES[(idx - 1 + HOUSES.length) % HOUSES.length];
const next = HOUSES[(idx + 1) % HOUSES.length];


  const theme = themeForHouse(house);

  const chips: Array<{ label: string; value?: string }> = [
    { label: "Axe", value: house.axe },
    { label: "Type", value: house.type },
    { label: "Quadrant", value: theme.quadrantLabel },
    { label: "Arena", value: house.niveauLecture?.arena },
  ].filter((x) => !!x.value);

  return (
    <main className="mx-auto max-w-4xl px-6 pb-12 text-text">
      {/* Header */}
      <section className="mb-10">
        {/* HERO IMAGE */}
        <div
          className={`relative overflow-hidden rounded-[2.5rem] border ${theme.border} bg-white/5`}
        >
          <div className="relative h-[38vh] min-h-[320px] w-full">
            <Image
              src={heroSrc}
              alt={`${
                house.titreCourt ?? `Maison ${toRoman(house.numero)}`
              } — ${house.nom}`}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>

          {/* overlays */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_10%,rgba(255,255,255,0.14),transparent_55%)]" />

          {/* Badge type (dans le hero) */}
          <div className="absolute right-5 top-5 sm:right-7 sm:top-7">
            <span
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm ${theme.pill} backdrop-blur`}
            >
              <span className={`h-2 w-2 rounded-full ${theme.dot}`} />
              {house.type ?? "cadente"}
            </span>
          </div>

          {/* Titre (dans le hero) */}
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-white/70">
              Maisons astrologiques
            </p>

            <h1 className="mt-2 font-serif text-4xl text-white sm:text-5xl">
              {house.titreCourt ?? `Maison ${toRoman(house.numero)}`}{" "}
              <span className="text-white/70">— {house.nom}</span>
            </h1>

            {house.niveauLecture?.arena ? (
              <p className="mt-3 max-w-2xl text-sm text-white/80">
                {house.niveauLecture.arena}
              </p>
            ) : null}
          </div>
        </div>

        {/* HEADER “CARTE” (tes chips + mots-clés) */}
        <header
          className={`mt-6 rounded-3xl border ${theme.border} bg-white/5 p-6 backdrop-blur`}
        >
          {chips.length > 0 && (
            <div className="flex flex-wrap gap-2 text-sm">
              {chips.map((c) => (
                <span
                  key={c.label}
                  className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-text/90"
                >
                  <span className="text-muted">{c.label} :</span> {c.value}
                </span>
              ))}
            </div>
          )}

          {house.niveauLecture?.motsCles?.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {house.niveauLecture.motsCles.map((k) => (
                <span
                  key={k}
                  className={`rounded-full border ${theme.border} bg-white/5 px-3 py-1 text-sm`}
                >
                  {k}
                </span>
              ))}
            </div>
          ) : null}
        </header>
      </section>

      {/* Fonction */}
      {has(house.niveauLecture?.fonction) && (
        <section className="mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl">
            <span
              className={`mr-3 inline-block h-2 w-2 rounded-full ${theme.dot}`}
            />
            Fonction
          </h2>
          <div
            className={`mt-4 rounded-3xl border ${theme.border} bg-white/5 p-6`}
          >
            <p className="text-sm leading-relaxed text-text/85">
              {house.niveauLecture?.fonction}
            </p>
            {house.niveauLecture?.verbes?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {house.niveauLecture.verbes.map((v) => (
                  <span
                    key={v}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm"
                  >
                    {v}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </section>
      )}

      {/* Questions */}
      {house.niveauLecture?.questions?.length ? (
        <section className="mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl">
            <span
              className={`mr-3 inline-block h-2 w-2 rounded-full ${theme.dot}`}
            />
            Questions clés
          </h2>
          <div
            className={`mt-4 rounded-3xl border ${theme.border} bg-white/5 p-6`}
          >
            <ul className="space-y-2 text-sm text-text/85">
              {house.niveauLecture.questions.map((q) => (
                <li key={q} className="flex gap-3">
                  <span
                    className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${theme.dot}`}
                  />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* Domaines */}
      {(house.domaines?.principaux?.length ||
        house.domaines?.secondaires?.length ||
        house.domaines?.dansLaVie?.length) && (
        <section className="mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl">
            <span
              className={`mr-3 inline-block h-2 w-2 rounded-full ${theme.dot}`}
            />
            Domaines
          </h2>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {house.domaines?.principaux?.length ? (
              <div
                className={`rounded-3xl border ${theme.border} bg-white/5 p-6`}
              >
                <p className="text-xs uppercase tracking-wide text-muted">
                  Principaux
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {house.domaines.principaux.map((d) => (
                    <li
                      key={d}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {house.domaines?.secondaires?.length ? (
              <div
                className={`rounded-3xl border ${theme.border} bg-white/5 p-6`}
              >
                <p className="text-xs uppercase tracking-wide text-muted">
                  Secondaires
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {house.domaines.secondaires.map((d) => (
                    <li
                      key={d}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {house.domaines?.dansLaVie?.length ? (
              <div
                className={`rounded-3xl border ${theme.border} bg-white/5 p-6 sm:col-span-2`}
              >
                <p className="text-xs uppercase tracking-wide text-muted">
                  Dans la vie
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {house.domaines.dansLaVie.map((d) => (
                    <li
                      key={d}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </section>
      )}

      {/* Forces / Ombres / Besoins */}
      {(house.polarites?.forces?.length ||
        house.polarites?.ombres?.length ||
        house.polarites?.besoins?.length) && (
        <section className="mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl">
            <span
              className={`mr-3 inline-block h-2 w-2 rounded-full ${theme.dot}`}
            />
            Repères
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div
              className={`rounded-3xl border ${theme.border} bg-white/5 p-6`}
            >
              <p className="text-xs uppercase tracking-wide text-muted">
                Forces
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
                {house.polarites?.forces?.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
            <div
              className={`rounded-3xl border ${theme.border} bg-white/5 p-6`}
            >
              <p className="text-xs uppercase tracking-wide text-muted">
                Ombres
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
                {house.polarites?.ombres?.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
            <div
              className={`rounded-3xl border ${theme.border} bg-white/5 p-6`}
            >
              <p className="text-xs uppercase tracking-wide text-muted">
                Besoins
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
                {house.polarites?.besoins?.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Pédagogie */}
      {(house.pedagogie?.aRetenir?.length ||
        house.pedagogie?.erreursFrequences?.length ||
        house.pedagogie?.repereInterpretation?.length) && (
        <section className="mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl">
            <span
              className={`mr-3 inline-block h-2 w-2 rounded-full ${theme.dot}`}
            />
            Pédagogie
          </h2>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {house.pedagogie?.aRetenir?.length ? (
              <div
                className={`rounded-3xl border ${theme.border} bg-white/5 p-6`}
              >
                <p className="text-xs uppercase tracking-wide text-muted">
                  À retenir
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
                  {house.pedagogie.aRetenir.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {house.pedagogie?.erreursFrequences?.length ? (
              <div
                className={`rounded-3xl border ${theme.border} bg-white/5 p-6`}
              >
                <p className="text-xs uppercase tracking-wide text-muted">
                  Erreurs fréquentes
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
                  {house.pedagogie.erreursFrequences.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {house.pedagogie?.repereInterpretation?.length ? (
              <div
                className={`rounded-3xl border ${theme.border} bg-white/5 p-6 sm:col-span-2`}
              >
                <p className="text-xs uppercase tracking-wide text-muted">
                  Repères d’interprétation
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
                  {house.pedagogie.repereInterpretation.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </section>
      )}

      {/* Pratique */}
      {(house.pratique?.phrasesCles?.length ||
        house.pratique?.exemplesConcrets?.length ||
        house.pratique?.exercices?.length) && (
        <section className="mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl">
            <span
              className={`mr-3 inline-block h-2 w-2 rounded-full ${theme.dot}`}
            />
            Pratique
          </h2>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {house.pratique?.phrasesCles?.length ? (
              <div
                className={`rounded-3xl border ${theme.border} bg-white/5 p-6`}
              >
                <p className="text-xs uppercase tracking-wide text-muted">
                  Phrases clés
                </p>
                <ul className="mt-3 space-y-2 text-sm text-text/85">
                  {house.pratique.phrasesCles.map((x) => (
                    <li key={x} className="flex gap-3">
                      <span
                        className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${theme.dot}`}
                      />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {house.pratique?.exemplesConcrets?.length ? (
              <div
                className={`rounded-3xl border ${theme.border} bg-white/5 p-6`}
              >
                <p className="text-xs uppercase tracking-wide text-muted">
                  Exemples concrets
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
                  {house.pratique.exemplesConcrets.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {house.pratique?.exercices?.length ? (
              <div
                className={`rounded-3xl border ${theme.border} bg-white/5 p-6 sm:col-span-2`}
              >
                <p className="text-xs uppercase tracking-wide text-muted">
                  Exercices
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
                  {house.pratique.exercices.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </section>
      )}

      {/* ✅ Planètes dans la maison */}
      <section className="mb-10">
        <h2 className="font-serif text-2xl sm:text-3xl">
          <span
            className={`mr-3 inline-block h-2 w-2 rounded-full ${theme.dot}`}
          />
          Planètes dans cette maison
        </h2>

        <p className="mt-3 text-sm text-text/75">
          Interprétations générées (premium) à partir de la fonction de chaque
          planète + l’arène de la maison. Tu peux affiner des cas précis via{" "}
          <code className="rounded bg-black/30 px-1 py-0.5">
            planetesDansLaMaisonOverrides
          </code>{" "}
          dans le JSON.
        </p>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {PLANETS.map((p) => {
            const override = house.planetesDansLaMaisonOverrides?.[p.slug];
            const title =
              override?.angle ?? `${p.name} en Maison ${house.numero}`;
            const text = planetInHouseText(p, house);
            return (
              <article
                key={p.slug}
                className={`rounded-3xl border ${theme.border} bg-white/5 p-6`}
              >
               <div className="flex items-start justify-between gap-3">
  <div>
    <h3 className="font-serif text-2xl">{title}</h3>
    <p className="mt-1 text-sm text-text/70">
      {p.categorie ? `${p.categorie} • ` : ""}
      {p.motCle ?? ""}
    </p>
  </div>

  {/* ✅ Remplace le badge slug par une image planète */}
  <div
    className={`relative h-12 w-12 shrink-0 overflow-hidden rounded-2xl border ${theme.border} bg-white/5`}
    aria-hidden="true"
    title={p.name}
  >
    <Image
      src={`/images/planetes/${p.slug}.webp`} // ex: /images/planetes/jupiter.webp
      alt={`Planète ${p.name}`}
      fill
      className="object-cover transition duration-300 group-hover:scale-[1.04]"
      sizes="48px"
    />
    <div className="absolute inset-0 bg-black/10" />
  </div>
</div>


                {override?.motsCles?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {override.motsCles.map((k) => (
                      <span
                        key={k}
                        className={`rounded-full border ${theme.border} bg-white/5 px-3 py-1 text-xs`}
                      >
                        {k}
                      </span>
                    ))}
                  </div>
                ) : null}

                <p className="mt-4 text-sm leading-relaxed text-text/85">
                  {text}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Footer nav */}
      <footer className="mt-12 border-t border-white/10 pt-8">
        <nav
          className="mt-6 grid gap-3 sm:grid-cols-2"
          aria-label="Navigation entre les maisons"
        >
          {/* ✅ PREV (à gauche) : TEXTE -> PHOTO (à droite) */}
          {prev ? (
            <Link
              href={`/maisons/${prev.slug}`}
              className={`group rounded-3xl border ${theme.border} bg-white/5 p-5 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 ${theme.ring}`}
              aria-label={`Aller à la maison précédente : Maison ${prev.numero}`}
            >
              <div className="flex items-center gap-5">
                {/* Texte */}
                <div className="min-w-0 flex-1">
                  <p className="text-xs uppercase tracking-wide text-muted">
                    Précédent
                  </p>
                  <p className="mt-1 font-serif text-2xl group-hover:underline">
                    {prev.titreCourt ?? `Maison ${toRoman(prev.numero)}`} —{" "}
                    {prev.nom}
                  </p>
                </div>

                {/* ✅ Image à l’intérieur, à droite */}
                <div
                  className={`relative h-20 w-32 shrink-0 overflow-hidden rounded-2xl border ${theme.border} bg-white/5`}
                  aria-hidden="true"
                >
                  <Image
                    src={`/images/maisons/${toRoman(prev.numero)}.webp`}
                    alt={`${`Maison ${toRoman(house.numero)}`} — ${house.nom}`}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.04]"
                    sizes="128px"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
              </div>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}

          {/* ✅ NEXT (à droite) : PHOTO (à gauche) -> TEXTE */}
          {next ? (
            <Link
              href={`/maisons/${next.slug}`}
              className={`group rounded-3xl border ${theme.border} bg-white/5 p-5 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 ${theme.ring}`}
              aria-label={`Aller à la maison suivante : Maison ${next.numero}`}
            >
              <div className="flex items-center gap-5">
                {/* ✅ Image à l’intérieur, à gauche */}
                <div
                  className={`relative h-20 w-32 shrink-0 overflow-hidden rounded-2xl border ${theme.border} bg-white/5`}
                  aria-hidden="true"
                >
                  <Image
                    src={`/images/maisons/${toRoman(next.numero)}.webp`}
                    alt=""
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.04]"
                    sizes="128px"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Texte (aligné à droite pour la carte de droite) */}
                <div className="min-w-0 flex-1 text-right">
                  <p className="text-xs uppercase tracking-wide text-muted">
                    Suivant
                  </p>
                  <p className="mt-1 font-serif text-2xl group-hover:underline">
                    {next.titreCourt ?? `Maison ${toRoman(next.numero)}`} —{" "}
                    {next.nom}
                  </p>
                </div>
              </div>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}
        </nav>

        <div className="mt-8 flex justify-center">
          <Link
            href="/#maisons"
            className={`rounded-full border ${theme.border} bg-white/5 px-5 py-2 text-sm text-text/90 hover:bg-white/10`}
          >
            ← Retour aux maisons
          </Link>
        </div>
      </footer>
    </main>
  );
}
