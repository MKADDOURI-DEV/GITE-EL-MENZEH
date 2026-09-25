import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream-50/95 shadow-soft backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="container-luxury">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              scrolled ? "h-16" : "h-20 lg:h-24"
            }`}
          >
            {/* Logo */}
            <Link to="/" className="group flex items-center gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                  scrolled
                    ? "border-terracotta-500 bg-terracotta-50"
                    : "border-cream-100/40 bg-cream-50/10"
                }`}
              >
                <span
                  className={`font-display text-lg font-bold transition-colors duration-300 ${
                    scrolled ? "text-terracotta-600" : "text-cream-50"
                  }`}
                >
                  M
                </span>
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className={`font-display text-base font-semibold tracking-wide transition-colors duration-300 ${
                    scrolled ? "text-sand-900" : "text-cream-50"
                  }`}
                >
                  RIAD GÎTE MENZEH
                </span>
                <span
                  className={`mt-0.5 text-[10px] uppercase tracking-[0.18em] transition-colors duration-300 ${
                    scrolled ? "text-sand-500" : "text-cream-200/70"
                  }`}
                >
                  Moulay Abdellah
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 lg:flex">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${
                    scrolled
                      ? isActive(item.path)
                        ? "text-terracotta-600"
                        : "text-sand-700 hover:text-terracotta-600"
                      : isActive(item.path)
                        ? "text-terracotta-300"
                        : "text-cream-100/90 hover:text-cream-50"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-0.5 left-3.5 right-3.5 h-px origin-left transition-transform duration-300 ${
                      isActive(item.path) ? "scale-x-100" : "scale-x-0"
                    } ${
                      scrolled ? "bg-terracotta-500" : "bg-terracotta-300"
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden items-center gap-3 lg:flex">
              {siteConfig.phone && (
                <a
                  href={`tel:${siteConfig.phone}`}
                  className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-300 ${
                    scrolled ? "text-sand-700 hover:text-terracotta-600" : "text-cream-100/90 hover:text-cream-50"
                  }`}
                >
                  <Phone className="h-4 w-4" />
                  <span className="hidden xl:inline">Appeler</span>
                </a>
              )}
              <Link to="/contact" className="btn-primary !py-2.5 !px-5 text-sm">
                Réserver
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden ${
                scrolled || menuOpen
                  ? "text-sand-800 hover:bg-sand-100"
                  : "text-cream-50 hover:bg-cream-50/10"
              }`}
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-sand-950/40 backdrop-blur-sm transition-opacity duration-400 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />
        {/* Panel */}
        <div
          className={`absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-cream-50 shadow-large transition-transform duration-400 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-20 items-center justify-between px-6">
            <span className="font-display text-lg font-semibold text-sand-900">
              Menu
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-sand-700 hover:bg-sand-100"
              aria-label="Fermer le menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-1 px-4">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                  isActive(item.path)
                    ? "bg-terracotta-50 text-terracotta-600"
                    : "text-sand-700 hover:bg-sand-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-3 p-6">
            <Link
              to="/contact"
              className="btn-primary w-full"
              onClick={() => setMenuOpen(false)}
            >
              Réserver votre séjour
            </Link>
            {siteConfig.whatsapp && (
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full"
              >
                WhatsApp
              </a>
            )}
            {siteConfig.phone && (
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center justify-center gap-2 text-sm text-sand-600"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
