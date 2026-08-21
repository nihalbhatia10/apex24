import { FadeIn } from "@/components/animations/FadeIn"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/forms/Input"
import { Textarea } from "@/components/forms/Textarea"
import { SectionHeading } from "@/components/ui/SectionHeading"

export default function EmployersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-20 bg-background border-b border-border">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn direction="up">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">For Employers</span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-foreground max-w-4xl">
              Better hiring starts with the right recruitment partner.
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              We provide strategic talent acquisition solutions to help you build resilient, high-performing teams.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-primary/20">
        <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/2">
            <FadeIn direction="right">
              <SectionHeading 
                subtitle="Start a Conversation"
                title="Discuss Your Hiring Needs"
                className="mb-8"
              />
              <p className="text-muted-foreground mb-12 text-lg">
                Whether you need specialized IT leadership, volume hiring, or niche BFSI talent, our team is ready to align with your objectives. Share your requirements, and a senior consultant will connect with you.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-sm uppercase tracking-wider font-semibold text-foreground mb-2">Our Approach</h4>
                  <p className="text-muted-foreground text-sm">We don't just send resumes. We act as an extension of your employer brand, ensuring every candidate interaction is professional, transparent, and aligned with your culture.</p>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider font-semibold text-foreground mb-2">Why Partner With Us</h4>
                  <p className="text-muted-foreground text-sm">Backed by the established infrastructure of Transcendence Human Resources, Apex 24 delivers agile, high-quality recruitment outcomes.</p>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <div className="w-full lg:w-1/2">
            <FadeIn direction="left" delay={0.2}>
              <form className="bg-background border border-border p-8 md:p-10 rounded-sm shadow-xl flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-wider text-muted-foreground">Full Name</label>
                    <Input placeholder="John Doe" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-wider text-muted-foreground">Company Name</label>
                    <Input placeholder="Acme Corp" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-wider text-muted-foreground">Designation</label>
                    <Input placeholder="HR Head / Founder" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-wider text-muted-foreground">Email Address</label>
                    <Input type="email" placeholder="john@company.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-wider text-muted-foreground">Phone Number</label>
                    <Input type="tel" placeholder="+91 98765 43210" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-wider text-muted-foreground">Number of Positions</label>
                    <Input type="number" placeholder="e.g., 5" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">Hiring Requirement / Message</label>
                  <Textarea placeholder="Please describe the roles you are looking to fill and any specific requirements..." />
                </div>
                
                <Button variant="secondary" size="lg" className="w-full mt-4">
                  Start a Conversation
                </Button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
