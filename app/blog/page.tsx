import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User, ArrowRight, Clock, PenLine, Sparkles } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Blog | GDG Porto Alegre',
  description: 'Artigos e textos da comunidade GDG Porto Alegre sobre tecnologia, carreira e desenvolvimento.',
}

interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
  featured?: boolean
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'como-comecar-na-programacao',
    title: 'Como comecar na programacao em 2026',
    excerpt: 'Um guia pratico para quem quer dar os primeiros passos no mundo do desenvolvimento de software. Dicas de recursos, linguagens e como a comunidade pode ajudar.',
    author: 'Maria Silva',
    date: '15 de Janeiro, 2026',
    readTime: '8 min',
    category: 'Carreira',
    featured: true,
  },
  {
    id: '2',
    slug: 'tendencias-tech-2026',
    title: 'Tendencias de tecnologia para ficar de olho em 2026',
    excerpt: 'IA generativa, computacao quantica, Web3... Quais tendencias realmente importam e como se preparar para o futuro do mercado de trabalho.',
    author: 'Joao Santos',
    date: '10 de Janeiro, 2026',
    readTime: '6 min',
    category: 'Tendencias',
  },
  {
    id: '3',
    slug: 'mulheres-na-tecnologia',
    title: 'O papel das comunidades no apoio a mulheres na tecnologia',
    excerpt: 'Reflexoes sobre como comunidades como o GDG podem contribuir para aumentar a participacao e permanencia de mulheres na area de tecnologia.',
    author: 'Ana Oliveira',
    date: '5 de Janeiro, 2026',
    readTime: '10 min',
    category: 'Diversidade',
  },
  {
    id: '4',
    slug: 'flutter-vs-react-native',
    title: 'Flutter vs React Native: qual escolher em 2026?',
    excerpt: 'Comparativo tecnico entre as duas principais frameworks de desenvolvimento mobile multiplataforma. Pros, contras e casos de uso.',
    author: 'Carlos Mendes',
    date: '28 de Dezembro, 2025',
    readTime: '12 min',
    category: 'Desenvolvimento',
  },
  {
    id: '5',
    slug: 'dicas-entrevistas-tech',
    title: 'Dicas para arrasar em entrevistas tecnicas',
    excerpt: 'Preparacao, postura e como lidar com codigo ao vivo. Experiencias de pessoas da comunidade que passaram por processos seletivos.',
    author: 'Fernanda Costa',
    date: '20 de Dezembro, 2025',
    readTime: '7 min',
    category: 'Carreira',
  },
  {
    id: '6',
    slug: 'o-que-aprendi-primeiro-ano-dev',
    title: 'O que aprendi no meu primeiro ano como pessoa desenvolvedora',
    excerpt: 'Relato pessoal de uma pessoa que fez transicao de carreira e entrou na area de tecnologia. Desafios, aprendizados e dicas.',
    author: 'Lucas Pereira',
    date: '15 de Dezembro, 2025',
    readTime: '9 min',
    category: 'Carreira',
  },
]

const featuredPost = blogPosts.find((post) => post.featured)
const regularPosts = blogPosts.filter((post) => !post.featured)

const categoryColors: Record<string, { bg: string; text: string }> = {
  'Carreira': { bg: 'bg-google-blue', text: 'text-white' },
  'Tendencias': { bg: 'bg-google-yellow', text: 'text-google-yellow-dark' },
  'Diversidade': { bg: 'bg-google-red', text: 'text-white' },
  'Desenvolvimento': { bg: 'bg-google-green', text: 'text-white' },
}

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-24 md:py-32 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/4 -right-1/4 size-[600px] rounded-full bg-google-blue/5 blur-3xl" />
            <div className="absolute -bottom-1/4 -left-1/4 size-[600px] rounded-full bg-google-red/5 blur-3xl" />
          </div>

          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
                <PenLine className="size-4" />
                <span>Conteudo da comunidade</span>
              </div>
              <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-6">
                Nosso{' '}
                <span className="bg-gradient-to-r from-google-blue via-google-red to-google-yellow bg-clip-text text-transparent">
                  Blog
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Artigos e textos de pessoas da comunidade sobre tecnologia, carreira e desenvolvimento.
              </p>
            </div>

            {/* Post em destaque */}
            {featuredPost && (
              <Card className="mb-16 overflow-hidden rounded-3xl border-0 shadow-2xl">
                <div className="grid md:grid-cols-2">
                  <div className="relative aspect-video md:aspect-auto overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-google-blue via-google-red to-google-yellow opacity-90" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <span className="text-6xl font-bold">GDG</span>
                        <p className="mt-2 text-sm opacity-80">Porto Alegre</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col p-8 md:p-10">
                    <div className="flex items-center gap-3">
                      <Badge className={`${categoryColors[featuredPost.category]?.bg} ${categoryColors[featuredPost.category]?.text} rounded-xl`}>
                        {featuredPost.category}
                      </Badge>
                      <Badge variant="outline" className="rounded-xl">Destaque</Badge>
                    </div>
                    <h2 className="mt-6 text-2xl font-bold leading-tight">{featuredPost.title}</h2>
                    <p className="mt-4 flex-1 text-muted-foreground leading-relaxed">{featuredPost.excerpt}</p>
                    <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="size-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="size-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="size-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <Button asChild className="mt-8 w-fit rounded-xl" size="lg">
                      <Link href={`/blog/${featuredPost.slug}`}>
                        Ler artigo
                        <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            )}

            {/* Grid de posts */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {regularPosts.map((post) => (
                <Card key={post.id} className="group relative overflow-hidden rounded-3xl border-0 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                  <CardContent className="p-8">
                    <Badge className={`${categoryColors[post.category]?.bg} ${categoryColors[post.category]?.text} rounded-xl`}>
                      {post.category}
                    </Badge>
                    <h3 className="mt-5 text-lg font-bold line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground line-clamp-3 leading-relaxed">{post.excerpt}</p>
                    <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="size-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="size-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Button asChild variant="link" className="mt-4 h-auto p-0 text-primary">
                      <Link href={`/blog/${post.slug}`}>
                        Ler mais
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA para contribuir */}
            <Card className="mt-16 rounded-3xl border-0 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-google-blue/5 via-transparent to-google-green/5" />
              <CardContent className="relative p-12 text-center">
                <div className="inline-flex items-center justify-center size-16 rounded-2xl bg-google-yellow/10 mb-6">
                  <Sparkles className="size-8 text-google-yellow" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Quer escrever para o blog?</h3>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                  Se voce e membro da comunidade e quer compartilhar conhecimento, 
                  experiencias ou dicas, entre em contato!
                </p>
                <Button asChild size="lg" className="rounded-xl">
                  <Link href="/contato">Quero contribuir</Link>
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
