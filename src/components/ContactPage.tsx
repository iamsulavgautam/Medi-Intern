import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Star,
  Globe,
  MessageCircle,
  Zap,
  Shield,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // SEO Structured Data for Contact Information
  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Medical Exchange Nepal - Medical Internship Programs",
    description:
      "Get in touch with Medical Exchange Nepal for medical internship programs, application support, and program inquiries. Located in Kathmandu, Nepal.",
    url: "https://medicalexchangenepal.com/contact",
    mainEntity: {
      "@type": "Organization",
      name: "Medical Exchange Nepal",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kathmandu Medical College Road, Sinamangal",
        addressLocality: "Kathmandu",
        postalCode: "44600",
        addressCountry: "Nepal",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+977-9862728072",
          contactType: "customer service",
          availableLanguage: "English",
        },
        {
          "@type": "ContactPoint",
          email: "info@medicalinternshipnepal.com",
          contactType: "customer service",
        },
      ],
    },
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    console.log("Contact form submitted:", formData);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Our Location",
      description: "Located in Kathmandu's medical district",
      details: [
        "Medical Internship Nepal",
        "Kathmandu Medical College Road",
        "Sinamangal, Kathmandu 44600",
        "Nepal",
      ],
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Contact Numbers",
      description: "Reach us anytime for assistance",
      details: [
        "Office: +977-9862728072",
        "Emergency: +977-9862728072",
        "WhatsApp: +977-9862728072",
      ],
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Support",
      description: "Professional email assistance",
      details: [
        "info@medicalinternshipnepal.com",
        "applications@medicalinternshipnepal.com",
        "support@medicalinternshipnepal.com",
      ],
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Office Hours",
      description: "When our team is available",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 4:00 PM",
        "Sunday: Closed",
        "Emergency Support: 24/7",
      ],
    },
  ];

  const departments = [
    {
      name: "General Inquiries",
      email: "info@medicalinternshipnepal.com",
      icon: <Globe className="h-5 w-5" />,
      description: "General questions and information",
    },
    {
      name: "Applications",
      email: "applications@medicalinternshipnepal.com",
      icon: <CheckCircle className="h-5 w-5" />,
      description: "Application process and requirements",
    },
    {
      name: "Program Support",
      email: "support@medicalinternshipnepal.com",
      icon: <Shield className="h-5 w-5" />,
      description: "Technical and program assistance",
    },
    {
      name: "Emergency Contact",
      email: "emergency@medicalinternshipnepal.com",
      icon: <Zap className="h-5 w-5" />,
      description: "Urgent matters and emergencies",
    },
  ];

  const stats = [
    {
      number: "24h",
      label: "Response Time",
      icon: <Clock className="h-6 w-6" />,
    },
    {
      number: "98%",
      label: "Satisfaction Rate",
      icon: <Star className="h-6 w-6" />,
    },
    {
      number: "24/7",
      label: "Emergency Support",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      number: "50+",
      label: "Countries Served",
      icon: <Globe className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactStructuredData),
        }}
      />

      {/* Animated Background Elements - matching HomePage */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-emerald-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Section - vibrant theme */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700"></div>
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 shadow-lg">
              <MessageCircle className="h-4 w-4 text-white mr-2" />
              <span className="text-sm font-medium text-white">
                Professional Support Available
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent leading-tight">
              Get in Touch
            </h1>

            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">
              Connect with our expert team and take the first step towards your
              <span className="font-semibold text-white">
                {" "}
                medical journey
              </span>{" "}
              in Nepal
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="text-white mb-2 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs text-blue-100 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Contact Information
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Multiple ways to reach our professional team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="group">
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-slate-600 mb-4 text-sm">
                    {info.description}
                  </p>

                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <div className="w-1 h-1 rounded-full bg-slate-400 mt-2 flex-shrink-0"></div>
                        <p className="text-slate-700 text-sm break-all overflow-hidden text-ellipsis min-w-0">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20">
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                    Send us a Message
                  </h2>
                  <p className="text-slate-600">
                    We'll get back to you within 24 hours
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mx-auto mb-4">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Message Sent!
                    </h3>
                    <p className="text-slate-600">
                      Thank you for reaching out. We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="form-label">Your Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="form-input"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="form-label">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="form-input"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="form-label">Subject *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                      >
                        <option value="">Select a subject</option>
                        <option value="program-inquiry">Program Inquiry</option>
                        <option value="application-question">
                          Application Question
                        </option>
                        <option value="accommodation">Accommodation</option>
                        <option value="visa-support">Visa Support</option>
                        <option value="general">General Question</option>
                        <option value="partnership">
                          Partnership Opportunity
                        </option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="form-label">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        required
                        placeholder="Please provide details about your inquiry..."
                        className="form-input resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed group"
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

            {/* Department Contacts */}
            <div className="order-1 lg:order-2">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Department Contacts
                </h3>
                <p className="text-slate-600 mb-6">
                  Connect directly with the right team
                </p>

                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div
                      key={index}
                      className="group p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 p-2 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white group-hover:scale-110 transition-transform duration-300">
                          {dept.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-slate-900 mb-1">
                            {dept.name}
                          </h4>
                          <p className="text-sm text-slate-600 mb-2">
                            {dept.description}
                          </p>
                          <a
                            href={`mailto:${dept.email}`}
                            className="text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium inline-flex items-center group break-all"
                          >
                            <Mail className="h-3 w-3 mr-1 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-200" />
                            <span className="break-all">{dept.email}</span>
                          </a>
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

      {/* Office Location */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Visit Our Office
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Located in Kathmandu's medical district
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Interactive Map - Real Google Maps */}
            <div className="order-2 lg:order-1">
              <div className="relative bg-gradient-to-br from-slate-100 to-blue-100 rounded-2xl overflow-hidden shadow-2xl border border-white/20 group">
                <div className="relative h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113032.77549028778!2d85.2911132!3d27.7091129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2s!4v1692708340000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-2xl"
                  ></iframe>
                </div>

                {/* Floating location pin */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-white/20">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs font-medium text-slate-700">
                      Kathmandu, Nepal
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Details */}
            <div className="order-1 lg:order-2">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Office Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Address</h4>
                      <div className="text-slate-600 space-y-1">
                        <p className="font-medium">Medical Internship Nepal</p>
                        <p>Baneshwor, Kathmandu, Nepal</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">
                        Office Hours
                      </h4>
                      <div className="text-slate-600 space-y-1">
                        <p>
                          <span className="font-medium">Mon - Fri:</span> 9:00
                          AM - 6:00 PM
                        </p>
                        <p>
                          <span className="font-medium">Saturday:</span> 9:00 AM
                          - 4:00 PM
                        </p>
                        <p>
                          <span className="font-medium">Sunday:</span> Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl border border-teal-100">
                  <h4 className="font-bold text-teal-900 mb-3 flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Getting Here
                  </h4>
                  <ul className="text-teal-800 space-y-2">
                    <li className="flex items-start">
                      <div className="w-1 h-1 rounded-full bg-teal-500 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm">
                        15 minutes from Tribhuvan International Airport
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1 h-1 rounded-full bg-teal-500 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm">
                        Near Kathmandu Medical College
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1 h-1 rounded-full bg-teal-500 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm">
                        Accessible by taxi, bus, or private vehicle
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Section - Alert Red Theme */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-700 to-rose-700"></div>
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-6 shadow-xl">
            <Zap className="h-8 w-8" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Emergency Contact
          </h2>
          <p className="text-lg text-red-100 max-w-2xl mx-auto font-light mb-8">
            For urgent matters outside office hours, we're available 24/7
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl hover:bg-white/25 transition-all duration-300 group">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3">
                <div className="p-2 rounded-full bg-white/20 group-hover:bg-white/30 transition-all duration-300">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-sm font-medium text-red-100 mb-1">
                    Emergency Hotline
                  </p>
                  <p className="text-lg sm:text-xl font-bold break-all">
                    +977-9862728072
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl hover:bg-white/25 transition-all duration-300 group">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3">
                <div className="p-2 rounded-full bg-white/20 group-hover:bg-white/30 transition-all duration-300">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="text-center sm:text-left min-w-0">
                  <p className="text-sm font-medium text-red-100 mb-1">
                    Emergency Email
                  </p>
                  <p className="text-sm sm:text-base font-bold break-all">
                    emergency@medicalinternshipnepal.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 max-w-xl mx-auto">
            <p className="text-red-50 text-sm">
              <strong>Available 24/7</strong> for medical emergencies, safety
              concerns, and urgent program-related matters
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
