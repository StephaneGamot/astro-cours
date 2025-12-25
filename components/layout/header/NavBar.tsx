"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/zzz.png";
import type { ComponentType } from "react";
import { AstroGlyphTextIcon }  from "@/components/icons/astro/AstroGlyphTextIcon"
import { HouseRomanIcon } from "@/components/icons/astro/HouseRomanIcon";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,

} from "@heroicons/react/20/solid";


type IconComp = ComponentType<{ className?: string; "aria-hidden"?: boolean }>;

type Item = {
  name: string;
  description: string;
  href: string;
  icon: IconComp;
};

/** helper : transforme un Astro glyph en composant "Heroicons-like" */
function glyph(symbol: string): IconComp {
  return function Glyph({ className, ...props }) {
    return <AstroGlyphTextIcon symbol={symbol} className={className} {...props} />;
  };
}

/** helper : HouseIcon en composant "Heroicons-like" */
function roman(r: string): IconComp {
  return function House({ className, ...props }) {
    return <HouseRomanIcon roman={r} className={className} boxed={true} {...props} />;
  };
}

const planetes = [
  { name: "Soleil",  description: "Identité, vitalité et direction intérieure", href: "/planetes/soleil",  icon: glyph("☉") },
  { name: "Lune",    description: "Émotions, besoins profonds et sécurité", href: "/planetes/lune",    icon: glyph("☾") }, // ou "☽"
  { name: "Mercure", description: "Mental, communication et apprentissage", href: "/planetes/mercure", icon: glyph("☿") },
  { name: "Vénus",   description: "Amour, valeurs et harmonie", href: "/planetes/venus",  icon: glyph("♀") },
  { name: "Mars",    description: "Action, désir et courage", href: "/planetes/mars",    icon: glyph("♂") },
  { name: "Jupiter", description: "Expansion, chance et sens", href: "/planetes/jupiter", icon: glyph("♃") },
  { name: "Saturne", description: "Structure, limites et maturité", href: "/planetes/saturne", icon: glyph("♄") },
  { name: "Uranus",  description: "Changement, liberté et intuition", href: "/planetes/uranus",  icon: glyph("♅") },
  { name: "Neptune", description: "Rêve, inspiration et idéal", href: "/planetes/neptune", icon: glyph("♆") },
  { name: "Pluton",  description: "Transformation, puissance et profondeur", href: "/planetes/pluton",  icon: glyph("♇") },
];


const zodiaque = [
  { name: "Bélier",     description: "Élan, initiative, courage", href: "/signes/belier",     icon: glyph("♈") },
  { name: "Taureau",    description: "Stabilité, sens, constance", href: "/signes/taureau",    icon: glyph("♉") },
  { name: "Gémeaux",    description: "Curiosité, échange, mobilité", href: "/signes/gemeaux",    icon: glyph("♊") },
  { name: "Cancer",     description: "Protection, émotion, mémoire", href: "/signes/cancer",     icon: glyph("♋") },
  { name: "Lion",       description: "Créativité, fierté, expression", href: "/signes/lion",       icon: glyph("♌") },
  { name: "Vierge",     description: "Analyse, méthode, amélioration", href: "/signes/vierge",     icon: glyph("♍") },
  { name: "Balance",    description: "Harmonie, relation, justice", href: "/signes/balance",    icon: glyph("♎") },
  { name: "Scorpion",   description: "Intensité, vérité, régénération", href: "/signes/scorpion",   icon: glyph("♏") },
  { name: "Sagittaire", description: "Sens, aventure, foi", href: "/signes/sagittaire", icon: glyph("♐") },
  { name: "Capricorne", description: "Ambition, endurance, responsabilité", href: "/signes/capricorne", icon: glyph("♑") },
  { name: "Verseau",    description: "Vision, liberté, collectif", href: "/signes/verseau",    icon: glyph("♒") },
  { name: "Poissons",   description: "Empathie, imaginaire, spiritualité", href: "/signes/poissons",   icon: glyph("♓") },
];


export const maisons: Item[] = [
  { name: "Maison I", description: "Identité, apparence, élan vital", href: "/maisons/1", icon: roman("I") },
  { name: "Maison II", description: "Valeurs, ressources, sécurité", href: "/maisons/2", icon: roman("II") },
  { name: "Maison III", description: "Communication, proches, apprentissages", href: "/maisons/3", icon: roman("III") },
  { name: "Maison IV", description: "Racines, foyer, intimité", href: "/maisons/4", icon: roman("IV") },
  { name: "Maison V", description: "Créativité, plaisir, amour", href: "/maisons/5", icon: roman("V") },
  { name: "Maison VI", description: "Habitudes, travail, santé", href: "/maisons/6", icon: roman("VI") },
  { name: "Maison VII", description: "Relations, partenariats", href: "/maisons/7", icon: roman("VII") },
  { name: "Maison VIII", description: "Transformations, liens, profondeur", href: "/maisons/8", icon: roman("VIII") },
  { name: "Maison IX", description: "Sens, études, horizons", href: "/maisons/9", icon: roman("IX") },
  { name: "Maison X", description: "Carrière, image, vocation", href: "/maisons/10", icon: roman("X") },
  { name: "Maison XI", description: "Projets, amis, collectif", href: "/maisons/11", icon: roman("XI") },
  { name: "Maison XII", description: "Inconscient, retrait, spiritualité", href: "/maisons/12", icon: roman("XII") },
];

export const blog: Item[] = [
  { name: "Débuter l’astrologie", description: "Les bases pour comprendre un thème astral", href: "/blog/debuter", icon: glyph("☉") },
  { name: "Signes & éléments", description: "Feu, Terre, Air, Eau ", href: "/blog/elements", icon: glyph("🜃") },
  { name: "Planètes personnelles", description: "Soleil, Lune, Mercure, Vénus, Mars", href: "/blog/planetes-personnelles", icon: glyph("❈") },
  { name: "Les 12 maisons", description: "Les domaines de vie", href: "/blog/maisons", icon: roman("X")},
  { name: "Aspects majeurs", description: "Conjonction, opposition, carré, trigone, sextile", href: "/blog/aspects", icon: glyph("△") },
  { name: "Transits", description: "Comprendre le timing", href: "/blog/transits", icon: glyph("⚹") },
  { name: "Synastrie", description: "Compatibilité entre deux thèmes.", href: "/blog/synastrie", icon: glyph("⚕") },
  { name: "Révolutions solaires", description: "Ta météo annuelle", href: "/blog/revolution-solaire", icon: glyph("℞") },
  { name: "Nœuds lunaires", description: "Axe karmique", href: "/blog/noeuds", icon: glyph("☊") },
  { name: "Lexique astro", description: "Définitions simples des termes clés", href: "/blog/lexique", icon: glyph("⚴") },
];

export const autre: Item[] = [
  { name: "Maîtrises", description: "Planète maîtresse d’un signe", href: "/outils/maitrises", icon: glyph("🜊") },
  { name: "Astéroïdes", description: "Chiron, Cérès, Junon…", href: "/outils/asteroides", icon: glyph("⚷") },
  { name: "Points fictifs", description: "Lilith, Part de Fortune… ", href: "/outils/points-fictifs", icon: glyph("⚸") },
  { name: "Révolution solaire", description: "Guide pratique : lire l’année à venir avec méthode.", href: "/outils/revolution-solaire", icon: glyph("☉") },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="#" className="-m-2.5 p-0.5">
            <span className="sr-only">Logo Astro cours</span>
            <Image alt="logo" src={Logo} className="h-16 w-auto" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-md/6 font-semibold text-white">
              Planetes
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-500"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-gray-800 outline outline-1 -outline-offset-1 outline-white/10 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {planetes.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-white/5"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-700/50 group-hover:bg-gray-700">
                      <item.icon
                        aria-hidden="true"
                        className="size-12 text-gray-400 group-hover:text-white"
                      />
                    </div>
                    <div className="flex-auto">
                      <Link
                        href={item.href}
                        className="block font-semibold !text-white"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="!mt-0 text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-md/6 font-semibold text-white">
              Zodiaque
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-500"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-gray-800 outline outline-1 -outline-offset-1 outline-white/10 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {zodiaque.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-white/5"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-700/50 group-hover:bg-gray-700">
                      <item.icon
                        aria-hidden="true"
                        className="size-12 text-gray-400 group-hover:text-white"
                      />
                    </div>
                    <div className="flex-auto">
                      <Link
                        href={item.href}
                        className="block font-semibold !text-white"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="!mt-0 text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-md/6 font-semibold text-white">
              Maisons
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-500"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-gray-800 outline outline-1 -outline-offset-1 outline-white/10 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {maisons.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-white/5"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-700/50 group-hover:bg-gray-700">
                      <item.icon
                        aria-hidden="true"
                        className="size-12 text-gray-400 group-hover:text-white"
                      />
                    </div>
                    <div className="flex-auto">
                      <Link
                        href={item.href}
                        className="block font-semibold !text-white"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="!mt-0 text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
       
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-md/6 font-semibold text-white">
              Blog
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-500"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-gray-800 outline outline-1 -outline-offset-1 outline-white/10 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {blog.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-white/5"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-700/50 group-hover:bg-gray-700">
                      <item.icon
                        aria-hidden="true"
                        className="size-12 text-gray-400 group-hover:text-white"
                      />
                    </div>
                    <div className="flex-auto">
                      <Link
                        href={item.href}
                        className="block font-semibold !text-white"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="!mt-0 text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-md/6 font-semibold text-white">
              Autres
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-500"
              />
            </PopoverButton>
            <PopoverPanel
              transition
              className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-gray-800 outline outline-1 -outline-offset-1 outline-white/10 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {autre.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-white/5"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-700/50 group-hover:bg-gray-700">
                      <item.icon
                        aria-hidden="true"
                        className="size-12 text-gray-400 group-hover:text-white"
                      />
                    </div>
                    <div className="flex-auto">
                      <Link
                        href={item.href}
                        className="block font-semibold !text-white"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="!mt-0 text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/*
          <a href="#" className="text-sm/6 font-semibold text-white">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>*/}
        </div>
      </nav>


      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-gray-900 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <Link href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Astrocours</span>
               <Image alt="logo" src={Logo} className="h-16 w-auto" />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  {planetes.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base/7 font-semibold !text-indigo-400 hover:bg-white/5"
                    >
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-800 group-hover:bg-gray-700">
                        <item.icon
                          aria-hidden="true"
                          className="size-9 text-gray-300 group-hover:text-white"
                        />
                      </div>
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="space-y-2 py-6">
                  {zodiaque.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base/7 font-semibold !text-indigo-400 hover:bg-white/5"
                    >
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-800 group-hover:bg-gray-700">
                        <item.icon
                          aria-hidden="true"
                          className="size-9 text-gray-300 group-hover:text-white"
                        />
                      </div>
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="space-y-2 py-6">
                  {maisons.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base/7 font-semibold !text-indigo-400 hover:bg-white/5"
                    >
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-800 group-hover:bg-gray-700">
                        <item.icon
                          aria-hidden="true"
                          className="size-9 text-gray-300 group-hover:text-white"
                        />
                      </div>
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="space-y-2 py-6">
                  {blog.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base/7 font-semibold text-white hover:bg-white/5"
                    >
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-800 group-hover:bg-gray-700">
                        <item.icon
                          aria-hidden="true"
                          className="size-9 text-gray-300 group-hover:text-white"
                        />
                      </div>
                      {item.name}
                    </Link>
                  ))}
                </div>

          

                <div className="space-y-2 py-6">
                  {autre.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base/7 font-semibold text-white hover:bg-white/5"
                    >
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-800 group-hover:bg-gray-700">
                        <item.icon
                          aria-hidden="true"
                          className="size-9 text-gray-300 group-hover:text-white"
                        />
                      </div>
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* 
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                  >
                    Log in
                  </a>
                </div>*/}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
