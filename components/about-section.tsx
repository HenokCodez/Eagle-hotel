"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Star, Users, Calendar } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2, rootMargin: "50px" },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 will-change-transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-foreground mb-6 text-balance">
              Welcome to Eagle International Hotel
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              Nestled in the vibrant city of Adama, Eagle International Hotel stands as a beacon of luxury and Ethiopian
              hospitality. Our commitment to excellence ensures every guest experiences the perfect blend of modern
              comfort and traditional warmth.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div className="space-y-6">
              <h3 className="font-serif font-semibold text-2xl md:text-3xl text-foreground mb-4">
                Your Gateway to Ethiopian Excellence
              </h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                Located in the bustling Awash Bank Mebrat Hayl area of Adama, our hotel serves as the perfect base for
                both business and leisure travelers. We pride ourselves on delivering world-class service while
                celebrating the rich cultural heritage of Ethiopia.
              </p>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                From our elegantly appointed rooms to our exceptional dining experiences, every detail has been
                carefully crafted to exceed your expectations. Our dedicated team of hospitality professionals is
                committed to making your stay truly memorable.
              </p>

              {/* Location Highlight */}
              <div className="flex items-start gap-3 p-4 bg-card rounded-lg border">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-card-foreground mb-1">Prime Location</h4>
                  <p className="text-sm text-muted-foreground">
                    Strategically positioned in Adama's business district, offering easy access to major attractions and
                    transportation hubs.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/elegant-hotel-lobby-with-ethiopian-cultural-elemen.jpg"
                alt="Eagle International Hotel Lobby"
                width={600}
                height={500}
                className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-lg"
                quality={85}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 will-change-transform">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  <Star className="text-primary" size={32} />
                </div>
                <h4 className="font-serif font-bold text-2xl text-foreground mb-2">4.8/5</h4>
                <p className="text-muted-foreground text-sm">Guest Rating</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 will-change-transform">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  <Users className="text-primary" size={32} />
                </div>
                <h4 className="font-serif font-bold text-2xl text-foreground mb-2">24/7</h4>
                <p className="text-muted-foreground text-sm">Customer Service</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 will-change-transform">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  <Calendar className="text-primary" size={32} />
                </div>
                <h4 className="font-serif font-bold text-2xl text-foreground mb-2">2018</h4>
                <p className="text-muted-foreground text-sm">Established</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 will-change-transform">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  <MapPin className="text-primary" size={32} />
                </div>
                <h4 className="font-serif font-bold text-2xl text-foreground mb-2">Adama</h4>
                <p className="text-muted-foreground text-sm">Prime Location</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
