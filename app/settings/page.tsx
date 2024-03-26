'use client'
import React from 'react'
import Account from './Account'
import Security from './Security'
import Notification from './Notification'
import Workspace from './Workspace'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { useEffect } from 'react'

type SubPagesType = {
  [key: string]: {
    activate: boolean
    component: (key: string) => JSX.Element
  }
}
const subPages: SubPagesType = {
  Account: {
    activate: true,
    component: (key) => <Account key={key} />,
  },
  Security: {
    activate: false,
    component: (key) => <Security key={key} />,
  },
  Notification: {
    activate: false,
    component: (key) => <Notification key={key} />,
  },
  Workspace: {
    activate: false,
    component: (key) => <Workspace key={key} />,
  },
}

export default function Page() {
  const [currentSubPage, setCurrentSubPage] = React.useState('Account')
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  function setSubPages(key: string): void {
    if (key && subPages[key]) {
      const updatedSubPages = { ...subPages }
      Object.keys(updatedSubPages).forEach((subPageKey) => {
        updatedSubPages[subPageKey].activate = subPageKey === key
      })
      setCurrentSubPage(key)
    }
  }

  useEffect(() => {
    const tab = searchParams.get('tab')
    if (tab != null) {
      setSubPages(tab)
    } else {
      setSubPages('Account')
    }
  }, [searchParams])

  return (
    <main className="h-full pt-24 px-4 sm:px-12 md:px-24">
      <p className="text-5xl font-bold ">Settings</p>
      {/* Show on @media (min-width: 640px) */}
      <section className="sm:flex flex-row m-4 space-x-4 transition-transform duration-100 hidden">
        {Object.keys(subPages).map((key) => (
          <Button
            key={key}
            variant={subPages[key].activate ? 'outline' : 'ghost'}
            onClick={() => {
              console.log(pathname + '?' + 'tab=' + key)
              router.push(pathname + '?' + 'tab=' + key)
            }}
          >
            {key}
          </Button>
        ))}
      </section>
      {/* Hidden on @media (max-width: 640px) */}
      <section className="sm:hidden flex justify-end sm:justify-center">
        <Select
          onValueChange={(val) => {
            console.log(pathname + '?' + 'tab=' + val)
            router.push(pathname + '?' + 'tab=' + val)
          }}
        >
          <SelectTrigger className="w-24">
            <SelectValue placeholder="Account" defaultValue={'account'} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Account">Account</SelectItem>
              <SelectItem value="Security">Security</SelectItem>
              <SelectItem value="Notification">Notification</SelectItem>
              <SelectItem value="Workspace">Workspace</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </section>
      <hr className="h-[3px] bg-primary mt-5" />
      <div className="h-1/5 overflow-hidden pt-12">
        {Object.keys(subPages).map(
          (key) => subPages[key].activate && subPages[key].component(key)
        )}
      </div>
    </main>
  )
}
