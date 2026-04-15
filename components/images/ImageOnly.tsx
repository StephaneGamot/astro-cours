import Image from "next/image";
import HeroAstro from "@/public/images/astro-cours-l.webp";

export default function ImageOnly() {
  return (
    <div className="relative w-full min-h-[400px] h-[50vh] md:h-[70vh] max-h-[800px] overflow-hidden">
      <Image
        src={HeroAstro}
        alt="Illustration d'une magnifique pleine Lune"
        fill
        preload
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
  );
}