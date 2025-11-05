import React from 'react';
import { Shield, Clock, Leaf, Award, Users, CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully licensed by NEA Singapore with comprehensive insurance coverage for your peace of mind.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Clock,
      title: '24/7 Emergency Service',
      description: 'Round-the-clock availability for urgent pest issues with guaranteed response within 2 hours.',
      gradient: 'from-red-500 to-red-600'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Solutions',
      description: 'Safe, environmentally responsible treatments that protect your family, pets, and the environment.',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Award,
      title: 'Guaranteed Results',
      description: '100% satisfaction guarantee with follow-up treatments included until the problem is resolved.',  
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Expert Technicians',
      description: 'Highly trained and certified pest control specialists with extensive local knowledge.',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: CheckCircle,
      title: 'Transparent Pricing',
      description: 'No hidden fees or surprise charges. Clear, upfront pricing with detailed service explanations.',
      gradient: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-600 rounded-full px-4 py-2 mb-4">
            <Award className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Why Choose Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The PestGuard Pro Advantage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over 15 years of experience serving Singapore, we've built our reputation on 
            reliability, effectiveness, and exceptional customer service.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${reason.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-200`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {reason.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Simple 4-Step Process
            </h3>
            <p className="text-lg text-gray-600">
              From initial contact to complete pest elimination, we make the process seamless and stress-free.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Free Inspection',
                description: 'Comprehensive property assessment and pest identification'
              },
              {
                step: '02', 
                title: 'Custom Treatment Plan',
                description: 'Tailored solution based on your specific pest problem'
              },
              {
                step: '03',
                title: 'Professional Treatment',
                description: 'Safe, effective treatment by certified technicians'
              },
              {
                step: '04',
                title: 'Follow-up & Monitoring',
                description: 'Ongoing support to ensure long-term pest prevention'
              }
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-green-200 z-0"></div>
                )}
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;