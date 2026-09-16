import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { WhatsAppFloating } from './components/common/WhatsAppFloating';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const getInitialPage = (): PageRoute => {
    // Check hash first
    const hash = window.location.hash.replace('#/', '').replace('#', '').trim();
    if (['about', 'services', 'programs', 'case-studies', 'testimonials', 'insights', 'contact'].includes(hash)) {
      return hash as PageRoute;
    }
    // Check pathname
    const path = window.location.pathname.replace(/^\/+/, '').split('/')[0];
    if (['about', 'services', 'programs', 'case-studies', 'testimonials', 'insights', 'contact'].includes(path)) {
      return path as PageRoute;
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageRoute>(getInitialPage);

  // Sync route on popstate / hashchange
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPage(getInitialPage());
    };
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    if (page === 'home') {
      window.location.hash = '/';
    } else {
      window.location.hash = `/${page}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} />;
      case 'programs':
        return <ProgramsPage onNavigate={handleNavigate} />;
      case 'case-studies':
        return <CaseStudiesPage onNavigate={handleNavigate} />;
      case 'testimonials':
        return <TestimonialsPage onNavigate={handleNavigate} />;
      case 'insights':
        return <InsightsPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      case 'home':
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F5F0] flex flex-col selection:bg-[#C9A96E]/30 selection:text-[#E4C98D]">
      {/* Global Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow">
        {renderPage()}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Persistent WhatsApp Floating Button */}
      <WhatsAppFloating />
    </div>
  );
}
