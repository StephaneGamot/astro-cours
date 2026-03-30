"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/public/AstroLogo.webp";
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

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-gray-950/80 backdrop-blur-md">
      <nav aria-label="Navigation principale" className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="transition hover:opacity-80">
            <span className="sr-only">Astro Cours</span>
            <Image alt="Logo Astro" src={Logo} className="h-12 w-auto" priority />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="rounded-md p-2 text-gray-400 hover:bg-white/10"
          >
            <span className="sr-only">Ouvrir le menu</span>
            <Bars3Icon className="size-7" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop nav */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-8">
          <NavPopover title="Planètes" items={planetes} />
          <NavPopover title="Zodiaque" items={zodiaque} columns={2} />
          <NavPopover title="Maisons" items={maisons} columns={2} />
          <Link href="/blog" className="text-sm font-medium text-gray-300 hover:text-white transition-colors py-2">
            Blog
          </Link>
          <NavPopover title="Annexes" items={autre} columns={2} />
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end" />
      </nav>

      {/* Mobile menu */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-950 px-6 py-6 sm:max-w-sm border-l border-white/10 transition duration-300 ease-in-out">
          <div className="flex items-center justify-between">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <Image alt="logo" src={Logo} className="h-10 w-auto" />
            </Link>
            <button
              type="button"
              className="rounded-md p-2.5 text-gray-400 hover:bg-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="size-7" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-8 flow-root">
            <div className="divide-y divide-white/10">
              <MobileDisclosure title="Planètes" items={planetes} closeMenu={() => setMobileMenuOpen(false)} />
              <MobileDisclosure title="Zodiaque" items={zodiaque} closeMenu={() => setMobileMenuOpen(false)} />
              <MobileDisclosure title="Maisons" items={maisons} closeMenu={() => setMobileMenuOpen(false)} />
              <div className="py-4">
                <Link
                  href="/blog"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-lg font-semibold text-white hover:text-indigo-400"
                >
                  Blog
                </Link>
              </div>
              <MobileDisclosure title="Annexes" items={autre} closeMenu={() => setMobileMenuOpen(false)} />
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

/** SOUS-COMPOSANT : Popover Desktop */
function NavPopover({ title, items, columns = 1 }: { title: string; items: Item[]; columns?: 1 | 2 }) {
  return (
    <Popover className="relative">
      <PopoverButton className="flex items-center gap-x-1 text-sm font-medium text-gray-300 outline-none hover:text-white transition-colors py-2">
        {title}
        <ChevronDownIcon className="size-4 opacity-50 transition-transform group-data-[open]:rotate-180" />
      </PopoverButton>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <PopoverPanel className={cn(
          "absolute left-1/2 z-10 mt-4 -translate-x-1/2 overflow-hidden rounded-2xl bg-gray-900 border border-white/10 shadow-2xl ring-1 ring-black/5",
          columns === 2 ? "w-[560px]" : "w-80"
        )}>
          <div className={cn("p-3 grid gap-2", columns === 2 ? "grid-cols-2" : "grid-cols-1")}>
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group flex items-center gap-x-4 rounded-xl p-3 transition hover:bg-white/5 active:scale-[0.98]"
              >
                <div className="flex size-10 flex-none items-center justify-center rounded-lg bg-gray-800 border border-white/5 transition group-hover:border-indigo-500/50 group-hover:bg-gray-700">
                  <item.icon className="size-6 text-gray-400 transition group-hover:text-indigo-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{item.name}</div>
                  <p className="text-xs text-gray-500 leading-tight">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </PopoverPanel>
      </Transition>
    </Popover>
  );
}

/** SOUS-COMPOSANT : Disclosure Mobile */
function MobileDisclosure({ title, items, closeMenu }: { title: string; items: Item[]; closeMenu: () => void }) {
  return (
    <Disclosure as="div" className="py-2">
      {({ open }) => (
        <>
          <DisclosureButton className="flex w-full items-center justify-between py-2 text-lg font-semibold text-white">
            {title}
            <ChevronDownIcon className={cn("size-5 transition-transform", open && "rotate-180")} />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 space-y-1 px-2">
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="flex items-center gap-x-4 rounded-lg p-3 text-sm hover:bg-white/5 active:bg-white/10"
              >
                <div className="flex size-9 flex-none items-center justify-center rounded-md bg-gray-800">
                  <item.icon className="size-5 text-indigo-400" />
                </div>
                <div>
                  <div className="font-medium text-gray-200">{item.name}</div>
                  <div className="text-xs text-gray-500">{item.description}</div>
                </div>
              </Link>
            ))}
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}