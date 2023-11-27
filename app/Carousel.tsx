'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import { AiOutlineHeart } from 'react-icons/ai'
import { StoryServices } from '@/api/services'
import Link from 'next/link'

interface Story {
  author: string
  title: string
  createdAt: Date
  _id: string
}
export default function Carousel() {
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

  return (
    <div className="w-full h-48 flex m-2">
      <div className="carousel rounded-box">
        {stories &&
          stories.map((data) => (
            <div
              key={`${data._id}`}
              className="carousel-item mx-3 h-40 w-60 md:w-72 bg-white bg-opacity-50 rounded-md flex flex-col"
            >
              <Link href="/stories/[id]" as={`/stories/${data._id}`}>
                <h1 className="text-xl font-bold">{data.title}</h1>
              </Link>
              <p>{data.author}</p>
              <p>{new Date(data.createdAt).toLocaleDateString()}</p>
              {login && (
                // TODO: implement like button
                <button
                  onClick={() => console.log('liked')}
                  className="flex justify-end"
                >
                  <AiOutlineHeart />
                </button>
              )}
            </div>
          ))}
      </div>
    </div>
  )
}
