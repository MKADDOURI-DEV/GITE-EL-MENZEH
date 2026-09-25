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
        subtitle="Découvrez le Riad Gîte Menzeh en images — architecture, chambres, restaurant et ambiance."
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

          <Reveal className="mt-8">
            <div className="rounded-2xl bg-cream-100 p-6 text-center ring-1 ring-sand-200/60">
              <p className="text-sm text-sand-600">
                Ces images sont des photos d'illustration. Elles seront
                remplacées par les vraies photos du Riad Gîte Menzeh.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
