import { Metadata } from 'next'
import { Mail, Instagram, Linkedin, MessageCircle, MapPin, Send, ArrowRight } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Contato | GDG Porto Alegre',
  description: 'Entre em contato com o GDG Porto Alegre - estamos sempre disponiveis para conversar.',
}

const contactMethods = [
  {
    icon: Instagram,
    title: 'Instagram',
    description: 'Siga para novidades e conteudos',
    value: '@gdgportoalegre',
    href: 'https://www.instagram.com/gdgportoalegre/',
    color: 'bg-google-red',
    hoverGlow: 'group-hover:shadow-google-red/40',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    description: 'Conecte-se profissionalmente',
    value: 'GDG Porto Alegre',
    href: 'https://www.linkedin.com/company/gdg-porto-alegre/',
    color: 'bg-google-blue',
    hoverGlow: 'group-hover:shadow-google-blue/40',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Entre no grupo da comunidade',
    value: 'Grupo GDG Poa',
    href: 'https://chat.whatsapp.com/XXXXXX',
    color: 'bg-google-green',
    hoverGlow: 'group-hover:shadow-google-green/40',
  },
]

export default function ContatoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-24 md:py-32 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/4 -left-1/4 size-[600px] rounded-full bg-google-blue/5 blur-3xl" />
            <div className="absolute -bottom-1/4 -right-1/4 size-[600px] rounded-full bg-google-green/5 blur-3xl" />
          </div>

          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
                <Send className="size-4" />
                <span>Fale com a gente</span>
              </div>
              <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-6">
                Entre em{' '}
                <span className="bg-gradient-to-r from-google-blue via-google-red to-google-yellow bg-clip-text text-transparent">
                  Contato
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Quer falar com a gente? Estamos sempre disponiveis para conversar sobre 
                parcerias, eventos, duvidas ou apenas trocar uma ideia.
              </p>
            </div>

            <div className="mx-auto max-w-3xl">
              {/* Card principal de email */}
              <Card className="mb-12 overflow-hidden rounded-3xl border-0 shadow-2xl">
                <div className="h-2 bg-gradient-to-r from-google-blue via-google-red via-google-yellow to-google-green" />
                <CardContent className="p-10 text-center">
                  <div className="mx-auto flex size-20 items-center justify-center rounded-3xl bg-primary/10 mb-6">
                    <Mail className="size-10 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Entre em contato por email</h2>
                  <p className="text-muted-foreground mb-8">
                    Essa e a melhor forma de falar conosco sobre assuntos mais detalhados
                  </p>
                  <p className="text-3xl font-bold text-primary mb-8">gdgpoars@gmail.com</p>
                  <Button asChild size="lg" className="rounded-xl">
                    <a href="mailto:gdgpoars@gmail.com">
                      <Mail className="size-5" />
                      Enviar email
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Outros canais */}
              <h2 className="mb-8 text-xl font-semibold text-center">Outros canais</h2>
              <div className="grid gap-6 sm:grid-cols-3">
                {contactMethods.map((method) => (
                  <a
                    key={method.title}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative flex flex-col items-center gap-4 rounded-3xl bg-card p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${method.hoverGlow}`}
                  >
                    <div className={`rounded-2xl ${method.color} p-4 text-white shadow-lg transition-transform duration-500 group-hover:scale-110`}>
                      <method.icon className="size-7" />
                    </div>
                    <div className="text-center">
                      <h3 className="font-semibold text-foreground">{method.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{method.description}</p>
                    </div>
                    <ArrowRight className="size-5 text-muted-foreground transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1" />
                  </a>
                ))}
              </div>

              {/* Localizacao */}
              <Card className="mt-12 rounded-3xl border-0 shadow-lg overflow-hidden">
                <CardContent className="flex items-center gap-6 p-8">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-google-yellow text-white shadow-lg">
                    <MapPin className="size-7" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Localizacao</h3>
                    <p className="text-muted-foreground">Porto Alegre, Rio Grande do Sul, Brasil</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
