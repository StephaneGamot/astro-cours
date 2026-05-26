import Image from "next/image";
import HeroAstro from "@/public/images/astro-cours-l.webp";

/* ────────────────────────────────────────────────────────────────
   Pré-calcul du preload manuel pour le LCP.
   ----------------------------------------------------------------
   Pourquoi pas `priority` ?
   La prop `priority` de next/image ajoute bien un <link rel="preload">
   au <head>, MAIS Next.js 16 ne pose PAS `fetchpriority="high"` sur
   ce <link> (alors qu'il le pose sur le <img>). Lighthouse signale
   donc « fetchpriority=high should be applied to the image preload
   request ».

   On reproduit ici exactement le preload qu'aurait généré Next.js,
   en y ajoutant `fetchPriority="high"`. React 19 hisse automatiquement
   les balises <link> en <head>, et on retire `priority` côté <Image>
   pour éviter un double preload.

   Les tailles correspondent à `images.deviceSizes` de next.config.mjs.
   ──────────────────────────────────────────────────────────────── */

const LCP_SRC_ENC = encodeURIComponent(HeroAstro.src);
const LCP_DEVICE_SIZES = [640, 750, 828, 1080, 1200, 1920] as const;
const LCP_IMAGESRCSET = LCP_DEVICE_SIZES
  .map((w) => `/_next/image?url=${LCP_SRC_ENC}&w=${w}&q=70 ${w}w`)
  .join(", ");

export default function ImageOnly() {
  return (
    <>
      {/* Preload manuel hissé en <head> par React 19 — avec fetchPriority. */}
      <link
        rel="preload"
        as="image"
        imageSrcSet={LCP_IMAGESRCSET}
        imageSizes="100vw"
        fetchPriority="high"
      />
      <div className="relative w-full h-[50vh] min-h-[400px] md:h-[70vh] max-h-[800px] overflow-hidden">
        <Image
          src={HeroAstro}
          alt="Illustration d'une magnifique pleine Lune"
          fill
          // `priority` retiré pour éviter un second <link rel="preload"> sans
          // fetchPriority. On reproduit ses deux autres effets explicitement :
          fetchPriority="high"
          loading="eager"
          quality={70}
          placeholder="blur"
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#09090b]/40 via-transparent to-transparent"
        />
      </div>
    </>
  );
}