import Image from "next/image"
import { FadeIn } from "@/components/animations/FadeIn"
import { Button } from "@/components/ui/Button"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { CheckCircle2, Monitor } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'IT Industry Recruitment | APEX 24',
  description: 'IT recruitment solutions across India. APEX 24 helps organizations hire top software engineers, cloud architects, and tech leaders.',
  alternates: {
    canonical: 'https://apex24consultancy.com/industries/information-technology'
  }
}

export default function ITIndustryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <section className="relative pt-32 pb-20 bg-background border-b border-border overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <FadeIn direction="up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Monitor className="w-6 h-6 text-accent" />
              </div>
              <span className="text-accent text-sm font-semibold tracking-widest uppercase">Industry Expertise</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">Information Technology</h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Navigating the hyper-competitive tech landscape to secure the engineers and leaders who build the future.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/2">
              <FadeIn direction="right">
                <SectionHeading subtitle="Industry Insight" title="The IT Talent Challenge" className="mb-8" />
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  The Indian IT sector is globally recognized, yet finding truly exceptional technical talent remains a primary challenge for tech companies, startups, and enterprise IT departments. The pace of technological change means skill requirements evolve rapidly.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  At APEX 24, we don't just match keywords. We understand technology stacks—from modern frontend frameworks (React, Angular, Vue) to robust backend architectures (Node.js, Java, Python, Go) and cloud infrastructure (AWS, Azure, GCP). Our recruitment process ensures candidates possess both the technical aptitude and the cultural fit required for fast-paced environments.
                </p>
              </FadeIn>
            </div>
            
            <div className="w-full lg:w-1/2">
              <FadeIn direction="left" delay={0.2}>
                <div className="bg-background border border-border p-8 rounded-sm shadow-sm">
                  <h3 className="text-2xl font-bold mb-6">Key Roles We Place</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Software Development Engineers (SDE I, II, III)",
                      "Cloud Architects & DevOps Engineers",
                      "Data Scientists & Machine Learning Engineers",
                      "Cybersecurity Analysts & Managers",
                      "Product Managers",
                      "CTOs & VPs of Engineering"
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
            <h2 className="text-4xl font-heading font-bold mb-6">Build your engineering team today.</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button asChild size="lg">
                <Link href="/services/it-recruitment">View IT Recruitment Services</Link>
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
