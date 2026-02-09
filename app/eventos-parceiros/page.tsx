import { Metadata } from 'next'
import { ExternalLink, MessageCircle, Tag, Users, MapPin, CalendarDays } from 'lucide-react'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Eventos Parceiros | GDG Porto Alegre',
  description: 'Eventos de tecnologia parceiros do GDG Porto Alegre - descontos exclusivos para membros da comunidade e uma galera indo viajar junto!',
}

interface PartnerEvent {
  id: string
  name: string
  description: string
  date: string
  location: string
  websiteUrl: string
  whatsappGroupUrl: string
  couponCode?: string
  discount?: string
  logoPlaceholder: string
  color: string
}

const partnerEvents: PartnerEvent[] = [
  {
    id: '1',
    name: 'Codecon Summit 2026',
    description: 'A Codecon Summit é um festival que reunirá inovação, tecnologia, código e diversão. O evento conta com conteúdos direcionados à carreira de pessoas desenvolvedoras, tanto para quem está começando na área, quanto para quem já está no mercado ou com a carreira estabilizada.',
    date: '14 e 15 de Agosto, 2026',
    location: 'Pinhais, PR',
    websiteUrl: 'https://eventos.codecon.dev/eventos/codecon-summit-26',
    whatsappGroupUrl: 'https://chat.whatsapp.com/Dxof5hXSj6BETatKKHHrUp?mode=gi_t',
    couponCode: 'Em breve',
    discount: 'Em breve',
    logoPlaceholder: 'CC',
    color: 'bg-google-blue',
  },
  {
    id: '2',
    name: 'Front in Floripa 2026',
    description: 'O Front In Floripa 2026 é um encontro único onde mais da metade do tempo é dedicado à interação, conexão e experiências reais — com conteúdo curado sobre front-end, web, design e IA, tudo em um ambiente comunitário, descontraído e sempre sold out.',
    date: '28 de Novembro, 2026',
    location: 'Florianopolis, SC',
    websiteUrl: 'https://frontinfloripa.com.br',
    whatsappGroupUrl: 'https://chat.whatsapp.com/KMBZvILATOK7vTUXEy6XNl?mode=gi_t',
    couponCode: 'Em breve',
    discount: 'Em breve',
    logoPlaceholder: 'FF',
    color: 'bg-google-red',
  },
]

export default function EventosParceirosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-24 md:py-32 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/4 -left-1/4 size-[600px] rounded-full bg-google-red/5 blur-3xl" />
            <div className="absolute -bottom-1/4 -right-1/4 size-[600px] rounded-full bg-google-yellow/5 blur-3xl" />
          </div>

          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
                <Users className="size-4" />
                <span>Vamos juntos</span>
              </div>
              <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-6">
                Eventos{' '}
                <span className="bg-gradient-to-r from-google-blue via-google-red to-google-yellow bg-clip-text text-transparent">
                  Parceiros
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Confira os eventos de tecnologia que a comunidade vai participar junta! 
                Organizamos caravanas e temos cupons exclusivos.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {partnerEvents.map((event) => (
                <Card key={event.id} className="group relative overflow-hidden rounded-3xl border-0 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                  <div className={`absolute top-0 left-0 right-0 h-2 ${event.color}`} />
                  <CardContent className="p-8">
                    <div className={`mb-6 flex size-16 items-center justify-center rounded-2xl ${event.color} text-xl font-bold text-white shadow-lg`}>
                      {event.logoPlaceholder}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">{event.name}</h3>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{event.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <CalendarDays className="size-4 shrink-0" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <MapPin className="size-4 shrink-0" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    {event.couponCode && (
                      <div className="mb-6 rounded-2xl border border-dashed border-google-green/50 bg-google-green/10 p-4">
                        <div className="flex items-center gap-2 text-google-green dark:text-google-green-light">
                          <Tag className="size-4" />
                          <span className="text-sm font-semibold">{event.discount}</span>
                        </div>
                        <p className="mt-2 font-mono text-sm">
                          Cupom: <strong>{event.couponCode}</strong>
                        </p>
                      </div>
                    )}

                    <div className="flex flex-col gap-3">
                      <Button asChild variant="outline" className="rounded-xl bg-transparent">
                        <a href={event.whatsappGroupUrl} target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="size-4" />
                          Grupo de organizacao
                        </a>
                      </Button>
                      <Button asChild className="rounded-xl">
                        <a href={event.websiteUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="size-4" />
                          Site do evento
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Card className="inline-block rounded-3xl border-0 shadow-lg p-8">
                <p className="text-muted-foreground">
                  Quer sugerir um evento parceiro ou organizar uma caravana?{' '}
                  <Link href="/contato" className="text-primary font-medium hover:underline">
                    Entre em contato
                  </Link>
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
