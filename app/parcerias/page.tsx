import { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLink, Tag, Sparkles, Handshake } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Partner } from '../types'
import { isValidURL } from '../utils/validURL'

export const metadata: Metadata = {
  title: 'Parcerias | GDG Porto Alegre',
  description: 'Empresas e marcas parceiras do GDG Porto Alegre - descontos e benefícios exclusivos para membros.',
}

const SHEET_URL = 'https://docs.google.com/spreadsheets/d/1uk8a3mEJ-ydwNvC48QLKEPK5aLjxG66zUFi9bUaNjnE/export?format=csv&gid=0';

async function getPartners(): Promise<Partner[]> {
  const response = await fetch(SHEET_URL);
  const csv = await response.text();

  const lines = csv.split('\n').slice(1);

  return lines.map(line => {
    const [company, description, discount, code, site] = line.split(',');
    return { company, description, discount, code, site };
  }) as Partner[];
}

export default async function ParceriasPage() {
  const partners = await getPartners();

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

            <div className="mb-12">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {partners.map((partner) => (
                  <Card key={partner.company} className="group relative overflow-hidden rounded-3xl border-0 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                    <CardContent className="p-8">
                      {/* <div className={`mb-6 flex size-14 items-center justify-center rounded-2xl text-lg font-bold text-white shadow-lg transition-transform duration-500 group-hover:scale-110`}>
                          {partner.company}
                        </div> */}

                      <h3 className="text-lg font-bold mb-2">{partner.company}</h3>
                      <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{partner.description}</p>

                      {partner.code && (
                        <div className="mb-6 rounded-2xl border border-dashed border-google-yellow/50 bg-google-yellow/10 p-4">
                          <div className="flex items-center gap-2 text-google-yellow-dark dark:text-google-yellow">
                            <Tag className="size-4" />
                            <span className="text-sm font-semibold">{partner.discount}% de desconto</span>
                          </div>
                          <p className="mt-2 font-mono text-sm">
                            Cupom: <strong>{partner.code}</strong>
                          </p>
                        </div>
                      )}

                      {partner.site && isValidURL(partner.site) && (
                        <Button asChild className="w-full rounded-xl">
                          <a href={partner.site} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="size-4" />
                            Inscreva-se
                          </a>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="rounded-3xl border-0 shadow-2xl overflow-hidden mt-16">
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
