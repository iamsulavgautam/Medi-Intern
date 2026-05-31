import React from "react";
import Counter from "./Counter";
import {
  ArrowRight,
  Heart,
  Users,
  Award,
  Globe,
  CheckCircle,
  ArrowUpRight,
  Plane,
  Stethoscope,
  Pill,
  Leaf,
  Mountain,
  Wind,
  MapPin,
  AlertTriangle,
  Baby,
  Brain,
  Wheat,
  Compass,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import AccreditationStrip from "./AccreditationStrip";
import HeroSection from "./landing/HeroSection";
import InPicturesSection from "./landing/InPicturesSection";
import LayoutContainer from "./layout/LayoutContainer";

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

// ✅ Reusable Components
import type { ReactNode } from "react";
const StatCard = ({
  icon: Icon,
  number,
  label,
}: {
  icon: LucideIcon;
  number: ReactNode;
  label: string;
  color?: string;
}) => (
  <motion.div whileHover={{ scale: 1.02 }} className="card p-6 text-center">
    <h3 className="text-3xl font-display font-bold text-secondary-900 mb-1">
      {number}
    </h3>
    <p className="text-secondary-600 text-sm">{label}</p>
    <div className="mt-3 flex justify-center">
      <Icon className="h-5 w-5 text-primary-400" strokeWidth={1.5} />
    </div>
  </motion.div>
);

const ProgramCard = ({
  title,
  img,
  desc,
  bullets,
  duration,
  capacity,
  location,
  onClick,
}: {
  title: string;
  img: string;
  desc: string;
  bullets: string[];
  duration: string;
  capacity: string;
  location: string;
  onClick?: () => void;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="card card-hover overflow-hidden cursor-pointer"
    onClick={onClick}
  >
    <div className="relative h-52 overflow-hidden">
      <img
        src={img}
        alt={`${title} - Medical Internship Program in Nepal`}
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        loading="lazy"
      />
      <div className="absolute top-4 left-4">
        <span className="badge badge-primary">{title}</span>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-display font-semibold text-secondary-900 mb-3">
        {title}
      </h3>
      <p className="text-secondary-600 mb-4 line-clamp-2">{desc}</p>
      <ul className="text-sm text-secondary-500 space-y-1 mb-4">
        {bullets.slice(0, 3).map((b, i) => (
          <li key={i} className="flex items-start">
            <svg className="h-4 w-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="2.5,8.5 6,12 13.5,4.5"/></svg>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between text-sm text-secondary-500 mb-4">
        <span>{duration}</span>
        <span>{capacity}</span>
        <span>{location}</span>
      </div>
      <div className="mt-4 pt-4 border-t border-secondary-100">
        <button className="text-primary-600 font-medium flex items-center hover:text-primary-700 transition-colors">
          Learn more <ArrowUpRight className="ml-1 h-4 w-4" />
        </button>
      </div>
    </div>
  </motion.div>
);

const WhyUsItem = ({
  icon: Icon,
  title,
  text,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
  color?: string;
}) => (
  <div className="flex items-start gap-4 p-6 card transition-all duration-200 hover:shadow-card">
    <Icon className="h-5 w-5 text-[#0A3D91] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
    <div>
      <h3 className="text-base font-semibold text-secondary-900 mb-1">
        {title}
      </h3>
      <p className="text-secondary-600 text-sm leading-relaxed">{text}</p>
    </div>
  </div>
);

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  const programs = [
    {
      id: "medical-elective",
      title: "Medical Elective",
      duration: "4-20 weeks",
      capacity: "8-12 interns",
      location: "Teaching Hospitals",
      image: "medicine.jpeg ",
      description:
        "Comprehensive medical elective program covering multiple specialties including internal medicine, surgery, pediatrics, and emergency medicine.",
      highlights: [
        "Multi-specialty rotations",
        "Direct patient care",
        "Clinical decision making",
        "Medical research opportunities",
        "Case presentations",
        "English-Speaking Host",
      ],
    },
    {
      id: "midwifery-elective",
      title: "Nursing Internships",
      duration: "4-12 weeks",
      capacity: "4-8 interns",
      location: "Maternity Hospitals",
      image: "nurse1.png",
      description:
        "Specialized nursing program focusing on maternal and newborn care, labor and delivery, and women's reproductive health.",
      highlights: [
        "Labor and delivery assistance",
        "Prenatal and postnatal care",
        "Newborn care procedures",
        "Family planning counseling",
        "Emergency obstetric care",
        "English-Speaking Host",
      ],
    },
    {
      id: "surgery",
      title: "Surgery",
      duration: "4-16 weeks",
      capacity: "6-10 interns",
      location: "Operating Theaters & Surgical Wards",
      image: "surgery.png",
      description:
        "Comprehensive surgical training program offering exposure to various surgical specialties and operative procedures.",
      highlights: [
        "Operating room experience",
        "Pre and post-operative care",
        "Surgical techniques observation",
        "Emergency procedures",
        "Surgical instrument handling",
        "English-Speaking Host",
      ],
    },
  ];

  // Collage layout does not require carousel controls

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Medical Exchange Nepal - Premium Medical Internships",
            "description": "Join world-class medical internship programs in Nepal. Medical Exchange Nepal offers premium clinical rotations, medical electives, surgery internships, and paramedical training.",
            "url": "https://medicalexchangenepal.com/",
            "mainEntity": {
              "@type": "Organization",
              "name": "Medical Exchange Nepal",
              "description": "Premium medical internship programs and clinical rotations in Nepal",
              "url": "https://medicalexchangenepal.com",
              "logo": "https://medicalexchangenepal.com/logo.jpg",
              "sameAs": [
                "https://www.facebook.com/iamsulavgautam",
                "https://www.instagram.com/iamsulavgautam",
                "https://www.linkedin.com/in/iamsulavgautam",
                "https://twitter.com/iamsulavgautam"
              ]
            }
          })
        }}
      />

      <HeroSection
        onApply={() => setCurrentPage("application")}
        onExplorePrograms={() => setCurrentPage("programs")}
        onNavigate={setCurrentPage}
      />

      {/* CHOOSE YOUR JOURNEY ─────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-y border-slate-100" aria-label="Choose your journey">
        <LayoutContainer>
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-5 h-px bg-blue-500" />
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-600">Who Is This For?</span>
              <div className="w-5 h-px bg-blue-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Choose Your Journey
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Three distinct programmes. Each built for a different person. Each rooted in what Nepal does better than anywhere else.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* ── Card 1 · Future Doctor ── */}
            <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col bg-white cursor-pointer"
              onClick={() => setCurrentPage("programs")}
            >
              <div className="relative h-52 overflow-hidden">
                <img src="/gallery/3.jpeg" alt="Future Doctor" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent" />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Future Doctor</div>
                <div className="absolute bottom-4 left-4 right-4"><p className="text-white font-black text-xl leading-tight">Clinical Electives<br />in Nepal</p></div>
              </div>
              <div className="flex flex-col flex-1 p-6">
                <p className="text-slate-500 text-sm leading-relaxed mb-5">Hospital rotations, physician mentorship, and 10,000+ hours of real clinical exposure across Nepal's leading teaching hospitals.</p>
                <ul className="space-y-2 flex-1 mb-6">
                  {["15 specialties available","Named consultant supervisor","Certificate for GMC/ECFMG","4–20 week durations"].map(pt => (
                    <li key={pt} className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" strokeWidth={2.5} />{pt}</li>
                  ))}
                </ul>
                <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                  <div><p className="text-xs text-slate-400 font-medium">Starting from</p><p className="text-lg font-black text-blue-600">$1,200</p></div>
                  <button type="button" onClick={(e) => { e.stopPropagation(); setCurrentPage("programs"); }}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-[1.03]">
                    Explore <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* ── Card 2 · International Patient ── */}
            <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col bg-white cursor-pointer"
              onClick={() => setCurrentPage("elective-treatment")}>
              <div className="relative h-52 overflow-hidden">
                <img src="/gallery/1.jpeg" alt="International Patient" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/80 via-violet-900/20 to-transparent" />
                <div className="absolute top-4 left-4 bg-violet-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">International Patient</div>
                <div className="absolute bottom-4 left-4 right-4"><p className="text-white font-black text-xl leading-tight">Medical Travel<br />&amp; Treatment</p></div>
              </div>
              <div className="flex flex-col flex-1 p-6">
                <p className="text-slate-500 text-sm leading-relaxed mb-5">World-class orthopaedics, dental, ophthalmology, IVF and cardiac care at 70–90% below Western prices — with full coordination and aftercare.</p>
                <ul className="space-y-2 flex-1 mb-6">
                  {["Orthopaedics, Dental, Eye Care, IVF","70–90% cost savings","End-to-end coordination","Himalayan recovery packages"].map(pt => (
                    <li key={pt} className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle className="h-4 w-4 text-violet-500 flex-shrink-0" strokeWidth={2.5} />{pt}</li>
                  ))}
                </ul>
                <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                  <div><p className="text-xs text-slate-400 font-medium">Procedures from</p><p className="text-lg font-black text-violet-600">$800</p></div>
                  <button type="button" onClick={(e) => { e.stopPropagation(); setCurrentPage("elective-treatment"); }}
                    className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-[1.03]">
                    Explore <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* ── Card 3 · Wellness Traveller ── */}
            <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col bg-white cursor-pointer"
              onClick={() => setCurrentPage("spiritual-wellness")}>
              <div className="relative h-52 overflow-hidden">
                <img src="/spritual/23.jpeg" alt="Wellness Traveller" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-900/20 to-transparent" />
                <div className="absolute top-4 left-4 bg-emerald-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Wellness Traveller</div>
                <div className="absolute bottom-4 left-4 right-4"><p className="text-white font-black text-xl leading-tight">Himalayan<br />Wellness &amp; Healing</p></div>
              </div>
              <div className="flex flex-col flex-1 p-6">
                <p className="text-slate-500 text-sm leading-relaxed mb-5">Ayurveda, Tibetan sound healing, yoga retreats, and mountain meditation — authentic healing traditions, not packaged tourism.</p>
                <ul className="space-y-2 flex-1 mb-6">
                  {["Ayurveda & Tibetan medicine","Yoga & meditation retreats","Sacred pilgrimages","Executive health reset packages"].map(pt => (
                    <li key={pt} className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" strokeWidth={2.5} />{pt}</li>
                  ))}
                </ul>
                <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                  <div><p className="text-xs text-slate-400 font-medium">Retreats from</p><p className="text-lg font-black text-emerald-600">$350</p></div>
                  <button type="button" onClick={(e) => { e.stopPropagation(); setCurrentPage("spiritual-wellness"); }}
                    className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-[1.03]">
                    Explore <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>

          </div>
        </LayoutContainer>
      </section>

      {/* WHY NEPAL? COMPARISON ───────────────────────────────────────────── */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden">
        <LayoutContainer className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 items-start">

            {/* Left: table */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-5 h-px bg-blue-400" />
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-400">Competitive Positioning</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-3">Why Nepal Wins</h2>
              <p className="text-slate-400 max-w-lg mb-10">Every destination makes claims. Here's how Nepal compares on what actually matters.</p>

              <div className="overflow-x-auto rounded-2xl border border-slate-700">
                <table className="w-full text-sm">
                  <thead className="bg-slate-800">
                    <tr>
                      <th className="text-left py-4 px-5 text-slate-300 font-bold text-sm">Feature</th>
                      <th className="py-4 px-5 text-center"><span className="text-blue-400 font-black text-sm">Nepal</span></th>
                      <th className="py-4 px-5 text-center text-slate-400 font-bold text-sm">Thailand</th>
                      <th className="py-4 px-5 text-center text-slate-400 font-bold text-sm">India</th>
                      <th className="py-4 px-5 text-center text-slate-400 font-bold text-sm">Africa</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: "Cost vs. Western prices",        nepal: "70–90% less",   thailand: "60–75% less",    india: "70–85% less",   africa: "50–70% less",  nepalGood: true  },
                      { feature: "High-altitude medicine",          nepal: "Unique",         thailand: "Not available",  india: "Not available", africa: "Limited",      nepalGood: true  },
                      { feature: "Himalayan wellness setting",      nepal: "Yes",            thailand: "No",             india: "No",            africa: "No",           nepalGood: true  },
                      { feature: "Authentic Buddhist culture",      nepal: "Living daily",   thailand: "Tourist-facing", india: "No",            africa: "No",           nepalGood: true  },
                      { feature: "Named supervisor + NMC reg.",     nepal: "Standard",       thailand: "Variable",       india: "Variable",      africa: "Variable",     nepalGood: true  },
                      { feature: "Clinical + wellness in one trip", nepal: "Yes",            thailand: "Possible",       india: "Possible",      africa: "Rare",         nepalGood: true  },
                      { feature: "Crowds & tourism saturation",     nepal: "Low",            thailand: "Very high",      india: "Medium",        africa: "Low",          nepalGood: true  },
                    ].map(({ feature, nepal, thailand, india, africa }) => (
                      <tr key={feature} className="border-t border-slate-800 hover:bg-slate-800/40 transition-colors">
                        <td className="py-4 px-5 text-slate-200 font-semibold text-sm">{feature}</td>
                        <td className="py-4 px-5 text-center">
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-black">{nepal}</span>
                        </td>
                        <td className="py-4 px-5 text-center text-slate-500 text-xs font-medium">{thailand}</td>
                        <td className="py-4 px-5 text-center text-slate-500 text-xs font-medium">{india}</td>
                        <td className="py-4 px-5 text-center text-slate-500 text-xs font-medium">{africa}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8">
                <button onClick={() => setCurrentPage("for-universities")}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-2xl font-bold transition-all duration-200 hover:scale-[1.02] shadow-lg text-sm">
                  Partner With Us — For Universities <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Right: image */}
            <div className="hidden lg:flex flex-col gap-4 sticky top-20">
              <div className="rounded-3xl overflow-hidden shadow-2xl group h-[300px]">
                <img src="/gallery/8.jpeg" alt="Nepal Himalayas"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl group h-[220px]">
                <img src="/spritual/23.jpeg" alt="Spiritual Nepal"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>

          </div>
        </LayoutContainer>
      </section>

      {/* MEDICAL TOURISM CONTEXT */}
      <section
        className="py-14 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white"
        aria-label="Medical tourism in Nepal"
      >
        <LayoutContainer className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 ring-1 ring-white/20">
              <Plane className="h-10 w-10 text-teal-300" aria-hidden />
            </div>
          </div>
          <div className="flex-[2] text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Medical tourism &amp; Nepal’s clinical story
            </h2>
            <p className="text-blue-100 leading-relaxed mb-6 max-w-2xl mx-auto lg:mx-0">
              Patients worldwide compare accredited hospitals, costs, and
              reviews before they travel for care. Nepal’s cost position, eye
              care reputation, and Himalayan wellness context fit that global
              picture—and{" "}
              <span className="text-white font-semibold">
                Medical Exchange Nepal
              </span>{" "}
              helps international trainees experience Nepali hospitals as a
              first step toward wider trust.
            </p>
            <button
              type="button"
              onClick={() => setCurrentPage("medical-tourism")}
              className="inline-flex items-center px-6 py-3 rounded-xl font-semibold bg-white text-blue-900 hover:bg-blue-50 shadow-lg transition-all duration-200 hover:scale-[1.04] focus:scale-[1.04] active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-white/60"
              aria-label="Explore medical tourism in Nepal"
            >
              Explore what Nepal offers
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </LayoutContainer>
      </section>

      {/* STATS */}
      <section className="py-16 bg-white" aria-label="Medical Internship Statistics">
        <LayoutContainer className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <StatCard icon={Heart} number={<Counter to={500} duration={1500} suffix="+" />} label="Students Placed" />
          <StatCard icon={Users} number={<Counter to={10000} duration={1800} suffix="+" />} label="Clinical Hours Logged" />
          <StatCard icon={Award} number={<Counter to={2500} duration={1600} suffix="+" />} label="Surgeries Observed" />
          <StatCard icon={Globe} number={<Counter to={30} duration={1300} suffix="+" />} label="Countries Represented" />
        </LayoutContainer>
      </section>

      {/* TRUST STAT BAND */}
      <section className="bg-white border-b border-slate-100 py-4">
        <LayoutContainer>
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
            {[
              "Verified hospital placements",
              "Students from 30+ countries",
              "98% satisfaction rate",
              "Named supervisor per student",
              "NMC-registered doctors",
            ].map((label, i) => (
              <React.Fragment key={label}>
                {i > 0 && <span className="text-slate-300 select-none">·</span>}
                <span className="text-[0.8rem] text-slate-500 font-medium">{label}</span>
              </React.Fragment>
            ))}
          </div>
        </LayoutContainer>
      </section>

      {/* ALUMNI OUTCOMES ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-b border-slate-100">
        <LayoutContainer>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-5 h-px bg-blue-500" />
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-600">After Nepal</span>
              </div>
              <h2 className="text-4xl font-black text-slate-900 mb-4 leading-tight">
                What Happens to<br />Our Alumni
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                We track where students go after Nepal. These are real outcomes from our programme alumni — not marketing estimates.
              </p>
              <div className="space-y-4">
                {[
                  { label: "Entered residency or specialty training", pct: 42, color: "bg-blue-500" },
                  { label: "Published or co-authored research",       pct: 15, color: "bg-violet-500" },
                  { label: "Returned for a second rotation",          pct: 22, color: "bg-emerald-500" },
                  { label: "Recommend to a fellow student",           pct: 97, color: "bg-amber-500" },
                ].map(({ label, pct, color }) => (
                  <div key={label}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-medium text-slate-700">{label}</span>
                      <span className="text-sm font-black text-slate-900">{pct}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className={`h-full ${color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-slate-400 mb-6">Alumni now based in</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { flag: "🇩🇪", country: "Germany",        count: "38 alumni" },
                  { flag: "🇬🇧", country: "United Kingdom", count: "47 alumni" },
                  { flag: "🇦🇺", country: "Australia",      count: "29 alumni" },
                  { flag: "🇨🇿", country: "Czech Republic", count: "61 alumni" },
                  { flag: "🇸🇰", country: "Slovakia",       count: "34 alumni" },
                  { flag: "🇺🇸", country: "United States",  count: "22 alumni" },
                  { flag: "🇸🇪", country: "Sweden",         count: "18 alumni" },
                  { flag: "🇳🇱", country: "Netherlands",    count: "15 alumni" },
                ].map(({ flag, country, count }) => (
                  <div key={country} className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3 border border-slate-100">
                    <span className="text-2xl">{flag}</span>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{country}</p>
                      <p className="text-xs text-slate-400">{count}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </LayoutContainer>
      </section>

      {/* CASES YOU WON'T SEE AT HOME ──────────────────────────────────────── */}
      <section className="py-20 bg-gray-50 border-b border-slate-100">
        <LayoutContainer>
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-5 h-px bg-blue-500" />
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-600">Clinical Exposure</span>
              <div className="w-5 h-px bg-blue-500" />
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-4">Cases You Won't See at Home</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Nepal's disease burden, geography, and resource context create a clinical education impossible to replicate in a Western teaching hospital.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {([
              { Icon: Mountain,      iconBg: "bg-slate-100",   iconClr: "text-slate-600",   title: "High-Altitude Medicine",    desc: "Acute mountain sickness, HACE, HAPE — the physiology of altitude illness seen daily in Himalayan referral centres.", tag: "Unique to Nepal" },
              { Icon: Wind,          iconBg: "bg-sky-50",      iconClr: "text-sky-600",     title: "Multi-drug Resistant TB",   desc: "Nepal has a high MDR-TB burden. Students observe diagnosis, DOTS protocols, and contact tracing in real community settings.", tag: "Rare in the West" },
              { Icon: MapPin,        iconBg: "bg-green-50",    iconClr: "text-green-600",   title: "Community Health Camps",    desc: "Mobile health camps serve villages with no permanent clinic. Students perform history, examination, and basic treatment independently.", tag: "Global Health" },
              { Icon: AlertTriangle, iconBg: "bg-amber-50",    iconClr: "text-amber-600",   title: "Snakebite & Envenomation",  desc: "Nepal sees 20,000+ snakebite cases per year. Anti-venom administration and neurotoxin management is a live clinical skill here.", tag: "Rare in Europe" },
              { Icon: Baby,          iconBg: "bg-pink-50",     iconClr: "text-pink-600",    title: "Obstetric Emergencies",     desc: "Paropakar Maternity delivers 15,000+ babies per year. Students observe eclampsia, shoulder dystocia, and PPH in high volumes.", tag: "High Volume" },
              { Icon: Brain,         iconBg: "bg-violet-50",   iconClr: "text-violet-600",  title: "Resource-Limited Emergency", desc: "Emergency medicine with limited diagnostics forces clinical reasoning over investigation-dependent decision-making.", tag: "Builds Instinct" },
              { Icon: Wheat,         iconBg: "bg-orange-50",   iconClr: "text-orange-600",  title: "Acute Malnutrition",        desc: "Severe acute malnutrition in children — rare in European wards — is common in Nepal's paediatric and community practice.", tag: "Paediatrics" },
              { Icon: Compass,       iconBg: "bg-teal-50",     iconClr: "text-teal-600",    title: "Mountain Rescue Trauma",    desc: "Trauma from trekking accidents, falls at altitude, and remote evacuation logistics — rarely taught in standard curricula.", tag: "Wilderness Med" },
            ] as { Icon: LucideIcon; iconBg: string; iconClr: string; title: string; desc: string; tag: string }[]).map(({ Icon, iconBg, iconClr, title, desc, tag }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className={`w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center mb-4`}>
                  <Icon className={`h-5 w-5 ${iconClr}`} strokeWidth={1.75} />
                </div>
                <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full mb-3">{tag}</span>
                <h3 className="font-black text-slate-900 text-base mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </LayoutContainer>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <LayoutContainer>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">How it works</h2>
            <p className="text-slate-500 max-w-lg">
              From first visit to first day on the ward — five straightforward steps.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-slate-200 rounded-xl overflow-hidden border border-slate-200">
            {[
              { step: "01", title: "Explore",       desc: "Browse specialties and build your elective with our price calculator." },
              { step: "02", title: "Apply",          desc: "Submit your application. We review and respond within 48 hours."       },
              { step: "03", title: "Confirmed",      desc: "You receive a hospital offer letter and your named supervisor's name." },
              { step: "04", title: "Prepare",        desc: "Your MyElective portal goes live — visa, packing, health prep."       },
              { step: "05", title: "Arrive",         desc: "Airport pickup, orientation day, and your first day at the hospital." },
            ].map((s) => (
              <div key={s.step} className="bg-white p-6">
                <div className="text-xs font-semibold text-slate-400 tracking-widest mb-3">{s.step}</div>
                <h3 className="font-semibold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </LayoutContainer>
      </section>

      {/* PROGRAMS */}
      <section className="py-20 bg-gray-50" aria-label="Medical Internship Programs in Nepal">
        <LayoutContainer>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Medical Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our range of internship programs designed to give
              hands-on experience in Nepal's healthcare system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program) => (
              <ProgramCard
                key={program.id}
                title={program.title}
                img={program.image}
                desc={program.description}
                bullets={program.highlights}
                duration={program.duration}
                capacity={program.capacity}
                location={program.location}
                onClick={() =>
                  setCurrentPage(`program-${program.id.toLowerCase()}`)
                }
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setCurrentPage("programs")}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.04] focus:scale-[1.04] active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              aria-label="View All Medical Internship Programs in Nepal"
            >
              <span>See All Programs</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </LayoutContainer>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-white" aria-label="How Medical Internship Application Process Works">
        <LayoutContainer>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A clear, guided process from application to certification.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <motion.div whileHover={{ y: -4 }} className="card p-6 text-center">
              <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-700 font-bold">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Apply Online</h3>
              <p className="text-gray-600 text-sm">
                Submit your preferences and dates. Our team reviews within 48
                hours.
              </p>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="card p-6 text-center">
              <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-700 font-bold">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Placement</h3>
              <p className="text-gray-600 text-sm">
                We secure your hospital rotation and share your placement
                package.
              </p>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="card p-6 text-center">
              <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-700 font-bold">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Arrival & Support
              </h3>
              <p className="text-gray-600 text-sm">
                Airport pickup, orientation, safe housing, and ongoing local
                support.
              </p>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="card p-6 text-center">
              <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-700 font-bold">
                4
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Certificate</h3>
              <p className="text-gray-600 text-sm">
                Complete rotations and receive an official certificate of
                completion.
              </p>
            </motion.div>
          </div>
          <div className="text-center mt-10">
            <button
              onClick={() => setCurrentPage("application")}
              className="btn-primary px-8 py-3 text-sm transition-all duration-200 hover:scale-[1.04] focus:scale-[1.04] active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
              aria-label="Start Medical Internship Application in Nepal"
            >
              Start Application
            </button>
          </div>
        </LayoutContainer>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-white" aria-label="Why Choose Medical Exchange Nepal">
        <LayoutContainer className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Us?
            </h2>
            <div className="space-y-6">
              <WhyUsItem
                icon={Heart}
                title="Supportive Environment"
                text="Learn from top professionals in modern facilities."
                color="bg-teal-100"
              />
              <WhyUsItem
                icon={Users}
                title="Cultural Immersion"
                text="Experience Nepal's culture while advancing your career."
                color="bg-emerald-100"
              />
              <WhyUsItem
                icon={Award}
                title="Certification"
                text="Earn internationally recognized certificates."
                color="bg-blue-100"
              />
            </div>
          </div>
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            src="https://images.pexels.com/photos/8376297/pexels-photo-8376297.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Medical team in Nepal"
            className="rounded-lg shadow-lg"
          />
        </LayoutContainer>
      </section>

      {/* TESTIMONIALS TEASER */}
      <section className="py-20 bg-gray-50" aria-label="Medical Internship Testimonials from Students">
        <LayoutContainer>
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-gray-900">
              What Our Interns Say
            </h2>
            <button
              onClick={() => setCurrentPage("testimonials")}
              className="btn-ghost text-teal-700"
              aria-label="Read All Medical Internship Testimonials from Nepal"
            >
              Read All →
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.blockquote whileHover={{ y: -3 }} className="card p-6">
              <p className="text-gray-800">
                "We had an incredible time during our medical exchange in Nepal.
                The hospital was among the best we've ever trained in-supportive
                staff, great learning opportunities, and diverse cases. Our
                hosts were kind, welcoming, and made us feel like part of the
                family."
              </p>
              <footer className="mt-4 text-sm text-gray-500">
                — Lucie and Tereza, Czech Republic
              </footer>
            </motion.blockquote>
            <motion.blockquote whileHover={{ y: -3 }} className="card p-6">
              <p className="text-gray-800">
                "Our exchange in Nepal was an unforgettable blend of learning
                and adventure. Beyond the valuable hospital experience, we
                trekked through breathtaking hills and visited sacred sites like
                Pashupatinath Temple, which gave us a deeper appreciation for
                Nepal's spiritual richness."
              </p>
              <footer className="mt-4 text-sm text-gray-500">
                — Eva, Helen, and Helen, Czech Republic, Switzerland, and
                Germany
              </footer>
            </motion.blockquote>
            <motion.blockquote whileHover={{ y: -3 }} className="card p-6">
              <p className="text-gray-800">
                "Our time in Nepal was truly special. From watching the sunrise
                in Nagarkot to experiencing the serenity of Pashupatinath, every
                moment was meaningful. We even joined in on paddy farming-a
                unique, joyful experience we'll never forget."
              </p>
              <footer className="mt-4 text-sm text-gray-500">
                — Terezia and Timea, Slovakia
              </footer>
            </motion.blockquote>
          </div>
        </LayoutContainer>
      </section>

      {/* IMPACT BEYOND THE HOSPITAL ──────────────────────────────────────── */}
      <section className="py-20 bg-white border-y border-slate-100">
        <LayoutContainer>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left: image collage */}
            <div className="grid grid-cols-2 gap-3 h-[420px]">
              <div className="row-span-2 rounded-2xl overflow-hidden shadow-xl group">
                <img src="/gallery/2.jpeg" alt="Community health camp Nepal" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md group">
                <img src="/gallery/6.jpeg" alt="Rural healthcare Nepal" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md group">
                <img src="/gallery/4.jpeg" alt="Medical outreach Nepal" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
            </div>

            {/* Right: impact content */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-5 h-px bg-emerald-500" />
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-emerald-600">Community Impact</span>
              </div>
              <h2 className="text-4xl font-black text-slate-900 mb-5 leading-tight">
                Impact Beyond<br />the Hospital
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                Competitors can offer electives. Competitors can offer treatment. Very few can say: <span className="font-bold text-slate-700">your participation directly improves healthcare access in Nepal.</span>
              </p>

              {/* Impact stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { value: "12",    label: "Community Clinics Supported", color: "bg-blue-50 text-blue-700" },
                  { value: "4,500+", label: "Patients Reached",           color: "bg-emerald-50 text-emerald-700" },
                  { value: "25",    label: "Health Camps Run",            color: "bg-violet-50 text-violet-700" },
                  { value: "8",     label: "Rural Districts Served",      color: "bg-amber-50 text-amber-700" },
                ].map(({ value, label, color }) => (
                  <div key={label} className={`rounded-2xl p-5 ${color}`}>
                    <p className="text-3xl font-black leading-none mb-1">{value}</p>
                    <p className="text-xs font-semibold leading-tight">{label}</p>
                  </div>
                ))}
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Students join optional rural health camp rotations",
                  "Real patients in villages with no permanent clinic",
                  "Outreach data published and submitted to MoH Nepal",
                  "Your programme fee directly funds camp operations",
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    {pt}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setCurrentPage("programs")}
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-[1.02] shadow-md"
              >
                Explore Community Medicine Rotations <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </LayoutContainer>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 text-white text-center" aria-label="Apply for Medical Internship in Nepal">
        <LayoutContainer>
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg mb-8 text-emerald-100">
            Join hundreds of medical students who transformed their careers with
            us.
          </p>
          <button
            onClick={() => setCurrentPage("application")}
            className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg shadow hover:bg-gray-100 flex items-center justify-center mx-auto transition-all duration-200 hover:scale-[1.04] focus:scale-[1.04] active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-white/60"
            aria-label="Apply Now for Medical Internship Program in Nepal"
          >
            Apply Now <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </LayoutContainer>
      </section>

      {/* STICKY CTA BAR */}
      <div className="fixed bottom-4 inset-x-0 px-4 z-40">
        <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur rounded-xl shadow-lg ring-1 ring-gray-200 flex items-center justify-between px-4 py-3">
          <div className="text-sm">
            <span className="font-semibold text-gray-900">
              Ready to secure your placement?
            </span>
            <span className="text-gray-600 ml-2 hidden sm:inline">
              Limited slots per rotation.
            </span>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setCurrentPage("contact")}
              className="btn-ghost dal-btn"
            >
              Talk to an Advisor
            </button>
            <button
              type="button"
              onClick={() => setCurrentPage("application")}
              className="btn-primary dal-btn px-4 py-2 text-sm"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* PARTNERS & ACCREDITATION */}
      <AccreditationStrip />

      {/* In Pictures — masonry flooding into navy / footer */}
      <InPicturesSection onViewGallery={() => setCurrentPage("gallery")} />
    </div>
  );
};

export default HomePage;
