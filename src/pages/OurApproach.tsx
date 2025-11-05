import React from 'react';
import { Search, Thermometer, Target, Zap, CheckCircle, Eye } from 'lucide-react';

const OurApproach = () => {
  const steps = [
    {
      icon: Search,
      title: 'Inspection',
      description: 'Comprehensive property assessment to identify pest types, entry points, and infestation levels.',
      details: [
        'Visual inspection of all areas',
        'Identification of pest species',
        'Assessment of damage levels',
        'Documentation with photos'
      ],
      image: '/ChatGPT%20Image%20Jun%2020,%202025,%2006_35_52%20PM.png'
    },
    {
      icon: Thermometer,
      title: 'Thermal Imaging',
      description: 'Advanced thermal imaging technology to detect hidden infestations and moisture issues.',
      details: [
        'Non-invasive detection method',
        'Identifies hidden pest activity',
        'Locates moisture problems',
        'Precise targeting of treatment areas'
      ],
      image: '/ChatGPT%20Image%20Jun%2020,%202025,%2006_52_12%20PM.png'
    },
    {
      icon: Target,
      title: 'Infestation Assessment',
      description: 'Detailed analysis of infestation severity and development of customized treatment strategy.',
      details: [
        'Severity level determination',
        'Risk factor analysis',
        'Treatment priority mapping',
        'Timeline establishment'
      ],
      image: '/assesment.png'
    },
    {
      icon: Zap,
      title: 'Treatment',
      description: 'Professional application of targeted treatments using safe, effective methods.',
      details: [
        'Eco-friendly treatment options',
        'Targeted application methods',
        'Safety protocols followed',
        'Minimal disruption to daily life'
      ],
      image: '/treatment.png'
    },
    {
      icon: Eye,
      title: 'Review & Follow-Up',
      description: 'Continuous monitoring and follow-up treatments to ensure complete pest elimination.',
      details: [
        'Regular monitoring visits',
        'Treatment effectiveness evaluation',
        'Additional treatments if needed',
        'Prevention recommendations'
      ],
      image: '/ChatGPT%20Image%20Jun%2020,%202025,%2006_13_41%20PM.png'
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-orange-100 text-orange-600 rounded-full px-4 py-2 mb-6">
              <Target className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Our Methodology</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Professional Approach
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We follow a systematic, science-based approach to pest control that ensures 
              effective results and long-term protection for your property.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className={`mb-20 ${index === steps.length - 1 ? 'mb-0' : ''}`}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
                  {/* Content */}
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        <span className="font-bold">{index + 1}</span>
                      </div>
                      <div className="bg-orange-100 p-3 rounded-lg">
                        <IconComponent className="w-6 h-6 text-orange-600" />
                      </div>
                    </div>
                    
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h2>
                    
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    <ul className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image */}
                  <div className={isEven ? 'lg:col-start-2' : 'lg:col-start-1'}>
                    <div className="relative">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
                      />
                      <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                        <IconComponent className="w-8 h-8 text-orange-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Our Approach Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Our Approach Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic methodology ensures thorough pest elimination and long-term prevention.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Precision Targeting',
                description: 'We identify and target the root cause of pest problems, not just the symptoms.'
              },
              {
                icon: Thermometer,
                title: 'Advanced Technology',
                description: 'Using thermal imaging and modern detection methods for accurate assessment.'
              },
              {
                icon: CheckCircle,
                title: 'Guaranteed Results',
                description: 'Our systematic approach ensures effective treatment with follow-up support.'
              }
            ].map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurApproach;