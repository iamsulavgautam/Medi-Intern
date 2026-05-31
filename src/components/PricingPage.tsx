import React, { useState } from "react";
import {
  Check, ChevronRight, ChevronLeft, Globe, MapPin, Info, Zap, DollarSign, ArrowRight,
  Stethoscope, Scissors, Baby, Smile, Dumbbell, HeartPulse,
  Mountain, MessageSquare, CreditCard, Syringe, Leaf,
  type LucideIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AccreditationStrip from "./AccreditationStrip";

interface PricingPageProps {
  setCurrentPage: (page: string) => void;
}

// ── Data ──────────────────────────────────────────────────────────────────────
const DEPOSIT = 350;

const BASE_PRICES: Record<string, Record<number, number>> = {
  kathmandu: { 1: 1800, 2: 2200, 3: 2550, 4: 2850, 5: 3100, 6: 3300 },
  pokhara:   { 1: 1700, 2: 2050, 3: 2350, 4: 2600, 5: 2800, 6: 3000 },
};
const EXTRA_WEEK: Record<string, number> = { kathmandu: 600, pokhara: 550 };

const ADD_ONS: { id: string; Icon: LucideIcon; iconBg: string; iconClr: string; label: string; desc: string; priceUSD: number; eurNote: string | null; perWeek: boolean }[] = [
  {
    id: "trek",     Icon: Mountain,      iconBg: "bg-slate-100",   iconClr: "text-slate-600",   label: "Himalayan Trek Week",
    desc: "Guided 7-day Annapurna / Everest base camp trek",
    priceUSD: 700, eurNote: "€500 flat fee for European bookings", perWeek: false,
  },
  {
    id: "rural",    Icon: MapPin,        iconBg: "bg-green-50",    iconClr: "text-green-600",   label: "Rural Health Camp",
    desc: "Weekend community health outreach in a rural village",
    priceUSD: 500, eurNote: null, perWeek: false,
  },
  {
    id: "language", Icon: MessageSquare, iconBg: "bg-blue-50",     iconClr: "text-blue-600",    label: "Nepali Language Classes",
    desc: "2× weekly evening classes — all levels welcome",
    priceUSD: 200, eurNote: null, perWeek: true,
  },
];

const CURRENCIES: Record<string, { symbol: string; rate: number }> = {
  USD: { symbol: "$",  rate: 1    },
  EUR: { symbol: "€",  rate: 0.92 },
  GBP: { symbol: "£",  rate: 0.79 },
  AUD: { symbol: "A$", rate: 1.53 },
  CAD: { symbol: "C$", rate: 1.36 },
  NPR: { symbol: "रू", rate: 133  },
};

const SPECIALTIES: { id: string; Icon: LucideIcon; iconBg: string; iconClr: string; label: string }[] = [
  { id: "medical",       Icon: Stethoscope, iconBg: "bg-blue-50",    iconClr: "text-blue-600",    label: "Medical Elective"    },
  { id: "surgery",       Icon: Scissors,    iconBg: "bg-slate-100",  iconClr: "text-slate-600",   label: "Surgery"             },
  { id: "nursing",       Icon: Baby,        iconBg: "bg-pink-50",    iconClr: "text-pink-600",    label: "Nursing / Midwifery" },
  { id: "dental",        Icon: Smile,       iconBg: "bg-sky-50",     iconClr: "text-sky-600",     label: "Dental"              },
  { id: "physiotherapy", Icon: Dumbbell,    iconBg: "bg-orange-50",  iconClr: "text-orange-600",  label: "Physiotherapy"       },
  { id: "paramedical",   Icon: HeartPulse,  iconBg: "bg-red-50",     iconClr: "text-red-600",     label: "Paramedical"         },
];

const LOCATIONS = [
  { id: "kathmandu", label: "Kathmandu", hospital: "TUTH · Bir Hospital · Kanti Children's" },
  { id: "pokhara",   label: "Pokhara",   hospital: "Gandaki Medical College · Western Regional Hospital" },
];

const INCLUDED = [
  "Airport pick-up & drop-off",
  "Shared accommodation (private upgrade available)",
  "Breakfast & dinner daily",
  "Guaranteed hospital placement",
  "Named supervisor / mentor",
  "24/7 in-country support team",
  "Bi-weekly global health tutorials",
  "Certificate of completion",
  "Cultural orientation day",
];
const NOT_INCLUDED = [
  "International flights",
  "Travel insurance (required — World Nomads / SafetyWing recommended)",
  "Nepal visa fees (~$30–125 depending on duration)",
  "Personal expenses & lunches",
  "Weekend excursions (unless add-on selected)",
];

const STEP_LABELS = ["Specialty", "Location & Duration", "Add-ons", "Summary"];

// ── Helpers ───────────────────────────────────────────────────────────────────
function fmt(usd: number, cur: string): string {
  const { symbol, rate } = CURRENCIES[cur];
  return `${symbol}${Math.round(usd * rate).toLocaleString()}`;
}
function calcBase(loc: string, wks: number): number {
  return wks <= 6
    ? BASE_PRICES[loc][wks] ?? 0
    : BASE_PRICES[loc][6] + (wks - 6) * EXTRA_WEEK[loc];
}

// ── Component ─────────────────────────────────────────────────────────────────
const PricingPage: React.FC<PricingPageProps> = ({ setCurrentPage }) => {
  const [currency, setCurrency]   = useState("USD");
  const [step, setStep]           = useState(1);
  const [specialty, setSpecialty] = useState("");
  const [location, setLocation]   = useState("kathmandu");
  const [weeks, setWeeks]         = useState(4);
  const [addOns, setAddOns]       = useState<string[]>([]);

  const basePrice  = calcBase(location, weeks);
  const addOnTotal = ADD_ONS
    .filter((a) => addOns.includes(a.id))
    .reduce((s, a) => s + (a.perWeek ? a.priceUSD * weeks : a.priceUSD), 0);
  const total = DEPOSIT + basePrice + addOnTotal;

  const toggleAddOn = (id: string) =>
    setAddOns((p) => p.includes(id) ? p.filter((x) => x !== id) : [...p, id]);

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700" />
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative container-custom text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6">
            <DollarSign className="h-4 w-4 text-white" />
            <span className="text-white text-sm font-medium">Transparent pricing — no hidden fees</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-5">
            Medical Elective Pricing
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            A <strong className="text-white">$350 reservation deposit</strong> secures your hospital placement
            and unlocks your personal MyElective planning portal.
            All fees fully itemised — no surprises.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { value: "$1,700", label: "Starting from" },
              { value: "6 Specialties", label: "Available programs" },
              { value: "1–12+ weeks", label: "Flexible duration" },
            ].map((s) => (
              <div key={s.label} className="bg-white/20 rounded-xl px-5 py-3 text-white">
                <div className="text-2xl font-bold">{s.value}</div>
                <div className="text-sm text-blue-200">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Programme description + trust stats ──────────────────────────────── */}
      <section className="container-custom pt-12 pb-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-display font-bold text-secondary-900 mb-4">
              Clinical Electives &amp; Internships in Nepal
            </h2>
            <p className="text-secondary-600 leading-relaxed mb-4">
              Medical Exchange Nepal places international medical, nursing, dental,
              physiotherapy, and paramedical students in Nepal's leading teaching hospitals
              for 1–12+ week rotations. Every student is assigned a{" "}
              <strong>named, NMC-registered supervisor</strong> — not an anonymous "expert team."
            </p>
            <p className="text-secondary-600 leading-relaxed">
              All programs follow AAMC observational guidelines. You watch, assist, and learn —
              clinical scope is set honestly to protect both students and patients.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "500+",   label: "Students placed"        },
              { value: "30+",    label: "Countries represented"  },
              { value: "98%",    label: "Satisfaction rate"      },
              { value: "24 hrs", label: "Placement confirmation" },
            ].map((s) => (
              <div key={s.label} className="card p-5 text-center">
                <div className="text-2xl font-black text-primary-700 mb-1">{s.value}</div>
                <div className="text-xs text-secondary-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Deposit callout ───────────────────────────────────────────────────── */}
      <section className="container-custom pb-6">
        <div className="rounded-2xl bg-gradient-to-r from-primary-600 to-indigo-600 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 text-white">
          <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
            <CreditCard className="h-7 w-7 text-white" strokeWidth={1.75} />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-lg mb-1">Registration Deposit — $350 USD</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Secures your hospital placement, unlocks your{" "}
              <strong className="text-white">MyElective planning portal</strong>,
              and is applied toward your total programme fee.{" "}
              <strong className="text-white">14-day cooling-off refund</strong> if you change your mind.
              Balance due 90 days before departure — instalment payments available.
            </p>
          </div>
          <button
            onClick={() => setCurrentPage("application")}
            className="bg-white text-primary-700 font-bold px-6 py-2.5 rounded-xl text-sm hover:bg-blue-50 transition-colors flex-shrink-0"
          >
            Pay Deposit
          </button>
        </div>
      </section>

      {/* ── Currency + Price grid ─────────────────────────────────────────────── */}
      <section className="container-custom py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-display font-bold text-secondary-900">Programme Fee Grid</h2>
            <p className="text-secondary-500 text-sm mt-1">
              Deposit is additional. All prices indicative — bookings confirmed in USD.
            </p>
          </div>
          <div className="flex items-center gap-1 bg-white rounded-xl shadow-soft border border-secondary-200 p-1 self-start">
            <Globe className="h-4 w-4 text-secondary-400 ml-2" />
            {Object.keys(CURRENCIES).map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                  currency === c ? "bg-primary-600 text-white shadow" : "text-secondary-600 hover:text-secondary-900"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Location</th>
                  {[1, 2, 3, 4, 5, 6].map((w) => (
                    <th key={w} className="px-4 py-4 text-center font-semibold whitespace-nowrap">
                      {w} {w === 1 ? "Wk" : "Wks"}
                    </th>
                  ))}
                  <th className="px-4 py-4 text-center font-semibold whitespace-nowrap bg-white/10">+Extra Wk</th>
                </tr>
              </thead>
              <tbody>
                {LOCATIONS.map((loc, i) => (
                  <tr key={loc.id} className={i % 2 === 0 ? "bg-white" : "bg-secondary-50"}>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-secondary-900">{loc.label}</div>
                      <div className="text-xs text-secondary-500">{loc.hospital}</div>
                    </td>
                    {[1, 2, 3, 4, 5, 6].map((w) => (
                      <td key={w} className="px-4 py-4 text-center font-bold text-primary-700">
                        {fmt(BASE_PRICES[loc.id][w], currency)}
                      </td>
                    ))}
                    <td className="px-4 py-4 text-center font-bold text-accent-600 bg-accent-50">
                      +{fmt(EXTRA_WEEK[loc.id], currency)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-blue-50 border-t border-blue-100 flex flex-wrap gap-x-5 gap-y-1 text-xs text-blue-700">
            <span className="flex items-center gap-1"><Info className="h-3 w-3" /> Programme fees only.</span>
            <span>Registration deposit: <strong>{fmt(DEPOSIT, currency)}</strong> — applied toward total.</span>
            <span>Converted at indicative rates.</span>
          </div>
        </div>

        {/* Included / Not included */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="card p-6">
            <h3 className="font-display font-bold text-secondary-900 mb-4 flex items-center gap-2">
              <Check className="h-5 w-5 text-emerald-500" /> What's Included
            </h3>
            <ul className="space-y-2">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-2 text-secondary-700 text-sm">
                  <Check className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-6">
            <h3 className="font-display font-bold text-secondary-900 mb-4 flex items-center gap-2">
              <span className="text-red-500 font-bold">×</span> Not Included
            </h3>
            <ul className="space-y-2">
              {NOT_INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-2 text-secondary-700 text-sm">
                  <span className="text-red-400 font-bold mt-0.5 flex-shrink-0">×</span>{item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-secondary-500 border-t border-secondary-100 pt-3">
              Visa-on-arrival for most nationalities. Confirm requirements with your embassy.
            </p>
          </div>
        </div>
      </section>

      {/* ── Build Your Elective wizard ────────────────────────────────────────── */}
      <section className="bg-white border-y border-secondary-200 py-14">
        <div className="container-custom">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary-50 rounded-full px-4 py-2 mb-4">
              <Zap className="h-4 w-4 text-primary-600" />
              <span className="text-primary-700 text-sm font-semibold">Interactive price calculator</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-secondary-900 mb-2">Build Your Elective</h2>
            <p className="text-secondary-600 max-w-lg mx-auto text-sm">
              Specialty → location → add-ons → live total. Your choices pre-fill the application form.
            </p>
          </div>

          {/* Step progress */}
          <div className="flex items-center justify-center mb-8">
            {STEP_LABELS.map((label, i) => {
              const n = i + 1; const done = n < step; const active = n === step;
              return (
                <React.Fragment key={label}>
                  <div className="flex flex-col items-center">
                    <button
                      onClick={() => done && setStep(n)}
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all duration-300 ${
                        done   ? "bg-emerald-500 border-emerald-500 text-white cursor-pointer hover:bg-emerald-600"
                        : active ? "bg-primary-600 border-primary-600 text-white"
                        : "bg-white border-secondary-300 text-secondary-400"
                      }`}
                    >
                      {done ? <Check className="h-4 w-4" /> : n}
                    </button>
                    <span className={`text-xs mt-1 hidden sm:block ${active ? "text-primary-700 font-semibold" : "text-secondary-400"}`}>
                      {label}
                    </span>
                  </div>
                  {i < STEP_LABELS.length - 1 && (
                    <div className={`h-0.5 w-14 sm:w-20 mx-1 ${done ? "bg-emerald-400" : "bg-secondary-200"}`} />
                  )}
                </React.Fragment>
              );
            })}
          </div>

          <div className="max-w-2xl mx-auto">
            <AnimatePresence mode="wait">

              {step === 1 && (
                <motion.div key="ws1" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} className="card p-7">
                  <h3 className="font-display font-bold text-secondary-900 mb-1">Choose Your Specialty</h3>
                  <p className="text-secondary-400 text-xs mb-5">All programs are observational — scope set per AAMC guidelines.</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {SPECIALTIES.map((sp) => (
                      <button
                        key={sp.id}
                        onClick={() => setSpecialty(sp.id)}
                        className={`p-4 rounded-xl border-2 text-left transition-all duration-200 hover:scale-105 ${
                          specialty === sp.id ? "border-primary-500 bg-primary-50" : "border-secondary-200 bg-white hover:border-primary-300"
                        }`}
                      >
                        <div className={`w-9 h-9 rounded-lg ${sp.iconBg} flex items-center justify-center mb-2`}>
                          <sp.Icon className={`h-4 w-4 ${sp.iconClr}`} strokeWidth={1.75} />
                        </div>
                        <div className="font-semibold text-secondary-900 text-xs">{sp.label}</div>
                      </button>
                    ))}
                  </div>
                  <div className="mt-5 flex justify-end">
                    <button
                      disabled={!specialty}
                      onClick={() => setStep(2)}
                      className={`btn-primary flex items-center gap-2 ${!specialty ? "opacity-40 cursor-not-allowed" : ""}`}
                    >
                      Next <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="ws2" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} className="card p-7">
                  <h3 className="font-display font-bold text-secondary-900 mb-5">Location &amp; Duration</h3>
                  <div className="space-y-5">
                    <div>
                      <label className="form-label">Location</label>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {LOCATIONS.map((loc) => (
                          <button
                            key={loc.id}
                            onClick={() => setLocation(loc.id)}
                            className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                              location === loc.id ? "border-primary-500 bg-primary-50" : "border-secondary-200 bg-white hover:border-primary-300"
                            }`}
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <MapPin className="h-4 w-4 text-primary-500" />
                              <span className="font-bold text-secondary-900">{loc.label}</span>
                            </div>
                            <div className="text-xs text-secondary-500">{loc.hospital}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="form-label">Duration: <strong>{weeks} {weeks === 1 ? "week" : "weeks"}</strong></label>
                      <input
                        type="range" min={1} max={12} step={1} value={weeks}
                        onChange={(e) => setWeeks(Number(e.target.value))}
                        className="w-full h-2 bg-secondary-200 rounded-full appearance-none cursor-pointer accent-primary-600"
                      />
                      <div className="flex justify-between text-xs text-secondary-400 mt-1">
                        <span>1 wk</span><span>6 wks</span><span>12 wks</span>
                      </div>
                      {weeks > 6 && (
                        <p className="text-xs text-accent-600 mt-1 flex items-center gap-1">
                          <Info className="h-3 w-3" /> Wks 7–12 at extra-week rate ({fmt(EXTRA_WEEK[location], currency)}/wk).
                        </p>
                      )}
                    </div>
                    <div className="rounded-xl bg-primary-50 border border-primary-200 p-4 flex justify-between items-center">
                      <span className="text-secondary-700 text-sm">Estimated programme fee</span>
                      <span className="text-2xl font-bold text-primary-700">{fmt(calcBase(location, weeks), currency)}</span>
                    </div>
                  </div>
                  <div className="mt-5 flex justify-between">
                    <button onClick={() => setStep(1)} className="btn-outline flex items-center gap-2"><ChevronLeft className="h-4 w-4" /> Back</button>
                    <button onClick={() => setStep(3)} className="btn-primary flex items-center gap-2">Next <ChevronRight className="h-4 w-4" /></button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="ws3" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} className="card p-7">
                  <h3 className="font-display font-bold text-secondary-900 mb-1">Optional Add-ons</h3>
                  <p className="text-secondary-400 text-xs mb-5">All optional — add them any time before departure.</p>
                  <div className="space-y-3">
                    {ADD_ONS.map((addon) => {
                      const selected = addOns.includes(addon.id);
                      const price = addon.perWeek ? addon.priceUSD * weeks : addon.priceUSD;
                      return (
                        <button
                          key={addon.id}
                          onClick={() => toggleAddOn(addon.id)}
                          className={`w-full p-4 rounded-xl border-2 text-left flex items-center gap-4 transition-all duration-200 ${
                            selected ? "border-emerald-500 bg-emerald-50" : "border-secondary-200 bg-white hover:border-primary-300"
                          }`}
                        >
                          <div className={`w-11 h-11 rounded-xl ${addon.iconBg} flex items-center justify-center flex-shrink-0`}>
                            <addon.Icon className={`h-5 w-5 ${addon.iconClr}`} strokeWidth={1.75} />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-secondary-900 text-sm">{addon.label}</div>
                            <div className="text-xs text-secondary-500">{addon.desc}</div>
                            {addon.eurNote && (
                              <div className="text-xs text-blue-600 mt-0.5 flex items-center gap-1">
                                <Info className="h-3 w-3" />{addon.eurNote}
                              </div>
                            )}
                          </div>
                          <div className="text-right flex-shrink-0">
                            <div className="font-bold text-primary-700">+{fmt(price, currency)}</div>
                            {addon.perWeek && <div className="text-xs text-secondary-400">({fmt(addon.priceUSD, currency)}/wk)</div>}
                          </div>
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                            selected ? "bg-emerald-500 border-emerald-500" : "border-secondary-300"
                          }`}>
                            {selected && <Check className="h-4 w-4 text-white" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  <div className="mt-5 flex justify-between">
                    <button onClick={() => setStep(2)} className="btn-outline flex items-center gap-2"><ChevronLeft className="h-4 w-4" /> Back</button>
                    <button onClick={() => setStep(4)} className="btn-primary flex items-center gap-2">Summary <ChevronRight className="h-4 w-4" /></button>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div key="ws4" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} className="card p-7">
                  <h3 className="font-display font-bold text-secondary-900 mb-5">Your Elective Summary</h3>
                  <div className="divide-y divide-secondary-100 mb-5">
                    {[
                      { label: "Specialty",            value: SPECIALTIES.find((s) => s.id === specialty)?.label ?? "" },
                      { label: "Location",             value: LOCATIONS.find((l) => l.id === location)?.label ?? "" },
                      { label: "Duration",             value: `${weeks} weeks` },
                      { label: "Registration Deposit", value: fmt(DEPOSIT, currency) },
                      { label: "Programme Fee",        value: fmt(calcBase(location, weeks), currency) },
                    ].map((row) => (
                      <div key={row.label} className="flex justify-between py-2.5">
                        <span className="text-secondary-500 text-sm">{row.label}</span>
                        <span className="font-semibold text-secondary-900 text-sm">{row.value}</span>
                      </div>
                    ))}
                    {ADD_ONS.filter((a) => addOns.includes(a.id)).map((addon) => (
                      <div key={addon.id} className="flex justify-between py-2.5">
                        <span className="text-secondary-500 text-sm">{addon.label}</span>
                        <span className="font-semibold text-secondary-900 text-sm">
                          +{fmt(addon.perWeek ? addon.priceUSD * weeks : addon.priceUSD, currency)}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-primary-50 rounded-xl px-5 py-4 flex justify-between items-center mb-5">
                    <span className="font-bold text-secondary-900">Total Estimate</span>
                    <span className="font-black text-primary-700 text-2xl">{fmt(total, currency)}</span>
                  </div>
                  <p className="text-xs text-secondary-400 mb-5">
                    Indicative in {currency}. Bookings confirmed in USD. Deposit due on application; balance 90 days before departure.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button onClick={() => setStep(3)} className="btn-outline flex items-center gap-2"><ChevronLeft className="h-4 w-4" /> Back</button>
                    <button onClick={() => setCurrentPage("application")} className="btn-primary flex-1 flex items-center justify-center gap-2">
                      Apply Now <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="text-center text-xs text-secondary-400 mt-3">
                    Access your{" "}
                    <button className="text-primary-600 hover:underline font-semibold" onClick={() => setCurrentPage("my-elective")}>
                      MyElective portal
                    </button>{" "}
                    within 24 hours of applying.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── Partners ─────────────────────────────────────────────────────────── */}
      <AccreditationStrip />

      {/* ── Other services cross-links ───────────────────────────────────────── */}
      <section className="container-custom py-12">
        <h2 className="text-2xl font-display font-bold text-secondary-900 mb-6 text-center">
          Other Services
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6 bg-gradient-to-br from-violet-50 to-purple-50 border-violet-100">
            <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center mb-3">
              <Syringe className="h-5 w-5 text-violet-600" strokeWidth={1.75} />
            </div>
            <h3 className="font-display font-bold text-secondary-900 mb-2">Elective Treatment</h3>
            <p className="text-secondary-600 text-sm mb-4">
              Surgical, fertility, cosmetic, dental, and diagnostic procedures in Nepal
              at 70–90% below USA, UK, and Australian prices. No waiting lists.
            </p>
            <button onClick={() => setCurrentPage("elective-treatment")} className="btn-outline flex items-center gap-2 text-sm">
              View Treatment Pricing <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="card p-6 bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-100">
            <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center mb-3">
              <Leaf className="h-5 w-5 text-emerald-600" strokeWidth={1.75} />
            </div>
            <h3 className="font-display font-bold text-secondary-900 mb-2">Spiritual &amp; Wellness</h3>
            <p className="text-secondary-600 text-sm mb-4">
              Ayurveda, Himalayan yoga treks, Tibetan sound healing, silent monastery retreats,
              and holistic detox programmes. From $350.
            </p>
            <button onClick={() => setCurrentPage("spiritual-wellness")} className="btn-outline flex items-center gap-2 text-sm">
              Explore Wellness Programmes <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="container-custom pb-16 text-center">
        <h2 className="text-3xl font-display font-bold text-secondary-900 mb-3">Ready to reserve your place?</h2>
        <p className="text-secondary-600 mb-8 max-w-lg mx-auto">
          Confirmation within 24 hours. Instalment payments available. 14-day cooling-off refund.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => setCurrentPage("application")} className="btn-primary text-base px-8 py-3">Apply Now</button>
          <button onClick={() => setCurrentPage("contact")} className="btn-outline text-base px-8 py-3">Ask a Question</button>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
