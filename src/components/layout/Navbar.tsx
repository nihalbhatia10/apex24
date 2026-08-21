"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/Button"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "For Employers", href: "/employers" },
  { name: "For Candidates", href: "/candidates" },
  { name: "Industries", href: "/industries" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border py-4"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <span className="font-heading font-bold text-2xl tracking-tighter text-foreground">APEX 24</span>
          <span className="text-[0.65rem] uppercase tracking-widest text-muted-foreground hidden sm:block">Recruitment & Talent Solutions</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                pathname === link.href ? "text-accent" : "text-foreground/80"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link href="/contact" tabIndex={-1}>
            <Button variant="secondary" size="sm">Find Talent</Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-foreground hover:text-accent transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-[73px] z-40 bg-background/95 backdrop-blur-lg lg:hidden flex flex-col p-6 overflow-y-auto">
          <nav className="flex flex-col gap-6 mt-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-2xl font-heading font-medium transition-colors hover:text-accent",
                  pathname === link.href ? "text-accent" : "text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="mt-12 flex flex-col gap-4">
            <Link href="/contact" tabIndex={-1} className="w-full">
              <Button variant="secondary" className="w-full" onClick={() => setIsOpen(false)}>Find Talent</Button>
            </Link>
            <Link href="/candidates" tabIndex={-1} className="w-full">
              <Button variant="outline" className="w-full" onClick={() => setIsOpen(false)}>Explore Opportunities</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
