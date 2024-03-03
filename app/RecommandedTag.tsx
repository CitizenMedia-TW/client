import React from 'react'
import { Button } from '@/components/ui/button' // 确保正确导入按钮组件

type TagsType = {
  [key: number]: { content: string }
}

const tags: TagsType = {
  1: { content: 'Machine Learning' },
  2: { content: '' },
  3: { content: 'Writing' },
  4: { content: '' },
  5: { content: 'Psychology' },
  6: { content: '' },
}

export default function RecommendedTag() {
  return (
    <main className="overflow-hidden w-full h-full flex flex-wrap content-between gap-y-5 gap-x-2 lg:gap-x-3 xl:pr-44 pr-10">
      {Object.keys(tags).map((key) => (
        <Button
          key={parseInt(key)}
          className={`h-9 bg-border rounded-full px-5 flex items-center ${
            tags[parseInt(key)].content === ''
              ? 'w-20 lg:w-32 hidden md:flex'
              : 'w-fit'
          }`}
          style={{ whiteSpace: 'nowrap' }}
        >
          <p className="text-xl font-light">{tags[parseInt(key)].content}</p>
        </Button>
      ))}
    </main>
  )
}
