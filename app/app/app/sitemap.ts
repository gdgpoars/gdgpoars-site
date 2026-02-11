import { MetadataRoute } from 'next'

const baseUrl = 'https://gdgportoalegre.com.br'

export default function sitemap(): MetadataRoute.Sitemap {

  const routes = [
    '',
    '/devfest',
    '/hackathon',
    '/sobre',
    '/patrocinadores',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}
