import Image from "next/image"
import { FadeIn } from "@/components/animations/FadeIn"
import { Button } from "@/components/ui/Button"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { CheckCircle2, Award } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Leadership Recruitment & Management Hiring | APEX 24',
  description: 'Specialized executive search and leadership recruitment across India. Find visionary C-suite and management professionals with APEX 24.',
  alternates: {
    canonical: 'https://apex24consultancy.com/industries/leadership-management'
  }
}

export default function LeadershipIndustryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <section className="relative pt-32 pb-20 bg-background border-b border-border overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <FadeIn direction="up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <span className="text-accent text-sm font-semibold tracking-widest uppercase">Industry Expertise</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">Leadership & Management</h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Identifying the visionaries, strategists, and operational leaders who define organizational success.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/2">
              <FadeIn direction="right">
                <SectionHeading subtitle="Industry Insight" title="The Impact of True Leadership" className="mb-8" />
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  In a rapidly changing business environment, an organization's adaptability and success hinge entirely on its leadership. Finding executives who can drive transformation, manage complex stakeholder relationships, and inspire teams is a critical undertaking.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our specialized leadership and executive search practice operates with absolute discretion. We engage with passive, high-performing leaders across India, rigorously assessing their track records, strategic vision, and cultural compatibility with your enterprise.
                </p>
              </FadeIn>
            </div>
            
            <div className="w-full lg:w-1/2">
              <FadeIn direction="left" delay={0.2}>
                <div className="bg-background border border-border p-8 rounded-sm shadow-sm">
                  <h3 className="text-2xl font-bold mb-6">Key Roles We Place</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      "C-Suite (CEO, COO, CFO, CTO, CHRO)",
                      "Vice Presidents & Senior Vice Presidents",
                      "Country Heads & Managing Directors",
                      "General Managers & Business Unit Heads",
                      "Strategic Advisory & Board Members"
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
            <h2 className="text-4xl font-heading font-bold mb-6">Looking for transformative leadership?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button asChild size="lg">
                <Link href="/services/executive-search">View Executive Search Services</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/employers">Initiate Confidential Search</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
