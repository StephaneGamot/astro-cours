"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/AstroLogo.webp";
import { planetes } from "./ConfigNav";
import { zodiaque } from "./ConfigNav";
import { maisons } from "./ConfigNav";
import { blog } from "./ConfigNav";
import { autre } from "./ConfigNav";
import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";




export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-2.5 p-0.5">
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
                        aria-hidden={true}
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
                        aria-hidden={true}
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
                        aria-hidden={true}
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
                        aria-hidden={true}
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
              Annexes
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
                        aria-hidden={true}
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
                      className="group -mx-3 flex items-stretch gap-x-4 rounded-lg p-3 hover:bg-white/5"
                    >
                      {/* Icon column: 100% hauteur */}
                      <div className="flex w-12 flex-none items-stretch">
                        <div className="flex w-full items-center justify-center rounded-lg bg-gray-800 group-hover:bg-gray-700">
                          <item.icon
                            aria-hidden={true}
                            className="size-9 text-gray-300 group-hover:text-white"
                          />
                        </div>
                      </div>

                      {/* Text column */}
                      <div className="flex min-w-0 flex-1 flex-col justify-center">
                        <div className="text-base font-semibold text-indigo-400">
                          {item.name}
                        </div>
                        <p className="!mt-0 text-xs text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="space-y-2 py-6">
                  {zodiaque.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="group -mx-3 flex items-stretch gap-x-4 rounded-lg p-3 hover:bg-white/5"
                    >
                      {/* Icon column: 100% hauteur */}
                      <div className="flex w-12 flex-none items-stretch">
                        <div className="flex w-full items-center justify-center rounded-lg bg-gray-800 group-hover:bg-gray-700">
                          <item.icon
                            aria-hidden={true}
                            className="size-9 text-gray-300 group-hover:text-white"
                          />
                        </div>
                      </div>

                      {/* Text column */}
                      <div className="flex min-w-0 flex-1 flex-col justify-center">
                        <div className="text-base font-semibold text-indigo-400">
                          {item.name}
                        </div>
                        <p className="!mt-0 text-xs text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="space-y-2 py-6">
                  {maisons.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="group -mx-3 flex items-stretch gap-x-4 rounded-lg p-3 hover:bg-white/5"
                    >
                      {/* Icon column: 100% hauteur */}
                      <div className="flex w-12 flex-none items-stretch">
                        <div className="flex w-full items-center justify-center rounded-lg bg-gray-800 group-hover:bg-gray-700">
                          <item.icon
                            aria-hidden={true}
                            className="size-9 text-gray-300 group-hover:text-white"
                          />
                        </div>
                      </div>

                      {/* Text column */}
                      <div className="flex min-w-0 flex-1 flex-col justify-center">
                        <div className="text-base font-semibold text-indigo-400">
                          {item.name}
                        </div>
                        <p className="!mt-0 text-xs text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="space-y-2 py-6">
                  {blog.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="group -mx-3 flex items-stretch gap-x-4 rounded-lg p-3 hover:bg-white/5"
                    >
                      {/* Icon column: 100% hauteur */}
                      <div className="flex w-12 flex-none items-stretch">
                        <div className="flex w-full items-center justify-center rounded-lg bg-gray-800 group-hover:bg-gray-700">
                          <item.icon
                            aria-hidden={true}
                            className="size-9 text-gray-300 group-hover:text-white"
                          />
                        </div>
                      </div>

                      {/* Text column */}
                      <div className="flex min-w-0 flex-1 flex-col justify-center">
                        <div className="text-base font-semibold text-indigo-400">
                          {item.name}
                        </div>
                        <p className="!mt-0 text-xs text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="space-y-2 py-6">
                  {autre.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="group -mx-3 flex items-stretch gap-x-4 rounded-lg p-3 hover:bg-white/5"
                    >
                      {/* Icon column: 100% hauteur */}
                      <div className="flex w-12 flex-none items-stretch">
                        <div className="flex w-full items-center justify-center rounded-lg bg-gray-800 group-hover:bg-gray-700">
                          <item.icon
                            aria-hidden={true}
                            className="size-9 text-gray-300 group-hover:text-white"
                          />
                        </div>
                      </div>

                      {/* Text column */}
                      <div className="flex min-w-0 flex-1 flex-col justify-center">
                        <div className="text-base font-semibold text-indigo-400">
                          {item.name}
                        </div>
                        <p className="!mt-0 text-xs text-gray-400">
                          {item.description}
                        </p>
                      </div>
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
