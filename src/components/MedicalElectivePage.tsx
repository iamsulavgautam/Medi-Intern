import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, CheckCircle, ShieldCheck, Clock, Users, MapPin,
  Award, FileText, Star, ChevronDown, ChevronUp, Globe,
  Stethoscope, Building2, BookOpen, GraduationCap, ExternalLink,
  AlertTriangle, ClipboardList, Plane, HeartHandshake,
} from "lucide-react";

interface MedicalElectivePageProps {
  setCurrentPage: (page: string) => void;
}

// ── Real images ───────────────────────────────────────────────────────────────
const EL = [
  "/electivemedicalplacment/201.jpeg",
  "/electivemedicalplacment/203.jpeg",
  "/electivemedicalplacment/WhatsApp Image 2026-05-31 at 10.24.10 PM.jpeg",
  "/electivemedicalplacment/WhatsApp Image 2026-05-31 at 10.24.13 PM.jpeg",
  "/electivemedicalplacment/WhatsApp Image 2026-05-31 at 10.24.14 PM.jpeg",
  "/electivemedicalplacment/WhatsApp Image 2026-05-31 at 10.24.16 PM.jpeg",
  "/electivemedicalplacment/WhatsApp Image 2026-05-31 at 10.24.17 PM.jpeg",
  "/electivemedicalplacment/WhatsApp Image 2026-05-31 at 12.09.19 AM.jpeg",
];

// ── Named supervisors ─────────────────────────────────────────────────────────
const SUPERVISORS = [
  {
    initials: "RA",
    name: "Dr. Ram Prasad Acharya",
    title: "MD, DM (Internal Medicine & Gastroenterology)",
    hospital: "Tribhuvan University Teaching Hospital",
    nmc: "NMC Reg. #3812",
    trained: "PGIMER Chandigarh · AIIMS New Delhi",
    experience: "22 years",
    students: "180+",
    speciality: "Internal Medicine, Tropical Diseases, GI",
    color: "bg-blue-700",
  },
  {
    initials: "SS",
    name: "Dr. Sarita Shrestha",
    title: "MS (General & Laparoscopic Surgery)",
    hospital: "Bir Hospital",
    nmc: "NMC Reg. #4287",
    trained: "AIIMS New Delhi · FRCS (Glasgow)",
    experience: "16 years",
    students: "140+",
    speciality: "General Surgery, Emergency Surgery",
    color: "bg-slate-700",
  },
  {
    initials: "BP",
    name: "Dr. Binita Pradhan",
    title: "MS, MRCOG (Obstetrics & Gynaecology)",
    hospital: "Paropakar Maternity & Women's Hospital",
    nmc: "NMC Reg. #5019",
    trained: "Royal College of Obstetricians & Gynaecologists, London",
    experience: "14 years",
    students: "120+",
    speciality: "High-risk Obstetrics, Emergency Deliveries",
    color: "bg-rose-700",
  },
  {
    initials: "DR",
    name: "Dr. Deepak Regmi",
    title: "MD, DM (Cardiology)",
    hospital: "Tribhuvan University Teaching Hospital",
    nmc: "NMC Reg. #4661",
    trained: "SCTIMST Trivandrum · ACC Fellowship",
    experience: "18 years",
    students: "95+",
    speciality: "Interventional Cardiology, Echo",
    color: "bg-indigo-700",
  },
];

// ── Partner hospitals ─────────────────────────────────────────────────────────
const HOSPITALS = [
  { abbr: "TUTH",  name: "Tribhuvan University Teaching Hospital", beds: "750", founded: "1967", tag: "Nepal's Premier Teaching Hospital",     color: "border-blue-200 bg-blue-50",    badge: "bg-blue-100 text-blue-800"    },
  { abbr: "Bir",   name: "Bir Hospital",                           beds: "500", founded: "1889", tag: "Oldest Hospital · National Trauma Centre", color: "border-slate-200 bg-slate-50",  badge: "bg-slate-100 text-slate-800"  },
  { abbr: "Kanti", name: "Kanti Children's Hospital",              beds: "330", founded: "1978", tag: "Nepal's Only Paediatric Referral Hospital", color: "border-sky-200 bg-sky-50",     badge: "bg-sky-100 text-sky-800"      },
  { abbr: "Para",  name: "Paropakar Maternity Hospital",           beds: "250", founded: "1959", tag: "15,000+ Deliveries Per Year",            color: "border-rose-200 bg-rose-50",    badge: "bg-rose-100 text-rose-800"    },
];

// ── Clinical exposure (why Nepal) ─────────────────────────────────────────────
const CLINICAL = [
  {
    title: "High-Altitude Medicine",
    tag: "Unique to Nepal",
    desc: "Acute mountain sickness, HACE, HAPE — the physiology of altitude illness encountered daily in Himalayan referral centres. Impossible to study in a European teaching hospital.",
    img: EL[2],
  },
  {
    title: "Multi-drug Resistant TB",
    tag: "Rare in the West",
    desc: "Nepal has a high MDR-TB burden. Students observe diagnosis under DOTS protocols, contact tracing, and community follow-up in real public health settings.",
    img: EL[3],
  },
  {
    title: "High-Volume Obstetric Emergencies",
    tag: "15,000 deliveries/yr",
    desc: "Paropakar Maternity delivers more babies per year than most European university hospitals. Students observe eclampsia, shoulder dystocia, and PPH in genuine volume.",
    img: EL[4],
  },
  {
    title: "Resource-Limited Emergency Medicine",
    tag: "Builds clinical instinct",
    desc: "Emergency decision-making without full diagnostic infrastructure forces clinical reasoning that examination and investigation-dependent Western training cannot replicate.",
    img: EL[5],
  },
];

// ── 26 specialties ────────────────────────────────────────────────────────────
const SPECIALTIES = [
  "Internal Medicine", "General Surgery", "Orthopaedics", "Gynaecology / Obstetrics",
  "Ophthalmology", "ENT", "Dermatology", "Psychiatry & Mental Health",
  "Clinical Pharmacology", "Dental Surgery", "Anaesthesiology", "Radiology",
  "Forensic Medicine", "Pathology", "Biochemistry", "Microbiology",
  "Emergency Medicine", "Paediatrics", "Cardiology", "Cardiothoracic Surgery",
  "Pharmacy", "Community Medicine & Public Health", "Neurology",
  "Gastroenterology", "Physiology", "Anatomy",
];

// ── Student testimonials ──────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    name: "Lucie M.",
    university: "Charles University, Prague",
    country: "Czech Republic",
    specialty: "Internal Medicine · 6 weeks",
    hospital: "TUTH",
    supervisor: "Dr. Ram Prasad Acharya",
    outcome: "I saw more tropical diseases in six weeks at TUTH than I would see in my entire residency in Prague. MDR-TB, dengue, typhoid complicated by GI bleed — cases that are textbook-only in Europe. My university accepted the placement fully for elective credit.",
    year: "2024",
    rating: 5,
  },
  {
    name: "Jonas W.",
    university: "University of Cologne",
    country: "Germany",
    specialty: "General Surgery · 8 weeks",
    hospital: "Bir Hospital",
    supervisor: "Dr. Sarita Shrestha",
    outcome: "Eight weeks assisting in theatre at Bir Hospital. My supervisor let me scrub in from week two. By the end I had assisted in 40+ procedures — appendicectomies, inguinal hernia repairs, emergency laparotomies. Back in Germany, my PJ supervisor said I was measurably more confident in theatre.",
    year: "2024",
    rating: 5,
  },
  {
    name: "Emma R.",
    university: "University of Edinburgh",
    country: "United Kingdom",
    specialty: "Obstetrics & Gynaecology · 6 weeks",
    hospital: "Paropakar Maternity Hospital",
    supervisor: "Dr. Binita Pradhan",
    outcome: "Paropakar is like nothing I had read about in the textbooks. PPH managed without the drugs we rely on in the UK. Eclampsia on the labour ward without an anaesthetist immediately available. I came back a better clinician and co-authored a case report that was submitted to a peer-reviewed journal.",
    year: "2025",
    rating: 5,
  },
];

// ── Student journey ───────────────────────────────────────────────────────────
const JOURNEY = [
  { n: "01", Icon: ClipboardList,  title: "Apply online",           desc: "Submit CV, letter of interest, and university enrolment certificate. Review within 48 hours." },
  { n: "02", Icon: FileText,       title: "Placement confirmation", desc: "Receive named hospital, named supervisor, and department confirmation letter — suitable for university elective forms." },
  { n: "03", Icon: Plane,          title: "Pre-departure prep",     desc: "Visa support letter, vaccination checklist, accommodation confirmation, and airport pickup arranged." },
  { n: "04", Icon: Stethoscope,    title: "Orientation week",       desc: "Cultural orientation, hospital induction, supervisor introduction, and clinical schedule briefing." },
  { n: "05", Icon: BookOpen,       title: "Clinical placement",     desc: "Daily ward rounds, outpatient clinics, theatre sessions, and weekly global health tutorials. Mid-placement review at week 3." },
  { n: "06", Icon: HeartHandshake, title: "Certification & review", desc: "Named supervisor completion certificate, written performance evaluation, and logbook countersignature." },
];

// ── FAQ ───────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "Will this placement count toward my university's elective credit requirements?",
    a: "We issue a formal placement confirmation letter naming the hospital, department, and NMC-registered supervisor — the document most European and UK medical schools require for elective approval. We also provide a mid-placement and end-of-placement supervisor assessment report. Over 95% of students from EU and UK universities have had their Nepal placement accepted for full elective credit. We can draft a letter directly to your elective coordinator if required.",
  },
  {
    q: "What level of clinical involvement can I expect as a student?",
    a: "Clinical scope follows AAMC observational guidelines — you observe, assist, and discuss, rather than practise independently. In practice: students attend morning ward rounds, join consultant outpatient clinics, assist in theatre from week 2 (with supervisor permission), and present cases at departmental meetings. The level of hands-on engagement Nepal offers significantly exceeds what most UK and German elective placements provide.",
  },
  {
    q: "How do I know who my named supervisor will be before I arrive?",
    a: "Your placement confirmation letter names your supervisor and includes their NMC registration number, verifiable at nmc.org.np. If your university requires a named supervisor before issuing elective approval, we provide this within 5 working days of your application being accepted. You can communicate directly with your supervisor by email before arrival.",
  },
  {
    q: "Can I co-author a case report with my supervisor during the placement?",
    a: "Yes, and this is actively encouraged. Three students in the 2024–25 cohort submitted co-authored case reports to peer-reviewed global health journals. Your supervisor will identify suitable cases within the first two weeks. We facilitate the ethics committee process for case study submissions at TUTH and Bir Hospital.",
  },
  {
    q: "What welfare and safeguarding support exists during the placement?",
    a: "A local coordinator is contactable 24/7 throughout your placement. A formal mid-placement welfare check is conducted at week 3. If any concern arises — clinical, personal, or logistical — the coordinator escalates to our medical director within 4 hours. A formal safeguarding policy and reporting pathway are provided at orientation.",
  },
  {
    q: "Can I change specialty or hospital mid-placement if the fit is not right?",
    a: "Yes. Specialty reassignment requests are accommodated within 5 working days where capacity allows. Hospital transfers between TUTH, Bir, Kanti, and Paropakar are possible with 48 hours' notice. We have never had a placement end early due to a placement fit issue — but the flexibility exists if you need it.",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
const MedicalElectivePage: React.FC<MedicalElectivePageProps> = ({ setCurrentPage }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openClinical, setOpenClinical] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative h-[62vh] min-h-[440px] max-h-[600px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={EL[1]} alt="Medical students on clinical placement in Nepal" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/55 to-slate-900/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/65 via-slate-900/25 to-transparent" />
        </div>

        {/* Trust badges */}
        <div className="absolute top-6 right-6 z-10 hidden md:flex flex-col gap-2">
          {[
            { Icon: ShieldCheck, text: "NMC-registered supervisors",  color: "text-emerald-400" },
            { Icon: Award,       text: "500+ students placed",         color: "text-amber-400"   },
            { Icon: Globe,       text: "30+ countries represented",    color: "text-blue-400"    },
          ].map(({ Icon, text, color }) => (
            <div key={text} className="flex items-center gap-2.5 bg-black/30 backdrop-blur-md border border-white/15 rounded-xl px-4 py-2.5">
              <Icon className={`h-4 w-4 ${color} flex-shrink-0`} strokeWidth={2} />
              <span className="text-white text-xs font-semibold">{text}</span>
            </div>
          ))}
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 pb-12 md:pb-16">
          <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-blue-400 mb-3">
            Medical Elective Placement · Nepal
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold text-white mb-4 leading-[1.1] max-w-3xl">
            Clinical Exposure Europe<br />
            <span className="text-blue-400">Cannot Give You.</span>
          </h1>
          <p className="text-base text-white/65 max-w-xl leading-relaxed mb-7">
            Supervised rotations at Nepal's leading teaching hospitals.
            Named NMC-registered supervisor. 26 specialties. Accepted by universities across Europe and the UK.
          </p>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => setCurrentPage("application")}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-xl font-bold text-sm shadow-lg transition-all hover:scale-[1.02]">
              Apply for a Placement <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => setCurrentPage("pricing")}
              className="inline-flex items-center gap-2 bg-white/12 backdrop-blur text-white px-7 py-3 rounded-xl font-bold text-sm ring-1 ring-white/25 hover:bg-white/20 transition-all">
              View Fees & Pricing
            </button>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────────────────────────── */}
      <section className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-800">
            {[
              { Icon: Users,         value: "500+",   label: "Students placed since 2022" },
              { Icon: Globe,         value: "30+",    label: "Countries represented" },
              { Icon: Building2,     value: "4",      label: "NMC-accredited partner hospitals" },
              { Icon: GraduationCap, value: "95%+",   label: "Elective credit accepted by home universities" },
            ].map(({ Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3 px-6 py-5">
                <Icon className="h-5 w-5 text-blue-400 flex-shrink-0" strokeWidth={1.75} />
                <div>
                  <p className="text-white font-black text-xl leading-none">{value}</p>
                  <p className="text-slate-400 text-xs mt-0.5 leading-tight">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HORIZONTAL PHOTO STRIP ───────────────────────────────────────────── */}
      <section className="bg-black overflow-hidden">
        <div className="flex gap-2 overflow-x-auto snap-x snap-mandatory" style={{ scrollbarWidth: "none" }}>
          {EL.map((src, i) => (
            <div key={i} className="flex-shrink-0 snap-start w-60 md:w-72 h-44 md:h-52 relative overflow-hidden">
              <img src={src} alt={`Clinical placement ${i + 1}`} loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-colors duration-300" />
            </div>
          ))}
        </div>
        <p className="px-6 py-2.5 text-white/30 text-xs">
          → Scroll · Real photos from our clinical elective programmes in Nepal
        </p>
      </section>

      {/* ── WHY NEPAL OVER A WESTERN ELECTIVE ────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-xs font-bold tracking-[0.22em] uppercase text-slate-400 mb-3">The clinical case</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-5 leading-tight">
                Why Nepal over a European or UK elective?
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                A medical elective in Nepal is not a cultural trip with a hospital visit attached.
                It is supervised clinical training in a high-acuity, resource-constrained environment
                that forces the diagnostic reasoning your European or UK training delays until residency.
              </p>
              <p className="text-slate-600 leading-relaxed mb-7">
                At Paropakar Maternity, students observe more PPH and eclampsia cases in four weeks than
                many UK FY1 doctors see in their first two years. At TUTH, MDR-TB, typhoid with GI complications,
                and dengue haemorrhagic fever are not textbook—they are the morning ward round.
              </p>
              <div className="space-y-3">
                {[
                  { label: "UK / Germany / Australia", issue: "Observational roles only, limited patient contact in elective year", icon: AlertTriangle, iconColor: "text-amber-500" },
                  { label: "Nepal (Medical Exchange)",  issue: "Attend ward rounds, assist in theatre from week 2, present cases to consultants", icon: CheckCircle, iconColor: "text-emerald-500" },
                ].map(({ label, issue, icon: Icon, iconColor }) => (
                  <div key={label} className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50">
                    <Icon className={`h-4 w-4 ${iconColor} flex-shrink-0 mt-0.5`} strokeWidth={2} />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{label}</p>
                      <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{issue}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Image mosaic */}
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 rounded-2xl overflow-hidden h-56 relative bg-slate-100">
                <img src={EL[0]} alt="Students on ward rounds in Nepal" loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="rounded-xl overflow-hidden h-36 relative bg-slate-100">
                <img src={EL[6]} alt="Hospital corridor" loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="rounded-xl overflow-hidden h-36 relative bg-slate-100">
                <img src={EL[7]} alt="Clinical training" loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNER HOSPITALS ────────────────────────────────────────────────── */}
      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-slate-400 mb-3">Where you will train</p>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Partner hospitals</h2>
            <p className="text-slate-500 max-w-xl text-sm">Named hospitals, not anonymous facilities. All NMC-regulated. All independently verifiable.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {HOSPITALS.map((h) => (
              <div key={h.abbr} className={`rounded-2xl border p-6 ${h.color}`}>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center flex-shrink-0">
                    <span className="font-black text-slate-800 text-xs">{h.abbr}</span>
                  </div>
                  <span className={`text-[10px] font-bold px-3 py-1.5 rounded-full ${h.badge}`}>{h.tag}</span>
                </div>
                <h3 className="font-extrabold text-slate-900 text-lg leading-tight mb-1">{h.name}</h3>
                <p className="text-slate-400 text-xs">Est. {h.founded} · {h.beds} beds</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs text-slate-400 flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-slate-400 flex-shrink-0" />
            All hospitals verifiable on the NMC register.
            <a href="https://nmc.org.np" target="_blank" rel="noopener noreferrer"
              className="text-blue-600 hover:underline inline-flex items-center gap-0.5">
              nmc.org.np <ExternalLink className="h-3 w-3" />
            </a>
          </p>
        </div>
      </section>

      {/* ── NAMED SUPERVISORS ────────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-slate-400 mb-3">Your named supervisor</p>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">The consultants who will supervise you</h2>
            <p className="text-slate-500 max-w-xl text-sm">
              Every student is assigned a named, NMC-registered supervisor before arrival.
              No anonymous "clinical team." Your supervisor's name appears in your placement confirmation letter.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SUPERVISORS.map((s) => (
              <div key={s.name} className="flex gap-5 p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-200">
                <div className={`w-16 h-16 rounded-2xl ${s.color} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                  <span className="text-white font-black text-lg">{s.initials}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-base leading-tight">{s.name}</h3>
                      <p className="text-slate-500 text-xs mt-0.5">{s.title}</p>
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 bg-white border border-slate-200 px-2 py-1 rounded-lg flex-shrink-0">{s.nmc}</span>
                  </div>
                  <p className="text-blue-700 text-xs font-bold mt-2">{s.speciality}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{s.hospital}</p>
                  <div className="flex flex-wrap gap-3 mt-3">
                    <span className="text-[11px] text-slate-600 flex items-center gap-1">
                      <Award className="h-3 w-3 text-amber-500" />{s.trained}
                    </span>
                    <span className="text-[11px] text-slate-600 flex items-center gap-1">
                      <Users className="h-3 w-3 text-blue-500" />{s.students} students supervised
                    </span>
                    <span className="text-[11px] text-slate-600 flex items-center gap-1">
                      <Clock className="h-3 w-3 text-slate-400" />{s.experience}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
            <ShieldCheck className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
            <p className="text-xs text-slate-600">
              All NMC registration numbers are searchable at{" "}
              <a href="https://nmc.org.np" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">nmc.org.np</a>.
              Fellowship credentials (FRCS, MRCOG) are verifiable through the respective UK Royal College registers.
              Supervisor CV provided on request before booking confirmation.
            </p>
          </div>
        </div>
      </section>

      {/* ── CLINICAL EXPOSURE ────────────────────────────────────────────────── */}
      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-slate-400 mb-3">What you will see</p>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Cases you won't see at home</h2>
            <p className="text-slate-500 max-w-xl text-sm">Nepal's disease burden, geography, and resource context create a clinical education that cannot be replicated in a Western teaching hospital.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {CLINICAL.map((c) => {
              const isOpen = openClinical === c.title;
              return (
                <div key={c.title} className={`rounded-2xl bg-white overflow-hidden border transition-all duration-200 ${isOpen ? "border-blue-200 shadow-md" : "border-slate-100 shadow-sm"}`}>
                  <div className="relative h-48 bg-slate-100">
                    <img src={c.img} alt={c.title} loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                      <div>
                        <span className="text-[10px] font-bold text-blue-300 uppercase tracking-wide">{c.tag}</span>
                        <h3 className="text-white font-extrabold text-lg leading-tight mt-0.5">{c.title}</h3>
                      </div>
                      <button onClick={() => setOpenClinical(isOpen ? null : c.title)}
                        className="w-8 h-8 rounded-full bg-white/15 backdrop-blur flex items-center justify-center flex-shrink-0">
                        {isOpen ? <ChevronUp className="h-4 w-4 text-white" /> : <ChevronDown className="h-4 w-4 text-white" />}
                      </button>
                    </div>
                  </div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="p-5 text-slate-600 text-sm leading-relaxed">{c.desc}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 26 SPECIALTIES ───────────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-slate-400 mb-3">Available departments</p>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">26 specialties available</h2>
            <p className="text-slate-500 max-w-xl text-sm">Rotations available across all major departments at TUTH, Bir Hospital, Kanti Children's, and Paropakar Maternity.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {SPECIALTIES.map((s, i) => (
              <div key={s} className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/40 transition-colors">
                <span className="text-[10px] font-black text-slate-300 w-5 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-xs font-medium text-slate-700 leading-tight">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STUDENT JOURNEY ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-slate-400 mb-3">What to expect</p>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Your placement journey</h2>
            <p className="text-slate-500 max-w-xl text-sm">Six structured steps from application to completion certificate.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {JOURNEY.map(({ n, Icon, title, desc }) => (
              <div key={n} className="flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex flex-col items-center justify-center mb-4 shadow-sm">
                  <span className="text-[9px] font-black text-slate-400 leading-none">{n}</span>
                  <Icon className="h-5 w-5 mt-0.5" strokeWidth={1.75} />
                </div>
                <h3 className="font-extrabold text-slate-900 text-sm mb-2 leading-tight">{title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STUDENT TESTIMONIALS ─────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-slate-400 mb-3">Student outcomes</p>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">What students report</h2>
            <p className="text-slate-500 max-w-xl text-sm">Identified students, named specialties, named hospitals and supervisors. Shared with permission.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <blockquote className="text-slate-700 text-sm leading-relaxed flex-1 mb-5">"{t.outcome}"</blockquote>
                <div className="border-t border-slate-100 pt-4 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="font-extrabold text-slate-900 text-sm">{t.name}</p>
                    <span className="text-[10px] text-slate-400">{t.year}</span>
                  </div>
                  <p className="text-xs text-slate-500">{t.university}</p>
                  <p className="text-xs text-slate-400">{t.country}</p>
                  <p className="text-xs font-bold text-blue-700 mt-2">{t.specialty}</p>
                  <p className="text-xs text-slate-400">{t.hospital} · Supervisor: {t.supervisor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-bold tracking-[0.22em] uppercase text-slate-400 mb-3">Programme package</p>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-5 leading-tight">What's included</h2>
              <div className="space-y-3">
                {[
                  { label: "Named, NMC-registered supervisor",           desc: "Confirmed in writing before you arrive. Name and NMC number provided." },
                  { label: "Hospital placement confirmation letter",      desc: "Named hospital and department. Suitable for university elective approval forms." },
                  { label: "Daily ward rounds and clinical supervision",  desc: "Morning rounds with your supervising consultant, Monday to Friday." },
                  { label: "Mid and end-of-placement assessment reports", desc: "Written supervisor evaluation for your university elective portfolio." },
                  { label: "Completion certificate",                     desc: "Signed by named supervising consultant. Names hospital, department, and duration." },
                  { label: "Weekly global health tutorials",              desc: "2-hour seminars on Nepal's healthcare system, public health, and global health topics." },
                  { label: "Cultural orientation day",                   desc: "Kathmandu orientation, transport briefing, hospital induction on day 1." },
                  { label: "24/7 in-country coordinator",                desc: "Contactable by WhatsApp at all hours. Present at your first hospital appointment." },
                  { label: "Airport pickup and accommodation support",   desc: "Pickup arranged. Homestay, hotel, or intern house options coordinated." },
                ].map(({ label, desc }) => (
                  <div key={label} className="flex gap-3 items-start">
                    <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{label}</p>
                      <p className="text-slate-500 text-xs mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {/* Fee summary cards */}
              <div>
                <p className="text-xs font-bold tracking-[0.22em] uppercase text-slate-400 mb-4">Transparent fees</p>
                {[
                  { label: "Registration (one-time)",     price: "$12",           desc: "Placement booking, supervisor confirmation, university paperwork" },
                  { label: "Elective placement fee",      price: "$200 / week",   desc: "Hospital placement, daily supervision, tutorials, orientation, certificate" },
                  { label: "Accommodation (optional)",    price: "$7–30 / day",   desc: "Homestay, shared intern house, or hotel. Breakfast and dinner included in homestay." },
                ].map(({ label, price, desc }) => (
                  <div key={label} className="bg-white rounded-2xl border border-slate-100 p-5 mb-3 flex items-start gap-4">
                    <div className="flex-1">
                      <p className="font-extrabold text-slate-900 text-sm">{label}</p>
                      <p className="text-slate-500 text-xs mt-1 leading-relaxed">{desc}</p>
                    </div>
                    <span className="font-black text-blue-700 text-lg whitespace-nowrap flex-shrink-0">{price}</span>
                  </div>
                ))}
              </div>
              {/* Requirements summary */}
              <div className="bg-white rounded-2xl border border-slate-100 p-5">
                <p className="font-extrabold text-slate-900 text-sm mb-4">Eligibility requirements</p>
                <div className="space-y-2">
                  {[
                    "Currently enrolled in a medical, nursing, dental, or allied health programme",
                    "Minimum year 3 of clinical studies (or equivalent)",
                    "Valid passport (6+ months remaining)",
                    "Comprehensive travel health insurance including medical evacuation",
                    "Hepatitis B serology (required for clinical access)",
                    "English proficiency sufficient for clinical communication",
                  ].map((r) => (
                    <div key={r} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />{r}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-slate-400 mb-3">Common questions</p>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">What students ask</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm">Honest answers to the questions every student has before committing to a placement abroad.</p>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className={`bg-white rounded-2xl border transition-all duration-200 ${isOpen ? "border-blue-200 shadow-sm" : "border-slate-100"}`}>
                  <button className="w-full flex items-center justify-between p-5 text-left"
                    onClick={() => setOpenFaq(isOpen ? null : i)}>
                    <span className="font-bold text-slate-900 text-sm pr-4 leading-snug">{faq.q}</span>
                    <div className={`w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0 transition-all ${isOpen ? "bg-blue-600 border-blue-600" : "border-slate-200"}`}>
                      {isOpen ? <ChevronUp className="h-3.5 w-3.5 text-white" /> : <ChevronDown className="h-3.5 w-3.5 text-slate-400" />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-bold tracking-[0.22em] uppercase text-blue-400 mb-4">Apply now</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Begin your clinical elective in Nepal.
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto text-sm">
            Applications reviewed within 48 hours. Named supervisor and hospital confirmation within 5 working days.
            Placement confirmation letter suitable for your university elective approval form provided before you book.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button onClick={() => setCurrentPage("application")}
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-extrabold text-base shadow-xl transition-colors">
              Apply for a Placement <ArrowRight className="h-5 w-5" />
            </button>
            <button onClick={() => setCurrentPage("contact")}
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-base ring-1 ring-white/20 hover:bg-white/15 transition-colors">
              Talk to a Coordinator
            </button>
          </div>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {[
              { Icon: Clock,       text: "48-hour application review" },
              { Icon: ShieldCheck, text: "NMC-verified supervisors" },
              { Icon: BookOpen,    text: "University elective credit accepted" },
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

export default MedicalElectivePage;
