'use client'
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import LogoDark from '@/public/logoDarkS.svg'
import LogoLight from '@/public/logoLightS.svg'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import Sidebar from '../components/Sidebar'

const HeaderLogo = () => {
  const { theme } = useTheme()
  const [logo, setLogo] = React.useState<string>('')

  React.useEffect(() => {
    if (theme == 'dark') {
      setLogo(LogoDark.src)
    } else {
      setLogo(LogoLight.src)
    }
  }, [theme])

  return <img src={logo} alt="here was a logo:(" className="h-20" />
}

const Topbar = () => {
  const { data: session } = useSession()

  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])

  const { theme, setTheme } = useTheme()

  if (!mounted)
    return (
      <header className="flex flex-row gap-4 w-full items-center bg-background drop-shadow-md text-primary-content sticky top-0 z-50">
        <Link href="/">
          <HeaderLogo />
        </Link>
      </header>
    )

  return (
    <header className="flex flex-row gap-4 w-full items-center bg-background drop-shadow-md text-primary-content sticky top-0 z-50">
      <Link href="/">
        <HeaderLogo />
      </Link>
      {session && session.user ? (
        <>
          <p>{session.user.email}</p>
          <button onClick={() => signOut()} className="items-end">
            Sign Out
          </button>
          <button
            onClick={() => console.log(session)}
            className="hidden md:block"
          >
            Console
          </button>
          <button
            onClick={() => setTheme('dark')}
            className="text-black dark:text-white hidden md:block"
          >
            dark
          </button>
          <button
            onClick={() => setTheme('light')}
            className="text-black dark:text-white hidden md:block"
          >
            light
          </button>
          <button
            onClick={() => setTheme('system')}
            className="text-black dark:text-white hidden md:block"
          >
            system
          </button>
          <p className="ml-8 hidden md:block">current theme: {theme}</p>
          <Image
            unoptimized
            src={session?.user?.avatar as string}
            alt="here was a logo:("
            width={30}
            height={30}
            className="hidden md:block"
          />
          <Sidebar />
        </>
      ) : (
        <button onClick={() => signIn()} className="items-end text-sky-700">
          Sign in
        </button>
      )}
    </header>
  )
}

export default Topbar
