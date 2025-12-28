import Cards from "./Cards";
import maisons from "@/data/maisons.json";

type House = (typeof maisons)[number];

export default function MaisonsCardContainer() {
  return (
    <section
      aria-label="Maisons astrologiques : cours et définitions"
      className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8"
    >
      <div className="mb-4">
        <h2 className="font-serif text-3xl text-white !border-none !mt-0">
          Les maisons
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {(maisons as House[]).map((item) => (
         <Cards key={item.slug} item={item} basePath="maisons" />

        ))}
      </div>
    </section>
  );
}
