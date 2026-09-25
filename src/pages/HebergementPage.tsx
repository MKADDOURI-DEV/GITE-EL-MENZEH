import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import AccommodationCard from "@/components/AccommodationCard";
import CTASection from "@/components/CTASection";
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
      "Une chambre aux couleurs chaleureuses, pensée pour votre repos et votre tranquillité.",
    amenities: ["Lit confortable", "Salle de bain", "Wi-Fi", "Espace repos"],
  },
  {
    image: images.room3,
    title: "Chambre — Décor traditionnel",
    description:
      "Une chambre au décor soigné, avec des matériaux et textures inspirés du patrimoine marocain.",
    amenities: ["Lit confortable", "Salle de bain", "Wi-Fi", "Climatisation"],
  },
  {
    image: images.room4,
    title: "Chambre — Tons chaleureux",
    description:
      "Une chambre aux tons orangés et au bois ouvragé, pour un séjour plein de caractère.",
    amenities: ["Lit confortable", "Salle de bain", "Wi-Fi", "Espace repos"],
  },
  {
    image: images.room7,
    title: "Chambre — Lit confortable",
    description:
      "Un lit confortable et un cadre reposant pour des nuits paisibles.",
    amenities: ["Lit confortable", "Salle de bain", "Wi-Fi", "Climatisation"],
  },
  {
    image: images.room8,
    title: "Hébergement — Informations sur demande",
    description:
      "Plusieurs types d'hébergement sont disponibles. Contactez-nous pour connaître les disponibilités et les options.",
    amenities: ["Lit confortable", "Salle de bain", "Wi-Fi", "Espace repos"],
  },
];

export default function HebergementPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nos espaces"
        title="Hébergement"
        subtitle="Des espaces pensés pour vous offrir repos, confort et tranquillité."
        image={images.room1}
      />

      <section className="section-padding bg-cream-50">
        <div className="container-luxury">
          <Reveal>
            <SectionTitle
              eyebrow="Hébergement"
              title="Séjournez dans un cadre confortable"
              subtitle="Le Riad Gîte Menzeh propose différents types d'hébergement, tous pensés pour votre bien-être. Pour plus d'informations sur les capacités et disponibilités, contactez-nous directement."
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
                delay={((i % 3) + 1) as 1 | 2 | 3}
              />
            ))}
          </div>

          {/* Note */}
          <Reveal className="mt-10">
            <div className="rounded-2xl bg-cream-100 p-6 text-center ring-1 ring-sand-200/60">
              <p className="text-sm text-sand-600">
                Les informations détaillées (capacités, prix, disponibilités)
                sont communiquées sur demande. Contactez-nous pour un
                accompagnement personnalisé.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Réservez votre séjour"
        subtitle="Contactez-nous pour connaître les disponibilités et réserver votre hébergement."
        image={images.room2}
      />
    </>
  );
}
