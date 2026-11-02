import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import Gallery from "@/components/Gallery";
import CTASection from "@/components/CTASection";
import { images } from "@/config/images";

export default function GaleriePage() {
  return (
    <>
      <PageHeader
        eyebrow="Galerie"
        title="Galerie"
        subtitle="Découvrez le Riad Gîte Menzeh en images — patio, salons, chambres et salle à manger."
        image={images.riadCourtyardDetail}
      />

      <section className="section-padding bg-cream-50">
        <div className="container-luxury">
          <Reveal>
            <SectionTitle
              eyebrow="Photos"
              title="Un aperçu du Riad"
              subtitle="Parcourez les différentes catégories pour découvrir chaque aspect de l'établissement."
            />
          </Reveal>
          <Reveal className="mt-10">
            <Gallery filterable />
          </Reveal>

        </div>
      </section>

      <CTASection />
    </>
  );
}
