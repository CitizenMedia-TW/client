import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { LogoutSvg, DrawerSvg, LogoutSvgDark } from './SidebarSvg'

export default function Sidebar() {
  const { data: session } = useSession()
  const sideBarLinks = [
    { href: '/', display: 'Home' },
    { href: '/user', display: 'User' },
    { href: '/notifications', display: 'Notifications' },
    { href: '/settings', display: 'Settings' },
  ]

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <button>
          <DrawerSvg />
        </button>
      </DrawerTrigger>
      <DrawerContent className="w-80 mt-2 px-5 pb-5 fixed right-0 h-dvh bottom-0 z-50 flex flex-col rounded-l-[10px] border bg-background">
        <DrawerHeader className="grid grid-cols-4 gap-x-8 items-end py-20">
          <div className="relative size-16 col-span-1">
            <Image
              unoptimized
              src={session?.user?.avatar as string}
              alt="here was a logo:("
              fill
              className="rounded-full"
            />
          </div>
          <section className="relative col-span-3 max-w-fit">
            <p className="text-3xl font-bold text-foreground line-clamp-2">
              {session?.user?.name}
            </p>
            <span className="absolute -z-10 bottom-1 right-0 bg-amber-400 w-10 h-2.5 dark:border-gray-800" />
          </section>
        </DrawerHeader>

        <ul className="px-5 flex flex-col divide-y-2 divide-foreground justify-evenly">
          {sideBarLinks.map((link, idx) => (
            <li key={idx} className="flex items-center">
              <Link
                href={link.href}
                key={link.display}
                className="w-full p-2 font-medium text-3xl hover:text-background hover:bg-foreground transition-all"
              >
                <DrawerClose>{link.display}</DrawerClose>
              </Link>
            </li>
          ))}
        </ul>

        <DrawerFooter className="py-20">
          <button
            onClick={() => signOut()}
            className="flex gap-x-2 hover:opacity-65 transition-all"
          >
            <div className="block dark:hidden">
              <LogoutSvg />
            </div>
            <div className="hidden dark:block">
              <LogoutSvgDark />
            </div>
            <span className="self-end text-foreground text-lg">Log out</span>
          </button>
        </DrawerFooter>
        <div className="flex items-end justify-self-end">
          <div className="ml-auto relative h-12 w-1/2">
            <Image src={'/sideBarLogo.svg'} alt="here was a logo:(" fill />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
