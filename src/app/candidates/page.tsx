'use client';

import { useState } from "react"
import { FadeIn } from "@/components/animations/FadeIn"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/forms/Input"
import { Textarea } from "@/components/forms/Textarea"
import { SectionHeading } from "@/components/ui/SectionHeading"

export default function CandidatesPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [fileError, setFileError] = useState('');

  const toBase64 = (file: File): Promise<string> => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFileError('');
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const file = formData.get('resume') as File;
    
    let fileData = '';
    let fileName = '';

    if (file && file.size > 0) {
      if (file.size > 5 * 1024 * 1024) {
        setFileError('File size must be less than 5MB');
        setIsSubmitting(false);
        return;
      }
      try {
        fileData = await toBase64(file);
        fileName = file.name;
      } catch (err) {
        console.error("File read error", err);
        setFileError('Error reading file');
        setIsSubmitting(false);
        return;
      }
    }

    const data = {
      sheetName: 'Candidates',
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      location: formData.get('location'),
      experience: formData.get('experience'),
      domain: formData.get('domain'),
      role: formData.get('role'),
      message: formData.get('message'),
      fileData,
      fileName
    };

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      if (result.result === 'success') {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Submission error", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-20 bg-background border-b border-border">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn direction="up">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">For Candidates</span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-foreground max-w-4xl">
              Your next opportunity deserves the right direction.
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              We connect ambitious professionals with organizations that value their expertise and foster their growth.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-primary/20">
        <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/2">
            <FadeIn direction="right">
              <SectionHeading 
                subtitle="Join Our Network"
                title="Submit Your Resume"
                className="mb-8"
              />
              <p className="text-muted-foreground mb-12 text-lg">
                By joining our talent network, you'll be considered for exclusive opportunities across the BFSI, IT, and specialized sectors. Your information is treated with strict professional confidentiality.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-sm uppercase tracking-wider font-semibold text-foreground mb-2">Career Guidance</h4>
                  <p className="text-muted-foreground text-sm">We provide honest feedback and strategic advice to help you position yourself effectively in a competitive market.</p>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider font-semibold text-foreground mb-2">Confidentiality First</h4>
                  <p className="text-muted-foreground text-sm">Your resume and intent to explore new opportunities are never shared with prospective employers without your explicit consent.</p>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <div className="w-full lg:w-1/2">
            <FadeIn direction="left" delay={0.2}>
              {submitStatus === 'success' ? (
                <div className="bg-background border border-border p-8 md:p-10 rounded-sm shadow-xl flex flex-col gap-6 text-center">
                  <div className="bg-green-500/10 border border-green-500/20 text-green-600 p-8 rounded-sm">
                    <h3 className="font-bold text-2xl mb-4 font-heading">Application Submitted!</h3>
                    <p className="mb-6">Thank you for sharing your profile with us. Our talent team will review your resume and get in touch if there's a suitable opportunity.</p>
                    <Button variant="outline" onClick={() => setSubmitStatus('idle')}>Submit Another Profile</Button>
                  </div>
                </div>
              ) : (
              <form className="bg-background border border-border p-8 md:p-10 rounded-sm shadow-xl flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-wider text-muted-foreground">Full Name</label>
                    <Input name="name" required placeholder="John Doe" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-wider text-muted-foreground">Email Address</label>
                    <Input name="email" type="email" required placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-wider text-muted-foreground">Phone Number</label>
                    <Input name="phone" type="tel" required placeholder="+91 98765 43210" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-wider text-muted-foreground">Current Location</label>
                    <Input name="location" required placeholder="Mumbai, India" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-wider text-muted-foreground">Experience (Yrs)</label>
                    <Input name="experience" type="number" required placeholder="5" />
                  </div>
                  <div className="flex flex-col gap-2 col-span-2">
                    <label className="text-xs uppercase tracking-wider text-muted-foreground">Industry / Domain</label>
                    <Input name="domain" required placeholder="BFSI / FinTech" />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">Preferred Role</label>
                  <Input name="role" required placeholder="e.g., Product Manager, VP of Engineering" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">Upload Resume (PDF/Word)</label>
                  <Input name="resume" type="file" required accept=".pdf,.doc,.docx" className="cursor-pointer pt-2.5" />
                  {fileError && <p className="text-red-500 text-xs mt-1">{fileError}</p>}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">Message / Cover Note (Optional)</label>
                  <Textarea name="message" placeholder="Share any specific preferences, notice period, or career goals..." />
                </div>
                
                {submitStatus === 'error' && (
                  <p className="text-red-500 text-sm font-medium">An error occurred while submitting your application. Please try again.</p>
                )}

                <Button type="submit" disabled={isSubmitting} variant="secondary" size="lg" className="w-full mt-4">
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
              )}
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
