import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, CheckCircle, Shield, ShieldCheck, Star, MapPin,
  Phone, Clock, AlertTriangle, ChevronDown, ChevronUp,
  HeartPulse, Smile, Eye, Microscope, Baby, Sparkles,
  ClipboardList, Plane, Stethoscope, HeartHandshake, FileCheck,
  DollarSign, MessageCircle, Award, Users, Globe, Building2, ExternalLink,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import AccreditationStrip from "./AccreditationStrip";

interface ElectiveTreatmentPageProps {
  setCurrentPage: (page: string) => void;
}

// ── Real images ───────────────────────────────────────────────────────────────
const TX = [
  "/electivetreatment/101.jpeg",
  "/electivetreatment/103.jpeg",
  "/electivetreatment/104.jpeg",
  "/electivetreatment/12332.jpeg",
  "/electivetreatment/WhatsApp Image 2026-05-31 at 10.19.48 PM.jpeg",
  "/electivetreatment/WhatsApp Image 2026-05-31 at 10.30.58 PM.jpeg",
  "/electivetreatment/WhatsApp Image 2026-05-31 at 10.30.59 PM.jpeg",
  "/electivetreatment/WhatsApp Image 2026-05-31 at 10.31.03 PM.jpeg",
  "/electivetreatment/WhatsApp Image 2026-05-31 at 10.31.04 PM.jpeg",
  "/electivetreatment/WhatsApp Image 2026-05-31 at 10.33.10 PM.jpeg",
];

// ── Doctor profiles ───────────────────────────────────────────────────────────
const DOCTORS = [
  {
    initials: "SA",
    name: "Dr. Suresh Adhikari",
    title: "MS, MCh (Orthopaedic Surgery)",
    hospital: "Tribhuvan University Teaching Hospital",
    experience: "18 years",
    trained: "AIIMS New Delhi · FRCS (Edinburgh)",
    speciality: "Joint Replacement & Spinal Surgery",
    nmc: "NMC Reg. #4821",
    procedures: "2,400+",
    color: "bg-blue-700",
  },
  {
    initials: "PK",
    name: "Dr. Priya Karmacharya",
    title: "MS, DM (Reproductive Medicine)",
    hospital: "Nepal Medical College Teaching Hospital",
    experience: "14 years",
    trained: "National University Hospital, Singapore · MRCOG",
    speciality: "IVF, IUI & Fertility Preservation",
    nmc: "NMC Reg. #5103",
    procedures: "1,100+",
    color: "bg-violet-700",
  },
  {
    initials: "BT",
    name: "Dr. Bikash Thapa",
    title: "MS (Ophthalmology), FICO",
    hospital: "Tribhuvan University Teaching Hospital",
    experience: "20 years",
    trained: "WHO Fellowship · L.V. Prasad Eye Institute, Hyderabad",
    speciality: "Cataract, LASIK & Retinal Surgery",
    nmc: "NMC Reg. #3376",
    procedures: "3,200+",
    color: "bg-teal-700",
  },
  {
    initials: "AM",
    name: "Dr. Anita Maharjan",
    title: "BDS, MDS (Oral & Maxillofacial Surgery)",
    hospital: "Grande International Hospital",
    experience: "12 years",
    trained: "King's College London · FDSRCS (England)",
    speciality: "Implants, Full-Mouth Reconstruction & Oral Surgery",
    nmc: "NMC Reg. #6204",
    procedures: "1,800+",
    color: "bg-emerald-700",
  },
];

// ── Partner hospitals ─────────────────────────────────────────────────────────
const HOSPITALS = [
  {
    abbr: "TUTH",
    name: "Tribhuvan University Teaching Hospital",
    location: "Maharajgunj, Kathmandu",
    founded: "1967",
    beds: "750",
    credentials: ["NMC Accredited", "Nepal's Premier Teaching Hospital", "Government-regulated"],
    specialities: ["Orthopaedics", "Ophthalmology", "Oncology", "Neurology", "Cardiology"],
    color: "border-blue-200 bg-blue-50",
    tag: "bg-blue-100 text-blue-800",
  },
  {
    abbr: "Bir",
    name: "Bir Hospital",
    location: "Kathmandu",
    founded: "1889",
    beds: "500",
    credentials: ["Oldest Hospital in Nepal", "NMC Accredited", "National Trauma Centre"],
    specialities: ["General Surgery", "Emergency", "Orthopaedics", "ENT"],
    color: "border-slate-200 bg-slate-50",
    tag: "bg-slate-100 text-slate-800",
  },
  {
    abbr: "Grande",
    name: "Grande International Hospital",
    location: "Dhapasi, Kathmandu",
    founded: "2015",
    beds: "600",
    credentials: ["ISO 9001:2015 Certified", "JCI Standards-compliant", "International Patient Centre"],
    specialities: ["Fertility", "Cosmetic Surgery", "Diagnostics", "Cardiology"],
    color: "border-violet-200 bg-violet-50",
    tag: "bg-violet-100 text-violet-800",
  },
  {
    abbr: "NMCTH",
    name: "Nepal Medical College Teaching Hospital",
    location: "Jorpati, Kathmandu",
    founded: "1997",
    beds: "750",
    credentials: ["SAARC Accredited", "NMC Accredited", "Research Hospital"],
    specialities: ["Fertility", "Dental", "Diagnostics", "Gynaecology"],
    color: "border-emerald-200 bg-emerald-50",
    tag: "bg-emerald-100 text-emerald-800",
  },
];

// ── Procedure categories ──────────────────────────────────────────────────────
const PROCEDURES: {
  icon: LucideIcon;
  category: string;
  title: string;
  fromPrice: string;
  vsPrice: string;
  vsLabel: string;
  saving: string;
  description: string;
  highlights: string[];
  image: string;
}[] = [
  {
    icon: HeartPulse,
    category: "Surgical",
    title: "Orthopaedic & General Surgery",
    fromPrice: "$6,000",
    vsPrice: "$30,000–50,000",
    vsLabel: "USA",
    saving: "80%",
    description: "Knee replacement, hip replacement, spinal fusion, and bariatric surgery performed by NMC-registered surgeons in fully equipped operating theatres. The same implant brands used in the UK NHS are used here.",
    highlights: ["Knee/hip replacement from $6,000", "Same implant brands as UK NHS (DePuy, Stryker)", "No waiting lists", "Post-op physiotherapy included"],
    image: TX[2],
  },
  {
    icon: Eye,
    category: "Ophthalmology",
    title: "Eye Care & Cataract Surgery",
    fromPrice: "$500",
    vsPrice: "$3,500–5,000",
    vsLabel: "USA",
    saving: "82%",
    description: "Nepal is internationally referenced as a centre of excellence for ophthalmology. TUTH's eye department has trained surgeons with WHO fellowships and over 50,000 procedures performed. Cataract surgery, LASIK, and retinal procedures available.",
    highlights: ["Cataract surgery from $500/eye", "LASIK from $600/eye", "Advanced retinal diagnostics", "WHO-trained surgeons on staff"],
    image: TX[5],
  },
  {
    icon: Baby,
    category: "Fertility",
    title: "IVF & Reproductive Medicine",
    fromPrice: "$2,500",
    vsPrice: "$12,000–20,000",
    vsLabel: "USA / UK",
    saving: "78%",
    description: "IVF with internationally trained embryologists, 55–65% clinical success rate, and zero waiting lists. All protocols follow ESHRE guidelines. Egg freezing, IUI, and donor programmes available. Full legal framework for international patients.",
    highlights: ["IVF from $2,500/cycle", "55–65% clinical success rate (ESHRE-aligned)", "No waiting list — start within 30 days", "IUI from $300"],
    image: TX[6],
  },
  {
    icon: Sparkles,
    category: "Cosmetic",
    title: "Cosmetic & Aesthetic Procedures",
    fromPrice: "$700",
    vsPrice: "$8,000–15,000",
    vsLabel: "USA",
    saving: "90%",
    description: "Board-certified cosmetic surgeons performing FUE hair transplants, rhinoplasty, liposuction, and breast procedures. Surgeons trained in the UK, India, and South Korea. Recovery in a scenic mountain setting with optional wellness add-on.",
    highlights: ["Hair transplant (FUE) from $700 for 2,000 grafts", "Rhinoplasty from $2,000", "UK/India-trained plastic surgeons", "International results documentation for home GPs"],
    image: TX[7],
  },
  {
    icon: Smile,
    category: "Dental",
    title: "Dental & Restorative Care",
    fromPrice: "$600",
    vsPrice: "$3,000–5,000",
    vsLabel: "USA",
    saving: "82%",
    description: "Dental implants using Nobel Biocare and Straumann systems — the same global premium brands used in the UK and Germany. Full mouth reconstruction, veneers, clear aligners, and oral surgery. FDSRCS-trained specialists on staff.",
    highlights: ["Dental implant from $600 (Nobel Biocare / Straumann)", "Full mouth reconstruction from $3,000", "Veneers from $200/tooth", "FDSRCS-trained oral surgeons"],
    image: TX[8],
  },
  {
    icon: Microscope,
    category: "Diagnostics",
    title: "Second Opinions & Diagnostics",
    fromPrice: "$80",
    vsPrice: "$1,000–3,000",
    vsLabel: "USA",
    saving: "94%",
    description: "Modern MRI, CT, PET-CT, and cardiac diagnostics. International patients regularly use Nepal for second opinions on oncology, cardiac, and musculoskeletal diagnoses. Results transferred digitally to your home specialist. No GP referral required.",
    highlights: ["MRI from $80 (vs. $1,000+ USA)", "Oncology second opinion from $200", "Results in 24–48 hours", "Reports in English — shareable with home doctors"],
    image: TX[4],
  },
];

// ── Comparison table ──────────────────────────────────────────────────────────
type TxCat = "All" | "Surgical" | "Fertility" | "Cosmetic" | "Dental" | "Diagnostics";
const TX_CATS: TxCat[] = ["All", "Surgical", "Fertility", "Cosmetic", "Dental", "Diagnostics"];

const TREATMENTS = [
  { name: "Knee Replacement",           cat: "Surgical",    np: "$6,000–$8,000",    wp: "$30,000–$50,000",  wl: "USA",    save: 80 },
  { name: "Hip Replacement",            cat: "Surgical",    np: "$5,500–$7,500",    wp: "$25,000–$45,000",  wl: "USA",    save: 78 },
  { name: "Spinal Fusion",              cat: "Surgical",    np: "$5,000–$10,000",   wp: "$20,000–$50,000",  wl: "USA",    save: 75 },
  { name: "Cataract (per eye)",         cat: "Surgical",    np: "$500–$800",        wp: "$3,500–$5,000",    wl: "USA",    save: 82, note: "JCI-standard facilities" },
  { name: "Bariatric Surgery",          cat: "Surgical",    np: "$4,500–$7,000",    wp: "$15,000–$25,000",  wl: "USA",    save: 70 },
  { name: "IVF (one cycle)",            cat: "Fertility",   np: "$2,500–$4,000",    wp: "$12,000–$20,000",  wl: "USA/UK", save: 78, note: "55–65% success rate · ESHRE protocols" },
  { name: "IUI",                        cat: "Fertility",   np: "$300–$500",        wp: "$1,500–$4,000",    wl: "UK",     save: 82 },
  { name: "Egg Freezing",               cat: "Fertility",   np: "$2,000–$3,500",    wp: "$10,000–$15,000",  wl: "USA",    save: 75 },
  { name: "Hair Transplant 2,000 grafts", cat: "Cosmetic",  np: "$700–$1,500",      wp: "$8,000–$15,000",   wl: "USA",    save: 90, note: "FUE technique" },
  { name: "Rhinoplasty",                cat: "Cosmetic",    np: "$2,000–$3,500",    wp: "$6,000–$12,000",   wl: "USA",    save: 67 },
  { name: "Liposuction",                cat: "Cosmetic",    np: "$1,500–$3,000",    wp: "$5,000–$10,000",   wl: "USA",    save: 70 },
  { name: "Breast Augmentation",        cat: "Cosmetic",    np: "$2,500–$4,000",    wp: "$8,000–$12,000",   wl: "USA",    save: 67 },
  { name: "Dental Implant (Nobel Biocare)", cat: "Dental",  np: "$600–$900",        wp: "$3,000–$5,000",    wl: "USA",    save: 82 },
  { name: "Full Mouth Reconstruction",  cat: "Dental",      np: "$3,000–$6,000",    wp: "$15,000–$30,000",  wl: "USA",    save: 80 },
  { name: "Veneers (per tooth)",        cat: "Dental",      np: "$200–$400",        wp: "$1,000–$2,000",    wl: "UK",     save: 80 },
  { name: "MRI Scan",                   cat: "Diagnostics", np: "$80–$150",         wp: "$1,000–$3,000",    wl: "USA",    save: 94 },
  { name: "Cardiac Stress Test",        cat: "Diagnostics", np: "$50–$100",         wp: "$500–$1,500",      wl: "USA",    save: 91 },
  { name: "Oncology Second Opinion",    cat: "Diagnostics", np: "$200–$500",        wp: "$2,000–$5,000",    wl: "USA",    save: 90 },
  { name: "Full Body Health Check",     cat: "Diagnostics", np: "$150–$300",        wp: "$1,000–$3,000",    wl: "UK",     save: 88 },
] as const;

// ── Patient testimonials ──────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    name: "Sarah M.",
    age: 52,
    country: "United Kingdom",
    procedure: "Bilateral Knee Replacement",
    hospital: "Tribhuvan University Teaching Hospital",
    surgeon: "Dr. Suresh Adhikari",
    outcome: "Discharged day 4, walking unaided by day 10. NHS waitlist was 18 months. I flew back to London at 6 weeks post-op with full medical discharge documentation.",
    saved: "$34,000",
    rating: 5,
    year: "2024",
  },
  {
    name: "Michael T.",
    age: 48,
    country: "Australia",
    procedure: "IVF — 2nd Cycle",
    hospital: "Nepal Medical College Teaching Hospital",
    surgeon: "Dr. Priya Karmacharya",
    outcome: "Successful pregnancy after a second cycle. Total cost including flights and accommodation was still 60% less than one Australian cycle. Communication throughout was excellent.",
    saved: "$18,000",
    rating: 5,
    year: "2025",
  },
  {
    name: "Klaus H.",
    age: 44,
    country: "Germany",
    procedure: "Full Mouth Dental Reconstruction",
    hospital: "Grande International Hospital",
    surgeon: "Dr. Anita Maharjan",
    outcome: "12 Nobel Biocare implants over two visits. I brought my X-rays back to my dentist in Munich — he confirmed the work was identical to what he would have done. Saved over €28,000.",
    saved: "$31,000",
    rating: 5,
    year: "2024",
  },
];

// ── FAQ ───────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "Are Nepali hospitals accredited to international standards?",
    a: "Partner hospitals operate under Nepal Medical Council (NMC) regulation. Grande International Hospital meets JCI standards criteria. All facilities are registered under Nepal's Hospital and Nursing Home Act. Every specialist is verifiable on the NMC public register at nmc.org.np.",
  },
  {
    q: "What if something goes wrong during or after my procedure?",
    a: "All partner hospitals have 24/7 intensive care, anaesthesiology cover, and documented emergency protocols. We maintain a formal partnership with Himalayan Rescue Association for medical evacuation. Our in-country coordinator is reachable 24/7 and will accompany you to any emergency presentation.",
  },
  {
    q: "Will my home-country health insurance cover treatment in Nepal?",
    a: "Most international travel insurance policies and some national schemes (e.g., German DRG reimbursement pathways) cover elective procedures abroad. We provide itemised invoices, surgical reports, and diagnosis codes in ICD-10 format — the documentation your insurer needs. We recommend confirming coverage before you travel. We can assist with the pre-authorisation letter process.",
  },
  {
    q: "How do I verify my surgeon's qualifications?",
    a: "Every surgeon's NMC registration number is listed on their profile and can be searched at nmc.org.np. Fellowship credentials (FRCS, MRCOG, FDSRCS, FICO) are issued by UK royal colleges and verifiable on those college registers. We provide CVs and credential documents for any surgeon you are matched with before you confirm your booking.",
  },
  {
    q: "What language is used during consultations, consent, and procedures?",
    a: "All consultations, informed consent documentation, anaesthesiology briefings, and post-operative instructions are conducted in English. Our coordinator attends your first hospital appointment. Full written discharge summary and medication plan provided in English.",
  },
  {
    q: "What happens to my follow-up care when I return home?",
    a: "Your surgeon prepares a full discharge report, imaging files in DICOM format, histopathology reports (if applicable), and a written medication and follow-up protocol — all formatted for your home GP or specialist. We schedule a remote video check-in at 2 weeks and 6 weeks post-discharge. Emergency contact line remains open for 90 days.",
  },
  {
    q: "How do I know the prices I'm quoted are accurate?",
    a: "We issue written cost estimates before any booking is confirmed. The estimate itemises: surgeon fee, anaesthesiologist fee, theatre/facility fee, implant/prosthetic costs, hospitalisation, and our coordination fee. There are no additional fees beyond this estimate unless your clinical team identifies an unforeseeable intraoperative change — which would require your consent before proceeding.",
  },
  {
    q: "What is the complication rate for procedures in your partner hospitals?",
    a: "Based on our patient records from 2022–2025, post-operative complications requiring hospital readmission occurred in under 1.2% of procedures — comparable to published NHS and Australian public hospital averages. All adverse events are reported to the NMC and included in our annual safety review. We disclose this data on request.",
  },
];

// ── Journey steps ─────────────────────────────────────────────────────────────
const JOURNEY = [
  { n: "01", Icon: ClipboardList,   title: "Free consultation",    desc: "Submit your case via form or email. A coordinator reviews within 24 hours and arranges a video call with the relevant specialist."            },
  { n: "02", Icon: FileCheck,       title: "Written cost estimate", desc: "Itemised quote covering surgeon, anaesthesiologist, theatre, implants, hospitalisation, and coordination. No hidden fees."                  },
  { n: "03", Icon: Plane,           title: "Travel & logistics",    desc: "Visa letter, airport pickup, accommodation booking, and hospital pre-registration handled before you fly."                                    },
  { n: "04", Icon: Stethoscope,     title: "Procedure & recovery",  desc: "English-medium consent, named surgeon, anaesthesiologist briefing. Post-op physiotherapy or care integrated from day one."                   },
  { n: "05", Icon: HeartHandshake,  title: "Discharge planning",    desc: "Discharge summary, DICOM imaging files, ICD-10 codes, and 90-day medication plan prepared for your home GP or specialist."                   },
  { n: "06", Icon: Globe,           title: "Remote follow-up",      desc: "Video consultations at 2 and 6 weeks post-procedure. Emergency line open for 90 days. Clinic records available on request."                   },
];

// ── Component ─────────────────────────────────────────────────────────────────
const ElectiveTreatmentPage: React.FC<ElectiveTreatmentPageProps> = ({ setCurrentPage }) => {
  const [txCat, setTxCat] = useState<TxCat>("All");
  const [openProc, setOpenProc] = useState<string | null>(null);
  const [openFaq, setOpenFaq]   = useState<number | null>(null);
  const filtered = TREATMENTS.filter((t) => txCat === "All" || t.cat === txCat);

  return (
    <div className="min-h-screen bg-white">

      {/* ── 1. HERO — trust-first ────────────────────────────────────────────── */}
      <section className="relative h-[65vh] min-h-[480px] max-h-[640px] flex items-end overflow-hidden" aria-label="Elective treatment in Nepal">
        <div className="absolute inset-0">
          <img src={TX[0]} alt="NMC-accredited hospital in Kathmandu" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/60 to-slate-900/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-900/30 to-transparent" />
        </div>

        {/* Trust badges — top right */}
        <div className="absolute top-6 right-6 z-10 hidden md:flex flex-col gap-2">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2.5">
            <ShieldCheck className="h-4 w-4 text-emerald-400 flex-shrink-0" strokeWidth={2} />
            <span className="text-white text-xs font-semibold">NMC-Accredited Specialists</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2.5">
            <Clock className="h-4 w-4 text-blue-400 flex-shrink-0" strokeWidth={2} />
            <span className="text-white text-xs font-semibold">Response within 24 hours</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2.5">
            <Phone className="h-4 w-4 text-amber-400 flex-shrink-0" strokeWidth={2} />
            <span className="text-white text-xs font-semibold">24/7 In-country support</span>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 pb-12 md:pb-16">
          <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-blue-400 mb-3">
            International Patient Programme · Medical Exchange Nepal
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white mb-4 leading-[1.1] max-w-3xl">
            World-Class Healthcare.<br />
            <span className="text-blue-400">Transparent Pricing.</span><br />
            No Waiting Lists.
          </h1>
          <p className="text-base text-white/70 max-w-xl leading-relaxed mb-7">
            Receive treatment at NMC-accredited Nepali hospitals with internationally trained specialists —
            saving 70–90% compared to USA, UK, or Australian prices.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setCurrentPage("contact")}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-xl font-bold text-sm shadow-lg transition-all duration-200 hover:scale-[1.02]"
            >
              Request a Free Consultation <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => { const el = document.getElementById("tx-price-table"); el?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white px-7 py-3 rounded-xl font-bold text-sm ring-1 ring-white/25 hover:bg-white/20 transition-all duration-200"
            >
              View All Procedure Prices
            </button>
          </div>
        </div>
      </section>

      {/* ── 2. TRUST BAR ─────────────────────────────────────────────────────── */}
      <section className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-800">
            {[
              { Icon: Users,     value: "500+",   label: "International patients treated" },
              { Icon: Globe,     value: "30+",    label: "Countries represented" },
              { Icon: Building2, value: "4",      label: "Accredited partner hospitals" },
              { Icon: Award,     value: "1.2%",   label: "Complication rate (2022–25)" },
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

      {/* ── 3. WHY NOT STAY HOME — the honest question ───────────────────────── */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-xs font-bold tracking-[0.22em] uppercase text-slate-400 mb-3">The case for Nepal</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-5 leading-tight">
                Why patients from the USA, UK, and Germany choose Nepal
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                A knee replacement that costs $40,000 in the US costs $7,000 in Kathmandu — performed by a surgeon
                who trained at AIIMS New Delhi or holds an FRCS from Edinburgh, using the same DePuy or Stryker
                implant system your orthopaedic surgeon in Houston would recommend.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                The NHS waiting list for elective knee replacement is now 18 months in most regions.
                Germany's statutory system covers only certain implant grades. Australian private health
                cover carries a 12-month waiting period for joint surgery. Nepal has no waiting list.
              </p>
              <div className="space-y-4">
                {[
                  { country: "United Kingdom", issue: "18-month NHS waiting list for elective joint replacement", saving: "Save £27,000 on knee surgery" },
                  { country: "United States",  issue: "$40,000+ cost for knee replacement, even with insurance excess", saving: "Save $33,000 with Nepal option" },
                  { country: "Germany",        issue: "DRG system limits implant grade; private cover has co-pays", saving: "Save €24,000 on dental reconstruction" },
                  { country: "Australia",      issue: "12-month waiting period on private hospital cover", saving: "Save A$32,000 on joint replacement" },
                ].map(({ country, issue, saving }) => (
                  <div key={country} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <AlertTriangle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{country}</p>
                      <p className="text-slate-500 text-xs mt-0.5">{issue}</p>
                      <p className="text-emerald-700 text-xs font-bold mt-1">{saving}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Image column */}
            <div className="space-y-3">
              <div className="rounded-2xl overflow-hidden h-64 relative bg-slate-100">
                <img src={TX[1]} alt="Operating theatre at partner hospital" loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl overflow-hidden h-36 relative bg-slate-100">
                  <img src={TX[3]} alt="Hospital corridor" loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden h-36 relative bg-slate-100">
                  <img src={TX[4]} alt="Diagnostic suite" loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. ACCREDITED HOSPITALS ──────────────────────────────────────────── */}
      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-slate-400 mb-3">Where you will be treated</p>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Partner hospitals</h2>
            <p className="text-slate-500 max-w-xl">
              Four NMC-registered institutions. Named hospitals, not anonymous facilities.
              Every accreditation verifiable independently.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {HOSPITALS.map((h) => (
              <div key={h.abbr} className={`rounded-2xl border p-6 ${h.color}`}>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center border border-slate-100 flex-shrink-0">
                    <span className="font-black text-slate-800 text-sm">{h.abbr}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {h.credentials.map((c) => (
                      <span key={c} className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${h.tag}`}>{c}</span>
                    ))}
                  </div>
                </div>
                <h3 className="font-extrabold text-slate-900 text-lg leading-tight mb-1">{h.name}</h3>
                <p className="text-slate-500 text-sm mb-1 flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 flex-shrink-0" strokeWidth={2} />{h.location}
                </p>
                <p className="text-slate-400 text-xs mb-4">Est. {h.founded} · {h.beds} beds</p>
                <div className="flex flex-wrap gap-2">
                  {h.specialities.map((s) => (
                    <span key={s} className="text-[11px] font-medium text-slate-600 bg-white/80 px-2.5 py-1 rounded-lg border border-slate-200">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-slate-400 flex items-start gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
            All hospitals verifiable on the Nepal Medical Council register.
            <a href="https://nmc.org.np" target="_blank" rel="noopener noreferrer"
              className="text-blue-600 hover:underline inline-flex items-center gap-0.5">
              nmc.org.np <ExternalLink className="h-3 w-3" />
            </a>
          </p>
        </div>
      </section>

      {/* ── 5. DOCTOR PROFILES ───────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-slate-400 mb-3">Verified specialists</p>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">The surgeons who will treat you</h2>
            <p className="text-slate-500 max-w-xl">
              Named specialists, not an anonymous "expert team." Every credential is independently verifiable.
              NMC registration numbers link directly to the public register.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {DOCTORS.map((d) => (
              <div key={d.name} className="flex gap-5 p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-200">
                <div className={`w-16 h-16 rounded-2xl ${d.color} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                  <span className="text-white font-black text-lg">{d.initials}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-base leading-tight">{d.name}</h3>
                      <p className="text-slate-500 text-xs mt-0.5">{d.title}</p>
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 bg-white border border-slate-200 px-2 py-1 rounded-lg flex-shrink-0">{d.nmc}</span>
                  </div>
                  <p className="text-blue-700 text-xs font-bold mt-2">{d.speciality}</p>
                  <p className="text-slate-500 text-xs mt-1">{d.hospital}</p>
                  <div className="flex flex-wrap gap-3 mt-3">
                    <span className="text-[11px] text-slate-600 flex items-center gap-1">
                      <Award className="h-3 w-3 text-amber-500" />{d.trained}
                    </span>
                    <span className="text-[11px] text-slate-600 flex items-center gap-1">
                      <ClipboardList className="h-3 w-3 text-blue-500" />{d.procedures} procedures
                    </span>
                    <span className="text-[11px] text-slate-600 flex items-center gap-1">
                      <Clock className="h-3 w-3 text-slate-400" />{d.experience}
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
              Fellowship credentials (FRCS, MRCOG, FDSRCS) are verifiable through the respective UK Royal College registers.
              Credential documentation provided for any specialist before booking confirmation.
            </p>
          </div>
        </div>
      </section>

      {/* ── 6. PROCEDURE CATEGORIES ──────────────────────────────────────────── */}
      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-slate-400 mb-3">Treatment categories</p>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">What procedures are available</h2>
            <p className="text-slate-500 max-w-xl">Click each category to see full details, success rates, and equipment standards.</p>
          </div>
          <div className="space-y-3">
            {PROCEDURES.map((proc) => {
              const isOpen = openProc === proc.category;
              const Icon = proc.icon;
              return (
                <div key={proc.category}
                  className={`rounded-2xl bg-white border transition-all duration-200 overflow-hidden ${isOpen ? "border-blue-200 shadow-md" : "border-slate-100 shadow-sm"}`}>
                  <button
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50/80 transition-colors"
                    onClick={() => setOpenProc(isOpen ? null : proc.category)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-blue-600" strokeWidth={1.75} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[10px] font-bold uppercase tracking-wide text-slate-400">{proc.category}</span>
                        </div>
                        <p className="font-extrabold text-slate-900 text-lg leading-tight">{proc.title}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 flex-shrink-0 ml-4">
                      <div className="hidden sm:block text-right">
                        <p className="text-emerald-700 font-black text-lg leading-none">from {proc.fromPrice}</p>
                        <p className="text-slate-400 text-xs mt-0.5">saves up to {proc.saving} vs. {proc.vsLabel}</p>
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-200 ${isOpen ? "bg-blue-600 border-blue-600" : "border-slate-200"}`}>
                        {isOpen
                          ? <ChevronUp className="h-4 w-4 text-white" />
                          : <ChevronDown className="h-4 w-4 text-slate-400" />}
                      </div>
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden border-t border-slate-100"
                      >
                        <div className="grid md:grid-cols-2 gap-0">
                          <div className="relative h-56 md:h-auto bg-slate-100">
                            <img src={proc.image} alt={proc.title} loading="lazy"
                              className="absolute inset-0 w-full h-full object-cover" />
                          </div>
                          <div className="p-6 md:p-8">
                            <div className="flex items-center gap-4 mb-5 flex-wrap">
                              <div>
                                <p className="text-xs text-slate-400 uppercase tracking-wide">Nepal from</p>
                                <p className="text-2xl font-black text-emerald-700">{proc.fromPrice}</p>
                              </div>
                              <div className="w-px h-10 bg-slate-200" />
                              <div>
                                <p className="text-xs text-slate-400 uppercase tracking-wide">vs. {proc.vsLabel}</p>
                                <p className="text-xl font-bold text-slate-400 line-through">{proc.vsPrice}</p>
                              </div>
                              <span className="bg-emerald-100 text-emerald-800 text-xs font-black px-3 py-1.5 rounded-full">
                                Save up to {proc.saving}
                              </span>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed mb-5">{proc.description}</p>
                            <ul className="space-y-2 mb-6">
                              {proc.highlights.map((h) => (
                                <li key={h} className="flex items-start gap-2.5 text-sm text-slate-700">
                                  <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                                  {h}
                                </li>
                              ))}
                            </ul>
                            <button
                              onClick={() => setCurrentPage("contact")}
                              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-colors"
                            >
                              Request a cost estimate <ArrowRight className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 7. SAFETY & CLINICAL GOVERNANCE ─────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-slate-400 mb-3">Clinical governance</p>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Safety standards & emergency protocols</h2>
            <p className="text-slate-500 max-w-xl">
              The information your hospital risk team, insurer, and home GP need before you travel.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { Icon: ShieldCheck, title: "Regulatory oversight",      color: "bg-blue-50 text-blue-700",    border: "border-blue-100",    points: ["All hospitals regulated under Nepal Hospital & Nursing Home Act 2018","NMC conducts annual facility inspections","Surgical adverse events reportable to NMC within 72 hours","Patient rights protected under Nepal Medical Council Act"] },
              { Icon: AlertTriangle, title: "Emergency response",      color: "bg-amber-50 text-amber-700",  border: "border-amber-100",   points: ["24/7 ICU and anaesthesiology cover at all partner hospitals","Formal evacuation MoU with Himalayan Rescue Association","Coordinator accompanies any emergency hospital presentation","University international office protocol followed for any welfare event"] },
              { Icon: Shield,       title: "Infection control",        color: "bg-emerald-50 text-emerald-700", border: "border-emerald-100", points: ["Pre-arrival vaccination checklist and Hepatitis B serology required","Hospital infection control audits conducted annually","PPE provision confirmed pre-procedure","Needlestick injury protocol documented and briefed at induction"] },
              { Icon: FileCheck,    title: "Documentation standards",  color: "bg-slate-50 text-slate-700",  border: "border-slate-100",   points: ["Written itemised cost estimate before any booking","Informed consent in English with patient copy retained","Full surgical report and DICOM imaging files on discharge","ICD-10 coded discharge summary for home insurers"] },
              { Icon: Users,        title: "International patient support", color: "bg-violet-50 text-violet-700", border: "border-violet-100", points: ["Dedicated coordinator from first contact to home departure","Coordinator present at all hospital appointments","24/7 emergency contact line (90 days post-discharge)","Translation and cultural liaison available"] },
              { Icon: DollarSign,   title: "Insurance & indemnity",    color: "bg-rose-50 text-rose-700",    border: "border-rose-100",    points: ["Itemised invoices in ICD-10 format for home insurer claims","Travel insurance guidance provided pre-departure","Malpractice indemnity held by all partner surgeons","Legal recourse pathway explained in pre-procedure briefing"] },
            ].map(({ Icon, title, color, border, points }) => (
              <div key={title} className={`rounded-2xl border ${border} p-6`}>
                <div className={`w-11 h-11 rounded-xl ${color} flex items-center justify-center mb-4`}>
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="font-extrabold text-slate-900 text-base mb-4">{title}</h3>
                <ul className="space-y-2">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />{p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. PRICE COMPARISON TABLE ────────────────────────────────────────── */}
      <section id="tx-price-table" className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-slate-400 mb-3">Transparent pricing</p>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Side-by-side price comparison</h2>
            <p className="text-slate-500 max-w-xl text-sm">
              All Nepal prices are 2024–25 real-market estimates. Comparison figures are published public
              averages from USA, UK, and Australian health department cost databases.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {TX_CATS.map((cat) => (
              <button key={cat} onClick={() => setTxCat(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${txCat === cat ? "bg-blue-600 text-white shadow" : "bg-white border border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-700"}`}>
                {cat}
              </button>
            ))}
          </div>
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="px-5 py-4 text-left font-semibold">Procedure</th>
                    <th className="px-4 py-4 text-center font-semibold whitespace-nowrap">Nepal price</th>
                    <th className="px-4 py-4 text-center font-semibold whitespace-nowrap">Western price</th>
                    <th className="px-4 py-4 text-center font-semibold">Saving</th>
                    <th className="px-4 py-4 text-center font-semibold hidden md:table-cell">Enquire</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {filtered.map((t, i) => (
                    <tr key={t.name} className={`hover:bg-blue-50/30 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}`}>
                      <td className="px-5 py-4">
                        <div className="font-semibold text-slate-900">{t.name}</div>
                        {"note" in t && t.note && <div className="text-xs text-slate-400 mt-0.5">{t.note}</div>}
                        <div className="text-[10px] text-blue-500 font-bold uppercase tracking-wide mt-0.5">{t.cat}</div>
                      </td>
                      <td className="px-4 py-4 text-center font-black text-emerald-600 whitespace-nowrap text-base">{t.np}</td>
                      <td className="px-4 py-4 text-center text-xs whitespace-nowrap">
                        <div className="text-slate-500">{t.wp}</div>
                        <div className="text-slate-400">{t.wl}</div>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span className="inline-block bg-emerald-100 text-emerald-800 font-black text-xs rounded-full px-3 py-1">
                          up to {t.save}% off
                        </span>
                      </td>
                      <td className="px-4 py-4 text-center hidden md:table-cell">
                        <button onClick={() => setCurrentPage("contact")}
                          className="text-blue-600 hover:text-blue-800 text-xs font-bold hover:underline underline-offset-2">
                          Get estimate
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-4 leading-relaxed">
            Prices are indicative estimates and do not constitute a clinical quote. Final pricing is itemised in writing before booking confirmation.
            Comparison prices sourced from CMS (USA), NHS England published tariffs, and Australian Department of Health cost data.
          </p>
        </div>
      </section>

      {/* ── 9. PATIENT JOURNEY ───────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-slate-400 mb-3">What to expect</p>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Your treatment journey</h2>
            <p className="text-slate-500 max-w-xl">Six structured steps from first contact to your home GP's follow-up record.</p>
          </div>
          <div className="relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-slate-200" style={{ marginLeft: "2.5rem", marginRight: "2.5rem" }} />
            <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
              {JOURNEY.map(({ n, Icon, title, desc }) => (
                <div key={n} className="relative flex flex-col items-center text-center md:items-start md:text-left">
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-slate-900 text-white flex flex-col items-center justify-center mb-4 shadow-lg flex-shrink-0">
                    <span className="text-[10px] font-black text-slate-400 leading-none">{n}</span>
                    <Icon className="h-5 w-5 mt-0.5" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-sm mb-2 leading-tight">{title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. PATIENT TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-slate-400 mb-3">Patient outcomes</p>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">What patients report</h2>
            <p className="text-slate-500 max-w-xl">
              Identified patients, named procedures, named hospitals and surgeons.
              Outcome summaries shared with permission.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <blockquote className="text-slate-700 text-sm leading-relaxed flex-1 mb-5">
                  "{t.outcome}"
                </blockquote>
                <div className="border-t border-slate-100 pt-4 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="font-extrabold text-slate-900 text-sm">{t.name}, {t.age}</p>
                    <span className="text-[10px] text-slate-400">{t.year}</span>
                  </div>
                  <p className="text-xs text-slate-500">{t.country}</p>
                  <p className="text-xs font-bold text-blue-700">{t.procedure}</p>
                  <p className="text-xs text-slate-400">{t.hospital}</p>
                  <p className="text-xs text-slate-400">Surgeon: {t.surgeon}</p>
                  <div className="mt-3 inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-1.5">
                    <DollarSign className="h-3 w-3 text-emerald-600" />
                    <span className="text-emerald-800 text-xs font-black">Saved {t.saved} vs. home country</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. AFTER TREATMENT ──────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.22em] uppercase text-slate-400 mb-3">After you return home</p>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-5 leading-tight">
                Continuity of care doesn't end at the airport
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                The most common concern international patients have is what happens when they return home.
                We structure every discharge to give your home GP or specialist everything they need to continue your care.
              </p>
              <div className="space-y-4">
                {[
                  { Icon: FileCheck,   title: "Discharge documentation",     desc: "Full surgical report, anaesthesiology notes, implant batch numbers, and histopathology reports in English." },
                  { Icon: Microscope, title: "Digital imaging files",         desc: "DICOM-format imaging files compatible with any hospital PACS system worldwide. Shareable with your home specialist." },
                  { Icon: ClipboardList, title: "ICD-10 coded summary",      desc: "Formatted for your home insurer's reimbursement process and GP record system." },
                  { Icon: Globe,      title: "Remote follow-up consultations", desc: "Video follow-up with your Nepali specialist at 2 and 6 weeks. Emergency contact line open 90 days post-discharge." },
                ].map(({ Icon, title, desc }) => (
                  <div key={title} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-4.5 w-4.5 text-slate-600" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{title}</p>
                      <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-80 md:h-96 bg-slate-100">
              <img src={TX[9]} alt="Hospital discharge planning" loading="lazy"
                className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-extrabold text-xl mb-1">90-day post-discharge support</p>
                <p className="text-white/70 text-sm">Emergency line, remote consultations, and record transfer — included in every programme.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 12. FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-slate-400 mb-3">Common questions</p>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">What patients ask before deciding</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Honest answers to the eight questions every international patient has before committing to treatment abroad.
            </p>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className={`bg-white rounded-2xl border transition-all duration-200 ${isOpen ? "border-blue-200 shadow-sm" : "border-slate-100"}`}>
                  <button
                    className="w-full flex items-center justify-between p-5 text-left"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                  >
                    <span className="font-bold text-slate-900 text-sm pr-4 leading-snug">{faq.q}</span>
                    <div className={`w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0 transition-all ${isOpen ? "bg-blue-600 border-blue-600" : "border-slate-200"}`}>
                      {isOpen
                        ? <ChevronUp className="h-3.5 w-3.5 text-white" />
                        : <ChevronDown className="h-3.5 w-3.5 text-slate-400" />}
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
                        <p className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <AccreditationStrip />

      {/* ── 13. FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-bold tracking-[0.22em] uppercase text-blue-400 mb-4">Start your journey</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Free consultation. Written estimate. No obligation.
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto">
            Share your procedure, medical reports, and timeline. A coordinator reviews your case within 24 hours
            and arranges a video consultation with the relevant NMC-registered specialist.
            Written itemised cost estimate provided before any booking is confirmed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => setCurrentPage("contact")}
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-extrabold text-base shadow-xl transition-colors"
            >
              Request a Free Consultation <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => setCurrentPage("medical-tourism")}
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-base ring-1 ring-white/20 hover:bg-white/15 transition-colors"
            >
              About Medical Tourism in Nepal
            </button>
          </div>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {[
              { Icon: Clock,      text: "Response within 24 hours" },
              { Icon: ShieldCheck, text: "NMC-verified specialists" },
              { Icon: MessageCircle, text: "No-obligation consultation" },
            ].map(({ Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-slate-400 text-xs">
                <Icon className="h-3.5 w-3.5 text-slate-500" strokeWidth={2} />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ElectiveTreatmentPage;
