import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function WhatsAppButton() {
  if (!siteConfig.whatsapp) return null;

  const href = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-large transition-all duration-300 hover:scale-110 hover:shadow-warm"
      aria-label="Contacter sur WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" />
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" />
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-sand-900 px-3 py-1.5 text-xs font-medium text-cream-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        Discuter sur WhatsApp
      </span>
    </a>
  );
}
