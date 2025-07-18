import React from 'react';
import { ArrowRight, Heart, Users, Award, Globe } from 'lucide-react';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-600 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Transform Your Medical Career in Nepal
              </h1>
              <p className="text-xl mb-8 text-teal-100">
                Experience world-class medical training in Nepal's premier hospitals. Join our comprehensive internship programs designed for international medical students.
              </p>
              <button 
                onClick={() => setCurrentPage('application')}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center space-x-2"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <div className="relative">
              <img 
                src="../../assets/images/home_screen_1.png" 
                alt="Medical students in Nepal hospital"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-teal-50 p-8 rounded-lg">
              <Heart className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">100+</h3>
              <p className="text-gray-600">Medical Interns Trained</p>
            </div>
            <div className="bg-emerald-50 p-8 rounded-lg">
              <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">10+</h3>
              <p className="text-gray-600">Partner Hospitals</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">3</h3>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
            <div className="bg-indigo-50 p-8 rounded-lg">
              <Globe className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">30+</h3>
              <p className="text-gray-600">Countries Represented</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Medical Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of medical internship programs designed to provide hands-on experience in Nepal's healthcare system.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="General Medicine"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Internal Medicine</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive training in internal medicine with experienced physicians in Nepal's top hospitals.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• 4-week intensive program</li>
                  <li>• Direct patient interaction</li>
                  <li>• Morning ward rounds</li>
                  <li>• Case presentations</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Surgery"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Surgery</h3>
                <p className="text-gray-600 mb-4">
                  Observe and assist in surgical procedures under the guidance of skilled surgeons.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Operating room experience</li>
                  <li>• Pre/post-operative care</li>
                  <li>• Surgical technique training</li>
                  <li>• Emergency procedures</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="../../assets/images/community_health.png" 
                alt="Community Health"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Health</h3>
                <p className="text-gray-600 mb-4">
                  Experience healthcare delivery in rural communities and public health initiatives.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Rural health camps</li>
                  <li>• Preventive medicine</li>
                  <li>• Health education</li>
                  <li>• Cultural immersion</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Medical Internship Nepal?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-2 rounded-lg">
                    <Heart className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">World-Class Training</h3>
                    <p className="text-gray-600">Learn from experienced medical professionals in state-of-the-art facilities.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Cultural Immersion</h3>
                    <p className="text-gray-600">Experience Nepal's rich culture while advancing your medical career.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Certification</h3>
                    <p className="text-gray-600">Receive internationally recognized certificates upon completion.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/8376297/pexels-photo-8376297.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Medical team in Nepal"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Medical Journey?</h2>
          <p className="text-xl mb-8 text-emerald-100">
            Join hundreds of medical students who have transformed their careers through our programs.
          </p>
          <button 
            onClick={() => setCurrentPage('application')}
            className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center space-x-2 mx-auto"
          >
            <span>Apply Now</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;