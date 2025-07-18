import React, {useState} from 'react';
import { ArrowLeft, Clock, Users, MapPin, CheckCircle, Star, Activity, ChevronDown, ChevronUp } from 'lucide-react';

interface PhysiotherapyInternshipPageProps {
  setCurrentPage: (page: string) => void;
}

const PhysiotherapyInternshipPage: React.FC<PhysiotherapyInternshipPageProps> = ({ setCurrentPage }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(prev => (prev === section ? null : section));
  };

  const renderFeeTable = (title: string, data: number[], label: string) => (
    <div className="overflow-x-auto mt-4">
      <table className="w-full border text-sm text-gray-700">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-3 py-2 text-left">{label}</th>
            {data.map((_, index) => (
              <th key={index} className="border px-3 py-2 text-center">
                {index < 5 ? `${index + 1} week` : 'Extra'}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-3 py-2 font-medium">USD</td>
            {data.map((amount, i) => (
              <td key={i} className="border px-3 py-2 text-center">{amount}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => setCurrentPage('programs')}
            className="flex items-center space-x-2 text-emerald-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Programs</span>
          </button>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Physiotherapy Internship</h1>
              <p className="text-xl text-emerald-100 mb-8">
                Specialized physiotherapy training focusing on rehabilitation techniques, therapeutic exercises, and patient care in various clinical settings across Nepal's leading rehabilitation centers.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center space-x-2 bg-emerald-500 bg-opacity-30 px-3 py-1 rounded-full">
                  <Clock className="h-4 w-4" />
                  <span>4-16 weeks</span>
                </div>
                <div className="flex items-center space-x-2 bg-emerald-500 bg-opacity-30 px-3 py-1 rounded-full">
                  <Users className="h-4 w-4" />
                  <span>6-10 interns</span>
                </div>
                <div className="flex items-center space-x-2 bg-emerald-500 bg-opacity-30 px-3 py-1 rounded-full">
                  <MapPin className="h-4 w-4" />
                  <span>Rehabilitation Centers</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="../../assets/images/medical_electives.png" 
                alt="Physiotherapy Internship"
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
                  Our Physiotherapy Internship program offers comprehensive hands-on training in rehabilitation medicine 
                  and therapeutic interventions. Students work alongside experienced physiotherapists in Nepal's premier 
                  rehabilitation centers, gaining exposure to diverse patient populations and treatment modalities.
                </p>
                <p>
                  The program covers musculoskeletal, neurological, cardiopulmonary, and pediatric physiotherapy, 
                  providing a well-rounded clinical experience. Interns participate in patient assessments, treatment 
                  planning, therapeutic interventions, and outcome evaluations.
                </p>
                <p>
                  Nepal's unique healthcare challenges provide excellent learning opportunities in resource-adapted 
                  rehabilitation techniques and community-based physiotherapy approaches that are increasingly relevant 
                  in global healthcare settings.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg h-fit">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">4-16 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Capacity:</span>
                  <span className="font-medium">6-10 interns</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Start Dates:</span>
                  <span className="font-medium">Bi-weekly</span>
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
                className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200"
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
                  <p className="text-teal-600 font-bold">450 USD (Paid at the time of submission of application)</p>
                </div>
                {expandedSection === 'registration' ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {expandedSection === 'registration' && (
                <div className="mt-4 text-gray-600 space-y-2">
                  <h4 className="font-semibold">What’s included in the Registration fee?</h4>
                  <ul className="list-decimal list-inside space-y-1">
                    <li>Registration fee would guarantee your spot in your desired department at the hospital.</li>
                    <li>Confirm your first-day orientation at the hospital with the faculty member.</li>
                    <li>Your application will be processed, and you will receive the approval letter.</li>
                    <li>Support you with onboarding and assist you with your university/college documents.</li>
                  </ul>
                </div>
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
                  <p className="text-teal-600 font-bold">150 USD for one week</p>
                </div>
                {expandedSection === 'accommodation' ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {expandedSection === 'accommodation' && (
                <div className="mt-4 text-gray-600 space-y-4">
                  {renderFeeTable('Accommodation', [150, 300, 450, 600, 750, 150], 'Fee')}
                  <div>
                    <h4 className="font-semibold mt-4">What’s included in Accommodation?</h4>
                    <ul className="list-decimal list-inside space-y-1">
                      <li>Two major meals a day: Breakfast and Dinner.</li>
                      <li>Stay at one of our finest homestays.</li>
                      <li>Accommodation in shared rooms.</li>
                      <li>Reliable WIFI access in the entire premises.</li>
                      <li>24/7 hot and cold water.</li>
                      <li>Self- Laundry services two times a week.</li>
                      <li>Casual weekly activities include yoga and hiking.</li>
                    </ul>
                  </div>
                </div>
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
                  <p className="text-teal-600 font-bold">200 USD for 1 week</p>
                </div>
                {expandedSection === 'hospital' ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {expandedSection === 'hospital' && (
                <div className="mt-4 text-gray-600 space-y-4">
                  {renderFeeTable('Hospital Registration', [200, 200, 250, 300, 350, 50], 'Fee')}
                  <div>
                    <h4 className="font-semibold mt-4">What’s Included in Hospital Registration Fee.</h4>
                    <ul className="list-decimal list-inside space-y-1">
                      <li>Placement at the desired specialities and departments.</li>
                      <li>Daily supervision by faculty members and specialities.</li>
                      <li>Orientation of the Healthcare system in Nepal.</li>
                      <li>Professionals give occasional lectures on healthcare issues in the hospital.</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* <div className="mt-8 p-4 bg-gray-100 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> Fees exclude meals (except listed), flights, visa, and personal expenses. 
                A non-refundable application fee of $100 is required upon submission.
              </p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Clinical Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Clinical Specializations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Musculoskeletal Physiotherapy</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Orthopedic rehabilitation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Sports injury treatment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Manual therapy techniques</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Exercise prescription</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Neurological Physiotherapy</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Stroke rehabilitation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Spinal cord injury care</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Balance and coordination training</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Gait training</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cardiopulmonary Physiotherapy</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Respiratory rehabilitation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Cardiac rehabilitation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Chest physiotherapy</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Exercise tolerance training</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pediatric Physiotherapy</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Developmental delays</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Cerebral palsy management</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Play-based therapy</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Family education</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Physiotherapy</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Home-based rehabilitation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Disability prevention programs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Health promotion activities</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Caregiver training</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Geriatric Physiotherapy</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Fall prevention programs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Mobility enhancement</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Pain management</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Functional independence training</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Learning Outcomes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Clinical Skills</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Comprehensive patient assessment and evaluation techniques</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Evidence-based treatment planning and goal setting</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Manual therapy and therapeutic exercise prescription</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Use of physiotherapy equipment and modalities</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Professional Development</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Cultural competency in healthcare delivery</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Interdisciplinary team collaboration skills</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Resource-adapted rehabilitation approaches</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Patient and family education techniques</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Program Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Academic Requirements</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Currently enrolled in physiotherapy program</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Completed basic physiotherapy sciences</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Minimum 2nd year physiotherapy student</span>
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
                  <span className="text-gray-600">Comprehensive medical insurance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">English proficiency</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Physical fitness for clinical work</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl italic text-gray-700 mb-6">
              "The physiotherapy internship in Nepal exceeded my expectations. I gained invaluable experience 
              working with diverse patient populations and learned innovative rehabilitation techniques that 
              I wouldn't have encountered elsewhere. The mentorship was exceptional."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <img 
                src="https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=100" 
                alt="Student testimonial"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="font-semibold text-gray-900">Michael Chen</p>
                <p className="text-sm text-gray-600">University of Sydney, Physiotherapy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Physiotherapy Journey?</h2>
          <p className="text-xl mb-8 text-emerald-100">
            Join our comprehensive physiotherapy program and develop your clinical skills in Nepal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentPage('application')}
              className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Apply Now
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhysiotherapyInternshipPage;