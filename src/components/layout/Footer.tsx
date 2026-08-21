import * as React from "react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary pt-20 pb-10 border-t border-border mt-auto">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Col */}
          <div className="flex flex-col space-y-6">
            <div>
              <span className="font-heading font-bold text-3xl tracking-tighter text-foreground block">APEX 24</span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground mt-1 block">Recruitment & Talent Solutions</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Connecting exceptional talent with exceptional opportunities. We provide human-first recruitment and talent acquisition solutions.
            </p>
          </div>

          {/* Nav Col */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-heading font-bold uppercase tracking-wider text-sm mb-2 text-foreground">Navigation</h4>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-accent transition-colors">About Us</Link>
            <Link href="/services" className="text-sm text-muted-foreground hover:text-accent transition-colors">Services</Link>
            <Link href="/employers" className="text-sm text-muted-foreground hover:text-accent transition-colors">For Employers</Link>
            <Link href="/candidates" className="text-sm text-muted-foreground hover:text-accent transition-colors">For Candidates</Link>
            <Link href="/industries" className="text-sm text-muted-foreground hover:text-accent transition-colors">Industries</Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">Contact</Link>
          </div>

          {/* Contact Col */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-heading font-bold uppercase tracking-wider text-sm mb-2 text-foreground">Contact</h4>
            <div className="text-sm text-muted-foreground flex flex-col space-y-2">
              <span>[APEX 24 PHONE NUMBER]</span>
              <span>[APEX 24 EMAIL]</span>
              <span>[APEX 24 OFFICE ADDRESS]</span>
            </div>
          </div>

          {/* Partner Col */}
          <div className="flex flex-col space-y-4 lg:items-end">
            <div className="bg-background/50 p-6 rounded-sm border border-border w-full">
              <span className="text-xs text-muted-foreground uppercase tracking-widest mb-2 block">Authorized Franchise Partner of</span>
              <span className="font-heading font-bold text-lg text-foreground">Transcendence Human Resources</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Apex 24. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-muted-foreground hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-accent transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
