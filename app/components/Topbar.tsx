'use client'
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import Sidebar from './Sidebar/Sidebar'

import { Sun, Moon, Laptop } from 'lucide-react'

const Topbar = () => {
  const { data: session } = useSession()

  const { theme, setTheme } = useTheme()

  const themeElement: Record<string, React.JSX.Element> = {
    dark: <Moon />,
    light: <Sun />,
    system: <Laptop />,
  }

  const switchTheme = (e: React.MouseEvent) => {
    e.preventDefault()

    switch (theme) {
      case 'dark':
        setTheme('light')
        break
      case 'light':
        setTheme('system')
        break
      case 'system':
        setTheme('dark')
        break
      default:
        break
    }
  }

  return (
    <header className="flex justify-between items-center gap-4 p-4 bg-background drop-shadow-md text-primary-content sticky top-0 z-50">
      <Link href="/" className="relative w-48 xs:w-64 md:w-96 h-20">
        <Image
          src={`${theme === 'dark' ? 'logoDarkS.svg' : 'logoLightS.svg'}`}
          fill={true}
          alt="here was a logo:("
          className="object-contain"
        />
      </Link>

      <nav className="flex justify-around items-center gap-4">
        <section
          className="relative p-2 flex gap-2 border-2 rounded-2xl cursor-pointer bg-background text-foreground"
          onClick={switchTheme}
        >
          {themeElement[theme ?? 'system']}
          {/* <Moon />
          <Sun />
          <div
            className={`${theme === 'dark' ? 'left-2' : 'right-2'} absolute size-6 rounded-full top-1/2 -translate-y-1/2 bg-primary`}
          /> */}
        </section>

        {session && session.user ? (
          <figure className="hidden md:flex gap-2">
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
