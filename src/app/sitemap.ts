import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://apex24consultancy.com'

  const staticRoutes = [
    '',
    '/about',
    '/employers',
    '/candidates',
    '/contact',
    '/services',
    '/industries',
    '/jobs',
    '/blog',
    '/locations/pune',
    '/services/recruitment-consultancy-india',
    '/services/it-recruitment',
    '/services/bfsi-recruitment',
    '/services/bulk-hiring',
    '/services/executive-search',
    '/services/talent-acquisition',
    '/industries/information-technology',
    '/industries/banking-financial-services',
    '/industries/insurance',
    '/industries/ites',
    '/industries/corporate-business-services',
    '/industries/leadership-management',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return [...staticRoutes]
}
