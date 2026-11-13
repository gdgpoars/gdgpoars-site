import { Instagram, Linkedin, Mail, Link2, Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative z-10 border-t-2 border-foreground/10">
      <div className="container mx-auto flex flex-col items-center gap-6 px-6 py-12 text-center">
        <div className="flex items-center gap-0.5">
          <span className="text-2xl font-bold text-google-blue">G</span>
          <span className="text-2xl font-bold text-google-red">D</span>
          <span className="text-2xl font-bold text-google-yellow">G</span>
          <span className="ml-2 text-lg font-medium">Porto Alegre</span>
        </div>

        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-12">
          <div className="flex flex-col items-center gap-3">
            <span className="text-sm font-semibold text-muted-foreground">GDG Porto Alegre</span>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/gdgpoa/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center size-11 rounded-full border-2 border-foreground bg-card text-foreground transition-all duration-300 hover:bg-google-red hover:text-white"
                aria-label="Instagram do GDG Porto Alegre"
              >
                <Instagram className="size-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/gdg-porto-alegre/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center size-11 rounded-full border-2 border-foreground bg-card text-foreground transition-all duration-300 hover:bg-google-blue hover:text-white"
                aria-label="LinkedIn do GDG Porto Alegre"
              >
                <Linkedin className="size-5" />
              </a>
              <a
                href="mailto:gdgpoars@gmail.com"
                className="flex items-center justify-center size-11 rounded-full border-2 border-foreground bg-card text-foreground transition-all duration-300 hover:bg-google-green hover:text-white"
                aria-label="Email do GDG Porto Alegre"
              >
                <Mail className="size-5" />
              </a>
              <a
                href="https://linktr.ee/gdgpoa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center size-11 rounded-full border-2 border-foreground bg-card text-foreground transition-all duration-300 hover:bg-google-yellow hover:text-white"
                aria-label="Linktree do GDG Porto Alegre"
              >
                <Link2 className="size-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">gdgpoars@gmail.com</p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <span className="text-sm font-semibold text-muted-foreground">GDG Caxias do Sul</span>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/gdgcaxiasdosul"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center size-11 rounded-full border-2 border-foreground bg-card text-foreground transition-all duration-300 hover:bg-google-red hover:text-white"
                aria-label="Instagram do GDG Caxias do Sul"
              >
                <Instagram className="size-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/gdg-caxias-do-sul/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center size-11 rounded-full border-2 border-foreground bg-card text-foreground transition-all duration-300 hover:bg-google-blue hover:text-white"
                aria-label="LinkedIn do GDG Caxias do Sul"
              >
                <Linkedin className="size-5" />
              </a>
              <a
                href="mailto:gdgcaxiasdosul@gmail.com"
                className="flex items-center justify-center size-11 rounded-full border-2 border-foreground bg-card text-foreground transition-all duration-300 hover:bg-google-green hover:text-white"
                aria-label="Email do GDG Caxias do Sul"
              >
                <Mail className="size-5" />
              </a>
              <a
                href="https://linktr.ee/gdgcaxiasdosul"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center size-11 rounded-full border-2 border-foreground bg-card text-foreground transition-all duration-300 hover:bg-google-yellow hover:text-white"
                aria-label="Linktree do GDG Caxias do Sul"
              >
                <Link2 className="size-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">gdgcaxiasdosul@gmail.com</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground md:flex-row md:gap-4">
          <p>{new Date().getFullYear()} GDG Porto Alegre</p>
          <p className="flex items-center gap-2">
            Feito com <Heart className="size-4 text-google-red fill-google-red" /> pela comunidade
          </p>
        </div>
      </div>
    </footer>
  )
}
