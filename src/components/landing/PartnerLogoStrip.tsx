import React from "react";
import { landingHero } from "../../data/landingContent";

/** D: logos are trust data. L: same container as hero. */
const PartnerLogoStrip: React.FC = () => (
  <div className="mt-auto shrink-0 border-t border-[#e5e7eb] bg-white">
    <div className="layout-container py-8">
      <p className="dal-ink-data mb-6 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
        Trusted by leading institutions
      </p>
      <ul className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-12">
        {landingHero.partners.map((partner) => (
          <li key={partner.abbr}>
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              title={partner.name}
              className="dal-ink-data opacity-75 transition-opacity duration-200 hover:opacity-100"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                width={partner.width ?? 120}
                height={40}
                className="h-8 w-auto max-w-[140px] object-contain sm:h-9 grayscale hover:grayscale-0 transition-[filter]"
                loading="lazy"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default PartnerLogoStrip;
