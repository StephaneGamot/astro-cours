import type { Metadata } from "next";

import { SITE_NAME, absoluteUrl, buildTitle } from "@/lib/seo";

const CANONICAL = "/mentions-legales";
const TITLE = "Mentions légales";
const DESCRIPTION =
  "Mentions légales d'Astro Cours : éditeur du site, hébergement, contact, propriété intellectuelle, responsabilité, et conditions d'utilisation conformément à la loi LCEN.";

export const metadata: Metadata = {
  title: buildTitle(TITLE),
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true },

  openGraph: {
    title: buildTitle(TITLE),
    description: DESCRIPTION,
    url: absoluteUrl(CANONICAL),
    siteName: SITE_NAME,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: absoluteUrl("/og/cover.jpg"),
        width: 1200,
        height: 630,
        alt: buildTitle(TITLE),
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: buildTitle(TITLE),
    description: DESCRIPTION,
    images: [absoluteUrl("/og/cover.jpg")],
  },
};

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
export default function MentionsLegalesPage() {
  const lastUpdate = "16 avril 2026";

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
      {/* ── En-tête ─────────────────────────────────────────────── */}
      <header className="mb-12 space-y-4 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-violet-400">
          Obligations légales
        </p>
        <h1 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Mentions légales
        </h1>
        <p className="mx-auto max-w-xl text-sm leading-relaxed text-text/60">
          Conformément aux dispositions de la loi n°&nbsp;2004-575 du 21&nbsp;juin
          2004 pour la confiance dans l&apos;économie numérique (LCEN), il est
          porté à la connaissance des utilisateurs du site{" "}
          <strong className="text-text/80">astro-cours.com</strong> les
          informations suivantes.
        </p>
        <p className="text-xs text-text/40">
          Dernière mise à jour&nbsp;: {lastUpdate}
        </p>
      </header>

      {/* ── Articles ────────────────────────────────────────────── */}
      <div className="space-y-6">
        {/* Art. 1 — Éditeur */}
        <Article number="Art. 1" title="Éditeur du site">
          <p>
            Le site <strong className="text-text/90">astro-cours.com</strong> est
            édité par&nbsp;:
          </p>
          <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-[0.92rem]">
            <dt className="text-text/50">Nom</dt>
            <dd className="text-text/80">Stéphane Gamot</dd>

            <dt className="text-text/50">Statut</dt>
            <dd className="text-text/80">
              Entrepreneur individuel — Éditeur de contenus pédagogiques
            </dd>

            <dt className="text-text/50">Siège</dt>
            <dd className="text-text/80">France</dd>

            <dt className="text-text/50">Contact</dt>
            <dd>
              <a
                href="mailto:white-wolf-web@outlook.com"
                className="text-violet-400/90 underline decoration-violet-400/30 underline-offset-2 transition-colors hover:text-violet-300 hover:decoration-violet-300/50"
              >
                white-wolf-web@outlook.com
              </a>
            </dd>
          </dl>
        </Article>

        {/* Art. 2 — Directeur de la publication */}
        <Article number="Art. 2" title="Directeur de la publication">
          <p>
            Le directeur de la publication est{" "}
            <strong className="text-text/90">Stéphane Gamot</strong>, en sa
            qualité d&apos;éditeur du site, conformément à l&apos;article&nbsp;6-III-1
            de la loi LCEN.
          </p>
        </Article>

        {/* Art. 3 — Hébergement */}
        <Article number="Art. 3" title="Hébergement">
          <p>Le site est hébergé par&nbsp;:</p>
          <address className="mt-2 not-italic text-text/80">
            <strong>Vercel Inc.</strong>
            <br />
            440 N Barranca Ave #4133
            <br />
            Covina, CA 91723 — États-Unis
            <br />
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400/90 underline decoration-violet-400/30 underline-offset-2 transition-colors hover:text-violet-300 hover:decoration-violet-300/50"
            >
              https://vercel.com
            </a>
          </address>
        </Article>

        {/* Art. 4 — Propriété intellectuelle */}
        <Article number="Art. 4" title="Propriété intellectuelle">
          <p>
            L&apos;ensemble des éléments composant le site Astro Cours — textes,
            cours, articles, illustrations, photographies, structure
            pédagogique, charte graphique, logos et tout autre contenu — est
            protégé par les dispositions du Code de la propriété intellectuelle
            (articles L.111-1 et suivants).
          </p>
          <p>
            Toute reproduction, représentation, modification, publication,
            transmission ou dénaturation, totale ou partielle, par quelque
            procédé que ce soit et sur quelque support que ce soit, est
            strictement interdite sans l&apos;autorisation écrite préalable de
            l&apos;éditeur. Toute exploitation non autorisée sera constitutive
            d&apos;une contrefaçon sanctionnée par les articles L.335-2 et
            suivants du Code de la propriété intellectuelle.
          </p>
        </Article>

        {/* Art. 5 — Limitation de responsabilité */}
        <Article number="Art. 5" title="Limitation de responsabilité">
          <p>
            Les contenus diffusés sur le site Astro Cours ont une vocation
            strictement <strong className="text-text/90">pédagogique et informative</strong>.
            Ils ne sauraient en aucun cas se substituer à un avis médical,
            juridique, financier ou à toute autre forme de conseil
            professionnel. Ils ne constituent pas davantage une prédiction
            d&apos;événements futurs.
          </p>
          <p>
            L&apos;éditeur s&apos;efforce d&apos;assurer l&apos;exactitude et la
            mise à jour des informations diffusées sur le site, mais ne saurait
            garantir leur exhaustivité ni l&apos;absence d&apos;erreurs.
            L&apos;utilisateur est seul responsable de l&apos;usage qu&apos;il
            fait des informations consultées.
          </p>
          <p>
            L&apos;éditeur décline toute responsabilité en cas de
            dommages directs ou indirects résultant de l&apos;accès au site, de
            son utilisation ou de l&apos;impossibilité d&apos;y accéder.
          </p>
        </Article>

        {/* Art. 6 — Protection des données personnelles */}
        <Article number="Art. 6" title="Protection des données personnelles">
          <p>
            Conformément au Règlement (UE) 2016/679 du 27&nbsp;avril 2016
            (RGPD) et à la loi n°&nbsp;78-17 du 6&nbsp;janvier 1978 modifiée
            relative à l&apos;informatique, aux fichiers et aux libertés, tout
            utilisateur dispose d&apos;un droit d&apos;accès, de
            rectification, d&apos;effacement, de limitation du traitement, de
            portabilité et d&apos;opposition concernant ses données
            personnelles.
          </p>
          <p>
            Le site Astro Cours ne collecte aucune donnée personnelle à
            l&apos;insu de l&apos;utilisateur. Aucun cookie publicitaire ni
            traceur tiers n&apos;est déposé. Des cookies strictement nécessaires
            au fonctionnement technique du site peuvent être utilisés.
          </p>
          <p>
            Pour exercer vos droits ou pour toute question relative à la
            protection de vos données, vous pouvez adresser votre demande
            à&nbsp;:{" "}
            <a
              href="mailto:white-wolf-web@outlook.com"
              className="text-violet-400/90 underline decoration-violet-400/30 underline-offset-2 transition-colors hover:text-violet-300 hover:decoration-violet-300/50"
            >
              white-wolf-web@outlook.com
            </a>
            . Vous disposez également du droit d&apos;introduire une
            réclamation auprès de la{" "}
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400/90 underline decoration-violet-400/30 underline-offset-2 transition-colors hover:text-violet-300 hover:decoration-violet-300/50"
            >
              CNIL
            </a>
            .
          </p>
        </Article>

        {/* Art. 7 — Liens hypertextes */}
        <Article number="Art. 7" title="Liens hypertextes">
          <p>
            Le site Astro Cours peut contenir des liens hypertextes vers
            d&apos;autres sites internet. L&apos;éditeur n&apos;exerce aucun
            contrôle sur le contenu de ces sites tiers et décline toute
            responsabilité quant aux informations, opinions ou contenus
            accessibles via ces liens.
          </p>
          <p>
            La mise en place de liens hypertextes vers tout ou partie du site
            Astro Cours est soumise à l&apos;autorisation préalable de
            l&apos;éditeur. Cette autorisation peut être retirée à tout moment.
          </p>
        </Article>

        {/* Art. 8 — Droit applicable */}
        <Article number="Art. 8" title="Droit applicable et juridiction compétente">
          <p>
            Les présentes mentions légales sont régies par le droit français.
            En cas de litige et à défaut de résolution amiable, les tribunaux
            français seront seuls compétents pour en connaître.
          </p>
        </Article>
      </div>

      {/* ── Pied de page ────────────────────────────────────────── */}
      <footer className="mt-14 border-t border-white/[0.06] pt-8 text-center text-xs text-text/35">
        <p>
          Mentions légales rédigées conformément à la loi n°&nbsp;2004-575 du
          21&nbsp;juin 2004 (LCEN) et au Règlement général sur la protection
          des données (RGPD).
        </p>
      </footer>
    </main>
  );
}
