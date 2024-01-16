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

type SubPagesType = {
  [key: string]: {
    activate: boolean
    component: JSX.Element
  }
}
const subPages: SubPagesType = {
  Account: {
    activate: true,
    component: <Account />,
  },
  Security: {
    activate: false,
    component: <Security />,
  },
  Notification: {
    activate: false,
    component: <Notification />,
  },
  Workspace: {
    activate: false,
    component: <Workspace />,
  },
}

export default function Page() {
  const [currentSubPage, setCurrentSubPage] = React.useState('Account')

  function useSubPages(name: string): void {
    subPages[name].activate = true
    subPages[currentSubPage].activate = false
    setCurrentSubPage(name) // This will forse re-render
  }

  return (
    <main className="h-full">
      <p className="text-2xl">Settings</p>
      {/* Show on @media (min-width: 640px) */}
      <section className="sm:flex flex-row m-4 space-x-4 transition-transform duration-100 hidden">
        {Object.keys(subPages).map((key) => (
          <Button
            variant={subPages[key].activate ? 'outline' : 'ghost'}
            onClick={() => useSubPages(key)}
          >
            {key}
          </Button>
        ))}
      </section>
      {/* Hidden on @media (max-width: 640px) */}
      <section className="sm:hidden flex justify-center">
        <Select onValueChange={(val) => useSubPages(val)}>
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
      <hr className="h-[3px] bg-primary mx-16 my-5" />
      <div className="h-1/5 overflow-y-scroll">
        {Object.keys(subPages).map(
          (key) => subPages[key].activate && subPages[key].component
        )}
      </div>
    </main>
  )
}
