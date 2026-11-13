'use client'

import * as React from 'react'
import { ChevronLeft, ChevronRight, Mic, Users, Calendar, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const slides = [
  {
    src: '/images/palestras/devfest-kobeapps.jpg',
    alt: 'Palestra sobre Observabilidade & IA Preditiva',
    caption: 'Observabilidade & IA Preditiva',
  },
  {
    src: '/images/palestras/devfest-ilegra.jpg',
    alt: 'Palestra sobre Transição de Carreira & Requalificação Profissional',
    caption: 'Transição de Carreira & Requalificação Profissional',
  },
  {
    src: '/images/palestras/devfest-ulisses.jpg',
    alt: 'Palestra sobre Inteligência Artificial - Expectativa vs. Realidade',
    caption: 'Inteligência Artificial - Expectativa vs. Realidade',
  },
  {
    src: '/images/palestras/devfest-gabriela.jpg',
    alt: 'Palestra sobre carreira',
    caption: 'Inovação & Autossuperação',
  },
]

const stats = [
  { icon: Mic, label: 'Pessoas palestrantes cadastradas', value: '15+' },
  { icon: Calendar, label: 'Eventos realizados', value: '30+' },
  { icon: Users, label: 'Participantes impactados', value: '2k+' },
]

export default function BancoDePalestrasPage() {
  const [current, setCurrent] = React.useState(0)
  const [isAnimating, setIsAnimating] = React.useState(false)

  const goTo = (index: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrent(index)
      setIsAnimating(false)
    }, 300)
  }

  const prev = () => goTo((current - 1 + slides.length) % slides.length)
  const next = () => goTo((current + 1) % slides.length)

  React.useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [current])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <section className="container mx-auto px-6 mb-16">
          <div className="flex flex-col items-center text-center gap-4 mb-12">
            <div className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <Mic className="size-4" />
              Banco de Palestras
            </div>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Faça parte do nosso{' '}
              <span className="text-google-blue">banco de palestras</span>
            </h1>
            <p className="max-w-xl text-muted-foreground text-lg">
              Uma base diversa de profissionais prontos para compartilhar conhecimento nos eventos do GDG Porto Alegre.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-16">
            {stats.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 rounded-2xl border border-border/60 bg-card p-6 text-center shadow-sm"
              >
                <Icon className="size-6 text-google-blue" />
                <span className="text-2xl font-bold">{value}</span>
                <span className="text-xs text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>

          {/* Main content: Carousel + Text */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-center">

            {/* Carousel */}
            <div className="relative flex flex-col gap-4">
              <div className="relative overflow-hidden rounded-3xl aspect-[3/4] bg-secondary shadow-xl">
                {slides.map((slide, i) => (
                  <div
                    key={i}
                    className={cn(
                      'absolute inset-0 transition-all duration-500',
                      i === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                    )}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-google-blue/30 via-google-red/20 to-google-yellow/30" />
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none'
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <span className="text-white font-medium text-lg">{slide.caption}</span>
                    </div>
                  </div>
                ))}

                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition hover:bg-black/50"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition hover:bg-black/50"
                  aria-label="Próximo"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={cn(
                      'h-2 rounded-full transition-all duration-300',
                      i === current ? 'w-6 bg-google-blue' : 'w-2 bg-border hover:bg-muted-foreground'
                    )}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Text content */}
            <div className="flex flex-col gap-6">
              <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-4">Nossa base de palestrantes</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    O GDG Porto Alegre mantém um banco ativo de palestras e pessoas palestrantes — profissionais e entusiastas da tecnologia que se inscreveram para contribuir com conhecimento nos nossos eventos.
                  </p>
                  <p>
                    Quando organizamos um evento, consultamos esse banco para encontrar palestras alinhadas com o tema e formato planejados.
                  </p>
                  <div className="rounded-2xl border border-google-yellow/30 bg-google-yellow/5 p-4 text-sm">
                    <p className="font-semibold text-foreground mb-1">⚠️ Atenção</p>
                    <p>
                      O preenchimento do formulário <strong>não representa aceitação imediata</strong>. Sua palestra entrará para o banco e será <strong>cotada para eventos futuros</strong> conforme a temática e disponibilidade.
                    </p>
                  </div>
                  <p>
                    Buscamos diversidade de temas, perspectivas e perfis. Se você tem algo a compartilhar com a comunidade tech de Porto Alegre, queremos te conhecer!
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-sm font-medium text-muted-foreground text-center">
                  Quer fazer parte do nosso banco de palestras?
                </p>
                <Button
                  asChild
                  size="lg"
                  className="rounded-2xl gap-2 text-base font-semibold"
                >
                  <a href="https://forms.gle/SF5MwfUkAoYJrbWYA" target="_blank" rel="noopener noreferrer">
                    <Mic className="size-5" />
                    Quero palestrar
                    <ExternalLink className="size-4 opacity-70" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}