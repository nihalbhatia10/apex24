import React from 'react';
import { MapPin, Briefcase, Clock, IndianRupee } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary?: string;
  description: string;
  postedDate?: string;
}

interface JobCardProps {
  job: Job;
}

export const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <motion.div 
      className="bg-card text-card-foreground p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div>
          <h3 className="text-xl font-bold mb-1">{job.title}</h3>
          <p className="text-muted-foreground font-medium">{job.company}</p>
        </div>
        {job.postedDate && (
          <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
            Posted: {job.postedDate}
          </span>
        )}
      </div>

      <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <MapPin size={16} className="text-primary" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Briefcase size={16} className="text-primary" />
          <span>{job.type}</span>
        </div>
        {job.salary && (
          <div className="flex items-center gap-1.5">
            <IndianRupee size={16} className="text-primary" />
            <span>{job.salary}</span>
          </div>
        )}
      </div>

      <p className="text-sm line-clamp-3 mb-6 text-foreground/80">
        {job.description}
      </p>

      <div className="flex justify-between items-center mt-auto pt-4 border-t border-border">
        <Button variant="outline" size="sm" className="font-semibold">
          View Details
        </Button>
        <Button size="sm" className="font-semibold">
          Apply Now
        </Button>
      </div>
    </motion.div>
  );
};
