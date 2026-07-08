import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { MERCURY_RX, NEXT_RX_2028 } from "./data/ephemerides-2026-2027";

export const meta = {
  slug: "mercure-retrograde-2027-dates",
  title: "Mercure rétrograde 2027 : dates exactes et signes",
  description:
    "Les 3 rétrogradations de Mercure en 2027 : dates précises (heure de Paris), signes traversés, ombres pré/post et conseils concrets — sans panique inutile.",
  date: "2026-07-07",
  tags: ["Mercure", "rétrograde", "transits", "2027", "calendrier", "débutant"],
  readingLevel: "débutant" as const,
  cover: "/images/blog/mercurien2.webp",
};

const SIGNS = ["Bélier", "Taureau", "Gémeaux", "Cancer", "Lion", "Vierge", "Balance", "Scorpion", "Sagittaire", "Capricorne", "Verseau", "Poissons"];

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-6 mt-12 flex items-center font-serif text-3xl font-light text-white md:text-4xl">
      <span className="mr-4 block h-px w-8 bg-gradient-to-r from-sky-500/50 to-transparent" aria-hidden="true" />
      {children}
    </h2>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className="mb-4 leading-relaxed text-text/85">{children}</p>;
}

function Callout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="my-6 rounded-2xl border border-sky-400/20 bg-sky-500/[0.06] p-5">
      <p className="mb-2 text-sm font-semibold text-sky-200">📌 {title}</p>
      <div className="space-y-2 leading-relaxed text-text/85">{children}</div>
    </div>
  );
}

const fmt = (d: string) =>
  new Date(`${d}T12:00:00Z`).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

function RxTable() {
  const rows = MERCURY_RX.filter((r) => r.start.startsWith("2027"));
  return (
    <div className="my-6 overflow-x-auto rounded-2xl border border-white/10">
      <table className="w-full min-w-[560px] text-left text-sm">
        <thead className="bg-white/5 text-text/70">
          <tr>
            <th className="p-3">Rétrograde du</th>
            <th className="p-3">au</th>
            <th className="p-3">Trajet zodiacal</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.start} className="border-t border-white/10 text-text/85">
              <td className="p-3">
                <strong>{fmt(r.start)}</strong> à {r.startTime}
              </td>
              <td className="p-3">
                <strong>{fmt(r.end)}</strong> à {r.endTime}
              </td>
              <td className="p-3">
                {SIGNS[r.startSignIndex]} {r.startDegree.toFixed(0)}° → {SIGNS[r.endSignIndex]}{" "}
                {r.endDegree.toFixed(0)}°
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function MercureRetrograde2027Post() {
  const rx2026 = MERCURY_RX[0];
  return (
    <article>
      <P>
        Trois fois par an environ, <Link href="/planetes/mercure">Mercure</Link> semble reculer
        dans le zodiaque — un simple effet d&apos;optique vu de la Terre, mais un rendez-vous que
        tout amateur d&apos;astrologie surveille. Voici les <strong>dates exactes des
        rétrogradations de Mercure en 2027</strong>, calculées en heure de Paris, avec les signes
        traversés et, surtout, la manière intelligente de les vivre.
      </P>
      <Callout title="Encore en 2026">
        <p>
          Avant 2027, une dernière rétrogradation a lieu du <strong>{fmt(rx2026.start)}</strong> au{" "}
          <strong>{fmt(rx2026.end)}</strong>, entièrement en {SIGNS[rx2026.startSignIndex]} (
          {rx2026.startDegree.toFixed(0)}° → {rx2026.endDegree.toFixed(0)}°).
        </p>
      </Callout>

      <H2>Les 3 rétrogradations de Mercure en 2027</H2>
      <RxTable />
      <P>
        Fait notable de 2027 : les trois périodes démarrent en <strong>signes d&apos;eau</strong>{" "}
        (Poissons, Cancer, Scorpion) et reculent chacune vers le signe d&apos;air ou d&apos;eau
        précédent. Le mental collectif ne bute donc pas sur la logistique pure, mais sur ce qui se
        dit <em>entre</em> les lignes : émotions mal formulées, souvenirs qui remontent,
        conversations à reprendre avec plus de tact.
      </P>

      <H2>Février – mars : Poissons → Verseau</H2>
      <P>
        Du <strong>9 février au 3 mars 2027</strong>, Mercure rétrograde des Poissons (6°) au
        Verseau (21°). Phase idéale pour reprendre un projet créatif ou un dossier resté flou,
        reformuler ce qui avait été mal compris, clarifier un malentendu amical (registre
        Verseau). À éviter : signer dans le brouillard — les Poissons rétrogrades excellent à
        rendre les contrats poétiques et imprécis.
      </P>

      <H2>Juin – juillet : Cancer → Gémeaux</H2>
      <P>
        Du <strong>10 juin au 4 juillet 2027</strong>, Mercure recule du Cancer (6°) aux Gémeaux
        (28°) — son propre domicile. Conversations familiales à rouvrir, souvenirs et archives à
        trier, dossiers immobiliers à re-vérifier (registre Cancer). Le retour en Gémeaux en fin
        de période remet l&apos;accent sur les trajets, les mails et les doubles réservations :
        relisez tout deux fois.
      </P>

      <H2>Octobre : Scorpion → Balance</H2>
      <P>
        Du <strong>7 au 28 octobre 2027</strong>, Mercure rétrograde du Scorpion (5°) à la Balance
        (19°). Secrets qui remontent, comptes communs à réexaminer, négociations et contrats à
        rééquilibrer (registre Balance). C&apos;est la rétrogradation la plus « stratégique » de
        l&apos;année : excellente pour renégocier, risquée pour trancher un conflit à chaud.
      </P>

      <H2>Ombres pré et post-rétrogrades</H2>
      <P>
        La zone de turbulence réelle dépasse les dates officielles : Mercure traverse d&apos;abord
        en marche avant les degrés qu&apos;il va rétrograder (<em>ombre pré</em>, ~2 semaines
        avant), puis les retraverse une troisième fois après sa station directe (<em>ombre
        post</em>, ~2 semaines après). Si un dossier sensible déraille juste « avant les dates »,
        c&apos;est souvent là que ça se joue. Notre cours sur{" "}
        <Link href="/retrogrades">les rétrogradations</Link> détaille ce mécanisme.
      </P>

      <H2>Ce que Mercure rétrograde ne veut PAS dire</H2>
      <P>
        Non, le monde ne s&apos;arrête pas trois fois par an. Mercure rétrograde n&apos;interdit ni
        de signer, ni de voyager, ni de lancer un projet — des millions de contrats se signent
        très bien pendant ces périodes. Symboliquement, la fonction mercurienne s&apos;intériorise :
        c&apos;est un temps de <strong>re-</strong> (relire, réviser, renégocier, retrouver,
        reprendre contact) plutôt que de premières fois. Dans un{" "}
        <Link href="/theme-astral">thème natal</Link>, tout dépend d&apos;ailleurs des{" "}
        <Link href="/transits">transits</Link> exacts sur VOS planètes : une rétrogradation qui ne
        touche aucun point sensible de votre thème passera inaperçue.
      </P>

      <Callout title="Check-list des périodes rétrogrades">
        <p>Sauvegarder ses fichiers et confirmer ses rendez-vous par écrit.</p>
        <p>Relire les contrats deux fois — et accepter que les délais glissent.</p>
        <p>Profiter du climat « re- » : reprendre contact, réviser, finaliser l&apos;inachevé.</p>
        <p>Ne rien dramatiser : observer, noter, vérifier dans son propre thème.</p>
      </Callout>

      <P>
        Prochaine échéance après 2027 : Mercure repart en rétrogradation le{" "}
        <strong>{fmt(NEXT_RX_2028.start)}</strong> en {SIGNS[NEXT_RX_2028.signIndex]}. Pour
        comprendre comment un profil fortement mercurien vit ces phases, lisez notre portrait du{" "}
        <Link href="/blog/mercurien">Mercurien</Link>.
      </P>
    </article>
  );
}
