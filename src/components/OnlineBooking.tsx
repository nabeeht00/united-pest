import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';

const OnlineBooking = () => {
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    date: '',
    time: '',
    urgency: 'normal',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Ant Control',
    'Cockroach Control',
    'Rodent Control',
    'Termite Control',
    'Bed Bug Control',
    'Mosquito Control',
    'Snake Removal',
    'Bird Control',
    'General Pest Control',
    'Emergency Service'
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    console.log('Booking submitted:', bookingData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setBookingData({
        name: '',
        email: '',
        phone: '',
        address: '',
        service: '',
        date: '',
        time: '',
        urgency: 'normal',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-12 shadow-xl">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Booking Confirmed!
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Thank you for your booking. We'll contact you within 30 minutes to confirm your appointment details.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600">
                  <strong>Reference:</strong> UP{Date.now().toString().slice(-6)}
                </p>
              </div>
              <p className="text-sm text-gray-500">
                For urgent matters, call our 24/7 hotline: +65 9222 2278
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-600 rounded-full px-4 py-2 mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Online Booking</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Schedule Your Service
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Book your pest control service online. Choose your preferred date and time, 
            and we'll confirm your appointment within 30 minutes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-3 gap-0">
              {/* Booking Form */}
              <div className="lg:col-span-2 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Book Your Appointment</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={bookingData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={bookingData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+65 XXXX XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={bookingData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      required
                      value={bookingData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed *
                    </label>
                    <select
                      name="service"
                      required
                      value={bookingData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        required
                        value={bookingData.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Time *
                      </label>
                      <select
                        name="time"
                        required
                        value={bookingData.time}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Urgency Level
                    </label>
                    <select
                      name="urgency"
                      value={bookingData.urgency}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="normal">Normal (Within 48 hours)</option>
                      <option value="urgent">Urgent (Within 24 hours)</option>
                      <option value="emergency">Emergency (Within 2 hours)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Details
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={bookingData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Describe your pest problem or any special requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-200"
                  >
                    Book Appointment
                  </button>
                </form>
              </div>

              {/* Booking Info */}
              <div className="bg-gradient-to-br from-red-600 to-orange-600 p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Booking Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 mt-1" />
                    <div>
                      <p className="font-medium">Response Time</p>
                      <p className="text-sm text-red-100">We'll confirm within 30 minutes</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 mt-1" />
                    <div>
                      <p className="font-medium">Flexible Scheduling</p>
                      <p className="text-sm text-red-100">7 days a week, including weekends</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 mt-1" />
                    <div>
                      <p className="font-medium">Island-wide Service</p>
                      <p className="text-sm text-red-100">All areas in Singapore covered</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 mt-1" />
                    <div>
                      <p className="font-medium">Free Inspection</p>
                      <p className="text-sm text-red-100">No obligation assessment included</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-red-400">
                  <p className="font-medium mb-4">Need Immediate Help?</p>
                  <div className="space-y-3">
                    <a
                      href="tel:+6592222278"
                      className="flex items-center space-x-2 text-white hover:text-red-100"
                    >
                      <Phone className="w-4 h-4" />
                      <span>+65 9222 2278 (24/7)</span>
                    </a>
                    <a
                      href="mailto:service@unitedpest.com.sg"
                      className="flex items-center space-x-2 text-white hover:text-red-100"
                    >
                      <Mail className="w-4 h-4" />
                      <span>service@unitedpest.com.sg</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineBooking;