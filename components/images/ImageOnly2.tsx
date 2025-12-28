import Image from "next/image";
import Mystical from "@/public/zodiac-constellations.webp"

type Props = {
  src: string;  
  alt: string;
  priority?: boolean;

};

export default function ImageOnly2() {
  return (
    <div>
      <Image
        src={Mystical}
        alt="les planetes du systeme solaire "
        width={1500}
        height={641}
        priority
        className="h-auto w-full"
      />
    </div>
  );
}
