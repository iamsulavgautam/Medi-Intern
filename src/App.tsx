import React, { useState } from 'react';
import { Menu, X, Stethoscope } from 'lucide-react';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProgramsPage from './components/ProgramsPage';
import DentalElectivePage from './components/DentalElectivePage';
import PhysiotherapyInternshipPage from './components/PhysiotherapyInternshipPage';
import MedicalElectivePage from './components/MedicalElectivePage';
import MidwiferyElectivePage from './components/MidwiferyElectivePage';
import AccommodationPage from './components/AccommodationPage';
import FAQsPage from './components/FAQsPage';
import TestimonialsPage from './components/TestimonialsPage';
import ApplicationPage from './components/ApplicationPage';
import ContactPage from './components/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pages = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'programs', label: 'Programs' },
    { id: 'accommodation', label: 'Accommodation' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'application', label: 'Application' },
    { id: 'contact', label: 'Contact' }
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about': return <AboutPage />;
      case 'programs': return <ProgramsPage setCurrentPage={setCurrentPage} />;
      case 'program-dental-electives': return <DentalElectivePage setCurrentPage={setCurrentPage} />;
      case 'program-physiotherapy-internship': return <PhysiotherapyInternshipPage setCurrentPage={setCurrentPage} />;
      case 'program-medical-elective': return <MedicalElectivePage setCurrentPage={setCurrentPage} />;
      case 'program-midwifery-elective': return <MidwiferyElectivePage setCurrentPage={setCurrentPage} />;
      case 'accommodation': return <AccommodationPage />;
      case 'faqs': return <FAQsPage />;
      case 'testimonials': return <TestimonialsPage />;
      case 'application': return <ApplicationPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Stethoscope className="h-8 w-8 text-teal-600" />
              <span className="text-xl font-bold text-gray-900">Medi Intern</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {pages.map((page) => (
                <button
                  key={page.id}
                  onClick={() => setCurrentPage(page.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    currentPage === page.id
                      ? 'text-teal-600 border-b-2 border-teal-600'
                      : 'text-gray-700 hover:text-teal-600'
                  }`}
                >
                  {page.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-700 hover:text-teal-600"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
                        ? 'text-teal-600 bg-teal-50'
                        : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'
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
      <main>
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Stethoscope className="h-8 w-8 text-teal-400" />
                <span className="text-xl font-bold">Medical Internship Nepal</span>
              </div>
              <p className="text-gray-300 mb-4">
                Providing world-class medical internship opportunities in Nepal's leading hospitals and healthcare facilities.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => setCurrentPage('programs')} className="text-gray-300 hover:text-white transition-colors">Programs</button></li>
                <li><button onClick={() => setCurrentPage('application')} className="text-gray-300 hover:text-white transition-colors">Apply Now</button></li>
                <li><button onClick={() => setCurrentPage('faqs')} className="text-gray-300 hover:text-white transition-colors">FAQs</button></li>
                <li><button onClick={() => setCurrentPage('contact')} className="text-gray-300 hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <p className="text-gray-300 mb-2">Kathmandu, Nepal</p>
              <p className="text-gray-300 mb-2">+977-9862728072</p>
              <p className="text-gray-300">info@medicalinternshipnepal.com</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-300">&copy; 2025 Medical Internship Nepal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;