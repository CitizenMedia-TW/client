'use client'
import React from 'react'
import { useTagsContext } from '@/context/TagsContext'
import { useChosenTagsContext } from '@/context/ChosenTagsContext'

import { Badge } from '@/components/ui/badge'

export default function LatestNewsTags({ className }: { className: string }) {
  const { tags } = useTagsContext()
  const { chosenTags, setChosenTags } = useChosenTagsContext()

  const handleBadge = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    currTag: string,
    selected: boolean
  ) => {
    e.preventDefault()

    setChosenTags((prev) => {
      if (selected) {
        return prev.filter((tag) => tag !== currTag)
      } else {
        return [...prev, currTag]
      }
    })
  }

  return (
    <section className={className}>
      <hr className="hidden md:block" />
      <h2 className="text-2xl md:text-lg font-bold">Recommended Topic</h2>

      <ul className="flex gap-2 max-h-24 lg:max-h-36 py-2 overflow-y-scroll lg:gap-4 flex-wrap">
        {tags.map((tag, index) => {
          const selected = chosenTags.includes(tag)

          return (
            <li title={tag} key={`${tag}-${index}`}>
              <Badge
                className={`${
                  selected
                    ? 'bg-primary dark:bg-primary/60'
                    : 'bg-slate-200 dark:bg-slate-700'
                } px-4 lg:px-6 py-1 lg:py-2 dark:text-white text-xl font-normal rounded-2xl dark:hover:bg-primary/70 cursor-pointer`}
                onClick={(e) => {
                  handleBadge(e, tag, selected)
                }}
              >
                {tag}
              </Badge>
            </li>
          )
        })}
      </ul>

      <hr className="invisible md:visible" />
    </section>
  )
}
