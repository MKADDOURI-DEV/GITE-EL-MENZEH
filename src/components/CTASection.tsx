import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { images } from "@/config/images";

type CTASectionProps = {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
  image?: string;
};

export default function CTASection({
  title = "Prêt à vivre l'expérience ?",
  subtitle = "Contactez-nous pour réserver votre séjour au Riad Gîte Menzeh.",
  primaryLabel = "Réserver votre séjour",
  primaryTo = "/contact",
  secondaryLabel = "Nous contacter",
  secondaryTo = "/contact",
  image = images.riadCourtyard,
}: CTASectionProps) {
  return (
    <section className="section-padding">
      <div className="container-luxury">
        <Reveal className="relative overflow-hidden rounded-3xl">
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src={image}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-sand-950/85 via-sand-950/70 to-sand-950/60" />
          </div>

          {/* Content */}
          <div className="relative px-6 py-16 text-center sm:px-12 lg:py-24">
            <h2 className="text-section font-medium text-cream-50 text-balance">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-cream-200/80">
              {subtitle}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to={primaryTo} className="btn-primary w-full sm:w-auto">
                {primaryLabel}
              </Link>
              <Link to={secondaryTo} className="btn-secondary w-full sm:w-auto">
                {secondaryLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
