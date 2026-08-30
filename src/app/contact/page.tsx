'use client';

import { useState } from "react"
import { FadeIn } from "@/components/animations/FadeIn"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/forms/Input"
import { Textarea } from "@/components/forms/Textarea"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      sheetName: 'Contact',
      type: formData.get('type'),
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      company: formData.get('company'),
      message: formData.get('message'),
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
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background border-b border-border">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn direction="up">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">Let's start a conversation.</h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Whether you are an organization seeking exceptional talent or a professional exploring new opportunities, our team is ready to connect.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16">
          
          {/* Contact Information */}
          <div className="w-full lg:w-1/3">
            <FadeIn direction="right">
              <SectionHeading 
                subtitle="Reach Out"
                title="Get in Touch"
                className="mb-12"
              />
              
              <div className="flex flex-col gap-10">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground mb-1">Office Address</h4>
                    <p className="text-muted-foreground text-sm">GQFJ+96H, Dr. Homi Bhabha Rd,</p>
                    <p className="text-muted-foreground text-sm">Ram Nagar, Bavdhan, Pune, Maharashtra 411021</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground mb-1">Phone</h4>
                    <p className="text-muted-foreground text-sm">+91 90210 68823</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground text-sm">bhatiavinay34@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground mb-1">Working Hours</h4>
                    <p className="text-muted-foreground text-sm">Monday - Friday, 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
          
          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
            <FadeIn direction="left" delay={0.2}>
              <div className="bg-background border border-border p-8 md:p-12 rounded-sm shadow-xl">
                <div className="mb-8 border-b border-border pb-6">
                  <h3 className="text-2xl font-bold font-heading mb-2 text-foreground">Send a Message</h3>
                  <p className="text-muted-foreground text-sm">Select the nature of your enquiry so we can route your message to the right consultant.</p>
                </div>
                
                {submitStatus === 'success' ? (
                  <div className="bg-green-500/10 border border-green-500/20 text-green-600 p-6 rounded-sm mb-6 text-center">
                    <h4 className="font-bold text-lg mb-2">Message Sent Successfully!</h4>
                    <p className="text-sm">Thank you for reaching out. Our team will get back to you shortly.</p>
                    <Button variant="outline" className="mt-4" onClick={() => setSubmitStatus('idle')}>Send Another Message</Button>
                  </div>
                ) : (
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-wider text-muted-foreground">Nature of Enquiry</label>
                    <select name="type" required className="flex h-12 w-full rounded-sm border border-border bg-background/50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-50 transition-colors">
                      <option value="employer">Employer Enquiry (Looking to Hire)</option>
                      <option value="candidate">Candidate Enquiry (Looking for Jobs)</option>
                      <option value="general">General Enquiry / Partnership</option>
                    </select>
                  </div>

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
                      <label className="text-xs uppercase tracking-wider text-muted-foreground">Company Name (If applicable)</label>
                      <Input name="company" placeholder="Acme Corp" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
                    <Textarea name="message" required placeholder="How can we assist you today?" />
                  </div>
                  
                  {submitStatus === 'error' && (
                    <p className="text-red-500 text-sm font-medium mt-2">Oops! Something went wrong. Please try again or contact us directly.</p>
                  )}
                  
                  <Button type="submit" disabled={isSubmitting} variant="secondary" size="lg" className="w-full md:w-auto mt-4 self-start">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
                )}
              </div>
            </FadeIn>
          </div>

        </div>
      </section>
      
      {/* Google Maps Integration */}
      <section className="h-[400px] w-full bg-primary/20 relative border-t border-border">
        <iframe 
          src="https://maps.google.com/maps?q=Dr.%20Homi%20Bhabha%20Rd,%20Ram%20Nagar,%20Bavdhan,%20Pune,%20Maharashtra%20411021&t=&z=15&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        />
      </section>
    </div>
  )
}
