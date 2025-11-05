import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import FloatingActions from './components/FloatingActions';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import OurApproach from './pages/OurApproach';
import OurServices from './pages/OurServices';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import AIPestAdvisor from './components/AIPestAdvisor';
import LiveChat from './components/LiveChat';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Enhanced scroll to top function
  const scrollToTop = () => {
    // Multiple methods to ensure scrolling to top
    window.scrollTo(0, 0);
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  // Scroll to top whenever the page changes
  useEffect(() => {
    scrollToTop();
    
    // Additional timeout to ensure scroll happens after render
    const timeoutId = setTimeout(() => {
      scrollToTop();
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Homepage />;
      case 'approach':
        return <OurApproach />;
      case 'services':
        return <OurServices />;
      case 'testimonials':
        return <Testimonials />;
      case 'contact':
        return <Contact />;
      default:
        return <Homepage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer setCurrentPage={setCurrentPage} />
      <FloatingActions />
      <AIPestAdvisor />
      <LiveChat />
    </div>
  );
}

export default App;