import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroCarousel } from '@/components/home/hero-carousel'
import { AboutSection } from '@/components/home/about-section'
import { CTASection } from '@/components/home/cta-section'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroCarousel />
        <AboutSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}