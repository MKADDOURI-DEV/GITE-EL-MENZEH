import { Link } from "react-router-dom";
import { ArrowRight, Check, Phone } from "lucide-react";
import Reveal from "./Reveal";

type AccommodationCardProps = {
  image: string;
  title: string;
  description: string;
  amenities: string[];
  capacity?: string;
  phoneOnly?: boolean;
  phone?: string;
  delay?: 1 | 2 | 3 | 4;
};

export default function AccommodationCard({
  image,
  title,
  description,
  amenities,
  capacity,
  phoneOnly = false,
  phone = "",
  delay,
}: AccommodationCardProps) {
  return (
    <Reveal as="article" delay={delay} className="card-luxury group">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sand-950/50 to-transparent" />
        {capacity && (
          <span className="absolute left-4 top-4 rounded-full bg-cream-50/90 px-3 py-1 text-xs font-semibold text-sand-800 backdrop-blur-sm">
            {capacity}
          </span>
        )}
        {phoneOnly && (
          <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-terracotta-600 px-3 py-1 text-xs font-semibold text-cream-50">
            <Phone className="h-3 w-3" />
            Sur appel
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-sand-900">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-sand-600">
          {description}
        </p>

        {/* Amenities */}
        <ul className="mt-4 grid grid-cols-2 gap-2">
          {amenities.map((a) => (
            <li
              key={a}
              className="flex items-center gap-1.5 text-xs text-sand-600"
            >
              <Check className="h-3.5 w-3.5 shrink-0 text-moroccan-green-500" />
              {a}
            </li>
          ))}
        </ul>

        {/* CTA */}
        {phoneOnly ? (
          <div className="mt-5 rounded-xl bg-terracotta-50 px-4 py-3 text-sm text-terracotta-800 ring-1 ring-terracotta-200/70">
            <p>Réservation uniquement par téléphone.</p>
            {phone ? (
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="mt-1 inline-flex items-center gap-1.5 font-semibold underline-offset-4 hover:underline"
              >
                <Phone className="h-4 w-4" />
                Appeler le {phone}
              </a>
            ) : (
              <Link
                to="/contact"
                className="mt-1 inline-flex items-center gap-1.5 font-semibold underline-offset-4 hover:underline"
              >
                Nous contacter
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        ) : (
          <Link
            to="/contact#reservation"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta-600 transition-colors hover:text-terracotta-700"
          >
            Réserver en ligne
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </div>
    </Reveal>
  );
}
