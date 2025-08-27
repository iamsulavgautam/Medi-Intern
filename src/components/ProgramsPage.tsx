import React from 'react';
import { Clock, Users, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

interface ProgramsPageProps {
  setCurrentPage?: (page: string) => void;
}

const ProgramsPage: React.FC<ProgramsPageProps> = ({ setCurrentPage }) => {
  const programs = [
    {
      id: 'dental-electives',
      title: "Dental Electives",
      duration: "2-12 weeks",
      capacity: "4-8 interns",
      location: "Dental Hospitals & Clinics",
      image: "https://raw.githubusercontent.com/coder-backend/Medical-Internship/refs/heads/main/assets/images/dental.png",
      description: "Comprehensive dental training program offering hands-on experience in various dental specialties including oral surgery, orthodontics, and general dentistry.",
      highlights: [
        "Clinical dental procedures",
        "Oral surgery observations",
        "Orthodontic treatments",
        "Preventive dentistry",
        "Patient consultation skills",
        "English-Speaking Environment"
      ]
    },
    {
      id: 'physiotherapy-internship',
      title: "Physiotherapy Internship",
      duration: "4-16 weeks",
      capacity: "6-10 interns",
      location: "Rehabilitation Centers",
      image: "https://raw.githubusercontent.com/coder-backend/Medical-Internship/refs/heads/main/assets/images/physio.png",
      description: "Specialized physiotherapy training focusing on rehabilitation techniques, therapeutic exercises, and patient care in various clinical settings.",
      highlights: [
        "Musculoskeletal rehabilitation",
        "Neurological physiotherapy",
        "Sports injury treatment",
        "Therapeutic exercise programs",
        "Manual therapy techniques",
        "English-Speaking Environment"
      ]
    },
    {
      id: 'medical-elective',
      title: "Medical Elective",
      duration: "4-20 weeks",
      capacity: "8-12 interns",
      location: "Teaching Hospitals",
      image: "https://raw.githubusercontent.com/coder-backend/Medical-Internship/refs/heads/main/assets/images/medical_electives.png",
      description: "Comprehensive medical elective program covering multiple specialties including internal medicine, surgery, pediatrics, and emergency medicine.",
      highlights: [
        "Multi-specialty rotations",
        "Direct patient care",
        "Clinical decision making",
        "Medical research opportunities",
        "Case presentations",
        "English-Speaking Environment"
      ]
    },
    {
      id: 'midwifery-elective',
      title: "Nursing Internships",
      duration: "4-12 weeks",
      capacity: "4-8 interns",
      location: "Maternity Hospitals",
      image: "https://raw.githubusercontent.com/coder-backend/Medical-Internship/refs/heads/main/assets/images/mid_wifery.png",
      description: "Specialized nursing program focusing on maternal and newborn care, labor and delivery, and women's reproductive health.",
      highlights: [
        "Labor and delivery assistance",
        "Prenatal and postnatal care",
        "Newborn care procedures",
        "Family planning counseling",
        "Emergency obstetric care",
        "English-Speaking Environment"
      ]
    },
    {
      id: 'surgery',
      title: "Surgery",
      duration: "4-16 weeks",
      capacity: "6-10 interns",
      location: "Operating Theaters & Surgical Wards",
      image: "https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Comprehensive surgical training program offering exposure to various surgical specialties and operative procedures.",
      highlights: [
        "Operating room experience",
        "Pre and post-operative care",
        "Surgical techniques observation",
        "Emergency procedures",
        "Surgical instrument handling",
        "English-Speaking Environment"
      ]
    },
    {
      id: 'paramedical',
      title: "Paramedical",
      duration: "3-12 weeks",
      capacity: "8-12 interns",
      location: "Labs & Diagnostic Centers",
      image: "https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Hands-on training in diagnostic and therapeutic medical support services across various healthcare departments.",
      highlights: [
        "Laboratory techniques",
        "Diagnostic procedures",
        "Patient care assistance",
        "Medical technology training",
        "Healthcare support services",
        "English-Speaking Environment"
      ]
    }
  ];

  const handleProgramClick = (programId: string) => {
    if (setCurrentPage) {
      setCurrentPage(`program-${programId}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Animated Background Elements - matching theme */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-emerald-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent leading-tight mb-6">Medical Internship Programs</h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
              Choose from our comprehensive range of medical specialties and gain invaluable experience in Nepal's healthcare system.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-white/20 transform hover:-translate-y-1">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{program.title}</h3>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4 text-blue-600" />
                      <span>{program.capacity}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      <span>{program.location}</span>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-6">{program.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Program Highlights</h4>
                    <ul className="space-y-2">
                      {program.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <button 
                      onClick={() => handleProgramClick(program.id)}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <button  
                      onClick={() => setCurrentPage && setCurrentPage('application')}
                      className="flex-1 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What's Included in Every Program</h2>
            <p className="text-lg text-slate-600">
              Comprehensive support and resources for your medical internship experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Mentorship</h3>
              <p className="text-slate-600">Dedicated medical supervisor and peer support throughout your program.</p>
            </div>

            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Certification</h3>
              <p className="text-slate-600">Official completion certificate recognized by international medical boards.</p>
            </div>

            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Cultural Activities</h3>
              <p className="text-slate-600">Organized cultural excursions and language learning opportunities.</p>
            </div>

            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">24/7 Support</h3>
              <p className="text-slate-600">Round-the-clock assistance for medical and personal emergencies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ready to Begin Your Medical Journey?</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Join our programs and gain the experience that will shape your medical career.
            </p>
            <button 
              onClick={() => setCurrentPage && setCurrentPage('application')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Start Your Application
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;