# APEX 24 - SEO Implementation & Strategy Report

## 1. Technical SEO Foundation
- **Metadata:** Implemented global default metadata in `layout.tsx` targeting the India-wide service area.
- **Dynamic Sitemap:** Created `/sitemap.ts` to automatically generate URLs for all static pages, dynamic jobs, and blog posts.
- **Robots.txt:** Implemented `/robots.ts` to ensure crawlers index the correct pages and locate the sitemap.
- **Schema Markup (JSON-LD):** 
  - `Organization` schema applied globally.
  - `LocalBusiness` schema applied to `/locations/pune`.
  - `Service` schema applied to all Service landing pages.
  - `JobPosting` schema automatically generated for active jobs on `/jobs/[jobSlug]`.
  - `BlogPosting` schema applied to all blog articles.

## 2. On-Page SEO Implementation
- **H1 Tags:** Ensure a single, unique, keyword-optimized `<h1>` tag exists on every page.
- **Canonical Tags:** Added explicit `canonical` attributes to all new service and industry pages to prevent duplicate content issues.
- **Positioning:** Core pages (Home, About, Employers, Candidates) updated to explicitly state "Based in Pune, serving organizations across India."

## 3. Post-Launch 90-Day Strategy

### Month 1: Indexing & Setup
- [ ] Submit `sitemap.xml` to Google Search Console (GSC).
- [ ] Setup Bing Webmaster Tools and submit sitemap.
- [ ] Claim and optimize the Google Business Profile (GBP) for the Pune Headquarters. Ensure the description mentions nationwide services.
- [ ] Monitor GSC for "Page Indexing" errors or 404s.

### Month 2: Content Marketing & Promotion
- [ ] Publish the 10 initial blog posts on LinkedIn and other professional networks.
- [ ] Monitor impressions and CTR in GSC to identify which keywords are naturally gaining traction.
- [ ] Reach out to local Pune business directories to build initial local citations.

### Month 3: Analysis & Iteration
- [ ] Review Google Analytics 4 (GA4) traffic data. Identify which Service pages drive the highest engagement.
- [ ] Update internal linking: Add links from high-traffic blog posts to the relevant Service or Industry pages.
- [ ] Add fresh Job Postings to the Google Sheet to trigger `JobPosting` rich results on Google Jobs.

## 4. Manual Setup Checklist for Client
1. **Google Search Console:** Verify domain ownership and submit `https://apex24consultancy.com/sitemap.xml`.
2. **Google Business Profile:** Search for "APEX 24 Pune", claim the listing, verify the address, and upload photos of the office.
3. **Google Analytics 4:** Ensure the GA4 Measurement ID is properly firing on all pages.
