/**
 * DAL — Data-Ink · Anchoring · Layout
 *
 * D (Data-Ink): Every pixel should carry information. Decorative ink is capped.
 * A (Anchoring): One primary visual anchor per zone; reading order is explicit.
 * L (Layout): Single 12-column grid; all sections share one container width.
 */

export const DAL = {
  layout: {
    maxWidthPx: 1400,
    columns: 12,
    gutterPx: 24,
    paddingInline: "clamp(1.25rem, 5vw, 5rem)",
    /** Hero message vs media split on desktop */
    hero: {
      messageCols: 5,
      mediaCols: 7,
    },
    inPictures: {
      colsPerTile: 3,
    },
  },

  anchoring: {
    /** Z-pattern reading order in hero message zone */
    heroFlow: [
      "eyebrow",
      "headline",
      "lede",
      "cta",
      "proof",
    ] as const,
    /** Visual weight budget (should sum to ~1.0 in collage) */
    collageWeight: {
      feature: 0.7,
      supportingEach: 0.1,
    },
    primaryAnchor: "hero-feature-image" as const,
  },

  dataInk: {
    /** Max opacity for non-data atmosphere layers */
    atmosphereOpacity: 0.025,
    glowOpacity: 0.07,
    /** Supporting collage tiles: caption only via alt, not duplicate labels */
    supportingCaptions: false,
    /** Prefer text proof over icon decoration */
    proofUsesIcons: false,
  },
} as const;

export type DalHeroFlowStep = (typeof DAL.anchoring.heroFlow)[number];
