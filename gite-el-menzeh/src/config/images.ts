// Photos réelles du Riad Gîte Menzeh (dossier Drive « GITE EL MENZEH Riad »),
// optimisées pour le web et placées dans /public/images/.
// Les visuels de cuisine restent des photos d'illustration (Pexels)
// en attendant des photos des plats du gîte.

const px = (url: string, w = 1600) => {
  const base = url.split("?")[0];
  return `${base}?auto=compress&cs=tinysrgb&w=${w}`;
};

// Respecte le chemin de base de Vite (racine sur Vercel, sous-dossier sur GitHub Pages)
const local = (file: string) => `${import.meta.env.BASE_URL}images/${file}`;

export const images = {
  hero: local("patio.jpg"),
  heroVideo: `${import.meta.env.BASE_URL}videos/hero.mp4`,

  // Logo
  logoEmblem: local("logo-embleme.png"),
  logoFull: local("logo-gite-elmenzeh.png"),
  heroAlt: local("salle-a-manger-2.jpg"),

  // Le Riad
  riadCourtyard: local("salon-rouge-1.jpg"),
  riadCourtyard2: local("salle-a-manger-3.jpg"),
  riadArchitecture: local("patio.jpg"),
  riadPool: local("salon-rouge-2.jpg"),
  riadFountain: local("vue-fenetre.jpg"),
  riadInterior: local("salle-a-manger-2.jpg"),
  riadTilework: local("salon-beige-1.jpg"),
  riadCourtyardDetail: local("salon-beige-4.jpg"),
  patio: local("patio.jpg"),
  view: local("vue-fenetre.jpg"),

  // Chambres
  // Single et Double : images extraites de la vidéo de présentation
  roomSingle: local("chambre-single.jpg"),
  roomDouble: local("chambre-double.jpg"),
  roomTwin: local("chambre-twin.jpg"),
  roomTriple: local("chambre-triple.jpg"),
  roomFamily: local("chambre-familiale.jpg"),
  room1: local("chambre-triple.jpg"),
  room2: local("chambre-familiale.jpg"),
  room7: local("chambre-triple.jpg"),

  // Salons
  salon1: local("salon-violet-1.jpg"),
  salon2: local("salon-rouge-1.jpg"),
  salon3: local("salon-beige-2.jpg"),
  salonViolet2: local("salon-violet-2.jpg"),
  salonViolet3: local("salon-violet-3.jpg"),
  salonRouge2: local("salon-rouge-2.jpg"),
  salonRouge3: local("salon-rouge-3.jpg"),
  salonBeige1: local("salon-beige-1.jpg"),
  salonBeige3: local("salon-beige-3.jpg"),
  salonBeige4: local("salon-beige-4.jpg"),

  // Salle à manger
  restaurant1: local("salle-a-manger-1.jpg"),
  restaurant2: local("salle-a-manger-3.jpg"),
  restaurant3: local("salle-a-manger-2.jpg"),

  // Cuisine (photos d'illustration)
  food1: px("https://images.pexels.com/photos/36984667/pexels-photo-36984667.jpeg"),
  food3: px("https://images.pexels.com/photos/998244/pexels-photo-998244.jpeg"),
  food4: px("https://images.pexels.com/photos/36916123/pexels-photo-36916123.jpeg"),
  food5: px("https://images.pexels.com/photos/30068444/pexels-photo-30068444.jpeg"),
  food6: px("https://images.pexels.com/photos/1618929/pexels-photo-1618929.jpeg"),
  tea1: px("https://images.pexels.com/photos/30906051/pexels-photo-30906051.jpeg"),

  // Extérieur
  terrace1: local("vue-fenetre.jpg"),
};

export type GalleryImage = {
  src: string;
  alt: string;
  category: string;
};

export const galleryImages: GalleryImage[] = [
  // Le Riad
  { src: images.patio, alt: "Patio arboré du riad", category: "Le Riad" },
  { src: images.view, alt: "Vue sur la campagne de Moulay Idriss Zerhoun", category: "Le Riad" },

  // Salons
  { src: images.salon1, alt: "Salon marocain aux tons violets", category: "Salons" },
  { src: images.salonViolet2, alt: "Salon violet, détail des banquettes", category: "Salons" },
  { src: images.salonViolet3, alt: "Salon violet et zellige", category: "Salons" },
  { src: images.salon2, alt: "Salon marocain aux tons rouges", category: "Salons" },
  { src: images.salonRouge2, alt: "Salon rouge et table sculptée", category: "Salons" },
  { src: images.salonRouge3, alt: "Salon rouge, vue d'ensemble", category: "Salons" },
  { src: images.salonBeige1, alt: "Salon beige et zellige bleu", category: "Salons" },
  { src: images.salon3, alt: "Salon beige lumineux", category: "Salons" },
  { src: images.salonBeige3, alt: "Salon beige, banquettes", category: "Salons" },
  { src: images.salonBeige4, alt: "Salon beige, vue panoramique", category: "Salons" },

  // Chambres
  { src: images.roomDouble, alt: "Chambre double", category: "Chambres" },
  { src: images.roomTwin, alt: "Chambre à deux lits", category: "Chambres" },
  { src: images.roomSingle, alt: "Chambre single", category: "Chambres" },
  { src: images.roomTriple, alt: "Chambre triple", category: "Chambres" },
  { src: images.roomFamily, alt: "Chambre familiale", category: "Chambres" },

  // Salle à manger
  { src: images.restaurant1, alt: "Salle à manger et salon", category: "Salle à manger" },
  { src: images.restaurant3, alt: "Tables dressées sous le lustre", category: "Salle à manger" },
  { src: images.restaurant2, alt: "Salle à manger, vue d'ensemble", category: "Salle à manger" },
];

export const galleryCategories = ["Le Riad", "Salons", "Chambres", "Salle à manger"];
