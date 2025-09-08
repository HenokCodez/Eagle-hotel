import type React from "react"
import type { Metadata } from "next"
import { Open_Sans, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
  preload: true,
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "Eagle International Hotel | Luxury Accommodation in Adama, Ethiopia",
  description:
    "Experience luxury and Ethiopian hospitality at Eagle International Hotel in Adama/Nazret. Premium rooms, restaurant, bar, conference facilities, and exceptional service.",
  keywords:
    "Eagle International Hotel, Adama hotel, Nazret hotel, Ethiopia accommodation, luxury hotel, business hotel, conference facilities, Ethiopian hospitality, Awash Bank Mebrat Hayl, hotel booking Adama",
  authors: [{ name: "Eagle International Hotel" }],
  openGraph: {
    title: "Eagle International Hotel | Luxury Accommodation in Adama, Ethiopia",
    description:
      "Experience luxury and Ethiopian hospitality at Eagle International Hotel in Adama/Nazret. Premium rooms, restaurant, bar, conference facilities, and exceptional service.",
    url: "https://eagleinternationalhotel.com",
    siteName: "Eagle International Hotel",
    images: [
      {
        url: "/luxury-hotel-exterior-in-ethiopia-with-beautiful-a.jpg",
        width: 1200,
        height: 630,
        alt: "Eagle International Hotel Exterior",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eagle International Hotel | Luxury Accommodation in Adama, Ethiopia",
    description: "Experience luxury and Ethiopian hospitality at Eagle International Hotel in Adama/Nazret.",
    images: ["/luxury-hotel-exterior-in-ethiopia-with-beautiful-a.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "Next.js",
  alternates: {
    canonical: "https://eagleinternationalhotel.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${openSans.variable} ${montserrat.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              name: "Eagle International Hotel",
              description:
                "Luxury hotel in Adama/Nazret, Ethiopia offering premium accommodation, dining, and conference facilities with authentic Ethiopian hospitality.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Awash Bank Mebrat Hayl area, around Awash Bank Mebrat Hayl",
                addressLocality: "Adama",
                addressRegion: "Oromia",
                addressCountry: "Ethiopia",
              },
              telephone: "+251221119306",
              email: "info@eagleinternationalhotel.com",
              url: "https://eagleinternationalhotel.com",
              image: [
                "https://eagleinternationalhotel.com/luxury-hotel-exterior-in-ethiopia-with-beautiful-a.jpg",
                "https://eagleinternationalhotel.com/elegant-hotel-lobby-with-ethiopian-cultural-elemen.jpg",
              ],
              priceRange: "$$",
              currenciesAccepted: "ETB, USD",
              paymentAccepted: "Cash, Credit Card",
              checkinTime: "14:00",
              checkoutTime: "12:00",
              numberOfRooms: "50",
              amenityFeature: [
                { "@type": "LocationFeatureSpecification", name: "Restaurant", value: true },
                { "@type": "LocationFeatureSpecification", name: "Bar", value: true },
                { "@type": "LocationFeatureSpecification", name: "Conference Hall", value: true },
                { "@type": "LocationFeatureSpecification", name: "Free Parking", value: true },
                { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi", value: true },
                { "@type": "LocationFeatureSpecification", name: "Sauna", value: true },
                { "@type": "LocationFeatureSpecification", name: "Elevator", value: true },
                { "@type": "LocationFeatureSpecification", name: "24 Hour Front Desk", value: true },
                { "@type": "LocationFeatureSpecification", name: "Recreation Ground", value: true },
              ],
              starRating: {
                "@type": "Rating",
                ratingValue: "4",
                bestRating: "5",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "127",
                bestRating: "5",
                worstRating: "1",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "8.5500",
                longitude: "39.2625",
              },
              hasMap: "https://www.google.com/maps/search/?api=1&query=Awash+Bank+Mebrat+Hayl+area+Adama+Ethiopia",
              sameAs: [
                "https://www.facebook.com/eagleinternationalhotel",
                "https://www.instagram.com/eagleinternationalhotel",
                "https://www.twitter.com/eaglehoteleth",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Eagle International Hotel",
              image: "https://eagleinternationalhotel.com/luxury-hotel-exterior-in-ethiopia-with-beautiful-a.jpg",
              "@id": "https://eagleinternationalhotel.com",
              url: "https://eagleinternationalhotel.com",
              telephone: "+251221119306",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Awash Bank Mebrat Hayl area",
                addressLocality: "Adama",
                addressRegion: "Oromia",
                postalCode: "1000",
                addressCountry: "ET",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 8.55,
                longitude: 39.2625,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59",
              },
              sameAs: [
                "https://www.facebook.com/eagleinternationalhotel",
                "https://www.instagram.com/eagleinternationalhotel",
              ],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
