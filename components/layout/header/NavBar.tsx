'use client'

import { useState } from 'react'
import { Dialog, DialogPanel, Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const planetes = [
  { name: 'Soleil', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Lune', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Mercure', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Venus', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Mars', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
    { name: 'Jupiter', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Saturne', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Uranus', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Neptune', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Pluton', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]

const zodiaque = [
  { name: 'Bélier', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Taureau', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Gémeaux', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Cancer', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Lion', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
    { name: 'Vierge', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Balance', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Scorpion', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Sagittaire', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Capricorne', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
    { name: 'Verseau', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Poisson', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
]

const maisons = [
  { name: 'Maison I', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Maison II', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Maison III', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Maison IV', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Maison V', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Maison VI', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
    { name: 'Maison VII', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Maison VIII', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Maison IX', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Maison X', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Maison XI', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Maison XII', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-gray-900">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              className="h-8 w-auto"
            />
          </a>
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
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-white">
             Planetes
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-500" />
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
                      <item.icon aria-hidden="true" className="size-6 text-gray-400 group-hover:text-white" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-white">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            
            </PopoverPanel>
          </Popover>

          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-white">
            Zodiaque
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-500" />
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
                      <item.icon aria-hidden="true" className="size-6 text-gray-400 group-hover:text-white" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-white">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
           
            </PopoverPanel>
          </Popover>

             <a href="#" className="text-sm/6 font-semibold text-white">
            Aspects
          </a>
           <a href="#" className="text-sm/6 font-semibold text-white">
            Transits
          </a>
            <a href="#" className="text-sm/6 font-semibold text-white">
            Blog
          </a>
              <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-white">
           Autres
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-500" />
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
                      <item.icon aria-hidden="true" className="size-6 text-gray-400 group-hover:text-white" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-white">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
           
            </PopoverPanel>
          </Popover>
        </PopoverGroup>
        {/*
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6 font-semibold text-white">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>*/}
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-gray-900 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                  className="h-8 w-auto"
                />
              </a>
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
                    <a
                      key={item.name}
                      href={item.href}
                      className="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base/7 font-semibold text-white hover:bg-white/5"
                    >
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-800 group-hover:bg-gray-700">
                        <item.icon aria-hidden="true" className="size-6 text-gray-300 group-hover:text-white" />
                      </div>
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="space-y-2 py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                  >
                    Marketplace
                  </a>

                  {zodiaque.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                    >
                      {item.name}
                    </a>
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
  )
}
