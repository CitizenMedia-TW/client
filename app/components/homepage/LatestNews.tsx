import React from 'react'
import dynamic from 'next/dynamic'

import { LatestNewsTags, LatestNewsCardsSkeleton } from './'

import { StoryServices } from '@/app/api/services'

import { TagsProvider } from '@/context/TagsContext'

const LatestNewsCards = dynamic(() => import('./LatestNewsCards'), {
  ssr: false,
  loading: () => <LatestNewsCardsSkeleton />,
})

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
// ]

export default async function Page() {
  const stories = await StoryServices.getLatestStories()

  return (
    <TagsProvider>
      <main className="relative flex flex-col-reverse md:flex-row gap-4">
        <LatestNewsCards className="w-full md:w-1/2 p-4" stories={stories} />
        <LatestNewsTags className="sticky top-[4.75rem] h-fit w-full md:w-1/2 px-4 lg:p-4 space-y-8 md:border-x-2 border-slate-200 bg-background shadow-xl md:shadow-none" />
      </main>
    </TagsProvider>
  )
}
