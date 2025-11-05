import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Shield, Users, Bug, Zap, Settings } from 'lucide-react';
import AIPestControlAdvisor from '../components/AIPestControlAdvisor';

const Homepage = () => {
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
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-orange-700"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Background image - Updated to use the new team image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(/ChatGPT%20Image%20Jun%2023,%202025,%2002_34_12%20PM%20copy.png)'
          }}
        ></div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full px-6 py-3 mb-8">
              <Shield className="w-5 h-5 text-orange-400 mr-2" />
              <span className="font-bold text-white">Singapore's Trusted Pest Control Experts</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              Keeping You
              <span className="block bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Safe & Pest Free
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-100 mb-12 leading-relaxed max-w-3xl mx-auto">
              Professional pest control and vector management services across Singapore. 
              Fast, effective, and reliable solutions for all your pest problems.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:+6566989118"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 flex items-center justify-center space-x-2 group"
              >
                <span>Call Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/6592222278"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section - Updated with new content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-orange-100 text-orange-600 rounded-full px-4 py-2 mb-6">
                <Users className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Who We Are</span>
              </div>
              
              <h2 className="leading-tight mb-8">
                <span className="text-4xl lg:text-5xl font-bold text-gray-600">United</span>{' '}
                <span className="text-4xl lg:text-5xl font-bold text-orange-600">Pest</span>
                <br />
                <span className="text-2xl lg:text-3xl font-bold text-gray-500">& Vector Management Pte Ltd</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Content */}
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>United Pest & Vector Management</strong> is Singapore's trusted name in professional pest control services. With years of industry expertise, we specialize in protecting homes and businesses from a wide range of pest infestations using safe, effective, and eco-friendly solutions.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  We are committed to delivering <strong>customized pest management plans</strong> that address the root cause of the problem—not just the symptoms. Our licensed technicians use advanced tools, thermal imaging, and targeted treatments to ensure long-lasting results for every client.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Whether you're a restaurant, school, healthcare facility, office, or residential property, we understand the importance of a clean, pest-free environment. That's why we operate with <strong>precision, urgency, and full compliance</strong> with Singapore's strict NEA guidelines.
                </p>
                
                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                  <p className="text-lg text-gray-800 font-medium italic">
                    "At United Pest, we don't just treat pests—we protect your reputation, your safety, and your peace of mind."
                  </p>
                </div>
              </div>

              {/* Right Content - Why Choose Us */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  Why Choose Us
                </h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">
                      <strong>NEA-Licensed Technicians</strong>
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">
                      <strong>Fast Response & 24/7 Availability</strong>
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">
                      <strong>Modern, Eco-Friendly Treatments</strong>
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">
                      <strong>F&B & Commercial Industry Specialists</strong>
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">
                      <strong>Detailed Inspection, Treatment & Follow-Up</strong>
                    </span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center space-x-6">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-orange-600">24/7</p>
                      <p className="text-sm text-gray-600">Emergency Service</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-orange-600">NEA</p>
                      <p className="text-sm text-gray-600">Licensed</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-orange-600">100%</p>
                      <p className="text-sm text-gray-600">Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-100 text-orange-600 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Professional Services</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive pest control solutions organized into three main categories. 
              Choose a category below to explore our specialized services.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-col sm:flex-row justify-center mb-16">
            <div className="bg-gray-100 rounded-2xl p-2 inline-flex">
              {Object.entries(serviceCategories).map(([key, category]) => {
                const TabIcon = category.icon;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                      activeTab === key
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
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {currentCategory.title}
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {currentCategory.description}
            </p>
          </div>

          {/* Services Grid - Completely removed all icons from service cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentCategory.services.map((service, serviceIndex) => (
              <div
                key={serviceIndex}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
              >
                {/* Image - No icons at all */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h4>
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
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
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
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h4>
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

      {/* AI Pest Control Advisor Section */}
      <AIPestControlAdvisor />
    </div>
  );
};

export default Homepage;