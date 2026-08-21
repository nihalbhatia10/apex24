import Image from "next/image"
import { FadeIn } from "@/components/animations/FadeIn"
import { Button } from "@/components/ui/Button"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { ServiceCard } from "@/components/ui/ServiceCard"
import { ArrowRight, CheckCircle2, Briefcase, Users, Building, LineChart } from "lucide-react"
import Link from "next/link"

const services = [
  { num: "01", title: "Bulk Hiring", desc: "Efficient, high-volume recruitment without compromising on quality." },
  { num: "02", title: "BFSI Hiring", desc: "Specialized talent acquisition for Banking, Financial Services, and Insurance." },
  { num: "03", title: "Candidate Sourcing", desc: "Targeted identification of high-potential professionals." },
  { num: "04", title: "IT Leadership Hiring", desc: "Connecting organizations with transformative technology leaders." },
  { num: "05", title: "Specialized Recruitment", desc: "Niche hiring solutions for complex roles and requirements." },
  { num: "06", title: "Talent Acquisition Support", desc: "End-to-end partnership in building exceptional teams." }
]

const industries = [
  "Banking & Financial Services",
  "Insurance",
  "Information Technology",
  "IT Enabled Services",
  "Corporate / Business Services",
  "Specialized Industries"
]

const processSteps = [
  { num: "01", title: "Understand", desc: "We begin by deeply understanding the organization's unique requirements, culture, and goals." },
  { num: "02", title: "Identify", desc: "Leveraging our network to identify the most suitable and exceptional talent in the market." },
  { num: "03", title: "Evaluate", desc: "Rigorous evaluation of candidates against the specific technical and cultural requirements." },
  { num: "04", title: "Connect", desc: "Facilitating the right professional connection for long-term mutual success." }
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* SECTION 1 - HERO */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero.png" alt="Modern office" fill className="object-cover object-center opacity-60" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl">
            <FadeIn delay={0.2} direction="up">
              <span className="text-accent uppercase tracking-[0.2em] font-semibold text-sm mb-6 block">
                APEX 24 &times; Transcendence Human Resources
              </span>
            </FadeIn>
            
            <FadeIn delay={0.4} direction="up">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[1.1] tracking-tight mb-8">
                Connecting Talent <br className="hidden md:block" />
                <span className="text-muted-foreground">With Opportunity.</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.6} direction="up">
              <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
                We help organizations identify the right people while guiding professionals toward meaningful career milestones. A premium recruitment experience built on trust and human connection.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.8} direction="up" className="flex flex-col sm:flex-row gap-6">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/contact">Find Talent</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="/candidates">Explore Opportunities</Link>
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 2 - TRUST / CREDIBILITY */}
      <section className="py-24 bg-primary/20 border-y border-border">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Built on Experience. Driven by People.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg">
              Operating as an authorized franchise partner of Transcendence Human Resources, we combine established industry methodologies with a fresh, dedicated approach to talent acquisition.
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale">
              {/* Trust placeholders or abstract icons */}
              <div className="flex items-center gap-3"><Building className="w-6 h-6" /> <span className="font-semibold tracking-wider">ENTERPRISE</span></div>
              <div className="flex items-center gap-3"><Briefcase className="w-6 h-6" /> <span className="font-semibold tracking-wider">PROFESSIONAL</span></div>
              <div className="flex items-center gap-3"><Users className="w-6 h-6" /> <span className="font-semibold tracking-wider">NETWORK</span></div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 3 - TWO PATHS */}
      <section className="py-0 flex flex-col md:flex-row">
        {/* Employers Path */}
        <div className="w-full md:w-1/2 p-12 md:p-24 bg-background border-r border-border hover:bg-primary/5 transition-colors duration-500 group">
          <FadeIn direction="up">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">For Employers</span>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6 group-hover:text-accent transition-colors duration-500">
              Build your team with confidence.
            </h2>
            <p className="text-muted-foreground mb-12 text-lg">
              Strategic recruitment and talent acquisition solutions designed to align with your organizational goals and scale.
            </p>
            <Button asChild variant="outline">
              <Link href="/employers">Partner With Us <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </FadeIn>
        </div>
        
        {/* Candidates Path */}
        <div className="w-full md:w-1/2 p-12 md:p-24 bg-primary/10 border-t md:border-t-0 border-border hover:bg-primary/20 transition-colors duration-500 group">
          <FadeIn direction="up" delay={0.2}>
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">For Candidates</span>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6 group-hover:text-accent transition-colors duration-500">
              Your next opportunity starts here.
            </h2>
            <p className="text-muted-foreground mb-12 text-lg">
              Dedicated support to help professionals discover meaningful roles and navigate their career trajectory.
            </p>
            <Button asChild variant="secondary">
              <Link href="/candidates">Explore Opportunities <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 4 - SERVICES */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5 mix-blend-multiply">
          <Image src="/images/texture.png" alt="Premium Texture" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <FadeIn direction="up" className="mb-20">
            <SectionHeading 
              subtitle="Our Expertise"
              title="Tailored Talent Solutions"
            />
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <FadeIn key={service.num} delay={index * 0.1} direction="up" className="h-full">
                <Link href="/services" className="block h-full">
                  <ServiceCard 
                    number={service.num}
                    title={service.title}
                    description={service.desc}
                    className="h-full"
                  />
                </Link>
              </FadeIn>
            ))}
          </div>
          
          <FadeIn direction="up" delay={0.6} className="mt-16 text-center">
            <Button asChild variant="outline">
              <Link href="/services">View All Services</Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 5 - INDUSTRIES */}
      <section className="py-32 bg-primary/20 border-y border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/3">
              <FadeIn direction="right">
                <SectionHeading 
                  subtitle="Sectors"
                  title="Industries We Serve"
                  className="mb-8"
                />
                <p className="text-muted-foreground mb-8 text-lg">
                  Deep market understanding across critical sectors, allowing us to identify and engage specialized talent effectively.
                </p>
                <Button asChild variant="outline">
                  <Link href="/industries">Explore Industries</Link>
                </Button>
              </FadeIn>
            </div>
            
            <div className="w-full lg:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industries.map((ind, i) => (
                  <FadeIn key={ind} delay={i * 0.1} direction="up">
                    <div className="p-6 bg-background border border-border rounded-sm hover:border-accent transition-colors duration-300 flex items-center justify-between group">
                      <span className="font-semibold text-foreground group-hover:text-accent transition-colors">{ind}</span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" />
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - HOW WE WORK */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn direction="up" className="mb-20 text-center">
            <SectionHeading 
              centered
              subtitle="Process"
              title="A Methodical Approach to Hiring"
            />
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.2} direction="up" className="relative">
                {i !== processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[50%] w-[100%] h-[1px] bg-border z-0" />
                )}
                <div className="flex flex-col relative z-10">
                  <div className="inline-block bg-background pr-8">
                    <div className="text-6xl font-heading font-black text-foreground/10 mb-6">{step.num}</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 - WHY APEX 24 */}
      <section className="py-32 bg-primary/40 border-y border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn direction="up">
              <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-6 block">Why Partner With Us</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12">
                A human-first approach to a professional process.
              </h2>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-left mt-16">
              {[
                "Unwavering professional confidentiality.",
                "Quality-focused sourcing over volume.",
                "Deep understanding of technical requirements.",
                "Commitment to long-term partnerships."
              ].map((point, i) => (
                <FadeIn key={i} delay={i * 0.1} direction="up" className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                  <p className="text-lg text-muted-foreground">{point}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 - CAREER OPPORTUNITIES */}
      <section className="py-32 bg-background relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="bg-secondary border border-border p-12 md:p-24 rounded-sm flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
            
            <div className="w-full md:w-2/3 relative z-10">
              <FadeIn direction="left">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-secondary-foreground">
                  Your next career move could be closer than you think.
                </h2>
                <p className="text-muted-foreground text-lg max-w-xl">
                  Connect with us to discover opportunities that align with your professional trajectory and aspirations.
                </p>
              </FadeIn>
            </div>
            
            <div className="w-full md:w-1/3 flex flex-col sm:flex-row md:flex-col gap-4 relative z-10">
              <FadeIn direction="right" delay={0.2}>
                <Button asChild size="lg" className="w-full">
                  <Link href="/candidates">Explore Jobs</Link>
                </Button>
              </FadeIn>
              <FadeIn direction="right" delay={0.3}>
                <Button asChild variant="outline" size="lg" className="w-full bg-transparent border-border hover:border-foreground">
                  <Link href="/candidates">Submit Your Resume</Link>
                </Button>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 - EMPLOYER CTA */}
      <section className="py-32 bg-primary/10 border-t border-border">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <FadeIn direction="up">
            <h2 className="text-5xl md:text-6xl font-heading font-bold mb-8">
              Looking for the right talent?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Tell us what you're looking for. Our team will help you identify the right recruitment approach.
            </p>
            <Button asChild variant="secondary" size="lg">
              <Link href="/employers">Discuss Your Hiring Needs</Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 10 - FINAL CTA */}
      <section className="py-40 bg-background flex flex-col items-center justify-center text-center">
        <FadeIn direction="up" distance={30}>
          <h2 className="text-6xl md:text-8xl font-heading font-black tracking-tighter mb-12">
            Let's build <br className="md:hidden" />
            <span className="text-accent">what's next.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="min-w-[200px]">
              <Link href="/contact">Find Talent</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-w-[200px]">
              <Link href="/candidates">Find Opportunities</Link>
            </Button>
          </div>
        </FadeIn>
      </section>
    </div>
  )
}
