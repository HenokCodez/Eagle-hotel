"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What are the check-in and check-out times?",
    answer:
      "Check-in is at 2:00 PM and check-out is at 12:00 PM. Early check-in and late check-out may be available upon request, subject to availability.",
  },
  {
    question: "Does Eagle International Hotel offer airport transportation?",
    answer:
      "Yes, we provide airport shuttle service upon request. Please contact our reception at +251 22 111 9306 to arrange transportation in advance.",
  },
  {
    question: "What dining options are available at the hotel?",
    answer:
      "We have an elegant restaurant serving authentic Ethiopian cuisine and international dishes, plus a premium bar with local and international beverages. Room service is also available 24/7.",
  },
  {
    question: "Is Wi-Fi available throughout the hotel?",
    answer:
      "Yes, complimentary high-speed Wi-Fi is available throughout the entire hotel, including all guest rooms, public areas, and conference facilities.",
  },
  {
    question: "What business facilities does the hotel provide?",
    answer:
      "We offer a state-of-the-art conference hall with modern audiovisual equipment, perfect for meetings, seminars, and corporate events. Business center services are also available.",
  },
  {
    question: "Are there wellness facilities at Eagle International Hotel?",
    answer:
      "Yes, we feature a relaxing sauna and wellness area where guests can unwind and rejuvenate after a busy day exploring Adama or conducting business.",
  },
  {
    question: "Is parking available for guests?",
    answer:
      "Yes, we provide secure and complimentary parking facilities for all our guests. The parking area is monitored 24/7 for your peace of mind.",
  },
  {
    question: "What makes Eagle International Hotel special?",
    answer:
      "Our hotel combines modern luxury with authentic Ethiopian hospitality. We're strategically located in Adama's business district and offer 24/7 customer service, ensuring every guest experiences exceptional comfort and service.",
  },
]

export default function FAQSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [openItems, setOpenItems] = useState<number[]>([])
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

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  return (
    <>
      <section id="faq" ref={sectionRef} className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="font-serif font-bold text-4xl md:text-5xl text-foreground mb-6 text-balance">
                Frequently Asked Questions
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
                Find answers to common questions about Eagle International Hotel and our services
              </p>
            </div>

            {/* FAQ Items */}
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Card
                  key={index}
                  className={`border-border/50 hover:shadow-md transition-all duration-300 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                  }}
                >
                  <CardContent className="p-0">
                    <button
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/30 transition-colors duration-200"
                      onClick={() => toggleItem(index)}
                    >
                      <h3 className="font-serif font-semibold text-lg text-card-foreground pr-4">{faq.question}</h3>
                      {openItems.includes(index) ? (
                        <ChevronUp className="text-primary flex-shrink-0" size={24} />
                      ) : (
                        <ChevronDown className="text-primary flex-shrink-0" size={24} />
                      )}
                    </button>
                    {openItems.includes(index) && (
                      <div className="px-6 pb-6">
                        <p className="text-muted-foreground leading-relaxed text-pretty">{faq.answer}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </>
  )
}
