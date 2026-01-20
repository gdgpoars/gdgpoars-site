import Link from 'next/link'
import { Instagram, Linkedin, Mail, Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t bg-card">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-1/2 left-1/4 size-[400px] rounded-full bg-google-blue/5 blur-3xl" />
        <div className="absolute -bottom-1/2 right-1/4 size-[400px] rounded-full bg-google-red/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Logo e Descricao */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-0.5">
                <span className="text-3xl font-bold text-google-blue">G</span>
                <span className="text-3xl font-bold text-google-red">D</span>
                <span className="text-3xl font-bold text-google-yellow">G</span>
              </div>
              <span className="text-xl font-medium">Porto Alegre</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Comunidade de tecnologia de Porto Alegre, RS. Conectando pessoas
              desenvolvedoras, profissionais de tech e entusiastas.
            </p>
          </div>

          {/* Links Rapidos */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Links Rapidos</h3>
            <nav className="flex flex-col gap-3">
              {[
                { href: '/proximos-eventos', label: 'Proximos Eventos' },
                { href: '/eventos-parceiros', label: 'Eventos Parceiros' },
                { href: '/parcerias', label: 'Parcerias' },
                { href: '/faq', label: 'FAQ' },
                { href: '/blog', label: 'Blog' },
              ].map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contato e Redes */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Conecte-se</h3>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/gdgportoalegre/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center size-12 rounded-2xl bg-secondary text-muted-foreground hover:bg-google-red hover:text-white transition-all duration-300"
                aria-label="Instagram do GDG Porto Alegre"
              >
                <Instagram className="size-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/gdg-porto-alegre/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center size-12 rounded-2xl bg-secondary text-muted-foreground hover:bg-google-blue hover:text-white transition-all duration-300"
                aria-label="LinkedIn do GDG Porto Alegre"
              >
                <Linkedin className="size-5" />
              </a>
              <a
                href="mailto:gdgpoars@gmail.com"
                className="flex items-center justify-center size-12 rounded-2xl bg-secondary text-muted-foreground hover:bg-google-green hover:text-white transition-all duration-300"
                aria-label="Email do GDG Porto Alegre"
              >
                <Mail className="size-5" />
              </a>
            </div>
            <p className="text-muted-foreground">
              gdgpoars@gmail.com
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            {new Date().getFullYear()} GDG Porto Alegre
          </p>
          <p className="flex items-center gap-2">
            Feito com <Heart className="size-4 text-google-red fill-google-red" /> pela comunidade
          </p>
        </div>
      </div>
    </footer>
  )
}
