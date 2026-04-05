import Image from "next/image";
import HeroAstro from "@/public/images/astro-cours-l.webp"


export default function ImageOnly() {
  return (
    <div className="relative w-full h-[50vh] min-h-[400px] md:h-[70vh] max-h-[800px] overflow-hidden">
      <Image
        src={HeroAstro}
        alt="Illustration d'une magnifique pleine Lune"
        fill
        priority
        fetchPriority="high" 
        quality={85}
        className="object-cover object-center"
        sizes="100vw"
      />
      <div 
        aria-hidden={true}
        className="absolute inset-0 bg-gradient-to-b from-[#09090b]/40 via-transparent to-transparent" 
      />
    </div>
  );
}
