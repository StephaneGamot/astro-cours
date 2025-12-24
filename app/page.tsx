import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-muted font-sans">Astro Cours</p>

        <h1 className="mt-3 font-serif text-5xl md:text-6xl tracking-tight">
          Apprendre l’astrologie de manière claire et structurée.
        </h1>

        <p className="mt-6 max-w-2xl text-text/85 font-sans leading-relaxed">
          Des cours progressifs, des exemples concrets, et une méthode moderne pour interpréter
          un thème astral avec précision.
        </p>

        <div className="mt-8 flex gap-3">
          <button className="rounded-full bg-accent px-5 py-3 font-semibold text-bg hover:bg-accent-2">
            Commencer
          </button>
          <button className="rounded-full border border-border/15 px-5 py-3 hover:border-border/30">
            Voir le programme
          </button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {["Débutant", "Intermédiaire", "Avancé"].map((x) => (
            <div key={x} className="rounded-xl border border-border/10 bg-surface/90 p-6 shadow-soft">
              <p className="text-sm text-muted">{x}</p>
              <h3 className="mt-2 font-serif text-2xl">Cours {x}</h3>
              <p className="mt-3 text-text/80">
                Progression claire, exercices pratiques, méthode d’interprétation.
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

