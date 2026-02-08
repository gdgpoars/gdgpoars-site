export type EventType = 'presencial' | 'online' | 'encontrinho'

export interface Event {
  name: string
  date: string
  time: string
  location: string
  description: string
  modality: EventType
  rspv: string
  investment: string
}

export interface Partner {
  company: string
  description: string
  discount: string
  code: string
  site: string
}