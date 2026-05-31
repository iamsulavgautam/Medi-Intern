import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  MapPin,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Leaf,
  Mountain,
  Sun,
  Wind,
  Heart,
  Sparkles,
  Bell,
  Music,
  Tag,
  Clock,
  Syringe,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";


// All images from public/spritual/
const SPIRITUAL_IMAGES = [
  { src: "/spritual/next.jpeg",     alt: "Spiritual experience in Nepal" },
  { src: "/spritual/swimming.jpeg", alt: "Wellness and nature in Nepal" },
  { src: "/spritual/23.jpeg", alt: "Himalayan wellness retreat" },
  { src: "/spritual/22.jpeg", alt: "Yoga and meditation in Nepal" },
  { src: "/spritual/21.jpeg",   alt: "Sacred sites and healing" },
  { src: "/spritual/24.jpeg", alt: "Tibetan healing traditions" },
  { src: "/spritual/25.jpeg", alt: "Ayurveda and spiritual wellness" },
];

// Carousel cards — spiritual images enriched with metadata
const CAROUSEL_CARDS = [
  { img: SPIRITUAL_IMAGES[0], title: "Himalayan Yoga Trek",       rating: "4.9", type: "Adventure Wellness",  duration: "10–14 days", price: "From $1,200" },
  { img: SPIRITUAL_IMAGES[1], title: "Sacred Waters & Renewal",   rating: "4.8", type: "Spiritual Retreat",   duration: "3–7 days",   price: "From $400"  },
  { img: SPIRITUAL_IMAGES[2], title: "Ayurveda Panchakarma",      rating: "5.0", type: "Healing Programme",   duration: "7–21 days",  price: "From $800"  },
  { img: SPIRITUAL_IMAGES[3], title: "Yoga & Meditation Retreat", rating: "4.9", type: "Daily Practice",      duration: "7–14 days",  price: "From $600"  },
  { img: SPIRITUAL_IMAGES[4], title: "Sacred Site Pilgrimage",    rating: "4.7", type: "Spiritual Journey",   duration: "3–5 days",   price: "From $350"  },
  { img: SPIRITUAL_IMAGES[5], title: "Tibetan Sound Healing",     rating: "4.8", type: "Sound Therapy",       duration: "3–7 days",   price: "From $350"  },
  { img: SPIRITUAL_IMAGES[6], title: "Silent Monastery Retreat",  rating: "4.9", type: "Silent Retreat",      duration: "5–10 days",  price: "From $500"  },
];

// ── Cinematic Cover Flow Carousel ────────────────────────────────────────────
const CinematicCarousel: React.FC<{ onEnquire: () => void }> = ({ onEnquire }) => {
  const [active, setActive] = useState(2);
  const total = CAROUSEL_CARDS.length;

  const go = useCallback((dir: 1 | -1) => {
    setActive((p) => (p + dir + total) % total);
  }, [total]);

  const OFFSETS = [-2, -1, 0, 1, 2];

  return (
    <section className="relative py-20 bg-white overflow-hidden select-none border-y border-slate-100">
      {/* Subtle ambient glow — emerald, not red */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 55% 35% at 50% 85%, rgba(16,185,129,0.08) 0%, transparent 70%)" }}
      />

      {/* Header */}
      <div className="text-center mb-14 px-4">
        <p className="text-xs font-bold tracking-[0.25em] uppercase text-emerald-600 mb-3">
          Wellness Experiences
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
          Choose Your Journey
        </h2>
        <p className="text-slate-500 text-sm max-w-md mx-auto">
          Seven transformative programmes — each rooted in Nepal's living healing traditions.
        </p>
      </div>

      {/* Carousel stage */}
      <div
        className="relative mx-auto h-[560px] md:h-[640px] flex items-center justify-center"
        style={{ perspective: "1200px" }}
      >
        {OFFSETS.map((offset) => {
          const idx = ((active + offset) % total + total) % total;
          const card = CAROUSEL_CARDS[idx];
          const abs = Math.abs(offset);
          const isActive = offset === 0;

          const x      = offset * 300;
          const z      = isActive ? 80 : abs === 1 ? -60 : -200;
          const scaleV = isActive ? 1.0 : abs === 1 ? 0.76 : 0.58;
          const rotY   = offset * -16;
          const opac   = isActive ? 1 : abs === 1 ? 0.60 : 0.28;

          return (
            <motion.div
              key={`${idx}-${offset}`}
              onClick={() => !isActive && go(offset > 0 ? 1 : -1)}
              animate={{ x, z, scale: scaleV, rotateY: rotY, opacity: opac }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              style={{
                position: "absolute",
                zIndex: isActive ? 20 : abs === 1 ? 10 : 5,
                transformStyle: "preserve-3d",
                cursor: isActive ? "default" : "pointer",
              }}
              className="w-[300px] md:w-[340px] h-[460px] md:h-[520px] rounded-3xl overflow-hidden flex-shrink-0"
            >
              {/* Emerald glow behind active card */}
              {isActive && (
                <div
                  className="absolute -inset-8 rounded-[2rem] -z-10 blur-3xl"
                  style={{ background: "radial-gradient(ellipse, rgba(16,185,129,0.30) 0%, transparent 65%)" }}
                />
              )}

              {/* Card — image only, no text overlay */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={card.img.src}
                  alt={card.img.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  draggable={false}
                />

                {/* Very light bottom fade for button readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Enquire button — only on active card */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      key="cta"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.22 }}
                      className="absolute bottom-0 left-0 right-0 px-5 pb-6"
                    >
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); onEnquire(); }}
                        className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-white text-emerald-700 text-sm font-bold shadow-lg hover:bg-emerald-50 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                      >
                        Enquire About This Programme <ArrowRight className="h-4 w-4" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-5 mt-10">
        <button
          type="button"
          onClick={() => go(-1)}
          className="w-11 h-11 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center justify-center text-slate-600 transition-all duration-200 hover:scale-110 shadow-sm"
          aria-label="Previous"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Dot indicators */}
        <div className="flex items-center gap-2">
          {CAROUSEL_CARDS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${
                i === active
                  ? "w-6 h-2 bg-emerald-500"
                  : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to card ${i + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          className="w-11 h-11 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center justify-center text-slate-600 transition-all duration-200 hover:scale-110 shadow-sm"
          aria-label="Next"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

interface SpiritualWellnessPageProps {
  setCurrentPage: (page: string) => void;
}

// ── Accent styles ─────────────────────────────────────────────────────────────
type Accent = "emerald" | "teal" | "green" | "lime" | "cyan" | "amber";

const accentStyles: Record<Accent, { badge: string; icon: string; ring: string; stat: string }> = {
  emerald: { badge: "bg-emerald-100 text-emerald-800 border-emerald-200/60", icon: "bg-emerald-50 text-emerald-600", ring: "hover:ring-emerald-200", stat: "text-emerald-700 bg-emerald-50" },
  teal:    { badge: "bg-teal-100 text-teal-800 border-teal-200/60",         icon: "bg-teal-50 text-teal-600",       ring: "hover:ring-teal-200",    stat: "text-teal-700 bg-teal-50"    },
  green:   { badge: "bg-green-100 text-green-800 border-green-200/60",      icon: "bg-green-50 text-green-600",     ring: "hover:ring-green-200",   stat: "text-green-700 bg-green-50"  },
  lime:    { badge: "bg-lime-100 text-lime-800 border-lime-200/60",         icon: "bg-lime-50 text-lime-600",       ring: "hover:ring-lime-200",    stat: "text-lime-700 bg-lime-50"    },
  cyan:    { badge: "bg-cyan-100 text-cyan-800 border-cyan-200/60",         icon: "bg-cyan-50 text-cyan-600",       ring: "hover:ring-cyan-200",    stat: "text-cyan-700 bg-cyan-50"    },
  amber:   { badge: "bg-amber-100 text-amber-800 border-amber-200/60",      icon: "bg-amber-50 text-amber-600",     ring: "hover:ring-amber-200",   stat: "text-amber-700 bg-amber-50"  },
};

// ── What makes Nepal unique showcase ─────────────────────────────────────────
const wellnessShowcase: {
  category: string;
  title: string;
  description: string;
  highlights: string[];
  stat: string;
  icon: LucideIcon;
  accent: Accent;
}[] = [
  {
    category: "Ayurveda",
    title: "Ancient Indian healing system",
    description: "Nepal's geographic and cultural proximity to the Indian subcontinent makes it a deeply authentic home for Ayurvedic practice. Himalayan herbs, ghee therapies, and Panchakarma detox programmes are practised by lineage-trained vaidyas.",
    highlights: ["Dosha assessment by qualified vaidya", "Himalayan herb sourcing", "Authentic Panchakarma (5-action detox)", "Accessible pricing vs. Kerala clinics"],
    stat: "One of Asia's most authentic Ayurveda destinations",
    icon: Leaf,
    accent: "emerald",
  },
  {
    category: "Yoga & Meditation",
    title: "Living Buddhist & Hindu lineages",
    description: "Nepal is the birthplace of the Buddha and the home of Pashupatinath — one of the world's most sacred Shiva temples. Yoga and meditation here are not fitness products; they are living spiritual traditions accessible to all visitors.",
    highlights: ["Dharma teachings in English", "Kopan & Namo Buddha monasteries", "Vipassana, loving-kindness, body scan traditions", "Both Hindu and Buddhist lineages available"],
    stat: "Birthplace of the Buddha · Pashupatinath Shiva seat",
    icon: Sun,
    accent: "amber",
  },
  {
    category: "Himalayan Setting",
    title: "Altitude, nature & clean air",
    description: "The physiological effects of practicing yoga and meditation at 1,400–4,000 m altitude are well documented — sharper focus, deeper breathing, and a natural slowing of pace. No wellness brand can replicate what the Himalayas provide for free.",
    highlights: ["Morning yoga at sunrise in the mountains", "Annapurna, Langtang & Poon Hill routes", "Air quality and silence unavailable in cities", "Genuine wilderness immersion"],
    stat: "8 of the world's 10 highest peaks",
    icon: Mountain,
    accent: "teal",
  },
  {
    category: "Tibetan Medicine",
    title: "A parallel healing tradition",
    description: "Nepal hosts the world's largest exile Tibetan community outside Tibet, preserving Tibetan medical traditions — including Ku Nye massage, moxibustion, and singing bowl sound therapy — in their most authentic living form.",
    highlights: ["Tibetan doctor (amchi) consultations", "Singing bowl therapy — hand-hammered in Nepal", "Ku Nye therapeutic massage", "Moxibustion and herbal steam"],
    stat: "World's most authentic Tibetan medicine outside Tibet",
    icon: Wind,
    accent: "cyan",
  },
  {
    category: "Affordability",
    title: "Wellness without the luxury markup",
    description: "A 7-day Ayurveda programme that costs $4,000+ in Bali or Kerala costs $800–$1,200 in Nepal. A Himalayan Yoga Trek with a certified instructor and full logistics costs less than a single yoga studio month pass in London.",
    highlights: ["Ayurveda retreats from $800", "Yoga retreats from $600", "Sound healing sessions from $350 for 3 days", "No luxury hotel required to access quality"],
    stat: "60–75% less than equivalent programmes in Bali or Kerala",
    icon: Heart,
    accent: "green",
  },
  {
    category: "Integration",
    title: "Combine treatment & wellness",
    description: "Nepal is one of very few destinations where a patient can have a medical procedure and then enter a structured Ayurveda recovery or yoga rehabilitation programme within the same trip — clinical and holistic, in the same country.",
    highlights: ["Post-surgical Ayurvedic recovery programmes", "Physiotherapy + yoga integration", "Stress reduction after diagnostic travel", "Custom itineraries on request"],
    stat: "Unique clinical + wellness integration",
    icon: Sparkles,
    accent: "lime",
  },
];

// ── Wellness programme data ────────────────────────────────────────────────────
interface WellnessProg {
  id: string;
  Icon: LucideIcon;
  iconBg: string;
  iconClr: string;
  title: string;
  subtitle: string;
  duration: string;
  priceRange: string;
  description: string;
  highlights: string[];
  idealFor: string;
  image: string;
  imageAlt: string;
}

const WELLNESS: WellnessProg[] = [
  {
    id: "ayurveda",
    Icon: Leaf, iconBg: "bg-green-50", iconClr: "text-green-600",
    title: "Ayurveda & Panchakarma",
    subtitle: "Full-body detox & traditional herbal medicine",
    duration: "7–21 days",
    priceRange: "$800–$2,500",
    description:
      "Rooted in 5,000-year-old Vedic science, Panchakarma is a full-body detoxification programme tailored to your dosha (body constitution). Nepal's proximity to Himalayan medicinal herbs, qualified vaidyas (Ayurvedic physicians), and lower cost structure makes it one of the most accessible and authentic settings outside Kerala.",
    highlights: [
      "Dosha assessment consultation with Ayurvedic physician",
      "Abhyanga — daily warm herbal oil full-body massage",
      "Shirodhara — continuous warm oil head treatment",
      "Customised herbal medicine & diet plan",
      "Nasya, Basti & Virechana therapies (as indicated)",
      "Daily yoga and pranayama integrated into programme",
    ],
    idealFor: "Burnout and adrenal fatigue recovery, chronic digestive conditions, preventive healthcare, post-procedure recovery",
    image: SPIRITUAL_IMAGES[2].src,
    imageAlt: "Ayurveda and Panchakarma programme in Nepal",
  },
  {
    id: "yoga",
    Icon: Wind, iconBg: "bg-sky-50", iconClr: "text-sky-600",
    title: "Yoga & Meditation Retreat",
    subtitle: "Daily practice in an authentic Himalayan setting",
    duration: "7–14 days",
    priceRange: "$600–$1,500",
    description:
      "Immersive retreats combining morning Hatha or Ashtanga yoga, pranayama, guided meditation, and evening dharma talks — set against the Kathmandu Valley skyline or Pokhara's Phewa Lake. Classes run twice daily; the tradition is genuinely lived, not just marketed.",
    highlights: [
      "Morning asana practice (Hatha, Ashtanga, or Yin — your choice)",
      "Evening restorative yoga + guided meditation",
      "Pranayama & breathwork workshops",
      "Dharma talks from Buddhist and Hindu teachers",
      "Silent mornings available (optional)",
      "Sattvic vegetarian meals included",
    ],
    idealFor: "Stress and burnout, spiritual seekers of any background, beginners wanting a structured introduction, advanced practitioners seeking authentic teaching",
    image: SPIRITUAL_IMAGES[3].src,
    imageAlt: "Yoga and meditation retreat in Nepal",
  },
  {
    id: "silent-retreat",
    Icon: Bell, iconBg: "bg-amber-50", iconClr: "text-amber-600",
    title: "Silent & Spiritual Retreat",
    subtitle: "Monastery stays, sacred sites & Buddhist practice",
    duration: "3–10 days",
    priceRange: "$400–$1,200",
    description:
      "Experience extended silence and deep spiritual practice at Nepal's most sacred sites — Namo Buddha monastery (a living Tibetan Buddhist monastery east of Kathmandu), Kopan Monastery, Pashupatinath, and the Swayambhunath stupa complex. English-language dharma teachings available daily.",
    highlights: [
      "Guided noble silence practice",
      "Namo Buddha & Kopan Monastery stays",
      "Buddhist dharma teachings in English",
      "Puja ceremonies with resident monks",
      "Walking meditation in monastery gardens",
      "Sacred cave meditation (Pharping area)",
    ],
    idealFor: "Experienced meditators, those recovering from grief or trauma, spiritual practice deepening, mental clarity seekers",
    image: SPIRITUAL_IMAGES[4].src,
    imageAlt: "Silent retreat and monastery stay in Nepal",
  },
  {
    id: "yoga-trek",
    Icon: Mountain, iconBg: "bg-slate-100", iconClr: "text-slate-600",
    title: "Himalayan Yoga Trek",
    subtitle: "Altitude yoga fused with iconic mountain routes",
    duration: "10–14 days",
    priceRange: "$1,200–$2,000",
    description:
      "A fusion programme combining daily yoga and meditation with Nepal's most scenic trekking routes — Annapurna Sanctuary, Langtang Valley, or the Poon Hill Sunrise Trek. Morning yoga at 3,000–4,000 m altitude creates a physiologically and spiritually heightened practice that simply cannot be replicated at sea level.",
    highlights: [
      "Daily morning yoga at altitude (3,000–4,000 m)",
      "Choice of Annapurna, Langtang, or Poon Hill routes",
      "Sunrise meditation at panoramic Himalayan viewpoints",
      "Certified yoga instructor + licensed trekking guide",
      "Tea house accommodation (full-board)",
      "Optional singing bowl evening sessions",
    ],
    idealFor: "Active travellers, yoga practitioners wanting adventure, groups, those combining physical challenge with spiritual practice",
    image: SPIRITUAL_IMAGES[0].src,
    imageAlt: "Himalayan yoga trek with mountain views",
  },
  {
    id: "detox",
    Icon: Sparkles, iconBg: "bg-violet-50", iconClr: "text-violet-600",
    title: "Holistic Detox Programme",
    subtitle: "Juice fasting, naturopathy & Tibetan remedies",
    duration: "7–14 days",
    priceRange: "$700–$1,800",
    description:
      "A medically supervised cleansing programme combining juice fasting, naturopathy consultations, Tibetan herbal medicine, colonic hydrotherapy, and lymphatic drainage massage. Designed for those resetting after overwork, prolonged travel, or lifestyle excess.",
    highlights: [
      "Medically supervised juice fast (3–7 days available)",
      "Tibetan amchi (doctor) herbal medicine assessment",
      "Naturopathy & nutritional counselling",
      "Lymphatic drainage massage",
      "Infrared sauna & hydrotherapy sessions",
      "Post-cleanse reintegration meal plan",
    ],
    idealFor: "Post-travel and post-procedure recovery, weight management, chronic inflammation, lifestyle reset",
    image: SPIRITUAL_IMAGES[1].src,
    imageAlt: "Holistic detox and naturopathy in Nepal",
  },
  {
    id: "sound-healing",
    Icon: Music, iconBg: "bg-rose-50", iconClr: "text-rose-600",
    title: "Tibetan Sound Healing",
    subtitle: "Singing bowls, Ku Nye massage & moxibustion",
    duration: "3–7 days",
    priceRange: "$350–$900",
    description:
      "Nepal is the living home of Tibetan singing bowl therapy. Hand-hammered bronze and brass bowls from Thamel's workshops — not mass-produced imports — are used in extended sound bath sessions, combined with Ku Nye (Tibetan acupressure massage) and moxibustion for deep nervous system regulation.",
    highlights: [
      "Daily singing bowl sound bath (60–90 minutes)",
      "Ku Nye therapeutic Tibetan massage",
      "Moxibustion & herbal compress therapy",
      "Chakra alignment with hand-hammered bowls",
      "Traditional Tibetan amchi consultation",
      "Take-home small singing bowl included",
    ],
    idealFor: "Sleep disorders, anxiety and nervous system dysregulation, chronic pain, spiritual healing, sceptics who want a single-session taster",
    image: SPIRITUAL_IMAGES[5].src,
    imageAlt: "Tibetan sound healing and traditional therapies",
  },
];

const destinationStats = [
  { label: "Healing traditions", value: "3+" },
  { label: "Wellness programmes", value: "6" },
  { label: "Starting from",       value: "$350" },
  { label: "vs. Bali / Kerala",   value: "60–75% less" },
];

// ── Component ─────────────────────────────────────────────────────────────────
const SpiritualWellnessPage: React.FC<SpiritualWellnessPageProps> = ({ setCurrentPage }) => {
  const [openCard, setOpenCard] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">

      {/* ── Page header — half-height cover ─────────────────────────────────── */}
      <section className="relative h-[55vh] min-h-[340px] max-h-[520px] flex items-end overflow-hidden" aria-label="Spiritual wellness in Nepal">
        {/* Cover image */}
        <div className="absolute inset-0">
          <img
            src={SPIRITUAL_IMAGES[2].src}
            alt="Spiritual wellness in the Himalayas"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>

        {/* Content — compact, anchored to bottom */}
        <div className="relative z-10 w-full px-6 sm:px-10 pb-10 md:pb-14">
          <span className="inline-block text-[10px] font-bold tracking-[0.22em] uppercase text-emerald-400 mb-3">
            Spiritual &amp; Wellness Tourism · Nepal
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 leading-tight">
            Heal. Detox. <span className="text-emerald-400">Reconnect.</span>
          </h1>
          <p className="text-sm sm:text-base text-white/65 max-w-lg leading-relaxed mb-5">
            Nepal's Buddhist &amp; Hindu traditions, Himalayan ecology, and 5,000 years of
            Ayurvedic healing — at 60–75% below Bali or Kerala prices.
          </p>
          <button
            type="button"
            onClick={() => setCurrentPage("contact")}
            className="inline-flex items-center gap-2 bg-white text-emerald-800 px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg hover:bg-emerald-50 transition-all duration-200 hover:scale-[1.03]"
          >
            Plan Your Journey <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* ── Cinematic Carousel ──────────────────────────────────────────────── */}
      <CinematicCarousel onEnquire={() => setCurrentPage("contact")} />

      {/* ── Why Nepal for wellness ───────────────────────────────────────────── */}
      <section className="relative py-14">
        <div className="layout-container max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-5">Why Nepal is different</h2>
          <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
            <p>
              Wellness tourism in Nepal is not a hotel spa product. It is the living daily
              practice of Buddhist monks in Namo Buddha, the 4 AM abhisheka ceremonies at
              Pashupatinath, the hand-hammered singing bowls of Thamel, and the Ayurvedic
              vaidyas who have practised the same lineage for generations.
            </p>
            <p>
              The Himalayas add a physiological dimension that no wellness brand can replicate:
              the altitude, silence, clean air, and visual scale of 8,000-metre peaks create
              conditions for healing and reflection that urban retreat centres simply cannot
              offer. And Nepal delivers this at 60–75% below equivalent programmes in Bali,
              Kerala, or Thailand.
            </p>
          </div>
        </div>
      </section>

      {/* ── Living traditions ─────────────────────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="layout-container max-w-3xl mx-auto text-center">
          <p className="text-emerald-700 text-sm font-semibold uppercase tracking-wide mb-2">Living traditions</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            More than a spa — a place where practice is daily life
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Morning puja at Pashupatinath, afternoon yoga overlooking the valley,
            evening meditation with resident teachers — Nepal offers depth that
            resort chains cannot manufacture.
          </p>
          <ul className="space-y-2 text-sm text-slate-700 text-left max-w-md mx-auto">
            {[
              "Combine monastery stays with guided silence",
              "Pair Ayurveda recovery after clinical electives",
              "Add a Himalayan trek to any retreat programme",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Stats + Showcase grid ───────────────────────────────────────────── */}
      <section className="relative py-10 bg-slate-50">
        <div className="layout-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {destinationStats.map(({ label, value }) => (
              <div key={label} className="rounded-xl bg-slate-50 border border-slate-100 px-4 py-5 text-center">
                <p className="text-2xl font-bold text-slate-900">{value}</p>
                <p className="text-sm text-slate-600 mt-1">{label}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 text-sm font-medium text-slate-600 mb-4">
              <MapPin className="h-4 w-4 text-emerald-600" />
              Wellness traditions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What makes Nepal a world-class wellness destination
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Six distinct pillars — each genuine, each verifiable, each unavailable anywhere else at this price point.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {wellnessShowcase.map(({ category, title, description, highlights, stat, icon: Icon, accent }, index) => {
              const styles = accentStyles[accent];
              return (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className={`card p-0 flex flex-col h-full overflow-hidden ring-1 ring-slate-100 ${styles.ring} transition-all shadow-sm hover:shadow-md`}
                >
                  <div className="px-6 pt-6 pb-4 border-b border-slate-100">
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${styles.badge}`}>
                        {category}
                      </span>
                      <div className={`p-2.5 rounded-xl shrink-0 ${styles.icon}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <h3 className="text-lg font-display font-semibold text-slate-900 mb-2">{title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
                  </div>
                  <div className="px-6 py-4 flex-1 flex flex-col">
                    <ul className="space-y-2 mb-4 flex-1">
                      {highlights.map((item) => (
                        <li key={item} className="flex items-start text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <span className={`inline-flex items-center rounded-lg px-3 py-2 text-xs font-semibold ${styles.stat}`}>
                      {stat}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Programme cards ──────────────────────────────────────────────────── */}
      <section className="relative py-16 bg-white">
        <div className="layout-container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Our Wellness Programmes</h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Six programmes — click any card to see highlights, pricing, and who it's designed for.
            </p>
          </div>

          <div className="space-y-4">
            {WELLNESS.map((prog) => {
              const isOpen = openCard === prog.id;
              return (
                <div key={prog.id} className="card overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-6 hover:bg-slate-50 transition-colors text-left"
                    onClick={() => setOpenCard(isOpen ? null : prog.id)}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl ${prog.iconBg} flex items-center justify-center flex-shrink-0`}>
                        <prog.Icon className={`h-6 w-6 ${prog.iconClr}`} strokeWidth={1.75} />
                      </div>
                      <div>
                        <div className="font-display font-bold text-slate-900 text-lg">{prog.title}</div>
                        <div className="text-slate-500 text-sm">{prog.subtitle}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-5 flex-shrink-0 ml-4">
                      <div className="hidden sm:block text-right">
                        <div className="font-bold text-emerald-700 text-sm">{prog.priceRange}</div>
                        <div className="text-xs text-slate-400">{prog.duration}</div>
                      </div>
                      {isOpen
                        ? <ChevronUp className="h-5 w-5 text-slate-400" />
                        : <ChevronDown className="h-5 w-5 text-slate-400" />
                      }
                    </div>
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-100 p-6 grid md:grid-cols-[minmax(0,240px)_1fr_1fr] gap-6 lg:gap-8">
                      <div className="dal-hover-zoom rounded-xl overflow-hidden h-48 md:h-auto min-h-[200px] bg-slate-200 relative">
                        <img
                          src={prog.image}
                          alt={prog.imageAlt}
                          className="dal-hover-zoom__media absolute inset-0 h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-slate-700 text-sm leading-relaxed mb-5">{prog.description}</p>
                        <div className="flex flex-wrap gap-3 text-sm mb-4">
                          <span className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 rounded-full px-3 py-1 font-semibold">
                            <Tag className="h-3.5 w-3.5" /> {prog.priceRange}
                          </span>
                          <span className="flex items-center gap-1.5 bg-blue-50 text-blue-700 rounded-full px-3 py-1 font-semibold">
                            <Clock className="h-3.5 w-3.5" /> {prog.duration}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500">
                          <span className="font-semibold text-slate-700">Ideal for: </span>{prog.idealFor}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm mb-3">Programme Highlights</h4>
                        <ul className="space-y-2 mb-5">
                          {prog.highlights.map((h) => (
                            <li key={h} className="flex items-start gap-2 text-slate-700 text-sm">
                              <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />{h}
                            </li>
                          ))}
                        </ul>
                        <button
                          type="button"
                          onClick={() => setCurrentPage("contact")}
                          className="dal-btn inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl px-5 py-2.5 font-semibold text-sm"
                        >
                          Enquire About This Programme <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Cross-links ──────────────────────────────────────────────────────── */}
      <section className="relative py-12 bg-slate-50">
        <div className="layout-container">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6 bg-gradient-to-br from-violet-50 to-purple-50 border-violet-100">
              <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center mb-3">
                <Syringe className="h-5 w-5 text-violet-600" strokeWidth={1.75} />
              </div>
              <h3 className="font-display font-bold text-slate-900 mb-2">Add a Medical Procedure</h3>
              <p className="text-slate-600 text-sm mb-4">
                Nepal is one of the few destinations where you can pair a surgical procedure,
                fertility treatment, or dental work with a wellness recovery programme — in the
                same trip, at a fraction of Western prices.
              </p>
              <button onClick={() => setCurrentPage("elective-treatment")} className="btn-outline flex items-center gap-2 text-sm">
                View Elective Treatment Pricing <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div className="card p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-3">
                <Stethoscope className="h-5 w-5 text-blue-600" strokeWidth={1.75} />
              </div>
              <h3 className="font-display font-bold text-slate-900 mb-2">Medical Students & Trainees</h3>
              <p className="text-slate-600 text-sm mb-4">
                Extend your clinical elective with a Himalayan Yoga Trek add-on or a 3-day
                sound healing retreat. Many students combine their hospital placement with
                a wellness week at the end of their programme.
              </p>
              <button onClick={() => setCurrentPage("pricing")} className="btn-outline flex items-center gap-2 text-sm">
                View Medical Elective Pricing <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="relative py-16 bg-gradient-to-br from-emerald-600 via-teal-700 to-green-800 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Design your wellness journey</h2>
          <p className="text-emerald-100 mb-8 leading-relaxed">
            Tell us your intention — recovery, spiritual practice, adventure, or all three.
            We will build a custom itinerary combining the right programmes, timing, and logistics.
            No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage("contact")}
              className="inline-flex items-center justify-center bg-white text-emerald-700 px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-emerald-50 transition-colors"
            >
              Build a Custom Package <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button
              onClick={() => setCurrentPage("medical-tourism")}
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur text-white px-8 py-3 rounded-xl font-semibold ring-1 ring-white/30 hover:bg-white/20 transition-colors"
            >
              About Medical Tourism in Nepal
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpiritualWellnessPage;
