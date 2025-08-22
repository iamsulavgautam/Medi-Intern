import React from 'react';
import { MapPin, Users, Award, Heart } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Animated Background Elements - matching theme */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-emerald-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 to-blue-900/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent leading-tight mb-6">
              About Medical Internship Nepal
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Bridging international medical education with Nepal's healthcare system for over 
              <span className="font-semibold text-blue-600"> 3 years of excellence</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                To provide exceptional medical internship opportunities that combine hands-on clinical experience 
                with cultural immersion, preparing the next generation of healthcare professionals for global practice.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We believe that exposure to diverse healthcare systems and patient populations enhances medical 
                education and creates more compassionate, skilled physicians.
              </p>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/8376297/pexels-photo-8376297.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Medical team mission"
                className="rounded-2xl shadow-2xl ring-1 ring-white/20 transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Story</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
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
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Leadership Team</h2>
            <p className="text-lg text-slate-600">
              Meet the dedicated professionals who make our programs possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
              <img 
                src="https://raw.githubusercontent.com/coder-backend/Medical-Internship/refs/heads/main/assets/images/rohit.jpeg" 
                alt="Dr. Rajesh Sharma"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-4 ring-blue-100"
              />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Dr. Rohit Rawat</h3>
              <p className="text-blue-600 mb-3 font-medium">Chairman - Founder</p>
              <p className="text-slate-600 text-sm">
                Founder of NGO Aarogya Nepal, MBBS, 2+ years experience in medical education and hospital administration.
              </p>
            </div>
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
              <img 
                src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Dr. Sarah Johnson"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-4 ring-blue-100"
              />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Dr. Sarah Johnson</h3>
              <p className="text-blue-600 mb-3 font-medium">Program Coordinator</p>
              <p className="text-slate-600 text-sm">
                MD, MPH. Specialist in international medical education with experience in 15+ countries.
              </p>
            </div>
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
              <img 
                src="https://images.pexels.com/photos/6749777/pexels-photo-6749777.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Dr. Priya Thapa"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-4 ring-blue-100"
              />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Dr. Priya Thapa</h3>
              <p className="text-blue-600 mb-3 font-medium">Clinical Supervisor</p>
              <p className="text-slate-600 text-sm">
                MBBS, MS Surgery. Expert in surgical training and mentorship for international medical students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-blue-100">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Heart className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-xl font-semibold mb-3">Compassion</h3>
              <p className="text-blue-100">
                We believe healthcare is fundamentally about caring for people with empathy and understanding.
              </p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-blue-100">
                We maintain the highest standards in medical education and patient care.
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-blue-100">
                We foster teamwork between international interns and local healthcare professionals.
              </p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-xl font-semibold mb-3">Cultural Bridge</h3>
              <p className="text-blue-100">
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