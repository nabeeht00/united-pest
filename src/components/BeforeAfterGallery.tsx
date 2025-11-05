import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye, X } from 'lucide-react';

const BeforeAfterGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleries = [
    {
      title: 'Termite Damage Repair',
      location: 'Orchard Road Condo',
      before: 'https://images.pexels.com/photos/8297031/pexels-photo-8297031.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      after: 'https://images.pexels.com/photos/6195039/pexels-photo-6195039.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Complete termite elimination and wood restoration'
    },
    {
      title: 'Cockroach Infestation',
      location: 'Marina Bay Office',
      before: 'https://images.pexels.com/photos/6195070/pexels-photo-6195070.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      after: 'https://images.pexels.com/photos/8366834/pexels-photo-8366834.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Professional cockroach control in commercial kitchen'
    },
    {
      title: 'Rodent Control',
      location: 'Tampines HDB',
      before: 'https://images.pexels.com/photos/6195126/pexels-photo-6195126.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      after: 'https://images.pexels.com/photos/3990842/pexels-photo-3990842.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Complete rodent elimination and entry point sealing'
    },
    {
      title: 'Ant Colony Removal',
      location: 'Jurong West Home',
      before: 'https://images.pexels.com/photos/12944665/pexels-photo-12944665.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      after: 'https://images.pexels.com/photos/6195039/pexels-photo-6195039.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Targeted ant control with long-term prevention'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleries.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleries.length) % galleries.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-600 rounded-full px-4 py-2 mb-4">
            <Eye className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Our Work</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Before & After Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the dramatic difference our professional pest control services make. 
            Real results from actual customer properties across Singapore.
          </p>
        </div>

        {/* Gallery Slider */}
        <div className="relative max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Before Image */}
              <div className="relative">
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                  Before
                </div>
                <img
                  src={galleries[currentSlide].before}
                  alt="Before treatment"
                  className="w-full h-64 md:h-80 object-cover cursor-pointer"
                  onClick={() => setSelectedImage(0)}
                />
              </div>

              {/* After Image */}
              <div className="relative">
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                  After
                </div>
                <img
                  src={galleries[currentSlide].after}
                  alt="After treatment"
                  className="w-full h-64 md:h-80 object-cover cursor-pointer"
                  onClick={() => setSelectedImage(1)}
                />
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {galleries[currentSlide].title}
              </h3>
              <p className="text-red-600 font-medium mb-3">
                {galleries[currentSlide].location}
              </p>
              <p className="text-gray-600">
                {galleries[currentSlide].description}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {galleries.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-red-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {galleries.map((gallery, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => setCurrentSlide(index)}
            >
              <div className="relative">
                <img
                  src={gallery.after}
                  alt={gallery.title}
                  className="w-full h-32 object-cover"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors"></div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  {gallery.title}
                </h4>
                <p className="text-xs text-gray-600">{gallery.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for full-size images */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage === 0 ? galleries[currentSlide].before : galleries[currentSlide].after}
                alt="Full size view"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                <span className="text-sm font-medium">
                  {selectedImage === 0 ? 'Before' : 'After'} - {galleries[currentSlide].title}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BeforeAfterGallery;