import React, { useState } from "react";
import { Menu, X, Stethoscope } from "lucide-react";
import HomePage from "./components/HomePage";
import GalleryPage from "./components/GalleryPage";
import AboutPage from "./components/AboutPage";
import ProgramsPage from "./components/ProgramsPage";
import DentalElectivePage from "./components/DentalElectivePage";
import PhysiotherapyInternshipPage from "./components/PhysiotherapyInternshipPage";
import MedicalElectivePage from "./components/MedicalElectivePage";
import MidwiferyElectivePage from "./components/MidwiferyElectivePage";
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
    { id: adminId, label: adminLoginLabel },
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
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Stethoscope className="h-8 w-8 text-teal-600" />
              <span className="text-xl font-extrabold tracking-tight text-gray-900">
                Medi Intern
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {pages
                .filter((p) => p.id !== "application")
                .map((page) => (
                  <button
                    key={page.id}
                    onClick={() => setCurrentPage(page.id)}
                    className={`btn-ghost ${
                      currentPage === page.id ? "text-teal-700" : ""
                    }`}
                  >
                    {page.label}
                  </button>
                ))}
              <button
                onClick={() => setCurrentPage("application")}
                className="btn-primary ml-2"
              >
                Apply
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-700 hover:text-teal-600"
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
            <div className="md:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {pages.map((page) => (
                  <button
                    key={page.id}
                    onClick={() => {
                      setCurrentPage(page.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 ${
                      currentPage === page.id
                        ? "text-teal-700 bg-teal-50"
                        : "text-gray-700 hover:text-teal-700 hover:bg-gray-50"
                    }`}
                  >
                    {page.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      <main>{renderPage()}</main>

      {/* Footer */}
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand + About */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Stethoscope className="h-8 w-8 text-teal-400" />
                <span className="text-xl font-bold text-white">
                  Medical Internship Nepal
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Providing world-class medical internship opportunities in
                Nepal's leading hospitals and healthcare facilities.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
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
                      className="hover:text-teal-400 transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Contact Info
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>Kathmandu, Nepal</li>
                <li>+977-9862728072</li>
                <li>info@medicalinternshipnepal.com</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-10 pt-6 text-center">
            <p className="text-sm text-gray-500">
              &copy; 2025 Medical Internship Nepal. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
