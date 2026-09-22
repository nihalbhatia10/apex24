import Image from "next/image"
import { FadeIn } from "@/components/animations/FadeIn"
import { Button } from "@/components/ui/Button"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'BFSI Recruitment Services India | APEX 24',
  description: 'Specialized banking, financial services, and insurance recruitment agency in India.',
  alternates: {
    canonical: 'https://apex24consultancy.com/services/bfsi-recruitment'
  }
}

export default function BFSIRecruitmentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "BFSI Recruitment Services in India",
    "provider": {
      "@type": "Organization",
      "name": "APEX 24 Recruitment & Talent Solutions"
    },
    "areaServed": "IN",
    "description": "Specialized BFSI (Banking, Financial Services, and Insurance) recruitment services in India."
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <section className="relative pt-32 pb-20 bg-background border-b border-border overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <FadeIn direction="up">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">Service</span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">BFSI Recruitment Services in India</h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Navigating the complex regulatory and technological landscape of the Banking, Financial Services, and Insurance sectors by sourcing impeccable talent.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/2">
              <FadeIn direction="right">
                <SectionHeading subtitle="Financial Talent" title="Expertise Meets Integrity" className="mb-8" />
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  The BFSI sector demands professionals who not only possess deep domain knowledge but also uphold the highest standards of integrity and regulatory compliance.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  As a leading provider of BFSI recruitment services in India, APEX 24 partners with retail banks, investment firms, FinTech startups, and insurance providers to secure talent that mitigates risk and drives financial innovation.
                </p>
              </FadeIn>
            </div>
            
            <div className="w-full lg:w-1/2">
              <FadeIn direction="left" delay={0.2}>
                <div className="bg-background border border-border p-8 rounded-sm shadow-sm">
                  <h3 className="text-2xl font-bold mb-6">Key BFSI Roles</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Risk & Compliance Officers",
                      "Wealth Managers",
                      "Actuaries & Underwriters",
                      "FinTech Product Managers",
                      "Retail Banking Operations",
                      "Financial Analysts"
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

      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn direction="up">
            <h2 className="text-3xl font-heading font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="border border-border p-6 rounded-sm">
                <h3 className="font-bold text-lg mb-2">Do you handle background checks for BFSI candidates?</h3>
                <p className="text-muted-foreground">We conduct thorough initial screening and reference checks. For comprehensive regulatory background checks, we can coordinate with specialized third-party verification agencies.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-primary/20 border-t border-border">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <FadeIn direction="up">
            <h2 className="text-4xl font-heading font-bold mb-6">Build your financial team with confidence.</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button asChild size="lg">
                <Link href="/employers">Submit Your Hiring Requirement</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
