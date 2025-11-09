import React, { useState } from 'react';
import { Phone, Mail, User, Send, Clock } from 'lucide-react';

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
Reference ID: UP${Date.now().toString().slice(-6)}
      `;

      // Open email client with pre-filled content
      const mailtoLink = `mailto:service@unitedpest.com.sg?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;

      alert(`Thank you ${formData.name}! Your inquiry has been prepared for email. Please send the email that just opened in your email client. We'll respond within 24 hours.`);

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        urgency: 'normal'
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try calling us directly at +65 6698 9118.');
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

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-red-100 text-red-600 rounded-full px-4 py-2 mb-6">
              <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386" />
              </svg>
              <span className="text-sm font-medium">Get In Touch</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to solve your pest problem? Get in touch with us for professional
              pest control services across Singapore.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Professional Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Need Assistance? Contact Our Team Below
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get in touch with our professional team for immediate assistance with your pest control needs.
            </p>
          </div>

          {/* Contact Details Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Speak to Us */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Speak to Us
              </h3>
              <a
                href="tel:+6566989118"
                className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors block mb-2"
              >
                +65 6698 9118
              </a>
              <p className="text-sm text-gray-600">
                Mon-Fri: 9AM-6PM<br />
                Sat: 9AM-1PM
              </p>
            </div>

            {/* 24/7 Hotline */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                24/7 Hotline
              </h3>
              <a
                href="tel:+6592222278"
                className="text-2xl font-bold text-red-600 hover:text-red-700 transition-colors block mb-2"
              >
                +65 9222 2278
              </a>
              <p className="text-sm text-gray-600">
                Emergency Service<br />
                Available 24/7
              </p>
            </div>

            {/* General Enquiries */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                General Enquiries
              </h3>
              <a
                href="mailto:service@unitedpest.com.sg"
                className="text-lg font-bold text-green-600 hover:text-green-700 transition-colors block mb-2 break-all"
              >
                service@unitedpest.com.sg
              </a>
              <p className="text-sm text-gray-600">
                Response within<br />
                24 hours
              </p>
            </div>

            {/* Business-Related Inquiries */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
                <User className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Business-Related Inquiries
              </h3>
              <div className="mb-2">
                <p className="text-lg font-bold text-purple-600">Collin Chan</p>
                <p className="text-sm font-medium text-gray-700">Business Manager</p>
              </div>
              <a
                href="mailto:collin@unitedpest.com.sg"
                className="text-sm font-bold text-purple-600 hover:text-purple-700 transition-colors block break-all"
              >
                collin@unitedpest.com.sg
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Request Free Quote</h3>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-blue-800">
                  <strong>📧 How it works:</strong> Fill out the form below and click "Send Request".
                  This will open your email client with all the details pre-filled. Just send the email and we'll respond within 24 hours!
                </p>
              </div>

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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Please describe the pest issue, location, and any other relevant details..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? 'Preparing Email...' : 'Send Request'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;