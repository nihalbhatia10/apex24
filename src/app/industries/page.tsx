import { FadeIn } from "@/components/animations/FadeIn"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { ArrowRight, Building2, ShieldCheck, Monitor, Smartphone, Briefcase, Award } from "lucide-react"

const industryData = [
  { 
    id: "bfsi",
    title: "Banking & Financial Services", 
    desc: "From retail banking to wealth management and fintech startups, we identify professionals with the exact regulatory knowledge and technical expertise required for this high-stakes sector.",
    icon: Building2
  },
  { 
    id: "insurance",
    title: "Insurance", 
    desc: "Navigating the evolving landscape of life, health, and general insurance by placing actuaries, underwriters, and claims specialists who drive operational excellence.",
    icon: ShieldCheck
  },
  { 
    id: "it",
    title: "Information Technology", 
    desc: "Sourcing top-tier engineering talent, software developers, and IT leadership capable of spearheading digital transformation and technological innovation.",
    icon: Monitor
  },
  { 
    id: "ites",
    title: "IT Enabled Services", 
    desc: "Building scalable teams for BPOs, KPOs, and shared service centers, focusing on operational efficiency and domain expertise.",
    icon: Smartphone
  },
  { 
    id: "corporate",
    title: "Corporate & Business Services", 
    desc: "Recruiting for critical support functions including HR, Finance, Marketing, and Legal across various corporate environments.",
    icon: Briefcase
  },
  { 
    id: "leadership",
    title: "Leadership & Management", 
    desc: "Executive search and specialized hiring for C-suite, VP, and Director level roles requiring exceptional strategic vision.",
    icon: Award
  }
]

export default function IndustriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-20 bg-background border-b border-border">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn direction="up">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Deep domain expertise across critical sectors, enabling us to deliver precise and impactful talent acquisition.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryData.map((ind, index) => (
              <FadeIn key={ind.id} delay={index * 0.1} direction="up" className="h-full">
                <div className="p-8 md:p-10 border border-border bg-background rounded-sm hover:border-accent hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 h-full flex flex-col group">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors duration-300">
                    <ind.icon className="w-6 h-6 text-foreground group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{ind.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow">{ind.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
