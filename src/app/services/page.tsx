import Image from "next/image"
import { FadeIn } from "@/components/animations/FadeIn"
import { SectionHeading } from "@/components/ui/SectionHeading"

const detailedServices = [
  { num: "01", title: "Bulk Hiring", desc: "For organizations scaling rapidly, we provide efficient, high-volume recruitment without compromising on the quality of hires. We manage the entire funnel from sourcing to onboarding.", target: "High-growth startups, established enterprises expanding operations." },
  { num: "02", title: "BFSI Hiring", desc: "Specialized talent acquisition for the Banking, Financial Services, and Insurance sectors. We understand the regulatory and cultural nuances required for these critical roles.", target: "Banks, FinTechs, Insurance firms, Investment companies." },
  { num: "03", title: "Candidate Sourcing", desc: "Targeted identification of high-potential professionals who may not be actively seeking new opportunities. We map the market to find the exact skill sets you need.", target: "Companies looking for niche technical or specialized skills." },
  { num: "04", title: "IT Leadership Hiring", desc: "Connecting organizations with transformative technology leaders (CTOs, VPs, Directors) who can drive innovation and technical strategy.", target: "Tech companies, IT departments of enterprise organizations." },
  { num: "05", title: "Specialized Recruitment", desc: "Bespoke hiring solutions for complex roles that require a unique blend of experience, technical prowess, and leadership capabilities.", target: "Organizations filling unique or hybrid roles." },
  { num: "06", title: "Talent Acquisition Support", desc: "End-to-end partnership functioning as an extension of your internal HR team, providing strategic advice and operational recruitment power.", target: "Companies needing scalable recruitment infrastructure." },
  { num: "07", title: "Career Guidance", desc: "Personalized consulting for professionals looking to navigate the complexities of their industry, identify growth opportunities, and position themselves effectively.", target: "Mid-to-senior level professionals." },
  { num: "08", title: "Career Development", desc: "Strategic advice on skill acquisition, interview preparation, and professional branding to help candidates secure their ideal roles.", target: "Job seekers aiming for the next level in their careers." }
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative pt-32 pb-20 bg-background border-b border-border overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5 mix-blend-multiply">
          <Image src="/images/texture.png" alt="Premium Texture" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <FadeIn direction="up">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Comprehensive recruitment and talent solutions designed to connect exceptional organizations with outstanding professionals.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-primary/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {detailedServices.map((service, index) => (
              <FadeIn key={service.num} delay={index * 0.1} direction="up" className="h-full">
                <div className="group relative flex flex-col p-8 md:p-12 border border-border bg-transparent hover:border-accent transition-all duration-500 rounded-sm overflow-hidden h-full">
                  
                  {/* Background Image & Overlay */}
                  <div className="absolute inset-0 z-0">
                    <Image 
                      src={`/images/svc_${service.num}.png`} 
                      alt={service.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" 
                    />
                    <div className="absolute inset-0 bg-background/70 group-hover:bg-background/40 transition-colors duration-700 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-background/60 group-hover:bg-background/20 transition-colors duration-700" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex-grow flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-2xl font-bold text-foreground/40 font-heading">
                        {service.num}
                      </span>
                      <span className="text-xs uppercase tracking-widest text-accent font-semibold px-3 py-1 bg-accent/10 rounded-sm">
                        Service
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-foreground/80 text-base font-medium leading-relaxed mb-8 flex-grow">
                      {service.desc}
                    </p>
                    
                    <div className="pt-6 border-t border-border/50 mt-auto">
                      <span className="text-xs text-foreground/60 font-semibold uppercase tracking-wider block mb-2">Ideal For</span>
                      <p className="text-sm font-bold text-foreground">{service.target}</p>
                    </div>
                  </div>

                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
