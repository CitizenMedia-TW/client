import React from 'react'
import { ThumbsUp, MessageSquare } from 'lucide-react'
import { LatestNews, MainCarouselSkeleton } from './components/homepage'

// import LatestNewsIcon from '@/public/latest-news.svg'
// import Image from 'next/image'

import { StoryServices } from '@/api/services'
import dynamic from 'next/dynamic'

const MainCarousel = dynamic(
  () => import('./components/homepage').then((mod) => mod.MainCarousel),
  {
    ssr: false,
    loading: () => <MainCarouselSkeleton />,
  }
)

// const stories = [
//   {
//     id: '48f60ce3-1bb7-4f83-9614-dc8ee5647403',
//     author: 'dev',
//     title: 'First Story',
//     subTitle: 'First story from dev',
//     createdAt: { seconds: 1716875096, nanos: 658239000 },
//     tags: ['tag-1', 'tag-2', 'tag-3'],
//   },
//   {
//     id: '48f60ce3-1bb7-4f84-9614-dc8ee5647403',
//     author: 'dev 2',
//     title:
//       'Second Story 123 213 123 123 1 231 23 123 12 31 23 12 3 123 12 3 123 1 23 12 31 23 12 3 12 3 12 31 23 1 3 1 23 12 31 23 1 3 12 312',
//     subTitle: 'Second story from dev 2',
//     createdAt: { seconds: 1716875096, nanos: 658239000 },
//     tags: ['tag-2', 'tag-4', 'tag-5'],
//   },
//   {
//     id: '48f60ce3-1bb7-4f85-9614-dc8ee5647403',
//     author: 'dev 3',
//     title: 'third Story',
//     subTitle: 'third story from dev 3',
//     createdAt: { seconds: 1716875096, nanos: 658239000 },
//     tags: ['tag-2', 'tag-1', 'tag-5'],
//   },
//   {
//     id: '48f60ce3-1bb7-4f85-9614-dc8ee5647403',
//     author: 'dev 3',
//     title: 'third Story',
//     subTitle: 'third story from dev 3',
//     createdAt: { seconds: 1716875096, nanos: 658239000 },
//     tags: ['tag-2', 'tag-1', 'tag-5'],
//   },
//   {
//     id: '48f60ce3-1bb7-4f85-9614-dc8ee5647403',
//     author: 'dev 3',
//     title: 'third Story',
//     subTitle: 'third story from dev 3',
//     createdAt: { seconds: 1716875096, nanos: 658239000 },
//     tags: ['tag-2', 'tag-1', 'tag-5'],
//   },
// ]

export default async function Home() {
  const stories = await StoryServices.getCarouselStories()

  return (
    <main className="min-h-lvh flex flex-col items-center py-8">
      <article className="flex flex-col w-full gap-y-8">
        <section className="flex items-center gap-x-2 px-8">
          <ThumbsUp />
          <h2 className="text-2xl font-bold">Official Recommendation</h2>
        </section>

        <MainCarousel stories={stories} />
      </article>

      <article className="w-full flex flex-col py-4 lg:p-16 gap-y-2 lg:gap-y-8 shadow-blue">
        <section className="flex items-center gap-x-2 px-2 lg:px-0">
          <MessageSquare />
          <h2 className="text-2xl font-bold">The Latest News</h2>
        </section>

        <LatestNews />
      </article>
      {/* <LatestNews /> */}
      {/* <MostViewed /> */}
      {/* <TraceAuthor /> */}
    </main>
  )
}
