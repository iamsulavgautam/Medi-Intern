import React, { useState, useEffect, useRef } from "react";
import {
  Menu, X, ChevronDown, ChevronUp, ChevronRight,
  LayoutGrid, Building2, Tag, Stethoscope, Scissors, Baby, Smile,
  Dumbbell, HeartPulse, Globe, Syringe, Leaf, GraduationCap, ClipboardList,
} from "lucide-react";
import HomePage from "./components/HomePage";
import GalleryPage from "./components/GalleryPage";
import AboutPage from "./components/AboutPage";
import ProgramsPage from "./components/ProgramsPage";
import DentalElectivePage from "./components/DentalElectivePage";
import PhysiotherapyInternshipPage from "./components/PhysiotherapyInternshipPage";
import MedicalElectivePage from "./components/MedicalElectivePage";
import MidwiferyElectivePage from "./components/MidwiferyElectivePage";
import SurgeryPage from "./components/SurgeryPage";
import ParamedicalPage from "./components/ParamedicalPage";
import AccommodationPage from "./components/AccommodationPage";
import FAQsPage from "./components/FAQsPage";
import TestimonialsPage from "./components/TestimonialsPage";
import ApplicationPage from "./components/ApplicationPage";
import ContactPage from "./components/ContactPage";
import MedicalTourismPage from "./components/MedicalTourismPage";
import AdminLoginPage from "./components/AdminLoginPage";
import AdminDashboardPage from "./components/AdminDashboardPage";
import PricingPage from "./components/PricingPage";
import MyElectivePage from "./components/MyElectivePage";
import ElectiveTreatmentPage from "./components/ElectiveTreatmentPage";
import SpiritualWellnessPage from "./components/SpiritualWellnessPage";
import ForUniversitiesPage from "./components/ForUniversitiesPage";
import HospitalsPage from "./components/HospitalsPage";
import AnnualReportPage from "./components/AnnualReportPage";
import OutcomesPage from "./components/OutcomesPage";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [adminToken, setAdminToken] = useState("");
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen]   = useState(false);
  const [openDropdown, setOpenDropdown]       = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded]   = useState<string | null>(null);
  const navRef                                = useRef<HTMLElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const adminId = isAdminLoggedIn ? "admin-dashboard" : "admin-login";
  const adminLoginLabel = isAdminLoggedIn ? "Admin Dashboard" : "Admin Login";
  const pages = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "programs", label: "Programs" },
    { id: "pricing", label: "Pricing" },
    { id: "medical-tourism", label: "Medical Tourism" },
    { id: "elective-treatment", label: "Elective Treatment" },
    { id: "spiritual-wellness", label: "Spiritual & Wellness" },
    { id: "gallery", label: "Gallery" },
    { id: "accommodation", label: "Accommodation" },
    { id: "faqs", label: "FAQs" },
    { id: "testimonials", label: "Testimonials" },
    { id: "my-elective", label: "My Elective" },
    { id: "application", label: "Application" },
    { id: "contact", label: "Contact" },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage setCurrentPage={setCurrentPage} />;
      case "about":
        return <AboutPage />;
      case "medical-tourism":
        return <MedicalTourismPage setCurrentPage={setCurrentPage} />;
      case "programs":
        return <ProgramsPage setCurrentPage={setCurrentPage} />;
      case "gallery":
        return <GalleryPage />;
      case "program-dental-electives":
        return <DentalElectivePage setCurrentPage={setCurrentPage} />;
      case "program-physiotherapy-internship":
        return <PhysiotherapyInternshipPage setCurrentPage={setCurrentPage} />;
      case "program-medical-elective":
        return <MedicalElectivePage setCurrentPage={setCurrentPage} />;
      case "program-midwifery-elective":
        return <MidwiferyElectivePage setCurrentPage={setCurrentPage} />;
      case "program-surgery":
        return <SurgeryPage setCurrentPage={setCurrentPage} />;
      case "program-paramedical":
        return <ParamedicalPage setCurrentPage={setCurrentPage} />;
      case "accommodation":
        return <AccommodationPage />;
      case "faqs":
        return <FAQsPage />;
      case "testimonials":
        return <TestimonialsPage setCurrentPage={setCurrentPage} />;
      case "pricing":
        return <PricingPage setCurrentPage={setCurrentPage} />;
      case "my-elective":
        return <MyElectivePage setCurrentPage={setCurrentPage} />;
      case "elective-treatment":
        return <ElectiveTreatmentPage setCurrentPage={setCurrentPage} />;
      case "spiritual-wellness":
        return <SpiritualWellnessPage setCurrentPage={setCurrentPage} />;
      case "for-universities":
        return <ForUniversitiesPage setCurrentPage={setCurrentPage} />;
      case "hospitals":
        return <HospitalsPage setCurrentPage={setCurrentPage} />;
      case "annual-report":
        return <AnnualReportPage setCurrentPage={setCurrentPage} />;
      case "outcomes":
        return <OutcomesPage setCurrentPage={setCurrentPage} />;
      case "application":
        return <ApplicationPage />;
      case "contact":
        return <ContactPage />;
      case "admin-login":
        return (
          <AdminLoginPage
            setCurrentPage={setCurrentPage}
            setAdminToken={setAdminToken}
            setIsAdminLoggedIn={setIsAdminLoggedIn}
          />
        );
      case "admin-dashboard":
        return (
          <AdminDashboardPage
            setCurrentPage={setCurrentPage}
            setIsAdminLoggedIn={setIsAdminLoggedIn}
            adminToken={adminToken}
          />
        );
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* ── Navigation ─────────────────────────────────────────────────────── */}
      <nav ref={navRef} className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-secondary-100 shadow-soft">
        <div className="container-custom">
          <div className="flex items-center h-18 py-3">

            {/* ── LEFT: Logo ────────────────────────────────────────────── */}
            <button
              onClick={() => { setCurrentPage("home"); setOpenDropdown(null); setMobileMenuOpen(false); }}
              className="flex items-center gap-5 group flex-shrink-0 mr-16"
            >
              <img
                src="/logo.jpg"
                alt="Medical Exchange Nepal"
                className="h-[60px] w-[60px] rounded-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <span className="text-2xl font-display font-extrabold tracking-tight text-secondary-900 group-hover:text-primary-600 transition-colors hidden sm:block leading-tight">
                Medical Exchange Nepal
              </span>
            </button>

            {/* ── CENTER: Desktop nav ───────────────────────────────────── */}
            <div className="hidden lg:flex flex-1 items-center justify-center gap-1">

              {/* Home */}
              <button
                onClick={() => { setCurrentPage("home"); setOpenDropdown(null); }}
                className={`btn-ghost text-sm ${currentPage === "home" ? "text-primary-600 bg-primary-50" : ""}`}
              >
                Home
              </button>

              {/* About */}
              <button
                onClick={() => { setCurrentPage("about"); setOpenDropdown(null); }}
                className={`btn-ghost text-sm ${currentPage === "about" ? "text-primary-600 bg-primary-50" : ""}`}
              >
                About
              </button>

              {/* Programs dropdown */}
              <div className="relative">
                <button
                  onClick={() => setOpenDropdown(openDropdown === "programs" ? null : "programs")}
                  className={`btn-ghost text-sm flex items-center gap-1 ${
                    ["programs","pricing","program-medical-elective","program-surgery","program-midwifery-elective","program-dental-electives","program-physiotherapy-internship","program-paramedical"].includes(currentPage)
                      ? "text-primary-600 bg-primary-50" : ""
                  }`}
                >
                  Programs
                  {openDropdown === "programs"
                    ? <ChevronUp className="h-3.5 w-3.5" />
                    : <ChevronDown className="h-3.5 w-3.5" />}
                </button>
                {openDropdown === "programs" && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-secondary-100 overflow-hidden z-50">
                    <div className="px-4 py-3 border-b border-secondary-100 bg-secondary-50">
                      <p className="text-[11px] font-semibold text-secondary-500 uppercase tracking-widest">Overview</p>
                    </div>
                    <div className="p-2">
                      {([
                        { id: "programs",  Icon: LayoutGrid, iconBg: "bg-blue-50",    iconClr: "text-blue-600",    label: "All Programs",      desc: "Browse all 6 specialties"        },
                        { id: "hospitals", Icon: Building2,  iconBg: "bg-slate-100",  iconClr: "text-slate-600",   label: "Partner Hospitals", desc: "TUTH, Bir, Kanti, Paropakar"     },
                        { id: "pricing",   Icon: Tag,        iconBg: "bg-emerald-50", iconClr: "text-emerald-600", label: "Pricing",           desc: "Fee grid & elective calculator"  },
                      ] as const).map(({ id, Icon, iconBg, iconClr, label, desc }) => (
                        <button
                          key={id}
                          onClick={() => { setCurrentPage(id); setOpenDropdown(null); }}
                          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-primary-50 transition-colors text-left group"
                        >
                          <div className={`w-9 h-9 rounded-xl ${iconBg} flex items-center justify-center flex-shrink-0`}>
                            <Icon className={`h-4 w-4 ${iconClr}`} strokeWidth={2} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-secondary-900 text-sm group-hover:text-primary-700">{label}</div>
                            <div className="text-xs text-secondary-500">{desc}</div>
                          </div>
                          <ChevronRight className="h-3.5 w-3.5 text-secondary-300 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                        </button>
                      ))}
                    </div>
                    <div className="px-4 pt-3 pb-2 border-t border-secondary-100 bg-secondary-50">
                      <p className="text-[11px] font-semibold text-secondary-500 uppercase tracking-widest mb-2">Specialties</p>
                      <div className="grid grid-cols-2 gap-1">
                        {([
                          { id: "program-medical-elective",         Icon: Stethoscope, label: "Medical Elective"    },
                          { id: "program-surgery",                  Icon: Scissors,    label: "Surgery"             },
                          { id: "program-midwifery-elective",       Icon: Baby,        label: "Nursing / Midwifery" },
                          { id: "program-dental-electives",         Icon: Smile,       label: "Dental"              },
                          { id: "program-physiotherapy-internship", Icon: Dumbbell,    label: "Physiotherapy"       },
                          { id: "program-paramedical",              Icon: HeartPulse,  label: "Paramedical"         },
                        ] as const).map(({ id, Icon, label }) => (
                          <button
                            key={id}
                            onClick={() => { setCurrentPage(id); setOpenDropdown(null); }}
                            className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-white transition-colors text-left text-xs font-medium text-secondary-700 hover:text-primary-700 group"
                          >
                            <div className="w-5 h-5 rounded-md bg-white flex items-center justify-center flex-shrink-0 group-hover:bg-primary-100 border border-secondary-100">
                              <Icon className="h-3 w-3 text-secondary-500 group-hover:text-primary-600" strokeWidth={2} />
                            </div>
                            {label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Medical Tourism dropdown */}
              <div className="relative">
                <button
                  onClick={() => setOpenDropdown(openDropdown === "tourism" ? null : "tourism")}
                  className={`btn-ghost text-sm flex items-center gap-1 ${
                    ["medical-tourism","elective-treatment","spiritual-wellness","programs","program-medical-elective","program-surgery","program-midwifery-elective","program-dental-electives","program-physiotherapy-internship","program-paramedical"].includes(currentPage)
                      ? "text-primary-600 bg-primary-50" : ""
                  }`}
                >
                  Medical Tourism
                  {openDropdown === "tourism"
                    ? <ChevronUp className="h-3.5 w-3.5" />
                    : <ChevronDown className="h-3.5 w-3.5" />}
                </button>
                {openDropdown === "tourism" && (
                  <div className="absolute top-full left-0 mt-2 w-[340px] bg-white rounded-2xl shadow-2xl border border-secondary-100 overflow-hidden z-50">
                    <button
                      onClick={() => { setCurrentPage("medical-tourism"); setOpenDropdown(null); }}
                      className="w-full flex items-center justify-between px-4 py-3 border-b border-secondary-100 bg-secondary-50 hover:bg-primary-50 transition-colors group"
                    >
                      <div>
                        <p className="text-[11px] font-semibold text-secondary-500 uppercase tracking-widest group-hover:text-primary-600 transition-colors">Medical Tourism Nepal</p>
                        <p className="text-xs text-secondary-400 mt-0.5">Nepal as a global healthcare destination</p>
                      </div>
                      <ChevronRight className="h-3.5 w-3.5 text-secondary-300 group-hover:text-primary-500 transition-colors flex-shrink-0" />
                    </button>
                    <div className="p-2 space-y-0.5">
                      {([
                        { id: "programs",           Icon: Stethoscope,   iconBg: "bg-blue-50",    iconClr: "text-blue-600",    hoverBg: "hover:bg-blue-50",    hoverText: "hover:text-blue-700",    badge: "bg-blue-100 text-blue-700 border-blue-200",       label: "Medical Elective Placement", desc: "Clinical rotations for medical students"    },
                        { id: "elective-treatment", Icon: Syringe,       iconBg: "bg-violet-50",  iconClr: "text-violet-600",  hoverBg: "hover:bg-violet-50",  hoverText: "hover:text-violet-700",  badge: "bg-violet-100 text-violet-700 border-violet-200", label: "Elective Treatment",          desc: "Surgery, fertility, dental — 70–90% off"   },
                        { id: "spiritual-wellness", Icon: Leaf,          iconBg: "bg-emerald-50", iconClr: "text-emerald-600", hoverBg: "hover:bg-emerald-50", hoverText: "hover:text-emerald-700", badge: "bg-emerald-100 text-emerald-700 border-emerald-200", label: "Spiritual & Wellness",        desc: "Ayurveda, yoga, Tibetan healing"            },
                      ] as const).map(({ id, Icon, iconBg, iconClr, hoverBg, hoverText, badge, label, desc }) => (
                        <button
                          key={id}
                          onClick={() => { setCurrentPage(id); setOpenDropdown(null); }}
                          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl ${hoverBg} transition-colors text-left group`}
                        >
                          <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center flex-shrink-0`}>
                            <Icon className={`h-5 w-5 ${iconClr}`} strokeWidth={1.75} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className={`font-semibold text-secondary-900 text-sm ${hoverText} transition-colors`}>{label}</div>
                            <div className="text-xs text-secondary-500">{desc}</div>
                          </div>
                          {currentPage === id
                            ? <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${badge} flex-shrink-0`}>Active</span>
                            : <ChevronRight className="h-3.5 w-3.5 text-secondary-300 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                          }
                        </button>
                      ))}
                    </div>
                    <div className="px-2 pb-2 pt-0.5 border-t border-secondary-100">
                      <button
                        onClick={() => { setCurrentPage("for-universities"); setOpenDropdown(null); }}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-sky-50 transition-colors text-left group`}
                      >
                        <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center flex-shrink-0">
                          <GraduationCap className="h-5 w-5 text-sky-600" strokeWidth={1.75} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-secondary-900 text-sm hover:text-sky-700 transition-colors">For Universities</div>
                          <div className="text-xs text-secondary-500">Institutional partnerships & MoU</div>
                        </div>
                        <ChevronRight className="h-3.5 w-3.5 text-secondary-300 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Flat links */}
              {[
                { id: "gallery",        label: "Gallery"       },
                { id: "testimonials",   label: "Testimonials"  },
                { id: "outcomes",       label: "Outcomes"      },
                { id: "accommodation",  label: "Stay"          },
                { id: "faqs",           label: "FAQs"          },
                { id: "contact",        label: "Contact"       },
              ].map((page) => (
                <button
                  key={page.id}
                  onClick={() => { setCurrentPage(page.id); setOpenDropdown(null); }}
                  className={`btn-ghost text-sm ${currentPage === page.id ? "text-primary-600 bg-primary-50" : ""}`}
                >
                  {page.label}
                </button>
              ))}

            </div>

            {/* ── RIGHT: CTA buttons (desktop) ──────────────────────────── */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              <button
                onClick={() => { setCurrentPage("my-elective"); setOpenDropdown(null); }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                  currentPage === "my-elective"
                    ? "bg-primary-600 text-white border-primary-600"
                    : "border-primary-300 text-primary-600 hover:bg-primary-50"
                }`}
              >
                <ClipboardList className="h-3.5 w-3.5" /> My Elective
              </button>
              <button
                onClick={() => { setCurrentPage("application"); setOpenDropdown(null); }}
                className="btn-primary text-sm whitespace-nowrap"
              >
                Apply Now
              </button>
            </div>

            {/* ── Mobile hamburger ──────────────────────────────────────── */}
            <div className="lg:hidden flex items-center gap-2 ml-auto">
              <button
                onClick={() => { setCurrentPage("my-elective"); setMobileMenuOpen(false); }}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-semibold border border-primary-300 text-primary-600 hover:bg-primary-50 transition-colors"
              >
                <ClipboardList className="h-3.5 w-3.5" /> Portal
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-secondary-700 hover:text-primary-600 hover:bg-secondary-50 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* ── Mobile menu panel ─────────────────────────────────────────── */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-secondary-100 bg-white">
              <div className="px-3 py-4 space-y-1 max-h-[80vh] overflow-y-auto">

                {/* Home, About, Contact flat */}
                {[
                  { id: "home",    label: "Home"    },
                  { id: "about",   label: "About"   },
                  { id: "contact", label: "Contact" },
                ].map((page) => (
                  <button
                    key={page.id}
                    onClick={() => { setCurrentPage(page.id); setMobileMenuOpen(false); }}
                    className={`flex w-full text-left px-3 py-2.5 text-sm font-semibold rounded-xl transition-colors ${
                      currentPage === page.id ? "text-primary-700 bg-primary-50" : "text-secondary-700 hover:text-primary-700 hover:bg-secondary-50"
                    }`}
                  >
                    {page.label}
                  </button>
                ))}

                {/* Programs accordion */}
                <div>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === "programs" ? null : "programs")}
                    className="flex w-full items-center justify-between px-3 py-2.5 text-sm font-semibold rounded-xl text-secondary-700 hover:bg-secondary-50 transition-colors"
                  >
                    Programs
                    {mobileExpanded === "programs" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </button>
                  {mobileExpanded === "programs" && (
                    <div className="ml-3 mt-1 space-y-0.5 border-l-2 border-primary-100 pl-3">
                      {([
                        { id: "programs", Icon: LayoutGrid, label: "All Programs" },
                        { id: "pricing",  Icon: Tag,        label: "Pricing" },
                        { id: "program-medical-elective",         Icon: Stethoscope, label: "Medical Elective" },
                        { id: "program-surgery",                  Icon: Scissors,    label: "Surgery" },
                        { id: "program-midwifery-elective",       Icon: Baby,        label: "Nursing / Midwifery" },
                        { id: "program-dental-electives",         Icon: Smile,       label: "Dental" },
                        { id: "program-physiotherapy-internship", Icon: Dumbbell,    label: "Physiotherapy" },
                        { id: "program-paramedical",              Icon: HeartPulse,  label: "Paramedical" },
                      ] as const).map(({ id, Icon, label }) => (
                        <button
                          key={id}
                          onClick={() => { setCurrentPage(id); setMobileMenuOpen(false); setMobileExpanded(null); }}
                          className={`flex w-full items-center gap-2.5 px-3 py-2 text-sm rounded-lg transition-colors ${
                            currentPage === id ? "text-primary-700 bg-primary-50 font-semibold" : "text-secondary-600 hover:text-primary-700 hover:bg-secondary-50"
                          }`}
                        >
                          <Icon className="h-4 w-4 flex-shrink-0" strokeWidth={1.75} />{label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Medical Tourism accordion */}
                <div>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === "tourism" ? null : "tourism")}
                    className="flex w-full items-center justify-between px-3 py-2.5 text-sm font-semibold rounded-xl text-secondary-700 hover:bg-secondary-50 transition-colors"
                  >
                    Medical Tourism
                    {mobileExpanded === "tourism" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </button>
                  {mobileExpanded === "tourism" && (
                    <div className="ml-3 mt-1 space-y-0.5 border-l-2 border-primary-100 pl-3">
                      {([
                        { id: "medical-tourism",    Icon: Globe,         label: "Overview"                  },
                        { id: "programs",           Icon: Stethoscope,   label: "Medical Elective Placement" },
                        { id: "elective-treatment", Icon: Syringe,       label: "Elective Treatment"         },
                        { id: "spiritual-wellness", Icon: Leaf,          label: "Spiritual & Wellness"       },
                        { id: "for-universities",   Icon: GraduationCap, label: "For Universities"           },
                      ] as const).map(({ id, Icon, label }) => (
                        <button
                          key={id}
                          onClick={() => { setCurrentPage(id); setMobileMenuOpen(false); setMobileExpanded(null); }}
                          className={`flex w-full items-center gap-2.5 px-3 py-2 text-sm rounded-lg transition-colors ${
                            currentPage === id ? "text-primary-700 bg-primary-50 font-semibold" : "text-secondary-600 hover:text-primary-700 hover:bg-secondary-50"
                          }`}
                        >
                          <Icon className="h-4 w-4 flex-shrink-0" strokeWidth={1.75} />{label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* More flat links */}
                {[
                  { id: "gallery",       label: "Gallery"       },
                  { id: "testimonials",  label: "Testimonials"  },
                  { id: "accommodation", label: "Accommodation" },
                  { id: "faqs",          label: "FAQs"          },
                ].map((page) => (
                  <button
                    key={page.id}
                    onClick={() => { setCurrentPage(page.id); setMobileMenuOpen(false); }}
                    className={`flex w-full text-left px-3 py-2.5 text-sm font-semibold rounded-xl transition-colors ${
                      currentPage === page.id ? "text-primary-700 bg-primary-50" : "text-secondary-700 hover:text-primary-700 hover:bg-secondary-50"
                    }`}
                  >
                    {page.label}
                  </button>
                ))}

                {/* Divider + CTAs */}
                <div className="border-t border-secondary-100 pt-3 mt-3 space-y-2">
                  <button
                    onClick={() => { setCurrentPage("my-elective"); setMobileMenuOpen(false); }}
                    className="flex w-full items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl border border-primary-300 text-primary-600 hover:bg-primary-50 transition-colors"
                  >
                    <ClipboardList className="h-4 w-4" /> My Elective Portal
                  </button>
                  <button
                    onClick={() => { setCurrentPage("application"); setMobileMenuOpen(false); }}
                    className="block w-full px-4 py-3 text-sm font-semibold rounded-xl bg-primary-600 text-white hover:bg-primary-700 transition-colors text-center"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-1">{renderPage()}</main>

      {/* WhatsApp Floating Action Button */}
      <a
        href="https://wa.me/9779862728072?text=Hi%2C%20I%27m%20interested%20in%20a%20medical%20elective%20in%20Nepal."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
      >
        {/* WhatsApp SVG icon */}
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        {/* Tooltip */}
        <span className="absolute right-16 bg-secondary-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
          Chat on WhatsApp
        </span>
      </a>

      {/* Footer */}
      <footer className="bg-secondary-900 text-secondary-300 border-t border-secondary-800 mt-auto">
        <div className="container-custom py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand + About */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/logo.jpg"
                  alt="Medical Internship Nepal"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <span className="text-xl font-display font-bold text-white">
                  Medical Internship Nepal
                </span>
              </div>
              <p className="text-secondary-400 leading-relaxed max-w-md">
                Providing world-class medical internship opportunities in
                Nepal's leading hospitals and healthcare facilities.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-display font-semibold text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {[
                  { label: "Programs", page: "programs" },
                  { label: "Pricing", page: "pricing" },
                  { label: "Medical Tourism", page: "medical-tourism" },
                  { label: "Elective Treatment", page: "elective-treatment" },
                  { label: "Spiritual & Wellness", page: "spiritual-wellness" },
                  { label: "Partner Hospitals", page: "hospitals" },
                  { label: "For Universities", page: "for-universities" },
                  { label: "2025 Impact Report", page: "annual-report" },
                  { label: "Alumni Outcomes", page: "outcomes" },
                  { label: "Gallery", page: "gallery" },
                  { label: "Apply Now", page: "application" },
                  { label: "My Elective Portal", page: "my-elective" },
                  { label: "FAQs", page: "faqs" },
                  { label: "Contact", page: "contact" },
                ].map((link) => (
                  <li key={link.page}>
                    <button
                      onClick={() => setCurrentPage(link.page)}
                      className="hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-display font-semibold text-white mb-4">
                Contact Info
              </h3>
              <ul className="space-y-2 text-secondary-400">
                <li>Kathmandu, Nepal</li>
                <li>+977-9862728072</li>
                <li>info@medicalinternshipnepal.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-secondary-800 mt-8 pt-6">
            <div className="flex justify-center items-center gap-2 flex-wrap">
              <p className="text-sm text-secondary-500">
                &copy; 2025 Medical Internship Nepal. All rights reserved.
              </p>
              <span className="text-sm text-secondary-500">|</span>{" "}
              {/* optional separator */}
              <span className="text-sm text-secondary-500">
                Developed by
              </span>{" "}
              <a
                href="https://www.sulavgautam.info.np/"
                target="_blank"
                className="text-secondary-400 hover:text-primary-400"
              >
                Sulav Gautam
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
