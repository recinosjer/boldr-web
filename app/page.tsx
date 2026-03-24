import { Header } from "@/components/header"
import { HeroCarousel } from "@/components/hero-carousel"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroCarousel />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
