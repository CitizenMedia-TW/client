'use client'
import React, { useEffect } from 'react'
import { useTagsContext } from '@/context/TagsContext'

import { Badge } from '@/components/ui/badge'

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
          return (
            <li key={`${tag}-${index}`}>
              <Badge>{tag}</Badge>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
