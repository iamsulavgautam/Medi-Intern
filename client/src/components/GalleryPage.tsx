import React, { useMemo, useState } from "react";
import { X, ZoomIn, Images } from "lucide-react";

interface GalleryPageProps {
  setCurrentPage?: (page: string) => void;
}

const GalleryPage: React.FC<GalleryPageProps> = () => {
  const allImages = useMemo(
    () => [
      // Top hero images
      "https://raw.githubusercontent.com/pratikgtam/medical_images/refs/heads/main/images/top/1.JPG",
      "https://raw.githubusercontent.com/pratikgtam/medical_images/refs/heads/main/images/top/2.JPG",
      "https://raw.githubusercontent.com/pratikgtam/medical_images/refs/heads/main/images/top/3.JPG",
      "https://raw.githubusercontent.com/pratikgtam/medical_images/refs/heads/main/images/top/4.JPG",
      "https://raw.githubusercontent.com/pratikgtam/medical_images/refs/heads/main/images/top/5.JPG",
      // Programs
      "https://raw.githubusercontent.com/pratikgtam/medical_images/refs/heads/main/images/community-health/1.jpeg",
      "https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/8376297/pexels-photo-8376297.jpeg?auto=compress&cs=tinysrgb&w=1200",
      // Lifestyle & Nepal context (royalty-free)
      "https://images.pexels.com/photos/279716/pexels-photo-279716.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/164287/pexels-photo-164287.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/220885/pexels-photo-220885.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    []
  );

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div>
      {/* Header */}
      <section className="relative bg-gradient-to-r from-teal-700 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-center space-x-3">
            <Images className="h-8 w-8 text-white" />
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Gallery
            </h1>
          </div>
          <p className="mt-4 text-teal-100 max-w-3xl">
            Moments from hospital rotations, community health camps, cultural
            immersion, and life in Nepal.
          </p>
        </div>
      </section>

      {/* Masonry-like Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]"></div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {allImages.map((src, index) => (
              <div key={index} className="mb-4 break-inside-avoid">
                <div className="group relative overflow-hidden rounded-xl shadow-md">
                  <img
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onClick={() => setLightboxIndex(index)}
                  />
                  <button
                    className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-colors"
                    onClick={() => setLightboxIndex(index)}
                    aria-label="Open image"
                  >
                    <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(null);
            }}
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={allImages[lightboxIndex]}
            alt={`Expanded gallery image ${lightboxIndex + 1}`}
            className="max-h-[85vh] max-w-[95vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
