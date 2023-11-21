'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import { StoryServices } from '@/api/services'
import Link from 'next/link'
import { useTags } from './LatestNews'
import Image from 'next/image'

interface Story {
  author: string
  title: string
  createdAt: Date
  _id: string
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

  return (
    <main className={className}>
      <div className="carousel carousel-vertical flex w-full max-h-[calc(90%)]">
        {stories &&
          stories.map((data) => (
            <div
              key={`${data._id}`}
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
                  <Link href="/stories/[id]" as={`/stories/${data._id}`}>
                    <h1 className="text-base font-bold">{data.title}</h1>
                  </Link>
                </div>

                <div className="flex flex-row m-1 gap-1">
                  <p className="text-xs text-black">
                    {new Date(data.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div>
                <div className="round-md w-[284px] h-[156px] bg-[#D9D9D9]" />
              </div>
            </div>
          ))}
      </div>
    </main>
  )
}
