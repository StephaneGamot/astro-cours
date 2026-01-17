import type { Metadata } from "next";
import { SITE_NAME, absoluteUrl, buildTitle } from "@/lib/seo";

const CANONICAL = "/confidentialite";
const TITLE = "Politique de confidentialité";
const DESCRIPTION =
  "Politique de confidentialité d’Astro Cours : données collectées, cookies, finalités, durée de conservation, sécurité, et droits RGPD (accès, rectification, suppression).";

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


export default function ConfidentialitePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          Politique de confidentialité
        </h1>
        <p className="text-text/70 text-sm">
          Dernière mise à jour : janvier 2026
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Données collectées</h2>
        <p className="text-text/80 leading-relaxed">
          Le site Astro Cours ne collecte des données personnelles
          que de manière strictement nécessaire.
        </p>
        <ul className="list-disc pl-5 text-text/80 space-y-2">
          <li>données de navigation anonymisées</li>
          <li>données techniques (type de navigateur, pages visitées)</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Outils d’analyse</h2>
        <p className="text-text/80 leading-relaxed">
          Le site utilise des outils de mesure d’audience à des fins
          statistiques et d’amélioration du contenu, notamment :
        </p>
        <ul className="list-disc pl-5 text-text/80 space-y-2">
          <li>Ahrefs Analytics (statistiques de fréquentation)</li>
        </ul>
        <p className="text-text/80 leading-relaxed">
          Ces outils ne permettent pas d’identifier personnellement
          les utilisateurs.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Cookies</h2>
        <p className="text-text/80 leading-relaxed">
          Des cookies techniques ou de mesure d’audience peuvent être
          utilisés afin d’assurer le bon fonctionnement du site
          et d’analyser sa fréquentation.
        </p>
        <p className="text-text/80 leading-relaxed">
          Aucun cookie publicitaire ou de profilage n’est utilisé.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Durée de conservation</h2>
        <p className="text-text/80 leading-relaxed">
          Les données collectées sont conservées pour une durée
          strictement nécessaire aux finalités pour lesquelles
          elles ont été collectées.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Droits des utilisateurs</h2>
        <p className="text-text/80 leading-relaxed">
          Conformément au Règlement Général sur la Protection des Données (RGPD),
          vous disposez des droits suivants :
        </p>
        <ul className="list-disc pl-5 text-text/80 space-y-2">
          <li>droit d’accès</li>
          <li>droit de rectification</li>
          <li>droit à l’effacement</li>
          <li>droit d’opposition</li>
        </ul>
        <p className="text-text/80 leading-relaxed">
          Pour exercer vos droits, vous pouvez contacter :
          <br />
          <a
            href="mailto:contact@astro-cours.com"
            className="underline hover:text-text"
          >
            white-wolf-web@outlook.com
          </a>
        </p>
      </section>
    </main>
  );
}
