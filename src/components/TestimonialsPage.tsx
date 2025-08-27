import React from "react";
import { Star, Quote } from "lucide-react";

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "Lucie and Tereza",
      school: "Czech Republic",
      program: "Medical Exchange",
      duration: "Medical Program",
      rating: 5,
      testimonial:
        "We had an incredible time during our medical exchange in Nepal. The hospital was among the best we've ever trained in-supportive staff, great learning opportunities, and diverse cases. Our hosts were kind, welcoming, and made us feel like part of the family. Exploring Kathmandu's rich culture, food, and surroundings added so much fun to our stay. We'll always carry these memories with us!",
    },
    {
      name: "Eva, Helen, and Helen",
      school: "Czech Republic, Switzerland, and Germany",
      program: "Medical Exchange",
      duration: "Medical Program",
      rating: 5,
      testimonial:
        "Our exchange in Nepal was an unforgettable blend of learning and adventure. Beyond the valuable hospital experience, we trekked through breathtaking hills and visited sacred sites like Pashupatinath Temple, which gave us a deeper appreciation for Nepal's spiritual richness. The hosting was warm and thoughtful, and every day brought new friendships and discoveries. It truly felt like a journey for both the mind and soul.",
    },
    {
      name: "Terezia and Timea",
      school: "Slovakia",
      program: "Medical Exchange",
      duration: "Medical Program",
      rating: 5,
      testimonial:
        "Our time in Nepal was truly special. From watching the sunrise in Nagarkot to experiencing the serenity of Pashupatinath, every moment was meaningful. We even joined in on paddy farming-a unique, joyful experience we'll never forget. Evenings in Thamel with traditional Nepali dinner made the perfect end to our adventurous days. The exchange offered not just medical learning, but a beautiful dive into Nepalese culture.",
    },
    {
      name: "Michael, Josh, and Rosa",
      school: "Switzerland, UK, and Germany",
      program: "Medical Exchange",
      duration: "Medical Program",
      rating: 5,
      testimonial:
        "Exploring Bhaktapur Durbar Square felt like stepping back in time-its ancient architecture and vibrant culture were simply breathtaking. Back at the hospital, we found comfort and connection over coffee at the hospital's cozy café, where conversations with fellow students became the highlight of our afternoons. It was the perfect balance of cultural discovery and campus camaraderie.",
    },
    {
      name: "Dimitar Vasilev",
      school: "Bulgaria",
      program: "Medical Exchange",
      duration: "Medical Program",
      rating: 5,
      testimonial:
        "From the moment I landed in Kathmandu, I felt genuinely welcomed. The hosting team made sure I was comfortable and introduced me to both the hospital and the vibrant student life here. My time at the college has been inspiring-great mentors, supportive peers, and lots to learn. Outside of academics, I've enjoyed every moment-from exploring the city's rich culture to spontaneous laughs over local food. This exchange has truly been a perfect mix of learning and fun!",
    },
  ];

  const stats = [
    { number: "500+", label: "Medical Interns" },
    { number: "30+", label: "Countries" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "15", label: "Years Experience" },
  ];

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
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent leading-tight mb-6">
              What Our Interns Say
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
              Read testimonials from medical students who have completed their
              internships with us and transformed their careers.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </h3>
                <p className="text-slate-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-slate-600">
              Hear directly from our alumni about their transformative
              experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-blue-600 text-sm">
                      {testimonial.school}
                    </p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-sm text-slate-500">
                        {testimonial.program}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="text-sm text-slate-500">
                        {testimonial.duration}
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <Quote className="h-8 w-8 text-blue-200 absolute -top-2 -left-2" />
                  <p className="text-slate-600 italic pl-6">
                    "{testimonial.testimonial}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Video Testimonials
            </h2>
            <p className="text-xl text-gray-600">
              Watch our interns share their experiences in their own words.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                </div>
                <p className="text-gray-600 font-medium">
                  Sarah's Surgery Experience
                </p>
                <p className="text-sm text-gray-500">3:45 minutes</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                </div>
                <p className="text-gray-600 font-medium">
                  David's Rural Health Journey
                </p>
                <p className="text-sm text-gray-500">4:20 minutes</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                </div>
                <p className="text-gray-600 font-medium">
                  Emily's Pediatric Rotation
                </p>
                <p className="text-sm text-gray-500">2:55 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Ready to Write Your Own Success Story?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of medical students who have transformed their
              careers through our programs.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Start Your Application
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
