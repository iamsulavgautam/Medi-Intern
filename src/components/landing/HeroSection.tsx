import React from "react";
import { Stethoscope, Pill, Leaf, ArrowRight } from "lucide-react";
import LayoutContainer from "../layout/LayoutContainer";
import PartnerLogoStrip from "./PartnerLogoStrip";
import { landingHero, galleryImage } from "../../data/landingContent";

interface HeroSectionProps {
  onApply: () => void;
  onExplorePrograms: () => void;
  onNavigate: (page: string) => void;
}

const PATHWAYS = [
  {
    page: "programs",
    icon: Stethoscope,
    label: "Elective Medical Placement",
    tagline: "Hospital rotations for medical students",
    // light blue
    card: "bg-sky-100 border border-sky-200 hover:bg-sky-200",
    iconBg: "bg-sky-200",
    iconColor: "text-sky-700",
    labelColor: "text-sky-900",
    taglineColor: "text-sky-600",
    arrowColor: "text-sky-600",
  },
  {
    page: "elective-treatment",
    icon: Pill,
    label: "Elective Treatment",
    tagline: "Affordable world-class care in Nepal",
    // dark blue — inverted
    card: "bg-blue-700 border border-blue-700 hover:bg-blue-800",
    iconBg: "bg-blue-500",
    iconColor: "text-white",
    labelColor: "text-white",
    taglineColor: "text-blue-200",
    arrowColor: "text-blue-200",
  },
  {
    page: "spiritual-wellness",
    icon: Leaf,
    label: "Spiritual & Wellness",
    tagline: "Ayurveda, yoga & Himalayan healing",
    // green
    card: "bg-emerald-100 border border-emerald-200 hover:bg-emerald-200",
    iconBg: "bg-emerald-200",
    iconColor: "text-emerald-700",
    labelColor: "text-emerald-900",
    taglineColor: "text-emerald-600",
    arrowColor: "text-emerald-600",
  },
] as const;

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => (
  <section
    className="relative flex flex-col bg-gray-50 overflow-hidden"
    aria-label="Hero — Medical Internships in Nepal"
  >

    {/* ── MOBILE image strip ───────────────────────────────────────────────── */}
    <div className="lg:hidden grid grid-cols-2 gap-2.5 p-3 pt-4">
      <div className="col-span-2 h-64 rounded-2xl overflow-hidden shadow-md group">
        <img src="/spritual/23.jpeg" alt="Nepal experience" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="eager" />
      </div>
      <div className="h-40 rounded-xl overflow-hidden shadow-sm group">
        <img src={galleryImage(3)} alt="Clinical training Nepal" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
      </div>
      <div className="h-40 rounded-xl overflow-hidden shadow-sm group">
        <img src={galleryImage(1)} alt="Community healthcare Nepal" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
      </div>
    </div>

    {/* ── MAIN GRID ───────────────────────────────────────────────────────── */}
    <LayoutContainer className="relative z-10 py-8 lg:py-12">
      <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-8 lg:gap-10 items-center">

        {/* ── LEFT: Text ──────────────────────────────────────────────────── */}
        <div className="flex flex-col justify-center">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-0.5 bg-blue-500 rounded-full" />
            <span className="text-xs font-bold tracking-[0.22em] uppercase text-blue-600">
              Nepal's Leading Medical Internship Provider
            </span>
          </div>

          {/* Headline — max size */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 leading-[1.04] mb-5">
            {landingHero.headline.line1}
            <span className="block text-blue-600 mt-2">
              {landingHero.headline.highlight[0]}
            </span>
          </h1>

          {/* Description */}
          <p className="text-base text-slate-500 leading-relaxed mb-8 max-w-lg">
            Supervised rotations across Internal Medicine, Surgery &amp; Community
            Health with <span className="font-bold text-slate-700">guaranteed placements</span>,
            accommodation, and local support.
          </p>

          {/* Pathway buttons — colorful */}
          <div className="flex flex-col gap-3 mb-10">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400 mb-1">
              Choose your path
            </p>
            {PATHWAYS.map(({ page, icon: Icon, label, tagline, card, iconBg, iconColor, labelColor, taglineColor, arrowColor }) => (
              <button
                key={page}
                type="button"
                onClick={() => onNavigate(page)}
                className={`group flex items-center gap-4 w-full rounded-2xl ${card} px-6 py-5 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 active:translate-y-0 focus:outline-none text-left`}
              >
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center`}>
                  <Icon className={`h-6 w-6 ${iconColor}`} strokeWidth={1.75} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`font-extrabold text-base ${labelColor} leading-tight`}>{label}</div>
                  <div className={`text-sm ${taglineColor} mt-0.5 hidden sm:block`}>{tagline}</div>
                </div>
                <ArrowRight className={`h-5 w-5 ${arrowColor} flex-shrink-0 group-hover:translate-x-1.5 transition-transform duration-200`} />
              </button>
            ))}
          </div>

          {/* Trust stats */}
          <div className="flex items-center gap-2 flex-wrap">
            {landingHero.stats.map((stat, i) => (
              <React.Fragment key={stat}>
                {i > 0 && <span className="text-slate-300 mx-1">·</span>}
                <span className="text-sm text-slate-500 font-semibold">{stat}</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Four images filling full height ───────────────────────── */}
        <div className="hidden lg:flex gap-4 h-[520px]">

          {/* Col A — tall dominant */}
          <div className="flex-[1.4] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
            <img
              src="/spritual/23.jpeg"
              alt="Nepal Himalayan experience"
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              loading="eager"
            />
          </div>

          {/* Col B — three stacked, same total height */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex-1 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
              <img src="/gallery/8.jpeg" alt="Nepal experience" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="eager" />
            </div>
            <div className="flex-1 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
              <img src={galleryImage(1)} alt="Community healthcare Nepal" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            </div>
            <div className="flex-1 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
              <img src={galleryImage(5)} alt="Medical students Nepal" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            </div>
          </div>

        </div>

      </div>
    </LayoutContainer>

    {/* Partner logos */}
    <div className="relative z-10 border-t border-slate-200">
      <PartnerLogoStrip />
    </div>
  </section>
);

export default HeroSection;
