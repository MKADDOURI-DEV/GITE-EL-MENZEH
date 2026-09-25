import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-sand-900 text-cream-100">
      {/* Pattern overlay */}
      <div className="moroccan-pattern absolute inset-0 opacity-30" />

      <div className="container-luxury relative">
        {/* Top section */}
        <div className="grid gap-12 py-16 lg:grid-cols-4 lg:py-20">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-terracotta-400/50 bg-terracotta-500/10">
                <span className="font-display text-xl font-bold text-terracotta-300">
                  M
                </span>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-cream-50">
                  {siteConfig.name}
                </h3>
                <p className="mt-0.5 text-xs uppercase tracking-[0.18em] text-cream-200/60">
                  Moulay Abdellah
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-cream-200/70">
              Votre adresse d'hospitalité à Moulay Abdellah. Un lieu chaleureux
              où l'hospitalité marocaine, le confort et la gastronomie se
              rencontrent.
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-3">
              {siteConfig.instagram && (
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-200/20 text-cream-200/70 transition-all duration-300 hover:border-terracotta-400 hover:bg-terracotta-500/10 hover:text-terracotta-300"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
              {siteConfig.facebook && (
                <a
                  href={siteConfig.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-200/20 text-cream-200/70 transition-all duration-300 hover:border-terracotta-400 hover:bg-terracotta-500/10 hover:text-terracotta-300"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              )}
              {siteConfig.whatsapp && (
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-200/20 text-cream-200/70 transition-all duration-300 hover:border-terracotta-400 hover:bg-terracotta-500/10 hover:text-terracotta-300"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-terracotta-300">
              Navigation
            </h4>
            <ul className="space-y-3">
              {siteConfig.nav.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-cream-200/70 transition-colors duration-200 hover:text-cream-50"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-terracotta-300">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-cream-200/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-300" />
                <span>{siteConfig.location}</span>
              </li>
              {siteConfig.phone && (
                <li className="flex items-start gap-2.5">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-300" />
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="transition-colors hover:text-cream-50"
                  >
                    {siteConfig.phone}
                  </a>
                </li>
              )}
              {siteConfig.whatsapp && (
                <li className="flex items-start gap-2.5">
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-300" />
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-cream-50"
                  >
                    WhatsApp
                  </a>
                </li>
              )}
              {siteConfig.email && (
                <li className="flex items-start gap-2.5">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-300" />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="break-all transition-colors hover:text-cream-50"
                  >
                    {siteConfig.email}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream-200/10 py-6">
          <p className="text-center text-xs text-cream-200/50">
            © {year} {siteConfig.name} — Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
