import Image from "next/image"
import { FadeIn } from "@/components/animations/FadeIn"
import { Button } from "@/components/ui/Button"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Recruitment Consultancy in India | APEX 24',
  description: 'Top-tier recruitment agency in India providing comprehensive talent acquisition and hiring solutions nationwide.',
  alternates: {
    canonical: 'https://apex24consultancy.com/services/recruitment-consultancy-india'
  }
}

export default function RecruitmentConsultancyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Recruitment Consultancy in India",
    "provider": {
      "@type": "Organization",
      "name": "APEX 24 Recruitment & Talent Solutions"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "description": "Premium recruitment consultancy services for organizations across India."
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-background border-b border-border overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5 mix-blend-multiply">
          <Image src="/images/texture.png" alt="Premium Texture" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <FadeIn direction="up">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">Service</span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">Recruitment Consultancy in India</h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Strategic talent acquisition tailored for the modern Indian enterprise. We navigate complex talent landscapes to find professionals who drive growth.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/2">
              <FadeIn direction="right">
                <SectionHeading 
                  subtitle="Why APEX 24"
                  title="A Nationwide Reach with Local Expertise"
                  className="mb-8"
                />
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  Headquartered in Pune, APEX 24 operates as a premier recruitment consultancy in India. The Indian talent market is vast, dynamic, and highly competitive. Identifying the right fit requires more than just database searches; it demands deep market intelligence and a robust network.
                </p>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  We partner with organizations ranging from fast-growing startups to established multinationals, providing them with the human capital necessary to achieve their strategic objectives.
                </p>
              </FadeIn>
            </div>
            
            <div className="w-full lg:w-1/2">
              <FadeIn direction="left" delay={0.2}>
                <div className="bg-background border border-border p-8 rounded-sm shadow-sm">
                  <h3 className="text-2xl font-bold mb-6">Our Consultancy Approach</h3>
                  <div className="space-y-6">
                    {[
                      "Comprehensive Market Mapping",
                      "Rigorous Candidate Evaluation",
                      "Cultural Fit Assessment",
                      "End-to-End Hiring Management"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                        <span className="text-foreground font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn direction="up">
            <h2 className="text-3xl font-heading font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="border border-border p-6 rounded-sm">
                <h3 className="font-bold text-lg mb-2">Do you provide recruitment services outside of Pune?</h3>
                <p className="text-muted-foreground">Yes. While our headquarters is in Pune, APEX 24 is a recruitment consultancy serving clients and candidates across all major Indian cities.</p>
              </div>
              <div className="border border-border p-6 rounded-sm">
                <h3 className="font-bold text-lg mb-2">How long does a typical recruitment cycle take?</h3>
                <p className="text-muted-foreground">Timelines vary based on the complexity of the role. However, our robust network allows us to present qualified shortlisted candidates efficiently, often within the first week of engagement.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary/20 border-t border-border">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <FadeIn direction="up">
            <h2 className="text-4xl font-heading font-bold mb-6">Looking for exceptional talent?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Partner with an India-wide recruitment consultancy that understands your unique hiring requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/employers">Submit Your Hiring Requirement</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
