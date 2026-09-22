import Image from "next/image"
import { FadeIn } from "@/components/animations/FadeIn"
import { Button } from "@/components/ui/Button"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'IT Recruitment Services in India | APEX 24',
  description: 'APEX 24 provides specialized IT recruitment services across India. Hire top software developers, engineers, and tech leaders.',
  alternates: {
    canonical: 'https://apex24consultancy.com/services/it-recruitment'
  }
}

export default function ITRecruitmentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "IT Recruitment Services in India",
    "provider": {
      "@type": "Organization",
      "name": "APEX 24 Recruitment & Talent Solutions"
    },
    "areaServed": "IN",
    "description": "Specialized IT recruitment and tech talent acquisition services in India."
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <section className="relative pt-32 pb-20 bg-background border-b border-border overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <FadeIn direction="up">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">Service</span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">IT Recruitment Services in India</h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Connecting innovative technology companies with elite engineering and IT professionals across the nation.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/2">
              <FadeIn direction="right">
                <SectionHeading subtitle="Tech Talent" title="Accelerate Your Digital Roadmap" className="mb-8" />
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  The demand for highly skilled IT professionals in India continues to outpace supply. Navigating this competitive landscape requires a recruitment partner who understands technology stacks, development methodologies, and the specific nuances of tech culture.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  APEX 24 provides specialized IT recruitment services in India, sourcing candidates for software development, cloud infrastructure, cybersecurity, data science, and IT leadership roles.
                </p>
              </FadeIn>
            </div>
            
            <div className="w-full lg:w-1/2">
              <FadeIn direction="left" delay={0.2}>
                <div className="bg-background border border-border p-8 rounded-sm shadow-sm">
                  <h3 className="text-2xl font-bold mb-6">Roles We Hire For</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Software Engineers (Frontend/Backend/Full Stack)",
                      "Cloud & DevOps Architects",
                      "Data Scientists & Engineers",
                      "Cybersecurity Specialists",
                      "Product Managers",
                      "IT Infrastructure Managers"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn direction="up">
            <h2 className="text-3xl font-heading font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="border border-border p-6 rounded-sm">
                <h3 className="font-bold text-lg mb-2">How do you evaluate technical candidates?</h3>
                <p className="text-muted-foreground">We look beyond just technical keywords on a resume. We assess past project impact, problem-solving approaches, and cultural alignment before presenting a candidate to you.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-primary/20 border-t border-border">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <FadeIn direction="up">
            <h2 className="text-4xl font-heading font-bold mb-6">Ready to scale your tech team?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button asChild size="lg">
                <Link href="/employers">Submit Your Hiring Requirement</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/industries/information-technology">View IT Industry Expertise</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
