import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { galleryImages, galleryCategories } from "@/config/images";

type GalleryProps = {
  filterable?: boolean;
  limit?: number;
};

export default function Gallery({ filterable = true, limit }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("Tout");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ["Tout", ...galleryCategories];

  const filtered =
    activeCategory === "Tout"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const displayed = limit ? filtered.slice(0, limit) : filtered;

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const nextImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? prev : (prev + 1) % filtered.length
    );
  }, [filtered.length]);
  const prevImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? prev : (prev - 1 + filtered.length) % filtered.length
    );
  }, [filtered.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  return (
    <>
      {/* Category filter */}
      {filterable && (
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-terracotta-600 text-cream-50 shadow-warm"
                  : "bg-cream-100 text-sand-700 hover:bg-sand-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Masonry grid */}
      <div className="masonry">
        {displayed.map((img, i) => (
          <button
            key={`${img.src}-${i}`}
            onClick={() => setLightboxIndex(i)}
            className="group masonry-item relative block w-full overflow-hidden rounded-2xl shadow-soft ring-1 ring-sand-200/50"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sand-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 text-left opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="text-xs font-semibold uppercase tracking-wider text-terracotta-200">
                {img.category}
              </span>
              <p className="text-sm text-cream-100">{img.alt}</p>
            </div>
            <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-cream-50/20 backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <ZoomIn className="h-4 w-4 text-cream-50" />
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-sand-950/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-cream-50/10 text-cream-50 transition-colors hover:bg-cream-50/20"
            onClick={closeLightbox}
            aria-label="Fermer"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Prev */}
          <button
            className="absolute left-5 flex h-11 w-11 items-center justify-center rounded-full bg-cream-50/10 text-cream-50 transition-colors hover:bg-cream-50/20"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Image précédente"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Image */}
          <figure
            className="max-h-[85vh] max-w-4xl px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              className="max-h-[78vh] w-auto rounded-2xl object-contain"
            />
            <figcaption className="mt-4 text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-terracotta-300">
                {filtered[lightboxIndex].category}
              </span>
              <p className="mt-1 text-sm text-cream-200/80">
                {filtered[lightboxIndex].alt}
              </p>
            </figcaption>
          </figure>

          {/* Next */}
          <button
            className="absolute right-5 flex h-11 w-11 items-center justify-center rounded-full bg-cream-50/10 text-cream-50 transition-colors hover:bg-cream-50/20"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Image suivante"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  );
}
