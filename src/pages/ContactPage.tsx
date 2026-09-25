import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import ReservationForm from "@/components/ReservationForm";
import MapSection from "@/components/MapSection";
import { siteConfig } from "@/config/site";
import { images } from "@/config/images";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Contactez-nous"
        subtitle="Une question, une demande de réservation ou une information ? Nous sommes à votre écoute."
        image={images.riadCourtyardDetail}
      />

      {/* Contact info + form */}
      <section className="section-padding bg-cream-50">
        <div className="container-luxury">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Info */}
            <Reveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-600">
                Coordonnées
              </p>
              <h2 className="text-section font-medium text-sand-900 text-balance">
                Nous contacter
              </h2>
              <p className="mt-4 text-base leading-relaxed text-sand-600">
                Pour toute demande concernant un séjour, une réservation ou la
                restauration, n'hésitez pas à nous contacter par l'un des moyens
                ci-dessous ou via le formulaire.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4 rounded-2xl bg-cream-100 p-4 ring-1 ring-sand-200/60">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-terracotta-50 text-terracotta-600">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-sand-500">
                      Adresse
                    </p>
                    <p className="mt-1 text-sm text-sand-800">
                      {siteConfig.location}
                    </p>
                  </div>
                </div>

                {siteConfig.phone && (
                  <div className="flex items-start gap-4 rounded-2xl bg-cream-100 p-4 ring-1 ring-sand-200/60">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-terracotta-50 text-terracotta-600">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-sand-500">
                        Téléphone
                      </p>
                      <a
                        href={`tel:${siteConfig.phone}`}
                        className="mt-1 block text-sm text-sand-800 transition-colors hover:text-terracotta-600"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>
                )}

                {siteConfig.whatsapp && (
                  <div className="flex items-start gap-4 rounded-2xl bg-cream-100 p-4 ring-1 ring-sand-200/60">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-sand-500">
                        WhatsApp
                      </p>
                      <a
                        href={`https://wa.me/${siteConfig.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 block text-sm text-sand-800 transition-colors hover:text-[#25D366]"
                      >
                        Discuter sur WhatsApp
                      </a>
                    </div>
                  </div>
                )}

                {siteConfig.email && (
                  <div className="flex items-start gap-4 rounded-2xl bg-cream-100 p-4 ring-1 ring-sand-200/60">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-terracotta-50 text-terracotta-600">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-sand-500">
                        Email
                      </p>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="mt-1 block break-all text-sm text-sand-800 transition-colors hover:text-terracotta-600"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                )}

                {!siteConfig.phone && !siteConfig.email && !siteConfig.whatsapp && (
                  <div className="flex items-start gap-4 rounded-2xl bg-sand-100 p-4 ring-1 ring-sand-200/60">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sand-200 text-sand-500">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-sand-500">
                        Coordonnées
                      </p>
                      <p className="mt-1 text-sm text-sand-600">
                        Les coordonnées (téléphone, WhatsApp, email) seront
                        disponibles prochainement.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </Reveal>

            {/* Contact form */}
            <Reveal delay={1}>
              <div className="rounded-3xl bg-cream-100 p-6 shadow-soft ring-1 ring-sand-200/60 sm:p-8">
                <h3 className="font-display text-xl font-semibold text-sand-900">
                  Envoyez-nous un message
                </h3>
                <p className="mt-1 text-sm text-sand-600">
                  Remplissez le formulaire ci-dessous, nous vous répondrons
                  rapidement.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Reservation */}
      <section className="section-padding bg-cream-100">
        <div className="container-luxury">
          <Reveal>
            <SectionTitle
              eyebrow="Réservation"
              title="Demander une réservation"
              subtitle="Remplissez ce formulaire pour faire une demande de réservation. Nous vous contacterons pour confirmer."
            />
          </Reveal>
          <Reveal delay={1} className="mt-10">
            <div className="mx-auto max-w-2xl rounded-3xl bg-cream-50 p-6 shadow-soft ring-1 ring-sand-200/60 sm:p-8">
              <ReservationForm />
            </div>
          </Reveal>
        </div>
      </section>

      <MapSection />
    </>
  );
}
