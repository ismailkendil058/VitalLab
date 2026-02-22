"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Mission", href: "#mission" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Avis", href: "#testimonials" },
  { label: "Contact", href: "#cta" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-card/80 backdrop-blur-xl shadow-[0_1px_0_0_var(--border)]"
        : "bg-transparent"
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-sm overflow-hidden border border-primary/20 bg-background transition-all duration-700 group-hover:border-primary/50">
            <img src="/VitalWeb.png" alt="Logo" className="h-full w-full object-contain p-1 transition-transform duration-500 group-hover:scale-110" />
          </div>
          <div className="flex flex-col">
            <span className="font-brand text-2xl font-semibold text-foreground tracking-[-0.02em] leading-none transition-colors duration-500 group-hover:text-primary">
              Vital<span className="text-primary">Lab</span>
            </span>
            <span className="text-[7px] font-bold uppercase tracking-[0.4em] text-primary/40 mt-1">Creative Agency</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#cta"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] md:inline-flex"
        >
          Planifier un appel
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-200 hover:bg-secondary md:hidden"
          aria-label={isMobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out md:hidden ${isMobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="bg-card/95 backdrop-blur-xl border-t border-border px-6 pb-6 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="block py-3 text-base font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setIsMobileOpen(false)}
            className="mt-4 block w-full rounded-full bg-primary py-3 text-center text-sm font-medium text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            Planifier un appel
          </a>
        </div>
      </div>
    </header>
  )
}
