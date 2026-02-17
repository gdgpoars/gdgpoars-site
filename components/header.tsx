'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Sparkles } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { ThemeToggle } from '@/components/theme-toggle'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/proximos-eventos', label: 'Próximos Eventos' },
  { href: '/para-mulheres', label: 'Para Mulheres' },
  { href: '/eventos-parceiros', label: 'Eventos Parceiros' },
  { href: '/parcerias', label: 'Parcerias' },
  { href: '/banco-de-palestras', label: 'Banco de Palestras' },
  { href: '/faq', label: 'FAQ' },
  // { href: '/blog', label: 'Blog' },
  { href: '/contato', label: 'Contato' },
  { href: '/dev-fest-poa-25', label: 'DevFestPOA25' },
]

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled 
          ? "glass glass-border shadow-lg mx-4 mt-4 rounded-2xl" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative flex items-center gap-0.5">
            <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-google-blue/20 via-google-red/20 to-google-yellow/20 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />
            <span className="relative text-2xl font-bold text-google-blue transition-transform duration-300 group-hover:scale-110">G</span>
            <span className="relative text-2xl font-bold text-google-red transition-transform duration-300 group-hover:scale-110" style={{ transitionDelay: '50ms' }}>D</span>
            <span className="relative text-2xl font-bold text-google-yellow transition-transform duration-300 group-hover:scale-110" style={{ transitionDelay: '100ms' }}>G</span>
          </div>
          <span className="text-lg font-medium text-foreground">Porto Alegre</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl',
                pathname === item.href
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary/80'
              )}
            >
              {pathname === item.href && (
                <span className="absolute inset-0 rounded-xl bg-primary/10" />
              )}
              <span className="relative">{item.label}</span>
            </Link>
          ))}
          <div className="ml-2 flex items-center gap-2">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-xl">
                <Menu className="size-5" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 rounded-l-3xl">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <span className="text-google-blue">G</span>
                  <span className="text-google-red">D</span>
                  <span className="text-google-yellow">G</span>
                  <span className="ml-1">Porto Alegre</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300',
                      pathname === item.href
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
