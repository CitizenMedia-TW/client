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
        <main className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:col-rows-1">
          <LatestNewsCards className="row-start-2 md:row-start-1 p-2" />
          <LatestNewsTags className="row-start-1 p-2" />
        </main>
      </TagsProvider>
    </ChosenTagsProvider>
  )
}
