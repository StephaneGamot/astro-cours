import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { LUNATIONS_2026_2027, type Lunation } from "./data/ephemerides-2026-2027";

export const meta = {
  slug: "calendrier-pleine-lune-nouvelle-lune-2026-2027",
  title: "Calendrier lunaire 2026-2027 : pleines et nouvelles lunes",
  description:
    "Toutes les pleines lunes et nouvelles lunes de juillet 2026 à décembre 2027 : dates, heures (Paris), signes, éclipses — et comment utiliser chaque lunaison.",
  date: "2026-07-07",
  tags: ["Lune", "pleine lune", "nouvelle lune", "calendrier", "cycles", "éclipses", "débutant"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/lune-cycles.webp",
};

const SIGNS = ["Bélier", "Taureau", "Gémeaux", "Cancer", "Lion", "Vierge", "Balance", "Scorpion", "Sagittaire", "Capricorne", "Verseau", "Poissons"];

const ECLIPSE_LABEL: Record<NonNullable<Lunation["eclipse"]>, string> = {
  "solar-total": "Éclipse solaire totale",
  "solar-annular": "Éclipse solaire annulaire",
  "lunar-partial": "Éclipse lunaire partielle",
  "lunar-penumbral": "Éclipse lunaire pénombrale",
};

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-6 mt-12 flex items-center font-serif text-3xl font-light text-white md:text-4xl">
      <span className="mr-4 block h-px w-8 bg-gradient-to-r from-violet-500/50 to-transparent" aria-hidden="true" />
      {children}
    </h2>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className="mb-4 leading-relaxed text-text/85">{children}</p>;
}

const fmt = (d: string) =>
  new Date(`${d}T12:00:00Z`).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

function LunationTable({ year }: { year: "2026" | "2027" }) {
  const rows = LUNATIONS_2026_2027.filter((l) => l.date.startsWith(year));
  return (
    <div className="my-6 overflow-x-auto rounded-2xl border border-white/10">
      <table className="w-full min-w-[560px] text-left text-sm">
        <thead className="bg-white/5 text-text/70">
          <tr>
            <th className="p-3">Date (heure de Paris)</th>
            <th className="p-3">Lunaison</th>
            <th className="p-3">Signe</th>
            <th className="p-3">Particularité</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((l) => (
            <tr key={`${l.date}${l.type}`} className="border-t border-white/10 text-text/85">
              <td className="p-3">
                <strong>{fmt(l.date)}</strong> à {l.time}
              </td>
              <td className="p-3">{l.type === "NL" ? "🌑 Nouvelle lune" : "🌕 Pleine lune"}</td>
              <td className="p-3">
                {SIGNS[l.signIndex]} {l.degree.toFixed(0)}°
              </td>
              <td className="p-3">{l.eclipse ? <strong className="text-amber-300">{ECLIPSE_LABEL[l.eclipse]}</strong> : "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function CalendrierLunaire20262027Post() {
  return (
    <article>
      <P>
        Voici le <strong>calendrier complet des lunaisons</strong> de juillet 2026 à décembre
        2027 : chaque nouvelle lune et chaque pleine lune, avec l&apos;heure exacte pour la France
        (heure de Paris), le signe occupé par la <Link href="/planetes/lune">Lune</Link> et les
        éclipses. Les positions sont calculées sur éphémérides astronomiques — pas recopiées
        d&apos;un almanach approximatif.
      </P>

      <H2>Comment utiliser ce calendrier</H2>
      <P>
        La logique du cycle est simple et nous l&apos;avons détaillée dans notre cours sur{" "}
        <Link href="/blog/pleine-lune-nouvelle-lune-cycles-astrologie">les cycles
        lunaires</Link> : la <strong>nouvelle lune</strong> (conjonction Soleil-Lune) ouvre le
        cycle — c&apos;est le moment des intentions et des commencements discrets ; la{" "}
        <strong>pleine lune</strong> (opposition Soleil-Lune) le culmine — moment de visibilité,
        de bilan et de lâcher-prise. Le signe de la lunaison colore le domaine : une nouvelle lune
        en Vierge invite à réorganiser le quotidien, une pleine lune en Bélier fait éclater ce qui
        piétinait. Pour un usage personnel, repérez la <Link href="/maisons">maison</Link> de
        votre <Link href="/theme-astral">thème natal</Link> où tombe la lunaison : c&apos;est là
        que le cycle se joue concrètement pour vous.
      </P>

      <H2>Lunaisons de juillet à décembre 2026</H2>
      <LunationTable year="2026" />
      <P>
        Le grand rendez-vous de l&apos;été : l&apos;<strong>éclipse solaire totale du 12 août
        2026</strong>, sur la nouvelle lune en Lion — visible notamment depuis l&apos;Islande et
        l&apos;Espagne. Les éclipses sont des lunaisons amplifiées : leurs effets symboliques se
        déploient sur plusieurs mois, surtout si elles touchent un point sensible de votre thème.
        Elle est suivie d&apos;une éclipse lunaire partielle le 28 août sur la pleine lune en
        Poissons.
      </P>

      <H2>Lunaisons de 2027</H2>
      <LunationTable year="2027" />
      <P>
        2027 est une année d&apos;éclipses marquantes : l&apos;annulaire du <strong>6 février</strong>{" "}
        (nouvelle lune en Verseau), puis surtout l&apos;<strong>éclipse solaire totale du 2 août
        2027</strong> — l&apos;une des plus longues du siècle, visible du sud de l&apos;Espagne à
        l&apos;Afrique du Nord — sur la nouvelle lune en Lion, au même endroit du zodiaque
        qu&apos;en août 2026 : un vrai « chapitre 2 » pour les personnes marquées en Lion.
      </P>

      <H2>Trois usages concrets</H2>
      <P>
        <strong>Rituel d&apos;intention (nouvelle lune).</strong> Dans les 48 h qui suivent la
        conjonction, formulez une à trois intentions liées au signe et à la maison activés —
        écrites, datées, relisables à la pleine lune correspondante six mois plus tard.
      </P>
      <P>
        <strong>Bilan de mi-cycle (pleine lune).</strong> La pleine lune éclaire ce qui a mûri
        depuis la nouvelle lune du même signe : c&apos;est le moment de finaliser, célébrer ou
        clore — pas d&apos;ouvrir un chantier neuf.
      </P>
      <P>
        <strong>Suivi des transits.</strong> Une lunaison qui tombe à moins de 3° d&apos;une de
        vos planètes natales est un vrai déclencheur : notre cours sur{" "}
        <Link href="/transits">les transits</Link> explique comment hiérarchiser ces contacts, et
        le portrait du <Link href="/blog/lunarien">Lunarien</Link> décrit ceux pour qui la Lune
        donne le tempo de toute l&apos;année.
      </P>
    </article>
  );
}
