import Image from "next/image"
import { FadeIn } from "@/components/animations/FadeIn"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { CheckCircle2 } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-background border-b border-border overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5 mix-blend-multiply">
          <Image src="/images/texture.png" alt="Premium Texture" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <FadeIn direction="up">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">About Apex 24</h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              We are a dedicated recruitment and talent acquisition consultancy driven by the belief that the right professional connections transform organizations.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Powered by Partnership Section */}
      <section className="py-24 bg-primary/20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <FadeIn direction="left">
                <SectionHeading 
                  subtitle="Powered by Partnership"
                  title="Backed by Transcendence Human Resources"
                  className="mb-8"
                />
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Apex 24 operates proudly as an authorized franchise partner of Transcendence Human Resources. This strategic partnership empowers us with industry-leading methodologies, an extensive network, and decades of collective recruitment expertise.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  While we share a foundation of excellence, Apex 24 maintains a distinct, agile approach tailored to the unique demands of modern enterprises and today's dynamic professional landscape.
                </p>
              </FadeIn>
            </div>
            <div className="w-full md:w-1/2">
              <FadeIn direction="right" delay={0.2} className="h-full">
                <div className="relative bg-background border border-border p-12 rounded-sm text-center h-[400px] md:h-full flex flex-col justify-center overflow-hidden group">
                  <div className="absolute inset-0 z-0">
                    <Image src="/images/team.png" alt="Professional Team" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute inset-0 bg-background/80 group-hover:bg-background/60 transition-colors duration-700 backdrop-blur-sm" />
                  </div>
                  <div className="relative z-10">
                    <span className="text-accent uppercase tracking-widest text-xs font-semibold block mb-4">Authorized Franchise Partner</span>
                    <div className="text-3xl font-heading font-bold text-foreground">
                      Transcendence Human Resources
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Philosophy */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <FadeIn direction="up">
            <SectionHeading 
              centered
              subtitle="Our Philosophy"
              title="A Human-First Approach"
              className="mb-16"
            />
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            {[
              {
                title: "Professional Values",
                desc: "We operate with absolute transparency, integrity, and confidentiality. Trust is the foundation of every placement we make."
              },
              {
                title: "Commitment to Candidates",
                desc: "We don't just fill roles; we align career trajectories. Every professional we engage with receives our dedicated support and guidance."
              },
              {
                title: "Commitment to Employers",
                desc: "We act as an extension of your talent acquisition team, fiercely protecting your employer brand while securing exceptional talent."
              }
            ].map((item, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <div className="p-8 border border-border bg-primary/5 rounded-sm h-full hover:border-accent transition-colors duration-300">
                  <CheckCircle2 className="w-8 h-8 text-accent mb-6" />
                  <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
