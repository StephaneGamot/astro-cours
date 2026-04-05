import { Sparkles } from "lucide-react";

export default function HeroHomePage() {
  return (
    <section 
      aria-labelledby="hero-title"
      className="relative z-10 mx-auto max-w-4xl px-6 sm:px-12 md:px-16 lg:px-24 py-16 -mt-32 text-center md:text-left"
    >
      <div className="flex flex-col items-center md:items-start">
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.3em] text-violet-300 backdrop-blur-md mb-8">
          <Sparkles size={14} className="animate-pulse text-amber-300" aria-hidden="true" />
          <span>L'Académie Astro Cours</span>
        </div>

        <h1 id="hero-title" className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-12">
          Apprendre l’astrologie de manière <span className="text-violet-300 italic font-light">claire et structurée.</span>
        </h1>
      </div>

      <div className="space-y-8 text-[17px] md:text-lg leading-relaxed text-slate-300 font-light">
        <p className="first-letter:float-left first-letter:text-6xl first-letter:pr-4 first-letter:font-serif first-letter:text-violet-400 first-letter:leading-[0.8]">
          L’astrologie est avant tout une manière de regarder le monde et de se
          regarder soi-même. Depuis toujours, les êtres humains observent le
          ciel pour y trouver des repères, des rythmes et des cycles qui font écho
          à leur propre expérience de la vie.
        </p>

        <p>
          À travers un langage symbolique — <strong className="font-medium text-white">signes, planètes et maisons</strong> —
          l’astrologie propose une lecture des dynamiques humaines : nos
          élans, nos doutes, nos besoins, nos relations et nos périodes de
          transformation. Elle ne prétend pas tout expliquer, ni décider à notre
          place, mais offre des clés de compréhension pour mieux saisir ce qui
          se joue en nous.
        </p>

        <p>
          Abordée avec méthode et discernement, l’astrologie devient un outil redoutable de
          connaissance de soi. Elle invite à prendre du recul, à
          mettre des mots sur des expériences complexes, et à accepter
          ce qui nous traverse, sans jamais nier la liberté de l'individu.
        </p>

        <div className="mt-12 p-8 rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-sm text-center md:text-left shadow-2xl">
          <p className="text-lg md:text-xl text-white font-serif italic">
            "Ici, l’astrologie est présentée comme un savoir à explorer patiemment,
            dans une démarche humaine, respectueuse et structurée, où comprendre
            compte davantage que croire."
          </p>
        </div>
      </div>
    </section>
  );
}