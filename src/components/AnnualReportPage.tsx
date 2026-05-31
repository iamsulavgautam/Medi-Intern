import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, CheckCircle, Users, Heart, Award, Globe, BookOpen, MapPin,
  GraduationCap, FlaskConical, ShieldCheck, ClipboardList, Leaf,
  type LucideIcon,
} from "lucide-react";

interface AnnualReportPageProps {
  setCurrentPage: (page: string) => void;
}

const YEAR = "2025";

const KEY_METRICS = [
  { value: "127",    label: "Students Placed",           delta: "+31% vs 2024", icon: Users,    color: "bg-blue-600" },
  { value: "30+",    label: "Countries Represented",     delta: "Consistent",   icon: Globe,    color: "bg-indigo-600" },
  { value: "10,847", label: "Clinical Hours Logged",     delta: "+42% vs 2024", icon: Award,    color: "bg-violet-600" },
  { value: "2,614",  label: "Procedures Observed",       delta: "+38% vs 2024", icon: Heart,    color: "bg-blue-700" },
  { value: "98%",    label: "Recommendation Rate",       delta: "↑ from 96%",   icon: CheckCircle, color: "bg-emerald-600" },
  { value: "25",     label: "Community Health Camps",    delta: "+5 vs 2024",   icon: MapPin,   color: "bg-teal-600" },
  { value: "4,500+", label: "Community Patients Reached",delta: "New metric",   icon: Heart,    color: "bg-green-600" },
  { value: "3",      label: "Research Papers Co-authored",delta: "New metric",  icon: BookOpen, color: "bg-amber-600" },
];

const HOSPITAL_BREAKDOWN = [
  { hospital: "TUTH",                  students: 54, pct: 43 },
  { hospital: "Bir Hospital",          students: 31, pct: 24 },
  { hospital: "Paropakar Maternity",   students: 22, pct: 17 },
  { hospital: "Kanti Children's",      students: 14, pct: 11 },
  { hospital: "Other / Community",     students:  6, pct:  5 },
];

const SPECIALTY_BREAKDOWN = [
  { specialty: "Medical Elective",   count: 48, pct: 38, color: "bg-blue-500" },
  { specialty: "Surgery",            count: 31, pct: 24, color: "bg-violet-500" },
  { specialty: "Nursing / Midwifery",count: 22, pct: 17, color: "bg-emerald-500" },
  { specialty: "Dental",             count: 12, pct:  9, color: "bg-amber-500" },
  { specialty: "Physiotherapy",      count:  8, pct:  6, color: "bg-sky-500" },
  { specialty: "Paramedical",        count:  6, pct:  5, color: "bg-rose-500" },
];

const COUNTRY_HIGHLIGHTS = [
  { flag: "🇨🇿", country: "Czech Republic", count: 34 },
  { flag: "🇬🇧", country: "United Kingdom", count: 22 },
  { flag: "🇩🇪", country: "Germany",        count: 19 },
  { flag: "🇸🇰", country: "Slovakia",       count: 16 },
  { flag: "🇦🇺", country: "Australia",      count: 11 },
  { flag: "🇺🇸", country: "United States",  count:  9 },
  { flag: "🇸🇪", country: "Sweden",         count:  7 },
  { flag: "🇳🇱", country: "Netherlands",    count:  5 },
  { flag: "Other", country: "Other (22 countries)", count: 4 },
];

const IMPACT_HIGHLIGHTS = [
  { title: "First institutional MoU signed",    desc: "Partnership agreement signed with a Central European medical school — cohort placements begin 2026.",    Icon: GraduationCap, iconBg: "bg-blue-50",    iconClr: "text-blue-600"    },
  { title: "Rural health camps expanded",        desc: "25 mobile health camps run this year, serving 4,500+ patients in 8 rural districts of the Bagmati and Gandaki provinces.", Icon: MapPin,       iconBg: "bg-green-50",   iconClr: "text-green-600"   },
  { title: "Research output initiated",          desc: "3 co-authored case reports submitted with student co-authorship to peer-reviewed global health journals.",  Icon: FlaskConical,  iconBg: "bg-violet-50",  iconClr: "text-violet-600"  },
  { title: "Supervisor verification launched",   desc: "All supervisors now listed with verifiable NMC registration numbers and direct links to nmc.org.np public register.", Icon: ShieldCheck,  iconBg: "bg-emerald-50", iconClr: "text-emerald-600" },
  { title: "MyElective portal launched",         desc: "Students now track preparation progress, access visa guidance, and communicate with coordinators via dedicated portal.", Icon: ClipboardList, iconBg: "bg-sky-50",    iconClr: "text-sky-600"     },
  { title: "Wellness programme formalised",      desc: "Spiritual & Wellness pillar launched with 6 structured programmes — Ayurveda, yoga retreat, Himalayan trek and more.", Icon: Leaf,          iconBg: "bg-teal-50",   iconClr: "text-teal-600"    },
];

const AnnualReportPage: React.FC<AnnualReportPageProps> = ({ setCurrentPage }) => (
  <div className="min-h-screen bg-white">

    {/* ── COVER ───────────────────────────────────────────────────────────── */}
    <section className="relative overflow-hidden bg-slate-900 text-white py-24 lg:py-32">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/gallery/3.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }} />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/80 to-slate-900" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <img src="/logo.jpg" alt="Medical Exchange Nepal" className="h-12 w-12 rounded-full object-cover ring-2 ring-white/20" />
            <div>
              <p className="font-black text-white text-lg">Medical Exchange Nepal</p>
              <p className="text-blue-300 text-sm">Annual Impact Report</p>
            </div>
          </div>
          <h1 className="text-6xl sm:text-7xl font-black leading-[0.98] mb-6">
            {YEAR}<br />
            <span className="text-blue-400">Impact</span><br />
            Report
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-xl">
            A full account of every student placed, every community served, every clinical hour logged, and every life changed through Nepal's most trusted medical exchange programme.
          </p>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => setCurrentPage("contact")}
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-7 py-3.5 rounded-xl font-bold hover:bg-blue-50 transition-all hover:scale-[1.02] shadow-lg">
              Download PDF Version <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => setCurrentPage("for-universities")}
              className="inline-flex items-center gap-2 bg-white/10 ring-1 ring-white/20 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-white/20 transition-all">
              University Partnership Info
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* ── KEY METRICS ─────────────────────────────────────────────────────── */}
    <section className="py-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-5 h-px bg-blue-500" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-600">{YEAR} in Numbers</span>
            <div className="w-5 h-px bg-blue-500" />
          </div>
          <h2 className="text-4xl font-black text-slate-900">By the Numbers</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {KEY_METRICS.map(({ value, label, delta, icon: Icon, color }, i) => (
            <motion.div key={label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow p-6 text-center">
              <div className={`w-11 h-11 ${color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow`}>
                <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
              </div>
              <p className="text-3xl font-black text-slate-900 leading-none mb-1">{value}</p>
              <p className="text-sm text-slate-600 font-medium mb-2">{label}</p>
              <p className="text-xs text-emerald-600 font-semibold">{delta}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── HOSPITAL + SPECIALTY BREAKDOWN ──────────────────────────────────── */}
    <section className="py-20 bg-gray-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* Hospital breakdown */}
          <div>
            <h3 className="text-2xl font-black text-slate-900 mb-8">Placements by Hospital</h3>
            <div className="space-y-4">
              {HOSPITAL_BREAKDOWN.map(({ hospital, students, pct }) => (
                <div key={hospital}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-bold text-slate-700">{hospital}</span>
                    <span className="text-sm font-black text-slate-900">{students} students ({pct}%)</span>
                  </div>
                  <div className="h-2.5 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${pct}%` }} viewport={{ once: true }} transition={{ duration: 0.7, ease: "easeOut" }}
                      className="h-full bg-blue-600 rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Specialty breakdown */}
          <div>
            <h3 className="text-2xl font-black text-slate-900 mb-8">Placements by Specialty</h3>
            <div className="space-y-4">
              {SPECIALTY_BREAKDOWN.map(({ specialty, count, pct, color }) => (
                <div key={specialty}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-bold text-slate-700">{specialty}</span>
                    <span className="text-sm font-black text-slate-900">{count} ({pct}%)</span>
                  </div>
                  <div className="h-2.5 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${pct}%` }} viewport={{ once: true }} transition={{ duration: 0.7, ease: "easeOut" }}
                      className={`h-full ${color} rounded-full`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── COUNTRIES ───────────────────────────────────────────────────────── */}
    <section className="py-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-slate-900 mb-3">30+ Countries. One Destination.</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Students arrived from every inhabited continent. The top 8 source countries accounted for 84% of all placements.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {COUNTRY_HIGHLIGHTS.map(({ flag, country, count }) => (
            <div key={country} className="bg-gray-50 rounded-2xl p-5 text-center border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-colors">
              <span className="text-3xl">{flag}</span>
              <p className="font-black text-slate-900 text-sm mt-2">{country}</p>
              <p className="text-2xl font-black text-blue-600 mt-1">{count}</p>
              <p className="text-xs text-slate-400">students</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── PROGRAMME HIGHLIGHTS ────────────────────────────────────────────── */}
    <section className="py-20 bg-gray-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-5 h-px bg-blue-500" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-600">Programme Development</span>
            <div className="w-5 h-px bg-blue-500" />
          </div>
          <h2 className="text-4xl font-black text-slate-900">{YEAR} Highlights</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(IMPACT_HIGHLIGHTS as { title: string; desc: string; Icon: LucideIcon; iconBg: string; iconClr: string }[]).map(({ title, desc, Icon, iconBg, iconClr }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className={`w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center mb-4`}>
                <Icon className={`h-5 w-5 ${iconClr}`} strokeWidth={1.75} />
              </div>
              <h3 className="font-black text-slate-900 text-base mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── COMMUNITY IMPACT ────────────────────────────────────────────────── */}
    <section className="py-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-5 h-px bg-emerald-500" />
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-emerald-600">Community Impact</span>
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-5">Beyond the Hospital</h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              Clinical placement is only part of what Medical Exchange Nepal does. In {YEAR}, our community health programme directly served rural populations in 8 districts — populations with no permanent primary healthcare access.
            </p>
            <div className="space-y-4">
              {[
                { label: "Community clinics supported",    value: "12" },
                { label: "Patients seen at health camps",  value: "4,500+" },
                { label: "Rural districts covered",        value: "8" },
                { label: "Health camps conducted",         value: "25" },
                { label: "Students who participated",      value: "41 (32%)" },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between py-3 border-b border-slate-100">
                  <span className="text-sm text-slate-600 font-medium">{label}</span>
                  <span className="font-black text-slate-900 text-sm">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 h-[380px]">
            <div className="row-span-2 rounded-2xl overflow-hidden shadow-xl group">
              <img src="/gallery/2.jpeg" alt="Community health camp" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md group">
              <img src="/gallery/6.jpeg" alt="Rural healthcare" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md group">
              <img src="/gallery/4.jpeg" alt="Medical outreach" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── LOOKING AHEAD ───────────────────────────────────────────────────── */}
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-5 h-px bg-blue-300" />
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-300">Looking Ahead</span>
            </div>
            <h2 className="text-4xl font-black mb-5">2026 Targets</h2>
            <p className="text-blue-100 leading-relaxed mb-8">
              Based on confirmed enquiries and the first institutional MoU signed in late 2025, we are projecting significant growth in cohort placements and programme diversity.
            </p>
            <ul className="space-y-3">
              {[
                "200+ student placements (target)",
                "3 university institutional MoUs (from 1)",
                "Hospital partner expansion to 6 institutions",
                "CPD/CME accredited short courses — launch Q2",
                "Executive Wellness Retreat programme — Q1",
                "Annual Impact Report — public release",
              ].map((goal) => (
                <li key={goal} className="flex items-center gap-3 text-sm text-blue-100">
                  <CheckCircle className="h-4 w-4 text-blue-300 flex-shrink-0" strokeWidth={2.5} />
                  {goal}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/10 rounded-3xl p-8 ring-1 ring-white/20">
            <h3 className="font-black text-white text-xl mb-6">Get Involved in 2026</h3>
            <div className="space-y-4">
              {[
                { title: "As a Student",         desc: "Applications open now for rotations from January 2026 onwards.",           cta: "Apply", page: "application" },
                { title: "As a University",       desc: "Institutional MoU discussions welcome. Request a partnership pack.",        cta: "Partner", page: "for-universities" },
                { title: "As a Hospital Partner", desc: "Expand your international training programme. Talk to our clinical team.", cta: "Contact", page: "contact" },
              ].map(({ title, desc, cta, page }) => (
                <div key={title} className="bg-white/10 rounded-2xl p-5">
                  <p className="font-black text-white text-sm mb-1">{title}</p>
                  <p className="text-blue-200 text-xs mb-3">{desc}</p>
                  <button onClick={() => setCurrentPage(page)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg transition-colors">
                    {cta} <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
);

export default AnnualReportPage;
