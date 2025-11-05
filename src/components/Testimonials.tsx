import React from 'react';
import { Star, Quote, MapPin, CheckCircle } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Chen Wei Ling',
      location: 'Tampines',
      rating: 5,
      comment: 'United Pest solved our termite problem quickly and professionally. Their team was knowledgeable, punctual, and the treatment was completely effective. Highly recommended!',
      service: 'Termite Control'
    },
    {
      name: 'Amirul Hassan',
      location: 'Yishun',
      rating: 5,
      comment: 'Excellent service for our office building. They handled our cockroach issue discreetly and efficiently. The staff is professional and the results speak for themselves.',
      service: 'Cockroach Control'
    },
    {
      name: 'Lim Jia Hao',
      location: 'Hougang',
      rating: 5,
      comment: 'Outstanding customer service and results. They responded to our emergency call within an hour and completely eliminated our rat problem. Worth every dollar!',
      service: 'Rodent Control'
    },
    {
      name: 'Hen Ho Quan',
      location: 'Vietnam Restaurant, Geylang',
      rating: 5,
      comment: 'As a busy F&B outlet, maintaining hygiene is critical. United Pest has been a game-changer for our restaurant. Their team is punctual, discreet, and understands the unique needs of food businesses. After their treatment, we\'ve seen a huge drop in pest activity and peace of mind knowing NEA compliance is fully met. Highly recommended for any restaurant in Singapore!',
      service: 'General Pest Control'
    },
    {
      name: 'Mei Fang',
      location: 'Bedok',
      rating: 5,
      comment: 'Best pest control service in Singapore! They solved our ant problem that other companies couldn\'t fix. Professional, affordable, and guaranteed results.',
      service: 'Ant Control'
    },
    {
      name: 'Nur Aisyah',
      location: 'Jurong East',
      rating: 5,
      comment: 'Exceptional service from start to finish. Their mosquito control program has made our outdoor spaces enjoyable again. Highly professional team!',
      service: 'Mosquito Control'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-100 text-orange-600 rounded-full px-4 py-2 mb-4">
            <Star className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Customer Reviews</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what thousands of satisfied customers
            across Singapore have to say about our pest control services.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 relative border border-gray-100 group"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 left-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-2 shadow-lg">
                <Quote className="w-4 h-4 text-white" />
              </div>

              {/* Verified Google Review Badge & Service Badge */}
              <div className="flex items-center justify-between mb-4 mt-2">
                <div className="inline-flex items-center bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1 rounded-full border border-blue-200">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Verified Google Review
                </div>
                <div className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${testimonial.service === 'General Pest Control'
                    ? 'bg-green-100 text-green-600 border border-green-200'
                    : 'bg-orange-100 text-orange-600'
                  }`}>
                  {testimonial.service}
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-sm font-medium text-gray-600">5.0</span>
              </div>

              {/* Comment */}
              <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                "{testimonial.comment}"
              </p>

              {/* Author - No profile photo */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4 shadow-md">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-3 h-3 mr-1 text-orange-500" />
                    {testimonial.location}
                  </div>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <p className="text-4xl font-bold mb-2">5.0/5.0</p>
              <p className="text-orange-100">Average Rating</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <p className="text-4xl font-bold mb-2">1,000+</p>
              <p className="text-orange-100">Happy Customers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <p className="text-4xl font-bold mb-2">99%</p>
              <p className="text-orange-100">Success Rate</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <p className="text-4xl font-bold mb-2">24/7</p>
              <p className="text-orange-100">Emergency Service</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to join thousands of satisfied customers?
          </p>
          <a
            href="https://wa.me/6592222278?text=Hi! I would like to get a quote for pest control services. Can you help me?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get Your Free Quote Today
            <Star className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;