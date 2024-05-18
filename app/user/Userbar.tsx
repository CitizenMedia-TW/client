'use client'
import React from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { UserServices } from '@/api/services'
import { RiFacebookBoxLine } from 'react-icons/ri'
import { FaInstagram } from 'react-icons/fa'
import { FaRegShareSquare } from 'react-icons/fa'

import { ScrollArea } from '@/components/ui/scroll-area'
import headshot from '@/public/notifications-head.svg'

const RECOMMEND_stories = Array.from({ length: 30 }).map((_, i) => ({
  Head: headshot,
  author: 'Cassie Kozyrkov',
  title: 'Why everyone should try GPT-4, even the CEO',
  tags: ['#TAGSTAGS', '#TAGS', '#TAGS', '#TAGSTAGS', '#TAGS'],
  date: 'Mar. 23, 2023',
}))
export default function Userbar() {
  const { data: session, status } = useSession()
  const username = session?.user?.name
  const [profile, setProfile] = React.useState([])

  const userInfo =
    'Lorem ipsum dolor sit amet consectetur. Orci commodo pharetra vestibulum eleifend semper. Mi risus enim velit nulla quis fermentum feuac. Nisi morbi fermentum feugiat '

  React.useEffect(() => {
    const getProfileLinks = async () => {
      if (!session?.user.email) return
      const res = await UserServices.getProfileLinks(
        session?.user.email as string
      )
      setProfile(res.data.profileLinks)
    }
    getProfileLinks()
  }, [status, session?.user.email])

  return (
    <div>
      <div className="flex flex-col gap-8">
        <section className="border-2 rounded-3xl">
          <div className="flex justify-start items-center">
            {session && (
              <Image
                unoptimized
                src={session?.user.avatar as string}
                alt="avatar"
                width="60"
                height="60"
                className="rounded-full m-3.5"
              />
            )}
            <p>User {username}</p>
          </div>
          <div className="mx-8 my-6">
            <div className="">{userInfo}</div>
            <div className="flex flex-row my-6 justify-between">
              <div className="flex flex-row gap-4">
                <RiFacebookBoxLine style={{ fontSize: '28px' }} />
                <FaInstagram style={{ fontSize: '28px' }} />
                <FaRegShareSquare style={{ fontSize: '28px' }} />
              </div>
              <div className="bg-yellow-400 rounded-3xl">
                <div className="text-sm my-1 mx-4 font-bold text-slate-600">
                  Edit
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="border-2 relative rounded-3xl h-[450px]">
          <div className="bg-white absolute top-0 -mt-3 ml-6">
            <div className="text-sm mx-2">RECOMMEND</div>
          </div>
          <ScrollArea className="h-[400px] w-full rounded-md my-6">
            <div className="p-4 gap-4">
              {RECOMMEND_stories.map((story, idx) => (
                <div key={idx}>
                  <div className="bg-gray-300 rounded-3xl my-4">
                    <div className="flex flex-row">
                      <div className="mx-2 mt-2">
                        <Image src={story.Head} alt="" className="p-1" />
                      </div>
                      <div className="flex justify-center items-center">
                        <p className="text-sm">{story.author}</p>
                      </div>
                    </div>
                    <div className="my-2 mx-4 font-extrabold">
                      {story.title}
                    </div>
                    <div className="flex flex-row justify-between m-4">
                      <div className="">
                        {story.tags.map(
                          (tag, tagIndex) =>
                            tagIndex % 3 === 0 && (
                              <div
                                key={tagIndex}
                                className="flex items-center mb-4 gap-2"
                              >
                                {[tagIndex, tagIndex + 1, tagIndex + 2].map(
                                  (index) =>
                                    index < story.tags.length && (
                                      <div
                                        key={index}
                                        className="rounded-3xl bg-gray-200 hover:bg-gray-100 hover:-translate-y-1"
                                      >
                                        <div className="flex justify-center items-center">
                                          <p className="text-[10px] m-1">
                                            {story.tags[index]}
                                          </p>
                                        </div>
                                      </div>
                                    )
                                )}
                              </div>
                            )
                        )}
                      </div>
                      <div className="h-24 w-4/12 bg-slate-800 flex mx-4 mb-4"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}
