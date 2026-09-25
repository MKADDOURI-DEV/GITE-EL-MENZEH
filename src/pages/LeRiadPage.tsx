import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import { images } from "@/config/images";

export default function LeRiadPage() {
  const features = [
    {
      title: "Architecture traditionnelle",
      description:
        "Des arches, des zellige et des détails architecturaux qui témoignent du savoir-faire marocain.",
    },
    {
      title: "Cadre chaleureux",
      description:
        "Un lieu pensé pour offrir une atmosphère conviviale et authentique à chaque visiteur.",
    },
    {
      title: "Espaces de vie",
      description:
        "Des patios, salons et espaces communs qui invitent à la détente et au partage.",
    },
    {
      title: "Restauration sur place",
      description:
        "Un service de restauration pour profiter de la cuisine marocaine sans quitter le riad.",
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Notre établissement"
        title="Le Riad"
        subtitle="Découvrez un lieu où l'authenticité marocaine rencontre le confort."
        image={images.riadCourtyard2}
      />

      {/* Intro */}
      <section className="section-padding bg-cream-50">
        <div className="container-luxury">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative">
                <div className="overflow-hidden rounded-3xl shadow-large">
                  <img
                    src={images.riadArchitecture}
                    alt="Architecture du riad"
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 -z-10 h-40 w-40 rounded-full border-2 border-sand-200" />
              </div>
            </Reveal>
            <Reveal delay={1}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-600">
                Notre histoire
              </p>
              <h2 className="text-section font-medium text-sand-900 text-balance">
                Un riad authentique à Moulay Abdellah
              </h2>
              <p className="mt-5 text-base leading-relaxed text-sand-600">
                Le Riad Gîte Menzeh est un établissement d'hébergement et de
                restauration situé à Moulay Abdellah. Il offre à ses visiteurs
                un cadre authentique, chaleureux et confortable, dans la pure
                tradition de l'hospitalité marocaine.
              </p>
              <p className="mt-4 text-base leading-relaxed text-sand-600">
                Que vous soyez de passage pour quelques jours ou à la recherche
                d'un séjour reposant, le riad vous accueille dans un cadre où
                chaque détail invite à la détente et à la découverte.
              </p>
              <Link to="/contact" className="btn-primary mt-8">
                Nous contacter
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-cream-100">
        <div className="container-luxury">
          <Reveal>
            <SectionTitle
              eyebrow="Le cadre"
              title="Un cadre pensé pour vous"
              subtitle="Chaque espace du riad est conçu pour offrir confort, authenticité et convivialité."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <Reveal key={i} delay={(i + 1) as 1 | 2 | 3 | 4}>
                <div className="h-full rounded-2xl bg-cream-50 p-6 shadow-soft ring-1 ring-sand-200/60 transition-all duration-500 hover:shadow-medium hover:-translate-y-1">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-terracotta-50 text-terracotta-600">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-sand-900">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-sand-600">
                    {f.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Image showcase */}
      <section className="section-padding bg-cream-50">
        <div className="container-luxury">
          <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
            <Reveal className="lg:col-span-2 lg:row-span-2">
              <div className="h-full overflow-hidden rounded-3xl shadow-large">
                <img
                  src={images.riadPool}
                  alt="Patio du riad"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="h-64 overflow-hidden rounded-3xl shadow-medium lg:h-full">
                <img
                  src={images.riadTilework}
                  alt="Zellige marocain"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="h-64 overflow-hidden rounded-3xl shadow-medium lg:h-full">
                <img
                  src={images.riadFountain}
                  alt="Fontaine du riad"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        title="Venez découvrir le Riad"
        subtitle="Contactez-nous pour organiser votre visite ou réserver votre séjour."
        image={images.riadInterior}
      />
    </>
  );
}
