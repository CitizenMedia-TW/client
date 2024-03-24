'use client'
import React from 'react'
import LatestNewsCards from './LatestNewsCards'
import LatestNewsTags from './LatestNewsTags'

type tagContextType = {
  tags: string[]
  setTags: React.Dispatch<React.SetStateAction<string[]>>
}

const tagContextDefaultValue: tagContextType = {
  tags: ['Machine Learning', '', 'Writing', '', 'Psychology', ''],
  setTags: () => [],
}

const TagChosen = React.createContext(tagContextDefaultValue)

export function useTags() {
  return React.useContext(TagChosen)
}

export default function Page() {
  /* const [tags, setTags] = React.useState<tagContextType>(tagContextDefaultValue) */
  const [tags, setTags] = React.useState<string[]>([])

  return (
    <main className="flex flex-col md:flex-row w-full">
      <div className="w-full md:w-1/2 pr-6 px-6 sm:pl-16">
        <LatestNewsCards className="w-full h-full pt-2" />
      </div>

      <div className="w-full md:w-1/2 h-full flex pt-2 pl-6 pr-7">
        <div className="w-full h-full">
          <p className="pl-6 font-medium text-lg text-slate-400">
            Recommanded Topic
          </p>
          <div className="w-full overflow-hidden sm:h-64 px-4 sm:px-12 pt-8 pb-8">
            <LatestNewsTags className="overflow-hidden w-full h-full flex flex-wrap content-between gap-y-5 gap-x-2 lg:gap-x-3 xl:pr-44 pr-10" />
          </div>
          <hr className="mx-5 h-px bg-border" />
          <div className="w-full"></div>
        </div>
      </div>
    </main>
  )
}
