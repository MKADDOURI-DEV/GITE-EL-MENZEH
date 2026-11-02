import { Link } from "react-router-dom";
import { MapPin, UtensilsCrossed, BedDouble, Leaf, Phone, ArrowRight } from "lucide-react";
import BookingEngine from "./BookingEngine";
import { images } from "@/config/images";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center pb-24">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Image de secours, visible pendant le chargement de la vidéo */}
        <img
          src={images.hero}
          alt="Patio du Riad Gîte Menzeh"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        {/* Vidéo de présentation, en boucle et sans le son */}
        <video
          className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
          src={images.heroVideo}
          poster={images.hero}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sand-950/60 via-sand-950/30 to-sand-950/70" />
      </div>

      {/* Content */}
      <div className="container-luxury relative z-10 pt-24">
        <div className="mx-auto max-w-3xl text-center">
          {/* Ornament */}
          <div className="mb-6 flex items-center justify-center gap-3 animate-fade-down">
            <span className="h-px w-12 bg-terracotta-300/60" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-200">
              Moulay Idriss Zerhoun, Maroc
            </span>
            <span className="h-px w-12 bg-terracotta-300/60" />
          </div>

          <h1 className="text-hero font-medium text-cream-50 opacity-0 animate-fade-up [animation-delay:0.2s]">
            {siteConfig.name}
          </h1>

          <p className="mt-4 text-xl font-light text-cream-100/90 opacity-0 animate-fade-up [animation-delay:0.4s] sm:text-2xl">
            {siteConfig.tagline}
          </p>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream-200/80 opacity-0 animate-fade-up [animation-delay:0.5s]">
            {siteConfig.description}
          </p>

        </div>

        {/* Barre de réservation */}
        <div className="relative z-20 mx-auto mt-10 max-w-5xl text-left opacity-0 animate-fade-up [animation-delay:0.6s]">
          <div className="rounded-3xl bg-cream-50 p-5 shadow-large ring-1 ring-sand-200/60 sm:p-7">
            <BookingEngine compact />
          </div>
          <div className="mt-4 flex flex-col items-center justify-between gap-3 px-2 text-sm text-cream-100/90 sm:flex-row">
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-terracotta-200" />
              <span>
                Salons : réservation par téléphone au{" "}
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="font-semibold text-cream-50 underline underline-offset-2"
                >
                  {siteConfig.phone}
                </a>
              </span>
            </p>
            <Link
              to="/le-riad"
              className="inline-flex items-center gap-1.5 font-medium text-cream-50 underline-offset-4 hover:underline"
            >
              Découvrir le Riad
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mx-auto max-w-3xl text-center">
          {/* Info badges */}
          <div className="mt-12 grid grid-cols-2 gap-4 opacity-0 animate-fade-up [animation-delay:0.8s] sm:grid-cols-4 sm:gap-6">
            {[
              { icon: MapPin, label: siteConfig.location },
              { icon: UtensilsCrossed, label: "Restaurant sur place" },
              { icon: BedDouble, label: "Hébergement" },
              { icon: Leaf, label: "Cadre authentique" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 text-center"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-100/20 bg-cream-50/5 backdrop-blur-sm">
                  <item.icon className="h-5 w-5 text-terracotta-200" />
                </div>
                <span className="text-xs font-medium text-cream-200/80">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in [animation-delay:1.2s]">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-cream-100/30 pt-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-cream-100/60" />
        </div>
      </div>
    </section>
  );
}
