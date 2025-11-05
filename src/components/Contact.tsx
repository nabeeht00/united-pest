import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    urgency: 'normal'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create email content
      const emailSubject = `New Pest Control Inquiry - ${formData.urgency.toUpperCase()}`;
      const emailBody = `
New Customer Inquiry Details:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service Needed: ${formData.service}
Urgency Level: ${formData.urgency}

Message:
${formData.message}

---
Submitted on: ${new Date().toLocaleString()}
      `;

      // Option 1: mailto link (opens email client)
      const mailtoLink = `mailto:service@unitedpest.com.sg?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;

      // Option 2: You can also integrate with email services like EmailJS
      // await emailjs.send('service_id', 'template_id', formData, 'user_id');

      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          urgency: 'normal'
        });
      }, 3000);

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try calling us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
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
                Request Sent Successfully!
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Your inquiry has been forwarded to our team. We'll contact you within 24 hours to discuss your pest control needs.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600">
                  <strong>For urgent matters:</strong> Call our 24/7 hotline at +65 9222 2278
                </p>
              </div>
              <p className="text-sm text-gray-500">
                Reference ID: UP{Date.now().toString().slice(-6)}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-600 rounded-full px-4 py-2 mb-4">
            <MessageCircle className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Get In Touch</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contact Our Pest Control Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to solve your pest problem? Get in touch with us for a free consultation 
            and customized treatment plan.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h3>
              
              <div className="space-y-6">
                {/* Emergency Contact */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center text-red-700 mb-2">
                    <Phone className="w-5 h-5 mr-2" />
                    <span className="font-semibold">24/7 Emergency</span>
                  </div>
                  <a
                    href="tel:+6592222278"
                    className="text-lg font-bold text-red-600 hover:text-red-700"
                  >
                    +65 9222 2278
                  </a>
                  <p className="text-sm text-red-600 mt-1">Immediate response for urgent pest issues</p>
                </div>

                {/* Regular Contact */}
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">General Inquiries</p>
                    <a href="tel:+6566989118" className="text-blue-600 hover:text-blue-700">
                      +65 6698 9118
                    </a>
                    <p className="text-sm text-gray-600">Mon-Fri 9AM-6PM, Sat 9AM-1PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Mail className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email Us</p>
                    <a href="mailto:service@unitedpest.com.sg" className="text-green-600 hover:text-green-700">
                      service@unitedpest.com.sg
                    </a>
                    <p className="text-sm text-gray-600">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <MapPin className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Office Location</p>
                    <p className="text-gray-600">794 Upper Serangoon Rd<br />Singapore 534666</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Clock className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Business Hours</p>
                    <p className="text-gray-600">
                      Mon-Fri: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Emergency Only
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Service Areas</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <div>• Central Singapore</div>
                  <div>• East Singapore</div>
                  <div>• North Singapore</div>
                  <div>• West Singapore</div>
                  <div>• Northeast Singapore</div>
                  <div>• All HDB Estates</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Request Free Quote</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="+65 XXXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="ant">Ant Control</option>
                      <option value="cockroach">Cockroach Control</option>
                      <option value="rodent">Rodent Control</option>
                      <option value="termite">Termite Control</option>
                      <option value="bed-bug">Bed Bug Control</option>
                      <option value="mosquito">Mosquito Control</option>
                      <option value="snake">Snake Removal</option>
                      <option value="bird">Bird Control</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                      Urgency Level
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="normal">Normal (Within 48 hours)</option>
                      <option value="urgent">Urgent (Within 24 hours)</option>
                      <option value="emergency">Emergency (Within 2 hours)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Describe Your Pest Problem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Please describe the pest issue, location, and any other relevant details..."
                  ></textarea>
                </div>

                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Free inspection and quote • No obligation • Response within 24 hours</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Request'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;