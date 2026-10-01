import Image from "next/image";
import { getTranslations } from "next-intl/server";
import Fresque from "@/public/images/fresque.webp"


export default async function Constelations() {
  const tAlt = await getTranslations("imagesAlt");

  return (
    <div>
      <Image
        src={Fresque}
        alt={tAlt("constellations")}
        width={1500}
        height={120}
        className="h-auto w-[95%] my-12 mx-auto"
      />
    </div>
  );
}
