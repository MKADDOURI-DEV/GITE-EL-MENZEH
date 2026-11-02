import { BedDouble, UtensilsCrossed, Wifi, Car, BellRing, Sofa, Coffee, ClipboardList } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { images } from "@/config/images";

// Services affichés — modifiez cette liste selon les services confirmés.
const services = [
  { icon: BedDouble, title: "Hébergement", description: "Des espaces confortables pour votre séjour." },
  { icon: UtensilsCrossed, title: "Restauration", description: "Un service de restauration sur place." },
  { icon: Wifi, title: "Wi-Fi", description: "Accès à Internet dans l'établissement." },
  { icon: Car, title: "Parking", description: "Un emplacement pour votre véhicule." },
  { icon: BellRing, title: "Accueil", description: "Un accueil chaleureux et personnalisé." },
  { icon: Sofa, title: "Espaces communs", description: "Des espaces de vie pour se détendre." },
  { icon: Coffee, title: "Petit-déjeuner", description: "Un petit-déjeuner pour bien commencer la journée." },
  { icon: ClipboardList, title: "Réservation", description: "Réservez votre séjour sur demande." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Nos services"
        subtitle="Le Riad Gîte Menzeh vous propose une gamme de services pour un séjour confortable et convivial."
        image={images.riadInterior}
      />

      <section className="section-padding bg-cream-50">
        <div className="container-luxury">
          <Reveal>
            <SectionTitle
              eyebrow="Ce que nous proposons"
              title="Des services pensés pour vous"
              subtitle="De l'hébergement à la restauration, le riad met tout en œuvre pour rendre votre séjour agréable."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <ServiceCard
                key={s.title}
                icon={s.icon}
                title={s.title}
                description={s.description}
                delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              />
            ))}
          </div>

          <Reveal className="mt-10">
            <div className="rounded-2xl bg-cream-100 p-6 text-center ring-1 ring-sand-200/60">
              <p className="text-sm text-sand-600">
                La liste des services peut évoluer. Pour toute demande
                spécifique, n'hésitez pas à nous contacter.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Une question sur nos services ?"
        subtitle="Contactez-nous pour plus d'informations sur les services proposés."
        image={images.terrace1}
      />
    </>
  );
}
