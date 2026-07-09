import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { LUNATIONS_2026_2027, type Lunation } from "./data/ephemerides-2026-2027";

export const meta = {
  slug: "calendrier-pleine-lune-nouvelle-lune-2026-2027",
  title: "Calendrier lunaire 2026-2027 : pleines lunes",
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

      <H2>La mécanique : pourquoi 29,5 jours</H2>
      <P>
        Une lunaison est le cycle complet des phases : 29 jours, 12 heures et 44 minutes en
        moyenne (le « mois synodique »). La <strong>nouvelle lune</strong> est le moment exact où
        la Lune passe en <strong>conjonction</strong> avec le Soleil — même degré du zodiaque,
        face éclairée tournée vers le Soleil, donc invisible pour nous. La{" "}
        <strong>pleine lune</strong> est l&apos;<strong>opposition</strong> exacte : Terre entre
        les deux astres, disque entièrement éclairé. Ce ne sont pas des « journées » mais des
        instants précis — d&apos;où les heures à la minute dans nos tableaux. Et comme la Lune
        avance d&apos;environ 12° par jour, le signe indiqué est celui de l&apos;instant exact :
        quelques heures plus tard, elle peut déjà avoir changé de signe.
      </P>
      <P>
        Symboliquement, l&apos;astrologie lit ce cycle comme une respiration : la conjonction
        fusionne volonté (Soleil) et besoin (Lune) — on sème sans encore voir ; l&apos;opposition
        les met face à face — ce qui a été semé devient visible, se récolte ou se corrige. Notre
        cours sur <Link href="/blog/pleine-lune-nouvelle-lune-cycles-astrologie">les cycles
        lunaires</Link> développe les huit phases intermédiaires.
      </P>

      <H2>Nouvelle lune, pleine lune : ce que ça change concrètement</H2>
      <P>
        La <strong>nouvelle lune</strong> ouvre le cycle. Énergie basse, tournée vers
        l&apos;intérieur : mauvais moment pour lancer en fanfare, excellent moment pour décider
        en silence. Le signe de la conjonction donne la tonalité : une nouvelle lune en Vierge
        (31 août 2027) favorise les décisions d&apos;organisation, de santé, de méthode ; en
        Scorpion (29 octobre 2027), les décisions de fond — couper, assainir, transformer.
      </P>
      <P>
        La <strong>pleine lune</strong> culmine le cycle ouvert par la nouvelle lune du même
        signe six mois plus tôt — c&apos;est le vrai couple à observer. La pleine lune du Taureau
        du 14 novembre 2027 éclaire ce qui a été semé à la nouvelle lune du Taureau du 6 mai 2027.
        Émotionnellement, l&apos;opposition Soleil-Lune tend le fil entre deux pôles de votre vie
        (soi/l&apos;autre, travail/foyer selon l&apos;axe de signes) : d&apos;où les nuits
        agitées et les décisions impulsives des pleines lunes — culminez, célébrez, terminez,
        mais évitez de trancher à chaud.
      </P>

      <H2>Trouver la maison activée chez vous : la méthode</H2>
      <P>
        Le signe donne l&apos;ambiance générale, mais c&apos;est la{" "}
        <Link href="/maisons">maison</Link> de votre <Link href="/theme-astral">thème natal</Link>{" "}
        qui dit <em>où ça se passe pour vous</em>. La méthode : prenez le degré de la lunaison
        dans le tableau (ex. pleine lune du 14 novembre 2027 à 21° Taureau), ouvrez votre thème,
        cherchez entre quelles cuspides tombe 21° Taureau. Si c&apos;est votre maison II :
        culmination financière — rentrée d&apos;argent, facture, prise de conscience sur vos
        ressources. Maison VII : un sujet de couple arrive à maturité. Maison XII : fatigue,
        besoin de retrait, fin de cycle intérieur. Une même pleine lune raconte douze histoires
        différentes selon les thèmes — c&apos;est pour cela que les horoscopes génériques tombent
        si souvent à côté.
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

      <H2>Pourquoi des éclipses certains mois et pas d&apos;autres ?</H2>
      <P>
        Il y a une nouvelle lune chaque mois, mais une éclipse solaire seulement deux fois par an
        environ. La raison : l&apos;orbite de la Lune est inclinée de 5° sur celle de la Terre.
        La plupart du temps, la conjonction se fait « au-dessus » ou « en dessous » du Soleil —
        pas d&apos;alignement parfait, pas d&apos;éclipse. Deux fois par an, la lunaison se
        produit près des <Link href="/noeuds-lunaires">nœuds lunaires</Link> — les points où les
        deux orbites se croisent — et là, l&apos;alignement est réel : nouvelle lune près du nœud
        = éclipse solaire, pleine lune près du nœud = éclipse lunaire. C&apos;est pourquoi les
        éclipses vont par paires à quinze jours d&apos;écart (regardez août 2026 dans le tableau)
        et reviennent par « saisons » tous les six mois environ.
      </P>
      <P>
        En interprétation, une éclipse est une lunaison à fort coefficient : parce qu&apos;elle
        implique l&apos;axe des nœuds — l&apos;axe évolutif du thème —, on lui prête des effets
        qui se déploient sur six mois à un an, avec des tournants plus marqués que d&apos;habitude
        (débuts, fins, révélations). Conseil pratique contre-intuitif : on ne « rituelise » pas
        une éclipse comme une nouvelle lune ordinaire. L&apos;énergie est considérée comme
        instable — observez, notez ce qui se déclenche, et laissez les décisions décanter
        quelques jours.
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

      <H2>Ce que chaque signe de lunaison active</H2>
      <P>
        Mini-guide pour lire les tableaux ci-dessus. <strong>Bélier</strong> : élans, décisions
        rapides, ce qui demande du courage. <strong>Taureau</strong> : argent, corps, ce qui doit
        durer. <strong>Gémeaux</strong> : échanges, contrats, fratrie, informations.{" "}
        <strong>Cancer</strong> : famille, foyer, mémoire, sécurité affective.{" "}
        <strong>Lion</strong> : création, visibilité, enfants, fierté. <strong>Vierge</strong> :
        travail quotidien, santé, tri et méthode. <strong>Balance</strong> : couple, contrats,
        équilibres à renégocier. <strong>Scorpion</strong> : finances partagées, intimité, ce qui
        doit finir. <strong>Sagittaire</strong> : études, voyages, sens, horizons.{" "}
        <strong>Capricorne</strong> : carrière, structures, responsabilités.{" "}
        <strong>Verseau</strong> : amitiés, projets collectifs, libertés. <strong>Poissons</strong> :
        repos, spiritualité, clôtures de cycle. Croisez ce registre avec la maison de votre thème
        (méthode ci-dessus) pour obtenir une lecture réellement personnelle.
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
