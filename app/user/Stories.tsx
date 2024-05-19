import React from 'react'
import Link from 'next/link'
import { StoryServices } from '@/api/services'
import { useSession } from 'next-auth/react'
import { Story } from '@/api/services/story-services'
import { ScrollArea } from '@/components/ui/scroll-area'
export default function Stories({ className }: { className: string }) {
  const { data: session } = useSession()
  const [data, setData] = React.useState<Story[] | null>(null)

  React.useEffect(() => {
    async function fetchData() {
      if (!session?.user) return
      const res = await StoryServices.getMyStories(
        session?.user.jwtToken as string
      )
      if (!res) return
      setData(res)
    }
    fetchData()
  }, [session?.user.jwtToken])

  if (!session) return <div>loading...</div>
  if (!session.user) return <div>loading...</div>

  return (
    <ScrollArea className="w-full rounded-md my-4">
      <div className="">
        {data &&
          data.map((story) => (
            <Link
              href={`/stories/${story.id}`}
              key={story.id}
              className="card border-b-4 pt-10 px-6 pb-4 h-72"
            >
              <div className="font-extrabold text-3xl">{story.title}</div>
              <div className="flex">
                <div className="w-2/3">
                  <div className="my-4 flex flex-row w-full gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="font-medium text-lg">
                        {story.subTitle}
                      </div>
                      <div className="font-medium text-lg w-4/6 overflow-hidden">
                        story:
                        fwefwkmrgwkgmwkomqkefm,koqmfomqk,wfklmkjmrgwjkoqelpwfoqefj
                      </div>
                      <div className="my-2 flex flex-row gap-3"></div>
                    </div>
                  </div>
                  <div className="flex gap-x-3">
                    {story.tags &&
                      story.tags.map((tag, tagIndex) => (
                        <div
                          key={tagIndex}
                          className="grow-0 rounded-3xl bg-gray-200 hover:bg-gray-100 hover:-translate-y-1"
                        >
                          <div className="text-xs m-2">{tag}</div>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="w-6/12 h-36 bg-gray-300 p-4"></div>
              </div>
            </Link>
          ))}
      </div>
    </ScrollArea>
  )
}
