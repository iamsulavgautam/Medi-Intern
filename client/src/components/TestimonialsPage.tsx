import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      school: "Harvard Medical School",
      program: "General Medicine",
      duration: "8 weeks",
      image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      testimonial: "My experience with Medical Internship Nepal was transformative. The hands-on clinical experience I gained working with patients in Tribhuvan University Teaching Hospital was invaluable. The medical staff were incredibly welcoming and took time to teach me about tropical diseases I had never encountered. This internship not only enhanced my medical knowledge but also gave me a deep appreciation for healthcare in resource-limited settings."
    },
    {
      name: "David Chen",
      school: "Johns Hopkins University",
      program: "Surgery",
      duration: "12 weeks",
      image: "https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      testimonial: "The surgical program exceeded all my expectations. I was able to observe complex procedures and even assist in several operations under expert supervision. The surgeons at Bir Hospital were excellent mentors who challenged me to think critically about each case. The variety of cases I encountered, from trauma surgery to elective procedures, provided an incredible learning experience that has shaped my career aspirations."
    },
    {
      name: "Emily Rodriguez",
      school: "Stanford University School of Medicine",
      program: "Pediatrics",
      duration: "6 weeks",
      image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      testimonial: "Working at Kanti Children's Hospital was an eye-opening experience. The pediatric cases I encountered were diverse and challenging, teaching me to adapt my clinical skills to different cultural contexts. The children and families I worked with showed incredible resilience, and the local pediatricians demonstrated exceptional clinical acumen despite resource constraints. This experience has made me a more empathetic and resourceful future physician."
    },
    {
      name: "Michael Thompson",
      school: "University of Oxford",
      program: "Community Health",
      duration: "4 weeks",
      image: "https://images.pexels.com/photos/6749777/pexels-photo-6749777.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      testimonial: "The rural health camp experience was unlike anything I could have imagined. Working in remote villages, providing basic healthcare, and educating communities about preventive medicine gave me a holistic view of public health. The program coordinators were fantastic, ensuring our safety while maximizing our learning opportunities. This experience reinforced my commitment to serving underserved populations."
    },
    {
      name: "Lisa Wang",
      school: "University of Toronto",
      program: "Emergency Medicine",
      duration: "5 weeks",
      image: "https://images.pexels.com/photos/5452275/pexels-photo-5452275.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      testimonial: "The emergency department rotation was intense and incredibly educational. I learned to make quick decisions, prioritize cases, and work efficiently under pressure. The emergency physicians were excellent teachers who included me in critical cases and explained their decision-making processes. The diversity of presentations, from minor injuries to life-threatening conditions, prepared me well for my emergency medicine residency."
    },
    {
      name: "James Anderson",
      school: "University of Melbourne",
      program: "Obstetrics & Gynecology",
      duration: "10 weeks",
      image: "https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      testimonial: "My rotation at Paropakar Maternity Hospital was phenomenal. I witnessed numerous deliveries, learned about maternal healthcare in different cultural contexts, and gained hands-on experience with prenatal and postnatal care. The obstetricians and midwives were incredibly knowledgeable and patient with my questions. This experience solidified my interest in women's health and global maternal medicine."
    }
  ];

  const stats = [
    { number: "500+", label: "Medical Interns" },
    { number: "30+", label: "Countries" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "15", label: "Years Experience" }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">What Our Interns Say</h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Read testimonials from medical students who have completed their internships with us and transformed their careers.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <h3 className="text-4xl font-bold text-teal-600 mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">
              Hear directly from our alumni about their transformative experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-blue-600 text-sm">{testimonial.school}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-sm text-gray-500">{testimonial.program}</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-sm text-gray-500">{testimonial.duration}</span>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <Quote className="h-8 w-8 text-teal-200 absolute -top-2 -left-2" />
                  <p className="text-gray-600 italic pl-6">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Video Testimonials</h2>
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
                <p className="text-gray-600 font-medium">Sarah's Surgery Experience</p>
                <p className="text-sm text-gray-500">3:45 minutes</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                </div>
                <p className="text-gray-600 font-medium">David's Rural Health Journey</p>
                <p className="text-sm text-gray-500">4:20 minutes</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                </div>
                <p className="text-gray-600 font-medium">Emily's Pediatric Rotation</p>
                <p className="text-sm text-gray-500">2:55 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Write Your Own Success Story?</h2>
          <p className="text-xl mb-8 text-green-100">
            Join hundreds of medical students who have transformed their careers through our programs.
          </p>
          <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
            Start Your Application
          </button>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;