import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import FacilitiesSection from "@/components/facilities-section"
import GallerySection from "@/components/gallery-section"
import TestimonialsSection from "@/components/testimonials-section"
import BookingSection from "@/components/booking-section"
import FAQSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <FacilitiesSection />
      <GallerySection />
      <TestimonialsSection />
      <BookingSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
