import React from 'react';
import { Star, Quote, Users, CheckCircle } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Chen Wei Ling',
      rating: 5,
      comment: 'United Pest solved our termite problem quickly and professionally. Their team was knowledgeable, punctual, and the treatment was completely effective. Highly recommended for anyone facing pest issues in Singapore!',
      service: 'Termite Control'
    },
    {
      name: 'Brewerkz Singapore',
      rating: 5,
      comment: 'United Pest has been our trusted pest control partner across multiple outlets. Their reliable and consistent service helps us uphold the highest hygiene standards in all our locations.',
      service: 'F&B Pest Control'
    },
    {
      name: 'Amirul Hassan',
      rating: 5,
      comment: 'Excellent service for our office building. They handled our cockroach issue discreetly and efficiently. The staff is professional and the results speak for themselves. No more pest problems!',
      service: 'Cockroach Control'
    },
    {
      name: 'Prime Supermarket',
      rating: 5,
      comment: 'We rely on United Pest for ongoing pest management. Their proactive solutions and detailed service reports ensure our supermarket remains safe and pest-free.',
      service: 'General Pest Control'
    },
    {
      name: 'Lim Jia Hao',
      rating: 5,
      comment: 'Outstanding customer service and results. They responded to our emergency call within an hour and completely eliminated our rat problem. Worth every dollar and peace of mind!',
      service: 'Rodent Control'
    },
    {
      name: 'Ya Kun Kaya Toast',
      rating: 5,
      comment: 'Thanks to United Pest, our F&B outlets stay pest-free and compliant. Their team is efficient, discreet, and understands the unique needs of food establishments.',
      service: 'F&B Pest Control'
    },
    {
      name: 'Hen Ho Quan Vietnamese Restaurant',
      rating: 5,
      comment: 'As a busy F&B outlet, maintaining hygiene is critical. United Pest has been a game-changer for our restaurant. Their team is punctual, discreet, and understands the unique needs of food businesses. After their treatment, we\'ve seen a huge drop in pest activity and peace of mind knowing NEA compliance is fully met. Highly recommended for any restaurant in Singapore!',
      service: 'General Pest Control'
    },
    {
      name: 'Brainy Bunch Pre-school',
      rating: 5,
      comment: 'United Pest has been a reliable partner in maintaining a clean and pest-free environment at our pre-school. Their child-safe and effective treatments give us full confidence.',
      service: 'Educational Facility Pest Control'
    },
    {
      name: 'Mei Fang',
      rating: 5,
      comment: 'Best pest control service in Singapore! They solved our ant problem that other companies couldn\'t fix. Professional, affordable, and guaranteed results. Will definitely use them again.',
      service: 'Ant Control'
    },
    {
      name: 'Cafe Iguana',
      rating: 5,
      comment: 'We\'ve worked with United Pest for years. Their experience with F&B makes a big difference—always fast, effective, and professional.',
      service: 'F&B Pest Control'
    },
    {
      name: 'Nur Aisyah',
      rating: 5,
      comment: 'Exceptional service from start to finish. Their mosquito control program has made our outdoor spaces enjoyable again. Highly professional team with great follow-up service!',
      service: 'Mosquito Control'
    },
    {
      name: 'Edith Patisserie',
      rating: 5,
      comment: 'United Pest understands the importance of maintaining hygiene in a bakery setting. Their prompt service and thorough inspections have helped us stay compliant and pest-free.',
      service: 'F&B Pest Control'
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-orange-100 text-orange-600 rounded-full px-4 py-2 mb-6">
              <Users className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Customer Reviews</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              What Our Customers Say
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Don't just take our word for it. Here's what satisfied customers
              across Singapore have to say about our pest control services.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 relative border border-gray-100 group"
              >
                {/* Quote Icon */}
                <div className="absolute -top-3 left-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-2 shadow-lg">
                  <Quote className="w-4 h-4 text-white" />
                </div>

                {/* Verified Review Badge & Service Badge */}
                <div className="flex items-center justify-between mb-4 mt-2">
                  <div className="inline-flex items-center bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1 rounded-full border border-blue-200">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Verified Review
                  </div>
                  <div className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${testimonial.service.includes('F&B') || testimonial.service.includes('Educational')
                    ? 'bg-purple-100 text-purple-600 border border-purple-200'
                    : testimonial.service === 'General Pest Control'
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

                {/* Author - No location */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4 shadow-md">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Trusted by Thousands of Customers
            </h2>
            <p className="text-xl text-orange-100">
              Our track record speaks for itself
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
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
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Join Our Satisfied Customers?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Experience the same professional service and guaranteed results that our customers rave about.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+6592222278"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 inline-flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                Call Now: +65 6698 9118
              </a>
              <a
                href="https://wa.me/6592222278"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-all duration-200 inline-flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;