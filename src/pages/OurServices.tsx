import React, { useState } from 'react';
import { Bug, Zap, Settings, Shield, CheckCircle, ArrowRight } from 'lucide-react';

const OurServices = () => {
  const [activeTab, setActiveTab] = useState('pest-management');

  const serviceCategories = {
    'pest-management': {
      title: 'Pest Management',
      icon: Bug,
      description: 'Comprehensive pest control solutions for all types of household and commercial pests.',
      gradient: 'from-orange-500 to-orange-600',
      services: [
        {
          name: 'Ants Control',
          description: 'Complete ant colony elimination using targeted baiting systems.',
          image: '/Untitled design.png',
          features: ['Species identification', 'Colony elimination', 'Entry point sealing', 'Prevention program']
        },
        {
          name: 'Bees Control',
          description: 'Safe bee removal and relocation services with protective equipment.',
          image: '/pexels-james-frid-81279-17287162.jpg',
          features: ['Safe removal', 'Relocation services', 'Protective equipment', 'Hive management']
        },
        {
          name: 'Bed Bugs Control',
          description: 'Heat treatment and chemical applications for complete bed bug elimination.',
          image: '/How to check for bedbugs_ Signs to look for in your room, plus what a bite looks like — USA TODAY.jpeg',
          features: ['Heat treatment', 'Chemical application', 'Mattress treatment', 'Follow-up inspection']
        },
        {
          name: 'Wasps Control',
          description: 'Professional wasp nest removal with safety protocols.',
          image: '/wasp copy.jpg',
          features: ['Nest removal', 'Safety protocols', 'Protective gear', 'Prevention advice']
        },
        {
          name: 'Ticks Control',
          description: 'Comprehensive tick control for yards and outdoor areas.',
          image: '/tick.jpg',
          features: ['Yard treatment', 'Residual application', 'Pet protection', 'Seasonal service']
        },
        {
          name: 'Termites Control',
          description: 'Advanced termite treatment and prevention programs.',
          image: '/This Is the Most Termite-Infested City in America.jpeg',
          features: ['Soil treatment', 'Baiting systems', 'Wood treatment', 'Annual inspection']
        },
        {
          name: 'Snakes Control',
          description: 'Emergency snake removal by trained wildlife specialists.',
          image: '/snake copy.jpg',
          features: ['Emergency response', 'Safe removal', 'Habitat modification', 'Prevention advice']
        },
        {
          name: 'Cats Control',
          description: 'Humane cat deterrent and relocation services.',
          image: '/cat.jpg',
          features: ['Humane deterrents', 'Relocation services', 'Feeding area management', 'Community solutions']
        },
        {
          name: 'Dogs Control',
          description: 'Professional stray dog management and control.',
          image: '/dog.jpg',
          features: ['Humane capture', 'Relocation services', 'Area management', 'Safety protocols']
        },
        {
          name: 'Birds Control',
          description: 'Humane bird deterrent systems and netting solutions.',
          image: '/bird.jpg',
          features: ['Bird netting', 'Spike installation', 'Deterrent systems', 'Cleanup service']
        }
      ]
    },
    'vector-management': {
      title: 'Vector Management',
      icon: Zap,
      description: 'Specialized control of disease-carrying pests and vectors.',
      gradient: 'from-orange-500 to-orange-600',
      services: [
        {
          name: 'Rodents Control',
          description: 'Comprehensive rat and mice control with trapping and exclusion methods.',
          image: '/Mouse Infestation _ Pest Control Canberra.jpeg',
          features: ['Trapping systems', 'Baiting programs', 'Entry point sealing', 'Monitoring service']
        },
        {
          name: 'Cockroaches Control',
          description: 'Professional cockroach elimination using gel baiting and residual spraying.',
          image: '/Tips For Cockroach Pest Control.jpeg',
          features: ['Gel baiting system', 'Residual spraying', 'Crack & crevice treatment', 'Follow-up service']
        },
        {
          name: 'Flies Control',
          description: 'Professional fly control using traps, baits, and breeding site elimination.',
          image: '/Flies and bugs are a symbol of disgust and fester….jpeg',
          features: ['Breeding site treatment', 'Trap installation', 'Bait application', 'Sanitation advice']
        },
        {
          name: 'Mosquitoes Control',
          description: 'Comprehensive mosquito management including breeding site treatment.',
          image: '/What\'s the best way to get rid of mosquitoes_.jpeg',
          features: ['Breeding site treatment', 'Fogging services', 'Larvicide application', 'Regular monitoring']
        },
        {
          name: 'Rat Fleas Control',
          description: 'Complete rat flea treatment for homes and pets with residual protection.',
          image: '/flea.jpg',
          features: ['Host Elimination', 'Parasite Elimination', 'Residual Insecticide Spray', 'Residual protection']
        }
      ]
    },
    'solutions': {
      title: 'Solutions',
      icon: Settings,
      description: 'Professional pest control methods and installation services.',
      gradient: 'from-orange-500 to-orange-600',
      services: [
        {
          name: 'Fogging',
          description: 'Thermal and cold fogging services for large area pest control.',
          image: '/fogging.jpg',
          features: ['Thermal fogging', 'Cold fogging', 'Large area coverage', 'Professional equipment']
        },
        {
          name: 'Residual Spraying',
          description: 'Long-lasting residual treatments for continuous pest protection.',
          image: '/residual.jpg',
          features: ['Long-lasting protection', 'Targeted application', 'Safe formulations', 'Regular monitoring']
        },
        {
          name: 'ULV Misting',
          description: 'Ultra-low volume misting for precise and efficient pest control.',
          image: '/ulv.jpg',
          features: ['Precise application', 'Minimal chemical use', 'Efficient coverage', 'Professional equipment']
        },
        {
          name: 'Gel Baiting',
          description: 'Targeted gel baiting systems for cockroaches and ants.',
          image: '/gelbaiting.jpg',
          features: ['Targeted application', 'High effectiveness', 'Safe for families', 'Long-lasting results']
        },
        {
          name: 'Bird Control – Spike Installation',
          description: 'Professional bird spike installation for effective bird deterrence.',
          image: '/spikes copy copy.jpg',
          features: ['Professional installation', 'Durable materials', 'Humane deterrent', 'Maintenance included']
        }
      ]
    }
  };

  const currentCategory = serviceCategories[activeTab as keyof typeof serviceCategories];
  const IconComponent = currentCategory.icon;

  const handleEnquireNow = (serviceName: string) => {
    const message = `Hi! I'm interested in your ${serviceName} service. Could you please provide more information and a quote?`;
    const whatsappUrl = `https://wa.me/6592222278?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-orange-100 text-orange-600 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Professional Services</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive pest control solutions organized into three main categories.
              Choose a category below to explore our specialized services.
            </p>
          </div>
        </div>
      </section>

      {/* Tabbed Interface */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Tab Navigation */}
          <div className="flex flex-col sm:flex-row justify-center mb-16">
            <div className="bg-gray-100 rounded-2xl p-2 inline-flex">
              {Object.entries(serviceCategories).map(([key, category]) => {
                const TabIcon = category.icon;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${activeTab === key
                      ? 'bg-orange-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-orange-600 hover:bg-white'
                      }`}
                  >
                    <TabIcon className="w-5 h-5" />
                    <span className="whitespace-nowrap">{category.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Category Header */}
          <div className="text-center mb-16">
            <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${currentCategory.gradient} rounded-2xl mb-6`}>
              <IconComponent className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {currentCategory.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {currentCategory.description}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentCategory.services.map((service, serviceIndex) => (
              <div
                key={serviceIndex}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    <IconComponent className="w-4 h-4 text-orange-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs text-gray-600">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleEnquireNow(service.name)}
                    className={`w-full bg-gradient-to-r ${currentCategory.gradient} text-white py-2.5 rounded-lg font-medium hover:shadow-lg transition-all duration-200 group flex items-center justify-center space-x-2`}
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Category Benefits */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: 'Licensed & Certified',
                  description: 'All our technicians are fully licensed and certified by NEA Singapore.'
                },
                {
                  icon: CheckCircle,
                  title: 'Guaranteed Results',
                  description: '100% satisfaction guarantee with follow-up treatments included.'
                },
                {
                  icon: Zap,
                  title: '24/7 Emergency Service',
                  description: 'Round-the-clock availability for urgent pest control needs.'
                }
              ].map((benefit, index) => {
                const BenefitIcon = benefit.icon;
                return (
                  <div key={index} className="text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${currentCategory.gradient} rounded-xl mb-4`}>
                      <BenefitIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Service Banner */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Need Emergency Pest Control?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              We're available 24/7 for urgent pest issues. Fast response guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+6592222278"
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Call 24/7 Hotline: +65 6698 9118
              </a>
              <a
                href="https://wa.me/6592222278"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386" />
                </svg>
                WhatsApp Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurServices;