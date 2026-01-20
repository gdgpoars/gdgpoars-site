'use client'

import * as React from 'react'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// Datas dos eventos de exemplo - podem ser atualizadas
const eventDates = [
  new Date(2026, 1, 15), // Fevereiro
  new Date(2026, 2, 22), // Marco
  new Date(2026, 3, 10), // Abril
  new Date(2026, 4, 18), // Maio
]

export function EventsCalendar() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Card className="w-fit rounded-3xl border-0 shadow-lg">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Calendario</CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          modifiers={{
            event: eventDates,
          }}
          modifiersClassNames={{
            event: 'bg-google-blue/20 text-google-blue font-semibold rounded-xl',
          }}
          className="rounded-2xl border-0 bg-secondary/50 p-3"
          classNames={{
            day: "size-9 rounded-xl text-sm hover:bg-primary/10 transition-colors",
            day_selected: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl",
            day_today: "bg-accent/20 text-accent-foreground rounded-xl",
          }}
        />
        <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
          <div className="size-4 rounded-lg bg-google-blue/20" />
          <span>Dias com eventos</span>
        </div>
      </CardContent>
    </Card>
  )
}
