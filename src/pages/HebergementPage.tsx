import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import AccommodationCard from "@/components/AccommodationCard";
import CTASection from "@/components/CTASection";
import { images } from "@/config/images";

const accommodations = [
  {
    image: images.room1,
    title: "Chambre Single",
    description:
      "Une chambre simple et paisible pour un voyageur seul, avec un décor traditionnel marocain et tout le confort essentiel.",
    amenities: ["1 lit simple", "Salle de bain", "Wi-Fi", "Climatisation"],
  },
  {
    image: images.room2,
    title: "Chambre Double",
    description:
      "Une chambre chaleureuse et lumineuse, idéale pour un séjour en couple ou entre amis.",
    amenities: ["Grand lit ou 2 lits", "Salle de bain", "Wi-Fi", "Climatisation"],
  },
  {
    image: images.room3,
    title: "Salon",
    description:
      "Un espace spacieux avec coin salon, pensé pour les familles et les groupes qui souhaitent se retrouver.",
    amenities: ["Coin salon", "Salle de bain", "Wi-Fi", "Espace repos"],
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
              subtitle="Le Riad Gîte Menzeh propose trois types d'hébergement : chambre single, chambre double et salon. Vérifiez les disponibilités et réservez en ligne."
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
                Les tarifs et disponibilités s'affichent directement dans le
                moteur de réservation en ligne.
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
