import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, CheckCircle, ShieldCheck, Globe, Mountain, Stethoscope,
  Leaf, GraduationCap, Users, Clock, Building2, Award,
  DollarSign, MapPin, ExternalLink, Star,
} from "lucide-react";

interface MedicalTourismPageProps {
  setCurrentPage: (page: string) => void;
}

// ── Images ────────────────────────────────────────────────────────────────────
const EL = [
  "/electivemedicalplacment/201.jpeg",
  "/electivemedicalplacment/203.jpeg",
  "/electivemedicalplacment/WhatsApp Image 2026-05-31 at 10.24.10 PM.jpeg",
  "/electivemedicalplacment/WhatsApp Image 2026-05-31 at 10.24.13 PM.jpeg",
  "/electivemedicalplacment/WhatsApp Image 2026-05-31 at 10.24.14 PM.jpeg",
  "/electivemedicalplacment/WhatsApp Image 2026-05-31 at 10.24.16 PM.jpeg",
  "/electivemedicalplacment/WhatsApp Image 2026-05-31 at 10.24.17 PM.jpeg",
];
const TX = [
  "/electivetreatment/101.jpeg",
  "/electivetreatment/103.jpeg",
  "/electivetreatment/104.jpeg",
  "/electivetreatment/WhatsApp Image 2026-05-31 at 10.30.58 PM.jpeg",
  "/electivetreatment/WhatsApp Image 2026-05-31 at 10.31.03 PM.jpeg",
];
const SP = ["/spritual/next.jpeg", "/spritual/23.jpeg", "/spritual/22.jpeg"];

// ── Three programme pillars ───────────────────────────────────────────────────
const PILLARS = [
  {
    id: "programs",
    accent: "blue" as const,
    Icon: Stethoscope,
    eyebrow: "For medical students & professionals",
    title: "Medical Elective Placement",
    subtitle: "Supervised clinical rotations in Nepal's leading teaching hospitals",
    description:
      "International medical, nursing, dental, physiotherapy, and paramedical students complete 4–12 week supervised rotations at TUTH, Bir Hospital, Kanti Children's, and Paropakar Maternity. Every student is assigned a named, NMC-registered supervisor — not an anonymous clinical team.",
    highlights: [
      "Named, NMC-registered supervisor on every placement",
      "6 specialty tracks: Medical, Surgery, Midwifery, Dental, Physiotherapy, Paramedical",
      "500+ students placed across 30+ countries since 2022",
      "High-volume clinical exposure unavailable in Western teaching hospitals",
      "Certificate signed by named supervising consultant",
    ],
    stat: "From $1,700 · 1–12+ weeks",
    cta: "Explore Programmes",
    ctaPage: "programs",
    heroImg: EL[1],
    galleryImgs: [EL[2], EL[3], EL[4], EL[5]],
    bgClass: "bg-white",
  },
  {
    id: "elective-treatment",
    accent: "slate" as const,
    Icon: Building2,
    eyebrow: "For patients seeking elective procedures",
    title: "Elective Treatment",
    subtitle: "NMC-accredited hospitals. Internationally trained specialists. 70–90% savings.",
    description:
      "Surgical, fertility, cosmetic, dental, and diagnostic procedures at NMC-regulated hospitals with internationally trained specialists — at 70–90% below USA, UK, and Australian prices. No waiting lists. Written cost estimates before you book. Full discharge documentation for your home GP.",
    highlights: [
      "Knee replacement from $6,000 vs. $40,000+ USA (DePuy / Stryker implants)",
      "IVF from $2,500/cycle · 55–65% success rate · ESHRE protocols",
      "Dental implants from $600 (Nobel Biocare / Straumann)",
      "MRI from $80 — results in 24–48 hours, shareable with home doctors",
      "Written itemised cost estimate before booking · ICD-10 discharge summary",
    ],
    stat: "70–90% savings vs. Western prices",
    cta: "View All Procedures & Prices",
    ctaPage: "elective-treatment",
    heroImg: TX[0],
    galleryImgs: [TX[1], TX[2], TX[3], TX[4]],
    bgClass: "bg-slate-50",
  },
  {
    id: "spiritual-wellness",
    accent: "emerald" as const,
    Icon: Leaf,
    eyebrow: "For healing, recovery & retreat",
    title: "Spiritual & Wellness Programmes",
    subtitle: "Living healing traditions. Himalayan setting. 60–75% below Bali or Kerala.",
    description:
      "Nepal is not a spa product. It is the living daily practice of Buddhist monks at Namo Buddha, hand-hammered singing bowls from Thamel's workshops, and Ayurvedic vaidyas practising the same lineage for generations. Combine post-procedure recovery with an Ayurveda programme or Himalayan yoga trek.",
    highlights: [
      "Ayurveda & Panchakarma from $800 — medically supervised, dosha-specific",
      "Yoga & meditation retreats from $600 — twice-daily practice, Himalayan setting",
      "Silent monastery stays at Namo Buddha and Kopan Monastery",
      "Tibetan sound healing from $350 — hand-hammered bronze bowls",
      "60–75% below equivalent programmes in Bali, Kerala, or Thailand",
    ],
    stat: "From $350 · 3–21 days",
    cta: "Explore Wellness Programmes",
    ctaPage: "spiritual-wellness",
    heroImg: SP[1],
    galleryImgs: [SP[0], SP[2], "/spritual/24.jpeg", "/spritual/25.jpeg"],
    bgClass: "bg-white",
  },
] as const;

const ACCENT: Record<string, { bar: string; btn: string; eyebrow: string; badge: string }> = {
  blue:    { bar: "bg-blue-600",    btn: "bg-blue-600 hover:bg-blue-700",    eyebrow: "text-blue-600",    badge: "bg-blue-50 text-blue-700 border-blue-200"    },
  slate:   { bar: "bg-slate-700",   btn: "bg-slate-800 hover:bg-slate-900",  eyebrow: "text-slate-600",   badge: "bg-slate-100 text-slate-700 border-slate-200" },
  emerald: { bar: "bg-emerald-600", btn: "bg-emerald-600 hover:bg-emerald-700", eyebrow: "text-emerald-700", badge: "bg-emerald-50 text-emerald-700 border-emerald-200" },
};

// ── Why Nepal — evidence-based ────────────────────────────────────────────────
const WHY = [
  { Icon: DollarSign,  title: "Verifiable cost savings",     text: "Nepal-based procedure costs 70–90% less than published USA, UK, and Australian public-sector averages. Every estimate is itemised in writing before booking. No hidden fees." },
  { Icon: ShieldCheck, title: "NMC-regulated clinicians",    text: "All specialists are registered with Nepal Medical Council and verifiable at nmc.org.np. Fellowship credentials (FRCS, MRCOG, FDSRCS) traceable to UK Royal College registers." },
  { Icon: Globe,       title: "English-medium care",          text: "Consultations, consent, anaesthesiology briefing, and discharge instructions conducted in English. Discharge summaries in ICD-10 format for home insurer and GP." },
  { Icon: Mountain,    title: "Himalayan recovery context",   text: "Recovery in one of the world's most distinct environments. Pair any clinical procedure with an Ayurveda recovery programme or wellness retreat without changing destination." },
  { Icon: Clock,       title: "No waiting lists",             text: "NHS elective joint replacement: 18-month average wait. Australia private cover: 12-month qualifying period. Nepal: no waiting list for any elective procedure." },
  { Icon: Users,       title: "In-country 24/7 support",      text: "Dedicated coordinator from first contact to departure. Present at all hospital appointments. Emergency line open 90 days post-discharge." },
];

// ── Key data ──────────────────────────────────────────────────────────────────
const STATS = [
  { value: "500+",   label: "International patients & students" },
  { value: "30+",    label: "Countries served" },
  { value: "10+",    label: "Partner hospitals & clinics" },
  { value: "< 1.2%", label: "Complication rate (2022–25)" },
];

const MedicalTourismPage: React.FC<MedicalTourismPageProps> = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative h-[60vh] min-h-[420px] max-h-[580px] flex items-end overflow-hidden"
        aria-label="Medical Tourism Nepal"
      >
        <div className="absolute inset-0">
          <img src={EL[0]} alt="Medical Exchange Nepal — clinical programme" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/55 to-slate-900/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/65 via-slate-900/25 to-transparent" />
        </div>

        {/* Credential strip — top right */}
        <div className="absolute top-6 right-6 z-10 hidden md:flex flex-col gap-2">
          {[
            { icon: ShieldCheck, text: "NMC-Accredited Partner Hospitals", color: "text-emerald-400" },
            { icon: Clock,       text: "24-hour response guarantee",        color: "text-blue-400"    },
            { icon: Award,       text: "500+ patients treated since 2022",  color: "text-amber-400"   },
          ].map(({ icon: Icon, text, color }) => (
            <div key={text} className="flex items-center gap-2.5 bg-black/30 backdrop-blur-md border border-white/15 rounded-xl px-4 py-2.5">
              <Icon className={`h-4 w-4 ${color} flex-shrink-0`} strokeWidth={2} />
              <span className="text-white text-xs font-semibold">{text}</span>
            </div>
          ))}
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 pb-12 md:pb-16">
          <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-blue-400 mb-3">
            Medical Tourism · Nepal
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-[1.1] max-w-3xl">
            Nepal's International<br />
            <span className="text-blue-400">Healthcare Destination</span>
          </h1>
          <p className="text-base text-white/65 max-w-xl leading-relaxed mb-7">
            Medical elective placements for students, accredited procedures for patients,
            and authentic wellness retreats — coordinated end-to-end by a team based in Kathmandu.
          </p>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => setCurrentPage("elective-treatment")}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-xl font-bold text-sm shadow-lg transition-all hover:scale-[1.02]">
              Elective Treatment Prices <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => setCurrentPage("programs")}
              className="inline-flex items-center gap-2 bg-white/12 backdrop-blur text-white px-7 py-3 rounded-xl font-bold text-sm ring-1 ring-white/25 hover:bg-white/20 transition-all">
              Medical Elective Placements
            </button>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────────────────────────── */}
      <section className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-800">
            {STATS.map(({ value, label }) => (
              <div key={label} className="px-6 py-5 text-center">
                <p className="text-white font-black text-2xl leading-none">{value}</p>
                <p className="text-slate-400 text-xs mt-1 leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT IS MEDICAL TOURISM IN NEPAL ─────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-xs font-bold tracking-[0.22em] uppercase text-slate-400 mb-3">The concept</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-5 leading-tight">
                Three distinct pathways.<br />One coordinated destination.
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                Medical Tourism in Nepal is not a single service — it is an ecosystem. For medical students,
                Nepal offers clinical exposure that a Western teaching hospital cannot replicate: high-volume
                obstetric emergencies, altitude medicine, MDR-TB, and rural health camps in villages with no
                permanent clinic.
              </p>
              <p className="text-slate-600 leading-relaxed mb-5">
                For patients, Nepal's NMC-accredited hospitals deliver the same implant brands and surgical
                techniques used in the NHS and US healthcare system — at 70–90% of the cost, with no
                waiting lists and English-medium clinical teams.
              </p>
              <p className="text-slate-600 leading-relaxed mb-7">
                For wellness, Nepal's Buddhist and Hindu healing traditions — Ayurveda, Tibetan sound
                therapy, monastery retreats — are not marketed products. They are living practice,
                at 60–75% below equivalent programmes in Bali or Kerala.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Medical Elective Placement", page: "programs",           color: "border-blue-200 hover:bg-blue-50 hover:border-blue-400" },
                  { label: "Elective Treatment",          page: "elective-treatment", color: "border-slate-200 hover:bg-slate-50 hover:border-slate-400" },
                  { label: "Spiritual & Wellness",        page: "spiritual-wellness", color: "border-emerald-200 hover:bg-emerald-50 hover:border-emerald-400" },
                ].map(({ label, page, color }) => (
                  <button key={label} onClick={() => setCurrentPage(page)}
                    className={`flex items-center justify-between px-5 py-3.5 rounded-xl border text-left font-bold text-slate-900 text-sm transition-all ${color}`}>
                    {label}
                    <ArrowRight className="h-4 w-4 text-slate-400 flex-shrink-0" />
                  </button>
                ))}
              </div>
            </div>
            {/* Photo mosaic */}
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 rounded-2xl overflow-hidden h-52 relative bg-slate-100">
                <img src={EL[1]} alt="Medical elective in Nepal" loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="rounded-xl overflow-hidden h-36 relative bg-slate-100">
                <img src={TX[0]} alt="Hospital care" loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="rounded-xl overflow-hidden h-36 relative bg-slate-100">
                <img src={SP[0]} alt="Wellness retreat" loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THREE PILLARS ─────────────────────────────────────────────────────── */}
      {PILLARS.map((p, pi) => {
        const s = ACCENT[p.accent];
        return (
          <section key={p.id} className={`py-16 border-b border-slate-100 ${p.bgClass}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid lg:grid-cols-2 gap-14 items-start ${pi === 1 ? "lg:flex lg:flex-row-reverse" : ""}`}>
                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl ${s.btn.split(" ")[0]} flex items-center justify-center`}>
                      <p.Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
                    </div>
                    <span className={`text-[10px] font-bold tracking-[0.22em] uppercase ${s.eyebrow}`}>{p.eyebrow}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2 leading-tight">{p.title}</h2>
                  <p className="text-slate-500 text-base mb-5 font-medium">{p.subtitle}</p>
                  <p className="text-slate-600 leading-relaxed mb-6">{p.description}</p>
                  <ul className="space-y-3 mb-8">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-slate-700 text-sm">
                        <CheckCircle className={`h-4 w-4 flex-shrink-0 mt-0.5 ${s.eyebrow}`} strokeWidth={2.5} />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-4 flex-wrap">
                    <button onClick={() => setCurrentPage(p.ctaPage)}
                      className={`inline-flex items-center gap-2 ${s.btn} text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all hover:scale-[1.02]`}>
                      {p.cta} <ArrowRight className="h-4 w-4" />
                    </button>
                    <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border ${s.badge}`}>
                      <Star className="h-3 w-3" /> {p.stat}
                    </span>
                  </div>
                </div>

                {/* Image mosaic */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="col-span-2 rounded-2xl overflow-hidden h-56 relative bg-slate-100">
                    <img src={p.heroImg} alt={p.title} loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  {p.galleryImgs.map((src, i) => (
                    <div key={i} className="rounded-xl overflow-hidden h-32 relative bg-slate-100">
                      <img src={src} alt={`${p.title} ${i + 1}`} loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── WHY NEPAL — evidence-based reasons ───────────────────────────────── */}
      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-slate-400 mb-3">The clinical case</p>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Why patients and students choose Nepal</h2>
            <p className="text-slate-500 max-w-xl">
              Evidence-based reasons, not marketing claims.
              Every point verifiable independently.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY.map(({ Icon, title, text }) => (
              <motion.div key={title} whileHover={{ y: -2 }}
                className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-blue-200 hover:shadow-sm transition-all duration-200">
                <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-slate-700" strokeWidth={1.75} />
                </div>
                <h3 className="font-extrabold text-slate-900 text-sm mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 p-4 bg-white rounded-xl border border-slate-200 flex items-start gap-3">
            <ShieldCheck className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
            <p className="text-xs text-slate-600">
              NMC registration verifiable at{" "}
              <a href="https://nmc.org.np" target="_blank" rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline inline-flex items-center gap-0.5">
                nmc.org.np <ExternalLink className="h-3 w-3" />
              </a>
              . UK fellowship credentials verifiable through respective Royal College registers.
              Complication rate figures from our own patient records (2022–2025), available on request.
            </p>
          </div>
        </div>
      </section>

      {/* ── PARTNER HOSPITALS (summary) ───────────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-slate-400 mb-3">Named institutions</p>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Partner hospitals</h2>
            <p className="text-slate-500 max-w-xl">Not anonymous "partner facilities." Named hospitals, independently verifiable.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { abbr: "TUTH",   name: "Tribhuvan University Teaching Hospital", since: "1967", credential: "Nepal's premier teaching hospital" },
              { abbr: "Bir",    name: "Bir Hospital",                           since: "1889", credential: "Nepal's oldest hospital & trauma centre" },
              { abbr: "Grande", name: "Grande International Hospital",          since: "2015", credential: "ISO 9001:2015 · International patient centre" },
              { abbr: "NMCTH",  name: "Nepal Medical College Teaching Hospital",since: "1997", credential: "SAARC accredited research hospital" },
            ].map((h) => (
              <div key={h.abbr} className="rounded-2xl bg-slate-50 border border-slate-100 p-5 text-center hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-200">
                <div className="w-14 h-14 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mx-auto mb-3">
                  <span className="font-black text-slate-800 text-xs">{h.abbr}</span>
                </div>
                <p className="font-extrabold text-slate-900 text-xs leading-tight mb-1">{h.name}</p>
                <p className="text-slate-400 text-[10px] mb-2">Est. {h.since}</p>
                <p className="text-slate-500 text-[10px] leading-tight">{h.credential}</p>
              </div>
            ))}
          </div>
          <button onClick={() => setCurrentPage("hospitals")}
            className="mt-6 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-bold hover:underline underline-offset-2">
            View full hospital profiles <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* ── FOR UNIVERSITIES ─────────────────────────────────────────────────── */}
      <section className="py-14 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center gap-10">
            <div className="w-14 h-14 bg-sky-700 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
              <GraduationCap className="h-7 w-7 text-white" strokeWidth={1.75} />
            </div>
            <div className="flex-1">
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-sky-700 mb-2">Institutional partnerships</p>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-3">For Universities & Medical Schools</h3>
              <p className="text-slate-500 leading-relaxed max-w-2xl text-sm">
                We work with elective coordinators, international offices, and clinical deans to establish
                formal cohort placement agreements. NMC-verified supervisor credentials, signed MoU framework,
                risk management documentation, and insurance confirmation — the complete package for
                institutional review committees.
              </p>
            </div>
            <button onClick={() => setCurrentPage("for-universities")}
              className="inline-flex items-center gap-2 bg-sky-700 hover:bg-sky-800 text-white px-7 py-3 rounded-xl font-bold text-sm transition-colors flex-shrink-0">
              View University Partnerships <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-bold tracking-[0.22em] uppercase text-blue-400 mb-4">Get started</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Talk to us about your Nepal journey
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto text-sm">
            Whether you are a medical student, a patient considering an elective procedure, or a wellness
            traveller — our Kathmandu-based team responds within 24 hours and matches you to the right
            programme, hospital, and specialist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button onClick={() => setCurrentPage("contact")}
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-extrabold text-base shadow-xl transition-colors">
              Contact Us <ArrowRight className="h-5 w-5" />
            </button>
            <button onClick={() => setCurrentPage("application")}
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-base ring-1 ring-white/20 hover:bg-white/15 transition-colors">
              Apply Now
            </button>
          </div>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {[
              { Icon: Clock,       text: "24-hour response" },
              { Icon: ShieldCheck, text: "NMC-verified specialists" },
              { Icon: MapPin,      text: "Kathmandu-based team" },
            ].map(({ Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-slate-500 text-xs">
                <Icon className="h-3.5 w-3.5 text-slate-600" strokeWidth={2} />{text}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default MedicalTourismPage;
