'use client'

import Link from 'next/link'
import { ArrowLeft, TrendingDown, TrendingUp, Minus } from 'lucide-react'

const receitas = [
  { label: '5 Cotas Master', valor: 15000 },
  { label: '2 Cotas Parceria', valor: 2400 },
  { label: '4 Cotas Colaborador', valor: 2400 },
]

const despesas = [
  { categoria: 'Infraestrutura & Estrutura Física', valor: 7681.60, itens: 'Backdrop, totens, banners, cabine fotográfica, puffs, equipamentos, segurança' },
  { categoria: 'Brindes, Kits & Experiência', valor: 6187.50, itens: 'Brindes, gincana, livros, sorteios, copos personalizados, sacolas' },
  { categoria: 'Alimentação & Staff', valor: 4560.00, itens: 'Almoço staff, coffee breaks, água, refrigerantes, vouchers' },
  { categoria: 'Identificação & Materiais Gráficos', valor: 2262.64, itens: 'Credenciais, cordões, placas, sinalização, impressões' },
  { categoria: 'Comunicação & Marketing', valor: 1895.00, itens: 'Fotos, vídeos, Canva, CapCut, anúncios patrocinados' },
  { categoria: 'Administrativo & Financeiro', valor: 1214.00, itens: 'MEI, taxas bancárias, contabilidade, confraternização voluntários' },
  { categoria: 'Logística & Transporte', valor: 362.00, itens: 'Transporte de materiais, estacionamento, suporte técnico' },
]

const totalReceita = 19800
const totalDespesa = 24162.74
const saldo = totalReceita - totalDespesa

function formatBRL(value: number) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function BarChart({ valor, max }: { valor: number; max: number }) {
  const pct = (valor / max) * 100
  return (
    <div className="h-1.5 w-full rounded-full bg-border overflow-hidden">
      <div
        className="h-full rounded-full bg-gradient-to-r from-google-blue to-google-blue/60 transition-all duration-700"
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}

export default function RelatorioFinanceiroPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">

        {/* Back button */}
        <Link
          href="/dev-fest-poa-25"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="size-4" />
          Voltar para DevFest POA 25
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-google-blue">Transparência</span>
            <span className="text-muted-foreground">·</span>
            <span className="text-xs text-muted-foreground">DevFest Porto Alegre 2025</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-3">
            Relatório Financeiro
          </h1>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Prestação de contas do DevFest Porto Alegre 2025, realizado em 06 de dezembro de 2025 na Faculdade Dom Bosco. Evento organizado de forma voluntária e sem fins lucrativos.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {['GDG Porto Alegre', 'GDG Caxias do Sul', 'WTM Porto Alegre'].map(org => (
              <span key={org} className="text-xs rounded-full border border-border bg-secondary px-3 py-1 text-muted-foreground">
                {org}
              </span>
            ))}
          </div>
        </div>

        {/* Resumo cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-12">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 text-google-green mb-3">
              <TrendingUp className="size-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Receita Total</span>
            </div>
            <p className="text-2xl font-bold">{formatBRL(totalReceita)}</p>
            <p className="text-xs text-muted-foreground mt-1">Patrocínios diretos</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 text-google-red mb-3">
              <TrendingDown className="size-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Despesa Total</span>
            </div>
            <p className="text-2xl font-bold">{formatBRL(totalDespesa)}</p>
            <p className="text-xs text-muted-foreground mt-1">Custos de execução</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 text-muted-foreground mb-3">
              <Minus className="size-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Saldo Operacional</span>
            </div>
            <p className="text-2xl font-bold text-google-red">{formatBRL(saldo)}</p>
            <p className="text-xs text-muted-foreground mt-1">Equilibrado via permutas</p>
          </div>
        </div>

        {/* Receitas */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-1">Receitas</h2>
          <p className="text-sm text-muted-foreground mb-5">Investimentos diretos de patrocinadores</p>
          <div className="rounded-2xl border border-border overflow-hidden">
            <div className="divide-y divide-border">
              {receitas.map((item) => (
                <div key={item.label} className="flex items-center justify-between px-6 py-4 bg-card hover:bg-secondary/40 transition-colors">
                  <div>
                    <p className="text-sm font-medium">{item.label}</p>
                  </div>
                  <p className="text-sm font-semibold text-google-green">{formatBRL(item.valor)}</p>
                </div>
              ))}
              <div className="flex items-center justify-between px-6 py-4 bg-google-green/5">
                <p className="text-sm font-bold">Total de Receitas</p>
                <p className="text-sm font-bold text-google-green">{formatBRL(totalReceita)}</p>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-google-yellow/30 bg-google-yellow/5 px-6 py-4">
            <p className="text-sm font-semibold mb-1">+ Receita via Permutas</p>
            <p className="text-sm text-muted-foreground">Welcome kit 100% permutado, apoio estrutural, itens promocionais e serviços operacionais — absorvidos sem desembolso financeiro direto.</p>
          </div>
        </section>

        {/* Despesas */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-1">Despesas</h2>
          <p className="text-sm text-muted-foreground mb-5">Custos organizados por categoria</p>
          <div className="rounded-2xl border border-border overflow-hidden">
            <div className="divide-y divide-border">
              {despesas.map((item) => (
                <div key={item.categoria} className="px-6 py-4 bg-card hover:bg-secondary/40 transition-colors">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <p className="text-sm font-medium">{item.categoria}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.itens}</p>
                    </div>
                    <p className="text-sm font-semibold text-google-red whitespace-nowrap">{formatBRL(item.valor)}</p>
                  </div>
                  <BarChart valor={item.valor} max={totalDespesa} />
                </div>
              ))}
              <div className="flex items-center justify-between px-6 py-4 bg-google-red/5">
                <p className="text-sm font-bold">Total de Despesas</p>
                <p className="text-sm font-bold text-google-red">{formatBRL(totalDespesa)}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cotas */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-5">Cotas de Patrocínio 2025</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { nome: 'Master', valor: 3000, qtd: 5 },
              { nome: 'Parceria', valor: 1200, qtd: 2 },
              { nome: 'Colaborador', valor: 600, qtd: 4 },
            ].map(cota => (
              <div key={cota.nome} className="rounded-2xl border border-border bg-card p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Cota {cota.nome}</p>
                <p className="text-xl font-bold mb-1">{formatBRL(cota.valor)}</p>
                <p className="text-xs text-muted-foreground">{cota.qtd} patrocinador{cota.qtd > 1 ? 'es' : ''}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Observações */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-5">Observações</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { titulo: 'Permutas', texto: 'Parte significativa dos custos foi absorvida via permuta, equilibrando a estrutura do evento sem desembolso adicional.' },
              { titulo: 'Ingressos', texto: 'Valores arrecadados com inscrições foram destinados integralmente à alimentação dos participantes.' },
              { titulo: 'Voluntários', texto: 'Toda a organização foi voluntária, sem compensação monetária — apenas ajuda de custo com alimentação e logística.' },
            ].map(obs => (
              <div key={obs.titulo} className="rounded-2xl border border-border bg-card p-5">
                <p className="text-sm font-semibold mb-2">{obs.titulo}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{obs.texto}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Próximos passos */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-5">Próximos Passos Estratégicos</h2>
          <div className="rounded-2xl border border-border bg-card divide-y divide-border overflow-hidden">
            {[
              'Revisão e possível ajuste das cotas de patrocínio',
              'Captação antecipada de parceiros',
              'Criação de fundo de reserva',
              'Otimização de custos operacionais',
              'Ampliação de patrocinadores estratégicos',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 px-6 py-4 hover:bg-secondary/40 transition-colors">
                <span className="text-xs font-bold text-google-blue w-5">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusão */}
        <section className="rounded-2xl border border-google-blue/20 bg-google-blue/5 px-8 py-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-google-blue mb-3">Conclusão</p>
          <p className="text-base leading-relaxed text-foreground">
            O DevFest Porto Alegre 2025 cumpriu seu propósito comunitário com estruturação de um evento relevante para a comunidade tech do RS, captação colaborativa de investimentos, execução eficiente e transparente, e equilíbrio financeiro garantido por apoio estratégico.
          </p>
          <p className="text-sm text-muted-foreground mt-3">
            Mais do que um evento, foi uma construção coletiva que fortalece o ecossistema de tecnologia do Rio Grande do Sul e prepara o terreno para uma edição ainda mais sustentável em 2026. 🚀
          </p>
        </section>

      </div>
    </main>
  )
}