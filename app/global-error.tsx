"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="fr">
      <body className="bg-slate-950 text-slate-100">
        <main
          id="main-content"
          className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center"
        >
          <h1 className="text-2xl font-semibold text-slate-200">
            Une erreur critique est survenue
          </h1>
          <p className="max-w-md text-slate-400">
            Une erreur inattendue a affecté l&apos;application. Vous pouvez
            réessayer ou revenir à l&apos;accueil.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => reset()}
              className="rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-violet-500"
            >
              Réessayer
            </button>
            <a
              href="/"
              className="rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:border-slate-600 hover:text-white"
            >
              Accueil
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
