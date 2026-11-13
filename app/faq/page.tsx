import { Metadata } from 'next'
import Link from 'next/link'
import { HelpCircle, MessageCircle } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const metadata: Metadata = {
  title: 'FAQ | GDG Porto Alegre',
  description: 'Perguntas frequentes - tire suas dúvidas sobre a comunidade.',
}

const faqItems = [
  {
    question: 'O que é o GDG Porto Alegre?',
    answer: 'A sigla GDG significa Google Developer Groups, que são comunidades apoiadas pelo Google que existem no mundo inteiro. Nós somos uma delas! Uma comunidade de tecnologia independente, que reune pessoas desenvolvedoras, profissionais de tech e entusiastas em Porto Alegre, RS. Nosso objetivo e conectar pessoas, promover o aprendizado colaborativo e apoiar a diversidade na tecnologia.',
  },
  {
    question: 'Como posso participar da comunidade?',
    answer: 'Você pode participar de varias formas! Entre no nosso grupo do WhatsApp para trocar ideias com mais de 500 membros, inscreva-se na plataforma GDG para receber notificações de eventos, siga nossas redes sociais e participe dos nossos eventos presenciais e online.',
  },
  {
    question: 'Os eventos são pagos?',
    answer: 'A maioria dos nossos eventos são gratuitos! Acreditamos que o acesso ao conhecimento deve ser democrático. Alguns eventos especiais podem ter um valor simbólico para cobrir custos operacionais, mas sempre buscamos manter a acessibilidade.',
  },
  {
    question: 'Preciso ser da àrea de tecnologia para participar?',
    answer: 'Não é uma regra! Nossa comunidade é aberta para todas as pessoas interessadas em tecnologia, independente do nível de conhecimento ou área de atuação. Temos pessoas em transição de carreira, estudantes, profissionais experientes e entusiastas. O importante é ter vontade de aprender e compartilhar.',
  },
  {
    question: 'Como funciona o grupo do WhatsApp?',
    answer: 'Nosso grupo do WhatsApp é um espaço para networking, troca de conhecimento, divulgação de vagas, discussões sobre tecnologia e, claro, para criar amizades. Temos regras de convivência para manter o ambiente saudável e respeitoso para todas as pessoas.',
  },
  {
    question: 'Posso palestrar em um evento do GDG?',
    answer: 'Sim! Adoramos abrir espaço para pessoas da comunidade compartilharem conhecimento. Se você tem um tema que gostaria de apresentar, submeta neste forms: https://forms.gle/qqMA8BWXCse3wPu79. Valorizamos tanto pessoas experientes quanto quem esta começando a palestrar.',
  },
  {
    question: 'Como posso contribuir com a comunidade?',
    answer: 'Existem várias formas de contribuir: participando dos eventos, compartilhando conhecimento no grupo, palestrando, ajudando na organização de eventos, divulgando a comunidade, mentorando outras pessoas ou propondo parcerias. Toda ajuda e bem-vinda!',
  },
  {
    question: 'O GDG Porto Alegre é exclusivo para mulheres?',
    answer: 'O GDG Porto Alegre e uma comunidade mista e inclusiva para todas as pessoas. Porém, temos um forte compromisso com a diversidade e inclusão, e temos um ambiente apenas para mulheres, o GDGirls. Participe: https://chat.whatsapp.com/BXsOpUSYi6u1xqG54bMvnF',
  },
  {
    question: 'Como fico sabendo dos próximos eventos?',
    answer: 'Você pode acompanhar nossos eventos pelo site na página de Proximos Eventos, pelo grupo do WhatsApp, pelas nossas redes sociais (Instagram e LinkedIn) e também se inscrevendo na plataforma GDG Community para receber notificacoes por email.',
  },
  {
    question: 'Minha empresa pode ser parceira do GDG?',
    answer: 'Sim! Empresas podem se tornar parceiras oferecendo espaços para eventos, patrocinando atividades, disponibilizando descontos para membros ou apoiando de outras formas. Entre em contato pelo nosso email para conversarmos sobre possibilidades de parceria.',
  },
]

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-24 md:py-32 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/4 -left-1/4 size-[600px] rounded-full bg-google-green/5 blur-3xl" />
            <div className="absolute -bottom-1/4 -right-1/4 size-[600px] rounded-full bg-google-red/5 blur-3xl" />
          </div>

          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
                <HelpCircle className="size-4" />
                <span>Duvidas frequentes</span>
              </div>
              <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-6">
                Perguntas{' '}
                <span className="bg-gradient-to-r from-google-blue via-google-red to-google-yellow bg-clip-text text-transparent">
                  Frequentes
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Tire suas dúvidas sobre a comunidade GDG Porto Alegre.
              </p>
            </div>

            <div className="mx-auto max-w-3xl">
              <Card className="rounded-3xl border-0 shadow-lg overflow-hidden">
                <CardContent className="p-2 md:p-4">
                  <Accordion type="single" collapsible className="w-full">
                    {faqItems.map((item, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`item-${index}`}
                        className="border-b-0 [&:not(:last-child)]:border-b"
                      >
                        <AccordionTrigger className="text-left px-6 py-5 hover:no-underline hover:bg-secondary/50 rounded-2xl transition-colors">
                          <span className="font-medium">{item.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-5 text-muted-foreground leading-relaxed">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16 text-center">
              <Card className="inline-block rounded-3xl border-0 shadow-lg p-8">
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="size-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">Ainda tem duvidas?</p>
                    <Link href="/contato" className="text-primary hover:underline text-sm">
                      Entre em contato com a gente
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
