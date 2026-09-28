import { MetadataRoute } from 'next'
import Papa from 'papaparse'
import { createJobSlug } from '@/lib/utils'

const GOOGLE_SHEETS_CSV_URL = process.env.NEXT_PUBLIC_JOBS_CSV_URL || "https://docs.google.com/spreadsheets/d/e/2PACX-1vT0OFPji930HZ49PFUSeHaWU6GpCEx2tEGRFmiGcRCO1RmcfgJ70BDUQbQ48_adhl4yrWE_McnTSfj9/pub?output=csv";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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

  let jobRoutes: MetadataRoute.Sitemap = [];
  
  try {
    if (GOOGLE_SHEETS_CSV_URL && GOOGLE_SHEETS_CSV_URL !== "PLACEHOLDER_URL") {
      const res = await fetch(GOOGLE_SHEETS_CSV_URL, { cache: 'no-store' });
      if (res.ok) {
        const csvData = await res.text();
        const parsed = Papa.parse<any>(csvData, { header: true, skipEmptyLines: true });
        
        jobRoutes = parsed.data
          .map(row => {
            const idKey = Object.keys(row)[0];
            return {
              ...row,
              id: row.id || row[idKey]
            };
          })
          .filter(job => job.title && job.title.trim() !== '')
          .map((job) => ({
            url: `${baseUrl}/jobs/${createJobSlug(job.title, job.location, job.id)}`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.7,
          }));
      }
    }
  } catch (error) {
    console.error("Error fetching jobs for sitemap:", error);
  }

  return [...staticRoutes, ...jobRoutes]
}
