// Toutes les images sont des photos de placeholders provenant de Pexels.
// Pour remplacer par les vraies photos du Riad Gîte Menzeh, il suffit de
// changer les URLs ci-dessous ou de placer vos images dans /public/images/
// et de mettre à jour les chemins.

const px = (url: string, w = 1600) => {
  const base = url.split("?")[0];
  return `${base}?auto=compress&cs=tinysrgb&w=${w}`;
};

export const images = {
  hero: px("https://images.pexels.com/photos/10573397/pexels-photo-10573397.jpeg", 1920),
  heroAlt: px("https://images.pexels.com/photos/412050/pexels-photo-412050.jpeg", 1920),

  // Le Riad
  riadCourtyard: px("https://images.pexels.com/photos/38891222/pexels-photo-38891222.jpeg"),
  riadCourtyard2: px("https://images.pexels.com/photos/15531325/pexels-photo-15531325.jpeg"),
  riadArchitecture: px("https://images.pexels.com/photos/412050/pexels-photo-412050.jpeg"),
  riadPool: px("https://images.pexels.com/photos/31356126/pexels-photo-31356126.png"),
  riadFountain: px("https://images.pexels.com/photos/5504503/pexels-photo-5504503.jpeg"),
  riadInterior: px("https://images.pexels.com/photos/18320915/pexels-photo-18320915.jpeg"),
  riadTilework: px("https://images.pexels.com/photos/29596008/pexels-photo-29596008.jpeg"),
  riadCourtyardDetail: px("https://images.pexels.com/photos/37834413/pexels-photo-37834413.jpeg"),

  // Hébergement
  room1: px("https://images.pexels.com/photos/34940612/pexels-photo-34940612.jpeg"),
  room2: px("https://images.pexels.com/photos/15531322/pexels-photo-15531322.jpeg"),
  room3: px("https://images.pexels.com/photos/34672582/pexels-photo-34672582.jpeg"),
  room4: px("https://images.pexels.com/photos/34672523/pexels-photo-34672523.jpeg"),
  room5: px("https://images.pexels.com/photos/18077191/pexels-photo-18077191.jpeg"),
  room6: px("https://images.pexels.com/photos/15531178/pexels-photo-15531178.jpeg"),
  room7: px("https://images.pexels.com/photos/4946767/pexels-photo-4946767.jpeg"),
  room8: px("https://images.pexels.com/photos/4915547/pexels-photo-4915547.jpeg"),

  // Restauration
  food1: px("https://images.pexels.com/photos/36984667/pexels-photo-36984667.jpeg"),
  food2: px("https://images.pexels.com/photos/2287528/pexels-photo-2287528.jpeg"),
  food3: px("https://images.pexels.com/photos/998244/pexels-photo-998244.jpeg"),
  food4: px("https://images.pexels.com/photos/36916123/pexels-photo-36916123.jpeg"),
  food5: px("https://images.pexels.com/photos/30068444/pexels-photo-30068444.jpeg"),
  food6: px("https://images.pexels.com/photos/1618929/pexels-photo-1618929.jpeg"),
  food7: px("https://images.pexels.com/photos/2291602/pexels-photo-2291602.jpeg"),
  food8: px("https://images.pexels.com/photos/35509025/pexels-photo-35509025.jpeg"),

  // Restaurant / salle
  restaurant1: px("https://images.pexels.com/photos/9143471/pexels-photo-9143471.jpeg"),
  restaurant2: px("https://images.pexels.com/photos/7556764/pexels-photo-7556764.jpeg"),
  restaurant3: px("https://images.pexels.com/photos/6634469/pexels-photo-6634469.jpeg"),
  restaurant4: px("https://images.pexels.com/photos/18320911/pexels-photo-18320911.jpeg"),
  restaurant5: px("https://images.pexels.com/photos/24433378/pexels-photo-24433378.jpeg"),

  // Petit-déjeuner / thé
  tea1: px("https://images.pexels.com/photos/30906051/pexels-photo-30906051.jpeg"),
  tea2: px("https://images.pexels.com/photos/30906049/pexels-photo-30906049.jpeg"),
  tea3: px("https://images.pexels.com/photos/31497982/pexels-photo-31497982.jpeg"),
  breakfast1: px("https://images.pexels.com/photos/34347201/pexels-photo-34347201.jpeg"),

  // Terrasse / extérieur
  terrace1: px("https://images.pexels.com/photos/8571081/pexels-photo-8571081.jpeg"),
  terrace2: px("https://images.pexels.com/photos/6662080/pexels-photo-6662080.jpeg"),
  terrace3: px("https://images.pexels.com/photos/37587583/pexels-photo-37587583.jpeg"),

  // Paysage / région
  landscape1: px("https://images.pexels.com/photos/18742776/pexels-photo-18742776.jpeg"),
  landscape2: px("https://images.pexels.com/photos/37684085/pexels-photo-37684085.jpeg"),
  landscape3: px("https://images.pexels.com/photos/37684102/pexels-photo-37684102.jpeg"),
  landscape4: px("https://images.pexels.com/photos/30208105/pexels-photo-30208105.jpeg"),

  // Architecture / détails
  arch1: px("https://images.pexels.com/photos/5208318/pexels-photo-5208318.jpeg"),
  arch2: px("https://images.pexels.com/photos/35036533/pexels-photo-35036533.jpeg"),
  arch3: px("https://images.pexels.com/photos/30281036/pexels-photo-30281036.jpeg"),
  arch4: px("https://images.pexels.com/photos/12504897/pexels-photo-12504897.jpeg"),
  arch5: px("https://images.pexels.com/photos/34296099/pexels-photo-34296099.jpeg"),
};

export type GalleryImage = {
  src: string;
  alt: string;
  category: string;
};

export const galleryImages: GalleryImage[] = [
  // Le Riad
  { src: images.riadCourtyard, alt: "Cour intérieure du riad", category: "Le Riad" },
  { src: images.riadCourtyard2, alt: "Architecture du riad vue plongeante", category: "Le Riad" },
  { src: images.riadPool, alt: "Patio avec bassin", category: "Le Riad" },
  { src: images.riadFountain, alt: "Cour avec fontaine centrale", category: "Le Riad" },
  { src: images.riadInterior, alt: "Salon intérieur du riad", category: "Le Riad" },
  { src: images.riadTilework, alt: "Détails de zellige", category: "Le Riad" },

  // Chambres
  { src: images.room1, alt: "Chambre décorée", category: "Chambres" },
  { src: images.room2, alt: "Chambre traditionnelle", category: "Chambres" },
  { src: images.room3, alt: "Chambre avec rideaux", category: "Chambres" },
  { src: images.room4, alt: "Chambre aux tons orangés", category: "Chambres" },
  { src: images.room7, alt: "Chambre lit confortable", category: "Chambres" },
  { src: images.room8, alt: "Chambre avec pétales", category: "Chambres" },

  // Restaurant
  { src: images.restaurant1, alt: "Salle de restaurant", category: "Restaurant" },
  { src: images.restaurant2, alt: "Restaurant élégant", category: "Restaurant" },
  { src: images.restaurant3, alt: "Cour avec tables", category: "Restaurant" },
  { src: images.restaurant4, alt: "Salon marocain", category: "Restaurant" },
  { src: images.restaurant5, alt: "Table dressée", category: "Restaurant" },

  // Cuisine
  { src: images.food1, alt: "Tajine de légumes", category: "Cuisine" },
  { src: images.food3, alt: "Tajine marocain", category: "Cuisine" },
  { src: images.food4, alt: "Couscous royal", category: "Cuisine" },
  { src: images.food5, alt: "Tajine d'agneau", category: "Cuisine" },
  { src: images.food6, alt: "Couscous traditionnel", category: "Cuisine" },
  { src: images.food8, alt: "Plats de tajine", category: "Cuisine" },

  // Extérieur
  { src: images.terrace1, alt: "Terrasse panoramique", category: "Extérieur" },
  { src: images.terrace2, alt: "Terrasse ensoleillée", category: "Extérieur" },
  { src: images.terrace3, alt: "Terrasse avec vue", category: "Extérieur" },
  { src: images.landscape1, alt: "Village marocain", category: "Extérieur" },
  { src: images.landscape2, alt: "Village berbère", category: "Extérieur" },
  { src: images.landscape4, alt: "Vue aérienne de la région", category: "Extérieur" },

  // Ambiance
  { src: images.tea1, alt: "Thé à la menthe", category: "Ambiance" },
  { src: images.tea2, alt: "Service à thé traditionnel", category: "Ambiance" },
  { src: images.tea3, alt: "Cérémonie du thé", category: "Ambiance" },
  { src: images.breakfast1, alt: "Petit-déjeuner", category: "Ambiance" },
  { src: images.arch1, alt: "Arches mauresques", category: "Ambiance" },
  { src: images.arch4, alt: "Mosaïque marocaine", category: "Ambiance" },
];

export const galleryCategories = [
  "Le Riad",
  "Chambres",
  "Restaurant",
  "Cuisine",
  "Extérieur",
  "Ambiance",
];
