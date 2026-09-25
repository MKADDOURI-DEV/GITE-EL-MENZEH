import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import Gallery from "@/components/Gallery";
import { images } from "@/config/images";

const categories = [
  { emoji: "🍽️", label: "Cuisine marocaine", description: "Des plats préparés dans la tradition marocaine." },
  { emoji: "🥘", label: "Plats traditionnels", description: "Des recettes authentiques et savoureuses." },
  { emoji: "☕", label: "Petit-déjeuner", description: "Un petit-déjeuner pour bien commencer la journée." },
  { emoji: "🍴", label: "Repas sur place", description: "Profitez de vos repas sans quitter le riad." },
];

export default function RestaurationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Restauration"
        title="La restauration du Riad"
        subtitle="Découvrez une cuisine conviviale dans un cadre chaleureux."
        image={images.restaurant1}
      />

      {/* Intro */}
      <section className="section-padding bg-cream-50">
        <div className="container-luxury">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative">
                <div className="overflow-hidden rounded-3xl shadow-large">
                  <img
                    src={images.food5}
                    alt="Tajine d'agneau"
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 -z-10 h-40 w-40 rounded-t-full bg-terracotta-100" />
              </div>
            </Reveal>
            <Reveal delay={1}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-600">
                Restauration sur place
              </p>
              <h2 className="text-section font-medium text-sand-900 text-balance">
                Une cuisine conviviale et authentique
              </h2>
              <p className="mt-5 text-base leading-relaxed text-sand-600">
                Le Riad Gîte Menzeh propose un service de restauration sur
                place. Profitez d'une cuisine préparée avec soin, dans la
                tradition marocaine, sans avoir à quitter l'établissement.
              </p>
              <p className="mt-4 text-base leading-relaxed text-sand-600">
                Que ce soit pour le petit-déjeuner, le déjeuner ou le dîner,
                le riad vous accueille dans un cadre chaleureux pour des
                moments gourmands et conviviaux.
              </p>
              <Link to="/contact" className="btn-primary mt-8">
                Demander des informations
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-cream-100">
        <div className="container-luxury">
          <Reveal>
            <SectionTitle
              eyebrow="Notre offre"
              title="Nos catégories de restauration"
              subtitle="Le riad propose différents types de restauration pour répondre à vos besoins."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat, i) => (
              <Reveal key={i} delay={(i + 1) as 1 | 2 | 3 | 4}>
                <div className="group h-full rounded-2xl bg-cream-50 p-6 text-center shadow-soft ring-1 ring-sand-200/60 transition-all duration-500 hover:shadow-medium hover:-translate-y-1">
                  <span className="text-4xl">{cat.emoji}</span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-sand-900">
                    {cat.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-sand-600">
                    {cat.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8">
            <div className="rounded-2xl bg-cream-50 p-6 text-center ring-1 ring-sand-200/60">
              <p className="text-sm text-sand-600">
                Les plats spécifiques et menus sont communiqués sur demande.
                Contactez-nous pour en savoir plus.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Food gallery */}
      <section className="section-padding bg-cream-50">
        <div className="container-luxury">
          <Reveal>
            <SectionTitle
              eyebrow="En images"
              title="L'atmosphère du restaurant"
              subtitle="Un aperçu de la cuisine et de l'ambiance du Riad Gîte Menzeh."
            />
          </Reveal>
          <Reveal className="mt-10">
            <Gallery filterable={false} limit={8} />
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Réservez votre table"
        subtitle="Contactez-nous pour organiser votre repas au Riad Gîte Menzeh."
        image={images.restaurant2}
      />
    </>
  );
}
