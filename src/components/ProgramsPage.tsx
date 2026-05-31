import React, { useState } from "react";
import { Clock, Users, MapPin, CheckCircle, ArrowRight, Search, DollarSign } from "lucide-react";

interface ProgramsPageProps {
  setCurrentPage?: (page: string) => void;
}

const ProgramsPage: React.FC<ProgramsPageProps> = ({ setCurrentPage }) => {
  const [searchQuery, setSearchQuery]     = useState("");
  const [durationFilter, setDurationFilter] = useState("all");

  const programs = [
    {
      id: "medical-elective",
      title: "Medical Elective",
      duration: "4-20 weeks",
      minWeeks: 4,
      startingPrice: 2850,
      capacity: "8-12 interns",
      location: "Teaching Hospitals",
      image: "medicine.jpeg",
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
      minWeeks: 4,
      startingPrice: 2850,
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
      minWeeks: 4,
      startingPrice: 2850,
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
    {
      id: "paramedical",
      title: "Paramedical",
      duration: "3-12 weeks",
      minWeeks: 3,
      startingPrice: 2550,
      capacity: "8-12 interns",
      location: "Labs & Diagnostic Centers",
      image: "paramedical.jpeg",
      description:
        "Hands-on training in diagnostic and therapeutic medical support services across various healthcare departments.",
      highlights: [
        "Laboratory techniques",
        "Diagnostic procedures",
        "Patient care assistance",
        "Medical technology training",
        "Healthcare support services",
        "English-Speaking Host",
      ],
    },
    {
      id: "dental-electives",
      title: "Dental Electives",
      duration: "2-12 weeks",
      minWeeks: 2,
      startingPrice: 2200,
      capacity: "4-8 interns",
      location: "Dental Hospitals & Clinics",
      image: "/electivemedicalplacment/WhatsApp Image 2026-05-31 at 10.24.14 PM.jpeg",
      description:
        "Comprehensive dental training program offering hands-on experience in various dental specialties including oral surgery, orthodontics, and general dentistry.",
      highlights: [
        "Clinical dental procedures",
        "Oral surgery observations",
        "Orthodontic treatments",
        "Preventive dentistry",
        "Patient consultation skills",
        "English-Speaking Host",
      ],
    },
    {
      id: "physiotherapy-internship",
      title: "Physiotherapy Internship",
      duration: "4-16 weeks",
      minWeeks: 4,
      startingPrice: 2850,
      capacity: "6-10 interns",
      location: "Rehabilitation Centers",
      image: "/electivemedicalplacment/WhatsApp Image 2026-05-31 at 10.24.16 PM.jpeg",
      description:
        "Specialized physiotherapy training focusing on rehabilitation techniques, therapeutic exercises, and patient care in various clinical settings.",
      highlights: [
        "Musculoskeletal rehabilitation",
        "Neurological physiotherapy",
        "Sports injury treatment",
        "Therapeutic exercise programs",
        "Manual therapy techniques",
        "English-Speaking Host",
      ],
    },
  ];

  const handleProgramClick = (programId: string) => {
    if (setCurrentPage) {
      setCurrentPage(`program-${programId}`);
    }
  };

  const filteredPrograms = programs.filter((p) => {
    const matchesSearch =
      searchQuery === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDuration =
      durationFilter === "all" ||
      (durationFilter === "short"  && p.minWeeks <= 4) ||
      (durationFilter === "medium" && p.minWeeks >= 4 && p.minWeeks <= 8) ||
      (durationFilter === "long"   && p.minWeeks >= 8);
    return matchesSearch && matchesDuration;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Medical Internship Programs in Nepal - Medical Exchange Nepal",
            description:
              "Explore comprehensive medical internship programs in Nepal including Medical Elective, Surgery, Nursing, Paramedical, Dental, and Physiotherapy training. Gain hands-on experience in Nepal's healthcare system.",
            url: "https://medicalexchangenepal.com/programs",
            mainEntity: {
              "@type": "ItemList",
              name: "Medical Internship Programs",
              description: "Comprehensive medical training programs in Nepal",
              itemListElement: programs.map((program, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "Service",
                  name: program.title,
                  description: program.description,
                  provider: {
                    "@type": "Organization",
                    name: "Medical Exchange Nepal",
                  },
                },
              })),
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative h-[52vh] min-h-[360px] max-h-[480px] flex items-end overflow-hidden" aria-label="Medical Internship Programs in Nepal">
        <div className="absolute inset-0">
          <img src="/electivemedicalplacment/203.jpeg" alt="Medical internship programmes in Nepal"
            className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/55 to-slate-900/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 pb-10 md:pb-14">
          <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-blue-400 mb-3">Medical Elective Placement · Nepal</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 leading-tight max-w-2xl">
            Medical Internship Programmes
          </h1>
          <p className="text-base text-white/60 max-w-xl leading-relaxed mb-6">
            6 clinical specialties. Named NMC-registered supervisors. Accepted by universities across Europe, UK, and Australia.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {[
              { value: "500+", label: "Students placed" },
              { value: "30+",  label: "Countries" },
              { value: "26",   label: "Specialties available" },
            ].map(({ value, label }) => (
              <div key={label} className="bg-white/10 backdrop-blur border border-white/15 rounded-xl px-4 py-2.5 text-center">
                <p className="text-white font-black text-lg leading-none">{value}</p>
                <p className="text-white/50 text-[10px] uppercase tracking-wide mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search & Filter bar */}
      <section className="py-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow border border-white/20 p-5 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-secondary-400" />
              <input
                type="text"
                placeholder="Search programs…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-input pl-9"
              />
            </div>
            {/* Duration filter */}
            <div className="flex gap-1 bg-secondary-100 rounded-xl p-1 self-start">
              {[
                { value: "all",    label: "All durations" },
                { value: "short",  label: "≤ 4 weeks" },
                { value: "medium", label: "4–8 weeks" },
                { value: "long",   label: "8+ weeks" },
              ].map((f) => (
                <button
                  key={f.value}
                  onClick={() => setDurationFilter(f.value)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 whitespace-nowrap ${
                    durationFilter === f.value
                      ? "bg-white text-primary-700 shadow"
                      : "text-secondary-600 hover:text-secondary-900"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
            {/* View Pricing link */}
            <button
              onClick={() => setCurrentPage?.("pricing")}
              className="btn-outline flex items-center gap-2 text-sm whitespace-nowrap self-start"
            >
              <DollarSign className="h-4 w-4" /> View Pricing
            </button>
          </div>
          {filteredPrograms.length === 0 && (
            <p className="text-center text-secondary-500 py-8">No programs match your search — try clearing the filters.</p>
          )}
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((program, index) => (
              <div key={index}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:border-blue-200 hover:shadow-md transition-all duration-300">
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <img src={program.image} alt={program.title} loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  <div className="absolute top-3 right-3">
                    <span className="flex items-center gap-1 text-xs font-black text-emerald-800 bg-emerald-100 border border-emerald-200 rounded-full px-3 py-1.5">
                      from ${program.startingPrice.toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3">{program.title}</h3>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="flex items-center gap-1.5 text-xs text-slate-600">
                      <Clock className="h-3.5 w-3.5 text-blue-500" />{program.duration}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-slate-600">
                      <Users className="h-3.5 w-3.5 text-blue-500" />{program.capacity}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-slate-600">
                      <MapPin className="h-3.5 w-3.5 text-blue-500" />{program.location}
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{program.description}</p>
                  <ul className="space-y-2 mb-5">
                    {program.highlights.slice(0, 4).map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle className="h-3.5 w-3.5 text-emerald-500 mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3">
                    <button onClick={() => handleProgramClick(program.id)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2">
                      Details <ArrowRight className="h-4 w-4" />
                    </button>
                    <button onClick={() => setCurrentPage && setCurrentPage("application")}
                      className="flex-1 bg-slate-900 hover:bg-slate-800 text-white py-2.5 px-4 rounded-xl font-bold text-sm transition-colors">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-14 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-slate-400 mb-2">Included in every programme</p>
            <h2 className="text-2xl font-extrabold text-slate-900">What every student receives</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { Icon: Users,         title: "Named supervisor",        desc: "NMC-registered consultant named in your placement confirmation letter before arrival." },
              { Icon: CheckCircle,   title: "Completion certificate",  desc: "Signed by supervising consultant. Named hospital, department, and duration." },
              { Icon: MapPin,        title: "Cultural orientation",    desc: "Kathmandu city orientation, hospital induction, and cultural briefing on day 1." },
              { Icon: Clock,         title: "24/7 coordinator",        desc: "In-country coordinator reachable at all hours throughout your placement." },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl border border-slate-100 p-5 hover:border-blue-200 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-blue-600" strokeWidth={1.75} />
                </div>
                <h3 className="font-extrabold text-slate-900 text-sm mb-2">{title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-xs font-bold tracking-[0.22em] uppercase text-blue-400 mb-4">Apply now</p>
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Ready to begin your placement?
          </h2>
          <p className="text-slate-400 mb-8 text-sm leading-relaxed max-w-xl mx-auto">
            Applications reviewed within 48 hours. Named supervisor and hospital letter within 5 working days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setCurrentPage && setCurrentPage("application")}
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-extrabold text-sm shadow-xl transition-colors">
              Start Your Application <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => setCurrentPage && setCurrentPage("pricing")}
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-3.5 rounded-xl font-bold text-sm ring-1 ring-white/20 hover:bg-white/15 transition-colors">
              View All Fees & Pricing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;
