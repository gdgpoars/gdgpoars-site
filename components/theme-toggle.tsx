'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Evita hydration mismatch
  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="size-9 rounded-full">
        <Sun className="size-5 text-google-yellow" />
        <span className="sr-only">Alternar tema</span>
      </Button>
    )
  }

  const isDark = theme === 'dark'

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="size-9 rounded-full"
      aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
    >
      {isDark ? (
        <Moon className="size-5 text-google-yellow" />
      ) : (
        <Sun className="size-5 text-google-yellow" />
      )}
      <span className="sr-only">{isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}</span>
    </Button>
  )
}
