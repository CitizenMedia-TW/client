'use client'
import React, { useState } from 'react'
import { Textarea } from '@/components/ui/textarea'

import { Pencil } from 'lucide-react'

type editStatus = 'on' | 'off'

export function AccountIntro() {
  const [editUsername, setEditUsername] = useState<editStatus>('off')

  const toggleEditUsername = () => {
    setEditUsername((prevEditUsername) =>
      prevEditUsername === 'on' ? 'off' : 'on'
    )
  }
  const text = editUsername === 'on' ? 'Save' : 'Edit'
  return (
    <section className="flex flex-col gap-y-4">
      <h2 className="text-xl font-bold">Introduction:</h2>

      <Textarea
        disabled={editUsername !== 'on'}
        placeholder="Your Introduction"
        className="min-h-60 text-base border-[#466d9e] border-2 rounded-none h-full focus-visible:ring-0flex justify-item-start ustify-start items-start"
      />

      <div className="flex justify-end gap-x-1">
        <button
          title={`${text} Introduction`}
          onClick={toggleEditUsername}
          className="flex items-center gap-x-1 hover:opacity-75 focus:opacity-75"
        >
          <Pencil className="size-6" />
          <p className="text-sm font-light">{text} Introduction</p>
        </button>
      </div>
    </section>
  )
}
