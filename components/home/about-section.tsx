'use client'

import { Users, Heart, BookOpen, Handshake, Rocket, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const objectives = [
  {
    icon: Users,
    text: 'Conectar pessoas em uma comunidade sólida e inclusiva',
    color: 'bg-google-blue',
    lightBg: 'bg-google-blue/10',
  },
  {
    icon: Heart,
    text: 'Apoiar a diversidade e inclusão de gêneros na tecnologia',
    color: 'bg-google-red',
    lightBg: 'bg-google-red/10',
  },
  {
    icon: BookOpen,
    text: 'Facilitar o aprendizado através da disseminação de conhecimento colaborativo',
    color: 'bg-google-yellow',
    lightBg: 'bg-google-yellow/10',
  },
  {
    icon: Handshake,
    text: 'Ser uma ponte entre empresas e pessoas, gerando networking e trocas',
    color: 'bg-google-green',
    lightBg: 'bg-google-green/10',
  },
  {
    icon: Rocket,
    text: 'Apoiar o crescimento profissional e empoderamento através da tecnologia',
    color: 'bg-google-blue',
    lightBg: 'bg-google-blue/10',
  },
]

export function AboutSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 size-[600px] rounded-full bg-google-green/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 size-[600px] rounded-full bg-google-blue/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="inline-block text-sm font-medium text-google-blue uppercase tracking-wider mb-4">
            Quem somos
          </span>
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl text-balance mb-6">
            Ei, galera! Já ouviram a palavra do{' '}
            <span className="bg-gradient-to-r from-google-blue via-google-red to-google-yellow bg-clip-text text-transparent">
              GDG Poa
            </span>{' '}
            hoje?
          </h2>
        </div>

        {/* Objectives Grid */}
        <div className="mb-20">
          <h3 className="text-center text-xl font-semibold md:text-2xl mb-10">
            Nossos objetivos enquanto comunidade
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {objectives.map((objective, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden rounded-3xl border-0 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className={`absolute inset-0 ${objective.lightBg} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                <CardContent className="relative flex items-start gap-5 p-6">
                  <div className={`shrink-0 rounded-2xl ${objective.color} p-3 text-white shadow-lg`}>
                    <objective.icon className="size-6" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {objective.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How we do it */}
        <div className="mx-auto max-w-4xl">
          <Card className="rounded-3xl border-0 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-google-blue/5 via-transparent to-google-green/5" />
            <CardContent className="relative p-8 md:p-12">
              <h3 className="text-2xl font-bold md:text-3xl mb-8 text-center">
                E como fazemos isso?
              </h3>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-google-green flex items-center justify-center text-white shadow-lg">
                      <Users className="size-5" />
                    </div>
                    <h4 className="font-semibold">Comunidade no WhatsApp</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Mais de 700 membros, com cerca de 40% de membros ativos trocando ideias (quase que o dia todo!) sobre 
                    tecnologias, vagas, cursos, e se apoiando mutuamente no dia a dia.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-google-blue flex items-center justify-center text-white shadow-lg">
                      <Rocket className="size-5" />
                    </div>
                    <h4 className="font-semibold">Eventos e Meetups</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Organizamos eventos em niversidades e empresas parceiras, trazendo 
                    talks relevantes para as necessidades da comunidade em geral.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
