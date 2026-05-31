import React from "react";
import { landingHero, galleryImage } from "../../data/landingContent";

const areaById: Record<(typeof landingHero.storyCollage)[number]["id"], string> = {
  feature: "feature",
  clinical: "clinical",
  mentorship: "mentorship",
  nepal: "nepal",
};

/**
 * A · Anchoring: one primary tile (~70%). Supporting tiles = image data only (alt text).
 */
const HeroStoryCollage: React.FC = () => (
  <div className="dal-collage dal-ink-data w-full" aria-label="Program experience in Nepal">
    {landingHero.storyCollage.map((tile, i) => {
      const isPrimary = tile.id === "feature";

      return (
        <figure
          key={tile.id}
          className={`dal-collage-tile group m-0 ${isPrimary ? "dal-anchor-primary" : ""}`}
          style={{ gridArea: areaById[tile.id] }}
        >
          <div className="dal-collage-frame dal-hover-zoom">
            <img
              src={galleryImage(tile.image)}
              alt={
                isPrimary
                  ? `${tile.alt} — ${tile.story}`
                  : `${tile.alt} (${tile.story})`
              }
              loading={i === 0 ? "eager" : "lazy"}
              className="dal-hover-zoom__media absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: tile.objectPosition }}
            />
          </div>
          {isPrimary && (
            <figcaption className="dal-collage-caption dal-ink-data">
              {tile.story}
            </figcaption>
          )}
        </figure>
      );
    })}
  </div>
);

export default HeroStoryCollage;
