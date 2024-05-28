'use client'
import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'

import useSWR from 'swr'
import { fetcher } from '@/utils/fetcher'

import Link from 'next/link'
import Image from 'next/image'

import { StoryPreview } from '@/types/stories'

import { useTagsContext } from '@/context/TagsContext'

type swrProps = { data: StoryPreview[]; error: unknown; isLoading: boolean }

export default function Page({ className }: { className: string }) {
  const {
    data: stories,
    error,
    isLoading,
  }: swrProps = useSWR('/api/stories/latest', fetcher)

  const { tags, setTags } = useTagsContext()

  const { data: session } = useSession()
  const [login, setLogin] = useState(false)

  useEffect(() => {
    if (session) setLogin(true)
    else setLogin(false)
  }, [session])

  useEffect(() => {
    if (Array.isArray(stories)) {
      for (const story of stories) {
        setTags((prev) => {
          return [...prev, ...story.tags]
        })
      }
    }
  }, [stories])

  // TODO: Replace with real story's data
  return (
    <main className={className}>
      <div className="carousel carousel-vertical flex w-full max-h-[calc(90%)]">
        {stories &&
          stories.map((data) => (
            <div
              key={`${data.id}`}
              className="carousel-item mb-3 bg-white bg-opacity-50 rounded-md flex w-full h-[204px] justify-between"
            >
              <div className="flex flex-col">
                <div className="flex flex-row items-center h-8">
                  <Image
                    unoptimized
                    src={session?.user?.avatar as string}
                    alt="here was a logo:("
                    width={30}
                    height={30}
                    className="rounded-full w-8 h-8 border-solid border-black"
                  />
                  <p className="font-medium text-back">{data.author}</p>
                </div>
                <div className="mt-2 h-24">
                  <Link href="/stories/[id]" as={`/stories/${data.id}`}>
                    <h1 className="text-base font-bold">{data.title}</h1>
                  </Link>
                </div>

                <div className="flex flex-row m-1 gap-1">
                  {/* <p className="text-xs text-black"> {new Date(data.createdAt).toLocaleDateString()} </p> */}
                </div>
              </div>

              <div>
                {/* <div className="round-md w-full h-full bg-[#D9D9D9]" /> */}
                <Image
                  src="https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg"
                  alt="image"
                  width={204}
                  height={204}
                  className="overflow-hidden"
                  unoptimized
                />
              </div>
            </div>
          ))}
      </div>
    </main>
  )
}
