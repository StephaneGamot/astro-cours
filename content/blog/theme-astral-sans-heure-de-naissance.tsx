import type { ReactNode } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Pill, TagPillsInline, getGlowFromTags } from "./ui";
import CoverImage from "@/public/images/blog/theme-astral-sans-heure-de-naissance.webp";
import RegistreImage from "@/public/images/blog/registre-etat-civil-heure-naissance.webp";
import BandeauImage from "@/public/images/blog/montre-sans-aiguilles-bandeau.webp";

export const meta = {
  slug: "theme-astral-sans-heure-de-naissance",
  seoTitle: "Thème astral sans heure de naissance : ce qu’on peut lire",
  title: "Thème astral sans heure de naissance : ce qui tient, ce qui tombe",
  description:
    "Pas d’heure de naissance ? Où la retrouver en France, Belgique et Espagne, ce qu’un thème sans heure dit encore, et ce qu’il ne faut pas en conclure.",
  date: "2026-10-03",
  tags: [
    "thème astral",
    "méthode",
    "bases",
    "ascendant",
    "lune",
    "maisons astrologiques",
    "signe solaire",
    "exemples",
    "débutant",
  ],
  readingLevel: "débutant" as const,
  cover: "/images/blog/theme-astral-sans-heure-de-naissance.webp",
};

/* ────────────────────────────────────────────────────────────
   Composants de mise en page
   ──────────────────────────────────────────────────────────── */

function H2({ children, id }: { children: ReactNode; id: string }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="relative inline-flex h-7 w-7 shrink-0 items-center justify-center"
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-200/50 via-violet-300/25 to-transparent blur-[6px]" />
          <span className="relative text-base leading-none text-amber-100/90">
            ◐
          </span>
        </span>
        <h2
          id={id}
          className="scroll-mt-24 text-2xl md:text-3xl font-semibold tracking-tight leading-tight"
        >
          {children}
        </h2>
      </div>
      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-violet-400/40 via-white/10 to-transparent"
      />
    </div>
  );
}

function H3({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h3
      id={id}
      className="scroll-mt-24 text-lg md:text-xl font-semibold tracking-tight leading-tight"
    >
      {children}
    </h3>
  );
}

function A({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="underline decoration-white/30 hover:decoration-white/60 transition"
    >
      {children}
    </Link>
  );
}

/** Lien sortant vers une source primaire (pas de nofollow : sources institutionnelles). */
function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="underline decoration-white/30 hover:decoration-white/60 transition"
    >
      {children}
    </a>
  );
}

function Callout({
  tone = "note",
  title,
  children,
}: {
  tone?: "note" | "warn" | "ok";
  title: string;
  children: ReactNode;
}) {
  const box =
    tone === "warn"
      ? "border-yellow-500/30 bg-yellow-500/10"
      : tone === "ok"
        ? "border-emerald-500/30 bg-emerald-500/10"
        : "border-white/10 bg-white/5";

  const emoji = tone === "warn" ? "⚠️" : tone === "ok" ? "✅" : "🔭";

  return (
    <div className={`rounded-2xl border p-5 ${box}`}>
      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-text/90">
        <span aria-hidden="true">{emoji}</span>
        <span>{title}</span>
      </div>
      <div className="space-y-2 leading-relaxed text-text/85">{children}</div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs text-text/60">{label}</p>
      <p className="mt-1 font-semibold text-text/90">{value}</p>
    </div>
  );
}

function Divider() {
  return (
    <div className="flex items-center gap-4" aria-hidden="true">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-white/10" />
      <span className="text-sm tracking-[0.3em] text-amber-200/50">☉ ☽ ☿</span>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-white/15 to-white/10" />
    </div>
  );
}

function Box({
  title,
  children,
  tone = "neutral",
}: {
  title: string;
  children: ReactNode;
  tone?: "neutral" | "violet" | "emerald" | "amber";
}) {
  const box =
    tone === "violet"
      ? "border-violet-400/25 bg-violet-500/[0.07]"
      : tone === "emerald"
        ? "border-emerald-400/25 bg-emerald-500/[0.07]"
        : tone === "amber"
          ? "border-amber-400/25 bg-amber-500/[0.07]"
          : "border-white/10 bg-black/20";

  return (
    <div className={`rounded-2xl border p-5 ${box}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-text/70">
        {title}
      </p>
      <div className="mt-3 space-y-2 leading-relaxed text-text/85">
        {children}
      </div>
    </div>
  );
}

/* ── Sommaire ────────────────────────────────────────────────── */

const toc = [
  { id: "retrouver", label: "Retrouver l’heure avant de s’en passer" },
  { id: "ce-qui-tient", label: "Ce qui tient, ce qui tombe" },
  { id: "deux-minuits", label: "Le test des deux minuits" },
  { id: "exemple", label: "Un exemple tiré au sort" },
  { id: "lune", label: "La Lune, le cas à part" },
  { id: "conventions", label: "Thème de midi, thème solaire" },
  { id: "rectification", label: "La rectification" },
  { id: "checklist", label: "La checklist" },
  { id: "faq", label: "Questions fréquentes" },
];

/* ── FAQ (affichage + JSON-LD depuis la même source) ─────────── */

const faq = [
  {
    q: "Peut-on faire son thème astral sans heure de naissance ?",
    a: "Oui, mais à moitié. La date suffit pour placer le Soleil et les planètes dans leurs signes et pour lire leurs aspects, ce qui donne déjà un portrait psychologique. L’Ascendant, le Milieu du Ciel et les maisons restent inconnus, et la Lune change de signe dans 44 % des journées : vérifiez-la avec le test des deux minuits.",
  },
  {
    q: "Comment connaître son Ascendant sans heure de naissance ?",
    a: "On ne peut pas le déduire. L’Ascendant fait le tour du zodiaque en vingt-quatre heures et reste, en France métropolitaine, de 53 minutes à 2 h 50 dans un signe selon le signe et la latitude. Sans heure, aucun signe ne dépasse 12 % de probabilité. La seule voie est de retrouver l’heure, ou de la reconstruire par rectification.",
  },
  {
    q: "Où trouver son heure de naissance ?",
    a: "Sur l’acte de naissance. En France, demandez la copie intégrale à la mairie du lieu de naissance ou en ligne, gratuitement ; en Belgique, la copie de l’acte auprès d’une commune ; en Espagne, le certificado literal de nacimiento. Le Code civil français impose d’y inscrire l’heure depuis 1803.",
  },
  {
    q: "Quelle heure entrer dans un logiciel si on ne la connaît pas ?",
    a: "Par convention, midi : c’est l’heure qui limite l’erreur sur la Lune, à huit degrés au plus. Ignorez alors l’Ascendant, le Milieu du Ciel et les maisons que le logiciel affiche, et vérifiez les signes en recalculant le thème pour 0 h 00 et 23 h 59. Ce qui change entre les deux reste incertain.",
  },
  {
    q: "L’heure inscrite sur l’acte de naissance est-elle fiable ?",
    a: "C’est l’heure déclarée à l’état civil, en heure légale de l’époque, et la meilleure source disponible. Une heure ronde, 10 h 00 ou 15 h 30, a pu être arrondie : refaites alors les calculs sensibles à plus et moins trente minutes. Entrez-la telle quelle avec le lieu : un bon logiciel applique l’historique de l’heure d’été.",
  },
  {
    q: "Le thème solaire remplace-t-il le thème natal ?",
    a: "Non. Il pose le Soleil sur l’Ascendant et en déduit des maisons symboliques, identiques pour toutes les personnes nées à quelques jours d’écart. C’est une grille commode pour suivre les transits, celle des horoscopes de presse, pas une description de votre vie concrète.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

/* ── Où trouver l’heure, pays par pays ───────────────────────── */

const pays = [
  {
    pays: "France",
    doc: "Copie intégrale de l’acte de naissance",
    ou: "Mairie du lieu de naissance, sur place, par courrier ou en ligne sur service-public.gouv.fr. Né à l’étranger : Service central d’état civil, à Nantes.",
    note: "Gratuite. Réservée à la personne majeure, à son représentant légal, à son conjoint ou partenaire de Pacs, à ses ascendants et descendants.",
  },
  {
    pays: "Belgique",
    doc: "Copie de l’acte de naissance",
    ou: "N’importe quelle commune, parfois en ligne via son guichet électronique. Acte antérieur au 31 mars 2019 : la commune de naissance.",
    note: "Depuis 2019, les actes sont dans la BAEC, la base nationale de l’état civil. La copie reproduit l’acte en entier ; l’extrait le résume.",
  },
  {
    pays: "Espagne",
    doc: "Certificado literal de nacimiento",
    ou: "Registro Civil du lieu de naissance, ou en ligne sur la sede electrónica du ministère de la Justice.",
    note: "Gratuit. Demandez le literal, copie exacte de l’inscription, et non l’extracto.",
  },
];

/* ── Ce qui tient, ce qui tombe ──────────────────────────────── */

const tient = [
  {
    el: "Soleil en signe",
    verdict: "Fiable",
    pourquoi: "1° par jour. Il change de signe douze jours par an (3,3 % des journées) : ces jours-là seulement, le doute existe.",
    ok: true,
  },
  {
    el: "Mercure, Vénus, Mars en signe",
    verdict: "Fiables presque toujours",
    pourquoi: "Changement de signe dans 4,1 %, 3,5 % et 1,9 % des journées.",
    ok: true,
  },
  {
    el: "Jupiter à Pluton",
    verdict: "Fiables",
    pourquoi: "Quelques centièmes de degré par jour, parfois moins.",
    ok: true,
  },
  {
    el: "Aspects entre planètes (hors Lune)",
    verdict: "Fiables",
    pourquoi: "En vingt-quatre heures, les écarts entre planètes bougent d’un degré ou deux au plus.",
    ok: true,
  },
  {
    el: "Lune en signe",
    verdict: "Un jour sur deux",
    pourquoi: "12 à 15° par jour : elle change de signe dans 43,9 % des journées.",
    ok: false,
  },
  {
    el: "Aspects de la Lune",
    verdict: "Avec prudence",
    pourquoi: "Sa position flotte de six à huit degrés autour de midi : les aspects serrés peuvent exister ou non.",
    ok: false,
  },
  {
    el: "Ascendant, Milieu du Ciel",
    verdict: "Inconnus",
    pourquoi: "Ils font le tour complet du zodiaque en vingt-quatre heures.",
    ok: false,
  },
  {
    el: "Maisons",
    verdict: "Inconnues",
    pourquoi: "Elles se comptent à partir de l’Ascendant.",
    ok: false,
  },
  {
    el: "Planète dominante",
    verdict: "Incalculable",
    pourquoi: "Trois critères sur sept dépendent des angles du thème.",
    ok: false,
  },
  {
    el: "Transits aux angles, révolution solaire",
    verdict: "Inutilisables",
    pourquoi: "Ils reposent sur l’Ascendant, le Milieu du Ciel et les maisons.",
    ok: false,
  },
];

/* ── L’exemple tiré au sort : 25 février 1966, Clermont-Ferrand ─ */

const positions = [
  { p: "Soleil", g: "☉", a: "5° 53′ Poissons", b: "6° 53′ Poissons", v: "Tient", ok: true },
  { p: "Lune", g: "☽", a: "25° 27′ Bélier", b: "7° 47′ Taureau", v: "Tombe : Taureau dès 8 h 53", ok: false },
  { p: "Mercure", g: "☿", a: "20° 51′ Poissons", b: "22° 31′ Poissons", v: "Tient", ok: true },
  { p: "Vénus", g: "♀", a: "29° 49′ Capricorne", b: "0° 10′ Verseau", v: "Tombe : Verseau dès 11 h 54", ok: false },
  { p: "Mars", g: "♂", a: "20° 11′ Poissons", b: "20° 58′ Poissons", v: "Tient", ok: true },
  { p: "Jupiter", g: "♃", a: "21° 24′ Gémeaux", b: "21° 26′ Gémeaux", v: "Tient", ok: true },
  { p: "Saturne", g: "♄", a: "18° 09′ Poissons", b: "18° 16′ Poissons", v: "Tient", ok: true },
  { p: "Uranus", g: "♅", a: "18° 05′ Vierge ℞", b: "18° 03′ Vierge ℞", v: "Tient", ok: true },
  { p: "Neptune", g: "♆", a: "22° 10′ Scorpion ℞", b: "22° 10′ Scorpion ℞", v: "Tient", ok: true },
  { p: "Pluton", g: "♇", a: "17° 27′ Vierge ℞", b: "17° 26′ Vierge ℞", v: "Tient", ok: true },
  { p: "Ascendant", g: "AS", a: "9°\u00a019′ Scorpion", b: "9°\u00a052′ Scorpion", v: "Tombe : les douze signes défilent entre-temps", ok: false },
];

/* ── Le composant ────────────────────────────────────────────── */

export default function Post() {
  const glow = getGlowFromTags(meta.tags);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="space-y-12">
        {/* ── IMAGE DE COUVERTURE (LCP) ────────────────────── */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f13]">
          <Image
            src={CoverImage}
            alt="Montre de gousset ouverte au cadran sans aiguilles, entre un soleil doré et un croissant de lune qui se reflètent dans son verre"
            fill
            sizes="(max-width: 768px) 100vw, 900px"
            priority
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent"
          />
        </div>

        {/* ── HERO ─────────────────────────────────────────── */}
        <header className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/[0.10] via-black/20 to-black/30 p-7 shadow-soft">
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl ${glow}`}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-3xl"
          />

          <div className="relative">
            <p className="text-sm text-text/65">
              Réponse directe · Checklist · Exemple calculé
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text/85">
              Vous voulez votre thème astral, le logiciel vous demande votre
              heure de naissance, et personne dans la famille ne s’en souvient.{" "}
              <strong>
                Bonne nouvelle&nbsp;: un thème sans heure se lit encore à
                moitié. Meilleure nouvelle&nbsp;: l’heure est presque toujours
                retrouvable.
              </strong>
            </p>

            <p className="mt-3 max-w-2xl leading-relaxed text-text/80">
              Cet article réunit ce qu’on trouve rarement au même endroit&nbsp;:
              où récupérer l’heure en France, en Belgique et en Espagne, un test simple pour savoir ce qui reste lisible dans
              votre thème, et un exemple tiré au sort, calculé de bout en bout,
              avec ce que j’en dirais et ce que je refuserais d’en dire.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <Pill tone="violet">Pays&nbsp;: France, Belgique, Espagne</Pill>
              <Pill tone="sky">Test&nbsp;: deux minutes</Pill>
              <Pill tone="emerald">Données&nbsp;: 21&#8239;915 journées</Pill>
              <Pill tone="orange">Piège&nbsp;: la Lune</Pill>
            </div>

            <div className="mt-4">
              <TagPillsInline tags={meta.tags} />
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <Stat label="Ce qui reste lisible" value="Signes et aspects des planètes" />
              <Stat label="Ce qui disparaît" value="Ascendant, angles, maisons" />
              <Stat label="Où est l’heure" value="Sur l’acte de naissance" />
            </div>
          </div>
        </header>

        {/* ── RÉPONSE DIRECTE ──────────────────────────────── */}
        <div className="relative overflow-hidden rounded-2xl border border-violet-400/25 bg-gradient-to-br from-violet-500/[0.12] via-indigo-500/[0.06] to-transparent px-6 py-5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-200/10 blur-2xl"
          />
          <p className="relative text-sm font-semibold uppercase tracking-[0.2em] text-amber-200/80">
            La réponse courte
          </p>
          <p className="relative mt-2 text-base leading-relaxed text-white/85 sm:text-lg">
            Oui, on peut lire un <strong>thème astral sans heure de
            naissance</strong>, mais à moitié. La date suffit pour placer le
            Soleil, Mercure, Vénus, Mars et les planètes lentes dans leurs
            signes, et pour lire leurs aspects. Sans l’heure, il n’y a ni
            Ascendant, ni Milieu du Ciel, ni maisons, et la Lune change de signe
            dans 44&nbsp;% des journées. Avant de vous en passer, demandez la
            copie intégrale de votre acte de naissance&nbsp;: en France, l’heure
            y figure obligatoirement depuis 1803.
          </p>
        </div>

        {/* ── À RETENIR ────────────────────────────────────── */}
        <section
          className="rounded-2xl border border-emerald-400/25 bg-gradient-to-br from-emerald-500/[0.09] via-sky-500/[0.04] to-transparent p-6"
          aria-labelledby="a-retenir"
        >
          <h2
            id="a-retenir"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200/80"
          >
            À retenir
          </h2>
          <ul className="mt-4 space-y-2 leading-relaxed text-text/90">
            <li>
              L’heure figure sur l’acte de naissance en France (
              <strong>copie intégrale</strong>), en Belgique (
              <strong>copie de l’acte</strong>) et en Espagne (
              <strong lang="es">certificado literal</strong>). C’est gratuit.
            </li>
            <li>
              Sans heure, on lit les <strong>planètes en signes et leurs
              aspects</strong>. Pas l’Ascendant, pas les maisons, pas la
              planète dominante.
            </li>
            <li>
              <strong>Le test des deux minuits</strong>&nbsp;: calculez le
              thème pour 0&nbsp;h&nbsp;00 et 23&nbsp;h&nbsp;59. Ne lisez que ce
              qui est identique dans les deux.
            </li>
            <li>
              <strong>Une journée sur deux</strong> (50,9&nbsp;% entre 1950 et
              2009), la Lune ou une planète personnelle change de signe.
            </li>
            <li>
              Le thème de midi et le thème solaire sont des{" "}
              <strong>conventions</strong>&nbsp;: utiles, à condition de savoir
              ce qu’elles décident à votre place.
            </li>
          </ul>
        </section>

        {/* ── SOMMAIRE ─────────────────────────────────────── */}
        <nav
          aria-label="Sommaire de l’article"
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/[0.07] to-transparent p-6"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200/70">
            Sommaire
          </p>
          <ol className="mt-4 grid gap-x-8 gap-y-1 sm:grid-cols-2">
            {toc.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="group flex items-baseline gap-3 rounded-lg px-2 py-1.5 transition hover:bg-white/[0.04]"
                >
                  <span className="text-xs font-semibold tabular-nums text-violet-300/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-text/85 underline decoration-white/15 transition group-hover:decoration-violet-300/60">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ── 1. RETROUVER L’HEURE ─────────────────────────── */}
        <section className="space-y-5" aria-labelledby="retrouver">
          <H2 id="retrouver">Retrouver l’heure avant de s’en passer</H2>

          <p className="text-lg leading-relaxed text-text/85">
            Le plus souvent, l’heure n’est pas perdue&nbsp;: elle est écrite sur
            votre acte de naissance. En France, le Code civil l’exige depuis
            1803&nbsp;; la Belgique et l’Espagne l’inscrivent aussi. Il suffit
            de demander le bon document, la copie intégrale et non
            l’extrait. C’est gratuit, et souvent faisable en ligne.
          </p>

          <p className="leading-relaxed text-text/85">
            L’article 57 du Code civil est sans ambiguïté&nbsp;: l’acte de
            naissance énonce «&#8239;le jour, l’heure et le lieu de la
            naissance&#8239;», une formule inchangée depuis la rédaction
            d’origine. Les extraits résument l’acte&nbsp;; la copie intégrale
            le reproduit en entier, heure comprise.
          </p>

          <p className="mb-2 font-semibold text-white/90">
            Le document à demander, pays par pays
          </p>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <div
              className="overflow-x-auto"
              role="region"
              aria-label="Où obtenir son heure de naissance en France, en Belgique et en Espagne"
              tabIndex={0}
            >
              <table className="min-w-full border-collapse text-sm">
                <caption className="sr-only">
                  Pour chaque pays, le document d’état civil qui porte l’heure
                  de naissance, où le demander et ce qu’il faut savoir.
                </caption>
                <thead className="bg-white/[0.04]">
                  <tr className="text-left">
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Pays
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Document
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Où le demander
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Bon à savoir
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pays.map((r, i) => (
                    <tr
                      key={r.pays}
                      className={`border-t border-white/10 ${i % 2 === 1 ? "bg-white/[0.02]" : ""}`}
                    >
                      <th
                        scope="row"
                        className="px-5 py-4 text-left align-top font-medium text-white"
                      >
                        {r.pays}
                      </th>
                      <td
                        className="px-5 py-4 align-top text-text/85"
                        lang={r.pays === "Espagne" ? "es" : undefined}
                      >
                        {r.doc}
                      </td>
                      <td className="px-5 py-4 align-top text-text/85">{r.ou}</td>
                      <td className="px-5 py-4 align-top text-text/85">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <figure className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <Image
              src={RegistreImage}
              alt="Ancien registre d’état civil ouvert sur un bureau en bois, une loupe posée sur une colonne manuscrite, à côté d’un stylo-plume et d’une montre de gousset"
              sizes="(max-width: 768px) 100vw, 800px"
              className="h-auto w-full"
            />
            <figcaption className="px-5 py-4 text-center text-xs text-text/50">
              L’heure dort le plus souvent dans un registre&nbsp;: il suffit de
              demander le bon document pour la récupérer.
            </figcaption>
          </figure>

          <H3>Si l’acte ne suffit pas</H3>
          <p className="leading-relaxed text-text/85">
            Cela arrive surtout pour une naissance à l’étranger, quand l’acte
            local ne mentionnait pas l’heure&nbsp;: les règles varient d’un pays
            à l’autre. Il reste alors trois pistes, de la plus sûre à la plus
            fragile.
          </p>
          <ul className="list-disc space-y-2 pl-5 leading-relaxed text-text/85">
            <li>
              <strong>Le dossier de la maternité.</strong> Un établissement de
              santé n’est tenu de le conserver que vingt ans après le dernier
              séjour, ou jusqu’aux 28 ans du patient si ce séjour a eu lieu
              avant ses 8 ans. Au-delà,
              rien ne garantit qu’il existe encore&nbsp;: demander ne coûte
              qu’une lettre.
            </li>
            <li>
              <strong>Les papiers de famille.</strong> Faire-part, lettres,
              album de naissance&nbsp;: parfois une heure, souvent une
              approximation.
            </li>
            <li>
              <strong>La mémoire des parents.</strong> «&#8239;Le matin&#8239;»,
              «&#8239;juste après le déjeuner&#8239;»&nbsp;: ce n’est pas une
              heure, mais une fourchette. Notez-la, elle servira plus loin.
            </li>
          </ul>

          <H3>Vérifier l’heure qu’on a</H3>
          <p className="leading-relaxed text-text/85">
            L’heure de l’acte est l’heure légale de l’époque, celle de la
            pendule de la maternité. Entrez-la telle quelle, avec le lieu de
            naissance&nbsp;: un bon logiciel applique lui-même l’historique de
            l’heure d’été, réintroduite en France en 1976. Ne la convertissez
            pas à la main, c’est la première source d’erreur. Méfiez-vous des
            heures rondes, 10&nbsp;h&nbsp;00 ou 15&nbsp;h&nbsp;30&nbsp;: elles
            ont pu être arrondies.
          </p>
        </section>

        <Divider />

        {/* ── 2. CE QUI TIENT, CE QUI TOMBE ────────────────── */}
        <section className="space-y-5" aria-labelledby="ce-qui-tient">
          <H2 id="ce-qui-tient">Ce qu’un thème sans heure dit encore, et ce qu’il ne dit plus</H2>

          <p className="text-lg leading-relaxed text-text/85">
            Sans heure, tout ce qui dépend de la rotation de la Terre
            disparaît&nbsp;: l’Ascendant, le Milieu du Ciel et les douze maisons
            font un tour complet en vingt-quatre heures. Ce qui dépend du
            mouvement des planètes reste lisible, parce qu’elles avancent
            lentement&nbsp;: le Soleil d’un degré par jour, Pluton de quelques
            centièmes.
          </p>

          <p className="leading-relaxed text-text/85">
            Dans les termes de la page{" "}
            <A href="/theme-astral">thème astral</A>&nbsp;: sans heure, vous
            gardez les acteurs (les planètes), leurs styles (les signes) et
            leurs dialogues (les <A href="/aspects">aspects</A>). Vous perdez
            les scènes où ils jouent, c’est-à-dire les{" "}
            <A href="/maisons">maisons</A>.
          </p>

          <aside className="rounded-2xl border border-amber-400/25 bg-amber-500/[0.06] px-6 py-5">
            <p className="text-lg font-semibold leading-relaxed text-amber-100/90 sm:text-xl">
              Sans heure, on lit qui vous êtes, pas où cela se joue.
            </p>
          </aside>

          <p className="mb-2 font-semibold text-white/90">
            Élément par élément, ce qui reste fiable sans heure de naissance
          </p>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <div
              className="overflow-x-auto"
              role="region"
              aria-label="Fiabilité de chaque élément du thème sans heure de naissance"
              tabIndex={0}
            >
              <table className="min-w-full border-collapse text-sm">
                <caption className="sr-only">
                  Pour chaque élément du thème astral, sa fiabilité quand
                  l’heure de naissance est inconnue, et la raison.
                </caption>
                <thead className="bg-white/[0.04]">
                  <tr className="text-left">
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Élément
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Sans heure
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Pourquoi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tient.map((r, i) => (
                    <tr
                      key={r.el}
                      className={`border-t border-white/10 ${i % 2 === 1 ? "bg-white/[0.02]" : ""}`}
                    >
                      <th
                        scope="row"
                        className="px-5 py-4 text-left align-top font-medium text-white"
                      >
                        {r.el}
                      </th>
                      <td
                        className={`px-5 py-4 align-top font-semibold ${r.ok ? "text-emerald-300" : "text-amber-300"}`}
                      >
                        <span aria-hidden="true">{r.ok ? "✓ " : "✗ "}</span>
                        {r.verdict}
                      </td>
                      <td className="px-5 py-4 align-top text-text/85">{r.pourquoi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="leading-relaxed text-text/85">
            L’astrologie n’est pas une science expérimentale&nbsp;: raison de
            plus pour ne pas inventer les données qui manquent. Un thème sans
            heure honnête dit moins de choses, mais il ne dit rien de faux.
          </p>
        </section>

        <Divider />

        {/* ── 3. LE TEST DES DEUX MINUITS ──────────────────── */}
        <section className="space-y-5" aria-labelledby="deux-minuits">
          <H2 id="deux-minuits">Le test des deux minuits</H2>

          <p className="text-lg leading-relaxed text-text/85">
            Calculez votre thème deux fois, au lieu de naissance&nbsp;: pour
            0&nbsp;h&nbsp;00 et pour 23&nbsp;h&nbsp;59 le jour de votre
            naissance. Tout ce qui est identique dans les deux thèmes est
            lisible. Tout ce qui diffère, un signe ou un aspect, reste ouvert.
            Le test prend deux minutes.
          </p>

          <figure className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <Image
              src={BandeauImage}
              alt="Montre de gousset au cadran vide, sans aiguilles, à droite d’un ciel indigo traversé par un arc de lumière dorée"
              sizes="(max-width: 768px) 100vw, 800px"
              className="h-auto w-full"
            />
            <figcaption className="px-5 py-4 text-center text-xs text-text/50">
              Sans heure, le cadran reste vide&nbsp;: le test ne lit que ce que
              le ciel garde identique du premier au dernier instant de la
              journée.
            </figcaption>
          </figure>

          <ol className="list-decimal space-y-2 pl-5 leading-relaxed text-text/85">
            <li>
              Entrez votre date et votre lieu de naissance, heure
              0&nbsp;h&nbsp;00. Notez le signe de chaque planète.
            </li>
            <li>Recommencez avec 23&nbsp;h&nbsp;59.</li>
            <li>
              Comparez ligne à ligne. Même signe&nbsp;: c’est acquis. Signe
              différent&nbsp;: gardez les deux hypothèses.
            </li>
            <li>
              Ne regardez pas l’Ascendant, le Milieu du Ciel ni les maisons
              des deux thèmes&nbsp;: ils diffèrent forcément, et aucun des deux
              n’est le vôtre.
            </li>
          </ol>

          <p className="leading-relaxed text-text/85">
            Si la famille vous a donné une fourchette, «&#8239;le
            matin&#8239;» par exemple, le test se resserre&nbsp;: calculez le
            début et la fin de la fourchette, 6&nbsp;h&nbsp;00 et
            12&nbsp;h&nbsp;00, au lieu des deux minuits. Plus la fourchette est
            étroite, plus il reste de choses à lire.
          </p>

          <p className="leading-relaxed text-text/85">
            Pour savoir à quel point ce test est utile, je l’ai fait tourner
            sur soixante ans de calendrier&nbsp;: chaque journée du 1ᵉʳ
            janvier 1950 au 31 décembre 2009, en heure légale française, avec
            la bibliothèque d’éphémérides Swiss Ephemeris.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            <Stat label="Journées étudiées" value={"21\u202f915 (1950–2009)"} />
            <Stat label="La Lune change de signe" value={"43,9\u00a0% des journées"} />
            <Stat label="Lune, Soleil, Mercure, Vénus ou Mars" value={"50,9\u00a0% des journées"} />
          </div>

          <p className="leading-relaxed text-text/85">
            Autrement dit, une personne sur deux qui ignore son heure ne peut
            pas être sûre du signe de sa Lune ou d’une planète personnelle.
            Hors Lune, le risque tombe à 12,3&nbsp;% des journées. Le test
            vous dit dans quelle moitié vous êtes.
          </p>
        </section>

        <Divider />

        {/* ── 4. L’EXEMPLE ─────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="exemple">
          <H2 id="exemple">Un exemple tiré au sort&nbsp;: le 25 février 1966</H2>

          <p className="text-lg leading-relaxed text-text/85">
            Pour montrer le test sur un cas que je n’ai pas choisi, j’ai tiré
            au sort une date entre 1950 et 2005 et une ville française&nbsp;:
            le 25 février 1966, à Clermont-Ferrand, heure inconnue. Ce n’est
            le thème de personne en particulier, c’est celui de tous les
            enfants nés ce jour-là dans la région. Le hasard a bien fait les
            choses&nbsp;: c’est un cas difficile.
          </p>

          <p className="mb-2 font-semibold text-white/90">
            Le thème du 25 février 1966 à 0&nbsp;h&nbsp;00 et à 23&nbsp;h&nbsp;59
          </p>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <div
              className="overflow-x-auto"
              role="region"
              aria-label="Positions du 25 février 1966 à minuit et à 23 h 59"
              tabIndex={0}
            >
              <table className="min-w-full border-collapse text-sm">
                <caption className="sr-only">
                  Position de chaque planète au début et à la fin du 25 février
                  1966, heure de Paris, et ce qui reste lisible sans heure.
                </caption>
                <thead className="bg-white/[0.04]">
                  <tr className="text-left">
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Planète
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      0&nbsp;h&nbsp;00
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      23&nbsp;h&nbsp;59
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-white">
                      Sans heure
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {positions.map((r, i) => (
                    <tr
                      key={r.p}
                      className={`border-t border-white/10 ${i % 2 === 1 ? "bg-white/[0.02]" : ""}`}
                    >
                      <th
                        scope="row"
                        className="whitespace-nowrap px-5 py-4 text-left align-top font-medium text-white"
                      >
                        <span aria-hidden="true" className="mr-2 text-violet-300/80">
                          {r.g}
                        </span>
                        {r.p}
                      </th>
                      <td className="whitespace-nowrap px-5 py-4 align-top text-text/85">{r.a}</td>
                      <td className="whitespace-nowrap px-5 py-4 align-top text-text/85">{r.b}</td>
                      <td
                        className={`px-5 py-4 align-top font-semibold ${r.ok ? "text-emerald-300" : "text-amber-300"}`}
                      >
                        {r.v}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-xs leading-relaxed text-text/55">
            Positions calculées avec Swiss Ephemeris, zodiaque tropical,
            heure légale française de 1966 (UTC+1, pas d’heure d’été).
            Ascendant en maisons Placidus pour Clermont-Ferrand. ℞&nbsp;:
            rétrograde.
          </p>

          <p className="leading-relaxed text-text/85">
            Notez la dernière ligne&nbsp;: l’Ascendant est en Scorpion aux deux
            minuits, après avoir fait le tour complet du zodiaque entre-temps.
            C’est pour cela que le test l’exclut d’office, même quand les deux
            bornes semblent d’accord.
          </p>

          <p className="leading-relaxed text-text/85">
            Huit astres sur dix ne bougent pas de signe. Deux tombent, et pas
            n’importe lesquels&nbsp;: la Lune passe du Bélier au Taureau à
            8&nbsp;h&nbsp;53, et Vénus, qui venait de reculer en Capricorne,
            repasse en Verseau à 11&nbsp;h&nbsp;54. La journée se coupe donc
            en trois thèmes possibles.
          </p>

          <figure className="rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-6">
            <div
              className="overflow-x-auto"
              role="region"
              aria-label="Frise de la journée du 25 février 1966"
              tabIndex={0}
            >
              <svg
                viewBox="0 0 720 222"
                className="h-auto w-full min-w-[640px] text-violet-100"
                role="img"
                aria-label="Frise horaire du 25 février 1966. La Lune est en Bélier jusqu’à 8 h 53, puis en Taureau. Vénus est en Capricorne jusqu’à 11 h 54, puis en Verseau. L’Ascendant traverse les douze signes dans la journée. La ligne de midi tombe six minutes après le changement de signe de Vénus."
              >
                <g fontSize="13" dominantBaseline="central">
                  {/* Libellés des lignes */}
                  <g fill="currentColor" className="fill-white/70" fontWeight="600">
                    <text x="8" y="43">Lune</text>
                    <text x="8" y="97">Vénus</text>
                    <text x="8" y="163">Ascendant</text>
                  </g>

                  {/* Lune */}
                  <rect x="96" y="28" width="225" height="30" rx="4" className="fill-amber-400/25" />
                  <rect x="321" y="28" width="383" height="30" rx="4" className="fill-emerald-400/20" />
                  <g fill="currentColor" className="fill-white/85" textAnchor="middle">
                    <text x="208.5" y="43">Bélier</text>
                    <text x="512.5" y="43">Taureau</text>
                  </g>
                  <text x="321" y="70" textAnchor="middle" fontSize="11" fill="currentColor" className="fill-amber-200/80">
                    8 h 53
                  </text>

                  {/* Vénus */}
                  <rect x="96" y="82" width="301.5" height="30" rx="4" className="fill-sky-400/20" />
                  <rect x="397.5" y="82" width="306.5" height="30" rx="4" className="fill-violet-400/30" />
                  <g fill="currentColor" className="fill-white/85" textAnchor="middle">
                    <text x="246.8" y="97">Capricorne</text>
                    <text x="550.8" y="97">Verseau</text>
                  </g>
                  <text x="393" y="124" textAnchor="end" fontSize="11" fill="currentColor" className="fill-amber-200/80">
                    11 h 54
                  </text>

                  {/* Ascendant : les douze signes défilent */}
                  <g>
                    <rect x="96.0" y="148" width="46.4" height="30" rx="3" className="fill-violet-400/25" />
                    <rect x="142.4" y="148" width="61.7" height="30" rx="3" className="fill-violet-400/10" />
                    <rect x="204.1" y="148" width="46.9" height="30" rx="3" className="fill-violet-400/25" />
                    <rect x="251.0" y="148" width="33.3" height="30" rx="3" className="fill-violet-400/10" />
                    <rect x="284.3" y="148" width="26.6" height="30" rx="3" className="fill-violet-400/25" />
                    <rect x="310.9" y="148" width="27.0" height="30" rx="3" className="fill-violet-400/10" />
                    <rect x="337.9" y="148" width="33.4" height="30" rx="3" className="fill-violet-400/25" />
                    <rect x="371.3" y="148" width="46.9" height="30" rx="3" className="fill-violet-400/10" />
                    <rect x="418.2" y="148" width="61.2" height="30" rx="3" className="fill-violet-400/25" />
                    <rect x="479.4" y="148" width="67.5" height="30" rx="3" className="fill-violet-400/10" />
                    <rect x="546.9" y="148" width="67.2" height="30" rx="3" className="fill-violet-400/25" />
                    <rect x="614.1" y="148" width="67.5" height="30" rx="3" className="fill-violet-400/10" />
                    <rect x="681.6" y="148" width="22.4" height="30" rx="3" className="fill-violet-400/25" />
                  </g>
                  <g fill="currentColor" className="fill-white/75" textAnchor="middle" fontSize="11">
                    <text x="119.2" y="163">Sco</text>
                    <text x="173.2" y="163">Sag</text>
                    <text x="227.6" y="163">Cap</text>
                    <text x="267.6" y="163">Ver</text>
                    <text x="297.6" y="163">Poi</text>
                    <text x="324.4" y="163">Bél</text>
                    <text x="354.6" y="163">Tau</text>
                    <text x="385" y="163">Gém</text>
                    <text x="448.8" y="163">Can</text>
                    <text x="513.1" y="163">Lio</text>
                    <text x="580.5" y="163">Vie</text>
                    <text x="647.9" y="163">Bal</text>
                  </g>

                  {/* Ligne de midi */}
                  <line x1="400" y1="18" x2="400" y2="186" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="stroke-amber-200/80" />
                  <text x="406" y="12" fontSize="11" fill="currentColor" className="fill-amber-200/90">
                    midi
                  </text>

                  {/* Axe des heures */}
                  <line x1="96" y1="192" x2="704" y2="192" stroke="currentColor" strokeOpacity="0.3" />
                  <g fill="currentColor" className="fill-white/55" textAnchor="middle" fontSize="11">
                    <text x="96" y="208">0 h</text>
                    <text x="172" y="208">3 h</text>
                    <text x="248" y="208">6 h</text>
                    <text x="324" y="208">9 h</text>
                    <text x="400" y="208">12 h</text>
                    <text x="476" y="208">15 h</text>
                    <text x="552" y="208">18 h</text>
                    <text x="628" y="208">21 h</text>
                    <text x="704" y="208">24 h</text>
                  </g>
                </g>
              </svg>
            </div>
            <figcaption className="mt-4 text-center text-xs leading-relaxed text-text/50">
              La journée du 25 février 1966 à Clermont-Ferrand. Trois
              combinaisons possibles&nbsp;: Lune Bélier et Vénus Capricorne
              avant 8&nbsp;h&nbsp;53 (37&nbsp;% de la journée), Lune Taureau et
              Vénus Capricorne jusqu’à 11&nbsp;h&nbsp;54 (12,6&nbsp;%), Lune
              Taureau et Vénus Verseau ensuite (50,4&nbsp;%). L’Ascendant, lui,
              passe par les douze signes.
            </figcaption>
          </figure>

          <div className="grid gap-4 md:grid-cols-2">
            <Box title="Ce que j’en dirais" tone="emerald">
              <p>
                <strong>Quatre astres en Poissons</strong>&nbsp;: le Soleil,
                Mercure, Mars et Saturne. Le même signe colore l’identité, la
                pensée, l’action et le sens du devoir. Quelqu’un qui perçoit
                avant d’analyser, et qui agit mieux porté par une cause que par
                un plan.
              </p>
              <p>
                <strong>Mars conjoint Saturne</strong>, à moins de trois degrés&nbsp;: une
                énergie qui se retient, s’endurcit dans l’effort et peut
                longtemps ruminer avant de passer à l’acte. Mercure s’y joint,
                à un ou deux degrés de Mars&nbsp;: une parole mesurée, parfois
                tranchante quand elle sort.
              </p>
              <p>
                <strong>Jupiter en Gémeaux au carré de l’ensemble</strong>&nbsp;:
                la tentation de la dispersion, trop de pistes ouvertes à la
                fois. <strong>Neptune en Scorpion en trigone</strong> à Mercure
                et Mars&nbsp;: l’imaginaire nourrit l’action au lieu de la
                diluer.
              </p>
            </Box>

            <Box title="Ce que je refuserais d’en dire" tone="amber">
              <p>
                <strong>L’Ascendant.</strong> À Clermont-Ferrand ce jour-là, il
                reste 63 minutes en Poissons et 163 en Scorpion&nbsp;: aucun
                signe ne dépasse 11,3&nbsp;% de chances.
              </p>
              <p>
                <strong>Le terrain.</strong> Ces quatre Poissons parlent-ils du
                travail, du couple, de la famille&nbsp;? Ce sont les maisons
                qui le disent, et elles manquent.
              </p>
              <p>
                <strong>La dominante.</strong> Mars et Saturne posés sur un
                angle ou cachés en maison XII, ce n’est pas le même thème. La{" "}
                <A href="/blog/planete-dominante-methode-calcul">
                  méthode des sept poids
                </A>{" "}
                ne s’applique pas sans heure.
              </p>
              <p>
                <strong>La Lune et Vénus.</strong> Une Lune Bélier décharge
                vite, une Lune Taureau encaisse lentement. Une{" "}
                <A href="/blog/venus-en-signes-style-amoureux">Vénus</A>{" "}
                Capricorne aime en s’engageant, une Vénus Verseau en restant
                libre. Ici, choisir serait deviner.
              </p>
            </Box>
          </div>

          <Callout tone="warn" title="Le piège des planètes lentes">
            <p>
              Ce thème montre aussi Uranus et Pluton conjoints en Vierge, avec
              Saturne en face. Spectaculaire, mais pas personnel&nbsp;: Uranus
              et Pluton sont à moins d’un degré l’un de l’autre pour tous les
              enfants nés de fin janvier à mi-août 1966, et Saturne leur fait
              face, à moins de trois degrés, de début février à mi-mars. Neptune
              est en Scorpion de 1957 à 1970.
            </p>
            <p>
              Plus une lecture repose sur les planètes lentes, moins elle vous
              décrit, vous. Sans heure, c’est le piège principal, parce qu’on
              n’a presque plus que ça&nbsp;: ce qui individualise une journée,
              ce sont le Soleil, la Lune, Mercure, Vénus et Mars.
            </p>
          </Callout>
        </section>

        <Divider />

        {/* ── 5. LA LUNE ───────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="lune">
          <H2 id="lune">La Lune, le cas qui se joue à pile ou face</H2>

          <p className="text-lg leading-relaxed text-text/85">
            La Lune avance de 12 à 15 degrés par jour. Si elle reste dans le
            même signe du premier au dernier instant de votre jour de
            naissance, ce qui arrive dans 56&nbsp;% des journées, votre signe
            lunaire est sûr. Seul son degré flotte, de six à huit degrés de
            part et d’autre de sa position de midi.
          </p>

          <p className="leading-relaxed text-text/85">
            Dans ce cas, vous pouvez lire votre{" "}
            <A href="/blog/lune-en-signes-emotions-besoins">Lune en signe</A>{" "}
            sans réserve. Ses aspects demandent plus de soin&nbsp;: ne retenez
            que ceux qui existent aux deux minuits. Un carré à 3° d’orbe à midi
            peut très bien ne pas exister le matin.
          </p>

          <p className="leading-relaxed text-text/85">
            Si elle change de signe, vous avez deux Lunes possibles. Lisez les
            deux portraits et posez-vous la question de l’article sur la
            Lune&nbsp;: que faites-vous, concrètement, dans les dix minutes qui
            suivent une contrariété&nbsp;? La réponse oriente souvent. Gardez
            pourtant une réserve&nbsp;: on se reconnaît volontiers un peu
            partout, et un indice n’est pas une preuve. Si vous connaissez une
            fourchette horaire, le test des deux minuits appliqué à cette
            fourchette tranche parfois la question à votre place.
          </p>
        </section>

        <Divider />

        {/* ── 6. LES CONVENTIONS ───────────────────────────── */}
        <section className="space-y-5" aria-labelledby="conventions">
          <H2 id="conventions">
            Thème de midi, thème solaire&nbsp;: deux conventions et ce qu’elles
            décident pour vous
          </H2>

          <p className="text-lg leading-relaxed text-text/85">
            Faute d’heure, deux conventions dominent. Le thème de midi place
            les planètes à leur position moyenne de la journée&nbsp;: il limite
            l’erreur sur la Lune. Le thème solaire pose le Soleil sur
            l’Ascendant et en déduit des maisons symboliques. Les deux sont
            légitimes, à condition de ne jamais les lire comme un vrai thème.
          </p>

          <H3>Le thème de midi</H3>
          <p className="leading-relaxed text-text/85">
            C’est la convention la plus répandue, et elle est raisonnable pour
            les degrés. Son défaut est ailleurs&nbsp;: elle tranche les
            questions ouvertes sans le dire. Dans l’exemple, le thème de midi
            affiche une Lune à 1°&nbsp;35′ Taureau et une Vénus à 0°&nbsp;00′
            Verseau, entrée dans le signe six minutes plus tôt. Il affiche
            aussi un Ascendant à 19° Gémeaux, qui n’a aucune valeur.
          </p>

          <aside className="rounded-2xl border border-amber-400/25 bg-amber-500/[0.06] px-6 py-5">
            <p className="text-lg font-semibold leading-relaxed text-amber-100/90 sm:text-xl">
              Le thème de midi a l’air de répondre. Il a tiré à pile ou face.
            </p>
          </aside>

          <p className="leading-relaxed text-text/85">
            La bonne pratique tient en une phrase&nbsp;: les degrés de midi,
            les signes du test des deux minuits, et un trait mental sur
            l’Ascendant et les maisons.
          </p>

          <H3>Le thème solaire</H3>
          <p className="leading-relaxed text-text/85">
            On prend le degré du Soleil comme Ascendant fictif, puis on compte
            douze maisons de 30° à partir de lui. Dans l’exemple, le Soleil à
            6° Poissons ouvre la maison solaire I&nbsp;: le Soleil, Mercure,
            Mars et Saturne y tombent, Jupiter en IV, Uranus et Pluton en VII,
            Neptune en IX, Vénus en XI dans les deux hypothèses. Certains
            calculent plutôt le thème pour l’heure du lever du soleil, ce qui
            revient presque au même.
          </p>
          <p className="leading-relaxed text-text/85">
            C’est, en plus fin, la grille des horoscopes de presse&nbsp;: ils
            prennent votre signe solaire comme maison I. Elle sert à suivre
            les transits de façon symbolique. Elle ne décrit pas votre vie,
            puisque toutes les personnes nées à quelques jours d’écart ont les
            mêmes maisons solaires. C’est d’ailleurs l’une des raisons pour
            lesquelles{" "}
            <A href="/blog/pourquoi-votre-horoscope-ne-vous-ressemble-pas">
              votre horoscope ne vous ressemble pas
            </A>
            .
          </p>
        </section>

        <Divider />

        {/* ── 7. LA RECTIFICATION ──────────────────────────── */}
        <section className="space-y-5" aria-labelledby="rectification">
          <H2 id="rectification">La rectification&nbsp;: retrouver l’heure par la vie</H2>

          <p className="leading-relaxed text-text/85">
            La rectification reconstruit l’heure de naissance à partir de la
            biographie. On part d’une fourchette, même large, et d’une liste
            d’événements datés au jour près&nbsp;: mariage, naissance d’un
            enfant, décès d’un parent, déménagement, accident, changement de
            métier. Pour chaque heure candidate, on calcule les angles du
            thème, Ascendant et Milieu du Ciel, seuls points qui bougent avec
            l’heure, puis on vérifie si les événements coïncident avec des{" "}
            <A href="/transits">transits</A>, des progressions ou des
            directions sur ces angles. On resserre la fourchette en éliminant
            les heures qui expliquent le moins d’événements, jusqu’à retenir
            celle qui en explique le plus avec le moins d’exceptions. Le
            résultat est une heure de travail, à confronter ensuite à de
            nouveaux événements, et non une donnée d’état civil.
          </p>
        </section>

        <Divider />

        {/* ── 8. LA CHECKLIST ──────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="checklist">
          <H2 id="checklist">La checklist avant de lire un thème sans heure</H2>

          <p className="leading-relaxed text-text/85">
            Sept étapes, dans l’ordre. Les deux premières suffisent souvent à
            ne plus avoir besoin des cinq autres.
          </p>

          <div className="relative overflow-hidden rounded-2xl border border-emerald-400/25 bg-gradient-to-br from-emerald-500/[0.10] via-sky-500/[0.05] to-transparent p-6">
            <ol className="relative list-decimal space-y-3 pl-5 leading-relaxed text-text/90">
              <li>
                <strong>Demandez l’acte.</strong> Copie intégrale en France,
                copie de l’acte en Belgique,{" "}
                <span lang="es">certificado literal</span> en Espagne.
              </li>
              <li>
                <strong>Entrez l’heure telle quelle</strong>, avec le lieu. Le
                logiciel gère l’heure d’été&nbsp;; vous, vous ne convertissez
                rien.
              </li>
              <li>
                <strong>Pas d’heure&nbsp;?</strong> Notez la fourchette que
                donne la famille, même vague.
              </li>
              <li>
                <strong>Faites le test des deux minuits</strong>, ou celui de
                la fourchette.
              </li>
              <li>
                <strong>Lisez ce qui tient</strong>&nbsp;: le Soleil, les
                planètes en signes, les aspects présents aux deux bornes.
              </li>
              <li>
                <strong>Traitez la Lune à part</strong>&nbsp;: un signe si le
                test le confirme, deux hypothèses sinon.
              </li>
              <li>
                <strong>Barrez le reste</strong>&nbsp;: Ascendant, Milieu du
                Ciel, maisons, dominante, transits aux angles.
              </li>
            </ol>
          </div>

          <p className="leading-relaxed text-text/85">
            Envoyez cette liste à l’ami qui «&#8239;ne sait pas son
            heure&#8239;»&nbsp;: dans la plupart des cas, l’étape 1 règle la
            question en quelques jours.
          </p>
        </section>

        {/* ── 9. FAQ ───────────────────────────────────────── */}
        <section className="space-y-5" aria-labelledby="faq">
          <H2 id="faq">Questions fréquentes sur le thème sans heure de naissance</H2>

          <div className="space-y-4">
            {faq.map((item) => (
              <details
                key={item.q}
                open
                className="group rounded-2xl border border-white/10 bg-black/20 p-5"
              >
                <summary className="cursor-pointer font-semibold text-white/90 group-open:mb-3">
                  {item.q}
                </summary>
                <p className="leading-relaxed text-text/85">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── SOURCES ──────────────────────────────────────── */}
        <section className="rounded-2xl border border-white/10 bg-black/20 p-6" aria-labelledby="sources">
          <h2 id="sources" className="text-sm font-semibold uppercase tracking-[0.18em] text-text/70">
            Sources
          </h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-text/75">
            <li>
              <Ext href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043896203">
                Code civil, article 57
              </Ext>{" "}
              (Légifrance)&nbsp;: mentions de l’acte de naissance.
            </li>
            <li>
              <Ext href="https://www.service-public.gouv.fr/particuliers/vosdroits/F1427">
                Demande d’acte de naissance
              </Ext>{" "}
              (Service-public.gouv.fr, mise à jour du 14 août 2026).
            </li>
            <li>
              <Ext href="https://www.verviers.be/ma-commune/administration/services-communaux/population/demarches/copie-ou-un-extrait-dun-acte-existant-naissance">
                Copie ou extrait d’un acte de naissance
              </Ext>{" "}
              (Ville de Verviers) et{" "}
              <Ext href="https://www.rijksregister.fgov.be/sites/default/files/documents/fr/baec/FAQ_BAEC_FR_20200701.pdf">
                FAQ de la BAEC
              </Ext>{" "}
              (Registre national, juillet 2020).
            </li>
            <li>
              <Ext href="https://www.boe.es/buscar/act.php?id=BOE-A-2011-12628">
                <span lang="es">Ley 20/2011 del Registro Civil</span>, article 44
              </Ext>{" "}
              (BOE)&nbsp;: l’inscription fait foi de la date, de l’heure et du
              lieu de naissance.
            </li>
            <li>
              Code de la santé publique, article R1112-7&nbsp;: durée de
              conservation du dossier médical.
            </li>
            <li>
              Positions et statistiques&nbsp;: calculs de l’auteur avec Swiss
              Ephemeris (Astrodienst), journées du 1ᵉʳ janvier 1950 au 31
              décembre 2009 en heure légale française.
            </li>
          </ul>
        </section>

        {/* ── CTA / MAILLAGE ───────────────────────────────── */}
        <section className="rounded-2xl border border-white/10 bg-black/20 p-6">
          <p className="text-sm text-text/60">Continuer la lecture</p>
          <div className="mt-3 space-y-3 leading-relaxed text-text/85">
            <p>
              Une fois l’heure retrouvée, tout le thème s’ouvre&nbsp;: la page{" "}
              <A href="/theme-astral">thème astral</A> explique ce qu’il
              contient, et{" "}
              <A href="/blog/comprendre-signe-astrologique-ascendant-12-exemples">
                Soleil et Ascendant en douze exemples
              </A>{" "}
              montre ce que l’Ascendant change à la lecture.
            </p>
            <p>
              Si vous débutez, commencez par{" "}
              <A href="/blog/qu-est-ce-qu-un-theme-astral">
                ce qu’est un thème astral
              </A>
              , puis par les <A href="/maisons">douze maisons</A>, la partie du
              thème que l’heure de naissance rend accessible. Le{" "}
              <A href="/dictionnaire-astrologique">dictionnaire astrologique</A>{" "}
              reprend chaque terme employé ici.
            </p>
          </div>
          <div className="mt-5">
            <Link
              href="/blog"
              className="inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-text/90 transition hover:bg-white/10"
            >
              ← Tous les articles
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
