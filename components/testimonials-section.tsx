"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "London, UK",
    rating: 5,
    text: "Eagle International Hotel exceeded all my expectations. The staff was incredibly welcoming, and the Ethiopian hospitality was truly authentic. The rooms were luxurious and the restaurant served the most delicious traditional cuisine I've ever tasted.",
    avatar: "/professional-woman-smiling.png",
  },
  {
    name: "Michael Chen",
    location: "Singapore",
    rating: 5,
    text: "Perfect location for business travelers. The conference facilities were top-notch, and the 24-hour service made my stay seamless. I particularly enjoyed the sauna after long meetings. Will definitely return on my next trip to Ethiopia.",
    avatar: "/professional-man-smiling.png",
  },
  {
    name: "Amara Tadesse",
    location: "Addis Ababa, Ethiopia",
    rating: 5,
    text: "As a local, I was impressed by how Eagle International Hotel beautifully blends modern luxury with Ethiopian culture. The recreation area is perfect for family gatherings, and the bar has an excellent selection of both local and international beverages.",
    avatar: "/ethiopian-woman-smiling.jpg",
  },
  {
    name: "David Martinez",
    location: "Madrid, Spain",
    rating: 4,
    text: "Exceptional service and beautiful facilities. The hotel's attention to detail is remarkable, from the elegant lobby to the comfortable rooms. The parking was convenient, and the Wi-Fi was reliable throughout my stay. Highly recommended!",
    avatar: "/spanish-man-smiling.jpg",
  },
  {
    name: "Lisa Thompson",
    location: "Toronto, Canada",
    rating: 5,
    text: "The perfect blend of comfort and culture. Every staff member went above and beyond to ensure our stay was memorable. The restaurant's breakfast buffet was incredible, featuring both international and traditional Ethiopian dishes.",
    avatar: "/canadian-woman-smiling.jpg",
  },
]

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} size={16} className={`${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
    ))
  }

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-foreground mb-6 text-balance">
              What Our Guests Say
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              Discover why travelers from around the world choose Eagle International Hotel for their stay in Adama
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <Card className="min-h-[300px] border-border/50">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col items-center text-center">
                  <Quote className="text-primary mb-6" size={48} />

                  <div className="transition-all duration-500 ease-in-out">
                    <p className="text-lg md:text-xl text-card-foreground mb-6 leading-relaxed text-pretty max-w-2xl">
                      "{testimonials[currentIndex].text}"
                    </p>

                    <div className="flex justify-center mb-4">{renderStars(testimonials[currentIndex].rating)}</div>

                    <div className="flex items-center justify-center gap-4">
                      <img
                        src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="text-left">
                        <h4 className="font-serif font-semibold text-card-foreground">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-sm text-muted-foreground">{testimonials[currentIndex].location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
              onClick={prevTestimonial}
            >
              <ChevronLeft size={20} />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
              onClick={nextTestimonial}
            >
              <ChevronRight size={20} />
            </Button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? "bg-primary" : "bg-border"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
