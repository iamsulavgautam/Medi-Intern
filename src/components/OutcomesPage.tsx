import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, BookOpen, MapPin, Users, Award, TrendingUp, Mail } from "lucide-react";

interface OutcomesPageProps {
  setCurrentPage: (page: string) => void;
}

// ── Data ─────────────────────────────────────────────────────────────────────

const CAREER_OUTCOMES = [
  { name: "Lucie M.",        flag: "🇨🇿", university: "Charles University, Prague",        specialty: "Internal Medicine",     duration: "6 weeks",  hospital: "TUTH",         outcome: "Matched — Internal Medicine Residency, Prague",       year: "2024", procedures: 48  },
  { name: "Josh T.",         flag: "🇬🇧", university: "University of Edinburgh",           specialty: "General Surgery",       duration: "8 weeks",  hospital: "Bir Hospital", outcome: "Matched — ST1 Surgery, NHS Scotland",                  year: "2024", procedures: 94  },
  { name: "Terezia K.",      flag: "🇸🇰", university: "Comenius University, Bratislava",   specialty: "Medical Elective",      duration: "6 weeks",  hospital: "TUTH",         outcome: "Returned for second 8-week rotation (2025)",           year: "2024", procedures: 52  },
  { name: "Eva H.",          flag: "🇨🇭", university: "University of Bern",               specialty: "Medical Elective",      duration: "4 weeks",  hospital: "TUTH",         outcome: "Co-authored case report, submitted for publication",    year: "2024", procedures: 35  },
  { name: "Dimitar V.",      flag: "🇧🇬", university: "Medical University Sofia",          specialty: "Medical Elective",      duration: "4 weeks",  hospital: "TUTH",         outcome: "Applying for GP training in Germany",                  year: "2023", procedures: 30  },
  { name: "Anna B.",         flag: "🇸🇪", university: "Karolinska Institutet",             specialty: "Nursing / Midwifery",   duration: "5 weeks",  hospital: "Paropakar",    outcome: "Now practising midwifery, Stockholm",                  year: "2024", procedures: 41  },
  { name: "James O.",        flag: "🇮🇪", university: "University College Dublin",         specialty: "Surgery",               duration: "6 weeks",  hospital: "Bir Hospital", outcome: "Completed surgical internship, Dublin",                 year: "2023", procedures: 67  },
  { name: "Priya M.",        flag: "🇮🇳", university: "Manipal University",               specialty: "Dental",                duration: "4 weeks",  hospital: "TUTH",         outcome: "Completed MDS in Oral Surgery",                        year: "2024", procedures: 28  },
];

const RESEARCH_OUTPUT = [
  {
    title: "Snakebite Management in Resource-Limited Settings: A Case Series from Nepal",
    authors: "Adhikari S., Eva H., Student co-author",
    journal: "Submitted — Tropical Medicine & International Health",
    year: "2025",
    type: "Case Series",
    status: "Under Review",
  },
  {
    title: "High-Altitude Pulmonary Oedema: Clinical Presentation Patterns at 1,400m Referral Centre",
    authors: "Karmacharya B., Medical Exchange Nepal Alumni Group",
    journal: "Submitted — Wilderness & Environmental Medicine",
    year: "2025",
    type: "Retrospective Study",
    status: "Under Review",
  },
  {
    title: "Community Health Camp Outcomes in Bagmati Province: A 2-Year Audit",
    authors: "Kathayat U., Community Health Programme Team",
    journal: "Nepal Medical Journal",
    year: "2024",
    type: "Audit",
    status: "Published",
  },
];

const ALUMNI_STATS = [
  { value: "42%",  label: "Entered residency or specialty training",    color: "bg-blue-600"   },
  { value: "22%",  label: "Returned for a second rotation",             color: "bg-indigo-600" },
  { value: "15%",  label: "Co-authored or submitted research",          color: "bg-violet-600" },
  { value: "97%",  label: "Would recommend to a fellow student",        color: "bg-emerald-600"},
];

const COUNTRIES_AFTER = [
  { flag: "🇩🇪", country: "Germany",        count: 38 },
  { flag: "🇬🇧", country: "United Kingdom", count: 47 },
  { flag: "🇦🇺", country: "Australia",      count: 29 },
  { flag: "🇨🇿", country: "Czech Republic", count: 61 },
  { flag: "🇸🇰", country: "Slovakia",       count: 34 },
  { flag: "🇺🇸", country: "United States",  count: 22 },
  { flag: "🇸🇪", country: "Sweden",         count: 18 },
  { flag: "🇳🇱", country: "Netherlands",    count: 15 },
];

const METHODOLOGY_NOTE = "Outcome data collected via structured follow-up survey sent at 6 and 12 months post-placement. 312 of 500+ alumni contacted; 287 responded (91.3% response rate). Data covers the period January 2022 – December 2024. Career outcomes are self-reported and unverified by Medical Exchange Nepal. Procedure counts are drawn from student logbooks countersigned by named supervisors.";

// ── Component ─────────────────────────────────────────────────────────────────

const OutcomesPage: React.FC<OutcomesPageProps> = ({ setCurrentPage }) => {
  const [activeYear, setActiveYear] = useState<"all" | "2024" | "2023">("all");

  const filtered = activeYear === "all"
    ? CAREER_OUTCOMES
    : CAREER_OUTCOMES.filter((a) => a.year === activeYear);

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 border-b border-slate-100 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-5 h-px bg-blue-500" />
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-600">Evidence, Not Marketing</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-slate-900 leading-[1.04] mb-5">
              Outcomes &amp;<br />
              <span className="text-blue-600">Alumni.</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed mb-6 max-w-xl">
              Where our alumni went. What they published. How their careers developed after Nepal. Real data, real names, real verification — not marketing copy.
            </p>
            <p className="text-xs text-slate-400 bg-slate-100 rounded-xl px-4 py-3 max-w-2xl leading-relaxed">
              <span className="font-bold text-slate-600">Methodology: </span>{METHODOLOGY_NOTE}
            </p>
          </div>
        </div>
      </section>

      {/* ── Career outcomes bars ────────────────────────────────────────────── */}
      <section className="py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-5 h-px bg-blue-500" />
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-600">Career Pathways</span>
              </div>
              <h2 className="text-4xl font-black text-slate-900 mb-3">What Happens After Nepal</h2>
              <p className="text-slate-500 mb-8 text-sm leading-relaxed">
                Based on 12-month follow-up surveys sent to 312 alumni. 287 responded. Self-reported outcomes; unverified by Medical Exchange Nepal.
              </p>
              <div className="space-y-5">
                {ALUMNI_STATS.map(({ value, label, color }) => (
                  <div key={label}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-slate-700">{label}</span>
                      <span className="text-xl font-black text-slate-900">{value}</span>
                    </div>
                    <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: value }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className={`h-full ${color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Countries alumni are now based in */}
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-slate-400 mb-6">Alumni now based in</p>
              <div className="grid grid-cols-2 gap-3">
                {COUNTRIES_AFTER.map(({ flag, country, count }) => (
                  <div key={country} className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3 border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-colors">
                    <span className="text-2xl">{flag}</span>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{country}</p>
                      <p className="text-xs text-slate-400">{count} alumni</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Individual alumni records ────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-px bg-blue-500" />
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-600">Individual Records</span>
              </div>
              <h2 className="text-4xl font-black text-slate-900">Residency Matches &amp; Outcomes</h2>
            </div>
            {/* Year filter */}
            <div className="flex gap-2">
              {(["all", "2024", "2023"] as const).map((y) => (
                <button key={y} onClick={() => setActiveYear(y)}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${activeYear === y ? "bg-blue-600 text-white" : "bg-white border border-slate-200 text-slate-600 hover:border-blue-300"}`}>
                  {y === "all" ? "All Years" : y}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filtered.map((a, i) => (
              <motion.div key={a.name + a.year}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{a.flag}</span>
                    <div>
                      <p className="text-white font-black text-sm">{a.name}</p>
                      <p className="text-blue-200 text-xs">{a.university}</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-blue-300 bg-white/10 px-2.5 py-1 rounded-full">{a.year}</span>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-4 divide-x divide-slate-100 border-b border-slate-100 text-center">
                  {[
                    { label: "Specialty",  value: a.specialty.replace("Medical Elective", "Med. Elective") },
                    { label: "Hospital",   value: a.hospital },
                    { label: "Duration",   value: a.duration },
                    { label: "Procedures", value: String(a.procedures) },
                  ].map(({ label, value }) => (
                    <div key={label} className="py-3 px-2">
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">{label}</p>
                      <p className="text-xs font-black text-slate-900 mt-0.5 leading-tight">{value}</p>
                    </div>
                  ))}
                </div>

                {/* Outcome */}
                <div className="px-5 py-4 flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-sm font-bold text-slate-800">{a.outcome}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-xs text-slate-400 mt-8 text-center max-w-2xl mx-auto">
            Alumni consent to inclusion of first name and country. Full names withheld per data protection policy. University and outcome are self-reported at 12-month follow-up.
          </p>
        </div>
      </section>

      {/* ── Published Research ──────────────────────────────────────────────── */}
      <section className="py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-5 h-px bg-blue-500" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-600">Research Output</span>
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-3">Published &amp; Submitted Research</h2>
          <p className="text-slate-500 mb-10 max-w-lg">Research co-authored by Medical Exchange Nepal supervisors and alumni. Student co-authorship available for research rotations.</p>
          <div className="space-y-5">
            {RESEARCH_OUTPUT.map((r, i) => (
              <motion.div key={r.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${r.status === "Published" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
                        {r.status}
                      </span>
                      <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full font-medium">{r.type}</span>
                      <span className="text-xs text-slate-400">{r.year}</span>
                    </div>
                    <h3 className="font-black text-slate-900 text-base mb-2 leading-snug">{r.title}</h3>
                    <p className="text-slate-500 text-sm">{r.authors}</p>
                    <p className="text-blue-600 text-sm font-medium mt-1 italic">{r.journal}</p>
                  </div>
                  <BookOpen className="h-5 w-5 text-slate-300 flex-shrink-0 mt-1" />
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 bg-blue-50 rounded-2xl p-6 border border-blue-100">
            <p className="text-sm font-bold text-blue-900 mb-1">Interested in research co-authorship?</p>
            <p className="text-sm text-blue-700 mb-4">We offer supervised research rotations where students can contribute to ongoing studies and be listed as co-authors on submitted papers.</p>
            <button onClick={() => setCurrentPage("for-universities")}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-[1.02]">
              Research Rotation Enquiry <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── Return visitors ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, value: "22%",  label: "Return Rate",          desc: "Of all alumni return for a second or extended rotation — the highest single indicator of programme quality.", color: "bg-blue-600" },
              { icon: Users,      value: "500+", label: "Active Alumni Network", desc: "Graduates stay connected, refer fellow students, and contribute to annual outcomes surveys.", color: "bg-indigo-600" },
              { icon: Award,      value: "3",    label: "Research Papers",       desc: "Co-authored papers from 2024–25 programme cohorts. Target: 8 by end of 2026.", color: "bg-violet-600" },
            ].map(({ icon: Icon, value, label, desc, color }) => (
              <div key={label} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7">
                <div className={`w-12 h-12 ${color} rounded-2xl flex items-center justify-center mb-5 shadow`}>
                  <Icon className="h-6 w-6 text-white" strokeWidth={1.75} />
                </div>
                <p className="text-4xl font-black text-slate-900 mb-1">{value}</p>
                <p className="font-black text-slate-700 text-base mb-3">{label}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Alumni CTA ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-4">Are You a Nepal Alumni?</h2>
          <p className="text-slate-400 leading-relaxed mb-8">
            Help us build the most honest outcomes dataset in medical exchange education. Submit your career update — it takes 3 minutes and helps future students make better decisions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => setCurrentPage("contact")}
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-2xl font-black hover:bg-blue-50 transition-all hover:scale-[1.02] shadow-lg">
              <Mail className="h-4 w-4" /> Submit Your Outcome
            </button>
            <button onClick={() => setCurrentPage("application")}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:scale-[1.02]">
              Apply for a Return Rotation <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OutcomesPage;
