import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Mountain,
  ExternalLink,
  Stethoscope,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface MedicalTourismPageProps {
  setCurrentPage: (page: string) => void;
}

const globalResources = [
  {
    name: "Flytocure Healthcare",
    description:
      "Compares over 600 accredited hospitals and clinics across 60+ countries for treatments including dental, cosmetic, cardiac, and oncology care.",
    href: "https://flytocure.com",
    displayHost: "flytocure.com",
  },
  {
    name: "Treatment Abroad",
    description:
      "Comprehensive information on medical treatments overseas—hospital comparisons, patient stories, and cost estimates.",
    href: "https://treatmentabroad.com",
    displayHost: "treatmentabroad.com",
  },
  {
    name: "MedicalTourism.com",
    description:
      "A global portal with independent information on healthcare, dental, and wellness tourism worldwide.",
    href: "https://medicaltourism.com",
    displayHost: "medicaltourism.com",
  },
  {
    name: "AirClinic",
    description:
      "A global directory to compare medical and dental providers across 50+ destinations.",
    href: "https://airclinic.io",
    displayHost: "airclinic.io",
  },
  {
    name: "Compare Medical Tourism",
    description:
      "Compare providers by price, accreditation, and patient reviews across a wide range of international treatments.",
    href: "https://comparemedicaltourism.com",
    displayHost: "comparemedicaltourism.com",
  },
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
              "Context on medical tourism in Nepal and how Medical Exchange Nepal connects international trainees with Nepali hospitals. Independent global medical tourism resources.",
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

      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-2 flex-wrap">
              <Globe className="h-8 w-8 text-primary-600" />
              Global medical tourism information &amp; services
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Here are some major websites that provide global medical tourism
              information and services. They are independent of Medical Exchange
              Nepal—we list them to help you research hospitals, reviews, and
              costs the same way patients plan care worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {globalResources.map((site) => (
              <motion.a
                key={site.href}
                href={site.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                className="card p-6 flex flex-col h-full ring-1 ring-slate-100 hover:ring-primary-200 transition-all shadow-sm hover:shadow-md"
              >
                <h3 className="text-lg font-display font-semibold text-slate-900 mb-2 pr-8">
                  {site.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-4">
                  {site.description}
                </p>
                <span className="inline-flex items-center text-primary-600 font-medium text-sm">
                  {site.displayHost}
                  <ExternalLink className="ml-1 h-4 w-4" />
                </span>
              </motion.a>
            ))}
          </div>
          <p className="mt-10 text-center text-slate-600 max-w-3xl mx-auto leading-relaxed">
            These platforms help patients explore hospitals, read verified
            reviews, compare treatment costs, and contact providers directly
            for medical travel arrangements.
          </p>
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
