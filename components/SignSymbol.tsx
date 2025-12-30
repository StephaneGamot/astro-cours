"use client";

import Image from "next/image";
import { useState } from "react";

const GLYPHS: Record<string, string> = {
  belier: "♈",
  taureau: "♉",
  gemeaux: "♊",
  cancer: "♋",
  lion: "♌",
  vierge: "♍",
  balance: "♎",
  scorpion: "♏",
  sagittaire: "♐",
  capricorne: "♑",
  verseau: "♒",
  poissons: "♓",
};

export function SignSymbol({
  slug,
  name,
  size = 56,
}: {
  slug: string;
  name: string;
  size?: number;
}) {
  const [imgOk, setImgOk] = useState(true);
  const glyph = GLYPHS[slug] ?? "✦";

  return (
    <div
      className="flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/20"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {imgOk ? (
        <Image
          src={`/images/signes/${slug}/symbol.webp`}
          alt={`Symbole du signe ${name}`}
          width={size}
          height={size}
          className="h-[70%] w-[70%] object-contain opacity-90"
          onError={() => setImgOk(false)}
        />
      ) : (
        <span
          className="font-serif text-3xl leading-none text-text/90"
          title={`Symbole ${name}`}
        >
          {glyph}
        </span>
      )}
    </div>
  );
}
