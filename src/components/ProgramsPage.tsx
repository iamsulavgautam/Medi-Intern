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
      image: "../../assets/images/dental.png",
      description: "Comprehensive dental training program offering hands-on experience in various dental specialties including oral surgery, orthodontics, and general dentistry.",
      highlights: [
        "Clinical dental procedures",
        "Oral surgery observations",
        "Orthodontic treatments",
        "Preventive dentistry",
        "Patient consultation skills"
      ]
    },
    {
      id: 'physiotherapy-internship',
      title: "Physiotherapy Internship",
      duration: "4-16 weeks",
      capacity: "6-10 interns",
      location: "Rehabilitation Centers",
      image: "../../assets/images/physio.png",
      description: "Specialized physiotherapy training focusing on rehabilitation techniques, therapeutic exercises, and patient care in various clinical settings.",
      highlights: [
        "Musculoskeletal rehabilitation",
        "Neurological physiotherapy",
        "Sports injury treatment",
        "Therapeutic exercise programs",
        "Manual therapy techniques"
      ]
    },
    {
      id: 'medical-elective',
      title: "Medical Elective",
      duration: "4-20 weeks",
      capacity: "8-12 interns",
      location: "Teaching Hospitals",
      image: "../../assets/images/medical_electives.png",
      description: "Comprehensive medical elective program covering multiple specialties including internal medicine, surgery, pediatrics, and emergency medicine.",
      highlights: [
        "Multi-specialty rotations",
        "Direct patient care",
        "Clinical decision making",
        "Medical research opportunities",
        "Case presentations"
      ]
    },
    {
      id: 'midwifery-elective',
      title: "Midwifery Elective",
      duration: "4-12 weeks",
      capacity: "4-8 interns",
      location: "Maternity Hospitals",
      image: "../../assets/images/mid_wifery.png",
      description: "Specialized midwifery program focusing on maternal and newborn care, labor and delivery, and women's reproductive health.",
      highlights: [
        "Labor and delivery assistance",
        "Prenatal and postnatal care",
        "Newborn care procedures",
        "Family planning counseling",
        "Emergency obstetric care"
      ]
    }
  ];

  const handleProgramClick = (programId: string) => {
    if (setCurrentPage) {
      setCurrentPage(`program-${programId}`);
    }
  };

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Medical Internship Programs</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Choose from our comprehensive range of medical specialties and gain invaluable experience in Nepal's healthcare system.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{program.capacity}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{program.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{program.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Program Highlights</h4>
                    <ul className="space-y-2">
                      {program.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <button 
                      onClick={() => handleProgramClick(program.id)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <button  
                      onClick={() => setCurrentPage('application')}
                      className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What's Included in Every Program</h2>
            <p className="text-xl text-gray-600">
              Comprehensive support and resources for your medical internship experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Mentorship</h3>
              <p className="text-gray-600">Dedicated medical supervisor and peer support throughout your program.</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Certification</h3>
              <p className="text-gray-600">Official completion certificate recognized by international medical boards.</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cultural Activities</h3>
              <p className="text-gray-600">Organized cultural excursions and language learning opportunities.</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock assistance for medical and personal emergencies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Medical Journey?</h2>
          <p className="text-xl mb-8 text-green-100">
            Join our programs and gain the experience that will shape your medical career.
          </p>
          <button 
            onClick={() => setCurrentPage('application')}
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
            Start Your Application
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;