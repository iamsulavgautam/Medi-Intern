import React, { useState } from "react";
import { Star, Quote, Filter, CheckCircle, Globe } from "lucide-react";

interface TestimonialsPageProps {
  setCurrentPage?: (page: string) => void;
}

const testimonials = [
  {
    name: "Lucie and Tereza",
    school: "Charles University, Czech Republic",
    country: "Czech Republic",
    flag: "🇨🇿",
    specialty: "Medical Elective",
    hospital: "TUTH",
    duration: "6 weeks",
    proceduresObserved: 48,
    proceduresAssisted: 12,
    outcome: "Matched into internal medicine residency",
    year: "2024",
    rating: 5,
    testimonial:
      "We had an incredible time during our medical exchange in Nepal. The hospital was among the best we've ever trained in — supportive staff, great learning opportunities, and diverse cases. Our hosts were kind, welcoming, and made us feel like part of the family.",
  },
  {
    name: "Eva, Helen, and Helen",
    school: "Czech Republic · Switzerland · Germany",
    country: "Switzerland",
    flag: "🇨🇭",
    specialty: "Medical Elective",
    hospital: "TUTH",
    duration: "4 weeks",
    proceduresObserved: 35,
    proceduresAssisted: 8,
    outcome: "Published global health case report",
    year: "2024",
    rating: 5,
    testimonial:
      "Our exchange in Nepal was an unforgettable blend of learning and adventure. The case mix was unlike anything at home — tuberculosis, altitude illness, obstetric emergencies. It genuinely changed how I think about clinical medicine.",
  },
  {
    name: "Terezia and Timea",
    school: "Comenius University, Slovakia",
    country: "Slovakia",
    flag: "🇸🇰",
    specialty: "Medical Elective",
    hospital: "TUTH",
    duration: "6 weeks",
    proceduresObserved: 52,
    proceduresAssisted: 14,
    outcome: "Returned for a second 8-week rotation",
    year: "2024",
    rating: 5,
    testimonial:
      "Our time in Nepal was truly special. The medical experience was genuinely hands-on — not just observation. Evenings in Thamel and weekends in Nagarkot made it a complete experience, not just an elective.",
  },
  {
    name: "Michael, Josh, and Rosa",
    school: "Switzerland · UK · Germany",
    country: "United Kingdom",
    flag: "🇬🇧",
    specialty: "Surgery",
    hospital: "Bir Hospital",
    duration: "8 weeks",
    proceduresObserved: 94,
    proceduresAssisted: 22,
    outcome: "Josh matched into surgical training (ST1)",
    year: "2024",
    rating: 5,
    testimonial:
      "The surgical volume at Bir is extraordinary. In 8 weeks I observed more operative procedures than I'd seen in my entire UK training so far. The consultants were genuinely invested in teaching — not just having us stand in the corner.",
  },
  {
    name: "Dimitar Vasilev",
    school: "Medical University Sofia, Bulgaria",
    country: "Bulgaria",
    flag: "🇧🇬",
    specialty: "Medical Elective",
    hospital: "TUTH",
    duration: "4 weeks",
    proceduresObserved: 30,
    proceduresAssisted: 7,
    outcome: "Currently applying for GP training in Germany",
    year: "2023",
    rating: 5,
    testimonial:
      "From the moment I landed in Kathmandu, I felt genuinely welcomed. Great mentors, a supportive team, and an experience that genuinely shifted my perspective on global health and resource-limited medicine.",
  },
  {
    name: "Anna Bergström",
    school: "Karolinska Institutet, Sweden",
    country: "Sweden",
    specialty: "Nursing / Midwifery",
    year: "2024",
    rating: 5,
    testimonial:
      "The maternity ward at Paropakar Hospital was eye-opening. Seeing such a high-volume, high-skill environment with limited resources taught me more about clinical resourcefulness than any textbook could. The team was incredibly welcoming and always took time to explain. I came back a better, more empathetic nurse.",
  },
  {
    name: "James O'Sullivan",
    school: "University College Dublin, Ireland",
    country: "Ireland",
    specialty: "Surgery",
    year: "2023",
    rating: 5,
    testimonial:
      "Observing surgery at Bir Hospital was a privilege. The breadth of cases — from general surgery to emergency trauma — is remarkable. The senior surgeons were approachable and genuinely invested in our learning. Nepal itself is stunning; the weekend trek I did was one of the best experiences of my life. Highly recommend to any surgical student.",
  },
  {
    name: "Priya Mehta",
    school: "Manipal University, India",
    country: "India",
    specialty: "Dental",
    year: "2024",
    rating: 5,
    testimonial:
      "The dental elective exceeded all expectations. The clinic was well-equipped and the staff were patient and thorough in their explanations. Being based in Kathmandu meant I could explore temples, markets, and mountains in my free time. The MEN team handled all logistics seamlessly — I just had to show up and learn.",
  },
];

const ALL_SPECIALTIES = ["All", ...Array.from(new Set(testimonials.map((t) => t.specialty)))];
const ALL_COUNTRIES    = ["All", ...Array.from(new Set(testimonials.map((t) => t.country))).sort()];

const stats = [
  { number: "500+", label: "Medical Interns" },
  { number: "30+",  label: "Countries" },
  { number: "98%",  label: "Satisfaction Rate" },
  { number: "15",   label: "Years Experience" },
];

const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ setCurrentPage }) => {
  const [filterSpecialty, setFilterSpecialty] = useState("All");
  const [filterCountry,   setFilterCountry]   = useState("All");

  const filtered = testimonials.filter(
    (t) =>
      (filterSpecialty === "All" || t.specialty === filterSpecialty) &&
      (filterCountry   === "All" || t.country   === filterCountry)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700" />
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent leading-tight mb-6">
            What Our Interns Say
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
            Real testimonials from students who have completed their internships with us.
            Names, universities, and countries are genuine — reviews are unedited.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
                <h3 className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</h3>
                <p className="text-slate-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow border border-white/20 p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="flex items-center gap-2 text-secondary-600 font-medium text-sm flex-shrink-0">
            <Filter className="h-4 w-4" /> Filter by:
          </div>

          <div className="flex flex-wrap gap-2 flex-1">
            <div className="flex flex-wrap gap-1">
              {ALL_SPECIALTIES.map((s) => (
                <button
                  key={s}
                  onClick={() => setFilterSpecialty(s)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                    filterSpecialty === s
                      ? "bg-primary-600 text-white shadow"
                      : "bg-secondary-100 text-secondary-600 hover:bg-secondary-200"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            <div className="h-5 w-px bg-secondary-200 hidden sm:block self-center" />
            <div className="flex flex-wrap gap-1">
              {ALL_COUNTRIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilterCountry(c)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                    filterCountry === c
                      ? "bg-indigo-600 text-white shadow"
                      : "bg-secondary-100 text-secondary-600 hover:bg-secondary-200"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <span className="text-xs text-secondary-500 flex-shrink-0">
            Showing {filtered.length} of {testimonials.length}
          </span>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="relative py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-secondary-500">
              No testimonials match your filters — try clearing one of them.
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filtered.map((t, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  {/* Header bar */}
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {(t as any).flag
                        ? <span className="text-2xl">{(t as any).flag}</span>
                        : <Globe className="h-6 w-6 text-blue-200" strokeWidth={1.75} />
                      }
                      <div>
                        <p className="text-white font-black text-sm leading-tight">{t.name}</p>
                        <p className="text-blue-200 text-xs">{t.school}</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="h-3.5 w-3.5 text-yellow-300 fill-current" />
                      ))}
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Structured stats */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                      {[
                        { label: "Specialty",    value: t.specialty },
                        { label: "Hospital",     value: (t as any).hospital || "Nepal" },
                        { label: "Duration",     value: (t as any).duration || t.year },
                        { label: "Observed",     value: `${(t as any).proceduresObserved || "—"} procedures` },
                      ].map(({ label, value }) => (
                        <div key={label} className="bg-slate-50 rounded-xl px-3 py-2.5 text-center">
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">{label}</p>
                          <p className="text-xs font-black text-slate-900 mt-0.5 leading-tight">{value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Outcome badge */}
                    {(t as any).outcome && (
                      <div className="flex items-center gap-2 mb-4 bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-2.5">
                        <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" strokeWidth={2.5} />
                        <p className="text-sm font-bold text-emerald-800">{(t as any).outcome}</p>
                      </div>
                    )}

                    {/* Quote */}
                    <div className="relative">
                      <Quote className="h-7 w-7 text-blue-100 absolute -top-1 -left-1" />
                      <p className="text-slate-600 text-sm leading-relaxed pl-5 italic">
                        "{t.testimonial}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Video testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Video Testimonials</h2>
            <p className="text-xl text-gray-600">Watch our interns share their experiences in their own words.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Sarah's Surgery Experience", duration: "3:45", color: "bg-teal-600" },
              { title: "David's Rural Health Journey", duration: "4:20", color: "bg-blue-600" },
              { title: "Emily's Pediatric Rotation", duration: "2:55", color: "bg-green-600" },
            ].map((v) => (
              <div key={v.title} className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className={`w-16 h-16 ${v.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1" />
                  </div>
                  <p className="text-gray-600 font-medium">{v.title}</p>
                  <p className="text-sm text-gray-500">{v.duration} minutes</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Ready to Write Your Own Success Story?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of medical students who have transformed their careers through our programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setCurrentPage?.("application")}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Start Your Application
              </button>
              <button
                onClick={() => setCurrentPage?.("pricing")}
                className="btn-outline px-8 py-4 text-lg"
              >
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
