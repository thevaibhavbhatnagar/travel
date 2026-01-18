import { Anchor, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer id="contact" className="bg-ocean-deep text-primary-foreground">
      {/* Newsletter */}
      <div className="border-b border-primary-foreground/10">
        <div className="container py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-primary-foreground/70">
                Get exclusive offers and travel inspiration straight to your inbox.
              </p>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-ocean-teal"
              />
              <Button variant="ocean" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="bg-ocean-teal p-2 rounded-lg">
                <Anchor className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold">
                Ocean<span className="text-ocean-teal">Voyage</span>
              </span>
            </a>
            <p className="text-primary-foreground/70 mb-6">
              Your gateway to extraordinary yacht experiences across the world's
              most beautiful waters.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-ocean-teal transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-ocean-teal transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-ocean-teal transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-ocean-teal transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "Tours", "Destinations", "About Us", "Blog", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-primary-foreground/70 hover:text-ocean-teal transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Top Destinations</h4>
            <ul className="space-y-4">
              {[
                "Greek Islands",
                "Amalfi Coast",
                "Caribbean",
                "Maldives",
                "French Riviera",
                "Croatia",
              ].map((dest) => (
                <li key={dest}>
                  <a
                    href="#"
                    className="text-primary-foreground/70 hover:text-ocean-teal transition-colors"
                  >
                    {dest}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-ocean-teal flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">
                  123 Marina Bay, Miami,
                  <br />
                  FL 33139, USA
                </span>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-ocean-teal transition-colors"
                >
                  <Phone className="h-5 w-5 text-ocean-teal" />
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@oceanvoyage.com"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-ocean-teal transition-colors"
                >
                  <Mail className="h-5 w-5 text-ocean-teal" />
                  info@oceanvoyage.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 OceanVoyage. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-primary-foreground/60 hover:text-ocean-teal transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-primary-foreground/60 hover:text-ocean-teal transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-primary-foreground/60 hover:text-ocean-teal transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
