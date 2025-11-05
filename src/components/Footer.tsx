import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const handleNavClick = (pageKey: string) => {
    setCurrentPage(pageKey);

    // Enhanced scroll to top - multiple methods for reliability
    window.scrollTo(0, 0);
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Additional timeout to ensure scroll happens
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 10);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="leading-tight mb-4">
                <span className="text-2xl font-bold text-gray-300">United</span>{' '}
                <span className="text-2xl font-bold text-orange-500">Pest</span>
                <br />
                <span className="text-lg font-bold text-gray-400">& Vector Management Pte Ltd</span>
              </h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional pest control services across Singapore. Licensed and committed
              to keeping you safe and pest-free with effective, reliable solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/unitedpests/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-400 hover:via-pink-400 hover:to-orange-400 p-2 rounded-lg transition-all duration-200 transform hover:scale-110"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.facebook.com/Unitedpestsg/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-500 p-2 rounded-lg transition-all duration-200 transform hover:scale-110"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.tiktok.com/@unitedpests"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-gray-700 p-2 rounded-lg transition-all duration-200 transform hover:scale-110"
              >
                <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href="https://wa.me/6592222278"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-400 p-2 rounded-lg transition-all duration-200 transform hover:scale-110"
              >
                <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', key: 'home' },
                { name: 'Our Approach', key: 'approach' },
                { name: 'Our Services', key: 'services' },
                { name: 'Testimonials', key: 'testimonials' },
                { name: 'Contact Us', key: 'contact' }
              ].map((item) => (
                <li key={item.key}>
                  <button
                    onClick={() => handleNavClick(item.key)}
                    className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-orange-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">Main Line</p>
                  <a href="tel:+66989118" className="text-white font-semibold hover:text-orange-400">
                    +65 6698 9118
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-orange-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">24*7 Hotline</p>
                  <a href="tel:+6592222278" className="text-white font-semibold hover:text-orange-400">
                    +65 9222 2278
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-orange-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">Email</p>
                  <a href="mailto:services@unitedpest.com.sg" className="text-white font-semibold hover:text-orange-400">
                    services@unitedpest.com.sg
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Locations</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">Main Office</p>
                  <p className="text-white text-sm">794 Upper Serangoon Rd<br />Singapore 534666</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">Operations Hub</p>
                  <p className="text-white text-sm">7030 Ang Mo Kio Ave 5<br />#03-43, Northstar@AMK<br />Singapore 569880</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <p>&copy; 2025 United Pest & Vector Management Pte Ltd. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;