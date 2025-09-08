"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react"

export default function ContactSection() {
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

  const openGoogleMaps = () => {
    const address = "Awash Bank Mebrat Hayl area, Adama, Ethiopia"
    const encodedAddress = encodeURIComponent(address)
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, "_blank")
  }

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-foreground mb-6 text-balance">
              Contact & Location
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              Get in touch with us or visit our prime location in the heart of Adama
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="font-serif font-semibold text-2xl md:text-3xl text-foreground mb-6">Get In Touch</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty mb-8">
                  We're here to assist you with reservations, inquiries, and any special requests. Our dedicated team is
                  available 24/7 to ensure your experience with Eagle International Hotel is exceptional.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <Card className="border-border/50 hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                        <MapPin className="text-primary" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-card-foreground mb-2">Address</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Awash Bank Mebrat Hayl area, around Awash Bank Mebrat Hayl
                          <br />
                          Adama, Ethiopia
                        </p>
                        <Button
                          variant="link"
                          className="p-0 h-auto text-primary hover:text-primary/80 mt-2"
                          onClick={openGoogleMaps}
                        >
                          <Navigation size={16} className="mr-1" />
                          Get Directions
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/50 hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                        <Phone className="text-primary" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-card-foreground mb-2">Phone</h4>
                        <p className="text-muted-foreground text-sm">
                          <a href="tel:+251221119306" className="hover:text-primary transition-colors">
                            +251 22 111 9306
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/50 hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                        <Mail className="text-primary" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-card-foreground mb-2">Email</h4>
                        <p className="text-muted-foreground text-sm">
                          <a
                            href="mailto:info@eagleinternationalhotel.com"
                            className="hover:text-primary transition-colors"
                          >
                            info@eagleinternationalhotel.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/50 hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                        <Clock className="text-primary" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-card-foreground mb-2">Reception Hours</h4>
                        <p className="text-muted-foreground text-sm">24 Hours - 7 Days a Week</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Map Section */}
            <div className="space-y-6">
              <div>
                <h3 className="font-serif font-semibold text-2xl md:text-3xl text-foreground mb-4">Our Location</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Strategically located in Adama's business district, Eagle International Hotel offers easy access to
                  major attractions, shopping centers, and transportation hubs.
                </p>
              </div>

              {/* Google Maps Embed */}
              <Card className="border-border/50 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative w-full h-96">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.8234567890123!2d39.2625!3d8.5500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMzMnMDAuMCJOIDM5wrAxNSc0NS4wIkU!5e0!3m2!1sen!2set!4v1234567890123!5m2!1sen!2set"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Eagle International Hotel Location"
                      className="rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none rounded-lg"></div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={openGoogleMaps}
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-[1.02]"
                >
                  <Navigation size={20} className="mr-2" />
                  View on Google Maps
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-[1.02] bg-transparent"
                  onClick={() => (window.location.href = "tel:+251221119306")}
                >
                  <Phone size={20} className="mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
