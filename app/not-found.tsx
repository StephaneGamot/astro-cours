import Link from "next/link";

/**
 * not-found RACINE — filet de sécurité.
 *
 * Le 404 "normal" (avec NavBar/Footer) est géré par app/[locale]/not-found.tsx.
 * Ce fichier ne sert que pour un 404 déclenché HORS contexte de locale
 * (ex. requête qui contourne le middleware). Comme le layout racine ne rend
 * pas de <html>/<body>, on les fournit ici.
 */
export default function RootNotFound() {
  return (
    <html lang="fr">
      <body className="bg-[#09090b] text-slate-100">
        <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
          <h1 className="text-2xl font-semibold text-slate-200">
            Page introuvable
          </h1>
          <Link
            href="/"
            className="rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-violet-500"
          >
            Retour à l&apos;accueil
          </Link>
        </main>
      </body>
    </html>
  );
}
