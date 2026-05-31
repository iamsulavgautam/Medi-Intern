import React from "react";
import { DAL } from "../../design/dal";

/**
 * D · Data-Ink: contour lines only — no gradients, maps, or journey graphics.
 */
const HeroAtmosphere: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden dal-ink-nondata" aria-hidden>
    <svg
      className="absolute inset-0 h-full w-full text-[#9CA3AF]"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1440 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: DAL.dataInk.atmosphereOpacity }}
    >
      <g stroke="currentColor" strokeWidth="0.75">
        <path d="M-40 640 C140 600 280 650 420 610 S700 580 900 630 S1180 680 1480 600" />
        <path d="M-40 520 C100 480 240 530 400 490 S680 460 880 510 S1160 560 1480 480" />
        <path d="M-40 400 C120 360 260 410 380 370 S660 340 860 390 S1140 440 1480 360" />
        <path d="M-40 280 C180 240 320 290 480 250 S760 220 960 270 S1240 320 1480 240" />
        <path d="M-40 160 C160 120 300 170 460 130 S740 100 940 150 S1220 200 1480 120" />
      </g>
    </svg>
  </div>
);

export default HeroAtmosphere;
