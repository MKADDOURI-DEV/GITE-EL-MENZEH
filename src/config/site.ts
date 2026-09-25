export const siteConfig = {
  name: "Riad Gîte Menzeh",
  shortName: "Riad Menzeh",
  tagline: "Votre séjour authentique à Moulay Abdellah",
  description:
    "Un lieu chaleureux où l'hospitalité marocaine, le confort et la gastronomie se rencontrent.",
  location: "Moulay Abdellah, Maroc",
  address: "Moulay Abdellah, Maroc",

  // Contact — remplacer par les informations réelles
  phone: "",
  whatsapp: "",
  email: "",

  // Google Maps — remplacer par l'URL d'intégration réelle
  googleMapsUrl: "",
  googleMapsEmbedUrl: "",

  // Réseaux sociaux — remplacer par les URL réelles
  instagram: "",
  facebook: "",

  // Message WhatsApp pré-rempli
  whatsappMessage:
    "Bonjour, je souhaite avoir plus d'informations concernant un séjour au Riad Gîte Menzeh.",

  // Navigation
  nav: [
    { label: "Accueil", path: "/" },
    { label: "Le Riad", path: "/le-riad" },
    { label: "Hébergement", path: "/hebergement" },
    { label: "Restauration", path: "/restauration" },
    { label: "Galerie", path: "/galerie" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" },
  ],
};

export type SiteConfig = typeof siteConfig;
