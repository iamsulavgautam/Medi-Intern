import React from 'react';
import { Home, Wifi, Car, Utensils, Shield, Star } from 'lucide-react';

const AccommodationPage = () => {
  const accommodations = [
    {
      title: "Medical Intern House",
      type: "Shared Accommodation",
      price: "$15-25/night",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Shared rooms with 2-4 interns",
        "Common kitchen and living area",
        "24/7 security",
        "Free Wi-Fi",
        "Laundry facilities",
        "Study areas"
      ],
      description: "Purpose-built accommodation for medical interns, fostering community and collaboration."
    },
    {
      title: "Host Family Stay",
      type: "Cultural Immersion",
      price: "$20-30/night",
      image: "https://images.pexels.com/photos/6186810/pexels-photo-6186810.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Private room in family home",
        "Meals included",
        "Language practice opportunity",
        "Cultural activities",
        "Local guidance",
        "Safe neighborhood"
      ],
      description: "Live with carefully selected Nepali families for authentic cultural experience."
    },
    {
      title: "Private Apartments",
      type: "Independent Living",
      price: "$35-50/night",
      image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Fully furnished studio/1BR",
        "Private kitchen and bathroom",
        "Air conditioning",
        "High-speed internet",
        "24/7 maintenance",
        "Flexible lease terms"
      ],
      description: "Modern, comfortable apartments for interns preferring privacy and independence."
    },
    {
      title: "Hotel Partnerships",
      type: "Short-term Stay",
      price: "$40-80/night",
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "3-4 star hotel rooms",
        "Daily housekeeping",
        "Restaurant on-site",
        "Business center",
        "Airport transfers",
        "Concierge services"
      ],
      description: "Comfortable hotel accommodation for short-term programs or luxury preferences."
    }
  ];

  const amenities = [
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "High-Speed Internet",
      description: "Reliable Wi-Fi for research, communication with family, and online learning."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "24/7 Security",
      description: "Round-the-clock security personnel and secure access systems."
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Transportation",
      description: "Daily shuttle service to hospitals and major city locations."
    },
    {
      icon: <Utensils className="h-8 w-8" />,
      title: "Meal Options",
      description: "Various dining options including local cuisine and international food."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 to-blue-900/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent leading-tight mb-6">
              Accommodation Options
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Comfortable, safe, and convenient housing options designed specifically for 
              <span className="font-semibold text-blue-600"> international medical interns</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Accommodation Types */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Accommodation</h2>
            <p className="text-xl text-gray-600">
              We offer various housing options to suit different preferences, budgets, and program durations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {accommodations.map((accommodation, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={accommodation.image} 
                  alt={accommodation.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{accommodation.title}</h3>
                      <p className="text-blue-600 font-medium">{accommodation.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-600">{accommodation.price}</p>
                      <p className="text-sm text-gray-500">per night</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{accommodation.description}</p>

                  <div className="grid grid-cols-2 gap-2">
                    {accommodation.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200">
                    Book {accommodation.title}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Standard Amenities</h2>
            <p className="text-xl text-gray-600">
              Essential services and facilities included with all accommodation options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {amenity.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{amenity.title}</h3>
                <p className="text-gray-600">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Safety */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Prime Locations & Safety</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Home className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategic Locations</h3>
                    <p className="text-gray-600">All accommodations are within 15 minutes of partner hospitals and medical facilities.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Safety</h3>
                    <p className="text-gray-600">24/7 security, emergency contacts, and regular safety briefings for all interns.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Star className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                    <p className="text-gray-600">Regular inspections and intern feedback ensure high accommodation standards.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Safe accommodation area"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple Booking Process</h2>
            <p className="text-xl text-gray-600">
              Reserve your accommodation in just a few easy steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Choose Accommodation</h3>
              <p className="text-gray-600">Select the housing option that best fits your preferences and budget.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Submit Application</h3>
              <p className="text-gray-600">Complete the housing application with your program dates and preferences.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Receive Confirmation</h3>
              <p className="text-gray-600">Get accommodation confirmation with detailed information and check-in instructions.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Move In</h3>
              <p className="text-gray-600">Arrive and settle into your new home with assistance from our support team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ready to Secure Your Accommodation?</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Book early to ensure availability and get the best rates for your preferred housing option.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Book Accommodation Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccommodationPage;