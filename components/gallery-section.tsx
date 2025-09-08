"use client"

import { useEffect, useRef, useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const galleryImages = [
  {
    src: "/hotel-room-luxury-suite-with-ethiopian-decor.jpg",
    alt: "Luxury Suite with Ethiopian Decor",
    category: "Rooms",
  },
  {
    src: "/elegant-restaurant-interior-with-traditional-ethi.jpg",
    alt: "Elegant Restaurant Interior",
    category: "Dining",
  },
  {
    src: "/modern-conference-hall-with-business-setup.jpg",
    alt: "Modern Conference Hall",
    category: "Business",
  },
  {
    src: "/relaxing-sauna-and-wellness-area.jpg",
    alt: "Relaxing Sauna and Wellness Area",
    category: "Wellness",
  },
  {
    src: "/beautiful-hotel-bar-with-premium-beverages.jpg",
    alt: "Beautiful Hotel Bar",
    category: "Dining",
  },
  {
    src: "/outdoor-recreation-area-with-gardens.jpg",
    alt: "Outdoor Recreation Area",
    category: "Recreation",
  },
]

export default function GallerySection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "unset"
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return

    if (direction === "prev") {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    } else {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return

      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") navigateImage("prev")
      if (e.key === "ArrowRight") navigateImage("next")
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage])

  return (
    <>
      <section id="gallery" ref={sectionRef} className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div
            className={`transition-all duration-1000 will-change-transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="font-serif font-bold text-4xl md:text-5xl text-foreground mb-6 text-balance">Gallery</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
                Discover the elegance and beauty of Eagle International Hotel through our curated collection of images
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-500 hover:shadow-xl will-change-transform ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
                  }}
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={400}
                    height={256}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 will-change-transform"
                    quality={85}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-medium">{image.category}</p>
                      <p className="text-xs opacity-90">{image.alt}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 transition-colors duration-300 rounded-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={galleryImages[selectedImage].src || "/placeholder.svg"}
              alt={galleryImages[selectedImage].alt}
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain rounded-lg"
              quality={90}
              priority
            />

            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X size={24} />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
              onClick={() => navigateImage("prev")}
            >
              <ChevronLeft size={24} />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
              onClick={() => navigateImage("next")}
            >
              <ChevronRight size={24} />
            </Button>

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-lg font-semibold">{galleryImages[selectedImage].alt}</p>
              <p className="text-sm opacity-80">{galleryImages[selectedImage].category}</p>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 text-white text-sm">
              {selectedImage + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
