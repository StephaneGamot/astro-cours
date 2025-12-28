import Cards from "./Cards";
import zodiaque from "@/data/zodiaque.json";

type Zodiac = (typeof zodiaque)[number];

export default function ZodiacCardContainer() {
  return (
    <section
      aria-label="Signes du zodiaque : définitions et symbolique"
      className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8"
    >
      <div className="mb-4">
        <h2 className="font-serif text-3xl text-white !border-none">
          Les signes du zodiaque
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {(zodiaque as Zodiac[]).map((item) => (
  <Cards key={item.slug} item={item} basePath="signes" />

        ))}
      </div>
    </section>
  );
}
