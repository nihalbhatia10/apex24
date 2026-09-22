import Image from "next/image"
import { FadeIn } from "@/components/animations/FadeIn"
import { Button } from "@/components/ui/Button"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Bulk Hiring Services in India | APEX 24',
  description: 'Efficient volume recruitment and mass hiring solutions for high-growth organizations in India.',
  alternates: {
    canonical: 'https://apex24consultancy.com/services/bulk-hiring'
  }
}

export default function BulkHiringPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Bulk Hiring & Volume Recruitment Services",
    "provider": {
      "@type": "Organization",
      "name": "APEX 24 Recruitment & Talent Solutions"
    },
    "areaServed": "IN",
    "description": "High-volume recruitment and bulk hiring solutions for scaling organizations across India."
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <section className="relative pt-32 pb-20 bg-background border-b border-border overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <FadeIn direction="up">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">Service</span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">Bulk Hiring & Volume Recruitment Services</h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Rapidly scale your workforce across India with efficient, high-volume recruitment processes that maintain quality standards.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/2">
              <FadeIn direction="right">
                <SectionHeading subtitle="Scale Efficiently" title="Volume Without Compromise" className="mb-8" />
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  When scaling operations, opening new facilities, or responding to sudden market demands, organizations need to hire at scale quickly. However, sacrificing quality for speed leads to high attrition and operational inefficiencies.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  APEX 24 offers specialized bulk hiring services in India that utilize standardized assessment frameworks, robust sourcing channels, and dedicated recruitment drives to fulfill large mandates efficiently.
                </p>
              </FadeIn>
            </div>
            
            <div className="w-full lg:w-1/2">
              <FadeIn direction="left" delay={0.2}>
                <div className="bg-background border border-border p-8 rounded-sm shadow-sm">
                  <h3 className="text-2xl font-bold mb-6">Our Volume Hiring Strategy</h3>
                  <div className="space-y-4">
                    {[
                      "Dedicated Recruitment Drives & Walk-ins",
                      "Standardized Screening Processes",
                      "Campus & Institutional Tie-ups",
                      "Streamlined Onboarding Support"
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
            <h2 className="text-4xl font-heading font-bold mb-6">Need to scale your operations rapidly?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button asChild size="lg">
                <Link href="/employers">Discuss Your Volume Hiring Needs</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
