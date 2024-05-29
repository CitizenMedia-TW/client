'use client'
import React from 'react'
import LatestNewsCards from './LatestNewsCards'
import LatestNewsTags from './LatestNewsTags'

import { TagsProvider } from '@/context/TagsContext'
import { ChosenTagsProvider } from '@/context/ChosenTagsContext'

export default function Page() {
  return (
    <ChosenTagsProvider>
      <TagsProvider>
        <main className="flex flex-col-reverse md:flex-row gap-4">
          <LatestNewsCards className="w-full md:w-1/2 p-4" />
          <LatestNewsTags className="w-full md:w-1/2 p-4 space-y-8 border-x-2 border-slate-200" />
        </main>
      </TagsProvider>
    </ChosenTagsProvider>
  )
}
