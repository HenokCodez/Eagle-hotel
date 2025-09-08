"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking")
    bookingSection?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    aboutSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/luxury-hotel-exterior-in-ethiopia-with-beautiful-a.jpg"
          alt="Eagle International Hotel Exterior"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Hero Content */}
      <div
        className={`relative z-10 text-center text-white px-4 max-w-4xl mx-auto transition-all duration-1000 will-change-transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="font-serif font-black text-4xl md:text-6xl lg:text-7xl mb-6 text-balance leading-tight">
          Eagle International Hotel
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-balance font-light max-w-2xl mx-auto leading-relaxed">
          Experience luxury and authentic Ethiopian hospitality in the heart of Adama
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={scrollToBooking}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg will-change-transform"
          >
            Book Your Stay
          </Button>
          <Button
            onClick={scrollToAbout}
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 bg-transparent will-change-transform"
          >
            Discover More
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={scrollToAbout}
          className="text-white hover:text-primary transition-colors duration-300 animate-bounce will-change-transform"
          aria-label="Scroll to about section"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  )
}
