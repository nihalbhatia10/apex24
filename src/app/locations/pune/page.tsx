import Image from "next/image"
import { FadeIn } from "@/components/animations/FadeIn"
import { Button } from "@/components/ui/Button"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Recruitment Agency in Pune | APEX 24',
  description: 'APEX 24 is a premier recruitment agency in Pune, providing local and India-wide talent solutions in IT, BFSI, and executive search.',
  alternates: {
    canonical: 'https://apex24consultancy.com/locations/pune'
  }
}

export default function PuneLocationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "APEX 24 Recruitment & Talent Solutions",
    "image": "https://apex24consultancy.com/icon.jpg",
    "telephone": "+919021068823",
    "email": "hr@apex24consultancy.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "GQFJ+96H, Dr. Homi Bhabha Rd, Ram Nagar, Bavdhan",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411021",
      "addressCountry": "IN"
    },
    "description": "Headquartered in Pune, APEX 24 provides recruitment and talent solutions locally and across India.",
    "url": "https://apex24consultancy.com/locations/pune"
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <section className="relative pt-32 pb-20 bg-background border-b border-border overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <FadeIn direction="up">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">Headquarters</span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">Recruitment Agency in Pune</h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Based in Pune, APEX 24 is strategically positioned to serve the vibrant local market while delivering recruitment solutions across India.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/2">
              <FadeIn direction="right">
                <SectionHeading subtitle="Local Expertise, National Reach" title="Our Pune Base" className="mb-8" />
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  Pune is one of India's most dynamic economic hubs, home to thriving IT corridors, established manufacturing setups, and a rapidly expanding BFSI presence. As a recruitment agency in Pune, we deeply understand the local talent ecosystem.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  While our roots and headquarters are in Pune, our reach extends nationwide. We utilize our central base to coordinate sophisticated recruitment drives, executive searches, and bulk hiring mandates for organizations throughout India.
                </p>
              </FadeIn>
            </div>
            
            <div className="w-full lg:w-1/2">
              <FadeIn direction="left" delay={0.2}>
                <div className="bg-background border border-border p-8 rounded-sm shadow-sm">
                  <h3 className="text-2xl font-bold mb-6">Core Focus Areas in Pune</h3>
                  <div className="space-y-4">
                    {[
                      "IT & Technology Recruitment",
                      "BFSI Sector Hiring",
                      "Manufacturing & Engineering Talent",
                      "Executive Search for Local Enterprises"
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
                <h3 className="font-bold text-lg mb-2">Are your recruitment services limited to Pune?</h3>
                <p className="text-muted-foreground">No. While we are a recruitment agency in Pune, we serve employers and candidates across India.</p>
              </div>
              <div className="border border-border p-6 rounded-sm">
                <h3 className="font-bold text-lg mb-2">Can candidates visit your Pune office?</h3>
                <p className="text-muted-foreground">Yes, candidates in Pune are welcome to visit our office in Bavdhan for career counseling and interviews, subject to prior appointments.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-primary/20 border-t border-border">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <FadeIn direction="up">
            <h2 className="text-4xl font-heading font-bold mb-6">Hiring in Pune or across India?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button asChild size="lg">
                <Link href="/employers">Contact Our Team</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
