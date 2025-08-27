import React, { useState } from "react";
import {
  ArrowLeft,
  Clock,
  Users,
  MapPin,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface ParamedicalPageProps {
  setCurrentPage: (page: string) => void;
}

const ParamedicalPage: React.FC<ParamedicalPageProps> = ({
  setCurrentPage,
}) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setCurrentPage("programs")}
            className="flex items-center space-x-2 text-blue-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Programs</span>
          </button>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Paramedical Program</h1>
              <p className="text-xl text-blue-100 mb-8">
                Our Paramedical program provides comprehensive training in diagnostic 
                and therapeutic medical support services. Students gain hands-on experience 
                in laboratories, diagnostic centers, and various healthcare support departments 
                essential to modern medical practice.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center space-x-2 bg-blue-500 bg-opacity-30 px-3 py-1 rounded-full">
                  <Clock className="h-4 w-4" />
                  <span>3-12 weeks</span>
                </div>
                <div className="flex items-center space-x-2 bg-blue-500 bg-opacity-30 px-3 py-1 rounded-full">
                  <Users className="h-4 w-4" />
                  <span>8-12 interns</span>
                </div>
                <div className="flex items-center space-x-2 bg-blue-500 bg-opacity-30 px-3 py-1 rounded-full">
                  <MapPin className="h-4 w-4" />
                  <span>Labs & Diagnostic Centers</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Paramedical Program"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Program Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our Paramedical program is designed to provide students with comprehensive 
              training in essential medical support services, diagnostic procedures, and healthcare technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                Laboratory Training
              </h3>
              <p className="text-gray-600">
                Hands-on experience in clinical laboratories including hematology, 
                biochemistry, microbiology, and pathology testing procedures.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                Diagnostic Procedures
              </h3>
              <p className="text-gray-600">
                Learn various diagnostic techniques including radiology, ultrasound, 
                ECG, and other medical imaging and testing procedures.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                Medical Technology
              </h3>
              <p className="text-gray-600">
                Training on modern medical equipment, quality control procedures, 
                and healthcare information systems used in medical facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Paramedical Departments */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Paramedical Departments & Specialties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Clinical Laboratory",
              "Medical Imaging", 
              "Pharmacy",
              "Physiotherapy Support",
              "Medical Records",
              "Emergency Medical Services",
              "Dialysis Technology",
              "Respiratory Therapy",
              "Medical Equipment Technology"
            ].map((dept, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="font-medium text-gray-900">{dept}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Activities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Program Activities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                Clinical Activities
              </h3>
              <ul className="space-y-3">
                {[
                  "Laboratory sample processing",
                  "Diagnostic test procedures",
                  "Medical equipment operation",
                  "Patient data management",
                  "Quality control testing",
                  "Medical imaging assistance",
                  "Emergency response protocols"
                ].map((activity, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                Educational Activities
              </h3>
              <ul className="space-y-3">
                {[
                  "Laboratory technique workshops",
                  "Medical equipment training",
                  "Safety protocol sessions",
                  "Quality assurance training",
                  "Research methodology",
                  "Healthcare informatics",
                  "Professional development seminars"
                ].map((activity, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fees and Eligibility */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Fees */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">
                Program Fees
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Registration Fee</span>
                  <span className="text-lg font-bold text-blue-600">$350</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Weekly Program Fee</span>
                  <span className="text-lg font-bold text-blue-600">$150/week</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Accommodation (Optional)</span>
                  <span className="text-lg font-bold text-blue-600">$150/week</span>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <p className="text-sm text-blue-700">
                    <strong>Note:</strong> Fees include laboratory access, equipment training, 
                    program materials, and certificate upon completion.
                  </p>
                </div>
              </div>
            </div>

            {/* Eligibility */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">
                Eligibility Requirements
              </h3>
              <ul className="space-y-4">
                {[
                  "Enrolled in paramedical or related healthcare program",
                  "Basic knowledge of medical terminology",
                  "English proficiency for communication",
                  "Valid medical insurance coverage",
                  "Completed basic science courses",
                  "Letter of recommendation from institution",
                  "Interest in medical laboratory or diagnostic services"
                ].map((requirement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Paramedical in Nepal */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Paramedical Program in Nepal?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Training</h3>
              <p className="text-gray-600">
                Learn from experienced medical technologists and laboratory professionals.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Modern Equipment</h3>
              <p className="text-gray-600">
                Access to state-of-the-art laboratory and diagnostic equipment.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Practical Experience</h3>
              <p className="text-gray-600">
                Hands-on training with real medical samples and diagnostic procedures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Paramedical Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join our comprehensive paramedical program and develop your technical skills in Nepal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage("application")}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Apply Now
            </button>
            <button
              onClick={() => setCurrentPage("contact")}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParamedicalPage;
