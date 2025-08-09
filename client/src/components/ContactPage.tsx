import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Our Location",
      details: [
        "Medical Internship Nepal",
        "Kathmandu Medical College Road",
        "Sinamangal, Kathmandu 44600",
        "Nepal"
      ]
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Numbers",
      details: [
        "Main Office: +977-9862728072",
        "Emergency: +977-9862728072",
        "WhatsApp: +977-9862728072",
        "Fax: +977-9862728072"
      ]
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Addresses",
      details: [
        "info@medicalinternshipnepal.com",
        "applications@medicalinternshipnepal.com",
        "support@medicalinternshipnepal.com",
        "director@medicalinternshipnepal.com"
      ]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 4:00 PM",
        "Sunday: Closed",
        "Emergency Support: 24/7"
      ]
    }
  ];

  const departments = [
    { name: "General Inquiries", email: "info@medicalinternshipnepal.com" },
    { name: "Applications", email: "applications@medicalinternshipnepal.com" },
    { name: "Program Support", email: "support@medicalinternshipnepal.com" },
    { name: "Accommodation", email: "housing@medicalinternshipnepal.com" },
    { name: "Emergency Contact", email: "emergency@medicalinternshipnepal.com" }
  ];

  const faqs = [
    {
      question: "How quickly do you respond to inquiries?",
      answer: "We typically respond to all inquiries within 24-48 hours during business days."
    },
    {
      question: "Can I schedule a video call consultation?",
      answer: "Yes, we offer free video consultations. Please email us to schedule an appointment."
    },
    {
      question: "Do you have representatives in other countries?",
      answer: "We work with educational consultants in several countries. Contact us for local representative information."
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Get in touch with our team for any questions about our medical internship programs. We're here to help you start your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">
              Multiple ways to reach us for support, information, and assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-600">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    required
                    placeholder="Please provide details about your inquiry..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Department Contacts */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Department Contacts</h2>
              <p className="text-gray-600 mb-8">
                For specific inquiries, you can contact our departments directly.
              </p>
              
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">{dept.name}</h3>
                    <a 
                      href={`mailto:${dept.email}`}
                      className="text-teal-600 hover:text-teal-700 transition-colors"
                    >
                      {dept.email}
                    </a>
                  </div>
                ))}
              </div>

              {/* Quick FAQ */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Answers</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">{faq.question}</h4>
                      <p className="text-blue-800 text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map and Address */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
            <p className="text-xl text-gray-600">
              We welcome in-person visits to our Kathmandu office.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Interactive Map</p>
                  <p className="text-sm text-gray-500">Google Maps integration would be placed here</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Office Location</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-teal-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Medical Internship Nepal</p>
                    <p className="text-gray-600">Kathmandu Medical College Road</p>
                    <p className="text-gray-600">Sinamangal, Kathmandu 44600, Nepal</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-teal-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Office Hours</p>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-teal-50 rounded-lg">
                <h4 className="font-semibold text-teal-900 mb-3">Getting Here</h4>
                <ul className="text-teal-800 space-y-2 text-sm">
                  <li>• 15 minutes from Tribhuvan International Airport</li>
                  <li>• Near Kathmandu Medical College</li>
                  <li>• Accessible by taxi, bus, or private vehicle</li>
                  <li>• Parking available on-site</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Emergency Contact</h2>
          <p className="text-xl mb-6 text-red-100">
            For urgent matters outside office hours, please use our emergency contact number.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2">
              <Phone className="h-6 w-6" />
              <span className="text-xl font-semibold">+977-9862728072</span>
            </div>
            <span className="hidden sm:inline text-red-200">|</span>
            <div className="flex items-center space-x-2">
              <Mail className="h-6 w-6" />
              <span className="text-xl font-semibold">emergency@medicalinternshipnepal.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;