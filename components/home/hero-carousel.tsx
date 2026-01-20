'use client'

import * as React from 'react'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronDown, Sparkles } from 'lucide-react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const eventImages = [
  {
    src: '/images/events/evento-1.jpg',
    alt: 'Meetup da comunidade GDG Porto Alegre com pessoas desenvolvedoras networking',
  },
  {
    src: '/images/events/evento-2.jpg',
    alt: 'Palestra de tecnologia em evento do GDG Porto Alegre',
  },
  {
    src: '/images/events/evento-3.jpg',
    alt: 'Workshop de programacao com membros da comunidade',
  },
]

export function HeroCarousel() {
  const plugin = React.useRef(Autoplay({ delay: 5000, stopOnInteraction: true }))

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 size-[800px] rounded-full bg-google-blue/10 blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-1/2 -right-1/4 size-[800px] rounded-full bg-google-red/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/4 right-1/4 size-[400px] rounded-full bg-google-yellow/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container relative mx-auto px-4 pt-32 pb-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center min-h-[calc(100vh-200px)]">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="size-4" />
              <span>Comunidade de Tecnologia</span>
            </div>
            
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl xl:text-7xl text-balance">
              <span className="bg-gradient-to-r from-google-blue via-google-red to-google-yellow bg-clip-text text-transparent animate-gradient">
                GDG
              </span>
              <br />
              <span className="text-foreground">Porto Alegre</span>
            </h1>
            
            <p className="text-lg text-muted-foreground md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Conectando pessoas desenvolvedoras, profissionais de tech e entusiastas 
              em uma comunidade inclusiva e colaborativa.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <div className="flex items-center gap-2 rounded-2xl bg-card px-4 py-2 shadow-lg glass-border">
                <span className="text-2xl font-bold text-google-blue">500+</span>
                <span className="text-sm text-muted-foreground">Membros ativos</span>
              </div>
              <div className="flex items-center gap-2 rounded-2xl bg-card px-4 py-2 shadow-lg glass-border">
                <span className="text-2xl font-bold text-google-green">50+</span>
                <span className="text-sm text-muted-foreground">Eventos realizados</span>
              </div>
            </div>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-google-blue/20 via-google-red/20 to-google-yellow/20 blur-2xl opacity-50" />
            <Carousel
              plugins={[plugin.current]}
              className="relative w-full"
              opts={{
                align: 'start',
                loop: true,
              }}
            >
              <CarouselContent>
                {eventImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 size-12 rounded-2xl glass glass-border" />
              <CarouselNext className="right-4 size-12 rounded-2xl glass glass-border" />
            </Carousel>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="size-8 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
