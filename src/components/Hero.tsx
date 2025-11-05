import React from 'react';
import { ArrowRight, CheckCircle, Phone, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-green-700"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/6195126/pexels-photo-6195126.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      ></div>

      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white">
            <div className="inline-flex items-center bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-4 py-2 mb-6">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-sm font-medium">Singapore's #1 Pest Control Experts</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Protect Your
              <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Home & Business
              </span>
              From Pests
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
              Professional pest control services across Singapore with guaranteed results. 
              Safe, effective, and eco-friendly solutions for all pest problems.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-blue-100">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-blue-100">24/7 Emergency Service</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-blue-100">100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-blue-100">Eco-Friendly Solutions</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-200 flex items-center justify-center space-x-2 group"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+6591234567"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Emergency</span>
              </a>
            </div>
          </div>

          {/* Right content - Emergency contact card */}
          <div className="lg:flex justify-end">
            <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md w-full">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Emergency Response</h3>
                <p className="text-gray-600">Available 24/7 for urgent pest issues</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">Response Time</span>
                  <span className="text-green-600 font-bold">Under 2 Hours</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">Service Areas</span>
                  <span className="text-blue-600 font-bold">All Singapore</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">Success Rate</span>
                  <span className="text-green-600 font-bold">99.8%</span>
                </div>
              </div>

              <a
                href="tel:+6591234567"
                className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 rounded-lg font-bold text-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 flex items-center justify-center space-x-2 mt-6"
              >
                <Phone className="w-5 h-5" />
                <span>+65 9123 4567</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;