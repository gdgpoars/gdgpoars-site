import { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLink, Tag, Sparkles, Handshake } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Parcerias | GDG Porto Alegre',
  description: 'Empresas e marcas parceiras do GDG Porto Alegre - descontos e beneficios exclusivos para membros.',
}

interface Partner {
  id: string
  name: string
  description: string
  websiteUrl: string
  couponCode?: string
  discount?: string
  logoPlaceholder: string
  category: string
  color: string
}

const partners: Partner[] = [
  {
    id: '1',
    name: 'Alura',
    description: 'Plataforma de cursos online de tecnologia. Parceria para membros da comunidade com desconto em assinaturas.',
    websiteUrl: 'https://alura.com.br',
    couponCode: 'GDGPOA10',
    discount: '10% de desconto',
    logoPlaceholder: 'AL',
    category: 'Educacao',
    color: 'bg-google-blue',
  },
  {
    id: '2',
    name: 'JetBrains',
    description: 'Ferramentas de desenvolvimento como IntelliJ IDEA, PyCharm e WebStorm. Licencas gratuitas para organizadoras.',
    websiteUrl: 'https://jetbrains.com',
    logoPlaceholder: 'JB',
    category: 'Ferramentas',
    color: 'bg-google-red',
  },
  {
    id: '3',
    name: 'Casa do Codigo',
    description: 'Editora de livros de tecnologia. Desconto especial em todos os livros para membros da comunidade.',
    websiteUrl: 'https://casadocodigo.com.br',
    couponCode: 'GDGPOA15',
    discount: '15% de desconto',
    logoPlaceholder: 'CDC',
    category: 'Educacao',
    color: 'bg-google-green',
  },
  {
    id: '4',
    name: 'Coworking XYZ',
    description: 'Espaco de coworking parceiro para realizacao de nossos meetups e workshops presenciais.',
    websiteUrl: '#',
    logoPlaceholder: 'CW',
    category: 'Espaco',
    color: 'bg-google-yellow',
  },
]

const categories = [...new Set(partners.map((p) => p.category))]

export default function ParceriasPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-24 md:py-32 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/4 -right-1/4 size-[600px] rounded-full bg-google-yellow/5 blur-3xl" />
            <div className="absolute -bottom-1/4 -left-1/4 size-[600px] rounded-full bg-google-blue/5 blur-3xl" />
          </div>

          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
                <Handshake className="size-4" />
                <span>Quem nos apoia</span>
              </div>
              <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-6">
                Nossas{' '}
                <span className="bg-gradient-to-r from-google-blue via-google-red to-google-yellow bg-clip-text text-transparent">
                  Parcerias
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Empresas e marcas que apoiam a comunidade GDG Porto Alegre e oferecem 
                beneficios exclusivos para nossos membros.
              </p>
            </div>

            {categories.map((category) => (
              <div key={category} className="mb-12">
                <h2 className="mb-8 text-xl font-semibold inline-flex items-center gap-3">
                  <span className="size-2 rounded-full bg-primary" />
                  {category}
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {partners
                    .filter((p) => p.category === category)
                    .map((partner) => (
                      <Card key={partner.id} className="group relative overflow-hidden rounded-3xl border-0 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                        <CardContent className="p-8">
                          <div className={`mb-6 flex size-14 items-center justify-center rounded-2xl ${partner.color} text-lg font-bold text-white shadow-lg transition-transform duration-500 group-hover:scale-110`}>
                            {partner.logoPlaceholder}
                          </div>
                          
                          <h3 className="text-lg font-bold mb-2">{partner.name}</h3>
                          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{partner.description}</p>

                          {partner.couponCode && (
                            <div className="mb-6 rounded-2xl border border-dashed border-google-yellow/50 bg-google-yellow/10 p-4">
                              <div className="flex items-center gap-2 text-google-yellow-dark dark:text-google-yellow">
                                <Tag className="size-4" />
                                <span className="text-sm font-semibold">{partner.discount}</span>
                              </div>
                              <p className="mt-2 font-mono text-sm">
                                Cupom: <strong>{partner.couponCode}</strong>
                              </p>
                            </div>
                          )}

                          <Button asChild variant="outline" className="w-full rounded-xl bg-transparent">
                            <a href={partner.websiteUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="size-4" />
                              Visitar site
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>
            ))}

            <Card className="rounded-3xl border-0 shadow-2xl overflow-hidden mt-16">
              <div className="absolute inset-0 bg-gradient-to-br from-google-blue/5 via-transparent to-google-yellow/5" />
              <CardContent className="relative p-12 text-center">
                <div className="inline-flex items-center justify-center size-16 rounded-2xl bg-google-yellow/10 mb-6">
                  <Sparkles className="size-8 text-google-yellow" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Quer ser parceiro do GDG Porto Alegre?</h3>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                  Se sua empresa quer apoiar a comunidade de tecnologia de Porto Alegre, 
                  entre em contato conosco!
                </p>
                <Button asChild size="lg" className="rounded-xl">
                  <Link href="/contato">Fale conosco</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
