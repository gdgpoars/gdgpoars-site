'use client'

import * as React from 'react'
import { Calendar, MapPin, Clock, Users, Video, ExternalLink, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

type EventType = 'meetup' | 'workshop' | 'online' | 'resenha'

interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  type: EventType
  description: string
  registrationUrl?: string
  isOnline?: boolean
}

const events: Event[] = [
  {
    id: '1',
    title: 'Meetup: IA Generativa na Pratica',
    date: '15 de Fevereiro, 2026',
    time: '19:00 - 21:00',
    location: 'PUCRS - Predio 32',
    type: 'meetup',
    description: 'Vamos explorar juntos as aplicacoes praticas de IA generativa no dia a dia de pessoas desenvolvedoras.',
    registrationUrl: '#',
  },
  {
    id: '2',
    title: 'Workshop: Flutter para Iniciantes',
    date: '22 de Marco, 2026',
    time: '14:00 - 18:00',
    location: 'ThoughtWorks Porto Alegre',
    type: 'workshop',
    description: 'Oficina hands-on para pessoas que querem comecar no desenvolvimento mobile com Flutter.',
    registrationUrl: '#',
  },
  {
    id: '3',
    title: 'GDG Online: Carreira em Tech',
    date: '10 de Abril, 2026',
    time: '20:00 - 21:30',
    location: 'YouTube GDG Porto Alegre',
    type: 'online',
    description: 'Bate-papo sobre transicao de carreira e oportunidades na area de tecnologia.',
    registrationUrl: '#',
    isOnline: true,
  },
  {
    id: '4',
    title: 'Resenha: Happy Hour da Comunidade',
    date: '18 de Maio, 2026',
    time: '19:00',
    location: 'Dado Bier - Moinhos',
    type: 'resenha',
    description: 'Momento para networking descontraido e troca de experiencias entre membros da comunidade.',
    registrationUrl: '#',
  },
]

const typeConfig: Record<EventType, { label: string; color: string }> = {
  meetup: { label: 'Meetup', color: 'bg-google-blue' },
  workshop: { label: 'Workshop', color: 'bg-google-green' },
  online: { label: 'Online', color: 'bg-google-red' },
  resenha: { label: 'Resenha', color: 'bg-google-yellow' },
}

function EventCard({ event }: { event: Event }) {
  const config = typeConfig[event.type]

  return (
    <Card className="group relative overflow-hidden rounded-3xl border-0 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
      <div className={`absolute top-0 left-0 right-0 h-1.5 ${config.color}`} />
      <CardContent className="p-6">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <Badge className={`${config.color} text-white rounded-xl`}>{config.label}</Badge>
          {event.isOnline && (
            <Badge variant="outline" className="gap-1 rounded-xl">
              <Video className="size-3" />
              Online
            </Badge>
          )}
        </div>
        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{event.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{event.description}</p>
        <div className="space-y-2 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-xl bg-google-blue/10 flex items-center justify-center">
              <Calendar className="size-4 text-google-blue" />
            </div>
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-xl bg-google-yellow/10 flex items-center justify-center">
              <Clock className="size-4 text-google-yellow-dark dark:text-google-yellow" />
            </div>
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-xl bg-google-red/10 flex items-center justify-center">
              <MapPin className="size-4 text-google-red" />
            </div>
            <span>{event.location}</span>
          </div>
        </div>
        {event.registrationUrl && (
          <Button asChild className="w-full rounded-xl">
            <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="size-4" />
              Inscreva-se
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

export function EventsList() {
  return (
    <div className="flex-1">
      <Tabs defaultValue="todos" className="w-full">
        <TabsList className="mb-8 p-1 rounded-2xl bg-secondary">
          <TabsTrigger value="todos" className="rounded-xl data-[state=active]:bg-card data-[state=active]:shadow-sm">
            Todos
          </TabsTrigger>
          <TabsTrigger value="meetup" className="rounded-xl data-[state=active]:bg-card data-[state=active]:shadow-sm">
            Meetups
          </TabsTrigger>
          <TabsTrigger value="workshop" className="rounded-xl data-[state=active]:bg-card data-[state=active]:shadow-sm">
            Workshops
          </TabsTrigger>
          <TabsTrigger value="online" className="rounded-xl data-[state=active]:bg-card data-[state=active]:shadow-sm">
            Online
          </TabsTrigger>
        </TabsList>

        <TabsContent value="todos">
          <div className="grid gap-6 sm:grid-cols-2">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="meetup">
          <div className="grid gap-6 sm:grid-cols-2">
            {events
              .filter((e) => e.type === 'meetup')
              .map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="workshop">
          <div className="grid gap-6 sm:grid-cols-2">
            {events
              .filter((e) => e.type === 'workshop')
              .map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="online">
          <div className="grid gap-6 sm:grid-cols-2">
            {events
              .filter((e) => e.type === 'online')
              .map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
          </div>
        </TabsContent>
      </Tabs>

      {events.length === 0 && (
        <Card className="rounded-3xl border-0 shadow-lg">
          <CardContent className="flex flex-col items-center justify-center py-16 text-center">
            <div className="size-16 rounded-2xl bg-secondary flex items-center justify-center mb-4">
              <Users className="size-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium">Nenhum evento agendado</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Fique de olho! Em breve teremos novidades.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
