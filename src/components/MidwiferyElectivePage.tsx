import React, {useState} from 'react';
import { ArrowLeft, Clock, Users, MapPin, CheckCircle, Star, Baby, ChevronDown, ChevronUp } from 'lucide-react';

interface MidwiferyElectivePageProps {
  setCurrentPage: (page: string) => void;
}

const MidwiferyElectivePage: React.FC<MidwiferyElectivePageProps> = ({ setCurrentPage }) => {
    const [expandedSection, setExpandedSection] = useState<string | null>(null);
    
    const toggleSection = (section: string) => {
        setExpandedSection(prev => (prev === section ? null : section));
      };
    
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 to-rose-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => setCurrentPage('programs')}
            className="flex items-center space-x-2 text-pink-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Programs</span>
          </button>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Midwifery Elective</h1>
              <p className="text-xl text-pink-100 mb-8">
                Specialized midwifery program focusing on maternal and newborn care, labor and delivery, and women's reproductive health in Nepal's leading maternity hospitals and birthing centers.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center space-x-2 bg-pink-500 bg-opacity-30 px-3 py-1 rounded-full">
                  <Clock className="h-4 w-4" />
                  <span>4-12 weeks</span>
                </div>
                <div className="flex items-center space-x-2 bg-pink-500 bg-opacity-30 px-3 py-1 rounded-full">
                  <Users className="h-4 w-4" />
                  <span>4-8 interns</span>
                </div>
                <div className="flex items-center space-x-2 bg-pink-500 bg-opacity-30 px-3 py-1 rounded-full">
                  <MapPin className="h-4 w-4" />
                  <span>Maternity Hospitals</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="../../assets/images/mid_wifery.png" 
                alt="Midwifery Elective"
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
                  Our Midwifery Elective program provides comprehensive training in maternal and newborn care, offering 
                  students hands-on experience in all aspects of midwifery practice. Students work alongside experienced 
                  midwives and obstetricians in Nepal's premier maternity hospitals and community birthing centers.
                </p>
                <p>
                  The program covers the full spectrum of midwifery care, from prenatal consultations and labor support 
                  to delivery assistance and postpartum care. Students gain experience in both normal and high-risk 
                  pregnancies, emergency obstetric care, and newborn resuscitation.
                </p>
                <p>
                  Nepal's diverse healthcare settings provide unique learning opportunities in both hospital-based and 
                  community midwifery models, including exposure to traditional birthing practices and modern obstetric 
                  interventions, preparing students for global midwifery practice.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg h-fit">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">4-12 weeks</span>
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
                className="w-full mt-6 bg-pink-600 hover:bg-pink-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Fees */}
          <section className="py-20 bg-pink-50">
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
                        <li>- Registation fee would guarantee your spot at your desired department at the hospital.</li>
                        <li>- We confirm you first day orientation at the hospital with the faculty member.</li>
                        <li>- Your application would be processed and you would receive the approval letter.</li>
                        <li>- Support you with on boarding and help with your university documents.</li>
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
                        <li>- Two meals a day: Breakfast & Dinner.</li>
                        <li>- Stay at premium homestays (shared rooms).</li>
                        <li>- Accommodation in shared rooms.</li>
                        <li>- WiFi access throughout premises.</li>
                        <li>- 24/7 hot and cold water.</li>
                        <li>- Self-Laundry services twice a week.</li>
                        <li>- Casual weekly activities include yoga and hiking.</li>
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
                        <p className="text-teal-600 font-bold">For the first two weeks, 300 USD will be added, and 75 USD will be added each week after the two weeks.</p>
                      </div>
                      {expandedSection === 'hospital' ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </button>
                    {expandedSection === 'hospital' && (
                      <ul className="mt-4 space-y-3 text-gray-600">
                        <li>- Daily supervision by faculty members and specialities.</li>
                        <li>- Orienation of Healthcare system in Nepal.</li>
                        <li>- Occasional lectures on healthcare issues in the Hospital.</li>
                        <li>- Placement at the desired specialities and department.</li>
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
      

      {/* Clinical Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Clinical Experience Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-pink-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Baby className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Prenatal Care</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Antenatal consultations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Risk assessment and screening</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Health education and counseling</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Birth planning</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-rose-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Baby className="h-6 w-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Labor & Delivery</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Labor support and coaching</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Normal delivery assistance</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Pain management techniques</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Emergency delivery procedures</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Baby className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Postpartum Care</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Immediate postpartum assessment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Breastfeeding support</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Maternal recovery monitoring</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Family planning counseling</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Baby className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Newborn Care</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Immediate newborn assessment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Newborn resuscitation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Routine newborn procedures</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Parent education</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Baby className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">High-Risk Pregnancies</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Pregnancy complications management</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Preterm labor care</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Gestational diabetes management</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Hypertensive disorders</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Baby className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Midwifery</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Home birth assistance</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Rural health outreach</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Traditional birth practices</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Community health education</span>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Clinical Competencies</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Comprehensive antenatal assessment and care planning</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Labor support and normal delivery assistance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Postpartum care and breastfeeding support</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Newborn assessment and immediate care</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Professional Skills</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Woman-centered care and advocacy</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Cultural sensitivity in maternal care</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Emergency obstetric care skills</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Family and community education</span>
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
                  <span className="text-gray-600">Currently enrolled in midwifery or nursing program</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Completed obstetric and gynecological studies</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Minimum 2nd year student</span>
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
                  <span className="text-gray-600">Complete immunization records</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl italic text-gray-700 mb-6">
              "The midwifery elective in Nepal was life-changing. I witnessed the strength of women during childbirth 
              and learned so much about culturally sensitive care. The experience has made me a more compassionate 
              and skilled midwife."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <img 
                src="https://images.pexels.com/photos/5452275/pexels-photo-5452275.jpeg?auto=compress&cs=tinysrgb&w=100" 
                alt="Student testimonial"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="font-semibold text-gray-900">Jessica Thompson</p>
                <p className="text-sm text-gray-600">King's College London, Midwifery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Midwifery Journey?</h2>
          <p className="text-xl mb-8 text-pink-100">
            Join our specialized midwifery program and make a difference in maternal and newborn care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentPage('application')}
              className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Apply Now
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-pink-500 hover:bg-pink-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MidwiferyElectivePage;