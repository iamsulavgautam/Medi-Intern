import React, { useState } from 'react';
import { ArrowLeft, Clock, Users, MapPin, CheckCircle, Star, ChevronDown, ChevronUp } from 'lucide-react';

interface DentalElectivePageProps {
  setCurrentPage: (page: string) => void;
}

const DentalElectivePage: React.FC<DentalElectivePageProps> = ({ setCurrentPage }) => {

    const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(prev => (prev === section ? null : section));
  };

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => setCurrentPage('programs')}
            className="flex items-center space-x-2 text-teal-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Programs</span>
          </button>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Dental Electives</h1>
              <p className="text-xl text-teal-100 mb-8">
                Comprehensive dental training program offering hands-on experience in various dental specialties including oral surgery, orthodontics, and general dentistry in Nepal's leading dental hospitals.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center space-x-2 bg-teal-500 bg-opacity-30 px-3 py-1 rounded-full">
                  <Clock className="h-4 w-4" />
                  <span>2-12 weeks</span>
                </div>
                <div className="flex items-center space-x-2 bg-teal-500 bg-opacity-30 px-3 py-1 rounded-full">
                  <Users className="h-4 w-4" />
                  <span>4-8 interns</span>
                </div>
                <div className="flex items-center space-x-2 bg-teal-500 bg-opacity-30 px-3 py-1 rounded-full">
                  <MapPin className="h-4 w-4" />
                  <span>Dental Hospitals</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://raw.githubusercontent.com/coder-backend/Medical-Internship/refs/heads/main/assets/images/dental.png" 
                alt="Dental Electives"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Program Overview</h2>
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  Our Dental Electives program provides international dental students with comprehensive hands-on experience 
                  in Nepal's premier dental hospitals and clinics. This program is designed to expose students to a wide 
                  range of dental conditions and treatment modalities while working alongside experienced dental professionals.
                </p>
                <p>
                  Students will gain practical experience in general dentistry, oral surgery, orthodontics, periodontics, 
                  and pediatric dentistry. The program emphasizes both clinical skills development and cultural competency 
                  in providing dental care to diverse patient populations.
                </p>
                <p>
                  Nepal's unique epidemiological profile offers exposure to dental conditions that may be less common in 
                  developed countries, providing valuable learning opportunities for future dental practitioners.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg h-fit">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">2-20 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Capacity:</span>
                  <span className="font-medium">4-8 interns</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Start Dates:</span>
                  <span className="font-medium">Monthly</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Language:</span>
                  <span className="font-medium">English</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Certificate:</span>
                  <span className="font-medium">Provided</span>
                </div>
              </div>
              <button 
                onClick={() => setCurrentPage('application')}
                className="w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Fees */}
            <section className="py-20 bg-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Program Fees</h2>
          <div className="space-y-6">
            {/* Registration Fee */}
            <div className="bg-white rounded-lg shadow p-6">
              <button
                onClick={() => toggleSection('registration')}
                className="flex justify-between items-center w-full text-left"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">One-time Registration Fee</h3>
                  <p className="text-teal-600 font-bold">450 USD</p>
                </div>
                {expandedSection === 'registration' ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {expandedSection === 'registration' && (
                <ul className="mt-4 space-y-3 text-gray-600">
                  <li>- Guaranteed spot in desired hospital department</li>
                  <li>- First-day orientation with faculty</li>
                  <li>- Application processing & approval letter</li>
                  <li>- Support with onboarding & university documents</li>
                </ul>
              )}
            </div>

            {/* Accommodation Fee */}
            <div className="bg-white rounded-lg shadow p-6">
              <button
                onClick={() => toggleSection('accommodation')}
                className="flex justify-between items-center w-full text-left"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Accommodation Fee</h3>
                  <p className="text-teal-600 font-bold">150 USD per week</p>
                </div>
                {expandedSection === 'accommodation' ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {expandedSection === 'accommodation' && (
                <ul className="mt-4 space-y-3 text-gray-600">
                  <li>- Two meals a day: Breakfast & Dinner</li>
                  <li>- Stay at premium homestays (shared rooms)</li>
                  <li>- WiFi access throughout premises</li>
                  <li>- 24/7 hot and cold water</li>
                  <li>- Laundry services twice a week</li>
                  <li>- Weekly yoga & hiking activities</li>
                </ul>
              )}
            </div>

            {/* Hospital Registration Fee */}
            <div className="bg-white rounded-lg shadow p-6">
              <button
                onClick={() => toggleSection('hospital')}
                className="flex justify-between items-center w-full text-left"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Hospital Registration Fee</h3>
                  <p className="text-teal-600 font-bold">For the first two weeks, that is 200 USD, and 50 USD will be added each week after the two weeks.</p>
                </div>
                {expandedSection === 'hospital' ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {expandedSection === 'hospital' && (
                <ul className="mt-4 space-y-3 text-gray-600">
                  <li>- Placement in chosen specialties</li>
                  <li>- Daily supervision by faculty & specialists</li>
                  <li>- Orientation to Nepal’s healthcare system</li>
                  <li>- Occasional hospital lectures on healthcare topics</li>
                </ul>
              )}
            </div>
{/* 
            <div className="mt-8 p-4 bg-gray-100 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> Fees exclude meals (except listed), flights, visa, and personal expenses. 
                A non-refundable application fee of $100 is required upon submission.
              </p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Clinical Rotations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Clinical Rotations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">General Dentistry</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Routine dental examinations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Restorative procedures</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Preventive care</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Patient consultation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Oral Surgery</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Tooth extractions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Minor surgical procedures</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Biopsy procedures</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Post-operative care</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Orthodontics</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Orthodontic assessments</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Appliance adjustments</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Treatment planning</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Progress monitoring</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Periodontics</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Gum disease treatment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Scaling and root planing</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Periodontal maintenance</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Patient education</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pediatric Dentistry</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Child behavior management</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Preventive treatments</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Fluoride applications</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Parent counseling</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Prosthodontics</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Crown and bridge work</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Denture fabrication</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Implant procedures</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Prosthetic maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Program Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Academic Requirements</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Currently enrolled in dental school</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Completed basic dental sciences</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Minimum 3rd year dental student</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Good academic standing</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">General Requirements</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Valid passport (6+ months)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Medical insurance coverage</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">English proficiency</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Hepatitis B vaccination</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl italic text-gray-700 mb-6">
              "The dental elective program in Nepal was an incredible experience. I gained hands-on experience 
              with a variety of dental procedures and learned so much from the skilled dental professionals. 
              The cultural immersion aspect made this program truly unique and memorable."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <img 
                src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=100" 
                alt="Student testimonial"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="font-semibold text-gray-900">Sarah Mitchell</p>
                <p className="text-sm text-gray-600">University of Toronto, Dental School</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Dental Elective?</h2>
          <p className="text-xl mb-8 text-teal-100">
            Join our comprehensive dental program and gain invaluable clinical experience in Nepal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentPage('application')}
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Apply Now
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DentalElectivePage;