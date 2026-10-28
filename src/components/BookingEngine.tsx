import { ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function BookingEngine() {
  return (
    <div>
      <iframe
        src={siteConfig.bookingUrl}
        title="Moteur de réservation — Riad Gîte Menzeh"
        className="h-[1100px] w-full rounded-2xl border-0 bg-cream-50"
        loading="lazy"
      />
      <div className="mt-5 text-center">
        <a
          href={siteConfig.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Ouvrir le moteur de réservation
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
