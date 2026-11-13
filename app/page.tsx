import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Sparkles } from 'lucide-react'

const FORM_URL = 'https://forms.gle/56DvG7MR6ARXjSxB7'

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 size-[380px] animate-float rounded-full bg-google-blue/10 blur-3xl" />
        <div className="absolute top-1/3 -right-24 size-[420px] animate-float rounded-full bg-google-red/10 blur-3xl" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 left-1/4 size-[360px] animate-float rounded-full bg-google-yellow/10 blur-3xl" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-10 right-1/3 size-[300px] animate-float rounded-full bg-google-green/10 blur-3xl" style={{ animationDelay: '0.5s' }} />
      </div>

      <Header />

      <main className="relative z-10 flex flex-1 items-center justify-center px-6 py-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full border-2 border-foreground bg-card px-4 py-1.5 text-sm font-semibold">
              GDG Porto Alegre
            </span>
          </div>

          <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Nos vemos em <span className="text-google-blue">2027</span>! 🧉
          </h1>

          <p className="max-w-xl text-balance text-lg leading-relaxed text-muted-foreground md:text-xl">
            Já estamos preparando a próxima edição. Enquanto isso, deixa seu
            contato que você fica sabendo de tudo antes de todo mundo.
          </p>

          <div className="mt-2 flex flex-col items-center gap-3">
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-14 items-center gap-2 rounded-full border-2 border-foreground bg-google-blue px-8 py-4 text-base font-bold text-white shadow-[4px_4px_0_0_var(--foreground)] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_0_var(--foreground)]"
            >
              <Sparkles className="size-5 transition-transform duration-300 group-hover:scale-110" />
              Saiba antes de todo mundo
            </a>
            <span className="text-sm text-muted-foreground">
              Preencha o formulário rápido e a gente te avisa em primeira mão.
            </span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
