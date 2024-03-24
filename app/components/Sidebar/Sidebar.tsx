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
      <DrawerContent className="w-80 mt-2 fixed right-0 h-full bottom-0 z-50 flex flex-col rounded-l-[10px] border bg-background">
        <div className="flex flex-col h-full px-5 pb-5">
          <DrawerHeader className="flex flex-row items-end py-20">
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
                {/*<span
                  className="ml-4 justify-end m-1 mb-1 text-3xl font-bold text-white"
                  style={{ zIndex: 1 }}
                >
                  User&nbsp;
  </span>*/}
                <p
                  className="pl-3 justify-end m-1 mr-3 mb-1 text-3xl font-bold dark:text-white text-black"
                  style={{ zIndex: 1 }}
                >
                  {session?.user?.name}
                </p>
              </div>
              <span className="bottom-1 right-0 absolute bg-amber-400 w-10 h-2.5 dark:border-gray-800" />
            </div>
          </DrawerHeader>
          <div className="h-full px-5">
            <ul className="h-full flex flex-col gap-2 justify-evenly">
              {sideBarLinks.map((link) => (
                <div>
                  <Link
                    href={link.href}
                    key={link.display}
                    className="font-medium text-3xl"
                  >
                    <DrawerClose>{link.display}</DrawerClose>
                  </Link>
                  <hr className="mt-3 h-[2.5px] border-black"></hr>
                </div>
              ))}
            </ul>
          </div>
          <DrawerFooter className="py-20">
            <button onClick={() => signOut()} className="flex">
              <div className="flex dark:hidden">
                <LogoutSvg />
              </div>
              <div className="flex hidden dark:flex">
                <LogoutSvgDark />
              </div>
              <span className="mt-auto ml-2 dark:text-white text-black text-lg">
                Log out
              </span>
            </button>
          </DrawerFooter>
          <div className="flex items-end justify-self-end">
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
