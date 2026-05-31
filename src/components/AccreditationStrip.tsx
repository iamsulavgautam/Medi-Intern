import React from "react";
import { ExternalLink } from "lucide-react";

const partners = [
  { name: "Tribhuvan University Teaching Hospital", abbr: "TUTH", url: "https://tuth.edu.np",          type: "Hospital Partner",  color: "bg-blue-600" },
  { name: "Bir Hospital",                           abbr: "BIR",  url: "https://birhospital.gov.np",   type: "Hospital Partner",  color: "bg-indigo-600" },
  { name: "Kanti Children's Hospital",              abbr: "KCH",  url: "https://kantihospital.gov.np", type: "Hospital Partner",  color: "bg-violet-600" },
  { name: "Paropakar Maternity Hospital",           abbr: "PMH",  url: "https://pmhnepal.org",          type: "Hospital Partner",  color: "bg-sky-600" },
  { name: "Nepal Medical Council",                  abbr: "NMC",  url: "https://nmc.org.np",            type: "Supervisor Registry", color: "bg-emerald-600" },
  { name: "IFMSA Nepal",                            abbr: "IFMSA",url: "https://ifmsa.org",             type: "Exchange Network",  color: "bg-teal-600" },
];

const AccreditationStrip: React.FC = () => (
  <section className="bg-white border-y border-slate-100 py-14">
    <div className="layout-container">
      <p className="text-center text-xs font-bold tracking-[0.22em] text-slate-400 uppercase mb-2">
        Hospital Partners &amp; Affiliations
      </p>
      <p className="text-center text-xs text-slate-400 mb-10">
        Click any logo to verify on the institution's official website
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {partners.map((p) => (
          <a
            key={p.abbr}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`Verify: ${p.name}`}
            className="group flex items-center gap-3 px-5 py-4 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-md transition-all duration-200"
          >
            <div className={`w-10 h-10 ${p.color} rounded-xl flex items-center justify-center text-xs font-black text-white shadow-sm flex-shrink-0`}>
              {p.abbr.slice(0, 3)}
            </div>
            <div>
              <div className="text-sm font-black text-slate-900 leading-tight">{p.name}</div>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="text-xs text-slate-400">{p.type}</span>
                <ExternalLink className="h-2.5 w-2.5 text-slate-300 group-hover:text-blue-500 transition-colors" />
              </div>
            </div>
          </a>
        ))}
      </div>
      <p className="text-center text-xs text-slate-400 mt-8 max-w-lg mx-auto">
        All supervisor registration numbers are verifiable at{" "}
        <a href="https://nmc.org.np" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">nmc.org.np</a>.
        {" "}If a badge link returns a 404, treat it as a red flag — ours don't.
      </p>
    </div>
  </section>
);

export default AccreditationStrip;
