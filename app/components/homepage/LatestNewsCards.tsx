'use client'

import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'

import Link from 'next/link'
import Image from 'next/image'

import { useTagsContext, initTags } from '@/context/TagsContext'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'

import type { StoryPreview } from '@/types/stories'

type LatestNewsCardsProps = {
  className: string
  stories: StoryPreview[] | null
}

export default function LatestNewsCards({
  className,
  stories,
}: LatestNewsCardsProps) {
  const { setTags, chosenTags } = useTagsContext()

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

      setTags((prev) => {
        return [...prev, ...Array.from(newTags)]
      })
    }

    // unmount to prevent refetch tags
    return () => {
      setTags(initTags)
    }
  }, [stories])

  // TODO: Replace with real story's data
  return (
    <section className={className}>
      <ul className="space-y-12 md:space-y-8">
        {selectedStories?.map((story) => {
          const { id, title, author, tags, createdAt } = story

          return (
            <Card
              key={id}
              className="h-96 lg:h-48 grid grid-cols-1 lg:grid-cols-2 grid-rows-5 lg:grid-rows-1 justify-between p-2 gap-4 bg-white bg-opacity-50 rounded-md"
            >
              <CardHeader
                title={author}
                className="row-span-2 h-fit flex flex-col gap-x-2 gap-y-4 p-2 justify-between"
              >
                <article className="grid gap-y-2">
                  <section className="flex items-center gap-x-2">
                    <Avatar role="img" className="relative size-8">
                      <AvatarImage
                        src={session?.user?.avatar as string}
                        alt="here was a logo:("
                        className="border-solid border-black"
                      />
                      <AvatarFallback>{author}</AvatarFallback>
                    </Avatar>

                    <h2 className="font-medium text-lg">{author}</h2>

                    <p className="block lg:hidden ml-auto text-xs">
                      {createdAt.seconds}
                    </p>
                  </section>

                  <Link
                    href="/stories/[id]"
                    as={`/stories/${id}`}
                    title={title}
                  >
                    <CardTitle className="text-xl font-bold line-clamp-3">
                      {title}
                      <div className="invisible">invisible</div>
                      <div className="invisible">invisible</div>
                    </CardTitle>
                  </Link>
                </article>

                {/* <ul className="flex gap-4">
                  {tags.map((tag) => {
                    return <li key={`${tag}-${id}`}>{tag}</li>
                  })}
                </ul> */}

                <p className="hidden lg:block text-xs">{createdAt.seconds}</p>
              </CardHeader>

              <Link
                href="/stories/[id]"
                as={`/stories/${id}`}
                className="row-span-3 relative size-full overflow-hidden ml-auto rounded-2xl"
              >
                <Image
                  src="https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg"
                  alt="image"
                  fill={true}
                  className="object-cover hover:scale-105 transition-all duration-500"
                  unoptimized
                />
              </Link>
            </Card>
          )
        })}
      </ul>
    </section>
  )
}
