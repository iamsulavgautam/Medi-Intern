import React from "react";

export interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
}

interface ExperienceGalleryProps {
  title: string;
  subtitle: string;
  items: GalleryItem[];
}

const ExperienceGallery: React.FC<ExperienceGalleryProps> = ({
  title,
  subtitle,
  items,
}) => (
  <section className="py-14 bg-slate-50 border-y border-slate-100" aria-label={title}>
    <div className="layout-container">
      <div className="text-center mb-10 max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">{title}</h2>
        <p className="text-slate-600">{subtitle}</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {items.map((item, i) => (
          <figure
            key={`${item.src}-${i}`}
            className="m-0 overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-100"
          >
            <div className="dal-hover-zoom relative aspect-[4/3] bg-slate-200">
              <img
                src={item.src}
                alt={item.alt}
                loading={i < 2 ? "eager" : "lazy"}
                className="dal-hover-zoom__media absolute inset-0 h-full w-full object-cover"
              />
            </div>
            {item.caption ? (
              <figcaption className="px-3 py-2.5 text-xs font-semibold text-slate-600">
                {item.caption}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceGallery;
