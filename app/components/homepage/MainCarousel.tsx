'use client'
import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { Clock, Bookmark, Heart } from 'lucide-react'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
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

import type { Story } from '@/types/stories'

type MainCarouselProps = { stories: Story[] | null }

export default function MainCarousel({ stories }: MainCarouselProps) {
  const { data: session } = useSession()
  const [login, setLogin] = useState(false)

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
      plugins={[
        Autoplay({
          delay: 5000,
          stopOnInteraction: true,
          stopOnMouseEnter: true,
        }),
      ]}
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
      <CarouselPrevious className="ml-16 border-0 bg-yellow-500 text-black opacity-40 group-hover:opacity-100 hover:bg-yellow-300 dark:hover:text-black dark:hover:bg-yellow-300 transition-all" />
      <CarouselNext className="mr-16 border-0 bg-yellow-500 text-black opacity-40 group-hover:opacity-100 hover:bg-yellow-300 dark:hover:text-black dark:hover:bg-yellow-300 transition-all" />
    </Carousel>
  )
}
