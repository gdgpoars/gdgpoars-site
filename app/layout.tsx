import React from "react"
import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'GDG Porto Alegre | Comunidade de Tecnologia',
  description: 'Comunidade de tecnologia de Porto Alegre - RS. Conectamos pessoas desenvolvedoras, profissionais de tech e entusiastas em uma comunidade inclusiva e colaborativa.',
  keywords: ['GDG', 'Porto Alegre', 'Google Developers Group', 'comunidade', 'tecnologia', 'desenvolvedoras', 'diversidade', 'inclusão'],
  authors: [{ name: 'GDG Porto Alegre' }],
  openGraph: {
    title: 'GDG Porto Alegre | Comunidade de Tecnologia',
    description: 'Comunidade de tecnologia de Porto Alegre - RS. Conectamos pessoas desenvolvedoras, profissionais de tech e entusiastas.',
    type: 'website',
    locale: 'pt_BR',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#4285F4' },
    { media: '(prefers-color-scheme: dark)', color: '#202124' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VZ7N8J7192"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VZ7N8J7192');
          `}
        </Script>
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
