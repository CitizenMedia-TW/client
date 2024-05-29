'use client'
import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'

import useSWR from 'swr'
import { fetcher } from '@/utils/fetcher'

import Link from 'next/link'
import Image from 'next/image'

import { StoryPreview } from '@/types/stories'

import { useTagsContext } from '@/context/TagsContext'
import { useChosenTagsContext } from '@/context/ChosenTagsContext'

type swrProps = { data: StoryPreview[]; error: unknown; isLoading: boolean }

// const stories = [
//   {
//     id: '48f60ce3-1bb7-4f83-9614-dc8ee5647403',
//     author: 'dev',
//     title: 'First Story',
//     subTitle: 'First story from dev',
//     createdAt: 1716875096,
//     tags: ['tag-1', 'tag-2', 'tag-3'],
//   },
//   {
//     id: '48f60ce3-1bb7-4f83-9614-dc8ee5647403',
//     author: 'dev 2',
//     title: 'Second Story',
//     subTitle: 'Second story from dev 2',
//     createdAt: 1716875096,
//     tags: ['tag-2', 'tag-4', 'tag-5'],
//   },
// ]

export default function Page({ className }: { className: string }) {
  const {
    data: stories,
    error,
    isLoading,
  }: swrProps = useSWR('/api/stories/latest', fetcher)

  const { setTags } = useTagsContext()
  const { chosenTags } = useChosenTagsContext()

  const { data: session } = useSession()
  const [login, setLogin] = useState(false)
  const [selectedStories, setSelectedStories] = useState<StoryPreview[]>([])

  useEffect(() => {
    if (session) setLogin(true)
    else setLogin(false)
  }, [session])

  useEffect(() => {
    setSelectedStories(() => {
      if (!stories) {
        return []
      }

      if (chosenTags.length === 0) {
        return stories
      }

      const newSelectedStories = []
      for (const story of stories) {
        const { tags } = story

        const selectedByTags = tags.some((tag) => chosenTags.includes(tag))
        if (selectedByTags) {
          newSelectedStories.push(story)
        }
      }

      return newSelectedStories
    })
  }, [stories, chosenTags])

  useEffect(() => {
    if (stories) {
      const newTags = new Set<string>()

      for (const story of stories) {
        story.tags.forEach((tag) => newTags.add(tag))
      }

      setTags(Array.from(newTags))
    }

    // unmount to prevent refetch tags
    return () => {
      setTags([])
    }
  }, [stories])

  // TODO: Replace with real story's data
  return (
    <main className={className}>
      <div className="carousel carousel-vertical flex w-full max-h-[calc(90%)]">
        {selectedStories?.map((story) => {
          const { id, title, author, tags, createdAt } = story

          return (
            <div
              key={`${id}`}
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
                  <p className="font-medium text-back">{author}</p>
                </div>
                <div className="mt-2 h-24">
                  <Link href="/stories/[id]" as={`/stories/${id}`}>
                    <h1 className="text-base font-bold">{title}</h1>
                  </Link>
                </div>
                <ul className="flex gap-4">
                  {tags.map((tag) => {
                    return <li key={`${tag}-${id}`}>{tag}</li>
                  })}
                </ul>
                <div className="flex flex-row m-1 gap-1">
                  {/* <p className="text-xs text-black"> {new Date(createdAt).toLocaleDateString()} </p> */}
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
          )
        })}
      </div>
    </main>
  )
}
