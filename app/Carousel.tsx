'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import { StoryServices } from '@/api/services'
import Link from 'next/link'
import { AiOutlineHeart, AiOutlineClockCircle } from 'react-icons/ai'
import { FaRegBookmark } from 'react-icons/fa6'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Story } from '@/api/services/story-services'
import { toDate } from '@/lib/utils'

export default function carousel() {
  const { data: session } = useSession()
  const [login, setLogin] = React.useState(false)
  const [stories, setStories] = React.useState<Story[]>([])
  React.useEffect(() => {
    if (session) setLogin(true)
    else setLogin(false)
  }, [session])
  React.useEffect(() => {
    const getStory = async () => {
      const data = await StoryServices.getCarouselStories()
      if (data) setStories(data)
    }
    getStory()
  }, [])

  return (
    <div className="bg-footer py-8 px-3 rounded-md">
      <Carousel className="items-center">
        <CarouselContent className="">
          {stories &&
            stories.map((data) => (
              <CarouselItem
                key={data.id}
                className="basis-full md:basis-2/3 lg:basis-auto"
              >
                <Link href="/stories/[id]" as={`/stories/${data.id}`}>
                  <Card className="h-[185px] bg-slate-400 border-0">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage
                            src={session?.user?.avatar as string}
                            alt="here was a logo:("
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="font-semibold text-xl line-clamp-1 text-ellipsis">
                          {data.title}
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-left font-bold text-xl line-clamp-2 text-ellipsis w-48 -mt-2">
                        {data.author}
                        {data.subTitle}
                      </p>
                      <div className="flex flex-row py-3">
                        <div className="w-[87.5%] flex items-center space-x-1">
                          <AiOutlineClockCircle />
                          <p>{toDate(data.createdAt).toDateString()}</p>
                        </div>
                        <div className="w-[12.5%] flex items-center">
                          <FaRegBookmark className="text-footer text-2xl" />
                          <AiOutlineHeart className="text-footer text-3xl" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="bg-yellow-500 ml-12" />
        <CarouselNext className="bg-yellow-500 mr-12" />
      </Carousel>
    </div>
  )
}
