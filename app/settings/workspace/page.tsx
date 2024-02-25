'use client'
import React from 'react'
import Manu from '../Manu'
import { useTheme } from 'next-themes'
import { Switch } from '@/components/ui/switch'
import { Checkbox } from '@/components/ui/checkbox'
import { useState } from 'react'

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [themeMode, setThemeMode] = React.useState(theme === 'system')
  const [darkMode, setDarkMode] = React.useState(theme === 'dark')

  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])

  if (!mounted) return <div>loading...</div>

  const toggleThemeMode = () => {
    if (themeMode) {
      setTheme('light')
      setDarkMode(false)
    } else {
      setTheme('system')
    }
    setThemeMode(!themeMode)
  }
  const toggleDarkMode = () => {
    if (darkMode) {
      setTheme('light')
    } else {
      setTheme('dark')
    }
    setDarkMode(!darkMode)
  }
  return (
    <Manu title={'Workspace'}>
      <div>
        <div className="flex px-36 place-content-between">
          <p className="text-2xl font-bold">System default</p>
          <Switch
            id=""
            checked={themeMode}
            onCheckedChange={() => toggleThemeMode()}
          />
        </div>

        {!themeMode && (
          <section className="pt-8 pl-48">
            <div className="flex gap-x-7 items-center">
              <Checkbox
                className="h-4 w-4 rounded-full"
                checked={!darkMode}
                onCheckedChange={() => toggleDarkMode()}
              />
              <p className="font-medium text-2xl">Dark</p>
            </div>
            <div className="flex pt-1.5 gap-x-7 items-center">
              <Checkbox
                className="h-4 w-4 rounded-full"
                checked={darkMode}
                onCheckedChange={() => toggleDarkMode()}
              />
              <p className="font-medium text-2xl">Light</p>
            </div>
          </section>
        )}
      </div>
    </Manu>
  )
}
