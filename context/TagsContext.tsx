'use client'

import { createContext, useState, useContext } from 'react'

type TagsContext = {
  tags: string[]
  setTags: React.Dispatch<React.SetStateAction<string[]>>
  chosenTags: string[]
  setChosenTags: React.Dispatch<React.SetStateAction<string[]>>
}

const TagsContext = createContext<TagsContext | null>(null)

export const initTags: string[] = ['AI']

export function TagsProvider({ children }: { children: React.ReactNode }) {
  const [tags, setTags] = useState<string[]>(initTags)
  const [chosenTags, setChosenTags] = useState<string[]>([])

  return (
    <TagsContext.Provider value={{ tags, setTags, chosenTags, setChosenTags }}>
      {children}
    </TagsContext.Provider>
  )
}

export function useTagsContext() {
  const context = useContext(TagsContext)

  if (!context) {
    throw new Error('useTagsContext must be used within a TagsContextProvider')
  }

  return context
}
