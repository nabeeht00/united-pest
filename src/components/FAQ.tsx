import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How quickly can you respond to pest emergencies?",
      answer: "We offer 24/7 emergency service with response times within 2 hours for urgent pest issues. Our team is always ready to help with immediate pest problems that pose health or safety risks."
    },
    {
      question: "Are your treatments safe for children and pets?",
      answer: "Yes, we use eco-friendly and pet-safe treatments whenever possible. Our technicians will inform you of any precautions needed and can schedule treatments when children and pets are not present if required."
    },
    {
      question: "Do you offer guarantees on your pest control services?",
      answer: "Absolutely! We provide a satisfaction guarantee on all our services. If pests return within the warranty period, we'll return to re-treat at no additional cost until the problem is resolved."
    },
    {
      question: "How much do your pest control services cost?",
      answer: "Pricing varies depending on the type of pest, severity of infestation, and property size. We offer free inspections and quotes. Contact us for a personalized assessment and transparent pricing."
    },
    {
      question: "What types of pests do you handle?",
      answer: "We handle all common Singapore pests including ants, cockroaches, rodents, termites, bed bugs, mosquitoes, snakes, birds, and more. Our team is trained to deal with both residential and commercial pest issues."
    },
    {
      question: "How long does a typical treatment take?",
      answer: "Treatment time varies by pest type and property size. Most residential treatments take 1-3 hours, while commercial properties may require longer. We'll provide an estimated timeframe during your consultation."
    },
    {
      question: "Do I need to prepare my home before treatment?",
      answer: "Preparation requirements depend on the treatment type. We'll provide detailed instructions before your appointment, which may include removing food items, covering surfaces, or temporarily relocating pets."
    },
    {
      question: "How often should I schedule pest control services?",
      answer: "For prevention, we recommend quarterly treatments. However, frequency depends on your property type, pest history, and environmental factors. We'll create a customized maintenance schedule for you."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-600 rounded-full px-4 py-2 mb-4">
            <HelpCircle className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Frequently Asked Questions</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Common Questions About Pest Control
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most frequently asked questions about our pest control services in Singapore.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full bg-gray-50 hover:bg-gray-100 rounded-lg p-6 text-left transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-red-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="bg-white border-l-4 border-red-500 p-6 ml-4 rounded-r-lg">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+6566989118"
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-200"
            >
              Call Us: +65 6698 9118
            </a>
            <a
              href="https://wa.me/6592222278"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-all duration-200"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;