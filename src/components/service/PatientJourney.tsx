import React from "react";
import type { LucideIcon } from "lucide-react";

export interface JourneyStep {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

interface PatientJourneyProps {
  title: string;
  subtitle: string;
  steps: JourneyStep[];
  accentClass?: string;
}

const PatientJourney: React.FC<PatientJourneyProps> = ({
  title,
  subtitle,
  steps,
  accentClass = "bg-violet-600",
}) => (
  <section className="py-14 bg-white" aria-label="Patient journey">
    <div className="layout-container">
      <div className="text-center mb-10 max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">{title}</h2>
        <p className="text-slate-600">{subtitle}</p>
      </div>
      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {steps.map(({ step, title: stepTitle, description, icon: Icon }) => (
          <li key={step} className="card p-5 flex flex-col h-full">
            <div className={`w-10 h-10 rounded-lg ${accentClass} text-white flex items-center justify-center text-sm font-bold mb-3`}>
              {step}
            </div>
            <Icon className="h-5 w-5 text-slate-400 mb-2" aria-hidden />
            <h3 className="font-semibold text-slate-900 text-sm mb-2">{stepTitle}</h3>
            <p className="text-slate-600 text-xs leading-relaxed flex-1">{description}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default PatientJourney;
