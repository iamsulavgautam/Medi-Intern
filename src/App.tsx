import React, { useState, useEffect } from "react";
import { Menu, X, Stethoscope } from "lucide-react";
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
import AdminLoginPage from "./components/AdminLoginPage";
import AdminDashboardPage from "./components/AdminDashboardPage";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [adminToken, setAdminToken] = useState("");
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { id: "gallery", label: "Gallery" },
    { id: "accommodation", label: "Accommodation" },
    { id: "faqs", label: "FAQs" },
    { id: "testimonials", label: "Testimonials" },
    { id: "application", label: "Application" },
    { id: "contact", label: "Contact" },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage setCurrentPage={setCurrentPage} />;
      case "about":
        return <AboutPage />;
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
        return <TestimonialsPage />;
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-secondary-100 shadow-soft">
        <div className="container-custom">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => setCurrentPage("home")}
            >
              <img 
                src="/logo.jpg" 
                alt="Medical Exchange Nepal" 
                className="h-12 w-12 rounded-full object-cover group-hover:scale-110 transition-transform duration-200" 
              />
              <span className="text-xl font-display hover:text-blue-500 font-bold tracking-tight text-secondary-900">
                Medical Exchange Nepal
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {pages
                .filter((p) => p.id !== "application")
                .map((page) => (
                  <button
                    key={page.id}
                    onClick={() => setCurrentPage(page.id)}
                    className={`btn-ghost ${
                      currentPage === page.id
                        ? "text-primary-600 bg-primary-50"
                        : ""
                    }`}
                  >
                    {page.label}
                  </button>
                ))}
              <button
                onClick={() => setCurrentPage("application")}
                className="btn-primary ml-2 whitespace-nowrap"
              >
                Apply Now
              </button>
              <button
                onClick={() => setCurrentPage(adminId)}
                className={`btn-ghost ml-2 whitespace-nowrap ${
                  currentPage === adminId
                    ? "text-primary-600 bg-primary-50"
                    : ""
                }`}
              >
                {adminLoginLabel}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-secondary-700 hover:text-primary-600"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-secondary-100">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {pages
                  .filter((p) => p.id !== "application")
                  .map((page) => (
                    <button
                      key={page.id}
                      onClick={() => {
                        setCurrentPage(page.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`block w-full text-left px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200 ${
                        currentPage === page.id
                          ? "text-primary-700 bg-primary-50"
                          : "text-secondary-700 hover:text-primary-700 hover:bg-secondary-50"
                      }`}
                    >
                      {page.label}
                    </button>
                  ))}
                {/* Apply Now button for mobile */}
                <button
                  onClick={() => {
                    setCurrentPage("application");
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-200 mt-2 whitespace-nowrap"
                >
                  Apply Now
                </button>
                {/* Admin Login button for mobile */}
                <button
                  onClick={() => {
                    setCurrentPage(adminId);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200 mt-1 whitespace-nowrap ${
                    currentPage === adminId
                      ? "text-primary-700 bg-primary-50"
                      : "text-secondary-700 hover:text-primary-700 hover:bg-secondary-50"
                  }`}
                >
                  {adminLoginLabel}
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-1">{renderPage()}</main>

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
                  className="h-8 w-8 rounded-full object-cover" 
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
                  { label: "Gallery", page: "gallery" },
                  { label: "Apply Now", page: "application" },
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

          {/* Bottom Bar */}
          <div className="border-t border-secondary-800 mt-8 pt-6 text-center">
            <p className="text-sm text-secondary-500">
              &copy; 2025 Medical Internship Nepal. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
