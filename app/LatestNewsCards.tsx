'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import { StoryServices } from '@/api/services'
import Link from 'next/link'
import { useTags } from './LatestNews'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

interface Story {
  author: string
  title: string
  createdAt: Date
  _id: string
}

function CarouselOrientation() {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      orientation="vertical"
      className="w-full max-w-xs"
    >
      <CarouselContent className="-mt-1 h-[200px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default function Page({ className }: { className: string }) {
  const { data: session } = useSession()
  const [login, setLogin] = React.useState(false)
  const [stories, setStories] = React.useState([{} as Story])

  React.useEffect(() => {
    if (session) setLogin(true)
    else setLogin(false)
  }, [session])

  React.useEffect(() => {
    const getStory = async () => {
      const data = await StoryServices.getCarouselStories()
      if (data) setStories(data.data)
    }
    getStory()
  }, [])

  const { tags } = useTags()
  console.log(tags)

  // TODO: Replace with real story's data
  return (
    <main className={className}>
      <Carousel orientation="vertical" className="h-full">
        <div className="overflow-y-auto h-[180px] md:h-[525px]">
          <CarouselContent className="">
            <CarouselItem className="">
              {stories &&
                stories.map((data) => (
                  <div
                    key={`${data._id}`}
                    className="pb-10 pl-4 mb-3 bg-white bg-opacity-50 rounded-md flex w-full h-56 justify-between"
                  >
                    <div className="flex flex-col w-40 sm:w-80">
                      <div className="flex flex-row items-center h-12">
                        <Image
                          unoptimized
                          src={session?.user?.avatar as string}
                          alt="here was a logo:("
                          width={96}
                          height={96}
                          className="rounded-full w-12 h-12 border-solid border-border"
                        />
                        <p className="pl-4 text-lg font-medium text-back">
                          {data.author}
                        </p>
                      </div>
                      <div className="mt-2 h-24">
                        <Link href="/stories/[id]" as={`/stories/${data._id}`}>
                          <h1 className="text-xl font-extrabold overflow-hidden">
                            {data.title}
                          </h1>
                        </Link>
                      </div>

                      <div className="flex flex-row m-1 gap-1">
                        <p className="text-base font-light text-black">
                          {new Date(data.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    <div className="w-32 sm:w-auto">
                      {/* <div className="round-md w-full h-full bg-[#D9D9D9]" /> */}
                      <Image
                        src="https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg"
                        alt="image"
                        width={176}
                        height={176}
                        className="overflow-hidden"
                        unoptimized
                      />
                    </div>
                  </div>
                ))}
            </CarouselItem>
          </CarouselContent>
        </div>
      </Carousel>
    </main>
  )
}
