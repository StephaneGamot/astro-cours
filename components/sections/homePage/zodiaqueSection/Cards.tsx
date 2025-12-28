import Image from "next/image";
import Link from "next/link";

type CardData = {
  slug: string;
  name: string;
  headline: string;
  description: string;
  image: { src: string; alt: string };
};

type Props = {
  item: CardData;
  basePath: "planetes" | "signes" | "maisons";
};

export default function Cards({ item, basePath }: Props) {
  const titleId = `${basePath}-title-${item.slug}`;
  const descId = `${basePath}-desc-${item.slug}`;

  return (
    <article
      aria-labelledby={titleId}
      aria-describedby={descId}
      className="divide-y divide-white/10 overflow-hidden rounded-lg bg-gray-800/50 outline outline-1 -outline-offset-1 outline-white/10"
    >
      {/* Titre */}
      <header className="px-4 py-1 sm:px-6">
        <h3
          id={titleId}
          className="font-serif text-xl text-white text-center !my-2 !border-none"
        >
          <Link
            href={`/${basePath}/${item.slug}`}
            className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70"
            aria-label={`Lire le cours sur ${item.name}`}
          >
            {item.name}
          </Link>
        </h3>
      </header>

      {/* Image */}
      <div className="px-4 py-5 sm:p-6">
        <div className="relative overflow-hidden rounded-md bg-black/20">
          <Image
            src={item.image.src}
            alt={item.image.alt}
            width={250}
            height={250}
            className=""
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* Description */}
      <footer className="px-4 py-4 sm:px-6 text-center">
        <h4 className="!mt-1 font-semibold text-white/95">
          {item.headline}
        </h4>

        <p
          id={descId}
          className="mt-2 text-sm leading-relaxed text-gray-300"
        >
          {item.description}
        </p>
      </footer>
    </article>
  );
}
