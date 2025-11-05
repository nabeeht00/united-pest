import React from 'react';
import { Users, Award, Clock, Shield, CheckCircle, Star } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Users,
      number: '10,000+',
      label: 'Happy Customers',
      description: 'Satisfied clients across Singapore'
    },
    {
      icon: Award,
      number: '15+',
      label: 'Years Experience',
      description: 'Proven track record in pest control'
    },
    {
      icon: Clock,
      number: '2 Hours',
      label: 'Response Time',
      description: 'Emergency service availability'
    },
    {
      icon: Shield,
      number: '99.8%',
      label: 'Success Rate',
      description: 'Effective pest elimination'
    }
  ];

  const achievements = [
    'NEA Licensed Pest Control Operator',
    'ISO 9001:2015 Quality Management Certified',
    'Singapore Business Federation Member',
    'Eco-friendly Treatment Specialist',
    'Commercial & Residential Expert',
    '24/7 Emergency Response Team'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center bg-green-100 text-green-600 rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">About PestGuard Pro</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Singapore's Most Trusted Pest Control Experts
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              For over 15 years, PestGuard Pro has been protecting homes and businesses across Singapore 
              from pest infestations. Our team of certified professionals uses advanced, eco-friendly 
              techniques to ensure complete pest elimination while maintaining the safety of your family 
              and environment.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We understand Singapore's unique climate challenges and have developed specialized treatment 
              programs that address local pest behaviors and seasonal patterns. Our commitment to 
              excellence has made us the preferred choice for thousands of satisfied customers.
            </p>

            {/* Achievements */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{achievement}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <div>
                <p className="text-sm text-gray-600">Rated 4.9/5.0</p>
                <p className="text-xs text-gray-500">Based on 2,500+ reviews</p>
              </div>
            </div>
          </div>

          {/* Right Content - Image and Stats */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/6195039/pexels-photo-6195039.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Professional pest control team"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              {/* Floating Stats Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600">15+</p>
                    <p className="text-xs text-gray-600">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">10K+</p>
                    <p className="text-xs text-gray-600">Happy Customers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.slice(2).map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg mb-3">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</p>
                    <p className="text-sm font-medium text-gray-700 mb-1">{stat.label}</p>
                    <p className="text-xs text-gray-500">{stat.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</p>
                <p className="text-lg font-medium text-gray-700 mb-1">{stat.label}</p>
                <p className="text-sm text-gray-500">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;