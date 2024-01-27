import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'
import SideBarLogo from '../../../public/sideBarLogo.svg'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { LogoutSvg, DrawerSvg } from './SidebarSvg'

export default function Sidebar() {
  const { data: session } = useSession()
  const sideBarLinks = [
    { href: '/', display: 'Home' },
    { href: '/user', display: 'User' },
    { href: '/', display: 'Notifications' },
    { href: '/settings', display: 'Settings' },
  ]

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <button>
          <DrawerSvg />
        </button>
      </DrawerTrigger>
      <DrawerContent className="w-80 mt-2 fixed right-0 h-full bottom-0 z-50 flex flex-col rounded-l-[10px] border bg-background">
        <div>
          <DrawerHeader className="flex flex-row items-end">
            <Image
              unoptimized
              src={session?.user?.avatar as string}
              alt="here was a logo:("
              width={30}
              height={30}
              className="rounded-full w-16 h-16 m-1"
            />
            <div className="max-w-fit relative">
              <div className="flex w-full">
                <span
                  className="ml-4 justify-end m-1 mb-1 text-xl font-bold text-white"
                  style={{ zIndex: 1 }}
                >
                  User&nbsp;
                </span>
                <p
                  className="justify-end m-1 mr-3 mb-1 text-xl font-bold text-white"
                  style={{ zIndex: 1 }}
                >
                  {session?.user?.name}
                </p>
              </div>
              <span className="bottom-1 right-0 absolute bg-amber-400 w-10 h-2.5 dark:border-gray-800" />
            </div>
          </DrawerHeader>
          <div>
            <ul className="flex flex-col gap-2">
              {sideBarLinks.map((link) => (
                <Link href={link.href} key={link.display}>
                  <DrawerClose>{link.display}</DrawerClose>
                </Link>
              ))}
            </ul>
          </div>
          <DrawerFooter>
            <button
              onClick={() => signOut()}
              className="flex items-center mt-6 ml-2"
            >
              <LogoutSvg />
              <span className="mt-auto ml-2 text-white text-lg">Log out</span>
            </button>
          </DrawerFooter>
          <div className="flex items-end h-full w-full">
            <Image
              src={SideBarLogo}
              alt="here was a logo:("
              className="h-12 ml-auto mb-1 mr-1"
            />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
