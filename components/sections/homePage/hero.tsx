/* ════════════════════════════════════════════════════════════════
   HeroHomePage — Server Component (zero client JS)
   ════════════════════════════════════════════════════════════════ */

/** Inline sparkle icon — avoids shipping lucide-react to the client */
function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}

export default function HeroHomePage() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative z-10 mx-auto max-w-4xl px-6 py-16 -mt-32 text-center sm:px-12 md:px-16 md:text-left lg:px-24"
    >
      <div className="flex flex-col items-center md:items-start">
        {/* ── Badge ────────────────────────────────────── */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[.25em] text-violet-300 backdrop-blur-md">
          <SparkleIcon className="size-3.5 text-amber-300" />
          <span>L'Académie Astro Cours</span>
        </div>

        {/* ── Heading ─────────────────────────────────── */}
        <h1
          id="hero-title"
          className="mb-12 font-serif text-4xl leading-[1.1] text-white md:text-5xl lg:text-6xl"
        >
          Apprendre l'astrologie de manière{" "}
          <span className="italic text-violet-300">claire et structurée.</span>
        </h1>
      </div>

      {/* ── Body copy ─────────────────────────────────── */}
      <div className="space-y-7 text-[17px] leading-relaxed text-slate-300 md:text-lg">
        <p className="first-letter:float-left first-letter:pr-3.5 first-letter:font-serif first-letter:text-6xl first-letter:leading-[.78] first-letter:text-violet-400">
          L'astrologie est avant tout une manière de regarder le monde et de se
          regarder soi-même. Depuis toujours, les êtres humains observent le
          ciel pour y trouver des repères, des rythmes et des cycles qui font
          écho à leur propre expérience de la vie.
        </p>

        <p>
          À travers un langage symbolique —{" "}
          <strong className="font-medium text-white">
            signes, planètes et maisons
          </strong>{" "}
          — l'astrologie propose une lecture des dynamiques humaines : nos
          élans, nos doutes, nos besoins, nos relations et nos périodes de
          transformation. Elle ne prétend pas tout expliquer, ni décider à
          notre place, mais offre des clés de compréhension pour mieux saisir
          ce qui se joue en nous.
        </p>

        <p>
          Abordée avec méthode et discernement, l'astrologie devient un outil
          redoutable de connaissance de soi. Elle invite à prendre du recul, à
          mettre des mots sur des expériences complexes, et à accepter ce qui
          nous traverse, sans jamais nier la liberté de l'individu.
        </p>

        {/* ── Pull quote ────────────────────────────────── */}
        <figure className="mt-12 rounded-2xl border border-white/[.07] bg-white/[.02] p-7 shadow-xl backdrop-blur-sm sm:p-8 md:text-left">
          <blockquote>
            <p className="font-serif text-lg italic leading-relaxed text-white md:text-xl">
              "Ici, l'astrologie est présentée comme un savoir à explorer
              patiemment, dans une démarche humaine, respectueuse et structurée,
              où comprendre compte davantage que croire."
            </p>
          </blockquote>
        </figure>
      </div>
    </section>
  );
}