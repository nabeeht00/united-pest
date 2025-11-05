import React, { useState } from 'react';
import { Star, Send, CheckCircle, MessageSquare } from 'lucide-react';

const CustomerReviewForm = () => {
  const [reviewData, setReviewData] = useState({
    name: '',
    email: '',
    location: '',
    service: '',
    rating: 0,
    title: '',
    review: '',
    recommend: true
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoveredRating, setHoveredRating] = useState(0);

  const services = [
    'Ant Control',
    'Cockroach Control',
    'Rodent Control',
    'Termite Control',
    'Bed Bug Control',
    'Mosquito Control',
    'Snake Removal',
    'Bird Control',
    'General Pest Control'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Review submitted:', reviewData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setReviewData({
        name: '',
        email: '',
        location: '',
        service: '',
        rating: 0,
        title: '',
        review: '',
        recommend: true
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setReviewData({
      ...reviewData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  const handleRatingClick = (rating: number) => {
    setReviewData({ ...reviewData, rating });
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
                Thank You for Your Review!
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Your feedback helps us improve our services and helps other customers make informed decisions.
              </p>
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(reviewData.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-sm text-gray-500">
                Your review will be published after moderation.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-yellow-100 text-yellow-600 rounded-full px-4 py-2 mb-4">
            <MessageSquare className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Share Your Experience</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Leave a Review
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help other customers by sharing your experience with our pest control services. 
            Your feedback is valuable to us and the community.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={reviewData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={reviewData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={reviewData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="e.g., Orchard Road, Tampines"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Received *
                  </label>
                  <select
                    name="service"
                    required
                    value={reviewData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    <option value="">Select service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Rating */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Overall Rating *
                </label>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRatingClick(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`w-8 h-8 transition-colors ${
                          star <= (hoveredRating || reviewData.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-4 text-sm text-gray-600">
                    {reviewData.rating > 0 && (
                      <>
                        {reviewData.rating} star{reviewData.rating !== 1 ? 's' : ''}
                        {reviewData.rating === 5 && ' - Excellent!'}
                        {reviewData.rating === 4 && ' - Very Good'}
                        {reviewData.rating === 3 && ' - Good'}
                        {reviewData.rating === 2 && ' - Fair'}
                        {reviewData.rating === 1 && ' - Poor'}
                      </>
                    )}
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Review Title *
                </label>
                <input
                  type="text"
                  name="title"
                  required
                  value={reviewData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Summarize your experience in a few words"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Review *
                </label>
                <textarea
                  name="review"
                  required
                  rows={5}
                  value={reviewData.review}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
                  placeholder="Share details about your experience with our service. What did you like? How was the technician? Would you recommend us?"
                ></textarea>
              </div>

              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="recommend"
                  name="recommend"
                  checked={reviewData.recommend}
                  onChange={handleChange}
                  className="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
                />
                <label htmlFor="recommend" className="text-sm text-gray-700">
                  I would recommend United Pest to others
                </label>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> Your review will be published on our website after moderation. 
                  We may contact you to verify your review. Your email will not be published.
                </p>
              </div>

              <button
                type="submit"
                disabled={reviewData.rating === 0}
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-4 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Submit Review</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviewForm;