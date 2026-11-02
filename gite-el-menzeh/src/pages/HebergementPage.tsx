import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import AccommodationCard from "@/components/AccommodationCard";
import CTASection from "@/components/CTASection";
import { siteConfig } from "@/config/site";
import { images } from "@/config/images";

const rooms = [
  {
    image: images.roomSingle,
    title: "Chambre Single",
    capacity: "1 personne",
    description:
      "Une chambre paisible pour un voyageur seul, au décor traditionnel marocain, avec tout le confort essentiel.",
    amenities: ["1 lit simple", "Wi-Fi gratuit", "Télévision", "Articles de toilette"],
  },
  {
    image: images.roomDouble,
    title: "Chambre Double",
    capacity: "2 personnes",
    description:
      "Une chambre chaleureuse et lumineuse, idéale pour un séjour en couple ou entre amis.",
    amenities: ["Grand lit ou 2 lits", "Wi-Fi gratuit", "Télévision", "Articles de toilette"],
  },
  {
    image: images.roomTriple,
    title: "Chambre Triple",
    capacity: "3 personnes",
    description:
      "Une chambre spacieuse pour trois, parfaite pour les familles ou les petits groupes.",
    amenities: ["3 couchages", "Wi-Fi gratuit", "Télévision", "Articles de toilette"],
  },
];

const salonGallery = [
  { src: images.salon1, alt: "Salon aux tons violets" },
  { src: images.salon2, alt: "Salon aux tons rouges" },
  { src: images.salon3, alt: "Salon beige et zellige bleu" },
];

export default function HebergementPage() {
  const phone = siteConfig.phone;

  return (
    <>
      <PageHeader
        eyebrow="Nos espaces"
        title="Hébergement"
        subtitle="Des chambres et des salons pensés pour le repos, le confort et la convivialité."
        image={images.salonBeige4}
      />

      {/* Chambres */}
      <section className="section-padding bg-cream-50">
        <div className="container-luxury">
          <Reveal>
            <SectionTitle
              eyebrow="Chambres"
              title="Single, double ou triple"
              subtitle="Choisissez la chambre adaptée à votre séjour, puis vérifiez les disponibilités et réservez en ligne."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room, i) => (
              <AccommodationCard
                key={room.title}
                image={room.image}
                title={room.title}
                capacity={room.capacity}
                description={room.description}
                amenities={room.amenities}
                delay={((i % 3) + 1) as 1 | 2 | 3}
              />
            ))}
          </div>

          <Reveal className="mt-10">
            <div className="flex flex-col items-center gap-4 rounded-2xl bg-cream-100 p-6 text-center ring-1 ring-sand-200/60 sm:flex-row sm:justify-between sm:text-left">
              <p className="text-sm text-sand-600">
                Les tarifs et les disponibilités des chambres s'affichent en
                temps réel dans notre moteur de réservation en ligne.
              </p>
              <Link to="/contact#reservation" className="btn-primary shrink-0">
                Réserver une chambre
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Salons */}
      <section id="salons" className="section-padding bg-cream-100">
        <div className="container-luxury">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionTitle
                align="left"
                eyebrow="Salons"
                title="Nos salons marocains"
                subtitle="Des salons traditionnels pour se retrouver en famille ou entre amis, partager un repas ou un thé à la menthe dans un cadre authentique."
              />

              <div className="mt-8 rounded-2xl bg-terracotta-50 p-6 ring-1 ring-terracotta-200/70">
                <p className="flex items-center gap-2 font-display text-xl font-semibold text-terracotta-800">
                  <Phone className="h-5 w-5" />
                  Réservation par téléphone
                </p>
                <p className="mt-2 text-sm leading-relaxed text-terracotta-800/90">
                  Les salons ne sont pas réservables en ligne. Pour réserver un
                  salon, merci de nous appeler afin de convenir ensemble de la
                  date, du nombre de personnes et de la formule souhaitée.
                </p>
                {phone ? (
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="btn-primary mt-5"
                  >
                    <Phone className="h-4 w-4" />
                    Appeler le {phone}
                  </a>
                ) : (
                  <Link to="/contact" className="btn-primary mt-5">
                    <Phone className="h-4 w-4" />
                    Nous contacter
                  </Link>
                )}
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={salonGallery[0].src}
                  alt={salonGallery[0].alt}
                  className="col-span-2 h-72 w-full rounded-2xl object-cover shadow-medium"
                  loading="lazy"
                />
                {salonGallery.slice(1).map((img) => (
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    className="h-48 w-full rounded-2xl object-cover shadow-soft"
                    loading="lazy"
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        title="Réservez votre séjour"
        subtitle="Chambres en ligne, salons par téléphone : nous vous accueillons avec plaisir."
        image={images.roomTriple}
      />
    </>
  );
}
