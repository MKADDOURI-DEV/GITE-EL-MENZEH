import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

type AccommodationCardProps = {
  image: string;
  title: string;
  description: string;
  amenities: string[];
  delay?: 1 | 2 | 3 | 4;
};

export default function AccommodationCard({
  image,
  title,
  description,
  amenities,
  delay,
}: AccommodationCardProps) {
  return (
    <article
      className={`card-luxury group reveal${delay ? ` reveal-delay-${delay}` : ""}`}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sand-950/50 to-transparent" />
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
        <Link
          to="/contact"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta-600 transition-colors hover:text-terracotta-700"
        >
          Voir l'hébergement
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
