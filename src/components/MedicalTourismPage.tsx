import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Mountain,
  Stethoscope,
  Sparkles,
  ArrowRight,
  Eye,
  HeartPulse,
  Smile,
  Leaf,
  Languages,
  Building2,
  CheckCircle,
  MapPin,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface MedicalTourismPageProps {
  setCurrentPage: (page: string) => void;
}

type ShowcaseAccent = "blue" | "teal" | "indigo" | "emerald" | "violet" | "amber";

const accentStyles: Record<
  ShowcaseAccent,
  { badge: string; icon: string; ring: string; stat: string }
> = {
  blue: {
    badge: "bg-blue-100 text-blue-800 border-blue-200/60",
    icon: "bg-blue-50 text-blue-600",
    ring: "hover:ring-blue-200",
    stat: "text-blue-700 bg-blue-50",
  },
  teal: {
    badge: "bg-teal-100 text-teal-800 border-teal-200/60",
    icon: "bg-teal-50 text-teal-600",
    ring: "hover:ring-teal-200",
    stat: "text-teal-700 bg-teal-50",
  },
  indigo: {
    badge: "bg-indigo-100 text-indigo-800 border-indigo-200/60",
    icon: "bg-indigo-50 text-indigo-600",
    ring: "hover:ring-indigo-200",
    stat: "text-indigo-700 bg-indigo-50",
  },
  emerald: {
    badge: "bg-emerald-100 text-emerald-800 border-emerald-200/60",
    icon: "bg-emerald-50 text-emerald-600",
    ring: "hover:ring-emerald-200",
    stat: "text-emerald-700 bg-emerald-50",
  },
  violet: {
    badge: "bg-violet-100 text-violet-800 border-violet-200/60",
    icon: "bg-violet-50 text-violet-600",
    ring: "hover:ring-violet-200",
    stat: "text-violet-700 bg-violet-50",
  },
  amber: {
    badge: "bg-amber-100 text-amber-800 border-amber-200/60",
    icon: "bg-amber-50 text-amber-600",
    ring: "hover:ring-amber-200",
    stat: "text-amber-700 bg-amber-50",
  },
};

const nepalShowcase: {
  category: string;
  title: string;
  description: string;
  highlights: string[];
  stat: string;
  icon: LucideIcon;
  accent: ShowcaseAccent;
}[] = [
  {
    category: "Value",
    title: "Affordable accredited care",
    description:
      "Nepal offers major cost savings on procedures compared with Western markets—without sacrificing access to modern equipment and trained specialists.",
    highlights: [
      "Lower treatment and stay costs",
      "Growing accredited hospital network",
      "Ideal for elective and planned care",
    ],
    stat: "Significant savings vs. Western markets",
    icon: Building2,
    accent: "teal",
  },
  {
    category: "Specialty",
    title: "Eye care & diagnostics",
    description:
      "Nepal is internationally referenced for ophthalmology and vision care, with teaching hospitals offering advanced diagnostics and surgical pathways.",
    highlights: [
      "Globally noted eye care reputation",
      "Modern imaging and lab services",
      "Experienced surgical teams",
    ],
    stat: "Leading regional ophthalmology hub",
    icon: Eye,
    accent: "blue",
  },
  {
    category: "Treatment",
    title: "Dental, cosmetic & restorative",
    description:
      "Patients travel for dental work, cosmetic procedures, and restorative treatments—combining clinical quality with shorter wait times.",
    highlights: [
      "Dental and cosmetic procedures",
      "Transparent comparison-friendly pricing",
      "Recovery-friendly urban centers",
    ],
    stat: "Popular cross-border treatment category",
    icon: Smile,
    accent: "violet",
  },
  {
    category: "Complex care",
    title: "Cardiac, oncology & surgery",
    description:
      "Teaching hospitals in Kathmandu and major cities support cardiac, oncology, and surgical care—with referral pathways for complex cases.",
    highlights: [
      "Cardiac and oncology pathways",
      "Multi-specialty teaching hospitals",
      "Coordinated inpatient support",
    ],
    stat: "Referral-capable tertiary centers",
    icon: HeartPulse,
    accent: "indigo",
  },
  {
    category: "Wellness",
    title: "Himalayan recovery context",
    description:
      "Nepal pairs clinical services with a wellness story—mountain air, Ayurvedic heritage, and recovery settings that support healing beyond the hospital.",
    highlights: [
      "Post-procedure recovery options",
      "Ayurveda and wellness heritage",
      "Unique Himalayan travel context",
    ],
    stat: "Care + wellness in one destination",
    icon: Leaf,
    accent: "emerald",
  },
  {
    category: "Access",
    title: "English-speaking clinical teams",
    description:
      "International patients benefit from English-medium communication in major hospitals—making consultations, consent, and follow-up clearer.",
    highlights: [
      "English used in teaching hospitals",
      "International patient familiarity",
      "Diaspora and regional connectivity",
    ],
    stat: "Easy communication for global visitors",
    icon: Languages,
    accent: "amber",
  },
];

const destinationStats = [
  { label: "Partner hospitals", value: "10+" },
  { label: "Clinical specialties", value: "6+" },
  { label: "English-medium care", value: "Yes" },
  { label: "Himalayan wellness", value: "Unique" },
];

const platformHighlights = [
  {
    icon: Stethoscope,
    title: "Structured clinical access",
    text: "We connect international medical students and professionals with accredited partner hospitals for 4–12 week electives and rotations.",
  },
  {
    icon: Globe,
    title: "Cross-border trust",
    text: "A mapped, verified hospital network and real placements show global audiences that Nepal’s clinical settings are worth choosing.",
  },
  {
    icon: Sparkles,
    title: "Ambassadors for Nepal",
    text: "Every student becomes international proof of Nepal’s capabilities—building the trust infrastructure medical tourism needs to scale.",
  },
  {
    icon: Mountain,
    title: "Clinical + Himalayan context",
    text: "Nepal can pair advanced procedures and wellness heritage; structured education mobility is a practical first step on that path.",
  },
];

const MedicalTourismPage: React.FC<MedicalTourismPageProps> = ({
  setCurrentPage,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Medical Tourism in Nepal | Medical Exchange Nepal",
            description:
              "Explore medical tourism in Nepal—affordable care, specialty hospitals, wellness recovery, and how Medical Exchange Nepal connects international trainees with Nepali hospitals.",
            url: "https://medicalexchangenepal.com/medical-tourism",
          }),
        }}
      />

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-emerald-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <section
        className="relative pt-24 pb-16 overflow-hidden"
        aria-label="Medical tourism in Nepal"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700" />
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-100 text-sm font-semibold tracking-wide uppercase mb-3">
            Himalayan healthcare destination
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Medical Tourism in Nepal
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            People travel across borders for care—cost, wait times, technology,
            and reputation all play a role. Nepal’s strengths include major cost
            savings, English-speaking teams, globally referenced eye care, and a
            Himalayan wellness story that complements clinical services.
          </p>
        </div>
      </section>

      <section className="relative py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Why this matters now
          </h2>
          <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
            <p>
              Medical tourism means combining treatment with travel—whether for
              surgery, dental work, diagnostics, or recovery-focused wellness.
              Today’s patients research online, compare providers, and expect
              transparent pricing and coordinated logistics. Regional demand,
              diaspora connections, and Nepal’s cost position mean structured,
              trustworthy pathways for international patients and learners are
              increasingly important.
            </p>
            <p>
              National strategy, accreditation, facilitators, and digital portals
              abroad show how destinations scale responsibly. Nepal is still
              early in that journey—and{" "}
              <strong className="text-slate-800">
                Medical Exchange Nepal focuses on a concrete first layer
              </strong>
              : placing international medical students and professionals in
              Nepali hospitals so the world can experience Nepal’s clinical
              quality firsthand.
            </p>
          </div>
        </div>
      </section>

      <section
        className="relative py-16 bg-white/80"
        aria-label="Explore medical tourism offerings in Nepal"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 text-sm font-medium text-slate-600 mb-4">
              <MapPin className="h-4 w-4 text-primary-600" />
              Destination directory
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Nepal offers medical travelers
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Compare hospitals, specialties, treatment costs, and recovery
              options—the same information patients research before traveling
              for care, brought together for Nepal.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {destinationStats.map(({ label, value }) => (
              <div
                key={label}
                className="rounded-xl bg-slate-50 border border-slate-100 px-4 py-5 text-center"
              >
                <p className="text-2xl font-bold text-slate-900">{value}</p>
                <p className="text-sm text-slate-600 mt-1">{label}</p>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {nepalShowcase.map(
              (
                { category, title, description, highlights, stat, icon: Icon, accent },
                index
              ) => {
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
                        <span
                          className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${styles.badge}`}
                        >
                          {category}
                        </span>
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.08 + 0.15 }}
                          className={`p-2.5 rounded-xl shrink-0 ${styles.icon}`}
                        >
                          <Icon className="h-5 w-5" />
                        </motion.div>
                      </div>
                      <h3 className="text-lg font-display font-semibold text-slate-900 mb-2">
                        {title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {description}
                      </p>
                    </div>
                    <div className="px-6 py-4 flex-1 flex flex-col">
                      <ul className="space-y-2 mb-4 flex-1">
                        {highlights.map((item) => (
                          <li
                            key={item}
                            className="flex items-start text-sm text-slate-600"
                          >
                            <CheckCircle className="h-4 w-4 text-primary-500 mr-2 mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <span
                        className={`inline-flex items-center rounded-lg px-3 py-2 text-xs font-semibold ${styles.stat}`}
                      >
                        {stat}
                      </span>
                    </div>
                  </motion.div>
                );
              }
            )}
          </motion.div>

          <p className="mt-10 text-center text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Medical Exchange Nepal is building this gateway—helping international
            patients and learners explore Nepali hospitals, understand costs,
            and plan care with confidence.
          </p>
        </motion.div>
      </section>

      <section className="relative py-16 bg-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How Medical Exchange Nepal is involved
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Building Nepal’s gateway for healthcare mobility—one partnership
              and one placement at a time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {platformHighlights.map(({ icon: Icon, title, text }) => (
              <motion.div
                key={title}
                whileHover={{ y: -3 }}
                className="card p-6 flex gap-4 items-start"
              >
                <div className="p-3 rounded-xl bg-primary-50 text-primary-600 shrink-0">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-slate-900 mb-2">
                    {title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <blockquote className="mt-10 border-l-4 border-blue-500 bg-slate-50 rounded-r-xl p-6 text-slate-700 italic max-w-3xl mx-auto">
            “Every international student who trains in Nepal is a future
            ambassador, patient, or investor in Nepal’s healthcare.”
          </blockquote>
        </div>
      </section>

      <section className="relative py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Train in Nepal with us</h2>
          <p className="text-blue-100 mb-8 leading-relaxed">
            If you are a medical student or professional seeking a supervised
            elective in Nepal, we handle placement coordination with partner
            institutions and local support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => setCurrentPage("application")}
              className="inline-flex items-center justify-center bg-white text-primary-700 px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-50 transition-colors"
            >
              Apply now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => setCurrentPage("contact")}
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur text-white px-8 py-3 rounded-xl font-semibold ring-1 ring-white/30 hover:bg-white/20 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalTourismPage;
