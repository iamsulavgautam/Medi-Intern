import React from "react";
import { ArrowRight } from "lucide-react";
import LayoutContainer from "../layout/LayoutContainer";
import { inPicturesSection } from "../../data/landingContent";

interface InPicturesSectionProps {
  onViewGallery: () => void;
}

/**
 * DAL gallery: L (12-col), D (images only, no decorative icon), A (title left, action right)
 */
const InPicturesSection: React.FC<InPicturesSectionProps> = ({
  onViewGallery,
}) => {
  const { title, viewAllLabel, images } = inPicturesSection;

  return (
    <section className="py-12 sm:py-14 bg-white" aria-label="In Pictures gallery">
      <LayoutContainer>
        <header className="dal-ink-data flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
          <button
            type="button"
            onClick={onViewGallery}
            className="dal-btn dal-btn-ghost dal-ink-data inline-flex items-center"
          >
            {viewAllLabel}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </button>
        </header>

        <div className="dal-grid-12 gap-3 sm:gap-4">
          {images.map((img, index) => (
            <button
              key={img.id}
              type="button"
              onClick={onViewGallery}
              className="dal-gallery-tile dal-ink-data group relative aspect-[3/2] overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--dal-brand)] dal-hover-zoom"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading={index < 4 ? "eager" : "lazy"}
                className="dal-hover-zoom__media absolute inset-0 h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </LayoutContainer>
    </section>
  );
};

export default InPicturesSection;
