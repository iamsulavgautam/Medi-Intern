import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQsPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      category: "General Information",
      questions: [
        {
          question: "What are the eligibility requirements for medical internship programs?",
          answer: "Students must be currently enrolled in medical school, have completed basic clinical rotations, possess English proficiency, and hold valid medical insurance. Specific requirements may vary by program."
        },
        {
          question: "How long are the internship programs?",
          answer: "Our programs range from 2 weeks to 16 weeks depending on the specialty. General Medicine and Pediatrics are typically 4-12 weeks, while Surgery programs can extend up to 16 weeks."
        },
        {
          question: "When should I apply for an internship?",
          answer: "We recommend applying at least 3-6 months in advance to ensure availability and proper visa processing. Popular programs fill up quickly, especially during peak seasons."
        },
        {
          question: "Are the internships recognized internationally?",
          answer: "Yes, all our programs provide internationally recognized certificates upon completion. Our partner hospitals are accredited by Nepal Medical Council and recognized by international medical boards."
        }
      ]
    },
    {
      category: "Application Process",
      questions: [
        {
          question: "What documents do I need to apply?",
          answer: "Required documents include: medical school enrollment letter, academic transcripts, CV/resume, passport copy, medical insurance proof, and letter of recommendation from faculty."
        },
        {
          question: "Is there an application fee?",
          answer: "Yes, there is a non-refundable application fee of $100 which covers administrative costs and processing. This fee is separate from the program fees."
        },
        {
          question: "How long does the application review take?",
          answer: "Application review typically takes 2-3 weeks. You'll receive confirmation within 48 hours of submission, followed by a detailed review of your qualifications."
        },
        {
          question: "Can I apply for multiple programs?",
          answer: "Yes, you can apply for multiple programs, but each requires a separate application. We recommend prioritizing based on your interests and career goals."
        }
      ]
    },
    {
      category: "Program Details",
      questions: [
        {
          question: "What is included in the program fee?",
          answer: "Program fees include hospital placement, medical supervision, orientation, completion certificate, and 24/7 support. Accommodation, meals, and travel are additional costs."
        },
        {
          question: "Are there accommodation options?",
          answer: "Yes, we offer various accommodation options including shared apartments, homestays, and guest houses. Prices range from $200-600 per month depending on your preference."
        },
        {
          question: "What clinical experiences can I expect?",
          answer: "You'll have hands-on clinical experience including patient consultations, ward rounds, procedure observations, and case discussions with experienced physicians."
        },
        {
          question: "Is there language support available?",
          answer: "Yes, we provide basic Nepali language orientation and can arrange interpreters when needed. However, most medical activities are conducted in English."
        }
      ]
    },
    {
      category: "Living in Nepal",
      questions: [
        {
          question: "What vaccinations are required?",
          answer: "Recommended vaccinations include Hepatitis A & B, Typhoid, Japanese Encephalitis, and routine vaccines. Consult your healthcare provider for personalized recommendations."
        },
        {
          question: "What is the best time to visit Nepal for internships?",
          answer: "Nepal has year-round programs. October-March offers pleasant weather, while April-September is warmer but monsoon season (June-August) may affect travel."
        },
        {
          question: "Do you provide airport pickup?",
          answer: "Yes, we provide airport pickup service for all interns. Details will be shared in your pre-arrival information packet along with emergency contact numbers."
        }
      ]
    },
    {
  category: "Costs & Payments",
  questions: [
    {
      question: "Where does our fee go?",
      answer: `Your fees help support the following initiatives:
- Schools for mentally and physically disabled children and young adults
- Women’s empowerment programs
- Educational support for schools
- Child sponsorships
- Aid for earthquake victims
- Aid for flood victims
- Operating health clinics`
    },
        {
          question: "What are the typical program costs?",
          answer: "Program fees range from $800-2500 depending on duration and specialty. This includes hospital placement, supervision, and support services. Accommodation and living expenses are additional."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept bank transfers, credit cards, and PayPal. A 50% deposit is required upon acceptance, with the balance due 30 days before program start."
        },
        {
          question: "Is there a refund policy?",
          answer: "Yes, we have a tiered refund policy. Cancellations 60+ days before start receive 80% refund, 30-59 days receive 50%, and less than 30 days receive 25% refund."
        },
        {
          question: "Are there any hidden costs?",
          answer: "No hidden costs. All program fees are clearly outlined. Additional expenses include visa fees ($25-40), accommodation, meals, local transport, and personal expenses."
        }
      ]
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent leading-tight mb-6">Frequently Asked Questions</h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
              Find answers to common questions about our medical internship programs, application process, and life in Nepal.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="relative py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const uniqueIndex = categoryIndex * 100 + faqIndex;
                  return (
                    <div key={uniqueIndex} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-300">
                      <button
                        onClick={() => toggleFaq(uniqueIndex)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/20 transition-colors duration-200"
                      >
                        <span className="text-lg font-semibold text-slate-900 pr-4">
                          {faq.question}
                        </span>
                        {openFaq === uniqueIndex ? (
                          <Minus className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        ) : (
                          <Plus className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        )}
                      </button>
                      {openFaq === uniqueIndex && (
                        <div className="px-6 pb-4">
                          <p className="text-slate-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Still Have Questions?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Our team is here to help you with any additional questions about our medical internship programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Contact Us
              </button>
              <button className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQsPage;
