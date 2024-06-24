'use client'
import React from 'react'
import LatestNewsCards from './LatestNewsCards'
import LatestNewsTags from './LatestNewsTags'

import { TagsProvider } from '@/context/TagsContext'

export default function Page() {
  return (
    <TagsProvider>
      <main className="relative flex flex-col-reverse md:flex-row gap-4">
        <LatestNewsCards className="w-full md:w-1/2 p-4" />
        <LatestNewsTags className="sticky top-[4.75rem] h-fit w-full md:w-1/2 px-4 lg:p-4 space-y-8 md:border-x-2 border-slate-200 bg-background shadow-xl md:shadow-none" />
      </main>
    </TagsProvider>
  )
}
