'use client'

import { Calendar, MapPin, Clock, Users, ExternalLink } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import type { Event, EventType } from '@/app/types'
import { formatDateBR } from '@/app/utils/formatDate'
import { isValidURL } from '@/app/utils/validURL'

const typeConfig: Record<EventType, { label: string; color: string }> = {
  presencial: { label: 'Presencial', color: 'bg-google-blue' },
  online: { label: 'Online', color: 'bg-google-green' },
  encontrinho: { label: 'Encontrinho', color: 'bg-google-red' }
}

function EventCard({ event }: { event: Event }) {
  const config = typeConfig[event.modality];

  return (
    <Card className="group relative overflow-hidden rounded-3xl border-0 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
      <div className={`absolute top-0 left-0 right-0 h-1.5 ${config.color}`} />
      <CardContent className="p-6">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <Badge className={`${config.color} text-white rounded-xl`}>{config.label}</Badge>
          {event.investment && <Badge variant="outline" className="gap-1 rounded-xl">
            {event.investment}
          </Badge>}
        </div>
        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{event.name}</h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{event.description}</p>
        <div className="space-y-2 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-xl bg-google-blue/10 flex items-center justify-center">
              <Calendar className="size-4 text-google-blue" />
            </div>
            <span>{formatDateBR(event.date)}</span>
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
        {event.rspv && isValidURL(event.rspv) && (
          <Button asChild className="w-full rounded-xl">
            <a href={event.rspv} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="size-4" />
              Inscreva-se
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

export function EventsList({ events }: { events: Event[] }) {  
  return (
    <div className="flex-1">
      <Tabs defaultValue="todos" className="w-full">
        <TabsList className="mb-8 p-1 rounded-2xl bg-secondary">
          <TabsTrigger value="todos" className="rounded-xl data-[state=active]:bg-card data-[state=active]:shadow-sm">
            Todos
          </TabsTrigger>
          <TabsTrigger value="presencial" className="rounded-xl data-[state=active]:bg-card data-[state=active]:shadow-sm">
            Presencial
          </TabsTrigger>
          <TabsTrigger value="online" className="rounded-xl data-[state=active]:bg-card data-[state=active]:shadow-sm">
            Online
          </TabsTrigger>
          <TabsTrigger value="encontrinho" className="rounded-xl data-[state=active]:bg-card data-[state=active]:shadow-sm">
            Encontrinho
          </TabsTrigger>
        </TabsList>

        <TabsContent value="todos">
          <div className="grid gap-6 sm:grid-cols-2">
            {events.map((event) => (
              <EventCard key={event.rspv} event={event} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="presencial">
          <div className="grid gap-6 sm:grid-cols-2">
            {events
              .filter((e) => e.modality === 'presencial')
              .map((event) => (
                <EventCard key={event.rspv} event={event} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="online">
          <div className="grid gap-6 sm:grid-cols-2">
            {events
              .filter((e) => e.modality === 'online')
              .map((event) => (
                <EventCard key={event.rspv} event={event} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="encontrinho">
          <div className="grid gap-6 sm:grid-cols-2">
            {events
              .filter((e) => e.modality === 'encontrinho')
              .map((event) => (
                <EventCard key={event.rspv} event={event} />
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
