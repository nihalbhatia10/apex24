import Image from "next/image"
import { FadeIn } from "@/components/animations/FadeIn"
import { Button } from "@/components/ui/Button"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { CheckCircle2, Briefcase } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Corporate Recruitment India | APEX 24',
  description: 'Recruitment for critical corporate support functions across India, including HR, Finance, Legal, and Marketing roles.',
  alternates: {
    canonical: 'https://apex24consultancy.com/industries/corporate-business-services'
  }
}

export default function CorporateServicesIndustryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <section className="relative pt-32 pb-20 bg-background border-b border-border overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <FadeIn direction="up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-accent" />
              </div>
              <span className="text-accent text-sm font-semibold tracking-widest uppercase">Industry Expertise</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">Corporate & Business Services</h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Recruiting the operational backbone of modern enterprises across essential support functions.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/2">
              <FadeIn direction="right">
                <SectionHeading subtitle="Industry Insight" title="Building the Core" className="mb-8" />
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  Every successful organization, regardless of its primary product or service, relies on robust corporate functions. Human Resources, Finance, Legal, and Marketing are the pillars that sustain business growth and ensure regulatory compliance.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  APEX 24 helps organizations across India secure professionals who possess not only functional expertise but also the strategic mindset required to align their departments with broader corporate objectives.
                </p>
              </FadeIn>
            </div>
            
            <div className="w-full lg:w-1/2">
              <FadeIn direction="left" delay={0.2}>
                <div className="bg-background border border-border p-8 rounded-sm shadow-sm">
                  <h3 className="text-2xl font-bold mb-6">Key Roles We Place</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Human Resources (HRBP, Talent Acquisition, C&B)",
                      "Finance & Accounting (Controllers, FP&A)",
                      "Legal Counsel & Compliance",
                      "Marketing & Communications Directors",
                      "Procurement & Supply Chain Managers",
                      "Administration & Facility Heads"
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
            <h2 className="text-4xl font-heading font-bold mb-6">Build your corporate functions today.</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button asChild size="lg">
                <Link href="/services/recruitment-consultancy-india">View Recruitment Services</Link>
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
