'use client'

import { createContext, useState, useContext } from 'react'

type ChosenTagsContext = {
  chosenTags: string[]
  setChosenTags: React.Dispatch<React.SetStateAction<string[]>>
}

const ChosenTagsContext = createContext<ChosenTagsContext | null>(null)

export function ChosenTagsProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [chosenTags, setChosenTags] = useState<string[]>([])

  return (
    <ChosenTagsContext.Provider value={{ chosenTags, setChosenTags }}>
      {children}
    </ChosenTagsContext.Provider>
  )
}

export function useChosenTagsContext() {
  const context = useContext(ChosenTagsContext)

  if (!context) {
    throw new Error(
      'useChosenTagsContext must be used within a ChosenTagsContextProvider'
    )
  }

  return context
}
