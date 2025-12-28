import Image from "next/image";
import HeroAstro from "@/public/heroAstro.webp"

type Props = {
  src: string;  
  alt: string;
  priority?: boolean;

};

export default function ImageOnly() {
  return (
    <div>
      <Image
        src={HeroAstro}
        alt="Trés belle image combinant du celtique à l'astrologie "
        width={1500}
        height={600}
        priority
        className="h-auto w-full"
      />
    </div>
  );
}
