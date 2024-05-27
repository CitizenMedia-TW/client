import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Switch } from '@/components/ui/switch'
import { Label } from '@radix-ui/react-label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export default function Workspace() {
  const { theme, setTheme } = useTheme()
  const [themeMode, setThemeMode] = useState(theme === 'system')
  const [darkMode, setDarkMode] = useState(theme === 'dark')

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

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
    <form className="px-4 sm:px-12">
      <section className="flex place-content-between">
        <Label htmlFor="toggleThemeMode" className="text-2xl font-bold">
          System default
        </Label>
        <Switch
          id="toggleThemeMode"
          checked={themeMode}
          onCheckedChange={() => toggleThemeMode()}
        />
      </section>

      {!themeMode && (
        <RadioGroup
          defaultValue={theme}
          className="pt-8 pl-10"
          onValueChange={() => {
            toggleDarkMode()
          }}
        >
          <div className="flex gap-x-8 items-center">
            <RadioGroupItem value="light" id="light" className="size-4" />
            <Label htmlFor="light" className="text-2xl">
              Light
            </Label>
          </div>
          <div className="flex gap-x-8 items-center">
            <RadioGroupItem value="dark" id="dark" className="size-4" />
            <Label htmlFor="dark" className="text-2xl">
              Dark
            </Label>
          </div>
        </RadioGroup>
      )}
    </form>
  )
}
