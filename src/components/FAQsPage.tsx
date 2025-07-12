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
          answer: "Application review typically takes 2-3 weeks. You will receive confirmation of acceptance or requests for additional information within this timeframe."
        },
        {
          question: "Can I apply for multiple programs?",
          answer: "Yes, you can apply for multiple programs, but each requires a separate application. We recommend discussing your goals with our advisors to choose the most suitable programs."
        }
      ]
    },
    {
      category: "Program Details",
      questions: [
        {
          question: "What is included in the program fees?",
          answer: "Program fees include hospital placement, medical supervision, orientation sessions, completion certificate, and 24/7 support. Accommodation, meals, and personal expenses are separate."
        },
        {
          question: "Will I have direct patient contact?",
          answer: "Yes, under proper supervision, interns have direct patient contact during ward rounds, outpatient clinics, and emergency rotations, following hospital protocols and medical ethics."
        },
        {
          question: "Do I need to speak Nepali?",
          answer: "While not mandatory, basic Nepali language skills are helpful for patient interaction. We provide language orientation, and most medical staff speak English."
        },
        {
          question: "What medical procedures can I observe or assist with?",
          answer: "Depending on your program, you may observe surgeries, assist in minor procedures, participate in emergency care, and perform basic clinical examinations under supervision."
        }
      ]
    },
    {
      category: "Accommodation & Living",
      questions: [
        {
          question: "What accommodation options are available?",
          answer: "We offer shared intern housing ($15-25/night), host family stays ($20-30/night), private apartments ($35-50/night), and hotel partnerships ($40-80/night)."
        },
        {
          question: "Is accommodation safe for international students?",
          answer: "Yes, all our accommodations have 24/7 security, are located in safe neighborhoods, and are regularly inspected. We also provide emergency contact numbers and safety briefings."
        },
        {
          question: "Are meals included in accommodation?",
          answer: "Meals are included with host family stays. Other accommodations have kitchen facilities or nearby dining options. We can arrange meal plans upon request."
        },
        {
          question: "How do I get to the hospital from accommodation?",
          answer: "All accommodations are within 15 minutes of partner hospitals. We provide daily shuttle service, and public transportation and taxis are readily available."
        }
      ]
    },
    {
      category: "Visa & Travel",
      questions: [
        {
          question: "Do I need a visa to come to Nepal?",
          answer: "Most international students need a tourist visa for Nepal. We provide visa support letters and guidance for the application process. Some nationalities can get visa on arrival."
        },
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
          question: "What are the typical program costs?",
          answer: "Program fees range from $800-2500 depending on duration and specialty. This includes hospital placement, supervision, and support services. Accommodation and living expenses are additional."
        },
        {
          question: "Are there any hidden costs?",
          answer: "No hidden costs. All fees are clearly outlined in your acceptance letter. Additional expenses include accommodation, meals, personal expenses, and optional cultural activities."
        },
        {
          question: "Do you offer payment plans?",
          answer: "Yes, we offer flexible payment plans. A deposit is required to secure your spot, with the balance due before program start. Contact us to discuss payment options."
        },
        {
          question: "Is financial aid available?",
          answer: "We offer limited scholarships based on academic merit and financial need. Additionally, some medical schools provide funding for international rotations that may apply to our programs."
        }
      ]
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Find answers to common questions about our medical internship programs, application process, and life in Nepal.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const uniqueIndex = categoryIndex * 100 + faqIndex;
                  return (
                    <div key={faqIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <button
                        onClick={() => toggleFaq(uniqueIndex)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                      >
                        <span className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </span>
                        {openFaq === uniqueIndex ? (
                          <Minus className="h-5 w-5 text-teal-600 flex-shrink-0" />
                        ) : (
                          <Plus className="h-5 w-5 text-teal-600 flex-shrink-0" />
                        )}
                      </button>
                      {openFaq === uniqueIndex && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">
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
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Still Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team is here to help you with any additional questions about our medical internship programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              Contact Us
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQsPage;