import React from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function Library({ className }: { className: string }) {
  return (
    <ScrollArea className="h-[960px] w-full rounded-md my-4">
      <div className="p-4">
        <h1>Library</h1>
      </div>
    </ScrollArea>
  )
}
