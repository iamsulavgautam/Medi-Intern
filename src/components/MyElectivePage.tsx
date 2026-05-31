import React, { useState, useEffect } from "react";
import {
  CheckCircle, Circle, ChevronDown, ChevronUp, FileText, MapPin, Phone, User,
  Plane, Building2, Award, Users, BookOpen, Globe,
  ClipboardList, Folder, Luggage, Calendar, MessageCircle,
  type LucideIcon,
} from "lucide-react";

interface ChecklistItem { id: string; label: string; desc?: string }
interface ChecklistCategory { category: string; Icon: LucideIcon; iconBg: string; iconClr: string; items: ChecklistItem[] }

const CHECKLIST: ChecklistCategory[] = [
  {
    category: "Before You Apply",
    Icon: ClipboardList, iconBg: "bg-blue-50", iconClr: "text-blue-600",
    items: [
      { id: "passport",     label: "Valid passport (6+ months remaining after return date)",      desc: "Check the expiry date — Nepal immigration requires at least 6 months validity." },
      { id: "insurance",    label: "Travel & medical insurance arranged",                          desc: "World Nomads or SafetyWing are popular options. Coverage must include medical evacuation." },
      { id: "visa",         label: "Nepal visa plan confirmed",                                    desc: "Visa-on-arrival available for most nationalities ($30 / 15 days, $50 / 30 days, $125 / 90 days)." },
      { id: "vaccinations", label: "Vaccinations up to date",                                     desc: "Hepatitis A & B, Typhoid, Tetanus/MMR. Check malaria prophylaxis for lowland travel." },
    ],
  },
  {
    category: "Documents to Prepare",
    Icon: Folder, iconBg: "bg-amber-50", iconClr: "text-amber-600",
    items: [
      { id: "cv",         label: "CV / Résumé submitted" },
      { id: "lor",        label: "Letter of Recommendation from supervisor or tutor" },
      { id: "loi",        label: "Letter of Interest / Personal statement" },
      { id: "enrollment", label: "Medical school enrollment certificate" },
      { id: "ins_cert",   label: "Insurance certificate uploaded" },
      { id: "photo",      label: "Passport-style photo uploaded" },
    ],
  },
  {
    category: "Pre-Departure",
    Icon: Plane, iconBg: "bg-sky-50", iconClr: "text-sky-600",
    items: [
      { id: "flights",    label: "Flights booked (arrive Kathmandu TIA)",    desc: "Tribhuvan International Airport (KTM). Email us your arrival time so we can arrange pickup." },
      { id: "accom",      label: "Accommodation preference confirmed" },
      { id: "deposit",    label: "Registration deposit paid ($350)" },
      { id: "balance",    label: "Program fee balance paid (due 90 days before departure)" },
      { id: "emergency",  label: "Emergency contact details submitted" },
      { id: "packing",    label: "Packing list reviewed (see below)" },
    ],
  },
  {
    category: "On Arrival",
    Icon: Building2, iconBg: "bg-emerald-50", iconClr: "text-emerald-600",
    items: [
      { id: "pickup",      label: "Airport pickup confirmed with in-country team" },
      { id: "orientation", label: "Cultural orientation day attended" },
      { id: "hosp_id",     label: "Hospital ID / badge obtained" },
      { id: "supervisor",  label: "Named supervisor / mentor introduced" },
      { id: "sim",         label: "Local SIM card and NPR cash obtained" },
    ],
  },
];

const PACKING: { category: string; items: string[] }[] = [
  { category: "Clinical",   items: ["Stethoscope", "Scrubs (2–3 sets)", "Closed-toe shoes", "White coat (optional)", "Notepad & pens", "Medical reference app downloaded"] },
  { category: "Documents",  items: ["Passport + 2 photocopies", "Insurance documents", "Visa paperwork", "University ID", "Hospital placement letter"] },
  { category: "Clothing",   items: ["Lightweight layers (mornings can be cool)", "Modest attire for local culture", "Rain jacket (monsoon Jun–Sep)", "Comfortable walking shoes", "Flip-flops for guesthouse"] },
  { category: "Health",     items: ["Prescription medications (+ extra supply)", "Personal first-aid kit", "Hand sanitiser", "Sunscreen SPF 30+", "Reusable water bottle", "Oral rehydration sachets"] },
  { category: "Tech",       items: ["Universal power adapter (Type C/D)", "Portable power bank", "Laptop or tablet", "Camera", "Offline maps downloaded (Maps.me)"] },
];

const TIMELINE = [
  { label: "Application Submitted",  desc: "We review your docs within 48 hours." },
  { label: "Placement Confirmed",    desc: "You receive a hospital offer letter + supervisor name." },
  { label: "Portal Unlocked",        desc: "MyElective dashboard and checklist go live." },
  { label: "Deposit Paid",           desc: "Place secured; payment plan begins if needed." },
  { label: "Pre-Departure Briefing", desc: "Video call with your in-country coordinator." },
  { label: "Arrival & Orientation",  desc: "Airport pickup + cultural orientation day." },
  { label: "Program Begins",         desc: "First day at your hospital placement." },
];

const JOURNEY_STEPS = [
  { icon: FileText, step: "01", title: "Accepted",            desc: "Placement confirmed, supervisor named, offer letter issued.",         color: "bg-blue-600",    ring: "ring-blue-200"    },
  { icon: Globe,    step: "02", title: "Visa & Travel",        desc: "We guide visa application, flights, and pre-departure documents.",   color: "bg-violet-600",  ring: "ring-violet-200"  },
  { icon: Plane,    step: "03", title: "Arrival",              desc: "Airport pickup, SIM card, currency exchange, guesthouse check-in.",  color: "bg-sky-600",     ring: "ring-sky-200"     },
  { icon: MapPin,   step: "04", title: "Orientation",          desc: "City tour, cultural briefing, hospital ID, safety protocols.",       color: "bg-amber-600",   ring: "ring-amber-200"   },
  { icon: Building2, step: "05", title: "Clinical Placement",   desc: "Ward rounds, procedures, outpatient clinics, supervised practice.",  color: "bg-blue-700",    ring: "ring-blue-200"    },
  { icon: Users,    step: "06", title: "Community Camp",       desc: "Optional rural health camp — medicine beyond the hospital walls.",   color: "bg-emerald-600", ring: "ring-emerald-200" },
  { icon: Award,    step: "07", title: "Certificate Awarded",  desc: "Signed by your consultant supervisor. Formatted for GMC/ECFMG.",     color: "bg-green-600",   ring: "ring-green-200"   },
  { icon: BookOpen, step: "08", title: "Alumni Network",       desc: "You join 500+ Medical Exchange Nepal alumni worldwide.",             color: "bg-indigo-600",  ring: "ring-indigo-200"  },
];

const MyElectivePage: React.FC<{ setCurrentPage: (page: string) => void }> = ({ setCurrentPage }) => {
  const [appData, setAppData]             = useState<Record<string, string> | null>(null);
  const [completed, setCompleted]         = useState<Record<string, boolean>>({});
  const [expandedCat, setExpandedCat]     = useState<string | null>("Before You Apply");
  const [packingOpen, setPackingOpen]     = useState(false);
  const [timelineOpen, setTimelineOpen]   = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem("menApplication");
    if (raw) {
      try { setAppData(JSON.parse(raw)); } catch { /* corrupt — ignore */ }
    }
    const rawDone = localStorage.getItem("menChecklistDone");
    if (rawDone) {
      try { setCompleted(JSON.parse(rawDone)); } catch { /* ignore */ }
    }
  }, []);

  const toggle = (id: string) => {
    const next = { ...completed, [id]: !completed[id] };
    setCompleted(next);
    localStorage.setItem("menChecklistDone", JSON.stringify(next));
  };

  const allItems      = CHECKLIST.flatMap((c) => c.items);
  const doneCount     = allItems.filter((i) => completed[i.id]).length;
  const pct           = Math.round((doneCount / allItems.length) * 100);

  // ── No application in storage ─────────────────────────────────────────────
  if (!appData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center px-4">
        <div className="card p-10 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <ClipboardList className="h-8 w-8 text-blue-600" strokeWidth={1.75} />
          </div>
          <h2 className="text-2xl font-display font-bold text-secondary-900 mb-3">No Application Found</h2>
          <p className="text-secondary-600 mb-6">
            Your <strong>MyElective</strong> portal is unlocked after you submit your application.
            It gives you a personalised checklist, packing list, visa info, and direct contact with your in-country team.
          </p>
          <button onClick={() => setCurrentPage("application")} className="btn-primary w-full mb-3">
            Start Your Application
          </button>
          <button onClick={() => setCurrentPage("pricing")} className="btn-outline w-full">
            View Pricing First
          </button>
          <p className="text-xs text-secondary-500 mt-5">Already applied? Your portal link was sent to your email within 24 hours.</p>
        </div>
      </div>
    );
  }

  const name      = `${appData.firstName ?? ""} ${appData.familyName ?? ""}`.trim() || "Student";
  const program   = appData.program     || "Medical Elective";
  const startDate = appData.startDateA
    ? new Date(appData.startDateA).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
    : "TBC";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">

      {/* ── Welcome banner ───────────────────────────────────────────────── */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12">
        <div className="container-custom flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <div className="text-blue-200 text-sm font-medium mb-1 flex items-center gap-2">
              <User className="h-4 w-4" /> MyElective Portal
            </div>
            <h1 className="text-3xl font-display font-black mb-1">Welcome, {name}!</h1>
            <p className="text-blue-200">{program} · Starts {startDate}</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5 min-w-[200px]">
            <div className="text-sm font-medium text-blue-200 mb-2">Preparation Progress</div>
            <div className="w-full bg-white/20 rounded-full h-3 mb-2">
              <div
                className="bg-emerald-400 h-3 rounded-full transition-all duration-700"
                style={{ width: `${pct}%` }}
              />
            </div>
            <div className="text-white font-bold">{doneCount}/{allItems.length} tasks done</div>
          </div>
        </div>
      </div>

      {/* ── My Nepal Journey ─────────────────────────────────────────────── */}
      <div className="bg-white border-b border-slate-100 py-10">
        <div className="container-custom">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-5 h-px bg-blue-500" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-600">Your Journey</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-8">My Nepal Journey</h2>

          {/* Desktop: horizontal timeline */}
          <div className="hidden md:flex items-start gap-0">
            {JOURNEY_STEPS.map(({ icon: Icon, step, title, desc, color, ring }, i) => (
              <div key={step} className="flex-1 flex flex-col items-center text-center relative">
                {/* connector line */}
                {i < JOURNEY_STEPS.length - 1 && (
                  <div className="absolute top-5 left-1/2 w-full h-0.5 bg-slate-200 z-0" />
                )}
                {/* circle */}
                <div className={`relative z-10 w-11 h-11 rounded-full ${color} ring-4 ${ring} flex items-center justify-center mb-3 shadow-md`}>
                  <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
                </div>
                <p className="text-[10px] font-black text-slate-400 tracking-widest uppercase mb-1">{step}</p>
                <p className="text-xs font-black text-slate-900 mb-1 leading-tight px-1">{title}</p>
                <p className="text-[11px] text-slate-400 leading-tight px-2">{desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile: vertical timeline */}
          <div className="md:hidden space-y-0">
            {JOURNEY_STEPS.map(({ icon: Icon, step, title, desc, color }, i) => (
              <div key={step} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-9 h-9 rounded-full ${color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                    <Icon className="h-4 w-4 text-white" strokeWidth={2} />
                  </div>
                  {i < JOURNEY_STEPS.length - 1 && <div className="w-0.5 h-8 bg-slate-200 my-1" />}
                </div>
                <div className="pb-6">
                  <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">{step}</p>
                  <p className="font-black text-slate-900 text-sm">{title}</p>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-custom py-10 grid lg:grid-cols-3 gap-8">

        {/* ── Main column ──────────────────────────────────────────────── */}
        <div className="lg:col-span-2 space-y-4">
          <div>
            <h2 className="text-2xl font-display font-bold text-secondary-900">Pre-Departure Checklist</h2>
            <p className="text-secondary-600 text-sm mt-1">Tap an item to mark it complete — progress saves in your browser automatically.</p>
          </div>

          {CHECKLIST.map((cat) => {
            const catDone   = cat.items.filter((i) => completed[i.id]).length;
            const isOpen    = expandedCat === cat.category;
            return (
              <div key={cat.category} className="card overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-5 hover:bg-secondary-50 transition-colors"
                  onClick={() => setExpandedCat(isOpen ? null : cat.category)}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl ${cat.iconBg} flex items-center justify-center flex-shrink-0`}>
                      <cat.Icon className={`h-5 w-5 ${cat.iconClr}`} strokeWidth={1.75} />
                    </div>
                    <div className="text-left">
                      <div className="font-display font-bold text-secondary-900">{cat.category}</div>
                      <div className="text-xs text-secondary-500">{catDone}/{cat.items.length} completed</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {catDone === cat.items.length && (
                      <span className="badge text-emerald-700 bg-emerald-50 border border-emerald-200 text-xs">All done ✓</span>
                    )}
                    {isOpen ? <ChevronUp className="h-5 w-5 text-secondary-400" /> : <ChevronDown className="h-5 w-5 text-secondary-400" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-secondary-100 divide-y divide-secondary-50">
                    {cat.items.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => toggle(item.id)}
                        className="w-full flex items-start gap-3 p-4 hover:bg-secondary-50 transition-colors text-left"
                      >
                        {completed[item.id]
                          ? <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          : <Circle     className="h-5 w-5 text-secondary-300 flex-shrink-0 mt-0.5" />
                        }
                        <div>
                          <div className={`font-medium text-sm ${completed[item.id] ? "line-through text-secondary-400" : "text-secondary-900"}`}>
                            {item.label}
                          </div>
                          {item.desc && (
                            <div className="text-xs text-secondary-500 mt-0.5">{item.desc}</div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Packing list */}
          <div className="card overflow-hidden">
            <button
              className="w-full flex items-center justify-between p-5 hover:bg-secondary-50 transition-colors"
              onClick={() => setPackingOpen(!packingOpen)}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                  <Luggage className="h-5 w-5 text-amber-600" strokeWidth={1.75} />
                </div>
                <div className="text-left">
                  <div className="font-display font-bold text-secondary-900">Packing List</div>
                  <div className="text-xs text-secondary-500">What to bring to Nepal</div>
                </div>
              </div>
              {packingOpen ? <ChevronUp className="h-5 w-5 text-secondary-400" /> : <ChevronDown className="h-5 w-5 text-secondary-400" />}
            </button>
            {packingOpen && (
              <div className="border-t border-secondary-100 p-5 grid sm:grid-cols-2 gap-6">
                {PACKING.map((cat) => (
                  <div key={cat.category}>
                    <h4 className="font-bold text-secondary-800 text-sm mb-2">{cat.category}</h4>
                    <ul className="space-y-1">
                      {cat.items.map((item) => (
                        <li key={item} className="text-sm text-secondary-600 flex items-start gap-2">
                          <span className="text-secondary-400 mt-0.5 flex-shrink-0">·</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Timeline */}
          <div className="card overflow-hidden">
            <button
              className="w-full flex items-center justify-between p-5 hover:bg-secondary-50 transition-colors"
              onClick={() => setTimelineOpen(!timelineOpen)}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-5 w-5 text-indigo-600" strokeWidth={1.75} />
                </div>
                <div className="text-left">
                  <div className="font-display font-bold text-secondary-900">Application Timeline</div>
                  <div className="text-xs text-secondary-500">What happens after you apply</div>
                </div>
              </div>
              {timelineOpen ? <ChevronUp className="h-5 w-5 text-secondary-400" /> : <ChevronDown className="h-5 w-5 text-secondary-400" />}
            </button>
            {timelineOpen && (
              <div className="border-t border-secondary-100 p-5">
                <div className="relative pl-6 border-l-2 border-primary-200 space-y-6">
                  {TIMELINE.map((t, i) => (
                    <div key={t.label} className="relative">
                      <div className="absolute -left-[1.35rem] top-0.5 w-4 h-4 rounded-full bg-primary-500 border-2 border-white" />
                      <div className="font-semibold text-secondary-900 text-sm">{t.label}</div>
                      <div className="text-xs text-secondary-500 mt-0.5">{t.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── Sidebar ──────────────────────────────────────────────────── */}
        <div className="space-y-6">
          {/* Application summary */}
          <div className="card p-6">
            <h3 className="font-display font-bold text-secondary-900 mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary-500" /> Your Application
            </h3>
            <div className="space-y-3 text-sm divide-y divide-secondary-100">
              {[
                { label: "Program",       value: program },
                { label: "Start Date",    value: startDate },
                { label: "Department A",  value: appData.departmentA  || "TBC" },
                { label: "Accommodation", value: appData.accommodation || "TBC" },
                { label: "Clerkship",     value: appData.clerkshipType || "TBC" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between py-2">
                  <span className="text-secondary-500">{row.label}</span>
                  <span className="font-medium text-secondary-900 text-right">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visa info */}
          <div className="card p-6">
            <h3 className="font-display font-bold text-secondary-900 mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary-500" /> Nepal Visa
            </h3>
            <p className="text-sm text-secondary-700 mb-3">
              Most nationalities can get a <strong>Visa-on-Arrival</strong> at Tribhuvan International Airport (KTM).
            </p>
            <div className="bg-secondary-50 rounded-xl p-3 space-y-1 text-sm">
              {[
                ["15 days", "$30 USD"],
                ["30 days", "$50 USD"],
                ["90 days", "$125 USD"],
              ].map(([d, p]) => (
                <div key={d} className="flex justify-between">
                  <span className="text-secondary-600">{d}</span>
                  <span className="font-bold text-secondary-900">{p}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-secondary-500 mt-3">
              Bring 1 passport photo + USD cash. Check your country's requirements before travel.
            </p>
          </div>

          {/* In-country contact */}
          <div className="card p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
            <h3 className="font-display font-bold text-secondary-900 mb-4 flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary-500" /> In-Country Support
            </h3>
            <div className="space-y-4 text-sm">
              <div>
                <div className="font-semibold text-secondary-900">Dr. Rohit Rawat</div>
                <div className="text-secondary-500 text-xs">Chairman · Program Director</div>
              </div>
              <div>
                <div className="font-semibold text-secondary-900">Uddhav Kathayat</div>
                <div className="text-secondary-500 text-xs">Public Health Advocate · In-Country Coordinator</div>
              </div>
              <a
                href="https://wa.me/9779862728072"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-500 text-white rounded-lg px-4 py-2.5 font-semibold text-sm hover:bg-emerald-600 transition-colors"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp the Team
              </a>
              <p className="text-xs text-secondary-500 text-center">24/7 support. Typical response within 1 hour.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyElectivePage;
