import Image from "next/image"
import { FadeIn } from "@/components/animations/FadeIn"
import { Button } from "@/components/ui/Button"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Executive Search & Leadership Hiring India | APEX 24',
  description: 'Premier executive search firm in India specializing in C-suite, VP, and leadership recruitment.',
  alternates: {
    canonical: 'https://apex24consultancy.com/services/executive-search'
  }
}

export default function ExecutiveSearchPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Executive Search & Leadership Hiring in India",
    "provider": {
      "@type": "Organization",
      "name": "APEX 24 Recruitment & Talent Solutions"
    },
    "areaServed": "IN",
    "description": "Executive search and leadership hiring services for C-suite and senior management roles across India."
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <section className="relative pt-32 pb-20 bg-background border-b border-border overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <FadeIn direction="up">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">Service</span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">Executive Search & Leadership Hiring in India</h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Discrete, targeted, and highly specialized recruitment for C-suite executives, VP, and Director-level roles.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/2">
              <FadeIn direction="right">
                <SectionHeading subtitle="Strategic Impact" title="Securing Transformative Leaders" className="mb-8" />
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  The success of any organization is fundamentally tied to the quality of its leadership. Executive search requires a completely different approach from traditional recruitment—it requires discretion, deep industry networks, and the ability to engage passive, high-performing leaders.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our executive search practice across India focuses on identifying leaders who not only possess the necessary operational expertise but also align seamlessly with your organization's vision, culture, and long-term objectives.
                </p>
              </FadeIn>
            </div>
            
            <div className="w-full lg:w-1/2">
              <FadeIn direction="left" delay={0.2}>
                <div className="bg-background border border-border p-8 rounded-sm shadow-sm">
                  <h3 className="text-2xl font-bold mb-6">The APEX 24 Advantage</h3>
                  <div className="space-y-4">
                    {[
                      "Absolute Confidentiality & Discretion",
                      "Exclusive Passive Candidate Networks",
                      "In-depth Leadership Competency Assessment",
                      "Detailed Market & Compensation Intelligence"
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
            <h2 className="text-4xl font-heading font-bold mb-6">Looking for your next strategic leader?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button asChild size="lg">
                <Link href="/employers">Initiate a Confidential Search</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
