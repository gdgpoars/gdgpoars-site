import Link from 'next/link'

export function Header() {
  return (
    <header className="relative z-10">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative flex items-center gap-0.5">
            <span className="relative text-2xl font-bold text-google-blue transition-transform duration-300 group-hover:scale-110">G</span>
            <span className="relative text-2xl font-bold text-google-red transition-transform duration-300 group-hover:scale-110" style={{ transitionDelay: '50ms' }}>D</span>
            <span className="relative text-2xl font-bold text-google-yellow transition-transform duration-300 group-hover:scale-110" style={{ transitionDelay: '100ms' }}>G</span>
          </div>
          <span className="text-lg font-medium text-foreground">Porto Alegre</span>
        </Link>

        <span className="inline-flex items-center rounded-full border-2 border-foreground bg-card px-4 py-2 text-sm font-bold">
          Até 2027 🧉
        </span>
      </div>
    </header>
  )
}
