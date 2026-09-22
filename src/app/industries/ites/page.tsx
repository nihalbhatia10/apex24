import Image from "next/image"
import { FadeIn } from "@/components/animations/FadeIn"
import { Button } from "@/components/ui/Button"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { CheckCircle2, Smartphone } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'ITES & BPO Recruitment India | APEX 24',
  description: 'Specialized recruitment for the ITES and BPO sector in India. APEX 24 helps organizations build scalable, efficient operational teams.',
  alternates: {
    canonical: 'https://apex24consultancy.com/industries/ites'
  }
}

export default function ITESIndustryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <section className="relative pt-32 pb-20 bg-background border-b border-border overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <FadeIn direction="up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-accent" />
              </div>
              <span className="text-accent text-sm font-semibold tracking-widest uppercase">Industry Expertise</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">IT Enabled Services (ITES)</h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Building scalable teams for BPOs, KPOs, and shared service centers, focusing on operational efficiency and domain expertise.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/2">
              <FadeIn direction="right">
                <SectionHeading subtitle="Industry Insight" title="Scaling Operational Excellence" className="mb-8" />
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  The ITES and BPM (Business Process Management) sector is a cornerstone of India's service exports. Success in this sector depends heavily on the rapid acquisition of talent at scale, while strictly maintaining quality and communication standards.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  APEX 24 provides both volume hiring solutions for entry-level operations and specialized recruitment for mid-to-senior management roles in ITES. We understand the metrics that matter in this industry: attrition management, process knowledge, and operational agility.
                </p>
              </FadeIn>
            </div>
            
            <div className="w-full lg:w-1/2">
              <FadeIn direction="left" delay={0.2}>
                <div className="bg-background border border-border p-8 rounded-sm shadow-sm">
                  <h3 className="text-2xl font-bold mb-6">Key Roles We Place</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Process Managers & Operations Heads",
                      "Quality Assurance (QA) Leads",
                      "Customer Success Managers",
                      "Transitions & Migrations Specialists",
                      "Workforce Management (WFM) Experts",
                      "Subject Matter Experts (SMEs)"
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
            <h2 className="text-4xl font-heading font-bold mb-6">Build your ITES operations today.</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button asChild size="lg">
                <Link href="/services/bulk-hiring">View Bulk Hiring Services</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/employers">Submit Hiring Requirement</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
