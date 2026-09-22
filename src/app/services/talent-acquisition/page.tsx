import Image from "next/image"
import { FadeIn } from "@/components/animations/FadeIn"
import { Button } from "@/components/ui/Button"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Talent Acquisition Services India | APEX 24',
  description: 'Strategic talent acquisition partner helping you build employer branding and sustainable hiring practices.',
  alternates: {
    canonical: 'https://apex24consultancy.com/services/talent-acquisition'
  }
}

export default function TalentAcquisitionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Talent Acquisition Services in India",
    "provider": {
      "@type": "Organization",
      "name": "APEX 24 Recruitment & Talent Solutions"
    },
    "areaServed": "IN",
    "description": "Comprehensive talent acquisition and strategic hiring partnerships across India."
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <section className="relative pt-32 pb-20 bg-background border-b border-border overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <FadeIn direction="up">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">Service</span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">Talent Acquisition Services in India</h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Holistic, end-to-end talent acquisition partnerships acting as an extension of your internal HR team.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/2">
              <FadeIn direction="right">
                <SectionHeading subtitle="Strategic Partnerships" title="More Than Just Recruitment" className="mb-8" />
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  Recruitment is about filling a vacancy; Talent Acquisition is a long-term strategy aimed at finding specialists, leaders, and future executives for your company. It involves employer branding, candidate relationship management, and workforce planning.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our comprehensive Talent Acquisition services across India are designed for organizations looking to build a sustainable, high-quality talent pipeline. We help you attract the best minds while optimizing your hiring processes.
                </p>
              </FadeIn>
            </div>
            
            <div className="w-full lg:w-1/2">
              <FadeIn direction="left" delay={0.2}>
                <div className="bg-background border border-border p-8 rounded-sm shadow-sm">
                  <h3 className="text-2xl font-bold mb-6">What We Deliver</h3>
                  <div className="space-y-4">
                    {[
                      "Employer Branding Support",
                      "Talent Pipeline Development",
                      "Market Intelligence & Salary Benchmarking",
                      "Optimized Hiring Workflows & Processes"
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

      <section className="py-24 bg-primary/20 border-t border-border">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <FadeIn direction="up">
            <h2 className="text-4xl font-heading font-bold mb-6">Ready to optimize your hiring strategy?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button asChild size="lg">
                <Link href="/employers">Discuss Your Talent Strategy</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
