import type { Metadata } from "next";
import { SITE_NAME, absoluteUrl, buildTitle } from "@/lib/seo";

const CANONICAL = "/confidentialite";
const TITLE = "Politique de confidentialité : RGPD, cookies";
const DESCRIPTION =
  "Politique de confidentialité d'Astro Cours : cookies, données collectées, durée de conservation, sécurité et droits RGPD. Consultez vos droits ici.";

export const metadata: Metadata = {
  title: buildTitle(TITLE),
  description: DESCRIPTION,
  alternates: { canonical: absoluteUrl(CANONICAL) },
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
export default function ConfidentialitePage() {
  const lastUpdate = "16 avril 2026";

  return (
    <main id="main-content" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
      {/* ── En-tête ─────────────────────────────────────────────── */}
      <header className="mb-12 space-y-4 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-violet-400">
          Protection des données
        </p>
        <h1 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Politique de confidentialité
        </h1>
        <p className="mx-auto max-w-xl text-sm leading-relaxed text-text/60">
          Conformément au Règlement général sur la protection des données (RGPD)
          et à la loi Informatique et Libertés, cette page détaille la manière
          dont le site{" "}
          <strong className="text-text/80">astro-cours.com</strong> collecte,
          utilise et protège vos données personnelles.
        </p>
        <p className="text-xs text-text/40">
          Dernière mise à jour&nbsp;: {lastUpdate}
        </p>
      </header>

      {/* ── Articles ────────────────────────────────────────────── */}
      <div className="space-y-6">
        {/* Art. 1 — Données collectées */}
        <Article number="Art. 1" title="Données collectées">
          <p>
            Le site Astro Cours ne collecte des données personnelles que de
            manière strictement nécessaire. Les données suivantes peuvent être
            recueillies&nbsp;:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>données de navigation anonymisées</li>
            <li>données techniques (type de navigateur, pages visitées)</li>
          </ul>
        </Article>

        {/* Art. 2 — Outils d'analyse */}
        <Article number="Art. 2" title="Outils d&apos;analyse">
          <p>
            Le site utilise des outils de mesure d&apos;audience à des fins
            statistiques et d&apos;amélioration du contenu, notamment&nbsp;:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong className="text-text/90">Ahrefs Analytics</strong>{" "}
              (statistiques de fréquentation)
            </li>
          </ul>
          <p>
            Ces outils ne permettent pas d&apos;identifier personnellement les
            utilisateurs.
          </p>
        </Article>

        {/* Art. 3 — Cookies */}
        <Article number="Art. 3" title="Cookies">
          <p>
            Des cookies techniques ou de mesure d&apos;audience peuvent être
            utilisés afin d&apos;assurer le bon fonctionnement du site et
            d&apos;analyser sa fréquentation.
          </p>
          <p>
            Aucun cookie publicitaire ou de profilage n&apos;est utilisé.
          </p>
        </Article>

        {/* Art. 4 — Durée de conservation */}
        <Article number="Art. 4" title="Durée de conservation">
          <p>
            Les données collectées sont conservées pour une durée strictement
            nécessaire aux finalités pour lesquelles elles ont été collectées.
          </p>
        </Article>

        {/* Art. 5 — Droits des utilisateurs */}
        <Article number="Art. 5" title="Droits des utilisateurs">
          <p>
            Conformément au Règlement Général sur la Protection des Données
            (RGPD), vous disposez des droits suivants&nbsp;:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>droit d&apos;accès</li>
            <li>droit de rectification</li>
            <li>droit à l&apos;effacement</li>
            <li>droit d&apos;opposition</li>
          </ul>
          <p>
            Pour exercer vos droits, vous pouvez contacter&nbsp;:{" "}
            <a
              href="mailto:white-wolf-web@outlook.com"
              className="text-violet-400/90 underline decoration-violet-400/30 underline-offset-2 transition-colors hover:text-violet-300 hover:decoration-violet-300/50"
            >
              white-wolf-web@outlook.com
            </a>
            . Vous disposez également du droit d&apos;introduire une réclamation
            auprès de la{" "}
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
      </div>

      {/* ── Pied de page ────────────────────────────────────────── */}
      <footer className="mt-14 border-t border-white/[0.06] pt-8 text-center text-xs text-text/35">
        <p>
          Politique de confidentialité rédigée conformément au Règlement général
          sur la protection des données (RGPD) et à la loi n°&nbsp;78-17 du
          6&nbsp;janvier 1978 modifiée.
        </p>
      </footer>
    </main>
  );
}
