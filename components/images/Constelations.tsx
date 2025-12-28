import Image from "next/image";
import Fresque from "@/public/images/fresque.webp"

type Props = {
  src: string;  
  alt: string;
  priority?: boolean;

};

export default function Constelations() {
  return (
    <div>
      <Image
        src={Fresque}
        alt="Les 12 constelations du zodiaque "
        width={1500}
        height={120}
        priority
        className="h-auto w-[95%] my-6 mx-auto"
      />
    </div>
  );
}
