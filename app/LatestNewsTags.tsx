'use client'
import React, { useEffect } from 'react'
import { useTagsContext } from '@/context/TagsContext'

export default function Page({ className }: { className: string }) {
  const { tags, setTags } = useTagsContext()

  useEffect(() => {
    console.log(tags)
  }, [tags])

  return (
    <main className={className}>
      <p>LatestNewsTags</p>
      <ul>
        {tags.map((tag, index) => {
          return <li key={index}>{tag}</li>
        })}
      </ul>
    </main>
  )
}
