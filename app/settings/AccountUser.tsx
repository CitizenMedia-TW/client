'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
// import { useSession } from 'next-auth/react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Dialog } from '@/components/ui/dialog'
import type { Session } from 'next-auth'
import { Skeleton } from '@/components/ui/skeleton'
// import { type } from './../../../broker-service/src/database/get'

import { Pencil } from 'lucide-react'

type editStatus = 'off' | 'on'

export function AccountUser({ session }: { session: Session | null }) {
  const [avatar, setAvatar] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [editUsername, setEditUsername] = useState<editStatus>('off')

  useEffect(() => {
    async function fetchData() {
      if (!session || !session.user) return
      setAvatar(session.user.avatar as string)
      setUsername(session.user.name as string)
    }
    fetchData()
  }, [session])

  const handleAvatar = (e: React.MouseEvent) => {
    e.preventDefault()
  }

  const toggleEditUsername = (e: React.MouseEvent) => {
    e.preventDefault()
    setEditUsername((prevEditUsername) =>
      prevEditUsername === 'on' ? 'off' : 'on'
    )
  }
  const text = editUsername === 'on' ? 'Save' : 'Edit'

  return (
    <section className="space-y-4">
      <div role="grid" className="grid grid-cols-3 gap-8">
        <div role="gridcell" className="col-span-full xs:col-span-1 space-y-4">
          <div
            role="img"
            className="max-w-40 xs:w-auto relative aspect-square mx-auto"
          >
            {avatar ? (
              <Image unoptimized src={avatar} alt="user image" fill={true} />
            ) : (
              <Skeleton className="w-full h-full" />
            )}
          </div>
          <form title="Change Photo" className="flex justify-center">
            <Dialog>
              <Label
                htmlFor="avatar"
                className="flex items-center gap-x-1 cursor-pointer hover:opacity-75 focus:opacity-75"
              >
                <Pencil className="size-6" />
                <p className="text-sm font-light">Change Photo</p>
              </Label>

              <Input type="file" id="avatar" name="avatar" className="hidden" />
            </Dialog>
          </form>
        </div>

        <form
          role="gridcell"
          className="col-span-full xs:col-span-2 grid items-end gap-y-2"
        >
          <Label
            htmlFor="username"
            className="hidden xs:block text-xl font-bold"
          >
            Username:
          </Label>
          <Input
            disabled={editUsername !== 'on'}
            type="text"
            placeholder={username}
            id="username"
            name="username"
            className="py-2 sm:py-4 md:py-8 text-2xl sm:text-3xl md:text-5xl font-bold border-0 border-b-2 border-b-[#466d9e] rounded-none focus-visible:ring-0"
          />

          <button
            type="button"
            title={`${text} Username`}
            onClick={toggleEditUsername}
            className="flex items-center gap-x-1 ml-auto hover:opacity-75 focus:opacity-75"
          >
            <Pencil className="size-6" />
            <p className="text-sm font-light">{text} Username</p>
          </button>
        </form>
      </div>
    </section>
  )
}
