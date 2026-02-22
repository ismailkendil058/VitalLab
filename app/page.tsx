import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { MarqueeBanner } from "@/components/marquee-banner"
import { MissionSection } from "@/components/mission-section"
import { ProcessSection } from "@/components/process-section"
import { ServicesSection } from "@/components/services-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <MarqueeBanner />
      <MissionSection />
      <ProcessSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
