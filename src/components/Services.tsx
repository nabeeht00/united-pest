import React from 'react';
import { Bug, Home, Building2, Leaf, Shield, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Bug,
      title: 'Termite Control',
      description: 'Comprehensive termite inspection, treatment, and prevention services to protect your property from structural damage.',
      features: ['Pre-construction treatment', 'Post-construction treatment', 'Annual maintenance', 'Warranty included'],
      price: 'From $150',
      image: 'https://images.pexels.com/photos/8297031/pexels-photo-8297031.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      popular: true
    },
    {
      icon: Home,
      title: 'Cockroach Control',
      description: 'Effective cockroach elimination using safe, targeted treatments that get to the root of the infestation.',
      features: ['Gel baiting system', 'Residual spraying', 'Follow-up treatments', 'Prevention advice'],
      price: 'From $80',
      image: 'https://images.pexels.com/photos/6195070/pexels-photo-6195070.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    },
    {
      icon: Building2,
      title: 'Rat & Mice Control',
      description: 'Professional rodent control solutions for complete elimination and long-term prevention.',
      features: ['Trapping systems', 'Baiting programs', 'Entry point sealing', 'Monitoring service'],
      price: 'From $120',
      image: 'https://images.pexels.com/photos/6195126/pexels-photo-6195126.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    },
    {
      icon: Leaf,
      title: 'Ant Control',
      description: 'Targeted ant control treatments that eliminate colonies and prevent future infestations.',
      features: ['Species identification', 'Colony elimination', 'Barrier treatments', 'Eco-friendly options'],
      price: 'From $60',
      image: 'https://images.pexels.com/photos/12944665/pexels-photo-12944665.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    },
    {
      icon: Shield,
      title: 'Mosquito Control',
      description: 'Comprehensive mosquito management including breeding site elimination and adult control.',
      features: ['Breeding site treatment', 'Fogging services', 'Larviciding', 'Regular monitoring'],
      price: 'From $90',
      image: 'https://images.pexels.com/photos/3990842/pexels-photo-3990842.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    },
    {
      icon: Clock,
      title: 'General Pest Control',
      description: 'Complete pest management program covering all common household and commercial pests.',
      features: ['Multi-pest treatment', 'Quarterly service', 'Warranty coverage', 'Emergency support'],
      price: 'From $200',
      image: 'https://images.pexels.com/photos/8366834/pexels-photo-8366834.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    }
  ];

  const handleEnquireNow = (serviceName: string) => {
    const message = `Hi! I'm interested in your ${serviceName} service. Could you please provide more information and a quote?`;
    const whatsappUrl = `https://wa.me/6592222278?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-600 rounded-full px-4 py-2 mb-4">
            <Shield className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Professional Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Pest Control Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From residential homes to commercial buildings, we provide specialized pest control services
            tailored to Singapore's unique environmental challenges.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group ${service.popular ? 'ring-2 ring-green-500 relative' : ''
                  }`}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    Most Popular
                  </div>
                )}

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    <span className="text-lg font-bold text-green-600">{service.price}</span>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleEnquireNow(service.title)}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-200 group flex items-center justify-center space-x-2"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Need a custom solution or have questions about our services?
          </p>
          <a
            href="https://wa.me/6592222278?text=Hi! I need help with a custom pest control solution. Can you assist me?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-200"
          >
            Contact Our Experts
            <CheckCircle className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;