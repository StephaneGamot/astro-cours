import Cards from "./Cards";
import planetes from "@/data/planetes.json";

type Planet = (typeof planetes)[number];

export default function CardContainer() {
  return (
    <section
      aria-label="Planètes : cours et définitions"
      className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8"
    >
      <div className="mb-4 ">
        <h2 className="font-serif text-3xl text-white !border-none !mt-0">Les planètes</h2>
       
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {(planetes as Planet[]).map((item) => (
          <Cards key={item.slug} item={item} />
        ))}
      </div>
    </section>
  );
}
