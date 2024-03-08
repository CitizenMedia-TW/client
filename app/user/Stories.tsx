import React from 'react'
import Link from 'next/link'
import { StoryServices } from '@/api/services'
import { useSession } from 'next-auth/react'
import { Story } from '@/api/services/story-services'

export default function Stories({ className }: { className: string }) {
  const { data: session } = useSession()
  const [data, setData] = React.useState<Story[] | null>(null)

  React.useEffect(() => {
    async function fetchData() {
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
    <div className={`${className} overscroll-auto`}>
      <h1>Stories</h1>
      {data &&
        data.map((story) => (
          <Link
            href={`/stories/${story.id}`}
            key={story.id}
            className="card border-2"
          >
            <div className="card-title">{story.title}</div>
            <p>{story.subTitle}</p>
          </Link>
        ))}
    </div>
  )
}
