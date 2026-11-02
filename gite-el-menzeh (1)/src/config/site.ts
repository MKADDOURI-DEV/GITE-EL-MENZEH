export const siteConfig = {
  name: "Riad Gîte Menzeh",
  shortName: "Riad Menzeh",
  tagline: "Votre séjour authentique à Moulay Idriss Zerhoun",
  description:
    "Un lieu chaleureux où l'hospitalité marocaine, le confort et la gastronomie se rencontrent.",
  location: "Moulay Idriss Zerhoun, Maroc",
  address: "Aïn Rjal, Rue L N°72, 50000 Moulay Idriss Zerhoun, Maroc",

  // Contact — remplacer par les informations réelles
  phone: "06 68 20 93 30",
  whatsapp: "",
  email: "",

  // Google Maps — remplacer par l'URL d'intégration réelle
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Gite+El+Menzeh+Moulay+Idriss+Zerhoun",
  googleMapsEmbedUrl:
    "https://www.google.com/maps?q=Gite+El+Menzeh,+Moulay+Idriss+Zerhoun,+Maroc&output=embed",

  // Réseaux sociaux — remplacer par les URL réelles
  instagram: "",
  facebook: "",

  // Message WhatsApp pré-rempli
  whatsappMessage:
    "Bonjour, je souhaite avoir plus d'informations concernant un séjour au Riad Gîte Menzeh.",

  // Moteur de réservation Nozoul
  bookingUrl:
    "https://gite-el-menzeh.nozoul.ma/#/be/a8fe575f-8e0e-4c6b-ab2f-24727461a7f9/book",

  // Réglages du formulaire de réservation
  booking: {
    maxAdults: 8,
    maxChildren: 6,
    childMaxAge: 12, // âge max. accepté comme enfant par le moteur Nozoul
    defaultChildAge: 5,
  },

  // Navigation
  nav: [
    { label: "Accueil", path: "/" },
    { label: "Le Riad", path: "/le-riad" },
    { label: "Hébergement", path: "/hebergement" },
    { label: "Restauration", path: "/restauration" },
    { label: "Galerie", path: "/galerie" },
    { label: "Contact", path: "/contact" },
  ],
};

export type SiteConfig = typeof siteConfig;
