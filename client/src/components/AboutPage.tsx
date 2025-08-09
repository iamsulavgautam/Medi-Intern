import React from 'react';
import { MapPin, Users, Award, Heart } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About Medical Internship Nepal</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Bridging international medical education with Nepal's healthcare system for over 3 years.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To provide exceptional medical internship opportunities that combine hands-on clinical experience 
                with cultural immersion, preparing the next generation of healthcare professionals for global practice.
              </p>
              <p className="text-lg text-gray-600">
                We believe that exposure to diverse healthcare systems and patient populations enhances medical 
                education and creates more compassionate, skilled physicians.
              </p>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/8376297/pexels-photo-8376297.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Medical team mission"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded in 2023 by a group of Nepali physicians and international medical educators who recognized 
              the need for quality medical internship programs in Nepal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2023 - Foundation</h3>
              <p className="text-gray-600">
                Started with partnerships with 3 hospitals in Kathmandu, hosting 25 international interns.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2024 - Expansion</h3>
              <p className="text-gray-600">
                Expanded to rural areas and specialized programs, partnering with 15 healthcare facilities.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2025 - Excellence</h3>
              <p className="text-gray-600">
                Today we partner with 10+ hospitals and have trained over 100 medical professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Meet the dedicated professionals who make our programs possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://raw.githubusercontent.com/coder-backend/Medical-Internship/refs/heads/main/assets/images/rohit.jpeg" 
                alt="Dr. Rajesh Sharma"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Rohit Rawat</h3>
              <p className="text-blue-600 mb-3">Chairman - Founder</p>
              <p className="text-gray-600">
                Founder of NGO Aarogya Nepal, MBBS, 2+ years experience in medical education and hospital administration.
              </p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Dr. Sarah Johnson"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Sarah Johnson</h3>
              <p className="text-blue-600 mb-3">Program Coordinator</p>
              <p className="text-gray-600">
                MD, MPH. Specialist in international medical education with experience in 15+ countries.
              </p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/6749777/pexels-photo-6749777.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Dr. Priya Thapa"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Priya Thapa</h3>
              <p className="text-blue-600 mb-3">Clinical Supervisor</p>
              <p className="text-gray-600">
                MBBS, MS Surgery. Expert in surgical training and mentorship for international medical students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-green-100">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Heart className="h-12 w-12 mx-auto mb-4 text-green-200" />
              <h3 className="text-xl font-semibold mb-3">Compassion</h3>
              <p className="text-green-100">
                We believe healthcare is fundamentally about caring for people with empathy and understanding.
              </p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 mx-auto mb-4 text-green-200" />
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-green-100">
                We maintain the highest standards in medical education and patient care.
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-green-200" />
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-green-100">
                We foster teamwork between international interns and local healthcare professionals.
              </p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-green-200" />
              <h3 className="text-xl font-semibold mb-3">Cultural Bridge</h3>
              <p className="text-green-100">
                We connect global medical knowledge with local healthcare needs and traditions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;