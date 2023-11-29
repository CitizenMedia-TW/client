'use client'
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Logo from '../../public/logo-white.svg'
import { useTheme } from 'next-themes'
import Sidebar from '../components/Sidebar'

const Topbar = () => {
  const { data: session } = useSession()

  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])

  const { theme, setTheme } = useTheme()

  if (!mounted) return <div>loading...</div>

  if (session && session.user) {
    return (
      <header className="flex flex-row gap-4 w-full items-center bg-globalbg text-black dark:text-white sticky top-0 z-50">
        <Image src={Logo} alt="here was a logo:(" className="h-20" />
        <p>{session.user.email}</p>
        <button onClick={() => signOut()} className="items-end">
          Sign Out
        </button>
        <button onClick={() => console.log(session)}>Console</button>
        <button
          onClick={() => setTheme('dark')}
          className="text-black dark:text-white"
        >
          dark
        </button>
        <button
          onClick={() => setTheme('light')}
          className="text-black dark:text-white"
        >
          light
        </button>
        <button
          onClick={() => setTheme('system')}
          className="text-black dark:text-white"
        >
          system
        </button>
        <p className="ml-8">current theme: {theme}</p>
        <Image
          unoptimized
          src={session?.user?.avatar as string}
          alt="here was a logo:("
          width={30}
          height={30}
        />
        <Sidebar />
      </header>
    )
  }

  return (
    <header className="flex gap-2 sticky top-0">
      <Image src={Logo} alt="here was a logo:(" className="bg-white" />
      <button onClick={() => signIn()} className="items-end text-sky-700">
        Sign in
      </button>
    </header>
  )
}

export default Topbar
