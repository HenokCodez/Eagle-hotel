"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Utensils, Wine, Trees, Car, Wifi, Waves, Building2, Users, Clock } from "lucide-react"

const facilities = [
  {
    icon: Utensils,
    title: "Restaurant",
    description: "Authentic Ethiopian cuisine and international dishes prepared by expert chefs",
  },
  {
    icon: Wine,
    title: "Bar",
    description: "Premium beverages and cocktails in an elegant atmosphere",
  },
  {
    icon: Trees,
    title: "Recreation Ground",
    description: "Beautiful outdoor spaces for relaxation and leisure activities",
  },
  {
    icon: Car,
    title: "Parking",
    description: "Secure and convenient parking facilities for all guests",
  },
  {
    icon: Wifi,
    title: "Wi-Fi",
    description: "High-speed complimentary internet access throughout the hotel",
  },
  {
    icon: Waves,
    title: "Sauna",
    description: "Rejuvenating sauna facilities for ultimate relaxation",
  },
  {
    icon: Building2,
    title: "Elevator",
    description: "Modern elevator access to all floors for your convenience",
  },
  {
    icon: Users,
    title: "Conference Hall",
    description: "State-of-the-art meeting facilities for business events",
  },
  {
    icon: Clock,
    title: "24hrs Customer Service",
    description: "Round-the-clock assistance for all your needs",
  },
]

export default function FacilitiesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="facilities" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-foreground mb-6 text-balance">
              World-Class Facilities
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              Experience luxury and convenience with our comprehensive range of premium facilities designed to make your
              stay exceptional
            </p>
          </div>

          {/* Facilities Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => {
              const IconComponent = facility.icon
              return (
                <Card
                  key={facility.title}
                  className={`group hover:shadow-lg transition-all duration-500 hover:-translate-y-1 border-border/50 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                  }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                        <IconComponent
                          className="text-primary group-hover:scale-110 transition-transform duration-300"
                          size={32}
                        />
                      </div>
                    </div>
                    <h3 className="font-serif font-semibold text-xl text-card-foreground mb-3">{facility.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed text-pretty">{facility.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
