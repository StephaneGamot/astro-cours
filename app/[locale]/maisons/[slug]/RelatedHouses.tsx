import { Link } from "@/i18n/navigation";
import { type House, toRoman } from "./helpers";

/** Traducteur simplifié (namespace "house"). */
type T = (key: string, values?: Record<string, string | number>) => string;

/* ------------------------------------------------------------------ */
/*  Relations astrologiques                                            */
/* ------------------------------------------------------------------ */

/**
 * Maison opposée sur l'axe (I↔VII, II↔VIII, III↔IX, IV↔X, V↔XI, VI↔XII).
 */
function getOppositeHouse(house: House, houses: House[]): House | undefined {
  const opposite = ((house.numero + 5) % 12) + 1;
  return houses.find((h) => h.numero === opposite);
}

/**
 * Triangle de Bailey (regroupement élémentaire) :
 *   Feu  → I, V, IX
 *   Terre → II, VI, X
 *   Air   → III, VII, XI
 *   Eau   → IV, VIII, XII
 *
 * Renvoie les 2 autres maisons du même triangle.
 */
function getTriangleCompanions(house: House, houses: House[]): House[] {
  const remainder = ((house.numero - 1) % 4 + 4) % 4;
  return houses.filter(
    (h) => h.numero !== house.numero && ((h.numero - 1) % 4 + 4) % 4 === remainder,
  );
}

/* ------------------------------------------------------------------ */
/*  Composant                                                          */
/* ------------------------------------------------------------------ */

/**
 * Widget « Maisons connexes » — placé en bas de chaque page maison.
 * Maillage interne sémantique entre les 12 pages maisons.
 */
export function RelatedHouses({
  house,
  houses,
  border,
  text,
  dot,
  tr,
}: {
  house: House;
  houses: House[];
  border: string;
  text: string;
  dot: string;
  tr: T;
}) {
  const opposite = getOppositeHouse(house, houses);
  const triangle = getTriangleCompanions(house, houses);

  if (!opposite && triangle.length === 0) return null;

  const elementLabel = (() => {
    const r = ((house.numero - 1) % 4 + 4) % 4;
    const key = r === 0 ? "feu" : r === 1 ? "terre" : r === 2 ? "air" : "eau";
    return tr(`element.${key}`);
  })();

  const titreCourt = house.titreCourt ?? tr("houseShort", { roman: toRoman(house.numero) });

  return (
    <section
      aria-labelledby="related-houses-heading"
      className="mt-20 border-t border-white/10 pt-12"
    >
      <header className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${text} opacity-80`}>
            {tr("relExplore")}
          </p>
          <h2
            id="related-houses-heading"
            className="mt-2 font-serif text-2xl tracking-tight text-text sm:text-3xl"
          >
            {tr("relTitle", { titreCourt })}
          </h2>
        </div>
        <Link
          href="/#maisons"
          className="self-start rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-text/70 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-text sm:self-end"
        >
          {tr("rel12")}
        </Link>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {/* ── Maison opposée ─────────────────────────── */}
        {opposite && (
          <HouseLink
            house={opposite}
            label={tr("relOpposite")}
            subtitle={tr("relAxisLabel", { axe: house.axe ?? "" })}
            border={border}
            dot={dot}
            tr={tr}
            highlight
          />
        )}

        {/* ── Compagnons du triangle élémentaire ─────── */}
        {triangle.map((h) => (
          <HouseLink
            key={h.slug}
            house={h}
            label={tr("relTriangleLabel", { element: elementLabel })}
            subtitle={h.niveauLecture?.arena}
            border={border}
            dot={dot}
            tr={tr}
          />
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Sous-composant — carte unitaire                                    */
/* ------------------------------------------------------------------ */

function HouseLink({
  house,
  label,
  subtitle,
  border,
  dot,
  tr,
  highlight = false,
}: {
  house: House;
  label: string;
  subtitle?: string;
  border: string;
  dot: string;
  tr: T;
  highlight?: boolean;
}) {
  const title = house.titreCourt ?? tr("houseShort", { roman: toRoman(house.numero) });
  return (
    <Link
      href={`/maisons/${house.slug}`}
      className={[
        "group block rounded-2xl border bg-white/[0.02] p-5 transition",
        "hover:bg-white/[0.06]",
        highlight ? `${border} hover:border-white/30` : "border-white/10 hover:border-white/20",
      ].join(" ")}
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <span
          aria-hidden="true"
          className={`h-2 w-2 shrink-0 rounded-full ${dot}`}
        />
        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-text/60">
          {label}
        </span>
      </div>

      <p className="font-serif text-xl leading-tight text-text transition-colors group-hover:text-white">
        {title}
      </p>
      <p className="mt-1 text-sm text-text/70">{house.nom}</p>

      {subtitle && (
        <p className="mt-3 text-xs leading-relaxed text-text/55 line-clamp-2">
          {subtitle}
        </p>
      )}
    </Link>
  );
}
