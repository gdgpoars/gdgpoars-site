'use client'

import * as React from 'react'
import { ExternalLink, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const values = [
  {
    emoji: '🤝',
    title: 'Comunidade em primeiro lugar',
    description: 'Crescemos juntas. Compartilhamos conhecimento, oportunidades e experiências reais.',
  },
  {
    emoji: '🚀',
    title: 'Protagonismo',
    description: 'Incentivamos mulheres a palestrar, liderar projetos, organizar eventos e ocupar espaços de decisão.',
  },
  {
    emoji: '📚',
    title: 'Aprendizado contínuo',
    description: 'Workshops, meetups, rodas de conversa e mentorias fazem parte da nossa jornada.',
  },
  {
    emoji: '💜',
    title: 'Ambiente seguro e respeitoso',
    description: 'Seguimos um código de conduta claro, promovendo inclusão, respeito e diversidade.',
  },
]

const whatsappItems = [
  'Vagas e oportunidades',
  'Convites para eventos',
  'Conteúdos técnicos',
  'Avisos em primeira mão',
  'Trocas reais entre mulheres da área',
]

const events = [
  'Meetups técnicos',
  'Painéis com mulheres referência no mercado',
  'Workshops práticos',
  'Edições especiais como o GDGirls Day',
  'Participação ativa nos eventos do GDG Porto Alegre',
]

export default function ParaMulheresPage() {
  return (
    <main
      className="min-h-screen pt-24 pb-16"
      style={{
        background: 'linear-gradient(135deg, #1a0a2e 0%, #2d1b4e 30%, #1a0a2e 60%, #2a0e3a 100%)',
      }}
    >
      <style>{`
        .gdgirls-card {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,150,220,0.2);
          backdrop-filter: blur(12px);
          border-radius: 24px;
        }
        .gdgirls-badge {
          background: linear-gradient(135deg, rgba(236,72,153,0.25), rgba(168,85,247,0.25));
          border: 1px solid rgba(236,72,153,0.4);
          color: #f9a8d4;
          border-radius: 999px;
          padding: 6px 18px;
          font-size: 0.85rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .gdgirls-btn {
          background: linear-gradient(135deg, #ec4899, #a855f7);
          color: white;
          border: none;
          border-radius: 16px;
          padding: 14px 32px;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          text-decoration: none;
          box-shadow: 0 4px 24px rgba(168,85,247,0.4);
        }
        .gdgirls-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(168,85,247,0.6);
        }
        .value-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(236,72,153,0.15);
          border-radius: 20px;
          padding: 24px;
          transition: all 0.3s ease;
        }
        .value-card:hover {
          background: rgba(255,255,255,0.09);
          border-color: rgba(236,72,153,0.35);
          transform: translateY(-4px);
        }
        .pill-item {
          background: rgba(168,85,247,0.15);
          border: 1px solid rgba(168,85,247,0.3);
          border-radius: 999px;
          padding: 8px 18px;
          color: #e9d5ff;
          font-size: 0.9rem;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .section-title {
          color: #f9a8d4;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .body-text {
          color: #e9d5ff;
          line-height: 1.8;
          font-size: 1rem;
        }
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,150,220,0.1), transparent);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .float-emoji {
          display: inline-block;
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      {/* Mini header com botão de voltar ao início */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '12px 24px',
        display: 'flex',
        alignItems: 'center',
        background: 'rgba(26, 10, 46, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(236,72,153,0.2)',
      }}>
        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'linear-gradient(135deg, rgba(236,72,153,0.2), rgba(168,85,247,0.2))',
            border: '1px solid rgba(236,72,153,0.35)',
            borderRadius: '12px',
            padding: '8px 16px',
            color: '#f9a8d4',
            fontSize: '0.9rem',
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'all 0.3s ease',
          }}
        >
          <Home size={16} />
          Início
        </Link>
      </div>

      <div className="container mx-auto px-6">

        {/* Hero */}
        <section className="flex flex-col items-center text-center gap-6 mb-20">
          <span className="gdgirls-badge">
            <span>💜</span> Para Mulheres
          </span>
          <div>
            <div className="float-emoji text-6xl mb-4">👩‍💻</div>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 900,
              background: 'linear-gradient(135deg, #f9a8d4, #e879f9, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1.1,
              marginBottom: '16px',
            }}>
              GDGirls Porto Alegre
            </h1>
            <p style={{ color: '#e9d5ff', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
              Um espaço seguro, acolhedor e inspirador para mulheres que atuam ou desejam atuar em tecnologia 💜
            </p>
          </div>
        </section>

        {/* Sobre o GDGirls */}
        <section className="gdgirls-card p-8 mb-10">
          <h2 className="section-title">✨ O que é o GDGirls?</h2>
          <p className="body-text mb-6">
            O <strong style={{ color: '#f9a8d4' }}>GDGirls</strong> é um braço do GDG Porto Alegre criado especialmente para mulheres. Nossa missão é criar um espaço seguro, acolhedor e inspirador para mulheres que atuam ou desejam atuar em tecnologia, promovendo:
          </p>
          <div className="flex flex-wrap gap-3">
            {['💪 Capacitação técnica', '🌟 Desenvolvimento de liderança', '🤝 Networking qualificado', '🎤 Protagonismo feminino no ecossistema tech'].map((item) => (
              <span key={item} className="pill-item">{item}</span>
            ))}
          </div>
          <p className="body-text mt-6">
            Queremos que cada participante se sinta <strong style={{ color: '#f9a8d4' }}>pertencente, confiante e preparada</strong> para ocupar qualquer espaço na tecnologia — do código ao palco. 🚀
          </p>
        </section>

        {/* Valores */}
        <section className="mb-10">
          <h2 className="section-title" style={{ color: '#f9a8d4', fontSize: '1.5rem', fontWeight: 700, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            💡 Nossos Valores
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="value-card">
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{v.emoji}</div>
                <h3 style={{ color: '#f9a8d4', fontWeight: 700, marginBottom: '8px', fontSize: '1.05rem' }}>{v.title}</h3>
                <p style={{ color: '#e9d5ff', fontSize: '0.95rem', lineHeight: 1.7 }}>{v.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WhatsApp */}
        <section className="gdgirls-card shimmer p-8 mb-10">
          <h2 className="section-title">📲 Nossa Comunidade no WhatsApp</h2>
          <p className="body-text mb-4">
            A energia do GDGirls continua todos os dias no nosso grupo exclusivo do WhatsApp. É lá que compartilhamos:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
            {whatsappItems.map((item) => (
              <li key={item} style={{ color: '#e9d5ff', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem' }}>
                <span style={{ color: '#f9a8d4' }}>💜</span> {item}
              </li>
            ))}
          </ul>
          <p className="body-text" style={{ fontStyle: 'italic', color: '#f9a8d4' }}>
            Mais do que um grupo, é uma rede de apoio ativa. 💫
          </p>
        </section>

        {/* Eventos */}
        <section className="gdgirls-card p-8 mb-10">
          <h2 className="section-title">🎤 Nossos Eventos</h2>
          <p className="body-text mb-4">
            Promovemos encontros presenciais e online ao longo do ano, incluindo:
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            {events.map((e) => (
              <span key={e} className="pill-item">✨ {e}</span>
            ))}
          </div>
          <p className="body-text" style={{ fontStyle: 'italic', color: '#f9a8d4' }}>
            Nosso objetivo é gerar impacto contínuo — não apenas eventos isolados. 🌟
          </p>
        </section>

        {/* CTA */}
        <section className="flex flex-col items-center text-center gap-6 py-12">
          <div style={{
            background: 'linear-gradient(135deg, rgba(236,72,153,0.15), rgba(168,85,247,0.15))',
            border: '1px solid rgba(236,72,153,0.3)',
            borderRadius: '32px',
            padding: '48px 32px',
            maxWidth: '600px',
            width: '100%',
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🌟</div>
            <h2 style={{
              background: 'linear-gradient(135deg, #f9a8d4, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontSize: '1.8rem',
              fontWeight: 800,
              marginBottom: '16px',
            }}>
              Quer fazer parte?
            </h2>
            <p className="body-text" style={{ marginBottom: '24px' }}>
              Se você acredita no poder da comunidade, da troca e da representatividade feminina na tecnologia, o GDGirls é o seu lugar. Junte-se a nós e venha construir um ecossistema mais diverso, forte e inspirador em Porto Alegre 💜
            </p>
            <a
              href="https://chat.whatsapp.com/BXsOpUSYi6u1xqG54bMvnF?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="gdgirls-btn"
            >
              📲 Entrar no grupo do WhatsApp
              <ExternalLink size={16} />
            </a>
            <p style={{ color: '#c4b5fd', fontSize: '0.8rem', marginTop: '12px', opacity: 0.7 }}>
            </p>
          </div>
        </section>

      </div>
    </main>
  )
}