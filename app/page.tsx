import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PainPointsSection } from "@/components/pain-points-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { EbooksSection } from "@/components/ebooks-section"
import { BlogSection } from "@/components/blog-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <PainPointsSection />
      <AboutSection />
      <ServicesSection />
      <EbooksSection />
      <BlogSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
