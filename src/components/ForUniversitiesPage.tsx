import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle, ArrowRight, Award, Users, FileText,
  Shield, ShieldCheck, BookOpen, Globe, Building2, Mail, Phone,
  ChevronDown, ChevronUp, Stethoscope,
  Mountain, Wind, Baby, Wheat, MapPin, FlaskConical,
  AlertTriangle, ClipboardList,
  type LucideIcon,
} from "lucide-react";

interface ForUniversitiesPageProps {
  setCurrentPage: (page: string) => void;
}

const OUTCOMES = [
  { value: "500+",    label: "Students Placed" },
  { value: "30+",     label: "Countries Represented" },
  { value: "15+",     label: "Partner Hospitals" },
  { value: "10,000+", label: "Clinical Hours Logged" },
  { value: "2,500+",  label: "Surgeries Observed" },
  { value: "98%",     label: "Recommendation Rate" },
];

const BENEFITS = [
  {
    icon: Award,
    title: "Named Supervisors, Not Anonymous Teams",
    desc: "Every student receives a named NMC-registered consultant. Supervisor credentials are verifiable at nmc.org.np. No anonymous 'expert team' — your university knows exactly who is responsible for student oversight.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: BookOpen,
    title: "Mapped Learning Objectives",
    desc: "We map clinical experiences to standard medical school learning outcome frameworks (GMC Tomorrow's Doctors, CanMEDS, WFME). Students submit structured logbooks weekly. Supervisor countersigns each entry.",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: Shield,
    title: "Risk Management & Insurance",
    desc: "All students are covered under our institutional indemnity arrangement. Emergency protocols are co-developed with Himalayan Rescue Association. 24/7 local emergency contact. Full safety briefing on arrival.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Globe,
    title: "Dedicated University Liaison",
    desc: "One point of contact for your elective coordinator. Pre-placement briefing calls, mid-placement check-ins, post-placement outcome reports. We handle what student affairs teams hate handling.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: FileText,
    title: "Completion Certificates & Documentation",
    desc: "Official certificates of completion signed by the supervising consultant and co-endorsed by our Tribhuvan University medical school partners. Logbooks formatted for GMC/AMC/ECFMG submission.",
    color: "bg-sky-50 text-sky-600",
  },
  {
    icon: Building2,
    title: "Accredited Partner Hospitals",
    desc: "Placements at Tribhuvan University Teaching Hospital, Bir Hospital, Kanti Children's Hospital, Paropakar Maternity Hospital — all government-registered, NMC-affiliated teaching institutions.",
    color: "bg-rose-50 text-rose-600",
  },
];

const SPECIALTIES = [
  "Internal Medicine", "General Surgery", "Obstetrics & Gynaecology",
  "Paediatrics", "Emergency Medicine", "Orthopaedics",
  "Psychiatry", "Dermatology", "Community Medicine",
  "Anaesthesiology", "Radiology", "Dental Surgery",
  "Physiotherapy", "Pathology", "Ophthalmology",
];

const LEARNING_OBJECTIVES = [
  { area: "Clinical Skills", points: ["History taking in low-resource settings", "Physical examination across diverse presentations", "Procedural skills: suturing, cannulation, catheterisation", "Interpretation of investigations in resource-limited environments"] },
  { area: "Clinical Reasoning", points: ["Differential diagnosis with limited diagnostics", "Management decisions under resource constraints", "Case presentation to supervising consultants", "Documentation in clinical records"] },
  { area: "Professionalism", points: ["Cultural competency in South Asian healthcare", "Informed consent across language barriers", "Interprofessional collaboration", "Ethical practice in low-income settings"] },
  { area: "Global Health", points: ["Epidemiology of disease in Nepal and South Asia", "High-altitude medicine and physiology", "Tropical and communicable disease management", "Community and preventive medicine"] },
];

const FAQS = [
  {
    q: "What is the process for establishing an institutional partnership?",
    a: "We begin with a 30-minute call with your elective coordinator or international office. We then send a draft MoU for review. Most universities take 4–8 weeks to complete internal approval. We can present to your curriculum or international committee if required.",
  },
  {
    q: "Are your placements recognised by the GMC, AMC, or ECFMG?",
    a: "Our clinical encounters meet the criteria for ECFMG-acceptable clinical encounters. Supervisor credentials are NMC-registered and verifiable. We can provide documentation required for each regulatory body. We recommend contacting your national body directly as requirements change — we will assist with any documentation they require.",
  },
  {
    q: "What supervision model do you use?",
    a: "Each student is assigned a named consultant supervisor from the relevant department. Supervisors conduct a formal mid-placement and end-of-placement assessment. Students maintain a daily logbook countersigned weekly. Our local coordinator performs pastoral welfare checks twice per week.",
  },
  {
    q: "What happens if a student has a welfare or medical emergency?",
    a: "We maintain a 24/7 emergency contact in Kathmandu. We have a formal protocol with Himalayan Rescue Association for evacuation scenarios. Our local coordinator is trained in safeguarding. We notify the university international office immediately for any welfare event above minor level.",
  },
  {
    q: "Can you accommodate groups from the same university simultaneously?",
    a: "Yes. We can accommodate cohorts of 3–15 students from a single institution simultaneously. Group placements are coordinated across multiple hospital departments to ensure adequate supervisor:student ratios.",
  },
  {
    q: "Do you provide accommodation and pastoral support?",
    a: "Yes. We provide vetted accommodation within 20 minutes of placement hospitals. Airport pickup, orientation, weekly group dinners, and a local buddy system with Nepali medical students are all included. Pastoral welfare is treated as core, not optional.",
  },
];

const FAQItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-900 pr-4">{q}</span>
        {open ? <ChevronUp className="h-5 w-5 text-slate-400 flex-shrink-0" /> : <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
          {a}
        </div>
      )}
    </div>
  );
};

const ForUniversitiesPage: React.FC<ForUniversitiesPageProps> = ({ setCurrentPage }) => (
  <div className="min-h-screen bg-white">

    {/* ── HERO ───────────────────────────────────────────────────────────── */}
    <section className="bg-slate-900 text-white py-20 lg:py-28 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/gallery/3.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }} />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/60" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-blue-400" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-400">Institutional Partnerships</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black leading-[1.04] mb-6">
            Partner with Nepal's<br />
            <span className="text-blue-400">Clinical Training Leader.</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
            We work directly with medical schools, faculties of health sciences, and university international offices to provide structured, supervised, and fully documented clinical electives in Nepal — with named supervisors, mapped learning objectives, and institutional-grade risk management.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setCurrentPage("contact")}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-xl font-bold transition-all duration-200 hover:scale-[1.02] shadow-lg"
            >
              Request an Institutional Pack <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="mailto:info@medicalexchangenepal.com"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-7 py-3.5 rounded-xl font-semibold ring-1 ring-white/20 transition-all duration-200"
            >
              <Mail className="h-4 w-4" /> Email Our Team
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* ── OUTCOME STATS ───────────────────────────────────────────────────── */}
    <section className="border-b border-slate-100 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {OUTCOMES.map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl font-black text-slate-900">{value}</p>
              <p className="text-xs text-slate-500 mt-1 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── WHY PARTNER WITH US ─────────────────────────────────────────────── */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-5 h-px bg-blue-500" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-600">Why Partner</span>
            <div className="w-5 h-px bg-blue-500" />
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-3">What Institutions Get</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            We are not an agency. We are a clinical training organisation led by a practising Nepali physician.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`w-11 h-11 rounded-xl ${color} flex items-center justify-center mb-5`}>
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="font-black text-slate-900 text-base mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── SPECIALTIES ─────────────────────────────────────────────────────── */}
    <section className="py-16 bg-gray-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-5 h-px bg-blue-500" />
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-600">Available Rotations</span>
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-4">15 Clinical Specialties</h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              Students rotate through departments they choose during application. Multi-specialty rotations available for students wanting breadth. Single-specialty deep rotations available for students in their final clinical years.
            </p>
            <button
              onClick={() => setCurrentPage("programs")}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-[1.02]"
            >
              View All Programs <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {SPECIALTIES.map((s) => (
              <span key={s} className="flex items-center gap-1.5 bg-white border border-slate-200 text-slate-700 text-sm font-medium px-3.5 py-2 rounded-full shadow-sm">
                <Stethoscope className="h-3.5 w-3.5 text-blue-500" strokeWidth={2} />
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ── LEARNING OBJECTIVES ─────────────────────────────────────────────── */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-5 h-px bg-blue-500" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-600">Academic Framework</span>
            <div className="w-5 h-px bg-blue-500" />
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-3">Learning Objectives</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Mapped to GMC Tomorrow's Doctors and CanMEDS frameworks. Every objective is assessed by the named supervisor.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEARNING_OBJECTIVES.map(({ area, points }, i) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-gray-50 rounded-2xl p-6 border border-slate-100"
            >
              <h3 className="font-black text-slate-900 text-base mb-4 pb-3 border-b border-slate-200">{area}</h3>
              <ul className="space-y-2.5">
                {points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" strokeWidth={2.2} />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── MEET YOUR SUPERVISORS ───────────────────────────────────────────── */}
    <section className="py-20 bg-gray-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-5 h-px bg-blue-500" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-600">Named Supervision</span>
            <div className="w-5 h-px bg-blue-500" />
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-3">Meet Your Supervisors</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            These are real NMC-registered consultants. Verifiable at nmc.org.np. Your students will know their name before they land.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Dr. Binod Karmacharya", title: "Senior Consultant", dept: "Internal Medicine",
              hospital: "Tribhuvan University Teaching Hospital", reg: "NMC #12047",
              exp: "15+ yrs", lang: "English, Nepali", capacity: "4 students / rotation",
              bio: "Academic physician and examiner. Structures ward rounds, case presentations, and formal mid- and end-of-placement assessments.",
              highlights: ["Ward rounds daily", "Formal assessment × 2", "Case presentation teaching"],
            },
            {
              name: "Dr. Sushil Adhikari", title: "Senior Surgeon", dept: "General Surgery",
              hospital: "Bir Hospital, Kathmandu", reg: "NMC #9823",
              exp: "12+ yrs", lang: "English, Nepali", capacity: "3 students / rotation",
              bio: "Laparoscopic and emergency surgery specialist. Students observe 80–120 operative procedures per 4-week rotation with structured pre/post-op teaching.",
              highlights: ["80–120 procedures per 4 weeks", "Emergency surgery exposure", "Pre/post-op ward teaching"],
            },
            {
              name: "Dr. Sabita Shrestha", title: "Consultant OB-GYN", dept: "Obstetrics & Gynaecology",
              hospital: "Paropakar Maternity Hospital", reg: "NMC #14501",
              exp: "12+ yrs", lang: "English, Nepali", capacity: "4 students / rotation",
              bio: "Nepal's busiest maternity hospital — 15,000+ deliveries/year. High-volume exposure to normal delivery, eclampsia, PPH, and neonatal resuscitation.",
              highlights: ["15,000+ deliveries/year", "Eclampsia & PPH management", "Neonatal resuscitation"],
            },
            {
              name: "Dr. Prakash Poudel", title: "Head of Department", dept: "Paediatrics",
              hospital: "Kanti Children's Hospital", reg: "NMC #10278",
              exp: "10+ yrs", lang: "English, Nepali", capacity: "3 students / rotation",
              bio: "Paediatric specialist overseeing PICU, general ward, and OPD. Unique exposure to malnutrition, vaccine-preventable disease, and altitude-related paediatric illness.",
              highlights: ["PICU, ward & OPD", "Malnutrition & acute illness", "High-altitude paediatrics"],
            },
            {
              name: "Dr. Nirmala Joshi", title: "Dental Surgeon", dept: "Oral & Maxillofacial",
              hospital: "BPKIHS Affiliated Dental Clinic", reg: "NMC #16034",
              exp: "8+ yrs", lang: "English, Nepali", capacity: "2 students / rotation",
              bio: "Oral surgeon and community dentistry lead. Students participate in extractions, restorations, and rural dental camps serving underserved populations.",
              highlights: ["Extractions & restorations", "Rural dental camps", "Oral surgery observation"],
            },
            {
              name: "Uddhav Kathayat", title: "Public Health Coordinator", dept: "Community Medicine",
              hospital: "Community Health Programs, KTM Valley", reg: "MoH Reg.",
              exp: "3+ yrs", lang: "English, Nepali", capacity: "6 students / camp",
              bio: "Leads mobile health camps serving villages without permanent clinics. Students independently consult, examine, and treat under direct supervision.",
              highlights: ["Mobile health camp rotations", "Independent patient consultations", "Epidemiology & data collection"],
            },
          ].map((s) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              {/* coloured top bar */}
              <div className="h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600" />
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-sm flex-shrink-0 shadow">
                    {s.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 text-sm leading-tight">{s.name}</h3>
                    <p className="text-blue-600 text-xs font-bold mt-0.5">{s.title} — {s.dept}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{s.hospital}</p>
                  </div>
                </div>

                {/* Meta chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full font-mono">{s.reg}</span>
                  <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-semibold">{s.exp}</span>
                  <span className="text-xs bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full font-semibold">{s.capacity}</span>
                </div>

                <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.bio}</p>

                {/* Highlights */}
                <ul className="space-y-1.5">
                  {s.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle className="h-3.5 w-3.5 text-blue-500 flex-shrink-0" strokeWidth={2.5} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-sm text-slate-400 mt-10">
          Verify any registration at{" "}
          <a href="https://nmc.org.np" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">
            nmc.org.np
          </a>
          {" "}— Nepal Medical Council's public register.
        </p>
      </div>
    </section>

    {/* ── SAMPLE MOU ──────────────────────────────────────────────────────── */}
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-black mb-5">Sample MoU Available on Request</h2>
            <p className="text-blue-100 leading-relaxed mb-8">
              Our standard Memorandum of Understanding covers: placement responsibilities, supervisor obligations, student welfare protocols, insurance requirements, data protection, and academic documentation. Most universities complete review in 4–8 weeks.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Dual-party signed agreement",
                "Annual renewal with performance review",
                "Customisable to your institution's requirements",
                "Available in English and on request in German/French",
              ].map((pt) => (
                <li key={pt} className="flex items-center gap-3 text-sm text-blue-100">
                  <CheckCircle className="h-4 w-4 text-blue-300 flex-shrink-0" strokeWidth={2.2} />
                  {pt}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setCurrentPage("contact")}
              className="inline-flex items-center gap-2 bg-white text-blue-700 px-7 py-3.5 rounded-xl font-bold hover:bg-blue-50 transition-all duration-200 hover:scale-[1.02] shadow-lg"
            >
              Request Sample MoU <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="bg-white/10 rounded-3xl p-8 ring-1 ring-white/20">
            <p className="text-blue-200 text-xs font-bold tracking-widest uppercase mb-6">MoU Key Clauses</p>
            {[
              ["Placement Guarantee", "Confirmed hospital and supervisor before student arrival"],
              ["Supervision Standard", "Minimum 2 formal assessments per placement period"],
              ["Welfare Protocol", "24/7 emergency contact + HRA evacuation agreement"],
              ["Documentation", "Logbook, assessment form, completion certificate"],
              ["Insurance", "Institutional indemnity + travel health insurance"],
              ["Reporting", "Post-placement outcomes report to university"],
            ].map(([clause, detail]) => (
              <div key={clause} className="flex items-start gap-3 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 flex-shrink-0" />
                <div>
                  <p className="font-bold text-white text-sm">{clause}</p>
                  <p className="text-blue-200 text-xs mt-0.5">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ── RESEARCH OPPORTUNITIES ──────────────────────────────────────────── */}
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-5 h-px bg-blue-500" />
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-600">Research & Global Health</span>
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-5">Research Opportunities</h2>
            <p className="text-slate-500 leading-relaxed mb-6">
              For many European students, research output is as important as clinical exposure. Nepal offers a research environment unavailable at home — unique disease burden, high patient volume, and Tribhuvan University faculty willing to co-supervise.
            </p>
            <ul className="space-y-3">
              {[
                "Co-authored case reports and case series — publishable within 6 months",
                "Audit and quality improvement projects at partner hospitals",
                "Community health data collection for MPH dissertation use",
                "Supervisor sign-off for research ethics documentation",
                "Access to hospital records data (anonymised) for retrospective studies",
              ].map((pt) => (
                <li key={pt} className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-5">Active Research Topics</p>
            <div className="grid grid-cols-2 gap-3">
              {([
                { Icon: Mountain,      iconBg: "bg-slate-100",  iconClr: "text-slate-600",  topic: "High-altitude physiology & medicine", tag: "Unique to Nepal" },
                { Icon: Wind,          iconBg: "bg-sky-50",     iconClr: "text-sky-600",    topic: "Multi-drug resistant tuberculosis",    tag: "High burden" },
                { Icon: Baby,          iconBg: "bg-pink-50",    iconClr: "text-pink-600",   topic: "Maternal health & safe delivery",      tag: "High volume" },
                { Icon: Wheat,         iconBg: "bg-orange-50",  iconClr: "text-orange-600", topic: "Acute malnutrition in children",       tag: "Paediatrics" },
                { Icon: MapPin,        iconBg: "bg-green-50",   iconClr: "text-green-600",  topic: "Community health & rural medicine",    tag: "Global Health" },
                { Icon: FlaskConical,  iconBg: "bg-violet-50",  iconClr: "text-violet-600", topic: "Global surgery access in LMICs",       tag: "Surgical" },
              ] as { Icon: LucideIcon; iconBg: string; iconClr: string; topic: string; tag: string }[]).map(({ Icon, iconBg, iconClr, topic, tag }) => (
                <div key={topic} className="bg-slate-50 rounded-2xl p-4 border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-colors">
                  <div className={`w-8 h-8 rounded-lg ${iconBg} flex items-center justify-center`}>
                    <Icon className={`h-4 w-4 ${iconClr}`} strokeWidth={1.75} />
                  </div>
                  <p className="font-bold text-slate-900 text-sm mt-2 leading-tight">{topic}</p>
                  <span className="text-[10px] font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full mt-2 inline-block">{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── SAFETY & GOVERNANCE ─────────────────────────────────────────────── */}
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-5 h-px bg-blue-500" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-600">Governance & Compliance</span>
            <div className="w-5 h-px bg-blue-500" />
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-3">Safety & Governance</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Everything your institution's risk and compliance team needs to complete their review.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {([
            { Icon: Shield,        iconBg: "bg-blue-50",    iconClr: "text-blue-600",    title: "Insurance & Indemnity",         points: ["Institutional indemnity arrangement for all students","Travel health insurance required before arrival","Medical evacuation coverage verified at onboarding","Students advised on personal contents insurance"] },
            { Icon: AlertTriangle, iconBg: "bg-amber-50",   iconClr: "text-amber-600",   title: "Emergency Response Protocol",    points: ["24/7 local emergency contact in Kathmandu","Formal evacuation protocol with Himalayan Rescue Association","University international office notified for any welfare event","Hospital-level emergency pathways documented"] },
            { Icon: ShieldCheck,   iconBg: "bg-green-50",   iconClr: "text-green-600",   title: "Infection Control & Safety",     points: ["Pre-arrival vaccination checklist provided","Hepatitis B serology required before clinical access","PPE provision confirmed with each partner hospital","Needlestick injury protocol documented and briefed"] },
            { Icon: Users,         iconBg: "bg-violet-50",  iconClr: "text-violet-600",  title: "Safeguarding Policy",            points: ["Safeguarding trained local coordinator on-site","Code of conduct signed by all students before arrival","Reporting pathway for safeguarding concerns","DBS/police check guidance provided on request"] },
            { Icon: ClipboardList, iconBg: "bg-sky-50",     iconClr: "text-sky-600",     title: "Placement Quality Assurance",    points: ["Formal mid- and end-of-placement supervisor assessment","Weekly pastoral welfare check by local coordinator","Student feedback collected at placement completion","Annual programme review incorporating all feedback"] },
            { Icon: FileText,      iconBg: "bg-slate-100",  iconClr: "text-slate-600",   title: "Documentation & Records",        points: ["Placement agreement letter issued before travel","Daily logbook countersigned weekly by supervisor","Completion certificate signed by named consultant","Records retained for 7 years post-placement"] },
          ] as { Icon: LucideIcon; iconBg: string; iconClr: string; title: string; points: string[] }[]).map(({ Icon, iconBg, iconClr, title, points }) => (
            <div key={title} className="bg-gray-50 rounded-2xl p-6 border border-slate-100">
              <div className={`w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center mb-4`}>
                <Icon className={`h-5 w-5 ${iconClr}`} strokeWidth={1.75} />
              </div>
              <h3 className="font-black text-slate-900 text-base mb-4">{title}</h3>
              <ul className="space-y-2">
                {points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle className="h-3.5 w-3.5 text-blue-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── DOWNLOAD PARTNERSHIP PACK ────────────────────────────────────────── */}
    <section className="py-14 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center gap-8">
          <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
            <FileText className="h-8 w-8 text-white" strokeWidth={1.75} />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-black text-slate-900 mb-2">Download the University Partnership Pack</h3>
            <p className="text-slate-500 leading-relaxed mb-4">
              A single PDF for your elective coordinator containing everything they need: hospital profiles, supervisor credentials, learning objectives, risk management protocols, insurance details, sample MoU, and outcome data. Built for institutional review committees.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Hospital profiles","NMC-verified supervisors","Learning objectives framework","Risk management protocol","Insurance documentation","Sample MoU","Alumni outcomes data"].map((item) => (
                <span key={item} className="text-xs font-semibold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">{item}</span>
              ))}
            </div>
          </div>
          <button
            onClick={() => setCurrentPage("contact")}
            className="flex-shrink-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-2xl font-bold transition-all duration-200 hover:scale-[1.02] shadow-lg whitespace-nowrap"
          >
            Request Partnership Pack <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>

    {/* ── FAQS ────────────────────────────────────────────────────────────── */}
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-slate-900 mb-3">Questions Universities Ask</h2>
          <p className="text-slate-500">Answers to what your elective coordinator will want to know before proceeding.</p>
        </div>
        <div className="space-y-3">
          {FAQS.map((faq) => <FAQItem key={faq.q} {...faq} />)}
        </div>
      </div>
    </section>

    {/* ── CONTACT CTA ─────────────────────────────────────────────────────── */}
    <section className="py-20 bg-gray-50 border-t border-slate-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-black text-slate-900 mb-4">Ready to Establish a Partnership?</h2>
        <p className="text-slate-500 leading-relaxed mb-10">
          Send us your institution's name and we'll respond within 24 hours with a tailored information pack, supervisor profiles relevant to your students' specialties, and a draft MoU.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            { icon: Mail, label: "Email", value: "info@medicalexchangenepal.com" },
            { icon: Phone, label: "WhatsApp", value: "+977 986 272 8072" },
            { icon: Users, label: "Response", value: "Within 24 hours" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
              <Icon className="h-5 w-5 text-blue-600 mx-auto mb-2" strokeWidth={1.75} />
              <p className="text-xs text-slate-400 font-medium mb-1">{label}</p>
              <p className="text-sm font-bold text-slate-900">{value}</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => setCurrentPage("contact")}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-bold text-base transition-all duration-200 hover:scale-[1.02] shadow-lg"
        >
          Start a Partnership Conversation <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </section>

  </div>
);

export default ForUniversitiesPage;
