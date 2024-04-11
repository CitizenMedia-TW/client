'use client'
import React from 'react'
import Image from 'next/image'
import Library from './Library'
import Stories from './Stories'
import Userbar from './Userbar'
import Link from 'next/link'

import { useSession } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()

  const [library, setLibrary] = React.useState('btn') // Default to library
  const [stories, setStories] = React.useState('btn btn-outline')

  function toggle_lib() {
    setLibrary('btn')
    setStories('btn btn-outline')
  }
  function toggle_stories() {
    setLibrary('btn btn-outline')
    setStories('btn')
  }

  return (
    <main className="flex min-h-screen md:justify-between justify-center md:p-16 p-4 md:space-x-24 flex-col md:flex-row">
      <div className="w-full md:w-8/12">
        <div className="w-full">
          <section className="flex flex-row items-center">
            {session && (
              <Image
                unoptimized
                src={session?.user.avatar as string}
                alt="image"
                width="90"
                height="90"
                className="rounded-full m-3.5"
              />
            )}
            <p className="text-4xl font-bold flex m-3.5 text-primary">
              {session?.user?.name}
            </p>
          </section>
          <section className="flex flex-row gap-2 justify-end">
            <button
              className={
                library == 'btn'
                  ? 'font-bold text-slate-800 text-2xl -translate-y-1 hover:-translate-y-2'
                  : 'text-slate-500 hover:-translate-y-2'
              }
              onClick={() => toggle_lib()}
            >
              Library
            </button>
            <button
              className={
                stories == 'btn'
                  ? 'font-bold text-slate-800 text-2xl -translate-y-1 hover:-translate-y-2'
                  : 'text-slate-500 hover:-translate-y-2'
              }
              onClick={() => toggle_stories()}
            >
              Stories
            </button>
          </section>
        </div>
        <div>
          {library === 'btn' ? (
            <Library className="" />
          ) : (
            <Stories className="max-h-80 overflow-auto" />
          )}
          <Link href="/user/new-story" className="btn btn-circle">
            +
          </Link>
        </div>
      </div>
      <div className="w-full md:w-4/12">
        <Userbar />
      </div>
    </main>
  )
}
