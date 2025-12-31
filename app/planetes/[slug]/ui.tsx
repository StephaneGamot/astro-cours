import Image from "next/image";
import Link from "next/link";

export function Aura({ aura }: { aura: string }) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className={`absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-b ${aura} blur-3xl`}
      />
      <div
        className={`absolute -bottom-28 right-[-120px] h-[420px] w-[420px] rounded-full bg-gradient-to-b ${aura} blur-3xl opacity-70`}
      />
    </div>
  );
}

export function SectionTitle({
  dotClass,
  id,
  children,
}: {
  dotClass: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <h2 id={id} className="font-serif text-2xl sm:text-3xl">
      <span className={`mr-3 inline-block h-2 w-2 rounded-full ${dotClass}`} />
      {children}
    </h2>
  );
}

export function Card({
  borderClass,
  glowClass,
  children,
  className = "",
}: {
  borderClass: string;
  glowClass: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl border ${borderClass} bg-white/5 p-6 backdrop-blur ${glowClass} ${className}`}
    >
      {children}
    </div>
  );
}

export function Hero({
  src,
  alt,
  borderClass,
  glowClass,
  lineClass,
}: {
  src: string;
  alt: string;
  borderClass: string;
  glowClass: string;
  lineClass: string;
}) {
  return (
    <div
      className={`mb-12 overflow-hidden rounded-3xl border ${borderClass} bg-white/5 ${glowClass}`}
    >
      <div className="relative">
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={900}
          priority
          className="h-auto w-full object-cover"
          sizes="(max-width: 768px) 100vw, 896px"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
        <div
          className={`pointer-events-none absolute bottom-0 left-0 h-1 w-full ${lineClass}`}
        />
      </div>
    </div>
  );
}

export function NavCard({
  side,
  href,
  label,
  name,
  subtitle,
  imageSrc,
  imageAlt,
  borderClass,
  ringClass,
  glowClass,
}: {
  side: "prev" | "next";
  href: string;
  label: string;
  name: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  borderClass: string;
  ringClass: string;
  glowClass: string;
}) {
  const isNext = side === "next";
  return (
    <Link
      href={href}
      className={`group rounded-3xl border ${borderClass} bg-white/5 p-5 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 ${ringClass} ${glowClass}`}
      aria-label={`${label} : ${name}`}
    >
      <div className="flex items-center gap-4">
        {!isNext && (
          <div className="min-w-0 flex-1">
            <p className="text-xs uppercase tracking-wide text-muted">{label}</p>
            <p className="mt-1 font-serif text-2xl group-hover:underline">
              {name}
            </p>
            {subtitle ? (
              <p className="mt-1 text-sm text-text/70">{subtitle}</p>
            ) : null}
          </div>
        )}

        {imageSrc ? (
          <div
            className={`relative h-24 w-24 overflow-hidden rounded-2xl border ${borderClass} bg-black/20`}
          >
            <Image
              src={imageSrc}
              alt={imageAlt ?? `Image : ${name}`}
              fill
              className="object-cover transition duration-300 group-hover:scale-[1.04]"
              sizes="96px"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        ) : (
          <div className={`h-24 w-24 rounded-2xl border ${borderClass} bg-white/5`} />
        )}

        {isNext && (
          <div className="min-w-0 flex-1 text-right">
            <p className="text-xs uppercase tracking-wide text-muted">{label}</p>
            <p className="mt-1 font-serif text-2xl group-hover:underline">
              {name}
            </p>
            {subtitle ? (
              <p className="mt-1 text-sm text-text/70">{subtitle}</p>
            ) : null}
          </div>
        )}
      </div>
    </Link>
  );
}
