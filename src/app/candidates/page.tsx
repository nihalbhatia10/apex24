import { FadeIn } from "@/components/animations/FadeIn"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/forms/Input"
import { Textarea } from "@/components/forms/Textarea"
import { SectionHeading } from "@/components/ui/SectionHeading"

export default function CandidatesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-20 bg-background border-b border-border">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn direction="up">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">For Candidates</span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-foreground max-w-4xl">
              Your next opportunity deserves the right direction.
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              We connect ambitious professionals with organizations that value their expertise and foster their growth.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-primary/20">
        <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/2">
            <FadeIn direction="right">
              <SectionHeading 
                subtitle="Join Our Network"
                title="Submit Your Resume"
                className="mb-8"
              />
              <p className="text-muted-foreground mb-12 text-lg">
                By joining our talent network, you'll be considered for exclusive opportunities across the BFSI, IT, and specialized sectors. Your information is treated with strict professional confidentiality.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-sm uppercase tracking-wider font-semibold text-foreground mb-2">Career Guidance</h4>
                  <p className="text-muted-foreground text-sm">We provide honest feedback and strategic advice to help you position yourself effectively in a competitive market.</p>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider font-semibold text-foreground mb-2">Confidentiality First</h4>
                  <p className="text-muted-foreground text-sm">Your resume and intent to explore new opportunities are never shared with prospective employers without your explicit consent.</p>
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
                    <label className="text-xs uppercase tracking-wider text-muted-foreground">Email Address</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-wider text-muted-foreground">Phone Number</label>
                    <Input type="tel" placeholder="+91 98765 43210" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-wider text-muted-foreground">Current Location</label>
                    <Input placeholder="Mumbai, India" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-wider text-muted-foreground">Experience (Yrs)</label>
                    <Input type="number" placeholder="5" />
                  </div>
                  <div className="flex flex-col gap-2 col-span-2">
                    <label className="text-xs uppercase tracking-wider text-muted-foreground">Industry / Domain</label>
                    <Input placeholder="BFSI / FinTech" />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">Preferred Role</label>
                  <Input placeholder="e.g., Product Manager, VP of Engineering" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">Upload Resume (PDF/Word)</label>
                  <Input type="file" className="cursor-pointer pt-2.5" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">Message / Cover Note (Optional)</label>
                  <Textarea placeholder="Share any specific preferences, notice period, or career goals..." />
                </div>
                
                <Button variant="secondary" size="lg" className="w-full mt-4">
                  Submit Application
                </Button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
