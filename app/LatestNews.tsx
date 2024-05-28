'use client'
import React from 'react'
import LatestNewsCards from './LatestNewsCards'
import LatestNewsTags from './LatestNewsTags'

import { TagsProvider } from '@/context/TagsContext'

export default function Page() {
  return (
    <TagsProvider>
      <main className="flex flex-col md:flex-row w-full">
        <LatestNewsCards className="w-full md:w-[50%] h-[50%] p-2" />
        <LatestNewsTags className="w-full md:w-[50%] p-2" />
      </main>
    </TagsProvider>
  )
}
