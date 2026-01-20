import { Metadata } from 'next'
import { Calendar, Sparkles } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { EventsCalendar } from '@/components/eventos/events-calendar'
import { EventsList } from '@/components/eventos/events-list'

export const metadata: Metadata = {
  title: 'Proximos Eventos | GDG Porto Alegre',
  description: 'Confira a agenda de eventos do GDG Porto Alegre - meetups, workshops, encontros e muito mais.',
}

export default function ProximosEventosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-24 md:py-32 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/4 -right-1/4 size-[600px] rounded-full bg-google-blue/5 blur-3xl" />
            <div className="absolute -bottom-1/4 -left-1/4 size-[600px] rounded-full bg-google-green/5 blur-3xl" />
          </div>

          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
                <Calendar className="size-4" />
                <span>Agenda de eventos</span>
              </div>
              <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-6">
                Proximos{' '}
                <span className="bg-gradient-to-r from-google-blue via-google-red to-google-yellow bg-clip-text text-transparent">
                  Eventos
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Acompanhe nossa agenda e participe dos eventos da comunidade!
              </p>
            </div>
            
            <div className="grid gap-8 lg:grid-cols-[1fr_auto]">
              <EventsList />
              <EventsCalendar />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
