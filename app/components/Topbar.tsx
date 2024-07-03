'use client'
import React, { useEffect, useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import Sidebar from './Sidebar/Sidebar'

import { Sun, Moon } from 'lucide-react'

const Topbar = () => {
  const { data: session } = useSession()

  const { theme, setTheme } = useTheme()

  const switchTheme = (e: React.MouseEvent) => {
    e.preventDefault()

    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <header className="grid grid-cols-12 items-center gap-4 py-4 bg-background drop-shadow-md text-primary-content sticky top-0 z-50">
      <Link href="/" className="col-span-3 relative w-96 h-20">
        <Image
          src={`${theme === 'dark' ? 'logoDarkS.svg' : 'logoLightS.svg'}`}
          fill={true}
          alt="here was a logo:("
          className="object-contain"
        />
      </Link>

      <nav className="col-start-10 col-span-3 flex justify-around items-center gap-4">
        <section
          className="relative p-2 flex gap-2 border-2 rounded-2xl cursor-pointer"
          onClick={switchTheme}
        >
          <Moon />
          <Sun />
          <div
            className={`${theme === 'dark' ? 'left-2' : 'right-2'} absolute size-6 rounded-full top-1/2 -translate-y-1/2 bg-primary`}
          />
        </section>

        {session && session.user ? (
          <figure className="flex gap-2">
            <Image
              unoptimized
              src={session?.user?.avatar as string}
              alt="here was a logo:("
              width={30}
              height={30}
              className="hidden md:block"
            />
            <button onClick={() => signOut()} className="font-bold">
              Sign Out
            </button>
          </figure>
        ) : (
          <button onClick={() => signIn()} className="font-bold">
            Sign in
          </button>
        )}

        <Sidebar />
      </nav>
    </header>
  )
}

export default Topbar
