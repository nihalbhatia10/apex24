import React from 'react';
import Papa from 'papaparse';
import { notFound } from 'next/navigation';
import { Job } from '@/components/jobs/JobCard';
import { createJobSlug } from '@/lib/utils';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MapPin, Briefcase, IndianRupee, Clock } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

const GOOGLE_SHEETS_CSV_URL = process.env.NEXT_PUBLIC_JOBS_CSV_URL || "https://docs.google.com/spreadsheets/d/e/2PACX-1vT0OFPji930HZ49PFUSeHaWU6GpCEx2tEGRFmiGcRCO1RmcfgJ70BDUQbQ48_adhl4yrWE_McnTSfj9/pub?output=csv";

async function getJobs(): Promise<Job[]> {
  if (!GOOGLE_SHEETS_CSV_URL || GOOGLE_SHEETS_CSV_URL === "PLACEHOLDER_URL") {
    return [];
  }
  try {
    const res = await fetch(GOOGLE_SHEETS_CSV_URL, { cache: 'no-store' }); 
    if (!res.ok) throw new Error('Failed to fetch jobs');
    const csvData = await res.text();
    const parsed = Papa.parse<Job>(csvData, { header: true, skipEmptyLines: true });
    return parsed.data.filter(job => job.title && job.title.trim() !== '');
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
}

export async function generateMetadata({ params }: { params: { jobSlug: string } }): Promise<Metadata> {
  const jobs = await getJobs();
  const job = jobs.find(j => createJobSlug(j.title, j.location) === params.jobSlug);

  if (!job) {
    return {
      title: 'Job Not Found | APEX 24',
    };
  }

  return {
    title: `${job.title} Job in ${job.location} | APEX 24`,
    description: `APEX 24 is hiring a ${job.title} in ${job.location}. Apply now for this ${job.type} position.`,
    alternates: {
      canonical: `https://apex24consultancy.com/jobs/${params.jobSlug}`
    }
  };
}

export default async function JobDetailPage({ params }: { params: { jobSlug: string } }) {
  const jobs = await getJobs();
  const job = jobs.find(j => createJobSlug(j.title, j.location) === params.jobSlug);

  if (!job) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.description,
    "datePosted": job.postedDate || new Date().toISOString().split('T')[0],
    "employmentType": job.type.toUpperCase().replace('-', '_'),
    "hiringOrganization": {
      "@type": "Organization",
      "name": job.company || "Confidential",
      "sameAs": "https://apex24consultancy.com"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": job.location,
        "addressCountry": "IN"
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <section className="relative pt-32 pb-20 bg-background border-b border-border">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <FadeIn direction="up">
            <Link href="/jobs" className="text-accent text-sm font-semibold hover:underline mb-6 inline-block">
              &larr; Back to all jobs
            </Link>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">{job.title}</h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">{job.company || "Confidential"}</h2>
            
            <div className="flex flex-wrap gap-6 mb-8 text-sm md:text-base font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="text-primary w-5 h-5" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="text-primary w-5 h-5" />
                <span>{job.type}</span>
              </div>
              {job.salary && (
                <div className="flex items-center gap-2">
                  <IndianRupee className="text-primary w-5 h-5" />
                  <span>{job.salary}</span>
                </div>
              )}
              {job.postedDate && (
                <div className="flex items-center gap-2">
                  <Clock className="text-primary w-5 h-5" />
                  <span>Posted: {job.postedDate}</span>
                </div>
              )}
            </div>
            
            <Button asChild size="lg">
              <Link href="/candidates">Apply Now</Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-2/3">
              <FadeIn direction="right">
                <h3 className="text-2xl font-bold mb-6 font-heading">Job Description</h3>
                <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground whitespace-pre-wrap">
                  {job.description}
                </div>
                
                <div className="mt-12">
                  <Button asChild size="lg">
                    <Link href="/candidates">Apply for this Position</Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
            
            <div className="w-full lg:w-1/3">
              <FadeIn direction="left" delay={0.2}>
                <div className="bg-background border border-border p-8 rounded-sm shadow-sm sticky top-32">
                  <h3 className="text-xl font-bold mb-6 font-heading">Interested?</h3>
                  <p className="text-muted-foreground mb-6">
                    Submit your application through our Candidates portal. Ensure your resume is up-to-date and highlights relevant experience.
                  </p>
                  <Button asChild size="lg" className="w-full">
                    <Link href="/candidates">Apply Now</Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
