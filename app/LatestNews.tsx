'use client'
import React from 'react'
import LatestNewsCards from './LatestNewsCards'
import LatestNewsTags from './LatestNewsTags'

type tagContextType = {
  tags: string[]
  setTags: React.Dispatch<React.SetStateAction<string[]>>
}

const tagContextDefaultValue: tagContextType = { tags: [], setTags: () => [] }

const TagChosen = React.createContext(tagContextDefaultValue)

export function useTags() {
  return React.useContext(TagChosen)
}

export default function Page() {
  /* const [tags, setTags] = React.useState<tagContextType>(tagContextDefaultValue) */
  const [tags, setTags] = React.useState<string[]>([])

  return (
    <TagChosen.Provider value={{ tags, setTags }}>
      <main className="flex flex-col md:flex-row w-full">
        <LatestNewsCards className="w-full md:w-[50%] h-[50%] p-2" />
        <LatestNewsTags className="w-full md:w-[50%] p-2" />
      </main>
    </TagChosen.Provider>
  )
}
