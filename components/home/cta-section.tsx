'use client'

import { MessageCircle, UserPlus, Instagram, Linkedin, ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const socialLinks = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    description: 'Junte-se ao grupo',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLScnIY1LIADYyteuSA_8PVJMBHrlv4A0WfoM_xPRVsXBSEQEOA/viewform',
    gradient: 'from-google-green to-google-green-dark',
    hoverGlow: 'group-hover:shadow-google-green/40',
  },
  {
    icon: UserPlus,
    label: 'GDG Community',
    description: 'Cadastre-se',
    href: 'https://gdg.community.dev/gdg-porto-alegre/',
    gradient: 'from-google-blue to-google-blue-dark',
    hoverGlow: 'group-hover:shadow-google-blue/40',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    description: 'Siga a gente',
    href: 'https://www.instagram.com/gdgpoa/',
    gradient: 'from-google-red to-google-red-dark',
    hoverGlow: 'group-hover:shadow-google-red/40',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    description: 'Conecte-se',
    href: 'https://www.linkedin.com/company/gdg-porto-alegre/',
    gradient: 'from-google-blue to-google-blue-dark',
    hoverGlow: 'group-hover:shadow-google-blue/40',
  },
]

export function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[1000px] rounded-full bg-gradient-to-r from-google-blue/10 via-google-red/10 to-google-yellow/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
            <Sparkles className="size-4" />
            <span>Faça parte</span>
          </div>
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-6">
            Junte-se a nós!
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Faça parte da nossa comunidade e conecte-se com pessoas incríveis da área de tecnologia.
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex flex-col items-center gap-4 rounded-3xl bg-card p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${link.hoverGlow}`}
            >
              <div className={`rounded-2xl bg-gradient-to-br ${link.gradient} p-4 text-white shadow-lg transition-transform duration-500 group-hover:scale-110`}>
                <link.icon className="size-7" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-foreground">{link.label}</h3>
                <p className="text-sm text-muted-foreground mt-1">{link.description}</p>
              </div>
              <ArrowRight className="size-5 text-muted-foreground transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
