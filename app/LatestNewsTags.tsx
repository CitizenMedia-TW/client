'use client'
import React from 'react'
import { useTags } from './LatestNews'

export default function Page({ className }: { className: string }) {
  const { tags, setTags } = useTags()

  return (
    <main className={className}>
      <p>LatestNewsTags</p>
    </main>
  )
}
