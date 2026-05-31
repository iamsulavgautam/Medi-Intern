import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowRight, Users, Calendar, MapPin, Stethoscope, Clock, ChevronDown, ChevronUp, Sparkles } from "lucide-react";

interface HospitalsPageProps {
  setCurrentPage: (page: string) => void;
}

const HOSPITALS = [
  {
    id: "tuth",
    name: "Tribhuvan University Teaching Hospital",
    abbr: "TUTH",
    location: "Maharajgunj, Kathmandu",
    type: "Tertiary Referral · Government University Hospital",
    established: "1967",
    beds: "770+",
    annualPatients: "400,000+",
    studentCapacity: "10–15 per rotation",
    image: "/gallery/3.jpeg",
    accentColor: "bg-blue-600",
    tagColor: "bg-blue-50 text-blue-700",
    overview: "Nepal's oldest and most prestigious academic medical institution, affiliated with the Institute of Medicine at Tribhuvan University. TUTH is the primary training ground for Nepali doctors and serves as the country's most important tertiary referral centre. International elective students rotate alongside Nepali medical students under named consultant supervision.",
    departments: ["Internal Medicine","General Surgery","Obstetrics & Gynaecology","Paediatrics","Emergency Medicine","Orthopaedics","Psychiatry","Dermatology","Anaesthesiology","Pathology","Radiology"],
    supervisors: [
      { name: "Dr. Binod Karmacharya", dept: "Internal Medicine", reg: "NMC #12047" },
      { name: "Dr. Prakash Poudel",    dept: "Paediatrics",       reg: "NMC #10278" },
    ],
    weeklySchedule: [
      { day: "Mon–Fri", activity: "Morning ward rounds 8:00–10:00am with named supervisor" },
      { day: "Mon–Fri", activity: "Outpatient clinic 10:00am–1:00pm" },
      { day: "Tue/Thu", activity: "Afternoon case presentation teaching (English)" },
      { day: "Wed",     activity: "Grand round / departmental meeting" },
      { day: "Sat",     activity: "Half-day (optional emergency observation)" },
    ],
    highlights: ["Largest clinical case mix in Nepal","MBBS examination centre — academic standard","Direct ward access from day one","Structured logbook assessment"],
    electives: ["Medical Elective","Surgery","Paediatrics","Emergency Medicine","Orthopaedics"],
  },
  {
    id: "bir",
    name: "Bir Hospital",
    abbr: "BIR",
    location: "Mahabouddha, Central Kathmandu",
    type: "Tertiary Government Hospital · Oldest in Nepal",
    established: "1889",
    beds: "455",
    annualPatients: "320,000+",
    studentCapacity: "6–10 per rotation",
    image: "/gallery/1.jpeg",
    accentColor: "bg-violet-600",
    tagColor: "bg-violet-50 text-violet-700",
    overview: "Nepal's oldest hospital, founded in 1889. Bir Hospital serves Central Kathmandu and is known for its high-volume surgical and emergency caseload, including trauma from mountaineering accidents. The surgical wards offer exceptional operative volume, making this the preferred hospital for students seeking surgical exposure.",
    departments: ["General Surgery","Emergency Medicine","Internal Medicine","ENT","Ophthalmology","Urology","Neurosurgery","Dermatology","Orthopedics"],
    supervisors: [
      { name: "Dr. Sushil Adhikari", dept: "General Surgery", reg: "NMC #9823" },
    ],
    weeklySchedule: [
      { day: "Mon–Fri", activity: "Surgical ward rounds 7:30am — high case volume" },
      { day: "Mon/Wed/Fri", activity: "Operating list — 3–8 cases per day" },
      { day: "Tue/Thu", activity: "Pre/post-op assessment and wound rounds" },
      { day: "Daily",   activity: "Emergency surgical take (optional evening)" },
      { day: "Sat",     activity: "Elective surgical list (half-day)" },
    ],
    highlights: ["80–120 procedures observed per 4-week elective","High-volume emergency & trauma surgery","Mountain rescue and altitude trauma cases","Nepal's longest-serving hospital — unique history"],
    electives: ["Surgery","Emergency Medicine","ENT","Ophthalmology"],
  },
  {
    id: "paropakar",
    name: "Paropakar Maternity & Women's Hospital",
    abbr: "PMH",
    location: "Thapathali, Kathmandu",
    type: "Specialist Maternity Hospital · Government",
    established: "1959",
    beds: "220+",
    annualPatients: "15,000+ deliveries/year",
    studentCapacity: "4–6 per rotation",
    image: "/gallery/5.jpeg",
    accentColor: "bg-emerald-600",
    tagColor: "bg-emerald-50 text-emerald-700",
    overview: "Nepal's only dedicated maternity hospital, delivering over 15,000 babies annually — one of the highest-volume maternity centres in South Asia. Students rotating here gain exceptional exposure to normal and complicated deliveries, obstetric emergencies, gynaecological procedures, and neonatal care in a high-throughput real-world setting.",
    departments: ["Obstetrics","Gynaecology","Neonatology","Family Planning","Antenatal Care","Postnatal Care"],
    supervisors: [
      { name: "Dr. Sabita Shrestha", dept: "Obstetrics & Gynaecology", reg: "NMC #14501" },
    ],
    weeklySchedule: [
      { day: "Mon–Fri", activity: "Labour ward rounds 8:00am — 10–20 deliveries/day" },
      { day: "Mon–Fri", activity: "Antenatal / postnatal outpatient clinic" },
      { day: "Tue/Thu", activity: "Gynaecology operating list" },
      { day: "Wed",     activity: "Eclampsia and high-risk obstetric teaching" },
      { day: "Daily",   activity: "Neonatal ward — resuscitation and newborn care" },
    ],
    highlights: ["15,000+ deliveries per year","Live eclampsia and PPH management","Neonatal resuscitation training","Highest obstetric volume in South Asia"],
    electives: ["Nursing / Midwifery","Obstetrics & Gynaecology","Neonatology"],
  },
  {
    id: "kanti",
    name: "Kanti Children's Hospital",
    abbr: "KCH",
    location: "Maharajgunj, Kathmandu",
    type: "National Paediatric Referral Centre · Government",
    established: "1979",
    beds: "320",
    annualPatients: "200,000+",
    studentCapacity: "4–6 per rotation",
    image: "/gallery/7.jpeg",
    accentColor: "bg-amber-600",
    tagColor: "bg-amber-50 text-amber-700",
    overview: "Nepal's only dedicated national children's hospital, serving as the primary paediatric referral centre for the entire country. Students encounter a unique case mix including malnutrition, vaccine-preventable illness, altitude-related paediatric conditions, and neonatal emergencies that are extremely rare in Western teaching hospitals.",
    departments: ["General Paediatrics","PICU","NICU","Paediatric Surgery","Paediatric Cardiology","Paediatric Neurology","Infectious Disease","Nutrition & Rehabilitation"],
    supervisors: [
      { name: "Dr. Prakash Poudel", dept: "Paediatrics", reg: "NMC #10278" },
    ],
    weeklySchedule: [
      { day: "Mon–Fri", activity: "Morning ward rounds across general and acute wards" },
      { day: "Mon/Wed/Fri", activity: "Outpatient clinics — 60–120 patients/day" },
      { day: "Tue/Thu", activity: "PICU teaching and case discussion" },
      { day: "Wed",     activity: "Malnutrition and nutrition rehabilitation ward" },
      { day: "Daily",   activity: "NICU observation (supervised)" },
    ],
    highlights: ["Nepal's only dedicated national children's hospital","Acute malnutrition — very rare in Europe","Altitude-related paediatric illness","Vaccine-preventable disease caseload"],
    electives: ["Medical Elective","Paediatrics","Paediatric Surgery"],
  },
];

const HospitalCard: React.FC<{ hospital: typeof HOSPITALS[0]; onApply: () => void }> = ({ hospital, onApply }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden"
    >
      {/* Image header */}
      <div className="relative h-56 overflow-hidden group">
        <img
          src={hospital.image}
          alt={hospital.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className={`${hospital.accentColor} text-white text-xs font-black px-3 py-1 rounded-full`}>{hospital.abbr}</span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-black text-xl leading-tight">{hospital.name}</h3>
          <p className="text-white/70 text-xs mt-1 flex items-center gap-1">
            <MapPin className="h-3 w-3" /> {hospital.location}
          </p>
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-3 divide-x divide-slate-100 border-b border-slate-100">
        {[
          { label: "Beds",            value: hospital.beds },
          { label: "Annual Patients", value: hospital.annualPatients },
          { label: "Est.",            value: hospital.established },
        ].map(({ label, value }) => (
          <div key={label} className="py-3 text-center">
            <p className="font-black text-slate-900 text-sm">{value}</p>
            <p className="text-xs text-slate-400">{label}</p>
          </div>
        ))}
      </div>

      {/* Body */}
      <div className="p-6">
        <p className="text-xs text-slate-400 font-medium mb-1">{hospital.type}</p>
        <p className="text-slate-600 text-sm leading-relaxed mb-5">{hospital.overview}</p>

        {/* Electives available */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {hospital.electives.map((e) => (
            <span key={e} className={`text-xs font-semibold px-2.5 py-1 rounded-full ${hospital.tagColor}`}>{e}</span>
          ))}
        </div>

        {/* Expand/collapse full details */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors py-2 border-t border-slate-100"
        >
          <span>{open ? "Hide full details" : "View departments, schedule & supervisors"}</span>
          {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>

        {open && (
          <div className="mt-4 space-y-6">
            {/* Departments */}
            <div>
              <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Departments</p>
              <div className="flex flex-wrap gap-1.5">
                {hospital.departments.map((d) => (
                  <span key={d} className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full font-medium">{d}</span>
                ))}
              </div>
            </div>

            {/* Weekly schedule */}
            <div>
              <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Typical Weekly Schedule</p>
              <div className="space-y-2">
                {hospital.weeklySchedule.map(({ day, activity }) => (
                  <div key={day + activity} className="flex gap-3 text-sm">
                    <span className="font-bold text-slate-700 w-24 flex-shrink-0">{day}</span>
                    <span className="text-slate-500">{activity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Supervisors */}
            <div>
              <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Named Supervisors</p>
              <div className="space-y-2">
                {hospital.supervisors.map((s) => (
                  <div key={s.name} className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3">
                    <div className={`w-8 h-8 rounded-lg ${hospital.accentColor} flex items-center justify-center text-white font-black text-xs flex-shrink-0`}>
                      {s.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{s.name}</p>
                      <p className="text-xs text-slate-500">{s.dept} · <span className="font-mono">{s.reg}</span></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div>
              <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Clinical Highlights</p>
              <ul className="space-y-2">
                {hospital.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="px-6 pb-6">
        <button
          onClick={onApply}
          className={`w-full flex items-center justify-center gap-2 py-3 rounded-2xl ${hospital.accentColor} hover:opacity-90 text-white font-bold text-sm transition-all duration-200 hover:scale-[1.02]`}
        >
          Apply for Placement at {hospital.abbr} <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
};

// ── Interactive Hospital Matcher ─────────────────────────────────────────────
const MATCH_RULES: Record<string, Record<string, string[]>> = {
  "Internal Medicine":     { any: ["TUTH"] },
  "Surgery":               { any: ["Bir Hospital", "TUTH"] },
  "Obstetrics & Midwifery":{ any: ["Paropakar Maternity"] },
  "Paediatrics":           { any: ["Kanti Children's"] },
  "Emergency Medicine":    { any: ["Bir Hospital", "TUTH"] },
  "Dental":                { any: ["TUTH"] },
  "Community Medicine":    { any: ["TUTH", "Kanti Children's"] },
  "Physiotherapy":         { any: ["TUTH"] },
};

const SUPERVISOR_MAP: Record<string, string> = {
  "TUTH":               "Dr. Binod Karmacharya / Dr. Prakash Poudel",
  "Bir Hospital":       "Dr. Sushil Adhikari",
  "Paropakar Maternity":"Dr. Sabita Shrestha",
  "Kanti Children's":   "Dr. Prakash Poudel",
};

const HOSPITAL_NOTES: Record<string, string> = {
  "TUTH":               "Nepal's premier academic hospital. Highest case mix and strongest research integration.",
  "Bir Hospital":       "Best for surgical volume. 80–120 operative procedures per 4-week rotation.",
  "Paropakar Maternity":"15,000+ deliveries/year. Unmatched obstetric volume in South Asia.",
  "Kanti Children's":   "Nepal's only national children's hospital. Unique paediatric case mix.",
};

const HospitalMatcher: React.FC<{ onApply: () => void }> = ({ onApply }) => {
  const [specialty, setSpecialty] = useState("");
  const [duration,  setDuration]  = useState("");
  const [level,     setLevel]     = useState("");
  const [done,      setDone]      = useState(false);

  const recommendations = useMemo(() => {
    if (!specialty) return [];
    const rule = MATCH_RULES[specialty] ?? { any: ["TUTH"] };
    return rule.any ?? [];
  }, [specialty]);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-5">
            <Sparkles className="h-4 w-4 text-blue-300" />
            <span className="text-xs font-bold tracking-widest uppercase text-blue-200">Hospital Matching Tool</span>
          </div>
          <h2 className="text-4xl font-black mb-4">Find Your Perfect Hospital</h2>
          <p className="text-blue-200 max-w-lg mx-auto">Answer three questions and we'll recommend the right hospital, supervisor, and expected clinical exposure for your elective.</p>
        </div>

        {!done ? (
          <div className="bg-white/10 backdrop-blur rounded-3xl p-8 ring-1 ring-white/20">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {/* Specialty */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-blue-200 mb-3">1. Specialty</label>
                <div className="space-y-2">
                  {Object.keys(MATCH_RULES).map((s) => (
                    <button key={s} onClick={() => setSpecialty(s)}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${specialty === s ? "bg-white text-blue-700 shadow" : "bg-white/10 text-white hover:bg-white/20"}`}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-blue-200 mb-3">2. Duration</label>
                <div className="space-y-2">
                  {["4 weeks", "6 weeks", "8 weeks", "10–12 weeks", "14–20 weeks"].map((d) => (
                    <button key={d} onClick={() => setDuration(d)}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${duration === d ? "bg-white text-blue-700 shadow" : "bg-white/10 text-white hover:bg-white/20"}`}>
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Level */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-blue-200 mb-3">3. Experience Level</label>
                <div className="space-y-2">
                  {["Pre-clinical (Yr 1–2)", "Clinical student (Yr 3–5)", "Final year / Elective", "Junior doctor", "Qualified doctor"].map((l) => (
                    <button key={l} onClick={() => setLevel(l)}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${level === l ? "bg-white text-blue-700 shadow" : "bg-white/10 text-white hover:bg-white/20"}`}>
                      {l}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                disabled={!specialty || !duration || !level}
                onClick={() => setDone(true)}
                className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-2xl font-black text-base disabled:opacity-40 disabled:cursor-not-allowed hover:bg-blue-50 transition-all hover:scale-[1.02] shadow-xl"
              >
                <Sparkles className="h-5 w-5" />
                Show My Recommendations
              </button>
            </div>
          </div>
        ) : (
          <AnimatePresence>
            <motion.div key="results" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
              <div className="bg-white/10 rounded-2xl p-5 ring-1 ring-white/20 text-center mb-8">
                <p className="text-blue-200 text-sm">Recommendations for: <span className="font-black text-white">{specialty}</span> · <span className="font-black text-white">{duration}</span> · <span className="font-black text-white">{level}</span></p>
              </div>
              {recommendations.map((hosp, i) => (
                <div key={hosp} className="bg-white rounded-2xl p-6 text-slate-900">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-lg flex-shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-black text-slate-900 text-lg mb-1">{hosp}</p>
                      <p className="text-slate-500 text-sm mb-3">{HOSPITAL_NOTES[hosp]}</p>
                      <div className="flex flex-wrap gap-3 text-xs font-semibold">
                        <span className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full flex items-center gap-1.5"><Stethoscope className="h-3 w-3" /> {specialty}</span>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full flex items-center gap-1.5"><Calendar className="h-3 w-3" /> {duration}</span>
                        <span className="bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full flex items-center gap-1.5"><Users className="h-3 w-3" /> {SUPERVISOR_MAP[hosp]}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex gap-4 justify-center pt-4">
                <button onClick={() => { setDone(false); setSpecialty(""); setDuration(""); setLevel(""); }}
                  className="px-6 py-3 bg-white/10 ring-1 ring-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors text-sm">
                  Start Over
                </button>
                <button onClick={onApply}
                  className="inline-flex items-center gap-2 bg-white text-blue-700 px-7 py-3 rounded-xl font-black text-sm hover:bg-blue-50 transition-all hover:scale-[1.02] shadow-lg">
                  Apply for This Placement <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
};

const HospitalsPage: React.FC<HospitalsPageProps> = ({ setCurrentPage }) => (
  <div className="min-h-screen bg-white">

    {/* Hero */}
    <section className="bg-gray-50 border-b border-slate-100 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-5 h-px bg-blue-500" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-600">Partner Hospitals</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-slate-900 leading-[1.04] mb-5">
            Where You'll<br />
            <span className="text-blue-600">Actually Train.</span>
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-2xl">
            Four of Nepal's most respected teaching hospitals. Real wards, real supervisors, real patients from day one. Every hospital is NMC-affiliated and government-accredited.
          </p>
          <div className="flex flex-wrap gap-6">
            {[
              { value: "4", label: "Partner Hospitals" },
              { value: "15+", label: "Departments" },
              { value: "6", label: "Named Supervisors" },
              { value: "10,000+", label: "Clinical Hours/Year" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-3xl font-black text-slate-900">{value}</p>
                <p className="text-sm text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Hospital cards */}
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {HOSPITALS.map((h) => (
            <HospitalCard key={h.id} hospital={h} onApply={() => setCurrentPage("application")} />
          ))}
        </div>
      </div>
    </section>

    {/* Hospital Matcher */}
    <HospitalMatcher onApply={() => setCurrentPage("application")} />

    {/* CTA */}
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-black mb-4">Choose Your Hospital</h2>
        <p className="text-blue-100 mb-8 leading-relaxed">
          Tell us your preferred specialty and we'll match you with the hospital and supervisor that best fits your learning objectives.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button onClick={() => setCurrentPage("application")}
            className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all duration-200 hover:scale-[1.02] shadow-lg">
            Apply for a Placement <ArrowRight className="h-5 w-5" />
          </button>
          <button onClick={() => setCurrentPage("for-universities")}
            className="inline-flex items-center gap-2 bg-white/10 ring-1 ring-white/20 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-200">
            University Partnership Info
          </button>
        </div>
      </div>
    </section>

  </div>
);

export default HospitalsPage;
