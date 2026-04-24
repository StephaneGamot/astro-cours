import Link from "next/link";

/* ================================================================== */
/*  Avatar SVG placeholder — silhouette astrale                        */
/* ================================================================== */
function AvatarPlaceholder() {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-20 w-20 shrink-0 rounded-full ring-2 ring-purple-500/30"
      role="img"
      aria-label="Photo de Stéphane Gamot"
    >
      {/* fond dégradé jupitérien */}
      <defs>
        <radialGradient id="av-bg" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0.9" />
        </radialGradient>
      </defs>
      <circle cx="40" cy="40" r="40" fill="url(#av-bg)" />
      {/* tête */}
      <circle cx="40" cy="30" r="12" fill="#c4b5fd" opacity="0.85" />
      {/* épaules */}
      <ellipse cx="40" cy="62" rx="20" ry="14" fill="#c4b5fd" opacity="0.7" />
      {/* étoile jupitérienne */}
      <path
        d="M40 6l1.5 4.5L46 12l-4.5 1.5L40 18l-1.5-4.5L34 12l4.5-1.5z"
        fill="#fbbf24"
        opacity="0.9"
      />
    </svg>
  );
}

/* ================================================================== */
/*  AuthorBox — affiché en bas de chaque article blog                  */
/* ================================================================== */
export function AuthorBox() {
  return (
    <aside
      aria-label="À propos de l'auteur"
      className="mt-16 rounded-2xl border border-purple-500/20 bg-purple-500/5 px-6 py-6 sm:px-8"
    >
      <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start">
        {/* Avatar */}
        <Link href="/auteur/stephane-gamot" aria-hidden="true" tabIndex={-1}>
          <AvatarPlaceholder />
        </Link>

        {/* Contenu */}
        <div className="space-y-2 text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-widest text-purple-400/80">
            L&apos;auteur
          </p>
          <p className="text-lg font-semibold text-white">
            <Link
              href="/auteur/stephane-gamot"
              className="transition-colors hover:text-purple-300"
            >
              Stéphane Gamot
            </Link>
          </p>
          <p className="max-w-xl text-sm leading-relaxed text-slate-300/90">
            Passionné d&apos;astrologie depuis plus de 40&nbsp;ans et formé
            pendant 3&nbsp;ans auprès de Jean-Marie Michiels, je transmets une
            astrologie <strong className="text-purple-200">traditionnelle
            modernisée</strong> &mdash; fidèle aux sources, éclairée par la
            psychologie. Mon approche jupitérienne : <em>comprendre pour
            grandir, enseigner pour partager, explorer pour élever</em>.
          </p>
          <Link
            href="/auteur/stephane-gamot"
            className="mt-1 inline-block text-sm font-medium text-purple-400 transition-colors hover:text-purple-300"
          >
            En savoir plus sur mon parcours &rarr;
          </Link>
        </div>
      </div>
    </aside>
  );
}
