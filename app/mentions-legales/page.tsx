import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site Astro Cours : éditeur, hébergement, responsabilité et propriété intellectuelle.",
  alternates: {
    canonical: "/mentions-legales",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MentionsLegalesPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          Mentions légales
        </h1>
        <p className="text-text/70 text-sm">
          Conformément à la législation en vigueur.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Éditeur du site</h2>
        <p className="text-text/80 leading-relaxed">
          <strong>Astro Cours</strong><br />
          Site édité par <strong>Stéphane Gamot</strong><br />
          Entrepreneur indépendant / Éditeur de contenus pédagogiques<br />
          France - Belgique - Espagne
        </p>
        <p className="text-text/80 leading-relaxed">
          Contact :{" "}
          <a
            href="mailto:contact@astro-cours.com"
            className="underline hover:text-text"
          >
            white-wolf-web@outlook.com
          </a>
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Responsable de la publication</h2>
        <p className="text-text/80 leading-relaxed">
          Stéphane Gamot
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Hébergement</h2>
        <p className="text-text/80 leading-relaxed">
          Le site est hébergé par :<br />
          <strong>Vercel Inc.</strong><br />
          440 N Barranca Ave #4133<br />
          Covina, CA 91723<br />
          États-Unis<br />
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-text"
          >
            https://vercel.com
          </a>
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Propriété intellectuelle</h2>
        <p className="text-text/80 leading-relaxed">
          L’ensemble des contenus présents sur le site Astro Cours
          (textes, cours, articles, illustrations, structure pédagogique)
          est protégé par le droit d’auteur.
        </p>
        <p className="text-text/80 leading-relaxed">
          Toute reproduction, représentation, modification ou diffusion,
          totale ou partielle, sans autorisation écrite préalable,
          est strictement interdite.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Limitation de responsabilité</h2>
        <p className="text-text/80 leading-relaxed">
          Les contenus proposés sur Astro Cours ont une vocation
          <strong> pédagogique et informative</strong>.
          Ils ne constituent ni un conseil médical, juridique ou financier,
          ni une prédiction d’événements.
        </p>
        <p className="text-text/80 leading-relaxed">
          L’utilisateur reste pleinement responsable de l’usage
          qu’il fait des informations proposées.
        </p>
      </section>
    </main>
  );
}
