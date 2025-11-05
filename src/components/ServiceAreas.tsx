import React from 'react';
import { MapPin, CheckCircle, Clock } from 'lucide-react';

const ServiceAreas = () => {
  const areas = [
    { name: 'Central Singapore', districts: ['Orchard', 'Marina Bay', 'Raffles Place', 'Chinatown'] },
    { name: 'East Singapore', districts: ['Tampines', 'Pasir Ris', 'Bedok', 'Changi'] },
    { name: 'North Singapore', districts: ['Woodlands', 'Yishun', 'Sembawang', 'Admiralty'] },
    { name: 'West Singapore', districts: ['Jurong', 'Clementi', 'Bukit Batok', 'Choa Chu Kang'] },
    { name: 'Northeast Singapore', districts: ['Ang Mo Kio', 'Hougang', 'Sengkang', 'Punggol'] }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-red-100 text-red-600 rounded-full px-4 py-2 mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Service Coverage</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            We Serve All of Singapore
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional pest control services available across all districts in Singapore. 
            Fast response times and comprehensive coverage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {areas.map((area, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 p-2 rounded-lg mr-3">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{area.name}</h3>
              </div>
              <ul className="space-y-2">
                {area.districts.map((district, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {district}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-8 text-white text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Clock className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Fast Response</h3>
              <p className="text-red-100">Within 2 hours for emergencies</p>
            </div>
            <div>
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Island-wide Coverage</h3>
              <p className="text-red-100">All HDB estates and private properties</p>
            </div>
            <div>
              <CheckCircle className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Local Expertise</h3>
              <p className="text-red-100">Understanding Singapore's pest challenges</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;