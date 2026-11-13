import React from "react"
import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'GDG Porto Alegre | Comunidade de Tecnologia',
  description: 'Comunidade de tecnologia de Porto Alegre - RS. Conectamos pessoas desenvolvedoras, profissionais de tech e entusiastas em uma comunidade inclusiva e colaborativa.',
  keywords: [
    'GDG Porto Alegre',
    'Google Developers Group Porto Alegre',
    'DevFest Porto Alegre',
    'Hackathon Porto Alegre',
    'Eventos de Tecnologia RS',
    'Comunidade de Tecnologia Porto Alegre'
  ],
  authors: [{ name: 'GDG Porto Alegre' }],
  openGraph: {
    title: 'GDG Porto Alegre | Comunidade de Tecnologia',
    description: 'Comunidade oficial Google Developers Group em Porto Alegre. Eventos, DevFest, Hackathons e networking em tecnologia.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://gdgportoalegre.com.br',
    siteName: 'GDG Porto Alegre',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#4285F4' },
    { media: '(prefers-color-scheme: dark)', color: '#202124' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GDG Porto Alegre",
    url: "https://gdgportoalegre.com.br",
    logo: "https://gdgportoalegre.com.br/logo.png",
    description: "Comunidade oficial Google Developers Group em Porto Alegre que organiza eventos como DevFest, Hackathons e meetups de tecnologia.",
    sameAs: [
      "https://www.instagram.com/gdgportoalegre",
      "https://www.linkedin.com/company/gdgportoalegre"
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Porto Alegre",
      addressRegion: "RS",
      addressCountry: "BR"
    }
  }

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>

        {/* Favicon emoji chimarrão */}
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🧉</text></svg>"
        />

        {/* Google Analytics GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JV4GWN37HL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JV4GWN37HL');
          `}
        </Script>

        {/* Structured Data - Organization */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />

      </head>

      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="gdg-poa-theme"
        >
          {children}
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  )
}