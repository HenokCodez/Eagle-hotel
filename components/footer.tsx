import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hotel Information */}
          <div className="lg:col-span-2">
            <h3 className="font-serif font-bold text-2xl mb-4">Eagle International Hotel</h3>
            <p className="text-background/80 leading-relaxed text-pretty mb-6">
              Experience luxury and authentic Ethiopian hospitality in the heart of Adama. Our commitment to excellence
              ensures every guest enjoys world-class service and comfort.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-primary flex-shrink-0" />
                <span className="text-sm text-background/80">Awash Bank Mebrat Hayl area, Adama, Ethiopia</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a href="tel:+251221119306" className="text-sm text-background/80 hover:text-primary transition-colors">
                  +251 22 111 9306
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a
                  href="mailto:info@eagleinternationalhotel.com"
                  className="text-sm text-background/80 hover:text-primary transition-colors"
                >
                  info@eagleinternationalhotel.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-background/80 hover:text-primary transition-colors block py-1">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#facilities"
                  className="text-sm text-background/80 hover:text-primary transition-colors block py-1"
                >
                  Facilities
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-sm text-background/80 hover:text-primary transition-colors block py-1"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-sm text-background/80 hover:text-primary transition-colors block py-1"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#booking"
                  className="text-sm text-background/80 hover:text-primary transition-colors block py-1"
                >
                  Book Now
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-background/80 hover:text-primary transition-colors block py-1"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-sm text-background/80 py-1">Restaurant & Bar</li>
              <li className="text-sm text-background/80 py-1">Conference Hall</li>
              <li className="text-sm text-background/80 py-1">Sauna & Wellness</li>
              <li className="text-sm text-background/80 py-1">24/7 Customer Service</li>
              <li className="text-sm text-background/80 py-1">Free Wi-Fi</li>
              <li className="text-sm text-background/80 py-1">Parking</li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-background/80">Follow Us:</span>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="p-2 bg-background/10 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-background/10 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-background/10 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-background/10 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
            <div className="text-sm text-background/80 text-center md:text-right">
              <p>&copy; {currentYear} Eagle International Hotel. All rights reserved.</p>
              <p className="mt-1">Designed with care for exceptional hospitality.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
