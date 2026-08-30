import React from 'react';
import { JobCard, Job } from '@/components/jobs/JobCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import Papa from 'papaparse';

// You will need to replace this placeholder URL with your published Google Sheet CSV URL
// e.g., "https://docs.google.com/spreadsheets/d/e/2PACX-xxxxxx/pub?output=csv"
const GOOGLE_SHEETS_CSV_URL = process.env.NEXT_PUBLIC_JOBS_CSV_URL || "https://docs.google.com/spreadsheets/d/e/2PACX-1vT0OFPji930HZ49PFUSeHaWU6GpCEx2tEGRFmiGcRCO1RmcfgJ70BDUQbQ48_adhl4yrWE_McnTSfj9/pub?output=csv";

async function getJobs(): Promise<Job[]> {
  if (!GOOGLE_SHEETS_CSV_URL || GOOGLE_SHEETS_CSV_URL === "PLACEHOLDER_URL") {
    // Return sample data if URL is not set
    return [
      {
        id: "1",
        title: "Senior Software Engineer",
        company: "Tech Solutions Inc.",
        location: "Mumbai, India",
        type: "Full-time",
        salary: "₹15,00,000 - ₹25,00,000",
        description: "We are looking for an experienced Senior Software Engineer with a strong background in React and Node.js to lead our development team.",
        postedDate: "2023-10-25"
      },
      {
        id: "2",
        title: "Marketing Manager",
        company: "Global Brands",
        location: "Delhi, India",
        type: "Full-time",
        salary: "₹12,00,000 - ₹18,00,000",
        description: "Seeking a creative Marketing Manager to develop and execute innovative marketing campaigns across digital and traditional channels.",
        postedDate: "2023-10-24"
      },
      {
        id: "3",
        title: "Data Analyst",
        company: "DataCorp",
        location: "Bangalore, India",
        type: "Contract",
        salary: "₹8,00,000 - ₹12,00,000",
        description: "Join our data science team to analyze complex datasets and provide actionable business insights using Python and SQL.",
        postedDate: "2023-10-23"
      }
    ];
  }

  try {
    // Revalidate the cache every 60 seconds so new jobs appear quickly
    const res = await fetch(GOOGLE_SHEETS_CSV_URL, { next: { revalidate: 60 } }); 
    if (!res.ok) throw new Error('Failed to fetch jobs');
    const csvData = await res.text();
    
    // Parse the CSV data
    const parsed = Papa.parse<Job>(csvData, { header: true, skipEmptyLines: true });
    
    // Ensure jobs have valid titles before returning
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
