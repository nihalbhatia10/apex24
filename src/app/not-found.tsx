import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { FadeIn } from "@/components/animations/FadeIn"

export const metadata = {
  title: 'Page Not Found | APEX 24',
}

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen pt-[90px]">
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20">
        <FadeIn direction="up">
          <h1 className="text-8xl font-heading font-black text-accent mb-6">404</h1>
          <h2 className="text-3xl font-heading font-bold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto text-lg">
            The page you are looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild>
              <Link href="/">Return to Homepage</Link>
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm max-w-2xl mx-auto">
            <Link href="/services" className="text-muted-foreground hover:text-accent transition-colors p-2 border border-border rounded-sm hover:border-accent">Services</Link>
            <Link href="/industries" className="text-muted-foreground hover:text-accent transition-colors p-2 border border-border rounded-sm hover:border-accent">Industries</Link>
            <Link href="/employers" className="text-muted-foreground hover:text-accent transition-colors p-2 border border-border rounded-sm hover:border-accent">Employers</Link>
            <Link href="/candidates" className="text-muted-foreground hover:text-accent transition-colors p-2 border border-border rounded-sm hover:border-accent">Candidates</Link>
            <Link href="/jobs" className="text-muted-foreground hover:text-accent transition-colors p-2 border border-border rounded-sm hover:border-accent">Jobs</Link>
            <Link href="/locations/pune" className="text-muted-foreground hover:text-accent transition-colors p-2 border border-border rounded-sm hover:border-accent">Pune HQ</Link>
            <Link href="/about" className="text-muted-foreground hover:text-accent transition-colors p-2 border border-border rounded-sm hover:border-accent">About Us</Link>
            <Link href="/contact" className="text-muted-foreground hover:text-accent transition-colors p-2 border border-border rounded-sm hover:border-accent">Contact</Link>
          </div>
        </FadeIn>
      </section>
    </div>
  )
}
