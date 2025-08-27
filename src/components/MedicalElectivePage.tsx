import React, { useState } from "react";
import {
  ArrowLeft,
  Clock,
  Users,
  MapPin,
  CheckCircle,
  Star,
  Heart,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface MedicalElectivePageProps {
  setCurrentPage: (page: string) => void;
}

const MedicalElectivePage: React.FC<MedicalElectivePageProps> = ({
  setCurrentPage,
}) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
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
              <h1 className="text-5xl font-bold mb-6">Medical Elective</h1>
              <p className="text-xl text-blue-100 mb-8">
                Comprehensive medical elective program covering multiple
                specialties including internal medicine, surgery, pediatrics,
                and emergency medicine in Nepal's premier teaching hospitals.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center space-x-2 bg-blue-500 bg-opacity-30 px-3 py-1 rounded-full">
                  <Clock className="h-4 w-4" />
                  <span>4-20 weeks</span>
                </div>
                <div className="flex items-center space-x-2 bg-blue-500 bg-opacity-30 px-3 py-1 rounded-full">
                  <Users className="h-4 w-4" />
                  <span>8-12 interns</span>
                </div>
                <div className="flex items-center space-x-2 bg-blue-500 bg-opacity-30 px-3 py-1 rounded-full">
                  <MapPin className="h-4 w-4" />
                  <span>Teaching Hospitals</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://raw.githubusercontent.com/coder-backend/Medical-Internship/refs/heads/main/assets/images/medical_electives.png"
                alt="Medical Elective"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Program Overview
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  Our Medical Elective program offers the most comprehensive
                  clinical experience available to international medical
                  students in Nepal. This flagship program provides rotations
                  across multiple medical specialties, allowing students to gain
                  broad exposure to various aspects of healthcare delivery.
                </p>
                <p>
                  Students work directly with patients under the supervision of
                  experienced physicians, participate in ward rounds, attend
                  clinical conferences, and engage in medical research projects.
                  The program is designed to enhance clinical reasoning,
                  diagnostic skills, and patient management capabilities.
                </p>
                <p>
                  Nepal's diverse patient population and unique disease patterns
                  provide exceptional learning opportunities, including exposure
                  to tropical diseases, high-altitude medicine, and
                  resource-limited healthcare settings that prepare students for
                  global medical practice.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg h-fit">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Quick Facts
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">4-20 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Capacity:</span>
                  <span className="font-medium">8-12 interns</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Start Dates:</span>
                  <span className="font-medium">Weekly</span>
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
                onClick={() => setCurrentPage("application")}
                className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Fees */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Program Fees
          </h2>
          <div className="space-y-6">
            {/* Registration Fee */}
            <div className="bg-white rounded-lg shadow p-6">
              <button
                onClick={() => toggleSection("registration")}
                className="flex justify-between items-center w-full text-left"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    One-time Registration Fee
                  </h3>
                  <p className="text-teal-600 font-bold">12 USD</p>
                </div>
                {expandedSection === "registration" ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {expandedSection === "registration" && (
                <div className="mt-4 text-gray-600 space-y-2">
                  <h4 className="font-semibold">
                    What’s included in the Registration fee?
                  </h4>
                  <ul className="list-decimal list-inside space-y-1">
                    <li>
                      Book placement dates for your desired specialities and
                      departments.
                    </li>
                    <li>Book your first-day orientation with the faculty.</li>
                    <li>
                      Provide you with an approval letter with details of the
                      department and supervisor.
                    </li>
                    <li>
                      Assist you with onboarding and filling in the required
                      university documents.
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Accommodation Fee */}
            <div className="bg-white rounded-lg shadow p-6">
              <button
                onClick={() => toggleSection("accommodation")}
                className="flex justify-between items-center w-full text-left"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Accommodation Fee
                  </h3>
                  <p className="text-teal-600 font-bold">7-30 USD per day</p>
                </div>
                {expandedSection === "accommodation" ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {expandedSection === "accommodation" && (
                <div className="mt-4 text-gray-600 space-y-4">
                  <div className="overflow-x-auto mt-4">
                    <table className="w-full border text-sm text-gray-700">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="border px-3 py-2 text-left">
                            Duration
                          </th>
                          <th className="border px-3 py-2 text-center">
                            Daily Rate (USD)
                          </th>
                          <th className="border px-3 py-2 text-center">
                            Weekly Total (USD)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border px-3 py-2 font-medium">
                            1 week
                          </td>
                          <td className="border px-3 py-2 text-center">7-30</td>
                          <td className="border px-3 py-2 text-center">
                            49-210
                          </td>
                        </tr>
                        <tr>
                          <td className="border px-3 py-2 font-medium">
                            2 weeks
                          </td>
                          <td className="border px-3 py-2 text-center">7-30</td>
                          <td className="border px-3 py-2 text-center">
                            98-420
                          </td>
                        </tr>
                        <tr>
                          <td className="border px-3 py-2 font-medium">
                            3 weeks
                          </td>
                          <td className="border px-3 py-2 text-center">7-30</td>
                          <td className="border px-3 py-2 text-center">
                            147-630
                          </td>
                        </tr>
                        <tr>
                          <td className="border px-3 py-2 font-medium">
                            4 weeks
                          </td>
                          <td className="border px-3 py-2 text-center">7-30</td>
                          <td className="border px-3 py-2 text-center">
                            196-840
                          </td>
                        </tr>
                        <tr>
                          <td className="border px-3 py-2 font-medium">
                            5+ weeks
                          </td>
                          <td className="border px-3 py-2 text-center">7-30</td>
                          <td className="border px-3 py-2 text-center">
                            245-1050+
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <h4 className="font-semibold mt-4">
                      What’s included in Accommodation?
                    </h4>
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
                onClick={() => toggleSection("hospital")}
                className="flex justify-between items-center w-full text-left"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Elective Fee
                  </h3>
                  <p className="text-teal-600 font-bold">
                    200 USD for one week
                  </p>
                </div>
                {expandedSection === "hospital" ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {expandedSection === "hospital" && (
                <div className="mt-4 text-gray-600 space-y-4">
                  <div className="overflow-x-auto mt-4">
                    <table className="w-full border text-sm text-gray-700">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="border px-3 py-2 text-left">
                            Duration
                          </th>
                          <th className="border px-3 py-2 text-center">
                            Weekly Rate (USD)
                          </th>
                          <th className="border px-3 py-2 text-center">
                            Total (USD)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border px-3 py-2 font-medium">
                            1 week
                          </td>
                          <td className="border px-3 py-2 text-center">200</td>
                          <td className="border px-3 py-2 text-center">200</td>
                        </tr>
                        <tr>
                          <td className="border px-3 py-2 font-medium">
                            2 weeks
                          </td>
                          <td className="border px-3 py-2 text-center">200</td>
                          <td className="border px-3 py-2 text-center">400</td>
                        </tr>
                        <tr>
                          <td className="border px-3 py-2 font-medium">
                            3 weeks
                          </td>
                          <td className="border px-3 py-2 text-center">200</td>
                          <td className="border px-3 py-2 text-center">600</td>
                        </tr>
                        <tr>
                          <td className="border px-3 py-2 font-medium">
                            4 weeks
                          </td>
                          <td className="border px-3 py-2 text-center">200</td>
                          <td className="border px-3 py-2 text-center">800</td>
                        </tr>
                        <tr>
                          <td className="border px-3 py-2 font-medium">
                            5+ weeks
                          </td>
                          <td className="border px-3 py-2 text-center">200</td>
                          <td className="border px-3 py-2 text-center">
                            1000+
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <h4 className="font-semibold mt-4">
                      What’s Included in Elective Fee.
                    </h4>
                    <ul className="list-decimal list-inside space-y-1">
                      <li>
                        Placement at the desired specialities and departments.
                      </li>
                      <li>
                        Daily supervision by faculty members and specialities.
                      </li>
                      <li>Orientation of the Healthcare system in Nepal.</li>
                      <li>
                        Professionals give occasional lectures on healthcare
                        issues in the hospital.
                      </li>
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

      {/* Medical Specialties */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Medical Specialties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Internal Medicine
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>General medical ward rounds</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Outpatient clinic experience</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Diagnostic procedures</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Case presentations</span>
                </li>
              </ul>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">
                  Internal Medicine Subspecialties Available:
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Cardiology</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Gastroenterology & Hepatology</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Nephrology</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Pulmonology (Chest Medicine)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Medical Oncology</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Critical Care Medicine</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Endocrinology & Metabolism</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Hematology</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Infectious Diseases</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Rheumatology</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Neurology</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Allergy & Immunology</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Surgery
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Operating room observations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Pre and post-operative care</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Surgical technique learning</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Emergency surgery exposure</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Pediatrics
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Pediatric ward rotations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Neonatal intensive care</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Child development assessment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Vaccination programs</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Emergency Medicine
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>24/7 emergency department</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Trauma management</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Critical care procedures</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Triage and assessment</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Obstetrics & Gynecology
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Labor and delivery</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Prenatal care</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Gynecological procedures</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Family planning</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Community Medicine
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Rural health camps</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Preventive medicine</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Health education</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Epidemiological studies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Objectives */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Learning Objectives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Clinical Competencies
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Advanced history taking and physical examination skills
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Clinical reasoning and differential diagnosis development
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Patient management and treatment planning
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Interpretation of diagnostic tests and imaging
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Professional Skills
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Effective communication with patients and families
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Interdisciplinary healthcare team collaboration
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Cultural sensitivity and global health awareness
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Medical ethics and professionalism
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Program Requirements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Academic Requirements
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Currently enrolled in medical school
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Completed basic clinical rotations
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Minimum 3rd year medical student
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Good academic standing (GPA 3.0+)
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                General Requirements
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Valid passport (6+ months)
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Comprehensive medical insurance
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    English proficiency (IELTS 6.5+)
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Complete immunization records
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <blockquote className="text-xl italic text-gray-700 mb-6">
              "The medical elective program was the highlight of my medical
              education. The diversity of cases, the mentorship from local
              physicians, and the cultural immersion created an unparalleled
              learning experience that has shaped my approach to medicine."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <img
                src="https://images.pexels.com/photos/6749777/pexels-photo-6749777.jpeg?auto=compress&cs=tinysrgb&w=100"
                alt="Student testimonial"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="font-semibold text-gray-900">Emma Rodriguez</p>
                <p className="text-sm text-gray-600">Harvard Medical School</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Begin Your Medical Elective?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join our flagship medical program and gain comprehensive clinical
            experience in Nepal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage("application")}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Apply Now
            </button>
            <button
              onClick={() => setCurrentPage("contact")}
              className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalElectivePage;
