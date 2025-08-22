import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Star, Globe, MessageCircle, Zap, Shield } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    console.log('Contact form submitted:', formData);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-7 w-7" />,
      title: "Our Location",
      description: "Visit us in the heart of Kathmandu",
      details: [
        "Medical Internship Nepal",
        "Kathmandu Medical College Road",
        "Sinamangal, Kathmandu 44600",
        "Nepal"
      ],
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: <Phone className="h-7 w-7" />,
      title: "Phone Numbers",
      description: "Connect with us instantly",
      details: [
        "Main Office: +977-9862728072",
        "Emergency: +977-9862728072",
        "WhatsApp: +977-9862728072",
        "International: +977-9862728072"
      ],
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: <Mail className="h-7 w-7" />,
      title: "Email Addresses",
      description: "Reach out via email anytime",
      details: [
        "info@medicalinternshipnepal.com",
        "applications@medicalinternshipnepal.com",
        "support@medicalinternshipnepal.com",
        "director@medicalinternshipnepal.com"
      ],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: <Clock className="h-7 w-7" />,
      title: "Office Hours",
      description: "When we're available",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 4:00 PM",
        "Sunday: Closed",
        "Emergency Support: 24/7"
      ],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const departments = [
    { 
      name: "General Inquiries", 
      email: "info@medicalinternshipnepal.com",
      icon: <Globe className="h-5 w-5" />,
      description: "General questions and information"
    },
    { 
      name: "Applications", 
      email: "applications@medicalinternshipnepal.com",
      icon: <CheckCircle className="h-5 w-5" />,
      description: "Application process and requirements"
    },
    { 
      name: "Program Support", 
      email: "support@medicalinternshipnepal.com",
      icon: <Shield className="h-5 w-5" />,
      description: "Technical and program assistance"
    },
    { 
      name: "Accommodation", 
      email: "housing@medicalinternshipnepal.com",
      icon: <MapPin className="h-5 w-5" />,
      description: "Housing and living arrangements"
    },
    { 
      name: "Emergency Contact", 
      email: "emergency@medicalinternshipnepal.com",
      icon: <Zap className="h-5 w-5" />,
      description: "Urgent matters and emergencies"
    }
  ];

  const faqs = [
    {
      question: "How quickly do you respond to inquiries?",
      answer: "We typically respond to all inquiries within 24-48 hours during business days.",
      icon: <MessageCircle className="h-5 w-5" />
    },
    {
      question: "Can I schedule a video call consultation?",
      answer: "Yes, we offer free video consultations. Please email us to schedule an appointment.",
      icon: <Star className="h-5 w-5" />
    },
    {
      question: "Do you have representatives in other countries?",
      answer: "We work with educational consultants in several countries. Contact us for local representative information.",
      icon: <Globe className="h-5 w-5" />
    }
  ];

  const stats = [
    { number: "24h", label: "Response Time", icon: <Clock className="h-6 w-6" /> },
    { number: "98%", label: "Satisfaction Rate", icon: <Star className="h-6 w-6" /> },
    { number: "24/7", label: "Emergency Support", icon: <Shield className="h-6 w-6" /> },
    { number: "50+", label: "Countries Served", icon: <Globe className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-emerald-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 to-blue-900/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-white/20 shadow-lg">
              <MessageCircle className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-slate-700">Ready to help you 24/7</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent leading-tight">
              Get in Touch
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Connect with our expert team and take the first step towards your 
              <span className="font-semibold text-blue-600"> extraordinary medical journey</span> in Nepal
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="text-blue-600 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-slate-900 mb-1">{stat.number}</div>
                    <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Multiple Ways to Connect</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose your preferred method of communication and we'll respond promptly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="group">
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${info.gradient} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {info.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{info.title}</h3>
                  <p className="text-slate-600 mb-6 text-sm">{info.description}</p>
                  
                  <div className="space-y-3">
                    {info.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0"></div>
                        <p className="text-slate-700 text-sm font-medium">{detail}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Hover effect border */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl border border-white/20">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Send us a Message</h2>
                  <p className="text-slate-600 text-lg">We'd love to hear from you. Fill out the form and we'll get back to you within 24 hours.</p>
                </div>
                
                {isSubmitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mx-auto mb-4">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                    <p className="text-slate-600">Thank you for reaching out. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-slate-700">Your Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-4 bg-white/50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 placeholder-slate-400"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-slate-700">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-4 bg-white/50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 placeholder-slate-400"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-slate-700">Subject *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 bg-white/50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                      >
                        <option value="">Select a subject</option>
                        <option value="program-inquiry">Program Inquiry</option>
                        <option value="application-question">Application Question</option>
                        <option value="accommodation">Accommodation</option>
                        <option value="visa-support">Visa Support</option>
                        <option value="general">General Question</option>
                        <option value="partnership">Partnership Opportunity</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-slate-700">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        required
                        placeholder="Please provide details about your inquiry..."
                        className="w-full px-4 py-4 bg-white/50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 placeholder-slate-400 resize-none"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Department Contacts & FAQs */}
            <div className="order-1 lg:order-2 space-y-8">
              
              {/* Department Contacts */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Department Contacts</h3>
                <p className="text-slate-600 mb-8">Connect directly with the right team for faster assistance</p>
                
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={index} className="group p-4 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 cursor-pointer">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 p-2 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white group-hover:scale-110 transition-transform duration-300">
                          {dept.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-slate-900 mb-1">{dept.name}</h4>
                          <p className="text-sm text-slate-600 mb-2">{dept.description}</p>
                          <a 
                            href={`mailto:${dept.email}`}
                            className="text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium inline-flex items-center group"
                          >
                            <Mail className="h-4 w-4 mr-1 group-hover:translate-x-1 transition-transform duration-200" />
                            {dept.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick FAQ */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Quick Answers</h3>
                <p className="text-slate-600 mb-8">Instant answers to common questions</p>
                
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="group p-4 rounded-2xl bg-gradient-to-r from-blue-50/50 to-indigo-50/50 hover:from-blue-50 hover:to-indigo-50 transition-all duration-300">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 p-2 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white group-hover:scale-110 transition-transform duration-300">
                          {faq.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2">{faq.question}</h4>
                          <p className="text-slate-700 text-sm leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map & Office Location */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Visit Our Office</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Located in the heart of Kathmandu, we welcome in-person visits and consultations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Interactive Map Placeholder */}
            <div className="order-2 lg:order-1">
              <div className="relative bg-gradient-to-br from-slate-100 to-blue-100 rounded-3xl overflow-hidden shadow-2xl border border-white/20 group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 group-hover:from-blue-600/20 group-hover:to-indigo-600/20 transition-all duration-500"></div>
                <div className="relative h-96 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="h-10 w-10" />
                    </div>
                    <div>
                      <p className="text-slate-700 font-semibold text-lg">Interactive Map</p>
                      <p className="text-slate-500">Integrated Google Maps would be placed here</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating location pin */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg border border-white/20">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium text-slate-700">Live Location</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Office Details */}
            <div className="order-1 lg:order-2">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl border border-white/20">
                <h3 className="text-3xl font-bold text-slate-900 mb-8">Office Information</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg mb-2">Address</h4>
                      <div className="text-slate-600 space-y-1">
                        <p className="font-medium">Medical Internship Nepal</p>
                        <p>Kathmandu Medical College Road</p>
                        <p>Sinamangal, Kathmandu 44600, Nepal</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg mb-2">Office Hours</h4>
                      <div className="text-slate-600 space-y-1">
                        <p><span className="font-medium">Mon - Fri:</span> 9:00 AM - 6:00 PM</p>
                        <p><span className="font-medium">Saturday:</span> 9:00 AM - 4:00 PM</p>
                        <p><span className="font-medium">Sunday:</span> Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-6 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl border border-teal-100">
                  <h4 className="font-bold text-teal-900 mb-4 flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    Getting Here
                  </h4>
                  <ul className="text-teal-800 space-y-2">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 mr-3 flex-shrink-0"></div>
                      <span>15 minutes from Tribhuvan International Airport</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 mr-3 flex-shrink-0"></div>
                      <span>Near Kathmandu Medical College</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 mr-3 flex-shrink-0"></div>
                      <span>Accessible by taxi, bus, or private vehicle</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 mr-3 flex-shrink-0"></div>
                      <span>On-site parking available</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-pink-600 to-rose-600"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-8 shadow-xl">
            <Zap className="h-10 w-10" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Emergency Contact</h2>
          <p className="text-xl md:text-2xl mb-12 text-red-100 max-w-3xl mx-auto font-light">
            For urgent matters outside office hours, we're available 24/7 to assist you
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl hover:bg-white/25 transition-all duration-300 group">
              <div className="flex items-center justify-center space-x-4">
                <div className="p-3 rounded-full bg-white/20 group-hover:bg-white/30 transition-all duration-300">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-red-100 mb-1">Emergency Hotline</p>
                  <p className="text-2xl font-bold">+977-9862728072</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl hover:bg-white/25 transition-all duration-300 group">
              <div className="flex items-center justify-center space-x-4">
                <div className="p-3 rounded-full bg-white/20 group-hover:bg-white/30 transition-all duration-300">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-red-100 mb-1">Emergency Email</p>
                  <p className="text-lg font-bold">emergency@medicalinternshipnepal.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 max-w-2xl mx-auto">
            <p className="text-red-50 font-medium">
              <strong>Available 24/7</strong> for medical emergencies, safety concerns, and urgent program-related matters
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
