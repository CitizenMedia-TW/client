'use client'
import React from 'react'
import { useTags } from './LatestNews'
import { Button } from '@/components/ui/button'

export default function Page({ className }: { className: string }) {
  const { tags, setTags } = useTags()
  return (
    <main className={className}>
      {tags.map((tag) => (
        <Button
          key={tag}
          className={`h-9 bg-border rounded-full px-5 flex items-center ${
            tag === '' ? 'w-20 lg:w-32 hidden md:flex' : 'w-fit'
          }`}
          style={{ whiteSpace: 'nowrap' }}
        >
          <p className="text-xl font-light">{tag}</p>
        </Button>
      ))}
    </main>
  )
}
