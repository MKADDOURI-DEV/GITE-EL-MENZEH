import { Link } from "react-router-dom";
import { Home as HomeIcon, UtensilsCrossed, BedDouble, MapPin, ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import AccommodationCard from "@/components/AccommodationCard";
import CTASection from "@/components/CTASection";
import Gallery from "@/components/Gallery";
import { images } from "@/config/images";

const accommodations = [
  {
    image: images.room1,
    title: "Chambre — Confort & tradition",
    description:
      "Un espace chaleureux mêlant confort moderne et décor traditionnel marocain.",
    amenities: ["Lit confortable", "Salle de bain", "Wi-Fi", "Climatisation"],
  },
  {
    image: images.room2,
    title: "Chambre — Ambiance marocaine",
    description:
      "Une chambre aux couleurs chaleureuses, pensée pour votre repos.",
    amenities: ["Lit confortable", "Salle de bain", "Wi-Fi", "Espace repos"],
  },
  {
    image: images.room7,
    title: "Hébergement — Informations sur demande",
    description:
      "Plusieurs types d'hébergement disponibles. Contactez-nous pour plus d'informations.",
    amenities: ["Lit confortable", "Salle de bain", "Wi-Fi", "Climatisation"],
  },
];

const experienceCards = [
  {
    icon: HomeIcon,
    title: "Hospitalité marocaine",
    description: "Un accueil chaleureux dans un cadre authentique.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restauration sur place",
    description: "Profitez d'une solution pratique et conviviale pour vos repas.",
  },
  {
    icon: BedDouble,
    title: "Séjour confortable",
    description: "Un espace pensé pour votre repos et votre bien-être.",
  },
  {
    icon: MapPin,
    title: "Emplacement",
    description: "Découvrez Moulay Abdellah et ses environs.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Bienvenue */}
      <section className="section-padding bg-cream-50">
        <div className="container-luxury">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative">
                <div className="overflow-hidden rounded-3xl shadow-large">
                  <img
                    src={images.riadCourtyard}
                    alt="Cour intérieure du Riad Gîte Menzeh"
                    className="aspect-[4/5] w-full object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Decorative arch accent */}
                <div className="absolute -bottom-6 -right-6 -z-10 h-48 w-48 rounded-t-full bg-terracotta-100" />
                <div className="absolute -left-4 -top-4 -z-10 h-32 w-32 rounded-full border-2 border-sand-200" />
              </div>
            </Reveal>

            <Reveal delay={1}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-600">
                Bienvenue
              </p>
              <h2 className="text-section font-medium text-sand-900 text-balance">
                Bienvenue au Riad Gîte Menzeh
              </h2>
              <p className="mt-5 text-base leading-relaxed text-sand-600">
                Le Riad Gîte Menzeh vous accueille dans un cadre authentique et
                chaleureux à Moulay Abdellah. Pensé pour offrir une expérience
                confortable et conviviale, le riad propose des espaces
                d'hébergement ainsi qu'un service de restauration sur place.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Des espaces d'hébergement confortables",
                  "Un service de restauration sur place",
                  "Une ambiance authentique et chaleureuse",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-terracotta-50 text-terracotta-600">
                      <span className="h-2 w-2 rounded-full bg-terracotta-500" />
                    </span>
                    <span className="text-sm text-sand-700">{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/le-riad" className="btn-primary mt-8">
                Découvrir le Riad
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Hébergement preview */}
      <section className="section-padding bg-cream-100">
        <div className="container-luxury">
          <Reveal>
            <SectionTitle
              eyebrow="Hébergement"
              title="Séjournez dans un cadre confortable"
              subtitle="Des espaces pensés pour vous offrir repos, confort et tranquillité."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {accommodations.map((acc, i) => (
              <AccommodationCard
                key={i}
                image={acc.image}
                title={acc.title}
                description={acc.description}
                amenities={acc.amenities}
                delay={(i + 1) as 1 | 2 | 3}
              />
            ))}
          </div>

          <Reveal className="mt-10 text-center">
            <Link to="/hebergement" className="btn-secondary">
              Voir tout l'hébergement
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Restauration preview */}
      <section className="section-padding bg-cream-50">
        <div className="container-luxury">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="order-2 lg:order-1">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-600">
                Restauration
              </p>
              <h2 className="text-section font-medium text-sand-900 text-balance">
                La restauration du Riad
              </h2>
              <p className="mt-5 text-base leading-relaxed text-sand-600">
                Découvrez une cuisine conviviale dans un cadre chaleureux. Le
                Riad Gîte Menzeh propose un service de restauration sur place,
                pour profiter d'un moment gourmand sans quitter l'établissement.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { emoji: "🍽️", label: "Cuisine marocaine" },
                  { emoji: "🥘", label: "Plats traditionnels" },
                  { emoji: "☕", label: "Petit-déjeuner" },
                  { emoji: "🍴", label: "Repas sur place" },
                ].map((cat) => (
                  <div
                    key={cat.label}
                    className="flex items-center gap-3 rounded-xl bg-cream-100 px-4 py-3 ring-1 ring-sand-200/60"
                  >
                    <span className="text-xl">{cat.emoji}</span>
                    <span className="text-sm font-medium text-sand-700">
                      {cat.label}
                    </span>
                  </div>
                ))}
              </div>

              <Link to="/restauration" className="btn-primary mt-8">
                Découvrir notre restauration
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>

            <Reveal delay={1} className="order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-2xl shadow-medium">
                  <img
                    src={images.food3}
                    alt="Tajine marocain"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="mt-8 overflow-hidden rounded-2xl shadow-medium">
                  <img
                    src={images.restaurant1}
                    alt="Salle de restaurant"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-medium">
                  <img
                    src={images.tea1}
                    alt="Thé à la menthe"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="mt-8 overflow-hidden rounded-2xl shadow-medium">
                  <img
                    src={images.food4}
                    alt="Couscous"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Expérience */}
      <section className="section-padding bg-sand-900 text-cream-50">
        <div className="container-luxury">
          <Reveal>
            <SectionTitle
              light
              eyebrow="Expérience"
              title="Une expérience authentique"
              subtitle="Le Riad Gîte Menzeh vous offre une expérience complète, entre hospitalité, gastronomie et découverte."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {experienceCards.map((card, i) => (
              <Reveal key={i} delay={(i + 1) as 1 | 2 | 3 | 4}>
                <div className="group h-full rounded-2xl border border-cream-200/10 bg-cream-50/5 p-6 text-center backdrop-blur-sm transition-all duration-500 hover:border-terracotta-400/30 hover:bg-cream-50/10">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-terracotta-500/15 text-terracotta-300 transition-all duration-300 group-hover:bg-terracotta-500 group-hover:text-cream-50">
                    <card.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-cream-50">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream-200/70">
                    {card.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="section-padding bg-cream-100">
        <div className="container-luxury">
          <Reveal>
            <SectionTitle
              eyebrow="Galerie"
              title="Un aperçu du Riad"
              subtitle="Découvrez l'atmosphère du Riad Gîte Menzeh en images."
            />
          </Reveal>
          <Reveal className="mt-10">
            <Gallery filterable={false} limit={6} />
          </Reveal>
          <Reveal className="mt-8 text-center">
            <Link to="/galerie" className="btn-secondary">
              Voir la galerie complète
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
