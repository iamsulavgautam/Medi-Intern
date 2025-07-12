import React from 'react';
import { Clock, Users, MapPin, CheckCircle } from 'lucide-react';

const ProgramsPage = () => {
  const programs = [
    {
      title: "General Medicine",
      duration: "4-12 weeks",
      capacity: "6-8 interns",
      location: "Tribhuvan University Teaching Hospital",
      image: "https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Comprehensive internal medicine training with direct patient care experience.",
      highlights: [
        "Daily ward rounds with senior physicians",
        "Outpatient clinic experience",
        "Emergency department rotations",
        "Case presentation sessions",
        "Medical research opportunities"
      ],
      requirements: [
        "Currently enrolled in medical school",
        "Completed basic clinical rotations",
        "English proficiency",
        "Valid medical insurance"
      ]
    },
    {
      title: "Surgery",
      duration: "6-16 weeks",
      capacity: "4-6 interns",
      location: "Bir Hospital & Patan Hospital",
      image: "https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Hands-on surgical training in various specialties including general surgery, orthopedics, and neurosurgery.",
      highlights: [
        "Operating room observations",
        "Pre and post-operative care",
        "Surgical technique workshops",
        "Emergency surgery exposure",
        "Specialized surgical units"
      ],
      requirements: [
        "Advanced medical student status",
        "Previous surgical rotation experience",
        "Physical fitness certification",
        "Hepatitis B vaccination"
      ]
    },
    {
      title: "Pediatrics",
      duration: "4-10 weeks",
      capacity: "4-6 interns",
      location: "Kanti Children's Hospital",
      image: "https://images.pexels.com/photos/8376375/pexels-photo-8376375.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Specialized training in pediatric medicine and child healthcare.",
      highlights: [
        "Neonatal intensive care unit",
        "Pediatric emergency medicine",
        "Child development assessment",
        "Vaccination programs",
        "Pediatric surgery observation"
      ],
      requirements: [
        "Pediatric rotation completion",
        "Child protection training",
        "Immunization records",
        "Background check clearance"
      ]
    },
    {
      title: "Community Health",
      duration: "2-8 weeks",
      capacity: "8-12 interns",
      location: "Rural Health Posts",
      image: "https://images.pexels.com/photos/8376306/pexels-photo-8376306.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Experience healthcare delivery in rural communities and public health initiatives.",
      highlights: [
        "Rural health camp participation",
        "Preventive medicine programs",
        "Health education campaigns",
        "Community health assessments",
        "Traditional medicine integration"
      ],
      requirements: [
        "Public health coursework",
        "Cultural sensitivity training",
        "Basic Nepali language skills",
        "Flexibility for travel"
      ]
    },
    {
      title: "Emergency Medicine",
      duration: "3-8 weeks",
      capacity: "4-6 interns",
      location: "Teaching Hospital Emergency",
      image: "https://images.pexels.com/photos/8376297/pexels-photo-8376297.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Fast-paced emergency medicine training with trauma and critical care exposure.",
      highlights: [
        "24/7 emergency department",
        "Trauma management",
        "Critical care procedures",
        "Ambulance service participation",
        "Disaster response training"
      ],
      requirements: [
        "Emergency medicine interest",
        "ACLS certification preferred",
        "High stress tolerance",
        "Night shift availability"
      ]
    },
    {
      title: "Obstetrics & Gynecology",
      duration: "4-12 weeks",
      capacity: "4-6 interns",
      location: "Paropakar Maternity Hospital",
      image: "https://images.pexels.com/photos/5452270/pexels-photo-5452270.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Comprehensive women's health training including obstetrics and gynecological care.",
      highlights: [
        "Labor and delivery experience",
        "Prenatal and postnatal care",
        "Gynecological procedures",
        "Family planning counseling",
        "High-risk pregnancy management"
      ],
      requirements: [
        "OB/GYN rotation completion",
        "Gender-sensitive approach",
        "Cultural awareness training",
        "Professional maturity"
      ]
    }
  ];

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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
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

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {program.requirements.map((requirement, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span>{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200">
                      Apply for {program.title}
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
          <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
            Start Your Application
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;