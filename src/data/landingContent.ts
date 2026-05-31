import { DAL } from "../design/dal";

/** Gallery assets: public/gallery/1.jpeg … 8.jpeg */
export const galleryImage = (n: number) => `/gallery/${n}.jpeg`;

export const GALLERY_VIDEOS = [
  "/gallery/video.mp4",
  "/gallery/video%202.mp4",
  "/gallery/video%203.mp4",
] as const;

/** @deprecated Use DAL.layout from src/design/dal.ts */
export const LAYOUT = {
  maxWidth: DAL.layout.maxWidthPx,
  columns: DAL.layout.columns,
  gutter: DAL.layout.gutterPx,
} as const;
export const landingHero = {
  eyebrow: "Medical Exchange Nepal · Kathmandu, Nepal",
  headline: {
    line1: "Where Global Healthcare",
    line2: "",
    highlight: ["Meets the Himalayas."],
  },
  description:
    "Train alongside Nepal's experienced clinicians. Access affordable world-class treatment. Explore healing traditions rooted in the Himalayas. One destination. Three transformative journeys.",
  primaryCta: "Apply Now",
  secondaryCta: "Explore Options",
  stats: [
    "500+ Students Placed",
    "30+ Countries Represented",
    "98% Satisfaction Rate",
  ],
  /**
   * Visual hierarchy: ~70% feature + three supporting (~10% each).
   * Narrative: Community → Clinical → Mentorship → Nepal
   */
  storyCollage: [
    {
      id: "feature",
      image: 1,
      story: "Community Healthcare",
      alt: "Community health outreach with patients in rural Nepal",
      objectPosition: "center 35%",
    },
    {
      id: "clinical",
      image: 3,
      story: "Clinical Training",
      alt: "Hospital rotations and clinical skills in Nepal",
      objectPosition: "center 40%",
    },
    {
      id: "mentorship",
      image: 5,
      story: "Student Mentorship",
      alt: "Physician mentorship and guided learning",
      objectPosition: "center 30%",
    },
    {
      id: "nepal",
      image: 4,
      story: "Nepal Experience",
      alt: "Cultural immersion beyond the hospital",
      objectPosition: "center 50%",
    },
  ] as const,
  /** Replace logo paths with official PNG/SVG files in public/partners/ when available */
  partners: [
    {
      abbr: "TUTH",
      name: "Tribhuvan University Teaching Hospital",
      logo: "/partners/tuth.svg",
      url: "https://tuth.edu.np",
      width: 100,
    },
    {
      abbr: "BIR",
      name: "Bir Hospital",
      logo: "/partners/bir.svg",
      url: "https://birhospital.gov.np",
      width: 72,
    },
    {
      abbr: "KCH",
      name: "Kanti Children's Hospital",
      logo: "/partners/kch.svg",
      url: "https://kantihospital.gov.np",
      width: 72,
    },
    {
      abbr: "PMH",
      name: "Paropakar Maternity Hospital",
      logo: "/partners/pmh.svg",
      url: "https://pmhnepal.org",
      width: 72,
    },
    {
      abbr: "GMC",
      name: "Gandaki Medical College",
      logo: "/partners/gmc.svg",
      url: "https://gmc.edu.np",
      width: 72,
    },
    {
      abbr: "NMC",
      name: "Nepal Medical Council",
      logo: "/partners/nmc.svg",
      url: "https://nmc.org.np",
      width: 72,
    },
  ],
};

export const inPicturesSection = {
  title: "In Pictures",
  subtitle: "Real moments from hospital rotations, camps & adventures",
  viewAllLabel: "View full gallery",
  images: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({
    id: n,
    src: galleryImage(n),
    alt: `Medical internship in Nepal — gallery photo ${n}`,
  })),
};
