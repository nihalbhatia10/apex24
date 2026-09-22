import React from 'react';
import { JobCard, Job } from '@/components/jobs/JobCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import Papa from 'papaparse';

export const dynamic = 'force-dynamic';

// You will need to replace this placeholder URL with your published Google Sheet CSV URL
// e.g., "https://docs.google.com/spreadsheets/d/e/2PACX-xxxxxx/pub?output=csv"
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

export default async function JobsPage() {
  const jobs = await getJobs();

  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeading 
        title="Current Job Openings" 
        subtitle="Find your next career opportunity with our trusted partners." 
        centered 
        className="mb-12"
      />
      
      {jobs.length === 0 ? (
        <div className="text-center text-muted-foreground mt-12">
          <p>No job openings available at the moment. Please check back later.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <JobCard key={job.id || index} job={job} />
          ))}
        </div>
      )}
    </div>
  );
}
