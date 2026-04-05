"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/public/astro-cours-logo.webp";
import { planetes, zodiaque, maisons, autre, type Item } from "./ConfigNav";
import { useState, Fragment } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Utility pour fusionner les classes Tailwind proprement */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Map des thèmes couleurs pour éviter la purge de Tailwind
const THEMES = {
  sky: { text: "text-sky-400", hoverBg: "group-hover:bg-sky-500/10", hoverBorder: "group-hover:border-sky-500/30", hoverText: "group-hover:text-sky-300" },
  violet: { text: "text-violet-400", hoverBg: "group-hover:bg-violet-500/10", hoverBorder: "group-hover:border-violet-500/30", hoverText: "group-hover:text-violet-300" },
  emerald: { text: "text-emerald-400", hoverBg: "group-hover:bg-emerald-500/10", hoverBorder: "group-hover:border-emerald-500/30", hoverText: "group-hover:text-emerald-300" },
  amber: { text: "text-amber-400", hoverBg: "group-hover:bg-amber-500/10", hoverBorder: "group-hover:border-amber-500/30", hoverText: "group-hover:text-amber-300" },
};

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#09090b]/80 backdrop-blur-xl shadow-lg">
      <nav aria-label="Navigation principale" className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link 
            href="/" 
            className="transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-lg"
          >
            <span className="sr-only">Astro Cours - Accueil</span>
            <Image alt="Logo Astro Cours" src={Logo} className="h-10 md:h-12 w-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" priority />
          </Link>
        </div>

        {/* Bouton Menu Mobile */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="rounded-xl p-2 text-slate-300 hover:bg-white/10 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
          >
            <span className="sr-only">Ouvrir le menu principal</span>
            <Bars3Icon className="size-7" aria-hidden={true} />
          </button>
        </div>

        {/* Navigation Desktop */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-8">
          <NavPopover title="Planètes" items={planetes} theme="sky" />
          <NavPopover title="Zodiaque" items={zodiaque} columns={2} theme="violet" />
          <NavPopover title="Maisons" items={maisons} columns={2} theme="emerald" />
          <NavPopover title="Annexes" items={autre} columns={2} theme="amber" />
          <Link 
            href="/blog" 
            className="flex items-center text-[15px] font-medium text-slate-300 hover:text-white transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-md px-2"
          >
            Blog
          </Link>
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end" />
      </nav>

      {/* Menu Mobile (Slide-over) */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50 bg-[#09090b]/80 backdrop-blur-md transition-opacity" />
        
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#0c0c0e] px-6 py-6 sm:max-w-sm border-l border-white/10 shadow-2xl transition duration-500 ease-in-out data-[closed]:translate-x-full">
          
          {/* Header Mobile */}
          <div className="flex items-center justify-between border-b border-white/5 pb-6 mb-6">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-lg">
              <span className="sr-only">Retour à l'accueil</span>
              <Image alt="Astro Cours" src={Logo} className="h-10 w-auto" />
            </Link>
            <button
              type="button"
              className="rounded-xl p-2.5 text-slate-400 hover:bg-white/10 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Fermer le menu</span>
              <XMarkIcon className="size-7" aria-hidden={true} />
            </button>
          </div>

          {/* Corps du menu Mobile */}
          <div className="flow-root">
            <div className="divide-y divide-white/5">
              <MobileDisclosure title="Planètes" items={planetes} theme="sky" closeMenu={() => setMobileMenuOpen(false)} />
              <MobileDisclosure title="Zodiaque" items={zodiaque} theme="violet" closeMenu={() => setMobileMenuOpen(false)} />
              <MobileDisclosure title="Maisons" items={maisons} theme="emerald" closeMenu={() => setMobileMenuOpen(false)} />
              <MobileDisclosure title="Annexes" items={autre} theme="amber" closeMenu={() => setMobileMenuOpen(false)} />
              <div className="py-6">
                <Link
                  href="/blog"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-xl px-3 py-2 text-lg font-semibold text-slate-200 hover:bg-white/5 hover:text-white transition-colors"
                >
                  Le Blog
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

/** 
 * SOUS-COMPOSANT : Popover Desktop (Le menu déroulant)
 */
function NavPopover({ title, items, columns = 1, theme }: { title: string; items: Item[]; columns?: 1 | 2; theme: keyof typeof THEMES }) {
  const t = THEMES[theme];

  return (
    <Popover className="relative">
      <PopoverButton className="group flex items-center gap-x-1.5 text-[15px] font-medium text-slate-300 outline-none hover:text-white transition-colors py-2 px-2 rounded-md focus-visible:ring-2 focus-visible:ring-violet-500">
        {title}
        <ChevronDownIcon className="size-4 text-slate-500 transition-transform duration-300 group-data-[open]:rotate-180 group-data-[open]:text-white" aria-hidden={true} />
      </PopoverButton>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-2"
      >
        <PopoverPanel className={cn(
          "absolute left-1/2 z-10 mt-5 -translate-x-1/2 overflow-hidden rounded-[2rem] bg-[#0c0c0e]/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-white/5",
          columns === 2 ? "w-[600px]" : "w-80"
        )}>
          <div className={cn("p-4 grid gap-2", columns === 2 ? "grid-cols-2" : "grid-cols-1")}>
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "group flex items-center gap-x-4 rounded-2xl p-3 transition-all duration-300 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500",
                  t.hoverBorder
                )}
              >
                {/* Icône Box */}
                <div className={cn(
                  "flex size-12 flex-none items-center justify-center rounded-xl bg-white/[0.03] border border-white/5 transition-all duration-300 shadow-inner",
                  t.hoverBg, t.hoverBorder
                )}>
                  <item.icon className={cn("size-6 text-slate-400 transition-colors duration-300", t.hoverText)} aria-hidden={true} />
                </div>
                
                {/* Textes */}
                <div>
                  <div className={cn("text-sm font-bold text-slate-200 transition-colors duration-300", t.hoverText)}>
                    {item.name}
                  </div>
                  <p className="text-[13px] text-slate-500 font-light mt-0.5 leading-snug">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </PopoverPanel>
      </Transition>
    </Popover>
  );
}

/** 
 * SOUS-COMPOSANT : Disclosure Mobile (Accordéon)
 */
function MobileDisclosure({ title, items, theme, closeMenu }: { title: string; items: Item[]; theme: keyof typeof THEMES; closeMenu: () => void }) {
  const t = THEMES[theme];

  return (
    <Disclosure as="div" className="py-2">
      {({ open }) => (
        <>
          <DisclosureButton className="flex w-full items-center justify-between rounded-xl px-3 py-4 text-lg font-semibold text-slate-200 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 transition-colors">
            {title}
            <ChevronDownIcon className={cn("size-5 text-slate-500 transition-transform duration-300", open && "rotate-180 text-white")} aria-hidden={true} />
          </DisclosureButton>
          
          <DisclosurePanel className="mt-2 space-y-1 px-2 pb-4">
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className={cn(
                  "group flex items-center gap-x-4 rounded-xl p-3 text-sm transition-all duration-300 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500",
                )}
              >
                <div className={cn(
                  "flex size-10 flex-none items-center justify-center rounded-lg bg-white/[0.03] border border-white/5 transition-colors",
                  t.hoverBg, t.hoverBorder
                )}>
                  <item.icon className={cn("size-5 text-slate-400 transition-colors", t.text)} aria-hidden={true} />
                </div>
                <div>
                  <div className="font-semibold text-slate-200 group-hover:text-white transition-colors">{item.name}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{item.description}</div>
                </div>
              </Link>
            ))}
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}