import Image from "next/image"
import { FadeIn } from "@/components/animations/FadeIn"
import { Button } from "@/components/ui/Button"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { CheckCircle2, ShieldCheck } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Insurance Industry Recruitment | APEX 24',
  description: 'Recruitment for the Insurance sector in India. Find actuaries, underwriters, and claims specialists with APEX 24.',
  alternates: {
    canonical: 'https://apex24consultancy.com/industries/insurance'
  }
}

export default function InsuranceIndustryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <section className="relative pt-32 pb-20 bg-background border-b border-border overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <FadeIn direction="up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-accent" />
              </div>
              <span className="text-accent text-sm font-semibold tracking-widest uppercase">Industry Expertise</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">Insurance</h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Identifying specialized talent capable of navigating the complex risk models and operational demands of the modern insurance industry.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/2">
              <FadeIn direction="right">
                <SectionHeading subtitle="Industry Insight" title="Sourcing Analytical & Operational Excellence" className="mb-8" />
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  The Indian insurance sector is experiencing rapid expansion, driven by increased awareness and digital distribution models (InsurTech). This growth requires a workforce that combines traditional actuarial science with modern data analytics and customer experience management.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  APEX 24 partners with Life, Health, and General Insurance companies to source professionals who understand risk mitigation, claims management, and regulatory compliance, ensuring organizational stability and growth.
                </p>
              </FadeIn>
            </div>
            
            <div className="w-full lg:w-1/2">
              <FadeIn direction="left" delay={0.2}>
                <div className="bg-background border border-border p-8 rounded-sm shadow-sm">
                  <h3 className="text-2xl font-bold mb-6">Key Roles We Place</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Actuaries & Risk Modelers",
                      "Underwriting Specialists",
                      "Claims Management Leadership",
                      "InsurTech Product Managers",
                      "Agency & Bancassurance Heads",
                      "Regulatory Compliance Officers"
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
            <h2 className="text-4xl font-heading font-bold mb-6">Build your insurance team today.</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button asChild size="lg">
                <Link href="/services/bfsi-recruitment">View BFSI Recruitment Services</Link>
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
