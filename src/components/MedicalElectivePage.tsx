import React, { useState } from "react";
import {
  ArrowLeft,
  Clock,
  Users,
  MapPin,
  CheckCircle,
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
              <h1 className="text-5xl font-bold mb-6">Medical Electives</h1>
              <p className="text-xl text-blue-100 mb-8">
                Internship Nepal offers substantial medical elective opportunities for medical students. 
                The primary objective is to help students envision the approach to the working environment 
                and workflow Nepal has, in contrast to Western countries.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center space-x-2 bg-blue-500 bg-opacity-30 px-3 py-1 rounded-full">
                  <Clock className="h-4 w-4" />
                  <span>2-16 weeks</span>
                </div>
                <div className="flex items-center space-x-2 bg-blue-500 bg-opacity-30 px-3 py-1 rounded-full">
                  <Users className="h-4 w-4" />
                  <span>Round the year</span>
                </div>
                <div className="flex items-center space-x-2 bg-blue-500 bg-opacity-30 px-3 py-1 rounded-full">
                  <MapPin className="h-4 w-4" />
                  <span>Teaching Hospitals</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">Who can apply?</h4>
                  <p className="text-blue-800">Students, including doctors of Medicine and all the related fields, are eligible to apply.</p>
                </div>

                <h4 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Activities Involved</h4>
                <ul className="space-y-2">
                  <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />Observation and analysis of the overall Nepalese healthcare system</li>
                  <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />Various lectures and events during the program</li>
                  <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />One visit to a rural leprosarium clinic with extraordinary exposure to learning of the rare cases</li>
                  <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />Daily supervision and guidance from the supervisor and colleagues</li>
                  <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />Learning from trained doctors, nurses, and midwives about Nepal's practices and cultural health approach</li>
                  <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />Consult with supervisors on medical cases and observations</li>
                </ul>

                <p>
                  This medical experience in Nepal prepares students for more challenging cases as they progress 
                  in their career-shaping campaigns. The program places students in some of the most prominent 
                  hospitals in Kathmandu.
                </p>

                <p>
                  Students participating will be engaged in working with, assisting and learning from local 
                  doctors and other health professionals. Depending on the desired field of interest, students 
                  will be assisting in surgeries as a part of the medical team and involved in diagnosing and 
                  determining the optimal course of care for both in and out-patients.
                </p>

                <h4 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Available Specialties (26 Total)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  <div className="space-y-1">
                    <div className="flex items-center"><CheckCircle className="h-3 w-3 text-blue-500 mr-2" />1. Internal Medicine</div>
                    <div className="flex items-center"><CheckCircle className="h-3 w-3 text-blue-500 mr-2" />2. General Surgery</div>
                    <div className="flex items-center"><CheckCircle className="h-3 w-3 text-blue-500 mr-2" />3. Orthopedics</div>
                    <div className="flex items-center"><CheckCircle className="h-3 w-3 text-blue-500 mr-2" />4. Gynae/Obst.</div>
                    <div className="flex items-center"><CheckCircle className="h-3 w-3 text-blue-500 mr-2" />5. Ophthalmology</div>
                    <div className="flex items-center"><CheckCircle className="h-3 w-3 text-blue-500 mr-2" />6. ENT</div>
                    <div className="flex items-center"><CheckCircle className="h-3 w-3 text-blue-500 mr-2" />7. Dermatology</div>
                    <div className="flex items-center"><CheckCircle className="h-3 w-3 text-blue-500 mr-2" />8. Psychiatry & Mental Health</div>
                    <div className="flex items-center"><CheckCircle className="h-3 w-3 text-blue-500 mr-2" />9. Clinical Pharmacology</div>
                    <div className="flex items-center"><CheckCircle className="h-3 w-3 text-blue-500 mr-2" />10. Dental Surgery</div>
                    <div className="flex items-center"><CheckCircle className="h-3 w-3 text-blue-500 mr-2" />11. Anesthesiology</div>
                    <div className="flex items-center"><CheckCircle className="h-3 w-3 text-blue-500 mr-2" />12. Radiology</div>
                    <div className="flex items-center"><CheckCircle className="h-3 w-3 text-blue-500 mr-2" />13. Forensic Medicine</div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center"><CheckCircle className="h-3 w-3 text-blue-500 mr-2" />14. Pathology</div>
                    <div className="flex items-center"><CheckCircle className="h-3 w-3 text-blue-500 mr-2" />15. Biochemistry</div>
                    <div className="flex items-center"><CheckCircle className="h-3 w-3 text-blue-500 mr-2" />16. Microbiology</div>
                    <div className="flex items-center"><CheckCircle className="h-3 w-3 text-blue-500 mr-2" />17. Emergency Medicine & General Practice</div>
                    <div className="flex items-center"><CheckCircle className="h-3 w-3 text-blue-500 mr-2" />18. Pediatrics</div>
                    <div className="flex items-center"><CheckCircle className="h-3 w-3 text-blue-500 mr-2" />19. Cardiology</div>
                    <div className="flex items-center"><CheckCircle className="h-3 w-3 text-blue-500 mr-2" />20. Cardio-Thoracic Vascular Surgery</div>
                    <div className="flex items-center"><CheckCircle className="h-3 w-3 text-blue-500 mr-2" />21. Pharmacy</div>
                    <div className="flex items-center"><CheckCircle className="h-3 w-3 text-blue-500 mr-2" />22. Community Medicine & Public Health</div>
                    <div className="flex items-center"><CheckCircle className="h-3 w-3 text-blue-500 mr-2" />23. Neurology</div>
                    <div className="flex items-center"><CheckCircle className="h-3 w-3 text-blue-500 mr-2" />24. Gastroenterology</div>
                    <div className="flex items-center"><CheckCircle className="h-3 w-3 text-blue-500 mr-2" />25. Physiology</div>
                    <div className="flex items-center"><CheckCircle className="h-3 w-3 text-blue-500 mr-2" />26. Anatomy</div>
                  </div>
                </div>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
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
