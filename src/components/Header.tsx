import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', key: 'home' },
    { name: 'Our Approach', key: 'approach' },
    { name: 'Our Services', key: 'services' },
    { name: 'Testimonials', key: 'testimonials' },
    { name: 'Contact Us', key: 'contact' },
  ];

  const handleNavClick = (pageKey: string) => {
    setCurrentPage(pageKey);
    setIsMenuOpen(false);
    
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
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="w-full px-6 py-4">
        <div className="flex items-center justify-between w-full">
          {/* Logo - Left Edge */}
          <div 
            className="flex items-center space-x-3 cursor-pointer flex-shrink-0"
            onClick={() => handleNavClick('home')}
          >
            <img
              src="/10694412_797512036962044_1570787189881874716_o.jpg"
              alt="United Pest Logo"
              className="h-12 w-auto"
            />
            <div>
              <h1 className="leading-tight">
                <span className="text-lg font-bold text-gray-600">United</span>{' '}
                <span className="text-lg font-bold text-orange-600">Pest</span>
                <br />
                <span className="text-sm font-bold text-gray-500">& Vector Management Pte Ltd</span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            {menuItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.key)}
                className={`font-medium transition-colors duration-200 whitespace-nowrap ${
                  currentPage === item.key 
                    ? 'text-orange-600 border-b-2 border-orange-600 pb-1' 
                    : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Contact Info, Call Button & Menu Button - Right Edge */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            {/* Contact Info & Call Button - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="text-right">
                <p className="text-xs text-gray-600">24/7 Hotline</p>
                <p className="text-sm font-bold text-orange-600">+65 9222 2278</p>
              </div>
              <a
                href="tel:+6566989118"
                className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-4 py-2 rounded-lg hover:from-orange-700 hover:to-orange-800 transition-all duration-200 flex items-center space-x-2 whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2 mt-4">
              {menuItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.key)}
                  className={`px-4 py-2 text-left rounded-lg transition-colors ${
                    currentPage === item.key 
                      ? 'bg-orange-50 text-orange-600 font-medium' 
                      : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="px-4 py-4 border-t border-gray-200 mt-2">
                <p className="text-sm text-gray-600 mb-2">24/7 Hotline</p>
                <a
                  href="tel:+6592222278"
                  className="flex items-center space-x-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors mb-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>+65 9222 2278</span>
                </a>
                <a
                  href="tel:+6566989118"
                  className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Main Line</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;