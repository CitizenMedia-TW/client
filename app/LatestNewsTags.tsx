'use client'
import React from 'react'
import { useTagsContext } from '@/context/TagsContext'

export default function Page({ className }: { className: string }) {
  const { tags, setTags } = useTagsContext()

  return (
    <main className={className}>
      <p>LatestNewsTags</p>
    </main>
  )
}
