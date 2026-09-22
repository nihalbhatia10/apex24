import Image from "next/image"
import { FadeIn } from "@/components/animations/FadeIn"
import { Button } from "@/components/ui/Button"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { CheckCircle2, Building2 } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'BFSI Talent Acquisition | APEX 24',
  description: 'Specialized recruitment for the Banking and Financial Services sector in India. APEX 24 sources risk officers, wealth managers, and financial analysts.',
  alternates: {
    canonical: 'https://apex24consultancy.com/industries/banking-financial-services'
  }
}

export default function BFSIIndustryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <section className="relative pt-32 pb-20 bg-background border-b border-border overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <FadeIn direction="up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Building2 className="w-6 h-6 text-accent" />
              </div>
              <span className="text-accent text-sm font-semibold tracking-widest uppercase">Industry Expertise</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">Banking & Financial Services</h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Securing high-caliber financial talent with the required regulatory knowledge, analytical skills, and absolute integrity.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/2">
              <FadeIn direction="right">
                <SectionHeading subtitle="Industry Insight" title="Precision in Financial Hiring" className="mb-8" />
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  The Banking and Financial Services sector is the backbone of the Indian economy. As the industry rapidly evolves with the integration of FinTech and changing regulatory landscapes, the demand for specialized, compliant, and forward-thinking talent is at an all-time high.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  APEX 24 understands that bad hires in the financial sector carry exceptional risk. We conduct rigorous evaluations focusing not just on technical capabilities (modeling, quantitative analysis, regulatory frameworks) but also on ethical grounding and risk management abilities. We serve retail banks, NBFCs, investment firms, and modern financial technology companies across India.
                </p>
              </FadeIn>
            </div>
            
            <div className="w-full lg:w-1/2">
              <FadeIn direction="left" delay={0.2}>
                <div className="bg-background border border-border p-8 rounded-sm shadow-sm">
                  <h3 className="text-2xl font-bold mb-6">Key Roles We Place</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Investment Bankers & Analysts",
                      "Risk & Compliance Officers",
                      "Wealth & Portfolio Managers",
                      "FinTech Product Managers",
                      "Retail Banking Branch Managers",
                      "Credit Analysts"
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
            <h2 className="text-4xl font-heading font-bold mb-6">Build your financial team today.</h2>
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
