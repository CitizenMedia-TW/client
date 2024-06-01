'use client'
import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { StoryServices } from '@/api/services'
import Link from 'next/link'
import { Clock, Bookmark, Heart } from 'lucide-react'

import useSWR from 'swr'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import Autoplay from 'embla-carousel-autoplay'
import { toDate } from '@/lib/utils'

const stories = [
  {
    id: '48f60ce3-1bb7-4f83-9614-dc8ee5647403',
    author: 'dev',
    title: 'First Story',
    subTitle: 'First story from dev',
    createdAt: { seconds: 1716875096, nanos: 658239000 },
    tags: ['tag-1', 'tag-2', 'tag-3'],
  },
  {
    id: '48f60ce3-1bb7-4f84-9614-dc8ee5647403',
    author: 'dev 2',
    title:
      'Second Story 123 213 123 123 1 231 23 123 12 31 23 12 3 123 12 3 123 1 23 12 31 23 12 3 12 3 12 31 23 1 3 1 23 12 31 23 1 3 12 312',
    subTitle: 'Second story from dev 2',
    createdAt: { seconds: 1716875096, nanos: 658239000 },
    tags: ['tag-2', 'tag-4', 'tag-5'],
  },
  {
    id: '48f60ce3-1bb7-4f85-9614-dc8ee5647403',
    author: 'dev 3',
    title: 'third Story',
    subTitle: 'third story from dev 3',
    createdAt: { seconds: 1716875096, nanos: 658239000 },
    tags: ['tag-2', 'tag-1', 'tag-5'],
  },
  {
    id: '48f60ce3-1bb7-4f85-9614-dc8ee5647403',
    author: 'dev 3',
    title: 'third Story',
    subTitle: 'third story from dev 3',
    createdAt: { seconds: 1716875096, nanos: 658239000 },
    tags: ['tag-2', 'tag-1', 'tag-5'],
  },
  {
    id: '48f60ce3-1bb7-4f85-9614-dc8ee5647403',
    author: 'dev 3',
    title: 'third Story',
    subTitle: 'third story from dev 3',
    createdAt: { seconds: 1716875096, nanos: 658239000 },
    tags: ['tag-2', 'tag-1', 'tag-5'],
  },
]

export default function MainCarousel() {
  const { data: session } = useSession()
  const [login, setLogin] = useState(false)

  // const {
  //   data: stories,
  //   error,
  //   isLoading,
  // } = useSWR('getLatestStories', async () => {
  //   const stories = await StoryServices.getCarouselStories()
  //   return stories
  // })

  useEffect(() => {
    if (session) setLogin(true)
    else setLogin(false)
  }, [session])

  return (
    <Carousel
      className="group bg-footer py-8 px-8 lg:px-16 items-center"
      opts={{
        align: 'center',
        loop: true,
      }}
      plugins={
        [
          // Autoplay({
          //   delay: 5000,
          //   stopOnInteraction: true,
          //   stopOnMouseEnter: true,
          // }),
        ]
      }
    >
      <CarouselContent className="cursor-grab active:cursor-grabbing">
        {stories?.map((story) => {
          const { id, title, author, subTitle, createdAt } = story

          return (
            <CarouselItem
              key={id}
              className="basis-full md:basis-1/2 lg:basis-1/3"
            >
              <Card className="h-64 bg-slate-400 border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Avatar>
                      <AvatarImage
                        src={session?.user?.avatar as string}
                        alt="here was a logo:("
                      />
                      <AvatarFallback>{author}</AvatarFallback>
                    </Avatar>

                    <p className="font-semibold text-xl line-clamp-1 text-ellipsis">
                      {author}
                    </p>
                  </CardTitle>
                </CardHeader>

                <Link href="/stories/[id]" as={`/stories/${id}`} title={title}>
                  <CardContent className="">
                    <h1 className="font-bold text-xl line-clamp-2 xs:line-clamp-3 text-ellipsis">
                      {title}
                      <div className="invisible">invisible</div>
                      <div className="invisible">invisible</div>
                    </h1>
                  </CardContent>
                </Link>

                <CardFooter className="flex flex-col-reverse xs:flex-row justify-between gap-y-4 py-2">
                  <section className="flex items-center gap-x-2">
                    <Clock className="text-footer" />
                    <p>{toDate(createdAt).toDateString()}</p>
                  </section>

                  <section className="flex items-center gap-x-4">
                    <Bookmark className="size-6 text-footer cursor-pointer hover:scale-110 transition-all" />
                    <Heart className="size-6 text-footer cursor-pointer hover:scale-110 transition-all" />
                  </section>
                </CardFooter>
              </Card>
            </CarouselItem>
          )
        })}
      </CarouselContent>
      <CarouselPrevious className="ml-16 border-0 bg-yellow-500 text-black hover:bg-yellow-300 dark:hover:text-black dark:hover:bg-yellow-300" />
      <CarouselNext className="mr-16 border-0 bg-yellow-500 text-black hover:bg-yellow-300 dark:hover:text-black dark:hover:bg-yellow-300" />
    </Carousel>
  )
}
