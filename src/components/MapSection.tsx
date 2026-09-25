import { MapPin, Navigation } from "lucide-react";
import Reveal from "./Reveal";
import { siteConfig } from "@/config/site";

export default function MapSection() {
  return (
    <section className="section-padding bg-cream-100">
      <div className="container-luxury">
        <Reveal className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Text */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-600">
              Nous trouver
            </p>
            <h2 className="text-section font-medium text-sand-900">
              Riad Gîte Menzeh
            </h2>
            <p className="mt-4 flex items-center gap-2 text-base text-sand-700">
              <MapPin className="h-5 w-5 text-terracotta-500" />
              {siteConfig.location}
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-sand-600">
              Le Riad Gîte Menzeh est situé à Moulay Abdellah. Pour obtenir
              l'itinéraire exact, contactez-nous ou utilisez le bouton
              ci-dessous.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              {siteConfig.googleMapsUrl ? (
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <Navigation className="h-4 w-4" />
                  Itinéraire
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-full bg-sand-100 px-5 py-3 text-sm text-sand-600">
                  Itinéraire disponible bientôt
                </span>
              )}
            </div>
          </div>

          {/* Map embed */}
          <div className="overflow-hidden rounded-2xl shadow-medium ring-1 ring-sand-200">
            {siteConfig.googleMapsEmbedUrl ? (
              <iframe
                src={siteConfig.googleMapsEmbedUrl}
                className="h-72 w-full lg:h-96"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation du Riad Gîte Menzeh"
              />
            ) : (
              <div className="flex h-72 w-full items-center justify-center bg-sand-100 lg:h-96">
                <div className="text-center">
                  <MapPin className="mx-auto h-12 w-12 text-sand-400" />
                  <p className="mt-3 text-sm text-sand-500">
                    Carte Google Maps
                  </p>
                  <p className="mt-1 text-xs text-sand-400">
                    (Intégration à configurer)
                  </p>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
